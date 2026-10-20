import { E as createComponent, T as createAstro } from "./Badge_BcqTIV8g.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, p as renderSlot, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
//#region Source/Component/TerminalTray.astro
createAstro("https://deepseek.playform.cloud");
var $$TerminalTray = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TerminalTray;
	const { Label, Orange = false, Icon = false } = Astro.props;
	Orange && Label.match(/^RAW(?=[\s-]|$)/i);
	return renderTemplate`${maybeRenderHead($$result)}<div class="tray" role="group"${addAttribute(Label, "aria-label")} data-astro-cid-ptvurpk3> <span class="tray__markers" aria-hidden="true" data-astro-cid-ptvurpk3> <i class="tray__marker tray__marker--first" data-astro-cid-ptvurpk3></i> <i class="tray__marker" data-astro-cid-ptvurpk3></i> <i class="tray__marker" data-astro-cid-ptvurpk3></i> </span> <span class="tray__label" data-astro-cid-ptvurpk3> ${Icon && renderTemplate`<svg viewBox="3 2 18 20" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-ptvurpk3> <path d="M4 7 H16 M12 3 L16 7 L12 11" data-astro-cid-ptvurpk3></path> <path d="M20 17 H8 M12 13 L8 17 L12 21" data-astro-cid-ptvurpk3></path> </svg>`} <span class="tray__label-text" data-astro-cid-ptvurpk3> ${RawMatch ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <span class="tray__label-raw" data-astro-cid-ptvurpk3>${RawMatch[0]}</span> ${Label.slice(RawMatch[0].length)} ` })}` : Label} </span> </span> <span class="tray__side" data-astro-cid-ptvurpk3> ${renderSlot($$result, $$slots["default"])} </span> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/TerminalTray.astro", void 0);
//#endregion
export { $$TerminalTray as t };
