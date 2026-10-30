import { _ as createComponent, a as Package, h as $$PageHero, n as Count, t as $$Base, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as BehaviorFor } from "./Behavior_C7i5cYpI.mjs";
import { n as Term, t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Definition } from "./Definition_PGjrFgkI.mjs";
// Source/pages/reference.astro
var reference_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Reference,
	file: () => $$file,
	url: () => $$url
});
var $$Reference = createComponent(($$result, $$props, $$slots) => {
	const Row = Package.map((Entry) => [
		{
			Text: Entry.Slug,
			Href: Entry.Href,
			Icon: Entry.Slug
		},
		Entry.Kind,
		BehaviorFor(Entry.Slug)?.Seam ?? "",
		Entry.Family,
		Entry.Version
	]);
	const Word = Object.values(Term).map((Entry) => ({
		Term: Entry.Name,
		Detail: Entry.Meaning
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Reference",
		"Description": `All ${Count.All} packages with their kind, seam, release, and version, and the vocabulary the site uses.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Table",
		"Title": "Reference"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Count.All}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "package" })}: kind, ${renderComponent($$result, "Term", $$Term, { "Name": "seam" })}, release, and version. The
			vocabulary below holds every word the site defines.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Package" })} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Every package, its kind, the seam it listens on, its release, and its version",
		"Head": [
			"Package",
			"Kind",
			"Listen",
			"Release",
			"Version"
		],
		"Row": Row
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Term",
		"Lede": "One word per concept, borrowed from the code. Every page uses these words with these meanings."
	})} <div class="section__body"> ${renderComponent($$result, "Definition", $$Definition, { "Definition": Word })} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/reference.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/reference.astro";
var $$url = "/reference";
// \0virtual:astro:page:Source/pages/reference@_@astro
var page = () => reference_exports;
export { page };
