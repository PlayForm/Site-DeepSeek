import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as Ledger } from "./Ledger.server_BfLuMXDC.mjs";
import { t as $$CallStep } from "./CallStep_BcTRyYdY.mjs";
import { n as Step } from "./ToolCall_B28V7jio.mjs";
import { t as $$Curve } from "./Curve_Cm6OwmBj.mjs";
import { t as $$Lane } from "./Lane_U-QS8d-2.mjs";
import { t as $$RoleList } from "./RoleList_CNLMVAJF.mjs";
import { n as $$Trace, t as Record } from "./Trace_D13cL0fG.mjs";
import { t as Role } from "./Message_BOm4sbiG.mjs";
// Source/Content/Lane.ts
var Lane = [
	{
		Label: "Model",
		Span: [
			{
				Label: "step 1",
				Start: 4,
				Duration: 22,
				Kind: "model"
			},
			{
				Label: "step 2",
				Start: 38,
				Duration: 18,
				Kind: "model"
			},
			{
				Label: "step 3",
				Start: 70,
				Duration: 16,
				Kind: "model"
			}
		]
	},
	{
		Label: "Tool",
		Span: [
			{
				Label: "grep",
				Start: 28,
				Duration: 8,
				Kind: "tool"
			},
			{
				Label: "read",
				Start: 58,
				Duration: 6,
				Kind: "tool"
			},
			{
				Label: "write",
				Start: 88,
				Duration: 4,
				Kind: "tool"
			}
		]
	},
	{
		Label: "Disk",
		Span: [{
			Label: "write",
			Start: 92,
			Duration: 3,
			Kind: "disk"
		}]
	},
	{
		Label: "Record",
		Span: [
			{
				Label: "ledger",
				Start: 36,
				Duration: 1,
				Kind: "record"
			},
			{
				Label: "ledger",
				Start: 66,
				Duration: 1,
				Kind: "record"
			},
			{
				Label: "flush",
				Start: 96,
				Duration: 3,
				Kind: "record"
			}
		]
	}
];
// Source/pages/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(($$result, $$props, $$slots) => {
	const Durable = Record.filter((Entry) => Entry.Durable).length;
	const Live = Record.length - Durable;
	const Gate = Step.filter((Entry) => Entry.Decides.length > 0).length;
	const Stat = [
		{
			Label: "Record",
			Value: Record.length,
			Note: "One turn"
		},
		{
			Label: "Durable",
			Value: Durable,
			Note: "A reload keeps"
		},
		{
			Label: "Live",
			Value: Live,
			Note: "Process only"
		},
		{
			Label: "Ledger",
			Value: Ledger.length,
			Note: "Files the family writes"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Dashboard",
		"Description": `One turn as an operator would read it: ${Record.length} records, ${Step.length} tool gates, and the ledgers the family writes.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Observability",
		"Title": "The board"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
One turn, read the way an operator reads it: the ${renderComponent($$result, "Term", $$Term, { "Name": "trace" })} it leaves, the
			messages the model saw, the gates the tool call passed, and the ledgers the family wrote
			beside them.
` })}` })} ${maybeRenderHead($$result)}<dl class="board__band"> ${Stat.map((Entry) => renderTemplate`<div class="board__stat"> <dt class="board__label">${Entry.Label}</dt> <dd class="board__value">${Entry.Value}</dd> <dd class="board__note">${Entry.Note}</dd> </div>`)} </dl> <div class="board"> <section class="board__main"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Trace",
		"Lede": "The records the run leaves, in the order the log writes them."
	})} <div class="board__body"> ${renderComponent($$result, "Trace", $$Trace, { "Record": Record })} </div> </section> <aside class="board__side"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Ledger",
		"Lede": "One file per plugin, written beside the log."
	})} <div class="board__body"> <ul class="board__ledger"> ${Ledger.slice(0, 8).map((Entry) => renderTemplate`<li class="board__ledger-row"> <a class="board__ledger-slug"${addAttribute(Entry.Href, "href")}> ${Entry.Slug} </a> <span class="board__ledger-path">${Entry.Path}</span> </li>`)} </ul> <p class="board__more"> <a${addAttribute(Route.Connect, "href")}>Every ledger file</a> </p> </div> </aside> </div> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Message",
		"Lede": "The four parts of the conversation the model reads, and the seam that can change each."
	})} <div class="section__body"> ${renderComponent($$result, "RoleList", $$RoleList, { "Entry": Role })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Call",
		"Lede": "The tool pipeline a call passes, and where a decision can stop it."
	})} <div class="section__body stack"> ${renderComponent($$result, "CallStep", $$CallStep, { "Entry": Step })} <p class="board__note-line"> ${Gate}&nbsp;of the ${Step.length}&nbsp;steps carry a decision vocabulary the harness
				documents.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Lane",
		"Lede": "The same turn as time: who was busy, when, and for how long. A bar is one span of work, and the four kinds differ by fill weight rather than by hue."
	})} <div class="section__body stack"> ${renderComponent($$result, "LaneChart", $$Lane, { "Lane": Lane })} <p class="board__note-line">
The spans are authored: a real timeline needs a live run's timings, which the
				fixture does not carry.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Measure",
		"Lede": "The one curve the site can draw without a live run."
	})} <div class="section__body"> ${renderComponent($$result, "Curve", $$Curve, {})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Live",
		"Lede": "The board is static today. The shape is the one a live source fills."
	})} <div class="section__body stack"> <p class="lede">
Every panel above reads an authored map today: the trace from the harness's own
				turn, the messages from the seam table, the calls from the pipeline, and the ledgers
				from each package's documented path. A plugin that served the same four from a
				running harness would change the source, not the layout.
</p> <div class="cluster"> <a class="button"${addAttribute(Route.Trace, "href")}>
The trace
</a> <a class="button button--quiet"${addAttribute(Route.Message, "href")}>
The conversation
</a> <a class="button button--quiet"${addAttribute(Route.Tool, "href")}>
The tool call
</a> </div> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/dashboard.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/dashboard.astro";
var $$url = "/dashboard";
// \0virtual:astro:page:Source/pages/dashboard@_@astro
var page = () => dashboard_exports;
export { page };
