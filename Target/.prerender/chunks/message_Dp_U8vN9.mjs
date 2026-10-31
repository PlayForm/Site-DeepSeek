import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/message.astro
var message_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Message,
	file: () => $$file,
	url: () => $$url
});
var $$Message = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Conversation",
		"Description": "The conversation moved to the harness page, at /harness/#conversation."
	}, {
		"default": ($$result) => renderTemplate`  ${renderComponent($$result, "PageHero", $$PageHero, {
			"Eyebrow": "Conversation",
			"Title": "What the model reads"
		}, {
			"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
This page moved: the conversation is now a section of the harness page, which lists
			what the model reads, role by role.
` })}`,
			"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<a class="button"${addAttribute(`${Route.Harness}#conversation`, "href")}>Read the conversation</a> ` })}`
		})} `,
		"Head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Head" }, { "default": ($$result) => renderTemplate` <meta http-equiv="refresh"${addAttribute(`0; url=${Route.Harness}#conversation`, "content")}> ` })}`
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/message.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/message.astro";
var $$url = "/message";
// \0virtual:astro:page:Source/pages/message@_@astro
var page = () => message_exports;
export { page };
