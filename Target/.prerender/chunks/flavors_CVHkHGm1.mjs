import { D as __exportAll, E as createComponent, a as Links, g as Sprite, n as $$Base, r as Link, s as Counts, t as $$Badge, x as $$BrandIcon } from "./Badge_epMRbWWn.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_ajB5vkMW.mjs";
import { t as $$Card } from "./Card_Burs0ZFi.mjs";
import { t as $$Concept } from "./Concept_BsgF5ENb.mjs";
import { t as $$PageHero } from "./PageHero_ecgFcnX1.mjs";
import { t as $$SectionHeader } from "./SectionHeader_Dq_7HTHT.mjs";
import { t as $$Compare } from "./Compare_Djs2PE6H.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_KBZ5UEUR.mjs";
//#region Source/pages/flavors.astro
var flavors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Flavors,
	file: () => $$file,
	url: () => $$url
});
var $$Flavors = createComponent(($$result, $$props, $$slots) => {
	const ChainRaw = ["Plan review — phase one: the config “drift” is real… wait for it… Balance\xA0sheet sync — latency​budget﻿ — １２３."];
	const ChainClean = ["Plan review - phase one: the config \"drift\" is real... wait for it... Balance sheet sync - latency budget - 123."];
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
			Desc: "The file-content normalizer: the normalize-file tool. The read, count, write pipeline applies ALL six transforms (dash, quotes, ellipsis, spaces, invisible, fullwidth) to a file already on disk, writing ONLY when something changed."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Flavors & Roles - DSH Family @ PlayForm",
		"Description": "The seven normalize flavors (dash, quotes, ellipsis, spaces, invisible, fullwidth, file), the two governance roles (governor, pinner) and the two guardians (the ccr compressor, the tool-coach) of the DeepSeek Harness Plugin Family."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
ECOSYSTEM: @PLAYFORM
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${Counts.Normalizers} FLAVORS / ${Counts.Roles} ROLES / ${Counts.Groups.Guardians} GUARDIANS
` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Flavors & Roles",
		"Sub": "Eleven capabilities, three kinds.\nThe seven normalize flavors turn model output streams and project files into clean ASCII. The two governance roles keep the project's manifests pinned and governed under the author's control. The two guardians watch the model itself - the ccr compressor shrinking oversized tool output, the tool-coach coaching the terminal calls."
	})} <!-- The seven flavors --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The seven flavors",
		"Meta": "SIX STREAM FLAVORS + THE FILE TOOL"
	})} <div class="grid grid--2"> ${Flavors.map((Flavor) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Flavor.Package,
		"Href": `/plugins/${Flavor.Package}/`,
		"Desc": Flavor.Desc,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`<span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": Flavor.Flavor })} </span>` })}`)} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
Each flavor now shares a granular <code>scopes</code> surface.
				Conversation / reasoning / toolInput / toolResults / files / batch: EVERY scope
				volatile and hot-flippable through <code>loader/volatile-update</code>.
				Two opt-in <strong>overpass arms</strong> come on top.
				The tool-results arm on <code>tools/post-execute</code>.
				The step-batch arm on <code>agent/pre-step</code>, driven by the${" "} <code>normalize-overpass</code> command.
</p> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The consumer-side companion on that same waterfall is the${" "} <a href="/plugins/hook-dsh-ccr/">ccr hook</a> - the compressor whose${" "} <code>&lt;&lt;&lt;CCR:</code> marker guard makes ANY load order safe.
</p> </section> <!-- One stream through the whole family: the chain showcase - every
			flavor's character class in one raw line, the clean line after the
			fixed-order chain. Drag the handle to compare. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "One stream through the whole family",
		"Meta": "THE SIX-FLAVOR CHAIN"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The six stream flavors compose into ONE chain.
				A raw line carries EVERY family's anomaly - an em dash, curly quotes, an
				ellipsis, a no-break space, a zero-width space and a BOM, full-width digits.
				And the clean line after the pass.
</p> ${renderComponent($$result, "Compare", $$Compare, {
		"ID": "flavors-chain",
		"Flavor": "all",
		"Raw": ChainRaw,
		"Clean": ChainClean,
		"RawLabel": "Raw - every family's anomaly",
		"CleanLabel": "Clean - after the six-flavor chain"
	})} <p class="section-kicker" style="margin-top: var(--space-md)"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}The order is FIXED by the family: dashes${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
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
	})} fullwidth - the same chain the
				raw-write tool's <code>normalize: true</code> runs.
</p> </section> <!-- The roles: the two governance roles + the guardian/coach family --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The roles",
		"Meta": "GOVERNANCE + THE GUARDIANS"
	})} <div class="grid grid--2"> ${renderComponent($$result, "Card", $$Card, { "Variant": "primary" }, { "default": ($$result) => renderTemplate` <div class="card__top"> <span class="card__name" style="color: var(--color-on-primary)">
ROLE: GOVERNOR
</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`hook-dsh-*-governor` })} </div> <p class="card__desc" style="color: var(--color-on-primary-container)">
The governance role: silently hooks${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code class="code-token">fs/observed</code></a>${" "}
and rewrites the project's dependency pins to the governed versions - the
<span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-json",
		"Size": "0.9em"
	})}package.json</span> governor and the ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "rust" })}${" "} <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-toml",
		"Size": "0.9em"
	})}Cargo.toml</span> governor.
</p> ` })} ${renderComponent($$result, "Card", $$Card, { "Variant": "primary" }, { "default": ($$result) => renderTemplate` <div class="card__top"> <span class="card__name" style="color: var(--color-on-primary)">
ROLE: PINNER
</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`hook-dsh-*-pinner` })} </div> <p class="card__desc" style="color: var(--color-on-primary-container)">
The pinning role: deterministically rewrites EVERY ranged dependency version
						to its static version, protected by a pin-policy keep-list.
</p> ` })} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
And the third role family, the <strong>guardians</strong>.
				Where governance rewrites the author's files, a guardian watches the
<em>model</em>.
</p> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The${" "} <a href="/plugins/hook-dsh-ccr/">ccr hook</a> compresses oversized tool output on
				the <code>tools/post-execute</code> waterfall.
				The <a href="/plugins/hook-dsh-tool-coach/">tool-coach</a> judges EVERY terminal
				call through a four-tier coaching ladder.
				It catches the terminal edits neither governance role can see
				(<code>fs/observed</code> fires ONLY on tool-layer writes).
</p> </section> <!-- The badge sprite --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The badge sprite",
		"Meta": `${Sprite.Badges} SHIELDS-STYLE SYMBOLS`
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "flavors-sprite",
		"Title": "Distinct badges, one unified family look",
		"Diagram": "The eleven shields-style symbols of the sprite at /assets/badges.svg - the label segment, the value segment and how a page references one symbol via <use>."
	}, { "default": ($$result) => renderTemplate` <p>
The standalone shields-style sprite lives at${" "} <span class="hook-tally">/assets/badges.svg</span>.
						Label segment <span class="hook-tally">#003ec7</span> with white ink.
						Value segment <span class="hook-tally">#eef0ff</span> with${" "} <span class="hook-tally">#0038b6</span> ink - blue and white ONLY.
</p> <p>
Reference EACH symbol as
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
