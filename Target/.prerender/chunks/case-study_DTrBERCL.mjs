import { _ as createComponent$1, a as Package, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { t as $$Table } from "./Table_CKiF4Xiu.mjs";
import { t as $$Icon } from "./Icon_DDezI4Ii.mjs";
import { t as ConfigFor } from "./Config.server_CF2kUQLq.mjs";
import { t as $$Term } from "./Term_rdCIvkpk.mjs";
import { t as $$Transform } from "./Transform_C61Qcq3e.mjs";
import { t as Transform } from "./Transform_CwTo7UZW.mjs";
import { t as $$CodeBlock } from "./CodeBlock_NiBV7TTb.mjs";
import { n as $$Difference, t as SurfaceFor } from "./Surface.server_Bp0A0NxJ.mjs";
import { t as $$Terminal } from "./Terminal_C8qfxXer.mjs";
import { escape, ssr, ssrAttribute, ssrHydrationKey, ssrStyleProperty } from "solid-js/web";
import { createSignal } from "solid-js";
// Source/Component/Compare.tsx
var _tmpl$ = [
	"<div",
	" class=\"compare\"><div class=\"compare__stage\"><div class=\"compare__pane compare__pane--clean\"><span class=\"compare__label\">Transcript</span><span class=\"compare__text\">",
	"</span></div><div class=\"compare__pane compare__pane--raw\" style=\"",
	"\"><span class=\"compare__label\">Model</span><span class=\"compare__text\">",
	"</span></div><div class=\"compare__handle\" style=\"",
	"\" role=\"slider\" tabindex=\"0\" aria-label=\"Reveal the text the model wrote\" aria-valuemin=\"0\" aria-valuemax=\"100\"",
	"><span class=\"compare__grip\" aria-hidden=\"true\"></span></div></div><p class=\"compare__hint\">Drag the handle, or use the arrow keys, to compare.</p></div>"
];
function Compare(Props) {
	const [Position, SetPosition] = createSignal(Props.Start ?? 50);
	return ssr(_tmpl$, ssrHydrationKey(), escape(Props.Clean), ssrStyleProperty("--compare:", `${escape(Position(), true)}%`), escape(Props.Raw), ssrStyleProperty("--compare:", `${escape(Position(), true)}%`), ssrAttribute("aria-valuenow", escape(Math.round(Position()), true), false));
}
// Source/pages/case-study.astro
var case_study_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CaseStudy,
	file: () => $$file,
	url: () => $$url
});
var $$CaseStudy = createComponent$1(($$result, $$props, $$slots) => {
	const Slug = "hook-dsh-normalize-dash";
	const Entry = Package.find((Item) => Item.Slug === Slug);
	const Example = Transform.filter((Item) => Item.Slug === Slug);
	const Knob = ConfigFor(Slug).map((Item) => [
		Item.Field,
		Item.Default,
		Item.Meaning
	]);
	const Listen = SurfaceFor(Slug).filter((Item) => /listen/i.test(Item.Kind));
	const Confirm = [{
		Command: `cat ~/.dsh/playform/${Slug}.log`,
		Output: `${Slug}: activated (replacement=-, reasoning=on, toolArgs=off)`
	}];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "One character",
		"Description": "An em dash leaves the model and arrives as a hyphen: the seam, the package, the configuration, and the ledger line."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Case study",
		"Title": "One character, end to end"
	}, {
		"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
An em dash leaves the model, passes one&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "hook" })} at its&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })}
&nbsp;and arrives in the transcript as a hyphen.
` })}`,
		"Mark": ($$result) => renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			"slot": "Mark",
			"Name": Slug,
			"Size": 88,
			"Priority": true
		})}`
	})} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The model",
		"Lede": "The model writes a typographic dash. Nothing in the harness has touched it yet."
	})} <div class="section__body"> ${renderComponent($$result, "Transform", $$Transform, { "Sample": Example })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The seam",
		"Lede": "The hook holds one listener on the stream, and the stream is where every token passes."
	})} <div class="section__body stack"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "The seam this hook listens on",
		"Head": [
			"Kind",
			"Name",
			"What"
		],
		"Row": Listen.map((Item) => [
			Item.Kind,
			Item.Name,
			Item.What
		])
	})} <p class="lede"> <a${addAttribute(Entry?.Href ?? Route.Package, "href")}>${Entry?.Summary ?? Slug}</a> </p> </div> </section> ${Knob.length > 0 && renderTemplate`<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The setting",
		"Lede": "One knob decides the replacement; the rest decide what the hook touches."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": `Configuration of ${Slug}`,
		"Head": [
			"Field",
			"Default",
			"Meaning"
		],
		"Row": Knob
	})} </div> </section>`}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The transcript",
		"Lede": "The rewrite reaches the live view and the stored block, because the normalization is the feature."
	})} <div class="section__body stack"> ${renderComponent($$result, "Difference", $$Difference, {
		"Before": "a — b",
		"After": "a - b"
	})} ${renderComponent($$result, "Compare", Compare, {
		"Raw": "a — b\nand another — with the family",
		"Clean": "a - b\nand another - with the family",
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "@Component/Compare.tsx",
		"client:component-export": "default"
	})} ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "The text the reader keeps",
		"Language": "text",
		"Code": `the model wrote:  a \u2014 b
the transcript:    a - b`
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The ledger",
		"Lede": "The hook writes one line when it activates."
	})} <div class="section__body"> ${renderComponent($$result, "Terminal", $$Terminal, {
		"Label": "Ledger",
		"Line": Confirm
	})} </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/case-study.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/case-study.astro";
var $$url = "/case-study";
// \0virtual:astro:page:Source/pages/case-study@_@astro
var page = () => case_study_exports;
export { page };
