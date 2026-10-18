import { S as createComponent, b as $$BrandIcon, t as $$Badge, y as Versions } from "./Badge_CHteF_GF.mjs";
import { T as createAstro, m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_jUwDEDCs.mjs";
//#region Source/Component/FlavorBadge.astro
createAstro("https://deepseek.playform.cloud");
var $$FlavorBadge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FlavorBadge;
	const { Flavor, Variant = "muted", Icon = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span class="flavor-stack"> ${renderComponent($$result, "Badge", $$Badge, { "Variant": Variant }, { "default": ($$result) => renderTemplate`${Icon && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "swap",
		"Size": "0.8em"
	})}`}<span class="flavor-prefix">FLAVOR:</span> ${Flavor}` })} <span class="flavor-version">v${Versions.Release}</span> </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/FlavorBadge.astro", void 0);
//#endregion
export { $$FlavorBadge as t };
