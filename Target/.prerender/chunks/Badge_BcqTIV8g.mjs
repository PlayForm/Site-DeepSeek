import { $ as UnavailableAstroGlobal, E as unescapeHTML, L as InvalidComponentArgs, _ as maybeRenderHead, b as createRenderInstruction, g as renderTemplate, it as ASTRO_GENERATOR, l as renderComponent, m as renderSlotToString, p as renderSlot, t as spreadAttributes, tt as AstroError, u as Fragment, v as renderAllHeadContent, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { ELEMENT_NODE, parse, renderSync, walkSync } from "ultrahtml";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.pnpm/astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region node_modules/.pnpm/astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/runtime/server/astro-global.js
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/runtime/server/render/script.js
/**
* Relies on the `renderScript: true` compiler option
* @experimental
*/
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script crossorigin=\"anonymous\" type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script crossorigin=\"anonymous\" type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/.pnpm/astro-capo@0.0.1_astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1_/node_modules/astro-capo/src/capo/rules.ts
function has(value) {
	return typeof value === "string";
}
function is(a, b) {
	return a === b;
}
function any(a, b) {
	return has(a) && b.includes(a.toLowerCase());
}
var ElementWeights = {
	META: 10,
	TITLE: 9,
	PRECONNECT: 8,
	ASYNC_SCRIPT: 7,
	IMPORT_STYLES: 6,
	SYNC_SCRIPT: 5,
	SYNC_STYLES: 4,
	PRELOAD: 3,
	DEFER_SCRIPT: 2,
	PREFETCH_PRERENDER: 1,
	OTHER: 0
};
var ElementDetectors = {
	META: isMeta,
	TITLE: isTitle,
	PRECONNECT: isPreconnect,
	DEFER_SCRIPT: isDeferScript,
	ASYNC_SCRIPT: isAsyncScript,
	IMPORT_STYLES: isImportStyles,
	SYNC_SCRIPT: isSyncScript,
	SYNC_STYLES: isSyncStyles,
	PRELOAD: isPreload,
	PREFETCH_PRERENDER: isPrefetchPrerender
};
var META_HTTP_EQUIV_KEYWORDS = [
	"accept-ch",
	"content-security-policy",
	"content-type",
	"default-style",
	"delegate-ch",
	"origin-trial",
	"x-dns-prefetch-control"
];
function isMeta(name, a) {
	if (name === "base") return true;
	if (name !== "meta") return false;
	return has(a.charset) || is(a.name, "viewport") || any(a["http-equiv"], META_HTTP_EQUIV_KEYWORDS);
}
function isTitle(name) {
	return name === "title";
}
function isPreconnect(name, { rel }) {
	return name === "link" && is(rel, "preconnect");
}
function isAsyncScript(name, { src, async }) {
	return name === "script" && has(src) && has(async);
}
function isImportStyles(name, a, children) {
	const importRe = /@import/;
	if (name === "style") return importRe.test(children);
	return false;
}
function isSyncScript(name, { src, defer, async, type = "" }) {
	if (name !== "script") return false;
	return !(has(src) && (has(defer) || has(async) || is(type, "module")) || type.includes("json"));
}
function isSyncStyles(name, { rel }) {
	if (name === "style") return true;
	return name === "link" && is(rel, "stylesheet");
}
function isPreload(name, { rel }) {
	return name === "link" && any(rel, ["preload", "modulepreload"]);
}
function isDeferScript(name, { src, defer, async, type }) {
	if (name !== "script") return false;
	return has(src) && has(defer) || has(src) && is(type, "module") && !has(async);
}
function isPrefetchPrerender(name, { rel }) {
	return name === "link" && any(rel, [
		"prefetch",
		"dns-prefetch",
		"prerender"
	]);
}
function getWeight(element) {
	for (const [id, detector] of Object.entries(ElementDetectors)) {
		const children = element.name === "style" && element.children.length > 0 ? renderSync(element) : "";
		if (detector(element.name, element.attributes, children)) return ElementWeights[id];
	}
	return ElementWeights.OTHER;
}
//#endregion
//#region node_modules/.pnpm/astro-capo@0.0.1_astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1_/node_modules/astro-capo/src/capo/index.ts
function capo(html) {
	const ast = parse(html);
	try {
		walkSync(ast, (node, parent, index) => {
			if (node.type === ELEMENT_NODE && node.name === "head") {
				if (parent) {
					parent.children.splice(index, 1, getSortedHead(node));
					throw "done";
				}
			}
		});
	} catch (e) {
		if (e !== "done") throw e;
	}
	return renderSync(ast);
}
function getSortedHead(head) {
	const children = head.children.map((node) => {
		if (node.type === ELEMENT_NODE) return [getWeight(node), node];
	}).filter(Boolean).sort((a, b) => b[0] - a[0]).map(([_, element]) => element);
	return {
		...head,
		children
	};
}
//#endregion
//#region node_modules/.pnpm/astro-capo@0.0.1_astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1_/node_modules/astro-capo/src/Head.ts
var Head = createComponent({ factory: async (result, props, slots) => {
	let head = "";
	head += `<head${spreadAttributes(props)} data-capo>`;
	head += await renderSlotToString(result, slots.default);
	head += renderAllHeadContent(result);
	head += "</head>";
	return unescapeHTML(capo(head));
} });
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"> <meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/node_modules/.pnpm/astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/node_modules/.pnpm/astro@7.4.1_@types+node@26.6.5_esbuild@0.28.2_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region Source/Library/FileIcon.ts
/** Escape a text fragment for safe interpolation into HTML. */
function Escape$1(Text) {
	return Text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
/**
* The verbatim body markup per name. Every path is the official
* file_type_*.svg geometry (the fills of the official theme swapped to
* currentColor - the mono treatment); the TS letters keep the official
* white; the markdown frame keeps its stroke.
*/
var Bodies = {
	"file-json": "<path d=\"M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z\"></path><path d=\"M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z\"></path>",
	"file-toml": "<path d=\"M22.76,6.83v3.25h-5V25.17H14.26V10.08h-5V6.83Z\"></path><path d=\"M2,2H8.2V5.09H5.34v21.8H8.2V30H2Z\"></path><path d=\"M30,30H23.8V26.91h2.86V5.11H23.8V2H30Z\"></path>",
	"file-yaml": "<path d=\"M2 12.218c.755 0 1.51-.008 2.264 0l.053.038 2.761 2.758c.891-.906 1.8-1.794 2.7-2.7.053-.052.11-.113.192-.1h1.823a1.4 1.4 0 0 1 .353.019c-.7.67-1.377 1.369-2.069 2.05L5.545 18.8c-.331.324-.648.663-.989.975-.754.022-1.511.007-2.266.007 1.223-1.209 2.431-2.433 3.658-3.637-1.321-1.304-2.63-2.62-3.948-3.927M12.7 12.218h1.839v7.566c-.611 0-1.222.012-1.832-.008v-4.994c-1.6 1.607-3.209 3.2-4.811 4.8-.089.08-.166.217-.305.194-.824-.006-1.649 0-2.474 0Q8.916 16 12.7 12.218M14.958 12.22c.47-.009.939 0 1.409 0 .836.853 1.69 1.689 2.536 2.532q1.268-1.267 2.539-2.532h1.4q-.008 3.784 0 7.567c-.471 0-.943.006-1.414 0q.008-2.387 0-4.773c-.844.843-1.676 1.7-2.526 2.536-.856-.835-1.687-1.695-2.532-2.541 0 1.594-.006 3.188.006 4.781-.472 0-.943.005-1.415 0q-.003-3.79-.003-7.57M23.259 12.217c.472 0 .944-.007 1.416 0q-.007 3.083 0 6.166h3.782c.063.006.144-.012.191.045.448.454.907.9 1.353 1.354q-3.371.007-6.741 0 .007-3.782-.001-7.565\"></path>",
	"file-markdown": "<rect x=\"2.5\" y=\"7.955\" width=\"27\" height=\"16.091\" fill=\"none\" stroke=\"currentColor\"></rect><polygon points=\"5.909 20.636 5.909 11.364 8.636 11.364 11.364 14.773 14.091 11.364 16.818 11.364 16.818 20.636 14.091 20.636 14.091 15.318 11.364 18.727 8.636 15.318 8.636 20.636 5.909 20.636\"></polygon><polygon points=\"22.955 20.636 18.864 16.136 21.591 16.136 21.591 11.364 24.318 11.364 24.318 16.136 27.045 16.136 22.955 20.636\"></polygon>",
	"file-shell": "<path d=\"M29.4,27.6H2.5V4.5H29.4Zm-25.9-1H28.4V5.5H3.5Z\"></path><polygon points=\"6.077 19.316 5.522 18.484 10.366 15.255 5.479 11.184 6.12 10.416 12.035 15.344 6.077 19.316\"></polygon><rect x=\"12.7\" y=\"18.2\" width=\"7.8\" height=\"1\"></rect><rect x=\"2.5\" y=\"5.5\" width=\"26.9\" height=\"1.9\"></rect>",
	"file-log": "<path d=\"M29.4,27.6H2.5V4.5H29.4Zm-25.9-1H28.4V5.5H3.5Z\"></path><rect x=\"2.5\" y=\"5.5\" width=\"26.9\" height=\"1.9\"></rect><rect x=\"11.333\" y=\"9.5\" width=\"8.167\" height=\"1\"></rect><rect x=\"11.333\" y=\"12.083\" width=\"12.5\" height=\"1\"></rect><rect x=\"11.333\" y=\"14.75\" width=\"10.617\" height=\"1\"></rect><rect x=\"11.333\" y=\"17.583\" width=\"14.167\" height=\"1\"></rect><rect x=\"11.333\" y=\"20.5\" width=\"9.834\" height=\"1\"></rect><rect x=\"11.5\" y=\"23.083\" width=\"12.167\" height=\"1\"></rect><rect x=\"5.5\" y=\"9.5\" width=\"4.333\" height=\"1\"></rect><rect x=\"5.5\" y=\"12.083\" width=\"4.333\" height=\"1\"></rect><rect x=\"5.5\" y=\"12.083\" width=\"4.333\" height=\"1\"></rect><rect x=\"5.5\" y=\"14.667\" width=\"4.333\" height=\"1\"></rect><rect x=\"5.5\" y=\"17.25\" width=\"4.333\" height=\"1\"></rect><rect x=\"5.5\" y=\"20.5\" width=\"4.333\" height=\"1\"></rect><rect x=\"5.5\" y=\"23.083\" width=\"4.333\" height=\"1\"></rect>",
	"file-ts": "<rect x=\"2\" y=\"2\" width=\"28\" height=\"28\" rx=\"1.312\" fill=\"currentColor\"></rect><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z\"></path>",
	"file-js": "<path d=\"M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z\"></path>",
	"file-svg": "<path d=\"M7.674,14.488a2.218,2.218,0,1,0,0,3.137H24.326a2.218,2.218,0,1,0,0-3.137Z\"></path><path d=\"M11.222,9.06A2.218,2.218,0,1,0,9,11.278L20.778,23.052A2.218,2.218,0,1,0,23,20.834Z\"></path><path d=\"M17.568,7.73a2.218,2.218,0,1,0-3.137,0V24.382a2.218,2.218,0,1,0,3.137,0Z\"></path><path d=\"M23,11.278A2.218,2.218,0,1,0,20.778,9.06L9,20.834a2.218,2.218,0,1,0,2.218,2.218Z\"></path><path d=\"M2,16.056H30V25.95a4.035,4.035,0,0,1-4.106,4.106H6.106A4.035,4.035,0,0,1,2,25.95Z\"></path>"
};
/**
* The complete inline SVG markup for one file-type icon - the same
* class/style/a11y contract the BrandIcon component renders, so the
* mention renderer and the component share one geometry source.
*/
function FileIconMark(Name, Size = "0.9em", ClassName = "", Label) {
	const A11y = Label ? ` role="img" aria-label="${Escape$1(Label)}"` : " aria-hidden=\"true\"";
	return `<svg class="${`brand-icon brand-icon--${Name}${ClassName ? ` ${ClassName}` : ""}`}" style="height: ${Size}; width: auto;" viewBox="0 0 32 32" fill="currentColor"${A11y}>${Bodies[Name]}</svg>`;
}
/**
* The file-mention token: the known file names first (matched as the bare
* basename), then the
* generic path token (the maximal run of path characters ending in a known
* extension - package.json, Cargo.toml, cordis.patch.yml, SCHEME.md,
* README.md, .sh, .ts, .mjs, .js, .svg and the .log files). SCHEME and
* README match bare (the site cites them without the .md). The renderer
* applies the path rule on top: a match that sits inside a larger path
* (~/.dsh/profiles/<name>/package.json, /x/y.json) or is itself a full
* path renders plain - the icons attach only to the bare mentions.
*/
var FileAlternatives = [
	"SCHEME(?:\\.md)?",
	"READMEs?(?:\\.md)?",
	"~?/\\.dsh/<name>\\.log",
	"<name>\\.log",
	"package\\.json",
	"pin-policy\\.json",
	"update-policy\\.json",
	"registry\\.json",
	"pnpm-workspace\\.yaml",
	"cordis\\.patch\\.yml",
	"Cargo\\.toml",
	"(?:[A-Za-z0-9_~./-]+[A-Za-z0-9_-])\\.(?:json|toml|yaml|yml|md|sh|ts|mjs|js|svg|log)"
].join("|");
/**
* The code-token alternatives: every technical term the site cites renders
* as the shared .code-token identity (the markdown-fenced style). The
* U+XXXX code points first, then the {"__normalize":false} raw-marker
* literal, the short quoted literals ("all", "edit", "cargo" - the
* single-word quoted runs, quotes included), the tool/command names, the
* events and seams, the identifiers and the core class names. The word
* alternatives carry their own \\b boundaries so a term never matches
* inside a longer word ("node" never matches "nodes"; "npm" never matches
* inside "pnpm"; "cargo" never matches inside "Cargo.toml", which the file
* pass above already owns). Capitalized identifiers (State, Append,
* Write, ...) only match the technical names - the prose uses the
* lowercase English words.
*/
var CodeAlternatives = [
	"U\\+[0-9A-Fa-f]{4,6}",
	"\\{\"__normalize\":false}",
	"\"[A-Za-z0-9@._-]{1,24}\"",
	"\\b(?:perl|ncu|cargo|pnpm|npm|node|node_modules|subprocess)\\b",
	"\\b(?:llm/stream|fs/observed|fs/write-intent|raw-write|writeText)\\b",
	"\\b(?:Factory\\.RegisterGovern|Factory\\.Govern|RegisterGovern|Govern)\\b",
	"\\b(?:pluginFactory|normalizeReasoning|normalizeToolArguments|argumentsDelta|old_string)\\b",
	"\\b(?:ctx\\.fs|ctx\\.tools|LlmRuntime|CoreChunk|TextBlock|ReasoningBlock|ToolCallBlock)\\b",
	"\\b(?:logFile|updateMode|ncuBin|cargoBin|policyFile|keepFile|toolArgs|next\\(\\))\\b",
	"\\b(?:Dashes|Quotes|Ellipsis|Spaces|Invisible|Fullwidth|ReplaceMap|Replace)\\b",
	"\\b(?:State|Append|Ledger|Enabled|Write|Guard|UpdateKey|LRE|RLE|PDF|LRO|RLO)\\b"
].join("|");
var MentionPattern = new RegExp(`${FileAlternatives}|${CodeAlternatives}`, "g");
var IsCodeToken = new RegExp(`^(?:${CodeAlternatives})$`);
/** The icon name a matched file token renders with. */
function Icon(Token) {
	const Lower = Token.toLowerCase();
	if (Lower.endsWith(".toml")) return "file-toml";
	if (Lower.endsWith(".yaml") || Lower.endsWith(".yml")) return "file-yaml";
	if (Lower.endsWith(".md")) return "file-markdown";
	if (Lower.endsWith(".sh")) return "file-shell";
	if (Lower.endsWith(".ts")) return "file-ts";
	if (Lower.endsWith(".mjs") || Lower.endsWith(".js")) return "file-js";
	if (Lower.endsWith(".svg")) return "file-svg";
	if (Lower.endsWith(".log")) return "file-log";
	return "file-json";
}
/** Whether the token is a .log filename (the chip treatment). */
function IsLog(Token) {
	return Token.toLowerCase().endsWith(".log");
}
/**
* Whether a matched file token is PATH-EMBEDDED - part of a full path
* (~/.dsh/profiles/<name>/package.json, node_modules/.../package.json,
* /x/package.json, ~/.dsh/<name>.log) rather than a bare file mention
* (package.json, pin-policy.json, Cargo.toml, governor.log). The user's
* rule: the icons and the log chip attach ONLY to the bare mentions - a
* token that carries a path prefix (a separator inside the token, a
* leading ~, or a / immediately before the match) is a location, not a
* document, and renders as plain text with no icon and no chip.
*/
function IsPathEmbedded(Token, PrevChar) {
	return Token.includes("/") || Token.startsWith("~") || Token.startsWith("./") || PrevChar === "/";
}
/**
* The double-quoted runs of a string: a token inside one of these is
* quoted ledger-line / code content and stays untouched (the byte-exact
* quotes rule - the chip and the icons adorn the mentions, never the
* quoted content).
*/
function QuotedRuns(Text) {
	const Runs = [];
	let Start = -1;
	for (let I = 0; I < Text.length; I += 1) {
		if (Text[I] !== "\"") continue;
		if (Start < 0) Start = I;
		else {
			Runs.push([Start, I + 1]);
			Start = -1;
		}
	}
	return Runs;
}
/**
* Mention: the string-prop renderer for file mentions and code tokens.
* Escapes the text, renders every file mention with its file-type icon on
* the left (the .log filenames as the special log chip) - skipping tokens
* inside double-quoted runs - and every technical term (the U+XXXX code
* points, the tool names, the identifiers, the short quoted literals) as
* the shared .code-token identity. The visible text bytes stay byte-exact
* - the icons and the trays are UI adornments outside the strings.
*/
function Mention(Text) {
	const Runs = QuotedRuns(Text);
	const IsQuoted = (Index) => Runs.some(([From, To]) => Index >= From && Index < To);
	let Out = "";
	let Rest = Text;
	for (;;) {
		MentionPattern.lastIndex = 0;
		const Match = MentionPattern.exec(Rest);
		if (!Match || Match.index === void 0) break;
		const Token = Match[0];
		const Start = Match.index;
		Out += Escape$1(Rest.slice(0, Start));
		const Absolute = Text.length - Rest.length + Start;
		if (IsCodeToken.test(Token)) Out += `<code class="code-token">${Escape$1(Token)}</code>`;
		else if (IsQuoted(Absolute)) Out += Escape$1(Token);
		else if (IsPathEmbedded(Token, Absolute > 0 ? Text[Absolute - 1] : "")) Out += Escape$1(Token);
		else {
			const IconMark = FileIconMark(Icon(Token));
			Out += IsLog(Token) ? `<span class="log-chip">${IconMark}${Escape$1(Token)}</span>` : `<span class="file-mention">${IconMark}${Escape$1(Token)}</span>`;
		}
		Rest = Rest.slice(Start + Token.length);
	}
	return Out + Escape$1(Rest);
}
/**
* DotSep: the separator-dot renderer. Every "·" separator in a rendered
* string (the metas, the kickers, the badges, the labels) becomes the
* site's designed separator: a GRAYED-OUT, BIGGER dot - a small filled
* circle (the .dot-sep span in Global.css, the outline gray, ~1.5x the
* middle-dot glyph, vertically centered) instead of the typographic
* middle dot. The surrounding spaces are consumed (the span's margins
* own the gap), so the visible word bytes stay byte-exact - only the
* separator glyph is replaced. For HTML contexts only (the output is
* markup); the JS status strings that must remain textContent keep
* their own handling.
*/
function DotSep(Text) {
	return Text.replace(/\s*·\s*/g, "<span class=\"dot-sep\" aria-hidden=\"true\"></span>");
}
var $$BrandIcon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BrandIcon;
	const { Name, Size = "1em", ClassName = "", Label, Tone = "current" } = Astro.props;
	const Ratio = Name === "npm" ? 3.12 : Name === "playform" ? 561 / 1727 : null;
	const Style = `height: ${Size}; width: ${Ratio ? `calc(${Size} * ${Ratio})` : "auto"};`;
	const A11y = Label ? {
		role: "img",
		"aria-label": Label
	} : { "aria-hidden": "true" };
	const Class = `brand-icon brand-icon--${Name}${Tone === "accent" ? " brand-icon--accent" : ""}${ClassName ? ` ${ClassName}` : ""}`;
	const IsFile = [
		"file-json",
		"file-toml",
		"file-yaml",
		"file-markdown",
		"file-shell",
		"file-log",
		"file-ts",
		"file-js",
		"file-svg"
	].includes(Name);
	return renderTemplate`${IsFile && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(FileIconMark(Name, Size, ClassName, Label))}` })}`}${Name === "deepseek" && renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="0.163 1.75 26.634 19.6"${spreadAttributes(A11y)}> <path fill="#4D6BFE" d="M26.5174 3.39471C26.235 3.2567 26.1137 3.52006 25.9487 3.65346C25.8923 3.69659 25.8446 3.75294 25.7969 3.80469C25.3846 4.24516 24.9027 4.53439 24.2737 4.49989C23.3536 4.44814 22.5682 4.73737 21.8735 5.44119C21.7258 4.57349 21.2353 4.0554 20.4889 3.72304C20.0985 3.55054 19.7034 3.37746 19.4297 3.00197C19.2388 2.73459 19.1865 2.43673 19.091 2.14289C19.0301 1.96579 18.9697 1.78466 18.7656 1.75418C18.5442 1.71968 18.4574 1.90541 18.3705 2.06067C18.0232 2.69549 17.8887 3.39471 17.9019 4.10313C17.9324 5.6965 18.6051 6.96556 19.9421 7.86834C20.0939 7.97184 20.133 8.07535 20.0852 8.22658C19.9938 8.53766 19.8857 8.83955 19.7903 9.15063C19.7293 9.34901 19.6384 9.39271 19.4257 9.30588C18.692 8.9994 18.0583 8.54571 17.4982 7.99772C16.5477 7.07827 15.6881 6.06336 14.6162 5.26869C14.3644 5.08296 14.1125 4.91045 13.8521 4.746C12.7584 3.68394 13.9952 2.81164 14.2816 2.70814C14.5812 2.60003 14.3857 2.22857 13.4179 2.23317C12.4502 2.2372 11.5646 2.56151 10.4359 2.99335C10.2708 3.05832 10.0972 3.10547 9.91951 3.14457C8.8954 2.95022 7.83162 2.90709 6.72069 3.03245C4.62877 3.26533 2.95777 4.25436 1.72954 5.94261C0.254043 7.97184 -0.0932678 10.2777 0.33167 12.6824C0.778458 15.2171 2.07225 17.3153 4.06008 18.9558C6.12152 20.6567 8.49577 21.4905 11.2047 21.3306C12.8498 21.2358 14.6812 21.0155 16.7473 19.2669C17.2682 19.5262 17.8151 19.6297 18.7219 19.7074C19.4205 19.7723 20.0933 19.6729 20.6143 19.5648C21.4302 19.3923 21.3739 18.6367 21.0789 18.4981C18.6874 17.3843 19.2124 17.8374 18.7351 17.4706C19.9501 16.033 21.8063 13.4776 22.379 9.99821C22.4353 9.61409 22.5072 9.073 22.4986 8.76192C22.494 8.57216 22.5377 8.49856 22.7545 8.47671C23.3536 8.40771 23.935 8.24383 24.4692 7.94999C26.0188 7.10357 26.6439 5.71318 26.7911 4.04678C26.8129 3.79204 26.7865 3.52869 26.5174 3.39471ZM13.0143 18.3946C10.6964 16.5724 9.5722 15.9726 9.10816 15.9985C8.67402 16.0244 8.75222 16.5212 8.84768 16.8449C8.94773 17.1646 9.07768 17.3849 9.25996 17.6655C9.38589 17.8512 9.47272 18.1272 9.13404 18.3348C8.38766 18.7965 7.08985 18.1796 7.0289 18.1491C5.51833 17.2595 4.25559 16.0853 3.36546 14.4793C2.50581 12.9337 2.0067 11.2753 1.92447 9.50542C1.90262 9.07818 2.02855 8.92695 2.45406 8.84932C3.01413 8.74582 3.59144 8.72397 4.15093 8.80619C6.51656 9.15178 8.53027 10.2092 10.2185 11.8848C11.1822 12.8388 11.9114 13.979 12.6623 15.0929C13.461 16.2757 14.3201 17.4027 15.4144 18.3268C15.8008 18.6505 16.109 18.8966 16.404 19.0783C15.5144 19.1778 14.0297 19.1991 13.0143 18.3958V18.3946ZM14.1252 11.2489C14.1252 11.0591 14.277 10.9079 14.4679 10.9079C14.511 10.9079 14.5501 10.9165 14.5852 10.9292C14.6329 10.9464 14.6766 10.9723 14.7111 11.0114C14.7721 11.0718 14.8066 11.158 14.8066 11.2489C14.8066 11.4386 14.6548 11.5899 14.4639 11.5899C14.273 11.5899 14.1252 11.4386 14.1252 11.2489ZM17.5759 13.0188C17.3545 13.1096 17.1331 13.1873 16.9203 13.1959C16.5903 13.2131 16.2303 13.0791 16.0348 12.9153C15.7312 12.6605 15.5139 12.5179 15.423 12.0734C15.3839 11.8837 15.4057 11.5899 15.4402 11.4214C15.5185 11.0585 15.4316 10.8257 15.1757 10.614C14.9676 10.4415 14.7025 10.3938 14.4115 10.3938C14.3029 10.3938 14.2034 10.3461 14.1292 10.3076C14.0079 10.2472 13.9078 10.096 14.0033 9.91023C14.0338 9.84985 14.1815 9.70322 14.216 9.67734C14.6111 9.45251 15.0665 9.52612 15.488 9.6946C15.8784 9.85445 16.174 10.1477 16.5989 10.5623C17.033 11.0631 17.1112 11.2011 17.3585 11.5772C17.554 11.871 17.7317 12.1729 17.8536 12.5185C17.9272 12.7341 17.8317 12.9107 17.5759 13.0188Z"></path> </svg>`}${Name === "npm" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="0 0 780 250"${spreadAttributes(A11y)}> <path fill="#C12127" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path> </svg>`}${(Name === "rust" || Name === "cargo") && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="18 18 106 106"${spreadAttributes(A11y)}> <path d="m71.05 23.68c-26.06 0-47.27 21.22-47.27 47.27s21.22 47.27 47.27 47.27 47.27-21.22 47.27-47.27-21.22-47.27-47.27-47.27zm-.07 4.2a3.1 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm7.12 5.12a38.27 38.27 0 0 1 26.2 18.66l-3.67 8.28c-.63 1.43.02 3.11 1.44 3.75l7.06 3.13a38.27 38.27 0 0 1 .08 6.64h-3.93c-.39 0-.55.26-.55.64v1.8c0 4.24-2.39 5.17-4.49 5.4-2 .23-4.21-.84-4.49-2.06-1.18-6.63-3.14-8.04-6.24-10.49 3.85-2.44 7.85-6.05 7.85-10.87 0-5.21-3.57-8.49-6-10.1-3.42-2.25-7.2-2.7-8.22-2.7h-40.6a38.27 38.27 0 0 1 21.41-12.08l4.79 5.02c1.08 1.13 2.87 1.18 4 .09zm-44.2 23.02a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm74.15.14a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm-68.29.5h5.42v24.44h-10.94a38.27 38.27 0 0 1 -1.24-14.61l6.7-2.98c1.43-.64 2.08-2.31 1.44-3.74zm22.62.26h12.91c.67 0 4.71.77 4.71 3.8 0 2.51-3.1 3.41-5.65 3.41h-11.98zm0 17.56h9.89c.9 0 4.83.26 6.08 5.28.39 1.54 1.26 6.56 1.85 8.17.59 1.8 2.98 5.4 5.53 5.4h16.14a38.27 38.27 0 0 1 -3.54 4.1l-6.57-1.41c-1.53-.33-3.04.65-3.37 2.18l-1.56 7.28a38.27 38.27 0 0 1 -31.91-.15l-1.56-7.28c-.33-1.53-1.83-2.51-3.36-2.18l-6.43 1.38a38.27 38.27 0 0 1 -3.32-3.92h31.27c.35 0 .59-.06.59-.39v-11.06c0-.32-.24-.39-.59-.39h-9.15zm-14.43 25.33a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11zm46.05.14a3.11 3.11 0 0 1 3.02 3.11 3.11 3.11 0 0 1 -6.22 0 3.11 3.11 0 0 1 3.2-3.11z"></path> <path fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m115.68 70.95a44.63 44.63 0 0 1 -44.63 44.63 44.63 44.63 0 0 1 -44.63-44.63 44.63 44.63 0 0 1 44.63-44.63 44.63 44.63 0 0 1 44.63 44.63zm-.84-4.31 6.96 4.31-6.96 4.31 5.98 5.59-7.66 2.87 4.78 6.65-8.09 1.32 3.4 7.46-8.19-.29 1.88 7.98-7.98-1.88.29 8.19-7.46-3.4-1.32 8.09-6.65-4.78-2.87 7.66-5.59-5.98-4.31 6.96-4.31-6.96-5.59 5.98-2.87-7.66-6.65 4.78-1.32-8.09-7.46 3.4.29-8.19-7.98 1.88 1.88-7.98-8.19.29 3.4-7.46-8.09-1.32 4.78-6.65-7.66-2.87 5.98-5.59-6.96-4.31 6.96-4.31-5.98-5.59 7.66-2.87-4.78-6.65 8.09-1.32-3.4-7.46 8.19.29-1.88-7.98 7.98 1.88-.29-8.19 7.46 3.4 1.32-8.09 6.65 4.78 2.87-7.66 5.59 5.98 4.31-6.96 4.31 6.96 5.59-5.98 2.87 7.66 6.65-4.78 1.32 8.09 7.46-3.4-.29 8.19 7.98-1.88-1.88 7.98 8.19-.29-3.4 7.46 8.09 1.32-4.78 6.65 7.66 2.87z"></path> </svg>`}${Name === "effect" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="0 0 161 160"${spreadAttributes(A11y)}> <path fill-rule="evenodd" fill="#000" d="M160.058 47.1308C160.128 49.3649 159.201 51.3522 157.094 52.5262L136.298 64.1042L155.187 74.7413C157.319 75.9412 158.453 78.2081 158.275 80.4716C158.44 82.8041 157.547 84.9018 155.393 86.1173L83.99 126.323C82.4992 127.163 80.8003 127.324 79.268 126.903C78.5653 126.789 77.8713 126.551 77.2195 126.183L5.81948 85.9774C3.6881 84.7775 2.55464 82.5071 2.73248 80.2437C2.56759 77.9111 3.45934 75.8169 5.61403 74.6014L24.711 63.8487L4.12232 52.3846C3.50941 52.0428 2.97937 51.618 2.53479 51.1312C2.34228 50.9464 2.16532 50.7479 2.00734 50.5355C1.84332 50.3163 1.69916 50.0849 1.5783 49.8397C1.5196 49.6861 1.46521 49.5324 1.41428 49.3788L1.30465 49.0991L1.22782 48.8746C1.19156 48.7624 1.15962 48.6484 1.13027 48.5328L1.08193 48.3256C0.978336 47.8491 0.933447 47.3587 0.948986 46.8667C0.879062 44.6326 1.80534 42.6454 3.91255 41.4713L76.9372 0.813633C77.5501 0.471783 78.1976 0.242156 78.8545 0.116121C79.8317 -0.0720692 80.8296 -0.0289064 81.7671 0.226618C82.4854 0.344021 83.195 0.584006 83.8623 0.955207L156.884 41.6129C156.994 41.6733 157.1 41.7372 157.204 41.8045C157.302 41.8667 157.398 41.9306 157.491 41.9962C157.578 42.0583 157.662 42.1222 157.744 42.1878C158.008 42.3967 158.252 42.6246 158.474 42.8681C158.645 43.0338 158.803 43.2082 158.948 43.3929C159.133 43.6312 159.295 43.8867 159.428 44.1578C159.487 44.3114 159.541 44.4634 159.592 44.617C159.924 45.4095 160.085 46.2676 160.058 47.1308ZM20.2221 80.2471L80.5033 114.89L140.785 80.4716L124.112 70.8894L84.0694 93.1839C82.5441 94.0333 80.8072 94.1974 79.2395 93.7709C78.5213 93.6535 77.8117 93.4135 77.1444 93.0423L36.9796 70.6788L20.2221 80.2471Z"></path> <path fill="#000" d="M6.15788 112.795C7.7998 110.029 11.4307 109.095 14.2682 110.675L80.5033 148.311L146.934 110.81C149.771 109.228 153.769 110.345 155.044 112.93C156.25 116.091 155.685 119.247 152.839 120.832L83.8709 159.232C82.431 160.035 80.7899 160.188 79.3094 159.786C79.1273 159.757 78.946 159.719 78.7656 159.672C78.2744 159.546 77.7918 159.354 77.3317 159.099L8.36523 120.699C5.51648 119.113 4.51251 115.575 6.15788 112.795Z"></path> </svg>`}${Name === "typescript" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="2 2 28 28"${spreadAttributes(A11y)}> <rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178C6"></rect> <path fill="#fff" fill-rule="evenodd" d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"></path> </svg>`}${Name === "playform" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="0 0 561 1727"${spreadAttributes(A11y)}> <path d="M432.658 1547.83C467.238 1637.92 369.909 1721.74 285.947 1674.18C236.96 1646.44 219.451 1584.53 246.421 1535.3L247.067 1534.14L354.4 1343.96L432.658 1547.83ZM57.2987 365.834C-16.8553 172.655 171.796 -17.5713 365.585 54.9746C495.115 103.465 556.985 251.094 500.73 377.446L432.645 530.364L259.687 893.073L57.2987 365.834Z" fill="none" stroke="#151515" stroke-opacity="0.21" stroke-width="73.1619"></path> </svg>`}${Name === "zhipu" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="0 0 160 160"${spreadAttributes(A11y)}> <path fill="#000000" d="M137.381 0H22.619C10.1269 0 0 10.1269 0 22.619V137.381C0 149.873 10.1269 160 22.619 160H137.381C149.873 160 160 149.873 160 137.381V22.619C160 10.1269 149.873 0 137.381 0Z"></path> <path fill="#ffffff" d="M82.771 33.208L75.0661 44.157C74.4609 45.0175 73.6581 45.7202 72.7251 46.2063C71.7922 46.6924 70.7562 46.9476 69.7043 46.9506H27.7104V33.1629L82.771 33.208Z"></path> <path fill="#ffffff" d="M135.083 33.2075L68.9835 126.837H24.917L91.0167 33.2075H135.083Z"></path> <path fill="#ffffff" d="M77.2741 126.837L85.024 115.843C85.6315 114.988 86.4359 114.292 87.3692 113.814C88.3024 113.336 89.3371 113.089 90.3859 113.095H132.335V126.612L77.2741 126.837Z"></path> </svg>`}${Name === "zlm" && renderTemplate`<span${addAttribute(Class, "class")} title="ZLM brand mark - unreleased; slot reserved"${spreadAttributes(A11y)}></span>`}${Name === "swap" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="3 2 18 20" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"${spreadAttributes(A11y)}> <path d="M4 7 H16 M12 3 L16 7 L12 11"></path> <path d="M20 17 H8 M12 13 L8 17 L12 21"></path> </svg>`}${Name === "chain" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="1 1 22 22" fill="none" stroke="currentColor" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"${spreadAttributes(A11y)}> <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path> <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path> </svg>`}${Name === "terminal" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="3 6 18 14" fill="none" stroke="currentColor" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"${spreadAttributes(A11y)}> <path d="M4 17 L9 12 L4 7"></path> <path d="M12 19 H20"></path> </svg>`}${Name === "info" && renderTemplate`<svg${addAttribute(Class, "class")}${addAttribute(Style, "style")} viewBox="1 1 22 22" fill="none" stroke="currentColor" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"${spreadAttributes(A11y)}> <circle cx="12" cy="12" r="10"></circle> <path d="M12 16v-4"></path> <path d="M12 8h.01"></path> </svg>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/BrandIcon.astro", void 0);
//#endregion
//#region Source/Library/Live.ts
/** The monorepo root marker: the Classic tree's package directory. */
var Marker = join("Classic", "packages");
/**
* The monorepo root, found by walking up from the candidate directories
* until one contains the marker. The candidates matter because Vite's SSR
* bundle rewrites import.meta.url to the bundled chunk's location - the
* source-relative path is tried first, then the build's working directory
* (astro runs from Site/, the monorepo root's child) and the cwd itself.
*/
function FindRoot() {
	const Candidates = [
		resolve(dirname(fileURLToPath(import.meta.url)), "../../.."),
		resolve(process.cwd(), ".."),
		process.cwd()
	];
	for (const Candidate of Candidates) if (Candidate && existsSync(join(Candidate, Marker))) return Candidate;
	return "";
}
var Root = FindRoot();
/** Read a text file, or null when it is missing or unreadable. */
function ReadText(Path) {
	try {
		return readFileSync(Path, "utf8");
	} catch {
		return null;
	}
}
/** Read a JSON file, or null when it is missing or unparseable. */
function ReadJSON(Path) {
	try {
		return JSON.parse(readFileSync(Path, "utf8"));
	} catch {
		return null;
	}
}
/** List a directory's subdirectory names (sorted), or null. */
function ReadDirs(Path) {
	try {
		return readdirSync(Path, { withFileTypes: true }).filter((Entry) => Entry.isDirectory()).map((Entry) => Entry.name).sort();
	} catch {
		return null;
	}
}
/** One tree's packages, read from each package directory's package.json. */
function ReadTree(Tree) {
	const Dir = join(Root, Tree, "packages");
	return (ReadDirs(Dir) ?? []).flatMap((PackageDir) => {
		const Package = ReadJSON(join(Dir, PackageDir, "package.json"));
		if (!Package || typeof Package.version !== "string") return [];
		const Pin = Package.dependencies?.["effect"] ?? Package.peerDependencies?.["effect"] ?? null;
		return [{
			Dir: PackageDir,
			Name: String(Package.name ?? PackageDir),
			Version: Package.version,
			Effect: typeof Pin === "string" ? Pin : null
		}];
	});
}
/** The unanimous value of a string list (null when it is empty or disagrees). */
function Unanimous(Values) {
	const Unique = [...new Set(Values)];
	return Unique.length === 1 ? Unique[0] ?? null : null;
}
/**
* Parse the smoke README's manifest line - the printed per-suite summary
* "**core 14 / factory 34 / ... / normalize-file 71** - live as per-test
* folders ..." (the restructure layout; the retired "live in this
* directory" spelling accepted as a fallback), em-dash or hyphen
* separated. Returns null when the line is not found.
*/
function ReadSmokeManifest(Tree) {
	const Text = ReadText(join(Root, Tree, "smokes", "README.md"));
	if (!Text) return null;
	const Match = Text.match(/\*\*([^*]+)\*\* [\u2014-] live as per-test/) ?? Text.match(/\*\*([^*]+)\*\* [\u2014-] live in this/);
	if (!Match) return null;
	const Counts = {};
	for (const [, Suite, Count] of Match[1].matchAll(/([\w-]+) (\d+)/g)) Counts[Suite] = Number(Count);
	return Counts;
}
/** The per-suite keys: the Content pair key against the smoke manifest name. */
var SuiteKeys = [
	["Core", "core"],
	["Factory", "factory"],
	["Governor", "governor"],
	["Pinner", "pinner"],
	["Cargo", "cargo"],
	["Dash", "normalize-dash"],
	["Quotes", "quotes"],
	["Ellipsis", "ellipsis"],
	["Spaces", "spaces"],
	["Invisible", "invisible"],
	["Fullwidth", "fullwidth"],
	["File", "normalize-file"],
	["CCR", "ccr"],
	["Coach", "tool-coach"]
];
var ClassicPackages = ReadTree("Classic");
var EffectTSPackages = ReadTree("EffectTS");
var ClassicSmoke = ReadSmokeManifest("Classic");
var EffectTSSmoke = ReadSmokeManifest("EffectTS");
/** The per-suite pairs, present only when BOTH README manifests report the suite. */
var SuitePairs = {};
for (const [Key, Suite] of SuiteKeys) {
	const ClassicCount = ClassicSmoke?.[Suite];
	const EffectTSCount = EffectTSSmoke?.[Suite];
	if (typeof ClassicCount === "number" && typeof EffectTSCount === "number") SuitePairs[Key] = {
		Classic: ClassicCount,
		EffectTS: EffectTSCount
	};
}
/** The Classic release tree's normalize packages (the dash..file seven). */
var NormalizePackages = ClassicPackages.filter((Package) => /(^|-)normalize(-|$)/.test(Package.Dir));
/** The factory's callable-method count: the SCHEME's §2 sections + the shared §2.7. */
function ReadMethodCount() {
	const Scheme = ReadText(join(Root, "Classic", "packages", "plugin-dsh-factory", "SCHEME.md"));
	if (!Scheme) return null;
	const Sections = [...Scheme.matchAll(/^### 2\.\d+ /gm)].length;
	return Sections > 0 ? Sections + 1 : null;
}
/** The build-time snapshot of the monorepo's real values (null = no live source). */
var Live = {
	/** The monorepo root the build read from. */
	Root,
	/** The three trees' packages, each with its actual package.json version. */
	TreePackages: {
		Boilerplate: ReadTree("Boilerplate"),
		Classic: ClassicPackages,
		EffectTS: EffectTSPackages
	},
	/** The npm names of the Classic release packages. */
	PackageNames: ClassicPackages.map((Package) => Package.Name),
	/** The unanimous release version of the Classic + EffectTS packages. */
	Release: Unanimous([...ClassicPackages.map((Package) => Package.Version), ...EffectTSPackages.map((Package) => Package.Version)]),
	/** The unanimous effect dependency pin of the EffectTS packages. */
	Effect: Unanimous(EffectTSPackages.map((Package) => Package.Effect).filter((Pin) => typeof Pin === "string")),
	/** The per-suite smoke-count pairs from the two README manifests. */
	SuitePairs,
	/** The number of smoke suites in the CLASSIC manifest (one per package). */
	SuiteCount: ClassicSmoke ? Object.keys(ClassicSmoke).length || null : null,
	/** The number of Classic release packages. */
	Packages: ClassicPackages.length || null,
	/** The normalize packages (the six stream flavors + the file tool). */
	Normalizers: NormalizePackages.length || null,
	/** The stream-flavor hooks (the normalize packages minus the file tool). */
	StreamFlavors: NormalizePackages.filter((Package) => Package.Dir !== "hook-dsh-normalize-file").length || null,
	/** The factory's callable-method count, from the SCHEME's §2 sections. */
	Methods: ReadMethodCount()
};
//#endregion
//#region Source/Library/Content.ts
/** The fallback constants: served only when a live source is unavailable. */
var Fallback = {
	Counts: {
		Core: {
			Classic: 14,
			EffectTS: 17
		},
		Factory: {
			Classic: 34,
			EffectTS: 41
		},
		Governor: {
			Classic: 78,
			EffectTS: 81
		},
		Pinner: {
			Classic: 32,
			EffectTS: 32
		},
		Cargo: {
			Classic: 62,
			EffectTS: 62
		},
		Dash: {
			Classic: 132,
			EffectTS: 132
		},
		Quotes: {
			Classic: 62,
			EffectTS: 62
		},
		Ellipsis: {
			Classic: 62,
			EffectTS: 62
		},
		Spaces: {
			Classic: 62,
			EffectTS: 62
		},
		Invisible: {
			Classic: 62,
			EffectTS: 62
		},
		Fullwidth: {
			Classic: 62,
			EffectTS: 62
		},
		File: {
			Classic: 71,
			EffectTS: 71
		},
		CCR: {
			Classic: 146,
			EffectTS: 146
		},
		Coach: {
			Classic: 129,
			EffectTS: 129
		}
	},
	Totals: {
		/** The CLASSIC total: 1008 checks across the fourteen suites. */
		Classic: 1008,
		/** The EFFECT-TS total: 1021 checks (core +3, factory +7, governor +3). */
		EffectTS: 1021
	},
	Versions: {
		/** The release version of all fifteen packages in both trees. */
		Release: "0.0.1",
		/** The effect dependency pin of the EffectTS packages. */
		Effect: "4.0.5"
	},
	Packages: 15,
	Suites: 14,
	Normalizers: 7,
	StreamFlavors: 6,
	Roles: 2,
	Methods: 19,
	Groups: {
		Core: 2,
		Governance: 3,
		Guardians: 2,
		Live: 1
	},
	/** The v1-record migration facts (Package-13.md: the loud, per-record fix). */
	Migration: {
		Records: 76,
		CompatibleVersions: [1]
	},
	/** The era facts the case study's history rests on (the Oct 3-6, 2026 stretch). */
	History: {
		/** The five original boilerplate-era bundles (Package 1 of the record). */
		OriginBundles: 5,
		/** The boilerplate era's smoke total: 231 checks across the five bundles. */
		OriginChecks: 231,
		/** The factory's original callable-method count at the consolidation. */
		OriginMethods: 15,
		/** The additive EFFECT-TS coverage: 13 checks (core +3, factory +7, governor +3). */
		EffectDelta: 13,
		/** The per-suite additive EFFECT-TS deltas over the CLASSIC counts. */
		Deltas: {
			Core: 3,
			Factory: 7,
			Governor: 3
		}
	},
	/** The case study's decision index: the twelve decisions plus the abort-signal fix. */
	Decisions: {
		Index: 12,
		Count: 13
	},
	/** The badge sprite at /assets/badges.svg (the flavors page's shields row). */
	Sprite: { Badges: 11 },
	/** The setup page's step count ("Four steps: add the bundles, patch, restart, verify."). */
	Steps: { Count: 4 },
	/** The site footer's copyright line. */
	Copyright: {
		Year: 2025,
		Line: "© 2025 PlayForm Cloud"
	}
};
/** The live value when present, the documented fallback otherwise. */
function Pick(LiveValue, FallbackValue) {
	return LiveValue ?? FallbackValue;
}
/** The per-suite smoke counts, one pair per package (the arbiter's numbers). */
var Counts = {
	Core: Pick(Live.SuitePairs.Core, Fallback.Counts.Core),
	Factory: Pick(Live.SuitePairs.Factory, Fallback.Counts.Factory),
	Governor: Pick(Live.SuitePairs.Governor, Fallback.Counts.Governor),
	Pinner: Pick(Live.SuitePairs.Pinner, Fallback.Counts.Pinner),
	Cargo: Pick(Live.SuitePairs.Cargo, Fallback.Counts.Cargo),
	Dash: Pick(Live.SuitePairs.Dash, Fallback.Counts.Dash),
	Quotes: Pick(Live.SuitePairs.Quotes, Fallback.Counts.Quotes),
	Ellipsis: Pick(Live.SuitePairs.Ellipsis, Fallback.Counts.Ellipsis),
	Spaces: Pick(Live.SuitePairs.Spaces, Fallback.Counts.Spaces),
	Invisible: Pick(Live.SuitePairs.Invisible, Fallback.Counts.Invisible),
	Fullwidth: Pick(Live.SuitePairs.Fullwidth, Fallback.Counts.Fullwidth),
	File: Pick(Live.SuitePairs.File, Fallback.Counts.File),
	CCR: Pick(Live.SuitePairs.CCR, Fallback.Counts.CCR),
	Coach: Pick(Live.SuitePairs.Coach, Fallback.Counts.Coach),
	Normalizers: Pick(Live.Normalizers, Fallback.Normalizers),
	StreamFlavors: Pick(Live.StreamFlavors, Fallback.StreamFlavors),
	Roles: Fallback.Roles,
	Packages: Pick(Live.Packages, Fallback.Packages),
	Suites: Pick(Live.SuiteCount, Fallback.Suites),
	Methods: Pick(Live.Methods, Fallback.Methods),
	Groups: {
		Core: Fallback.Groups.Core,
		Governance: Fallback.Groups.Governance,
		Guardians: Fallback.Groups.Guardians,
		Normalize: Pick(Live.Normalizers, Fallback.Normalizers),
		Live: Fallback.Groups.Live
	}
};
/** The fourteen per-suite pairs, in suite order - the totals' live source. */
var SuiteOrder = [
	Counts.Core,
	Counts.Factory,
	Counts.Governor,
	Counts.Pinner,
	Counts.Cargo,
	Counts.Dash,
	Counts.Quotes,
	Counts.Ellipsis,
	Counts.Spaces,
	Counts.Invisible,
	Counts.Fullwidth,
	Counts.File,
	Counts.CCR,
	Counts.Coach
];
/** The family-wide smoke totals, derived from the per-suite pairs. */
var Totals = {
	/** The CLASSIC total: the sum of the fourteen CLASSIC pair counts. */
	Classic: SuiteOrder.reduce((Sum, PairCount) => Sum + PairCount.Classic, 0),
	/** The EFFECT-TS total: the sum of the fourteen EFFECT-TS pair counts. */
	EffectTS: SuiteOrder.reduce((Sum, PairCount) => Sum + PairCount.EffectTS, 0),
	/** "1008 checks Classic · 1021 EffectTS" - the sentence-case totals pair. */
	Pair: () => `${Totals.Classic} checks Classic · ${Totals.EffectTS} EffectTS`,
	/** "1008 checks Classic · 1021 Effect-TS" - the pair with the hyphenated tree name. */
	PairHyphen: () => `${Totals.Classic} checks Classic · ${Totals.EffectTS} Effect-TS`,
	/** "14 SUITES · 1008 CHECKS CLASSIC · 1021 EFFECT-TS · ALL PASS" - the meta strip. */
	Meta: () => `${Counts.Suites} SUITES · ${Totals.Classic} CHECKS CLASSIC · ${Totals.EffectTS} EFFECT-TS · ALL PASS`
};
/** The release versions: read live from the release trees' package.json files. */
var Versions = {
	/** The release version of all fifteen packages in both trees. */
	Release: Pick(Live.Release, Fallback.Versions.Release),
	/** The effect dependency pin of the EffectTS packages. */
	Effect: Pick(Live.Effect, Fallback.Versions.Effect)
};
/** The SCHEME section references the pages cite (the factory's method contract). */
var Scheme = {
	/** §2.7 - Write, the shared executor; GuardedWrite lives on as its alias. */
	Write: "§2.7",
	/** §2.16 - UpdateKey(target), the namespaced Inflight key (the P2 helper). */
	UpdateKey: "§2.16",
	/** §2.17 - RegisterGovern, the direct-govern step registry. */
	RegisterGovern: "§2.17",
	/** §2.18 - Govern, the sequential-fold direct-govern entry. */
	Govern: "§2.18"
};
/** Spell a count in the page's word form: 19 → "Nineteen", 21 → "Twenty-One". */
function Word(Count) {
	const Ones = [
		"Zero",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine"
	];
	const Teens = [
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen"
	];
	const Tens = [
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety"
	];
	if (Count < 10) return Ones[Count] ?? String(Count);
	if (Count < 20) return Teens[Count - 10] ?? String(Count);
	const Ten = Math.floor(Count / 10);
	const Rest = Count % 10;
	const TenWord = Tens[Ten - 2] ?? String(Count);
	return Rest === 0 ? TenWord : `${TenWord}-${Ones[Rest] ?? Rest}`;
}
/** The factory's method ledger: read live from the SCHEME's §2 sections. */
var Methods = {
	/** The callable-method count of the factory service. */
	Count: Pick(Live.Methods, Fallback.Methods),
	/** The count in the page's word form. */
	Word: Word(Pick(Live.Methods, Fallback.Methods)),
	/** "19 METHODS" - the meta strip form. */
	Meta: () => `${Methods.Count} METHODS`
};
/** The v1-record migration facts (Package-13.md: the loud, per-record fix). */
var Migration = {
	/** The v1 records auto-migrated on the first v2 open. */
	Records: Fallback.Migration.Records,
	/** The version list the v2 layout accepts (v1 records migrate). */
	CompatibleVersions: Fallback.Migration.CompatibleVersions,
	/** The unit the records count in. */
	Unit: "record",
	/** "compatibleVersions [1] (76 v1 records auto-migrated)" - the sentence fragment. */
	Sentence: () => `compatibleVersions [${Migration.CompatibleVersions.join(", ")}] (${Migration.Records} v1 ${Pluralize(Migration.Records, Migration.Unit)} auto-migrated)`
};
/** The register #15 identities: the @-sentence release names of the fifteen packages. */
var Families = {
	Core: "Hook @ DSH @ Core",
	Factory: "Plugin @ DSH @ Factory",
	GovernorPackage: "Hook @ DSH @ Governor @ Package",
	PinnerPackage: "Hook @ DSH @ Pinner @ Package",
	GovernorCargo: "Hook @ DSH @ Governor @ Cargo",
	Dash: "Hook @ DSH @ Normalize @ Dash",
	Quotes: "Hook @ DSH @ Normalize @ Quotes",
	Ellipsis: "Hook @ DSH @ Normalize @ Ellipsis",
	Spaces: "Hook @ DSH @ Normalize @ Spaces",
	Invisible: "Hook @ DSH @ Normalize @ Invisible",
	Fullwidth: "Hook @ DSH @ Normalize @ Fullwidth",
	File: "Hook @ DSH @ Normalize @ File",
	CCR: "Hook @ DSH @ CCR",
	Coach: "Hook @ DSH @ Tool @ Coach",
	LiveContainers: "Hook @ DSH @ Live @ Containers"
};
/** The per-suite additive EFFECT-TS deltas over the CLASSIC counts (live-derived). */
var Deltas = {
	Core: Counts.Core.EffectTS - Counts.Core.Classic,
	Factory: Counts.Factory.EffectTS - Counts.Factory.Classic,
	Governor: Counts.Governor.EffectTS - Counts.Governor.Classic
};
/** The era facts the case study's history rests on (the Oct 3-6, 2026 stretch). */
var History = {
	/** The five original boilerplate-era bundles (Package 1 of the record). */
	OriginBundles: Fallback.History.OriginBundles,
	/** The boilerplate era's smoke total: 231 checks across the five bundles. */
	OriginChecks: Fallback.History.OriginChecks,
	/** The factory's original callable-method count at the consolidation. */
	OriginMethods: Fallback.History.OriginMethods,
	/** The additive EFFECT-TS coverage - the sum of the live-derived deltas. */
	EffectDelta: Deltas.Core + Deltas.Factory + Deltas.Governor,
	/** The per-suite additive EFFECT-TS deltas over the CLASSIC counts. */
	Deltas
};
Fallback.Decisions.Index, Fallback.Decisions.Count;
/** The badge sprite at /assets/badges.svg (the flavors page's shields row). */
var Sprite = { 
/** The shields-style symbols in the sprite. */
Badges: Fallback.Sprite.Badges };
/** The setup page's step count. */
var Steps = { 
/** "Four steps: add the bundles, patch, restart, verify." */
Count: Fallback.Steps.Count };
/** The site footer's copyright line. */
var Copyright = {
	/** The copyright year. */
	Year: Fallback.Copyright.Year,
	/** The full footer line, byte-exact. */
	Line: Fallback.Copyright.Line
};
/** Pluralize a unit the site's voice way: 1 record, 76 records. */
function Pluralize(Count, Unit) {
	return Count === 1 ? Unit : `${Unit}s`;
}
/** "NTH" - the ordinal form for the FAMILY POSITION metas (1ST, 2ND, 3RD, 4TH...). */
function Ordinal(Number) {
	const Remainder10 = Number % 10;
	const Remainder100 = Number % 100;
	if (Remainder100 >= 11 && Remainder100 <= 13) return `${Number}TH`;
	switch (Remainder10) {
		case 1: return `${Number}ST`;
		case 2: return `${Number}ND`;
		case 3: return `${Number}RD`;
		default: return `${Number}TH`;
	}
}
/**
* "FAMILY POSITION: 1ST OF 6 STREAM NORMALIZERS" - the detail pages' meta
* strip for the stream flavors (the file tool is the seventh sibling and
* carries its own label).
*/
function FamilyPosition(Nth) {
	return `FAMILY POSITION: ${Ordinal(Nth)} OF ${Counts.StreamFlavors} STREAM NORMALIZERS`;
}
/**
* The per-suite card description, auto-enriched from the count pair:
* "34 checks in CLASSIC, 41 in EFFECT-TS - <Detail>" for a divergent pair,
* "32 checks in both releases - <Detail>" when the pair is equal.
*/
function SuiteCount(PairCount, Detail) {
	return PairCount.Classic === PairCount.EffectTS ? `${PairCount.Classic} checks in both releases - ${Detail}` : `${PairCount.Classic} checks in CLASSIC, ${PairCount.EffectTS} in EFFECT-TS - ${Detail}`;
}
/**
* The normalize family's card description, assembled from the seven pairs:
* "132 (dash) + 62 each (quotes, ellipsis, spaces, invisible, fullwidth) +
* 71 (file) - identical in both releases - <Detail>".
*/
function NormalizeFamily(Detail) {
	return `${Counts.Dash.Classic} (dash) + ${Counts.Quotes.Classic} each (quotes, ellipsis, spaces, invisible, fullwidth) + ${Counts.File.Classic} (file) - identical in both releases - ${Detail}`;
}
/**
* The registry. Only the Base and Branch values above may name a host; every
* other URL on the site is composed from these. The site's own base URL is
* Site below: the header brand links to it and astro.config.ts mirrors it
* (the config cannot import this module at config-eval time, so it repeats
* the expression with a comment pointing here).
*
* Site is environment-keyed: in development (NODE_ENV, the same key the
* service-worker gate in astro.config.ts uses) every URL the site emits is
* http://localhost:9999 so all links, canonicals and og:url resolve against
* the dev server; the build (NODE_ENV unset) keeps the canonical
* https://deepseek.playform.cloud, so the published SEO surface - canonical
* tags, og:url, the sitemap and the JSON-LD - never leaks localhost.
*/
var Links = {
	/** The site's own base URL - what the site is served from (dev or deployed). */
	Site: process.env.NODE_ENV === "development" ? "http://localhost:9999" : "https://deepseek.playform.cloud",
	/** The DeepSeek Harness repository (deepseek-ai), linked at branch master. */
	DeepSeekHarness: {
		Base: "https://github.com/deepseek-ai/deepseek-harness",
		Branch: "tree/master"
	},
	/** The family monorepo - this site's own repository (PlayForm/DeepSeek), at branch Current. */
	OurRepo: {
		Base: "https://github.com/PlayForm/DeepSeek",
		Branch: "tree/Current"
	}
};
/**
* Compose a repository URL: Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts")
* -> "https://github.com/deepseek-ai/deepseek-harness/tree/master/packages/llm/llm/src/index.ts".
* The one function every composed URL flows through - the future transform
* point for redirects, tracking, version bumps and scheme changes.
*/
function Link(Repo, Path) {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}
/** The string-prop shorthand keys: "Key:Path" targets resolved through the registry. */
var Shorthand = {
	Harness: Links.DeepSeekHarness,
	Ours: Links.OurRepo
};
/** The registered origins - the only absolute URLs a string prop may link to. */
var Safelist = /^(?:https:\/\/(?:github\.com\/deepseek-ai\/deepseek-harness|github\.com\/PlayForm\/DeepSeek)\/)/;
/**
* Resolve a string-prop link target to a verified URL, or null when the
* target is not registered. Accepts the "Harness:<path>" / "Ours:<path>"
* shorthand (composed through Link) and an absolute URL on a registered
* origin; anything else is refused and rendered as plain text.
*/
function Resolve(Target) {
	const Colon = Target.indexOf(":");
	if (Colon > 0) {
		const Repo = Shorthand[Target.slice(0, Colon)];
		if (Repo) return Link(Repo, Target.slice(Colon + 1));
	}
	if (Safelist.test(Target)) return Target;
	return null;
}
/** Escape a text fragment for safe interpolation into HTML. */
function Escape(Text) {
	return Text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
/**
* Linkify: the string-prop renderer. The Concept/Card/Seams string props are
* plain editable text that may carry lightweight inline links - a
* "[label](Harness:packages/...)" / "[label](Ours:...)" segment - and this
* function turns exactly those segments into safe <a> elements: every other
* character is escaped (the label and the surrounding text alike), the URL is
* composed through Link() and guarded by Resolve()'s registry safelist, and
* an unregistered target degrades to its literal text. The props stay plain
* text in the source; the rendering is a function of the registry.
*
* Every text segment also passes through Mention (the file-icon + log-chip
* renderer), so a filename in a Desc / Diagram / Seam string carries its
* file-type icon on the left - the file mentions render the same way on
* every string-prop surface.
*/
function Linkify(Text) {
	let Out = "";
	let Rest = Text;
	const Pattern = /\[([^\]]+)\]\(([^()\s]+)\)/;
	for (;;) {
		const Match = Rest.match(Pattern);
		if (!Match || Match.index === void 0) break;
		const URL = Resolve(Match[2]);
		Out += Mention(Rest.slice(0, Match.index));
		Out += URL === null ? Mention(Match[0]) : `<a href="${Escape(URL)}">${Mention(Match[1])}</a>`;
		Rest = Rest.slice(Match.index + Match[0].length);
	}
	return Out + Mention(Rest);
}
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { Title = "", Description = "" } = Astro.props;
	const Nav = [
		{
			Href: "/",
			Label: "Overview"
		},
		{
			Href: "/plugins/",
			Label: "Plugins"
		},
		{
			Href: "/workbench/",
			Label: "Workbench"
		},
		{
			Href: "/models/",
			Label: "Models"
		},
		{
			Href: "/versions/",
			Label: "Versions"
		},
		{
			Href: "/setup/",
			Label: "Setup"
		},
		{
			Href: "/flavors/",
			Label: "Flavors"
		},
		{
			Href: "/case-study/",
			Label: "Case Study"
		}
	];
	const Path = Astro.url.pathname;
	function Current(Href) {
		return Href === "/" ? Path === "/" : Path.startsWith(Href.replace(/\/$/, ""));
	}
	const SiteURL = Links.Site.replace(/\/$/, "");
	const Canonical = `${SiteURL}${Path === "/" ? "/" : Path}`;
	const OgImage = `${SiteURL}/Brand/OG.png`;
	const CanonicalPackages = [
		"@playform/hook-dsh-ccr",
		"@playform/hook-dsh-core",
		"@playform/plugin-dsh-factory",
		"@playform/hook-dsh-package-governor",
		"@playform/hook-dsh-package-pinner",
		"@playform/hook-dsh-cargo-governor",
		"@playform/hook-dsh-normalize-dash",
		"@playform/hook-dsh-normalize-quotes",
		"@playform/hook-dsh-normalize-ellipsis",
		"@playform/hook-dsh-normalize-spaces",
		"@playform/hook-dsh-normalize-invisible",
		"@playform/hook-dsh-normalize-fullwidth",
		"@playform/hook-dsh-normalize-file",
		"@playform/hook-dsh-tool-coach",
		"@playform/hook-dsh-live-containers"
	];
	const Packages = [...CanonicalPackages.filter((Name) => Live.PackageNames.includes(Name)), ...Live.PackageNames.filter((Name) => !CanonicalPackages.includes(Name))];
	const JSONLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "DSH Family @ PlayForm",
		description: "The DeepSeek Harness plugin family: deterministic AI engine harnesses for production workloads - fifteen packages, fourteen smoke suites.",
		url: SiteURL,
		applicationCategory: "DeveloperApplication",
		operatingSystem: "Any",
		softwareVersion: Versions.Release,
		license: "https://spdx.org/licenses/CC0-1.0",
		image: OgImage,
		author: {
			"@type": "Organization",
			name: "PlayForm Cloud",
			url: "https://playform.cloud"
		},
		hasPart: Packages.map((Name) => ({
			"@type": "SoftwareApplication",
			name: Name,
			softwareVersion: Versions.Release
		}))
	};
	return renderTemplate`<html lang="en" class="no-js" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result) => renderTemplate` <script crossorigin=\"anonymous\">
			document.documentElement.classList.remove("no-js");
			document.documentElement.classList.add("js");
		<\/script> <script crossorigin=\"anonymous\">
			// The theme bridge, set BEFORE first paint: a stored toggle wins;
			// without one the OS prefers-color-scheme decides. Every later
			// toggle (the header switch) only flips this attribute and the
			// tokens follow - see the [data-theme="dark"] block in Global.css.
			// is:inline: Astro hoists plain head scripts into bundled modules
			// (which never execute in time), so this one must stay a blocking
			// inline script to beat the first paint.
			(() => {
				const Key = "dsh-theme";
				let Theme = null;
				try {
					Theme = localStorage.getItem(Key);
				} catch {}
				if (Theme !== "dark" && Theme !== "light") {
					Theme = matchMedia("(prefers-color-scheme: dark)").matches
						? "dark"
						: "light";
				}
				document.documentElement.setAttribute("data-theme", Theme);
			})();
		<\/script>  <title>${Title}</title> <meta charset="utf-8"> <meta name="description"${addAttribute(Description, "content")}> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta name="theme-color" content="#0052ff"> <meta name="format-detection" content="telephone=no"> <meta name="twitter:dnt" content="on">  <link rel="canonical"${addAttribute(Canonical, "href")} crossorigin=\"anonymous\"> <meta property="og:site_name" content="DSH Family @ PlayForm"> <meta property="og:title"${addAttribute(Title, "content")}> <meta property="og:description"${addAttribute(Description, "content")}> <meta property="og:type" content="website"> <meta property="og:url"${addAttribute(Canonical, "content")}> <meta property="og:image"${addAttribute(OgImage, "content")}> <meta property="og:image:width" content="1200"> <meta property="og:image:height" content="630"> <meta property="og:image:alt" content="The DSH Family @ PlayForm brand mark"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"${addAttribute(Title, "content")}> <meta name="twitter:description"${addAttribute(Description, "content")}> <meta name="twitter:image"${addAttribute(OgImage, "content")}>  <script crossorigin=\"anonymous\" type="application/ld+json">${unescapeHTML(JSON.stringify(JSONLd))}<\/script> <link rel="preload" href="/Font/inter-latin-var.woff2" as="font" type="font/woff2" crossorigin="anonymous" crossorigin=\"anonymous\"> <link rel="preload" href="/Font/ibm-plex-mono-400-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous" crossorigin=\"anonymous\"> <link rel="manifest" href="/Manifest.json" crossorigin="use-credentials">  <link rel="icon" href="/Brand/Favicon.svg" type="image/svg+xml"> <link rel="icon" href="/Brand/Favicon-32.png" type="image/png" sizes="32x32"> <link rel="apple-touch-icon" href="/Brand/Apple-Touch-Icon.png">  ${renderSlot($$result, $$slots["Head"])} ${renderComponent($$result, "ClientRouter", $$ClientRouter, {})} ` })} ${maybeRenderHead($$result)}<body> <!-- Fixed header --><header class="site-header"> <div class="site-header__inner"> <a class="site-header__brand"${addAttribute(Links.Site, "href")}><!-- The official PlayForm glyph (the Asset mark, via the
						shared BrandIcon) at the header's glyph size. -->${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "playform",
		"ClassName": "site-header__glyph",
		"Size": "28px"
	})} <span class="site-header__title">DSH Family <span class="sep">@</span> PlayForm</span></a> <!-- id="site-nav": the target of the hamburger's aria-controls. --> <nav class="site-header__nav" id="site-nav" aria-label="Primary"> ${Nav.map((Item) => renderTemplate`<a${addAttribute(Item.Href, "href")}${addAttribute(Current(Item.Href) ? "page" : void 0, "aria-current")}>${Item.Label}</a>`)} </nav> <!-- The light/dark switch: the LIGHT / DARK two-cell mono chip.
					The active cell is attribute-driven pure CSS (the cells are
					correct before any script runs); the script only flips the
					html[data-theme] attribute and persists the choice. The
					pin state stays functional (data-pinned + the title)
					without any visible mode text. --> <button class="theme-toggle" type="button" data-theme-toggle role="switch" aria-checked="false" aria-label="Toggle dark theme" title="Toggle dark theme"> <span class="theme-toggle__cell" data-theme-cell="light">LIGHT</span> <span class="theme-toggle__sep" aria-hidden="true">/</span> <span class="theme-toggle__cell" data-theme-cell="dark">DARK</span> </button> <!-- The mobile nav toggle: the flat three-line hamburger in
					the avatar's old slot. The open state lives on the header
					(data-nav-open, set by the script); aria-expanded mirrors
					it for AT and aria-controls points at the nav above. The
					button is .js-gated in CSS - a no-JS document shows no
					dead control and the nav stays hidden as before. --> <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"> <svg class="nav-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"> <path class="nav-toggle__line" d="M4 7 H20"></path> <path class="nav-toggle__line" d="M4 12 H20"></path> <path class="nav-toggle__line" d="M4 17 H20"></path> </svg> </button> </div> </header> <!-- The case-study reading gauge: the 2px scroll-progress rail along
			the viewport's top edge, rendered only on the case study (the one
			long-form page whose scroll position is worth gauging). --> ${Path.startsWith("/case-study") && renderTemplate`<div class="scroll-progress" data-scroll-progress aria-hidden="true"> <span class="scroll-progress__bar"></span> </div>`} <div class="page"> ${renderSlot($$result, $$slots["default"])} </div> <!-- Transient action feedback (copy, stream, filter actions) --> <div class="toast" role="status" aria-live="polite" data-toast> <span class="toast__rail"></span> <span class="toast__msg" data-toast-msg></span> <span class="toast__progress"></span> </div> <!-- Footer --> <footer class="site-footer container"> <div class="site-footer__links"> ${Nav.map((Item) => renderTemplate`<a${addAttribute(Item.Href, "href")}>${Item.Label}</a>`)} </div> <p class="site-footer__note"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "playform" })}@playform: deterministic AI engine harnesses for production workloads. CC0-1.0 licensed.
</p> <p class="site-footer__copy">${Copyright.Line}</p> </footer>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts")}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=2&lang.ts")}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=3&lang.ts")} </body> </html>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro", void 0);
var $$Badge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Badge;
	const { Variant = "muted", Dot = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span${addAttribute(`badge badge--${Variant}`, "class")}> ${Dot && renderTemplate`<span class="dot"></span>`} ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Badge.astro", void 0);
//#endregion
export { Mention as C, __exportAll as D, createComponent as E, DotSep as S, createAstro as T, Steps as _, Links as a, Versions as b, Families as c, Methods as d, Migration as f, Sprite as g, Scheme as h, Linkify as i, FamilyPosition as l, Ordinal as m, $$Base as n, Resolve as o, NormalizeFamily as p, Link as r, Counts as s, $$Badge as t, History as u, SuiteCount as v, renderScript as w, $$BrandIcon as x, Totals as y };
