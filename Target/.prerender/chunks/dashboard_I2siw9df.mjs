import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/pages/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(($$result, $$props, $$slots) => {
	const Target = `${Route.Trace}#board`;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Dashboard",
		"Description": "The board moved: the counts and the ledger paths are the board section of the trace page."
	}, {
		"default": ($$result) => renderTemplate`  ${renderComponent($$result, "PageHero", $$PageHero, {
			"Eyebrow": "Observability",
			"Title": "The board moved"
		}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The counts and the ledger paths are now the board section of the trace page, which reads
			the same run as a document, a lane, a graph, and a coverage grid.
` })}` })} ${maybeRenderHead($$result)}<div class="cluster"> <a class="button"${addAttribute(Target, "href")}>
The board
</a> </div> `,
		"Head": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Head" }, { "default": ($$result) => renderTemplate` <meta http-equiv="refresh" content="0; url=/trace/#board"> ` })}`
	})}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/dashboard.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/dashboard.astro";
var $$url = "/dashboard";
// \0virtual:astro:page:Source/pages/dashboard@_@astro
var page = () => dashboard_exports;
export { page };
