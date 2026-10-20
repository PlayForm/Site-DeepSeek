import { E as createComponent, T as createAstro, i as Linkify, x as $$BrandIcon } from "./Badge_BknqmmDW.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, p as renderSlot, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
//#region Source/Component/Card.astro
createAstro("https://deepseek.playform.cloud");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { Variant = "default", Name, Icon, NameTone = "ink", Sentence, Desc, Muted = false, Install, Tags, Copy, Href } = Astro.props;
	const Class = `card${Variant === "default" ? "" : ` card--${Variant}`}`;
	return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(Class, "class")}${addAttribute(Name, "data-package")}${addAttribute(Tags, "data-tags")}> ${Name ? renderTemplate`<div class="card__top"> ${Href ? renderTemplate`<a${addAttribute(`card__name card__name--${NameTone}`, "class")}${addAttribute(Href, "href")}${addAttribute(Name, "title")}>${Icon && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": Icon,
		"Size": "0.9em"
	})}${" "}` })}`}${Name}</a>` : renderTemplate`<span${addAttribute(`card__name card__name--${NameTone}`, "class")}${addAttribute(Name, "title")}> ${Icon && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": Icon,
		"Size": "0.9em"
	})}${" "}` })}`}${Name} </span>`} ${renderSlot($$result, $$slots["badge"])} </div>` : renderTemplate`${renderSlot($$result, $$slots["head"])}`} ${Sentence && renderTemplate`<p class="card__sentence">${Sentence}</p>`} <!-- The description renders through Linkify: a [text](target) segment in the
	     plain-text prop becomes a safe <a>, everything else stays text. Newlines
	     in the prop become the visible paragraph breaks (the sentence-lane law:
	     the source's line break is the blank-line separation between paragraphs). --> ${Desc && Desc.split("\n").map((Segment) => renderTemplate`<p${addAttribute(`card__desc${Muted ? " card__desc--muted" : ""}`, "class")}>${unescapeHTML(Linkify(Segment))}</p>`)} ${renderSlot($$result, $$slots["default"])} ${Install && renderTemplate`<div class="card__install"> <span class="card__install-cmd"${addAttribute(Install, "title")}> <span class="prompt">$</span> ${Install} </span> ${Copy && renderTemplate`<button class="copy-trigger" type="button"${addAttribute(Copy, "data-copy")}${addAttribute(`Copy ${Install}`, "aria-label")}> <span data-copy-label>COPY</span> </button>`} </div>`} ${renderSlot($$result, $$slots["after"])} </article>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Card.astro", void 0);
//#endregion
export { $$Card as t };
