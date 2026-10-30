import { _ as createComponent, d as SeamHref, g as createAstro, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as Arm } from "./Arm_CPuxlRGj.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import { n as Stage, t as SeamRow } from "./Turn_CeuwuD0r.mjs";
import { t as $$Callout } from "./Callout_CcAHykrn.mjs";
import { t as Flow } from "./Flow_CjKT_MeR.mjs";
// Source/Component/Stage.astro
createAstro("https://deepseek.playform.cloud");
var $$Stage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Stage;
	const { Entry, Used, Page } = Astro.props;
	function IsUsed(Name) {
		return Used.includes(Name);
	}
	function HasPage(Name) {
		return Page.includes(Name);
	}
	return renderTemplate`${maybeRenderHead($$result)}<ol class="stage"> ${Entry.map((Item) => renderTemplate`<li class="stage__step"> <span class="stage__index">${String(Item.Index).padStart(2, "0")}</span> <div class="stage__body"> <header class="stage__head"> <h3 class="stage__title">${Item.Title}</h3> </header> <dl class="stage__flow"> <div class="stage__pair"> <dt class="stage__label">Enters</dt> <dd class="stage__value">${Item.Enters}</dd> </div> <div class="stage__pair"> <dt class="stage__label">Leaves</dt> <dd class="stage__value">${Item.Leaves}</dd> </div> </dl> ${Item.Seam.length > 0 ? renderTemplate`<ul class="stage__seams"> ${Item.Seam.map((Name) => renderTemplate`<li class="stage__seam"> ${HasPage(Name) ? renderTemplate`<a class="stage__link"${addAttribute(SeamHref(Name), "href")}> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": IsUsed(Name) ? "accent" : "quiet"
	})} </a>` : renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": IsUsed(Name) ? "accent" : "quiet"
	})}`} </li>`)} </ul>` : renderTemplate`<p class="stage__empty">no seam here</p>`} </div> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Stage.astro", void 0);
// Source/pages/turn.astro
var turn_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Turn,
	file: () => $$file,
	url: () => $$url
});
var $$Turn = createComponent(($$result, $$props, $$slots) => {
	const Used = [.../* @__PURE__ */ new Set([...Seam.map((Entry) => Entry.Name), ...Object.values(Arm).flat()])];
	const Path = new Set(SeamRow.map((Entry) => Entry.Name));
	const Listened = Used.filter((Name) => Path.has(Name)).length;
	const Page = Seam.map((Entry) => Entry.Name);
	const Tone = {
		Change: "accent",
		Observe: "quiet",
		Stop: "neutral"
	};
	const Row = SeamRow.map((Item) => [
		Page.includes(Item.Name) ? {
			Text: Item.Name,
			Href: SeamHref(Item.Name)
		} : Item.Name,
		Item.Producer,
		{ Badge: {
			Label: Item.Power,
			Tone: Tone[Item.Power]
		} },
		Item.Shape
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Turn",
		"Description": `The default turn: ${Stage.length} stage and ${SeamRow.length} seam, before a plugin of this family exists.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Harness",
		"Title": "The turn"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The harness reaches ${Stage.length}&nbsp;stage and ${SeamRow.length}&nbsp;seam before a
			plugin of this family exists.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "Callout", $$Callout, { "Title": "The claim" }, { "default": ($$result) => renderTemplate` <div class="stack"> <p class="lede">
The default turn already has every slot. Only the slots are empty.
</p> <p>
The family documents ${Seam.length}&nbsp;of the ${SeamRow.length}&nbsp;seam on
					this path and registers arms at ${Listened - Seam.length}&nbsp;more, so the lit
					stages below are where it actually listens. Every other page on this site is a
					comparison against this one.
</p> </div> ` })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Stage",
		"Lede": "One entry per stage, in the order the turn reaches it. A seam the family uses is linked; a seam it does not use stays quiet."
	})} <div class="section__body"> ${renderComponent($$result, "StageRail", $$Stage, {
		"Entry": Stage,
		"Used": Used,
		"Page": Page
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Flow",
		"Lede": "The same stages as a graph. A stage with a lit border is a stage where the family stands at one of its seams."
	})} <div class="section__body"> ${renderComponent($$result, "Flow", Flow, {
		"Stage": Stage,
		"Family": Used,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/Graph/Flow.tsx",
		"client:component-export": "default"
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Seam",
		"Lede": "One row per seam the turn dispatches, with its producer, the power it gives a listener, and what the listener receives."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": "Every seam the turn reaches, with its producer, its power, and what the listener receives",
		"Head": [
			"Seam",
			"Producer",
			"Power",
			"What the listener receives"
		],
		"Row": Row
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Power",
		"Lede": "A plugin acts at a seam, and the power the seam gives a listener decides what it can do there."
	})} <div class="section__body stack"> <ul class="stack"> <li> <strong>Change</strong>: the listener receives the payload and returns it
					changed, so the next reader sees the new value.
</li> <li> <strong>Observe</strong>: the listener sees a fact that already happened, and it
					can record or act beside it, but never rewrite it.
</li> <li> <strong>Stop</strong>: the listener may end the turn at the terminal checkpoint,
					but the turn it ends is already written.
</li> </ul> <div class="cluster"> <a class="button"${addAttribute(Route.Behavior, "href")}>
The family at&nbsp;${Seam.length}&nbsp;of them
</a> <a class="button button--quiet"${addAttribute(Route.Workbench, "href")}>
One turn, both lenses
</a> </div> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Read" })} <div class="section__body"> <p class="muted">
This page transcribes the turn the harness documentation describes, stage by stage
				and seam by seam. The live harness can differ from the docs: a release may add,
				move, or retire a seam before the documentation records it.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/turn.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/turn.astro";
var $$url = "/turn";
// \0virtual:astro:page:Source/pages/turn@_@astro
var page = () => turn_exports;
export { page };
