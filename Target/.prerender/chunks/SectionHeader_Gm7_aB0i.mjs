import { C as Mention, E as createComponent, S as DotSep, T as createAstro } from "./Badge_BknqmmDW.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate } from "./server_DzHHf9NM.mjs";
//#region Source/Component/SectionHeader.astro
createAstro("https://deepseek.playform.cloud");
var $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHeader;
	const { Title, Meta } = Astro.props;
	const Pattern = /\b(PIN|GOVERN|NORMALIZE)\b/g;
	function Emphasize(Text) {
		return Text.replace(Pattern, (Word) => {
			return `<span class="${Word === "PIN" ? "word-pin" : Word === "GOVERN" ? "word-govern" : "word-normalize"}">${Word}</span>`;
		});
	}
	return renderTemplate`${maybeRenderHead($$result)}<div class="section-header"> <div class="section-header__left"> <span class="section-header__marker"></span> <h2 class="section-header__title">${Title}</h2> </div> ${Meta && renderTemplate`<span class="section-header__meta">${unescapeHTML(DotSep(Emphasize(Mention(Meta))))}</span>`} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/SectionHeader.astro", void 0);
//#endregion
export { $$SectionHeader as t };
