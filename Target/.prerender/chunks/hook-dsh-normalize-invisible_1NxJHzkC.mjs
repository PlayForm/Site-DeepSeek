import { C as Mention, D as __exportAll, E as createComponent, a as Links, b as Versions, c as Families, l as FamilyPosition, n as $$Base, r as Link, s as Counts, t as $$Badge, x as $$BrandIcon } from "./Badge_BknqmmDW.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_CFU8edPs.mjs";
import { t as $$Card } from "./Card_Bvew4r-r.mjs";
import { t as $$Concept } from "./Concept_BlA-OTUj.mjs";
import { t as $$SectionHeader } from "./SectionHeader_Gm7_aB0i.mjs";
import { t as $$Terminal } from "./Terminal_CayD4oGL.mjs";
import { t as $$Compare } from "./Compare_rH_wUHny.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_CdRf55jD.mjs";
import { t as $$CodeBlock } from "./CodeBlock_Dab0qnAq.mjs";
import { t as $$Seams } from "./Seams_BbAkhtQ4.mjs";
//#region Source/pages/plugins/hook-dsh-normalize-invisible.astro
var hook_dsh_normalize_invisible_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshNormalizeInvisible,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshNormalizeInvisible = createComponent(($$result, $$props, $$slots) => {
	const Pipeline = [
		"  llm/stream waterfall (options, next)     the interceptable wrapper around",
		"       │                                   EVERY streaming model call",
		"       ▼  next() called FIRST, always - options never touched",
		"  Normalize(upstream, state)               the async generator",
		"       │   for await (chunk of upstream)",
		"       ▼",
		"  CoreChunk(chunk, transform, reasoning, toolArgs, raw)  the core's per-chunk dispatch",
		"       │",
		"       ├─ text-delta ────────► Replace(text, Invisible, \"\")  rewrite the text field",
		"       ├─ reasoning-delta ───► same, when normalizeReasoning (default ON)",
		"       ├─ block-end ─────────► the assembled block's text fields -",
		"       │                       TextBlock.text / ReasoningBlock.text (plus a",
		"       │                       runtime `thinking` string field) - the deltas",
		"       │                       AND the block must agree, or consumers see",
		"       │                       inconsistencies",
		"       ├─ tool-call-delta ───► Replace(argumentsDelta, Invisible, \"\") when",
		"       │                       normalizeToolArguments (IMPLEMENTED, default",
		"       │                       OFF - execution-critical raw JSON, the user's",
		"       │                       accepted risk; the example patch turns it",
		"       │                       on) - the assembled ToolCallBlock.arguments",
		"       │                       follows the same flag via block-end",
		"       │                       The gate is THREE-WAY with the flag on: a",
		"       │                       delta/block whose `name` is \"edit\" passes",
		"       │                       through BY IDENTITY (the edit tool's",
		"       │                       `old_string` must match the real file bytes),",
		"       │                       and a call whose arguments open with the",
		"       │                       `{\"__normalize\":false}` marker (FIRST key,",
		"       │                       tracked per call id) passes through",
		"       │                       UNNORMALIZED with the marker entry stripped,",
		"       │                       so the executed call carries no unknown key",
		"       └─ block-start / usage / finish",
		"                                ──► PASSTHROUGH BY IDENTITY, ALWAYS",
		"                                    (usage/finish ordering is the",
		"                                     adapter contract)",
		"       │   count === 0 → original chunk BY IDENTITY; rewritten → shallow copy",
		"       ▼",
		"  yield ──► downstream consumers = the live UI + the durable transcript",
		"       │    (order preserved, no buffering; upstream throws propagate)",
		"       ▼  normal loop completion, Count > 0",
		"  Factory.Append ──► `hook-dsh-normalize-invisible: normalized N invisible char(s) in one stream`"
	];
	const TransformClass = ["[\\u00AD\\u200B\\u200C\\u200D\\u200E\\u200F\\u202A-\\u202E\\u2060\\uFEFF]  →  replacement"];
	const Coverage = [
		{
			Code: "00AD",
			Name: "soft hyphen"
		},
		{
			Code: "200B",
			Name: "zero-width space"
		},
		{
			Code: "200C",
			Name: "zero-width non-joiner"
		},
		{
			Code: "200D",
			Name: "zero-width joiner"
		},
		{
			Code: "200E",
			Name: "left-to-right mark"
		},
		{
			Code: "200F",
			Name: "right-to-left mark"
		},
		{
			Code: "202A-202E",
			Name: "LRE, RLE, PDF, LRO, RLO (bidi embedding controls; U+202E is the classic visual-spoofing override)"
		},
		{
			Code: "2060",
			Name: "word joiner"
		},
		{
			Code: "FEFF",
			Name: "zero-width no-break space (the BOM character)"
		}
	];
	const Siblings = [
		{
			Flavor: "hook-dsh-normalize-dash",
			Table: "core Dashes class",
			Sub: "→ replacement (default -)",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-quotes",
			Table: "core Quotes MAP",
			Sub: "curly → straight",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-ellipsis",
			Table: "core Ellipsis class",
			Sub: "U+2026 → ...",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-spaces",
			Table: "core Spaces class",
			Sub: "unicode spaces → \" \"",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-invisible (this bundle)",
			Table: "core Invisible class",
			Sub: "removed (default \"\")",
			This: true
		},
		{
			Flavor: "hook-dsh-normalize-fullwidth",
			Table: "core Fullwidth MAP",
			Sub: "full-width → half-width",
			This: false
		}
	];
	const Scopes = [
		{
			Scope: "conversation",
			Default: "on",
			Gates: "text-delta text + the assembled text/reasoning blocks"
		},
		{
			Scope: "reasoning",
			Default: "on",
			Gates: "the reasoning-delta sub-gate (ANDed with normalizeReasoning)"
		},
		{
			Scope: "toolInput",
			Default: "off",
			Gates: "the tool-call arguments arm (OR-ed with normalizeToolArguments)"
		},
		{
			Scope: "toolResults",
			Default: "off",
			Gates: "the tools/post-execute arm (tool results in the transcript)"
		},
		{
			Scope: "files",
			Default: "on",
			Gates: "inert in a stream flavor (present so one patch override drives the whole family)"
		},
		{
			Scope: "batch",
			Default: "off",
			Gates: "the agent/pre-step arm (the incoming step batch)"
		}
	];
	const CommandRows = [
		{
			Input: "files <path...>",
			Effect: "declined - the sweep is owned by the normalize-file hook"
		},
		{
			Input: "batch",
			Effect: "arm the one-shot step-batch overpass (consumed by the next incoming batch)"
		},
		{
			Input: "results on|off",
			Effect: "flip scopes.toolResults via the settings service / config editor - never direct State mutation; absent services report the settings-UI path"
		},
		{
			Input: "scopes",
			Effect: "read-only report of the current effective values (the activation line never changes)"
		}
	];
	const LedgerLines = [
		"hook-dsh-normalize-invisible: overpass: normalized N char(s) in tool result <toolName> <callId>",
		"hook-dsh-normalize-invisible: overpass: normalized N char(s) in step batch (turn T step S)",
		"hook-dsh-normalize-invisible: overpass: swept K file(s), normalized M char(s)"
	];
	const Config = [
		{
			Field: "log",
			Type: "boolean",
			Default: "true",
			Volatile: "yes",
			Meaning: "write the durable ledger file"
		},
		{
			Field: "logFile",
			Type: "string",
			Default: "~/.dsh/hook-dsh-normalize-invisible.log",
			Volatile: "yes",
			Meaning: "the invisible ledger (separate from the family's logs)"
		},
		{
			Field: "replacement",
			Type: "string",
			Default: "\"\"",
			Volatile: "yes",
			Meaning: "the transform's only knob - default REMOVAL; hot-editable"
		},
		{
			Field: "normalizeReasoning",
			Type: "boolean",
			Default: "true",
			Volatile: "no",
			Meaning: "normalize reasoning deltas and the assembled reasoning block too"
		},
		{
			Field: "normalizeToolArguments",
			Type: "boolean",
			Default: "false",
			Volatile: "no",
			Meaning: "IMPLEMENTED (default OFF): rewrite the tool-call argumentsDelta and the assembled ToolCallBlock.arguments when on (with the edit name exemption and the {\"__normalize\":false} raw-marker pass-through) - execution-critical raw JSON, the user's accepted risk; the example patch turns it on"
		}
	];
	const StreamExample = [
		"text-delta in (what the model wrote):",
		"",
		"  pass­s​word‍:‎ correct‏⁠﻿",
		"",
		"text-delta out (what reaches the transcript):",
		"",
		"  \"password: correct\""
	];
	const LedgerStrings = ["hook-dsh-normalize-invisible: activated (replacement=, reasoning=on, toolArgs=off, logFile=~/.dsh/hook-dsh-normalize-invisible.log)", "hook-dsh-normalize-invisible: normalized 7 invisible char(s) in one stream"];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-normalize-invisible - DSH Family @ PlayForm",
		"Description": `${Families.Invisible} - the invisible-character normalizer for model output: hooks the llm/stream waterfall and removes the zero-width/invisible family (soft hyphen, zero-width spaces and joiners, bidi controls, BOM), live in the transcript.`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} <span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": "INVISIBLE" })} </span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`CLASS FLAVOR - REMOVAL` })} </div> <section class="page-hero"> <h1 class="page-hero__title">hook-dsh-normalize-invisible</h1> <p class="page-hero__sub"> ${Families.Invisible} • ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} <em>The DeepSeek Harness Plugin
				Family for PlayForm.</em> The${" "} <strong>invisible-character normalizer for model output</strong> - a DeepSeek
				Harness plugin that hooks the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code>llm/stream</code></a>${" "}
waterfall (the interceptable wrapper around EVERY streaming model call, bound to the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code class="code-token">LlmRuntime</code></a>
) and normalizes the zero-width/invisible character family in model output, live in
				the transcript - by REMOVING it: zero-width spaces, joiners, bidi controls and the
				BOM character simply vanish (the default replacement is the empty string).</p> <p class="page-hero__sub">A CLASS
				flavor of the normalize family: the core's <code>Invisible</code> class plus a
				configurable <code>replacement</code> string (default <code>""</code> - removal).</p> <p class="page-hero__sub">
The family's raw-write tool (registered by${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-dash/Source"), "href")}>hook-dsh-normalize-dash</a>
) bypasses this flavor's transforms too - the exemption is family-wide.
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, { "Pkg": "hook-dsh-normalize-invisible" })} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-normalize-invisible</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Hook` })} <span class="workbench-controls__label">Event:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`llm/stream` })} <span class="workbench-controls__label">Table:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`core Invisible class` })} </div> </div> </section> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The profile wiring for this plugin - the bundles list, the patch entry and the restart -
			is on the <a href="/setup/">setup page</a>.
</p> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": FamilyPosition(5)
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-family-position",
		"Title": "The family position",
		"Diagram": `${Families.Invisible} as a hook child of the plugin-dsh-factory service and the hook-dsh-core machinery - the fifth of the six stream normalizer siblings.`
	}, { "default": ($$result) => renderTemplate` <p>
A hook child of the${" "} <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a> </strong>${" "}
service (${Families.Invisible}) and the <strong>hook-dsh-core</strong>${" "}
machinery; the fifth of the six stream normalizer siblings.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Flavor</th> <th>Table</th> <th>Substitution</th> </tr> </thead> <tbody> ${Siblings.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Flavor}</strong> </td> <td>${Row.Table}</td> <td> ${Row.Sub.split("→").map((Part, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && renderTemplate`${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}`}${Part.trim() && renderTemplate`<span>${unescapeHTML(Mention(Part.trim()))}</span>`}` })}`)} </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-non-manifest",
		"Title": "A non-manifest factory consumer",
		"Diagram": "The flavor's factory surface: injecting [\"pluginFactory\"], using only State and Append, the config composed by the factory's standalone Schema helper with shared: false - the minimal block, no fs/observed dead fields - touching no files, always calling next(), composing with other llm/stream listeners regardless of registration order."
	}, { "default": ($$result) => renderTemplate` <p>
It injects${" "} <code>["pluginFactory"]</code> and uses only <code>State</code> (cell unwrap
						+ shared Ledger/Enabled mappings + its own fields) and <code>Append</code>;
						the config is composed by the factory's standalone <code>Schema</code>${" "}
helper with
<code>shared: false</code> - the minimal block, no${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/observed</code></a>${" "}
dead fields.
</p> <p>
It touches no files, so${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/write-intent</code></a>${" "}
and${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/observed</code></a>${" "}
never see it; it wraps the downstream result and always calls${" "} <code>next()</code>, so it composes with other${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code class="code-token">llm/stream</code></a>${" "}
listeners regardless of registration order.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "WHERE THE FLAVOR OPERATES"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "llm/stream - the model stream waterfall",
			What: "The plugin's listener wraps [the interceptable waterfall](Harness:packages/llm/llm/src/index.ts) around EVERY streaming model call (bound to the LlmRuntime): next() is called first, options are never touched, one chunk in - one chunk out, upstream throws propagate.",
			Outcome: "The smugglers are deleted before they reach the live UI or the durable transcript."
		},
		{
			Seam: "The model stream vocabulary (dsh-llm)",
			What: "The chunk/block shapes it rewrites come from the harness's stream vocabulary ([@deepseek-ai/dsh-llm](Harness:packages/llm/llm), type-only): text deltas, reasoning deltas and assembled blocks must agree.",
			Outcome: "No inconsistencies between deltas and blocks for downstream consumers."
		},
		{
			Seam: "The factory service",
			What: "A non-manifest factory consumer: State for the config (the replacement is a hot-editable volatile cell) and Append for every ledger line; it touches no files.",
			Outcome: "Composes with other [llm/stream](Harness:packages/llm/llm/src/index.ts) listeners regardless of registration order."
		},
		{
			Seam: "The raw-write exemption (family-wide)",
			What: "The family's raw-write tool (registered by [hook-dsh-normalize-dash](Ours:Classic/packages/hook-dsh-normalize-dash/Source)) passes through this flavor's stream transforms by identity - the tool's explicit normalize parameter is the only normalization it applies.",
			Outcome: "Per-call control stays with the agent, even with every stream flavor armed."
		},
		{
			Seam: "The ledger / session",
			What: "Two lines through [the factory's Append](Ours:Classic/packages/plugin-dsh-factory/Source): the activation proof from apply() (the empty default renders as replacement=) and the per-stream count line on a normal completion with N > 0.",
			Outcome: "A thrown-away stream writes no ledger line."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Problem",
		"Meta": "WHY THE INVISIBLE FLAVOR EXISTS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-problem",
		"Title": "The perfect smugglers",
		"Diagram": "Zero-width and format characters carrying no visible width - a zero-width joiner inside a file path, a right-to-left mark inside a command, the U+202E visual-spoofing override in what looks like plain text: none showing up in the transcript, all of them changing what a parser, shell or diff sees."
	}, { "default": ($$result) => renderTemplate` <p>
Zero-width and format characters carry no visible width - which makes them
						the perfect smugglers.
</p> <p>
A zero-width joiner inside a file path, a right-to-left mark inside a
						command, the <code class="code-token">U+202E</code> visual-spoofing override
						in what looks like plain text:
						none of them show up in the transcript, all of them change what a parser,
						shell or diff sees.</p> <p>This flavor deletes the whole family before it reaches
						the transcript.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "How It Works",
		"Meta": "THE STREAM PIPELINE"
	})} <div class="code-block">${Pipeline.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-transform",
		"Title": "The transform: the core's Invisible class",
		"Diagram": "The core's Invisible class, applied per text segment through the core's generic class-to-string Replace."
	}, { "default": ($$result) => renderTemplate` <p> <strong>The transform</strong> - the core's <code>Invisible</code> class,
						applied per text segment through the core's generic class-to-string${" "} <code>Replace</code>:
</p> ` })} </div> <div class="code-block"> ${TransformClass.join("\n")} </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-removal",
		"Title": "All are removed - the default is REMOVAL",
		"Diagram": "All covered characters removed (default replacement: \"\" - REMOVAL) per text segment."
	}, { "default": ($$result) => renderTemplate` <p>
All are removed (default <code>replacement: ""</code> - REMOVAL) per text
						segment:
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>U+ codepoints</th> <th>Characters</th> </tr> </thead> <tbody> ${Coverage.map((Row) => renderTemplate`<tr> <td> <code class="code-token">${Row.Code}</code> </td> <td>${unescapeHTML(Mention(Row.Name))}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-mechanics",
		"Title": "Chunk-boundary-safe, function-replaced, counted",
		"Diagram": "No context rules, chunk-boundary-safe - single-character replacement, no lookahead, per-chunk application never disagreeing with whole-text application; the replacement applied with a function replacer so a custom replacement containing $ patterns is inserted literally; replaced characters counted per stream for the ledger line."
	}, { "default": ($$result) => renderTemplate` <p>
No context rules, chunk-boundary-safe - single-character replacement, no
						lookahead, per-chunk application can never disagree with whole-text
						application.
</p> <p>
The replacement is applied with a function replacer, so a custom${" "} <code>replacement</code> containing <code>$</code> patterns is inserted
						literally.</p> <p>Replaced characters are counted per stream for the ledger line.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "SCHEMA + DEFAULTS AT LOAD"
	})} <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Field</th> <th>Type</th> <th>Default</th> <th>Volatile</th> <th>Meaning</th> </tr> </thead> <tbody> ${Config.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Field}</strong> </td> <td>${Row.Type}</td> <td>${unescapeHTML(Mention(Row.Default))}</td> <td>${Row.Volatile}</td> <td>${unescapeHTML(Mention(Row.Meaning))}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-volatile",
		"Title": "Volatile cells commit without remounting",
		"Diagram": "The volatile cells committing without remounting the plugin - the factory's State builder unwrapping them defensively."
	}, { "default": ($$result) => renderTemplate` <p>
They commit without remounting the plugin; the factory's State
						builder unwraps them defensively.
</p> <p>
Example${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/cordis.patch.yml"), "href")}><span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-yaml",
		"Size": "0.9em"
	})}cordis.patch.yml</span></a>${" "}
row:
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "yaml",
		"Style": "margin-top: var(--space-sm)",
		"Source": [
			"- insert:",
			"      - id: hook-dsh-normalize-invisible",
			"        name: \"@playform/hook-dsh-normalize-invisible\"",
			"        config:",
			"            log: true",
			"            logFile: ~/.dsh/hook-dsh-normalize-invisible.log",
			"            replacement: \"\""
		].join("\n")
	})} </section> <!-- The granular scopes + the overpass arms: the volatility widening.
		     Every place the scopes/tool-argument control is described carries
		     the four binding facts: the per-call raw marker, the effective-gate
		     formula, the three structural exemptions, and the overpass
		     invisibility contract. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The scopes surface & the overpass arms",
		"Meta": "GRANULAR CONTROL · ALL VOLATILE"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-scopes",
		"Title": "Every arm gated independently - and all volatile",
		"Diagram": "The scopes object gating every arm of the hook-dsh-normalize-invisible hook independently - the defaults exactly the pre-scopes behavior - with the whole object volatile: one leaf change commits one loader/volatile-update dispatch whose whole object the State's refresh listener re-reads - live, silent, no remount, no new activation line."
	}, { "default": ($$result) => renderTemplate` <p>
The <code>scopes</code> object gates every arm of the${" "} <code>hook-dsh-normalize-invisible</code> hook independently - conversation,
						reasoning, toolInput, toolResults, files, batch - with the defaults exactly
						the pre-scopes behavior.
</p> <p>
The whole object is <strong>volatile</strong>: one leaf change commits one${" "} <code>loader/volatile-update</code> dispatch whose whole object the State's
						refresh listener re-reads - live, silent, no remount, no new activation
						line (a flip lands on the next stream).
</p> <p>
The tool-input arm: effective tool-input normalization is${" "} <code>normalizeToolArguments || scopes.toolInput</code> - the field is kept
						and OR-ed in, so every existing profile keeps working.
</p> <p>
It is the only execution-critical arm, and it carries the per-call escape
						hatch: a call whose arguments open with the${" "} <code>&#123;"__normalize":false&#125;</code> FIRST-key marker passes
						through unnormalized, the marker entry stripped (the executed call carries
						no unknown key) - the "leave that search alone" control for a deliberate
						search for an irregular character.
</p> <p>
The marker must be the first key: a first delta shorter than the marker is
						invisible to the probe and the call normalizes normally.
</p> <p>
Three structural exemptions are never rewritten: the <code>edit</code> call
						(its <code>old_string</code> must match the real file bytes), the${" "} <code>raw-write</code> call (it owns its content normalization through its
						explicit <code>normalize</code> parameter) and the <code>normalize-file</code>${" "}
call (its arguments carry a file path - a normalized dash inside a filename
						would corrupt the target).
</p> <p>
And the overpass invisibility contract: the tool-results arm replaces the
						bytes PRE-COMMIT - the waterfall settles before the result is appended to
						the durable log - so the model only ever sees the normalized output and
						never notices the replacement; the exemption list plus the${" "} <code>&lt;&lt;&lt;CCR:</code> marker guard define what passes untouched.
</p> <p>
That is the write-path counterpart of the governance trio's never-notify
						precedent: the result is built from the author's own content, and the
						observation-policy's version record is refreshed by the re-emitted
						fs/observed.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Scope</th> <th>Default</th> <th>Gates</th> </tr> </thead> <tbody> ${Scopes.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Scope}</strong> </td> <td>${Row.Default}</td> <td>${Row.Gates}</td> </tr>`)} </tbody> </table> </div> <p class="page-hero__sub" style="margin-top: var(--space-md)"> <code>toolResultsExempt</code> (volatile): a tool result whose exec name is
				listed passes the tool-results arm by identity - <code>read</code>,${" "} <code>edit</code>, <code>raw-write</code>, <code>normalize-file</code>,${" "} <code>ccr_retrieve</code>, <code>subagent</code>,${" "} <code>ask_user_question</code> by default.
</p> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-overpass",
		"Title": "The overpass arms: opt-in listeners on two more seams",
		"Diagram": "Two additional listeners, both registered at apply and both opt-in (gated at RUNTIME on the scope cells, so flipping a scope lands through the P10 volatile-refresh without any re-registration): the tool-results arm on tools/post-execute with { prepend: true }, and the step-batch arm on agent/pre-step in default order."
	}, { "default": ($$result) => renderTemplate` <p> <strong>Tool results</strong> - <code>tools/post-execute</code>,${" "} <code>&#123; prepend: true &#125;</code> (OUTERMOST vs the${" "} <a href="/plugins/hook-dsh-ccr/">ccr hook's</a> own prepended gate: the ccr
						compression sees the NORMALIZED bytes; the <code>&lt;&lt;&lt;CCR:</code>${" "}
marker guard makes any load order safe).
</p> <p>
Accepted, non-value-carrying decisions only; TEXT blocks only; N = 0 is a
						true no-op - no ledger line; fail-open.
</p> <p> <strong>Step batch</strong> - <code>agent/pre-step</code>, default order.
</p> <p>
While <code>scopes.batch</code> is on, every incoming batch is normalized;
						the command's one-shot arm fires ONCE regardless of the scope value and is
						cleared after one use.
</p> <p>Text blocks only; never the assistant/tool history.</p> <p>The overpass lines (N &gt; 0 only):</p> ` })} </div> <div class="code-block">${LedgerLines.join("\n")}</div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The <code>normalize-overpass</code> command (registered through the${" "} <code>commands</code> service when it is present - probe-once, a missing service
				simply skips the registration):
</p> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Input</th> <th>Effect</th> </tr> </thead> <tbody> ${CommandRows.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Input}</strong> </td> <td>${Row.Effect}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In Action",
		"Meta": "ONE STREAM, ONE DELETION"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
One stream, one deletion.</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">The model emits text carrying invisible smugglers; the
				live UI and the transcript receive clean text - and the two lines below look
				identical in print, because the removed characters are invisible.</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">The incoming line
				carries, in order: a soft hyphen (<code class="code-token">U+00AD</code>), a
				zero-width space (<code class="code-token">U+200B</code>), a zero-width
				joiner (<code class="code-token">U+200D</code>), a left-to-right mark (
<code class="code-token">U+200E</code>), a right-to-left mark (
<code class="code-token">U+200F</code>), a
				word joiner (<code class="code-token">U+2060</code>) and a BOM character (
<code class="code-token">U+FEFF</code>):
</p> <p class="section-kicker">
Before ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} after - identical in print,
				different to a parser
</p> ${renderComponent($$result, "Compare", $$Compare, {
		"ID": "invisible-stream",
		"Flavor": "invisible",
		"Raw": StreamExample.slice(0, 4),
		"Clean": StreamExample.slice(4)
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-in-action",
		"Title": "The smugglers simply vanish",
		"Diagram": "The smugglers sitting inside the word password and around the colon - a diff seeing a password that does not match the author's text, a parser tokenizing differently, a shell splicing a command - and after the pass all of them simply gone, the output line being what the reader should see."
	}, { "default": ($$result) => renderTemplate` <p>
In the incoming line the smugglers sit inside the word <code>password</code>${" "}
and around the colon; a diff would see a <code>password</code> that does not
						match the author's text, a parser would tokenize differently, a shell could
						splice a command.
</p> <p>
After the pass all of them are simply gone - the output line is what the
						reader should see.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "invisible-hot-and-pass",
		"Title": "Hot-editable, and the same pass elsewhere",
		"Diagram": "The count line on a normal completion with replacements made - the replacement hot-editable (the default \"\" removes; a non-empty value such as \"?\" would mark each smuggler's position for debugging), and the same pass running over reasoning deltas when normalizeReasoning is on and over tool-call arguments when the example patch enables normalizeToolArguments - with the edit name exempt and raw-marker calls passing through unnormalized."
	}, { "default": ($$result) => renderTemplate` <p>
When a stream finishes normally with replacements made, the ledger gets the
						count line shown below.
</p> <p>
The <code>replacement</code> is hot-editable (the default <code>""</code>${" "}
removes; a non-empty value such as <code>"?"</code> would mark each
						smuggler's position for debugging), and the same pass runs over reasoning
						deltas when <code>normalizeReasoning</code> is on and over tool-call
						arguments when the example patch enables <code>normalizeToolArguments</code>${" "}
- with the <code>edit</code> name exempt and raw-marker calls passing
						through unnormalized.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "TWO LINES VIA FACTORY APPEND"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Two lines, both written through the factory's <code>Append</code> (the
				hook-dsh-normalize-invisible: prefix is the logger's
<code>&lt;State.Module&gt;:</code>; the durable file line is
<code>[&lt;ISO&gt;] &lt;message&gt;</code>).</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">The empty default replacement renders
				as the empty <code>replacement=</code>:
</p> <div class="code-block">${LedgerStrings.join("\n")}</div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The activation line is written by <code>apply()</code>; the count line only follows
				a normal stream completion and only when N &gt; 0 (a thrown-away stream writes no
				ledger line).
</p> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Related plugins",
		"Meta": `${Counts.Packages} TOTAL`
	})} <div class="grid grid--3"> ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-core",
		"Href": "/plugins/hook-dsh-core/",
		"Desc": "Supplies the Invisible class, the Replace replacer and the generic Chunk/Block dispatch this flavor is a thin closure over.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`DSH FAMILY` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-normalize-spaces",
		"Href": "/plugins/hook-dsh-normalize-spaces/",
		"Desc": "The neighbouring sibling flavor - the unicode space family, normalized to the plain space.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`SIBLING FLAVOR` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "plugin-dsh-factory",
		"Href": "/plugins/plugin-dsh-factory/",
		"Desc": "The parent service: State, Append - plus the named Schema helper (shared: false) for the config.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`PARENT SERVICE` })}` })} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
License: CC0-1.0.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-invisible.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-invisible.astro";
var $$url = "/plugins/hook-dsh-normalize-invisible";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-invisible@_@astro
var page = () => hook_dsh_normalize_invisible_exports;
//#endregion
export { page };
