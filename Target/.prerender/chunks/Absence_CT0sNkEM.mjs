import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Absence.astro
createAstro("https://deepseek.playform.cloud");
var $$Absence = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Absence;
	const { Title, Note } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="absence"> <p class="absence__title">${Title}</p> <p class="absence__note">${Note}</p> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Absence.astro", void 0);
export { $$Absence as t };
