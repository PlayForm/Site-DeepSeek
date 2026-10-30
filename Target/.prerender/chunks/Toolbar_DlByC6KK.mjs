import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, d as renderSlot, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Toolbar.astro
createAstro("https://deepseek.playform.cloud");
var $$Toolbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Toolbar;
	const { Label, Count, Action } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="toolbar"> <div class="toolbar__lead"> <span class="toolbar__label">${Label}</span> ${Count !== void 0 && renderTemplate`<span class="toolbar__count">${Count}</span>`} </div> <div class="toolbar__controls"> ${renderSlot($$result, $$slots["default"])} </div> ${Action !== void 0 && Action.length > 0 && renderTemplate`<ul class="toolbar__actions"> ${Action.map((Entry) => renderTemplate`<li> <a class="toolbar__action"${addAttribute(Entry.Href, "href")}> ${Entry.Label} </a> </li>`)} </ul>`} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Toolbar.astro", void 0);
export { $$Toolbar as t };
