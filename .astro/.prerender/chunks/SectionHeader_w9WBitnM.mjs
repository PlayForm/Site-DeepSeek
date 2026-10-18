import { S as createComponent } from "./Badge_CHteF_GF.mjs";
import { T as createAstro, m as maybeRenderHead, p as renderTemplate } from "./server_jUwDEDCs.mjs";
//#region Source/Component/SectionHeader.astro
createAstro("https://deepseek.playform.cloud");
var $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHeader;
	const { Title, Meta } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="section-header"> <div class="section-header__left"> <span class="section-header__marker"></span> <h2 class="section-header__title">${Title}</h2> </div> ${Meta && renderTemplate`<span class="section-header__meta">${Meta}</span>`} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/SectionHeader.astro", void 0);
//#endregion
export { $$SectionHeader as t };
