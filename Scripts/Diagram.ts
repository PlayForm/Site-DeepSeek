// The diagram pipeline: render every Mermaid source in
// `Source/Content/Mermaid/` into a vendored SVG beside it, so the site ships
// pre-rendered diagrams and no runtime Mermaid.
//
//     pnpm Diagrams
//
// The renderer is headless but real: Mermaid's layout depends on measured text,
// so the sources render in a browser. The default executable is the system's
// Brave install; `DSH_BROWSER` overrides it. The local Mermaid build loads from
// `node_modules` over file://, so a render needs no network.
//
// Three laws hold, and a source that breaks one fails instead of shipping:
//
// 1. The space law. With `htmlLabels: false` Mermaid word-wraps every label
//    into per-word <tspan> runs and writes each word after the first with a
//    leading space. SVG whitespace rules collapse that leading space at a chunk
//    boundary, so the words glue together and the label measures too narrow.
//    The page rewrites the joining space to a no-break space as Mermaid writes
//    it; the .mmd sources stay ASCII.
// 2. The containment law. Every label box must sit inside the viewBox, so the
//    viewBox grows to cover the measured labels and a label that still pokes
//    out fails the render.
// 3. The label-presence law. Every label in the source must appear in the
//    rendered text with its separators, so a render that drops a word or its
//    spaces fails instead of shipping.

import { readdir, readFile, rm, unlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import puppeteer from "puppeteer-core";

const Here = dirname(fileURLToPath(import.meta.url));

// Two corpora: the site's own diagrams, and the family's flowcharts copied out
// of `Diagram/` at the repository root, one per package plus the overviews.
const Source = [join(Here, "..", "Source", "Content", "Mermaid"), join(Here, "..", "Source", "Content", "Flow")];

const BrowserPath =
	process.env["DSH_BROWSER"] ?? "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

const MermaidUrl = pathToFileURL(
	join(Here, "..", "node_modules", "mermaid", "dist", "mermaid.esm.min.mjs"),
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
			import mermaid from ${JSON.stringify(MermaidUrl)};

			// The space law, applied at the moment Mermaid writes tspan text.
			const NoBreakSpace = "\\u00A0";
			const TextContent = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");

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
				htmlLabels: false,
				theme: "base",
				themeVariables: {
					fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
					fontSize: "14px",
					primaryColor: "#f0f4ff",
					primaryBorderColor: "#0052ff",
					primaryTextColor: "#0b0f19",
					secondaryColor: "#f8fafc",
					secondaryBorderColor: "#616f84",
					secondaryTextColor: "#0b0f19",
					tertiaryColor: "#ffffff",
					tertiaryBorderColor: "#e2e8f0",
					lineColor: "#616f84",
					textColor: "#0b0f19",
					mainBkg: "#f0f4ff",
					nodeBorder: "#0052ff",
					clusterBkg: "#f8fafc",
					clusterBorder: "#e2e8f0",
					edgeLabelBackground: "#ffffff",
				},
				flowchart: {
					htmlLabels: false,
					curve: "basis",
					wrappingWidth: 200,
					look: "classic",
					theme: "base",
				},
			});

			window.__render = async (ID, Text) => {
				const Stage = document.getElementById("stage");

				Stage.innerHTML = "";

				const { svg } = await mermaid.render("dsh-diagram-" + ID, Text);

				Stage.innerHTML = svg;

				const SVG = Stage.querySelector("svg");

				if (!SVG) {
					throw new Error("mermaid rendered no <svg>");
				}

				const View = SVG.viewBox.baseVal;
				const Boxes = [...SVG.querySelectorAll("text")]
					.map((Node) => Node.getBBox())
					.filter((Box) => Box.width > 0 || Box.height > 0);

				// The containment law: grow the viewBox to cover every label.
				const Pad = 2;
				const MinX = Math.min(View.x, ...Boxes.map((Box) => Box.x));
				const MinY = Math.min(View.y, ...Boxes.map((Box) => Box.y));
				const MaxX = Math.max(View.x + View.width, ...Boxes.map((Box) => Box.x + Box.width));
				const MaxY = Math.max(View.y + View.height, ...Boxes.map((Box) => Box.y + Box.height));

				if (
					MinX < View.x - 0.01 ||
					MinY < View.y - 0.01 ||
					MaxX > View.x + View.width + 0.01 ||
					MaxY > View.y + View.height + 0.01
				) {
					SVG.setAttribute(
						"viewBox",
						(MinX - Pad) + " " + (MinY - Pad) + " " + (MaxX - MinX + 2 * Pad) + " " + (MaxY - MinY + 2 * Pad),
					);
				}

				const Final = SVG.viewBox.baseVal;

				for (const Node of SVG.querySelectorAll("text")) {
					const Box = Node.getBBox();

					if (Box.width === 0 && Box.height === 0) {
						continue;
					}

					const Outside = Math.max(
						Final.x - Box.x,
						Box.x + Box.width - (Final.x + Final.width),
						Final.y - Box.y,
						Box.y + Box.height - (Final.y + Final.height),
					);

					if (Outside > 0.5) {
						throw new Error(
							'label "' + (Node.textContent ?? "").trim() + '" sits ' + Outside.toFixed(2) + "px outside the viewBox",
						);
					}
				}

				const Out = new XMLSerializer().serializeToString(SVG);

				Stage.innerHTML = "";

				// Mermaid writes void <br> tags, which are invalid XML.
				const Fixed = Out.replace(/<br\\s*>/g, "<br/>");

				// Drop the natural-width cap so the diagram fills its container.
				return Fixed.replace(/(<svg\\b[^>]*?)\\s+style="max-width:[^"]*"/, "$1");
			};

			window.__ready = true;
		</script>
	</body>
</html>`;

function Unescape(Text: string): string {
	return Text.replace(
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
}

function Normalize(Text: string): string {
	return Unescape(Text).replace(/\s+/g, " ").trim();
}

// The rendered text, line by line: one entry per Mermaid wrap line, built from
// that line's word runs, which are nested inside the outer run.
function SvgLines(Svg: string): string[] {
	const Lines: string[] = [];

	for (const Text of Svg.matchAll(/<text[\s>][^>]*>([\s\S]*?)<\/text>/g)) {
		const Token: { At: number; Outer: boolean; Text: string }[] = [];

		for (const Match of Text[1].matchAll(
			/<tspan[^>]*class="text-inner-tspan[^"]*"[^>]*>([^<]*)<\/tspan>/g,
		)) {
			Token.push({ At: Match.index ?? 0, Outer: false, Text: Match[1] ?? "" });
		}

		for (const Match of Text[1].matchAll(
			/<tspan[^>]*class="text-outer-tspan[^"]*"[^>]*>([^<]*)/g,
		)) {
			Token.push({ At: Match.index ?? 0, Outer: true, Text: Match[1] ?? "" });
		}

		Token.sort((Left, Right) => Left.At - Right.At);

		let Line = "";

		for (const Entry of Token) {
			if (Entry.Outer) {
				if (Line) {
					Lines.push(Line);
				}

				Line = Entry.Text.trim() === "" ? "" : Entry.Text;
			} else {
				Line += Entry.Text;
			}
		}

		if (Line) {
			Lines.push(Line);
		}
	}

	return Lines;
}

function SourceLabel(Text: string): string[] {
	const Label: string[] = [];

	for (const Match of Text.matchAll(
		/\[\s*"((?:[^"\\]|\\.)*)"\s*\]|\{\s*"((?:[^"\\]|\\.)*)"\s*\}/g,
	)) {
		Label.push(Match[1] ?? Match[2] ?? "");
	}

	for (const Match of Text.matchAll(/(?:--|-\.-)\s+"((?:[^"\\]|\\.)*)"\s+(?:-->|\.->)/g)) {
		Label.push(Match[1] ?? "");
	}

	for (const Match of Text.matchAll(/--\s*\|\s*"((?:[^"\\]|\\.)*)"\s*\|\s*-->/g)) {
		Label.push(Match[1] ?? "");
	}

	return Label;
}

function MissingLabel(Svg: string, Label: string[]): string | null {
	const Spaced = Normalize(SvgLines(Svg).join(" "));

	for (const Entry of Label) {
		for (const Line of Entry.split(/<br\s*\/?>/)) {
			const Want = Normalize(Line);

			if (!Want || Spaced.includes(Want)) {
				continue;
			}

			const Squashed = Want.replace(/\s+/g, "");

			if (Squashed && Spaced.replace(/\s+/g, "").includes(Squashed)) {
				return `spaces dropped in "${Want}"`;
			}

			return `"${Want}" not in the SVG`;
		}
	}

	return null;
}

// Every source in every corpus, paired with the directory it lives in, so a
// rendered SVG lands beside its own `.mmd` rather than in one shared folder.
const Source2 = [];

for (const Directory of Source) {
	for (const Name of await readdir(Directory)) {
		if (Name.endsWith(".mmd")) Source2.push({ Directory, Name });
	}
}

if (Source2.length === 0) {
	console.error(`No .mmd sources in ${Source.join(", ")}.`);
	process.exit(1);
}

const Filter = process.env["DSH_DIAGRAMS"]
	? new Set(process.env["DSH_DIAGRAMS"].split(",").map((Name) => Name.trim()))
	: null;

const Selected = Filter
	? Source2.filter((Entry) => Filter.has(Entry.Name.replace(/\.mmd$/, "")))
	: Source2;

if (Filter && Selected.length === 0) {
	console.error(`No .mmd source matches DSH_DIAGRAMS="${process.env["DSH_DIAGRAMS"]}".`);
	process.exit(1);
}

const HostPath = join(tmpdir(), "dsh-diagram-render.html");

const Browser = await puppeteer.launch({
	headless: true,
	executablePath: BrowserPath,
	args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
});

try {
	const Page = await Browser.newPage();

	Page.on("pageerror", (Error) => console.error(`page error: ${Error.message}`));

	await Page.setViewport({ width: 1600, height: 1200 });
	await writeFile(HostPath, PageHtml, "utf8");
	await Page.goto(pathToFileURL(HostPath).href, { waitUntil: "load" });
	await Page.waitForFunction("window.__ready === true", { timeout: 30000 });

	let Failed = 0;

	for (const Entry of Selected) {
		const Id = Entry.Name.replace(/\.mmd$/, "");
		const SvgPath = join(Entry.Directory, `${Id}.svg`);

		try {
			const Text = await readFile(join(Entry.Directory, Entry.Name), "utf8");
			const Svg = (await Page.evaluate(
				(DiagramId, DiagramText) =>
					(
						globalThis as unknown as {
							__render: (Id: string, Text: string) => Promise<string>;
						}
					).__render(DiagramId, DiagramText),
				Id,
				Text,
			)) as string;

			await unlink(SvgPath).catch(() => {});
			await writeFile(SvgPath, `${Svg.trim()}\n`, "utf8");

			const Missing = MissingLabel(Svg, SourceLabel(Text));

			if (Missing !== null) {
				Failed += 1;
				console.error(`MISSING TEXT ${Id}: ${Missing}`);
				await unlink(SvgPath).catch(() => {});
				continue;
			}

			console.log(`rendered ${Id}.svg (${Svg.length} bytes) - all labels present`);
		} catch (Error) {
			Failed += 1;
			console.error(`FAILED ${Id}: ${(Error as Error).message}`);
			await unlink(SvgPath).catch(() => {});
		}
	}

	if (Failed > 0) {
		console.error(`${Failed} diagram(s) failed - fix the sources and re-run.`);
		process.exitCode = 1;
	} else {
		console.log(`${Selected.length} diagram(s) rendered.`);
	}
} finally {
	await Browser.close();
	await rm(HostPath, { force: true }).catch(() => {});
}
