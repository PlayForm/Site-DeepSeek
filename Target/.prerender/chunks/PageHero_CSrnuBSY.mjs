import { E as createComponent, T as createAstro } from "./Badge_BcqTIV8g.mjs";
import { _ as maybeRenderHead, g as renderTemplate, p as renderSlot } from "./server_DzHHf9NM.mjs";
//#region Source/Component/PageHero.astro
createAstro("https://deepseek.playform.cloud");
var $$PageHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHero;
	const { Title, Sub } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="page-hero"> <h1 class="page-hero__title">${Title}</h1> ${Sub && Sub.split("\n").map((Line, Index) => Index === 1 && Astro.slots.has("sub-1") ? renderTemplate`<p class="page-hero__sub">${renderSlot($$result, $$slots["sub-1"])}</p>` : renderTemplate`<p class="page-hero__sub">${Line}</p>`)} </section>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/PageHero.astro", void 0);
//#endregion
export { $$PageHero as t };
