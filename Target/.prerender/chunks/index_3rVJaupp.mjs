import { _ as createComponent, g as createAstro, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Callout } from "./Callout_CcAHykrn.mjs";
/* empty css                   */
import { t as Plugin } from "./Plugin_W_iBMq8G.mjs";
/* empty css                 */
// Source/Component/Explorer.astro
createAstro("https://deepseek.playform.cloud");
var $$Explorer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Explorer;
	const { Groups } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="explorer-pane" aria-label="Objects"> ${Groups.map((Group) => renderTemplate`<div class="explorer-pane__group"> <h2 class="explorer-pane__label">${Group.Label}</h2> <ul class="explorer-pane__list"> ${Group.Item.map((Entry) => renderTemplate`<li class="explorer-pane__item"> ${Entry.Href ? renderTemplate`<a class="explorer-pane__link"${addAttribute(Entry.Href, "href")}> ${Entry.Label} </a>` : renderTemplate`<span class="explorer-pane__text">${Entry.Label}</span>`} ${Entry.Count !== void 0 && renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": String(Entry.Count),
		"Tone": "quiet"
	})}`} </li>`)} </ul> </div>`)} </nav>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Explorer.astro", void 0);
// Source/pages/plugin/index.astro
var plugin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Group = [...new Set(Plugin.map((Item) => Item.Role))].map((Name) => ({
		Label: Name,
		Item: Plugin.filter((Item) => Item.Role === Name).map((Item) => ({
			Label: Item.Slug,
			Href: `/plugin/${Item.Slug}/`
		}))
	}));
	const Seam = [...new Set(Plugin.flatMap((Item) => Item.Seam))];
	const Row = Plugin.map((Item) => [
		{
			Text: Item.Slug,
			Href: `/plugin/${Item.Slug}/`
		},
		Item.Role,
		Item.Seam.join(", "),
		Item.State,
		Item.After
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Harness plugin",
		"Description": `${Plugin.length} harness plugins shown by default, at their seam, and in the state each unlocks.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Harness",
		"Title": "The plugins the harness ships"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Plugin.length}&nbsp;plugins from the harness itself, each read the same way: what the
			harness does on its own, the ${renderComponent($$result, "Term", $$Term, { "Name": "seam" })} the plugin answers at, and the state a
			reader sees because of it.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Rule",
		"Lede": "Six invariants every dissection on this site obeys. A page that breaks one is a caption wearing a diagram's clothes."
	})} <div class="section__body"> ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Invariant",
		"Tone": "note"
	}, { "default": ($$result) => renderTemplate` <p>
The two conversations are the same lines, the same sequence numbers, and the
					same order. Exactly one line differs, and the difference is visible without
					reading a caption. The state name comes from the catalogue rather than from
					invention. The "needs logged" line names a specific fact, not a category. The
					seam is marked in the pipeline, and the pipeline is the same component on every
					page. Nothing claims a state the log cannot feed without saying so.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Row",
		"Lede": "What each plugin is, where it answers, the state it unlocks, and the one line it changes in the conversation."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Every harness plugin, its role, its seam, the state it unlocks, and the line it changes",
		"Head": [
			"Plugin",
			"Role",
			"Seam",
			"State",
			"Changes"
		],
		"Row": Row
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Role",
		"Lede": "Five roles, and the seam each plugin answers at. A page for each names the state it unlocks and the facts the log would need to show it."
	})} <div class="section__body"> ${renderComponent($$result, "Explorer", $$Explorer, { "Groups": Group })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Seam",
		"Lede": "The events these plugins answer at, and the family's own pages where they overlap."
	})} <div class="section__body stack"> <ul class="cluster"> ${Seam.map((Name) => renderTemplate`<li> <span class="mono">${Name}</span> </li>`)} </ul> <p class="muted"> <a${addAttribute(Route.Trace, "href")}>The trace</a> shows what the log keeps, and${" "} <a${addAttribute(Route.Behavior, "href")}>the family</a> shows where its own hooks stand.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugin/index.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugin/index.astro";
var $$url = "/plugin";
// \0virtual:astro:page:Source/pages/plugin/index@_@astro
var page = () => plugin_exports;
export { page };
