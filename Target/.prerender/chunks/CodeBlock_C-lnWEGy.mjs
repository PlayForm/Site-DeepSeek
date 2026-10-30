import { _ as createComponent$1, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { ssr, ssrHydrationKey } from "solid-js/web";
import { createSignal, onCleanup } from "solid-js";
// Source/Component/CopyButton.tsx
var _tmpl$ = [
	"<button",
	" type=\"button\" class=\"copy-button\" aria-live=\"polite\">",
	"</button>"
];
var CopyButton_default = (Props) => {
	const [Copied, SetCopied] = createSignal(false);
	let Timer;
	onCleanup(() => clearTimeout(Timer));
	return ssr(_tmpl$, ssrHydrationKey(), Copied() ? "Copied" : "Copy");
};
// Source/Component/CodeBlock.astro
createAstro("https://deepseek.playform.cloud");
var $$CodeBlock = createComponent$1(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CodeBlock;
	const { Code, Language, Label } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="code-block"> <figcaption class="code-block__bar"> <span class="code-block__label">${Label ?? Language ?? "code"}</span> <span class="code-block__controls"> ${Language && Label && renderTemplate`<span class="code-block__language">${Language}</span>`} ${renderComponent($$result, "CopyButton", CopyButton_default, {
		"Text": Code,
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "@Component/CopyButton.tsx",
		"client:component-export": "default"
	})} </span> </figcaption> <pre class="code-block__body"><code>${Code}</code></pre> </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/CodeBlock.astro", void 0);
export { $$CodeBlock as t };
