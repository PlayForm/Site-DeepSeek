import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/plugin/index.astro
var plugin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Harness plugin",
		"Description": "The family's plugins live in the catalogue, one page per package."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Moved",
		"Title": "Harness plugin"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
Every plugin this site documents is a package in the family: Classic and Effect-TS, one
			page each. The catalogue is the index, and a package page carries its dissection.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> <div class="section__body"> <p class="lede"> <a${addAttribute(Route.Package, "href")}>Open the catalogue</a>, or read the${" "} <a${addAttribute(Route.Behavior, "href")}>seams</a> the family answers at.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugin/index.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugin/index.astro";
var $$url = "/plugin";
// \0virtual:astro:page:Source/pages/plugin/index@_@astro
var page = () => plugin_exports;
export { page };
