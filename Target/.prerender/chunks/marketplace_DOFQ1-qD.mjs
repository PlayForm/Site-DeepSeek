import { _ as createComponent, h as $$PageHero, l as PackageHref, n as Count, o as Root, t as $$Base, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$StatBand } from "./StatBand_CdwknxlA.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
// Source/Library/Marketplace.server.ts
function Summarize(Text) {
	const Head = Text.split("(")[0] ?? Text;
	return (Head.split(/(?:[.!?]\s)|(?:\s[\u2014\u2013]\s)/)[0] ?? Head).trim();
}
function Load() {
	const Path = join(Root, "marketplace.json");
	if (!existsSync(Path)) return {
		Title: "",
		Description: "",
		Group: []
	};
	const Index = JSON.parse(readFileSync(Path, "utf8"));
	const Categories = Index.metadata?.categories ?? {};
	const Group = [];
	for (const [Id, Category] of Object.entries(Categories)) {
		const Bundle = (Index.plugins ?? []).filter((Entry) => Entry.metadata?.category === Id).map((Entry) => ({
			Name: Entry.name ?? "",
			Slug: (Entry.name ?? "").split("/").pop() ?? "",
			Title: Entry.title?.en ?? Entry.name ?? "",
			Summary: Summarize(Entry.description?.en ?? "")
		})).sort((Left, Right) => Left.Title.localeCompare(Right.Title));
		if (Bundle.length > 0) Group.push({
			Id,
			Label: Category.title?.en ?? Id,
			Bundle
		});
	}
	return {
		Title: Index.title?.en ?? "Marketplace",
		Description: Index.description?.en ?? "",
		Group
	};
}
var Marketplace = Load();
// Source/pages/marketplace.astro
var marketplace_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Marketplace,
	file: () => $$file,
	url: () => $$url
});
var $$Marketplace = createComponent(($$result, $$props, $$slots) => {
	const Bundle = Marketplace.Group.reduce((Total, Entry) => Total + Entry.Bundle.length, 0);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Marketplace",
		"Description": `The family as an installable index: ${Bundle} bundles in ${Marketplace.Group.length} categories.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Marketplace",
		"Title": "Marketplace"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Bundle}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "bundle" })} in ${Marketplace.Group.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "category" })}.
` })}` })} ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Bundle",
			Value: Bundle,
			Note: "Listed in the index"
		},
		{
			Label: "Category",
			Value: Marketplace.Group.length
		},
		{
			Label: "Package",
			Value: Count.All,
			Note: "Two releases"
		}
	] })} ${Marketplace.Group.map((Group) => renderTemplate`${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": Group.Label })} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": `The ${Group.Label} bundles`,
		"Head": [
			"Bundle",
			"Package",
			"What"
		],
		"Row": Group.Bundle.map((Entry) => [
			Entry.Title,
			{
				Text: Entry.Name,
				Href: PackageHref(Entry.Slug),
				Icon: Entry.Slug
			},
			Entry.Summary
		])
	})} </div> </section>`)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Package" })} <div class="section__body"> <p class="lede"> <a${addAttribute(PackageHref("plugin-dsh-factory"), "href")}>Open a package</a> to read its facts.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/marketplace.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/marketplace.astro";
var $$url = "/marketplace";
// \0virtual:astro:page:Source/pages/marketplace@_@astro
var page = () => marketplace_exports;
export { page };
