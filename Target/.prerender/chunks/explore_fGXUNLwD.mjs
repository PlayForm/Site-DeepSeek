import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/explore.astro
var explore_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Explore,
	file: () => $$file,
	url: () => $$url
});
var $$Explore = createComponent(($$result, $$props, $$slots) => {
	const Target = `${Route.Trace}#graph`;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Observatory",
		"Description": "The graph moved: the package graph is the graph section of the trace page."
	}, {
		"default": ($$result) => renderTemplate`  ${renderComponent($$result, "PageHero", $$PageHero, {
			"Eyebrow": "Observatory",
			"Title": "The graph moved"
		}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The package graph is now the graph section of the trace page, beside the document, the
			lane, the board, and the coverage grid it belongs with.
` })}` })} ${maybeRenderHead($$result)}<div class="cluster"> <a class="button"${addAttribute(Target, "href")}>
The graph
</a> </div> `,
		"Head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Head" }, { "default": ($$result) => renderTemplate` <meta http-equiv="refresh" content="0; url=/trace/#graph"> ` })}`
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/explore.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/explore.astro";
var $$url = "/explore";
// \0virtual:astro:page:Source/pages/explore@_@astro
var page = () => explore_exports;
export { page };
