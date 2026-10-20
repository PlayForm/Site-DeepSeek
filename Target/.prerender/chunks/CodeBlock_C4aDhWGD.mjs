import { E as createComponent, T as createAstro } from "./Badge_epMRbWWn.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { codeToHtml } from "shiki";
//#region Source/Component/CodeBlock.astro
createAstro("https://deepseek.playform.cloud");
var $$CodeBlock = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CodeBlock;
	const { Source, Language = "json", Style } = Astro.props;
	const Highlighted = await codeToHtml(Source, {
		lang: Language,
		themes: {
			light: "github-light",
			dark: "github-dark"
		},
		defaultColor: "light"
	});
	return renderTemplate`${maybeRenderHead($$result)}<div class="code-block"${addAttribute(Style, "style")}>${unescapeHTML(Highlighted)}</div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/CodeBlock.astro", void 0);
//#endregion
export { $$CodeBlock as t };
