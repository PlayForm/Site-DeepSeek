import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";

import { Package, Root, type PackageRecord } from "./Package.server";

// Every package README that carries a surface section names the seams the
// package registers on, the tools it adds, and the configuration it reads.
// The section is a table in most READMEs and a bullet list in the rest, so the
// reader accepts both shapes and never invents a row.

export interface Surface {
	Kind: string;
	Name: string;
	What: string;
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

function CodeOf(Node: Node): string[] {
	if (Node.type === "inlineCode" && Node.value !== undefined) {
		return [Node.value];
	}

	return (Node.children ?? []).flatMap(CodeOf);
}

// The section is the first second-level heading that names the surfaces; the
// body is whatever comes before the next heading of the same or a higher rank.
function SectionOf(Tree: Node): Node[] {
	const Children = Tree.children ?? [];
	const Start = Children.findIndex(
		(Child) =>
			Child.type === "heading" && Child.depth === 2 && /surface/i.test(TextOf(Child)),
	);

	if (Start < 0) {
		return [];
	}

	const Body: Node[] = [];

	for (const Child of Children.slice(Start + 1)) {
		if (Child.type === "heading" && (Child.depth ?? 7) <= 2) {
			break;
		}

		Body.push(Child);
	}

	return Body;
}

function KindOf(Text: string): string {
	const Match = /\b(listener|service|tool|config|command|hook|plugin|library)\b/i.exec(Text);

	return Match?.[1]?.toLowerCase() ?? "surface";
}

function FromTable(Table: Node): Surface[] {
	const Rows = (Table.children ?? []).filter((Child) => Child.type === "tableRow");

	return Rows.slice(1)
		.map((Row) => {
			const Cell = (Row.children ?? []).map((Entry) => TextOf(Entry).replace(/\s+/g, " ").trim());

			return { Kind: Cell[0] ?? "", Name: Cell[1] ?? "", What: Cell[2] ?? "" };
		})
		.filter((Entry) => Entry.Kind !== "" || Entry.Name !== "");
}

function FromList(List: Node): Surface[] {
	const Items = (List.children ?? []).filter((Child) => Child.type === "listItem");

	return Items.map((Item) => {
		const Text = (Item.children ?? [])
			.filter((Child) => Child.type === "paragraph")
			.map(TextOf)
			.join(" ")
			.replace(/\s+/g, " ")
			.trim();
		const Name = CodeOf(Item)[0] ?? Text.split(" ").slice(1, 3).join(" ");
		const Kind = /\b(listener|service|tool|config|command)\b/i.exec(Text)?.[1]?.toLowerCase();

		return {
			Kind: Kind ?? "",
			Name,
			What: Text.replace(/^The\s+/, "")
				.replace(Name, "")
				.replace(/^\s*(waterfall\s+)?(listener|service|tool|config|command)\b[:\s-]*/i, "")
				.replace(/^[\s:,-]+|[\s:,-]+$/g, ""),
		};
	}).filter((Entry) => Entry.Kind !== "" && Entry.Name !== "");
}

function SurfaceOf(Package: PackageRecord): Surface[] {
	const Path = join(Root, Package.Directory, "README.md");

	if (!existsSync(Path)) {
		return [];
	}

	const Tree = fromMarkdown(readFileSync(Path, "utf8"), {
		extensions: [gfm()],
		mdastExtensions: [gfmFromMarkdown()],
	}) as unknown as Node;

	for (const Child of SectionOf(Tree)) {
		if (Child.type === "table") {
			const Surface = FromTable(Child);

			if (Surface.length > 0) {
				return Surface;
			}
		}

		if (Child.type === "list") {
			const Surface = FromList(Child);

			if (Surface.length > 0) {
				return Surface;
			}
		}
	}

	return [];
}

function LoadSurface(): Record<string, Surface[]> {
	const Roster: Record<string, Surface[]> = {};

	for (const Entry of Package) {
		const Surface = SurfaceOf(Entry);

		if (Surface.length > 0) {
			Roster[Entry.Slug] = Surface;
		}
	}

	return Roster;
}

export const Surface = LoadSurface();

export function SurfaceFor(Slug: string): Surface[] {
	return Surface[Slug] ?? Surface[Slug.replace(/^ets-/, "")] ?? [];
}

// The first listener a package registers on, which is the seam a reader looks
// for first.
export function ListenFor(Slug: string): string {
	const Entry = SurfaceFor(Slug).find((Item) => /listen/i.test(Item.Kind));

	return Entry?.Name ?? "";
}

export default Surface;
