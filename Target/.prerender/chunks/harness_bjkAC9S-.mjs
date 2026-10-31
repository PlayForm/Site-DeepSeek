import { _ as createComponent, d as SeamHref, g as createAstro, h as $$PageHero, l as PackageHref, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { t as $$Badge } from "./Badge_DH5fDljn.mjs";
import { t as Arm } from "./Arm_CPuxlRGj.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import { n as Stage, t as SeamRow } from "./Turn_CeuwuD0r.mjs";
import { t as $$StatBand } from "./StatBand_9iPwwZ-l.mjs";
import { t as $$Term } from "./Term_rdCIvkpk.mjs";
import { i as Intervention, n as Role, r as $$Matrix, t as Step } from "./ToolCall_BqW38eH-.mjs";
// Source/Component/Anchor.astro
createAstro("https://deepseek.playform.cloud");
var $$Anchor = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Anchor;
	const { Entry } = Astro.props;
	const Current = Entry[0]?.Href;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="anchor" aria-label="On this page"> <ol class="anchor__list"> ${Entry.map((Item) => renderTemplate`<li class="anchor__item"> <a class="anchor__link"${addAttribute(Item.Href, "href")}${addAttribute(Item.Href === Current ? "location" : void 0, "aria-current")}> ${Item.Label} </a> </li>`)} </ol> </nav>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Anchor.astro", void 0);
// Source/Component/ArmChain.astro
createAstro("https://deepseek.playform.cloud");
var $$ArmChain = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ArmChain;
	const { Seam, Arm, Note, Linked } = Astro.props;
	const Tone = (Position) => Position === "prepend" ? "accent" : Position === "independent" ? "quiet" : "neutral";
	return renderTemplate`${maybeRenderHead($$result)}<article class="arm-chain"> <header class="arm-chain__head"> <h3 class="arm-chain__seam"> ${Linked ? renderTemplate`<a class="arm-chain__link"${addAttribute(SeamHref(Seam), "href")}> ${Seam} </a>` : Seam} </h3> <span class="arm-chain__count">${Arm.length}&nbsp;arm</span> </header> <ol class="arm-chain__list"> ${Arm.map((Entry, Index) => renderTemplate`<li class="arm-chain__arm"${addAttribute(Entry.Position, "data-position")}> <span class="arm-chain__order">${String(Index + 1).padStart(2, "0")}</span> <a class="arm-chain__slug"${addAttribute(PackageHref(Entry.Slug), "href")}> ${Entry.Slug} </a> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Entry.Position,
		"Tone": Tone(Entry.Position)
	})} <span class="arm-chain__does">${Entry.Does}</span> </li>`)} </ol> <p class="arm-chain__note">${Note}</p> </article>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/ArmChain.astro", void 0);
// Source/Component/RoleList.astro
createAstro("https://deepseek.playform.cloud");
var $$RoleList = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RoleList;
	const { Entry } = Astro.props;
	const Page = new Set(Seam.map((Item) => Item.Name));
	return renderTemplate`${maybeRenderHead($$result)}<ol class="role"> ${Entry.map((Item) => renderTemplate`<li class="role__item"> <header class="role__head"> <span class="role__order">${String(Item.Order).padStart(2, "0")}</span> <h3 class="role__name">${Item.Name}</h3> </header> <p class="role__what">${Item.What}</p> <dl class="role__facts"> <div class="role__pair"> <dt class="role__label">Seam</dt> <dd class="role__value"> <ul class="role__seams"> ${Item.Seam.map((Name) => renderTemplate`<li class="role__seam"> ${Page.has(Name) ? renderTemplate`<a class="role__link"${addAttribute(SeamHref(Name), "href")}> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": "accent"
	})} </a>` : renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": "quiet"
	})}`} </li>`)} </ul> </dd> </div> <div class="role__pair"> <dt class="role__label">Plugin</dt> <dd class="role__value"> ${Item.Plugin.length > 0 ? renderTemplate`<ul class="role__plugins"> ${Item.Plugin.map((Name) => renderTemplate`<li> <a class="role__plugin"${addAttribute(PackageHref(Name), "href")}> ${Name} </a> </li>`)} </ul>` : renderTemplate`<span class="role__none">none</span>`} </dd> </div> </dl> <p${addAttribute(["role__change", { "role__change--quiet": Item.Plugin.length === 0 }], "class:list")}> ${Item.Plugin.length === 0 ? "unchanged" : Item.Change} </p> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/RoleList.astro", void 0);
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
// Source/Component/Stage.astro
createAstro("https://deepseek.playform.cloud");
var $$Stage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Stage;
	const { Entry, Used, Page } = Astro.props;
	function IsUsed(Name) {
		return Used.includes(Name);
	}
	function HasPage(Name) {
		return Page.includes(Name);
	}
	return renderTemplate`${maybeRenderHead($$result)}<ol class="stage"> ${Entry.map((Item) => renderTemplate`<li class="stage__step"> <span class="stage__index">${String(Item.Index).padStart(2, "0")}</span> <div class="stage__body"> <header class="stage__head"> <h3 class="stage__title">${Item.Title}</h3> </header> <dl class="stage__flow"> <div class="stage__pair"> <dt class="stage__label">Enters</dt> <dd class="stage__value">${Item.Enters}</dd> </div> <div class="stage__pair"> <dt class="stage__label">Leaves</dt> <dd class="stage__value">${Item.Leaves}</dd> </div> </dl> ${Item.Seam.length > 0 ? renderTemplate`<ul class="stage__seams"> ${Item.Seam.map((Name) => renderTemplate`<li class="stage__seam"> ${HasPage(Name) ? renderTemplate`<a class="stage__link"${addAttribute(SeamHref(Name), "href")}> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": IsUsed(Name) ? "accent" : "quiet"
	})} </a>` : renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": IsUsed(Name) ? "accent" : "quiet"
	})}`} </li>`)} </ul>` : renderTemplate`<p class="stage__empty">no seam here</p>`} </div> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Stage.astro", void 0);
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
// Source/Content/Composition.ts
var Layer = [
	{
		Seam: "agent/pre-step",
		Arm: [
			{
				Slug: "hook-dsh-comment-filter",
				Position: "plain",
				Does: "reads the intent it will act on later"
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "adds a coaching note to the step"
			},
			{
				Slug: "hook-dsh-live-containers",
				Position: "plain",
				Does: "adds the live container state"
			},
			{
				Slug: "plugin-dsh-batch-edit",
				Position: "plain",
				Does: "arms its one-shot batch flag"
			},
			{
				Slug: "hook-dsh-ccr",
				Position: "plain",
				Does: "runs the middle-turn archive decision when its engine is on"
			}
		],
		Note: "The first seam of every step, and the busiest: five packages read or extend the step before the model is called."
	},
	{
		Seam: "tools/pre-execute",
		Arm: [
			{
				Slug: "hook-dsh-workspace-govern",
				Position: "plain",
				Does: "allows, denies, or asks"
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "annotates the call it sees"
			},
			{
				Slug: "plugin-dsh-batch-edit",
				Position: "plain",
				Does: "turns its armed flag into a batch"
			}
		],
		Note: "The gate: a deny here stops the call before any tool body runs, which is what makes the guard a guard."
	},
	{
		Seam: "tools/execute",
		Arm: [{
			Slug: "hook-dsh-live-containers",
			Position: "plain",
			Does: "wraps the tool body"
		}],
		Note: "The only arm around the tool body itself, which is where a timeout or a metric would attach."
	},
	{
		Seam: "tools/post-execute",
		Arm: [
			{
				Slug: "hook-dsh-ccr",
				Position: "prepend",
				Does: "compresses an oversized result into a preview and a marker"
			},
			{
				Slug: "hook-dsh-comment-filter",
				Position: "prepend",
				Does: "strips comments from the result"
			},
			{
				Slug: "hook-dsh-normalize-dash",
				Position: "prepend",
				Does: "normalizes the result's text"
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "reads the result and records a lesson"
			},
			{
				Slug: "hook-dsh-live-containers",
				Position: "plain",
				Does: "reads the result for its monitor"
			},
			{
				Slug: "hook-dsh-workspace-govern",
				Position: "plain",
				Does: "observes the result of a call it allowed"
			}
		],
		Note: "The chain that matters: the three prepended arms run outside the plain listeners, so CCR compresses the bytes the normalizers already rewrote."
	},
	{
		Seam: "system-prompt/assemble",
		Arm: [{
			Slug: "hook-dsh-tool-coach",
			Position: "plain",
			Does: "adds its coaching section"
		}, {
			Slug: "hook-dsh-live-containers",
			Position: "plain",
			Does: "adds its live-state section"
		}],
		Note: "The prompt is assembled per step, so a section added here is added to every request the step makes."
	},
	{
		Seam: "llm/stream",
		Arm: [{
			Slug: "hook-dsh-normalize-dash",
			Position: "plain",
			Does: "rewrites each chunk as it arrives"
		}],
		Note: "The last seam before the model's text becomes the transcript, and the one place a character can still change."
	}
];
// Source/pages/harness.astro
var harness_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Harness,
	file: () => $$file,
	url: () => $$url
});
var $$Harness = createComponent(($$result, $$props, $$slots) => {
	const Used = [.../* @__PURE__ */ new Set([...Seam.map((Entry) => Entry.Name), ...Object.values(Arm).flat()])];
	const Path = new Set(SeamRow.map((Entry) => Entry.Name));
	const Documented = Seam.filter((Entry) => Path.has(Entry.Name)).length;
	const Listened = Used.filter((Name) => Path.has(Name)).length;
	const Page = Seam.map((Entry) => Entry.Name);
	const ArmCount = Layer.reduce((Total, Entry) => Total + Entry.Arm.length, 0);
	const Change = [...new Set(Role.flatMap((Entry) => Entry.Seam))];
	const Section = [
		{
			Href: "#claim",
			Label: "The claim"
		},
		{
			Href: "#turn",
			Label: "The turn"
		},
		{
			Href: "#call",
			Label: "The call"
		},
		{
			Href: "#fate",
			Label: "The fate"
		},
		{
			Href: "#conversation",
			Label: "The conversation"
		},
		{
			Href: "#composition",
			Label: "The composition"
		},
		{
			Href: "#coverage",
			Label: "The coverage"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Harness",
		"Description": "One turn of the harness from the queue to the close, and the family that stands in it."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "One turn",
		"Title": "The harness"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
From the queue to the close, and the&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })} where a plugin of this family can stand in it.
` })}` })} ${renderComponent($$result, "Anchor", $$Anchor, { "Entry": Section })} ${maybeRenderHead($$result)}<section class="section" id="claim"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "The claim" })} <div class="section__body stack"> <p class="lede">
The default turn already has every slot. Only the slots are empty.
</p> <p>
The family documents ${Documented}&nbsp;of the ${SeamRow.length}&nbsp;seam on this path
				and registers arms at ${Listened - Documented}&nbsp;more, so the lit stages below are
				where it actually listens. Every page about the family is a comparison against this
				one.
</p> ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Stage",
			Value: Stage.length,
			Note: "In one turn"
		},
		{
			Label: "Seam",
			Value: SeamRow.length,
			Note: "On the path"
		},
		{
			Label: "Documented",
			Value: Documented,
			Note: "With a README hook"
		},
		{
			Label: "Lit",
			Value: Listened,
			Note: "Where the family listens"
		}
	] })} </div> </section> <section class="section" id="turn"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The turn",
		"Lede": "A turn is zero or more steps, and a step is one model request plus the tools it calls. One entry per stage, in the order the turn reaches it; a seam the family uses is lit, and a seam it does not use stays quiet."
	})} <div class="section__body stack"> ${renderComponent($$result, "StageRail", $$Stage, {
		"Entry": Stage,
		"Used": Used,
		"Page": Page
	})} <p class="muted">
The rail names what enters each stage and what leaves it, so the turn reads as a
				chain of inputs and outputs rather than a list of names.
</p> </div> </section> <section class="section" id="call"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "The call" }, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The model asks for a tool, and the harness decides ${Step.length}&nbsp;times: whether
				the call may run, what body runs, what the model reads back, and what is frozen as
				the record.
` })}` })} <div class="section__body stack"> ${renderComponent($$result, "Sequence", $$Sequence, {})} <p class="muted">
Every change the family makes to a call happens between the gate and the result: a
				call can be refused before it runs, and a result can be rewritten before it is read.
				A hook at either seam is a waterfall listener, so it calls the harness's next() and
				returns the payload the next listener sees.
</p> </div> </section> <section class="section" id="fate"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The fate",
		"Lede": "The call's life is one line, and every way off it is an exit, not a step. A refusal leaves before the body runs, and a failure or a timeout leaves while it runs."
	})} <div class="section__body"> ${renderComponent($$result, "StateLife", $$State, {})} </div> </section> <section class="section" id="conversation"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "The conversation" }, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
One entry per part of the message the model reads, in the order it reads them, and
				the ${Change.length}&nbsp;seam that can change them.
` })}` })} <div class="section__body stack"> ${renderComponent($$result, "RoleList", $$RoleList, { "Entry": Role })} <p class="muted">
The model never sees the harness, only the messages the log projects: every request
				has to be reconstructable from the log, so the seam that changes a message changes
				what the next request carries.
</p> </div> </section> <section class="section" id="composition"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "The composition" }, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${ArmCount}&nbsp;arms across ${Layer.length}&nbsp;seam, in the order they run, and each
				one is registered twice, at the same seam in the same position.
` })}` })} <div class="section__body stack"> ${Layer.map((Entry) => renderTemplate`${renderComponent($$result, "ArmChain", $$ArmChain, {
		"Seam": Entry.Seam,
		"Arm": Entry.Arm,
		"Note": Entry.Note,
		"Linked": Page.includes(Entry.Seam)
	})}`)} <p class="muted">
A prepended arm is registered outside the listeners that mount with the bundle, so
				its output is what the plain listeners see. Two arms do not compose at all: cost
				records every committed event, and the journal records every write.
</p> </div> </section> <section class="section" id="coverage"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The coverage",
		"Lede": "The turn runs left to right. A filled square is a plugin that changes what the model reads next at that seam, a hollow one records what happened there, and a dotted outline is neither."
	})} <div class="section__body stack"> ${renderComponent($$result, "Matrix", $$Matrix, { "Row": Intervention })} <p class="muted"> ${Intervention.length}&nbsp;plugin, one per family, read from source: the seam each
				stands at, whether the model sees something different, and what reaches the disk.
				Every row exists twice, and the twins agree on the seam and the ledger line; they
				differ in the wiring, where the Effect tree returns Effect envelopes and the Classic
				tree returns the dispatch envelope.
</p> <div class="cluster"> <a class="button"${addAttribute(Route.Behavior, "href")}>Every seam, with its hooks</a> <a class="button button--quiet"${addAttribute(Route.Connect, "href")}>The ledgers</a> </div> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/harness.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/harness.astro";
var $$url = "/harness";
// \0virtual:astro:page:Source/pages/harness@_@astro
var page = () => harness_exports;
export { page };
