import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/tool.astro
var tool_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tool,
	file: () => $$file,
	url: () => $$url
});
var $$Tool = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Tool call",
		"Description": "One tool call moved to the harness page, at /harness/#call."
	}, {
		"default": ($$result) => renderTemplate`  ${renderComponent($$result, "PageHero", $$PageHero, {
			"Eyebrow": "Tool call",
			"Title": "One call, four gates"
		}, {
			"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
This page moved: the call is now a section of the harness page, which draws one tool
			call as participants and as a lifecycle.
` })}`,
			"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<a class="button"${addAttribute(`${Route.Harness}#call`, "href")}>Read the call</a> ` })}`
		})} `,
		"Head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Head" }, { "default": ($$result) => renderTemplate` <meta http-equiv="refresh"${addAttribute(`0; url=${Route.Harness}#call`, "content")}> ` })}`
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tool.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tool.astro";
var $$url = "/tool";
// \0virtual:astro:page:Source/pages/tool@_@astro
var page = () => tool_exports;
export { page };
