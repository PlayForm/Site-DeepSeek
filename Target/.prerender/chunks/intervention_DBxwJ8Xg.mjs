import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/intervention.astro
var intervention_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Intervention,
	file: () => $$file,
	url: () => $$url
});
var $$Intervention = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Intervention",
		"Description": "The coverage moved to the harness page, at /harness/#coverage."
	}, {
		"default": ($$result) => renderTemplate`  ${renderComponent($$result, "PageHero", $$PageHero, {
			"Eyebrow": "Intervention",
			"Title": "What a plugin changes"
		}, {
			"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
This page moved: the coverage is now a section of the harness page, which draws each
			plugin against the seams of the turn.
` })}`,
			"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<a class="button"${addAttribute(`${Route.Harness}#coverage`, "href")}>Read the coverage</a> ` })}`
		})} `,
		"Head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Head" }, { "default": ($$result) => renderTemplate` <meta http-equiv="refresh"${addAttribute(`0; url=${Route.Harness}#coverage`, "content")}> ` })}`
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/intervention.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/intervention.astro";
var $$url = "/intervention";
// \0virtual:astro:page:Source/pages/intervention@_@astro
var page = () => intervention_exports;
export { page };
