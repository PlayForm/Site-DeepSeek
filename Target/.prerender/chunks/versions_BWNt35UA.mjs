import { D as __exportAll, E as createComponent, b as Versions, n as $$Base, p as NormalizeFamily, s as Counts, t as $$Badge, v as SuiteCount, x as $$BrandIcon, y as Totals } from "./Badge_BknqmmDW.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$Card } from "./Card_Bvew4r-r.mjs";
import { t as $$Concept } from "./Concept_BlA-OTUj.mjs";
import { t as $$PageHero } from "./PageHero_D-sW3VB4.mjs";
import { t as $$SectionHeader } from "./SectionHeader_Gm7_aB0i.mjs";
//#region Source/pages/versions.astro
var versions_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Versions,
	file: () => $$file,
	url: () => $$url
});
var $$Versions = createComponent(($$result, $$props, $$slots) => {
	const Invariants = [
		{
			ID: "INVARIANT 01",
			Desc: "The fifteen contracts are identical across the two trees; only the runtime plumbing differs."
		},
		{
			ID: "INVARIANT 02",
			Desc: "The smoke suites arbitrate both releases; every suite loads the real built Target of its bundle."
		},
		{
			ID: "INVARIANT 03",
			Desc: "The @-sentence identity holds in both trees: the scope stays @playform, the family/type marker leads."
		},
		{
			ID: "INVARIANT 04",
			Desc: "Every knob of the two new plugins is volatile: the ccr gate's thresholds and the tool-coach's whole schema land on the next judged call through loader/volatile-update, without remounting."
		},
		{
			ID: "INVARIANT 05",
			Desc: "The smokes cover the new suites: the ccr suite (146 checks) and the tool-coach suite (129 checks) run in both trees, byte-asserting the same ledger strings."
		}
	];
	const OperatingSet = [{
		State: "OPERATING",
		Tree: "CLASSIC",
		Detail: "@playform/hook-dsh-* x 14 + @playform/plugin-dsh-factory",
		Version: Versions.Release,
		Note: "plain TypeScript - classes, Maps, plain functions; the ccr compressor and the tool-coach guardian included"
	}, {
		State: "OPERATING",
		Tree: "EFFECT-TS",
		Detail: "@playform/ets-hook-dsh-* x 14 + @playform/ets-plugin-dsh-factory + @playform/ets-base-dsh",
		Version: Versions.Release,
		Note: `Effect-TS services & layers - effect pinned at ${Versions.Effect}; the base @playform/ets-base-dsh carries the shared plumbing; the ets ccr and tool-coach twins included`
	}];
	const ChangelogSource = "the monorepo CHANGELOG.md - verbatim (plus this page's newer entries)";
	const Changelog = `## 0.0.1

### Added

- The CCR hook (hook-dsh-ccr) with the tools/post-execute compression gate:
  the type-aware one-line previews and the <<<CCR:hash|type|size>>> retrieval
  markers, the registered ccr_retrieve tool, auto-expand, the sha256-24 LRU
  store, and the phase-4 context engine (implemented, off by default).
- The tool-coach guardian (hook-dsh-tool-coach) with the four-tier coaching
  ladder over the terminal tool calls: tier-0 ledger, tier-1 live-fetched
  notes (ctx.tools.schemas()), tier-2 the persistent system-prompt section,
  tier-3 the optional enforce deny tier.
- The granular volatile scopes for the normalize family
  (conversation/reasoning/toolInput/toolResults/files/batch +
  toolResultsExempt) with the live loader/volatile-update toggles.
- The overpass mechanism: the tools/post-execute and agent/pre-step arms and
  the normalize-overpass command (files sweep owned by normalize-file).
- The initial release of the DeepSeek Harness Plugin Family for PlayForm:
  the twelve packages in the three implementations (the Boilerplate
  reference, the Classic release, the Effect-TS release), the Site, and
  the archived fixtures.
- The governance trio (governor, pinner, cargo) with the direct-govern
  fold and the fine-grained raw-write flags.
- The stream-normalization family (dash, quotes, ellipsis, spaces,
  invisible, fullwidth) with the three-way tool-args gate and the
  raw-marker opt-out.
- The file-content normalizer (normalize-file) and the raw-write tool
  with the normalize/govern selections.
- The shared factory machinery (the write executor, the govern fold,
  the P5 storage journal, the activation composer).
- The site (the static landing with the products, versions, flavors,
  models, setup, case study, and workbench pages).
- The skills (instructional-writing, plugin-system, smoke-writing) and
  the documentation tree.`;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Versions - DSH Family @ PlayForm",
		"Description": `The release and operating-state overview of the DeepSeek Harness Plugin Family: what is operating now (the dual trees at ${Versions.Release}, effect pinned ${Versions.Effect}), what changed at this release, and the shared invariants - not a listing.`,
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main" data-astro-cid-y2dyriig> <div class="eyebrow-row" data-astro-cid-y2dyriig> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true,
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`
RELEASE &amp; OPERATING STATE
` })} ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-y2dyriig": true }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"Size": "0.8em",
		"data-astro-cid-y2dyriig": true
	})} CLASSIC` })} ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-y2dyriig": true }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"Size": "0.8em",
		"data-astro-cid-y2dyriig": true
	})} EFFECT-TS` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Versions",
		"Sub": `This page is the release and operating-state overview - not a listing.\nIt answers three questions: what is operating right now (the dual trees and the Effect-TS pin), what changed at this release (the record below), and what both trees hold (the invariants).\nThe plugin pages list the products; this page states the state of the family.\nBoth releases are at version ${Versions.Release}.`,
		"data-astro-cid-y2dyriig": true
	}, { "sub-1": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "sub-1" }, { "default": ($$result) => renderTemplate`
The dual engine distribution: the same fifteen contracts, built twice -${" "}${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"data-astro-cid-y2dyriig": true
	})}${" "}CLASSIC in plain TypeScript,${" "}${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"data-astro-cid-y2dyriig": true
	})}${" "}EFFECT-TS on Effect-TS services and layers - same behavior, same smokes, different runtime plumbing.
` })}` })} <!-- THE OPERATING SET - the signature block: what is operating NOW --> <section class="section section--opset" data-astro-cid-y2dyriig> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The operating set",
		"Meta": "WHAT IS OPERATING NOW",
		"data-astro-cid-y2dyriig": true
	})} <div class="opset" data-astro-cid-y2dyriig> <div class="opset__spine" data-astro-cid-y2dyriig>OPERATING SET · ${Versions.Release}</div> ${OperatingSet.map((Row) => renderTemplate`<div${addAttribute(`opset__row opset__row--${Row.State === "OPERATING" ? "live" : "pending"}`, "class")} data-astro-cid-y2dyriig> <span class="opset__state" data-astro-cid-y2dyriig>${Row.State}</span> <span class="opset__tree" data-astro-cid-y2dyriig>${Row.Tree}</span> <span class="opset__detail" data-astro-cid-y2dyriig>${Row.Detail}</span> <span class="opset__version" data-astro-cid-y2dyriig>${Row.Version}</span> <span class="opset__note" data-astro-cid-y2dyriig>${Row.Note}</span> </div>`)} <div class="opset__foot" data-astro-cid-y2dyriig>
STATE: DUAL TREE · IDENTICAL FOURTEEN CONTRACTS · ${Totals.Meta()} </div> </div> </section> <!-- THE RECORD - the changelog as the page's narrative spine --> <section class="section" data-astro-cid-y2dyriig> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The record",
		"Meta": "THE CHANGELOG",
		"data-astro-cid-y2dyriig": true
	})} <div class="record" data-astro-cid-y2dyriig> <div class="record__cite" data-astro-cid-y2dyriig> <span class="record__source" data-astro-cid-y2dyriig>${ChangelogSource}</span> <span class="record__also" data-astro-cid-y2dyriig>Site/CHANGELOG.md: &ldquo;Initial version&rdquo;</span> </div> <pre class="record__text" data-astro-cid-y2dyriig>${Changelog}</pre> <p class="record__wording" data-astro-cid-y2dyriig>
The shipped entries above are byte-exact from the repository file; the four
					entries on top are the guardians-era additions this page maintains first -
					this page maintains the changelog, so the release history lives where the
					operating state lives.
</p> </div> </section> <!-- Shared invariants - the state rail, not the listing boxes --> <section class="section" data-astro-cid-y2dyriig> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Shared invariants",
		"Meta": "WHAT BOTH RELEASES HOLD",
		"data-astro-cid-y2dyriig": true
	})} <ul class="state-rail" data-astro-cid-y2dyriig> ${Invariants.map((Invariant) => renderTemplate`<li class="state-rail__entry" data-astro-cid-y2dyriig> <span class="state-rail__id" data-astro-cid-y2dyriig>${Invariant.ID}</span> <p class="state-rail__desc" data-astro-cid-y2dyriig>${Invariant.Desc}</p> </li>`)} </ul> </section> <!-- The smoke baseline --> <section class="section" data-astro-cid-y2dyriig> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The smoke baseline",
		"Meta": "THE ARBITER OF THE OPERATING STATE",
		"data-astro-cid-y2dyriig": true
	})} <div class="concept-list" data-astro-cid-y2dyriig> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "versions-arbiter",
		"Title": "The smokes are the arbiter",
		"Diagram": "The fourteen smoke suites loading the REAL built Target of their own bundle and asserting the ledger strings byte-identically - and the Effect-TS tree proving parity with these numbers before any swap-in.",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate` <p data-astro-cid-y2dyriig>
Every suite loads the REAL built Target of its bundle and asserts the ledger
						strings byte-identically - the smokes are the arbiter after every change.
</p> <p data-astro-cid-y2dyriig>
The Effect-TS tree proves parity with these numbers before any swap-in.
</p> ` })} </div> <div class="grid grid--3" data-astro-cid-y2dyriig> ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-core",
		"Desc": SuiteCount(Counts.Core, "every helper with no fake context at all."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "plugin-dsh-factory",
		"Desc": SuiteCount(Counts.Factory, "a fake ctx + a REAL instance, every primitive, the Gate matrix, both GuardedWrite postures, the full Continue lifecycle."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-package-governor",
		"Desc": SuiteCount(Counts.Governor, "the gates, the chain pass, the update envelope, every ledger line byte-exact."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-package-pinner",
		"Desc": SuiteCount(Counts.Pinner, "the range law, the keep-list union, the refusals, every ledger line byte-exact."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-cargo-governor",
		"Desc": SuiteCount(Counts.Cargo, "the TOML identification, the surgical pin, the full-version directive, the cargo bridge."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "rust",
		"Size": "0.8em",
		"data-astro-cid-y2dyriig": true
	})} SMOKE
` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "The normalize family",
		"Desc": NormalizeFamily("the tables, the dispatch, the gate exemptions, the count lines."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`${Counts.Normalizers} SUITES` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-ccr",
		"Desc": SuiteCount(Counts.CCR, "the gate order, the marker bytes, the round-trip retrieval, the evictions, the journal, and the context-engine decision math."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-tool-coach",
		"Desc": SuiteCount(Counts.Coach, "the four tiers, the cooldown and window math, the live fetch fallback, and the tracing-hygiene mode."),
		"data-astro-cid-y2dyriig": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate`SMOKE` })}` })} </div> <div class="concept-list" data-astro-cid-y2dyriig> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "versions-caveat",
		"Title": "The honest caveat, learned live",
		"Diagram": "The split of proof: the smokes proving the mechanics, the live battery proving the wiring - with the three real defects marked where they were actually found.",
		"data-astro-cid-y2dyriig": true
	}, { "default": ($$result) => renderTemplate` <p data-astro-cid-y2dyriig>
The smokes prove the mechanics; the live battery proves the wiring.</p> <p data-astro-cid-y2dyriig>
The real
						defects - the patch-layer shadowing, the P5 v2 open, the version-guard race -
						were found live, not by the smokes.
</p> ` })} </div> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/versions.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/versions.astro";
var $$url = "/versions";
//#endregion
//#region \0virtual:astro:page:Source/pages/versions@_@astro
var page = () => versions_exports;
//#endregion
export { page };
