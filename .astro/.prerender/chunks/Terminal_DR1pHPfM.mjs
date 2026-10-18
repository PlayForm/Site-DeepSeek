import { S as createComponent, x as renderScript } from "./Badge_CHteF_GF.mjs";
import { T as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_jUwDEDCs.mjs";
//#region Source/Component/Terminal.astro
createAstro("https://deepseek.playform.cloud");
var $$Terminal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Terminal;
	const { Command = "pnpm add @playform/hook-dsh-core", Label = "CLI INSTALL", Rail = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`terminal${Rail ? " rail-orange" : ""}`, "class")}${addAttribute(Command, "data-command")}> <div class="terminal__bar"> <span class="terminal__label"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path d="M4 17 L9 12 L4 7 M10 17 H20"></path> </svg> ${Label} </span> <span class="terminal__status">COPIED</span> </div> <div class="terminal__line"> <code> <span class="prompt">$</span> ${Command} </code> <button aria-label="Copy install command" class="terminal__copy" type="button"${addAttribute(Command, "data-copy")}> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <rect x="9" y="9" width="11" height="11" rx="2"></rect> <path d="M5 15 H4 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 H14 a1 1 0 0 1 1 1 v1"></path> </svg> </button> </div> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Terminal.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Terminal.astro", void 0);
//#endregion
export { $$Terminal as t };
