import { _ as createComponent, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Callout } from "./Callout_CcAHykrn.mjs";
import { n as Intervention, t as $$Matrix } from "./Matrix_yv2aGFPk.mjs";
// Source/pages/intervention.astro
var intervention_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Intervention,
	file: () => $$file,
	url: () => $$url
});
var $$Intervention = createComponent(($$result, $$props, $$slots) => {
	const Row = Intervention.map((Entry) => [
		{
			Text: Entry.Slug,
			Href: `/package/${Entry.Slug}/`
		},
		Entry.Property,
		Entry.Disk
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Intervention",
		"Description": `What ${Intervention.length} plugins actually change in the harness: the seam, the model, the conversation, and the disk.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Intervention",
		"Title": "What a plugin changes"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Intervention.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "plugin" })}, one per family, read from source: the&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })} each stands at, whether the model sees something different, and
			what reaches the disk.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Coverage",
		"Lede": "The turn runs left to right. A filled square is a plugin that changes what the model reads next at that seam; a hollow one records what happened there."
	})} <div class="section__body"> ${renderComponent($$result, "Matrix", $$Matrix, { "Row": Intervention })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Power",
		"Lede": "Three powers, one per dispatch mode. A page that claims more than the mode allows is a page that lies."
	})} <div class="section__body stack"> ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Change",
		"Tone": "note"
	}, { "default": ($$result) => renderTemplate`
A waterfall listener receives the payload and returns a changed one. This is the
				power that makes the model read a different turn, and the filled squares in the
				matrix are its uses.
` })} ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Record",
		"Tone": "note"
	}, { "default": ($$result) => renderTemplate`
An emit listener sees a fact that already happened. This is the power that leaves an
				inspectable record, and the hollow squares are its uses.
` })} ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Stop",
		"Tone": "warn"
	}, { "default": ($$result) => renderTemplate`
A serial listener can end a turn but cannot rewrite it. No plugin here takes this
				power; the harness keeps it.
` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Record",
		"Lede": "Every plugin keeps a ledger line, and the page for each one says where."
	})} <div class="section__body stack"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Each plugin, the property its code supports, and what it leaves on disk",
		"Head": [
			"Plugin",
			"Property",
			"On disk"
		],
		"Row": Row
	})} <p class="muted"> <a${addAttribute(Route.Connect, "href")}>Read the ledgers</a> to see the files themselves.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Read" })} <div class="section__body"> <p class="muted">
Each mark is a registration the package's own source carries. A plugin whose
				marketing name claims more than its registrations is called out beside its row, not
				silently upgraded.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/intervention.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/intervention.astro";
var $$url = "/intervention";
// \0virtual:astro:page:Source/pages/intervention@_@astro
var page = () => intervention_exports;
export { page };
