import { _ as createComponent, c as SelectKind, g as createAstro, h as $$PageHero, t as $$Base, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$Badge } from "./Badge_DH5fDljn.mjs";
import { t as $$Icon } from "./Icon_DDezI4Ii.mjs";
import { n as BehaviorFor } from "./Behavior_DDx93Uas.mjs";
import { t as $$Term } from "./Term_rdCIvkpk.mjs";
// Source/Component/Workbench.astro
createAstro("https://deepseek.playform.cloud");
var $$Workbench$1 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Workbench$1;
	const { Seam, Model, Hook } = Astro.props;
	const Tone = {
		rewrite: "accent",
		record: "neutral",
		advise: "quiet",
		pass: "quiet"
	};
	function ToneFor(Effect) {
		return Tone[Effect] ?? "quiet";
	}
	return renderTemplate`${maybeRenderHead($$result)}<div class="workbench"> <header class="workbench__head"> <h2 class="workbench__name">${Seam}</h2> <span class="workbench__count"> ${Hook.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "hook" })} </span> </header> <div class="workbench__lens"> <div class="workbench__panel workbench__panel--model"> <p class="workbench__label">Model</p> <p class="workbench__model">${Model}</p> </div> <div class="workbench__panel workbench__panel--harness"> <p class="workbench__label">Harness</p> ${Hook.length > 0 ? renderTemplate`<ul class="workbench__list"> ${Hook.map((Item) => renderTemplate`<li class="workbench__hook"> <a class="workbench__slug"${addAttribute(Item.Href, "href")}> ${renderComponent($$result, "Icon", $$Icon, {
		"Name": Item.Slug,
		"Size": 32
	})} ${Item.Slug} </a> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Item.Effect,
		"Tone": ToneFor(Item.Effect)
	})} <span class="workbench__summary">${Item.Summary}</span> </li>`)} </ul>` : renderTemplate`<p class="workbench__empty">
No&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "hook" })} listens at this&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })}.
</p>`} </div> </div> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Workbench.astro", void 0);
// Source/pages/workbench.astro
var workbench_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Workbench,
	file: () => $$file,
	url: () => $$url
});
var $$Workbench = createComponent(($$result, $$props, $$slots) => {
	const Group = /* @__PURE__ */ new Map();
	for (const Entry of SelectKind("hook")) {
		const Behavior = BehaviorFor(Entry.Slug);
		if (!Behavior) continue;
		const List = Group.get(Behavior.Seam) ?? [];
		List.push({
			Slug: Entry.Slug,
			Href: Entry.Href,
			Summary: Entry.Summary,
			Effect: Behavior.Effect
		});
		Group.set(Behavior.Seam, List);
	}
	const Stage = [
		{
			Seam: "system-prompt/assemble",
			Model: "The model reads one assembled block, and the blocks it can edit are already inside it."
		},
		{
			Seam: "llm/stream",
			Model: "The model writes text, and every dash, quote, ellipsis, space, fullwidth glyph, and invisible mark reaches the transcript as plain ASCII."
		},
		{
			Seam: "tools/pre-execute",
			Model: "The model asks for a tool call, and a workspace change is gated or restated before it runs."
		},
		{
			Seam: "tools/post-execute",
			Model: "The model reads a result that has already been compressed, stripped, and annotated."
		},
		{
			Seam: "fs/observed",
			Model: "The model is not watching: the write already happened, and the hooks act on the file on disk."
		}
	].map((Entry) => ({
		...Entry,
		Hook: Group.get(Entry.Seam) ?? []
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Workbench",
		"Description": "One turn of the harness, stage by stage: what the model sees, and the hooks that shape it."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "One turn",
		"Title": "Workbench"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
One turn, stage by stage, through two lenses: what the model reads and writes, and what
			the harness does with it.
` })}` })} ${Stage.map((Entry) => renderTemplate`${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "Workbench", $$Workbench$1, {
		"Seam": Entry.Seam,
		"Model": Entry.Model,
		"Hook": Entry.Hook
	})} </section>`)}` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro";
var $$url = "/workbench";
// \0virtual:astro:page:Source/pages/workbench@_@astro
var page = () => workbench_exports;
export { page };
