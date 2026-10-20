import { C as Mention, D as __exportAll, E as createComponent, a as Links, b as Versions, c as Families, n as $$Base, r as Link, s as Counts, t as $$Badge, x as $$BrandIcon } from "./Badge_epMRbWWn.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$Card } from "./Card_Burs0ZFi.mjs";
import { t as $$Concept } from "./Concept_BsgF5ENb.mjs";
import { t as $$SectionHeader } from "./SectionHeader_Dq_7HTHT.mjs";
import { t as $$Terminal } from "./Terminal_C56Vdwct.mjs";
import { t as $$CodeBlock } from "./CodeBlock_C4aDhWGD.mjs";
import { t as $$Seams } from "./Seams_bMRc6zc-.mjs";
//#region Source/pages/plugins/hook-dsh-live-containers.astro
var hook_dsh_live_containers_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshLiveContainers,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshLiveContainers = createComponent(($$result, $$props, $$slots) => {
	const Listeners = [
		{
			N: "1",
			Event: "system-prompt/assemble",
			Mode: "waterfall, after next(), append-only, interpolate: false",
			Purpose: "the ONE live section: every enabled block inside its LIVE CONTAINER frame"
		},
		{
			N: "2",
			Event: "tools/post-execute",
			Mode: "waterfall, plain (pure observer)",
			Purpose: "records the tool facts the counter/gauge blocks read; marks event blocks dirty"
		},
		{
			N: "3",
			Event: "agent/pre-step",
			Mode: "waterfall, plain",
			Purpose: "the user-message boundary: counts messages/turns, resets per-turn counters"
		},
		{
			N: "4",
			Event: "tools/change",
			Mode: "emit",
			Purpose: "clears the section cache so the next assembly rebuilds"
		}
	];
	const Kinds = [
		{
			Kind: "time",
			Tokens: "{{time}}, {{date}}, {{tz}}",
			Example: "the local wall clock (HH:MM:SS), the ISO date, the IANA zone"
		},
		{
			Kind: "counter",
			Tokens: "{{messageCount}}, {{turnCount}}, {{sinceLastTool}}",
			Example: "messages=17 turns=5 sinceLastTool=42s"
		},
		{
			Kind: "manifest",
			Tokens: "{{cwd}}, {{sessionId}}",
			Example: "cwd=/repo session=scope-1"
		},
		{
			Kind: "gauge",
			Tokens: "the counter tokens",
			Example: "the counter variables, gauge intent"
		},
		{
			Kind: "note",
			Tokens: "none",
			Example: "static text; per-block vars fill it"
		},
		{
			Kind: "template",
			Tokens: "the whole variable table",
			Example: "free-form composition over all eight built-ins"
		}
	];
	const Config = [
		{
			Field: "logFile",
			Type: "string",
			Default: "~/.dsh/live-containers.log",
			Meaning: "the module's own ledger, SEPARATE from the family's logs (one log per module)"
		},
		{
			Field: "enabled",
			Type: "boolean",
			Default: "false",
			Meaning: "the MASTER switch - the IDLE-forever posture: the plugin ships disabled and enables only by an explicit ACTIVATE"
		},
		{
			Field: "sectionName",
			Type: "string",
			Default: "live-containers",
			Meaning: "the appended section's name (non-empty, fail-loud)"
		},
		{
			Field: "refresh",
			Type: "'request' | 'ttl'",
			Default: "request",
			Meaning: "the section's recompute policy; ttl caches the whole body for ttlCalls assemblies"
		},
		{
			Field: "ttlCalls",
			Type: "number",
			Default: "8",
			Meaning: "assemblies between section rebuilds when refresh = ttl (the KV-cache-friendly cadence)"
		},
		{
			Field: "separator",
			Type: "string",
			Default: "---",
			Meaning: "the frame dashes: --- LIVE CONTAINER <id> (recomputed each request; not harness state) ---"
		},
		{
			Field: "sectionBudgetBytes",
			Type: "number",
			Default: "4096",
			Meaning: "when the rendered body exceeds this, the OLDEST frames collapse to one-line summaries - never silently dropped"
		},
		{
			Field: "blocks",
			Type: "block spec[]",
			Default: "DEFAULT_BLOCKS (14 entries)",
			Meaning: "the block table (the ARRAY is the volatile cell): id, kind, template, enabled, vars, trigger, ttlCalls, scope"
		}
	];
	const Frame = [
		"--- LIVE CONTAINER <id> (recomputed each request; not harness state) ---",
		"<rendered body>",
		"--- END LIVE CONTAINER <id> ---"
	];
	const LedgerExcerpt = [
		"activated (bundle 0.0.1, blocks=14, refresh=request)",
		"block rendered time (113 bytes)",
		"block skipped agent-progress-board (unknown kind)",
		"section rebuilt (ttl 8)",
		"failsafe section-collapse 2"
	];
	const LedgerStrings = [
		"disabled (enabled=false)",
		"activated (bundle 0.0.1, blocks=<n>, refresh=<policy>)",
		"block rendered <id> (<len> bytes)",
		"block skipped <id> (<reason>)",
		"section rebuilt (ttl <n>)",
		"section rebuilt (tools/change)",
		"render failed <id> -> skipped",
		"render unknown <id> <token>",
		"failsafe section-collapse <n>"
	];
	const Related = [
		{
			Name: "plugin-dsh-factory",
			Desc: "The family's furnace: the Schema(false, {...}) helper composing this module's NON-MANIFEST config schema, the ledger Append layer and the loader/volatile-update refresh the State builder registers."
		},
		{
			Name: "hook-dsh-tool-coach",
			Desc: "The precedent on the same assemble waterfall: the coach's tier-2 persistent section established the append-only, after-next() pattern the live section follows - and the sectionTtl caching pattern behind refresh: ttl."
		},
		{
			Name: "hook-dsh-core",
			Desc: "The Activate composer behind the durable activation proof: the activated (bundle ..., blocks=..., refresh=...) line is built from the shared helper, so 'did it activate' is answerable from the ledger alone."
		},
		{
			Name: "hook-dsh-ccr",
			Desc: "The sibling observer on tools/post-execute: the live-containers post-execute listener registers plain, after the ccr { prepend: true } listener, and never replaces content - it only counts."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-live-containers - DSH Family @ PlayForm",
		"Description": `${Families.LiveContainers} - the live-containers hook of the DeepSeek Harness. It keeps dynamic, modifiable conversation blocks in the system prompt. Each enabled block is a labeled stanza recomputed at EVERY request. Each block sits inside a fixed frame so the model cannot mistake it for harness state. Shipped DISABLED (the IDLE-forever posture).`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`ROLE: LIVE PROMPT` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "deepseek",
		"Size": "0.8em"
	})} GATE: system-prompt/assemble (append-only)
` })} ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`STATUS: SHIPS DISABLED` })} </div> <section class="page-hero"> <h1 class="page-hero__title">hook-dsh-live-containers</h1> <p class="page-hero__sub"> ${Families.LiveContainers} &bull; ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} <em>The DeepSeek Harness
				Plugin Family for PlayForm.</em> </p> <p class="page-hero__sub">
The <strong>live-containers hook</strong> of the
				DeepSeek Harness - a plugin that keeps <strong>dynamic, modifiable conversation
				blocks in the system prompt</strong>.
</p> <p class="page-hero__sub">
Each enabled block is a labeled stanza
				recomputed at every request - the canonical example is a time block that always
				holds the current time at ask-time while the rest of the conversation stays
				static.
</p> <p class="page-hero__sub">
The blocks ride the <code>system-prompt/assemble</code> waterfall as ONE
				appended section named <code>live-containers</code> (<code>interpolate: false</code>,
				so only the plugin's own substitution engine touches its <code>${"{{token}}"}</code>${" "}
groups), each block inside a fixed frame so the model cannot mistake it for
				harness state.
</p> <p class="page-hero__sub"><strong>Planned - not yet in the profile.</strong></p> <p class="page-hero__sub">The
				plugin ships DISABLED (the IDLE-forever posture): the bundle entry declares${" "} <code>enabled: false</code> only, the plugin never appears in the profile's
				bundles, and it enables only by an explicit ACTIVATE.
</p> <p class="page-hero__sub">
A cold mount logs${" "} <code>disabled (enabled=false)</code> and every listener no-ops to a passthrough.
</p> <p class="page-hero__sub">A NON-MANIFEST factory flavor: the family's furnace
				composes the schema and the volatile refresh; this package owns its schema and
				its strings.
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, {
		"Pkg": "hook-dsh-live-containers",
		"Rail": true
	})} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-live-containers</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Hook` })} <span class="workbench-controls__label">Events:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`system-prompt/assemble` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`tools/post-execute` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`agent/pre-step` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`tools/change` })} <span class="workbench-controls__label">Injects:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`pluginFactory, tools` })} </div> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": "FAMILY POSITION: A LIVE PROMPT HOOK"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "live-family-position",
		"Title": "The family position",
		"Diagram": `${Families.LiveContainers} as a hook child of the plugin-dsh-factory service - no hook children of its own - a NON-MANIFEST module (no fs/observed Wire, no Attach, no factory Schema): the plugin owns its schema and its strings. apply returns NOTHING; the state is exposed via ctx.__hookDshLiveContainersState.`
	}, { "default": ($$result) => renderTemplate` <p>
A hook child of the${" "} <strong><a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a></strong> service (${Families.LiveContainers}); a
						NON-MANIFEST module (no fs/observed Wire, no Attach, no factory Schema) -
						the plugin owns its schema and its strings.
</p> <p> <code>apply</code> returns NOTHING; the state is exposed via${" "} <code>ctx.__hookDshLiveContainersState</code>.${" "} <code>inject: ["pluginFactory", "tools"]</code>.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>#</th> <th>Event</th> <th>Mode</th> <th>Purpose</th> </tr> </thead> <tbody> ${Listeners.map((Row) => renderTemplate`<tr> <td> <strong>${Row.N}</strong> </td> <td>${unescapeHTML(Mention(Row.Event))}</td> <td>${Row.Mode}</td> <td>${Row.Purpose}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "WHERE THE LIVE SECTION OPERATES"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "system-prompt/assemble - the live section",
			What: "Listener 1 ([system-prompt/assemble](Harness:docs/event-producer-consumer.md)), after next(), append-only: appends ONE section ({name: 'live-containers', text, interpolate: false}) to next()'s assembly - touching nothing else, PTC + structured-output preserved. interpolate: false means the harness's own prompt variables never resolve (or fail on) the section's {{token}} groups.",
			Outcome: "Only the plugin's own substitution engine touches the section's tokens; the harness's unresolved-variable failure is never inherited."
		},
		{
			Seam: "tools/post-execute - the counter observer",
			What: "Listener 2 ([tools/post-execute](Harness:docs/subsystems/tools.md)), registered plain (after the ccr { prepend: true } listener): records the last-tool timestamp and the per-turn attempt counts, and marks event-trigger blocks dirty. Pure observer - the downstream decision is returned unchanged.",
			Outcome: "The counter and gauge blocks read what the plugin itself observed - honest approximations, never invented token counts."
		},
		{
			Seam: "agent/pre-step - the user-message boundary",
			What: "Listener 3 ([agent/pre-step](Harness:docs/event-producer-consumer.md)), the tool-coach precedent: a new user message counts the messages, advances the turn, resets the per-turn counters and marks the event-trigger blocks dirty.",
			Outcome: "The counters track the conversation as it flows; event blocks re-render at the next assembly."
		},
		{
			Seam: "tools/change - the cache invalidation",
			What: "Listener 4 (tools/change emit): clears every live scope's section cache so the next assembly rebuilds the body from the NEW registry (logging section rebuilt (tools/change)).",
			Outcome: "The section never shows a stale registry view."
		},
		{
			Seam: "loader/volatile-update - the volatile refresh",
			What: "EVERY knob of the config schema is volatile: the factory's State builder registers the loader/volatile-update listener and refreshes the mapped State fields IN PLACE, so a flip (enabled, refresh, ttlCalls, separator, sectionBudgetBytes, the block table, ...) takes effect on the next assembly - no remounting.",
			Outcome: "The smoke suite asserts the flip lands live."
		},
		{
			Seam: "The ledger / session",
			What: "One log per module - logFile (default ~/.dsh/live-containers.log) - recording the nine byte-exact strings in [ISO] form with the live-containers: logger prefix; apply returns NOTHING, so 'did it activate' is answerable from the ledger and the state attachment alone.",
			Outcome: "The live-section state is discoverable from the ledger alone."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The fixed frame",
		"Meta": "THE MODEL-FACING CONTRACT"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "live-frame",
		"Title": "Every block renders inside the same frame",
		"Diagram": "The dashes come from config separator (default ---). The frame text is the plugin's own output - never harness state - and the parenthetical says so to the model on every block: (recomputed each request; not harness state)."
	}, { "default": ($$result) => renderTemplate` <p>
The frame is the plugin's own output, <strong>never harness state</strong>${" "}
- the safety framing the model sees on every block.
</p> <p>
Substitution is${" "} <code>${"{{token}}"}</code> replace ONLY - no eval, no expressions; an
						unknown token renders LITERALLY and logs${" "} <code>render unknown &lt;id&gt; &lt;token&gt;</code> - never a failure.
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })}The frame, byte-exact
</p> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "text",
		"Source": Frame.join("\n")
	})} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The block kinds",
		"Meta": "PHASE 1 RENDERS SIX - THE CATALOG KINDS SKIP"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "live-kinds",
		"Title": "One registry, two consumers",
		"Diagram": "The KINDS registry drives both the fail-loud config validation (an unknown kind throws at load) and the render dispatch. Phase 1 renders six kinds; the wave-2 catalog kinds (todo-list, command-runner, session-stats, ... - 14 entries in the default block table, three enabled) are ACCEPTED in config and render as skipped blocks - reason 'unknown kind' - until the wave-2 render engine lands."
	}, { "default": ($$result) => renderTemplate` <p>
The wave-2 catalog kinds cost nothing and render nothing in this package
						yet - documented honestly.
</p> <p>
Tokens the phase-1 engine does not resolve
						(<code>${"{{set:NAME}}"}</code>) render literally.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Kind (phase 1)</th> <th>Built-in tokens</th> <th>What the model sees</th> </tr> </thead> <tbody> ${Kinds.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Kind}</strong> </td> <td>${Row.Tokens}</td> <td>${Row.Example}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "SCHEMA + DEFAULTS AT LOAD - EVERY KNOB VOLATILE"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "live-config-schema",
		"Title": "The exported Config schema",
		"Diagram": "The factory's standalone Schema(false, {...}) helper validating and filling every default at load; every knob volatile - a flip lands on the next assembly. Fail-loud validation in apply: sectionName/separator non-empty, refresh in {request, ttl}, ttlCalls >= 1, sectionBudgetBytes >= 1, every block id non-empty and unique, kind in the KINDS registry, template non-empty, vars a dict of strings, trigger and scope in their unions."
	}, { "default": ($$result) => renderTemplate` <p>
New patch entries are declared with <code>insert:</code>. The shipped
						entry (the IDLE-forever posture - nothing but the disabled switch):
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "yaml",
		"Source": [
			"- insert:",
			"      - id: hook-dsh-live-containers",
			"        name: \"@playform/hook-dsh-live-containers\"",
			"        config:",
			"            enabled: false # the IDLE-forever posture - nothing else ships"
		].join("\n")
	})} <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Field</th> <th>Type</th> <th>Default</th> <th>Meaning</th> </tr> </thead> <tbody> ${Config.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Field}</strong> </td> <td>${Row.Type}</td> <td>${unescapeHTML(Mention(Row.Default))}</td> <td>${unescapeHTML(Mention(Row.Meaning))}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In Action",
		"Meta": "ONE ACTIVATED SESSION"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "live-in-action-stream",
		"Title": "The time block, recomputed at every ask",
		"Diagram": "With the plugin ACTIVATEd (enabled: true) and the default table: the time block re-renders per request so {{time}} always holds the current wall clock; the wave-2 entries skip as 'unknown kind'; with refresh: ttl the section text holds for ttlCalls (8) assemblies and the prefix stays reusable; an oversized body collapses its oldest frames - never silently dropped."
	}, { "default": ($$result) => renderTemplate` <p>
The canonical example: a <code>time</code> block whose${" "} <code>${"{{time}}"}</code> always holds the current time at ask-time, while
						the rest of the conversation stays static.
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}The ledger lines for the stream
</p> <div class="code-block">${LedgerExcerpt.join("\n")}</div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "ONE LOG PER MODULE"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "live-ledger-log",
		"Title": "The nine strings are the contract",
		"Diagram": "One log per module - logFile (default ~/.dsh/live-containers.log) - the nine strings byte-exact with the live-containers: logger prefix (the factory's Append layer; each line [ISO] <message> in the file): disabled, activated, block rendered, block skipped, section rebuilt (ttl), section rebuilt (tools/change), render failed, render unknown, failsafe section-collapse."
	}, { "default": ($$result) => renderTemplate` <p>
The durable ledger file carries the same strings in${" "} <code>[ISO] &lt;message&gt;</code> form; the strings below are the
						module's composed messages, byte-exact.
</p> <p>
Skip lines log only when the
						reason changes - the ledger stays quiet on steady state.
</p> ` })} </div> <div class="code-block">${LedgerStrings.join("\n")}</div> </section> <!-- The known limits: the documented gaps, stated as they are. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Known limits",
		"Meta": "THE KV-CACHE HONESTY + THE FUTURE STAGE"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <strong>Per-request recompute is cache-hostile - the design says so plainly.</strong> </p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
A block whose text changes every request invalidates provider <em>prefix
				reuse</em> from its <strong>first changed token</strong>: everything after the
				changed byte is re-priced on the next call.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <code>refresh: "request"</code> is
				therefore cache-hostile for always-differing blocks; <code>refresh: "ttl"</code>${" "}
with <code>ttlCalls</code> &ge; 8 (the shipped default) is the recommended
				cadence - the section text holds for 8 assemblies, so the prefix stays
				reusable for those 8 calls - while stable-until-event blocks (notes, counters
				under their triggers) cost nothing extra.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <strong>The programmable stage is FUTURE - not in this package.</strong> </p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The
				substitution engine is token replace ONLY - no eval, no expressions, no${" "} <code>new Function</code>.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The later stage (research section 5) routes
				expression evaluation through the ptc-runtime (sandboxed, capped):${" "} <code>kind: "program"</code> blocks, a <code>live_container_program</code> tool,
				per-call timeout and output caps, and the privacy gate (<code>context: 'full'</code>${" "}
per block).
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Do not configure for it and do not expect it from this package.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)"> <strong>Counters are honest approximations.</strong> </p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The plugin counts what it
				observes at <code>agent/pre-step</code> and <code>tools/post-execute</code>;
				exact token counts are NOT available to plugins, and the phase-1 counters are
				module-global (the assemble context exposes only an opaque scope key, which is
				never parsed - the family's capability rule).
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
				@playform build (ESBuild + tsc type-check); the published artifact contains only the
				built output.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-live-containers.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-live-containers.astro";
var $$url = "/plugins/hook-dsh-live-containers";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-live-containers@_@astro
var page = () => hook_dsh_live_containers_exports;
//#endregion
export { page };
