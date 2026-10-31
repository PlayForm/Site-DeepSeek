import { _ as createComponent, f as Sitemap, h as $$PageHero, t as $$Base, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
// Source/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Page not found",
		"Description": "The route does not exist."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "404",
		"Title": "Page not found",
		"Lede": "The page you asked for is not here."
	})} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Pages" })} <div class="section__body"> <ul class="grid"> ${Sitemap.map((Entry) => renderTemplate`<li> <a${addAttribute(Entry.Href, "href")}>${Entry.Label}</a> </li>`)} </ul> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/404.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/404.astro";
var $$url = "/404";
// \0virtual:astro:page:Source/pages/404@_@astro
var page = () => _404_exports;
export { page };
