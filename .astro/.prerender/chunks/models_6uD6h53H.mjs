import { C as __exportAll, S as createComponent, b as $$BrandIcon, n as $$Base, o as Counts, t as $$Badge } from "./Badge_CHteF_GF.mjs";
import { m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_jUwDEDCs.mjs";
import { t as $$Card } from "./Card_B96geFVd.mjs";
import { t as $$Concept } from "./Concept_DF89tVee.mjs";
import { t as $$PageHero } from "./PageHero_BDRlROTw.mjs";
import { t as $$SectionHeader } from "./SectionHeader_w9WBitnM.mjs";
//#region Source/pages/models.astro
var models_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Models,
	file: () => $$file,
	url: () => $$url
});
var $$Models = createComponent(($$result, $$props, $$slots) => {
	const Models = [{
		Name: "DeepSeek V4 Flash",
		Note: "The harness route the family is developed and smoke-run against - every flavor verified on its token output streams."
	}, {
		Name: "GLM 5.3 Flash",
		Note: "The second battle-tested route - the same normalization and governance pipeline holding on a different vendor's stream."
	}];
	const Coverage = [
		"DASH",
		"QUOTES",
		"ELLIPSIS",
		"SPACES",
		"INVISIBLE",
		"FULLWIDTH",
		"FILE"
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Models - @playform / DSH Family",
		"Description": "The DeepSeek Harness Plugin Family is model-agnostic: it normalizes any LLM's output stream to clean ASCII. Battle-tested on DeepSeek V4 Flash and GLM 5.3 Flash."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
MODEL INDEPENDENCE
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`ANY LLM` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Built to serve any LLM.",
		"Sub": "The family is model-agnostic by construction: it hooks the harness's token output stream, not the model.\nWhatever LLM produced the text - DeepSeek, GLM, or the next one - the same six stream flavors and two governance roles apply, because unicode drift and unpinned manifests are model-independent problems."
	})} <!-- The reference models --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The reference models",
		"Meta": "BATTLE-TESTED ROUTES"
	})} <div class="workbench-controls"> <div class="workbench-controls__group"> <span class="workbench-controls__label">Engine selection:</span> <span class="engine-pill engine-pill--active"> <span class="dot"></span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "deepseek",
		"Size": "0.8em"
	})} DeepSeek V4 Flash (120 tps)
</span> <span class="engine-pill"> <span class="dot"></span> GLM 5.3 Flash
</span> <span class="engine-pill"> <span class="dot"></span> Raw LLM Stream
</span> </div> <div class="workbench-controls__group"> <a class="action action--secondary" href="/matrix/">
Open the Stream Inspector
</a> <a class="action action--secondary" href="/workbench/">
Open the Workbench
</a> </div> </div> <div class="grid grid--2"> ${Models.map((Model) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": Model.Name,
		"Desc": Model.Note,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"Variant": "active"
	}, { "default": ($$result) => renderTemplate`
VERIFIED STREAM
` })}` })}`)} </div> </section> <!-- What applies to every model --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "What applies to every model",
		"Meta": `${Counts.Normalizers} NORMALIZERS`
	})} <div class="flavor-strip"> ${Coverage.map((Flavor) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${Flavor}` })}`)} </div> <div class="independence" style="margin-top: var(--space-md)"> <div class="independence__label"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"> <rect x="5" y="5" width="14" height="14" rx="1"></rect> <path d="M9 2 v3 M15 2 v3 M9 19 v3 M15 19 v3 M2 9 h3 M2 15 h3 M19 9 h3 M19 15 h3"></path> <rect x="9" y="9" width="6" height="6"></rect> </svg>
Model Independence
</div> <p class="independence__title">Normalizers sit on the stream, not on the model.</p> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "models-routes",
		"Title": "The two battle-tested routes",
		"Diagram": "DeepSeek V4 Flash and GLM 5.3 Flash token output streams entering the same normalization pipeline - two vendors, one harness."
	}, { "default": ($$result) => renderTemplate` <p>
Extensively battle-tested on <strong>DeepSeek V4 Flash</strong> &amp;${" "} <strong>GLM 5.3 Flash</strong> token output streams.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"Id": "models-coverage",
		"Title": "The coverage on every batch, regardless of engine",
		"Diagram": "A token batch passing the six stream flavors before it reaches your files, the file flavor re-normalizing what is already on disk, and the governor and pinner holding every manifest."
	}, { "default": ($$result) => renderTemplate` <p>
The dash, quotes, ellipsis, spaces, invisible and fullwidth flavors run on
							every token batch before it reaches your files; the file flavor re-normalizes
							what is already on disk; the governor and pinner keep every manifest pinned -
							regardless of which engine wrote the output.
</p> ` })} </div> </div> </section> <!-- Notation --> <section class="section"> <div class="notation"> <p>@playform / DSH Family: the complete deterministic stream governor matrix.</p> <p>the hook-dsh-* hooks: zero runtime overhead normalizers with zero unicode drift.</p> <p>the twelve packages: pinned under atomic version gates.</p> </div> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/models.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/models.astro";
var $$url = "/models";
//#endregion
//#region \0virtual:astro:page:Source/pages/models@_@astro
var page = () => models_exports;
//#endregion
export { page };
