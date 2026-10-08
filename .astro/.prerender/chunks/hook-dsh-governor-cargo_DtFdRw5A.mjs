import { C as __exportAll, S as createComponent, a as Links, b as $$BrandIcon, n as $$Base, o as Counts, r as Link, s as Families, t as $$Badge, y as Versions } from "./Badge_CHteF_GF.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_jUwDEDCs.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_DQw92EC9.mjs";
import { t as $$Card } from "./Card_B96geFVd.mjs";
import { t as $$Concept } from "./Concept_DF89tVee.mjs";
import { t as $$SectionHeader } from "./SectionHeader_w9WBitnM.mjs";
import { t as $$Terminal } from "./Terminal_DR1pHPfM.mjs";
import { t as $$CodeBlock } from "./CodeBlock_BKk4KZdJ.mjs";
import { t as $$Seams } from "./Seams_CCLTae3H.mjs";
//#region Source/pages/plugins/hook-dsh-governor-cargo.astro
var hook_dsh_governor_cargo_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshGovernorCargo,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshGovernorCargo = createComponent(($$result, $$props, $$slots) => {
	const FullVersion = [
		{
			Written: "1.0",
			Governed: "1.0.0"
		},
		{
			Written: "1",
			Governed: "1.0.0"
		},
		{
			Written: "0.1",
			Governed: "0.1.0"
		},
		{
			Written: "=1.0",
			Governed: "=1.0.0 (the exact form keeps its = prefix)"
		},
		{
			Written: "1.2-rc.1",
			Governed: "1.2.0-rc.1 (padded BEFORE the prerelease)"
		},
		{
			Written: "1.2.3-rc.1",
			Governed: "unchanged (prerelease preserved as authored)"
		},
		{
			Written: "1.2.3+build",
			Governed: "unchanged (build metadata preserved)"
		},
		{
			Written: ">=1.2, ~0.3, >1.0, 1.0, 2.0",
			Governed: "unchanged (complex ranges left as-is)"
		}
	];
	const CargoBefore = [
		"[dependencies]",
		"# the engine — keep the comment alive",
		"serde = \"1.0\"              # shorthand: must become 1.0.0",
		"tokio = { version = \"0.4.1\", features = [\"full\"] }  # chain-governed"
	];
	const CargoAfter = [
		"[dependencies]",
		"# the engine — keep the comment alive",
		"serde = \"1.0.0\"            # shorthand: must become 1.0.0",
		"tokio = { version = \"0.4.5\", features = [\"full\"] }  # chain-governed"
	];
	const LedgerExcerpt = [
		"[2026-10-03T09:15:22.411Z] activated (cargo flavor, logFile=~/.dsh/hook-dsh-governor-cargo.log, updateMode=cargo, cargoBin=/usr/local/bin/cargo, exclude=[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app], policyFile=(discovery), keepFile=(discovery))",
		"[2026-10-03T09:16:01.880Z] governed <project>/acme/engine/Cargo.toml → 42",
		"[2026-10-03T09:16:34.120Z] update stage dispatched for <project>/acme/engine (cargo via /usr/local/bin/cargo, built-in default policy)",
		"[2026-10-03T09:16:41.502Z] update: cargo upgrade --manifest-path <project>/acme/engine/Cargo.toml --exclude serde tokio → {\"exitCode\":0}",
		"[2026-10-03T09:16:41.503Z] update: DONE — pins bumped per policy"
	];
	const LedgerStrings = [
		"activated (cargo flavor, logFile=..., updateMode=cargo, cargoBin=..., exclude=[...], policyFile=(discovery), keepFile=(discovery))",
		"skipped (excluded) <path>",
		"no registry.json found for <path>",
		"governed <path> → <version>",
		"update stage dispatched for <dir> (cargo via ..., policy ...)",
		"update: cargo upgrade <argv> → {\"exitCode\":0}",
		"update: DONE / update: FAILED",
		"update: cargo-edit unavailable: <cause>"
	];
	const Related = [
		{
			Name: "hook-dsh-governor-package",
			Desc: "The npm sibling: same architecture, same API-awareness discipline, same silence - with the update stage driven by ncu."
		},
		{
			Name: "hook-dsh-pinner-package",
			Desc: "The keep-list sidecar ([pin-policy.json](Ours:Classic/packages/hook-dsh-pinner-package/Source/Function/Transform.ts)) is shared: discovery global keepFile - the file's own directory - registry-adjacent, the union."
		},
		{
			Name: "plugin-dsh-factory",
			Desc: "Gates, discovery, the guarded write, the refresh, the continuation, the effects, the schema and the namespaced UpdateKey come from the furnace."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-governor-cargo - @playform / DSH Family",
		"Description": `${Families.GovernorCargo} - the Cargo.toml flavor of the silent package.json governor: surgical TOML rewriting on the raw lines and cargo upgrade driven through the subprocess seam.`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`ROLE: GOVERNOR` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "rust",
		"Size": "0.8em"
	})} GATE: Cargo.toml
` })} </div> <section class="page-hero"> <h1 class="page-hero__title">hook-dsh-governor-cargo</h1> <p class="page-hero__sub"> ${Families.GovernorCargo} • ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} _The DeepSeek Harness
				Plugin Family for PlayForm._ The${" "} <strong>Cargo.toml flavor of the silent package.json governor</strong> - the same
				architecture, the same API-awareness discipline, the same silence toward the author,
				but for ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "rust" })} RUST manifests, with the update stage driven by
				the RUST-SIDE CLI (<code>cargo upgrade</code>, from cargo-edit): Rust does not
				co-opt into the TypeScript ecosystem, so there is no ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "npm" })}${" "}
npm-library equivalent - the update stage operates at the exclusionary level through
				the cargo CLI.<br>Chain canonicalization + full-version normalization + surgical TOML
				rewriting + <code>cargo upgrade --exclude</code> - comments survive.<br>Every claim
				below is live-verified (2026-10-03, live).
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, { "Command": "pnpm add @playform/hook-dsh-governor-cargo" })} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-governor-cargo</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Hook` })} <span class="workbench-controls__label">Runtime dep:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`smol-toml` })} <span class="workbench-controls__label">Injects:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`fs, pluginFactory` })} </div> </div> </section> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The profile wiring for this plugin - the bundles list, the patch entry and the restart -
			is on the <a href="/setup/">setup page</a>.
</p> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": "FAMILY POSITION: THE RUST-SIDED SIBLING"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-family-position",
		"Title": "The family position",
		"Diagram": `${Families.GovernorCargo} as a hook child of the plugin-dsh-factory service and the hook-dsh-core helpers - the Rust-sided sibling of the two npm governance hooks on the same fs/observed seam, one of three governance hooks, each gating on its own basename and writing its own ledger.`
	}, { "default": ($$result) => renderTemplate` <p> <strong>Family position</strong> (the @-sentence${" "} <strong>${Families.GovernorCargo}</strong>): a hook child of the${" "} <strong><a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a></strong> service and the${" "} <strong>hook-dsh-core</strong> helpers; the Rust-sided sibling of the two
						npm governance hooks on the same <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/observed</code></a> seam.
</p> <p>
One of three governance hooks, each gating on its own basename and writing
						its own ledger: governor-package (<code>package.json</code>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <code>governor.log</code>),
						pinner-package (<code>package.json</code>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <code>pinner.log</code>), and
						this bundle (<code>Cargo.toml</code>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}${" "}
hook-dsh-governor-cargo.log, chain pass bare caret /<code>=exact</code>${" "}
+ <code>cargo upgrade</code>).
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-disjoint",
		"Title": "The basenames are disjoint",
		"Diagram": "The cargo module never seeing a package.json event and the npm plugins never seeing a Cargo.toml event - one trigger law covering the whole machine, npm and Rust alike."
	}, { "default": ($$result) => renderTemplate` <p>
The basenames are disjoint: the cargo module never sees a${" "} <code>package.json</code> event and the npm plugins never see a${" "} <code>Cargo.toml</code> event.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-composition",
		"Title": "Composition semantics",
		"Diagram": "chain > strip > normalize (this module's precedence), keep-list wins over normalization - never over the chain."
	}, { "default": ($$result) => renderTemplate` <p>
Composition semantics: <strong>chain</strong>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <strong>strip</strong>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <strong>normalize</strong>${" "}
(this module's precedence), <strong>keep-list wins</strong> over
						normalization - never over the chain.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-factory-flavor",
		"Title": "Machinery-wise it is a factory flavor",
		"Diagram": "gates, discovery, the guarded write, the refresh, the continuation, the effects, the schema and the namespaced UpdateKey coming from [plugin-dsh-factory](Ours:Classic/packages/plugin-dsh-factory/Source); the policy loader and the suppression composer from [hook-dsh-core](Ours:Classic/packages/hook-dsh-core/Source); this bundle keeping the Cargo-specific residue: the TOML identification, the surgical pin, the full-version directive, and the cargo upgrade bridge."
	}, { "default": ($$result) => renderTemplate` <p>
Machinery-wise it is a <strong>factory flavor</strong>: gates, discovery,
						the guarded write, the refresh, the continuation, the effects, the schema
						and the namespaced UpdateKey come from <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a>; the policy loader
						and the suppression composer come from hook-dsh-core.
</p> <p>
This bundle keeps the Cargo-specific residue: the TOML identification, the
						surgical pin, the full-version directive, and the <code>cargo upgrade</code>${" "}
bridge.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-direct-govern",
		"Title": "The direct-govern registration",
		"Diagram": "Besides the fs/observed event path, its two steps registered with the factory&apos;s direct-govern registry at apply (Factory.RegisterGovern(\"Cargo.toml\", \"cargo\" | \"update\", ...)) - so the raw-write tool&apos;s per-call govern selection can drive the same chain + normalization pass and update stage directly through Factory.Govern."
	}, { "default": ($$result) => renderTemplate` <p>
Besides the <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}>fs/observed</a> event path, its two steps are registered with the
						factory's ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "chain" })} direct-govern registry at apply (
						Factory.RegisterGovern("Cargo.toml", "cargo" | "update", ...)).
</p> <p>
That lets the raw-write tool's per-call govern selection drive the same
						chain + normalization pass and update stage directly through <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Govern.ts"), "href")}>Factory.Govern</a>.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "BRIDGING THE RUST/TS BOUNDARY"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "fs/observed - the file observation event",
			What: "The same seam the two npm governance hooks use, gated on the Cargo.toml basename - the basenames are disjoint, so the cargo module never sees a package.json event and the npm plugins never see a Cargo.toml event.",
			Outcome: "One trigger law covers the whole machine, npm and Rust alike."
		},
		{
			Seam: "ctx.fs - the filesystem service (dsh-fs)",
			What: "The surgical TOML rewrite goes through [the factory's guarded write](Ours:Classic/packages/plugin-dsh-factory/Source/Function/Write.ts) (replaceIfVersion + the P4 sandbox fence); smol-toml is used for identification only, never a stringify, so comments survive byte-for-byte.",
			Outcome: "Governed manifests that still read exactly like the author's file."
		},
		{
			Seam: "ctx.subprocess (dsh-subprocess) - the Rust side",
			What: "The update stage crosses the Rust/TS boundary through the [subprocess seam](Harness:packages/subprocess/subprocess): cargo upgrade driven with a fully-specified argv, collect-mode output piped to the job ring and the ledger.",
			Outcome: "The only update tool Rust has, driven without shell PATH drift."
		},
		{
			Seam: "ctx.jobs - the jobs facility",
			What: "The update stage runs in the [jobs envelope](Harness:packages/jobs) (kind governor-update, unowned) when a controller serves the context, with the detached contained continuation as the probed fallback.",
			Outcome: "cargo upgrade never blocks or aborts the author's session."
		},
		{
			Seam: "The ledger / session",
			What: "A separate ledger (hook-dsh-governor-cargo.log) records activation, exclusions, chain-pass results, refusals and every update dispatch - including the exact cargo upgrade argv and its exit code.",
			Outcome: "The Rust-side pass is fully auditable from the ledger alone."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Problem",
		"Meta": "WHY THE CARGO GOVERNOR EXISTS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-problem",
		"Title": "A decorated TOML document and no in-process library path",
		"Diagram": "Rust manifests drifting the same way npm manifests do - but Cargo.toml being a TOML document people decorate with comments, and there being no in-process library path: the only update tool being the cargo CLI - a governor for Cargo.toml having to rewrite surgically (never a TOML stringify) and delegate its update stage across the Rust/TS boundary, while still hooking the same fs/observed event the npm hooks use, so one trigger law covers the whole machine."
	}, { "default": ($$result) => renderTemplate` <p>
Rust manifests drift the same way npm manifests do - but${" "} <code>Cargo.toml</code> is a TOML document people decorate with comments,
						and there is no in-process library path: the only update tool is the cargo
						CLI.
</p> <p>
A governor for <code>Cargo.toml</code> must therefore rewrite surgically
						(never a TOML stringify) and delegate its update stage across the Rust/TS
						boundary - while still hooking the same <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/observed</code></a> event the
						npm hooks use, so one trigger law covers the whole machine.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "How It Works",
		"Meta": "THE PIPELINE G = U ∘ P"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-chain-pass",
		"Title": "The G3 chain pass, planned in three steps",
		"Diagram": "The same G1/G2 gates and Stash seeding as the npm governor - the G3 chain pass parsing with smol-toml (IDENTIFICATION ONLY) and planning: 1. CHAIN - a dep in registry.effectiveLatest to the bare resolved version (Cargo&apos;s implicit caret) or =resolved with pinStyle \"exact\", always the FULL form (shorthand padded); 2. STRIP - strict-mode unknown deps; 3. NORMALIZE - every other simple version (the full-version directive below; the keep-list wins to byte-identical)."
	}, { "default": ($$result) => renderTemplate` <p>
The same G1/G2 gates and Stash seeding as the npm governor; the G3 chain
						pass parses with smol-toml (IDENTIFICATION ONLY) and plans:
</p> <ul class="concept-values"> <li> <strong>CHAIN</strong> - a dep in registry.effectiveLatest${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} the bare resolved version
							(Cargo's implicit caret) or <code>=resolved</code> with pinStyle
							"exact", always the FULL form (shorthand padded);
</li> <li> <strong>STRIP</strong> - strict-mode unknown deps;
</li> <li> <strong>NORMALIZE</strong> - every other simple version (the
							full-version directive below; the keep-list wins${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} byte-identical).
</li> </ul> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-surgical",
		"Title": "The surgical line-level edit on the raw text",
		"Diagram": "The rewrite being a surgical line-level edit on the raw text - comments, inline comments, blank lines and spacing surviving byte-for-byte - then GuardedWrite, the ledger governed <path> → <version>, then Refresh."
	}, { "default": ($$result) => renderTemplate` <p>
The rewrite is a <strong>surgical line-level edit on the raw text</strong> -
						comments, inline comments, blank lines and spacing survive byte-for-byte -
						then GuardedWrite ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} ledger${" "} <code>governed &lt;path&gt; → &lt;version&gt;</code>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} Refresh.
</p> <p>The G4 update stage crosses the Rust/TS boundary:</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "bash",
		"Source": [
			"cargo upgrade --manifest-path <Cargo.toml>",
			"          --exclude <crate> ...   (ONE flag per crate - the comma",
			"                                   form is silently IGNORED)",
			"          [-p <crate> ...] [--compatible/--incompatible/--pinned ...]",
			"",
			"exclude = policy.reject ∪ chain deps (the cordis-trap guard:",
			"cargo upgrade must never bump a chain-governed pin)"
		].join("\n")
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-full-version",
		"Title": "The full-version normalization directive",
		"Diagram": "No shorthand like \"1.0\" remaining in a governed Cargo.toml - every dependency version expanded to its MOST SPECIFIC form."
	}, { "default": ($$result) => renderTemplate` <p> <strong>The full-version normalization directive.</strong><br>No shorthand like
						"1.0" may remain in a governed Cargo.toml; every dependency version is
						expanded to its MOST SPECIFIC form:
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Written</th> <th>Governed</th> </tr> </thead> <tbody> ${FullVersion.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Written}</strong> </td> <td>${Row.Governed}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-toml-rewrite",
		"Title": "Why comments survive",
		"Diagram": "smol-toml (the ONE runtime dependency, carried by the bundle's own node_modules) used for PARSING ONLY - identification of the dep entries in [dependencies], [dev-dependencies], [build-dependencies], [target.'cfg(...)'.dependencies] (and its dev/build variants), and [workspace.dependencies] (handled natively) - the handled entry shapes, the never-rewritten shapes (path, git, inherited workspace = true), non-dependency sections NEVER touched, the refusal guard refusing any plan entry outside an identified dependency table, and Pin aborting (never a partial rewrite) if a planned entry cannot be located in the text."
	}, { "default": ($$result) => renderTemplate` <p>
smol-toml (the ONE runtime dependency, carried by the bundle's own
						node_modules) is used for PARSING ONLY - identification of the dep entries
						in <code>[dependencies]</code>, <code>[dev-dependencies]</code>,${" "} <code>[build-dependencies]</code>,${" "} <code>[target.'cfg(...)'.dependencies]</code> (and its dev/build variants),
						and <code>[workspace.dependencies]</code> (handled natively).
</p> <p>
Handled entry shapes: <code>name = "0.3.4"</code>,${" "} <code>name = ${"{ version = \"0.3.4\", ... }"}</code> (single line or
						pretty-printed), <code>[dependencies.name]</code> table style.<br>Never
						rewritten: <code>path = "..."</code>, <code>git = "..."</code>, and
						inherited entries (<code>workspace = true</code>).<br>Non-dependency sections
						are NEVER touched; <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-core/Source/Function/Refusal.ts"), "href")}>the refusal guard</a> refuses any plan entry outside an
						identified dependency table, and Pin aborts (never a partial rewrite) if a
						planned entry cannot be located in the text.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-rust-side",
		"Title": "The Rust side (live-verified)",
		"Diagram": "cargo 1.100.0-nightly + cargo-edit 0.13.13, resolved through cargoBin - --exclude being ONE flag per crate (the comma form silently IGNORED, the exact inverse of ncu&apos;s one-comma-argument reject list) - NO --exact flag in cargo-edit 0.13.13, exact pins enforced at the manifest level by the chain pass (pinStyle: \"exact\" to =resolved) - cargo upgrade preserving comments and formatting (it edits via toml_edit)."
	}, { "default": ($$result) => renderTemplate` <p> <strong>The Rust side (live-verified).</strong><br>cargo 1.100.0-nightly +
						cargo-edit 0.13.13, resolved through <code>cargoBin</code>.<br>${" "} <strong>--exclude is ONE flag per crate</strong> - the comma form is
						silently IGNORED, the exact inverse of ncu's one-comma-argument reject list.<br>${" "} <strong>There is NO --exact flag</strong> in cargo-edit 0.13.13 - exact pins
						are enforced at the manifest level by the chain pass (pinStyle: "exact"${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <code>=resolved</code>).
</p> <p> <code>cargo upgrade</code> preserves comments and formatting (it edits via
						toml_edit).
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-missing-edit",
		"Title": "When cargo-edit is NOT installed",
		"Diagram": "cargo upgrade exiting 101 with no such command: upgrade - the module logging update: cargo-edit unavailable: ... and failing gracefully."
	}, { "default": ($$result) => renderTemplate` <p>
If cargo-edit is NOT installed, <code>cargo upgrade</code> exits 101 with${" "} <code>no such command: upgrade</code> - the module logs${" "} <code>update: cargo-edit unavailable: ...</code> and fails gracefully.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "SCHEMA + DEFAULTS AT LOAD"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-config-schema",
		"Title": "The exported Config schema",
		"Diagram": "The exported Config schema validating and filling every default at load - new patch entries declared with insert:."
	}, { "default": ($$result) => renderTemplate` <p>
The exported Config schema validates and fills every default at load; new
						patch entries are declared with <code>insert:</code>. Full example:
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "yaml",
		"Source": [
			"- insert:",
			"      - id: hook-dsh-governor-cargo",
			"        name: \"@playform/hook-dsh-governor-cargo\"",
			"        config:",
			"            log: true",
			"            logFile: ~/.dsh/hook-dsh-governor-cargo.log # SEPARATE ledger - never the npm ledgers",
			"            updateCooldownMs: 3000",
			"            strict: false # strip unknown deps - explicit only, never a default",
			"            mutationTools: [write, edit, str_replace_editor]",
			"            maxUpdateFailures: 3 # circuit breaker: pause a dir's update stage",
			"            cargoBin: /usr/local/bin/cargo # absolute - host PATH != shell PATH",
			"            updateMode: cargo # the ONLY mode (the Rust-side CLI)",
			"            policyFile: \"\" # optional global update-policy.json",
			"            keepFile: \"\" # optional global pin-policy.json (the keep-list)",
			"            exclude: [node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app]"
		].join("\n")
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-policy-mapping",
		"Title": "The update-stage policy mapping",
		"Diagram": "The update-policy.json mapping (same discovery as the npm governor): reject to --exclude <crate> (ONE flag per crate); allow to -p <crate> (repeatable); incompatible/pinned/compatible to --incompatible/--pinned/--compatible; pinStyle with NO CLI equivalent (manifest-level via the chain pass); verifyCommand running after the upgrade via the subprocess seam, exit 127 non-fatal - the built-in default mirroring cargo upgrade&apos;s own semantics: no rejects, incompatible: \"ignore\", pinned: \"ignore\", pinStyle: \"caret\", no verifyCommand (never install implicitly)."
	}, { "default": ($$result) => renderTemplate` <p> <strong>Update-stage policy mapping</strong> (update-policy.json, same
						discovery as the npm governor): <code>reject</code>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}${" "} <code>--exclude &lt;crate&gt;</code> (ONE flag per crate);${" "} <code>allow</code> ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}${" "} <code>-p &lt;crate&gt;</code> (repeatable); <code>incompatible</code>/
<code>pinned</code>/<code>compatible</code>${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <code>--incompatible</code>/
<code>--pinned</code>/<code>--compatible</code>;<code>pinStyle</code> has NO
						CLI equivalent (manifest-level via the chain pass);${" "} <code>verifyCommand</code> runs after the upgrade via the subprocess seam,
						exit 127 non-fatal.
</p> <p>
The built-in default mirrors <code>cargo upgrade</code>'s own semantics: no
						rejects, incompatible: "ignore", pinned: "ignore", pinStyle: "caret", no
						verifyCommand (never install implicitly).
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In Action",
		"Meta": "ONE GOVERNED WRITE"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-in-action-setup",
		"Title": "One governed write",
		"Diagram": "The author saving a Cargo.toml with comments, a shorthand version, and a chain-governed dep."
	}, { "default": ($$result) => renderTemplate` <p>
One governed write.<br>The author saves a <code>Cargo.toml</code> with
						comments, a shorthand version, and a chain-governed dep:
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}Before - the Cargo.toml as the author wrote it
</p> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "toml",
		"Source": CargoBefore.join("\n")
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-in-action-surgical",
		"Title": "The surgical rewrite, same text",
		"Diagram": "With the nearest registry.json resolving tokio to 0.4.5 - the surgical rewrite producing the same text, same comments, same inline spacing."
	}, { "default": ($$result) => renderTemplate` <p>
With the nearest <code>registry.json</code> resolving tokio to 0.4.5, the
						surgical rewrite produces (same text, same comments, same inline spacing):
</p> ` })} </div> <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}After - the same file, surgically rewritten
</p> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "toml",
		"Source": CargoAfter.join("\n")
	})} <p class="page-hero__sub" style="margin: var(--space-md) 0">
The transcript shows only what the author wrote; the ledger shows the pass:
</p> <p class="section-kicker">The ledger lines for the same pass</p> <div class="code-block">${LedgerExcerpt.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-in-action-exclude",
		"Title": "The exclude protection, the re-write, and the graceful failure",
		"Diagram": "The policy's chain deps plus rejects becoming one --exclude flag per crate - serde and tokio protected from the CLI bump (tokio by the chain, serde by the normalization pass already writing its full form) - reading the file back to see the governed state, writing again immediately with nothing complaining (no FS_STALE_VERSION) - writing inside node_modules/.git/.dsh and the ledger gaining skipped (excluded) ... while the file stays untouched - removing cargo-edit and the pass failing gracefully: update: cargo-edit unavailable: ..., the manifest untouched, the breaker counting the failure."
	}, { "default": ($$result) => renderTemplate` <p>
Here the policy's chain deps plus rejects became one <code>--exclude</code>${" "}
flag per crate; <code>serde</code> and <code>tokio</code> are protected from
						the CLI bump - tokio by the chain, serde by the normalization pass already
						writing its full form.
</p> <p>
Read the file back to see the governed state; write it again immediately and
						nothing complains - no <code>FS_STALE_VERSION</code>.<br>Write inside${" "} <code>node_modules</code>/<code>.git</code>/<code>.dsh</code> and the ledger
						gains <code>skipped (excluded) ...</code> while the file stays untouched.<br>
Remove cargo-edit and the pass fails gracefully:${" "} <code>update: cargo-edit unavailable: ...</code>, the manifest untouched,
						the breaker counting the failure.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "ONE GLOBAL LOG"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-ledger-log",
		"Title": "One global log, SEPARATE from the npm ledgers",
		"Diagram": "One global log (logFile, default ~/.dsh/hook-dsh-governor-cargo.log - SEPARATE from the npm ledgers) recording activation, exclusions, chain-pass results, refusals, and every update-stage dispatch - the activation line written by apply() so \"did it activate\" is answerable from the ledger alone."
	}, { "default": ($$result) => renderTemplate` <p>
One global log (<code>logFile</code>, default${" "} <code>~/.dsh/hook-dsh-governor-cargo.log</code> - SEPARATE from the npm
						ledgers) records activation, exclusions, chain-pass results, refusals, and
						every update-stage dispatch.
</p> <p>
The activation line is written by <code>apply()</code> - "did it activate"
						must be answerable from the ledger alone.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "govcargo-ledger-em-dashes",
		"Title": "The em dashes are part of the literal strings",
		"Diagram": "The registry-miss line ending with an em dash followed by chain pass skipped, the DONE line update: DONE + em dash + reason - byte-exact forms in the In Action excerpt, the em dashes living only in the example block."
	}, { "default": ($$result) => renderTemplate` <p>
The registry-miss line ends with an em dash followed by${" "} <code>chain pass skipped</code>; the DONE line is <code>update: DONE</code>${" "}
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
License: CC0-1.0.<br>Full contract: SCHEME.md.<br>TypeScript-first, built with @playform
				build (ESBuild + tsc type-check); the published artifact contains only the built
				output.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-governor-cargo.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-governor-cargo.astro";
var $$url = "/plugins/hook-dsh-governor-cargo";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-governor-cargo@_@astro
var page = () => hook_dsh_governor_cargo_exports;
//#endregion
export { page };
