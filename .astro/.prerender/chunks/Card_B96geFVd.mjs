import { S as createComponent, i as Linkify } from "./Badge_CHteF_GF.mjs";
import { C as unescapeHTML, T as createAstro, g as addAttribute, m as maybeRenderHead, p as renderTemplate, u as renderSlot } from "./server_jUwDEDCs.mjs";
//#region Source/Component/Card.astro
createAstro("https://deepseek.playform.cloud");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { Variant = "default", Name, NameTone = "ink", Sentence, Desc, Muted = false, Install, Tags, Copy, Href } = Astro.props;
	const CardClass = `card${Variant === "default" ? "" : ` card--${Variant}`}`;
	return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(CardClass, "class")}${addAttribute(Name, "data-package")}${addAttribute(Tags, "data-tags")}> ${Name ? renderTemplate`<div class="card__top"> ${Href ? renderTemplate`<a${addAttribute(`card__name card__name--${NameTone}`, "class")}${addAttribute(Href, "href")}> ${Name} </a>` : renderTemplate`<span${addAttribute(`card__name card__name--${NameTone}`, "class")}>${Name}</span>`} ${renderSlot($$result, $$slots["badge"])} </div>` : renderTemplate`${renderSlot($$result, $$slots["head"])}`} ${Sentence && renderTemplate`<p class="card__sentence">${Sentence}</p>`} <!-- The description renders through Linkify: a [text](target) segment in the
	     plain-text prop becomes a safe <a>, everything else stays text. Newlines
	     in the prop become visible sentence breaks (<br />). --> ${Desc && renderTemplate`<p${addAttribute(`card__desc${Muted ? " card__desc--muted" : ""}`, "class")}>${unescapeHTML(Linkify(Desc).replace(/\n/g, "<br />"))}</p>`} ${renderSlot($$result, $$slots["default"])} ${Install && renderTemplate`<div class="card__install"> <span class="card__install-cmd"> <span class="prompt">$</span> ${Install} </span> ${Copy && renderTemplate`<button class="copy-trigger" type="button"${addAttribute(Copy, "data-copy")}${addAttribute(`Copy ${Install}`, "aria-label")}> <span data-copy-label>COPY</span> </button>`} </div>`} ${renderSlot($$result, $$slots["after"])} </article>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Card.astro", void 0);
//#endregion
export { $$Card as t };
