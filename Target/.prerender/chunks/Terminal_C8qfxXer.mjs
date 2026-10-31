import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/Component/Terminal.astro
createAstro("https://deepseek.playform.cloud");
var $$Terminal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Terminal;
	const { Line, Label = "Terminal" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="terminal"> <figcaption class="terminal__bar"> <span class="terminal__label">${Label}</span> <span class="terminal__state">read-only</span> </figcaption> <div class="terminal__body"> ${Line.map((Entry) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Entry.Command && renderTemplate`<p class="terminal__command"> <span class="terminal__prompt" aria-hidden="true">
$
</span> <span>${Entry.Command}</span> </p>`} ${Entry.Output && renderTemplate`<pre class="terminal__output">${Entry.Output}</pre>`} ` })}`)} </div> </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Terminal.astro", void 0);
export { $$Terminal as t };
