import { _ as createComponent, h as $$PageHero, l as PackageHref, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$CodeBlock } from "./CodeBlock_C-lnWEGy.mjs";
import { t as $$CallStep } from "./CallStep_BcTRyYdY.mjs";
import { n as Step } from "./ToolCall_B28V7jio.mjs";
import { t as HookFor } from "./Hook_DRjGtyP_.mjs";
// Source/Content/Sequence.ts
var Actor = [
	"Model",
	"Agent",
	"Tools",
	"Tool body",
	"Disk"
];
var Message = [
	{
		From: "Model",
		To: "Agent",
		Label: "tool/call",
		Durable: true
	},
	{
		From: "Agent",
		To: "Tools",
		Label: "the call",
		Seam: "tools/pre-execute"
	},
	{
		From: "Tools",
		To: "Tool body",
		Label: "dispatch",
		Seam: "tools/execute"
	},
	{
		From: "Tool body",
		To: "Disk",
		Label: "write",
		Durable: true
	},
	{
		From: "Tool body",
		To: "Tools",
		Label: "the result"
	},
	{
		From: "Tools",
		To: "Agent",
		Label: "the result",
		Seam: "tools/post-execute"
	},
	{
		From: "Agent",
		To: "Model",
		Label: "tool/result",
		Durable: true
	}
];
// Source/Component/Sequence.astro
var $$Sequence = createComponent(($$result, $$props, $$slots) => {
	const Width = 760;
	const Head = 40;
	const Row = 46;
	const Pad = 20;
	const Height = Head + Message.length * Row + Pad;
	const Column = (Index) => Pad + Index * 720 / (Actor.length - 1);
	const At = (Name) => Column(Actor.indexOf(Name));
	const Seam = Message.filter((Item) => Item.Seam !== void 0).length;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="sequence"> <svg class="sequence__plot"${addAttribute(`0 0 ${Width} ${Height}`, "viewBox")} role="img" aria-label="One tool call as a sequence: the participants, the messages between them, and the seams each dispatch fires"> ${Actor.map((Name, Index) => renderTemplate`<g> <line class="sequence__life"${addAttribute(Column(Index), "x1")}${addAttribute(Head, "y1")}${addAttribute(Column(Index), "x2")}${addAttribute(Height - Pad, "y2")}></line> <text class="sequence__actor"${addAttribute(Column(Index), "x")}${addAttribute(20, "y")} text-anchor="middle"> ${Name} </text> </g>`)} ${Message.map((Item, Index) => {
		const Y = Head + Index * Row + 20;
		const From = At(Item.From);
		const To = At(Item.To);
		const Left = Math.min(From, To);
		const Right = Math.max(From, To);
		const Mid = (Left + Right) / 2;
		return renderTemplate`<g class="sequence__msg"${addAttribute(Item.Durable === true, "data-durable")}> <line class="sequence__line"${addAttribute(Left, "x1")}${addAttribute(Y, "y1")}${addAttribute(Right - 6, "x2")}${addAttribute(Y, "y2")}></line> <polygon class="sequence__head"${addAttribute(To > From ? `${Right},${Y} ${Right - 8},${Y - 4} ${Right - 8},${Y + 4}` : `${Left},${Y} ${Left + 8},${Y - 4} ${Left + 8},${Y + 4}`, "points")}></polygon> <text class="sequence__label"${addAttribute(Mid, "x")}${addAttribute(Y - 8, "y")} text-anchor="middle"> ${Item.Label} </text> ${Item.Seam && renderTemplate`<text class="sequence__seam"${addAttribute(Mid, "x")}${addAttribute(Y + 16, "y")} text-anchor="middle"> ${Item.Seam} </text>`} </g>`;
	})} </svg> <figcaption class="sequence__caption"> ${Message.length}&nbsp;messages between ${Actor.length}&nbsp;participants, and ${Seam}&nbsp;of
		them fire a seam. A solid message is one the log keeps; a dashed one exists only while the
		process runs.
</figcaption> </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Sequence.astro", void 0);
// Source/Content/State.ts
var State = [
	{
		Name: "proposed",
		Note: "the model asked for the call",
		Tone: "start"
	},
	{
		Name: "gated",
		Note: "a listener allowed it",
		Tone: "ok"
	},
	{
		Name: "running",
		Note: "the tool body is executing",
		Tone: "ok"
	},
	{
		Name: "settled",
		Note: "the result is the model's next input",
		Tone: "ok"
	},
	{
		Name: "denied",
		Note: "a listener refused it",
		Tone: "warn"
	},
	{
		Name: "failed",
		Note: "the body raised",
		Tone: "warn"
	},
	{
		Name: "background",
		Note: "the body outlived its window",
		Tone: "quiet"
	}
];
var Edge = [
	{
		From: "proposed",
		To: "gated",
		Label: "allow"
	},
	{
		From: "gated",
		To: "running",
		Label: "dispatch"
	},
	{
		From: "running",
		To: "settled",
		Label: "return"
	},
	{
		From: "proposed",
		To: "denied",
		Label: "deny or ask"
	},
	{
		From: "running",
		To: "failed",
		Label: "raise"
	},
	{
		From: "running",
		To: "background",
		Label: "timeout"
	}
];
// Source/Component/State.astro
var $$State = createComponent(($$result, $$props, $$slots) => {
	const Main = State.filter((Item) => Item.Tone !== "warn" && Item.Tone !== "quiet");
	const Off = State.filter((Item) => Item.Tone === "warn" || Item.Tone === "quiet");
	return renderTemplate`${maybeRenderHead($$result)}<div class="state"> <ol class="state__line"> ${Main.map((Item, Index) => renderTemplate`<li class="state__cell"${addAttribute(Item.Tone, "data-tone")}> <span class="state__name">${Item.Name}</span> <span class="state__note">${Item.Note}</span> ${Index < Main.length - 1 && renderTemplate`<span class="state__edge" aria-hidden="true"> <span class="state__label"> ${Edge.find((Move) => Move.From === Item.Name)?.Label ?? "then"} </span> </span>`} </li>`)} </ol> <ul class="state__off"> ${Off.map((Item) => renderTemplate`<li class="state__exit"${addAttribute(Item.Tone, "data-tone")}> <span class="state__name">${Item.Name}</span> <span class="state__note">${Item.Note}</span> <span class="state__from">
from ${Edge.find((Move) => Move.To === Item.Name)?.From ?? "the line"} </span> </li>`)} </ul> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/State.astro", void 0);
// Source/pages/tool.astro
var tool_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tool,
	file: () => $$file,
	url: () => $$url
});
var $$Tool = createComponent(($$result, $$props, $$slots) => {
	const Gate = Step.length;
	const Decided = Step.filter((Item) => Item.Decides.length > 0).length;
	const Standing = new Set(Step.flatMap((Item) => Item.Plugin)).size;
	const Call = `call: grep
args: { pattern: "tools/pre-execute", path: "Source" }`;
	const After = `[grep:4 matches | Source/Content/Turn.ts:88: tools/pre-execute]
<<<CCR:9f2c1a7d4b8e0c5a6d3f1024|grep|3172>>>`;
	const Row = [
		[
			"allow",
			"Passes the call to the registered guards, and then to the body.",
			"None of the four: a gate with nothing to say returns the downstream decision unchanged."
		],
		[
			"deny",
			"Skips the guards and the body: the refusal becomes the result, and the call still reaches tools/post-execute and tools/result.",
			{
				Text: "hook-dsh-workspace-govern",
				Href: PackageHref("hook-dsh-workspace-govern")
			}
		],
		[
			"ask",
			"Opens approval/request, one prompt: allowed once continues to the guards, and rejected, cancelled, or unavailable is a deny.",
			{
				Text: "hook-dsh-workspace-govern",
				Href: PackageHref("hook-dsh-workspace-govern")
			}
		],
		[
			"accept",
			"The result stands as the model will read it.",
			"hook-dsh-ccr and hook-dsh-comment-filter, carrying the content they rewrote."
		],
		[
			"block",
			"The result is withheld from the model.",
			"None of the four: no listener here blocks a result."
		],
		[
			"replace",
			"The result is replaced before it becomes model content.",
			{
				Text: "hook-dsh-ccr",
				Href: PackageHref("hook-dsh-ccr")
			}
		],
		[
			"add context",
			"Extra context is appended to the batch after the recorded results.",
			"None of the four: no listener here adds context."
		]
	];
	const Answer = Step.map((Item) => [
		Item.Title,
		Item.Seam === "" ? "no seam" : Item.Seam,
		Item.Plugin.length > 0 ? Item.Plugin.map((Slug) => ({
			Text: Slug,
			Href: PackageHref(Slug)
		})) : "none",
		HookFor(Item.Seam).length > 0 ? HookFor(Item.Seam).map((Entry) => ({
			Text: Entry.Slug,
			Href: `/plugin/${Entry.Slug}/`
		})) : "none"
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Tool call",
		"Description": `One call through ${Gate} steps and ${Standing} packages, from the gate to the frozen outcome.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Tool call",
		"Title": "One call, four gates"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The model asks for a tool, and the harness decides ${Gate}&nbsp;times: whether the call
			may run, what body runs, what the model reads back, and what is frozen as the record.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "The call" }, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Decided}&nbsp;of the ${Gate}&nbsp;steps carry a decision vocabulary the docs name,
				and the other&nbsp;${Gate - Decided}&nbsp;say so rather than borrow a word. A seam
				with a page on this site is linked, and each package is linked at the step where it
				acts.
` })}` })} <div class="section__body"> ${renderComponent($$result, "CallStep", $$CallStep, { "Entry": Step })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The call, as a sequence",
		"Lede": "The same call drawn as participants and messages: who sends what to whom, and which dispatch fires a seam."
	})} <div class="section__body"> ${renderComponent($$result, "Sequence", $$Sequence, {})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The call, as a lifecycle",
		"Lede": "Four states on the main line, and three ways off it. A refusal is an exit, not a step."
	})} <div class="section__body"> ${renderComponent($$result, "StateLife", $$State, {})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "The result, rewritten" }, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
A grep call over this site's own source, and the same result after the CCR hook has
				stored it.
` })}` })} <div class="section__body stack"> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "The call",
		"Language": "text",
		"Code": Call
	})} ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "What the model reads back",
		"Language": "text",
		"Code": After
	})} <p>
The default hands the model every byte the tool wrote. The hook stores the bytes,
				hands back the shape of the result, and keeps the rest one call away:&nbsp;
<a${addAttribute(PackageHref("hook-dsh-ccr"), "href")}>ccr_retrieve</a> is the one tool that reads a
				marker back, so the bytes are retrievable rather than gone. Nothing is dropped and
				nothing is summarized by a model: the preview is a pure function of the result, and
				the marker is the hash of the exact bytes that were stored.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Decision",
		"Lede": "One row per decision the docs name, with what the harness does at that word and which of the four plugins can return it."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "The decision vocabulary the tool pipeline names, what the harness does at each word, and the plugin that can return it",
		"Head": [
			"Decision",
			"What the harness does",
			"Which plugin can return it"
		],
		"Row": Row
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Who answers",
		"Lede": "One row per stage of the call, the seam it dispatches, and the plugins that answer there: the family's own, and the harness's where this site documents one."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Each stage of the tool pipeline, its seam, and the plugins that answer there",
		"Head": [
			"Stage",
			"Seam",
			"Family",
			"Harness"
		],
		"Row": Answer
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Where this sits" })} <div class="section__body stack"> <p class="lede">
Every change the family makes to a call happens between the gate and the result: a
				call can be refused before it runs, and a result can be rewritten before it is read.
</p> <p>
The turn that contains the call, and every seam the family stands at, are the two
				pages that place this one.
</p> <div class="cluster"> <a class="button"${addAttribute(Route.Turn, "href")}>
The whole turn
</a> <a class="button button--quiet"${addAttribute(Route.Behavior, "href")}>
Every seam
</a> </div> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tool.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tool.astro";
var $$url = "/tool";
// \0virtual:astro:page:Source/pages/tool@_@astro
var page = () => tool_exports;
export { page };
