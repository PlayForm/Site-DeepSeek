import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/VersionPill.astro
createAstro("https://deepseek.playform.cloud");
var $$VersionPill = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$VersionPill;
	const { Version, Private = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span class="version-pill"> <span class="version-pill__number">${Version}</span> ${Private && renderTemplate`<span class="version-pill__state">private</span>`} </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/VersionPill.astro", void 0);
export { $$VersionPill as t };
