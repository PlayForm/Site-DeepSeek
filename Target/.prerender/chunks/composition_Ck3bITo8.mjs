import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/composition.astro
var composition_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Composition,
	file: () => $$file,
	url: () => $$url
});
var $$Composition = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Composition",
		"Description": "The composition moved to the harness page, at /harness/#composition."
	}, {
		"default": ($$result) => renderTemplate`  ${renderComponent($$result, "PageHero", $$PageHero, {
			"Eyebrow": "Composition",
			"Title": "How the family composes"
		}, {
			"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
This page moved: the composition is now a section of the harness page, which draws the
			arms at each seam in the order they run.
` })}`,
			"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<a class="button"${addAttribute(`${Route.Harness}#composition`, "href")}>Read the composition</a> ` })}`
		})} `,
		"Head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Head" }, { "default": ($$result) => renderTemplate` <meta http-equiv="refresh"${addAttribute(`0; url=${Route.Harness}#composition`, "content")}> ` })}`
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/composition.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/composition.astro";
var $$url = "/composition";
// \0virtual:astro:page:Source/pages/composition@_@astro
var page = () => composition_exports;
export { page };
