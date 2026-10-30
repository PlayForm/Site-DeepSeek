import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/Component/Seam.astro
createAstro("https://deepseek.playform.cloud");
var $$Seam = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Seam;
	const { Name, Count, Href } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Tag", Href ? "a" : "span", {
		"class": "seam",
		"href": Href
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<span class="seam__name">${Name}</span> ${Count !== void 0 && renderTemplate`<span class="seam__count">${Count}</span>`}` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Seam.astro", void 0);
export { $$Seam as t };
