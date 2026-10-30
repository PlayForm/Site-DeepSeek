import { _ as createComponent, a as Package, c as SelectKind, g as createAstro, h as $$PageHero, m as Content, n as Count, p as Dev, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, d as renderSlot, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as Arm } from "./Arm_CPuxlRGj.mjs";
import { t as BehaviorFor } from "./Behavior_C7i5cYpI.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import { n as Stage } from "./Turn_CeuwuD0r.mjs";
import { t as $$StatBand } from "./StatBand_CdwknxlA.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Transform } from "./Transform_CB4Qta1i.mjs";
import { t as Transform } from "./Transform_CwTo7UZW.mjs";
import { n as Step } from "./ToolCall_B28V7jio.mjs";
import { t as $$Curve } from "./Curve_Cm6OwmBj.mjs";
import { t as Role } from "./Message_BOm4sbiG.mjs";
import { t as $$Card } from "./Card_B9-myqGr.mjs";
import { t as Flow } from "./Flow_CjKT_MeR.mjs";
import { n as Intervention, t as $$Matrix } from "./Matrix_yv2aGFPk.mjs";
import { t as $$Seam } from "./Seam_--BHR75a.mjs";
// Source/Component/Cabinet.astro
createAstro("https://deepseek.playform.cloud");
var $$Cabinet = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Cabinet;
	const { Label, State = "exhibit" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="cabinet"> <span class="cabinet__plane" aria-hidden="true"></span> <div class="cabinet__front"> <div class="cabinet__lintel"> <span class="cabinet__label">${Label}</span> <span class="cabinet__state">${State}</span> </div> <div class="cabinet__aperture"> ${renderSlot($$result, $$slots["default"])} </div> </div> <span class="cabinet__wall" aria-hidden="true"></span> </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Cabinet.astro", void 0);
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
	}
];
// Source/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
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
		"Title": "Observatory",
		"Href": Route.Observatory,
		"Meta": "Graph"
	}, { "default": ($$result) => renderTemplate`
The package graph, with the dependency arrows.
` })} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro";
// \0virtual:astro:page:Source/pages/index@_@astro
var page = () => pages_exports;
export { page };
