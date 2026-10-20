import { E as createComponent, T as createAstro, i as Linkify, x as $$BrandIcon } from "./Badge_BknqmmDW.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent } from "./server_DzHHf9NM.mjs";
//#region Source/Component/Seams.astro
createAstro("https://deepseek.playform.cloud");
var $$Seams = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Seams;
	const { Seams } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="table-wrap"> <table class="table"> <thead> <tr> <th> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "chain",
		"Size": "0.9em"
	})}Seam
</th> <th>What the plugin does there</th> <th>What you can observe</th> </tr> </thead> <tbody> <!-- The cells render through Linkify: a [text](target) segment in the
			     plain-text props becomes a safe <a>, everything else stays text. -->${Seams.map((Row) => renderTemplate`<tr> <td> <strong>${unescapeHTML(Linkify(Row.Seam))}</strong> </td> <td>${unescapeHTML(Linkify(Row.What))}</td> <td>${unescapeHTML(Linkify(Row.Outcome))}</td> </tr>`)} </tbody> </table> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Seams.astro", void 0);
//#endregion
export { $$Seams as t };
