import { a as Package, o as Root } from "./Base_Cq25m4iE.mjs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";
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
export { SurfaceFor as t };
