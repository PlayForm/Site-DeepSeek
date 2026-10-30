import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Pager.astro
createAstro("https://deepseek.playform.cloud");
var $$Pager = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pager;
	const { Previous, Next } = Astro.props;
	return renderTemplate`${(Previous || Next) && renderTemplate`${maybeRenderHead($$result)}<nav class="pager" aria-label="Sequence"> ${Previous ? renderTemplate`<a class="pager__step pager__step--previous"${addAttribute(Previous.Href, "href")}> <span class="pager__kicker">Previous</span> <span class="pager__label">${Previous.Label}</span> </a>` : renderTemplate`<span></span>`} ${Next ? renderTemplate`<a class="pager__step pager__step--next"${addAttribute(Next.Href, "href")}> <span class="pager__kicker">Next</span> <span class="pager__label">${Next.Label}</span> </a>` : renderTemplate`<span></span>`} </nav>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Pager.astro", void 0);
export { $$Pager as t };
