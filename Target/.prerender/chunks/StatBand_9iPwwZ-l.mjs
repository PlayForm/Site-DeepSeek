import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/StatBand.astro
createAstro("https://deepseek.playform.cloud");
var $$StatBand = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StatBand;
	const { Stat } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<dl class="stat-band"> ${Stat.map((Entry) => renderTemplate`<div class="stat-band__item"> <dt class="stat-band__label">${Entry.Label}</dt> <dd class="stat-band__value">${Entry.Value}</dd> ${Entry.Note && renderTemplate`<dd class="stat-band__note">${Entry.Note}</dd>`} </div>`)} </dl>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/StatBand.astro", void 0);
export { $$StatBand as t };
