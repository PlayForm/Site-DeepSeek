// The design lab's reader. A storyboard is a Markdown file in the repository's
// `Documentation/Design/` or `Documentation/Showcase/` folder, and this module
// reads the folders rather than a copy of them: a storyboard edited in one
// place appears in the lab with no page edit.
//
// A file is split into its H1 and its `##` sections, and nothing is rendered:
// the lab prints the section bodies as text, so the ASCII layout keeps the
// columns it was drawn in. The only shaping is the block split, which is the
// least a reader needs to see prose as prose rather than as one block.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, join, resolve } from "node:path";

import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { gfm } from "micromark-extension-gfm";

export type Folder = "Design" | "Showcase";

export interface Section {
	/** The `##` heading, verbatim; empty for the text above the first one. */
	Heading: string;
	/** The Markdown under the heading, verbatim. */
	Body: string;
}

export interface StoryboardRecord {
	/** The route segment: the folder and the file path, lowercased and dashed. */
	Slug: string;
	/** The file's H1, or its name when the file has none. */
	Title: string;
	Folder: Folder;
	/** The file's name without `.md`: the key a page registry looks up. */
	Stem: string;
	/** The path from the repository root, as the lab prints it. */
	File: string;
	/** True for a folder's own `README.md`: the method, not a storyboard. */
	Method: boolean;
	Section: Section[];
}

export interface Block {
	/** Verbatim keeps its columns and never wraps; prose is a paragraph. */
	Kind: "Verbatim" | "Prose";
	Text: string;
}

interface Node {
	type: string;
	depth?: number;
	value?: string;
	position?: { start: { offset?: number }; end: { offset?: number } };
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

function TreeOf(Text: string): Node {
	return fromMarkdown(Text, {
		extensions: [gfm()],
		mdastExtensions: [gfmFromMarkdown()],
	}) as unknown as Node;
}

// A storyboard may open with YAML frontmatter. The lab prints the storyboard,
// not its metadata, so the block is dropped before the text is parsed.
function Strip(Text: string): string {
	const Line = Text.split("\n");

	if (Line[0]?.trim() !== "---") {
		return Text;
	}

	const End = Line.findIndex((Entry, Index) => Index > 0 && Entry.trim() === "---");

	return End < 0 ? Text : Line.slice(End + 1).join("\n");
}

// The H1 is the title and is not printed twice. The text above the first `##`
// is the file's lede and keeps an empty heading, so no paragraph is dropped.
function SectionOf(Tree: Node, Source: string): Section[] {
	const Children = Tree.children ?? [];
	const Title = Children.find((Child) => Child.type === "heading" && Child.depth === 1);
	const Heading = Children.filter(
		(Child) => Child.type === "heading" && Child.depth === 2 && Child.position !== undefined,
	);
	const Section: Section[] = [];
	const Start = Title?.position?.end.offset ?? 0;
	const Lede = Source.slice(Start, Heading[0]?.position?.start.offset ?? Source.length).trim();

	if (Lede !== "") {
		Section.push({ Heading: "", Body: Lede });
	}

	for (const [Index, Entry] of Heading.entries()) {
		const Begin = Entry.position?.end.offset ?? 0;
		const End = Heading[Index + 1]?.position?.start.offset ?? Source.length;

		Section.push({ Heading: TextOf(Entry).trim(), Body: Source.slice(Begin, End).trim() });
	}

	return Section;
}

function Walk(Directory: string): string[] {
	const File: string[] = [];

	for (const Entry of readdirSync(Directory).sort()) {
		const Path = join(Directory, Entry);

		if (statSync(Path).isDirectory()) {
			File.push(...Walk(Path));
		} else if (Entry.endsWith(".md")) {
			File.push(Path);
		}
	}

	return File;
}

function Read(Path: string, Folder: Folder, Relative: string): StoryboardRecord {
	const Source = Strip(readFileSync(Path, "utf8"));
	const Tree = TreeOf(Source);
	const Stem = basename(Path, ".md");
	const Title = TextOf(
		Tree.children?.find((Child) => Child.type === "heading" && Child.depth === 1),
	).trim();

	return {
		Slug: `${Folder.toLowerCase()}-${Relative.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
		Title: Title === "" ? Stem : Title,
		Folder,
		Stem,
		File: `Documentation/${Folder}/${Relative}.md`,
		// The lab reads every Markdown in the folder, but only a storyboard owes
		// the layout and history sections. The method documents and the two
		// dissections are records, not storyboards, so they are exempt.
		Method:
			Stem === "README" ||
			Stem === "Process" ||
			Stem === "Pass-Log" ||
			Stem.startsWith("Dissection-"),
		Section: SectionOf(Tree, Source),
	};
}

// The storyboards are read from the monorepo the site ships with, never from a
// folder beside the checkout: the deployment holds only `Site/` and its
// submodule, so `Module/DeepSeek/Documentation` is the one path that exists
// both locally and on the remote. The parent checkout is a fallback for local
// authoring, where the submodule may not carry the storyboards yet.
const Module = resolve(process.cwd(), "Module", "DeepSeek", "Documentation");
const Beside = resolve(process.cwd(), "..", "Documentation");

export const Folder: Folder[] = ["Design", "Showcase"];

function FindRoot(): string | undefined {
	// The submodule first: it is the tree the deployment holds, so a storyboard
	// committed there appears in the lab everywhere. The parent checkout is the
	// local fallback, where the storyboards are authored before they are synced.
	if (existsSync(Module)) {
		return Module;
	}

	if (existsSync(Beside)) {
		return Beside;
	}

	return undefined;
}

function Load(): StoryboardRecord[] {
	const Root = FindRoot();

	// No root means no storyboards in this checkout: the lab renders empty and
	// the build continues.
	if (Root === undefined) {
		return [];
	}

	const Roster: StoryboardRecord[] = [];

	for (const Name of Folder) {
		const Directory = join(Root, Name);

		if (!existsSync(Directory)) {
			continue;
		}

		for (const Path of Walk(Directory)) {
			Roster.push(Read(Path, Name, Path.slice(Directory.length + 1, -3)));
		}
	}

	return Roster;
}

// One read per build process: every lab page imports this module, and the two
// folders are read once.
export const Storyboard: StoryboardRecord[] = Load();

// The section body as the lab prints it. A fenced block and a table stay
// verbatim, because both are column-aligned and a proportional font would
// destroy the alignment; a paragraph, a list item, and a subheading each get a
// block of their own, so the prose reads as prose.
export function Split(Body: string): Block[] {
	const Part: Block[] = [];

	for (const Child of TreeOf(Body).children ?? []) {
		const Start = Child.position?.start.offset ?? 0;
		const End = Child.position?.end.offset ?? 0;
		const Raw = Body.slice(Start, End).trim();

		if (Child.type === "code") {
			Part.push({ Kind: "Verbatim", Text: Child.value ?? Raw });
		} else if (Child.type === "table") {
			Part.push({ Kind: "Verbatim", Text: Raw });
		} else if (Child.type === "list") {
			for (const Item of Child.children ?? []) {
				const From = Item.position?.start.offset ?? 0;
				const To = Item.position?.end.offset ?? 0;

				Part.push({
					Kind: "Prose",
					Text: Body.slice(From, To).trim().replace(/\n\s*/g, " "),
				});
			}
		} else if (Raw !== "") {
			Part.push({ Kind: "Prose", Text: Raw.replace(/\n\s*/g, " ") });
		}
	}

	return Part;
}

export default Storyboard;
