import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/turn.astro
var turn_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Turn,
	file: () => $$file,
	url: () => $$url
});
var $$Turn = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Turn",
		"Description": "The turn moved to the harness page, at /harness/#turn."
	}, {
		"default": ($$result) => renderTemplate`  ${renderComponent($$result, "PageHero", $$PageHero, {
			"Eyebrow": "Harness",
			"Title": "The turn"
		}, {
			"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
This page moved: the turn is now a section of the harness page, which follows one turn
			from the queue to the close.
` })}`,
			"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<a class="button"${addAttribute(`${Route.Harness}#turn`, "href")}>Read the turn</a> ` })}`
		})} `,
		"Head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Head" }, { "default": ($$result) => renderTemplate` <meta http-equiv="refresh"${addAttribute(`0; url=${Route.Harness}#turn`, "content")}> ` })}`
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/turn.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/turn.astro";
var $$url = "/turn";
// \0virtual:astro:page:Source/pages/turn@_@astro
var page = () => turn_exports;
export { page };
