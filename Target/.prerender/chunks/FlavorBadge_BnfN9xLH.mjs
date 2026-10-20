import { E as createComponent, T as createAstro, b as Versions, t as $$Badge, x as $$BrandIcon } from "./Badge_BcqTIV8g.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, y as addAttribute } from "./server_DzHHf9NM.mjs";
//#region Source/Component/FlavorBadge.astro
createAstro("https://deepseek.playform.cloud");
var $$FlavorBadge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FlavorBadge;
	const { Flavor, Variant = "muted", Icon = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span class="flavor-stack" role="group"${addAttribute(`Flavor ${Flavor}, version ${Versions.Release}`, "aria-label")}> ${renderComponent($$result, "Badge", $$Badge, { "Variant": Variant }, { "default": ($$result) => renderTemplate`${Icon && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "swap",
		"Size": "0.8em"
	})}`}<span class="flavor-prefix">FLAVOR:</span> ${Flavor}` })} <span class="flavor-version">v${Versions.Release}</span> </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/FlavorBadge.astro", void 0);
//#endregion
export { $$FlavorBadge as t };
