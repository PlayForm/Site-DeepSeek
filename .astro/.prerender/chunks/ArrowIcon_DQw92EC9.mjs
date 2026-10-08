import { S as createComponent } from "./Badge_CHteF_GF.mjs";
import { T as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate } from "./server_jUwDEDCs.mjs";
//#region Source/Component/ArrowIcon.astro
createAstro("https://deepseek.playform.cloud");
var $$ArrowIcon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ArrowIcon;
	const { Direction = "right", Tone = "current" } = Astro.props;
	const [Shaft, Head] = {
		right: ["M4 12 H20", "M13 5 L20 12 L13 19"],
		left: ["M20 12 H4", "M11 5 L4 12 L11 19"],
		up: ["M12 20 V4", "M5 11 L12 4 L19 11"],
		down: ["M12 4 V20", "M5 13 L12 20 L19 13"]
	}[Direction];
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(`arrow-icon arrow-icon--${Tone}`, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-o26fwbea> <path${addAttribute(Shaft, "d")} data-astro-cid-o26fwbea></path> <path${addAttribute(Head, "d")} data-astro-cid-o26fwbea></path> </svg>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/ArrowIcon.astro", void 0);
//#endregion
export { $$ArrowIcon as t };
