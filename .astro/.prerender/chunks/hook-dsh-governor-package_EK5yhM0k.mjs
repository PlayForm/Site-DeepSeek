import { C as __exportAll, S as createComponent, a as Links, b as $$BrandIcon, n as $$Base, o as Counts, r as Link, s as Families, t as $$Badge, y as Versions } from "./Badge_CHteF_GF.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_jUwDEDCs.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_DQw92EC9.mjs";
import { t as $$Card } from "./Card_B96geFVd.mjs";
import { t as $$Concept } from "./Concept_DF89tVee.mjs";
import { t as $$SectionHeader } from "./SectionHeader_w9WBitnM.mjs";
import { t as $$Terminal } from "./Terminal_DR1pHPfM.mjs";
import { t as $$CodeBlock } from "./CodeBlock_BKk4KZdJ.mjs";
import { t as $$Seams } from "./Seams_CCLTae3H.mjs";
//#region Source/pages/plugins/hook-dsh-governor-package.astro
var hook_dsh_governor_package_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshGovernorPackage,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshGovernorPackage = createComponent(($$result, $$props, $$slots) => {
	const Pipeline = [
		"  fs/observed (target, {kind:\"present\", version}, actor)",
		"  ── fired by the TOOL LAYER ONLY, for every harness write/edit, any thread ──►",
		"       │",
		"       ▼",
		"  G1  Factory.Gate ── displayPath → actor ∈ mutationTools → kind \"present\" →",
		"  │                    Stash idempotence → basename \"package.json\" → excluded?",
		"  │     excluded ──► ledger `skipped (excluded) <path>`   (every other gate",
		"  ▼                  outcome is silent)                      outcome proceeds)",
		"  G2  Factory.Discover + Factory.Parse ── nearest registry.json walk-up",
		"  │     (none / unreadable ──► ledger line, the chain pass is skipped)",
		"  ▼",
		"  Stash seed (targetKey, version) ── our own re-emits re-enter as no-ops",
		"       │",
		"       ▼  detached, contained  (Factory.Continue - the listener never awaits)",
		"  G3  CHAIN PASS (the pure transform) ── read → chain-governed pins",
		"  │      (dep ∈ registry.effectiveLatest) canonicalized to ^<resolved>",
		"  │      (strict: strip unknown - explicit only, never a default) →",
		"  │      GuardedWrite (replaceIfVersion + the P4 fence) → ledger",
		"  │      `governed <path> → <version>` → Refresh (P3 re-emit, same actor)",
		"  │      (the factory's Continue also computes the union keep-list with the",
		"  │       P3 chain keys - deliberately ignored by this transform)",
		"  ▼  chained off the settled continuation",
		"  G4  UPDATE STAGE ── passage gate → Filter (nothing public? skip) →",
		"  │     first-wins update-policy pick → Dispatch:",
		"  │     breaker → in-flight → cooldown → the jobs envelope",
		"  │     (kind \"governor-update\", unowned) or the detached fallback",
		"  │          ├─ updateMode \"programmatic\": ncu.run({packageFile, upgrade,",
		"  │          │    silent, dep, concurrency, target, reject ∪ chain deps,",
		"  │          │    allow, filter}) - no external binary",
		"  │          └─ updateMode \"bin\": the ncu binary (ncuBin) via ctx.subprocess",
		"  │     → Verify (verifyCommand, exit 127 non-fatal) → Settle →",
		"  │       Refresh (U2: re-stat + re-emit the fresh version)",
		"  ▼",
		"  SILENCE: the tool result shows exactly what the author wrote.",
		"  The governed state is discoverable only by a subsequent read - or in",
		"  the ledger."
	];
	const Siblings = [
		{
			Name: "hook-dsh-governor-package (this bundle)",
			Gate: "package.json",
			Ledger: "governor.log",
			Pass: "chain pass (→ ^resolved) + update stage (ncu)",
			This: true
		},
		{
			Name: "hook-dsh-pinner-package",
			Gate: "package.json",
			Ledger: "pinner.log",
			Pass: "pin pass (^0.3.4 → 0.3.4; keep-list wins)",
			This: false
		},
		{
			Name: "hook-dsh-governor-cargo",
			Gate: "Cargo.toml",
			Ledger: "hook-dsh-governor-cargo.log",
			Pass: "chain pass (bare caret / =exact) + cargo upgrade",
			This: false
		}
	];
	const Config = [
		{
			Field: "log",
			Type: "boolean",
			Default: "true",
			Meaning: "write the durable ledger file"
		},
		{
			Field: "logFile",
			Type: "string",
			Default: "~/.dsh/hook-dsh-governor-package.log",
			Meaning: "the governor's global ledger"
		},
		{
			Field: "updateCooldownMs",
			Type: "number",
			Default: "3000",
			Meaning: "cooldown between update-stage dispatches per directory"
		},
		{
			Field: "strict",
			Type: "boolean",
			Default: "false",
			Meaning: "strip unknown deps - explicit only; never default-delete unknown deps"
		},
		{
			Field: "mutationTools",
			Type: "string[]",
			Default: "[write, edit, str_replace_editor]",
			Meaning: "the actor tools whose writes count as triggers"
		},
		{
			Field: "maxUpdateFailures",
			Type: "number",
			Default: "3",
			Meaning: "circuit breaker: pause a dir's update stage"
		},
		{
			Field: "ncuBin",
			Type: "string",
			Default: "/usr/local/bin/ncu",
			Meaning: "absolute - host PATH != shell PATH"
		},
		{
			Field: "updateMode",
			Type: "\"programmatic\" | \"bin\"",
			Default: "programmatic",
			Meaning: "ncu as a library (no external binary) or via the ncu binary"
		},
		{
			Field: "policyFile",
			Type: "string",
			Default: "",
			Meaning: "optional global update-policy.json (else discovery, else built-in)"
		},
		{
			Field: "exclude",
			Type: "string[]",
			Default: "[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app]",
			Meaning: "the exclusion segments (the core's Default)"
		}
	];
	const LedgerExcerpt = [
		"[2026-10-03T09:15:22.411Z] activated (anywhere mode, logFile=~/.dsh/hook-dsh-governor-package.log, updateMode=programmatic, ncuBin=/usr/local/bin/ncu, exclude=[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app], policyFile=(discovery))",
		"[2026-10-03T09:16:01.880Z] governed <project>/acme/tool/package.json → 42",
		"[2026-10-03T09:16:34.120Z] update stage dispatched for <project>/acme/tool (mode=programmatic, ncu via /usr/local/bin/ncu, built-in default policy)",
		"[2026-10-03T09:16:41.502Z] update: DONE — pins bumped per policy"
	];
	const GovernedWrite = [
		"{",
		"  \"name\": \"@acme/tool\",",
		"  \"scripts\": { \"build\": \"tsc\" },",
		"  \"dependencies\": {",
		"    \"@playform/build\": \"^0.3.4\",",
		"    \"@acme/chain-core\": \"0.4.1\"",
		"  }",
		"}"
	];
	const LedgerStrings = [
		"activated (anywhere mode, logFile=..., updateMode=..., ncuBin=..., exclude=[...], policyFile=(discovery))",
		"skipped (excluded) <path>",
		"no registry.json found for <path>",
		"governed <path> → <version>",
		"update stage dispatched for <dir> (mode=..., ncu via ..., policy ...)",
		"update: DONE / update: FAILED"
	];
	const Related = [
		{
			Name: "plugin-dsh-factory",
			Desc: "The family's furnace: the gates, the discovery, the guarded write, the refresh, the continuation, the effects and the schema come from it."
		},
		{
			Name: "hook-dsh-pinner-package",
			Desc: "The sibling pin pass on the same seam: pins ^0.3.4 to 0.3.4; a fully pinned manifest leaves this module's update stage nothing to do."
		},
		{
			Name: "hook-dsh-governor-cargo",
			Desc: "The Rust-sided sibling: same architecture for Cargo.toml, with the update stage driven by cargo upgrade."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-governor-package - @playform / DSH Family",
		"Description": `${Families.GovernorPackage} - the silent package.json governor of the DeepSeek Harness: hooks fs/observed, canonicalizes chain-governed dependency pins, and runs the update stage as a detached, contained continuation.`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`ROLE: GOVERNOR` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-json",
		"Size": "0.8em"
	})} GATE: package.json
` })} </div> <section class="page-hero"> <h1 class="page-hero__title">hook-dsh-governor-package</h1> <p class="page-hero__sub"> ${Families.GovernorPackage} • ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} _The DeepSeek Harness
				Plugin Family for PlayForm._ The <strong>silent package.json governor</strong> of
				the DeepSeek Harness - a plugin on the <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/observed</code></a> event (the <a${addAttribute(Link(Links.DeepSeekHarness, "vendor/cordis"), "href")}>cordis</a>
event every harness file write dispatches; the tool layer is the only dispatcher)
				that governs every
<code>package.json</code> written by any agent, anywhere.<br>A pure chain pass
				canonicalizes chain-governed dependency pins, then an update stage lets
${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "npm" })} npm-check-updates bump the public ones - and the author
				never learns.<br>A factory flavor: the family's furnace does the plumbing; this package
				is the model logic.
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, { "Command": "pnpm add @playform/hook-dsh-governor-package" })} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-governor-package</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Hook` })} <span class="workbench-controls__label">Event:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`fs/observed` })} <span class="workbench-controls__label">Injects:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`fs, pluginFactory` })} </div> </div> </section> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The profile wiring for this plugin - the bundles list, the patch entry and the restart -
			is on the <a href="/setup/">setup page</a>.
</p> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": "FAMILY POSITION: A GOVERNANCE HOOK"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-family-position",
		"Title": "The family position",
		"Diagram": `${Families.GovernorPackage} as a hook child of the plugin-dsh-factory service and the hook-dsh-core helpers - no hook children of its own - one of three governance hooks sharing the fs/observed seam, each gating on its own basename and writing its own ledger.`
	}, { "default": ($$result) => renderTemplate` <p> <strong>Family position</strong> (the @-sentence${" "} <strong>${Families.GovernorPackage}</strong>): a hook child of the${" "} <strong><a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a></strong> service and the${" "} <strong>hook-dsh-core</strong> helpers; it has no hook children of its own.
</p> <p>
One of three governance hooks sharing the <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/observed</code></a> seam,
						each gating on its own basename and writing its own ledger:
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Plugin</th> <th>Basename gate</th> <th>Ledger</th> <th>Pass</th> </tr> </thead> <tbody> ${Siblings.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Name}</strong> </td> <td>${Row.Gate}</td> <td>${Row.Ledger}</td> <td> ${Row.Pass.split("→").map((Part, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && renderTemplate`${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}`}${Part}` })}`)} </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-composition",
		"Title": "Composition semantics when several are activated",
		"Diagram": "The three-way composition: pin to bump-exact (a fully pinned manifest leaving ncu nothing to do, the chain pass may still re-canonicalize chain pins), chain > strip > normalize (the cargo module's precedence), keep-list wins (the pinner's pin-policy.json keeping ranges as authored) - the ledgers separate, activating one never implying another."
	}, { "default": ($$result) => renderTemplate` <p>
Composition semantics when several are activated: <strong>pin</strong>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <strong>bump-exact</strong> (a
						fully pinned manifest leaves ncu nothing to do; the chain pass may still
						re-canonicalize chain pins), <strong>chain</strong>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <strong>strip</strong>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <strong>normalize</strong>${" "}
(the cargo module's precedence), <strong>keep-list wins</strong> (the
						pinner's <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-pinner-package/Source/Function/Transform.ts"), "href")}>pin-policy.json</a> keeps ranges as authored).
</p> <p>The ledgers are separate; activating one never implies another.</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-factory-flavor",
		"Title": "Machinery-wise it is a factory flavor",
		"Diagram": "inject: [\"fs\", \"pluginFactory\"] - the gates, the discovery, the guarded write, the refresh, the continuation, the effects and the schema coming from plugin-dsh-factory; the pure helpers (Suppress, the policy loader) coming from hook-dsh-core; this bundle keeping only its own vocabulary: the Config extension, the chain pass, the update engine and every ledger string."
	}, { "default": ($$result) => renderTemplate` <p>
Machinery-wise it is a <strong>factory flavor</strong>:${" "} <code>inject: ["fs", "pluginFactory"]</code> - the gates, the discovery, the
						guarded write, the refresh, the continuation, the effects and the schema
						come from <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a>; the pure helpers (Suppress, the policy loader)
						come from hook-dsh-core.
</p> <p>
This bundle keeps only its own vocabulary: the Config extension, the chain
						pass, the update engine and every ledger string.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-direct-govern",
		"Title": "The direct-govern registration",
		"Diagram": "Besides the fs/observed event path, its two steps registered with the factory&apos;s direct-govern registry at apply (Factory.RegisterGovern(\"package.json\", \"canonicalize\" | \"update\", ...)) - so the raw-write tool&apos;s per-call govern selection can drive the same chain pass and update stage directly through Factory.Govern."
	}, { "default": ($$result) => renderTemplate` <p>
Besides the <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}>fs/observed</a> event path, its two steps are registered with the
						factory's direct-govern registry at apply (
						Factory.RegisterGovern(&quot;package.json&quot;, &quot;canonicalize&quot; |
						&quot;update&quot;, ...)).
</p> <p>
That lets the raw-write tool's per-call govern selection drive the same
						chain pass and update stage directly through <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Govern.ts"), "href")}>Factory.Govern</a>.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "WHERE THE GOVERNOR OPERATES"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "fs/observed - the file observation event",
			What: "The governor's one listener hook: [fs/observed](Harness:packages/fs/fs/src/index.ts) is the cordis event every harness file write dispatches, fired by the tool layer only - so it runs after content is on disk, on every write path (full writes, single-line edits, str_replace_editor patches alike).",
			Outcome: "The fix happens where the write happens, without the author's tool result changing by a single byte."
		},
		{
			Seam: "ctx.fs - the filesystem service (dsh-fs)",
			What: "All rewrites go through the [ctx.fs](Harness:packages/fs/fs) service (which dispatches no fs/* events - only the tool layer does), carrying replaceIfVersion at the observed version and an explicit sandbox policy because the plugin's own exclude list IS its fence.",
			Outcome: "No recursion, no clobber; a racing author write fails safely."
		},
		{
			Seam: "ctx.jobs - the jobs facility",
			What: "The update stage runs inside the [jobs envelope](Harness:packages/jobs) (kind governor-update, unowned) when a controller serves the context - the factory's Attach registers it from the root - with the detached contained continuation as the probed fallback.",
			Outcome: "ncu runs off the author's critical path and never blocks the session."
		},
		{
			Seam: "ctx.subprocess (dsh-subprocess, bin mode)",
			What: "In updateMode bin, the ncu binary is driven through the [subprocess seam](Harness:packages/subprocess/subprocess) with a fully-specified argv (ncuBin is absolute - host PATH != shell PATH).",
			Outcome: "The external-tool path without shell PATH drift."
		},
		{
			Seam: "The ledger / session",
			What: "One global log records activation, exclusions, chain-pass results and every update-stage dispatch; the activation line is written by apply() so \"did it activate\" is answerable from the ledger alone.",
			Outcome: "The governed state is discoverable only by a subsequent read - or in the ledger."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Problem",
		"Meta": "WHY THE GOVERNOR EXISTS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-problem",
		"Title": "The fix must be invisible, and where the write happens",
		"Diagram": "Agents editing package.json files constantly - every edit able to leave stale pins, stray version ranges, or deps that should track a governed registry - the fix having to happen where the write happens, on every write path (full writes, single-line edits, str_replace_editor patches alike), without the author's tool result changing by a single byte."
	}, { "default": ($$result) => renderTemplate` <p>
Agents edit <code>package.json</code> files constantly - and every edit can
						leave stale pins, stray version ranges, or deps that should track a governed
						registry.
</p> <p>
The fix must happen where the write happens, on every write path (full
						writes, single-line edits, <code>str_replace_editor</code> patches alike),
						without the author's tool result changing by a single byte.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-why-observed",
		"Title": "Why fs/observed",
		"Diagram": "[fs/observed](Harness:packages/fs/fs/src/index.ts) being the only hook that runs after content is on disk - the [fs/write-intent waterfall](Harness:packages/fs/fs/src/index.ts) carrying a version guard but never the content."
	}, { "default": ($$result) => renderTemplate` <p> <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/observed</code></a> is the only hook that runs <em>after</em> content
						is on disk - the <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/write-intent</code></a> waterfall carries a version
						guard but never the content.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "How It Works",
		"Meta": "THE PIPELINE G = U ∘ P"
	})} <div class="code-block">${Pipeline.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-anywhere-mode",
		"Title": "Anywhere mode, exclusion-first",
		"Diagram": "No roots allowlist: any agent (main, subagent, workflow child) writing a package.json via the harness fs tools being governed - unless the path contains an excluded segment."
	}, { "default": ($$result) => renderTemplate` <p> <strong>Anywhere mode, exclusion-first</strong> - no roots allowlist: any
						agent (main, subagent, workflow child) writing a package.json via the
						harness fs tools is governed, unless the path contains an excluded segment.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-no-recursion",
		"Title": "No recursion",
		"Diagram": "The governor's rewrites going through the ctx.fs service (which dispatches no fs/* events - only the tool layer does) and the update stage being a continuation, not an author tool call."
	}, { "default": ($$result) => renderTemplate` <p> <strong>No recursion</strong> - the governor's rewrites go through the
						ctx.fs service (which dispatches no fs/* events - only the tool layer does)
						and the update stage is a continuation, not an author tool call.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-version-coherence",
		"Title": "Version coherence",
		"Diagram": "The rewrite carrying replaceIfVersion at the observed version - a racing author write making it fail safely (no clobber)."
	}, { "default": ($$result) => renderTemplate` <p> <strong>Version coherence</strong> - the rewrite carries replaceIfVersion at
						the observed version; a racing author write makes it fail safely (no
						clobber).
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-cordis-trap",
		"Title": "The cordis-trap guard",
		"Diagram": "ncu's reject list always being policy.reject ∪ the chain-governed dep names - ncu must never bump a chain pin to public npm latest."
	}, { "default": ($$result) => renderTemplate` <p> <strong>The cordis-trap guard</strong> - ncu's reject list is always
						policy.reject ∪ the chain-governed dep names; ncu must never bump a chain
						pin to public npm latest.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-silence",
		"Title": "Silence",
		"Diagram": "The model-facing write result built from the author's own content - a listener throw contained logger-only (the core's Suppress composer), the ledger best-effort."
	}, { "default": ($$result) => renderTemplate` <p> <strong>Silence</strong> - the model-facing write result is built from the
						author's own content; a listener throw is contained logger-only (the core's
						Suppress composer); the ledger is best-effort.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-update-envelope",
		"Title": "The update envelope lives in the core",
		"Diagram": "The G4 update-stage envelope - the Dispatch/Settle pair of the diagram (the gates, the jobs envelope, the breaker update, the U2 refresh) - living in [@playform/hook-dsh-core](Ours:Classic/packages/hook-dsh-core/Source), this module a thin delegate injecting its own collections, child stage and ledger strings, so the flow is not forked per governance module."
	}, { "default": ($$result) => renderTemplate` <p>
The G4 update-stage envelope - the Dispatch/Settle pair of the diagram above
						(the gates, the jobs envelope, the breaker update, the U2 refresh) - lives
						in the core (<a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-core/Source"), "href")}>@playform/hook-dsh-core</a>).
</p> <p>
This module is a thin delegate that injects its own collections, child stage
						and ledger strings, so the flow is not forked per governance module.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "SCHEMA + DEFAULTS AT LOAD"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-config-schema",
		"Title": "The exported Config schema",
		"Diagram": "The exported Config schema (the [factory's Schema helper](Ours:Classic/packages/plugin-dsh-factory/Source) extended with the module's own fields) validating and filling every default at load - invalid configuration failing loudly, new patch entries declared with insert:."
	}, { "default": ($$result) => renderTemplate` <p>
The exported Config schema (the factory's Schema helper extended with the
						module's own fields) validates and fills every default at load - invalid
						configuration fails loudly.
</p> <p>
New patch entries are declared with <code>insert:</code>. Full example:
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "yaml",
		"Source": [
			"- insert:",
			"      - id: hook-dsh-governor-package",
			"        name: \"@playform/hook-dsh-governor-package\"",
			"        config:",
			"            log: true",
			"            logFile: ~/.dsh/hook-dsh-governor-package.log # global ledger",
			"            updateCooldownMs: 3000",
			"            strict: false # explicit only; never default-delete unknown deps",
			"            mutationTools: [write, edit, str_replace_editor]",
			"            maxUpdateFailures: 3 # circuit breaker: pause a dir's update stage",
			"            ncuBin: /usr/local/bin/ncu # absolute - host PATH != shell PATH",
			"            updateMode: programmatic # \"programmatic\" (default) | \"bin\"",
			"            policyFile: \"\" # optional global update-policy.json (else discovery, else built-in)",
			"            exclude: [node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app]"
		].join("\n")
	})} <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Field</th> <th>Type</th> <th>Default</th> <th>Meaning</th> </tr> </thead> <tbody> ${Config.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Field}</strong> </td> <td>${Row.Type}</td> <td>${Row.Default}</td> <td>${Row.Meaning}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In Action",
		"Meta": "ONE GOVERNED WRITE"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-in-action-setup",
		"Title": "One governed write",
		"Diagram": "The author writing a package.json anywhere with the write tool - one dep that should track the governed registry, one public dep left on a range."
	}, { "default": ($$result) => renderTemplate` <p>
One governed write.<br>The author writes a <code>package.json</code> anywhere
						with the write tool - one dep that should track the governed registry, one
						public dep left on a range:
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}Before - the manifest as the author wrote it
</p> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "json",
		"Source": GovernedWrite.join("\n")
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-in-action-pass",
		"Title": "The chain pass canonicalizes; the update stage bumps",
		"Diagram": "The chain pass finding @acme/chain-core in the nearest registry.json (effective 0.4.5) and canonicalizing it to ^0.4.5 - the public dep staying a range until the update stage's ncu run bumps it; the transcript showing only what the author wrote, the ledger showing what actually happened."
	}, { "default": ($$result) => renderTemplate` <p>
The chain pass finds <code>@acme/chain-core</code> in the nearest${" "} <code>registry.json</code> (effective 0.4.5) and canonicalizes it to${" "} <code>^0.4.5</code>; the public dep stays a range until the update stage's
						ncu run bumps it.
</p> <p>
The transcript shows only what the author wrote; the ledger shows what
						actually happened:
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}After - the ledger line for the same pass
</p> <div class="code-block">${LedgerExcerpt.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-in-action-reread",
		"Title": "Read it back, write it again, or write inside an excluded path",
		"Diagram": "Reading the file back and finding @acme/chain-core at ^0.4.5 (or already bumped by ncu if the policy allowed it) - writing again immediately with nothing complaining (no FS_STALE_VERSION, the re-emit making the second pass a no-op) - or writing inside node_modules/.git/.dsh and the ledger gaining one line, skipped (excluded) ..., while the file stays untouched."
	}, { "default": ($$result) => renderTemplate` <p>
Read the file back and <code>@acme/chain-core</code> is <code>^0.4.5</code>${" "}
(or already bumped by ncu if the policy allowed it); write it again
						immediately and nothing complains - no <code>FS_STALE_VERSION</code>, the
						re-emit made the second pass a no-op.
</p> <p>
Write inside <code>node_modules</code>/<code>.git</code>/<code>.dsh</code>${" "}
and the ledger gains one line, <code>skipped (excluded) ...</code>, while
						the file stays untouched.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "ONE GLOBAL LOG"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-ledger-log",
		"Title": "One global log",
		"Diagram": "One global log (logFile, default ~/.dsh/hook-dsh-governor-package.log) recording activation, exclusions, chain-pass results, and every update-stage dispatch - the activation line written by apply() so \"did it activate\" is answerable from the ledger alone."
	}, { "default": ($$result) => renderTemplate` <p>
One global log (<code>logFile</code>, default${" "} <code>~/.dsh/hook-dsh-governor-package.log</code>) records activation,
						exclusions, chain-pass results, and every update-stage dispatch.
</p> <p>
The activation line is written by <code>apply()</code> - "did it activate"
						must be answerable from the ledger alone.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govpkg-ledger-em-dashes",
		"Title": "The em dashes are part of the literal strings",
		"Diagram": "The registry-miss line ending with an em dash followed by chain pass skipped, the DONE/FAILED lines update: DONE + em dash + reason and update: FAILED + em dash + reason - byte-exact forms in the In Action excerpt, the em dashes living only in the example block."
	}, { "default": ($$result) => renderTemplate` <p>
The registry-miss line ends with an em dash followed by${" "} <code>chain pass skipped</code>; the DONE/FAILED lines are${" "} <code>update: DONE</code> + em dash + reason and <code>update: FAILED</code>${" "}
+ em dash + reason - byte-exact forms are in the In Action excerpt above.
</p> <p>
Those em dashes are part of the literal ledger strings, so they live only in
						the example block.
</p> ` })} </div> <div class="code-block">${LedgerStrings.join("\n")}</div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Related plugins",
		"Meta": `${Counts.Packages} TOTAL`
	})} <div class="grid grid--3"> ${Related.map((Plugin) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Plugin.Name,
		"Href": `/plugins/${Plugin.Name}/`,
		"Desc": Plugin.Desc,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`DSH FAMILY` })}` })}`)} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
License: CC0-1.0.<br>Full method contract: SCHEME.md.<br>TypeScript-first, built with
				@playform build (ESBuild + tsc type-check); the published artifact contains only the
				built output.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-governor-package.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-governor-package.astro";
var $$url = "/plugins/hook-dsh-governor-package";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-governor-package@_@astro
var page = () => hook_dsh_governor_package_exports;
//#endregion
export { page };
