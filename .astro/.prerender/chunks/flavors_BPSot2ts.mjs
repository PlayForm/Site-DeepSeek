import { C as __exportAll, S as createComponent, a as Links, b as $$BrandIcon, h as Sprite, n as $$Base, o as Counts, r as Link, t as $$Badge } from "./Badge_CHteF_GF.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_jUwDEDCs.mjs";
import { t as $$Card } from "./Card_B96geFVd.mjs";
import { t as $$Concept } from "./Concept_DF89tVee.mjs";
import { t as $$PageHero } from "./PageHero_BDRlROTw.mjs";
import { t as $$SectionHeader } from "./SectionHeader_w9WBitnM.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_BnYKfk14.mjs";
//#region Source/pages/flavors.astro
var flavors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Flavors,
	file: () => $$file,
	url: () => $$url
});
var $$Flavors = createComponent(($$result, $$props, $$slots) => {
	const Flavors = [
		{
			Flavor: "DASH",
			Package: "hook-dsh-normalize-dash",
			Desc: "Normalizes the unicode dash family to ASCII hyphen-minus in model output streams."
		},
		{
			Flavor: "QUOTES",
			Package: "hook-dsh-normalize-quotes",
			Desc: "Maps the eight curly quote code points to their ASCII straight counterparts in model output streams."
		},
		{
			Flavor: "ELLIPSIS",
			Package: "hook-dsh-normalize-ellipsis",
			Desc: "Replaces the horizontal ellipsis (U+2026) with the plain ASCII three-dot sequence in model output streams."
		},
		{
			Flavor: "SPACES",
			Package: "hook-dsh-normalize-spaces",
			Desc: "Normalizes the unicode space family (Zs minus the ASCII space) to the plain space in model output streams."
		},
		{
			Flavor: "INVISIBLE",
			Package: "hook-dsh-normalize-invisible",
			Desc: "Removes the zero-width/invisible character family (soft hyphen, zero-width spaces and joiners, bidi controls, BOM) from model output streams."
		},
		{
			Flavor: "FULLWIDTH",
			Package: "hook-dsh-normalize-fullwidth",
			Desc: "Maps the entire FULLWIDTH FORMS range (U+FF01-U+FF5E) to its ASCII half-width counterparts in model output streams."
		},
		{
			Flavor: "FILE",
			Package: "hook-dsh-normalize-file",
			Desc: "The file-content normalizer: the normalize-file tool - the read, count, write pipeline applying all six transforms (dash, quotes, ellipsis, spaces, invisible, fullwidth) to a file already on disk, writing only when something changed."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Flavors & Roles - @playform / DSH Family",
		"Description": "The seven normalize flavors (dash, quotes, ellipsis, spaces, invisible, fullwidth, file) and the two governance roles (governor, pinner) of the DeepSeek Harness Plugin Family."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
ECOSYSTEM: @PLAYFORM
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${Counts.Normalizers} FLAVORS / ${Counts.Roles} ROLES
` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Flavors & Roles",
		"Sub": "Nine capabilities, two kinds.\nThe seven normalize flavors turn model output streams and project files into clean ASCII; the two governance roles keep the project's manifests pinned and governed under the author's control."
	})} <!-- The seven flavors --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The seven flavors",
		"Meta": "SIX STREAM FLAVORS + THE FILE TOOL"
	})} <div class="grid grid--2"> ${Flavors.map((Flavor) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Flavor.Package,
		"Href": `/plugins/${Flavor.Package}/`,
		"Desc": Flavor.Desc,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`<span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": Flavor.Flavor })} </span>` })}`)} </div> </section> <!-- The two roles --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The two roles",
		"Meta": "GOVERNANCE"
	})} <div class="grid grid--2"> ${renderComponent($$result, "Card", $$Card, { "Variant": "primary" }, { "default": ($$result) => renderTemplate` <div class="card__top"> <span class="card__name" style="color: var(--color-on-primary)">
ROLE: GOVERNOR
</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`hook-dsh-governor-*` })} </div> <p class="card__desc" style="color: var(--color-on-primary-container)">
The governance role: silently hooks${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}>
fs/observed
</a>${" "}
and rewrites the project's dependency pins to the governed versions - the
						package.json governor and the ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "rust" })} Cargo.toml governor.
</p> ` })} ${renderComponent($$result, "Card", $$Card, { "Variant": "primary" }, { "default": ($$result) => renderTemplate` <div class="card__top"> <span class="card__name" style="color: var(--color-on-primary)">
ROLE: PINNER
</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`hook-dsh-pinner-*` })} </div> <p class="card__desc" style="color: var(--color-on-primary-container)">
The pinning role: deterministically rewrites every ranged dependency version
						to its static version, protected by a pin-policy keep-list.
</p> ` })} </div> </section> <!-- The badge sprite --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The badge sprite",
		"Meta": `${Sprite.Badges} SHIELDS-STYLE SYMBOLS`
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "flavors-sprite",
		"Title": "Distinct badges, one unified family look",
		"Diagram": "The eleven shields-style symbols of the sprite at /assets/badges.svg - the label segment, the value segment and how a page references one symbol via &lt;use&gt;."
	}, { "default": ($$result) => renderTemplate` <p>
The standalone shields-style sprite lives at${" "} <span class="hook-tally">/assets/badges.svg</span>: label segment${" "} <span class="hook-tally">#003ec7</span> with white ink, value segment${" "} <span class="hook-tally">#eef0ff</span> with${" "} <span class="hook-tally">#0038b6</span> ink - blue and white only.
</p> <p>
Reference each symbol as
<span class="hook-tally">
&lt;use href="/assets/badges.svg#badge-classic"/&gt;
</span>
.
</p> ` })} </div> <div class="sprite-board"> <img src="/assets/badges.svg" alt="The eleven DSH Family badges"> </div> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/flavors.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/flavors.astro";
var $$url = "/flavors";
//#endregion
//#region \0virtual:astro:page:Source/pages/flavors@_@astro
var page = () => flavors_exports;
//#endregion
export { page };
