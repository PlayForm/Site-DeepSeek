import { _ as createComponent$1, a as Package, c as SelectKind, d as SeamHref, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as BehaviorFor } from "./Behavior_C7i5cYpI.mjs";
import { n as Term, t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Toolbar } from "./Toolbar_DlByC6KK.mjs";
import { createComponent, escape, ssr, ssrAttribute, ssrHydrationKey } from "solid-js/web";
import { For, Show, createMemo, createSignal } from "solid-js";
// Source/Component/Search.tsx
var _tmpl$ = ["<p", " class=\"search__empty\">Nothing matches. Try a shorter word.</p>"];
var _tmpl$2 = [
	"<div",
	" class=\"search\"><label class=\"search__field\"><span class=\"search__label\">Search</span><input class=\"search__input\" type=\"search\" placeholder=\"Package, page, or term\"",
	"></label><span class=\"search__count\" aria-live=\"polite\"><!--$-->",
	"<!--/--> result</span><div class=\"search__body\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></div></div>"
];
var _tmpl$3 = [
	"<section",
	" class=\"search__group\"><h2 class=\"search__heading\">",
	"</h2><ul class=\"search__list\">",
	"</ul></section>"
];
var _tmpl$4 = [
	"<li",
	" class=\"search__row\"><a class=\"search__link\"",
	">",
	"</a><span class=\"search__detail\">",
	"</span></li>"
];
var Search_default = (Props) => {
	const [Query, SetQuery] = createSignal("");
	const Results = createMemo(() => {
		const Search = Query().trim().toLowerCase();
		if (Search === "") return Props.Entry.slice(0, 8);
		return Props.Entry.filter((Item) => `${Item.Title} ${Item.Detail}`.toLowerCase().includes(Search)).slice(0, 20);
	});
	const Groups = createMemo(() => [
		"Package",
		"Page",
		"Term"
	].map((Name) => ({
		Name,
		Item: Results().filter((Result) => Result.Group === Name)
	})));
	return ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("value", escape(Query(), true), false), escape(Results().length), escape(createComponent(For, {
		get each() {
			return Groups();
		},
		children: (Group) => createComponent(Show, {
			get when() {
				return Group.Item.length > 0;
			},
			get children() {
				return ssr(_tmpl$3, ssrHydrationKey(), escape(Group.Name), escape(createComponent(For, {
					get each() {
						return Group.Item;
					},
					children: (Item) => ssr(_tmpl$4, ssrHydrationKey(), ssrAttribute("href", escape(Item.Href, true), false), escape(Item.Title), escape(Item.Detail))
				})));
			}
		})
	})), escape(createComponent(Show, {
		get when() {
			return Results().length === 0;
		},
		get children() {
			return ssr(_tmpl$, ssrHydrationKey());
		}
	})));
};
// Source/Library/Search.server.ts
var Page = [
	{
		Title: "Catalogue",
		Detail: "Every package, filtered by release and kind.",
		Href: Route.Package,
		Group: "Page"
	},
	{
		Title: "Showcase",
		Detail: "The bundles the harness ships, with their categories.",
		Href: Route.Showcase,
		Group: "Page"
	},
	{
		Title: "Behavior",
		Detail: "What the hooks change about a session, seam by seam.",
		Href: Route.Behavior,
		Group: "Page"
	},
	{
		Title: "Workbench",
		Detail: "The live panel a client package renders.",
		Href: Route.Workbench,
		Group: "Page"
	},
	{
		Title: "Intervention",
		Detail: "What each plugin changes: the seam, the model, and the disk.",
		Href: Route.Intervention,
		Group: "Page"
	},
	{
		Title: "Composition",
		Detail: "How the plugins compose: the order they run at each seam.",
		Href: Route.Composition,
		Group: "Page"
	},
	{
		Title: "Trace",
		Detail: "What one turn leaves in the session log, and what a reload keeps.",
		Href: Route.Trace,
		Group: "Page"
	},
	{
		Title: "Tutorial",
		Detail: "One turn, three moments, shown twice: default beside the family.",
		Href: Route.Tutorial,
		Group: "Page"
	},
	{
		Title: "Turn",
		Detail: "The harness with none of our plugins: twelve stages, twenty seams.",
		Href: Route.Turn,
		Group: "Page"
	},
	{
		Title: "Observatory",
		Detail: "The dependency graph, laid out and queryable.",
		Href: Route.Observatory,
		Group: "Page"
	},
	{
		Title: "Timeline",
		Detail: "The releases in order, one line per version.",
		Href: Route.Timeline,
		Group: "Page"
	},
	{
		Title: "Setup",
		Detail: "How to install the harness and run it.",
		Href: Route.Setup,
		Group: "Page"
	},
	{
		Title: "Reference",
		Detail: "The vocabulary, one word per concept.",
		Href: Route.Reference,
		Group: "Page"
	},
	{
		Title: "Case study",
		Detail: "One project, wired end to end with the hooks.",
		Href: Route.CaseStudy,
		Group: "Page"
	},
	{
		Title: "Marketplace",
		Detail: "The bundle index a reader can install from.",
		Href: Route.Marketplace,
		Group: "Page"
	},
	{
		Title: "Connect",
		Detail: "Where to reach the project and its channels.",
		Href: Route.Connect,
		Group: "Page"
	}
];
var PackageEntry = Package.map((Record) => ({
	Title: Record.Slug,
	Detail: `${Record.Summary} (${Record.Kind}, ${Record.Family})`,
	Href: Record.Href,
	Group: "Package"
}));
var TermEntry = Object.values(Term).map((Record) => ({
	Title: Record.Name,
	Detail: Record.Meaning,
	Href: Route.Reference,
	Group: "Term"
}));
var GroupOrder = [
	"Package",
	"Page",
	"Term"
];
var SeamEntry = [...new Set(SelectKind("hook").flatMap((Record) => BehaviorFor(Record.Slug)?.Seam ?? []))].map((Seam) => ({
	Title: Seam,
	Detail: `The hook that declares the ${Seam} seam, with its effect and its knobs.`,
	Href: SeamHref(Seam),
	Group: "Page"
}));
var Search = [
	...PackageEntry,
	...Page,
	...SeamEntry,
	...TermEntry
].sort((Left, Right) => GroupOrder.indexOf(Left.Group) - GroupOrder.indexOf(Right.Group) || Left.Title.localeCompare(Right.Title));
// Source/pages/search.astro
var search_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Search,
	file: () => $$file,
	url: () => $$url
});
var $$Search = createComponent$1(($$result, $$props, $$slots) => {
	const PackageCount = Search.filter((Entry) => Entry.Group === "Package").length;
	const PageCount = Search.filter((Entry) => Entry.Group === "Page").length;
	const TermCount = Search.filter((Entry) => Entry.Group === "Term").length;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Search",
		"Description": `Search the ${PackageCount} package, the site page, and the ${TermCount} term of the vocabulary.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Search",
		"Title": "Search"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${PackageCount}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "package" })}, ${PageCount}&nbsp;page, and ${TermCount}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "term" })}, searched at once.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> <div class="section__body"> ${renderComponent($$result, "Toolbar", $$Toolbar, {
		"Label": "Search",
		"Count": `${Search.length} entry`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Search", Search_default, {
		"Entry": Search,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/Search.tsx",
		"client:component-export": "default"
	})} ` })} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/search.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/search.astro";
var $$url = "/search";
// \0virtual:astro:page:Source/pages/search@_@astro
var page = () => search_exports;
export { page };
