import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Transform.astro
createAstro("https://deepseek.playform.cloud");
var $$Transform = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Transform;
	const { Sample } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<ol class="transform"> ${Sample.map((Entry) => renderTemplate`<li class="transform__row"> <span class="transform__hook"> <a class="transform__slug"${addAttribute(`/package/${Entry.Slug}/`, "href")}> ${Entry.Slug.replace(/^hook-dsh-/, "")} </a> <span class="transform__code">${Entry.Code}</span> </span> <span class="transform__glyph"${addAttribute(`${Entry.Code} in`, "title")}> ${Entry.In} </span> <span class="transform__arrow" aria-hidden="true">
→
</span> <span class="transform__glyph transform__glyph--out" title="out"> ${Entry.Out === "" ? renderTemplate`<span class="transform__gone">removed</span>` : Entry.Out} </span> <span class="transform__note">${Entry.Note}</span> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Transform.astro", void 0);
export { $$Transform as t };
