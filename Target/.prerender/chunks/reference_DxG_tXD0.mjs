import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/reference.astro
var reference_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Reference,
	file: () => $$file,
	url: () => $$url
});
var $$Reference = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Reference",
		"Description": "The reference table and the vocabulary moved into the catalogue."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Moved",
		"Title": "Reference"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The reference table and the vocabulary are sections of the catalogue now, beside the cards
			they describe. A stale bookmark lands on the table itself.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> <div class="section__body"> <p class="lede"> <a${addAttribute(`${Route.Package}#table`, "href")}>Open the table</a>, or the${" "} <a${addAttribute(`${Route.Package}#term`, "href")}>vocabulary</a> below it.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/reference.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/reference.astro";
var $$url = "/reference";
// \0virtual:astro:page:Source/pages/reference@_@astro
var page = () => reference_exports;
export { page };
