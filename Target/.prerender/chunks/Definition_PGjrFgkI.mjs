import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Definition.astro
createAstro("https://deepseek.playform.cloud");
var $$Definition = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Definition;
	const { Definition } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<dl class="definition"> ${Definition.map((Entry) => renderTemplate`<div class="definition__row"> <dt class="definition__term">${Entry.Term}</dt> <dd class="definition__detail">${Entry.Detail}</dd> </div>`)} </dl>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Definition.astro", void 0);
export { $$Definition as t };
