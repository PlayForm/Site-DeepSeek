import { _ as createComponent, a as Package, g as createAstro, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Absence } from "./Absence_CT0sNkEM.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as $$Pager } from "./Pager_CNGoi-sm.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$Icon } from "./Icon_CYqR1_Kx.mjs";
import { n as ArmFor } from "./Arm_CPuxlRGj.mjs";
import { t as BehaviorFor } from "./Behavior_C7i5cYpI.mjs";
import { n as SeamFor } from "./Harness_Dw5IkvLG.mjs";
import { t as ConfigFor } from "./Config.server_C6g1kF1m.mjs";
import { t as $$Transform } from "./Transform_CB4Qta1i.mjs";
import { t as Transform } from "./Transform_CwTo7UZW.mjs";
import { t as $$CodeBlock } from "./CodeBlock_C-lnWEGy.mjs";
import { t as $$Difference } from "./Difference_DYF7I9B3.mjs";
import { t as SurfaceFor } from "./Surface.server_CyY0eVxF.mjs";
import { t as $$Disclosure } from "./Disclosure_CP1ZjKXi.mjs";
import { t as Catalogue_server_default } from "./Catalogue.server_CFgQkYiI.mjs";
import { t as $$Definition } from "./Definition_PGjrFgkI.mjs";
import { t as $$VersionPill } from "./VersionPill_DlSRZapP.mjs";
import { t as HookFor } from "./Hook_DRjGtyP_.mjs";
import { n as VersionOf } from "./Release.server_6TZ9vUXd.mjs";
// Source/Component/Breadcrumb.astro
createAstro("https://deepseek.playform.cloud");
var $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumb;
	const { Trail } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumb" aria-label="Breadcrumb"> <ol class="breadcrumb__list"> ${Trail.map((Entry, Index) => renderTemplate`<li class="breadcrumb__item"> ${Index < Trail.length - 1 ? renderTemplate`<a${addAttribute(Entry.Href, "href")}>${Entry.Label}</a>` : renderTemplate`<span aria-current="page">${Entry.Label}</span>`} </li>`)} </ol> </nav>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Breadcrumb.astro", void 0);
// Source/Component/Buffer.astro
createAstro("https://deepseek.playform.cloud");
var $$Buffer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Buffer;
	const { Slug } = Astro.props;
	const Entry = {
		"client-dsh-panel-family-host": {
			Store: "the family logs under ~/.dsh, and the D5 ring it forwards",
			Hold: [
				"the last lines of a family log",
				"the ccr store: its path, its bytes, its lines",
				"the trace envelopes the bus already kept"
			],
			Reader: [
				"the panel's status tail",
				"the panel's stats line",
				"the browser half, through playformFamilyPanel"
			],
			Rule: "A tail is capped per call, and the ring keeps its own bound. The host writes nothing to disk."
		},
		"lib-dsh-trace": {
			Store: "the detached queue, keyed by path",
			Hold: ["the keys the envelopes scheduled", "one task per key, in flight"],
			Reader: ["every adapting plugin's Source/Trace/ adapter", "the re-index a workspace event asks for"],
			Rule: "A key runs one task at a time. There is no timer on the hot path, a failure is swallowed, and a Flush promise lets a smoke wait for the queue."
		},
		"lib-dsh-pack": {
			Store: "the resolved pack: the user layer, the repo layer, the built-in",
			Hold: [
				"families keyed by domain and id",
				"targets keyed by path",
				"the signature that names the workspace"
			],
			Reader: [
				"the six suggesters",
				"the pack learner",
				"a test, or a tool"
			],
			Rule: "The user layer answers first; the repo layer may override it. Each pack in the extends chain is merged once, and a workspace that does not match the signature gets nothing."
		}
	}[Slug];
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="buffer" role="img"${addAttribute(`What ${Slug} holds, and who reads it`, "aria-label")}> <div class="buffer__store"> <span class="buffer__label">The store</span> <span class="buffer__name">${Entry.Store}</span> <span class="buffer__label">Holds</span> <ul class="buffer__hold"> ${Entry.Hold.map((Item) => renderTemplate`<li class="buffer__cell">${Item}</li>`)} </ul> </div> <div class="buffer__readers"> <span class="buffer__label">Read by</span> <ul class="buffer__read"> ${Entry.Reader.map((Item) => renderTemplate`<li class="buffer__reader">${Item}</li>`)} </ul> </div> <p class="buffer__rule">${Entry.Rule}</p> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Buffer.astro", void 0);
// Source/Component/Layer.astro
createAstro("https://deepseek.playform.cloud");
var $$Layer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layer;
	const { Slug } = Astro.props;
	const Entry = {
		"lib-dsh-core": {
			Rule: "The arrow points down. The core imports nothing, and every package above it imports the core.",
			Layer: [
				{
					Label: "Listeners",
					Provides: "the governance hooks and the six normalize flavors call the helpers"
				},
				{
					Label: "Core",
					Provides: "Section, Default, Suppress, Policy, Refusal, Activate, Replace, ReplaceMap, Chunk, Block",
					Mark: true
				},
				{
					Label: "Runtime",
					Provides: "nothing: the CLASSIC build declares no runtime dependency"
				}
			]
		},
		"lib-dsh-conversation": {
			Rule: "A plugin's adapter imports the library and never another plugin. The harness keeps the bus and pays for the fold.",
			Layer: [
				{
					Label: "Adapters",
					Provides: "a Source/Conversation/Adapter.ts per plugin, holding that plugin's policy alone"
				},
				{
					Label: "Provider",
					Provides: "plugin-dsh-factory's ctx.conversation, the typed face of the service"
				},
				{
					Label: "Conversation",
					Provides: "Names, Fold, Emits, and the Envelope and State types",
					Mark: true
				},
				{
					Label: "Runtime",
					Provides: "nothing: the library declares no runtime dependency and no subscription"
				}
			]
		},
		"lib-dsh-workspace-live": {
			Rule: "The library owns the shape of the view and no words: each consumer keeps its ledger, its tools, and its settings.",
			Layer: [
				{
					Label: "Consumers",
					Provides: "plugin-dsh-workspace and client-dsh-workspace-live"
				},
				{
					Label: "Workspace live",
					Provides: "Section, Render, Collapse, Packet",
					Mark: true
				},
				{
					Label: "Runtime",
					Provides: "nothing: the library declares no runtime dependency and no Config"
				}
			]
		}
	}[Slug];
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="layer" role="img"${addAttribute(`The layers ${Slug} sits in`, "aria-label")}> <ol class="layer__stack"> ${Entry.Layer.map((Item) => renderTemplate`<li class="layer__row"${addAttribute(Item.Mark === true ? "true" : "false", "data-mark")}> <span class="layer__label"> ${Item.Mark === true && renderTemplate`<span class="layer__here" aria-hidden="true"></span>`} ${Item.Label} </span> <span class="layer__provides">${Item.Provides}</span> </li>`)} </ol> <p class="layer__rule">${Entry.Rule}</p> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Layer.astro", void 0);
// Source/Component/Origin.astro
createAstro("https://deepseek.playform.cloud");
var $$Origin = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Origin;
	const { Source, File } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Table", $$Table, {
		"Caption": `The files behind ${Source}`,
		"Head": [
			"File",
			"Contributed",
			"State"
		],
		"Row": File.map((Item) => [
			{
				Text: Item.Name,
				Href: `${Source}/${Item.Name}`
			},
			Item.Role,
			{ Badge: {
				Label: Item.Present ? "read" : "absent",
				Tone: Item.Present ? "accent" : "quiet"
			} }
		])
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Origin.astro", void 0);
// Source/Component/Provenance.astro
createAstro("https://deepseek.playform.cloud");
var $$Provenance = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Provenance;
	const { Data, Connection, Capture, Note } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="provenance" aria-label="Provenance"> <dl class="provenance__group"> <div class="provenance__item"> <dt class="provenance__term">Data</dt> <dd class="provenance__value">${Data}</dd> </div> <div class="provenance__item"> <dt class="provenance__term">Connection</dt> <dd class="provenance__value">${Connection}</dd> </div> <div class="provenance__item"> <dt class="provenance__term">Capture</dt> <dd class="provenance__value">${Capture}</dd> </div> </dl> ${Note && renderTemplate`<div class="provenance__detail"> ${renderComponent($$result, "Disclosure", $$Disclosure, {
		"Summary": "Expand provenance",
		"Count": "source"
	}, { "default": ($$result) => renderTemplate` <p class="provenance__note">${Note}</p> ` })} </div>`} </section>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Provenance.astro", void 0);
// Source/Component/Stream.astro
createAstro("https://deepseek.playform.cloud");
var $$Stream = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Stream;
	const { Slug } = Astro.props;
	const Entry = { "client-dsh-workspace-live": {
		Rule: "Nothing redraws on a clock. One event or one graph refresh replaces the snapshot, and nothing else does.",
		Tick: [
			{
				Event: "observe/stamp",
				Note: "a file's version reaches the bus"
			},
			{
				Event: "graph/indexed",
				Note: "the graph reports what it indexed"
			},
			{
				Event: "graph/invalidated",
				Note: "the graph withdraws what moved"
			},
			{
				Event: "batch/state-change",
				Note: "a batch settles into a new state"
			}
		],
		Frame: {
			Label: "One new snapshot",
			Note: "The representations, the empty note, and the tail of recent envelopes, newest first and capped at maxEvents. A missing trace is one static frame, never an error."
		}
	} }[Slug];
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="stream" role="img"${addAttribute(`How ${Slug} turns events into a view`, "aria-label")}> <p class="stream__rule">${Entry.Rule}</p> <ol class="stream__ticks"> ${Entry.Tick.map((Item) => renderTemplate`<li class="stream__tick"> <span class="stream__mark" aria-hidden="true"></span> <span class="stream__event">${Item.Event}</span> <span class="stream__note">${Item.Note}</span> </li>`)} </ol> <div class="stream__frame"> <span class="stream__label">${Entry.Frame.Label}</span> <p class="stream__text">${Entry.Frame.Note}</p> </div> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Stream.astro", void 0);
// Source/Component/Surface.astro
createAstro("https://deepseek.playform.cloud");
var $$Surface = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Surface;
	const { Slug } = Astro.props;
	const Entry = { "client-dsh-panel-family": {
		Rule: "Two mounts, each declaring its own child slot. Nothing reaches the panel except through an adapter's registration.",
		Frame: [{
			Host: "conversation.view",
			Slot: "playform.panel.section",
			Fill: [
				"one section per adapter, ordered by order then id",
				"the plugin's activation, with the tail that proves it",
				"the plugin's knobs, drawn from its schema"
			]
		}, {
			Host: "shell.overlay",
			Slot: "playform.panel.overlay",
			Fill: ["the overlay view an adapter opens", "the same section manifest, at the overlay width"]
		}]
	} }[Slug];
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="surface" role="img"${addAttribute(`Where ${Slug} renders`, "aria-label")}> ${Entry.Frame.map((Item) => renderTemplate`<div class="surface__frame"> <span class="surface__host">${Item.Host}</span> <div class="surface__slot"> <span class="surface__slot-label">${Item.Slot}</span> <ul class="surface__fill"> ${Item.Fill.map((Line) => renderTemplate`<li class="surface__item">${Line}</li>`)} </ul> </div> </div>`)} <p class="surface__rule">${Entry.Rule}</p> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Surface.astro", void 0);
// Source/Content/Delta.ts
var Delta = [
	{
		Slug: "hook-dsh-normalize-dash",
		Seam: "llm/stream",
		Before: "a — b – c ‑ d ― e",
		After: "a - b - c - d - e",
		Property: "Deterministic output",
		Knob: "replacement, a plain hyphen by default"
	},
	{
		Slug: "hook-dsh-ccr",
		Seam: "tools/post-execute",
		Before: "the full make output, 5231 bytes",
		After: "[terminal:exit 0 | 142 lines | make: *** Error 1] plus <<<CCR:9d3c1f0a|terminal|5231>>>",
		Property: "Bounded context",
		Knob: "autoExpandLimitBytes, 102400 by default"
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Seam: "tools/pre-execute",
		Before: "govern: passed op:1 (write /repo/src/a.ts)",
		After: "kind: \"deny\", reason: \"govern: contributes\"",
		Property: "A write guard",
		Knob: "enabled, off in the bundle patch",
		Off: true
	},
	{
		Slug: "hook-dsh-comment-filter",
		Seam: "tools/post-execute",
		Before: "1: // leading comment",
		After: "1:",
		Property: "Comment-free results",
		Knob: "enabled, on by default"
	},
	{
		Slug: "hook-dsh-tool-coach",
		Seam: "tools/post-execute",
		Before: "the fourth cat a.md returns its content",
		After: "the result gains Tool-coach note (strike 4, read-class bash pattern)",
		Property: "Tool-use coaching",
		Knob: "strike threshold, documented per rule"
	},
	{
		Slug: "hook-dsh-live-containers",
		Seam: "system-prompt/assemble",
		Before: "only the harness sections",
		After: "--- LIVE CONTAINER n (recomputed each request; not harness state) ---",
		Property: "Live state in the prompt",
		Knob: "sections, one per container"
	},
	{
		Slug: "plugin-dsh-batch-edit",
		Seam: "tools/pre-execute",
		Before: "a.txt holds hello then world",
		After: "a.txt holds hello then HI, diff - world + HI",
		Property: "A batched atomic edit",
		Knob: "policy.write, refuse by default"
	},
	{
		Slug: "plugin-dsh-cost",
		Seam: "session/event",
		Before: "no cost block",
		After: "// Inference cost: 12.4183 USD (direct 3.1022 + amortized 9.3161)",
		Property: "Cost visibility",
		Knob: "rates, documented per model"
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Seam: "fs/observed",
		Before: "the file holds the batch's bytes",
		After: "journal: reverted b1 /a (fence ok)",
		Property: "A write journal",
		Knob: "maxBatches, 200 by default"
	},
	{
		Slug: "hook-dsh-workspace-merge",
		Seam: "fs/observed",
		Before: "the file holds its previous bytes",
		After: "path: \"/repo/src/a.ts\", status: \"applied\", version: \"v2\"",
		Property: "A merge of concurrent writes",
		Knob: "strategy, documented per domain"
	},
	{
		Slug: "hook-dsh-workspace-approve",
		Seam: "fs/observed",
		Before: "an approved binding at its bound version",
		After: "invalidated ap-2 (version changed)",
		Property: "An approval binding",
		Knob: "enabled, off in the bundle patch",
		Off: true
	},
	{
		Slug: "hook-dsh-workspace-audit",
		Seam: "fs/observed",
		Before: "no line",
		After: "audit outcome-evidence /repo/src/a.ts (success)",
		Property: "An outcome audit",
		Knob: "enabled, off in the bundle patch",
		Off: true
	},
	{
		Slug: "hook-dsh-workspace-monitor",
		Seam: "fs/observed",
		Before: "no watch entry",
		After: "monitor: watch /repo/src/a.ts version 1 (tsc,format)",
		Property: "A change watch",
		Knob: "enabled, off in the bundle patch",
		Off: true
	},
	{
		Slug: "hook-dsh-workspace-observe",
		Seam: "fs/observed",
		Before: "no stamp",
		After: "observe: stamped /repo/src/a.ts version 1 (fs/observed)",
		Property: "A version stamp",
		Knob: "enabled, off in the bundle patch",
		Off: true
	},
	{
		Slug: "hook-dsh-cargo-governor",
		Seam: "fs/observed",
		Before: "serde = \"2.0\" with the registry at 2.1",
		After: "serde = \"2.1.0\"",
		Property: "A dependency floor",
		Knob: "pinStyle, caret by default"
	},
	{
		Slug: "hook-dsh-package-governor",
		Seam: "fs/observed",
		Before: "leftpad \"^2.0.0\" with the effective latest at 1.0.0",
		After: "leftpad \"^1.0.0\", chalk untouched",
		Property: "A dependency ceiling",
		Knob: "registry, npm by default"
	},
	{
		Slug: "hook-dsh-package-pinner",
		Seam: "fs/observed",
		Before: "\"caret\": \"^0.3.4\"",
		After: "\"caret\": \"0.3.4\"",
		Property: "A pinned range",
		Knob: "ranges, caret by default"
	},
	{
		Slug: "hook-dsh-batch-decision",
		Seam: "batch/proposed",
		Before: "the proposal is applied",
		After: "decision held prop-1 (policy commit=approve)",
		Property: "A policy gate on batches",
		Knob: "commit, approve by default",
		Off: true
	},
	{
		Slug: "hook-dsh-lesson-nudge",
		Seam: "agent/status",
		Before: "every idle edge starts a review",
		After: "hook-dsh-lesson-nudge: cap reached (1 reviews)",
		Property: "A review budget",
		Knob: "maxReviewsPerSession, 1 by default",
		Off: true
	},
	{
		Slug: "plugin-dsh-gitguard",
		Seam: "tools/pre-execute",
		Before: "git add -A reaches the terminal tool",
		After: "gitguard: refused \"git add\" (deny-list: git add)",
		Property: "A read-only git policy",
		Knob: "deny, git add by default",
		Off: true
	}
];
function DeltaFor(Slug) {
	return Delta.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}
// Source/Content/Portrait.ts
var Portrait = [
	{
		Slug: "client-dsh-workspace-live",
		Role: "The live view of the workspace, presenting representations rather than processes",
		Plugs: "the workspaceLive client service, the workspace-live tab in conversation.view, and the D5 trace bus",
		Does: [
			"Holds one snapshot until an event or a graph refresh replaces it",
			"Follows observe/stamp, graph/indexed, graph/invalidated, and the batch transitions",
			"Presents the entity, presentation, and interaction model without calling a process an entity",
			"Keeps the tail newest first, and stops at maxEvents"
		],
		Shape: "stream"
	},
	{
		Slug: "client-dsh-panel-family",
		Role: "The panel that renders the tab and the overlay, from whatever the adapters register",
		Plugs: "the family-tab mount in conversation.view and the overlay mount in shell.overlay",
		Does: [
			"Registers one section per adapter, ordered and filtered by slot",
			"Shows each plugin's activation, and the tail that proves it moved",
			"Turns a plugin's schema into the fields its form shows",
			"Applies a volatile change without a remount, and a plain one through the bridge"
		],
		Shape: "surface"
	},
	{
		Slug: "client-dsh-panel-family-host",
		Role: "The host process behind the panel: a read face, a write face, and a forwarded bus",
		Plugs: "the panelFamilyHost, panelFamilyBridge, and panelFamilyTrace services",
		Does: [
			"Tails a family log by namespace, with the name checked before the path",
			"Summarizes the ccr store: its path, its bytes, its lines",
			"Forwards the D5 bus, on and ring, when the bus exists",
			"Applies a whole resolved config through the config editor, and refuses a secret"
		],
		Shape: "buffer"
	},
	{
		Slug: "lib-dsh-core",
		Role: "The helpers, tables, and dispatchers every other family package imports",
		Plugs: "the governance hooks and the six normalize flavors, by named import",
		Does: [
			"Composes the suppression line, the refusal guard, and the activation line",
			"Carries the six character tables and the two replacers",
			"Dispatches a stream chunk and a block end with the transform injected",
			"Loads the update policy, and falls back to the module's own defaults"
		],
		Shape: "layer"
	},
	{
		Slug: "lib-dsh-conversation",
		Role: "The names and the fold that every conversation-aware plugin shares",
		Plugs: "the ctx.conversation provider and each plugin's own conversation adapter",
		Does: [
			"Names the service and the six conversation events",
			"Reduces the session log to one session's current state",
			"Derives a tool call's file touches, resolved against the session's cwd",
			"Emits an envelope per change, stamped with the source record's Seq and time"
		],
		Shape: "layer"
	},
	{
		Slug: "lib-dsh-trace",
		Role: "The names, the guards, and the coalescing loop the trace bus runs on",
		Plugs: "the ctx.trace service that plugin-dsh-factory provides",
		Does: [
			"Names the bus events and the ring bound",
			"Completes a draft into an envelope with a trace id and a time",
			"Queues work by path, and runs one task per path at a time",
			"Guards the envelope and the stamp shapes"
		],
		Shape: "buffer"
	},
	{
		Slug: "lib-dsh-pack",
		Role: "One file per repository, holding the conventions its suggesters read",
		Plugs: "the six suggesters, each projecting its own domain out of the resolved pack",
		Does: [
			"Parses the documented YAML subset, and accepts JSON",
			"Resolves the user layer, then the repo layer, then the extends chain",
			"Merges families by id and targets by path, and normalizes once",
			"Locates the workspace by its pack signature, or returns undefined"
		],
		Shape: "buffer"
	},
	{
		Slug: "lib-dsh-workspace-live",
		Role: "The frame, the budget collapse, and the packet grammar under the live view",
		Plugs: "plugin-dsh-workspace and client-dsh-workspace-live",
		Does: [
			"Types the operational view's sections and its packet",
			"Draws one section as a framed block with its version in the header",
			"Turns an overflow section into a one-line summary rather than a gap",
			"Renders the orientation packet, one line per fixed heading"
		],
		Shape: "layer"
	}
];
function PortraitFor(Slug) {
	return Portrait.find((Entry) => Entry.Slug === Slug);
}
// Source/pages/package/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://deepseek.playform.cloud");
function getStaticPaths() {
	return Package.map((Entry) => ({
		params: { slug: Entry.Slug },
		props: { Entry }
	}));
}
var $$Slug = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { Entry } = Astro.props;
	const Index = Package.findIndex((Candidate) => Candidate.Slug === Entry.Slug);
	const Previous = Index > 0 ? Package[Index - 1] : void 0;
	const Next = Index >= 0 && Index < Package.length - 1 ? Package[Index + 1] : void 0;
	const Behavior = BehaviorFor(Entry.Slug);
	const Harness = Behavior === void 0 ? void 0 : SeamFor(Behavior.Seam);
	const Arm = ArmFor(Entry.Slug);
	const Own = Behavior === void 0 ? [] : HookFor(Behavior.Seam);
	const Delta = DeltaFor(Entry.Slug);
	const Portrait = PortraitFor(Entry.Slug);
	const Sentence = /[.!?:;,]$/.test(Entry.Summary) ? Entry.Summary : `${Entry.Summary}.`;
	const Depend = Entry.Dependencies.map((Dependency) => {
		const Found = Package.find((Item) => Item.Name === Dependency);
		return [Found ? {
			Text: Dependency,
			Href: Found.Href,
			Icon: Found.Slug
		} : Dependency, Dependency.startsWith("@playform/") ? "family" : "external"];
	});
	const RequiredBy = Catalogue_server_default.Edge.filter((Link) => Link.Source === Entry.Slug).map((Link) => Package.find((Item) => Item.Slug === Link.Target)).filter((Item) => Item !== void 0);
	const Example = Transform.filter((Item) => Item.Slug === Entry.Slug.replace(/^ets-/, ""));
	const Knob = ConfigFor(Entry.Slug).map((Item) => [
		Item.Field,
		Item.Type,
		Item.Default,
		Item.Meaning
	]);
	const Release = VersionOf(Entry).sort((Left, Right) => {
		const LeftPart = Left.split(".").map(Number);
		const RightPart = Right.split(".").map(Number);
		for (let Index = 0; Index < 3; Index += 1) {
			const Difference = (RightPart[Index] ?? 0) - (LeftPart[Index] ?? 0);
			if (Difference !== 0) return Difference;
		}
		return 0;
	});
	const File = [
		{
			Name: "package.json",
			Role: "The name, the version, the private flag, and the dependencies.",
			Present: true
		},
		{
			Name: "README.md",
			Role: "The summary, the surface table, and the configuration table.",
			Present: SurfaceFor(Entry.Slug).length > 0 || ConfigFor(Entry.Slug).length > 0
		},
		{
			Name: "CHANGELOG.md",
			Role: "The release lines and their versions.",
			Present: Release.length > 0
		},
		{
			Name: "cordis.patch.yml",
			Role: "Activation: the bundle entry that mounts the plugin.",
			Present: true
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": Entry.Slug,
		"Description": Entry.Summary
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "Trail": [{
		Href: Route.Package,
		Label: "Package"
	}, {
		Href: Entry.Href,
		Label: Entry.Slug
	}] })} ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": `${Entry.Kind} / ${Entry.Family}`,
		"Title": Entry.Slug,
		"Lede": Entry.Summary
	}, {
		"Mark": ($$result) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			"slot": "Mark",
			"Name": Entry.Slug,
			"Size": 88,
			"Priority": true
		})}`,
		"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "VersionPill", $$VersionPill, {
			"Version": Entry.Version,
			"Private": Entry.Private
		})} ${renderComponent($$result, "Badge", $$Badge, {
			"Label": Entry.Kind,
			"Tone": "accent"
		})} ${renderComponent($$result, "Badge", $$Badge, { "Label": Entry.Family })} ` })}`
	})} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Facts" })} <div class="section__body"> ${renderComponent($$result, "Definition", $$Definition, { "Definition": [
		{
			Term: "Package",
			Detail: Entry.Name
		},
		{
			Term: "Version",
			Detail: Entry.Version
		},
		{
			Term: "Kind",
			Detail: Entry.Kind
		},
		{
			Term: "Release",
			Detail: Entry.Family
		},
		{
			Term: "Licence",
			Detail: Entry.Licence
		},
		{
			Term: "Directory",
			Detail: Entry.Directory
		}
	] })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "What it does" })} <div class="section__body stack"> <p class="lede">${Sentence}</p> <p class="muted"> <a${addAttribute(`${Entry.Source}/README.md`, "href")}>Read the full description in the README</a>.
</p> </div> </section> ${Portrait !== void 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": Portrait.Role,
		"Lede": `Plugs into ${Portrait.Plugs}.`
	})} <div class="section__body stack"> <ul class="stack"> ${Portrait.Does.map((Item) => renderTemplate`<li>${Item}</li>`)} </ul> ${Portrait.Shape === "stream" && renderTemplate`${renderComponent($$result, "Stream", $$Stream, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "layer" && renderTemplate`${renderComponent($$result, "Layer", $$Layer, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "surface" && renderTemplate`${renderComponent($$result, "Surface", $$Surface, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "buffer" && renderTemplate`${renderComponent($$result, "Buffer", $$Buffer, { "Slug": Entry.Slug })}`} </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Install" })} <div class="section__body"> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "Install",
		"Language": "sh",
		"Code": `pnpm add ${Entry.Name}`
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Default",
		"Lede": "What the harness does at this package's seam with none of the family installed, so the surface below has something to be a difference from."
	})} <div class="section__body stack"> ${Behavior !== void 0 && Harness !== void 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <p class="lede"> ${Harness.Harness.length > 0 ? `The harness dispatches ${Behavior.Seam} as a ${Harness.Mode} and already has listeners there: ${Harness.Harness.join(", ")}.` : `The harness dispatches ${Behavior.Seam} as a ${Harness.Mode}, and its event matrix lists no listener of its own there.`} </p> <p class="muted"> ${Harness.Mode === "waterfall" ? "A waterfall listener receives the payload and may return a changed one, so the harness's own listeners can already change what the model reads. This package adds another listener to that list." : "An emit listener observes a fact that already happened, so the harness's own listeners can record it and cannot change it. This package records beside them, or acts on the world rather than on the payload."} </p> ` })}` : renderTemplate`${renderComponent($$result, "Absence", $$Absence, {
		"Title": "No documented seam",
		"Note": Behavior === void 0 ? "The behavior map does not document a seam for this package, so the page cannot show a default to compare against. It is a library, a base, or a package whose work is a tool rather than a listener." : `The harness does not declare ${Behavior.Seam} in its own event matrix, so the event is the family's own and only the family listens.`
	})}`} ${Arm.length > 0 && renderTemplate`<p class="muted">
Its source also registers at ${Arm.join(", ")}, beyond the seam its README
					documents.
</p>`} ${Own.length > 0 && renderTemplate`<p class="muted">
The harness ships its own plugin at this seam:${" "} ${Own.map((Item, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && ", "}<a${addAttribute(`/plugin/${Item.Slug}/`, "href")}>${Item.Slug}</a> ` })}`)}
, and its page shows the line it changes.
</p>`} </div> </section> ${Delta !== void 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Change",
		"Lede": "The one line that differs with this package installed, transcribed from its source by the dissection."
	})} <div class="section__body stack"> ${renderComponent($$result, "Difference", $$Difference, {
		"Before": Delta.Before,
		"After": Delta.After
	})} <dl class="definition"> <div class="definition__row"> <dt class="definition__term">Property</dt> <dd class="definition__detail">${Delta.Property}</dd> </div> <div class="definition__row"> <dt class="definition__term">Knob</dt> <dd class="definition__detail">${Delta.Knob}</dd> </div> <div class="definition__row"> <dt class="definition__term">Seam</dt> <dd class="definition__detail">${Delta.Seam}</dd> </div> </dl> ${Delta.Off === true && renderTemplate`<p class="muted">
This package ships disabled: the left side of the pair is what the harness
						does with the package installed but inactive, and enabling it is one line in
						the profile's bundle patch.
</p>`} </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Surface" })} <div class="section__body"> ${SurfaceFor(Entry.Slug).length > 0 ? renderTemplate`${renderComponent($$result, "Table", $$Table, {
		"Caption": `The surfaces ${Entry.Slug} registers`,
		"Head": [
			"Kind",
			"Name",
			"What"
		],
		"Row": SurfaceFor(Entry.Slug).map((Item) => [
			Item.Kind,
			Item.Name,
			Item.What
		])
	})}` : renderTemplate`${renderComponent($$result, "Absence", $$Absence, {
		"Title": "No surface",
		"Note": "The README documents no listener, tool, service, or configuration, so this package registers nothing a page can list."
	})}`} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Dependencies" })} <div class="section__body"> ${Entry.Dependencies.length > 0 ? renderTemplate`${renderComponent($$result, "Table", $$Table, {
		"Caption": `Dependencies of ${Entry.Slug}`,
		"Head": ["Package", "Role"],
		"Row": Depend
	})}` : renderTemplate`${renderComponent($$result, "Absence", $$Absence, {
		"Title": "No dependency",
		"Note": "The manifest declares no dependency, so this package stands alone in the graph."
	})}`} </div> </section> ${RequiredBy.length > 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Required by" })} <div class="section__body"> <ul class="cluster"> ${RequiredBy.map((Item) => renderTemplate`<li> <a class="mono cluster"${addAttribute(Item.Href, "href")}> ${renderComponent($$result, "Icon", $$Icon, {
		"Name": Item.Slug,
		"Size": 32
	})} ${Item.Slug} </a> </li>`)} </ul> </div> </section>`}${Example.length > 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Transform" })} <div class="section__body"> ${renderComponent($$result, "Transform", $$Transform, { "Sample": Example })} </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Configuration",
		"Lede": Knob.length > 0 ? "Every knob this plugin documents, with its default." : void 0
	})} <div class="section__body"> ${Knob.length > 0 ? renderTemplate`${renderComponent($$result, "Table", $$Table, {
		"Caption": `Configuration of ${Entry.Slug}`,
		"Head": [
			"Field",
			"Type",
			"Default",
			"Meaning"
		],
		"Row": Knob
	})}` : renderTemplate`${renderComponent($$result, "Absence", $$Absence, {
		"Title": "No configuration",
		"Note": "The README documents no knob, so the package reads no field and takes no option."
	})}`} </div> </section> ${Release.length > 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Release" })} <div class="section__body"> <ul class="cluster"> ${Release.map((Version) => renderTemplate`<li> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Version,
		"Tone": Version === Entry.Version ? "accent" : "neutral"
	})} </li>`)} </ul> </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Source" })} <div class="section__body stack"> <p class="lede"> <a${addAttribute(Entry.Source, "href")}>Open the package source</a> </p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Origin" })} <div class="section__body"> ${renderComponent($$result, "Disclosure", $$Disclosure, {
		"Summary": "The files this page was read from",
		"Count": File.length
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Origin", $$Origin, {
		"Source": Entry.Source,
		"File": File
	})} ` })} </div> </section> ${renderComponent($$result, "Provenance", $$Provenance, {
		"Data": "The monorepo, read during the build",
		"Connection": "Build-time read; nothing is fetched at runtime",
		"Capture": "package.json, README.md, CHANGELOG.md",
		"Note": "This page is static. It cannot invoke the plugin, read a ledger, or change a configuration. Every figure comes from those three files; a missing README falls back to the manifest's own description, and a package with no surface table shows no surface section."
	})} ${renderComponent($$result, "Pager", $$Pager, {
		"Previous": Previous ? {
			Href: Previous.Href,
			Label: Previous.Slug
		} : void 0,
		"Next": Next ? {
			Href: Next.Href,
			Label: Next.Slug
		} : void 0
	})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/package/[slug].astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/package/[slug].astro";
var $$url = "/package/[slug]";
// \0virtual:astro:page:Source/pages/package/[slug]@_@astro
var page = () => _slug__exports;
export { page };
