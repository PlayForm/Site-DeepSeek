import { S as createComponent } from "./Badge_CHteF_GF.mjs";
import { C as unescapeHTML, T as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_jUwDEDCs.mjs";
import { codeToHtml } from "shiki";
//#region Source/Component/CodeBlock.astro
createAstro("https://deepseek.playform.cloud");
var $$CodeBlock = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CodeBlock;
	const { Source, Language = "json", Style } = Astro.props;
	const Highlighted = await codeToHtml(Source, {
		lang: Language,
		theme: "github-light"
	});
	return renderTemplate`${maybeRenderHead($$result)}<div class="code-block"${addAttribute(Style, "style")}>${unescapeHTML(Highlighted)}</div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/CodeBlock.astro", void 0);
//#endregion
export { $$CodeBlock as t };
