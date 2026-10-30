import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Pending.astro
createAstro("https://deepseek.playform.cloud");
var $$Pending = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pending;
	const { Name, Meta } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="pending"> <span class="pending__dot" aria-hidden="true"></span> <span class="pending__name">${Name}</span> ${Meta && renderTemplate`<span class="pending__meta">${Meta}</span>`} <span class="pending__state">pending</span> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Pending.astro", void 0);
export { $$Pending as t };
