import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Badge.astro
createAstro("https://deepseek.playform.cloud");
var $$Badge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Badge;
	const { Label, Tone = "neutral", Count } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(["badge", `badge--${Tone}`], "class:list")}> ${Label} ${Count !== void 0 && renderTemplate`<span class="badge__count">${Count}</span>`} </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Badge.astro", void 0);
export { $$Badge as t };
