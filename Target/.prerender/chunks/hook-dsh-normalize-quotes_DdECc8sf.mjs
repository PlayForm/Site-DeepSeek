import { C as Mention, D as __exportAll, E as createComponent, a as Links, b as Versions, c as Families, l as FamilyPosition, n as $$Base, r as Link, s as Counts, t as $$Badge, x as $$BrandIcon } from "./Badge_BcqTIV8g.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_DerRPTTd.mjs";
import { t as $$Card } from "./Card_CsNNQgw0.mjs";
import { t as $$Concept } from "./Concept_sjNl5b6w.mjs";
import { t as $$SectionHeader } from "./SectionHeader_CwH-UUI4.mjs";
import { t as $$Terminal } from "./Terminal_BMZtWhRH.mjs";
import { t as $$Compare } from "./Compare_BvteMlTf.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_BnfN9xLH.mjs";
import { t as $$CodeBlock } from "./CodeBlock_D0mCXfg1.mjs";
import { t as $$Seams } from "./Seams_DfmJdky_.mjs";
//#region Source/pages/plugins/hook-dsh-normalize-quotes.astro
var hook_dsh_normalize_quotes_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshNormalizeQuotes,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshNormalizeQuotes = createComponent(($$result, $$props, $$slots) => {
	const QuotesMap = [
		{
			Code: "U+2018",
			Name: "left single quotation mark",
			Ascii: "' (U+0027)",
			Glyph: "‘"
		},
		{
			Code: "U+2019",
			Name: "right single quotation mark",
			Ascii: "'",
			Glyph: "’"
		},
		{
			Code: "U+201A",
			Name: "single low-9 quotation mark",
			Ascii: "'",
			Glyph: "‚"
		},
		{
			Code: "U+201B",
			Name: "single high-reversed-9 quotation mark",
			Ascii: "'",
			Glyph: "‛"
		},
		{
			Code: "U+201C",
			Name: "left double quotation mark",
			Ascii: "\" (U+0022)",
			Glyph: "“"
		},
		{
			Code: "U+201D",
			Name: "right double quotation mark",
			Ascii: "\"",
			Glyph: "”"
		},
		{
			Code: "U+201E",
			Name: "double low-9 quotation mark",
			Ascii: "\"",
			Glyph: "„"
		},
		{
			Code: "U+201F",
			Name: "double high-reversed-9 quotation mark",
			Ascii: "\"",
			Glyph: "‟"
		}
	];
	const Pipeline = [
		"  llm/stream waterfall (options, next)     the interceptable wrapper around",
		"       │                                   EVERY streaming model call",
		"       ▼  next() called FIRST, always - options never touched",
		"  Normalize(upstream, state)               the async generator",
		"       │   for await (chunk of upstream)",
		"       ▼",
		"  CoreChunk(chunk, transform, reasoning, toolArgs, raw)  the core's per-chunk dispatch",
		"       │",
		"       ├─ text-delta ────────► ReplaceMap(text, Quotes)     rewrite the text field",
		"       ├─ reasoning-delta ───► same, when normalizeReasoning (default ON)",
		"       ├─ block-end ─────────► the assembled block's text fields -",
		"       │                       TextBlock.text / ReasoningBlock.text (plus a",
		"       │                       runtime `thinking` string field) - the deltas",
		"       │                       AND the block must agree, or consumers see",
		"       │                       inconsistencies",
		"       ├─ tool-call-delta ───► ReplaceMap(argumentsDelta, Quotes) when",
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
		"  Factory.Append ──► `hook-dsh-normalize-quotes: normalized N quote char(s) in one stream`"
	];
	const Siblings = [
		{
			Flavor: "hook-dsh-normalize-dash",
			Table: "core Dashes class",
			Sub: "→ replacement (default -)",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-quotes (this bundle)",
			Table: "core Quotes MAP",
			Sub: "curly → straight",
			This: true
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
			Flavor: "hook-dsh-normalize-invisible",
			Table: "core Invisible class",
			Sub: "removed (default \"\")",
			This: false
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
			Effect: "flip scopes.toolResults via the settings service / config editor - NEVER direct State mutation; absent services report the settings-UI path"
		},
		{
			Input: "scopes",
			Effect: "read-only report of the current effective values (the activation line never changes)"
		}
	];
	const LedgerLines = [
		"hook-dsh-normalize-quotes: overpass: normalized N char(s) in tool result <toolName> <callId>",
		"hook-dsh-normalize-quotes: overpass: normalized N char(s) in step batch (turn T step S)",
		"hook-dsh-normalize-quotes: overpass: swept K file(s), normalized M char(s)"
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
			Default: "~/.dsh/hook-dsh-normalize-quotes.log",
			Volatile: "yes",
			Meaning: "the quotes ledger (separate from the family's logs)"
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
		"  ‘She said “let’s ship it” — today’s the day’",
		"",
		"text-delta out (what reaches the transcript):",
		"",
		"  'She said \"let's ship it\" - today's the day'"
	];
	const LedgerStrings = ["hook-dsh-normalize-quotes: activated (reasoning=on, toolArgs=off, logFile=~/.dsh/hook-dsh-normalize-quotes.log)", "hook-dsh-normalize-quotes: normalized 10 quote char(s) in one stream"];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-normalize-quotes - DSH Family @ PlayForm",
		"Description": `${Families.Quotes} - the quote normalizer for model output: hooks the llm/stream waterfall and normalizes the eight typographic quote code points to their ASCII straight counterparts, LIVE in the transcript.`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} <span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": "QUOTES" })} </span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`MAP FLAVOR` })} </div> <section class="page-hero"> <h1 class="page-hero__title">hook-dsh-normalize-quotes</h1> <p class="page-hero__sub"> ${Families.Quotes} • ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} <em>The DeepSeek Harness Plugin
				Family for PlayForm.</em> The <strong>quote normalizer for model output</strong> - a
				DeepSeek Harness plugin that hooks the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code>llm/stream</code></a>${" "}
waterfall (the interceptable wrapper around EVERY streaming model call, bound to the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code class="code-token">LlmRuntime</code></a>
) and normalizes the curly quote family in model output, LIVE in the transcript: the
				eight typographic quote code points each map to their ASCII straight counterpart -
<code class="code-token">U+2018</code>/<code class="code-token">U+2019</code>/
<code class="code-token">U+201A</code>/<code class="code-token">U+201B</code> to
				the ASCII apostrophe, and <code class="code-token">U+201C</code>/
<code class="code-token">U+201D</code>/<code class="code-token">U+201E</code>/
<code class="code-token">U+201F</code>
to the ASCII double quote.</p> <p class="page-hero__sub">A MAP flavor of the normalize family: the core's${" "} <code>Quotes</code> char-to-char table owns the substitution - no${" "} <code>replacement</code> config knob.</p> <p class="page-hero__sub">The family's raw-write tool (registered by
<a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-dash/Source"), "href")}>hook-dsh-normalize-dash</a>
) bypasses this flavor's transforms too - the exemption is family-wide.
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, { "Pkg": "hook-dsh-normalize-quotes" })} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-normalize-quotes</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Hook` })} <span class="workbench-controls__label">Event:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`llm/stream` })} <span class="workbench-controls__label">Table:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`core Quotes MAP` })} </div> </div> </section> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The profile wiring for this plugin - the bundles list, the patch entry and the restart -
			is on the <a href="/setup/">setup page</a>.
</p> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": FamilyPosition(2)
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-family-position",
		"Title": "The family position",
		"Diagram": `${Families.Quotes} as a hook child of the plugin-dsh-factory service and the hook-dsh-core machinery - the second of the six stream normalizer siblings.`
	}, { "default": ($$result) => renderTemplate` <p>
A hook child of the${" "} <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a> </strong>${" "}
service (${Families.Quotes}) and the <strong>hook-dsh-core</strong> machinery;
						the second of the six stream normalizer siblings.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Flavor</th> <th>Table</th> <th>Substitution</th> </tr> </thead> <tbody> ${Siblings.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Flavor}</strong> </td> <td>${Row.Table}</td> <td> ${Row.Sub.split("→").map((Part, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && renderTemplate`${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}`}${Part.trim() && renderTemplate`<span>${unescapeHTML(Mention(Part.trim()))}</span>`}` })}`)} </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-non-manifest",
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
NEVER see it; it wraps the downstream result and always calls${" "} <code>next()</code>, so it composes with other${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code class="code-token">llm/stream</code></a>${" "}
listeners regardless of registration order.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "WHERE THE FLAVOR OPERATES"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "llm/stream - the model stream waterfall",
			What: "The plugin's listener wraps [the interceptable waterfall](Harness:packages/llm/llm/src/index.ts) around EVERY streaming model call (bound to the LlmRuntime): next() is called first, options are NEVER touched, one chunk in - one chunk out, upstream throws propagate.",
			Outcome: "Straight quotes reach the live UI and the durable transcript as the stream is born."
		},
		{
			Seam: "The model stream vocabulary (dsh-llm)",
			What: "The chunk/block shapes it rewrites come from the harness's stream vocabulary ([@deepseek-ai/dsh-llm](Harness:packages/llm/llm), type-only): text deltas, reasoning deltas and assembled blocks must agree.",
			Outcome: "No inconsistencies between deltas and blocks for downstream consumers."
		},
		{
			Seam: "The factory service",
			What: "A non-manifest factory consumer: State for the config and Append for every ledger line; it touches no files, so [fs/write-intent](Harness:packages/fs/fs/src/index.ts) and [fs/observed](Harness:packages/fs/fs/src/index.ts) never see it.",
			Outcome: "Composes with other [llm/stream](Harness:packages/llm/llm/src/index.ts) listeners regardless of registration order."
		},
		{
			Seam: "The raw-write exemption (family-wide)",
			What: "The family's raw-write tool (registered by [hook-dsh-normalize-dash](Ours:Classic/packages/hook-dsh-normalize-dash/Source)) passes through this flavor's stream transforms by identity - the tool's explicit normalize parameter is the ONLY normalization it applies.",
			Outcome: "Per-call control stays with the agent, even with EVERY stream flavor armed."
		},
		{
			Seam: "The ledger / session",
			What: "Two lines through [the factory's Append](Ours:Classic/packages/plugin-dsh-factory/Source): the activation proof from apply() and the per-stream count line on a normal completion with N > 0.",
			Outcome: "A thrown-away stream writes no ledger line."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Problem",
		"Meta": "WHY THE QUOTES FLAVOR EXISTS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-problem",
		"Title": "A curly quote is simply the wrong character",
		"Diagram": "Smart-quote processors and code editors emitting typographic quotes - every parser, shell and diff understanding the straight ASCII ones - a curly quote in code blocks, commands and file paths being simply the wrong character."
	}, { "default": ($$result) => renderTemplate` <p>
Smart-quote processors and code editors emit typographic quotes; EVERY
						parser, shell and diff understands the straight ASCII ones.
</p> <p>
Left in model output, a curly quote is a silent correctness hazard - in code
						blocks, commands and file paths it is simply the wrong character.</p> <p>This
						flavor makes the straight form the one that reaches the transcript.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "How It Works",
		"Meta": "THE STREAM PIPELINE"
	})} <div class="code-block">${Pipeline.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-transform",
		"Title": "The transform: the core's Quotes map",
		"Diagram": "Exactly the core's Quotes map (@playform/hook-dsh-core's Normalize/Quotes), applied per text segment through the core's ReplaceMap - eight entries, each typographic quote code point to its ASCII straight counterpart."
	}, { "default": ($$result) => renderTemplate` <p> <strong>The transform</strong> - exactly the core's <code>Quotes</code> map
						(
<a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-core/Source"), "href")}>@playform/hook-dsh-core</a>
's Normalize/Quotes), applied per text segment through the core's${" "} <code>ReplaceMap</code> - eight entries, each typographic quote code point
						to its ASCII straight counterpart:
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Code point</th> <th>Glyph</th> <th>Character (by name)</th> <th>ASCII</th> </tr> </thead> <tbody> ${QuotesMap.map((Row) => renderTemplate`<tr> <td> <code class="code-token">${Row.Code}</code> </td> <td> <code class="code-token">${Row.Glyph}</code> </td> <td>${Row.Name}</td> <td> <code class="code-token">${Row.Ascii}</code> </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-mechanics",
		"Title": "Chunk-boundary-safe, function-replaced, counted",
		"Diagram": "No context rules - one character in, its straight counterpart out; chunk-boundary-safe: single-character substitution, no lookahead - per-chunk application never disagreeing with whole-text application; the mapping values returned through a function replacer so they are inserted literally (no $-pattern interpretation); replaced characters counted per stream for the ledger line."
	}, { "default": ($$result) => renderTemplate` <p>
No context rules - one character in, its straight counterpart out.</p> <p>
Chunk-boundary-safe: single-character substitution, no lookahead - per-chunk
						application can NEVER disagree with whole-text application.
</p> <p>
The mapping values are returned through a function replacer, so they are
						inserted literally (no $-pattern interpretation).</p> <p>Replaced characters are
						counted per stream for the ledger line.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "NO REPLACEMENT FIELD (MAP FLAVOR)"
	})} <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Field</th> <th>Type</th> <th>Default</th> <th>Volatile</th> <th>Meaning</th> </tr> </thead> <tbody> ${Config.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Field}</strong> </td> <td>${Row.Type}</td> <td>${unescapeHTML(Mention(Row.Default))}</td> <td>${Row.Volatile}</td> <td>${unescapeHTML(Mention(Row.Meaning))}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-no-replacement",
		"Title": "There is no replacement field (MAP flavor)",
		"Diagram": "The MAP flavor carrying no replacement field - volatile cells committing without remounting the plugin, the factory's State builder unwrapping them defensively."
	}, { "default": ($$result) => renderTemplate` <p>
There is${" "} <strong>
no <code>replacement</code> field
</strong>${" "}
(MAP flavor).
</p> <p>
They commit WITHOUT remounting the plugin; the factory's State
						builder unwraps them defensively.</p> <p>Example${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/cordis.patch.yml"), "href")}><span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-yaml",
		"Size": "0.9em"
	})}cordis.patch.yml</span></a>${" "}
row:
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "yaml",
		"Style": "margin-top: var(--space-sm)",
		"Source": [
			"- insert:",
			"      - id: hook-dsh-normalize-quotes",
			"        name: \"@playform/hook-dsh-normalize-quotes\"",
			"        config:",
			"            log: true",
			"            logFile: ~/.dsh/hook-dsh-normalize-quotes.log",
			"            normalizeReasoning: true"
		].join("\n")
	})} </section> <!-- The granular scopes + the overpass arms: the volatility widening.
		     Every place the scopes/tool-argument control is described carries
		     the four binding facts: the per-call raw marker, the effective-gate
		     formula, the three structural exemptions, and the overpass
		     invisibility contract. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The scopes surface & the overpass arms",
		"Meta": "GRANULAR CONTROL · ALL VOLATILE"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-scopes",
		"Title": "Every arm gated independently - and all volatile",
		"Diagram": "The scopes object gating every arm of the hook-dsh-normalize-quotes hook independently - the defaults exactly the pre-scopes behavior - with the whole object volatile: one leaf change commits one loader/volatile-update dispatch whose whole object the State's refresh listener re-reads - live, silent, no remount, no new activation line."
	}, { "default": ($$result) => renderTemplate` <p>
The <code>scopes</code> object gates every arm of the${" "} <code>hook-dsh-normalize-quotes</code> hook independently - conversation,
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
Three structural exemptions are NEVER rewritten: the <code>edit</code> call
						(its <code>old_string</code> must match the real file bytes), the${" "} <code>raw-write</code> call (it owns its content normalization through its
						explicit <code>normalize</code> parameter) and the <code>normalize-file</code>${" "}
call (its arguments carry a file path - a normalized dash inside a filename
						would corrupt the target).
</p> <p>
And the overpass invisibility contract: the tool-results arm replaces the
						bytes PRE-COMMIT - the waterfall settles before the result is appended to
						the durable log - so the model ONLY ever sees the normalized output and
						NEVER notices the replacement; the exemption list plus the${" "} <code>&lt;&lt;&lt;CCR:</code> marker guard define what passes untouched.
</p> <p>
That is the write-path counterpart of the governance trio's never-notify
						precedent: the result is built from the author's own content, and the
						observation-policy's version record is refreshed by the re-emitted
						fs/observed.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Scope</th> <th>Default</th> <th>Gates</th> </tr> </thead> <tbody> ${Scopes.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Scope}</strong> </td> <td>${Row.Default}</td> <td>${Row.Gates}</td> </tr>`)} </tbody> </table> </div> <p class="page-hero__sub" style="margin-top: var(--space-md)"> <code>toolResultsExempt</code> (volatile): a tool result whose exec name is
				listed passes the tool-results arm by identity - <code>read</code>,${" "} <code>edit</code>, <code>raw-write</code>, <code>normalize-file</code>,${" "} <code>ccr_retrieve</code>, <code>subagent</code>,${" "} <code>ask_user_question</code> by default.
</p> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-overpass",
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
While <code>scopes.batch</code> is on, EVERY incoming batch is normalized;
						the command's one-shot arm fires ONCE regardless of the scope value and is
						cleared after one use.
</p> <p>Text blocks only; never the assistant/tool history.</p> <p>The overpass lines (N &gt; 0 only):</p> ` })} </div> <div class="code-block">${LedgerLines.join("\n")}</div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The <code>normalize-overpass</code> command (registered through the${" "} <code>commands</code> service when it is present - probe-once, a missing service
				simply skips the registration):
</p> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Input</th> <th>Effect</th> </tr> </thead> <tbody> ${CommandRows.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Input}</strong> </td> <td>${Row.Effect}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In Action",
		"Meta": "ONE STREAM, ONE TRANSFORMATION"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
One stream, one transformation. The model emits smart-quoted prose; the live UI and
				the transcript receive the straight ASCII forms:
</p> <p class="section-kicker">
Before ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} after - the model stream, then
				what reaches the transcript
</p> ${renderComponent($$result, "Compare", $$Compare, {
		"ID": "quotes-stream",
		"Flavor": "quotes",
		"Raw": StreamExample.slice(0, 4),
		"Clean": StreamExample.slice(4)
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-in-action",
		"Title": "Every typographic quote becomes its ASCII counterpart",
		"Diagram": "Every typographic quote in the incoming text - the four single forms and the four double forms - becoming its ASCII counterpart, straight quotes already there untouched (the count only counting replacements) - the difference between a command that runs and one that fails for no visible reason."
	}, { "default": ($$result) => renderTemplate` <p>
Every typographic quote in the incoming text - the four single forms and the
						four double forms - becomes its ASCII counterpart; straight quotes that were
						already there are untouched (the count ONLY counts replacements).
</p> <p>
In code blocks, commands and file paths this is the difference between a
						command that runs and one that fails for no visible reason.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "quotes-pass-coverage",
		"Title": "The same pass runs over reasoning and tool-call arguments",
		"Diagram": "The count line on a normal completion with replacements made - and the same pass running over reasoning deltas when normalizeReasoning is on, and over tool-call arguments when the example patch enables normalizeToolArguments - with the edit name exempt and raw-marker calls passing through unnormalized."
	}, { "default": ($$result) => renderTemplate` <p>
When a stream finishes normally with replacements made, the ledger gets the
						count line shown below.
</p> <p>
The same pass runs over reasoning deltas when${" "} <code>normalizeReasoning</code> is on, and over tool-call arguments when the
						example patch enables <code>normalizeToolArguments</code> - with the${" "} <code>edit</code> name exempt and the raw-marker calls passing through
						unnormalized.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "TWO LINES VIA FACTORY APPEND"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Two lines, both written through the factory's <code>Append</code> (the
				hook-dsh-normalize-quotes: prefix is the logger's
<code>&lt;State.Module&gt;:</code>; the durable file line is
<code>[&lt;ISO&gt;] &lt;message&gt;</code>):
</p> <div class="code-block">${LedgerStrings.join("\n")}</div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The activation line is written by <code>apply()</code>; the count line ONLY follows
				a normal stream completion and only when N &gt; 0 (a thrown-away stream writes no
				ledger line).
</p> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Related plugins",
		"Meta": `${Counts.Packages} TOTAL`
	})} <div class="grid grid--3"> ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-core",
		"Href": "/plugins/hook-dsh-core/",
		"Desc": "Supplies the Quotes MAP, the ReplaceMap replacer and the generic Chunk/Block dispatch this flavor is a thin closure over.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`DSH FAMILY` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-normalize-dash",
		"Href": "/plugins/hook-dsh-normalize-dash/",
		"Desc": "The FIRST stream normalizer sibling - and the registrar of the family-wide raw-write exemption.",
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
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-quotes.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-quotes.astro";
var $$url = "/plugins/hook-dsh-normalize-quotes";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-quotes@_@astro
var page = () => hook_dsh_normalize_quotes_exports;
//#endregion
export { page };
