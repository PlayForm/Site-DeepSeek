import { C as Mention, D as __exportAll, E as createComponent, a as Links, b as Versions, c as Families, l as FamilyPosition, n as $$Base, r as Link, s as Counts, t as $$Badge, x as $$BrandIcon } from "./Badge_epMRbWWn.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_ajB5vkMW.mjs";
import { t as $$Card } from "./Card_Burs0ZFi.mjs";
import { t as $$Concept } from "./Concept_BsgF5ENb.mjs";
import { t as $$SectionHeader } from "./SectionHeader_Dq_7HTHT.mjs";
import { t as $$Terminal } from "./Terminal_C56Vdwct.mjs";
import { t as $$Compare } from "./Compare_Djs2PE6H.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_KBZ5UEUR.mjs";
import { t as $$CodeBlock } from "./CodeBlock_C4aDhWGD.mjs";
import { t as $$Seams } from "./Seams_bMRc6zc-.mjs";
//#region Source/pages/plugins/hook-dsh-normalize-dash.astro
var hook_dsh_normalize_dash_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshNormalizeDash,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshNormalizeDash = createComponent(($$result, $$props, $$slots) => {
	const Pipeline = [
		"  llm/stream waterfall (options, next)     the interceptable wrapper around",
		"       │                                   EVERY streaming model call",
		"       ▼  next() called FIRST, always - options never touched",
		"  Normalize(upstream, state)               the async generator (Function/Normalize)",
		"       │   for await (chunk of upstream)",
		"       ▼",
		"  CoreChunk(chunk, transform, reasoning, toolArgs, raw)",
		"       │                                   the core's per-chunk dispatch",
		"       │",
		"       ├─ text-delta ────────► Replace(text, Dashes, \"-\")   rewrite the text field",
		"       ├─ reasoning-delta ───► same, when normalizeReasoning (default ON)",
		"       ├─ block-end ─────────► the assembled block's text fields -",
		"       │                       TextBlock.text / ReasoningBlock.text (plus a",
		"       │                       runtime `thinking` string field) - the deltas",
		"       │                       AND the block must agree, or consumers see",
		"       │                       inconsistencies",
		"       ├─ tool-call-delta ───► Replace(argumentsDelta, Dashes, \"-\") when",
		"       │                       normalizeToolArguments (IMPLEMENTED, default",
		"       │                       OFF - execution-critical raw JSON, the user's",
		"       │                       accepted risk; the example patch turns it",
		"       │                       on) - the assembled ToolCallBlock.arguments",
		"       │                       follows the same flag via block-end",
		"       │",
		"       │                       The gate is THREE-WAY with the flag on: a",
		"       │                       delta/block whose `name` is \"edit\" or",
		"       │                       \"raw-write\" passes through BY IDENTITY (the",
		"       │                       edit tool's `old_string` must match the real",
		"       │                       file bytes; the raw-write tool owns its",
		"       │                       normalization through the explicit `normalize`",
		"       │                       parameter), and a call whose arguments open",
		"       │                       with the `{\"__normalize\":false}` marker (FIRST",
		"       │                       key, tracked per call id) passes through",
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
		"  Factory.Append ──► `hook-dsh-normalize-dash: normalized N dash char(s) in one stream`"
	];
	const TransformClass = ["\\u058A\\u05BE\\u1400\\u1806\\u2010-\\u2015\\u2E17\\u2E1A\\u2E3A-\\u2E3B\\u2E40", "\\u2E5D\\u301C\\u3030\\u30A0\\uFE31-\\uFE32\\uFE58\\uFE63\\uFF0D  →  replacement"];
	const NormalizeTable = [
		{
			Value: "absent or false (default)",
			Effect: "the content VERBATIM, byte-for-byte"
		},
		{
			Value: "true or \"all\"",
			Effect: "the family's SIX transforms applied in order, daisy-chaining the text: Dashes (→ the module's replacement), Quotes (curly → straight), Ellipsis (U+2026 → ...), Spaces (unicode spaces → \" \"), Invisible (removed), Fullwidth (full-width → half-width)"
		},
		{
			Value: "[\"dash\", ...]",
			Effect: "ONLY the selected flavors, applied in the family's fixed order (dashes → quotes → ellipsis → spaces → invisible → fullwidth); the parameter's schema declares the union (boolean | \"all\" | the flavor-name array)"
		}
	];
	const Mapping = [
		{
			Glyph: "—",
			Code: "U+2014",
			Name: "EM DASH",
			Out: "-",
			Ascii: "U+002D"
		},
		{
			Glyph: "–",
			Code: "U+2013",
			Name: "EN DASH",
			Out: "-",
			Ascii: "U+002D"
		},
		{
			Glyph: "―",
			Code: "U+2015",
			Name: "HORIZONTAL BAR",
			Out: "-",
			Ascii: "U+002D"
		},
		{
			Glyph: "‑",
			Code: "U+2011",
			Name: "NON-BREAKING HYPHEN",
			Out: "-",
			Ascii: "U+002D"
		},
		{
			Glyph: "－",
			Code: "U+FF0D",
			Name: "FULLWIDTH HYPHEN-MINUS",
			Out: "-",
			Ascii: "U+002D"
		}
	];
	const StreamExample = [
		"text-delta in (what the model wrote):",
		"",
		"  \"The refactor is complete — every call site updated, ranges 10–15",
		"   covered, and the odd U+2015 bar ― swept too.\"",
		"",
		"text-delta out (what reaches the transcript):",
		"",
		"  \"The refactor is complete - every call site updated, ranges 10-15",
		"   covered, and the odd U+2015 bar - swept too.\""
	];
	const GateExample = [
		"tool-call-delta, name \"edit\"        → passes through BY IDENTITY",
		"                                      (old_string must match real file bytes,",
		"                                       em dashes and all)",
		"tool-call-delta, name \"raw-write\"   → passes through BY IDENTITY",
		"                                      (the tool owns its normalization",
		"                                       through its explicit `normalize`",
		"                                       parameter)",
		"tool-call-delta, name \"write\",",
		"  arguments {\"file\": \"a — b.txt\"} → normalized to {\"file\": \"a - b.txt\"}"
	];
	const RawWriteExample = [
		"raw-write, content",
		"\"The refactor is complete — every call site updated, ranges 10–15 covered, and the odd U+2015 bar ― swept too.\",",
		"normalize absent:",
		"",
		"→ the file matches the input byte-for-byte (em dash, en dash and the horizontal bar all survive)",
		"",
		"raw-write, same content, normalize: [\"dash\"]:",
		"",
		"→ The refactor is complete - every call site updated, ranges 10-15 covered, and the odd U+2015 bar - swept too.",
		"(ONLY the dash-family characters are replaced; a curly quote, an ellipsis or a full-width character",
		"in the same content would survive untouched)",
		"",
		"raw-write, content \"He said “wait” … then left．\", normalize: [\"quotes\"]:",
		"",
		"→ He said \"wait\" … then left． (ONLY the curly quotes are replaced — the ellipsis and the",
		"full-width period are untouched by the quotes-only selection)",
		"",
		"raw-write, content \"He said “wait” … then left．\", normalize: true:",
		"",
		"→ He said \"wait\" ... then left. (all six transforms, in the family's fixed order — the legacy behavior)"
	];
	const LedgerStrings = ["hook-dsh-normalize-dash: activated (replacement=-, reasoning=on, toolArgs=off, logFile=~/.dsh/hook-dsh-normalize-dash.log)", "hook-dsh-normalize-dash: normalized 4 dash char(s) in one stream"];
	const Siblings = [
		{
			Flavor: "hook-dsh-normalize-dash (this bundle)",
			Table: "core Dashes class",
			Sub: "→ replacement (default -)",
			This: true
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
			Effect: "flip scopes.toolResults via the settings service / config editor - never direct State mutation; absent services report the settings-UI path"
		},
		{
			Input: "scopes",
			Effect: "read-only report of the current effective values (the activation line never changes)"
		}
	];
	const LedgerLines = [
		"hook-dsh-normalize-dash: overpass: normalized N char(s) in tool result <toolName> <callId>",
		"hook-dsh-normalize-dash: overpass: normalized N char(s) in step batch (turn T step S)",
		"hook-dsh-normalize-dash: overpass: swept K file(s), normalized M char(s)"
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
			Default: "~/.dsh/hook-dsh-normalize-dash.log",
			Volatile: "yes",
			Meaning: "the normalize-dash ledger (separate from the family's logs)"
		},
		{
			Field: "replacement",
			Type: "string",
			Default: "-",
			Volatile: "yes",
			Meaning: "the transform's only knob - hot-editable, the next stream picks it up with no remount"
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
			Meaning: "IMPLEMENTED (default OFF): rewrite the tool-call argumentsDelta and the assembled ToolCallBlock.arguments when on (with the edit/raw-write name exemptions and the {\"__normalize\":false} raw-marker pass-through) - execution-critical raw JSON, the user's accepted risk; the example patch turns it on"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-normalize-dash - DSH Family @ PlayForm",
		"Description": `${Families.Dash} - the dash normalizer for model output: hooks the llm/stream waterfall and normalizes the unicode dash family to ASCII hyphen-minus, live in the transcript.`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} <span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": "DASH" })} </span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`CLASS FLAVOR + THE RAW-WRITE TOOL` })} </div> <section class="page-hero"> <h1 class="page-hero__title">hook-dsh-normalize-dash</h1> <p class="page-hero__sub"> ${Families.Dash} • ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} <em>The DeepSeek Harness Plugin Family
				for PlayForm.</em> The <strong>dash normalizer for model output</strong> - a DeepSeek
				Harness plugin that hooks the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code>llm/stream</code></a>${" "}
waterfall (the interceptable wrapper around EVERY streaming model call, bound to the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code class="code-token">LlmRuntime</code></a>
) and normalizes the unicode dash family to ASCII hyphen-minus, live in the
				transcript: em dashes, en dashes and seventeen exotic relatives${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <code>-</code>.</p> <p class="page-hero__sub">The normalize-dashes hook, at the injection point the harness itself does not have.</p> <p class="page-hero__sub">A CLASS
				flavor of the normalize family: the core's <code>Dashes</code> table plus a
				configurable <code>replacement</code>
(default <code>-</code>).</p> <p class="page-hero__sub">It also registers the family's${" "} <strong>raw-write tool</strong> - a write wrapper with an explicit${" "} <code>normalize</code> parameter (default false = verbatim), exempt from the stream
				normalization by name like
<code>edit</code>.
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, { "Pkg": "hook-dsh-normalize-dash" })} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-normalize-dash</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Hook + Tool` })} <span class="workbench-controls__label">Event:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`llm/stream` })} <span class="workbench-controls__label">Injects:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`pluginFactory` })} </div> </div> </section> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The profile wiring for this plugin - the bundles list, the patch entry and the restart -
			is on the <a href="/setup/">setup page</a>.
</p> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": FamilyPosition(1)
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-family-position",
		"Title": "The family position",
		"Diagram": `${Families.Dash} as a hook child of the plugin-dsh-factory service and the hook-dsh-core machinery - the first of six stream normalizer siblings, all built on the shared machinery.`
	}, { "default": ($$result) => renderTemplate` <p>
A hook child of the${" "} <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a> </strong>${" "}
service (${Families.Dash}) and the <strong>hook-dsh-core</strong> machinery;
						the first of six stream normalizer siblings, all built on the shared
						machinery.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Flavor</th> <th>Table</th> <th>Substitution</th> </tr> </thead> <tbody> ${Siblings.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Flavor}</strong> </td> <td>${Row.Table}</td> <td> ${Row.Sub.split("→").map((Part, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && renderTemplate`${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}`}${Part.trim() && renderTemplate`<span>${unescapeHTML(Mention(Part.trim()))}</span>`}` })}`)} </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-non-manifest",
		"Title": "The first NON-MANIFEST module",
		"Diagram": "The flavor's factory surface: injecting [\"pluginFactory\"], using only State (cell unwrap + shared Ledger/Enabled mappings + its own fields) and Append - touching no files, so fs/write-intent and fs/observed never see it."
	}, { "default": ($$result) => renderTemplate` <p>
It injects <code>["pluginFactory"]</code> and uses only <code>State</code>${" "}
(cell unwrap + shared Ledger/Enabled mappings + its own fields) and${" "} <code>Append</code> - the factory's first <strong>NON-MANIFEST module</strong>.
</p> <p>
It touches no files, so${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/write-intent</code></a>${" "}
and${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/observed</code></a>${" "}
never see it; it wraps the downstream result and always calls${" "} <code>next()</code>, so it composes with other${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code class="code-token">llm/stream</code></a>${" "}
listeners regardless of registration order.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-identity",
		"Title": "Identity for untouched chunks, shallow copies for rewrites",
		"Diagram": "The per-chunk outcome: an untouched chunk passing through by object identity, a rewritten delta/block being a shallow copy with only the text field replaced."
	}, { "default": ($$result) => renderTemplate` <p>
Untouched chunks pass through by object identity; a rewritten delta/block is
						a shallow copy with only the text field replaced.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "WHERE THE FLAVOR OPERATES"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "llm/stream - the model stream waterfall",
			What: "The plugin's listener wraps [the interceptable waterfall](Harness:packages/llm/llm/src/index.ts) around EVERY streaming model call (bound to the LlmRuntime): next() is called first and unconditionally, options are never touched, one chunk in - one chunk out, upstream throws propagate.",
			Outcome: "The live UI and the durable transcript see the normalized stream as it is born."
		},
		{
			Seam: "The tool layer - the agent's toolset",
			What: "Besides the listener, the plugin registers the family's raw-write tool into the agent's toolset (ctx.tools.register): a write wrapper around the built-in write operation with an explicit normalize parameter - exempt from stream normalization by name, exactly like edit.",
			Outcome: "The normalization decision moves to execution time, per call: verbatim by default, the family's transforms on demand."
		},
		{
			Seam: "ctx.fs - the filesystem service (dsh-fs)",
			What: "The raw-write exec mirrors the built-in write's path exactly - resolve, [the fs/write-intent waterfall](Harness:packages/fs/fs/src/index.ts), the standing sandbox policy, writeText, then the [fs/observed emit](Harness:packages/fs/fs/src/index.ts) - so the governance hooks treat its writes like built-in writes.",
			Outcome: "One write path for the whole agent, plugin tools included."
		},
		{
			Seam: "The factory service",
			What: "A non-manifest factory consumer: State for the config (hot-editable cells, no remount) and Append for every ledger line; it touches no files on the stream path.",
			Outcome: "Composes with other [llm/stream](Harness:packages/llm/llm/src/index.ts) listeners regardless of registration order."
		},
		{
			Seam: "The ledger / session",
			What: "Two lines through [the factory's Append](Ours:Classic/packages/plugin-dsh-factory/Source): the activation proof from apply() and the per-stream count line on a normal completion with N > 0.",
			Outcome: "A thrown-away stream writes no ledger line; the count is per stream, visible in your own log."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Problem",
		"Meta": "WHY THE DASH FLAVOR EXISTS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-problem-file-hook",
		"Title": "File hooks rewrite after the fact; model output is born in the stream",
		"Diagram": "The file-hook approach rewriting the unicode dash family to ASCII hyphen-minus in files after the fact - perl -CSD -pe over whatever was already written - while model output is born in the stream: the live UI and the durable transcript seeing the em dashes first, no matter what a file hook does later."
	}, { "default": ($$result) => renderTemplate` <p>
The file-hook approach rewrites the unicode dash family to ASCII
						hyphen-minus <strong>in files after the fact</strong> -${" "} <code>perl -CSD -pe</code> over whatever was already written.
</p> <p>
Model output, however, is born in the stream: the live UI and the durable
						transcript see the em dashes first, no matter what a file hook does later.</p> <p>A
						DSH plugin can go where a file hook cannot: the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code>llm/stream</code></a>${" "}
waterfall, where every streaming model call passes through.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-problem-visible",
		"Title": "Deliberately VISIBLE - it IS the feature",
		"Diagram": "The visibility contrast: the governance family's rewrites being SILENT, this plugin's normalization flowing into both the live UI and the durable transcript."
	}, { "default": ($$result) => renderTemplate` <p>
Unlike the governance family (
<a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-package-governor/Source"), "href")}>hook-dsh-package-governor</a>
,
<a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-package-pinner/Source"), "href")}>hook-dsh-package-pinner</a>
,${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-cargo-governor/Source"), "href")}>hook-dsh-cargo-governor</a>
), whose rewrites are SILENT, this plugin's normalization is${" "} <strong>deliberately VISIBLE - it IS the feature</strong>: the rewrite flows
						into both the live UI and the durable transcript.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "How It Works",
		"Meta": "THE STREAM PIPELINE"
	})} <div class="code-block">${Pipeline.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-waterfall",
		"Title": "The waterfall discipline",
		"Diagram": "The listener's three invariants: next() ALWAYS called, unconditionally, first - options NEVER touched - order preserved, no buffering, one chunk in, one chunk out, upstream throws propagating."
	}, { "default": ($$result) => renderTemplate` <p> <strong>Waterfall discipline:</strong> <code>next()</code> is ALWAYS called,
						unconditionally, first - omitting it short-circuits the waterfall and the
						model call never happens.
</p> <p> <code>options</code> is NEVER touched (a loop-built request arrives
						deep-frozen and its content is a pure function of the session log); order
						preserved, no buffering - one chunk in, one chunk out, upstream throws
						propagate.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-transform",
		"Title": "The transform: the dash-class pattern, verbatim",
		"Diagram": "The core's Dashes class applied per text segment - the same perl pattern (perl -CSD -pe), verbatim."
	}, { "default": ($$result) => renderTemplate` <p> <strong>The transform</strong> - the core's <code>Dashes</code> class,
						verbatim - the same <code class="code-token">perl</code> pattern (
<code>perl -CSD -pe</code>), applied per
						text segment:
</p> ` })} </div> <div class="code-block"> ${TransformClass.join("\n")} </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-coverage",
		"Title": "The covered characters",
		"Diagram": "The dash family: Armenian hyphen, Hebrew maqaf, Canadian syllabics hyphen, Mongolian todo soft hyphen, the U+2010-U+2015 hyphen/dash family (including the em dash and the non-breaking hyphen), double oblique hyphen, hyphen with diaeresis, two-/three-em dash, double hyphen, U+2E5D, wave/wavy dash, katakana-hiragana double hyphen, the vertical presentation dashes, small em dash, small hyphen-minus and the fullwidth hyphen-minus - all becoming the config replacement (default -, ASCII hyphen-minus U+002D)."
	}, { "default": ($$result) => renderTemplate` <p>
Armenian hyphen, Hebrew maqaf, Canadian syllabics hyphen, Mongolian todo
						soft hyphen, the <code class="code-token">U+2010</code>-
<code class="code-token">U+2015</code> hyphen/dash family (including the em
						dash and the non-breaking hyphen), double oblique hyphen, hyphen with
						diaeresis, two-/three-em dash, double hyphen,${" "} <code class="code-token">U+2E5D</code>, wave/wavy dash, katakana-hiragana
						double hyphen, the vertical presentation dashes, small em dash, small
						hyphen-minus and the fullwidth hyphen-minus - all become the config${" "} <code>replacement</code> (default
<code>-</code>, ASCII hyphen-minus <code class="code-token">U+002D</code>).
</p> <p>No context rules - a class match and replace, no lookahead.</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-boundary-safe",
		"Title": "Chunk-boundary-safe by construction",
		"Diagram": "Single-character replacement, no lookahead, no multi-character sequences - per-chunk application can never disagree with whole-text application; the replacement applied with a function replacer so a custom replacement containing $ patterns is inserted literally; replaced characters counted per stream for the ledger line."
	}, { "default": ($$result) => renderTemplate` <p>
Chunk-boundary-safe: single-character replacement, no lookahead, no
						multi-character sequences - per-chunk application can never disagree with
						whole-text application.
</p> <p>
The replacement is applied with a function replacer, so a custom${" "} <code>replacement</code> containing <code>$</code> patterns is inserted
						literally.</p> <p>Replaced characters are counted per stream for the ledger line.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The raw-write tool",
		"Meta": "NORMALIZATION AT EXECUTION TIME"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-rawwrite-exemption",
		"Title": "The normalization decision happens at execution time",
		"Diagram": "The raw-write tool wrapping the built-in write operation with an explicit normalize parameter - exempt from the stream normalization by name (the core's Stream/Chunk + Stream/Block passing every raw-write call through by identity, exactly like edit), so the content is what the model sent."
	}, { "default": ($$result) => renderTemplate` <p>
Besides the stream listener, the normalize-dash registers the family's${" "} <strong>raw-write tool</strong>: a plugin-registered write wrapper that
						wraps the built-in <code>write</code> operation with an explicit${" "} <code>normalize</code> parameter.
</p> <p>
The tool is exempt from the stream normalization by name (the core's
<code class="code-token">Stream/Chunk</code> +${" "} <code class="code-token">Stream/Block</code> pass every raw-write call
						through by identity, exactly like <code>edit</code>), so the content is
						what the model sent, and the normalization decision happens at execution
						time.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>normalize</th> <th>What the exec writes</th> </tr> </thead> <tbody> ${NormalizeTable.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Value}</strong> </td> <td> ${Row.Effect.split("→").map((Part, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && renderTemplate`${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}`}${Part.trim() && renderTemplate`<span>${unescapeHTML(Mention(Part.trim()))}</span>`}` })}`)} </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-govern-parameter",
		"Title": "The govern parameter selects the direct chain",
		"Diagram": "The per-call governance selection over the factory's direct-govern registry, applied after a successful write: absent or false running NO chain (the write still emitting fs/observed exactly like a built-in write), true or all running ALL registered steps for the target's basename, an array running ONLY the named steps - best-effort and contained through Govern(target, selection, actor, version) with the written outcome's fresh version, a failing step never affecting the write's outcome."
	}, { "default": ($$result) => renderTemplate` <p>
The tool also takes a <strong>govern parameter</strong> - the per-call
						governance selection over the factory's direct-govern registry, applied
						after a successful write: absent or false (default) runs NO governance chain
						(the write still emits${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/observed</code></a>${" "}
exactly like a built-in write); true or <code class="code-token">"all"</code> runs ALL
						registered governance
						steps for the target's basename; <code>["canonicalize", ...]</code> runs
						ONLY the named steps.
</p> <p>
Governance is best-effort and contained: the steps run through the factory's${" "} <code>Govern(target, selection, actor, version)</code> with the written
						outcome's fresh version - a failing step never affects the write's outcome.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-fs-path",
		"Title": "The mirrored fs path",
		"Diagram": "The exec mirroring the built-in write's fs path exactly: ctx.fs.resolve, the fs/write-intent waterfall, the standing sandbox policy, ctx.fs.writeText(...), then the fs/observed emit with the written version - with exec.signal honored end to end and the inject list [\"pluginFactory\", \"fs\", \"tools\"]."
	}, { "default": ($$result) => renderTemplate` <p>
The exec mirrors the built-in write's fs path exactly:${" "} <code>ctx.fs.resolve</code> ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}${" "}
the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/write-intent</code></a>${" "}
waterfall ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} the standing sandbox
						policy ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}${" "} <code>ctx.fs.writeText(...)</code>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/observed</code></a>${" "}
emit with the written version.
</p> <p> <code>exec.signal</code> is honored end to end.</p> <p>Inject:${" "} <code>["pluginFactory", "fs", "tools"]</code>.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Deterministic character mapping",
		"Meta": "THE DASH CLASS, SAMPLED"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
A sample of the core's <code>Dashes</code> class - the full class is the dash
				pattern verbatim, every entry mapping to the config
<code>replacement</code> (default <code class="code-token">U+002D</code>):
</p> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Input Glyph</th> <th>Code Point</th> <th>Name</th> <th>Output</th> <th>ASCII</th> </tr> </thead> <tbody> ${Mapping.map((Row) => renderTemplate`<tr> <td> <code class="code-token">${Row.Glyph}</code> </td> <td> <code class="code-token">${Row.Code}</code> </td> <td>${Row.Name}</td> <td> <strong style="color: var(--color-primary)">${Row.Out}</strong> </td> <td> <code class="code-token">${Row.Ascii}</code> </td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "SCHEMA + DEFAULTS AT LOAD"
	})} <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Field</th> <th>Type</th> <th>Default</th> <th>Volatile</th> <th>Meaning</th> </tr> </thead> <tbody> ${Config.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Field}</strong> </td> <td>${Row.Type}</td> <td>${unescapeHTML(Mention(Row.Default))}</td> <td>${Row.Volatile}</td> <td>${unescapeHTML(Mention(Row.Meaning))}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-volatile",
		"Title": "Volatile cells commit without remounting",
		"Diagram": "The volatile cells committing without remounting the plugin - the fiber, and with it the llm/stream registration, staying alive - with the factory's State builder unwrapping them defensively."
	}, { "default": ($$result) => renderTemplate` <p>
They commit without remounting the plugin (the fiber - and with it
						the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code class="code-token">llm/stream</code></a>${" "}
registration - stays alive); the factory's State builder unwraps them
						defensively.
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
			"      - id: hook-dsh-normalize-dash",
			"        name: \"@playform/hook-dsh-normalize-dash\"",
			"        config:",
			"            log: true",
			"            logFile: ~/.dsh/hook-dsh-normalize-dash.log",
			"            replacement: \"-\"",
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
		"ID": "dash-scopes",
		"Title": "Every arm gated independently - and all volatile",
		"Diagram": "The scopes object gating every arm of the hook-dsh-normalize-dash hook independently - the defaults exactly the pre-scopes behavior - with the whole object volatile: one leaf change commits one loader/volatile-update dispatch whose whole object the State's refresh listener re-reads - live, silent, no remount, no new activation line."
	}, { "default": ($$result) => renderTemplate` <p>
The <code>scopes</code> object gates every arm of the${" "} <code>hook-dsh-normalize-dash</code> hook independently - conversation,
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
		"ID": "dash-overpass",
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
		"Meta": "ONE STREAM, ONE TRANSFORMATION"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The model emits prose with typographic dashes; the live UI and the transcript
				receive the ASCII forms:
</p> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}Before - the model stream as it is born
</p> ${renderComponent($$result, "Compare", $$Compare, {
		"ID": "dash-stream",
		"Flavor": "dash",
		"Raw": StreamExample.slice(0, 5),
		"Clean": StreamExample.slice(5)
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-in-action-count",
		"Title": "Every dash becomes a hyphen; the count counts replacements only",
		"Diagram": "The em dash (U+2014), the en dash (U+2013) and the horizontal bar (U+2015) each becoming - - with the ASCII hyphens that were already there untouched, the count only counting replacements - and the same pass running over reasoning deltas (normalizeReasoning, default on) and, with the example patch enabling normalizeToolArguments, over tool-call arguments, where the three-way gate keeps the sensitive calls intact."
	}, { "default": ($$result) => renderTemplate` <p>
The em dash (<code class="code-token">U+2014</code>), the en dash (
<code class="code-token">U+2013</code>) and the horizontal bar (
<code class="code-token">U+2015</code>)
						each become <code>-</code>; the ASCII hyphens that were already there are
						untouched (the count only counts replacements).
</p> <p>
The same pass runs over reasoning deltas (<code>normalizeReasoning</code>,
						default on) and - with the example patch enabling${" "} <code>normalizeToolArguments</code> - over tool-call arguments, where the
						three-way gate keeps the sensitive calls intact.
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}After - the stream that reaches the transcript (and the
				gate for sensitive calls)
</p> <div class="code-block">${GateExample.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-in-action-rawwrite",
		"Title": "The raw-write tool in the file-writing direction",
		"Diagram": "The raw-write content landing verbatim by default, or running the family's six-fold chain when called with normalize: true - the em dash surviving the default call and becoming a hyphen under normalize: true, with the selection also FINE-GRAINED."
	}, { "default": ($$result) => renderTemplate` <p>
And the <code>raw-write</code> tool in the file-writing direction: its
						content lands verbatim by default, or runs the family's six-fold chain when
						called with <code>normalize: true</code> - the em dash above would survive
						the default call and become a hyphen under <code>normalize: true</code>.
</p> <p>The selection can also be FINE-GRAINED:</p> ` })} </div> <p class="section-kicker">The raw-write tool, per call</p> <div class="code-block">${RawWriteExample.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-fixed-order",
		"Title": "The order is FIXED by the family",
		"Diagram": "The family's fixed order - dashes, quotes, ellipsis, spaces, invisible, fullwidth - applying even when the selection lists the flavors out of order: normalize: [\"fullwidth\", \"dash\"] still applying dashes first."
	}, { "default": ($$result) => renderTemplate` <p>
Dashes${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} quotes${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} ellipsis${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} spaces${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} invisible${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} fullwidth, even when the
						selection lists the flavors out of order:${" "} <code>normalize: ["fullwidth", "dash"]</code> still applies dashes first.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "dash-governance-per-call",
		"Title": "The governance direction, per call",
		"Diagram": "A raw-write to a package.json with govern: true running the registered chain pass (canonicalize) and the update stage after the write lands - govern: [\"pin\"] running only the pinner's chain pass - and the ledger getting the count line when a stream finishes normally with replacements made."
	}, { "default": ($$result) => renderTemplate` <p>
And the governance direction, per call: a raw-write to a${" "} <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-json",
		"Size": "0.9em"
	})}<code>package.json</code></span> with <code>govern: true</code> runs the registered
						chain pass (canonicalize) and the update stage after the write lands;${" "} <code>govern: ["pin"]</code> runs only the pinner's chain pass.
</p> <p>
When a stream finishes normally with replacements made, the ledger gets the
						count line shown below.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "TWO LINES VIA FACTORY APPEND"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Two lines, both written through the factory's <code>Append</code> (the
				hook-dsh-normalize-dash: prefix is the logger's
<code>&lt;State.Module&gt;:</code>; the durable file line is
<code>[&lt;ISO&gt;] &lt;message&gt;</code>):
</p> <div class="code-block">${LedgerStrings.join("\n")}</div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The activation line is written by <code>apply()</code>; the count line only follows
				a normal stream completion and only when N &gt; 0 (a thrown-away stream writes no
				ledger line).
</p> </section> <!-- The known limits: the documented gaps, stated as they are. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Known limits",
		"Meta": "THE DOCUMENTED GAPS"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <strong>The byte-integrity law.</strong> </p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The NUL-byte incident class: a write
				that emits bytes the file's format forbids (NUL bytes) corrupts the file - the
				lesson of the URL-registry corruption.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The law: no write path may introduce
				bytes outside the target's charset.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Verbatim is the default; this family's
				transforms exist to restore the integrity; the byte-scan is the arbiter.
</p> <p class="page-hero__sub"> <strong>Markers are stripped before the tool validates.</strong> </p> <p class="page-hero__sub">
The harness
				tools reject unknown argument keys (<code>additionalProperties: false</code>):
				the raw marker (<code>__normalize: false</code>) and the govern selection are
				consumed by the family's exec, never passed through to the tool schema - any
				marker convention must be stripped before the tool validates.
</p> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Related plugins",
		"Meta": `${Counts.Packages} TOTAL`
	})} <div class="grid grid--3"> ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-core",
		"Href": "/plugins/hook-dsh-core/",
		"Desc": "Supplies the Dashes table, the Replace replacer and the generic Chunk/Block dispatch this flavor is a thin closure over.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`DSH FAMILY` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-normalize-quotes",
		"Href": "/plugins/hook-dsh-normalize-quotes/",
		"Desc": "The second stream normalizer sibling - the Quotes MAP flavor, curly to straight.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`SIBLING FLAVOR` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "plugin-dsh-factory",
		"Href": "/plugins/plugin-dsh-factory/",
		"Desc": "The parent service: State, Append - plus the named Schema helper (shared: false) for the config.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`PARENT SERVICE` })}` })} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
License: CC0-1.0. The workbench and the matrix pages run the same flavors live.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-dash.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-dash.astro";
var $$url = "/plugins/hook-dsh-normalize-dash";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-dash@_@astro
var page = () => hook_dsh_normalize_dash_exports;
//#endregion
export { page };
