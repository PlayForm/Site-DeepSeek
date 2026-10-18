import { S as createComponent } from "./Badge_CHteF_GF.mjs";
import { T as createAstro, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_jUwDEDCs.mjs";
//#region Source/Component/PageHero.astro
createAstro("https://deepseek.playform.cloud");
var $$PageHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHero;
	const { Title, Sub } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="page-hero"> <h1 class="page-hero__title">${Title}</h1> ${Sub && renderTemplate`<p class="page-hero__sub"> ${Sub.split("\n").map((Line, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Index > 0 && renderTemplate`<br>`} ${Line} ` })}`)} </p>`} </section>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/PageHero.astro", void 0);
//#endregion
export { $$PageHero as t };
