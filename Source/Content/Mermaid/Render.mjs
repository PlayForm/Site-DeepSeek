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
import { dirname, join, tmpdir } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const Here = dirname(fileURLToPath(import.meta.url));

const BrowserPath =
	process.env["DSH_BROWSER"] ??
	"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

const mermaidUrl = pathToFileURL(
	join(Here, "node_modules/mermaid/dist/mermaid.esm.min.mjs"),
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
				flowchart: { htmlLabels: true, curve: "basis" },
			});
			window.__render = async (Id, Text) => {
				const Stage = document.getElementById("stage");
				Stage.innerHTML = "";
				const { svg } = await mermaid.render(\`dsh-diagram-\${Id}\`, Text);
				// Mermaid's HTML labels emit void \`<br>\` tags, which are invalid
				// XML (and break strict SVG parsers). Self-close them.
				return svg.replace(/<br\\s*>/g, "<br/>");
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

const Browser = await puppeteer.launch({
	headless: true,
	executablePath: BrowserPath,
	args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});
try {
	const Page = await Browser.newPage();
	await Page.setViewport({ width: 1600, height: 1200 });
	await Page.setContent(PageHtml, { waitUntil: "load" });
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
			console.log(`rendered ${Id}.svg (${Svg.length} bytes)`);
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
}
