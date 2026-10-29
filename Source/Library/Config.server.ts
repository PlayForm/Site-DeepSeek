import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";

import { Package, Root, type PackageRecord } from "./Package.server";

// A package documents its knobs in a table under "## The configuration". The
// site reads that table so a reader can set the plugin up without opening the
// README.

export interface Knob {
	Field: string;
	Type: string;
	Default: string;
	Meaning: string;
}

interface Node {
	type: string;
	depth?: number;
	value?: string;
	children?: Node[];
}

function TextOf(Node: Node | undefined): string {
	if (!Node) {
		return "";
	}

	if (Node.value !== undefined) {
		return Node.value;
	}

	return (Node.children ?? []).map(TextOf).join("");
}

function TableOf(Tree: Node, Heading: RegExp): Node | undefined {
	const Children = Tree.children ?? [];
	const Start = Children.findIndex(
		(Child) => Child.type === "heading" && Child.depth === 2 && Heading.test(TextOf(Child)),
	);

	if (Start < 0) {
		return undefined;
	}

	for (const Child of Children.slice(Start + 1)) {
		if (Child.type === "heading" && (Child.depth ?? 7) <= 2) {
			return undefined;
		}

		if (Child.type === "table") {
			return Child;
		}
	}

	return undefined;
}

function Cell(Row: Node): string[] {
	return (Row.children ?? []).map((Entry) => TextOf(Entry).replace(/\s+/g, " ").trim());
}

function KnobOf(Package: PackageRecord): Knob[] {
	const Path = join(Root, Package.Directory, "README.md");

	if (!existsSync(Path)) {
		return [];
	}

	const Tree = fromMarkdown(readFileSync(Path, "utf8"), {
		extensions: [gfm()],
		mdastExtensions: [gfmFromMarkdown()],
	}) as unknown as Node;

	const Table = TableOf(Tree, /configuration/i);

	if (!Table) {
		return [];
	}

	const Rows = (Table.children ?? []).filter((Child) => Child.type === "tableRow");

	return Rows.slice(1)
		.map(Cell)
		.map((Entry) => ({
			Field: Entry[0] ?? "",
			Type: Entry[1] ?? "",
			Default: Entry[2] ?? "",
			Meaning: Entry[3] ?? "",
		}))
		.filter((Entry) => Entry.Field !== "");
}

function Load(): Record<string, Knob[]> {
	const Roster: Record<string, Knob[]> = {};

	for (const Entry of Package) {
		const Knob = KnobOf(Entry);

		if (Knob.length > 0) {
			Roster[Entry.Slug] = Knob;
		}
	}

	return Roster;
}

export const Config = Load();

export function ConfigFor(Slug: string): Knob[] {
	return Config[Slug] ?? Config[Slug.replace(/^ets-/, "")] ?? [];
}

export default Config;
