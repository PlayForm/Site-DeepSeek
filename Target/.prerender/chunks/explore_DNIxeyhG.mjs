import { _ as createComponent$1, h as $$PageHero, t as $$Base, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
/* empty css                   */
import { t as Catalogue_server_default } from "./Catalogue.server_CFgQkYiI.mjs";
import { createComponent, escape, ssr, ssrAttribute, ssrHydrationKey, ssrStyleProperty } from "solid-js/web";
import { For, Show, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";
// Source/Component/Graph/Explorer.tsx
var _tmpl$ = [
	"<div",
	" class=\"explorer\"><div class=\"explorer__toolbar\"><label class=\"explorer__field\"><span class=\"explorer__label\">Search</span><input class=\"explorer__input\" type=\"search\" placeholder=\"Package\"",
	"></label><div class=\"explorer__field\"><span class=\"explorer__label\">Release</span><div class=\"explorer__options\">",
	"</div></div><div class=\"explorer__field\"><label class=\"explorer__label\" for=\"explorer-layout\">Layout</label><select id=\"explorer-layout\" class=\"explorer__select\"",
	">",
	"</select></div><label class=\"explorer__toggle\"><input type=\"checkbox\"",
	"><span>Label</span></label><ul class=\"explorer__legend\">",
	"</ul><span class=\"explorer__count\"><!--$-->",
	"<!--/--> node</span></div><div class=\"explorer__body\"><div class=\"explorer__canvas\" role=\"img\" aria-label=\"",
	"\"></div><aside class=\"explorer__inspector\" aria-live=\"polite\">",
	"</aside></div></div>"
];
var _tmpl$2 = [
	"<button",
	" type=\"button\" class=\"explorer__option\"",
	">",
	"</button>"
];
var _tmpl$3 = [
	"<option",
	">",
	"</option>"
];
var _tmpl$4 = [
	"<li",
	"><span class=\"explorer__swatch\" style=\"",
	"\" aria-hidden=\"true\"></span><!--$-->",
	"<!--/--></li>"
];
var _tmpl$5 = ["<p", " class=\"explorer__empty\">Select a node to read the package. The arrow runs from a dependency to the package that requires it.</p>"];
var _tmpl$6 = [
	"<div",
	" class=\"explorer__detail\"><p class=\"explorer__kicker\"><!--$-->",
	"<!--/--> / <!--$-->",
	"<!--/--></p><a class=\"explorer__name\"",
	">",
	"</a><dl class=\"explorer__facts\"><div><dt>Version</dt><dd>",
	"</dd></div><div><dt>Tests</dt><dd>",
	"</dd></div><div><dt>Requires</dt><dd>",
	"</dd></div><div><dt>Required by</dt><dd>",
	"</dd></div></dl></div>"
];
var Colour = {
	plugin: "#0052ff",
	hook: "#0038b8",
	lib: "#64748b",
	client: "#94a3b8",
	base: "#0b0f19"
};
var Layout = [
	{
		Value: "fcose",
		Label: "Force"
	},
	{
		Value: "concentric",
		Label: "Concentric"
	},
	{
		Value: "grid",
		Label: "Grid"
	}
];
var Explorer_default = (Props) => {
	const [Module, SetModule] = createSignal();
	const [Release, SetRelease] = createSignal("All");
	const [Mode, SetMode] = createSignal("fcose");
	const [Labels, SetLabels] = createSignal(false);
	const [Query, SetQuery] = createSignal("");
	const [Selected, SetSelected] = createSignal(null);
	const Visible = createMemo(() => {
		const Search = Query().trim().toLowerCase();
		return Props.Node.filter((Entry) => (Release() === "All" || Entry.Family === Release()) && (Search === "" || Entry.Label.toLowerCase().includes(Search)));
	});
	onMount(() => {
		(async () => {
			const Cytoscape = (await import("cytoscape")).default;
			const Fcose = (await import("cytoscape-fcose")).default;
			Cytoscape.use(Fcose);
			SetModule({
				Cytoscape,
				Fcose
			});
		})();
	});
	createEffect(() => {
		Module();
		Release();
		Mode();
		Labels();
		Query().trim().toLowerCase();
	});
	onCleanup(() => void 0);
	return ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("value", escape(Query(), true), false), escape(createComponent(For, {
		get each() {
			return ["All", ...Props.Family];
		},
		children: (Entry) => ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("aria-pressed", escape(Release(), true) === escape(Entry, true), false), escape(Entry))
	})), ssrAttribute("value", escape(Mode(), true), false), escape(createComponent(For, {
		each: Layout,
		children: (Entry) => ssr(_tmpl$3, ssrHydrationKey() + ssrAttribute("value", escape(Entry.Value, true), false), escape(Entry.Label))
	})), ssrAttribute("checked", Labels(), true), escape(createComponent(For, {
		get each() {
			return Props.Kind;
		},
		children: (Entry) => ssr(_tmpl$4, ssrHydrationKey(), ssrStyleProperty("background-color:", escape(Colour[Entry] ?? "#64748b", true)), escape(Entry))
	})), escape(Visible().length), `The package graph: ${escape(Visible().length, true)} node, ${escape(Props.Edge.length, true)} dependency edge`, escape(createComponent(Show, {
		get when() {
			return Selected();
		},
		get fallback() {
			return ssr(_tmpl$5, ssrHydrationKey());
		},
		children: (Entry) => ssr(_tmpl$6, ssrHydrationKey(), escape(Entry().Kind), escape(Entry().Family), ssrAttribute("href", escape(Entry().Href, true), false), escape(Entry().Label), escape(Entry().Version), escape(Entry().Tests), escape(Entry().Dependencies), escape(Entry().Dependents))
	})));
};
// Source/pages/explore.astro
var explore_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Explore,
	file: () => $$file,
	url: () => $$url
});
var $$Explore = createComponent$1(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Observatory",
		"Description": `The package graph: ${Catalogue_server_default.Node.length} nodes and ${Catalogue_server_default.Edge.length} dependency edges, laid out in the browser.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Observatory",
		"Title": "Package graph"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Catalogue_server_default.Node.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "node" })}, ${Catalogue_server_default.Edge.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "edge" })}.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> <div class="section__body"> ${renderComponent($$result, "Explorer", Explorer_default, {
		"Node": Catalogue_server_default.Node,
		"Edge": Catalogue_server_default.Edge,
		"Family": Catalogue_server_default.Family,
		"Kind": Catalogue_server_default.Kind,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/Graph/Explorer.tsx",
		"client:component-export": "default"
	})} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/explore.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/explore.astro";
var $$url = "/explore";
// \0virtual:astro:page:Source/pages/explore@_@astro
var page = () => explore_exports;
export { page };
