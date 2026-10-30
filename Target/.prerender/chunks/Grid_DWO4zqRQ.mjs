import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Component/Grid.astro
createAstro("https://deepseek.playform.cloud");
var $$Grid = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Grid;
	const { Head, Row, Caption } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="grid-plot"> <table> ${Caption ? renderTemplate`<caption class="grid-plot__caption">${Caption}</caption>` : renderTemplate`<caption class="visually-hidden">The rows and their outcomes</caption>`} <thead> <tr> <th scope="col" class="grid-plot__lead"> <span class="visually-hidden">Row</span> </th> ${Head.map((Heading) => renderTemplate`<th scope="col">${Heading}</th>`)} </tr> </thead> <tbody> ${Row.map((Entry) => renderTemplate`<tr> <th scope="row" class="grid-plot__lead"> ${Entry.Label} </th> ${Head.map((_Heading, Index) => {
		const Cell = Entry.Cell[Index] ?? "";
		return renderTemplate`<td> ${Cell === "yes" ? renderTemplate`<span class="grid-plot__mark grid-plot__mark--yes"> <span class="visually-hidden">yes</span> </span>` : Cell === "no" ? renderTemplate`<span class="grid-plot__mark grid-plot__mark--no"> <span class="visually-hidden">no</span> </span>` : Cell === "" ? renderTemplate`<span class="grid-plot__slot" aria-hidden="true"></span>` : renderTemplate`<span class="grid-plot__word">${Cell}</span>`} </td>`;
	})} </tr>`)} </tbody> </table> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Grid.astro", void 0);
export { $$Grid as t };
