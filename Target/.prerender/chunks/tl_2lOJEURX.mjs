import { _ as createComponent, h as $$PageHero, n as Count, t as $$Base, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$StatBand } from "./StatBand_CdwknxlA.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as Line } from "./Release.server_6TZ9vUXd.mjs";
// Source/pages/tl.astro
var tl_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tl,
	file: () => $$file,
	url: () => "/tl"
});
var $$Tl = createComponent(($$result, $$props, $$slots) => {
	const Current = Line.find((Entry) => Entry.State === "current")?.Version ?? "";
	const Row = Line.map((Entry) => [
		Entry.Version,
		String(Entry.Package),
		Entry.State
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Release",
		"Description": `The release line the tree records: ${Line.length} versions, ${Count.All} packages.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Timeline",
		"Title": "Release"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Line.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "version" })} across ${Count.All}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "package" })}. ${Current} is the current line.
` })}` })} ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Version",
			Value: Line.length,
			Note: "In a changelog"
		},
		{
			Label: "Current",
			Value: Current,
			Note: "In the manifests"
		},
		{
			Label: "Package",
			Value: Count.All,
			Note: "Two releases"
		}
	] })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Version" })} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Every version the changelogs record, with the packages that carry it",
		"Head": [
			"Version",
			"Package",
			"State"
		],
		"Row": Row
	})} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tl.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tl.astro";
// \0virtual:astro:page:Source/pages/tl@_@astro
var page = () => tl_exports;
export { page };
