import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/marketplace.astro
var marketplace_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Marketplace,
	file: () => $$file,
	url: () => $$url
});
var $$Marketplace = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Marketplace",
		"Description": "The marketplace index moved into the catalogue."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Moved",
		"Title": "Marketplace"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The marketplace index is a section of the catalogue now, beside the cards it lists. A
			stale bookmark lands on the index itself.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> <div class="section__body"> <p class="lede"> <a${addAttribute(`${Route.Package}#marketplace`, "href")}>Open the marketplace index</a> in the
				catalogue.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/marketplace.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/marketplace.astro";
var $$url = "/marketplace";
// \0virtual:astro:page:Source/pages/marketplace@_@astro
var page = () => marketplace_exports;
export { page };
