import { _ as createComponent, c as SelectKind, d as SeamHref, g as createAstro, h as $$PageHero, n as Count, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { t as $$Badge } from "./Badge_DH5fDljn.mjs";
import { t as $$Icon } from "./Icon_DDezI4Ii.mjs";
import { n as ArmFor } from "./Arm_CPuxlRGj.mjs";
import { n as BehaviorFor } from "./Behavior_DDx93Uas.mjs";
import { t as $$Diagram } from "./Diagram_Df9DmpPK.mjs";
import { t as $$StatBand } from "./StatBand_9iPwwZ-l.mjs";
import { t as $$Term } from "./Term_rdCIvkpk.mjs";
import { t as $$Transform } from "./Transform_C61Qcq3e.mjs";
import { t as Transform } from "./Transform_CwTo7UZW.mjs";
// Source/Component/Trajectory.astro
createAstro("https://deepseek.playform.cloud");
var $$Trajectory = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Trajectory;
	const { Step } = Astro.props;
	const Tone = {
		rewrite: "accent",
		record: "neutral",
		advise: "quiet",
		pass: "quiet"
	};
	function Tally(Listener) {
		const Count = {
			rewrite: 0,
			record: 0,
			advise: 0,
			pass: 0
		};
		for (const Entry of Listener) Count[Entry.Effect] += 1;
		return [
			"rewrite",
			"record",
			"advise"
		].filter((Key) => Count[Key] > 0).map((Key) => `${Count[Key]} ${Key}`).join(" / ") || "unchanged";
	}
	return renderTemplate`${maybeRenderHead($$result)}<ol class="trajectory"> ${Step.map((Entry, Index) => renderTemplate`<li class="trajectory__step"> <span class="trajectory__index">${String(Index + 1).padStart(2, "0")}</span> <div class="trajectory__body"> <header class="trajectory__head"> <h3 class="trajectory__name"> <a${addAttribute(Entry.Href, "href")}>${Entry.Name}</a> </h3> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Entry.Lens,
		"Tone": "accent"
	})} <span class="trajectory__count">${Entry.Listener.length} hook</span> ${Entry.Arm > 0 && renderTemplate`<span class="trajectory__arm">+${Entry.Arm} arm</span>`} </header> <div class="trajectory__lens"> <span class="trajectory__lens-label">Model</span> <span class="trajectory__lens-value">${Tally(Entry.Listener)}</span> </div> ${Entry.Note && renderTemplate`<p class="trajectory__note">${Entry.Note}</p>`} <ul class="trajectory__list"> ${Entry.Listener.map((Item) => renderTemplate`<li class="trajectory__listener"> <a class="trajectory__slug"${addAttribute(Item.Href, "href")}> ${renderComponent($$result, "Icon", $$Icon, {
		"Name": Item.Slug,
		"Size": 32
	})} ${Item.Slug} </a> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Item.Effect,
		"Tone": Tone[Item.Effect]
	})} <span class="trajectory__what">${Item.What}</span> </li>`)} </ul> </div> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Trajectory.astro", void 0);
// Source/pages/behavior.astro
var behavior_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Behavior,
	file: () => $$file,
	url: () => $$url
});
var $$Behavior = createComponent(($$result, $$props, $$slots) => {
	const Order = [
		"system-prompt/assemble",
		"llm/stream",
		"tools/pre-execute",
		"tools/post-execute",
		"batch/proposed",
		"fs/observed",
		"agent/status"
	];
	function LensOf(Seam) {
		switch (true) {
			case Seam === "system-prompt/assemble": return "Prompt";
			case Seam === "llm/stream": return "Text";
			case Seam.startsWith("tools/"): return "Tool";
			case Seam === "batch/proposed": return "Batch";
			case Seam === "fs/observed": return "File";
			default: return "State";
		}
	}
	const Group = /* @__PURE__ */ new Map();
	for (const Entry of SelectKind("hook")) {
		const Behavior = BehaviorFor(Entry.Slug);
		if (!Behavior) continue;
		const List = Group.get(Behavior.Seam) ?? [];
		List.push({
			Slug: Entry.Slug,
			Href: Entry.Href,
			What: Entry.Summary,
			Effect: Behavior.Effect
		});
		Group.set(Behavior.Seam, List);
	}
	const Step = [...Group.keys()].sort((Left, Right) => {
		const LeftIndex = Order.indexOf(Left);
		const RightIndex = Order.indexOf(Right);
		return (LeftIndex < 0 ? Order.length : LeftIndex) - (RightIndex < 0 ? Order.length : RightIndex) || Left.localeCompare(Right);
	}).map((Name) => {
		const Listener = Group.get(Name) ?? [];
		const Class = [...new Set(Listener.map((Entry) => /normalize-(\w+)/.exec(Entry.Slug)?.[1]).filter(Boolean))];
		return {
			Name,
			Href: SeamHref(Name),
			Lens: LensOf(Name),
			Note: Class.length > 0 ? `Normalizes the ${Class.join(", ")} classes` : "",
			Listener,
			Arm: SelectKind("hook").filter((Entry) => BehaviorFor(Entry.Slug)?.Seam !== Name && ArmFor(Entry.Slug).includes(Name)).length
		};
	});
	const Classic = SelectKind("hook").filter((Entry) => Entry.Family === "Classic").length;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Hook",
		"Description": `All ${Count.Hook} hook on ${Step.length} seam, in the order a conversation reaches them.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Behavior",
		"Title": "Hook"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Count.Hook}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "hook" })} on ${Step.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })}, in the order a conversation reaches them.
` })}` })} ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Hook",
			Value: Count.Hook,
			Note: "Two releases"
		},
		{
			Label: "Seam",
			Value: Step.length,
			Note: "Distinct events"
		},
		{
			Label: "Classic",
			Value: Classic
		},
		{
			Label: "Effect-TS",
			Value: Count.Hook - Classic
		}
	] })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Trajectory",
		"Lede": "One turn, seam by seam. The lens names what the hooks at that seam see and change."
	})} <div class="section__body"> ${renderComponent($$result, "Trajectory", $$Trajectory, { "Step": Step })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Seam",
		"Lede": "The same order, as one path."
	})} <div class="section__body"> ${renderComponent($$result, "Diagram", $$Diagram, {
		"Id": "Trajectory",
		"Caption": "The seven seams a turn reaches, and the hooks at each."
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Transform",
		"Lede": "What the model emits on the left, what the transcript stores on the right."
	})} <div class="section__body"> ${renderComponent($$result, "Transform", $$Transform, { "Sample": Transform })} <p class="muted"> <a${addAttribute(Route.CaseStudy, "href")}>One character, end to end</a> follows the dash from the
				model to the ledger.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/behavior.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/behavior.astro";
var $$url = "/behavior";
// \0virtual:astro:page:Source/pages/behavior@_@astro
var page = () => behavior_exports;
export { page };
