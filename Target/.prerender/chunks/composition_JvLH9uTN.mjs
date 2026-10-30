import { _ as createComponent, d as SeamHref, g as createAstro, h as $$PageHero, l as PackageHref, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Callout } from "./Callout_CcAHykrn.mjs";
// Source/Component/ArmChain.astro
createAstro("https://deepseek.playform.cloud");
var $$ArmChain = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ArmChain;
	const { Seam, Arm, Note, Linked } = Astro.props;
	const Tone = (Position) => Position === "prepend" ? "accent" : Position === "independent" ? "quiet" : "neutral";
	return renderTemplate`${maybeRenderHead($$result)}<article class="arm-chain"> <header class="arm-chain__head"> <h3 class="arm-chain__seam"> ${Linked ? renderTemplate`<a class="arm-chain__link"${addAttribute(SeamHref(Seam), "href")}> ${Seam} </a>` : Seam} </h3> <span class="arm-chain__count">${Arm.length}&nbsp;arm</span> </header> <ol class="arm-chain__list"> ${Arm.map((Entry, Index) => renderTemplate`<li class="arm-chain__arm"${addAttribute(Entry.Position, "data-position")}> <span class="arm-chain__order">${String(Index + 1).padStart(2, "0")}</span> <a class="arm-chain__slug"${addAttribute(PackageHref(Entry.Slug), "href")}> ${Entry.Slug} </a> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Entry.Position,
		"Tone": Tone(Entry.Position)
	})} <span class="arm-chain__does">${Entry.Does}</span> </li>`)} </ol> <p class="arm-chain__note">${Note}</p> </article>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/ArmChain.astro", void 0);
// Source/Content/Composition.ts
var Layer = [
	{
		Seam: "agent/pre-step",
		Arm: [
			{
				Slug: "hook-dsh-comment-filter",
				Position: "plain",
				Does: "reads the intent it will act on later"
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "adds a coaching note to the step"
			},
			{
				Slug: "hook-dsh-live-containers",
				Position: "plain",
				Does: "adds the live container state"
			},
			{
				Slug: "plugin-dsh-batch-edit",
				Position: "plain",
				Does: "arms its one-shot batch flag"
			},
			{
				Slug: "hook-dsh-ccr",
				Position: "plain",
				Does: "runs the middle-turn archive decision when its engine is on"
			}
		],
		Note: "The first seam of every step, and the busiest: five packages read or extend the step before the model is called."
	},
	{
		Seam: "tools/pre-execute",
		Arm: [
			{
				Slug: "hook-dsh-workspace-govern",
				Position: "plain",
				Does: "allows, denies, or asks"
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "annotates the call it sees"
			},
			{
				Slug: "plugin-dsh-batch-edit",
				Position: "plain",
				Does: "turns its armed flag into a batch"
			}
		],
		Note: "The gate: a deny here stops the call before any tool body runs, which is what makes the guard a guard."
	},
	{
		Seam: "tools/execute",
		Arm: [{
			Slug: "hook-dsh-live-containers",
			Position: "plain",
			Does: "wraps the tool body"
		}],
		Note: "The only arm around the tool body itself, which is where a timeout or a metric would attach."
	},
	{
		Seam: "tools/post-execute",
		Arm: [
			{
				Slug: "hook-dsh-ccr",
				Position: "prepend",
				Does: "compresses an oversized result into a preview and a marker"
			},
			{
				Slug: "hook-dsh-comment-filter",
				Position: "prepend",
				Does: "strips comments from the result"
			},
			{
				Slug: "hook-dsh-normalize-dash",
				Position: "prepend",
				Does: "normalizes the result's text"
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "reads the result and records a lesson"
			},
			{
				Slug: "hook-dsh-live-containers",
				Position: "plain",
				Does: "reads the result for its monitor"
			},
			{
				Slug: "hook-dsh-workspace-govern",
				Position: "plain",
				Does: "observes the result of a call it allowed"
			}
		],
		Note: "The chain that matters: the three prepended arms run outside the plain listeners, so CCR compresses the bytes the normalizers already rewrote."
	},
	{
		Seam: "system-prompt/assemble",
		Arm: [{
			Slug: "hook-dsh-tool-coach",
			Position: "plain",
			Does: "adds its coaching section"
		}, {
			Slug: "hook-dsh-live-containers",
			Position: "plain",
			Does: "adds its live-state section"
		}],
		Note: "The prompt is assembled per step, so a section added here is added to every request the step makes."
	},
	{
		Seam: "llm/stream",
		Arm: [{
			Slug: "hook-dsh-normalize-dash",
			Position: "plain",
			Does: "rewrites each chunk as it arrives"
		}],
		Note: "The last seam before the model's text becomes the transcript, and the one place a character can still change."
	}
];
var Independent = [{
	Slug: "plugin-dsh-cost",
	Position: "independent",
	Does: "records spend on every committed event"
}, {
	Slug: "hook-dsh-workspace-journal",
	Position: "independent",
	Does: "records each write and keeps its pre-image"
}];
// Source/pages/composition.astro
var composition_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Composition,
	file: () => $$file,
	url: () => $$url
});
var $$Composition = createComponent(($$result, $$props, $$slots) => {
	const Page = new Set(Seam.map((Entry) => Entry.Name));
	const Arm = Layer.reduce((Total, Entry) => Total + Entry.Arm.length, 0);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Composition",
		"Description": `How the family's plugins compose at one turn: the order they run at each seam, and what one arm does to the next arm's input.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Composition",
		"Title": "How the family composes"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`${Arm}&nbsp;arms across ${Layer.length}&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })}, in the order they run. Order is the whole design: an arm that runs
			outside its neighbours sees a different payload than one that runs inside them.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Chain",
		"Lede": "Each seam is a list, not a hook. Read top to bottom: the first arm's output is the second arm's input."
	})} <div class="section__body stack"> ${Layer.map((Entry) => renderTemplate`${renderComponent($$result, "ArmChain", $$ArmChain, {
		"Seam": Entry.Seam,
		"Arm": Entry.Arm,
		"Note": Entry.Note,
		"Linked": Page.has(Entry.Seam)
	})}`)} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Position",
		"Lede": "Two positions do the work: prepend, which runs outside the plain listeners, and plain, which runs inside them."
	})} <div class="section__body stack"> ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Prepend",
		"Tone": "note"
	}, { "default": ($$result) => renderTemplate`
A prepended arm is registered outside the listeners that mount with the bundle, so
				it receives the payload first and its output is what the plain listeners see. The
				CCR gate uses this to compress the bytes the normalizers already rewrote.
` })} ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Plain",
		"Tone": "note"
	}, { "default": ($$result) => renderTemplate`
A plain arm runs inside the bundle's own order. Two plain arms at one seam compose
				in the order the bundle lists them, which is why the profile's bundle list is part
				of the behavior.
` })} ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Independent",
		"Tone": "warn"
	}, { "default": ($$result) => renderTemplate`
Two arms do not compose at all: cost records every committed event, and the journal
				records every write. They run on their own seams and see nothing the chains above
				produce.
` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Tree",
		"Lede": "Classic and Effect-TS are one behavior in two trees. A composition claim holds for both, or it is not a claim about the family."
	})} <div class="section__body stack"> <p class="lede">
Every arm above exists twice, once as <span class="mono">hook-dsh-*</span> and once
				as
<span class="mono">ets-hook-dsh-*</span>, with the same seam, the same position, and
				the same ledger string.
</p> <ul class="cluster"> ${Independent.map((Entry) => renderTemplate`<li> <a class="button button--quiet"${addAttribute(`/package/${Entry.Slug}/`, "href")}> ${Entry.Slug} </a> </li>`)} </ul> <p class="muted"> <a${addAttribute(Route.Package, "href")}>The catalogue</a> lists both trees;${" "} <a${addAttribute(Route.Turn, "href")}>the turn</a> shows the seams they stand at.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Read" })} <div class="section__body"> <p class="muted">
The order is the order the listeners run in the family's own bundle, which is what
				the profile mounts. A profile that lists its bundles differently changes the plain
				order, and this page says so rather than presenting one profile as the only one.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/composition.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/composition.astro";
var $$url = "/composition";
// \0virtual:astro:page:Source/pages/composition@_@astro
var page = () => composition_exports;
export { page };
