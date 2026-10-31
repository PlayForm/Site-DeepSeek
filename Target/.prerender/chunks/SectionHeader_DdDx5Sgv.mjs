import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, d as renderSlot, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/SectionHeader.astro
createAstro("https://deepseek.playform.cloud");
var $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHeader;
	const { Title, Lede, Id } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header class="section-header"${addAttribute(Id, "id")}> <h2>${Title}</h2> ${Astro.slots.has("Lede") ? renderTemplate`<div class="section-header__lede"> ${renderSlot($$result, $$slots["Lede"])} </div>` : Lede && renderTemplate`<p class="section-header__lede">${Lede}</p>`} </header>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/SectionHeader.astro", void 0);
export { $$SectionHeader as t };
