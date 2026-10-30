import { _ as createComponent, a as Package, h as $$PageHero, n as Count, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as ConfigFor } from "./Config.server_C6g1kF1m.mjs";
import { t as $$Diagram } from "./Diagram_n3wSWO4a.mjs";
import { t as $$StatBand } from "./StatBand_CdwknxlA.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$CodeBlock } from "./CodeBlock_C-lnWEGy.mjs";
import { t as $$Terminal } from "./Terminal_H5smv55Y.mjs";
import { t as $$Grid } from "./Grid_DWO4zqRQ.mjs";
// Source/Content/Axis.ts
var Axis = [
	{
		Name: "enabled",
		Default: "off in most workspace packages",
		Turn: "on: the listener stops returning the payload untouched"
	},
	{
		Name: "log",
		Default: "on",
		Turn: "off: the ledger line is not written, the behavior is unchanged"
	},
	{
		Name: "logFile",
		Default: "a path under the profile",
		Turn: "a path of your own, or empty to keep the ledger in memory"
	},
	{
		Name: "domain",
		Default: "the package's own name",
		Turn: "another domain: a second instance writes its own records"
	},
	{
		Name: "targets",
		Default: "the tools the README lists",
		Turn: "a shorter list: the hook stops touching the tools you leave out"
	},
	{
		Name: "exempt",
		Default: "the tools that must pass untouched",
		Turn: "a longer list: a tool you add here never reaches the hook's body"
	},
	{
		Name: "replacement",
		Default: "the one the README documents",
		Turn: "another character or string: the normalizer writes what you name"
	},
	{
		Name: "threshold",
		Default: "the size the README documents",
		Turn: "a smaller number: the hook acts sooner and on more results"
	}
];
// Source/pages/setup.astro
var setup_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Setup,
	file: () => $$file,
	url: () => $$url
});
var $$Setup = createComponent(($$result, $$props, $$slots) => {
	const Example = Package.find((Entry) => Entry.Slug === "hook-dsh-normalize-dash");
	const Patch = Package.filter((Entry) => Entry.Patch).length;
	const Configured = Package.filter((Entry) => ConfigFor(Entry.Slug).length > 0).length;
	const Knob = ConfigFor(Example?.Slug ?? "").map((Item) => [
		Item.Field,
		Item.Type,
		Item.Default,
		Item.Meaning
	]);
	const Confirm = [{
		Command: `cat ~/.dsh/playform/${Example?.Slug ?? "hook-dsh-normalize-dash"}.log`,
		Output: `${Example?.Slug ?? "hook-dsh-normalize-dash"}: activated (replacement=-, reasoning=on, toolArgs=off)`
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Set up a plugin",
		"Description": "Install a plugin, load its bundle patch, set its configuration, and confirm it activated."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Setup",
		"Title": "Set up a plugin"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
Install it, load its bundle patch, set its&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "knob" })}, and confirm it activated.
` })}` })} ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Plugin",
			Value: Count.All,
			Note: "Two releases"
		},
		{
			Label: "Bundle patch",
			Value: Patch,
			Note: "Ships with the package"
		},
		{
			Label: "Configured",
			Value: Configured,
			Note: "Documents its knobs"
		}
	] })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Install",
		"Lede": "Install the plugin you want; its dependencies come with it."
	})} <div class="section__body"> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "Install one plugin",
		"Language": "sh",
		"Code": `pnpm add ${Example?.Name ?? "@playform/hook-dsh-normalize-dash"}`
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Load",
		"Lede": "List the package in your profile's bundles, then restart the app. A dependency alone is not activation."
	})} <div class="section__body stack"> ${renderComponent($$result, "Diagram", $$Diagram, {
		"Id": "Install",
		"Caption": "The path a reader takes: install, load, configure, confirm."
	})} ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "~/.dsh/profiles/<profile>/package.json",
		"Language": "json",
		"Code": `{
	"dsh": {
		"profile": {
			"bundles": [
				"@deepseek-ai/dsh-base",
				"${Example?.Name ?? "@playform/hook-dsh-normalize-dash"}"
			]
		}
	}
}`
	})} ${renderComponent($$result, "Table", $$Table, {
		"Caption": "What the package declares for the host",
		"Head": ["Field", "Value"],
		"Row": [
			["name", Example?.Name ?? "unavailable"],
			["version", Example?.Version ?? "unavailable"],
			["main", "./Target/Library.js"],
			["dsh.bundle.patch", Example?.Patch ? "./cordis.patch.yml" : "not shipped"]
		]
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Axis",
		"Lede": "The eight axes a reader actually turns, across the family. The exact field and default live on each package's page; this is the shape of the choice."
	})} <div class="section__body"> ${renderComponent($$result, "Grid", $$Grid, {
		"Head": ["Ships as", "Turn it"],
		"Row": Axis.map((Item) => ({
			Label: Item.Name,
			Cell: [Item.Default, Item.Turn]
		})),
		"Caption": "The eight configuration axes, what each ships as, and what turning it does"
	})} </div> </section> ${Knob.length > 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Configure",
		"Lede": `Every knob ${Example?.Slug ?? "the plugin"} document, with its default.`
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": `Configuration of ${Example?.Slug ?? "the plugin"}`,
		"Head": [
			"Field",
			"Type",
			"Default",
			"Meaning"
		],
		"Row": Knob
	})} <p class="muted"> <a${addAttribute(Example?.Href ?? Route.Package, "href")}>Open the plugin</a> to read the rest.
</p> </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Confirm",
		"Lede": "The plugin writes one line to its ledger when it activates."
	})} <div class="section__body"> ${renderComponent($$result, "Terminal", $$Terminal, {
		"Label": "Ledger",
		"Line": Confirm
	})} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/setup.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/setup.astro";
var $$url = "/setup";
// \0virtual:astro:page:Source/pages/setup@_@astro
var page = () => setup_exports;
export { page };
