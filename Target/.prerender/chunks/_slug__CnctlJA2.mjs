import { _ as createComponent, d as SeamHref, g as createAstro, h as $$PageHero, t as $$Base, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Absence } from "./Absence_CT0sNkEM.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import { t as $$StatBand } from "./StatBand_CdwknxlA.mjs";
import { t as $$CodeBlock } from "./CodeBlock_C-lnWEGy.mjs";
import { t as $$Difference } from "./Difference_DYF7I9B3.mjs";
import { t as $$Callout } from "./Callout_CcAHykrn.mjs";
import { t as $$Disclosure } from "./Disclosure_CP1ZjKXi.mjs";
import { t as $$Lane } from "./Lane_U-QS8d-2.mjs";
import { t as $$Card } from "./Card_B9-myqGr.mjs";
import { t as $$Seam } from "./Seam_--BHR75a.mjs";
import { t as Plugin } from "./Plugin_W_iBMq8G.mjs";
/* empty css                 */
import { t as $$Grid } from "./Grid_DWO4zqRQ.mjs";
import { t as $$Pending } from "./Pending_DFcgK_4t.mjs";
// Source/Component/Chain.astro
createAstro("https://deepseek.playform.cloud");
var $$Chain = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Chain;
	const { Link } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ol class="chain"> ${Link.map((Entry) => renderTemplate`<li class="chain__link"${addAttribute(Entry.Current ? "true" : "false", "data-current")}> <span class="chain__card"> <span class="chain__head"> <span class="chain__label">${Entry.Label}</span> ${Entry.Current && renderTemplate`<span class="chain__now">now</span>`} </span> <span class="chain__body">${Entry.Body}</span> </span> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Chain.astro", void 0);
// Source/Component/Fact.astro
createAstro("https://deepseek.playform.cloud");
var $$Fact = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Fact;
	const { Item } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<dl class="fact"> ${Item.map((Phrase, Index) => renderTemplate`<div class="fact__row"> <dt class="fact__index">${String(Index + 1).padStart(2, "0")}</dt> <dd class="fact__text">${Phrase}</dd> </div>`)} </dl>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Fact.astro", void 0);
// Source/Component/Fork.astro
createAstro("https://deepseek.playform.cloud");
var $$Fork = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Fork;
	const { From, Exit } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="fork"> <div class="fork__source"> <span class="fork__label">from</span> <span class="fork__from">${From}</span> </div> <div class="fork__split" aria-hidden="true"> <span class="fork__trunk"></span> ${Exit.map((Entry) => renderTemplate`<span class="fork__branch"${addAttribute(Entry.Taken ? "true" : "false", "data-taken")}></span>`)} </div> <ol class="fork__list"> ${Exit.map((Entry) => renderTemplate`<li class="fork__exit"${addAttribute(Entry.Taken ? "true" : "false", "data-taken")}> <span class="fork__head"> <span class="fork__name">${Entry.Label}</span> <span class="fork__state">${Entry.Taken ? "taken" : "not taken"}</span> </span> <span class="fork__body">${Entry.Body}</span> </li>`)} </ol> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Fork.astro", void 0);
// Source/Component/Ladder.astro
createAstro("https://deepseek.playform.cloud");
var $$Ladder = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Ladder;
	const { Rung } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ol class="ladder"> ${Rung.map((Entry) => renderTemplate`<li class="ladder__rung"${addAttribute(Entry.Mark ? "true" : "false", "data-mark")}> <span class="ladder__value">${Entry.Value}</span> <span class="ladder__text"> <span class="ladder__label">${Entry.Label}</span> <span class="ladder__body">${Entry.Body}</span> ${Entry.Note && renderTemplate`<span class="ladder__note">${Entry.Note}</span>`} </span> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Ladder.astro", void 0);
// Source/Component/Pipeline.astro
createAstro("https://deepseek.playform.cloud");
var $$Pipeline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pipeline;
	const { Stages, Current } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ol class="pipeline"> ${Stages.map((Stage) => renderTemplate`<li class="pipeline__stage"${addAttribute(Stage.Label === Current, "data-current")}> ${Stage.Seam ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <span class="pipeline__label">${Stage.Label}</span> ${renderComponent($$result, "Seam", $$Seam, { "Name": Stage.Seam })} ` })}` : renderTemplate`<span class="pipeline__text">${Stage.Label}</span>`} </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Pipeline.astro", void 0);
// Source/Component/Question.astro
createAstro("https://deepseek.playform.cloud");
var $$Question = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Question;
	const { Text } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<p class="question"> <span class="question__label">Question</span> <span class="question__text">${Text}</span> </p>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Question.astro", void 0);
// Source/Content/Brief.ts
var Brief = [
	{
		Slug: "fs-observation-policy",
		Claim: "A write is refused when the file it changes was never read, and the refusal is the call's result.",
		Kind: "a gate",
		Question: "Why did the write stop before it reached the disk?",
		Fact: [
			"the decision",
			"the listener that made it",
			"the duration"
		],
		Section: [
			"Pipeline",
			"Difference",
			"Grid",
			"Callout"
		]
	},
	{
		Slug: "user-approval",
		Claim: "The call pauses on a person, and the turn measures the pause as part of the call.",
		Kind: "a wait",
		Question: "How long did the world stop, and who restarted it?",
		Fact: [
			"the prompt",
			"the answer",
			"the wait"
		],
		Section: [
			"Lane",
			"Pending",
			"StatBand",
			"Difference"
		]
	},
	{
		Slug: "token-meter",
		Claim: "Every request declares its tokens, so cost is a sum over attempts rather than a single number.",
		Kind: "a meter",
		Question: "What did this turn cost, attempt by attempt?",
		Fact: [
			"the token counts",
			"the model",
			"the effort"
		],
		Section: [
			"StatBand",
			"Table",
			"Curve"
		]
	},
	{
		Slug: "spill-policy",
		Claim: "Past a size, the bytes leave the prompt and the model reads a locator instead.",
		Kind: "a threshold",
		Question: "What does the model read when the result is too large?",
		Fact: [
			"the size",
			"the locator",
			"the retrieval"
		],
		Section: [
			"Ladder",
			"Card",
			"CodeBlock",
			"Absence"
		]
	},
	{
		Slug: "timeout-policy",
		Claim: "A call that outlives its window becomes a job, and the turn goes on without it.",
		Kind: "a clock",
		Question: "What happens to a call that runs past its window?",
		Fact: [
			"the window",
			"the job id",
			"the outcome"
		],
		Section: [
			"Fork",
			"Lane",
			"Pending",
			"Difference"
		]
	},
	{
		Slug: "session-checkpoint-policy",
		Claim: "A turn closes by writing a checkpoint, and a later run resumes from the newest one.",
		Kind: "a lineage",
		Question: "Which file does the next run read?",
		Fact: [
			"the checkpoint",
			"the turn it covers",
			"the file a resume reads"
		],
		Section: [
			"Chain",
			"Difference",
			"Callout"
		]
	},
	{
		Slug: "image-offload",
		Claim: "The image leaves the prompt and a reference takes its place, while the log keeps the bytes.",
		Kind: "a swap",
		Question: "What does the model see where the image was?",
		Fact: [
			"the reference",
			"the original size",
			"the bytes the log keeps"
		],
		Section: [
			"Difference",
			"Card",
			"Absence",
			"Callout"
		]
	},
	{
		Slug: "repeat-tool-reminder",
		Claim: "The third identical call carries a note, and the call still runs.",
		Kind: "a reminder",
		Question: "What does the harness say when a call repeats?",
		Fact: [
			"the repeated call",
			"the note",
			"the count that triggers it"
		],
		Section: [
			"Ladder",
			"Disclosure",
			"Callout"
		]
	}
];
// Source/Content/Showcase.ts
var Showcase = [
	{
		Slug: "fs-observation-policy",
		Operator: "matrix",
		Dimension: "the rule holds at every sandbox mode",
		Grid: {
			Head: ["read first", "never read"],
			Row: [
				{
					Label: "read-only",
					Cell: ["allow", "deny"]
				},
				{
					Label: "workspace-write",
					Cell: ["allow", "deny"]
				},
				{
					Label: "danger-full-access",
					Cell: ["allow", "deny"]
				}
			],
			Caption: "Read-before-write holds at every sandbox mode: a file that was never read is never written."
		}
	},
	{
		Slug: "user-approval",
		Operator: "timeline",
		Dimension: "how long the world stopped",
		Lane: [
			{
				Label: "call",
				Span: [
					{
						Label: "runs",
						Start: 0,
						Duration: 18,
						Kind: "tool"
					},
					{
						Label: "paused",
						Start: 18,
						Duration: 72,
						Kind: "record"
					},
					{
						Label: "settles",
						Start: 90,
						Duration: 10,
						Kind: "tool"
					}
				]
			},
			{
				Label: "person",
				Span: [{
					Label: "reads",
					Start: 18,
					Duration: 30,
					Kind: "record"
				}, {
					Label: "answers",
					Start: 48,
					Duration: 12,
					Kind: "record"
				}]
			},
			{
				Label: "harness",
				Span: [{
					Label: "waits 42s",
					Start: 18,
					Duration: 72,
					Kind: "record"
				}]
			}
		]
	},
	{
		Slug: "token-meter",
		Operator: "ledger",
		Dimension: "cost accumulates across attempts",
		Note: "Four attempts: 51,924 in, 8,760 out, 60,684 total.",
		Attempt: [
			{
				Label: "request 1",
				In: 12480,
				Out: 2106
			},
			{
				Label: "retry",
				In: 12480,
				Out: 1884
			},
			{
				Label: "request 2",
				In: 13104,
				Out: 2460
			},
			{
				Label: "request 3",
				In: 13860,
				Out: 2310
			}
		]
	},
	{
		Slug: "spill-policy",
		Operator: "ladder",
		Dimension: "the same call has three possible bodies",
		Rung: [
			{
				Label: "small",
				Value: "2 KB",
				Body: "the whole result reaches the model",
				Note: "under the cap"
			},
			{
				Label: "truncated",
				Value: "40 KB",
				Body: "the model reads the head and the tail is cut",
				Note: "at the cap"
			},
			{
				Label: "spilled",
				Value: "4.2 MB",
				Body: "the bytes move to a file and the model reads a locator",
				Note: "/tmp/dsh-spill-7f2a",
				Mark: true
			}
		]
	},
	{
		Slug: "timeout-policy",
		Operator: "fork",
		Dimension: "the call's fate depends on a clock",
		Exit: [{
			Label: "blocking",
			Body: "the call holds the turn until the window closes"
		}, {
			Label: "background",
			Body: "the call becomes job bash-7f2a and the turn goes on",
			Taken: true
		}]
	},
	{
		Slug: "session-checkpoint-policy",
		Operator: "chain",
		Dimension: "which file a resume reads",
		Link: [
			{
				Label: "v1",
				Body: "turn 1 closes and checkpoint c-1 is written"
			},
			{
				Label: "v2",
				Body: "turn 2 resumes and writes checkpoint c-2"
			},
			{
				Label: "v3",
				Body: "a later run resumes from checkpoint c-3",
				Current: true
			}
		]
	},
	{
		Slug: "image-offload",
		Operator: "diff",
		Dimension: "the model sees less than the log holds"
	},
	{
		Slug: "repeat-tool-reminder",
		Operator: "ladder",
		Dimension: "the guard speaks without blocking",
		Rung: [
			{
				Label: "the call",
				Value: "1x",
				Body: "bash ls -la runs and returns its result"
			},
			{
				Label: "the repeat",
				Value: "2x",
				Body: "the same call runs again with no note"
			},
			{
				Label: "the repeat with a reminder",
				Value: "3x",
				Body: "the step carries note: repeated call",
				Mark: true
			}
		]
	}
];
// Source/pages/plugin/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://deepseek.playform.cloud");
function getStaticPaths() {
	return Plugin.map((Entry) => ({
		params: { slug: Entry.Slug },
		props: { Slug: Entry.Slug }
	}));
}
var $$Slug = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { Slug } = Astro.props;
	const Entry = Plugin.find((Item) => Item.Slug === Slug);
	if (Entry === void 0) throw new Error(`The path ${Slug} has no plugin record.`);
	const Sketch = Brief.find((Item) => Item.Slug === Slug);
	if (Sketch === void 0) throw new Error(`The plugin ${Slug} has no brief.`);
	const Face = Showcase.find((Item) => Item.Slug === Slug);
	const Page = new Set(Seam.map((Item) => Item.Name));
	const Stage = [
		{
			Label: "pre",
			Seam: "tools/pre-execute"
		},
		{
			Label: "execute",
			Seam: "tools/execute"
		},
		{
			Label: "post",
			Seam: "tools/post-execute"
		},
		{
			Label: "result",
			Seam: "tools/result"
		}
	];
	const Current = Stage.find((Item) => Item.Seam === Entry.Seam[0])?.Label ?? (Entry.Seam[0].startsWith("fs/") ? "execute" : void 0);
	const Contract = [
		["Seam", Entry.Seam.join(", ")],
		["State", Entry.State],
		["Needs logged", Entry.Data.join(", ")]
	];
	const Signature = Face === void 0 ? void 0 : {
		matrix: "Grid",
		timeline: "Lane",
		ledger: "StatBand",
		ladder: "Ladder",
		fork: "Fork",
		chain: "Chain",
		diff: "Difference"
	}[Face.Operator];
	const Heading = {
		"fs-observation-policy:Pipeline": {
			Title: "Where it answers",
			Lede: "One tool call through the pipeline, with the stage that dispatches the filesystem seam marked."
		},
		"fs-observation-policy:Difference": {
			Title: "What the denial replaces",
			Lede: "The same conversation twice, and the write is the only line that changes."
		},
		"fs-observation-policy:Grid": { Title: "The sandbox modes" },
		"fs-observation-policy:Callout": { Title: "Why it holds" },
		"user-approval:Lane": { Title: "The call and the person" },
		"user-approval:Pending": {
			Title: "The open prompt",
			Lede: "The call is neither running nor finished: it is waiting on one person."
		},
		"user-approval:StatBand": {
			Title: "The wait in numbers",
			Lede: "A quick answer and a slow answer are different stories about the same call."
		},
		"user-approval:Difference": {
			Title: "What the ask replaces",
			Lede: "The write is asked rather than done, and the transcript says who it waits for."
		},
		"token-meter:StatBand": { Title: "The totals" },
		"token-meter:Table": {
			Title: "Each attempt",
			Lede: "A retry is another request, and its tokens are its own."
		},
		"token-meter:Curve": {
			Title: "The shape of the cost",
			Lede: "Every attempt, its total, and the line between them."
		},
		"spill-policy:Ladder": { Title: "The size ladder" },
		"spill-policy:Card": {
			Title: "The stored object",
			Lede: "Past the threshold the bytes move to a file and the model holds a locator."
		},
		"spill-policy:CodeBlock": {
			Title: "The head of the file",
			Lede: "The model reads the first lines; the rest waits in the store."
		},
		"spill-policy:Absence": {
			Title: "Without a store",
			Lede: "The threshold has no exit, so the bytes stay in the prompt."
		},
		"timeout-policy:Fork": { Title: "The two exits" },
		"timeout-policy:Lane": {
			Title: "The job's lifetime",
			Lede: "The call keeps running after the turn stops waiting for it."
		},
		"timeout-policy:Pending": {
			Title: "Before it settles",
			Lede: "The job is in flight, and the turn has already moved on."
		},
		"timeout-policy:Difference": {
			Title: "What the job replaces",
			Lede: "The result is not ok; it is a job id the turn can check later."
		},
		"session-checkpoint-policy:Chain": { Title: "The generations" },
		"session-checkpoint-policy:Difference": {
			Title: "What the turn close becomes",
			Lede: "The same close, with a checkpoint written before it."
		},
		"session-checkpoint-policy:Callout": { Title: "The resume point" },
		"image-offload:Difference": { Title: "What the prompt holds" },
		"image-offload:Card": {
			Title: "The attachment",
			Lede: "One object, two representations, and the same bytes behind both."
		},
		"image-offload:Absence": {
			Title: "When the store is absent",
			Lede: "The reference points at nothing, so the image stays inline."
		},
		"image-offload:Callout": { Title: "The retrieval promise" },
		"repeat-tool-reminder:Ladder": { Title: "The repeat ladder" },
		"repeat-tool-reminder:Disclosure": {
			Title: "The injected text",
			Lede: "The note is behind the summary, because the call is the fact and the note is the detail."
		},
		"repeat-tool-reminder:Callout": { Title: "The guard speaks without blocking" }
	};
	function HeadingFor(Name) {
		const Found = Heading[`${Entry.Slug}:${Name}`];
		if (Found === void 0) throw new Error(`The plugin ${Entry.Slug} has no heading for ${Name}.`);
		const Lede = Found.Lede ?? (Name === Signature && Face !== void 0 ? `${Face.Dimension.charAt(0).toUpperCase()}${Face.Dimension.slice(1)}.` : "");
		return {
			Title: Found.Title,
			Lede
		};
	}
	const Wait = 42;
	const Prompt = 1;
	const Attempt = Face?.Attempt ?? [];
	const Total = Attempt.reduce((Sum, Item) => Sum + Item.In + Item.Out, 0);
	const Largest = Math.max(1, ...Attempt.map((Item) => Item.In + Item.Out));
	const Width = 640;
	const Height = 220;
	const Pad = 32;
	const Dot = 3;
	const X = (Index) => Pad + Index * 576 / Math.max(1, Attempt.length - 1);
	const Y = (Value) => 188 - Value / Largest * 156;
	const Path = Attempt.map((Item, Index) => `${Index === 0 ? "M" : "L"}${X(Index).toFixed(1)} ${Y(Item.In + Item.Out).toFixed(1)}`).join(" ");
	const Spilled = Face?.Rung?.find((Item) => Item.Mark === true);
	const Reference = Entry.After.replace(/^.*ref /, "");
	[
		"total 48",
		"drwxr-xr-x  12 reader staff   384 Oct 30 09:14 .",
		"drwxr-xr-x   4 reader staff   128 Oct 30 09:02 ..",
		"-rw-r--r--   1 reader staff  1204 Oct 30 09:14 index.ts"
	].join("\n");
	const Note = "The same call has run three times; read the file once and keep the result.";
	const PendingRow = {
		"user-approval": {
			Name: "approval/request",
			Meta: "the world waits while the prompt is open"
		},
		"timeout-policy": {
			Name: "bash ls -la",
			Meta: "the window is open and the call has not settled"
		}
	}[Entry.Slug];
	const Invariant = {
		"fs-observation-policy": {
			Title: "Read before write",
			Body: "The gate adds no new rule; it makes the existing rule answerable at the seam, and the matrix is the proof that no mode escapes it."
		},
		"session-checkpoint-policy": {
			Title: "One file, one turn",
			Body: "The chain is a lineage rather than a backup: each checkpoint is the state a resume would read, and the newest one wins."
		},
		"image-offload": {
			Title: "The bytes stay behind",
			Body: "The model is not shown the image, but it is not lied to either: the reference is a promise the retrieval step has to keep."
		},
		"repeat-tool-reminder": {
			Title: "A note, not a stop",
			Body: "The guard trusts the note more than a refusal: the call runs, and the model is told why it should not."
		}
	}[Entry.Slug];
	const Missing = {
		"spill-policy": {
			Title: "No store",
			Note: "Without a store the bytes cannot leave the prompt, and the call keeps its full body."
		},
		"image-offload": {
			Title: "No store",
			Note: "Without a store the reference points at nothing, so the image stays inline."
		}
	}[Entry.Slug];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": Entry.Slug,
		"Description": `${Entry.Interjection} ${Sketch.Claim}`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Harness plugin",
		"Title": Entry.Slug
	}, {
		"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Entry.Interjection}` })}`,
		"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, {
			"Label": Entry.Role,
			"Tone": "accent"
		})} ${Entry.Seam.map((Name) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
			"Label": Name,
			"Tone": "neutral"
		})}`)}` })}`
	})} ${maybeRenderHead($$result)}<div class="plugin__brief"> <div class="plugin__claim"> <p class="plugin__kind">${Sketch.Kind}</p> <p class="plugin__sentence">${Sketch.Claim}</p> </div> ${renderComponent($$result, "Question", $$Question, { "Text": Sketch.Question })} ${renderComponent($$result, "Fact", $$Fact, { "Item": Sketch.Fact })} </div> ${Sketch.Section.map((Name) => {
		const Head = HeadingFor(Name);
		return renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
			"Title": Head.Title,
			"Lede": Head.Lede
		})} <div class="section__body"> ${Name === "Pipeline" && renderTemplate`<div class="stack"> ${renderComponent($$result, "Pipeline", $$Pipeline, {
			"Stages": Stage,
			"Current": Current
		})} <p class="muted"> <span class="mono">${Entry.Seam[0]}</span>&nbsp;answers inside the
								marked stage.
</p> </div>`} ${Name === "Difference" && renderTemplate`${renderComponent($$result, "Difference", $$Difference, {
			"Before": Entry.Before,
			"After": Entry.After
		})}`} ${Name === "Grid" && Face !== void 0 && Face.Grid !== void 0 && renderTemplate`${renderComponent($$result, "Grid", $$Grid, {
			"Head": Face.Grid.Head,
			"Row": Face.Grid.Row,
			"Caption": Face.Grid.Caption
		})}`} ${Name === "Lane" && Face !== void 0 && Face.Lane !== void 0 && renderTemplate`${renderComponent($$result, "Lane", $$Lane, { "Lane": Face.Lane })}`} ${Name === "Pending" && PendingRow !== void 0 && renderTemplate`${renderComponent($$result, "Pending", $$Pending, {
			"Name": PendingRow.Name,
			"Meta": PendingRow.Meta
		})}`} ${Name === "StatBand" && Entry.Slug === "user-approval" && renderTemplate`${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
			{
				Label: "Waited",
				Value: `${Wait}s`,
				Note: "The turn held open"
			},
			{
				Label: "Answered by",
				Value: "human",
				Note: "One person"
			},
			{
				Label: "Prompt",
				Value: Prompt,
				Note: "One shot"
			}
		] })}`} ${Name === "StatBand" && Entry.Slug === "token-meter" && renderTemplate`${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
			{
				Label: "Total",
				Value: Total,
				Note: "Tokens across every attempt"
			},
			{
				Label: "Attempt",
				Value: Attempt.length,
				Note: "One request each"
			},
			{
				Label: "Peak",
				Value: Largest,
				Note: "The largest attempt, read and written"
			}
		] })}`} ${Name === "Table" && Entry.Slug === "token-meter" && renderTemplate`${renderComponent($$result, "Table", $$Table, {
			"Caption": "Each attempt, with the tokens it read and the tokens it wrote",
			"Head": [
				"Attempt",
				"In",
				"Out"
			],
			"Row": Attempt.map((Item) => [
				Item.Label,
				String(Item.In),
				String(Item.Out)
			])
		})}`} ${Name === "Curve" && Attempt.length > 0 && renderTemplate`<figure class="plugin__curve"> <svg class="plugin__plot"${addAttribute(`0 0 ${Width} ${Height}`, "viewBox")} role="img" aria-label="Tokens per attempt, read and written together"> <line class="plugin__axis"${addAttribute(Pad, "x1")}${addAttribute(188, "y1")}${addAttribute(608, "x2")}${addAttribute(188, "y2")}></line> <path class="plugin__line"${addAttribute(Path, "d")}></path> ${Attempt.map((Item, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <circle class="plugin__point"${addAttribute(X(Index), "cx")}${addAttribute(Y(Item.In + Item.Out), "cy")}${addAttribute(Dot, "r")}></circle> <text class="plugin__value"${addAttribute(X(Index), "x")}${addAttribute(Y(Item.In + Item.Out) - 8, "y")} text-anchor="middle"> ${Item.In + Item.Out} </text> <text class="plugin__tick"${addAttribute(X(Index), "x")}${addAttribute(204, "y")} text-anchor="middle"> ${Item.Label} </text> ` })}`)} </svg> <figcaption class="plugin__caption"> ${Attempt.length}&nbsp;attempts, each point the tokens it read and wrote
								together. The retry is not free: it repeats the input and adds its own
								output.
</figcaption> </figure>`} ${Name === "Ladder" && Face !== void 0 && Face.Rung !== void 0 && renderTemplate`${renderComponent($$result, "Ladder", $$Ladder, { "Rung": Face.Rung })}`} ${Name === "Card" && Entry.Slug === "spill-policy" && Spilled !== void 0 && renderTemplate`${renderComponent($$result, "Card", $$Card, {
			"Title": "The spilled file",
			"Meta": Spilled.Value
		}, { "default": ($$result) => renderTemplate` <p>
The bytes wait in <span class="mono">${Spilled.Note}</span>; the
								prompt holds the locator.
</p> ` })}`} ${Name === "Card" && Entry.Slug === "image-offload" && renderTemplate`${renderComponent($$result, "Card", $$Card, {
			"Title": "The attachment",
			"Meta": Reference
		}, { "default": ($$result) => renderTemplate` <p>The log keeps the bytes; the prompt keeps the reference.</p> ` })}`} ${Name === "CodeBlock" && Entry.Slug === "spill-policy" && renderTemplate`${renderComponent($$result, "CodeBlock", $$CodeBlock, {
			"Code": Head,
			"Language": "text",
			"Label": "the head of the spilled file"
		})}`} ${Name === "Absence" && Missing !== void 0 && renderTemplate`${renderComponent($$result, "Absence", $$Absence, {
			"Title": Missing.Title,
			"Note": Missing.Note
		})}`} ${Name === "Fork" && Face !== void 0 && Face.Exit !== void 0 && renderTemplate`${renderComponent($$result, "Fork", $$Fork, {
			"From": Entry.Before,
			"Exit": Face.Exit
		})}`} ${Name === "Chain" && Face !== void 0 && Face.Link !== void 0 && renderTemplate`${renderComponent($$result, "Chain", $$Chain, { "Link": Face.Link })}`} ${Name === "Disclosure" && Entry.Slug === "repeat-tool-reminder" && renderTemplate`${renderComponent($$result, "Disclosure", $$Disclosure, { "Summary": "The note the third call carries" }, { "default": ($$result) => renderTemplate` <p class="plugin__note">${Note}</p> ` })}`} ${Name === "Callout" && Invariant !== void 0 && renderTemplate`${renderComponent($$result, "Callout", $$Callout, { "Title": Invariant.Title }, { "default": ($$result) => renderTemplate` <p>${Invariant.Body}</p> ` })}`} </div> </section>`;
	})}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "State",
		"Lede": "The state the interjection unlocks, and the fact the log must carry to show it."
	})} <div class="section__body stack"> <p class="lede"> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Entry.State,
		"Tone": "warn"
	})} </p> <p class="muted"> <span class="plugin__key">Needs logged</span> ${Entry.Data.join(", ")}. Until the harness writes that, this page cannot show the
				state from a real run. It says so in the same slot where the state would appear,
				rather than faking it.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Contract",
		"Lede": "What the plugin listens to, what it unlocks, and what it needs."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": `The contract of ${Entry.Slug}`,
		"Head": ["Part", "Value"],
		"Row": Contract
	})} <p class="muted"> ${Page.has(Entry.Seam[0]) ? renderTemplate`<a${addAttribute(SeamHref(Entry.Seam[0]), "href")}>The seam page</a>` : "The seam page"}&nbsp;lists every hook the family declares at that event, when the family stands there.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugin/[slug].astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugin/[slug].astro";
var $$url = "/plugin/[slug]";
// \0virtual:astro:page:Source/pages/plugin/[slug]@_@astro
var page = () => _slug__exports;
export { page };
