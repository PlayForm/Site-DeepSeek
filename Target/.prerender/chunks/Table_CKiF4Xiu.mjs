import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$Badge } from "./Badge_DH5fDljn.mjs";
import { t as $$Icon } from "./Icon_DDezI4Ii.mjs";
// Source/Component/Table.astro
createAstro("https://deepseek.playform.cloud");
var $$Table = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Table;
	const { Head, Row, Caption } = Astro.props;
	function IsLink(Cell) {
		return typeof Cell !== "string" && "Text" in Cell;
	}
	function IsBadge(Cell) {
		return typeof Cell !== "string" && "Badge" in Cell;
	}
	return renderTemplate`${maybeRenderHead($$result)}<div class="table"> <table> ${Caption && renderTemplate`<caption class="visually-hidden">${Caption}</caption>`} <thead> <tr> ${Head.map((Heading) => renderTemplate`<th scope="col">${Heading}</th>`)} </tr> </thead> <tbody> ${Row.map((Cells) => renderTemplate`<tr> ${Cells.map((Cell, Index) => renderTemplate`<td> ${IsBadge(Cell) ? renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": Cell.Badge.Label,
		"Tone": Cell.Badge.Tone
	})}` : IsLink(Cell) ? renderTemplate`<a class="table__link"${addAttribute(Cell.Href, "href")}> ${Cell.Icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
		"Name": Cell.Icon,
		"Size": 32
	})}`} ${Cell.Text} </a>` : Index === 0 ? renderTemplate`<strong>${Cell}</strong>` : Cell} </td>`)} </tr>`)} </tbody> </table> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Table.astro", void 0);
export { $$Table as t };
