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

			// THE SPACE LAW. With htmlLabels:false, Mermaid word-wraps every
			// label into per-word <tspan> runs and writes each word after the
			// first as " " + word, so the words stay separated ONLY through
			// those leading spaces. But the SVG whitespace rules treat every
			// <tspan> as its own chunk: the leading (and trailing) space of a
			// chunk is collapsed away when the text renders. The joining
			// spaces therefore vanish from the rendered output - labels read
			// "Hook@DSH@Core", "Governancehelpers" - AND from Mermaid's own
			// width measurement (getComputedTextLength collapses the same
			// way), so every label box is sized too narrow and edge-adjacent
			// labels spill past the viewBox, clipping their first characters.
			//
			// Fix: rewrite the joining space to a no-break space (U+00A0) at
			// the moment Mermaid writes tspan text. NBSP is not collapsible
			// whitespace, so it survives chunk boundaries in every SVG
			// consumer, it measures at full space width (layout stays in sync
			// with what renders), and it reads as a space when extracted or
			// copied. Applied only to Mermaid's leaf label tspans that begin
			// with a space - the .mmd sources stay plain ASCII.
			const NoBreakSpace = "\u00A0";
			const TextContent = Object.getOwnPropertyDescriptor(
				Node.prototype,
				"textContent",
			);
			Object.defineProperty(Node.prototype, "textContent", {
				configurable: true,
				get() {
					return TextContent.get.call(this);
				},
				set(Value) {
					if (
						typeof Value === "string" &&
						Value.startsWith(" ") &&
						this.namespaceURI === "http://www.w3.org/2000/svg" &&
						this.localName === "tspan"
					) {
						Value = NoBreakSpace + Value.slice(1);
					}
					TextContent.set.call(this, Value);
				},
			});

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
				// Inject the render so the labels can be measured AS LAID OUT:
				// the containment law needs real geometry, not string math.
				Stage.innerHTML = svg;
				const Svg = Stage.querySelector("svg");
				if (!Svg) throw new Error("mermaid rendered no <svg>");
				const View = Svg.viewBox.baseVal;
				const Boxes = [...Svg.querySelectorAll("text")]
					.map((T) => T.getBBox())
					.filter((B) => B.width > 0 || B.height > 0);
				// The layout reserves the measured label widths, so with the
				// space law in place every label fits inside the viewBox. If a
				// label still pokes out (measurement drift), grow the viewBox
				// to cover every label plus a small margin - a label's first
				// or last character must never be cropped by the viewport.
				const Pad = 2;
				const MinX = Math.min(View.x, ...Boxes.map((B) => B.x));
				const MinY = Math.min(View.y, ...Boxes.map((B) => B.y));
				const MaxX = Math.max(View.x + View.width, ...Boxes.map((B) => B.x + B.width));
				const MaxY = Math.max(View.y + View.height, ...Boxes.map((B) => B.y + B.height));
				if (
					MinX < View.x - 0.01 ||
					MinY < View.y - 0.01 ||
					MaxX > View.x + View.width + 0.01 ||
					MaxY > View.y + View.height + 0.01
				) {
					Svg.setAttribute(
						"viewBox",
						\`\${MinX - Pad} \${MinY - Pad} \${MaxX - MinX + 2 * Pad} \${MaxY - MinY + 2 * Pad}\`,
					);
				}
				// The containment law, enforced on the FINAL geometry: every
				// label's bounding box must sit fully inside the viewBox.
				const Final = Svg.viewBox.baseVal;
				for (const T of Svg.querySelectorAll("text")) {
					const B = T.getBBox();
					if (B.width === 0 && B.height === 0) continue;
					const Outside = Math.max(
						Final.x - B.x,
						B.x + B.width - (Final.x + Final.width),
						Final.y - B.y,
						B.y + B.height - (Final.y + Final.height),
					);
					if (Outside > 0.5) {
						throw new Error(
							\`label "\${(T.textContent ?? "").trim()}" sits \${Outside.toFixed(2)}px outside the viewBox\`,
						);
					}
				}
				const Out = new XMLSerializer().serializeToString(Svg);
				Stage.innerHTML = "";
				// Mermaid's HTML labels emit void \`<br>\` tags, which are invalid
				// XML (and break strict SVG parsers). Self-close them.
				const Fixed = Out.replace(/<br\\s*>/g, "<br/>");
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

// The label-presence law, space-exact: every label in a source must appear
// in the rendered SVG's text content WITH its separators. Mermaid renders
// labels as word-wrapped <tspan> runs; the joining spaces live in the runs
// (as U+00A0 - see the Space Law in the page), so the check normalizes those
// back to plain spaces and compares the single-space form: "Hook @ DSH @
// Core", never "Hook@DSH@Core". A line wrap is allowed only as an actual
// line break (wrapped lines are joined with a space, never glued); a label
// that appears only in the whitespace-free form has had its spaces dropped
// and fails the pipeline. A render that loses text or spaces must fail,
// never ship.
const Unescape = (Text) =>
	Text.replace(
		/&gt;|&lt;|&amp;|&quot;|&apos;|&#39;|&nbsp;|&#160;/g,
		(Entity) =>
			({
				"&gt;": ">",
				"&lt;": "<",
				"&amp;": "&",
				"&quot;": '"',
				"&apos;": "'",
				"&#39;": "'",
			})[Entity] ?? " ",
	);
// The comparison form: entities decoded, no-break spaces read as spaces,
// all runs of whitespace collapsed to ONE space. Collapsing to a single
// space keeps the separators visible; only line breaks are free.
const Normalize = (Text) => Unescape(Text).replace(/\s+/g, " ").trim();
// The rendered text, line by line: one entry per Mermaid wrap line
// (text-outer-tspan), built from that line's word runs (text-inner-tspan).
// The word runs are nested INSIDE their outer tspan (not siblings of it),
// so a flat `class="text-(outer|inner)-tspan">...<\/tspan>` scan cannot
// see either tag - the outer opener would never match (its child is a
// tag, not text, so wrap lines glue together) and the inner opener would
// never close. Walk BOTH tag kinds by position instead: an outer opening
// starts a new line, the inner runs that follow inside it supply its
// words. Empty placeholder labels (unlabeled edges) contribute nothing.
const SvgLines = (Svg) => {
	const Lines = [];
	for (const TextMatch of Svg.matchAll(/<text[\s>][^>]*>([\s\S]*?)<\/text>/g)) {
		const Tokens = [];
		for (const Match of TextMatch[1].matchAll(
			/<tspan[^>]*class="text-inner-tspan"[^>]*>([^<]*)<\/tspan>/g,
		)) {
			Tokens.push({ At: Match.index, Outer: false, Text: Match[1] });
		}
		for (const Match of TextMatch[1].matchAll(
			/<tspan[^>]*class="text-outer-tspan"[^>]*>([^<]*)/g,
		)) {
			// Direct text after an outer opener only exists on plain
			// (non-nested) labels; nested labels capture an empty string
			// here because their first word is an inner tspan tag.
			Tokens.push({ At: Match.index, Outer: true, Text: Match[1] });
		}
		Tokens.sort((A, B) => A.At - B.At);
		let Line = "";
		for (const Token of Tokens) {
			if (Token.Outer) {
				if (Line) Lines.push(Line);
				Line = Token.Text.trim() === "" ? "" : Token.Text;
			} else {
				Line += Token.Text;
			}
		}
		if (Line) Lines.push(Line);
	}
	return Lines;
};
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
	const Lines = SvgLines(Svg);
	// The space-exact form: rendered lines joined with single spaces. A
	// label whose words got glued together (spaces dropped at the wrap) can
	// never match here.
	const Spaced = Normalize(Lines.join(" "));
	for (const Label of Labels) {
		for (const Line of Label.split(/<br\s*\/?>/)) {
			const Want = Normalize(Line);
			if (!Want) continue;
			if (Spaced.includes(Want)) continue;
			// Present only in the whitespace-free form? Then the spaces were
			// dropped - the exact defect this law forbids - so report it as
			// such rather than as missing text.
			const Squashed = Want.replace(/\s+/g, "");
			if (Squashed && Spaced.replace(/\s+/g, "").includes(Squashed)) {
				return `spaces dropped in "${Want}"`;
			}
			return `"${Want}" not in the SVG`;
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
				console.error(`MISSING TEXT ${Id}: ${Missing}`);
				await writeFile("/tmp/debug-"+Id+".svg", Svg, "utf8");
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
