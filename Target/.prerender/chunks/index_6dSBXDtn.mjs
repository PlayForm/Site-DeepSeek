import { _ as createComponent$1, a as Package, c as SelectKind, g as createAstro, h as $$PageHero, m as Content, n as Count, p as Dev, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, d as renderSlot, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { t as $$Table } from "./Table_CKiF4Xiu.mjs";
import { t as Arm } from "./Arm_CPuxlRGj.mjs";
import { n as BehaviorFor } from "./Behavior_DDx93Uas.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import { n as Stage } from "./Turn_CeuwuD0r.mjs";
import { t as $$StatBand } from "./StatBand_9iPwwZ-l.mjs";
import { t as $$Term } from "./Term_rdCIvkpk.mjs";
import { t as $$Transform } from "./Transform_C61Qcq3e.mjs";
import { t as Transform } from "./Transform_CwTo7UZW.mjs";
import { i as Intervention, n as Role, r as $$Matrix, t as Step } from "./ToolCall_BqW38eH-.mjs";
import { t as $$Card } from "./Card_DG-ngQPO.mjs";
import { t as $$Curve } from "./Curve_DpezN-8K.mjs";
import { t as $$Seam } from "./Seam_BG5eEmcx.mjs";
import { createComponent, escape, ssr, ssrAttribute, ssrHydrationKey } from "solid-js/web";
import { For, Show, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";
// Source/Component/Cabinet.astro
createAstro("https://deepseek.playform.cloud");
var $$Cabinet = createComponent$1(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Cabinet;
	const { Label, State = "exhibit" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="cabinet"> <span class="cabinet__plane" aria-hidden="true"></span> <div class="cabinet__front"> <div class="cabinet__lintel"> <span class="cabinet__label">${Label}</span> <span class="cabinet__state">${State}</span> </div> <div class="cabinet__aperture"> ${renderSlot($$result, $$slots["default"])} </div> </div> <span class="cabinet__wall" aria-hidden="true"></span> </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Cabinet.astro", void 0);
// Source/Component/Graph/Flow.tsx
var _tmpl$ = [
	"<div",
	" class=\"flow\"><div class=\"flow__canvas\" role=\"img\" aria-label=\"The turn as a graph of stages\"></div><!--$-->",
	"<!--/--><ul class=\"flow__list\">",
	"</ul></div>"
];
var _tmpl$2 = [
	"<aside",
	" class=\"flow__read\"><p class=\"flow__title\"><!--$-->",
	"<!--/--> <!--$-->",
	"<!--/--></p><p class=\"flow__seam\">",
	"</p><p class=\"flow__note\">",
	"</p></aside>"
];
var _tmpl$3 = [
	"<li",
	" class=\"flow__item\"",
	"><button class=\"flow__pick\" type=\"button\"><!--$-->",
	"<!--/--> <!--$-->",
	"<!--/--></button></li>"
];
function Flow(Props) {
	const [Select, SetSelect] = createSignal(Props.Stage[0]);
	let Instance;
	const Lit = createMemo(() => new Set(Props.Family));
	const Count = (Entry) => Entry.Seam.filter((Name) => Lit().has(Name)).length;
	const Data = createMemo(() => Props.Stage.flatMap((Entry) => [{ data: {
		id: `stage-${Entry.Index}`,
		label: `${String(Entry.Index).padStart(2, "0")} ${Entry.Title}`,
		family: Count(Entry) > 0 ? 1 : 0,
		seam: Entry.Seam.length
	} }, ...Entry.Index < Props.Stage.length ? [{ data: {
		id: `edge-${Entry.Index}`,
		source: `stage-${Entry.Index}`,
		target: `stage-${Entry.Index + 1}`
	} }] : []]));
	onMount(() => {
		(async () => {
			(await import("cytoscape")).default;
		})();
		onCleanup(() => {
			Instance?.destroy();
			Instance = void 0;
		});
	});
	createEffect(() => {
		if (!Instance) return;
		Instance.elements().remove();
		Instance.add(Data());
		Instance.layout({
			name: "breadthfirst",
			directed: true,
			padding: 16,
			spacingFactor: 1.1
		}).run();
	});
	return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Show, {
		get when() {
			return Select();
		},
		children: (Entry) => ssr(_tmpl$2, ssrHydrationKey(), escape(String(Entry().Index).padStart(2, "0")), escape(Entry().Title), Entry().Seam.length > 0 ? escape(Entry().Seam.join(", ")) : "no seam here", Count(Entry()) > 0 ? `${escape(Count(Entry()))} of these seams carry a family hook.` : "The family stands at none of this stage's seams.")
	})), escape(createComponent(For, {
		get each() {
			return Props.Stage;
		},
		children: (Entry) => ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("data-family", escape(Count(Entry), true) > 0, false), escape(String(Entry.Index).padStart(2, "0")), escape(Entry.Title))
	})));
}
// Source/Library/Component.ts
var Component = [
	{
		Name: "Badge",
		Slug: "badge",
		Summary: "A one-word label that marks a category on a row or a card.",
		Prop: [[
			"Label",
			"string",
			"The label text."
		], [
			"Tone",
			"\"neutral\" | \"accent\" | \"quiet\"",
			"The emphasis; neutral by default."
		]]
	},
	{
		Name: "VersionPill",
		Slug: "version-pill",
		Summary: "The version a package manifest reports, with its publication state.",
		Prop: [[
			"Version",
			"string",
			"The version string from the manifest."
		], [
			"Private",
			"boolean",
			"Marks a package the manifest keeps private."
		]]
	},
	{
		Name: "Icon",
		Slug: "icon",
		Summary: "One package's generated mark, served as the colour render the monorepo draws.",
		Prop: [
			[
				"Name",
				"string",
				"The package directory the icon was drawn for."
			],
			[
				"Size",
				"number",
				"The rendered square in px; 40 by default."
			],
			[
				"Label",
				"string",
				"The accessible name, when the mark is the only carrier."
			],
			[
				"Priority",
				"boolean",
				"Load eagerly, for a mark above the fold."
			]
		]
	},
	{
		Name: "Breadcrumb",
		Slug: "breadcrumb",
		Summary: "The trail from a section root to the page the reader is on.",
		Prop: [[
			"Trail",
			"{ Href, Label }[]",
			"The ancestors, root first."
		]]
	},
	{
		Name: "Definition",
		Slug: "definition",
		Summary: "A term-and-detail list for the facts a page asserts about one thing.",
		Prop: [[
			"Definition",
			"{ Term, Detail }[]",
			"The rows, in reading order."
		]]
	},
	{
		Name: "Table",
		Slug: "table",
		Summary: "The dense grid a catalogue uses to compare many rows at once.",
		Prop: [
			[
				"Head",
				"string[]",
				"The column headings."
			],
			[
				"Row",
				"(string | { Text, Href, Icon? })[][]",
				"One array per row; a cell is text, or a link that may carry a package icon."
			],
			[
				"Caption",
				"string",
				"The table's accessible name."
			]
		]
	},
	{
		Name: "Card",
		Slug: "card",
		Summary: "A bounded surface that holds one idea and its link.",
		Prop: [
			[
				"Title",
				"string",
				"The card's heading."
			],
			[
				"Href",
				"string",
				"Makes the whole card a link when set."
			],
			[
				"Meta",
				"string",
				"A short line under the title."
			]
		]
	},
	{
		Name: "PackageCard",
		Slug: "package-card",
		Summary: "One package as a card: its name, its version, its kind, and its summary.",
		Prop: [[
			"Package",
			"PackageRecord",
			"A record from Package.server."
		]]
	},
	{
		Name: "PageHero",
		Slug: "page-hero",
		Summary: "The page's opening block: the eyebrow, the one heading, and the lede.",
		Prop: [
			[
				"Title",
				"string",
				"The page's only h1."
			],
			[
				"Lede",
				"string",
				"One paragraph under the heading."
			],
			[
				"Eyebrow",
				"string",
				"The category row above the heading."
			],
			[
				"Level",
				"1 | 2",
				"The heading level; a demo mounts the hero at 2."
			]
		]
	},
	{
		Name: "SectionHeader",
		Slug: "section-header",
		Summary: "The heading and the one-line statement that open a section.",
		Prop: [
			[
				"Title",
				"string",
				"The section heading."
			],
			[
				"Lede",
				"string",
				"One sentence under the heading."
			],
			[
				"Id",
				"string",
				"The anchor the section is linked by."
			]
		]
	},
	{
		Name: "StatBand",
		Slug: "stat-band",
		Summary: "The row of figures a page opens with, each read from the tree.",
		Prop: [[
			"Stat",
			"{ Label, Value, Note? }[]",
			"The figures, in reading order."
		]]
	},
	{
		Name: "Callout",
		Slug: "callout",
		Summary: "A bounded note that qualifies the section it sits in.",
		Prop: [[
			"Title",
			"string",
			"The note's heading."
		], [
			"Tone",
			"\"note\" | \"warn\"",
			"The accent; note by default."
		]]
	},
	{
		Name: "CodeBlock",
		Slug: "code-block",
		Summary: "A static block of code with its language and its copy affordance.",
		Prop: [
			[
				"Code",
				"string",
				"The code, verbatim."
			],
			[
				"Language",
				"string",
				"The language label the block prints."
			],
			[
				"Label",
				"string",
				"The block's accessible name."
			]
		]
	},
	{
		Name: "Terminal",
		Slug: "terminal",
		Summary: "A command and the output it produced, in one read-only frame.",
		Prop: [[
			"Line",
			"{ Command?, Output? }[]",
			"One entry per command and its output."
		], [
			"Label",
			"string",
			"The frame's accessible name."
		]]
	},
	{
		Name: "EmptyState",
		Slug: "empty-state",
		Summary: "The honest placeholder a route prints before its data exists.",
		Prop: [[
			"Title",
			"string",
			"What is not here yet."
		], [
			"Note",
			"string",
			"One line on where it comes from."
		]]
	},
	{
		Name: "Pager",
		Slug: "pager",
		Summary: "The previous and next entries in the sequence the page belongs to.",
		Prop: [[
			"Previous",
			"{ Href, Label }",
			"The entry before this one."
		], [
			"Next",
			"{ Href, Label }",
			"The entry after this one."
		]]
	},
	{
		Name: "Line",
		Slug: "line",
		Summary: "One addressable row of a document: a gutter number and the record it carries.",
		Prop: [
			[
				"Seq",
				"number | string",
				"The sequence number the record answers to."
			],
			[
				"Kind",
				"string",
				"The kind of record: turn, step, message, tool, session."
			],
			[
				"Name",
				"string",
				"The event name, as the harness writes it."
			],
			[
				"Foldable",
				"boolean",
				"Shows a chevron on hover when the line can fold."
			],
			[
				"Current",
				"boolean",
				"Marks the line a reader selected."
			]
		]
	},
	{
		Name: "Gutter",
		Slug: "gutter",
		Summary: "The sequence number, outside the measure, the way a document numbers its lines.",
		Prop: [[
			"Seq",
			"number | string",
			"The number to print."
		], [
			"Foldable",
			"boolean",
			"Shows the fold chevron on hover."
		]]
	},
	{
		Name: "Pending",
		Slug: "pending",
		Summary: "A call with no result yet, or a job still running, marked as in flight.",
		Prop: [[
			"Name",
			"string",
			"What is in flight, in the harness's words."
		], [
			"Meta",
			"string",
			"The quiet facts beside it: the tool, the job, the elapsed time."
		]]
	},
	{
		Name: "Schema",
		Slug: "schema",
		Summary: "A contract as rows: a property, its type, whether it is required, and what it means.",
		Prop: [[
			"Properties",
			"{ Name, Type, Required, Description }[]",
			"One row per property."
		]]
	},
	{
		Name: "Pipeline",
		Slug: "pipeline",
		Summary: "The stages a call passes, in order, with the one the page is looking at marked.",
		Prop: [[
			"Stages",
			"{ Label, Seam }[]",
			"One stage per entry; a seam is a chip when present."
		], [
			"Current",
			"string",
			"The label of the stage to mark."
		]]
	},
	{
		Name: "Sequence",
		Slug: "sequence",
		Summary: "Who sends what to whom, in order, with the seam each dispatch fires.",
		Prop: [[
			"Actor",
			"string[]",
			"The participants, left to right."
		], [
			"Message",
			"{ From, To, Label, Seam?, Durable? }[]",
			"One row per dispatch."
		]]
	},
	{
		Name: "State",
		Slug: "state",
		Summary: "One object's life: the states on its main line, and the ways off it.",
		Prop: [[
			"State",
			"{ Name, Note, Tone }[]",
			"The states, main line and exits together."
		], [
			"Edge",
			"{ From, To, Label }[]",
			"The moves between them."
		]]
	},
	{
		Name: "Fanout",
		Slug: "fanout",
		Summary: "One dispatch and every listener that answers it, drawn as a spine.",
		Prop: [
			[
				"Source",
				"string",
				"The event the listeners answer."
			],
			[
				"Listener",
				"{ Slug, Href, Effect, Documented }[]",
				"The listeners, in order."
			],
			[
				"Limit",
				"number",
				"How many to draw before the rest are counted."
			]
		]
	},
	{
		Name: "Lane",
		Slug: "lane",
		Summary: "Who was busy, when, and for how long, as one bar per span of work.",
		Prop: [[
			"Lane",
			"{ Label, Span }[]",
			"One lane per actor; a span carries start, duration, kind."
		]]
	},
	{
		Name: "Chain",
		Slug: "chain",
		Summary: "Generations or links, joined in order, with the current one marked.",
		Prop: [[
			"Link",
			"{ Label, Body, Current? }[]",
			"One entry per link."
		]]
	},
	{
		Name: "Ladder",
		Slug: "ladder",
		Summary: "The same thing at three values, ordered by the dimension that decides it.",
		Prop: [[
			"Rung",
			"{ Label, Value, Body, Note?, Mark? }[]",
			"One rung per value."
		]]
	},
	{
		Name: "Fork",
		Slug: "fork",
		Summary: "One input, two exits, and which branch the call actually took.",
		Prop: [[
			"From",
			"string",
			"What enters the fork."
		], [
			"Exit",
			"{ Label, Body, Taken? }[]",
			"The two exits."
		]]
	},
	{
		Name: "Grid",
		Slug: "grid",
		Summary: "A generic two-axis matrix: a label column and one column per axis value.",
		Prop: [
			[
				"Head",
				"string[]",
				"The column headers."
			],
			[
				"Row",
				"{ Label, Cell }[]",
				"One row per label, with a cell per column."
			],
			[
				"Caption",
				"string",
				"The table's accessible name."
			]
		]
	},
	{
		Name: "Matrix",
		Slug: "matrix",
		Summary: "The intervention matrix: plugins against seams, one mark per cell.",
		Prop: [[
			"Row",
			"Intervention[]",
			"The plugin records the matrix draws."
		]]
	},
	{
		Name: "Difference",
		Slug: "difference",
		Summary: "The same text twice, with the one span that changed marked.",
		Prop: [[
			"Before",
			"string",
			"The text before the seam."
		], [
			"After",
			"string",
			"The text after it."
		]]
	},
	{
		Name: "Compare",
		Slug: "compare",
		Summary: "A drag slider that reveals one text under another, for the same comparison at a length.",
		Prop: [
			[
				"Raw",
				"string",
				"The text the model wrote."
			],
			[
				"Clean",
				"string",
				"The text the harness kept."
			],
			[
				"Start",
				"number",
				"Where the handle starts, as a percentage."
			]
		]
	},
	{
		Name: "Inspector",
		Slug: "inspector",
		Summary: "The right column of a document: a subject, its tabs, and one panel open.",
		Prop: [[
			"Subject",
			"string",
			"What the panels describe."
		], [
			"Tab",
			"{ Label, Body, Kind?, Properties? }[]",
			"One tab per panel."
		]]
	},
	{
		Name: "InspectorLive",
		Slug: "inspector-live",
		Summary: "The inspector as an island: a click on a line fills it.",
		Prop: [[
			"Record",
			"InspectorRecord[]",
			"The records the document shows."
		]]
	},
	{
		Name: "Explorer",
		Slug: "explorer",
		Summary: "A grouped pane of objects, each a link, with a count where the caller knows one.",
		Prop: [[
			"Groups",
			"{ Label, Item }[]",
			"The groups, in the order the pane stacks them."
		]]
	},
	{
		Name: "Trace",
		Slug: "trace",
		Summary: "The records of one turn as a document, one line per record.",
		Prop: [[
			"Record",
			"Record[]",
			"The records, in the order the log writes them."
		]]
	},
	{
		Name: "RoleList",
		Slug: "role-list",
		Summary: "The parts of the conversation the model reads, and the seam that can change each.",
		Prop: [[
			"Entry",
			"Role[]",
			"One entry per role."
		]]
	},
	{
		Name: "CallStep",
		Slug: "call-step",
		Summary: "The tool pipeline as a rail, one step per gate, with its decision vocabulary.",
		Prop: [[
			"Entry",
			"Step[]",
			"The pipeline steps, in order."
		]]
	},
	{
		Name: "Curve",
		Slug: "curve",
		Summary: "Two series on log axes: the bytes the model reads against the size of the result.",
		Prop: [[
			"Curve",
			"Curve",
			"The thresholds and the ceiling the chart draws."
		]]
	},
	{
		Name: "Show",
		Slug: "show",
		Summary: "One plugin's operator: the single picture its dimension calls for.",
		Prop: [[
			"Plugin",
			"Plugin",
			"The plugin record the showcase extends."
		], [
			"Showcase",
			"Showcase",
			"The operator and its data."
		]]
	},
	{
		Name: "Scenario",
		Slug: "scenario",
		Summary: "One moment of a turn, shown twice: the default beside the family.",
		Prop: [[
			"Entry",
			"Scenario",
			"The moment, its default, its family side, and its knob."
		], [
			"Index",
			"number",
			"The position in the page's list."
		]]
	},
	{
		Name: "Stream",
		Slug: "stream",
		Summary: "A package whose work is an event-driven view: the update rule and the frame that arrives.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	},
	{
		Name: "Layer",
		Slug: "layer",
		Summary: "A library the others build on, as stacked layers with its own layer marked.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	},
	{
		Name: "Surface",
		Slug: "surface",
		Summary: "A client that fills a host slot: the frame, the slot, and what the package puts there.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	},
	{
		Name: "Buffer",
		Slug: "buffer",
		Summary: "A store that holds data for others: the store, its readers, and its retention rule.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	},
	{
		Name: "Gate",
		Slug: "gate",
		Summary: "A hook that decides: the three outcomes, and the one this hook returns.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	},
	{
		Name: "Rewrite",
		Slug: "rewrite",
		Summary: "A hook that changes the payload: the before and the after, with the span marked.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	},
	{
		Name: "Record",
		Slug: "record",
		Summary: "A hook that only observes: the ledger line it writes, verbatim.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	},
	{
		Name: "Advise",
		Slug: "advise",
		Summary: "A hook that adds a note the model then reads, with the condition that triggers it.",
		Prop: [[
			"Slug",
			"string",
			"The package the picture is written for."
		]]
	}
];
// Source/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent$1(($$result, $$props, $$slots) => {
	const Starters = [
		"hook-dsh-normalize-dash",
		"hook-dsh-workspace-govern",
		"plugin-dsh-factory"
	].map((Slug) => Package.find((Entry) => Entry.Slug === Slug)).filter(Boolean).map((Entry) => [
		{
			Text: Entry.Slug,
			Href: Entry.Href,
			Icon: Entry.Slug
		},
		Entry.Kind,
		Entry.Version
	]);
	const Order = [
		"system-prompt/assemble",
		"llm/stream",
		"tools/pre-execute",
		"tools/post-execute",
		"batch/proposed",
		"fs/observed",
		"agent/status"
	];
	const Group = /* @__PURE__ */ new Map();
	for (const Entry of SelectKind("hook")) {
		const Behavior = BehaviorFor(Entry.Slug);
		if (Behavior) Group.set(Behavior.Seam, (Group.get(Behavior.Seam) ?? 0) + 1);
	}
	const SeamList = Order.filter((Name) => Group.has(Name)).map((Name) => ({
		Name,
		Count: Group.get(Name) ?? 0,
		Href: Route.Behavior
	}));
	const Dash = Transform.filter((Item) => Item.Slug === "hook-dsh-normalize-dash");
	const Used = [.../* @__PURE__ */ new Set([...Seam.map((Entry) => Entry.Name), ...Object.values(Arm).flat()])];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": Content.Title,
		"Description": Content.Description
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "DeepSeek Harness plugins",
		"Title": "Plugins for DeepSeek Harness",
		"Lede": Content.Lede
	}, { "Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<a class="button"${addAttribute(Route.Package, "href")}>
Browse the Package
</a> <a class="button button--quiet"${addAttribute(Route.Setup, "href")}>
Install
</a> ` })}` })} ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Package",
			Value: Count.All,
			Note: "Two releases"
		},
		{
			Label: "Hook",
			Value: Count.Hook,
			Note: "Listen on harness events"
		},
		{
			Label: "Plugin",
			Value: Count.Plugin,
			Note: "Tools and bundles"
		},
		{
			Label: "Test",
			Value: Count.Test,
			Note: "Across both releases"
		}
	] })} <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The turn",
		"Lede": "Every request the model makes passes the same stages, and the harness opens a seam at each one. This is that path, with the stages the family stands at lit."
	})} <div class="section__body stack"> ${renderComponent($$result, "Flow", Flow, {
		"Stage": Stage,
		"Family": Used,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/Graph/Flow.tsx",
		"client:component-export": "default"
	})} <div class="cluster"> <a class="button"${addAttribute(Route.Turn, "href")}>
The turn, stage by stage
</a> <a class="button button--quiet"${addAttribute(Route.Tool, "href")}>
One tool call
</a> <a class="button button--quiet"${addAttribute(Route.Message, "href")}>
What the model reads
</a> </div> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The family",
		"Lede": "Ten packages, one per family, read from source: the seam each stands at, whether the model sees something different, and what reaches the disk."
	})} <div class="section__body stack"> ${renderComponent($$result, "Matrix", $$Matrix, { "Row": Intervention })} <div class="cluster"> <a class="button"${addAttribute(Route.Intervention, "href")}>
Every intervention
</a> <a class="button button--quiet"${addAttribute(Route.Composition, "href")}>
How they compose
</a> </div> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The measure",
		"Lede": "One curve the site can draw without a live run: what a tool result costs the context, with the family and without it."
	})} <div class="section__body stack"> ${renderComponent($$result, "Curve", $$Curve, {})} <div class="cluster"> <a class="button"${addAttribute(Route.Tutorial, "href")}>
One turn, three moments
</a> <a class="button button--quiet"${addAttribute(Route.Dashboard, "href")}>
The board
</a> </div> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "What your model writes" }, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The stream leaves the model, passes a&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "hook" })}, and arrives in the transcript changed.
` })}` })} <div class="section__body stack"> ${renderComponent($$result, "Cabinet", $$Cabinet, {
		"Label": "Transform",
		"State": "live"
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Transform", $$Transform, { "Sample": Dash })} ` })} <div class="cluster"> ${SeamList.map((Item) => renderTemplate`${renderComponent($$result, "Seam", $$Seam, {
		"Name": Item.Name,
		"Count": Item.Count,
		"Href": Item.Href
	})}`)} </div> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Classic and Effect-TS",
		"Lede": "Classic is plain TypeScript. Effect-TS is the same packages rebuilt on Effect."
	})} <div class="section__body grid"> ${renderComponent($$result, "Card", $$Card, {
		"Title": "Classic",
		"Href": Route.Package,
		"Meta": `${Count.Classic} in Classic`
	}, { "default": ($$result) => renderTemplate`
The factory, the core library, the hooks, and the clients.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Effect-TS",
		"Href": Route.Package,
		"Meta": `${Count.EffectTS} in Effect-TS`
	}, { "default": ($$result) => renderTemplate`
The same packages with Effect services, layers, and schemas.
` })} ${Dev && renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Title": "Component",
		"Href": Route.Library,
		"Meta": `${Component.length} total`
	}, { "default": ($$result) => renderTemplate`
The building blocks of every page, shown live.
` })}`} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Package to start with",
		"Lede": "Three of the 119."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Three packages to start with",
		"Head": [
			"Package",
			"Kind",
			"Version"
		],
		"Row": Starters
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Read next" })} <div class="section__body grid"> ${renderComponent($$result, "Card", $$Card, {
		"Title": "Setup",
		"Href": Route.Setup,
		"Meta": "Install"
	}, { "default": ($$result) => renderTemplate`
Install a package and load its bundle patch.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Reference",
		"Href": Route.Reference,
		"Meta": "Package"
	}, { "default": ($$result) => renderTemplate`
Every package with its version.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Behavior",
		"Href": Route.Behavior,
		"Meta": "Hook"
	}, { "default": ($$result) => renderTemplate`
The hooks and the events they listen on.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Workbench",
		"Href": Route.Workbench,
		"Meta": "One turn"
	}, { "default": ($$result) => renderTemplate`
One turn, five seams, two lenses.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Harness",
		"Href": Route.Harness,
		"Meta": "One turn, five machines"
	}, { "default": ($$result) => renderTemplate`
The turn, the call, the conversation, the composition, and the coverage.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Turn",
		"Href": Route.Turn,
		"Meta": `${Stage.length} stage`
	}, { "default": ($$result) => renderTemplate`
The harness with none of our plugins, stage by stage.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Tool call",
		"Href": Route.Tool,
		"Meta": `${Step.length} gate`
	}, { "default": ($$result) => renderTemplate`
One call, four gates, and the plugins that stand at them.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Conversation",
		"Href": Route.Message,
		"Meta": `${Role.length} role`
	}, { "default": ($$result) => renderTemplate`
What the model reads, and the seams that change it.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Timeline",
		"Href": Route.Timeline,
		"Meta": "Release"
	}, { "default": ($$result) => renderTemplate`
Every version the changelogs record.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Trace",
		"Href": Route.Trace,
		"Meta": "One run"
	}, { "default": ($$result) => renderTemplate`
The document, the lane, the board, the graph, the coverage, and the live limit.
` })} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro";
// \0virtual:astro:page:Source/pages/index@_@astro
var page = () => pages_exports;
export { page };
