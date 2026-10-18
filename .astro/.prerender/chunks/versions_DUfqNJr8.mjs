import { C as __exportAll, S as createComponent, _ as SuiteCount, b as $$BrandIcon, f as NormalizeFamily, n as $$Base, o as Counts, t as $$Badge, v as Totals, y as Versions } from "./Badge_CHteF_GF.mjs";
import { m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_jUwDEDCs.mjs";
import { t as $$Card } from "./Card_B96geFVd.mjs";
import { t as $$Concept } from "./Concept_DF89tVee.mjs";
import { t as $$PageHero } from "./PageHero_BDRlROTw.mjs";
import { t as $$SectionHeader } from "./SectionHeader_w9WBitnM.mjs";
//#region Source/pages/versions.astro
var versions_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Versions,
	file: () => $$file,
	url: () => $$url
});
var $$Versions = createComponent(($$result, $$props, $$slots) => {
	const Invariants = [
		{
			Id: "INVARIANT 01",
			Desc: "The twelve contracts are identical across the two trees; only the runtime plumbing differs."
		},
		{
			Id: "INVARIANT 02",
			Desc: "The smoke suites arbitrate both releases; every suite loads the real built Target of its bundle."
		},
		{
			Id: "INVARIANT 03",
			Desc: "The @-sentence identity holds in both trees: the scope stays @playform, the family/type marker leads."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Versions - @playform / DSH Family",
		"Description": "The dual engine distribution of the DeepSeek Harness Plugin Family: CLASSIC in plain TypeScript, EFFECT-TS on Effect-TS services and layers - same twelve contracts, same smokes, both at {Versions.Release}."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
ECOSYSTEM: @PLAYFORM
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"Size": "0.8em"
	})} CLASSIC` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"Size": "0.8em"
	})} EFFECT-TS` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Versions",
		"Sub": "The dual engine distribution: the same twelve contracts, built twice.\nCLASSIC in plain TypeScript, EFFECT-TS on Effect-TS services and layers - same behavior, same smokes, different runtime plumbing.\nBoth releases are at version {Versions.Release}."
	})} <section class="section"> <div class="grid grid--2"> ${renderComponent($$result, "Card", $$Card, { "Variant": "white" }, {
		"default": ($$result) => renderTemplate`  <p class="version-card__body">
The twelve contracts in plain TypeScript - classes, Maps and plain
						functions, zero runtime framework dependencies.<br>
The release built from
<strong style="font-weight: 500; color: var(--color-on-surface)">
Classic/
</strong>
and verified by its twelve smoke suites.
</p> <div class="version-card__facts"> ${renderComponent($$result, "Badge", $$Badge, {
			"Variant": "primary",
			"Dot": true
		}, { "default": ($$result) => renderTemplate`
PLAIN TYPESCRIPT
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`CLASSES · MAPS · FUNCTIONS` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`ZERO FRAMEWORK DEPS` })} ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`${Versions.Release}` })} </div> `,
		"head": ($$result) => renderTemplate`<div class="version-card__head"> <span class="version-card__title">CLASSIC</span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "typescript",
			"Size": "1.333em",
			"ClassName": "version-card__icon"
		})} </div>`
	})} ${renderComponent($$result, "Card", $$Card, { "Variant": "primary" }, {
		"default": ($$result) => renderTemplate`  <p class="version-card__body">
The same twelve contracts re-expressed on Effect-TS services and layers -
						same behavior, same smokes, different runtime plumbing.<br>
Built from
<strong style="font-weight: 500; color: var(--color-on-primary)">
EffectTS/
</strong>
.
</p> <div class="version-card__facts"> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`EFFECT-TS SERVICES &amp; LAYERS` })} ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`SAME TWELVE CONTRACTS` })} ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`SAME SMOKES` })} ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`${Versions.Release}` })} </div> `,
		"head": ($$result) => renderTemplate`<div class="version-card__head"> <span class="version-card__title">EFFECT-TS</span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "effect",
			"Size": "1.333em",
			"ClassName": "version-card__icon"
		})} </div>`
	})} </div> </section> <!-- Shared invariants --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Shared invariants",
		"Meta": "WHAT BOTH RELEASES HOLD"
	})} <div class="grid grid--3"> ${Invariants.map((Invariant) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "Muted": true }, { "default": ($$result) => renderTemplate` <p class="card__sentence">${Invariant.Id}</p> <p class="card__desc card__desc--muted">${Invariant.Desc}</p> ` })}`)} </div> </section> <!-- The smoke baseline --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The smoke baseline",
		"Meta": Totals.Meta()
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "versions-arbiter",
		"Title": "The smokes are the arbiter",
		"Diagram": "The twelve smoke suites loading the REAL built Target of their own bundle and asserting the ledger strings byte-identically - and the Effect-TS tree proving parity with these numbers before any swap-in."
	}, { "default": ($$result) => renderTemplate` <p>
Every suite loads the REAL built Target of its bundle and asserts the ledger
						strings byte-identically - the smokes are the arbiter after every change.
</p> <p>
The Effect-TS tree proves parity with these numbers before any swap-in.
</p> ` })} </div> <div class="grid grid--3"> ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-core",
		"Desc": SuiteCount(Counts.Core, "every helper with no fake context at all.")
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "plugin-dsh-factory",
		"Desc": SuiteCount(Counts.Factory, "a fake ctx + a REAL instance, every primitive, the Gate matrix, both GuardedWrite postures, the full Continue lifecycle.")
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-governor-package",
		"Desc": SuiteCount(Counts.Governor, "the gates, the chain pass, the update envelope, every ledger line byte-exact.")
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-pinner-package",
		"Desc": SuiteCount(Counts.Pinner, "the range law, the keep-list union, the refusals, every ledger line byte-exact.")
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`SMOKE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-governor-cargo",
		"Desc": SuiteCount(Counts.Cargo, "the TOML identification, the surgical pin, the full-version directive, the cargo bridge.")
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "rust",
		"Size": "0.8em"
	})} SMOKE
` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "The normalize family",
		"Desc": NormalizeFamily("the tables, the dispatch, the gate exemptions, the count lines.")
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`${Counts.Normalizers} SUITES` })}` })} </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "versions-caveat",
		"Title": "The honest caveat, learned live",
		"Diagram": "The split of proof: the smokes proving the mechanics, the live battery proving the wiring - with the three real defects marked where they were actually found."
	}, { "default": ($$result) => renderTemplate` <p>
The smokes prove the mechanics; the live battery proves the wiring.<br>
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
