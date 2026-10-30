import { _ as createComponent, h as $$PageHero, n as Count, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as $$StatBand } from "./StatBand_CdwknxlA.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Terminal } from "./Terminal_H5smv55Y.mjs";
import { t as $$Disclosure } from "./Disclosure_CP1ZjKXi.mjs";
import { t as Ledger } from "./Ledger.server_BfLuMXDC.mjs";
// Source/pages/connect.astro
var connect_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Connect,
	file: () => $$file,
	url: () => $$url
});
var $$Connect = createComponent(($$result, $$props, $$slots) => {
	const Row = Ledger.map((Entry) => [{
		Text: Entry.Slug,
		Href: Entry.Href
	}, Entry.Path]);
	const Watch = [{
		Command: "tail -f ~/.dsh/playform/*.log",
		Output: "every plugin that writes a ledger, live, in one stream"
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Read your run",
		"Description": `Every plugin that keeps a ledger, and the file it writes: ${Ledger.length} paths.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Connect",
		"Title": "Read your run"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Ledger.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "plugin" })} keep a ${renderComponent($$result, "Term", $$Term, { "Name": "ledger" })}. Each one writes its own file, and
			the file says what it did.
` })}` })} ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Ledger",
			Value: Ledger.length,
			Note: "Documented file paths"
		},
		{
			Label: "Hook",
			Value: Count.Hook,
			Note: "Two releases"
		},
		{
			Label: "Package",
			Value: Count.All,
			Note: "Every one, read at build"
		}
	] })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Watch",
		"Lede": "The ledgers live under one directory, so one command follows them all."
	})} <div class="section__body"> ${renderComponent($$result, "Terminal", $$Terminal, {
		"Label": "Ledger",
		"Line": Watch
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "File",
		"Lede": "The default path each plugin documents for its own ledger."
	})} <div class="section__body"> ${renderComponent($$result, "Disclosure", $$Disclosure, {
		"Summary": "Every ledger file",
		"Count": Ledger.length
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Every plugin that documents a ledger file",
		"Head": ["Plugin", "File"],
		"Row": Row
	})} ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Turn it off" })} <div class="section__body"> <p class="lede">
Every plugin documents a <code>log</code> switch beside <code>logFile</code>. Set it
				to <code>false</code> to stop the file, and open <a${addAttribute(Route.Setup, "href")}>Setup</a> for
				the rest of the knobs.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/connect.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/connect.astro";
var $$url = "/connect";
// \0virtual:astro:page:Source/pages/connect@_@astro
var page = () => connect_exports;
export { page };
