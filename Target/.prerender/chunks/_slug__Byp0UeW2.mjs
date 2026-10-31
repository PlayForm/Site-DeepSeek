import { _ as createComponent, a as Package, g as createAstro, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { n as $$Absence, t as $$Pager } from "./Pager_D0YXTbXD.mjs";
import { t as $$Badge } from "./Badge_DH5fDljn.mjs";
import { t as $$Table } from "./Table_CKiF4Xiu.mjs";
import { t as $$Icon } from "./Icon_DDezI4Ii.mjs";
import { n as ArmFor } from "./Arm_CPuxlRGj.mjs";
import { n as BehaviorFor, t as Behavior } from "./Behavior_DDx93Uas.mjs";
import { n as SeamFor } from "./Harness_Dw5IkvLG.mjs";
import { t as ConfigFor } from "./Config.server_CF2kUQLq.mjs";
import { t as $$Transform } from "./Transform_C61Qcq3e.mjs";
import { t as Transform } from "./Transform_CwTo7UZW.mjs";
import { t as $$CodeBlock } from "./CodeBlock_NiBV7TTb.mjs";
import { n as $$Difference, r as Compare, t as SurfaceFor } from "./Surface.server_Bp0A0NxJ.mjs";
import { t as $$Disclosure } from "./Disclosure_5Wf2hjf5.mjs";
import { t as $$Seam } from "./Seam_BG5eEmcx.mjs";
import { n as $$Definition, t as $$VersionPill } from "./VersionPill_Ck23AFCO.mjs";
import { t as $$Callout } from "./Callout_C9VjeKLa.mjs";
import { t as Catalogue_server_default } from "./Catalogue.server_CXquq_3K.mjs";
import { n as VersionOf } from "./Release.server_BzmcWV65.mjs";
// Source/Component/Advise.astro
createAstro("https://deepseek.playform.cloud");
var $$Advise = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Advise;
	const { Slug } = Astro.props;
	const Advise = {
		"hook-dsh-convention-suggester": {
			Seam: "tools/post-execute",
			Trigger: "a write, edit, or raw-write call whose path classifies into a convention intent, when the confidence clears the threshold, the cooldown has passed, and the turn still has note budget",
			Note: [
				"[convention-suggester] intent=Layout confidence=<k>",
				"targets (4):",
				"- Source/Library.ts - the entry: wiring only - name, apply, Config, inject",
				"- Source/Function/<Name>.ts - one definition per file, nameless default export",
				"- README.md - the package's own README, updated with the change",
				"- SCHEME.md - the scheme table, which must match the schema",
				"note: one definition per file; nameless default exports; the entry stays wiring-only."
			],
			Rule: "The note reaches additionalContexts and never the content. It carries the suggester's own source kind, because an unlabeled context renders as a user prompt in derived history."
		},
		"hook-dsh-doc-suggester": {
			Seam: "tools/post-execute",
			Trigger: "a read, grep, glob, or edit that names a documentation path the pack's doc families match, when the confidence clears the threshold and the family still has a companion the turn has not touched",
			Note: [
				"[doc-suggester] family=Plan confidence=<k>",
				"companions (3):",
				"- Documentation/INDEX.md - the index row",
				"- Documentation/Plans/POC-LEDGER.md - the live matrix",
				"- Documentation/ARCHIVE-STYLE.md - the frontmatter and style rules",
				"note: a documentation task rarely touches one file; keep the doc graph coherent."
			],
			Rule: "The note names companions the workspace actually holds: a path that does not exist under the resolved root is dropped before the note is built, and a family with none left abstains."
		},
		"hook-dsh-edit-suggester": {
			Seam: "tools/post-execute",
			Trigger: "a write, edit, or raw-write call on a path the pack's edit families match, when the confidence clears the threshold and at least one companion is untouched this turn",
			Note: [
				"[edit-suggester] family=Config confidence=<k>",
				"companions (4):",
				"- README.md - the Config section",
				"- SCHEME.md - the full table",
				"- cordis.patch.yml - the row value",
				"- Source/Test/Config-And-Activation/Test.ts - the byte-exact assertion",
				"note: this file rarely stands alone; check whether these need the same change."
			],
			Rule: "The note never claims the change: it names the files that usually move with this one and leaves the edit to the model."
		},
		"hook-dsh-graph-suggester": {
			Seam: "tools/post-execute",
			Trigger: "a read, grep, or glob on a source path, when the confidence clears the threshold and the graph answers a non-empty component around the anchor",
			Note: [
				"[graph-suggester] intent=Neighborhood confidence=<k>",
				"targets (2):",
				"- Source/Function/Apply.ts - the definition",
				"- Source/Test/Pipeline-And-Graph/Test.ts - the test",
				"note: the neighborhood is the connected component: definition, callers, tests, doc block."
			],
			Rule: "A service that is absent or throws is an abstention, not a guess: the graph intent writes no note rather than a static one."
		},
		"hook-dsh-search-suggester": {
			Seam: "tools/post-execute",
			Trigger: "a search-class call that matches one of the pack's search intents, when the confidence clears the intent's threshold and the cooldown, the dedupe, and the per-turn cap all allow it",
			Note: [
				"[search-suggester] intent=Config confidence=<k>",
				"targets (4):",
				"- Source/Variable/Config.ts - the schema default",
				"- Source/Interface/Config.ts - the shape",
				"- cordis.patch.yml - the row and the config block",
				"- README.md - the Config section",
				"note: open these before more searches; Target/ is generated, never edit it."
			],
			Rule: "One note per intent, not per call: the cooldown, the dedupe, and the per-turn cap all have to allow it, and every refusal is a ledger line rather than a silent skip."
		}
	};
	const Entry = Advise[Slug] ?? Advise[Slug.replace(/^ets-/, "")];
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="advise" role="img"${addAttribute(`The note ${Slug} adds at its seam`, "aria-label")}> <div class="advise__meta"> <div class="advise__row"> <span class="advise__label">Seam</span> <span class="advise__value">${Entry.Seam}</span> </div> <div class="advise__row"> <span class="advise__label">Trigger</span> <span class="advise__value">${Entry.Trigger}</span> </div> </div> <blockquote class="advise__quote"> <pre class="advise__text">${Entry.Note.join("\n")}</pre> </blockquote> <p class="advise__rule">${Entry.Rule}</p> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Advise.astro", void 0);
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
// Source/Component/Pipeline.astro
createAstro("https://deepseek.playform.cloud");
var $$Pipeline = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pipeline;
	const { Stages, Current } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ol class="pipeline"> ${Stages.map((Stage) => renderTemplate`<li class="pipeline__stage"${addAttribute(Stage.Label === Current, "data-current")}> ${Stage.Seam ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <span class="pipeline__label">${Stage.Label}</span> ${renderComponent($$result, "Seam", $$Seam, { "Name": Stage.Seam })} ` })}` : renderTemplate`<span class="pipeline__text">${Stage.Label}</span>`} </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Pipeline.astro", void 0);
// Source/Component/Flow.astro
createAstro("https://deepseek.playform.cloud");
var $$Flow = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Flow;
	const { Stage: Entry, Rule } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ol class="flow-line"> ${Entry.map((Item, Index) => renderTemplate`<li class="flow-line__stage"${addAttribute(Item.Kind, "data-kind")}> <span class="flow-line__index">${String(Index + 1).padStart(2, "0")}</span> <div class="flow-line__body"> ${Item.Kind === "seam" ? renderTemplate`${renderComponent($$result, "Pipeline", $$Pipeline, { "Stages": [{
		Label: "seam",
		Seam: Item.Label
	}] })}` : renderTemplate`<span class="flow-line__head"> ${Item.Kind !== "step" && renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": Item.Kind,
		"Tone": Item.Kind === "store" ? "accent" : "quiet"
	})}`} <span class="flow-line__label">${Item.Label}</span> </span>`} ${Item.Note !== void 0 && renderTemplate`<span class="flow-line__note">${Item.Note}</span>`} </div> </li>`)} </ol> ${renderComponent($$result, "Callout", $$Callout, { "Title": "Rule" }, { "default": ($$result) => renderTemplate` <p>${Rule}</p> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Flow.astro", void 0);
// Source/Component/Gate.astro
createAstro("https://deepseek.playform.cloud");
var $$Gate = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Gate;
	const { Slug } = Astro.props;
	const Gate = { "hook-dsh-ccr": {
		Rule: "The gate reads the result, the tool name, and the failure flag, and returns one verdict. Only the last two write the store, and the write happens before the verdict leaves.",
		Outcome: [
			{
				Label: "pass",
				Note: "empty content, an exempt tool, a failure while compressFailures is off, a name outside targets, or a size at or under the threshold times the type's multiplier"
			},
			{
				Label: "store",
				Note: "over the gate, with auto-expand on and the size at or under its ceiling: the full content returns, the entry is retrievable, and no marker reaches the model"
			},
			{
				Label: "replace",
				Note: "over the gate and over the auto-expand ceiling: one preview line and one retrieval marker, while the original stays in the store"
			}
		],
		Mark: "replace",
		Condition: "The default configuration returns replace only above the auto-expand ceiling. At or under it the same result returns store, and at or under the threshold times the multiplier it returns pass."
	} };
	const Entry = Gate[Slug] ?? Gate[Slug.replace(/^ets-/, "")];
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="gate" role="img"${addAttribute(`What ${Slug} decides at its seam`, "aria-label")}> <p class="gate__rule">${Entry.Rule}</p> <ol class="gate__row"> ${Entry.Outcome.map((Item) => renderTemplate`<li class="gate__outcome"${addAttribute(Item.Label === Entry.Mark ? "true" : "false", "data-mark")}> <span class="gate__label">${Item.Label}</span> <span class="gate__note">${Item.Note}</span> </li>`)} </ol> <p class="gate__condition"> <span class="gate__condition-label">When</span> <span class="gate__condition-text">${Entry.Condition}</span> </p> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Gate.astro", void 0);
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
// Source/Component/Retrieve.astro
createAstro("https://deepseek.playform.cloud");
var $$Retrieve = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Retrieve;
	const { Marker, Hash, Size, Preview, Body } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ol class="retrieve"> <li class="retrieve__hop" data-hop="store"> <span class="retrieve__step">The result arrives</span> <span class="retrieve__body"> <code class="retrieve__bytes">${Size}&nbsp;bytes</code> <span class="retrieve__note">the tool wrote more than the ceiling</span> </span> </li> <li class="retrieve__hop" data-hop="gate"> <span class="retrieve__step">The gate replaces it</span> <span class="retrieve__body"> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "What the model reads",
		"Language": "text",
		"Code": `${Preview}\n${Marker}`
	})} </span> </li> <li class="retrieve__hop" data-hop="ask"> <span class="retrieve__step">The model asks for the bytes</span> <span class="retrieve__body"> <span class="retrieve__call"> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": "ccr_retrieve",
		"Tone": "accent"
	})} <code class="retrieve__hash">${Hash}</code> </span> <span class="retrieve__note">
An exact hash and an optional line range. No prefix, no fuzzy match: the marker is the
				address.
</span> </span> </li> <li class="retrieve__hop" data-hop="return"> <span class="retrieve__step">The store returns it</span> <span class="retrieve__body"> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "The body, byte-exact",
		"Language": "text",
		"Code": Body
	})} </span> </li> </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Retrieve.astro", void 0);
// Source/Component/Record.astro
createAstro("https://deepseek.playform.cloud");
var $$Record = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Record;
	const { Slug } = Astro.props;
	const Ledger = { "hook-dsh-replay-suggester": {
		Rule: "One judged call that names a path writes one entry and one line. A call the gate refuses, a tool outside the judged set, and a foreign workspace write neither.",
		Line: "replay-suggester: recorded <intent> <path> (<n> in store)",
		Field: "seq, path, intent, outcome, at, probe",
		Note: "The sequence is the store's own order and is never reused; the intent is Repeat once the classifier matched, and the family name replay otherwise. The parenthesized size is the store's size at that append, not at the write that follows it."
	} };
	const Entry = Ledger[Slug] ?? Ledger[Slug.replace(/^ets-/, "")];
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="record" role="img"${addAttribute(`The line ${Slug} writes`, "aria-label")}> <p class="record__rule">${Entry.Rule}</p> <pre class="record__line">${Entry.Line}</pre> <div class="record__field"> <span class="record__label">Carries</span> <span class="record__value">${Entry.Field}</span> </div> <p class="record__note">${Entry.Note}</p> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Record.astro", void 0);
// Source/Component/Rewrite.astro
createAstro("https://deepseek.playform.cloud");
var $$Rewrite = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Rewrite;
	const { Slug } = Astro.props;
	const Rewrite = {
		"hook-dsh-comment-filter": {
			Mode: "pair",
			Label: ["Result", "Model"],
			Before: "1: const limit = MAX; // the cap",
			After: "1: const limit = MAX;",
			Note: "The other half of the transform: a trailing comment leaves the code behind, where a full-line comment would leave an empty line, and the line numbers stay."
		},
		"hook-dsh-live-containers": {
			Mode: "class",
			Label: ["Prompt without it", "Prompt with it"],
			Before: [
				"the harness assembles its own sections",
				"a block's text is fixed at assembly",
				"an unresolved variable fails the assembly"
			],
			After: [
				"live-containers is appended as one more section",
				"each block is recomputed at ask time",
				"an unknown token renders literally and logs a line"
			],
			Note: "The section is the only addition; every harness section stays where the harness put it."
		},
		"hook-dsh-normalize-dash": {
			Mode: "class",
			Label: ["Dash family", "ASCII"],
			Before: [
				"U+2014 em dash",
				"U+2013 en dash",
				"U+2011 non-breaking hyphen",
				"U+2015 horizontal bar"
			],
			After: ["U+002D hyphen-minus"],
			Note: "The family collapses onto one character: every member of the dash class lands on the hyphen, so different code points leave the stream as the same byte."
		},
		"hook-dsh-normalize-ellipsis": {
			Mode: "pair",
			Label: ["Model", "Transcript"],
			Before: "Loading… done",
			After: "Loading... done",
			Note: "The single code point became three ASCII dots, and the payload grew by two characters."
		},
		"hook-dsh-normalize-fullwidth": {
			Mode: "class",
			Label: ["Fullwidth", "ASCII"],
			Before: [
				"U+FF21 capital A",
				"U+FF11 digit one",
				"U+FF01 exclamation mark"
			],
			After: [
				"U+0041 capital A",
				"U+0031 digit one",
				"U+0021 exclamation mark"
			],
			Note: "The whole block moves, not one character: every code point from U+FF01 to U+FF5E lands on its halfwidth counterpart."
		},
		"hook-dsh-normalize-invisible": {
			Mode: "class",
			Label: ["Before", "After"],
			Before: [
				"U+200B zero width space",
				"U+200C zero width non-joiner",
				"U+200D zero width joiner",
				"U+FEFF byte order mark"
			],
			After: ["the empty string"],
			Note: "This flavor removes rather than maps: the replacement default is empty, so every member of the family leaves the payload."
		},
		"hook-dsh-normalize-quotes": {
			Mode: "pair",
			Label: ["Model", "Transcript"],
			Before: "It’s done",
			After: "It's done",
			Note: "The apostrophe is one of eight code points the table maps; the four double quotes are the other half."
		},
		"hook-dsh-normalize-spaces": {
			Mode: "pair",
			Label: ["Model", "Transcript"],
			Before: "2\xA0+ 2",
			After: "2 + 2",
			Note: "The no-break space became the plain space, so the line can wrap where it could not before."
		}
	};
	const Entry = Rewrite[Slug] ?? Rewrite[Slug.replace(/^ets-/, "")];
	const Diff = Entry !== void 0 && Entry.Mode === "pair" ? Compare(Entry.Before, Entry.After) : void 0;
	return renderTemplate`${Entry !== void 0 && renderTemplate`${maybeRenderHead($$result)}<div class="rewrite" role="img"${addAttribute(`What ${Slug} changes in the payload`, "aria-label")}> ${Entry.Mode === "pair" && Diff !== void 0 && renderTemplate`<ol class="rewrite__pair"> <li class="rewrite__row"> <span class="rewrite__label">${Entry.Label[0]}</span> <span class="rewrite__text"> ${Diff.Prefix} <mark class="rewrite__mark">${Diff.Before}</mark> ${Diff.Suffix} </span> </li> <li class="rewrite__row"> <span class="rewrite__label">${Entry.Label[1]}</span> <span class="rewrite__text"> ${Diff.Prefix} <mark class="rewrite__mark rewrite__mark--after">${Diff.After}</mark> ${Diff.Suffix} </span> </li> </ol>`} ${Entry.Mode === "class" && renderTemplate`<div class="rewrite__split"> <div class="rewrite__side"> <span class="rewrite__label">${Entry.Label[0]}</span> <ul class="rewrite__list"> ${Entry.Before.map((Item) => renderTemplate`<li class="rewrite__item">${Item}</li>`)} </ul> </div> <div class="rewrite__side"> <span class="rewrite__label">${Entry.Label[1]}</span> <ul class="rewrite__list"> ${Entry.After.map((Item) => renderTemplate`<li class="rewrite__item">${Item}</li>`)} </ul> </div> </div>`} <p class="rewrite__note">${Entry.Note}</p> </div>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Rewrite.astro", void 0);
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
// Source/Content/Current.ts
var Current = [
	{
		Slug: "hook-dsh-package-governor",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "A tool-layer write lands, carrying its path, its actor, and its version token."
			},
			{
				Label: "Gate: the basename package.json, a mutation tool, a present observation, the stash, and the exclusion list",
				Kind: "step",
				Note: "The gate writes nothing to the ledger; the module composes its own lines."
			},
			{
				Label: "skipped (excluded) <path>",
				Kind: "fail",
				Note: "Exclusion-first: the internals of a dependency are never governed."
			},
			{
				Label: "Discover the nearest registry.json, and parse it",
				Kind: "step",
				Note: "The walk-up is an auxiliary plain-fs probe; the governed manifest is never read here."
			},
			{
				Label: "No registry.json found, or it is unreadable",
				Kind: "branch",
				Note: "The chain pass is skipped, and the line says which of the two happened."
			},
			{
				Label: "Chain pass: canonicalize every chain-governed pin to the resolved range",
				Kind: "step",
				Note: "A dependency outside the chain is left where the author put it."
			},
			{
				Label: "The refusal guard: a non-dependency section would change",
				Kind: "branch",
				Note: "The rewrite is aborted, and the refusal names the section."
			},
			{
				Label: "GuardedWrite replaceIfVersion, then re-emit fs/observed with the fresh version",
				Kind: "step",
				Note: "The author sees its own bytes; the observation policy's version record is refreshed."
			},
			{
				Label: "Update stage: npm-check-updates in process, or the ncu bin",
				Kind: "step",
				Note: "A detached continuation off the settled chain pass, with the chain deps rejected."
			},
			{
				Label: "The circuit breaker: maxUpdateFailures in a row for one directory",
				Kind: "branch",
				Note: "The directory pauses, and the line carries the count."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-package-governor.log",
				Kind: "store",
				Note: "One global ledger, with the module identity hook-dsh-governor-package."
			}
		],
		Rule: "The manifest is the only thing that changes: the listener never awaits, the chain pass and the update stage run as detached continuations, and the author is never told."
	},
	{
		Slug: "hook-dsh-package-pinner",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "A tool-layer write lands, carrying its path, its actor, and its version token."
			},
			{
				Label: "Gate: the basename package.json, a mutation tool, a present observation, the stash, and the exclusion list",
				Kind: "step",
				Note: "The same gate set as the governor, on the same seam."
			},
			{
				Label: "skipped (excluded) <path>",
				Kind: "fail",
				Note: "Exclusion-first, and silent to the author."
			},
			{
				Label: "Discover the walk-up, and resolve the union keep-list",
				Kind: "step",
				Note: "The global policy file, the file's own directory, and the nearest registry, unioned."
			},
			{
				Label: "Decode the manifest: null on failure",
				Kind: "step",
				Note: "The manifest is read through ctx.fs, never from the raw text."
			},
			{
				Label: "observed non-JSON package.json <path>",
				Kind: "fail",
				Note: "The observed file is not JSON, so there is nothing to pin."
			},
			{
				Label: "The range law: strip one leading ^, ~, or =",
				Kind: "step",
				Note: "A static version, a compound range, a wildcard, and a protocol dependency stay as authored."
			},
			{
				Label: "The refusal guard: a non-dependency section would change",
				Kind: "branch",
				Note: "The pass is refused rather than guessed, and the section is named."
			},
			{
				Label: "REFUSED line, and no write",
				Kind: "fail",
				Note: "The manifest keeps the bytes it had."
			},
			{
				Label: "GuardedWrite replaceIfVersion, then re-emit fs/observed",
				Kind: "step",
				Note: "The version token is the service's, so a stale fence cannot overwrite."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-package-pinner.log",
				Kind: "store",
				Note: "The pinner's own ledger, separate from the governor's."
			}
		],
		Rule: "One range prefix leaves and nothing else does: the pass is deterministic, there is no update stage, and every write goes through the version fence."
	},
	{
		Slug: "hook-dsh-cargo-governor",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "A tool-layer write lands, carrying its path, its actor, and its version token."
			},
			{
				Label: "Gate: the basename Cargo.toml, a mutation tool, a present observation, the stash, and the exclusion list",
				Kind: "step",
				Note: "The gate writes nothing to the ledger; the module composes its own lines."
			},
			{
				Label: "skipped (excluded) <path>",
				Kind: "fail",
				Note: "Exclusion-first: the internals of a crate are never governed."
			},
			{
				Label: "Discover the nearest registry.json, and parse it",
				Kind: "step",
				Note: "The walk-up is an auxiliary plain-fs probe; the governed manifest is never read here."
			},
			{
				Label: "No registry.json found, or it is unreadable",
				Kind: "branch",
				Note: "The chain pass is skipped, and the line says which of the two happened."
			},
			{
				Label: "Plan the pass: chain, strip, and normalize the dependency sections",
				Kind: "step",
				Note: "smol-toml is read only to identify the entries, never to stringify them back."
			},
			{
				Label: "Rewrite the raw lines, so comments and formatting survive",
				Kind: "step",
				Note: "The rewrite is surgical: an internal calculation over the text, not a TOML round trip."
			},
			{
				Label: "The refusal guard: a non-dependency section, an unsupported value shape, or an entry missing from the text",
				Kind: "branch",
				Note: "Each refusal has its own line, and the rewrite is aborted rather than guessed."
			},
			{
				Label: "GuardedWrite replaceIfVersion, then re-emit fs/observed with the fresh version",
				Kind: "step",
				Note: "The author sees its own bytes; the observation policy's version record is refreshed."
			},
			{
				Label: "Update stage: cargo upgrade through the subprocess seam, then the verify command",
				Kind: "step",
				Note: "The exclusion list is enforced at the CLI level, one flag per crate, and a verifier that cannot run is skipped as non-fatal."
			},
			{
				Label: "The circuit breaker: maxUpdateFailures in a row for one directory",
				Kind: "branch",
				Note: "The directory pauses, and the line carries the count."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-cargo-governor.log",
				Kind: "store",
				Note: "The cargo module's own ledger, separate from the npm governor's."
			}
		],
		Rule: "The Rust boundary is exclusionary and the manifest is the only thing that changes: no npm equivalent exists for a cargo update, so the CLI is the update path and the text rewrite is the pass."
	},
	{
		Slug: "hook-dsh-workspace-observe",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The listener registers on the root context, so it hears every emission."
			},
			{
				Label: "Read the display path and the observed version, verbatim",
				Kind: "step",
				Note: "An absent observation is stamped absent, never a fabricated token."
			},
			{
				Label: "The actor is the hook's own, the path is excluded, or it is outside include",
				Kind: "branch",
				Note: "The own-actor check is an identity test on the actor object, not a name."
			},
			{
				Label: "ignored <path> (own actor | excluded | not included)",
				Kind: "fail",
				Note: "Each refusal names its own reason, so a silent skip is never a guess."
			},
			{
				Label: "A repeat event: the same path at the same version inside the coalescing window",
				Kind: "branch",
				Note: "The version token identifies the file state, so the stamp for it already exists."
			},
			{
				Label: "Dropped silently: no sequence, no stamp, no line",
				Kind: "pass",
				Note: "A different version, or the same version after the window, is stamped normally."
			},
			{
				Label: "Increment the plugin's own sequence, and stamp the path",
				Kind: "step",
				Note: "The counter is the plugin's own and never a wall clock."
			},
			{
				Label: "Emit observe/stamp on the trace bus, when the bus exists",
				Kind: "step",
				Note: "The indexer's first source; a context without the bus records exactly as before."
			},
			{
				Label: "workspace_observe: a record per path, and a bounded ring",
				Kind: "store",
				Note: "The oldest drop is ledgered as capped rather than discarded in silence."
			}
		],
		Rule: "The conversation never sees a stamp: the listener records the event's own words, the last distinct version wins, and the hook reads no file content and writes no file."
	},
	{
		Slug: "hook-dsh-workspace-audit",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "Every observed write is an outcome node on the traceability graph."
			},
			{
				Label: "Read the display path, the version, and the actor's tag",
				Kind: "step",
				Note: "The tag becomes the line's parent, so a chain composes without recursion."
			},
			{
				Label: "The actor is the hook's own, or the path is excluded",
				Kind: "branch",
				Note: "The audit records the world, not itself."
			},
			{
				Label: "ignored <path> (own actor | excluded)",
				Kind: "fail",
				Note: "The line is the accountability record, so the refusal is recorded too."
			},
			{
				Label: "A repeat event: the same path at the same version inside the coalescing window",
				Kind: "branch",
				Note: "The guard is on the listener only; the service's manual lines are never coalesced."
			},
			{
				Label: "Dropped silently: that observed write already has its line",
				Kind: "pass",
				Note: "The last distinct version always wins."
			},
			{
				Label: "Write one OutcomeEvidence line: success on presence, failure on absence",
				Kind: "step",
				Note: "One path every line takes, so the id and the ledger string have one definition."
			},
			{
				Label: "Close the loop with an IntentAssessment, when the service is asked to",
				Kind: "step",
				Note: "The assessment renders the verdict rather than the outcome."
			},
			{
				Label: "workspace_audit: one line per event, and a bounded ring",
				Kind: "store",
				Note: "The ring is the newest first, and the bound is maxLines."
			}
		],
		Rule: "Every observed write becomes one line and one line only: the version token identifies the state, so a repeat inside the window is silence rather than a second record."
	},
	{
		Slug: "hook-dsh-workspace-monitor",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The event is the watch, and it is also the sweep's checkpoint."
			},
			{
				Label: "Read the path and the version, and classify the path into its check sets",
				Kind: "step",
				Note: "The shipped catalog is tsc, format, cargo, and governance, and no command is ever run."
			},
			{
				Label: "The actor is the hook's own, the path is excluded, or it is outside include",
				Kind: "branch",
				Note: "The three guards run in order, before any entry is touched."
			},
			{
				Label: "ignored <path> (own actor | excluded | not included)",
				Kind: "fail",
				Note: "A malformed event is caught and ledgered rather than thrown into the emitter."
			},
			{
				Label: "Record the watch entry: the version, the clock stamp, the check sets, and the debounce deadline",
				Kind: "step",
				Note: "The deadline is computed from the module's clock, and a version change bumps the count."
			},
			{
				Label: "The watch map is over maxWatch",
				Kind: "branch",
				Note: "The oldest entry is the map head."
			},
			{
				Label: "capped <path> (maxWatch <n>)",
				Kind: "fail",
				Note: "The drop is ledgered, never silent."
			},
			{
				Label: "Sweep the deadlines the clock has passed",
				Kind: "step",
				Note: "There is no setTimeout and no setInterval anywhere; the next event is the bound."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-workspace-monitor.log",
				Kind: "store",
				Note: "The health counters ride the probed state instead of the ledger."
			}
		],
		Rule: "There are no real timers: the event records the watch, the deadline comes from the module's clock, and the sweep runs inside the next event."
	},
	{
		Slug: "hook-dsh-workspace-approve",
		Stage: [
			{
				Label: "bind: the exact candidate, with its path, its fingerprint, its version, and its constraints",
				Kind: "step",
				Note: "An approval binds the concrete change set, never a fuzzy intent."
			},
			{
				Label: "Rejected: an incomplete identity, or constraints required and missing",
				Kind: "fail",
				Note: "The binding never becomes pending."
			},
			{
				Label: "approve or deny: the decision lands on the pending binding, with the commitment",
				Kind: "step",
				Note: "The constraints travel with the approval rather than being re-read at check time."
			},
			{
				Label: "The constraint set changed at approval time",
				Kind: "branch",
				Note: "A changed set is a rejection, because an amendment would approve what nobody read."
			},
			{
				Label: "Rejected, and the binding keeps its decision",
				Kind: "fail",
				Note: "The refusal is its own ledger line."
			},
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The invalidation listener hears every observed write on the root context."
			},
			{
				Label: "An observed version differs from the one the approval bound",
				Kind: "branch",
				Note: "A pending or approved binding is the only thing it looks at."
			},
			{
				Label: "invalidated <id> (version changed)",
				Kind: "fail",
				Note: "The binding stops covering the file, and the merge side will see stale."
			},
			{
				Label: "check: an approved binding must cover the exact fingerprint, at the bound version",
				Kind: "step",
				Note: "The check validates the implementation; the authority licensing happened earlier."
			},
			{
				Label: "unbound, the binding's own decision, or stale",
				Kind: "fail",
				Note: "Each answer is its own decision rather than a single refusal."
			},
			{
				Label: "approved: the merge side derives its AuthorizationDecision",
				Kind: "pass",
				Note: "An intent must not authorize its own means, so this grants nothing by itself."
			},
			{
				Label: "workspace_approve: one record per binding, and a bounded ring",
				Kind: "store",
				Note: "The sequence is the plugin's own counter, never a wall clock."
			}
		],
		Rule: "An approval binds the exact candidate and never the intent: a changed constraint set is a rejection, a moved version is an invalidation, and the check only confirms what the authority already licensed."
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Stage: [
			{
				Label: "tools/pre-execute",
				Kind: "seam",
				Note: "The gate arm runs on every gated call, and next() is always awaited first."
			},
			{
				Label: "The tool is outside the gate set, the event is the hook's own, or the target is excluded",
				Kind: "branch",
				Note: "An excluded target is never gated, and the pass is silent."
			},
			{
				Label: "The downstream decision is returned unchanged",
				Kind: "pass",
				Note: "A gate that is not gating leaves the waterfall exactly as it found it."
			},
			{
				Label: "Extract the proposal: the operate record when one is attached, else the minimal synthesis from the call",
				Kind: "step",
				Note: "The operation, the parent, and the category travel with the proposal."
			},
			{
				Label: "The operation identifier has been gated more than loopBound times",
				Kind: "branch",
				Note: "A self-feeding operation can never re-enter the gate without end."
			},
			{
				Label: "loop <operation> (recursion guard)",
				Kind: "fail",
				Note: "The call passes through, and the line names the operation."
			},
			{
				Label: "Run the four independent checks: contributes, scope, policy, preconditions",
				Kind: "step",
				Note: "The intent is never the permission, so the gate checks the means."
			},
			{
				Label: "A check fails, and the recovery table says fail-closed",
				Kind: "branch",
				Note: "Scope is the one obligation that fails closed; the others fail open and say so."
			},
			{
				Label: "deny: the waterfall returns a deny decision with the govern reason",
				Kind: "fail",
				Note: "The proposals become effects only through the gates."
			},
			{
				Label: "A policy rule says escalate",
				Kind: "branch",
				Note: "The approval is the approve family's step, not this one."
			},
			{
				Label: "ask: the call waits for the exact approval",
				Kind: "pass",
				Note: "An escalate is a hand-off rather than a refusal."
			},
			{
				Label: "tools/post-execute",
				Kind: "seam",
				Note: "The observer records accepted or errored for the same call, so the trail is auditable."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-workspace-govern.log",
				Kind: "store",
				Note: "The decision ring is bounded by maxDecisions."
			}
		],
		Rule: "An intent must not authorize its own means: the gate checks the four obligations, the recovery table decides what a failed check means, and a pass returns the downstream decision unchanged."
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Stage: [
			{
				Label: "open(batch, entries): journal the batch before its writes land",
				Kind: "step",
				Note: "Each entry is a file's pre-image, its content and its version captured before the write."
			},
			{
				Label: "Storage is down, so open throws",
				Kind: "fail",
				Note: "There is no journal, so there are no writes: the transaction never starts."
			},
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The listener counts the writes landing against the batches still applying."
			},
			{
				Label: "Bump the batch's progress, and persist the record",
				Kind: "step",
				Note: "The progress is how far a crash got, written as it happens rather than guessed later."
			},
			{
				Label: "seal(batchId, verified | recovery-required)",
				Kind: "step",
				Note: "The batch leaves applying only through this call."
			},
			{
				Label: "revert(batchId): replay the pre-images backward, one file at a time",
				Kind: "step",
				Note: "Last written, first restored, and every write goes through the version fence."
			},
			{
				Label: "The policy block's write verdict is approve",
				Kind: "branch",
				Note: "The revert is the journal's one gated action, because it writes the pre-images back."
			},
			{
				Label: "revert held (<n> files): zero writes, and the batch keeps its state",
				Kind: "fail",
				Note: "Nothing is persisted, so the revert waits for the user rather than half-applying."
			},
			{
				Label: "The fence contradicts the file version, or a pre-image was recorded truncated",
				Kind: "branch",
				Note: "One file's failure never aborts the pass."
			},
			{
				Label: "Reported per file: a conflict, or a skip with its reason",
				Kind: "fail",
				Note: "Never a silent overwrite, and never a half-applied pre-image."
			},
			{
				Label: "Boot recovery: every batch still applying is marked recovery-required",
				Kind: "step",
				Note: "The pass runs as a microtask at mount, after the storage open had its first tick."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-workspace-journal.log",
				Kind: "store",
				Note: "One line per open, seal, revert, and recovery."
			}
		],
		Rule: "Recoverable partial states, never an invisible intermediate state: the batch is journaled before its writes, the revert replays the pre-images through the fence, and a boot finds whatever a crash left applying."
	},
	{
		Slug: "hook-dsh-workspace-merge",
		Stage: [
			{
				Label: "workspace_merge: the batch arrives with its operations and their version fences",
				Kind: "step",
				Note: "The merge is called rather than observed, so it registers no event listener."
			},
			{
				Label: "The policy block's commit verdict is approve",
				Kind: "branch",
				Note: "The outer gate, in front of the atomic gates and every write."
			},
			{
				Label: "merge held (<n> files): zero writes, and every operation replied rejected",
				Kind: "fail",
				Note: "Nothing is persisted, so the batch never starts."
			},
			{
				Label: "The atomic gates: an empty batch, maxFiles, maxTotalBytes, a duplicate path, a missing fence, an unresolved path, a stale fence",
				Kind: "step",
				Note: "The gates run before any write, so a refusal costs nothing."
			},
			{
				Label: "batch <id> rejected (<reason>): the whole batch is refused",
				Kind: "fail",
				Note: "All-or-nothing is the default, so a gate conflict is the batch's and not the file's."
			},
			{
				Label: "Commit one file at a time through the factory's Write, with replaceIfVersion and the sandbox fence",
				Kind: "step",
				Note: "The sequential fold is what keeps the version-guarded writes from racing."
			},
			{
				Label: "Verify every applied write by reading the file back",
				Kind: "step",
				Note: "An applied reply is a verified reply, not an assumed one."
			},
			{
				Label: "A mid-batch write fails, in all-or-nothing mode",
				Kind: "branch",
				Note: "Survivors mode is the alternative, and it reports what survived instead."
			},
			{
				Label: "The remaining files are replied recovery-required",
				Kind: "fail",
				Note: "The journal domain completes or compensates, and the state is never invisible."
			},
			{
				Label: "The reply union per file: applied, conflict, denied, rejected, recovery-required, outcome-unknown",
				Kind: "pass",
				Note: "Derived from the edit lifecycle rather than guessed."
			},
			{
				Label: "workspace_merge: one record per batch",
				Kind: "store",
				Note: "The journal the recovery domain reads later."
			}
		],
		Rule: "The commit is all-or-nothing by default and every write is fenced: a gate failure refuses the batch, a mid-batch failure marks what is left, and no reply is ever guessed."
	},
	{
		Slug: "hook-dsh-workspace-operate",
		Stage: [
			{
				Label: "workspace_propose: a rename, a connect, or a replace, with its version fence",
				Kind: "step",
				Note: "The request shape is the first thing the rules look at."
			},
			{
				Label: "The resolution rules: the shape, the graph, the fence, the staleness, the span",
				Kind: "step",
				Note: "One entry point, three guard chains, and a fixed order of arms."
			},
			{
				Label: "The graph service is absent",
				Kind: "branch",
				Note: "A rename and a connect cannot be resolved without it, and neither can be faked."
			},
			{
				Label: "graph-unavailable: refused rather than guessed",
				Kind: "fail",
				Note: "The replace path is the one that still resolves, because its span is read from the file."
			},
			{
				Label: "The fence is missing, or it contradicts the observed version or the file's own stat",
				Kind: "branch",
				Note: "A fence is the caller's token, or the hook's own heard version, and never an invention."
			},
			{
				Label: "missing-version or stale-version",
				Kind: "fail",
				Note: "A proposal made against a moved file is refused, not amended."
			},
			{
				Label: "The live proposal table is at maxProposals",
				Kind: "branch",
				Note: "A full table refuses rather than evicting the oldest proposal."
			},
			{
				Label: "refused full (<n> live proposals)",
				Kind: "fail",
				Note: "The refusal carries the count, so the bound is visible."
			},
			{
				Label: "proposed: the id and the sequence are assigned, and the proposal is stored",
				Kind: "pass",
				Note: "The hook never writes a file; applying is the approve and merge steps' work."
			},
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The fence tracker hears every write, silently, and writes nothing itself."
			},
			{
				Label: "workspace_operate: the proposal table, best-effort",
				Kind: "store",
				Note: "An absent storage facility degrades to memory rather than failing the propose."
			}
		],
		Rule: "The refusal is the product: every rule that fails returns a typed refusal, the fence is never invented, and a proposal is recorded rather than applied."
	},
	{
		Slug: "hook-dsh-batch-decision",
		Stage: [
			{
				Label: "batch/proposed",
				Kind: "seam",
				Note: "One proposal arrives from the suggester, with its intent, its targets, and its revision."
			},
			{
				Label: "Record the proposal, and ignore a revision that is not newer",
				Kind: "step",
				Note: "The recorder is synchronous: no awaits, no file I/O, and no throws into the emit."
			},
			{
				Label: "Sweep the decided entries past pendingTtlMs",
				Kind: "step",
				Note: "Expiry is lazy, decided on first touch, because the family runs no timers."
			},
			{
				Label: "The policy block's commit verdict is approve",
				Kind: "branch",
				Note: "The shipped default, and the outer gate in front of the auto-approve knob."
			},
			{
				Label: "The proposal stays pending, and the held line is written",
				Kind: "pass",
				Note: "The knob can never widen an approve verdict, and an off knob writes no held line."
			},
			{
				Label: "autoApprove is on, and the intent, the target count, and the confidence all pass",
				Kind: "branch",
				Note: "The first batch of any intent class always requires the user."
			},
			{
				Label: "Record the decision as approved by policy, and emit batch/decision",
				Kind: "step",
				Note: "The bus reaches the ingester and the live view."
			},
			{
				Label: "Write the decision into the agent-team inbox",
				Kind: "step",
				Note: "The same channel plugin-dsh-batchstate reads, so the board's status follows the decision."
			},
			{
				Label: "No live agent to address",
				Kind: "fail",
				Note: "The inbox line says so, and the decision stands."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-batch-decision.log",
				Kind: "store",
				Note: "One line per decision, per refusal, and per handoff."
			}
		],
		Rule: "The decision is the hook's product and not the ingester's: the hook records and announces it, writes no file, and the policy block's approve verdict is the outer gate in front of the auto-approve knob."
	},
	{
		Slug: "hook-dsh-lesson-nudge",
		Stage: [
			{
				Label: "agent/status",
				Kind: "seam",
				Note: "The status emit. Only the idle edge is a moment a review may run."
			},
			{
				Label: "The switch, the edge, and the agent",
				Kind: "step",
				Note: "enabled, then status is idle, then the payload carries an agent."
			},
			{
				Label: "The lesson service is absent, or its tick says no review is due",
				Kind: "branch",
				Note: "The service is probed at every transition, because it may load after this hook."
			},
			{
				Label: "No lesson service: one warning per process",
				Kind: "fail",
				Note: "The nudge is inert until the service loads, and the emit is never broken."
			},
			{
				Label: "The session has reached maxReviewsPerSession",
				Kind: "branch",
				Note: "The hook's own runaway guard, on top of whatever interval the service reports."
			},
			{
				Label: "cap reached (<n> reviews): the edge passes unnudged",
				Kind: "fail",
				Note: "The line carries the count, so a mis-set interval is visible rather than silent."
			},
			{
				Label: "Claim the idle phase through agent.runMaintenance",
				Kind: "step",
				Note: "The review never shares the endpoint with the live turn."
			},
			{
				Label: "Snapshot from the service, run the review, and ledger what it applied and queued",
				Kind: "step",
				Note: "One digest per session, because the projection is the review package's seam."
			},
			{
				Label: "The review task rejects",
				Kind: "fail",
				Note: "The task is detached from the emit, so the rejection is warned rather than unhandled."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-lesson-nudge.log",
				Kind: "store",
				Note: "The activation line, the cap line, and one line per review."
			}
		],
		Rule: "The review runs on the idle edge and nowhere else: the listener returns at once, the maintenance task is detached, and a failure is a warning rather than a throw into the status publication."
	},
	{
		Slug: "hook-dsh-test-suggester",
		Stage: [
			{
				Label: "tools/post-execute",
				Kind: "seam",
				Note: "A judged call settles, after the ccr's prepended listener, and next() is awaited first."
			},
			{
				Label: "Classify the call probe into the pack's test intents",
				Kind: "step",
				Note: "The probe is the tool name plus the arguments JSON, so detection is deterministic."
			},
			{
				Label: "The confidence clears the intent's threshold",
				Kind: "branch",
				Note: "The score is a sigmoid of the summed weights, so the gate is one number."
			},
			{
				Label: "The workspace pack matches, and a candidate survives the exclusion list",
				Kind: "branch",
				Note: "A repository without a pack stays silent rather than borrowing this one."
			},
			{
				Label: "abstained ambiguous, no-companions, or foreign-workspace",
				Kind: "fail",
				Note: "Each abstention is its own line, and no note is built."
			},
			{
				Label: "Reconcile the package's smoke claims with the tree it has",
				Kind: "step",
				Note: "The README counts, the folders, the runner's roster, and the graph's test nodes, read-only."
			},
			{
				Label: "A drift, a cooldown, a dedupe, or the per-turn cap",
				Kind: "branch",
				Note: "The noise controls gate the reconciliation note exactly like an intent note, and agent/pre-step resets the counter when a user message enters."
			},
			{
				Label: "Prepend one additionalContexts notice, and leave the content alone",
				Kind: "pass",
				Note: "A ccr-compressed result is untouched, because the hook never replaces content."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-test-suggester.log",
				Kind: "store",
				Note: "Every activation, refusal, and suggestion is one line."
			}
		],
		Rule: "The hook advises and never rewrites: one notice is prepended to the decision, the content is untouched, and every refusal is an abstention with a line rather than a guess."
	},
	{
		Slug: "hook-dsh-tool-coach",
		Stage: [
			{
				Label: "tools/post-execute",
				Kind: "seam",
				Note: "A terminal call settles; the coach judges bash, pwsh, and the configured judge tools."
			},
			{
				Label: "Normalize the command, then classify it: write, read, search, discovery, control",
				Kind: "step",
				Note: "Heredoc bodies are stripped and substitutions masked before any row is matched."
			},
			{
				Label: "The head is exempt: a build, a test, git, a package manager, or a file lifecycle",
				Kind: "branch",
				Note: "An exempt head dominates its pipe, so a diff redirected to a file is still exempt."
			},
			{
				Label: "exempt <tool> <pattern>: one line, and the call is not judged",
				Kind: "pass",
				Note: "An exempt call neither strikes nor escalates, and the ledger is its only trace."
			},
			{
				Label: "Tier 0: one offense line, and the strike lands in the window",
				Kind: "step",
				Note: "The model sees nothing at tier 0; the ledger is the only record."
			},
			{
				Label: "The class reaches threshold strikes inside window judged calls, past the cooldown",
				Kind: "branch",
				Note: "The note is one per class, not one per call."
			},
			{
				Label: "Tier 1: one notice with the live tool line, prepended as additionalContexts",
				Kind: "step",
				Note: "The tool name, the first sentence of its description, and its primary parameter come from the registry."
			},
			{
				Label: "escalateThreshold offenses since the last note",
				Kind: "branch",
				Note: "The escalation is a section rather than a louder notice."
			},
			{
				Label: "Tier 2: the persistent section, appended at system-prompt/assemble",
				Kind: "step",
				Note: "The section is rebuilt on its own TTL and again when the tool registry changes."
			},
			{
				Label: "enforce is on, and the class has enforceThreshold strikes",
				Kind: "branch",
				Note: "Off by default; write is the narrow scope, and all adds read and search."
			},
			{
				Label: "Tier 3: tools/pre-execute denies the call, with the lesson as the reason",
				Kind: "fail",
				Note: "Discovery and control are never denied, because flagging them hard dilutes the signal."
			},
			{
				Label: "~/.dsh/playform/hook-dsh-tool-coach.log",
				Kind: "store",
				Note: "Every tier writes its own line, and the deny is byte-exact."
			}
		],
		Rule: "The ladder escalates in one direction and only on judged terminal calls: the notice teaches, the section persists, the deny comes last and is off by default, and discovery and control are never denied."
	}
];
/** The flow of one package, or undefined when the site has not authored one. */
function CurrentFor(Slug) {
	return Current.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}
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
// Source/Content/Hook.ts
var Hook = {};
for (const Entry of Behavior) Hook[Entry.Seam] = [...Hook[Entry.Seam] ?? [], {
	Slug: Entry.Slug,
	Seam: Entry.Seam,
	Effect: Entry.Effect
}];
/** The family packages that answer at a seam, in the order the records list them. */
function HookFor(Seam) {
	return Hook[Seam] ?? [];
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
	},
	{
		Slug: "hook-dsh-ccr",
		Role: "The gate on oversized tool output: whole, stored, or a marker the model can retrieve",
		Plugs: "the tools/post-execute waterfall (prepended), the ccr_retrieve tool, and the agent/pre-step engine phase",
		Does: [
			"Reads the result, the tool name, and the failure flag before any other listener sees them",
			"Returns pass, store, or replace, and writes the store only for the last two",
			"Replaces an oversized result with a one-line type-aware preview and a retrieval marker",
			"Answers ccr_retrieve by exact hash, or by a line range inside that hash"
		],
		Shape: "gate"
	},
	{
		Slug: "hook-dsh-comment-filter",
		Role: "The overpass that takes comments out of the results a read hands back",
		Plugs: "the tools/post-execute waterfall (prepended) and the agent/pre-step intent recorder",
		Does: [
			"Strips a full-line comment to an empty line and a trailing comment from its start",
			"Keeps every line-number prefix and every other byte of the envelope",
			"Passes the result when the task itself asks about comments",
			"Names the omission in one notice line inside the content"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-live-containers",
		Role: "The conversation blocks that are recomputed at ask time and read as live",
		Plugs: "the system-prompt/assemble waterfall as one appended section, beside its own tools and observers",
		Does: [
			"Appends one section whose blocks are recomputed at every request",
			"Frames each block so the model cannot mistake it for harness state",
			"Renders an unknown token literally rather than failing the assembly",
			"Collapses the oldest frames to one line when the section passes its budget"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-normalize-dash",
		Role: "The dash family, rewritten to the ASCII hyphen as the model streams it",
		Plugs: "the llm/stream waterfall and the family's raw-write tool, which this package registers",
		Does: [
			"Rewrites the em dash, the en dash, and their relatives to one ASCII hyphen",
			"Reaches text deltas, reasoning deltas, and the block ends the stream assembles",
			"Takes the replacement from config, so the next stream picks a new glyph up",
			"Leaves tool arguments alone unless the risky arm is switched on"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-normalize-ellipsis",
		Role: "The ellipsis code point, rewritten to three ASCII dots as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Rewrites the horizontal ellipsis to three ASCII dots",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Takes the replacement from config, so a different string is one edit away",
			"Writes no count line when the stream held nothing to rewrite"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-normalize-fullwidth",
		Role: "The fullwidth block, mapped back to ASCII as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Maps the fullwidth forms block to its halfwidth ASCII counterpart",
			"Reads the substitution from the core's char table rather than a knob",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to rewrite"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-normalize-invisible",
		Role: "The zero-width family, removed from the stream before anyone reads it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Removes the zero-width spaces, joiners, bidi controls, and the byte order mark",
			"Removes rather than replaces, because the empty string is the default",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to remove"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-normalize-quotes",
		Role: "Eight typographic quotes, rewritten to the straight ASCII pair as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Maps the eight typographic quote code points to two ASCII characters",
			"Reads the substitution from the core's char table rather than a knob",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to rewrite"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-normalize-spaces",
		Role: "The exotic space family, rewritten to the plain ASCII space as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Rewrites every visible non-terminator space that is not the ASCII space",
			"Takes the replacement from config, the plain space by default",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to rewrite"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-replay-suggester",
		Role: "The record of what a search touched, and the recall that answers with it",
		Plugs: "the tools/post-execute waterfall, the replay_history storage domain, and the seeded history file",
		Does: [
			"Appends one entry per judged call that names a path, in the store's own order",
			"Recalls the paths recorded around a similar earlier call",
			"Abstains when the store holds no matching record, rather than guessing",
			"Keeps repo-relative paths and no file contents"
		],
		Shape: "record"
	},
	{
		Slug: "hook-dsh-convention-suggester",
		Role: "The pack's conventions, named before the model writes the file",
		Plugs: "the tools/post-execute waterfall, the agent/pre-step counter reset, and the pack's convention/ domain",
		Does: [
			"Classifies the written path into one of the pack's convention intents",
			"Names the companion targets the convention requires, each with its reason",
			"Stays silent when the cooldown, the per-turn cap, or the confidence refuses",
			"Proposes a pack when the workspace has none, and never writes the live one"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-doc-suggester",
		Role: "The doc graph's companions, named at the call that touches one document",
		Plugs: "the tools/post-execute waterfall and the pack's doc/ domain",
		Does: [
			"Classifies the doc path into one of seven families",
			"Names the graph companions the task has not touched yet",
			"Drops a companion that does not exist under the workspace root",
			"Records the decision, and counts a later call that names a companion as an accept"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-edit-suggester",
		Role: "The files that rarely change alone, named at the edit that changed one",
		Plugs: "the tools/post-execute waterfall for the modification tools, and the pack's edit/ domain",
		Does: [
			"Classifies the edited path into one of seven families, the version family first",
			"Names the standard companions the turn has not touched",
			"Drops the companions the model already edited this turn",
			"Records the decision, and closes an untouched window as a soft reject"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-graph-suggester",
		Role: "The component around a symbol, resolved from the workspace graph rather than guessed",
		Plugs: "the tools/post-execute waterfall and the workspaceGraph neighborhood query",
		Does: [
			"Asks the workspace graph for the component around the anchor",
			"Falls back to a static set only when the graph answers an empty component",
			"Abstains rather than guessing when the service is absent or throws",
			"Resolves a package-name grep to the family roster and the sibling README"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-search-suggester",
		Role: "The target set for an intent, named at the first search that shows it",
		Plugs: "the tools/post-execute waterfall, the suggestion_dismiss tool, and the optional sticky prompt section",
		Does: [
			"Classifies a search call into one of ten intents, destructive first",
			"Names the standard locations for that intent before the next search",
			"Dismisses a family or a path through its own tool",
			"Ranks a candidate by the graph's proof when the graph is present"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-package-governor",
		Role: "The silent governor of every written package.json",
		Plugs: "the fs/observed event through the factory's Wire, and the direct-govern entries for package.json",
		Does: [
			"Gates on the basename, the actor tool, a present observation, the stash, and the exclusion list",
			"Canonicalizes a chain-governed pin to the resolved range the nearest registry records",
			"Bumps the public pins from a detached update stage, in process or through the ncu bin",
			"Re-emits fs/observed with the fresh version, so the observation policy's record is current"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-package-pinner",
		Role: "The silent pinner of every written package.json",
		Plugs: "the fs/observed event through the factory's Wire, and the direct-govern pin entry for package.json",
		Does: [
			"Strips one leading ^, ~, or = from the sections the config declares",
			"Leaves a static version, a compound range, a wildcard, and a protocol dependency as authored",
			"Unions the keep-list from the global policy file, the file's directory, and the nearest registry",
			"Runs no update stage at all, so the pass is deterministic and its only write is fenced"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-cargo-governor",
		Role: "The silent governor of every written Cargo.toml",
		Plugs: "the fs/observed event through the factory's Wire, the direct-govern entries for Cargo.toml, and the subprocess seam",
		Does: [
			"Gates on the basename, the actor tool, a present observation, the stash, and the exclusion list",
			"Rewrites dependency pins surgically, so comments and formatting survive the pass",
			"Runs cargo upgrade as a detached continuation, with the exclusion list enforced at the CLI",
			"Pauses a directory at the circuit breaker, and never notifies the author"
		],
		Shape: "rewrite"
	},
	{
		Slug: "hook-dsh-workspace-observe",
		Role: "The first step of the invisible flow: one observation stamp per file state",
		Plugs: "the workspaceObserve service, the fs/observed listener on the root context, and the trace bus",
		Does: [
			"Stamps the event's display path and version verbatim, and stamps an absence as absent",
			"Guards the own actor, the exclusion list, the include list, and a repeat event",
			"Emits observe/stamp for the indexer, when the trace bus exists",
			"Keeps the latest stamp per path plus a bounded ring, and ledgers the drop"
		],
		Shape: "record"
	},
	{
		Slug: "hook-dsh-workspace-audit",
		Role: "The workspace's accountability: one line per event, and the graph those lines form",
		Plugs: "the workspaceAudit service and the fs/observed listener on the root context",
		Does: [
			"Writes one OutcomeEvidence line per observed write: success on presence, failure on absence",
			"Coalesces a repeat event, because the version token already identifies that file state",
			"Carries the operation, the parent, and the category, so a chain composes without recursion",
			"Closes the loop with an IntentAssessment when the service is asked to"
		],
		Shape: "record"
	},
	{
		Slug: "hook-dsh-workspace-monitor",
		Role: "The watch and the sweep, with the next event as the only clock",
		Plugs: "the fs/observed listener and the state probe on the context",
		Does: [
			"Records a watch entry per observed write, with its check sets and its debounce deadline",
			"Classifies a path into the shipped check sets, and never executes one",
			"Sweeps the deadlines the clock passed, inside the event rather than on a timer",
			"Caps the watch map, and ledgers the entry it drops"
		],
		Shape: "record"
	},
	{
		Slug: "hook-dsh-workspace-approve",
		Role: "The exact human approval: a candidate bound by fingerprint and version",
		Plugs: "the workspaceApprove service and the fs/observed invalidation listener",
		Does: [
			"Binds the concrete change set, with its constraints travelling beside it",
			"Rejects a changed constraint set at approval time rather than amending it",
			"Invalidates a binding when the file is observed at a different version",
			"Answers a check with approved, unbound, the binding's own decision, or stale"
		],
		Shape: "gate"
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Role: "The gate that checks the means, because an intent must not authorize its own",
		Plugs: "the workspaceGovern service, the tools/pre-execute gate, and the tools/post-execute observer",
		Does: [
			"Runs four independent checks on a proposed change: contributes, scope, policy, preconditions",
			"Takes each failure behavior from the recovery table rather than a silent default",
			"Returns the downstream decision unchanged on pass, a deny reason, or an ask",
			"Drops an operation that re-enters the gate past the loop bound",
			"Its flow is the interesting part rather than its verdict: the four checks and the recovery table, not the deny"
		],
		Shape: "gate"
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Role: "The evidence record: the pre-images, the revert, and what a crash left applying",
		Plugs: "the workspaceJournal service, the fs/observed checkpoint listener, and the boot recovery pass",
		Does: [
			"Journals a batch before its writes land, with each file's pre-image and version",
			"Replays a revert backward through the version fence, and reports a conflict rather than overwriting",
			"Counts the writes landing against open batches, so a crash's progress is known",
			"Marks every batch still applying at boot as recovery-required",
			"Its flow is the interesting part: the batch lifecycle is what the four calls describe"
		],
		Shape: "record"
	},
	{
		Slug: "hook-dsh-workspace-merge",
		Role: "The batch commit: atomic gates, fenced writes, and a reply per file",
		Plugs: "the workspaceMerge service and the workspace_merge tool",
		Does: [
			"Holds the whole batch when the policy block's commit verdict is approve",
			"Runs the atomic gates before any write, and refuses the batch rather than a file",
			"Commits one file at a time through the factory's Write, then reads each file back",
			"Reports applied, conflict, denied, rejected, recovery-required, or outcome-unknown"
		],
		Shape: "gate"
	},
	{
		Slug: "hook-dsh-workspace-operate",
		Role: "The operation engine: typed proposals, and the refusal-to-guess beside them",
		Plugs: "the workspaceOperate service, the workspace_propose and workspace_proposals tools, and the fs/observed fence tracker",
		Does: [
			"Proposes a rename, a connect, or a replace, and never writes a file",
			"Refuses with a typed reason: a bad request, an absent graph, an unknown symbol, a stale fence, a full table",
			"Tracks the version fence from fs/observed, so a proposal against a moved file is refused",
			"Records the proposal, and leaves the applying to the approve and merge steps"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-batch-decision",
		Role: "The thin workflow owner between a proposal, its decision, and the board",
		Plugs: "the batch/proposed and batch/decision events, the batch_decision tool, and the agent-team inbox",
		Does: [
			"Records a proposal once, and ignores a revision that is not newer",
			"Answers the policy gate before the auto-approve knob, so an approve verdict is never widened",
			"Expires a proposal on first touch rather than on a timer, and says so in the ledger",
			"Writes the decision into the inbox as well as the bus, so the board and the ingester both hear it",
			"Its flow is the interesting part: a proposal crosses a policy gate, a knob, and a handoff before anyone is told"
		],
		Shape: "gate"
	},
	{
		Slug: "hook-dsh-lesson-nudge",
		Role: "The idle edge of the agent's status turned into a self-improvement review",
		Plugs: "the agent/status event on its idle edge, and the lesson service that plugin-dsh-lesson-review provides",
		Does: [
			"Applies four gates in order: the switch, the idle edge, the service, and the cadence",
			"Claims the idle phase through agent.runMaintenance, so the review never shares the live turn",
			"Detaches the maintenance task, so a rejected review cannot break the status publication",
			"Caps its own reviews per session, on top of whatever interval the service reports",
			"Its flow is the interesting part: the value is where the review runs, not what it says"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-test-suggester",
		Role: "The test intent answered with a target set before the search finishes",
		Plugs: "the tools/post-execute waterfall, the agent/pre-step reset, and the pack's test domain",
		Does: [
			"Classifies a search call into the pack's test intents, from the tool name and the arguments",
			"Names the suite, the README, the runner, and the badge a test task usually touches",
			"Reconciles a package's smoke claims with the tree it actually has, read-only",
			"Abstains rather than guesses: an ambiguous call, a missing companion, and a foreign workspace each have a line"
		],
		Shape: "advise"
	},
	{
		Slug: "hook-dsh-tool-coach",
		Role: "The four-tier ladder that keeps file content out of the terminal",
		Plugs: "the tools/post-execute and tools/pre-execute waterfalls, the system-prompt/assemble section, and the agent/pre-step reset",
		Does: [
			"Normalizes the command before matching, so an obfuscated variant still counts",
			"Classifies a segment as write, read, search, discovery, or control, and lets an exempt head dominate its pipe",
			"Escalates from a silent strike to a notice to a persistent section, and denies last",
			"Names the right tool from the live registry, and falls back to a static table when the fetch fails",
			"Its flow is the interesting part: the ladder is the hook, and the deny is only its last rung"
		],
		Shape: "advise"
	}
];
function PortraitFor(Slug) {
	return Portrait.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
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
	const Current = CurrentFor(Entry.Slug);
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
		},
		{
			Name: "Source/Function/Apply.ts",
			Role: "The listeners, their registration order, and the service the flow calls.",
			Present: Current !== void 0
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
	})} <div class="section__body stack"> <ul class="stack"> ${Portrait.Does.map((Item) => renderTemplate`<li>${Item}</li>`)} </ul> ${Portrait.Shape === "stream" && renderTemplate`${renderComponent($$result, "Stream", $$Stream, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "layer" && renderTemplate`${renderComponent($$result, "Layer", $$Layer, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "surface" && renderTemplate`${renderComponent($$result, "Surface", $$Surface, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "buffer" && renderTemplate`${renderComponent($$result, "Buffer", $$Buffer, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "gate" && renderTemplate`${renderComponent($$result, "Gate", $$Gate, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "rewrite" && renderTemplate`${renderComponent($$result, "Rewrite", $$Rewrite, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "record" && renderTemplate`${renderComponent($$result, "Record", $$Record, { "Slug": Entry.Slug })}`} ${Portrait.Shape === "advise" && renderTemplate`${renderComponent($$result, "Advise", $$Advise, { "Slug": Entry.Slug })}`} </div> </section>`}${Current !== void 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Flow",
		"Lede": "The order this hook's work happens in, with the branch that decides it inline, transcribed from the corpus and the source."
	})} <div class="section__body"> ${renderComponent($$result, "Flow", $$Flow, {
		"Stage": Current.Stage,
		"Rule": Current.Rule
	})} </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Install" })} <div class="section__body"> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
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
The harness ships its own plugin at this seam:&nbsp;
${Own.map((Item, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && ", "}<a${addAttribute(`/plugin/${Item.Slug}/`, "href")}>${Item.Slug}</a> ` })}`)}
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
</p>`} </div> </section>`}${Entry.Slug === "hook-dsh-ccr" && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Retrieve",
		"Lede": "The loop the marker opens: the result arrives, the gate replaces it, the model asks for the bytes by hash, and the store returns them exactly."
	})} <div class="section__body"> ${renderComponent($$result, "Retrieve", $$Retrieve, {
		"Marker": "<<<CCR:9d3c1f0a7b2e4d5c6a8b9c0d|terminal|5231>>>",
		"Hash": "9d3c1f0a7b2e4d5c6a8b9c0d",
		"Size": 5231,
		"Preview": "[terminal:exit 0 | 142 lines | make: *** Error 1]",
		"Body": "make: Entering directory '/repo'&#10;go build ./...&#10;make: *** Error 1"
	})} </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Surface" })} <div class="section__body"> ${SurfaceFor(Entry.Slug).length > 0 ? renderTemplate`${renderComponent($$result, "Table", $$Table, {
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
		"Capture": "package.json, README.md, CHANGELOG.md, Source/Function/Apply.ts",
		"Note": "This page is static. It cannot invoke the plugin, read a ledger, or change a configuration. Every figure comes from those files; a missing README falls back to the manifest's own description, and a package with no surface table shows no surface section."
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
