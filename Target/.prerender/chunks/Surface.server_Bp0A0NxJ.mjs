import { _ as createComponent, a as Package, g as createAstro, o as Root } from "./Base_CT63gv6q.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";
// Source/Library/Difference.ts
function Compare(Before, After) {
	let Start = 0;
	while (Start < Before.length && Start < After.length && Before[Start] === After[Start]) Start += 1;
	let End = 0;
	while (End < Before.length - Start && End < After.length - Start && Before[Before.length - 1 - End] === After[After.length - 1 - End]) End += 1;
	const Prefix = Before.slice(0, Start);
	const Left = Before.slice(Start, Before.length - End);
	const Right = After.slice(Start, After.length - End);
	return {
		Prefix,
		Before: Left,
		After: Right,
		Suffix: Before.slice(Before.length - End),
		Changed: Left !== Right,
		Count: Math.max([...Left].length, [...Right].length)
	};
}
/** The code points of a string, written the way the READMEs write them. */
function Code(Text) {
	return [...Text].map((Character) => `U+${(Character.codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0")}`).join(" ");
}
// Source/Component/Difference.astro
createAstro("https://deepseek.playform.cloud");
var $$Difference = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Difference;
	const { Before, After } = Astro.props;
	const Diff = Compare(Before, After);
	return renderTemplate`${maybeRenderHead($$result)}<div class="difference"> <ol class="difference__list"> <li class="difference__row"> <span class="difference__label">Model</span> <span class="difference__text"> ${Diff.Prefix} <mark class="difference__mark">${Diff.Before}</mark> ${Diff.Suffix} </span> </li> <li class="difference__row"> <span class="difference__label">Transcript</span> <span class="difference__text"> ${Diff.Prefix} <mark class="difference__mark difference__mark--after">${Diff.After}</mark> ${Diff.Suffix} </span> </li> </ol> <p class="difference__verdict"> ${Diff.Changed ? Diff.Count <= 3 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Diff.Count} character changed: <code>${Code(Diff.Before)}</code> to&nbsp;
<code>${Code(Diff.After)}</code> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Diff.Count}&nbsp;character changed, from <code>${Diff.Before.length}</code> to${" "} <code>${Diff.After.length}</code>.
` })}` : "No change: the two texts are identical."} </p> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Difference.astro", void 0);
// Source/Library/Surface.server.ts
function TextOf(Node) {
	if (!Node) return "";
	if (Node.value !== void 0) return Node.value;
	return (Node.children ?? []).map(TextOf).join("");
}
function CodeOf(Node) {
	if (Node.type === "inlineCode" && Node.value !== void 0) return [Node.value];
	return (Node.children ?? []).flatMap(CodeOf);
}
function SectionOf(Tree) {
	const Children = Tree.children ?? [];
	const Start = Children.findIndex((Child) => Child.type === "heading" && Child.depth === 2 && /surface/i.test(TextOf(Child)));
	if (Start < 0) return [];
	const Body = [];
	for (const Child of Children.slice(Start + 1)) {
		if (Child.type === "heading" && (Child.depth ?? 7) <= 2) break;
		Body.push(Child);
	}
	return Body;
}
function FromTable(Table) {
	return (Table.children ?? []).filter((Child) => Child.type === "tableRow").slice(1).map((Row) => {
		const Cell = (Row.children ?? []).map((Entry) => TextOf(Entry).replace(/\s+/g, " ").trim());
		return {
			Kind: Cell[0] ?? "",
			Name: Cell[1] ?? "",
			What: Cell[2] ?? ""
		};
	}).filter((Entry) => Entry.Kind !== "" || Entry.Name !== "");
}
function FromList(List) {
	return (List.children ?? []).filter((Child) => Child.type === "listItem").map((Item) => {
		const Text = (Item.children ?? []).filter((Child) => Child.type === "paragraph").map(TextOf).join(" ").replace(/\s+/g, " ").trim();
		const Name = CodeOf(Item)[0] ?? Text.split(" ").slice(1, 3).join(" ");
		const Kind = /\b(listener|service|tool|config|command)\b/i.exec(Text)?.[1]?.toLowerCase();
		const Escape = Name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		return {
			Kind: Kind ?? "",
			Name,
			What: Text.replace(/^The\s+/, "").replace(new RegExp(`^${Escape}[\\s:,-]*`, "i"), "").replace(/^\s*(waterfall\s+)?(listener|service|tool|config|command)\b[:\s-]*/i, "").replace(/^[\s:,-]+|[\s:,-]+$/g, "")
		};
	}).filter((Entry) => Entry.Kind !== "" && Entry.Name !== "");
}
function SurfaceOf(Package) {
	const Path = join(Root, Package.Directory, "README.md");
	if (!existsSync(Path)) return [];
	const Tree = fromMarkdown(readFileSync(Path, "utf8"), {
		extensions: [gfm()],
		mdastExtensions: [gfmFromMarkdown()]
	});
	for (const Child of SectionOf(Tree)) {
		if (Child.type === "table") {
			const Surface = FromTable(Child);
			if (Surface.length > 0) return Surface;
		}
		if (Child.type === "list") {
			const Surface = FromList(Child);
			if (Surface.length > 0) return Surface;
		}
	}
	return [];
}
function LoadSurface() {
	const Roster = {};
	for (const Entry of Package) {
		const Surface = SurfaceOf(Entry);
		if (Surface.length > 0) Roster[Entry.Slug] = Surface;
	}
	return Roster;
}
var Surface = LoadSurface();
function SurfaceFor(Slug) {
	return Surface[Slug] ?? Surface[Slug.replace(/^ets-/, "")] ?? [];
}
export { $$Difference as n, Compare as r, SurfaceFor as t };
