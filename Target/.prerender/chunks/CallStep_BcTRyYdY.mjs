import { _ as createComponent, d as SeamHref, g as createAstro, l as PackageHref } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import "./ToolCall_B28V7jio.mjs";
// Source/Component/CallStep.astro
createAstro("https://deepseek.playform.cloud");
var $$CallStep = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CallStep;
	const { Entry } = Astro.props;
	const Page = new Set(Seam.map((Item) => Item.Name));
	const Ask = "ask";
	return renderTemplate`${maybeRenderHead($$result)}<ol class="call"> ${Entry.map((Item) => renderTemplate`<li class="call__step"> <span class="call__index">${String(Item.Index).padStart(2, "0")}</span> <div class="call__body"> <header class="call__head"> <h3 class="call__title">${Item.Title}</h3> ${Item.Seam.length > 0 ? Page.has(Item.Seam) ? renderTemplate`<a class="call__link"${addAttribute(SeamHref(Item.Seam), "href")}> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Item.Seam,
		"Tone": "accent"
	})} </a>` : renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": Item.Seam,
		"Tone": "quiet"
	})}` : renderTemplate`<span class="call__empty">no seam here</span>`} </header> <dl class="call__flow"> <div class="call__pair"> <dt class="call__label">Receives</dt> <dd class="call__value">${Item.Receives}</dd> </div> <div class="call__pair"> <dt class="call__label">Decides</dt> <dd class="call__value"> ${Item.Decides.length > 0 ? renderTemplate`<ul class="call__list"> ${Item.Decides.map((Name) => renderTemplate`<li class="call__item"> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Name,
		"Tone": "neutral"
	})} </li>`)} </ul>` : renderTemplate`<span class="call__none">the docs name none here</span>`} </dd> </div> </dl> ${Item.Decides.includes(Ask) && renderTemplate`<div class="call__branch"> <div class="call__branch-lead"> <span class="call__label">Branch</span> ${Page.has("approval/request") ? renderTemplate`<a class="call__link"${addAttribute(SeamHref("approval/request"), "href")}> ${renderComponent($$result, "Badge", $$Badge, {
		"Label": "approval/request",
		"Tone": "quiet"
	})} </a>` : renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"Label": "approval/request",
		"Tone": "quiet"
	})}`} </div> <p class="call__branch-note">
An ask is one prompt, and the call waits on it: allowed once continues
							to the guards, and rejected, cancelled, or unavailable is a deny.
</p> </div>`} <div class="call__plugin"> <span class="call__label">Plugin</span> ${Item.Plugin.length > 0 ? renderTemplate`<ul class="call__list"> ${Item.Plugin.map((Slug) => renderTemplate`<li class="call__item"> <a class="call__plugin-link"${addAttribute(PackageHref(Slug), "href")}> ${Slug} </a> </li>`)} </ul>` : renderTemplate`<span class="call__none">none of the four</span>`} </div> <p class="call__change">${Item.Changes}</p> </div> </li>`)} </ol>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/CallStep.astro", void 0);
export { $$CallStep as t };
