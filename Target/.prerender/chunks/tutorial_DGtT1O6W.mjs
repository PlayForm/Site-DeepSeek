import { _ as createComponent, g as createAstro, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Curve } from "./Curve_Cm6OwmBj.mjs";
// Source/Component/Scenario.astro
createAstro("https://deepseek.playform.cloud");
var $$Scenario = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Scenario;
	const { Entry, Index } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<article class="scenario"> <header class="scenario__head"> <span class="scenario__index">${String(Index).padStart(2, "0")}</span> <h3 class="scenario__title">${Entry.Title}</h3> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Entry.Property,
		"Tone": "accent"
	})} </header> <p class="scenario__situation">${Entry.Situation}</p> <div class="scenario__split"> <div class="scenario__side"> <p class="scenario__label">Default</p> <p class="scenario__text">${Entry.Default}</p> </div> <div class="scenario__side scenario__side--family"> <p class="scenario__label">Family</p> <p class="scenario__text">${Entry.Family}</p> </div> </div> <p class="scenario__knob"> <span class="scenario__knob-name">${Entry.Knob}</span> ${Entry.KnobNote} </p> </article>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Scenario.astro", void 0);
// Source/Content/Tutorial.ts
var Scenario = [
	{
		Title: "A two-hundred-kilobyte result",
		Situation: "A grep over a large tree returns two hundred kilobytes of matches, and the result reaches the model as content.",
		Default: "The harness hands the result to the model, bounded only by its own spill policy, so the bytes the model did not ask for are still in its context.",
		Family: "The CCR hook replaces the result with a preview and a retrieval marker, and keeps the original behind a tool call. The model asks for the bytes only when it needs them.",
		Property: "Bounded context",
		Knob: "autoExpandLimitBytes",
		KnobNote: "ships at 102400 bytes: under that ceiling the model still reads the full result, so this scenario needs a result above it",
		OptIn: false
	},
	{
		Title: "A write outside the workspace",
		Situation: "The model asks to write a file outside the working directory, and the call reaches the tool pipeline.",
		Default: "The sandbox decides. With no guard in the profile, a call the sandbox allows is a call that runs.",
		Family: "The workspace guard answers at the pre-execute seam: deny, ask, or allow, from a policy the profile names. The journal records the write so it can be reverted.",
		Property: "A write guard",
		Knob: "enabled",
		KnobNote: "ships off; set it in the profile's bundle patch",
		OptIn: true
	},
	{
		Title: "A dash the model likes",
		Situation: "The model writes a typographic dash, and the token leaves the model as it was generated.",
		Default: "The transcript stores what the model wrote, so the same prompt can produce an em dash, an en dash, or a hyphen on different days.",
		Family: "Six normalizers rewrite the stream at the seam: dashes, quotes, ellipses, spaces, invisible marks, and fullwidth glyphs. The same prompt produces the same bytes.",
		Property: "Deterministic output",
		Knob: "replacement",
		KnobNote: "ships on; the replacement is the one the README documents",
		OptIn: false
	}
];
// Source/pages/tutorial.astro
var tutorial_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tutorial,
	file: () => $$file,
	url: () => $$url
});
var $$Tutorial = createComponent(($$result, $$props, $$slots) => {
	const OptIn = Scenario.filter((Entry) => Entry.OptIn).length;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Tutorial",
		"Description": `Three moments in one turn, shown twice: what the harness does on its own and what the family does at the same seam.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Tutorial",
		"Title": "One turn, three moments"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The same turn twice: what the harness does on its own, and what the family does at the
			same&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "seam" })}. Each moment ends with the property it buys and the knob that
			carries it.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Moment",
		"Lede": "Read the left column first. The right column is the only difference between a harness with the family and one without."
	})} <div class="section__body stack"> ${Scenario.map((Entry, Index) => renderTemplate`${renderComponent($$result, "ScenarioCard", $$Scenario, {
		"Entry": Entry,
		"Index": Index + 1
	})}`)} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Knob",
		"Lede": "A property that ships off is not a property the site may claim for you. The profile decides."
	})} <div class="section__body stack"> <p class="lede"> ${OptIn}&nbsp;of the ${Scenario.length}&nbsp;moments here need one line in the
				profile's bundle patch before they act. The other&nbsp;${Scenario.length - OptIn} act
				on install.
</p> <p class="muted"> <a${addAttribute(Route.Setup, "href")}>Set up a plugin</a> shows the line, and${" "} <a${addAttribute(Route.Intervention, "href")}>Intervention</a> shows every seam the family stands at.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Measure",
		"Lede": "The one number the site can measure without a live run: how much of a tool result reaches the model, and where the two curves part."
	})} <div class="section__body"> ${renderComponent($$result, "Curve", $$Curve, {})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Read" })} <div class="section__body"> <p class="muted">
The default column describes the harness's own behavior, which the docs define; the
				family column describes what the package's listener does at the same seam. Where a
				package ships disabled, the page says so rather than implying the guard is on.
</p> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tutorial.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/tutorial.astro";
var $$url = "/tutorial";
// \0virtual:astro:page:Source/pages/tutorial@_@astro
var page = () => tutorial_exports;
export { page };
