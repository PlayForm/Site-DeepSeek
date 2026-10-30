import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, d as renderSlot, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Disclosure.astro
createAstro("https://deepseek.playform.cloud");
var $$Disclosure = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Disclosure;
	const { Summary, Count, Open = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<details class="disclosure"${addAttribute(Open, "open")}> <summary class="disclosure__summary"> <span class="disclosure__chevron" aria-hidden="true"></span> <span class="disclosure__text">${Summary}</span> ${Count !== void 0 && renderTemplate`<span class="disclosure__count">${Count}</span>`} </summary> <div class="disclosure__body"> ${renderSlot($$result, $$slots["default"])} </div> </details>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Disclosure.astro", void 0);
export { $$Disclosure as t };
