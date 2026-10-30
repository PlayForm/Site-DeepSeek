import { a as Package, o as Root } from "./Base_Cq25m4iE.mjs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";
// Source/Library/Config.server.ts
function TextOf(Node) {
	if (!Node) return "";
	if (Node.value !== void 0) return Node.value;
	return (Node.children ?? []).map(TextOf).join("");
}
function TableOf(Tree, Heading) {
	const Children = Tree.children ?? [];
	const Start = Children.findIndex((Child) => Child.type === "heading" && Child.depth === 2 && Heading.test(TextOf(Child)));
	if (Start < 0) return;
	for (const Child of Children.slice(Start + 1)) {
		if (Child.type === "heading" && (Child.depth ?? 7) <= 2) return;
		if (Child.type === "table") return Child;
	}
}
function Cell(Row) {
	return (Row.children ?? []).map((Entry) => TextOf(Entry).replace(/\s+/g, " ").trim());
}
function KnobOf(Package) {
	const Path = join(Root, Package.Directory, "README.md");
	if (!existsSync(Path)) return [];
	const Table = TableOf(fromMarkdown(readFileSync(Path, "utf8"), {
		extensions: [gfm()],
		mdastExtensions: [gfmFromMarkdown()]
	}), /configuration/i);
	if (!Table) return [];
	return (Table.children ?? []).filter((Child) => Child.type === "tableRow").slice(1).map(Cell).map((Entry) => ({
		Field: Entry[0] ?? "",
		Type: Entry[1] ?? "",
		Default: Entry[2] ?? "",
		Meaning: Entry[3] ?? ""
	})).filter((Entry) => Entry.Field !== "");
}
function Load() {
	const Roster = {};
	for (const Entry of Package) {
		const Knob = KnobOf(Entry);
		if (Knob.length > 0) Roster[Entry.Slug] = Knob;
	}
	return Roster;
}
var Config = Load();
function ConfigFor(Slug) {
	return Config[Slug] ?? Config[Slug.replace(/^ets-/, "")] ?? [];
}
export { ConfigFor as t };
