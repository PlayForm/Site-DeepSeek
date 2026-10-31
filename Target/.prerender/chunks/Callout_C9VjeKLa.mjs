import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, d as renderSlot, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Callout.astro
createAstro("https://deepseek.playform.cloud");
var $$Callout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Callout;
	const { Title, Tone = "note" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<aside${addAttribute(["callout", `callout--${Tone}`], "class:list")}> <p class="callout__title">${Title}</p> <div class="callout__body"> ${renderSlot($$result, $$slots["default"])} </div> </aside>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Callout.astro", void 0);
export { $$Callout as t };
