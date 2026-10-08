// Render.mjs - the diagram proof-pipeline's build-time renderer.
//
// Renders every Mermaid source in this directory (<Id>.mmd) into a vendored
// SVG (<Id>.svg, committed next to the source), so the site ships pre-rendered,
// offline diagrams with NO runtime Mermaid. Run with:
//
//     pnpm run Diagrams   (in Site/)
//
// The renderer is headless but REAL: Mermaid's layout depends on actual text
// measurement, so the sources are rendered in a Chromium browser (Puppeteer
// driving the system's Brave install by default, or the bundled Chrome; set
// DSH_BROWSER to override the executable path). The local Mermaid ESM build is
// loaded into the page from node_modules via a file:// import - no network.
//
// The theme mirrors the site's tokens (Global.css): the Harness Blue accent,
// the #F8FAFC trays, the #64748B outline ink and the Inter stack.
//
// Qualification law: a diagram may only encode what its page's brief already
// states (the may / only / never qualifications, the numbered plans the briefs
// themselves declare). The renderer adds no semantics - it draws the source.

import { readdir, readFile, writeFile, unlink, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const Here = dirname(fileURLToPath(import.meta.url));

const BrowserPath =
	process.env["DSH_BROWSER"] ?? "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

const mermaidUrl = pathToFileURL(
	join(Here, "../../../node_modules/mermaid/dist/mermaid.esm.min.mjs"),
).href;

const PageHtml = `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<style>
			body { margin: 0; background: #ffffff; font-family: Inter, sans-serif; }
			#stage { display: inline-block; }
		</style>
	</head>
	<body>
		<div id="stage"></div>
		<script type="module">
			import mermaid from ${JSON.stringify(mermaidUrl)};
			mermaid.initialize({
				startOnLoad: false,
				securityLevel: "strict",
				// Plain SVG <text> labels (not HTML-in-foreignObject): every
				// context renders them - inline HTML, <img>, strict parsers.
				// With htmlLabels the labels live inside <foreignObject> divs,
				// which many SVG consumers drop or fail to render. Both the
				// top-level and the flowchart key must be false: the flowchart
				// renderer reads the top-level flag, the CSS builder the
				// flowchart one.
				htmlLabels: false,
				theme: "base",
				themeVariables: {
					fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
					fontSize: "14px",
					primaryColor: "#f0f4ff",
					primaryBorderColor: "#0052ff",
					primaryTextColor: "#0b0f19",
					secondaryColor: "#f8fafc",
					secondaryBorderColor: "#64748b",
					secondaryTextColor: "#0b0f19",
					tertiaryColor: "#ffffff",
					tertiaryBorderColor: "#e2e8f0",
					lineColor: "#64748b",
					textColor: "#0b0f19",
					mainBkg: "#f0f4ff",
					nodeBorder: "#0052ff",
					clusterBkg: "#f8fafc",
					clusterBorder: "#e2e8f0",
					edgeLabelBackground: "#ffffff",
				},
				// (kept false in sync with the top-level flag - see above)
				flowchart: { htmlLabels: false, curve: "basis" },
			});
			window.__render = async (Id, Text) => {
				const Stage = document.getElementById("stage");
				Stage.innerHTML = "";
				const { svg } = await mermaid.render(\`dsh-diagram-\${Id}\`, Text);
				// Mermaid's HTML labels emit void \`<br>\` tags, which are invalid
				// XML (and break strict SVG parsers). Self-close them.
				const Fixed = svg.replace(/<br\\s*>/g, "<br/>");
				// Mermaid caps the diagram at its natural pixel size with an
				// inline \`style="max-width: ...px;"\`. That cap would keep the
				// rendered diagram from spanning its container's width, so it
				// is dropped here: the vendored SVG carries width="100%" plus
				// the viewBox, and the site's CSS makes it a fluid full-width
				// band at every viewport size.
				return Fixed.replace(/(<svg\\b[^>]*?)\\s+style="max-width:[^"]*"/, "$1");
			};
			window.__ready = true;
		</script>
	</body>
</html>`;

const Sources = (await readdir(Here)).filter((Name) => Name.endsWith(".mmd"));
if (Sources.length === 0) {
	console.error("No .mmd sources found.");
	process.exit(1);
}

// The label-presence law: every label in a source must appear in the rendered
// SVG's text content. Mermaid renders labels as word-wrapped <tspan> runs, so
// the check compares whitespace-free forms (line wraps may drop joining
// spaces). A render that loses text must fail the pipeline, never ship.
const Unescape = (Text) =>
	Text.replace(
		/&gt;|&lt;|&amp;|&quot;|&#39;/g,
		(Entity) =>
			({ "&gt;": ">", "&lt;": "<", "&amp;": "&", "&quot;": '"', "&#39;": "'" })[Entity],
	);
const Squash = (Text) => Unescape(Text).replace(/\s+/g, "");
const SourceLabels = (Text) => {
	const Labels = [];
	for (const Match of Text.matchAll(
		/\[\s*"((?:[^"\\]|\\.)*)"\s*\]|\{\s*"((?:[^"\\]|\\.)*)"\s*\}/g,
	)) {
		Labels.push(Match[1] ?? Match[2]);
	}
	for (const Match of Text.matchAll(/(?:--|-\.-)\s+"((?:[^"\\]|\\.)*)"\s+(?:-->|\.->)/g)) {
		Labels.push(Match[1]);
	}
	for (const Match of Text.matchAll(/--\s*\|\s*"((?:[^"\\]|\\.)*)"\s*\|\s*-->/g)) {
		Labels.push(Match[1]);
	}
	return Labels;
};
const SvgHasLabels = (Svg, Labels) => {
	let Text = "";
	for (const Match of Svg.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)) {
		for (const Word of Match[1].matchAll(/<tspan[^>]*>([^<]*)<\/tspan>/g)) {
			Text += Word[1];
		}
	}
	const Squashed = Squash(Text);
	for (const Label of Labels) {
		for (const Line of Label.split(/<br\s*\/?>/)) {
			const Want = Squash(Line);
			if (Want && !Squashed.includes(Want)) return Want;
		}
	}
	return null;
};

const HostPath = join(tmpdir(), "dsh-diagram-render.html");

const Browser = await puppeteer.launch({
	headless: true,
	executablePath: BrowserPath,
	args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});
try {
	const Page = await Browser.newPage();
	Page.on("pageerror", (Error) => console.error(`page error: ${Error.message}`));
	Page.on("console", (Message) => {
		if (Message.type() === "error") console.error(`page console: ${Message.text()}`);
	});
	await Page.setViewport({ width: 1600, height: 1200 });
	// The page must be served from a file:// URL: a module script on an
	// about:blank origin (setContent) is not allowed to import local files.
	await writeFile(HostPath, PageHtml, "utf8");
	await Page.goto(pathToFileURL(HostPath).href, { waitUntil: "load" });
	await Page.waitForFunction("window.__ready === true", { timeout: 30000 });

	let Failed = 0;
	for (const Source of Sources) {
		const Id = Source.replace(/\.mmd$/, "");
		const SvgPath = join(Here, `${Id}.svg`);
		try {
			const Text = await readFile(join(Here, Source), "utf8");
			const Svg = await Page.evaluate(
				(DiagramId, DiagramText) => window.__render(DiagramId, DiagramText),
				Id,
				Text,
			);
			// Drop any stale artifact, then write the vendored SVG.
			await unlink(SvgPath).catch(() => {});
			await writeFile(SvgPath, `${Svg.trim()}\n`, "utf8");
			// The label-presence law, enforced at render time.
			const Missing = SvgHasLabels(Svg, SourceLabels(Text));
			if (Missing !== null) {
				Failed += 1;
				console.error(`MISSING TEXT ${Id}: "${Missing}" not in the SVG`);
				await unlink(SvgPath).catch(() => {});
				continue;
			}
			console.log(`rendered ${Id}.svg (${Svg.length} bytes) - all labels present`);
		} catch (Error) {
			Failed += 1;
			console.error(`FAILED ${Id}: ${Error.message}`);
			// A failed source must not leave a stale SVG claiming implementation.
			await unlink(SvgPath).catch(() => {});
		}
	}
	if (Failed > 0) {
		console.error(`${Failed} diagram(s) failed - fix the sources and re-run.`);
		process.exitCode = 1;
	} else {
		console.log(`${Sources.length} diagram(s) rendered.`);
	}
} finally {
	await Browser.close();
	await rm(HostPath, { force: true }).catch(() => {});
}
