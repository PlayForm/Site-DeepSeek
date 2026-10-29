// The component roster. Each entry names one file under `Source/Component/`,
// its route under `/library/`, the summary the library index prints, and the
// properties the component accepts. The library route renders the live
// component beside this table, so the table and the component cannot drift.
export const Component = [
	{
		Name: "Badge",
		Slug: "badge",
		Summary: "A one-word label that marks a category on a row or a card.",
		Prop: [
			["Label", "string", "The label text."],
			["Tone", '"neutral" | "accent" | "quiet"', "The emphasis; neutral by default."],
		],
	},
	{
		Name: "VersionPill",
		Slug: "version-pill",
		Summary: "The version a package manifest reports, with its publication state.",
		Prop: [
			["Version", "string", "The version string from the manifest."],
			["Private", "boolean", "Marks a package the manifest keeps private."],
		],
	},
	{
		Name: "Icon",
		Slug: "icon",
		Summary: "One package's generated mark, served as the colour render the monorepo draws.",
		Prop: [
			["Name", "string", "The package directory the icon was drawn for."],
			["Size", "number", "The rendered square in px; 40 by default."],
			["Label", "string", "The accessible name, when the mark is the only carrier."],
			["Priority", "boolean", "Load eagerly, for a mark above the fold."],
		],
	},
	{
		Name: "Breadcrumb",
		Slug: "breadcrumb",
		Summary: "The trail from a section root to the page the reader is on.",
		Prop: [["Trail", "{ Href, Label }[]", "The ancestors, root first."]],
	},
	{
		Name: "Definition",
		Slug: "definition",
		Summary: "A term-and-detail list for the facts a page asserts about one thing.",
		Prop: [["Definition", "{ Term, Detail }[]", "The rows, in reading order."]],
	},
	{
		Name: "Table",
		Slug: "table",
		Summary: "The dense grid a catalogue uses to compare many rows at once.",
		Prop: [
			["Head", "string[]", "The column headings."],
			[
				"Row",
				"(string | { Text, Href, Icon? })[][]",
				"One array per row; a cell is text, or a link that may carry a package icon.",
			],
			["Caption", "string", "The table's accessible name."],
		],
	},
	{
		Name: "Card",
		Slug: "card",
		Summary: "A bounded surface that holds one idea and its link.",
		Prop: [
			["Title", "string", "The card's heading."],
			["Href", "string", "Makes the whole card a link when set."],
			["Meta", "string", "A short line under the title."],
		],
	},
	{
		Name: "PackageCard",
		Slug: "package-card",
		Summary: "One package as a card: its name, its version, its kind, and its summary.",
		Prop: [["Package", "PackageRecord", "A record from Package.server."]],
	},
	{
		Name: "PageHero",
		Slug: "page-hero",
		Summary: "The page's opening block: the eyebrow, the one heading, and the lede.",
		Prop: [
			["Title", "string", "The page's only h1."],
			["Lede", "string", "One paragraph under the heading."],
			["Eyebrow", "string", "The category row above the heading."],
			["Level", "1 | 2", "The heading level; a demo mounts the hero at 2."],
		],
	},
	{
		Name: "SectionHeader",
		Slug: "section-header",
		Summary: "The heading and the one-line statement that open a section.",
		Prop: [
			["Title", "string", "The section heading."],
			["Lede", "string", "One sentence under the heading."],
			["Id", "string", "The anchor the section is linked by."],
		],
	},
	{
		Name: "StatBand",
		Slug: "stat-band",
		Summary: "The row of figures a page opens with, each read from the tree.",
		Prop: [["Stat", "{ Label, Value, Note? }[]", "The figures, in reading order."]],
	},
	{
		Name: "Callout",
		Slug: "callout",
		Summary: "A bounded note that qualifies the section it sits in.",
		Prop: [
			["Title", "string", "The note's heading."],
			["Tone", '"note" | "warn"', "The accent; note by default."],
		],
	},
	{
		Name: "CodeBlock",
		Slug: "code-block",
		Summary: "A static block of code with its language and its copy affordance.",
		Prop: [
			["Code", "string", "The code, verbatim."],
			["Language", "string", "The language label the block prints."],
			["Label", "string", "The block's accessible name."],
		],
	},
	{
		Name: "Terminal",
		Slug: "terminal",
		Summary: "A command and the output it produced, in one read-only frame.",
		Prop: [
			["Line", "{ Command?, Output? }[]", "One entry per command and its output."],
			["Label", "string", "The frame's accessible name."],
		],
	},
	{
		Name: "EmptyState",
		Slug: "empty-state",
		Summary: "The honest placeholder a route prints before its data exists.",
		Prop: [
			["Title", "string", "What is not here yet."],
			["Note", "string", "One line on where it comes from."],
		],
	},
	{
		Name: "Pager",
		Slug: "pager",
		Summary: "The previous and next entries in the sequence the page belongs to.",
		Prop: [
			["Previous", "{ Href, Label }", "The entry before this one."],
			["Next", "{ Href, Label }", "The entry after this one."],
		],
	},
];

export default Component;
