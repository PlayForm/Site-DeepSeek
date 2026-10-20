import { C as Mention, D as __exportAll, E as createComponent, a as Links, b as Versions, c as Families, n as $$Base, r as Link, s as Counts, t as $$Badge, x as $$BrandIcon } from "./Badge_BcqTIV8g.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$Card } from "./Card_CsNNQgw0.mjs";
import { t as $$Concept } from "./Concept_sjNl5b6w.mjs";
import { t as $$SectionHeader } from "./SectionHeader_CwH-UUI4.mjs";
import { t as $$Terminal } from "./Terminal_BMZtWhRH.mjs";
import { t as $$CodeBlock } from "./CodeBlock_D0mCXfg1.mjs";
import { t as $$Seams } from "./Seams_DfmJdky_.mjs";
//#region Source/pages/plugins/hook-dsh-ccr.astro
var hook_dsh_ccr_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshCcr,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshCcr = createComponent(($$result, $$props, $$slots) => {
	const Siblings = [
		{
			Name: "normalize flavors (the overpass arm)",
			Gate: "tools/post-execute",
			Order: "{ prepend: true }, outermost",
			Pass: "rewrites the result bytes pre-commit (scopes.toolResults; the model never notices)",
			This: false
		},
		{
			Name: "hook-dsh-ccr (this bundle)",
			Gate: "tools/post-execute",
			Order: "{ prepend: true }",
			Pass: "compress + store + mark oversized normalized results",
			This: true
		},
		{
			Name: "hook-dsh-tool-coach",
			Gate: "tools/post-execute",
			Order: "plain (after ccr)",
			Pass: "observe + count + tier-1 notes (never replaces content)",
			This: false
		}
	];
	const Gate = [
		{
			Step: "1",
			Condition: "empty content",
			Action: "pass (Aphrodite skips empty)"
		},
		{
			Step: "2",
			Condition: "tool in exempt",
			Action: "pass, always"
		},
		{
			Step: "3",
			Condition: "failure and compressFailures off",
			Action: "pass"
		},
		{
			Step: "4",
			Condition: "tool not in targets",
			Action: "pass (the allow-list)"
		},
		{
			Step: "5",
			Condition: "size <= thresholdBytes × multiplier",
			Action: "pass"
		},
		{
			Step: "6a",
			Condition: "over gate, autoExpand on, size <= autoExpandLimitBytes",
			Action: "store + return FULL content (no marker)"
		},
		{
			Step: "6b",
			Condition: "over gate, otherwise",
			Action: "replace: preview line + marker"
		}
	];
	const Multipliers = [
		{
			Type: "error",
			Weight: "8",
			Meaning: "a failure result - high-signal, compress late"
		},
		{
			Type: "terminal",
			Weight: "1",
			Meaning: "bash results"
		},
		{
			Type: "grep",
			Weight: "2",
			Meaning: "grep and search results"
		},
		{
			Type: "paths",
			Weight: "2",
			Meaning: "glob and list results"
		},
		{
			Type: "web",
			Weight: "2",
			Meaning: "web_fetch and web_search results"
		},
		{
			Type: "file",
			Weight: "1",
			Meaning: "read results"
		},
		{
			Type: "json",
			Weight: "1",
			Meaning: "joined text parsing as a JSON object/array"
		},
		{
			Type: "default",
			Weight: "1",
			Meaning: "everything else gated"
		}
	];
	const Previews = [
		{
			Type: "terminal",
			Format: "exit <code> | <N> lines | <first significant line>"
		},
		{
			Type: "grep",
			Format: "<N matches> matches | <first significant line>"
		},
		{
			Type: "paths",
			Format: "<N paths> paths | <first path>"
		},
		{
			Type: "file",
			Format: "<N lines> lines | <first significant line>"
		},
		{
			Type: "json",
			Format: "<N items> items / <N keys> keys / <N bytes> bytes | <first line>"
		},
		{
			Type: "web",
			Format: "<N lines> lines | <first line>"
		},
		{
			Type: "error",
			Format: "<first significant line> (the message IS the preview)"
		},
		{
			Type: "default",
			Format: "<N bytes> bytes | <first significant line>"
		}
	];
	const Config = [
		{
			Field: "log",
			Type: "boolean",
			Default: "true",
			Meaning: "write the durable ledger file (volatile)"
		},
		{
			Field: "logFile",
			Type: "string",
			Default: "/Users/nikola/.dsh/ccr.log",
			Meaning: "the CCR hook's ledger, SEPARATE from the family's logs (one log per module); volatile"
		},
		{
			Field: "targets",
			Type: "string[]",
			Default: "[bash, glob, grep, read, web_fetch, web_search, list, search]",
			Meaning: "the target allow-list: tools whose oversized results are compressed"
		},
		{
			Field: "exempt",
			Type: "string[]",
			Default: "[write, edit, raw-write, subagent, ask_user_question, ccr_retrieve]",
			Meaning: "never compressed - execution-critical mutators, another agent's brief, a user gate, and the hook's own retrieval tool"
		},
		{
			Field: "thresholdBytes",
			Type: "number",
			Default: "2048",
			Meaning: "the one byte gate for all tools (volatile)"
		},
		{
			Field: "inlineThresholdBytes",
			Type: "number",
			Default: "1024",
			Meaning: "parsed but inert under the default thresholds (1024 < 2048) - Aphrodite's inline_threshold, kept for store-shape parity"
		},
		{
			Field: "autoExpand",
			Type: "boolean",
			Default: "true",
			Meaning: "store + preview, but return the FULL content while under the limit - no marker reaches the model"
		},
		{
			Field: "autoExpandLimitBytes",
			Type: "number",
			Default: "102400",
			Meaning: "the auto-expand ceiling in bytes"
		},
		{
			Field: "compressFailures",
			Type: "boolean",
			Default: "false",
			Meaning: "compress failing results too - the error ×8 tier is the only beneficiary"
		},
		{
			Field: "multipliers",
			Type: "object",
			Default: "terminal 1, error 8, grep 2, paths 2, file 1, json 1, web 2, default 1",
			Meaning: "per-type multipliers on the byte gate (volatile)"
		},
		{
			Field: "previewMaxChars",
			Type: "number",
			Default: "240",
			Meaning: "hard character cap on every preview line (volatile)"
		},
		{
			Field: "ttlSeconds",
			Type: "number",
			Default: "3600",
			Meaning: "store TTL in seconds - an entry at or past ttlAt is dropped on insert and on access"
		},
		{
			Field: "storeBudgetBytes",
			Type: "number",
			Default: "268435456",
			Meaning: "the LRU budget in bytes (256 MiB); the just-inserted entry is never evicted"
		},
		{
			Field: "journalPath",
			Type: "string",
			Default: "\"\"",
			Meaning: "optional JSONL disk journal (one {hash, type, size, ttlAt, payload} record per store, payload base64); empty = memory-only"
		},
		{
			Field: "contextEngine",
			Type: "boolean",
			Default: "false",
			Meaning: "phase-4 middle-turn archiving - implemented and OFF by default (SCHEME.md section 9)"
		}
	];
	const LedgerExcerpt = [
		"ccr: activated (bundle 0.0.1, targets 8, budget 268435456)",
		"ccr: compressed bash terminal <bytes> -> <hash>",
		"ccr: retrieved <hash>"
	];
	const Oversized = [
		"$ make -C packages/core test",
		"resolving 214 modules...",
		"compiling 96 files...",
		"linking Target/Library.js...",
		"[ ... 137 more lines ... ]",
		"smoke: 146 checks green",
		"make: *** Error 1"
	];
	const Replacement = ["[terminal:exit 0 | 142 lines | make: *** Error 1]", "<<<CCR:9d3c1f0a7b2e4d5c6a8b9c0d|terminal|5231>>>"];
	const RetrieveCall = [
		"tool: ccr_retrieve",
		"args: { \"hash\": \"9d3c1f0a7b2e4d5c6a8b9c0d\", \"range\": { \"start\": 0, \"count\": 40 } }",
		"-> { hash, type, size, text }  # the original bytes, verbatim"
	];
	const LedgerStrings = [
		"ccr: activated (bundle 0.0.1, targets 8, budget 268435456)",
		"ccr: compressed bash terminal <bytes> -> <hash>",
		"ccr: stored <tool> <type> <bytes> -> <hash>",
		"ccr: evicted <hash> (budget)",
		"ccr: retrieved <hash>",
		"ccr: retrieval miss <hash> (expired)",
		"ccr: retrieval miss <hash> (unknown)",
		"ccr: engine archived <n> results"
	];
	const Related = [
		{
			Name: "plugin-dsh-factory",
			Desc: "The family's furnace: the Schema helper composing this module's NON-MANIFEST config schema, the effects and the wiring."
		},
		{
			Name: "hook-dsh-core",
			Desc: "The family's pure commonalities - the same helpers every hook builds on."
		},
		{
			Name: "hook-dsh-normalize-dash",
			Desc: "The overpass sibling on the same waterfall: the flavors' tool-results arm is the OUTERMOST prepend, so the ccr compression sees the NORMALIZED bytes. The <<<CCR: marker guard makes ANY load order safe."
		},
		{
			Name: "hook-dsh-tool-coach",
			Desc: "The guardian on the same waterfall: observes and counts the terminal tool calls ccr compresses, and coaches the model away from using bash for file content."
		},
		{
			Name: "hook-dsh-package-governor",
			Desc: "The governance opposite: the governor is deliberately INVISIBLE at the result layer. The compression is deliberately VISIBLE - it IS the feature."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-ccr - DSH Family @ PlayForm",
		"Description": `${Families.CCR} - the CCR compressor of the DeepSeek Harness: hooks the tools/post-execute waterfall. Replaces oversized tool output with a one-line type-aware preview plus the <<<CCR:hash|type|size>>> marker. Keeps the original retrievable through the registered ccr_retrieve tool.`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`ROLE: COMPRESSOR` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "terminal",
		"Size": "0.8em"
	})} GATE: tools/post-execute
` })} </div> <section class="page-hero"> <h1 class="page-hero__title">hook-dsh-ccr</h1> <p class="page-hero__sub"> ${Families.CCR} &bull; ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} <em>The DeepSeek Harness
				Plugin Family for PlayForm.</em> </p> <p class="page-hero__sub">
The <strong>tool-output compressor</strong> of the
				DeepSeek Harness - a plugin on the
<a${addAttribute(Link(Links.DeepSeekHarness, "docs/subsystems/tools.md"), "href")}><code>tools/post-execute</code></a>
waterfall.
				The waterfall is the interceptable wrapper around EVERY NORMALIZED dispatch result,
				before it becomes model content.
				The plugin replaces oversized tool output with a
				one-line type-aware preview plus a retrieval marker,
<code>&lt;&lt;&lt;CCR:&lt;hash&gt;|&lt;type&gt;|&lt;size&gt;&gt;&gt;&gt;</code>.
				The original stays retrievable through the registered
<code class="code-token">ccr_retrieve</code> tool.
</p> <p class="page-hero__sub">Ported from Aphrodite's CCR pipeline: compress, cache, retrieve.
				At the injection point a proxy cannot reach, the tool result itself.
</p> <p class="page-hero__sub">
With auto-expand on (the default), a result at or under
<code>autoExpandLimitBytes</code> is stored but returned FULL.
				NO marker
				reaches the model while the content is cheap enough to keep inline.
</p> <p class="page-hero__sub">A factory flavor: the family's furnace composes the schema.
				This package is the model logic.
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, { "Pkg": "hook-dsh-ccr" })} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-ccr</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Hook` })} <span class="workbench-controls__label">Event:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`tools/post-execute` })} <span class="workbench-controls__label">Injects:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`pluginFactory, tools` })} </div> </div> </section> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The profile wiring for this plugin - the bundles list, the patch entry and the restart -
			is on the <a href="/setup/">setup page</a>.
</p> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": "FAMILY POSITION: A GUARDIAN-COMPRESSION HOOK"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-family-position",
		"Title": "The family position",
		"Diagram": `${Families.CCR} as a hook child of the plugin-dsh-factory service and the hook-dsh-core helpers - no hook children of its own - the first family member hooked on the tools/post-execute waterfall rather than fs/observed: the compression is deliberately VISIBLE at the result layer (it IS the feature), the opposite of the governance family's silence.`
	}, { "default": ($$result) => renderTemplate` <p>
A hook child of the${" "} <strong><a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a></strong> service (${Families.CCR}) and the${" "} <strong>hook-dsh-core</strong> helpers. It has NO hook children of its own.
</p> <p>
THE FIRST family member hooked on the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "docs/subsystems/tools.md"), "href")}><code class="code-token">tools/post-execute</code></a>${" "}
waterfall rather than <code>fs/observed</code>.
						The file-hook precedent
						rewrites files after the fact and the normalize family rewrites model
						output.
						Neither can shrink the model's CONTEXT.
</p> <p>
The compression is
						deliberately visible at the result layer.
						The governance family is
						deliberately silent.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Listener</th> <th>Seam</th> <th>Ordering</th> <th>What it does to the result</th> </tr> </thead> <tbody> ${Siblings.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Name}</strong> </td> <td>${unescapeHTML(Mention(Row.Gate))}</td> <td>${Row.Order}</td> <td> <span>${unescapeHTML(Mention(Row.Pass))}</span> </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-overpass-ordering",
		"Title": "The ordering fact: normalized bytes in, any load order safe",
		"Diagram": "The normalize flavors' tool-results overpass arm being the OUTERMOST prepend ({ prepend: true }), so the ccr compression sees the NORMALIZED bytes - and the <<<CCR: marker guard making any load order safe: the marker is pure ASCII (digits, lowercase hex, letters, pipes) and passes through the whole normalize family untouched, so the model can re-read it from its own transcript intact."
	}, { "default": ($$result) => renderTemplate` <p>
The normalize flavors' tool-results overpass arm is the OUTERMOST
						prepend (<code>${"{ prepend: true }"}</code>), so the ccr compression sees
						the NORMALIZED bytes.
						The <code>&lt;&lt;&lt;CCR:</code> marker guard makes
						ANY load order safe.
</p> <p>
The marker is pure ASCII - digits, lowercase hex, letters, pipes.
						So it
						passes through the whole normalize family untouched.
						The model can
						re-read it from its own transcript intact.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-non-manifest",
		"Title": "Machinery-wise it is a NON-MANIFEST factory flavor",
		"Diagram": "inject: [\"pluginFactory\", \"tools\"] - the config schema composed by the factory's standalone Schema(false, {...}) helper (the NON-MANIFEST posture: no fs/observed machinery advertised, only the two universal volatile cells), the ccr_retrieve tool registered through the tools injection - the same registration the family's raw-write uses."
	}, { "default": ($$result) => renderTemplate` <p> <code>inject: ["pluginFactory", "tools"]</code> - the config schema is
						composed by the factory's standalone${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}><code>${"Schema(false, {...})"}</code></a>${" "}
helper (the NON-MANIFEST posture).
						The hook gates
<code class="code-token">tools/post-execute</code>, NOT
<code>fs/observed</code>.
						So the schema NEVER advertises
						updateCooldownMs/mutationTools/policyFile/exclude - machinery the module
						has NONE of.
</p> <p>
The <code class="code-token">ccr_retrieve</code> tool is registered
						through the tools injection.
						That is the same registration the family's
						raw-write uses.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "WHERE THE COMPRESSOR OPERATES"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "tools/post-execute - the tool-result waterfall",
			What: "The hook's ONE listener ([tools/post-execute](Harness:docs/subsystems/tools.md)) is the interceptable wrapper around EVERY NORMALIZED dispatch result, bound to the ToolRuntime, before it becomes model content. It sees the result of EVERY tool with name + parsed arguments + caller agent. It is the ONLY point that can legally replace model-visible output for ALL tools.",
			Outcome: "The compression happens where the result happens - a proxy cannot reach the tool result. This waterfall can."
		},
		{
			Seam: "ctx.tools.register - the one dynamic tool",
			What: "The hook registers exactly ONE ToolDefinition, [ccr_retrieve](Ours:Classic/packages/hook-dsh-ccr/Source) (ToolRuntime.register - the same injection the family's raw-write uses). Its success value is {hash, type, size, text}. Its render projects the original text verbatim - the model sees the original bytes, NOT an envelope.",
			Outcome: "The original stays retrievable. Unknown or expired hashes return a self-describing error telling the model to re-run the original tool."
		},
		{
			Seam: "loader/volatile-update - the volatile cells",
			What: "log, logFile, thresholdBytes, previewMaxChars and multipliers are hot-editable WITHOUT remounting (the loader's loader/volatile-update event). The structural knobs (targets, exempt, the store, the journal, auto-expand, the context-engine flags) change the dispatch semantics and remount on edit.",
			Outcome: "Mid-session retuning of the byte gate lands WITHOUT a restart."
		},
		{
			Seam: "The ledger / session",
			What: "ONE log per module - logFile (its OWN strings; the factory NEVER owns them) - recording the activation line, EVERY compress/store/eviction, EVERY retrieval hit and miss, and the context engine's archive events. The activation line is written by apply() so \"did it activate\" is answerable from the ledger alone.",
			Outcome: "The durable file lines are the [ISO] message forms - the factory's Append layer adds the prefix and the timestamp, NEVER the module."
		},
		{
			Seam: "node:crypto - the store's hash",
			What: "An in-memory LRU keyed by a SHA-256 hash of the full serialized content bytes, truncated to 24 lowercase hex chars (96 bits) - [node:crypto](Ours:Classic/packages/hook-dsh-ccr/Source), NO native deps. Aphrodite's SQLite ccr.db was deliberately adapted to JSONL because SQLite is a native dep the family does NOT carry.",
			Outcome: "The store stays pure TypeScript: LRU budget, TTL sweep, optional JSONL journal - best-effort and contained."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Problem",
		"Meta": "WHY THE COMPRESSOR EXISTS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-problem",
		"Title": "Every agent turn floods the context with raw tool output",
		"Diagram": "bash runs, grep matches, read slices, web_fetch pages, glob paths - the model's context filling with megabytes of result the model mostly needs one line of; Aphrodite intercepting tool output before it reaches the LLM and replacing it with a ~15-token preview plus a marker."
	}, { "default": ($$result) => renderTemplate` <p> <code>bash</code> runs, <code>grep</code> matches, <code>read</code>${" "}
slices, <code>web_fetch</code> pages, <code>glob</code> paths.
						EVERY
						agent turn floods the context with raw tool output the model mostly needs
						ONE line of.
</p> <p>
Aphrodite intercepts tool output before it reaches the LLM and replaces
						it with a ~15-token preview plus a marker.
						This plugin ports that
						pipeline to the harness - NOT the proxy.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-why-post-execute",
		"Title": "Why tools/post-execute",
		"Diagram": "A proxy intercepting at the transport layer seeing the tool call but never the harness's normalized dispatch result; tools/post-execute being the only point that can legally replace model-visible output for ALL tools - with name + parsed arguments + caller agent on every event."
	}, { "default": ($$result) => renderTemplate` <p>
A proxy cannot reach the tool result.
<a${addAttribute(Link(Links.DeepSeekHarness, "docs/subsystems/tools.md"), "href")}><code class="code-token">tools/post-execute</code></a>${" "}
can - it sees the normalized result of EVERY tool with name + parsed
						arguments + caller agent.
						It is the ONLY point that can legally replace
						model-visible output for ALL tools.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "How It Works",
		"Meta": "THE GATE, THE STORE, THE RETRIEVAL"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-gate",
		"Title": "The gate order, step by step",
		"Diagram": "The gate deciding exclusion-first: empty content passes, exempt tools pass always, failures pass unless compressFailures is on, non-target tools pass (the allow-list), anything at or under thresholdBytes x the type's multiplier passes; over the gate, auto-expand stores and returns FULL while the content is cheap enough, otherwise the result is replaced with the preview line plus the marker."
	}, { "default": ($$result) => renderTemplate` <p>
Size = UTF-8 byte length of <code>JSON.stringify(content)</code>. The
						full order the smoke asserts:
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Step</th> <th>Condition</th> <th>Action</th> </tr> </thead> <tbody> ${Gate.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Step}</strong> </td> <td>${Row.Condition}</td> <td>${Row.Action}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-classifier",
		"Title": "The classifier and the multipliers",
		"Diagram": "The reduced 7-type set: error (a failure result, the x8 tier, when failures are compressed), the name table (bash -> terminal; grep/search -> grep; glob/list -> paths; read -> file; web_fetch/web_search -> web), and the shape fallback for other gated names (joined text parsing as a JSON object/array -> json; else default). Each type carries its multiplier on the byte gate."
	}, { "default": ($$result) => renderTemplate` <p>
The multipliers (<code>multipliers</code>, volatile).
						Errors are
						high-signal and compress late (<code>error &#215;8</code>).
<code>grep</code>/<code>paths</code>/<code>web</code> compress early
						(<code>&#215;2</code>).
						The rest at parity (<code>&#215;1</code>).
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Type</th> <th>Multiplier</th> <th>Meaning</th> </tr> </thead> <tbody> ${Multipliers.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Type}</strong> </td> <td>${Row.Weight}</td> <td>${Row.Meaning}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-previews",
		"Title": "The previews: pure per-type one-liners",
		"Diagram": "The replacement content being ONE text block - [<type>:<preview>] on the first line and the <<<CCR:<24hex>|<type>|<size>>> marker on the second - every preview hard-cut to previewMaxChars (240)."
	}, { "default": ($$result) => renderTemplate` <p>
The replacement content is ONE text block:
<code>[&lt;type&gt;:&lt;preview&gt;]</code> plus the marker
<code>&lt;&lt;&lt;CCR:&lt;24hex&gt;|&lt;type&gt;|&lt;size&gt;&gt;&gt;&gt;</code>.
						EVERY preview is hard-cut to <code>previewMaxChars</code> (240).
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Type</th> <th>Preview</th> </tr> </thead> <tbody> ${Previews.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Type}</strong> </td> <td>${Row.Format}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-store",
		"Title": "The store: LRU + TTL + optional JSONL journal",
		"Diagram": "An in-memory LRU keyed by the sha256-24 hash of the full serialized content bytes (node:crypto, no native deps), with the storeBudgetBytes cap (256 MiB, least-recently-accessed eviction; the just-inserted entry is never evicted), the ttlSeconds TTL (3600; sweep on insert, gone on access), and the optional JSONL disk journal (journalPath, default empty = memory-only) - one {hash, type, size, ttlAt, payload} record per store, payload base64, loaded and TTL-compacted on boot."
	}, { "default": ($$result) => renderTemplate` <p>
NOT the factory's storage journal - that is a typed lifecycle ledger, and
						MB-size BLOBs would corrupt the governance domain's contract.
						The
						journal is the plugin's own diagnostic file, NEVER a governed write.
						It is best-effort and contained (a journal failure degrades to memory-only).
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-retrieval",
		"Title": "The retrieval: ccr_retrieve(hash, range?)",
		"Diagram": "One registered tool: the hash matched EXACTLY - no prefix or fuzzy matching; range {start, count} a 0-based granular line slice (out-of-range bounds clamp - a retrieval never fails for asking past the end); unknown hash a self-describing error (re-run the original tool); expired hash ditto with the TTL reason; every hit refreshes lastAccessed (the LRU clock)."
	}, { "default": ($$result) => renderTemplate` <p>
Success value: <code>${"{hash, type, size, text}"}</code>.
						The render
						projects <code>text</code> verbatim - the model sees the original bytes,
						NOT an envelope.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-discipline",
		"Title": "The waterfall discipline",
		"Diagram": "next() always awaited FIRST (omitting it short-circuits the downstream post-execute listeners - the spill-policy precedent); pass-through returning the downstream decision unchanged; only an accepted, non-value-carrying decision replaced; the whole transform fail-open (an internal error logs a warning and keeps the inline content - never throws into the waterfall); the listener prepends so the gate sees the pristine result."
	}, { "default": ($$result) => renderTemplate` <p> <code>next()</code> is ALWAYS awaited first.
						Pass-through is${" "} <code>return decision</code> (byte-identical semantics).
						ONLY an
						accepted, non-value-carrying decision is replaced.
						The transform is ONE
						contained try/catch - fail-open, NEVER a throw into the waterfall.
</p> <p>
The listener registers with <code>${"{ prepend: true }"}</code>, so the
						gate sees the pristine result.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "SCHEMA + DEFAULTS AT LOAD"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-config-schema",
		"Title": "The exported Config schema",
		"Diagram": "The factory's standalone Schema(false, {...}) helper (the NON-MANIFEST posture) validating and filling every default at load - invalid configuration failing loudly, new patch entries declared with insert:. Volatile (hot-editable, no remount): log, logFile, thresholdBytes, previewMaxChars, multipliers. Everything else remounts on edit."
	}, { "default": ($$result) => renderTemplate` <p>
The factory's standalone helper validates and fills EVERY default at
						load - invalid configuration fails loudly.
						New patch entries are
						declared with <code>insert:</code>.
						Full example:
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "yaml",
		"Source": [
			"- insert:",
			"      - id: ccr",
			"        name: \"@playform/hook-dsh-ccr\"",
			"        config:",
			"            log: true",
			"            logFile: ~/.dsh/ccr.log # the CCR hook's ledger (one log per module)",
			"            targets: [bash, glob, grep, read, web_fetch, web_search, list, search]",
			"            exempt: [write, edit, raw-write, subagent, ask_user_question, ccr_retrieve]",
			"            thresholdBytes: 2048 # volatile",
			"            inlineThresholdBytes: 1024 # parsed but inert under the default thresholds",
			"            autoExpand: true # store + return FULL while under autoExpandLimitBytes",
			"            autoExpandLimitBytes: 102400",
			"            compressFailures: false # the error x8 tier is the only beneficiary",
			"            multipliers: { terminal: 1, error: 8, grep: 2, paths: 2, file: 1, json: 1, web: 2, default: 1 } # volatile",
			"            previewMaxChars: 240 # volatile",
			"            ttlSeconds: 3600",
			"            storeBudgetBytes: 268435456 # 256 MiB",
			"            journalPath: \"\" # empty = memory-only; set a JSONL path to persist the store",
			"            contextEngine: false # phase-4, implemented and OFF by default"
		].join("\n")
	})} <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Field</th> <th>Type</th> <th>Default</th> <th>Meaning</th> </tr> </thead> <tbody> ${Config.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Field}</strong> </td> <td>${Row.Type}</td> <td>${unescapeHTML(Mention(Row.Default))}</td> <td>${unescapeHTML(Mention(Row.Meaning))}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In Action",
		"Meta": "ONE COMPRESSED RESULT"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-in-action-gate",
		"Title": "One compressed result",
		"Diagram": "A bash test run returning 142 lines of build output - the serialized result crossing thresholdBytes (2048) x the terminal multiplier (1) and autoExpandLimitBytes (102400) both - the gate classifying the type (terminal), hashing the bytes (sha256-24), storing the content, and replacing the model-visible result with the preview line plus the marker."
	}, { "default": ($$result) => renderTemplate` <p>
A <code>bash</code> test run returns 142 lines of build output.
						It is over
						the gate (<code>2048 &#215; 1</code>) and over the auto-expand ceiling
						(<code>102400</code>).
						The gate stores the content and replaces the
						model-visible result.
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}Before - the oversized tool result (truncated for the page)
</p> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "text",
		"Source": Oversized.join("\n")
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-in-action-replace",
		"Title": "After - the one-line preview plus the marker",
		"Diagram": "The model receiving ONE text block instead: the terminal preview line (exit code, line count, first significant line) plus the <<<CCR:<24hex>|terminal|5231>>> retrieval marker - the original staying retrievable through the registered ccr_retrieve tool."
	}, { "default": ($$result) => renderTemplate` <p>
The model receives ONE text block instead.
						The original stays
						retrievable through <code class="code-token">ccr_retrieve</code>.
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}After - the replacement content
</p> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "text",
		"Source": Replacement.join("\n")
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-in-action-retrieve",
		"Title": "The model retrieves - exactly, or in slices",
		"Diagram": "The model calling ccr_retrieve with the marker's hash - the hash matched exactly (no prefix or fuzzy matching), range {start, count} slicing lines granularly (out-of-range bounds clamp), the success value {hash, type, size, text} rendered verbatim - or getting the self-describing miss error telling it to re-run the original tool."
	}, { "default": ($$result) => renderTemplate` <p>
The model calls <code class="code-token">ccr_retrieve</code> with the
						marker's hash.
						The hash is matched exactly - NO prefix or fuzzy
						matching.
<code>range ${"{start, count}"}</code> slices lines
						granularly.
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}The retrieval call and its success value
</p> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "text",
		"Source": RetrieveCall.join("\n")
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-in-action-autoexpand",
		"Title": "The auto-expand case: stored, but returned FULL",
		"Diagram": "A result over the byte gate but at or under autoExpandLimitBytes (102400) with autoExpand on (the default) - stored with its own ledger line (ccr: stored ...) and returned FULL: no marker reaches the model while the content is cheap enough to keep inline."
	}, { "default": ($$result) => renderTemplate` <p>
A result over the gate but at or under${" "} <code>autoExpandLimitBytes</code> (102400) is stored - its own${" "} <code>ccr: stored ...</code> ledger line - and returned FULL.
						NO marker
						reaches the model while the content is cheap enough to keep inline.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "ONE LOG PER MODULE"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-ledger-log",
		"Title": "One log per module, the activation line first",
		"Diagram": "logFile recording the activation line (written by apply(), so 'did it activate' is answerable from the ledger alone), every compress/store/eviction, every retrieval hit and miss, and the context engine's archive events - the strings the module composes itself (the factory never owns them), asserted byte-identical by the smoke."
	}, { "default": ($$result) => renderTemplate` <p>
The activation line is written by <code>apply()</code> - "did it
						activate" must be answerable from the ledger alone.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "ccr-ledger-forms",
		"Title": "The durable forms carry the timestamp, not the module",
		"Diagram": "The durable file lines being the [ISO] message forms - the factory's Append layer adds the hook-dsh-ccr prefix and the timestamp; the strings below are the module's own composed messages, byte-exact. The TTL eviction shares the budget eviction's form: ccr: evicted <hash> (ttl)."
	}, { "default": ($$result) => renderTemplate` <p>
The durable file lines are the <code>[ISO] message</code> forms - the
						factory's Append layer adds the prefix and the timestamp, NEVER the
						module.
						The TTL eviction shares the budget eviction's form:
<code>ccr: evicted &lt;hash&gt; (ttl)</code>.
</p> ` })} </div> <div class="code-block">${LedgerExcerpt.join("\n")}</div> <p class="section-kicker" style="margin-top: var(--space-md)"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "terminal" })}The ledger strings (the contract)
</p> <div class="code-block">${LedgerStrings.join("\n")}</div> </section> <!-- The known limits: the documented gaps, stated as they are. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Known limits",
		"Meta": "THE DOCUMENTED GAPS"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <strong>The context engine is implemented and OFF by default.</strong> </p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The
				phase-4 engine (<code>contextEngine: true</code>) adds ONE
<code>agent/pre-step</code> listener and turns the post-execute listener into an
				observer.
				Its honest MVP does NOT remove bytes from the model's context.
				The
				pre-step decision contract covers ONLY newly claimed input messages, NOT the
				history.
				Archiving here means "stored + tracked": EVERY archived result is
				retrievable via <code>ccr_retrieve</code> through the same compress path.
				The
				decision output is ready to drive a replacement channel when one exists.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <strong>The deliberate scoping.</strong> </p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
NO proxy mode, NO live containers (the
				post-execute point sees finalized results ONLY), NO poll worker, NO chain split.
				The <code>system-prompt/assemble</code> CCR-handling directive section remains
				unimplemented.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Failures pass through unless <code>compressFailures</code> is on -
				the error <code>&#215;8</code> tier is the ONLY beneficiary.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <strong>The journal is best-effort.</strong> </p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
A journal failure degrades to
				memory-only.
				The file is the plugin's own diagnostic file, NEVER a governed
				write.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
And <code>inlineThresholdBytes</code> is parsed but inert under the
				default thresholds.
				It maps Aphrodite's <code>inline_threshold</code> and stays
				in the schema for the store-shape parity.
</p> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Related plugins",
		"Meta": `${Counts.Packages} TOTAL`
	})} <div class="grid grid--3"> ${Related.map((Plugin) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Plugin.Name,
		"Href": `/plugins/${Plugin.Name}/`,
		"Desc": Plugin.Desc,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`DSH FAMILY` })}` })}`)} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
License: CC0-1.0.</p> <p class="page-hero__sub" style="margin-top: var(--space-md)">Full scheme: <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-markdown",
		"Size": "0.9em"
	})}SCHEME.md</span>.</p> <p class="page-hero__sub" style="margin-top: var(--space-md)">TypeScript-first, built with
				@playform build (ESBuild + tsc type-check).
				The published artifact contains ONLY the
				built output.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-ccr.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-ccr.astro";
var $$url = "/plugins/hook-dsh-ccr";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-ccr@_@astro
var page = () => hook_dsh_ccr_exports;
//#endregion
export { page };
