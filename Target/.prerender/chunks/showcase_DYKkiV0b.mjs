import { _ as createComponent, c as SelectKind, h as $$PageHero, n as Count, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { n as BehaviorFor } from "./Behavior_DDx93Uas.mjs";
import { t as $$StatBand } from "./StatBand_9iPwwZ-l.mjs";
import { t as $$Term } from "./Term_rdCIvkpk.mjs";
import { t as Transform } from "./Transform_CwTo7UZW.mjs";
import { t as $$Card } from "./Card_DG-ngQPO.mjs";
import { t as Catalogue_server_default } from "./Catalogue.server_CXquq_3K.mjs";
import { t as Line } from "./Release.server_BzmcWV65.mjs";
// Source/pages/showcase.astro
var showcase_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Showcase,
	file: () => $$file,
	url: () => $$url
});
var $$Showcase = createComponent(($$result, $$props, $$slots) => {
	const Hook = SelectKind("hook");
	const Group = /* @__PURE__ */ new Map();
	for (const Entry of Hook) {
		const Behavior = BehaviorFor(Entry.Slug);
		if (!Behavior) continue;
		const List = Group.get(Behavior.Seam) ?? /* @__PURE__ */ new Set();
		List.add(Entry.Slug);
		Group.set(Behavior.Seam, List);
	}
	const Seam = Group.size;
	const Listener = [...Group.values()].reduce((Total, List) => Total + List.size, 0);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Showcase",
		"Description": `What the site can show from the tree: ${Seam} seams, ${Listener} listeners, ${Transform.length} worked transforms, and ${Catalogue_server_default.Edge.length} dependency edges.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Showcase",
		"Title": "Showcase"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Seam}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })}, ${Listener}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "hook" })}, ${Transform.length} worked transforms, ${Catalogue_server_default.Edge.length}
&nbsp; dependency edge.
` })}` })} ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Seam",
			Value: Seam,
			Note: "Events the hooks listen on"
		},
		{
			Label: "Hook",
			Value: Listener,
			Note: "Registrations, both releases"
		},
		{
			Label: "Transform",
			Value: Transform.length,
			Note: "Worked examples"
		},
		{
			Label: "Edge",
			Value: Catalogue_server_default.Edge.length,
			Note: "Family dependencies"
		}
	] })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Exhibit" })} <div class="section__body grid"> ${renderComponent($$result, "Card", $$Card, {
		"Title": "Trajectory",
		"Href": Route.Behavior,
		"Meta": `${Seam} seam`
	}, { "default": ($$result) => renderTemplate`
One turn, seam by seam, with the hooks that act at each step and what the model
				sees.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Transform",
		"Href": Route.Behavior,
		"Meta": `${Transform.length} example`
	}, { "default": ($$result) => renderTemplate`
The character the model emits beside the character the transcript stores.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Case study",
		"Href": Route.CaseStudy,
		"Meta": "One character"
	}, { "default": ($$result) => renderTemplate`
An em dash followed from the model, through the seam, to the ledger.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Graph",
		"Href": Route.Observatory,
		"Meta": `${Catalogue_server_default.Node.length} node`
	}, { "default": ($$result) => renderTemplate`
The family as a graph, with the dependency arrows and a search field.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Release",
		"Href": Route.Timeline,
		"Meta": `${Line.length} version`
	}, { "default": ($$result) => renderTemplate`
The release line the changelogs record, newest first.
` })} ${renderComponent($$result, "Card", $$Card, {
		"Title": "Package",
		"Href": Route.Package,
		"Meta": `${Count.All} package`
	}, { "default": ($$result) => renderTemplate`
Every package with its summary, its surface, and its release history.
` })} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/showcase.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/showcase.astro";
var $$url = "/showcase";
// \0virtual:astro:page:Source/pages/showcase@_@astro
var page = () => showcase_exports;
export { page };
