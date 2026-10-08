import { C as __exportAll, S as createComponent, a as Links, b as $$BrandIcon, d as Migration, n as $$Base, o as Counts, r as Link, s as Families, t as $$Badge, v as Totals, x as renderScript } from "./Badge_CHteF_GF.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_jUwDEDCs.mjs";
import { t as $$Card } from "./Card_B96geFVd.mjs";
import { t as $$Concept } from "./Concept_DF89tVee.mjs";
import { t as $$PageHero } from "./PageHero_BDRlROTw.mjs";
import { t as $$SectionHeader } from "./SectionHeader_w9WBitnM.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_BnYKfk14.mjs";
//#region Source/pages/plugins.astro
var plugins_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Plugins,
	file: () => $$file,
	url: () => $$url
});
var $$Plugins = createComponent(($$result, $$props, $$slots) => {
	const Core = [{
		Name: "hook-dsh-core",
		Tone: "primary",
		Role: "ROLE: CORE",
		Tags: "core factory service hook",
		Sentence: Families.Core,
		Desc: "The pure commonalities of the family (dependency-free in CLASSIC; effect-backed in EFFECT-TS): the section lists, the exclusion segments, the suppression composer, the policy loader, the refusal guard and the normalize/Stream machinery.",
		Install: "pnpm add @playform/hook-dsh-core"
	}, {
		Name: "plugin-dsh-factory",
		Tone: "primary",
		Role: "ROLE: FACTORY",
		Tags: "core factory service plugin",
		Sentence: Families.Factory,
		Desc: "The family's first service: the ledger, the exclusion match, the discovery, the keep-list union, the gate set, the version-guarded fenced write, the refresh, the detached contained continuation, the State builder, the wiring, the effects, the schema factory and the probe-once seam.",
		Install: "pnpm add @playform/plugin-dsh-factory"
	}];
	const Governance = [
		{
			Name: "hook-dsh-governor-package",
			Role: "ROLE: GOVERNOR",
			Tags: "governor manifest package hook",
			Sentence: Families.GovernorPackage,
			Desc: "The silent package.json governor: hooks [fs/observed](Harness:packages/fs/fs/src/index.ts), rewrites chain-governed pins to the effective registry's resolved versions, and runs the update stage as a detached, contained continuation.",
			Install: "pnpm add @playform/hook-dsh-governor-package"
		},
		{
			Name: "hook-dsh-pinner-package",
			Role: "ROLE: PINNER",
			Tags: "pinner manifest package hook",
			Sentence: Families.PinnerPackage,
			Desc: "The silent package.json version pinner: hooks [fs/observed](Harness:packages/fs/fs/src/index.ts) and deterministically rewrites every ranged dependency version to its static version, protected by a [pin-policy keep-list](Ours:Classic/packages/hook-dsh-pinner-package/Source/Function/Transform.ts).",
			Install: "pnpm add @playform/hook-dsh-pinner-package"
		},
		{
			Name: "hook-dsh-governor-cargo",
			Role: "ROLE: GOVERNOR",
			Tags: "governor cargo manifest hook",
			Sentence: Families.GovernorCargo,
			Desc: "The Cargo.toml governor: the Rust-sided flavor of the package governor - surgical chain-pin rewrites on the raw TOML lines and cargo upgrade driven through the [subprocess seam](Harness:packages/subprocess/subprocess).",
			Install: "pnpm add @playform/hook-dsh-governor-cargo"
		}
	];
	const Normalize = [
		{
			Name: "hook-dsh-normalize-dash",
			Flavor: "DASH",
			Tags: "normalize flavor dash stream hook",
			Sentence: Families.Dash,
			Desc: "The dash flavor: normalizes the unicode dash family to ASCII hyphen-minus in model output streams, mirroring the hermes regex at the injection point hermes lacks.",
			Install: "pnpm add @playform/hook-dsh-normalize-dash"
		},
		{
			Name: "hook-dsh-normalize-quotes",
			Flavor: "QUOTES",
			Tags: "normalize flavor quotes stream hook",
			Sentence: Families.Quotes,
			Desc: "The quotes flavor: maps the eight curly quote code points to their ASCII straight counterparts in model output streams.",
			Install: "pnpm add @playform/hook-dsh-normalize-quotes"
		},
		{
			Name: "hook-dsh-normalize-ellipsis",
			Flavor: "ELLIPSIS",
			Tags: "normalize flavor ellipsis stream hook",
			Sentence: Families.Ellipsis,
			Desc: "The ellipsis flavor: replaces the horizontal ellipsis (U+2026) with the plain ASCII three-dot sequence in model output streams.",
			Install: "pnpm add @playform/hook-dsh-normalize-ellipsis"
		},
		{
			Name: "hook-dsh-normalize-spaces",
			Flavor: "SPACES",
			Tags: "normalize flavor spaces stream hook",
			Sentence: Families.Spaces,
			Desc: "The spaces flavor: normalizes the unicode space family (Zs minus the ASCII space) to the plain space in model output streams.",
			Install: "pnpm add @playform/hook-dsh-normalize-spaces"
		},
		{
			Name: "hook-dsh-normalize-invisible",
			Flavor: "INVISIBLE",
			Tags: "normalize flavor invisible stream hook",
			Sentence: Families.Invisible,
			Desc: "The invisible flavor: removes the zero-width/invisible character family (soft hyphen, zero-width spaces and joiners, bidi controls, BOM) from model output streams.",
			Install: "pnpm add @playform/hook-dsh-normalize-invisible"
		},
		{
			Name: "hook-dsh-normalize-fullwidth",
			Flavor: "FULLWIDTH",
			Tags: "normalize flavor fullwidth stream hook",
			Sentence: Families.Fullwidth,
			Desc: "The fullwidth flavor: maps the entire FULLWIDTH FORMS range (U+FF01-U+FF5E) to its ASCII half-width counterparts in model output streams.",
			Install: "pnpm add @playform/hook-dsh-normalize-fullwidth"
		},
		{
			Name: "hook-dsh-normalize-file",
			Flavor: "FILE",
			Tags: "normalize flavor file stream hook tool",
			Sentence: Families.File,
			Desc: "The file-content normalizer: the normalize-file tool - the read, count, write pipeline applying all six transforms to a file already on disk, writing only when something changed.",
			Install: "pnpm add @playform/hook-dsh-normalize-file"
		}
	];
	const Registry = [
		...Core.map((Plugin, Index) => ({
			Seq: `0${Index + 1}`,
			Coordinate: `@playform/${Plugin.Name}`,
			Sentence: Plugin.Sentence,
			Rules: "Sections • exclusions • suppression • policy"
		})),
		...Governance.map((Plugin, Index) => ({
			Seq: `0${Index + 3}`,
			Coordinate: `@playform/${Plugin.Name}`,
			Sentence: Plugin.Sentence,
			Rules: "Manifest • chain pins • update stages"
		})),
		...Normalize.map((Plugin, Index) => ({
			Seq: String(Index + 6).padStart(2, "0"),
			Coordinate: `@playform/${Plugin.Name}`,
			Sentence: Plugin.Sentence,
			Rules: "Stream gate • single-pass transform"
		}))
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Plugins - @playform / DSH Family",
		"Description": "The twelve plugins of the DeepSeek Harness Plugin Family for PlayForm, each with its @-sentence identity and its pnpm install snippet."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
ECOSYSTEM: @PLAYFORM
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${Counts.Packages} PLUGINS` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Plugins",
		"Sub": "The twelve TypeScript plugins of the DeepSeek Harness Plugin Family, each one a verified, smoke-arbitrated bundle.\nThe release identity follows the reversed hierarchical naming - the \"@-sentence\" identity: the scope stays @playform, and the family/type marker leads, so a plugin name reads as a sentence about what it is."
	})} <!-- Registry filter bar: search + filter chips + live count --> <section class="section" style="margin-bottom: var(--space-md)"> <div class="filter-bar"> <span class="filter-bar__label">Filter registry:</span> <input class="filter-bar__input" type="search" placeholder="Search the twelve plugins by name, role or flavor..." aria-label="Filter plugins" data-filter> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "outline",
		"Dot": true
	}, { "default": ($$result) => renderTemplate` <span data-count>${Counts.Packages} RESULTS</span> ` })} </div> <div class="filter-chips" data-chips role="group" aria-label="Plugin family filters"> <button type="button" class="filter-chip is-active" data-filter-chip="all" aria-pressed="true">
ALL
</button> <button type="button" class="filter-chip" data-filter-chip="core" aria-pressed="false">
CORE &amp; FACTORY
</button> <button type="button" class="filter-chip" data-filter-chip="governor" aria-pressed="false">
GOVERNOR
</button> <button type="button" class="filter-chip" data-filter-chip="pinner" aria-pressed="false">
PINNER
</button> <button type="button" class="filter-chip" data-filter-chip="normalize" aria-pressed="false">
NORMALIZE
</button> <button type="button" class="action--ghost" data-reset>
Reset filters
</button> </div> <div class="registry-telemetry"> <span class="registry-telemetry__count"> <span class="live-dot"></span> <span data-count-text>${Counts.Packages} PACKAGES</span> </span> <span>DSH-REGISTRY</span> </div> <div class="filter-empty" data-empty> <span class="filter-empty__title">No packages match the active filters</span> <span>Broaden the search query or reset the filter chips above.</span> </div> </section> <!-- Core & Factory --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Core & Factory",
		"Meta": `${Counts.Groups.Core} PLUGINS`
	})} <div class="grid grid--2"> ${Core.map((Plugin) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Plugin.Name,
		"Href": `/plugins/${Plugin.Name}/`,
		"NameTone": Plugin.Tone,
		"Sentence": Plugin.Sentence,
		"Desc": Plugin.Desc,
		"Install": Plugin.Install,
		"Tags": Plugin.Tags,
		"Copy": Plugin.Install
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"Variant": "outline"
	}, { "default": ($$result) => renderTemplate`${Plugin.Role}` })}` })}`)} </div> </section> <!-- Governance --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Governance",
		"Meta": `${Counts.Groups.Governance} PLUGINS`
	})} <div class="grid grid--3"> ${Governance.map((Plugin) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Plugin.Name,
		"Href": `/plugins/${Plugin.Name}/`,
		"Sentence": Plugin.Sentence,
		"Desc": Plugin.Desc,
		"Install": Plugin.Install,
		"Tags": Plugin.Tags,
		"Copy": Plugin.Install
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"Variant": "active"
	}, { "default": ($$result) => renderTemplate`${Plugin.Role}` })}` })}`)} </div> </section> <!-- Normalize --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Normalize",
		"Meta": `${Counts.Groups.Normalize} PLUGINS - SIX STREAM FLAVORS + THE FILE TOOL`
	})} <div class="grid grid--3"> ${Normalize.map((Plugin) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Plugin.Name,
		"Href": `/plugins/${Plugin.Name}/`,
		"Sentence": Plugin.Sentence,
		"Desc": Plugin.Desc,
		"Install": Plugin.Install,
		"Tags": Plugin.Tags,
		"Copy": Plugin.Install
	}, { "badge": ($$result) => renderTemplate`<span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, {
		"Flavor": Plugin.Flavor,
		"Variant": "flavor",
		"Icon": true
	})} </span>` })}`)} </div> </section> <!-- Registered pipeline manifest (the ontological registry) --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Registered pipeline manifest plugins",
		"Meta": "ONTOLOGICAL REGISTRY"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Deterministic transform pipeline sequence executing over the active PlayForm
				runtime.
</p> <div class="table-wrap"> <table class="table" data-selectable> <thead> <tr> <th>Seq</th> <th>Plugin Coordinate</th> <th>Ontology @-Sentence</th> <th>Target Rules</th> <th>Action</th> </tr> </thead> <tbody> ${Registry.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Seq}</strong> </td> <td> <strong>${Row.Coordinate}</strong> </td> <td>${Row.Sentence}</td> <td>${Row.Rules}</td> <td> <span class="hook-tally">ACTIVE</span> </td> </tr>`)} </tbody> </table> </div> </section> <!-- The integration surface --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where the family operates",
		"Meta": "THE HARNESS SEAMS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-seams",
		"Title": "The seven seams the twelve live on",
		"Diagram": "The twelve plugins attaching to the DeepSeek Harness through the fixed seam set - the [model stream waterfall](Harness:packages/llm/llm/src/index.ts), the [filesystem events](Harness:packages/fs/fs/src/index.ts), the tool layer, the [subprocess seam](Harness:packages/subprocess/subprocess), the [jobs envelope](Harness:packages/jobs), the [storage domain](Harness:packages/storage/storage-domain) and the session ledger - with the DeepSeek internals each seam works through."
	}, { "default": ($$result) => renderTemplate` <p>
Every plugin operates inside the ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} DeepSeek
						Harness through a fixed set of seams - the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}>
model stream waterfall
</a>
, the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}>
filesystem events
</a>
, the tool layer, the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/subprocess/subprocess"), "href")}>
subprocess seam
</a>
, the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/jobs"), "href")}>jobs envelope</a>,
						the${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/storage/storage-domain"), "href")}>
storage domain
</a>${" "}
and the session ledger.
</p> <p>
This is where the twelve live, and the DeepSeek internals they work through:
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Seam</th> <th>DeepSeek internal</th> <th>Who operates it</th> </tr> </thead> <tbody> <tr> <td> <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}> <strong>llm/stream</strong> </a>${" "}
(the model stream waterfall)
</td> <td> <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm"), "href")}>
@deepseek-ai/dsh-llm
</a>${" "}
(type-only stream vocabulary)
</td> <td>The six stream flavors</td> </tr> <tr> <td> <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}> <strong>fs/observed + fs/write-intent</strong> </a> </td> <td>
ctx.fs -${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs"), "href")}>dsh-fs</a>${" "}
(local, sandbox, observation-policy)
</td> <td>
The three governance hooks; the write executor behind every tool
								write
</td> </tr> <tr> <td> <strong>The tool layer</strong> (write / edit / str_replace_editor +
								the registered tools)
</td> <td> <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/tool-fs"), "href")}>
dsh-tool-fs
</a>
; ctx.tools.register
</td> <td>raw-write (normalize + govern flags); normalize-file</td> </tr> <tr> <td> <strong>ctx.subprocess</strong> </td> <td> <a${addAttribute(Link(Links.DeepSeekHarness, "packages/subprocess/subprocess"), "href")}>
dsh-subprocess
</a>${" "}
(fully-specified argv, no shell PATH drift)
</td> <td>The cargo governor's cargo upgrade; the ncu bin mode</td> </tr> <tr> <td> <strong>ctx.jobs</strong> </td> <td>
The jobs envelope (kind governor-update) + the detached fallback
</td> <td>The two governors' update stages</td> </tr> <tr> <td> <a${addAttribute(Link(Links.DeepSeekHarness, "packages/storage/storage-domain"), "href")}> <strong>The storage domain</strong> </a> </td> <td>ctx.get("storageDomain") - the package_governance v2 records</td> <td>Factory Journal; the normalize-file normalized events</td> </tr> <tr> <td> <strong>Sessions / the ledgers</strong> </td> <td>The durable ledger files ([&lt;ISO&gt;] &lt;message&gt;)</td> <td>All twelve, through the factory's Append</td> </tr> </tbody> </table> </div> </section> <!-- The smoke baseline (the arbiter) --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The smoke baseline",
		"Meta": Totals.Meta()
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-smoke-arbiter",
		"Title": "The smokes are the arbiter",
		"Diagram": "Every suite loading the REAL built Target of its bundle and asserting the ledger strings byte-identically - the Effect-TS tree held to the same bar, its swap-in gated on its own parity."
	}, { "default": ($$result) => renderTemplate` <p>
The smokes are the arbiter: every suite loads the REAL built Target of its
						bundle and asserts the ledger strings byte-identically.
</p> <p>
The Effect-TS tree is held to the same bar - its swap-in happens only after
						its own smokes prove parity with these numbers.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Suite</th> <th>Checks</th> <th>Suite</th> <th>Checks</th> </tr> </thead> <tbody> <tr> <td> <strong>hook-dsh-core</strong> </td> <td>${Counts.Core.Classic}</td> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-dash/Source"), "href")}>
hook-dsh-normalize-dash
</a> </strong> </td> <td>${Counts.Dash.Classic}</td> </tr> <tr> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>
plugin-dsh-factory
</a> </strong> </td> <td>${Counts.Factory.Classic}</td> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-quotes/Source"), "href")}>
hook-dsh-normalize-quotes
</a> </strong> </td> <td>${Counts.Quotes.Classic}</td> </tr> <tr> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-governor-package/Source"), "href")}>
hook-dsh-governor-package
</a> </strong> </td> <td>${Counts.Governor.Classic}</td> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-ellipsis/Source"), "href")}>
hook-dsh-normalize-ellipsis
</a> </strong> </td> <td>${Counts.Ellipsis.Classic}</td> </tr> <tr> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-pinner-package/Source"), "href")}>
hook-dsh-pinner-package
</a> </strong> </td> <td>${Counts.Pinner.Classic}</td> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-spaces/Source"), "href")}>
hook-dsh-normalize-spaces
</a> </strong> </td> <td>${Counts.Spaces.Classic}</td> </tr> <tr> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-governor-cargo/Source"), "href")}>
hook-dsh-governor-cargo
</a> </strong> </td> <td>${Counts.Cargo.Classic}</td> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-invisible/Source"), "href")}>
hook-dsh-normalize-invisible
</a> </strong> </td> <td>${Counts.Invisible.Classic}</td> </tr> <tr> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-file/Source"), "href")}>
hook-dsh-normalize-file
</a> </strong> </td> <td>${Counts.File.Classic}</td> <td> <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-fullwidth/Source"), "href")}>
hook-dsh-normalize-fullwidth
</a> </strong> </td> <td>${Counts.Fullwidth.Classic}</td> </tr> </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-smoke-counts",
		"Title": "The checks are the CLASSIC counts",
		"Diagram": `The CLASSIC totals per suite against the EFFECT-TS totals on the same contracts - core ${Counts.Core.EffectTS}, factory ${Counts.Factory.EffectTS}, governor ${Counts.Governor.EffectTS} - summing to ${Totals.EffectTS} vs Classic's ${Totals.Classic}.`
	}, { "default": ($$result) => renderTemplate` <p> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "typescript" })} The checks are the CLASSIC counts; the${" "} ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "effect" })} EFFECT-TS suites add coverage on the same
						contracts (core ${Counts.Core.EffectTS}, factory ${Counts.Factory.EffectTS},
						governor ${Counts.Governor.EffectTS} - ${Totals.EffectTS} total vs Classic's${" "} ${Totals.Classic}).
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-smoke-wiring",
		"Title": "Why both exist",
		"Diagram": "The two proofs side by side - the smokes proving the mechanics, the live battery proving the wiring - with the defects that were found live, not by the smokes."
	}, { "default": ($$result) => renderTemplate` <p>
The smokes prove the mechanics; the live battery proves the wiring - every
						defect below was found live, not by the smokes, which is exactly why both
						exist.
</p> ` })} </div> </section> <!-- The failure cases that shaped the family --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The failure cases that shaped it",
		"Meta": "FOUND LIVE · FIXED · VERIFIED"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-failure-shadowing",
		"Title": "The patch-layer config shadowing",
		"Diagram": "The bundle's [cordis.patch.yml](Ours:Classic/packages/plugin-dsh-factory/cordis.patch.yml) patch config replacing the entry config wholesale - the schema defaults (mutationTools) shadowed in deployment, the raw-write's fs/observed never triggering the chain - and the fix adding raw-write to the three patch layers with the LIVE effective config verified from the bundle layers."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`LIVE-FOUND · FIXED` })} <p>
The bundle${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/cordis.patch.yml"), "href")}>
cordis.patch.yml
</a>${" "}
patch config REPLACES the entry config wholesale - the schema defaults
						(mutationTools) were shadowed in deployment, so the raw-write's fs/observed
						never triggered the chain.
</p> <p>
Solved: add raw-write to the three patch layers, and verify the LIVE
						effective config from the bundle layers - the Config inspect provider
						projects the schema, not the resolved config.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-failure-race",
		"Title": "The same-observed-version guard race",
		"Diagram": "The multi-step direct-govern fold with every step writing the SAME observed version - only the first write succeeding, the later steps failing the stale-version check silently - and the fix: the sequential fold awaiting each step's chain with the chain pass statting the target before its write."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`LIVE-FOUND · FIXED` })} <p>
In the multi-step direct-govern fold every step wrote with the SAME observed
						version - only the first write could succeed, the later steps failed the
						stale-version check silently.
</p> <p>
Solved:${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Govern.ts"), "href")}>
the sequential fold
</a>${" "}
awaits each step's chain, and the chain pass stats the target before its
						write (the fresh-version pattern) - the fold converges in any step order.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-failure-storage",
		"Title": "The P5 v2 storage open failure",
		"Diagram": `The package_governance v2 domain open failing SILENTLY against the v1 file on the exact-equality version check - and the fix: per-record layout, compatibleVersions [${Migration.CompatibleVersions.join(", ")}], backup-and-skip for invalid records, and a loud failure line.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`LIVE-FOUND · FIXED` })} <p>
The package_governance${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Journal.ts"), "href")}>
v2 domain
</a>${" "}
open failed SILENTLY against the v1 file (the exact-equality version check)
						- the silence made it undiagnosable.
</p> <p>
Solved: per-record layout + ${Migration.Sentence()} + backup-and-skip for
						invalid records + a loud failure line - live-confirmed on the next boot.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-failure-reprocessing",
		"Title": "The cross-module re-processing bound",
		"Diagram": "A governed write re-firing [fs/observed](Harness:packages/fs/fs/src/index.ts) with the interlock re-entering the listeners by design - and the three bounds keeping the re-pass safe: the Stash idempotence gate, the P3/U2 refresh re-emitting with the same actor, and the live battery proving bounded, self-canonicalizing re-passes."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`BOUNDED BY DESIGN · VERIFIED LIVE` })} <p>
A governed write re-fires fs/observed - the interlock re-enters the
						listeners by design.
</p> <p>
Kept safe by construction: the Stash idempotence gate turns self re-entries
						into no-ops, the P3/U2 refresh re-emits with the same actor, and the live
						battery proves the re-pass is bounded and self-canonicalizing (governed +
						pinned converge).
</p> ` })} </div> </section> <!-- The architecture in action --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The architecture in action",
		"Meta": "HOOKS · DELEGATIONS · INVERSIONS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-arch-hooks",
		"Title": "Hooks - where the family attaches",
		"Diagram": "The three attachment points: the [llm/stream waterfall wrap](Harness:packages/llm/llm/src/index.ts) (next() first, options untouched, per-chunk), the [fs/observed listeners](Harness:packages/fs/fs/src/index.ts) (sync, after content is on disk, fired by the tool layer only), and the tool registrations into the agent's toolset ([raw-write](Ours:Classic/packages/hook-dsh-normalize-dash/Source), [normalize-file](Ours:Classic/packages/hook-dsh-normalize-file/Source))."
	}, { "default": ($$result) => renderTemplate` <p>
The${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}>
llm/stream
</a>${" "}
waterfall wrap - next() first, options untouched, per-chunk.
</p> <p>
The${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}>
fs/observed
</a>${" "}
listeners - sync, after content is on disk, fired by the tool layer only.<br>
And the tool registrations into the agent's toolset: raw-write,
						normalize-file.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-arch-delegations",
		"Title": "Delegations - who does the work",
		"Diagram": "The work splitting across the family: the [factory's Direct-govern steps](Ours:Classic/packages/plugin-dsh-factory/Source) (per basename, the raw-write govern selection), the [core's Dispatch/Settle envelope builder](Ours:Classic/packages/hook-dsh-core/Source) (a new update stage reducing to a child runner plus strings), the [subprocess seam](Harness:packages/subprocess/subprocess) for the external tools, and the Effect-TS services mirroring the same seams."
	}, { "default": ($$result) => renderTemplate` <p>
The factory's Direct-govern steps (per basename, the raw-write govern
						selection) and the core's Dispatch/Settle envelope builder - a new update
						stage reduces to a child runner plus strings.
</p> <p>
The${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/subprocess/subprocess"), "href")}>
subprocess seam
</a>${" "}
carries the external tools, and the Effect-TS services mirror the same
						seams.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "plugins-arch-inversions",
		"Title": "Inversions - who owns what",
		"Diagram": "The ownership boundaries: the Dependencies injection builders (every collection, child stage and string injected), the module-owned ledger strings (the byte-identical contract), the consumers bringing their own metal while the factory pours the mold, and the smokes as the arbiter after every change."
	}, { "default": ($$result) => renderTemplate` <p>
The Dependencies injection builders - every collection, child stage and
						string injected - and the module-owned ledger strings, the byte-identical
						contract.
</p> <p>
The consumers bring their own metal while the factory pours the mold, and
						the smokes are the arbiter after every change.
</p> ` })} </div> </section> </main> ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins.astro";
var $$url = "/plugins";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins@_@astro
var page = () => plugins_exports;
//#endregion
export { page };
