import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Lane.astro
createAstro("https://deepseek.playform.cloud");
var $$Lane = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Lane;
	const { Lane } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="lane" role="img" aria-label="The turn as lanes: when each actor was busy"> ${Lane.map((Entry) => renderTemplate`<div class="lane__row"> <span class="lane__label">${Entry.Label}</span> <span class="lane__track"> ${Entry.Span.map((Span) => renderTemplate`<span class="lane__span"${addAttribute(Span.Kind, "data-kind")}${addAttribute({
		left: `${Span.Start}%`,
		width: `${Span.Duration}%`
	}, "style")}${addAttribute(`${Span.Label}: ${Span.Duration}% of the turn`, "title")}> <span class="lane__text">${Span.Label}</span> </span>`)} </span> </div>`)} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Lane.astro", void 0);
export { $$Lane as t };
