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
	{
		Name: "Line",
		Slug: "line",
		Summary: "One addressable row of a document: a gutter number and the record it carries.",
		Prop: [
			["Seq", "number | string", "The sequence number the record answers to."],
			["Kind", "string", "The kind of record: turn, step, message, tool, session."],
			["Name", "string", "The event name, as the harness writes it."],
			["Foldable", "boolean", "Shows a chevron on hover when the line can fold."],
			["Current", "boolean", "Marks the line a reader selected."],
		],
	},
	{
		Name: "Gutter",
		Slug: "gutter",
		Summary: "The sequence number, outside the measure, the way a document numbers its lines.",
		Prop: [
			["Seq", "number | string", "The number to print."],
			["Foldable", "boolean", "Shows the fold chevron on hover."],
		],
	},
	{
		Name: "Pending",
		Slug: "pending",
		Summary: "A call with no result yet, or a job still running, marked as in flight.",
		Prop: [
			["Name", "string", "What is in flight, in the harness's words."],
			["Meta", "string", "The quiet facts beside it: the tool, the job, the elapsed time."],
		],
	},
	{
		Name: "Schema",
		Slug: "schema",
		Summary: "A contract as rows: a property, its type, whether it is required, and what it means.",
		Prop: [
			["Properties", "{ Name, Type, Required, Description }[]", "One row per property."],
		],
	},
	{
		Name: "Pipeline",
		Slug: "pipeline",
		Summary: "The stages a call passes, in order, with the one the page is looking at marked.",
		Prop: [
			["Stages", "{ Label, Seam }[]", "One stage per entry; a seam is a chip when present."],
			["Current", "string", "The label of the stage to mark."],
		],
	},
	{
		Name: "Sequence",
		Slug: "sequence",
		Summary: "Who sends what to whom, in order, with the seam each dispatch fires.",
		Prop: [
			["Actor", "string[]", "The participants, left to right."],
			["Message", "{ From, To, Label, Seam?, Durable? }[]", "One row per dispatch."],
		],
	},
	{
		Name: "State",
		Slug: "state",
		Summary: "One object's life: the states on its main line, and the ways off it.",
		Prop: [
			["State", "{ Name, Note, Tone }[]", "The states, main line and exits together."],
			["Edge", "{ From, To, Label }[]", "The moves between them."],
		],
	},
	{
		Name: "Fanout",
		Slug: "fanout",
		Summary: "One dispatch and every listener that answers it, drawn as a spine.",
		Prop: [
			["Source", "string", "The event the listeners answer."],
			["Listener", "{ Slug, Href, Effect, Documented }[]", "The listeners, in order."],
			["Limit", "number", "How many to draw before the rest are counted."],
		],
	},
	{
		Name: "Lane",
		Slug: "lane",
		Summary: "Who was busy, when, and for how long, as one bar per span of work.",
		Prop: [
			["Lane", "{ Label, Span }[]", "One lane per actor; a span carries start, duration, kind."],
		],
	},
	{
		Name: "Chain",
		Slug: "chain",
		Summary: "Generations or links, joined in order, with the current one marked.",
		Prop: [["Link", "{ Label, Body, Current? }[]", "One entry per link."]],
	},
	{
		Name: "Ladder",
		Slug: "ladder",
		Summary: "The same thing at three values, ordered by the dimension that decides it.",
		Prop: [
			["Rung", "{ Label, Value, Body, Note?, Mark? }[]", "One rung per value."],
		],
	},
	{
		Name: "Fork",
		Slug: "fork",
		Summary: "One input, two exits, and which branch the call actually took.",
		Prop: [
			["From", "string", "What enters the fork."],
			["Exit", "{ Label, Body, Taken? }[]", "The two exits."],
		],
	},
	{
		Name: "Grid",
		Slug: "grid",
		Summary: "A generic two-axis matrix: a label column and one column per axis value.",
		Prop: [
			["Head", "string[]", "The column headers."],
			["Row", "{ Label, Cell }[]", "One row per label, with a cell per column."],
			["Caption", "string", "The table's accessible name."],
		],
	},
	{
		Name: "Matrix",
		Slug: "matrix",
		Summary: "The intervention matrix: plugins against seams, one mark per cell.",
		Prop: [["Row", "Intervention[]", "The plugin records the matrix draws."]],
	},
	{
		Name: "Difference",
		Slug: "difference",
		Summary: "The same text twice, with the one span that changed marked.",
		Prop: [
			["Before", "string", "The text before the seam."],
			["After", "string", "The text after it."],
		],
	},
	{
		Name: "Compare",
		Slug: "compare",
		Summary: "A drag slider that reveals one text under another, for the same comparison at a length.",
		Prop: [
			["Raw", "string", "The text the model wrote."],
			["Clean", "string", "The text the harness kept."],
			["Start", "number", "Where the handle starts, as a percentage."],
		],
	},
	{
		Name: "Inspector",
		Slug: "inspector",
		Summary: "The right column of a document: a subject, its tabs, and one panel open.",
		Prop: [
			["Subject", "string", "What the panels describe."],
			["Tab", "{ Label, Body, Kind?, Properties? }[]", "One tab per panel."],
		],
	},
	{
		Name: "InspectorLive",
		Slug: "inspector-live",
		Summary: "The inspector as an island: a click on a line fills it.",
		Prop: [["Record", "InspectorRecord[]", "The records the document shows."]],
	},
	{
		Name: "Explorer",
		Slug: "explorer",
		Summary: "A grouped pane of objects, each a link, with a count where the caller knows one.",
		Prop: [["Groups", "{ Label, Item }[]", "The groups, in the order the pane stacks them."]],
	},
	{
		Name: "Trace",
		Slug: "trace",
		Summary: "The records of one turn as a document, one line per record.",
		Prop: [["Record", "Record[]", "The records, in the order the log writes them."]],
	},
	{
		Name: "RoleList",
		Slug: "role-list",
		Summary: "The parts of the conversation the model reads, and the seam that can change each.",
		Prop: [["Entry", "Role[]", "One entry per role."]],
	},
	{
		Name: "CallStep",
		Slug: "call-step",
		Summary: "The tool pipeline as a rail, one step per gate, with its decision vocabulary.",
		Prop: [["Entry", "Step[]", "The pipeline steps, in order."]],
	},
	{
		Name: "Curve",
		Slug: "curve",
		Summary: "Two series on log axes: the bytes the model reads against the size of the result.",
		Prop: [["Curve", "Curve", "The thresholds and the ceiling the chart draws."]],
	},
	{
		Name: "Show",
		Slug: "show",
		Summary: "One plugin's operator: the single picture its dimension calls for.",
		Prop: [
			["Plugin", "Plugin", "The plugin record the showcase extends."],
			["Showcase", "Showcase", "The operator and its data."],
		],
	},
	{
		Name: "Scenario",
		Slug: "scenario",
		Summary: "One moment of a turn, shown twice: the default beside the family.",
		Prop: [
			["Entry", "Scenario", "The moment, its default, its family side, and its knob."],
			["Index", "number", "The position in the page's list."],
		],
	},
	{
		Name: "Stream",
		Slug: "stream",
		Summary: "A package whose work is an event-driven view: the update rule and the frame that arrives.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
	{
		Name: "Layer",
		Slug: "layer",
		Summary: "A library the others build on, as stacked layers with its own layer marked.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
	{
		Name: "Surface",
		Slug: "surface",
		Summary: "A client that fills a host slot: the frame, the slot, and what the package puts there.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
	{
		Name: "Buffer",
		Slug: "buffer",
		Summary: "A store that holds data for others: the store, its readers, and its retention rule.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
	{
		Name: "Gate",
		Slug: "gate",
		Summary: "A hook that decides: the three outcomes, and the one this hook returns.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
	{
		Name: "Rewrite",
		Slug: "rewrite",
		Summary: "A hook that changes the payload: the before and the after, with the span marked.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
	{
		Name: "Record",
		Slug: "record",
		Summary: "A hook that only observes: the ledger line it writes, verbatim.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
	{
		Name: "Advise",
		Slug: "advise",
		Summary: "A hook that adds a note the model then reads, with the condition that triggers it.",
		Prop: [["Slug", "string", "The package the picture is written for."]],
	},
];

export default Component;
