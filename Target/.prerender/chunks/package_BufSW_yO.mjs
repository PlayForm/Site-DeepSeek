import { _ as createComponent$1, a as Package, g as createAstro, h as $$PageHero, i as Kind, n as Count, r as Family, s as SelectFamily, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$Icon } from "./Icon_CYqR1_Kx.mjs";
import { t as $$VersionPill } from "./VersionPill_DlSRZapP.mjs";
import { t as $$Toolbar } from "./Toolbar_DlByC6KK.mjs";
import { createComponent, escape, ssr, ssrAttribute, ssrHydrationKey } from "solid-js/web";
import { For, Show, createEffect, createSignal, onMount } from "solid-js";
// Source/Component/Filter.tsx
var _tmpl$ = ["<p", " class=\"filter__empty\">No package matches this filter. Clear the search or pick All.</p>"];
var _tmpl$2 = [
	"<div",
	" class=\"filter\"><label class=\"filter__field\"><span class=\"filter__label\">Search</span><input class=\"filter__input\" type=\"search\" placeholder=\"Slug or what it does\"",
	"></label><div class=\"filter__field\"><span class=\"filter__label\">Release</span><div class=\"filter__options\">",
	"</div></div><div class=\"filter__field\"><span class=\"filter__label\">Kind</span><div class=\"filter__options\">",
	"</div></div><span class=\"filter__count\" aria-live=\"polite\"><!--$-->",
	"<!--/--> shown</span><!--$-->",
	"<!--/--></div>"
];
var _tmpl$3 = [
	"<button",
	" type=\"button\" class=\"filter__option\"",
	">",
	"</button>"
];
var Filter_default = (Props) => {
	const [Query, SetQuery] = createSignal("");
	const [Family, SetFamily] = createSignal("All");
	const [Kind, SetKind] = createSignal("All");
	const [Shown, SetShown] = createSignal(Props.Entry.length);
	onMount(() => {
		createEffect(() => {
			const Search = Query().trim().toLowerCase();
			const FamilyNow = Family();
			const KindNow = Kind();
			let Count = 0;
			for (const Card of document.querySelectorAll("[data-package]")) {
				const Match = (FamilyNow === "All" || Card.dataset["family"] === FamilyNow) && (KindNow === "All" || Card.dataset["kind"] === KindNow) && (Search === "" || (Card.dataset["summary"] ?? "").toLowerCase().includes(Search));
				Card.hidden = !Match;
				if (Match) Count += 1;
			}
			for (const Section of document.querySelectorAll("[data-group]")) Section.hidden = Section.querySelectorAll("[data-package]:not([hidden])").length === 0;
			SetShown(Count);
		});
	});
	return ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("value", escape(Query(), true), false), escape(createComponent(For, {
		get each() {
			return ["All", ...Props.Family];
		},
		children: (Entry) => ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("aria-pressed", escape(Family(), true) === escape(Entry, true), false), escape(Entry))
	})), escape(createComponent(For, {
		get each() {
			return ["All", ...Props.Kind];
		},
		children: (Entry) => ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("aria-pressed", escape(Kind(), true) === escape(Entry, true), false), escape(Entry))
	})), escape(Shown()), escape(createComponent(Show, {
		get when() {
			return Shown() === 0;
		},
		get children() {
			return ssr(_tmpl$, ssrHydrationKey());
		}
	})));
};
// Source/Component/PackageCard.astro
createAstro("https://deepseek.playform.cloud");
var $$PackageCard = createComponent$1(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PackageCard;
	const { Package } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a class="package-card"${addAttribute(Package.Href, "href")} data-package${addAttribute(Package.Slug, "data-slug")}${addAttribute(Package.Kind, "data-kind")}${addAttribute(Package.Family, "data-family")}${addAttribute(`${Package.Slug} ${Package.Summary}`, "data-summary")}> <span class="package-card__top"> <span class="package-card__identity"> ${renderComponent($$result, "Icon", $$Icon, {
		"Name": Package.Slug,
		"Size": 56
	})} <span class="package-card__name">${Package.Slug}</span> </span> ${renderComponent($$result, "VersionPill", $$VersionPill, {
		"Version": Package.Version,
		"Private": Package.Private
	})} </span> <span class="package-card__summary">${Package.Summary}</span> <span class="package-card__foot"> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Package.Kind,
		"Tone": "accent"
	})} ${renderComponent($$result, "Badge", $$Badge, { "Label": Package.Family })} <span class="package-card__count">${Package.Tests} tests</span> </span> </a>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/PackageCard.astro", void 0);
// Source/pages/package.astro
var package_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Package,
	file: () => $$file,
	url: () => $$url
});
var $$Package = createComponent$1(($$result, $$props, $$slots) => {
	const Group = Family.map((Release) => ({
		Release,
		Entry: SelectFamily(Release)
	}));
	const Catalogue = Package.map((Entry) => ({
		Slug: Entry.Slug,
		Kind: Entry.Kind,
		Family: Entry.Family
	}));
	const Kinds = [
		["hook", "Listens on a harness event and changes what happens next."],
		["plugin", "Adds tools and a bundle the host loads."],
		["lib", "A shared library the other packages import."],
		["client", "A UI surface in the harness panel."],
		["base", "The shared base the Effect-TS packages build on."]
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Package",
		"Description": `All ${Count.All} packages: ${Count.Classic} in Classic and ${Count.EffectTS} in Effect-TS.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Two releases",
		"Title": "Package",
		"Lede": `${Count.All} total: ${Count.Classic} in Classic, ${Count.EffectTS} in Effect-TS.`
	})} ${maybeRenderHead($$result)}<section class="section"> <div class="section__body"> ${renderComponent($$result, "Toolbar", $$Toolbar, {
		"Label": "Filter",
		"Count": `${Count.All} package`,
		"Action": [{
			Href: Route.Reference,
			Label: "Reference table"
		}]
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Filter", Filter_default, {
		"Entry": Catalogue,
		"Family": Family,
		"Kind": Kind,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/Filter.tsx",
		"client:component-export": "default"
	})} ` })} ${Group.map((Item) => renderTemplate`<section class="section" data-group> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": Item.Release })} <div class="section__body grid"> ${Item.Entry.map((Entry) => renderTemplate`${renderComponent($$result, "PackageCard", $$PackageCard, { "Package": Entry })}`)} </div> </section>`)} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Kind" })} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "The five package kinds",
		"Head": ["Kind", "What it is"],
		"Row": Kinds
	})} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/package.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/package.astro";
var $$url = "/package";
// \0virtual:astro:page:Source/pages/package@_@astro
var page = () => package_exports;
export { page };
