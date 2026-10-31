import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { d as renderSlot, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/Component/Card.astro
createAstro("https://deepseek.playform.cloud");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { Title, Href, Meta } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Tag", Href ? "a" : "div", {
		"class": "card",
		"href": Href
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<span class="card__head"> <span class="card__title">${Title}</span> ${Meta && renderTemplate`<span class="card__meta">${Meta}</span>`} </span> <span class="card__body"> ${renderSlot($$result, $$slots["default"])} </span> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Card.astro", void 0);
export { $$Card as t };
