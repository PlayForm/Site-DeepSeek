import { E as createComponent, S as DotSep, T as createAstro, b as Versions, w as renderScript } from "./Badge_epMRbWWn.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
//#region Source/Component/Terminal.astro
createAstro("https://deepseek.playform.cloud");
var $$Terminal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Terminal;
	const { Command, Pkg, Label = `CLI INSTALL · NPM · ${Versions.Release}`, Rail = false } = Astro.props;
	const Composed = Command ?? (Pkg ? `npm install @playform/${Pkg}@${Versions.Release}` : `npm install @playform/hook-dsh-core@${Versions.Release}`);
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`terminal${Rail ? " rail-orange" : ""}`, "class")}${addAttribute(Composed, "data-command")}> <div class="terminal__bar"> <span class="terminal__label"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path d="M4 17 L9 12 L4 7 M10 17 H20"></path> </svg> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep(Label))}` })} </span> <span class="terminal__status">COPIED</span> </div> <div class="terminal__line"> <code> <span class="prompt">$</span> ${Composed} </code> <button aria-label="Copy install command" class="terminal__copy" type="button"${addAttribute(Composed, "data-copy")}> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <rect x="9" y="9" width="11" height="11" rx="2"></rect> <path d="M5 15 H4 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 H14 a1 1 0 0 1 1 1 v1"></path> </svg> </button> </div> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Terminal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Terminal.astro", void 0);
//#endregion
export { $$Terminal as t };
