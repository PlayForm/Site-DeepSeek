import { _ as createComponent, c as SelectKind, d as SeamHref, g as createAstro, h as $$PageHero, t as $$Base, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { n as $$Absence, t as $$Pager } from "./Pager_D0YXTbXD.mjs";
import { t as $$Badge } from "./Badge_DH5fDljn.mjs";
import { t as $$Table } from "./Table_CKiF4Xiu.mjs";
import { r as SeamsOf } from "./Arm_CPuxlRGj.mjs";
import { n as BehaviorFor } from "./Behavior_DDx93Uas.mjs";
import { n as SeamFor } from "./Harness_Dw5IkvLG.mjs";
import { t as SeamRow } from "./Turn_CeuwuD0r.mjs";
import { t as ConfigFor } from "./Config.server_CF2kUQLq.mjs";
// Source/Component/Fanout.astro
createAstro("https://deepseek.playform.cloud");
var $$Fanout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Fanout;
	const { Source, Listener, Limit = 8 } = Astro.props;
	const Shown = Listener.slice(0, Limit);
	const Rest = Listener.length - Shown.length;
	return renderTemplate`${maybeRenderHead($$result)}<div class="fanout"> <div class="fanout__source"> <span class="fanout__event">${Source}</span> <span class="fanout__count">${Listener.length} listener</span> </div> <div class="fanout__spine" aria-hidden="true"></div> <ul class="fanout__list"> ${Shown.map((Item) => renderTemplate`<li class="fanout__item"${addAttribute(Item.Documented, "data-documented")}> <span class="fanout__connector" aria-hidden="true"></span> <a class="fanout__slug"${addAttribute(Item.Href, "href")}> ${Item.Slug} </a> <span class="fanout__effect"> ${Item.Documented ? Item.Effect : `${Item.Effect} arm`} </span> </li>`)} ${Rest > 0 && renderTemplate`<li class="fanout__item fanout__item--rest"> <span class="fanout__connector" aria-hidden="true"></span> <span class="fanout__slug">and ${Rest} more</span> </li>`} </ul> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Fanout.astro", void 0);
// Source/pages/behavior/[seam].astro
var _seam__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Seam,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://deepseek.playform.cloud");
function getStaticPaths() {
	const Found = /* @__PURE__ */ new Set();
	for (const Entry of SelectKind("hook")) {
		const Behavior = BehaviorFor(Entry.Slug);
		if (Behavior) Found.add(Behavior.Seam);
	}
	return [...Found].map((Name) => ({
		params: { seam: Name.replace(/\//g, "-") },
		props: { Seam: Name }
	}));
}
var $$Seam = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Seam;
	const Order = [
		"system-prompt/assemble",
		"llm/stream",
		"tools/pre-execute",
		"tools/post-execute",
		"batch/proposed",
		"fs/observed",
		"agent/status"
	];
	const SeamList = [...new Set(SelectKind("hook").map((Entry) => BehaviorFor(Entry.Slug)?.Seam).filter((Name) => Name !== void 0))].sort((Left, Right) => {
		const LeftIndex = Order.indexOf(Left);
		const RightIndex = Order.indexOf(Right);
		return (LeftIndex < 0 ? Order.length : LeftIndex) - (RightIndex < 0 ? Order.length : RightIndex) || Left.localeCompare(Right);
	});
	const { Seam: Declared } = Astro.props;
	const Param = Astro.params.seam ?? "";
	const Seam = SeamList.find((Name) => Name.replace(/\//g, "-") === Param);
	if (Seam === void 0 || Seam !== Declared) throw new Error(`The path ${Param} and its props do not agree on a seam that Behavior.ts declares.`);
	const Harness = SeamFor(Seam);
	const SeamData = SeamRow.find((Entry) => Entry.Name === Seam);
	const Hook = SelectKind("hook").flatMap((Entry) => {
		const Behavior = BehaviorFor(Entry.Slug);
		if (Behavior === void 0 || !SeamsOf(Entry.Slug, Behavior.Seam).includes(Seam)) return [];
		return [{
			Slug: Entry.Slug,
			Href: Entry.Href,
			Summary: Entry.Summary,
			Effect: Behavior.Effect,
			Documented: Behavior.Seam === Seam
		}];
	});
	const Index = SeamList.indexOf(Seam);
	const Previous = Index > 0 ? SeamList[Index - 1] : void 0;
	const Next = Index >= 0 && Index < SeamList.length - 1 ? SeamList[Index + 1] : void 0;
	function ToneOf(Value) {
		switch (true) {
			case Value === "rewrite": return "accent";
			case Value === "record": return "neutral";
			default: return "quiet";
		}
	}
	function Configured(Slug) {
		const Length = ConfigFor(Slug).length;
		return Length > 0 ? `${Length} knob` : "-";
	}
	const Row = Hook.map((Item) => [
		{
			Text: Item.Slug,
			Href: Item.Href,
			Icon: Item.Slug
		},
		{ Badge: {
			Label: Item.Documented ? Item.Effect : `${Item.Effect} arm`,
			Tone: Item.Documented ? ToneOf(Item.Effect) : "quiet"
		} },
		Item.Summary,
		Configured(Item.Slug)
	]);
	const Mix = [
		"rewrite",
		"record",
		"advise",
		"pass"
	].filter((Value) => Hook.some((Item) => Item.Effect === Value)).join("-");
	const Total = Hook.length;
	const Word = `${Total} hook`;
	const Each = Total === 1 ? "it" : "every one of them";
	function Claim() {
		switch (true) {
			case Mix === "rewrite": return `${Word}, and ${Each} rewrites what passes here.`;
			case Mix === "record": return `${Word}, and ${Each} records what passes here.`;
			case Mix === "advise": return `${Word}, and ${Each} advises on what passes here.`;
			case Mix === "pass": return `${Word}, and ${Each} leaves what passes here unchanged.`;
			case Mix === "rewrite-record": return `${Word}, and ${Each} rewrites what passes here or records it.`;
			case Mix === "rewrite-advise": return `${Word}, and ${Each} rewrites what passes here or advises on it.`;
			case Mix === "record-advise": return `${Word}, and ${Each} records what passes here or advises on it.`;
			case Mix === "rewrite-record-advise": return `${Word}, and ${Each} rewrites, records, or advises on what passes here.`;
			default: return `${Word} at this seam.`;
		}
	}
	const Lede = Claim();
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": Seam,
		"Description": `The ${Seam} seam: every hook declared on it, the effect each has, and the knobs it documents.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Seam",
		"Title": Seam,
		"Lede": Lede
	})} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Harness",
		"Lede": Harness !== void 0 ? `The harness dispatches this seam as a ${Harness.Mode}, and it already has listeners here. The family adds its hooks beside them.` : "The harness does not declare this seam; the family's own plugin dispatches it."
	})} <div class="section__body stack"> ${Harness !== void 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <p class="lede">It carries ${Harness.Carries}.</p> <dl class="definition"> <div class="definition__row"> <dt class="definition__term">Payload</dt> <dd class="definition__detail"> ${SeamData?.Shape ?? "The harness docs do not state the shape at this seam."} </dd> </div> <div class="definition__row"> <dt class="definition__term">Power</dt> <dd class="definition__detail"> ${SeamData?.Power === "Change" ? "A listener may replace what it passes on." : SeamData?.Power === "Stop" ? "A listener may end the turn, and cannot rewrite it." : "A listener observes a fact that already happened."} </dd> </div> <div class="definition__row"> <dt class="definition__term">Declared</dt> <dd class="definition__detail">${Harness.Declared}</dd> </div> </dl> <ul class="cluster"> ${Harness.Harness.length > 0 ? Harness.Harness.map((Name) => renderTemplate`<li> ${renderComponent($$result, "Badge", $$Badge, { "Label": Name })} </li>`) : renderTemplate`<li> ${renderComponent($$result, "Absence", $$Absence, {
		"Title": "No harness listener",
		"Note": "The harness does not declare this event: the family's own plugin dispatches it, and only the family listens."
	})} </li>`} </ul> <p class="muted"> ${Harness.Mode === "waterfall" ? "A waterfall listener receives the payload and may return a changed one, so a hook here can rewrite what the model reads next." : "An emit listener observes a fact that already happened. A hook here records it, or acts on the world beside it, but it cannot change the payload."} </p> ` })}` : renderTemplate`${renderComponent($$result, "Absence", $$Absence, {
		"Title": "No harness declaration",
		"Note": "This event is not in the harness's own event matrix, so there is no default behavior at this seam to compare against."
	})}`} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Fan",
		"Lede": "One event, many hands. The same listener list the table below details, drawn as the dispatch it is."
	})} <div class="section__body"> ${renderComponent($$result, "Fanout", $$Fanout, {
		"Source": Seam,
		"Listener": Hook
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Hook",
		"Lede": "One row per hook that declares this seam, with the effect it has and the knobs it documents."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": `Every hook declared on the ${Seam} seam`,
		"Head": [
			"Hook",
			"Effect",
			"What it does",
			"Configuration"
		],
		"Row": Row
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Read" })} <div class="section__body stack"> <p class="muted">
A seam is the harness event a hook listens on, named area/event. This page lists the
				hooks the repository declares at this seam, one row per hook, with the effect it has
				and the configuration it documents. A row marked as an arm is a listener the
				package's source registers here without documenting it in its README.
</p> </div> </section> ${renderComponent($$result, "Pager", $$Pager, {
		"Previous": Previous !== void 0 ? {
			Href: SeamHref(Previous),
			Label: Previous
		} : void 0,
		"Next": Next !== void 0 ? {
			Href: SeamHref(Next),
			Label: Next
		} : void 0
	})} ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/behavior/[seam].astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/behavior/[seam].astro";
var $$url = "/behavior/[seam]";
// \0virtual:astro:page:Source/pages/behavior/[seam]@_@astro
var page = () => _seam__exports;
export { page };
