import { _ as createComponent, d as SeamHref, g as createAstro, l as PackageHref } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
// Source/Component/RoleList.astro
createAstro("https://deepseek.playform.cloud");
var $$RoleList = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RoleList;
	const { Entry } = Astro.props;
	const Page = new Set(Seam.map((Item) => Item.Name));
	return renderTemplate`${maybeRenderHead($$result)}<ol class="role"> ${Entry.map((Item) => renderTemplate`<li class="role__item"> <header class="role__head"> <span class="role__order">${String(Item.Order).padStart(2, "0")}</span> <h3 class="role__name">${Item.Name}</h3> </header> <p class="role__what">${Item.What}</p> <dl class="role__facts"> <div class="role__pair"> <dt class="role__label">Seam</dt> <dd class="role__value"> <ul class="role__seams"> ${Item.Seam.map((Name) => renderTemplate`<li class="role__seam"> ${Page.has(Name) ? renderTemplate`<a class="role__link"${addAttribute(SeamHref(Name), "href")}> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": "accent"
	})} </a>` : renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": "quiet"
	})}`} </li>`)} </ul> </dd> </div> <div class="role__pair"> <dt class="role__label">Plugin</dt> <dd class="role__value"> ${Item.Plugin.length > 0 ? renderTemplate`<ul class="role__plugins"> ${Item.Plugin.map((Name) => renderTemplate`<li> <a class="role__plugin"${addAttribute(PackageHref(Name), "href")}> ${Name} </a> </li>`)} </ul>` : renderTemplate`<span class="role__none">none</span>`} </dd> </div> </dl> <p${addAttribute(["role__change", { "role__change--quiet": Item.Plugin.length === 0 }], "class:list")}> ${Item.Plugin.length === 0 ? "unchanged" : Item.Change} </p> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/RoleList.astro", void 0);
export { $$RoleList as t };
