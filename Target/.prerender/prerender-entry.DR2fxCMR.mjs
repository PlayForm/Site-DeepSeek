import { $ as isAstroError, A as ClientAddressNotAvailable, B as MiddlewareNoDataOrNextCalled, D as ActionsReturnedInvalidDataError, E as ActionNotFoundError, G as PrerenderClientAddressNotAvailable, H as NoManifestAvailable, I as InvalidGetStaticPathsEntry, J as ResponseSentError, K as PrerenderDynamicEndpointPathCollide, L as InvalidGetStaticPathsReturn, M as GetStaticPathsExpectedParams, N as GetStaticPathsInvalidRouteParam, O as AstroResponseHeadersReassigned, P as GetStaticPathsRequired, Q as AstroError, R as LocalsNotAnObject, S as markHTMLString, U as NoMatchingStaticPathFound, V as MiddlewareNotAResponse, W as PageNumberParamNotFound, X as StaticClientAddressNotAvailable, Y as RewriteWithBodyUsed, Z as i18nNoLocaleFoundInPath, a as renderJSX, at as clientAddressSymbol, b as pushDirective, c as chunkToString, ct as responseSentSymbol$1, d as renderSlotToString, dt as generateCspDigest, et as ASTRO_ERROR_HEADER, f as isRenderTemplateResult, i as isRoute500, it as REROUTABLE_STATUS_CODES, j as ForbiddenRewrite, k as CacheNotEnabled, l as createSlotValueFromString, lt as decodeKey, n as renderPage, nt as DEFAULT_404_COMPONENT, o as renderComponent, ot as fetchStateSymbol, p as renderTemplate, q as ReservedSlotName, r as isRoute404, rt as REDIRECT_STATUS_CODES, st as originPathnameSymbol, tt as ASTRO_GENERATOR, ut as decryptString, v as isRenderInstruction, w as renderEndpoint, x as isAstroComponentFactory, y as normalizeCspResourceEntry, z as LocalsReassigned } from "./chunks/server_BcWc5DJn.mjs";
import colors from "piccolore";
import { escape } from "html-escaper";
import { parseCookie, stringifySetCookie } from "cookie";
import { parse, stringify } from "devalue";
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/middleware/noop-middleware.js
var NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
	return await next();
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/app/manifest.js
function deserializeManifest(serializedManifest, routesList) {
	const routes = [];
	if (serializedManifest.routes) for (const serializedRoute of serializedManifest.routes) routes.push({
		...serializedRoute,
		routeData: deserializeRouteData(serializedRoute.routeData)
	});
	if (routesList) for (const route of routesList?.routes) routes.push({
		file: "",
		links: [],
		scripts: [],
		styles: [],
		routeData: route
	});
	const assets = new Set(serializedManifest.assets);
	const componentMetadata = new Map(serializedManifest.componentMetadata);
	const inlinedScripts = new Map(serializedManifest.inlinedScripts);
	const clientDirectives = new Map(serializedManifest.clientDirectives);
	const key = decodeKey(serializedManifest.key);
	return {
		middleware() {
			return { onRequest: NOOP_MIDDLEWARE_FN };
		},
		...serializedManifest,
		rootDir: new URL(serializedManifest.rootDir),
		srcDir: new URL(serializedManifest.srcDir),
		publicDir: new URL(serializedManifest.publicDir),
		outDir: new URL(serializedManifest.outDir),
		cacheDir: new URL(serializedManifest.cacheDir),
		buildClientDir: new URL(serializedManifest.buildClientDir),
		buildServerDir: new URL(serializedManifest.buildServerDir),
		assets,
		componentMetadata,
		inlinedScripts,
		clientDirectives,
		routes,
		key
	};
}
function deserializeRouteData(rawRouteData) {
	return {
		route: rawRouteData.route,
		type: rawRouteData.type,
		pattern: new RegExp(rawRouteData.pattern),
		params: rawRouteData.params,
		component: rawRouteData.component,
		pathname: rawRouteData.pathname || void 0,
		segments: rawRouteData.segments,
		prerender: rawRouteData.prerender,
		redirect: rawRouteData.redirect,
		redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
		fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
			return deserializeRouteData(fallback);
		}),
		isIndex: rawRouteData.isIndex,
		origin: rawRouteData.origin,
		distURL: rawRouteData.distURL
	};
}
function deserializeRouteInfo(rawRouteInfo) {
	return {
		styles: rawRouteInfo.styles,
		file: rawRouteInfo.file,
		links: rawRouteInfo.links,
		scripts: rawRouteInfo.scripts,
		routeData: deserializeRouteData(rawRouteInfo.routeData)
	};
}
//#endregion
//#region \0virtual:astro:renderers
var renderers = [];
[
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/case-study",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/case-study\\/?$",
			"segments": [[{
				"content": "case-study",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/case-study.astro",
			"pathname": "/case-study",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/flavors",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/flavors\\/?$",
			"segments": [[{
				"content": "flavors",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/flavors.astro",
			"pathname": "/flavors",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/matrix",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/matrix\\/?$",
			"segments": [[{
				"content": "matrix",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/matrix.astro",
			"pathname": "/matrix",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/models",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/models\\/?$",
			"segments": [[{
				"content": "models",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/models.astro",
			"pathname": "/models",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-core",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-core\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-core",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-core.astro",
			"pathname": "/plugins/hook-dsh-core",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-governor-cargo",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-governor-cargo\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-governor-cargo",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-governor-cargo.astro",
			"pathname": "/plugins/hook-dsh-governor-cargo",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-governor-package",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-governor-package\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-governor-package",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-governor-package.astro",
			"pathname": "/plugins/hook-dsh-governor-package",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-normalize-dash",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-normalize-dash\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-normalize-dash",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-normalize-dash.astro",
			"pathname": "/plugins/hook-dsh-normalize-dash",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-normalize-ellipsis",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-normalize-ellipsis\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-normalize-ellipsis",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-normalize-ellipsis.astro",
			"pathname": "/plugins/hook-dsh-normalize-ellipsis",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-normalize-file",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-normalize-file\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-normalize-file",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-normalize-file.astro",
			"pathname": "/plugins/hook-dsh-normalize-file",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-normalize-fullwidth",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-normalize-fullwidth\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-normalize-fullwidth",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-normalize-fullwidth.astro",
			"pathname": "/plugins/hook-dsh-normalize-fullwidth",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-normalize-invisible",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-normalize-invisible\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-normalize-invisible",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-normalize-invisible.astro",
			"pathname": "/plugins/hook-dsh-normalize-invisible",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-normalize-quotes",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-normalize-quotes\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-normalize-quotes",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-normalize-quotes.astro",
			"pathname": "/plugins/hook-dsh-normalize-quotes",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-normalize-spaces",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-normalize-spaces\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-normalize-spaces",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-normalize-spaces.astro",
			"pathname": "/plugins/hook-dsh-normalize-spaces",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/hook-dsh-pinner-package",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/hook-dsh-pinner-package\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "hook-dsh-pinner-package",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/hook-dsh-pinner-package.astro",
			"pathname": "/plugins/hook-dsh-pinner-package",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins/plugin-dsh-factory",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/plugin-dsh-factory\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}], [{
				"content": "plugin-dsh-factory",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins/plugin-dsh-factory.astro",
			"pathname": "/plugins/plugin-dsh-factory",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/plugins",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/plugins\\/?$",
			"segments": [[{
				"content": "plugins",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/plugins.astro",
			"pathname": "/plugins",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/setup",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/setup\\/?$",
			"segments": [[{
				"content": "setup",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/setup.astro",
			"pathname": "/setup",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/versions",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/versions\\/?$",
			"segments": [[{
				"content": "versions",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/versions.astro",
			"pathname": "/versions",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/workbench",
			"isIndex": false,
			"type": "page",
			"pattern": "^\\/workbench\\/?$",
			"segments": [[{
				"content": "workbench",
				"dynamic": false,
				"spread": false
			}]],
			"params": [],
			"component": "Source/pages/workbench.astro",
			"pathname": "/workbench",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	},
	{
		"file": "",
		"links": [],
		"scripts": [],
		"styles": [],
		"routeData": {
			"route": "/",
			"isIndex": true,
			"type": "page",
			"pattern": "^\\/$",
			"segments": [],
			"params": [],
			"component": "Source/pages/index.astro",
			"pathname": "/",
			"prerender": true,
			"fallbackRoutes": [],
			"distURL": [],
			"origin": "project",
			"_meta": { "trailingSlash": "ignore" }
		}
	}
].map(deserializeRouteInfo);
//#endregion
//#region \0virtual:astro:pages
var _page0 = () => import("./chunks/case-study_a5upXRVy.mjs");
var _page1 = () => import("./chunks/flavors_2aCAbhJw.mjs");
var _page2 = () => import("./chunks/matrix_TkYZerR2.mjs");
var _page3 = () => import("./chunks/models__4QiJDes.mjs");
var _page4 = () => import("./chunks/hook-dsh-core_8FqIKPgK.mjs");
var _page5 = () => import("./chunks/hook-dsh-governor-cargo_D6ij-mYh.mjs");
var _page6 = () => import("./chunks/hook-dsh-governor-package_DOU7X_cS.mjs");
var _page7 = () => import("./chunks/hook-dsh-normalize-dash_Cnd2Q4nR.mjs");
var _page8 = () => import("./chunks/hook-dsh-normalize-ellipsis_CWY8Fy8-.mjs");
var _page9 = () => import("./chunks/hook-dsh-normalize-file_Demxq-lA.mjs");
var _page10 = () => import("./chunks/hook-dsh-normalize-fullwidth_DPrhQh02.mjs");
var _page11 = () => import("./chunks/hook-dsh-normalize-invisible_VWUjGNWA.mjs");
var _page12 = () => import("./chunks/hook-dsh-normalize-quotes_DyMf_IUY.mjs");
var _page13 = () => import("./chunks/hook-dsh-normalize-spaces_uA9D0LnM.mjs");
var _page14 = () => import("./chunks/hook-dsh-pinner-package_CWr-JQkH.mjs");
var _page15 = () => import("./chunks/plugin-dsh-factory_BjXYwjuh.mjs");
var _page16 = () => import("./chunks/plugins_B3jyNfcg.mjs");
var _page17 = () => import("./chunks/setup_r7TR1S5Y.mjs");
var _page18 = () => import("./chunks/versions_Bi8AR4rr.mjs");
var _page19 = () => import("./chunks/workbench_DZnLDxi6.mjs");
var _page20 = () => import("./chunks/index_By-yXrYn.mjs");
var pageMap = /* @__PURE__ */ new Map([
	["Source/pages/case-study.astro", _page0],
	["Source/pages/flavors.astro", _page1],
	["Source/pages/matrix.astro", _page2],
	["Source/pages/models.astro", _page3],
	["Source/pages/plugins/hook-dsh-core.astro", _page4],
	["Source/pages/plugins/hook-dsh-governor-cargo.astro", _page5],
	["Source/pages/plugins/hook-dsh-governor-package.astro", _page6],
	["Source/pages/plugins/hook-dsh-normalize-dash.astro", _page7],
	["Source/pages/plugins/hook-dsh-normalize-ellipsis.astro", _page8],
	["Source/pages/plugins/hook-dsh-normalize-file.astro", _page9],
	["Source/pages/plugins/hook-dsh-normalize-fullwidth.astro", _page10],
	["Source/pages/plugins/hook-dsh-normalize-invisible.astro", _page11],
	["Source/pages/plugins/hook-dsh-normalize-quotes.astro", _page12],
	["Source/pages/plugins/hook-dsh-normalize-spaces.astro", _page13],
	["Source/pages/plugins/hook-dsh-pinner-package.astro", _page14],
	["Source/pages/plugins/plugin-dsh-factory.astro", _page15],
	["Source/pages/plugins.astro", _page16],
	["Source/pages/setup.astro", _page17],
	["Source/pages/versions.astro", _page18],
	["Source/pages/workbench.astro", _page19],
	["Source/pages/index.astro", _page20]
]);
//#endregion
//#region \0virtual:astro:manifest
var _manifest = deserializeManifest({"rootDir":"file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/","cacheDir":"file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/node_modules/.astro/","outDir":"file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/","srcDir":"file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/","publicDir":"file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Public/","buildClientDir":"file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/client/","buildServerDir":"file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/server/","adapterName":"","assetsDir":"_astro","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/case-study","isIndex":false,"type":"page","pattern":"^\\/case-study\\/?$","segments":[[{"content":"case-study","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/case-study.astro","pathname":"/case-study","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/flavors","isIndex":false,"type":"page","pattern":"^\\/flavors\\/?$","segments":[[{"content":"flavors","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/flavors.astro","pathname":"/flavors","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/matrix","isIndex":false,"type":"page","pattern":"^\\/matrix\\/?$","segments":[[{"content":"matrix","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/matrix.astro","pathname":"/matrix","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/models","isIndex":false,"type":"page","pattern":"^\\/models\\/?$","segments":[[{"content":"models","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/models.astro","pathname":"/models","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-core","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-core\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-core","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-core.astro","pathname":"/plugins/hook-dsh-core","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-governor-cargo","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-governor-cargo\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-governor-cargo","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-governor-cargo.astro","pathname":"/plugins/hook-dsh-governor-cargo","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-governor-package","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-governor-package\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-governor-package","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-governor-package.astro","pathname":"/plugins/hook-dsh-governor-package","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-normalize-dash","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-normalize-dash\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-normalize-dash","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-normalize-dash.astro","pathname":"/plugins/hook-dsh-normalize-dash","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-normalize-ellipsis","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-normalize-ellipsis\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-normalize-ellipsis","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-normalize-ellipsis.astro","pathname":"/plugins/hook-dsh-normalize-ellipsis","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-normalize-file","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-normalize-file\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-normalize-file","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-normalize-file.astro","pathname":"/plugins/hook-dsh-normalize-file","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-normalize-fullwidth","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-normalize-fullwidth\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-normalize-fullwidth","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-normalize-fullwidth.astro","pathname":"/plugins/hook-dsh-normalize-fullwidth","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-normalize-invisible","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-normalize-invisible\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-normalize-invisible","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-normalize-invisible.astro","pathname":"/plugins/hook-dsh-normalize-invisible","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-normalize-quotes","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-normalize-quotes\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-normalize-quotes","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-normalize-quotes.astro","pathname":"/plugins/hook-dsh-normalize-quotes","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/hook-dsh-normalize-spaces","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-normalize-spaces\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-normalize-spaces","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-normalize-spaces.astro","pathname":"/plugins/hook-dsh-normalize-spaces","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.concept-list[data-astro-cid-dfjvxhk7]{gap:var(--space-2xl);margin-top:var(--space-lg);display:grid}.concept-block[data-astro-cid-dfjvxhk7]{gap:var(--space-md);min-width:0;display:grid}.concept-block[data-astro-cid-dfjvxhk7]>.page-hero__sub[data-astro-cid-dfjvxhk7],.concept-block__title[data-astro-cid-dfjvxhk7]{margin:0}.diagram-placeholder[data-astro-cid-dfjvxhk7]{border-radius:var(--radius-md,.75rem);gap:var(--space-md);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed;display:grid}.diagram-placeholder[data-astro-cid-dfjvxhk7]>p[data-astro-cid-dfjvxhk7]{margin:0}\n"}],"routeData":{"route":"/plugins/hook-dsh-pinner-package","isIndex":false,"type":"page","pattern":"^\\/plugins\\/hook-dsh-pinner-package\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"hook-dsh-pinner-package","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/hook-dsh-pinner-package.astro","pathname":"/plugins/hook-dsh-pinner-package","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins/plugin-dsh-factory","isIndex":false,"type":"page","pattern":"^\\/plugins\\/plugin-dsh-factory\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}],[{"content":"plugin-dsh-factory","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins/plugin-dsh-factory.astro","pathname":"/plugins/plugin-dsh-factory","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/plugins","isIndex":false,"type":"page","pattern":"^\\/plugins\\/?$","segments":[[{"content":"plugins","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/plugins.astro","pathname":"/plugins","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".install-grid[data-astro-cid-fh543yjg]{gap:var(--space-sm);grid-template-columns:1fr;display:grid}.install-card[data-astro-cid-fh543yjg]{background:var(--color-surface-container-lowest);border-radius:var(--radius-lg);gap:var(--space-xs);min-width:0;padding:var(--space-md);flex-direction:column;display:flex}.install-card[data-astro-cid-fh543yjg],.install-card__step[data-astro-cid-fh543yjg]{border:1px solid var(--color-outline-variant)}.install-card__step[data-astro-cid-fh543yjg]{background:var(--color-surface-container-low);border-radius:var(--radius-default);color:var(--color-primary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-self:flex-start;align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);padding:2px var(--space-xs);text-transform:uppercase;display:inline-flex}.install-card__step-marker[data-astro-cid-fh543yjg]{background:var(--color-primary-container);border-radius:var(--radius-sm);flex-shrink:0;width:6px;height:14px}.install-card__title[data-astro-cid-fh543yjg]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-lg);letter-spacing:var(--tracking-label-lg);font-weight:600;line-height:var(--leading-label-lg);margin:0}.install-card__meta[data-astro-cid-fh543yjg]{color:var(--color-ink-muted)}.install-card__meta[data-astro-cid-fh543yjg],.install-card__screen[data-astro-cid-fh543yjg]{font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);word-break:break-word}.install-card__screen[data-astro-cid-fh543yjg]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);padding:var(--space-sm) var(--space-md);white-space:pre-wrap;flex:1}.install-card__outcome[data-astro-cid-fh543yjg]{color:var(--color-on-surface-variant);font-size:var(--text-body-sm);line-height:var(--leading-body-sm);margin:0}@media (width>=640px){.install-grid[data-astro-cid-fh543yjg]{grid-template-columns:repeat(2,minmax(0,1fr))}}\n.concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/setup","isIndex":false,"type":"page","pattern":"^\\/setup\\/?$","segments":[[{"content":"setup","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/setup.astro","pathname":"/setup","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".concept[data-astro-cid-jbbkgrf3]{min-width:0}.concept[data-astro-cid-jbbkgrf3],.concept__diagram[data-astro-cid-jbbkgrf3]{gap:var(--space-md);grid-template-columns:minmax(0,1fr);display:grid}.concept__diagram[data-astro-cid-jbbkgrf3]{border-radius:var(--radius-md,.75rem);margin-bottom:var(--space-md);padding:var(--space-lg);border:1px dashed}.concept__diagram-figure[data-astro-cid-jbbkgrf3]{min-width:0;margin:0}.concept__diagram-figure[data-astro-cid-jbbkgrf3] svg{width:100%;max-width:100%;height:auto;display:block}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3],.concept__diagram-label[data-astro-cid-jbbkgrf3],.concept__title[data-astro-cid-jbbkgrf3]{margin:0}.concept__body[data-astro-cid-jbbkgrf3] p,.concept__diagram-brief[data-astro-cid-jbbkgrf3]{overflow-wrap:anywhere}.concept__diagram-label[data-astro-cid-jbbkgrf3]{font-weight:600}.concept__body[data-astro-cid-jbbkgrf3]{gap:var(--space-md);display:grid}\n"}],"routeData":{"route":"/versions","isIndex":false,"type":"page","pattern":"^\\/versions\\/?$","segments":[[{"content":"versions","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/versions.astro","pathname":"/versions","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".arrow-icon[data-astro-cid-o26fwbea]{vertical-align:-.125em;width:1em;height:1em}.arrow-icon--accent[data-astro-cid-o26fwbea]{color:var(--color-primary)}\n.tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n"}],"routeData":{"route":"/workbench","isIndex":false,"type":"page","pattern":"^\\/workbench\\/?$","segments":[[{"content":"workbench","dynamic":false,"spread":false}]],"params":[],"component":"Source/pages/workbench.astro","pathname":"/workbench","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"_astro/page.Cz5e5o0I.js"},{"stage":"head-inline","children":"if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/service-worker.js');\n}"}],"styles":[{"type":"external","src":"_astro/Badge.D5nh0E1I.css"},{"type":"inline","content":".tray[data-astro-cid-ptvurpk3]{border-bottom:1px solid var(--color-outline-variant);align-items:center;gap:var(--space-sm);margin-bottom:var(--space-xs);min-width:0;padding-bottom:var(--space-xs);display:flex}.tray__markers[data-astro-cid-ptvurpk3]{flex-shrink:0;align-items:center;gap:4px;display:inline-flex}.tray__marker[data-astro-cid-ptvurpk3]{background:var(--color-outline-variant);border-radius:1px;width:6px;height:6px}.tray__marker--first[data-astro-cid-ptvurpk3]{background:var(--color-primary-container)}.tray__label[data-astro-cid-ptvurpk3]{color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-body-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);font-weight:600;line-height:var(--leading-body-sm);text-transform:uppercase;min-width:0;display:inline-flex}.tray__label-text[data-astro-cid-ptvurpk3]{text-overflow:ellipsis;white-space:nowrap;min-width:0;overflow:hidden}.tray__label-raw[data-astro-cid-ptvurpk3]{color:var(--color-accent-orange)}.tray__label[data-astro-cid-ptvurpk3] svg[data-astro-cid-ptvurpk3]{flex-shrink:0;width:.8em;height:.8em}.tray__side[data-astro-cid-ptvurpk3]{align-items:center;gap:var(--space-xs);min-width:0;margin-left:auto;display:inline-flex}\n.compare[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-outline-variant);border-radius:var(--radius-lg);gap:var(--space-sm);min-width:0;padding:var(--space-md);flex-direction:column;margin:0;display:flex}.compare__stage[data-astro-cid-5ho3r3vh]{touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;min-width:0;position:relative}.compare__screen[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-low);border-radius:var(--radius-md);color:var(--color-on-surface);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);min-width:0;padding:var(--space-md);white-space:pre-wrap;word-break:break-word}.compare__screen--clean[data-astro-cid-5ho3r3vh]{position:relative}.compare__screen--raw[data-astro-cid-5ho3r3vh]{clip-path:inset(0 calc(100% - var(--compare-pos,50%)) 0 0);transition:clip-path var(--duration-fast) var(--ease-crisp);position:absolute;inset:0}.compare__handle[data-astro-cid-5ho3r3vh]{background:var(--color-harness-blue);cursor:ew-resize;bottom:0;left:var(--compare-pos,50%);transition:left var(--duration-fast) var(--ease-crisp);z-index:1;width:2px;margin-left:-1px;position:absolute;top:0}.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__handle[data-astro-cid-5ho3r3vh],.compare__stage[data-astro-cid-5ho3r3vh][data-dragging] .compare__screen--raw[data-astro-cid-5ho3r3vh]{transition:none}.compare__grip[data-astro-cid-5ho3r3vh]{background:var(--color-surface-container-lowest);border:1px solid var(--color-harness-blue);border-radius:2px;width:14px;height:14px;margin:-7px 0 0 -7px;position:absolute;top:50%;left:50%}.compare__legend[data-astro-cid-5ho3r3vh]{align-items:center;gap:var(--space-sm);flex-wrap:wrap;justify-content:space-between;margin:0;display:flex}.compare__legend-item[data-astro-cid-5ho3r3vh]{color:var(--color-ink-secondary);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);align-items:center;gap:var(--gap-icon);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);text-transform:uppercase;display:inline-flex}.compare__legend-raw[data-astro-cid-5ho3r3vh]{color:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot[data-astro-cid-5ho3r3vh]{border-radius:var(--radius-full);flex-shrink:0;width:8px;height:8px}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--raw[data-astro-cid-5ho3r3vh]{background:var(--color-accent-orange)}.compare__legend-item[data-astro-cid-5ho3r3vh] .dot--clean[data-astro-cid-5ho3r3vh]{background:var(--color-primary-container)}.compare__hint[data-astro-cid-5ho3r3vh]{color:var(--color-ink-muted);font-family:var(--font-mono);font-size:var(--text-label-sm);font-weight:var(--weight-label-sm);letter-spacing:var(--tracking-label-sm);line-height:var(--leading-label-sm);white-space:nowrap}.compare__keys[data-astro-cid-5ho3r3vh]{color:var(--color-primary)}\n"},{"type":"external","src":"_astro/index.x24ysbMx.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"Source/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"serverLike":false,"middlewareMode":"classic","site":"https://deepseek.playform.cloud","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"astro/entrypoints/prerender":"prerender-entry.DR2fxCMR.mjs","\u0000noop-middleware":"chunks/_noop-middleware_CQ50ikAJ.mjs","\u0000virtual:astro:server-island-manifest":"chunks/_virtual_astro_server-island-manifest_C1Q2srgE.mjs","\u0000virtual:astro:session-driver":"chunks/_virtual_astro_session-driver_C-PI1Pas.mjs","\u0000virtual:astro:page:Source/pages/case-study@_@astro":"chunks/case-study_a5upXRVy.mjs","\u0000virtual:astro:page:Source/pages/flavors@_@astro":"chunks/flavors_2aCAbhJw.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-core@_@astro":"chunks/hook-dsh-core_8FqIKPgK.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-governor-cargo@_@astro":"chunks/hook-dsh-governor-cargo_D6ij-mYh.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-governor-package@_@astro":"chunks/hook-dsh-governor-package_DOU7X_cS.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-dash@_@astro":"chunks/hook-dsh-normalize-dash_Cnd2Q4nR.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-ellipsis@_@astro":"chunks/hook-dsh-normalize-ellipsis_CWY8Fy8-.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-file@_@astro":"chunks/hook-dsh-normalize-file_Demxq-lA.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-fullwidth@_@astro":"chunks/hook-dsh-normalize-fullwidth_DPrhQh02.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-invisible@_@astro":"chunks/hook-dsh-normalize-invisible_VWUjGNWA.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-quotes@_@astro":"chunks/hook-dsh-normalize-quotes_DyMf_IUY.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-spaces@_@astro":"chunks/hook-dsh-normalize-spaces_uA9D0LnM.mjs","\u0000virtual:astro:page:Source/pages/plugins/hook-dsh-pinner-package@_@astro":"chunks/hook-dsh-pinner-package_CWr-JQkH.mjs","\u0000virtual:astro:page:Source/pages/index@_@astro":"chunks/index_By-yXrYn.mjs","\u0000virtual:astro:page:Source/pages/matrix@_@astro":"chunks/matrix_TkYZerR2.mjs","\u0000virtual:astro:page:Source/pages/models@_@astro":"chunks/models__4QiJDes.mjs","\u0000virtual:astro:actions/noop-entrypoint":"chunks/noop-entrypoint_Z3zFhrGC.mjs","\u0000virtual:astro:page:Source/pages/plugins/plugin-dsh-factory@_@astro":"chunks/plugin-dsh-factory_BjXYwjuh.mjs","\u0000virtual:astro:page:Source/pages/plugins@_@astro":"chunks/plugins_B3jyNfcg.mjs","\u0000virtual:astro:page:Source/pages/setup@_@astro":"chunks/setup_r7TR1S5Y.mjs","\u0000virtual:astro:page:Source/pages/versions@_@astro":"chunks/versions_Bi8AR4rr.mjs","\u0000virtual:astro:page:Source/pages/workbench@_@astro":"chunks/workbench_DZnLDxi6.mjs","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.DX89r1fJ.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts":"_astro/Base.astro_astro_type_script_index_1_lang.DPXdjPUa.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=2&lang.ts":"_astro/Base.astro_astro_type_script_index_2_lang.BFx8_h7N.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BulL7Ou2.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Compare.astro?astro&type=script&index=0&lang.ts":"_astro/Compare.astro_astro_type_script_index_0_lang.BlDvqd1R.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Terminal.astro?astro&type=script&index=0&lang.ts":"_astro/Terminal.astro_astro_type_script_index_0_lang.5VlqHvS-.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BdwyQxY3.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/matrix.astro?astro&type=script&index=0&lang.ts":"_astro/matrix.astro_astro_type_script_index_0_lang.DSNkl-O2.js","astro:scripts/page.js":"_astro/page.Cz5e5o0I.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins.astro?astro&type=script&index=0&lang.ts":"_astro/plugins.astro_astro_type_script_index_0_lang.DbxnXwcH.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro?astro&type=script&index=0&lang.ts":"_astro/workbench.astro_astro_type_script_index_0_lang.rcpjelTH.js","/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/node_modules/.pnpm/firebase@12.19.0/node_modules/firebase/app/dist/esm/index.esm.js":"_astro/index.esm.8nwEzyBY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts","var t,e=document.querySelector(\"[data-toast]\"),o=e.querySelector(\"[data-toast-msg]\");window.__dshToast=s=>{o.textContent=s,e.classList.add(\"is-visible\");const a=e.querySelector(\".toast__progress\");a.style.animation=\"none\",a.offsetWidth,a.style.animation=\"\",clearTimeout(t),t=setTimeout(()=>e.classList.remove(\"is-visible\"),2600)},document.addEventListener(\"click\",t=>{const e=t.target.closest(\"[data-copy]\");if(!e)return;t.stopPropagation();const o=e.dataset.copy??\"\";navigator.clipboard?.writeText&&navigator.clipboard.writeText(o).catch(()=>{}),e.classList.add(\"is-copied\");const s=e.querySelector(\"[data-copy-label]\"),a=s?.textContent??\"\";s&&(s.textContent=\"COPIED\"),window.__dshToast?.(`Copied: ${o}`),setTimeout(()=>{e.classList.remove(\"is-copied\"),s&&a&&(s.textContent=a)},1400)});"],["/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts","var e=document.querySelector(\"[data-theme-toggle]\"),t=t=>{document.documentElement.setAttribute(\"data-theme\",t),e&&e.setAttribute(\"aria-checked\",String(\"dark\"===t))},r=()=>\"dark\"===document.documentElement.getAttribute(\"data-theme\")?\"dark\":\"light\";t(r()),e?.addEventListener(\"click\",()=>{const e=\"dark\"===r()?\"light\":\"dark\";t(e);try{localStorage.setItem(\"dsh-theme\",e)}catch{}});try{localStorage.getItem(\"dsh-theme\")||matchMedia(\"(prefers-color-scheme: dark)\").addEventListener(\"change\",e=>t(e.matches?\"dark\":\"light\"))}catch{}var n=document.querySelector(\"[data-nav-toggle]\"),a=n?.closest(\".site-header\");if(n&&a){const e=e=>{a.setAttribute(\"data-nav-open\",String(e)),n.setAttribute(\"aria-expanded\",String(e)),n.setAttribute(\"aria-label\",e?\"Close menu\":\"Open menu\")};n.addEventListener(\"click\",()=>{e(\"true\"!==a.getAttribute(\"data-nav-open\"))}),document.addEventListener(\"keydown\",t=>{\"Escape\"===t.key&&\"true\"===a.getAttribute(\"data-nav-open\")&&e(!1)}),document.addEventListener(\"click\",t=>{\"true\"===a.getAttribute(\"data-nav-open\")&&(t.target.closest(\".site-header\")||e(!1))});const t=matchMedia(\"(min-width: 768px)\");t.addEventListener(\"change\",()=>{t.matches&&e(!1)}),document.addEventListener(\"astro:page-load\",()=>e(!1))}var d=()=>{const e=document.querySelectorAll(\"main .section\");if(!e.length)return;if(!(\"IntersectionObserver\"in window)||matchMedia(\"(prefers-reduced-motion: reduce)\").matches)return void e.forEach(e=>e.classList.add(\"is-revealed\"));const t=new Set(e),r=e=>{e.classList.add(\"is-revealed\"),t.delete(e)},n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(r(e.target),n.unobserve(e.target))})},{rootMargin:\"0px 0px -8% 0px\",threshold:.05}),a=.92*window.innerHeight,d=()=>{t.forEach(e=>{e.getBoundingClientRect().top<a&&(r(e),n.unobserve(e))}),t.size||window.removeEventListener(\"scroll\",d)};window.addEventListener(\"scroll\",d,{passive:!0}),e.forEach(e=>n.observe(e)),d()};document.addEventListener(\"astro:page-load\",d),d();var o=document.querySelector(\"[data-scroll-progress]\");if(o){const e=()=>{const e=document.documentElement.scrollHeight-window.innerHeight;o.style.transform=`scaleX(${e>0?Math.min(1,window.scrollY/e):0})`};let t=!1;const r=()=>{t||(t=!0,requestAnimationFrame(()=>{e(),t=!1}))};window.addEventListener(\"scroll\",r,{passive:!0}),e()}"],["/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Compare.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\"[data-compare]\").forEach(e=>{const t=e.querySelector(\"[data-handle]\"),n=Number(e.dataset.start??50),r=n=>{const r=Math.min(100,Math.max(0,Math.round(100*n)/100));e.style.setProperty(\"--compare-pos\",`${r}%`),t?.setAttribute(\"aria-valuenow\",String(Math.round(r)))};r(n);const a=t=>{const n=e.getBoundingClientRect();n.width<=0||r((t-n.left)/n.width*100)};if(t?.addEventListener(\"keydown\",e=>{const a=Number(t.getAttribute(\"aria-valuenow\")??n);\"ArrowLeft\"===e.key?(e.preventDefault(),r(a-5)):\"ArrowRight\"===e.key?(e.preventDefault(),r(a+5)):\"Home\"===e.key?(e.preventDefault(),r(0)):\"End\"===e.key&&(e.preventDefault(),r(100))}),!window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches){let n=null,r=null;const d=()=>{if(null!==r){cancelAnimationFrame(r),r=null;const e=n;n=null,null!==e&&a(e)}delete e.dataset.dragging},i=t=>{void 0===e.dataset.dragging&&(e.dataset.dragging=\"\"),n=t,null===r&&(r=requestAnimationFrame(()=>{r=null;const e=n;n=null,null!==e&&a(e)}))},o=(e,t)=>{e.preventDefault(),t.setPointerCapture(e.pointerId),a(e.clientX)};t?.addEventListener(\"pointerdown\",e=>{o(e,e.currentTarget)}),t?.addEventListener(\"pointermove\",e=>{e.currentTarget.hasPointerCapture(e.pointerId)&&i(e.clientX)}),t?.addEventListener(\"pointerup\",d),t?.addEventListener(\"pointercancel\",d),t?.addEventListener(\"lostpointercapture\",d),e.addEventListener(\"pointerdown\",t=>{t.target.closest?.(\"[data-handle]\")||o(t,e)}),e.addEventListener(\"pointermove\",t=>{e.hasPointerCapture(t.pointerId)&&i(t.clientX)}),e.addEventListener(\"pointerup\",d),e.addEventListener(\"pointercancel\",d),e.addEventListener(\"lostpointercapture\",d)}});"],["/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Terminal.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\".terminal\").forEach(e=>{const t=e.querySelector(\".terminal__copy\"),s=e.querySelector(\".terminal__status\");t&&s&&t.addEventListener(\"click\",()=>{s.classList.add(\"is-visible\"),setTimeout(()=>s.classList.remove(\"is-visible\"),1500)})});"],["/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro?astro&type=script&index=0&lang.ts","var e,a=[\"Plan review — phase one: the config “drift” is real… wait for it…\",\"Balance sheet sync — ‘quoted’ values kept…\",\"Latency​budget\\ufeff hit — p99 holds…\",\"Batch—two of three–done… “clean” output only\"],t=document.querySelector(\"[data-demo-raw]\"),n=document.querySelector(\"[data-demo-clean]\"),s=document.querySelector(\"[data-demo-status]\"),u=document.querySelector(\"[data-demo]\"),o=0,c=0,r=!1;function l(e,a){for(e.insertAdjacentHTML(\"beforeend\",`<div class=\"terminal-demo__line\">↳ ${a}<span class=\"stream-caret\"></span></div>`);e.scrollHeight>e.clientHeight;)e.firstElementChild?.remove()}function d(){const e=a[c%a.length];c+=1;const u=e,r=function(e){let a=e;const t=(e,t)=>{a=a.replace(e,t)};return t(/[\\u2013\\u2014\\u2015]/g,\"-\"),t(/[\\u2018\\u2019]/g,\"'\"),t(/[\\u201C\\u201D]/g,'\"'),t(/\\u2026/g,\"...\"),t(/\\u00A0/g,\" \"),t(/[\\u200B-\\u200D\\uFEFF]/g,\"\"),t(/[\\uFF01-\\uFF5E]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)),a}(e);o+=(u.match(/[\\u2013\\u2014\\u2015\\u2018\\u2019\\u201C\\u201D\\u2026\\u00A0\\u200B-\\u200D\\uFEFF\\uFF01-\\uFF5E]/g)??[]).length,l(t,u.replace(/[\\u200B-\\u200D\\uFEFF]/g,'<span class=\"zwsp\">[ZWSP]</span>').replace(/\\u00A0/g,'<span class=\"zwsp\">[NBSP]</span>').replace(/[\\u2013\\u2014\\u2015]/g,e=>`<span class=\"anom\">${e}</span>`).replace(/[\\u2018\\u2019\\u201C\\u201D]/g,e=>`<span class=\"anom\">${e}</span>`).replace(/\\u2026/g,'<span class=\"anom\">…</span>').replace(/[\\uFF01-\\uFF5E]/g,e=>`<span class=\"anom\">${e}</span>`)),l(n,r),s.textContent=`NORMALIZING · ${o.toLocaleString(\"en-US\")} CHARS`}function i(){e||(e=setInterval(d,1600))}i(),d(),window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches||(u.addEventListener(\"mouseenter\",()=>{r||(r=!0,u.classList.add(\"is-paused\"),s.innerHTML='<span class=\"status-paused\">PAUSED</span> · HOVER TO RESUME',e&&(clearInterval(e),e=void 0))}),u.addEventListener(\"mouseleave\",()=>{r&&(r=!1,u.classList.remove(\"is-paused\"),s.textContent=`NORMALIZING · ${o.toLocaleString(\"en-US\")} CHARS`,i())}));"],["/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/matrix.astro?astro&type=script&index=0&lang.ts","var e={dash:[/[\\u058A\\u05BE\\u1400\\u1806\\u2010-\\u2015\\u2E17\\u2E1A\\u2E3A-\\u2E3B\\u2E40\\u2E5D\\u301C\\u3030\\u30A0\\uFE31-\\uFE32\\uFE58\\uFE63\\uFF0D]/g,\"-\"],quotes:[/[\\u2018\\u2019\\u201C\\u201D]/g,e=>\"‘\"===e||\"’\"===e?\"'\":'\"'],ellipsis:[/\\u2026/g,\"...\"],spaces:[/[\\u00A0\\u1680\\u2000-\\u200A\\u202F\\u205F\\u3000]/g,\" \"],invisible:[/[\\u00AD\\u200B-\\u200F\\u202A-\\u202E\\u2060\\uFEFF]/g,\"\"],fullwidth:[/[\\uFF01-\\uFF5E]/g,e=>String.fromCharCode(e.charCodeAt(0)-65248)]},t=document.querySelector(\"[data-raw]\"),a=document.querySelector(\"[data-clean]\");function s(){if(!t||!a)return;let s=t.textContent??\"\";for(const[t,a]of Object.entries(e)){const e=document.querySelector(`[data-flavor='${t}']`);e&&e.checked&&(s=s.replace(t,a))}a.textContent=s,a.classList.remove(\"is-flashing\"),a.offsetWidth,a.classList.add(\"is-flashing\")}t&&(t.innerHTML=(t.textContent??\"\").replace(/[\\u200B-\\u200D\\uFEFF]/g,'<span class=\"zwsp\">[ZWSP]</span>').replace(/\\u00A0/g,'<span class=\"zwsp\">[NBSP]</span>').replace(/[\\u2013\\u2014\\u2015]/g,e=>`<span class=\"anom\">${e}</span>`).replace(/[\\u2018\\u2019\\u201C\\u201D]/g,e=>`<span class=\"anom\">${e}</span>`).replace(/\\u2026/g,'<span class=\"anom\">…</span>').replace(/[\\uFF01-\\uFF5E]/g,e=>`<span class=\"anom\">${e}</span>`)),document.querySelectorAll(\".hook-check\").forEach(e=>{e.addEventListener(\"change\",()=>{e.closest(\".hook-card\")?.classList.toggle(\"is-armed\",e.checked),e.closest(\".hook-card\")?.classList.toggle(\"is-disarmed\",!e.checked),s()})}),document.querySelector(\"[data-action='reset']\")?.addEventListener(\"click\",()=>{document.querySelectorAll(\".hook-check\").forEach(e=>{e.checked=!0,e.closest(\".hook-card\")?.classList.add(\"is-armed\"),e.closest(\".hook-card\")?.classList.remove(\"is-disarmed\")}),s()}),document.querySelector(\"[data-action='benchmark']\")?.addEventListener(\"click\",()=>{const e=document.querySelector(\"[data-benchmark-status]\");e&&e.classList.add(\"is-visible\")}),document.querySelector(\"[data-action='copy']\")?.addEventListener(\"click\",e=>{navigator.clipboard?.writeText&&a&&navigator.clipboard.writeText(a.textContent??\"\");const t=e.currentTarget,s=t.textContent;t.textContent=\"COPIED ✓\",setTimeout(()=>{s&&(t.textContent=s)},1400),window.__dshToast?.(\"Normalized output copied to clipboard\")}),document.querySelectorAll(\"[data-engine]\").forEach(e=>{e.addEventListener(\"click\",()=>{document.querySelectorAll(\"[data-engine]\").forEach(e=>{e.removeAttribute(\"data-active\"),e.setAttribute(\"aria-pressed\",\"false\")}),e.setAttribute(\"data-active\",\"\"),e.setAttribute(\"aria-pressed\",\"true\"),window.__dshToast?.(`Engine: ${e.textContent?.trim()}`)})}),document.querySelectorAll(\"[data-mode]\").forEach(e=>{e.addEventListener(\"click\",()=>{document.querySelectorAll(\"[data-mode]\").forEach(e=>{e.removeAttribute(\"data-active\"),e.setAttribute(\"aria-pressed\",\"false\")}),e.setAttribute(\"data-active\",\"\"),e.setAttribute(\"aria-pressed\",\"true\"),window.__dshToast?.(`Architecture: ${e.textContent?.trim()}`)})});var r=document.querySelector(\".stream-grid\");r&&!window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches&&(r.addEventListener(\"mouseenter\",()=>r.classList.add(\"is-paused\")),r.addEventListener(\"mouseleave\",()=>r.classList.remove(\"is-paused\")));"],["/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins.astro?astro&type=script&index=0&lang.ts","var e=document.querySelector(\"[data-filter]\"),t=document.querySelector(\"[data-count]\"),r=document.querySelector(\"[data-count-text]\"),a=document.querySelector(\"[data-empty]\"),s=Array.from(document.querySelectorAll(\".card[data-package]\"));function c(e){const t=e.cloneNode(!0);return t.querySelectorAll(\"[data-copy], .copy-trigger\").forEach(e=>e.remove()),(t.textContent??\"\").toLowerCase()}function l(){const l=(e?.value??\"\").trim().toLowerCase(),i=document.querySelector(\"[data-filter-chip].is-active\")?.dataset.filterChip??\"all\";let o=0;for(const e of s){const t=c(e),r=(e.dataset.tags??\"\").toLowerCase(),a=!l||t.includes(l),s=\"all\"===i||r.split(/\\s+/).includes(i)||r.includes(i)||t.includes(\"core\"===i?\"factory\":i);a&&s?(e.classList.remove(\"is-hidden\"),o+=1,e.classList.remove(\"filter-enter\"),e.offsetWidth,e.classList.add(\"filter-enter\")):e.classList.add(\"is-hidden\")}const d=l?` MATCHING \"${l.toUpperCase()}\"`:\"\";t&&(t.textContent=`${o} RESULT${1===o?\"\":\"S\"}`),r&&(r.textContent=`${o} PACKAGE${1===o?\"\":\"S\"}${d}`),a&&a.classList.toggle(\"is-visible\",0===o)}e?.addEventListener(\"input\",l),document.querySelectorAll(\"[data-filter-chip]\").forEach(e=>{e.addEventListener(\"click\",()=>{document.querySelectorAll(\"[data-filter-chip]\").forEach(e=>{e.classList.remove(\"is-active\"),e.setAttribute(\"aria-pressed\",\"false\")}),e.classList.add(\"is-active\"),e.setAttribute(\"aria-pressed\",\"true\"),l()})}),document.querySelector(\"[data-reset]\")?.addEventListener(\"click\",()=>{e&&(e.value=\"\",e.focus()),document.querySelectorAll(\"[data-filter-chip]\").forEach(e=>{const t=\"all\"===e.dataset.filterChip;e.classList.toggle(\"is-active\",t),e.setAttribute(\"aria-pressed\",String(t))}),l()}),document.querySelectorAll(\"[data-selectable] tbody tr\").forEach(e=>{e.tabIndex=0,e.addEventListener(\"click\",()=>{e.parentElement?.querySelectorAll(\"tr.is-selected\").forEach(e=>e.classList.remove(\"is-selected\")),e.classList.add(\"is-selected\")}),e.addEventListener(\"keydown\",t=>{\"Enter\"!==t.key&&\" \"!==t.key||(t.preventDefault(),e.click())})}),l();"]],"assets":["/_astro/Badge.D5nh0E1I.css","/_astro/index.x24ysbMx.css","/_astro/page.Cz5e5o0I.js","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/case-study/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/flavors/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/matrix/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/models/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-core/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-governor-cargo/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-governor-package/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-normalize-dash/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-normalize-ellipsis/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-normalize-file/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-normalize-fullwidth/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-normalize-invisible/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-normalize-quotes/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-normalize-spaces/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/hook-dsh-pinner-package/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/plugins/plugin-dsh-factory/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/setup/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/versions/index.html","/file:///Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Target/workbench/index.html"],"buildFormat":"directory","checkOrigin":false,"actionBodySizeLimit":1048576,"serverIslandBodySizeLimit":1048576,"allowedDomains":[],"key":"7jX2lQggpF6vsDi5D9fJaO9GygGxxIsF33nGcNW2iQ8=","image":{},"devToolbar":{"enabled":false,"debugInfoOutput":""},"logLevel":"info","shouldInjectCspMetaTags":false});
var manifestRoutes = _manifest.routes;
var manifest = Object.assign(_manifest, {
	renderers,
	actions: () => import("./chunks/noop-entrypoint_Z3zFhrGC.mjs"),
	middleware: () => import("./chunks/_noop-middleware_CQ50ikAJ.mjs"),
	sessionDriver: () => import("./chunks/_virtual_astro_session-driver_C-PI1Pas.mjs"),
	serverIslandMappings: () => import("./chunks/_virtual_astro_server-island-manifest_C1Q2srgE.mjs"),
	routes: manifestRoutes,
	pageMap
});
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/vite-plugin-scripts/index.js
var SCRIPT_ID_PREFIX = `astro:scripts/`;
var BEFORE_HYDRATION_SCRIPT_ID = `${SCRIPT_ID_PREFIX}before-hydration.js`;
var PAGE_SCRIPT_ID = `${SCRIPT_ID_PREFIX}page.js`;
`${SCRIPT_ID_PREFIX}`;
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/redirects/component.js
var RedirectComponentInstance = { default() {
	return new Response(null, { status: 301 });
} };
var RedirectSinglePageBuiltModule = {
	page: () => Promise.resolve(RedirectComponentInstance),
	onRequest: (_, next) => next()
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/assets/utils/getAssetsPrefix.js
function getAssetsPrefix(fileExtension, assetsPrefix) {
	let prefix = "";
	if (!assetsPrefix) prefix = "";
	else if (typeof assetsPrefix === "string") prefix = assetsPrefix;
	else prefix = assetsPrefix[fileExtension.slice(1)] || assetsPrefix.fallback;
	return prefix;
}
//#endregion
//#region node_modules/.pnpm/@astrojs+internal-helpers@0.12.0/node_modules/@astrojs/internal-helpers/dist/path.js
function appendForwardSlash(path) {
	return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
	return path[0] === "/" ? path : "/" + path;
}
var MANY_LEADING_SLASHES = /^\/{2,}/;
function collapseDuplicateLeadingSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_LEADING_SLASHES, "/");
}
var MANY_SLASHES = /\/{2,}/g;
function collapseDuplicateSlashes(path) {
	if (!path) return path;
	return path.replace(MANY_SLASHES, "/");
}
var MANY_TRAILING_SLASHES = /\/{2,}$/g;
function collapseDuplicateTrailingSlashes(path, trailingSlash) {
	if (!path) return path;
	return path.replace(MANY_TRAILING_SLASHES, trailingSlash ? "/" : "") || "/";
}
function removeTrailingForwardSlash(path) {
	return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
	return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
	return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
	return typeof path === "string" || path instanceof String;
}
var INTERNAL_PREFIXES = /* @__PURE__ */ new Set([
	"/_",
	"/@",
	"/.",
	"//"
]);
var JUST_SLASHES = /^\/{2,}$/;
function isInternalPath(path) {
	const prefix = path.slice(0, 2).replace(/\\/g, "/");
	return INTERNAL_PREFIXES.has(prefix) && !JUST_SLASHES.test(path);
}
function joinPaths(...paths) {
	return paths.filter(isString).map((path, i) => {
		if (i === 0) return removeTrailingForwardSlash(path);
		else if (i === paths.length - 1) return removeLeadingForwardSlash(path);
		else return trimSlashes(path);
	}).join("/");
}
function slash(path) {
	return path.replace(/\\/g, "/");
}
function fileExtension(path) {
	const ext = path.split(".").pop();
	return ext !== path ? `.${ext}` : "";
}
function stripRequestBase(pathname, base) {
	pathname = collapseDuplicateLeadingSlashes(pathname);
	const baseWithoutTrailingSlash = removeTrailingForwardSlash(base);
	if (pathname === baseWithoutTrailingSlash) return "/";
	if (pathname.startsWith(baseWithoutTrailingSlash + "/")) return pathname.slice(baseWithoutTrailingSlash.length);
	return pathname;
}
var WITH_FILE_EXT = /\/[^/]+\.\w+$/;
function hasFileExtension(path) {
	return WITH_FILE_EXT.test(path);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/render/ssr-element.js
var URL_PARSE_BASE = "https://astro.build";
function splitAssetPath(path) {
	const parsed = new URL(path, URL_PARSE_BASE);
	return {
		pathname: !URL.canParse(path) && !path.startsWith("/") ? parsed.pathname.slice(1) : parsed.pathname,
		suffix: `${parsed.search}${parsed.hash}`
	};
}
function appendQueryParams(path, queryParams) {
	const queryString = queryParams.toString();
	if (!queryString) return path;
	const hashIndex = path.indexOf("#");
	const basePath = hashIndex === -1 ? path : path.slice(0, hashIndex);
	const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
	return `${basePath}${basePath.includes("?") ? "&" : "?"}${queryString}${hash}`;
}
function createAssetLink(href, base, assetsPrefix, queryParams) {
	const { pathname, suffix } = splitAssetPath(href);
	let url = "";
	if (assetsPrefix) url = joinPaths(getAssetsPrefix(fileExtension(pathname), assetsPrefix), slash(pathname)) + suffix;
	else if (base) url = prependForwardSlash(joinPaths(base, slash(pathname))) + suffix;
	else url = href;
	if (queryParams) url = appendQueryParams(url, queryParams);
	return url;
}
function createStylesheetElement(stylesheet, base, assetsPrefix, queryParams) {
	if (stylesheet.type === "inline") return {
		props: {},
		children: stylesheet.content
	};
	else return {
		props: {
			rel: "stylesheet",
			href: createAssetLink(stylesheet.src, base, assetsPrefix, queryParams)
		},
		children: ""
	};
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix, queryParams) {
	return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix, queryParams)));
}
function createModuleScriptElement(script, base, assetsPrefix, queryParams) {
	if (script.type === "external") return createModuleScriptElementWithSrc(script.value, base, assetsPrefix, queryParams);
	else return {
		props: { type: "module" },
		children: script.value
	};
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix, queryParams) {
	return {
		props: {
			type: "module",
			src: createAssetLink(src, base, assetsPrefix, queryParams)
		},
		children: ""
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/manifest/memo.js
function createManifestMemo(derive) {
	const cache = /* @__PURE__ */ new WeakMap();
	return {
		get(manifest) {
			if (cache.has(manifest)) return cache.get(manifest);
			const value = derive(manifest);
			cache.set(manifest, value);
			return value;
		},
		has(manifest) {
			return cache.has(manifest);
		},
		set(manifest, value) {
			cache.set(manifest, value);
		},
		invalidate(manifest) {
			cache.delete(manifest);
		}
	};
}
function createAsyncManifestMemo(derive) {
	const cache = /* @__PURE__ */ new WeakMap();
	return {
		get(manifest) {
			let promise = cache.get(manifest);
			if (!promise) {
				promise = derive(manifest);
				cache.set(manifest, promise);
				promise.catch(() => {
					if (cache.get(manifest) === promise) cache.delete(manifest);
				});
			}
			return promise;
		},
		invalidate(manifest) {
			cache.delete(manifest);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/request-body.js
async function readBodyWithLimit(request, limit) {
	const contentLengthHeader = request.headers.get("content-length");
	if (contentLengthHeader) {
		const contentLength = Number.parseInt(contentLengthHeader, 10);
		if (Number.isFinite(contentLength) && contentLength > limit) throw new BodySizeLimitError(limit);
	}
	if (!request.body) return /* @__PURE__ */ new Uint8Array();
	const reader = request.body.getReader();
	const chunks = [];
	let received = 0;
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		if (value) {
			received += value.byteLength;
			if (received > limit) throw new BodySizeLimitError(limit);
			chunks.push(value);
		}
	}
	const buffer = new Uint8Array(received);
	let offset = 0;
	for (const chunk of chunks) {
		buffer.set(chunk, offset);
		offset += chunk.byteLength;
	}
	return buffer;
}
var BodySizeLimitError = class extends Error {
	limit;
	constructor(limit) {
		super(`Request body exceeds the configured limit of ${limit} bytes`);
		this.name = "BodySizeLimitError";
		this.limit = limit;
	}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/pattern.js
function getPattern(segments, base, addTrailingSlash) {
	const pathname = segments.map((segment) => {
		if (segment.length === 1 && segment[0].spread) return "(?:\\/(.*?))?";
		else return "\\/" + segment.map((part) => {
			if (part.spread) return "(.*?)";
			else if (part.dynamic) return "([^/]+?)";
			else return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}).join("");
	}).join("");
	const trailing = addTrailingSlash && segments.length ? getTrailingSlashPattern(addTrailingSlash) : "$";
	let initial = "\\/";
	if (addTrailingSlash === "never" && base !== "/" && pathname !== "") initial = "";
	return new RegExp(`^${pathname || initial}${trailing}`);
}
function getTrailingSlashPattern(addTrailingSlash) {
	if (addTrailingSlash === "always") return "\\/$";
	if (addTrailingSlash === "never") return "$";
	return "\\/?$";
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/server-islands/endpoint.js
var SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
var SERVER_ISLAND_COMPONENT = "_server-islands.astro";
function badRequest(reason) {
	return new Response(null, {
		status: 400,
		statusText: "Bad request: " + reason
	});
}
var DEFAULT_BODY_SIZE_LIMIT = 1048576;
async function getRequestData(request, bodySizeLimit = DEFAULT_BODY_SIZE_LIMIT) {
	switch (request.method) {
		case "GET": {
			const params = new URL(request.url).searchParams;
			if (!params.has("s") || !params.has("e") || !params.has("p")) return badRequest("Missing required query parameters.");
			const encryptedSlots = params.get("s");
			return {
				encryptedComponentExport: params.get("e"),
				encryptedProps: params.get("p"),
				encryptedSlots
			};
		}
		case "POST": try {
			const body = await readBodyWithLimit(request, bodySizeLimit);
			const raw = new TextDecoder().decode(body);
			const data = JSON.parse(raw);
			if (Object.hasOwn(data, "slots") && typeof data.slots === "object") return badRequest("Plaintext slots are not allowed. Slots must be encrypted.");
			if (Object.hasOwn(data, "componentExport") && typeof data.componentExport === "string") return badRequest("Plaintext componentExport is not allowed. componentExport must be encrypted.");
			return data;
		} catch (e) {
			if (e instanceof BodySizeLimitError) return new Response(null, {
				status: 413,
				statusText: e.message
			});
			if (e instanceof SyntaxError) return badRequest("Request format is invalid.");
			throw e;
		}
		default: return new Response(null, { status: 405 });
	}
}
function createEndpoint(manifest) {
	const page = async (result) => {
		const params = result.params;
		if (!params.name) return new Response(null, {
			status: 400,
			statusText: "Bad request"
		});
		const componentId = params.name;
		const data = await getRequestData(result.request, manifest.serverIslandBodySizeLimit);
		if (data instanceof Response) return data;
		let imp = (await (await manifest.serverIslandMappings?.())?.serverIslandMap)?.get(componentId);
		if (!imp) return new Response(null, {
			status: 404,
			statusText: "Not found"
		});
		const key = await manifest.key;
		let componentExport;
		try {
			componentExport = await decryptString(key, data.encryptedComponentExport, `export:${componentId}`);
		} catch (_e) {
			return badRequest("Encrypted componentExport value is invalid.");
		}
		const encryptedProps = data.encryptedProps;
		let props = {};
		if (encryptedProps !== "") try {
			const propString = await decryptString(key, encryptedProps, `props:${componentId}`);
			props = JSON.parse(propString);
		} catch (_e) {
			return badRequest("Encrypted props value is invalid.");
		}
		let decryptedSlots = {};
		const encryptedSlots = data.encryptedSlots;
		if (encryptedSlots !== "") try {
			const slotsString = await decryptString(key, encryptedSlots, `slots:${componentId}`);
			decryptedSlots = JSON.parse(slotsString);
		} catch (_e) {
			return badRequest("Encrypted slots value is invalid.");
		}
		let Component = (await imp())[componentExport];
		const slots = {};
		for (const prop in decryptedSlots) slots[prop] = createSlotValueFromString(decryptedSlots[prop]);
		result.response.headers.set("X-Robots-Tag", "noindex");
		if (isAstroComponentFactory(Component)) {
			const ServerIsland = Component;
			Component = function(...args) {
				return ServerIsland.apply(this, args);
			};
			Object.assign(Component, ServerIsland);
			Component.propagation = "self";
		}
		result._metadata.routeHasPropagation = true;
		const renderPropagatedHead = () => markHTMLString(result._metadata.extraHead.join(""));
		return renderTemplate`${renderPropagatedHead}${renderComponent(result, "Component", Component, props, slots)}`;
	};
	page.isAstroComponentFactory = true;
	return {
		default: page,
		partial: true
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/template/4xx.js
function template({ title, pathname, statusCode = 404, tabTitle, body }) {
	return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/internal/astro-designed-error-pages.js
var DEFAULT_404_ROUTE = {
	component: DEFAULT_404_COMPONENT,
	params: [],
	pattern: /^\/404\/?$/,
	prerender: false,
	pathname: "/404",
	segments: [[{
		content: "404",
		dynamic: false,
		spread: false
	}]],
	type: "page",
	route: "/404",
	fallbackRoutes: [],
	isIndex: false,
	origin: "internal",
	distURL: []
};
async function default404Page({ pathname }) {
	return new Response(template({
		statusCode: 404,
		title: "Not found",
		tabTitle: "404: Not Found",
		pathname
	}), {
		status: 404,
		headers: { "Content-Type": "text/html" }
	});
}
default404Page.isAstroComponentFactory = true;
var default404Instance = { default: default404Page };
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/default.js
function createDefaultRoutes(manifest) {
	const root = new URL(manifest.rootDir);
	return [{
		instance: default404Instance,
		matchesComponent: (filePath) => filePath.href === new URL(DEFAULT_404_COMPONENT, root).href,
		route: DEFAULT_404_ROUTE.route,
		component: DEFAULT_404_COMPONENT
	}, {
		instance: createEndpoint(manifest),
		matchesComponent: (filePath) => filePath.href === new URL(SERVER_ISLAND_COMPONENT, root).href,
		route: SERVER_ISLAND_ROUTE,
		component: SERVER_ISLAND_COMPONENT
	}];
}
var defaultRoutesMemo = createManifestMemo(createDefaultRoutes);
function getDefaultRoutes(manifest) {
	return defaultRoutesMemo.get(manifest);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/i18n/path.js
function pathHasLocale(path, locales) {
	const segments = path.split("/").map(normalizeThePath);
	for (const segment of segments) for (const locale of locales) if (typeof locale === "string") {
		if (normalizeTheLocale(segment) === normalizeTheLocale(locale)) return true;
	} else if (segment === locale.path) return true;
	return false;
}
function normalizeTheLocale(locale) {
	return locale.replaceAll("_", "-").toLowerCase();
}
function normalizeThePath(path) {
	return path.endsWith(".html") ? path.slice(0, -5) : path;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/i18n/error-routes.js
function isLocalizedErrorRoute(route, status, locales) {
	if (!locales) return false;
	const suffix = `/${status}`;
	if (!route.endsWith(suffix)) return false;
	const localeSegment = route.slice(0, -suffix.length);
	if (!localeSegment || localeSegment.includes("/", 1)) return false;
	return pathHasLocale(localeSegment, locales);
}
function getErrorRoutePath(pathname, status, routes, locales, appendTrailingSlash = false) {
	const suffix = appendTrailingSlash ? "/" : "";
	if (locales) {
		const firstSegment = pathname.split("/").find(Boolean);
		if (firstSegment && pathHasLocale(`/${firstSegment}`, locales)) {
			const localized = `/${firstSegment}/${status}`;
			if (routes.some((route) => route.route === localized)) return `${localized}${suffix}`;
		}
	}
	return `/${status}${suffix}`;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/helpers.js
function routeIsRedirect(route) {
	return route?.type === "redirect";
}
function routeIsFallback(route) {
	return route?.type === "fallback";
}
function getFallbackRoute(route, routeList) {
	const fallbackRoute = routeList.find((r) => {
		if (route.route === "/" && r.routeData.route === "/") return true;
		return r.routeData.fallbackRoutes.find((f) => {
			return f.route === route.route;
		});
	});
	if (!fallbackRoute) throw new Error(`No fallback route found for route ${route.route}`);
	return fallbackRoute.routeData;
}
function getCustom404Route(manifestData) {
	return manifestData.routes.find((r) => isRoute404(r.route));
}
function getCustom500Route(manifestData) {
	return manifestData.routes.find((r) => isRoute500(r.route));
}
function getDefaultStatusCode(manifest, routeData, pathname) {
	if (!routeData.pattern.test(pathname)) {
		for (const fallbackRoute of routeData.fallbackRoutes) if (fallbackRoute.pattern.test(pathname)) return 302;
	}
	const route = removeTrailingForwardSlash(routeData.route);
	const locales = manifest.i18n?.locales;
	if (isRoute404(route) || isLocalizedErrorRoute(route, 404, locales)) return 404;
	if (isRoute500(route) || isLocalizedErrorRoute(route, 500, locales)) return 500;
	return 200;
}
function routeHasHtmlExtension(route) {
	return route.segments.some((segment) => segment.some((part) => !part.dynamic && part.content.includes(".html")));
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/logger/core.js
var dateTimeFormat = new Intl.DateTimeFormat([], {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false
});
var levels = {
	debug: 20,
	info: 30,
	warn: 40,
	error: 50,
	silent: 90
};
function log(opts, level, label, message, newLine = true) {
	const logLevel = opts.level;
	const dest = opts.destination;
	const event = {
		label,
		level,
		message,
		newLine
	};
	if (!isLogLevelEnabled(logLevel, level)) return;
	dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
	return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
	return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
	return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
	return log(opts, "error", label, message, newLine);
}
function debug(...args) {
	if ("_astroGlobalDebug" in globalThis) globalThis._astroGlobalDebug(...args);
}
function getEventPrefix({ level, label }) {
	const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
	const prefix = [];
	if (level === "error" || level === "warn") {
		prefix.push(colors.bold(timestamp));
		prefix.push(`[${level.toUpperCase()}]`);
	} else prefix.push(timestamp);
	if (label) prefix.push(`[${label}]`);
	if (level === "error") return colors.red(prefix.join(" "));
	if (level === "warn") return colors.yellow(prefix.join(" "));
	if (prefix.length === 1) return colors.dim(prefix[0]);
	return colors.dim(prefix[0]) + " " + colors.blue(prefix.splice(1).join(" "));
}
var AstroLogger = class {
	options;
	constructor(options) {
		this.options = options;
	}
	info(label, message, newLine = true) {
		info(this.options, label, message, newLine);
	}
	warn(label, message, newLine = true) {
		warn(this.options, label, message, newLine);
	}
	error(label, message, newLine = true) {
		error(this.options, label, message, newLine);
	}
	debug(label, ...messages) {
		debug(label, ...messages);
	}
	level() {
		return this.options.level;
	}
	forkIntegrationLogger(label) {
		return new AstroIntegrationLogger(this.options, label);
	}
	setDestination(destination) {
		this.options.destination = destination;
	}
	/**
	* It calls the `close` function of the provided destination, if it exists.
	*/
	close() {
		if (this.options.destination.close) this.options.destination.close();
	}
	/**
	* It calls the `flush` function of the provided destination, if it exists.
	*/
	flush() {
		if (this.options.destination.flush) this.options.destination.flush();
	}
};
var AstroIntegrationLogger = class AstroIntegrationLogger {
	options;
	label;
	constructor(logging, label) {
		this.options = logging;
		this.label = label;
	}
	/**
	* Creates a new logger instance with a new label, but the same log options.
	*/
	fork(label) {
		return new AstroIntegrationLogger(this.options, label);
	}
	info(message) {
		info(this.options, this.label, message);
	}
	warn(message) {
		warn(this.options, this.label, message);
	}
	error(message) {
		error(this.options, this.label, message);
	}
	debug(message) {
		debug(this.label, message);
	}
	/**
	* It calls the `flush` function of the provided destination, if it exists.
	*/
	flush() {
		if (this.options.destination.flush) this.options.destination.flush();
	}
	/**
	* It calls the `close` function of the provided destination, if it exists.
	*/
	close() {
		if (this.options.destination.close) this.options.destination.close();
	}
};
function astroToRuntimeLogger(logger) {
	return {
		info(msg) {
			logger.info(null, msg);
		},
		warn(msg) {
			logger.warn(null, msg);
		},
		error(msg) {
			logger.error(null, msg);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/logger/public.js
function matchesLevel(messageLevel, configuredLevel) {
	return levels[messageLevel] >= levels[configuredLevel];
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/logger/impls/console.js
function consoleLogDestination(config = {}) {
	const { level = "info" } = config;
	return { write(event) {
		let dest = console.error;
		if (levels[event.level] < levels["error"]) dest = console.info;
		if (!matchesLevel(event.level, level)) return;
		if (event.label === "SKIP_FORMAT") dest(event.message);
		else dest(getEventPrefix(event) + " " + event.message);
	} };
}
function createConsoleLogger({ level }) {
	return new AstroLogger({
		level,
		destination: consoleLogDestination()
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/logger/manifest-logger.js
var loggers = /* @__PURE__ */ new WeakMap();
function getLogger(manifest) {
	let logger = loggers.get(manifest);
	if (!logger) {
		logger = createConsoleLogger({ level: manifest.logLevel });
		loggers.set(manifest, logger);
	}
	return logger;
}
var resolvedLogger = createAsyncManifestMemo(async (manifest) => {
	const logger = getLogger(manifest);
	try {
		const destination = (await manifest.logger?.())?.default;
		if (destination) logger.setDestination(destination);
	} catch (error) {
		logger.error("config", "Failed to load the configured logger destination; continuing with the console logger.\n" + (error instanceof Error ? error.stack ?? error.message : String(error)));
	}
	return logger;
});
function getResolvedLogger(manifest) {
	return resolvedLogger.get(manifest);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/build/util.js
function shouldAppendForwardSlash(trailingSlash, buildFormat) {
	switch (trailingSlash) {
		case "always": return true;
		case "never": return false;
		case "ignore": switch (buildFormat) {
			case "directory": return true;
			case "preserve":
			case "file": return false;
		}
	}
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/request.js
function createRequest({ url, headers, method = "GET", body = void 0, logger, isPrerendered = false, routePattern, init }) {
	const headersObj = isPrerendered ? void 0 : headers instanceof Headers ? headers : new Headers(Object.entries(headers).filter(([name]) => !name.startsWith(":")));
	if (typeof url === "string") url = new URL(url);
	if (isPrerendered) url.search = "";
	const request = new Request(url, {
		method,
		headers: headersObj,
		body: isPrerendered ? null : body,
		...init
	});
	if (isPrerendered) {
		let _headers = request.headers;
		const { value, writable, ...headersDesc } = Object.getOwnPropertyDescriptor(request, "headers") || {};
		Object.defineProperty(request, "headers", {
			...headersDesc,
			get() {
				logger.warn(null, `\`Astro.request.headers\` was used when rendering the route \`${routePattern}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`);
				return _headers;
			},
			set(newHeaders) {
				_headers = newHeaders;
			}
		});
	}
	return request;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/util/pathname.js
var MultiLevelEncodingError = class extends Error {
	constructor() {
		super("URL encoding depth exceeded the maximum number of decode iterations");
		this.name = "MultiLevelEncodingError";
	}
};
var MAX_DECODE_ITERATIONS = 10;
function validateAndDecodePathname(pathname) {
	let decoded;
	try {
		decoded = decodeURI(pathname);
	} catch (_e) {
		throw new Error("Invalid URL encoding");
	}
	let iterations = 0;
	while (decoded !== pathname) {
		if (iterations >= MAX_DECODE_ITERATIONS) throw new MultiLevelEncodingError();
		pathname = decoded;
		try {
			decoded = decodeURI(pathname);
		} catch {
			break;
		}
		iterations++;
	}
	return decoded;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/rewrite.js
async function findRouteToRewrite({ payload, routes, request, trailingSlash, buildFormat, base, outDir, validate }) {
	let newUrl = void 0;
	if (payload instanceof URL) newUrl = payload;
	else if (payload instanceof Request) newUrl = new URL(payload.url);
	else newUrl = new URL(collapseDuplicateSlashes(payload), new URL(request.url).origin);
	const { pathname, resolvedUrlPathname } = normalizeRewritePathname(newUrl.pathname, base, trailingSlash, buildFormat);
	newUrl.pathname = resolvedUrlPathname;
	const decodedPathname = validateAndDecodePathname(pathname);
	if (isRoute404(decodedPathname)) {
		const errorRoute = routes.find((route) => route.route === "/404");
		if (errorRoute) return {
			routeData: errorRoute,
			newUrl,
			pathname: decodedPathname
		};
	}
	if (isRoute500(decodedPathname)) {
		const errorRoute = routes.find((route) => route.route === "/500");
		if (errorRoute) return {
			routeData: errorRoute,
			newUrl,
			pathname: decodedPathname
		};
	}
	let foundRoute;
	let firstValidationError = null;
	for (const route of routes) if (route.pattern.test(decodedPathname)) {
		if (route.params && route.params.length !== 0) {
			if (route.distURL && route.distURL.length !== 0) {
				if (!route.distURL.find((url) => url.href.replace(outDir.toString(), "").replace(/(?:\/index\.html|\.html)$/, "") === trimSlashes(pathname))) continue;
			} else {
				let ownsPathname;
				try {
					ownsPathname = await validate(route, decodedPathname);
				} catch (error) {
					firstValidationError ??= error;
					continue;
				}
				if (!ownsPathname) continue;
			}
		}
		foundRoute = route;
		break;
	}
	if (foundRoute) return {
		routeData: foundRoute,
		newUrl,
		pathname: decodedPathname
	};
	else if (firstValidationError) throw firstValidationError;
	else {
		const custom404 = routes.find((route) => route.route === "/404");
		if (custom404) return {
			routeData: custom404,
			newUrl,
			pathname
		};
		else return {
			routeData: DEFAULT_404_ROUTE,
			newUrl,
			pathname
		};
	}
}
function copyRequest(newUrl, oldRequest, isPrerendered, logger, routePattern) {
	const canHaveBody = oldRequest.method !== "GET" && oldRequest.method !== "HEAD";
	if (canHaveBody && oldRequest.bodyUsed) throw new AstroError(RewriteWithBodyUsed);
	return createRequest({
		url: newUrl,
		method: oldRequest.method,
		body: canHaveBody ? oldRequest.body : void 0,
		isPrerendered,
		logger,
		headers: isPrerendered ? {} : oldRequest.headers,
		routePattern,
		init: {
			referrer: oldRequest.referrer,
			referrerPolicy: oldRequest.referrerPolicy,
			mode: oldRequest.mode,
			credentials: oldRequest.credentials,
			cache: oldRequest.cache,
			redirect: oldRequest.redirect,
			integrity: oldRequest.integrity,
			signal: oldRequest.signal,
			keepalive: oldRequest.keepalive,
			duplex: "half"
		}
	});
}
function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
	if (!pathname) pathname = "/";
	const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
	let finalPathname;
	if (pathname === "/") finalPathname = "/";
	else if (shouldAppendSlash) finalPathname = appendForwardSlash(pathname);
	else finalPathname = removeTrailingForwardSlash(pathname);
	Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}
function getOriginPathname(request) {
	const origin = Reflect.get(request, originPathnameSymbol);
	if (origin) return decodeURIComponent(origin);
	return new URL(request.url).pathname;
}
function normalizeRewritePathname(urlPathname, base, trailingSlash, buildFormat) {
	let pathname = collapseDuplicateSlashes(urlPathname);
	const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
	if (base !== "/") {
		if (urlPathname === base || urlPathname === removeTrailingForwardSlash(base)) pathname = "/";
		else if (urlPathname.startsWith(base)) {
			pathname = shouldAppendSlash ? appendForwardSlash(urlPathname) : removeTrailingForwardSlash(urlPathname);
			pathname = pathname.slice(base.length);
		}
	}
	if (!pathname.startsWith("/") && shouldAppendSlash && urlPathname.endsWith("/")) pathname = prependForwardSlash(pathname);
	if (buildFormat === "file") pathname = pathname.replace(/\.html$/, "");
	let resolvedUrlPathname;
	if (base !== "/" && (pathname === "" || pathname === "/") && !shouldAppendSlash) resolvedUrlPathname = removeTrailingForwardSlash(base);
	else resolvedUrlPathname = joinPaths(...[base, pathname].filter(Boolean));
	return {
		pathname,
		resolvedUrlPathname
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/environment/production.js
async function getModuleForRoute$1(manifest, route) {
	for (const defaultRoute of getDefaultRoutes(manifest)) if (route.component === defaultRoute.component) return { page: () => Promise.resolve(defaultRoute.instance) };
	let routeToProcess = route;
	if (routeIsRedirect(route)) {
		if (route.redirectRoute) routeToProcess = route.redirectRoute;
		else return RedirectSinglePageBuiltModule;
	} else if (routeIsFallback(route)) routeToProcess = getFallbackRoute(route, manifest.routes);
	if (manifest.pageMap) {
		const importComponentInstance = manifest.pageMap.get(routeToProcess.component);
		if (!importComponentInstance) throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
		return await importComponentInstance();
	} else if (manifest.pageModule) return manifest.pageModule;
	throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
}
async function getComponentByRoute$1(manifest, routeData) {
	return (await getModuleForRoute$1(manifest, routeData)).page();
}
var productionEnvironment = {
	name: "production",
	runtimeMode: "production",
	defaultStreaming: () => true,
	async resolve(manifest, specifier) {
		if (!(specifier in manifest.entryModules)) throw new Error(`Unable to resolve [${specifier}]`);
		const bundlePath = manifest.entryModules[specifier];
		if (bundlePath.startsWith("data:") || bundlePath.length === 0) return bundlePath;
		else return createAssetLink(bundlePath, manifest.base, manifest.assetsPrefix);
	},
	async headElements(manifest, routeData) {
		const { assetsPrefix, base } = manifest;
		const routeInfo = manifest.routes.find((route) => route.routeData.route === routeData.route);
		const links = /* @__PURE__ */ new Set();
		const scripts = /* @__PURE__ */ new Set();
		const styles = createStylesheetElementSet(routeInfo?.styles ?? [], base, assetsPrefix);
		for (const script of routeInfo?.scripts ?? []) if ("stage" in script) {
			if (script.stage === "head-inline") scripts.add({
				props: {},
				children: script.children
			});
		} else scripts.add(createModuleScriptElement(script, base, assetsPrefix));
		return {
			links,
			styles,
			scripts
		};
	},
	componentMetadata() {},
	getComponentByRoute: getComponentByRoute$1,
	getModuleForRoute: getModuleForRoute$1,
	async tryRewrite(manifest, payload, request) {
		const { newUrl, pathname, routeData } = await findRouteToRewrite({
			payload,
			request,
			routes: manifest.routes.map((r) => r.routeData),
			trailingSlash: manifest.trailingSlash,
			buildFormat: manifest.buildFormat,
			base: manifest.base,
			outDir: manifest.serverLike ? manifest.buildClientDir : manifest.outDir,
			validate: createRewriteRouteValidator(manifest, getComponentByRoute$1)
		});
		return {
			newUrl,
			pathname,
			componentInstance: await getComponentByRoute$1(manifest, routeData),
			routeData
		};
	},
	getRenderers(manifest) {
		return manifest.renderers;
	},
	errorStrategy: "default",
	injectCspMetaTagsOnErrorPages: false,
	logRequest() {}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/environment/index.js
var environments = /* @__PURE__ */ new WeakMap();
function setEnvironment(manifest, env) {
	environments.set(manifest, env);
}
function getEnvironment(manifest) {
	return environments.get(manifest) ?? productionEnvironment;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/generator.js
function sanitizeParams(params) {
	return Object.fromEntries(Object.entries(params).map(([key, value]) => {
		if (typeof value === "string") return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
		return [key, value];
	}));
}
function getParameter(part, params) {
	if (part.spread) return params[part.content.slice(3)] ?? "";
	if (part.dynamic) {
		if (params[part.content] === void 0) throw new TypeError(`Missing parameter: ${part.content}`);
		return params[part.content];
	}
	return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
	const segmentPath = segment.map((part) => getParameter(part, params)).join("");
	return segmentPath ? collapseDuplicateLeadingSlashes("/" + segmentPath) : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
	return (params) => {
		const sanitizedParams = sanitizeParams(params);
		let trailing = "";
		if (addTrailingSlash === "always" && segments.length) trailing = "/";
		return segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing || "/";
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/internal/validation.js
var VALID_PARAM_TYPES = ["string", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
	if (!VALID_PARAM_TYPES.includes(typeof value)) throw new AstroError({
		...GetStaticPathsInvalidRouteParam,
		message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
		location: { file: route }
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/params.js
function stringifyParams(params, route, trailingSlash) {
	if (route.type === "endpoint" && hasFileExtension(route.route)) trailingSlash = "never";
	const validatedParams = {};
	for (const [key, value] of Object.entries(params)) {
		validateGetStaticPathsParameter([key, value], route.component);
		if (value !== void 0) validatedParams[key] = trimSlashes(value);
	}
	return getRouteGenerator(route.segments, trailingSlash)(validatedParams);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/validation.js
function validateDynamicRouteModule(mod, { ssr, route }) {
	if ((!ssr || route.prerender) && route.origin !== "internal" && !mod.getStaticPaths) throw new AstroError({
		...GetStaticPathsRequired,
		location: { file: route.component }
	});
}
function validateGetStaticPathsResult(result, route) {
	if (!Array.isArray(result)) throw new AstroError({
		...InvalidGetStaticPathsReturn,
		message: InvalidGetStaticPathsReturn.message(typeof result),
		location: { file: route.component }
	});
	result.forEach((pathObject) => {
		if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) throw new AstroError({
			...InvalidGetStaticPathsEntry,
			message: InvalidGetStaticPathsEntry.message(Array.isArray(pathObject) ? "array" : typeof pathObject)
		});
		if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) throw new AstroError({
			...GetStaticPathsExpectedParams,
			location: { file: route.component }
		});
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/render/paginate.js
function generatePaginateFunction(routeMatch, base, trailingSlash) {
	return function paginateUtility(data, args = {}) {
		const generate = getRouteGenerator(routeMatch.segments, trailingSlash);
		let { pageSize: _pageSize, params: _params, props: _props, format: _format } = args;
		const pageSize = _pageSize || 10;
		const paramName = "page";
		const additionalParams = _params || {};
		const additionalProps = _props || {};
		const formatUrl = _format || ((url) => url);
		let includesFirstPageNumber;
		if (routeMatch.params.includes(`...${paramName}`)) includesFirstPageNumber = false;
		else if (routeMatch.params.includes(`${paramName}`)) includesFirstPageNumber = true;
		else throw new AstroError({
			...PageNumberParamNotFound,
			message: PageNumberParamNotFound.message(paramName)
		});
		const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
		return [...Array(lastPage).keys()].map((num) => {
			const pageNum = num + 1;
			const start = pageSize === Number.POSITIVE_INFINITY ? 0 : (pageNum - 1) * pageSize;
			const end = Math.min(start + pageSize, data.length);
			const params = {
				...additionalParams,
				[paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
			};
			const current = formatUrl(addRouteBase(generate({ ...params }), base));
			const next = pageNum === lastPage ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: String(pageNum + 1)
			}), base));
			const prev = pageNum === 1 ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
			}), base));
			const first = pageNum === 1 ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: includesFirstPageNumber ? "1" : void 0
			}), base));
			const last = pageNum === lastPage ? void 0 : formatUrl(addRouteBase(generate({
				...params,
				page: String(lastPage)
			}), base));
			return {
				params,
				props: {
					...additionalProps,
					page: {
						data: data.slice(start, end),
						start,
						end: end - 1,
						size: pageSize,
						total: data.length,
						currentPage: pageNum,
						lastPage,
						url: {
							current,
							next,
							prev,
							first,
							last
						}
					}
				}
			};
		});
	};
}
function addRouteBase(route, base) {
	let routeWithBase = joinPaths(base, route);
	if (routeWithBase === "") routeWithBase = "/";
	return routeWithBase;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/render/route-cache.js
async function callGetStaticPaths({ mod, route, routeCache, ssr, base, trailingSlash }) {
	const cached = routeCache.get(route);
	if (!mod) throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
	if (cached?.staticPaths && cached.mod === mod) return cached.staticPaths;
	validateDynamicRouteModule(mod, {
		ssr,
		route
	});
	if (ssr && !route.prerender || route.origin === "internal") {
		const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
		routeCache.set(route, {
			...cached,
			mod,
			staticPaths: entry
		});
		return entry;
	}
	let staticPaths = [];
	if (!mod.getStaticPaths) throw new Error("Unexpected Error.");
	staticPaths = await mod.getStaticPaths({
		paginate: generatePaginateFunction(route, base, trailingSlash),
		routePattern: route.route
	});
	validateGetStaticPathsResult(staticPaths, route);
	const keyedStaticPaths = staticPaths;
	keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
	for (const sp of keyedStaticPaths) {
		const paramsKey = stringifyParams(sp.params, route, trailingSlash);
		keyedStaticPaths.keyed.set(paramsKey, sp);
	}
	routeCache.set(route, {
		...cached,
		mod,
		staticPaths: keyedStaticPaths
	});
	return keyedStaticPaths;
}
var RouteCache = class {
	logger;
	cache = {};
	runtimeMode;
	constructor(logger, runtimeMode = "production") {
		this.logger = logger;
		this.runtimeMode = runtimeMode;
	}
	/** Clear the cache. */
	clearAll() {
		this.cache = {};
	}
	set(route, entry) {
		const key = this.key(route);
		if (this.runtimeMode === "production" && this.cache[key]?.staticPaths) this.logger.warn(null, `Internal Warning: route cache overwritten. (${key})`);
		this.cache[key] = entry;
	}
	get(route) {
		return this.cache[this.key(route)];
	}
	key(route) {
		return `${route.route}_${route.component}`;
	}
};
var routeCaches = createManifestMemo((manifest) => new RouteCache(getLogger(manifest), getEnvironment(manifest).runtimeMode));
function getRouteCache(manifest) {
	return routeCaches.get(manifest);
}
function findPathItemByKey(staticPaths, params, route, logger, trailingSlash) {
	const paramsKey = stringifyParams(params, route, trailingSlash);
	const matchedStaticPath = staticPaths.keyed.get(paramsKey);
	if (matchedStaticPath) return matchedStaticPath;
	logger.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${paramsKey}`);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/render/params-and-props.js
async function getProps(opts) {
	const { logger, mod, routeData: route, routeCache, pathname, serverLike, base, trailingSlash } = opts;
	if (!route || route.pathname) return {};
	if (routeIsRedirect(route) || routeIsFallback(route) || route.component === "astro-default-404.astro") return {};
	const staticPaths = await callGetStaticPaths({
		mod,
		route,
		routeCache,
		ssr: serverLike,
		base,
		trailingSlash
	});
	const params = getParams(route, pathname);
	const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger, trailingSlash);
	if (!matchedStaticPath && route.origin !== "internal" && (serverLike ? route.prerender : true)) throw new AstroError({
		...NoMatchingStaticPathFound,
		message: NoMatchingStaticPathFound.message(pathname),
		hint: NoMatchingStaticPathFound.hint([route.component])
	});
	if (mod) validatePrerenderEndpointCollision(route, mod, params);
	return matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
}
function getParams(route, pathname) {
	if (!route.params.length) return {};
	const hasHtmlSuffix = pathname.endsWith(".html") && !routeHasHtmlExtension(route);
	const path = hasHtmlSuffix && route.type === "page" ? pathname.slice(0, -5) : pathname;
	const allPatterns = [route, ...route.fallbackRoutes].map((r) => r.pattern);
	let paramsMatch = allPatterns.map((pattern) => pattern.exec(path)).find((x) => x);
	if (!paramsMatch && hasHtmlSuffix && route.type !== "page") {
		const strippedPath = pathname.endsWith("/index.html") ? pathname.slice(0, -11) || "/" : pathname.slice(0, -5);
		paramsMatch = allPatterns.map((pattern) => pattern.exec(strippedPath)).find((x) => x);
	}
	if (!paramsMatch) return {};
	const params = {};
	route.params.forEach((key, i) => {
		if (key.startsWith("...")) params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
		else params[key] = paramsMatch[i + 1];
	});
	return params;
}
function validatePrerenderEndpointCollision(route, mod, params) {
	if (route.type === "endpoint" && mod.getStaticPaths) {
		const lastSegment = route.segments[route.segments.length - 1];
		const paramValues = Object.values(params);
		const lastParam = paramValues[paramValues.length - 1];
		if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) throw new AstroError({
			...PrerenderDynamicEndpointPathCollide,
			message: PrerenderDynamicEndpointPathCollide.message(route.route),
			hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
			location: { file: route.component }
		});
	}
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/rewrite-validate.js
function createRewriteRouteValidator(manifest, getComponentByRoute) {
	return async (route, pathname) => {
		try {
			await getProps({
				mod: await getComponentByRoute(manifest, route),
				routeData: route,
				routeCache: getRouteCache(manifest),
				pathname,
				logger: getLogger(manifest),
				serverLike: manifest.serverLike,
				base: manifest.base,
				trailingSlash: manifest.trailingSlash
			});
			return true;
		} catch (e) {
			if (isAstroError(e) && e.title === NoMatchingStaticPathFound.title) return false;
			throw e;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/build/plugins/util.js
var ASTRO_PAGE_KEY_SEPARATOR = "&";
function makePageDataKey(route, componentPath) {
	return route + ASTRO_PAGE_KEY_SEPARATOR + componentPath;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/build/runtime.js
function getPageData(internals, route, component) {
	let pageData = internals.pagesByKeys.get(makePageDataKey(route, component));
	if (pageData) return pageData;
}
function cssOrder(a, b) {
	let depthA = a.depth, depthB = b.depth, orderA = a.order, orderB = b.order;
	if (orderA === -1 && orderB >= 0) return 1;
	else if (orderB === -1 && orderA >= 0) return -1;
	else if (orderA > orderB) return 1;
	else if (orderA < orderB) return -1;
	else if (depthA === -1) return -1;
	else if (depthB === -1) return 1;
	else return depthA > depthB ? -1 : 1;
}
function mergeInlineCss(acc, current) {
	const lastAdded = acc.at(acc.length - 1);
	const lastWasInline = lastAdded?.type === "inline";
	const currentIsInline = current?.type === "inline";
	if (lastWasInline && currentIsInline) {
		const currentHasImport = current.content.includes("@import");
		const lastHasImport = lastAdded.content.includes("@import");
		if (!currentHasImport && !lastHasImport) {
			const merged = {
				type: "inline",
				content: lastAdded.content + current.content
			};
			acc[acc.length - 1] = merged;
			return acc;
		}
	}
	acc.push(current);
	return acc;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/build/environment.js
async function getModuleForRoute(manifest, route) {
	for (const defaultRoute of getDefaultRoutes(manifest)) if (route.component === defaultRoute.component) return { page: () => Promise.resolve(defaultRoute.instance) };
	let routeToProcess = route;
	if (routeIsRedirect(route)) {
		if (route.redirectRoute) routeToProcess = route.redirectRoute;
		else return RedirectSinglePageBuiltModule;
	} else if (routeIsFallback(route)) routeToProcess = getFallbackRoute(route, manifest.routes);
	if (manifest.pageMap) {
		const importComponentInstance = manifest.pageMap.get(routeToProcess.component);
		if (!importComponentInstance) throw new Error(`Unexpectedly unable to find a component instance for route ${route.route}`);
		return await importComponentInstance();
	} else if (manifest.pageModule) return manifest.pageModule;
	throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
}
async function getComponentByRoute(manifest, routeData) {
	return (await getModuleForRoute(manifest, routeData)).page();
}
function createBuildEnvironment() {
	let internals;
	let options;
	function getInternals() {
		if (!internals) throw new Error("No internals defined");
		return internals;
	}
	function getOptions() {
		if (!options) throw new Error("No options defined");
		return options;
	}
	function getSettings() {
		return getOptions().settings;
	}
	const resolveCache = /* @__PURE__ */ new Map();
	return {
		env: {
			name: "build",
			runtimeMode: "production",
			defaultStreaming: (manifest) => manifest.serverLike,
			async resolve(manifest, specifier) {
				if (resolveCache.has(specifier)) return resolveCache.get(specifier);
				const hashedFilePath = manifest.entryModules[specifier];
				if (typeof hashedFilePath !== "string" || hashedFilePath === "") {
					if (specifier === BEFORE_HYDRATION_SCRIPT_ID) {
						resolveCache.set(specifier, "");
						return "";
					}
					throw new Error(`Cannot find the built path for ${specifier}`);
				}
				const assetLink = createAssetLink(hashedFilePath, manifest.base, manifest.assetsPrefix);
				resolveCache.set(specifier, assetLink);
				return assetLink;
			},
			headElements(manifest, routeData) {
				const { assetsPrefix, base } = manifest;
				const settings = getSettings();
				const buildInternals = getInternals();
				const links = /* @__PURE__ */ new Set();
				const pageBuildData = getPageData(buildInternals, routeData.route, routeData.component);
				const scripts = /* @__PURE__ */ new Set();
				const sortedCssAssets = pageBuildData?.styles.sort(cssOrder).map(({ sheet }) => sheet).reduce(mergeInlineCss, []);
				const styles = createStylesheetElementSet(sortedCssAssets ?? [], base, assetsPrefix);
				if (settings.scripts.some((script) => script.stage === "page")) {
					const hashedFilePath = buildInternals.entrySpecifierToBundleMap.get(PAGE_SCRIPT_ID);
					if (typeof hashedFilePath !== "string") throw new Error(`Cannot find the built path for ${PAGE_SCRIPT_ID}`);
					const src = createAssetLink(hashedFilePath, base, assetsPrefix);
					scripts.add({
						props: {
							type: "module",
							src
						},
						children: ""
					});
				}
				for (const script of settings.scripts) if (script.stage === "head-inline") scripts.add({
					props: {},
					children: script.content
				});
				return {
					scripts,
					styles,
					links
				};
			},
			componentMetadata() {},
			getComponentByRoute,
			getModuleForRoute,
			async tryRewrite(manifest, payload, request) {
				const { routeData, pathname, newUrl } = await findRouteToRewrite({
					payload,
					request,
					routes: manifest.routes.map((r) => r.routeData),
					trailingSlash: manifest.trailingSlash,
					buildFormat: manifest.buildFormat,
					base: manifest.base,
					outDir: manifest.serverLike ? manifest.buildClientDir : manifest.outDir,
					validate: createRewriteRouteValidator(manifest, getComponentByRoute)
				});
				return {
					routeData,
					componentInstance: await getComponentByRoute(manifest, routeData),
					newUrl,
					pathname
				};
			},
			getRenderers(manifest) {
				return manifest.renderers;
			},
			errorStrategy: "build",
			injectCspMetaTagsOnErrorPages: false,
			logRequest() {}
		},
		setInternals(value) {
			internals = value;
		},
		setOptions(value) {
			options = value;
		},
		getInternals,
		getOptions,
		getSettings
	};
}
//#endregion
//#region node_modules/.pnpm/@astrojs+internal-helpers@0.12.0/node_modules/@astrojs/internal-helpers/dist/remote.js
function matchPattern(url, remotePattern) {
	return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname, true);
}
function matchPort(url, port) {
	return !port || port === url.port;
}
function matchProtocol(url, protocol) {
	return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard = false) {
	if (!hostname) return true;
	else if (!allowWildcard || !hostname.startsWith("*")) return hostname === url.hostname;
	else if (hostname.startsWith("**.")) {
		const slicedHostname = hostname.slice(2);
		return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
	} else if (hostname.startsWith("*.")) {
		const slicedHostname = hostname.slice(1);
		if (!url.hostname.endsWith(slicedHostname)) return false;
		const subdomainWithDot = url.hostname.slice(0, -(slicedHostname.length - 1));
		return subdomainWithDot.endsWith(".") && !subdomainWithDot.slice(0, -1).includes(".");
	}
	return false;
}
function matchPathname(url, pathname, allowWildcard = false) {
	if (!pathname) return true;
	else if (!allowWildcard || !pathname.endsWith("*")) return pathname === url.pathname;
	else if (pathname.endsWith("/**")) {
		const slicedPathname = pathname.slice(0, -2);
		return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
	} else if (pathname.endsWith("/*")) {
		const slicedPathname = pathname.slice(0, -1);
		if (!url.pathname.startsWith(slicedPathname)) return false;
		return url.pathname.slice(slicedPathname.length).split("/").filter(Boolean).length === 1;
	}
	return false;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/app/validate-headers.js
function getFirstForwardedValue(multiValueHeader) {
	return multiValueHeader?.toString().split(",").map((e) => e.trim())[0];
}
function sanitizeHost(hostname) {
	if (!hostname) return void 0;
	if (/[/\\]/.test(hostname)) return void 0;
	return hostname;
}
function parseHost(host) {
	const parts = host.split(":");
	if (parts.length > 2) return void 0;
	return {
		hostname: parts[0],
		port: parts[1]
	};
}
function matchesAllowedDomains(hostname, protocol, port, allowedDomains) {
	const urlString = `${protocol}://${port ? `${hostname}:${port}` : hostname}`;
	if (!URL.canParse(urlString)) return false;
	const testUrl = new URL(urlString);
	return allowedDomains.some((pattern) => matchPattern(testUrl, pattern));
}
function validateHost(host, protocol, allowedDomains) {
	if (!host || host.length === 0) return void 0;
	if (!allowedDomains || allowedDomains.length === 0) return void 0;
	const sanitized = sanitizeHost(host);
	if (!sanitized) return void 0;
	const parsed = parseHost(sanitized);
	if (!parsed) return void 0;
	const { hostname, port } = parsed;
	if (matchesAllowedDomains(hostname, protocol, port, allowedDomains)) return sanitized;
}
function validateForwardedHeaders(forwardedProtocol, forwardedHost, forwardedPort, allowedDomains) {
	const result = {};
	if (forwardedProtocol) {
		if (allowedDomains && allowedDomains.length > 0) {
			if (allowedDomains.some((pattern) => pattern.protocol !== void 0)) try {
				const testUrl = new URL(`${forwardedProtocol}://example.com`);
				if (allowedDomains.some((pattern) => matchPattern(testUrl, { protocol: pattern.protocol }))) result.protocol = forwardedProtocol;
			} catch {}
			else if (/^https?$/.test(forwardedProtocol)) result.protocol = forwardedProtocol;
		}
	}
	if (forwardedPort && allowedDomains && allowedDomains.length > 0) {
		if (allowedDomains.some((pattern) => pattern.port !== void 0)) {
			if (allowedDomains.some((pattern) => pattern.port === forwardedPort)) result.port = forwardedPort;
		}
	}
	if (forwardedHost && forwardedHost.length > 0 && allowedDomains && allowedDomains.length > 0) {
		const protoForValidation = result.protocol || "https";
		const sanitized = sanitizeHost(forwardedHost);
		const parsed = sanitized ? parseHost(sanitized) : void 0;
		if (sanitized && parsed) {
			const { hostname, port: portFromHost } = parsed;
			if (matchesAllowedDomains(hostname, protoForValidation, result.port || portFromHost, allowedDomains)) result.host = sanitized;
		}
	}
	return result;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/i18n/domain.js
function computePathnameFromDomain(request, url, i18n, base, trailingSlash, allowedDomains, logger, pathnameFromRequest) {
	let pathname = void 0;
	if (i18n && (i18n.strategy === "domains-prefix-always" || i18n.strategy === "domains-prefix-other-locales" || i18n.strategy === "domains-prefix-always-no-redirect")) {
		const validated = validateForwardedHeaders(getFirstForwardedValue(request.headers.get("X-Forwarded-Proto") ?? void 0), getFirstForwardedValue(request.headers.get("X-Forwarded-Host") ?? void 0), getFirstForwardedValue(request.headers.get("X-Forwarded-Port") ?? void 0), allowedDomains);
		const protocol = validated.protocol ? `${validated.protocol}:` : url.protocol;
		const requestHost = request.headers.get("Host") ?? void 0;
		const validatedRequestHost = allowedDomains?.length ? validateHost(requestHost, protocol.slice(0, -1), allowedDomains) : requestHost;
		let host = validated.host ?? validatedRequestHost;
		if (host && protocol) {
			host = host.split(":")[0];
			try {
				let locale;
				const hostAsUrl = new URL(`${protocol}//${host}`);
				for (const [domainKey, localeValue] of Object.entries(i18n.domainLookupTable)) {
					const domainKeyAsUrl = new URL(domainKey);
					if (hostAsUrl.host === domainKeyAsUrl.host && hostAsUrl.protocol === domainKeyAsUrl.protocol) {
						locale = localeValue;
						break;
					}
				}
				if (locale) {
					const requestPathname = pathnameFromRequest ?? stripRequestBase(url.pathname, base);
					pathname = prependForwardSlash(joinPaths(normalizeTheLocale(locale), requestPathname));
					if (trailingSlash === "always") pathname = appendForwardSlash(pathname);
					else if (trailingSlash === "never") pathname = removeTrailingForwardSlash(pathname);
					else if (url.pathname.endsWith("/")) pathname = appendForwardSlash(pathname);
				}
			} catch (e) {
				logger.error("router", `Astro tried to parse ${protocol}//${host} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`);
				logger.error("router", `Error: ${e}`);
			}
		}
	}
	return pathname;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cookies/cookies.js
var DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
var DELETED_VALUE = "deleted";
var responseSentSymbol = /* @__PURE__ */ Symbol.for("astro.responseSent");
var identity = (value) => value;
var AstroCookie = class {
	value;
	constructor(value) {
		this.value = value;
	}
	json() {
		if (this.value === void 0) throw new Error(`Cannot convert undefined to an object.`);
		return JSON.parse(this.value);
	}
	number() {
		return Number(this.value);
	}
	boolean() {
		if (this.value === "false") return false;
		if (this.value === "0") return false;
		return Boolean(this.value);
	}
};
var AstroCookies = class {
	#request;
	#requestValues;
	#outgoing;
	#consumed;
	#logger;
	constructor(request, logger) {
		this.#request = request;
		this.#requestValues = null;
		this.#outgoing = null;
		this.#consumed = false;
		this.#logger = logger;
	}
	/**
	* Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
	* in a Set-Cookie header added to the response.
	* @param key The cookie to delete
	* @param options Options related to this deletion, such as the path of the cookie.
	*/
	delete(key, options) {
		this.#ensureOutgoingMap().set(key, [
			DELETED_VALUE,
			stringifySetCookie({
				...options,
				name: key,
				value: DELETED_VALUE,
				expires: DELETED_EXPIRATION,
				maxAge: void 0
			}),
			false
		]);
	}
	/**
	* Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
	* request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
	* from that set call, overriding any values already part of the request.
	* @param key The cookie to get.
	* @returns An object containing the cookie value as well as convenience methods for converting its value.
	*/
	get(key, options = void 0) {
		if (this.#outgoing?.has(key)) {
			let [serializedValue, , isSetValue] = this.#outgoing.get(key);
			if (isSetValue) return new AstroCookie(serializedValue);
			else return;
		}
		const decode = options?.decode ?? decodeURIComponent;
		const values = this.#ensureParsed();
		if (key in values) {
			const value = values[key];
			if (value !== void 0) {
				let decodedValue;
				try {
					decodedValue = decode(value);
				} catch (_error) {
					decodedValue = value;
				}
				return new AstroCookie(decodedValue);
			}
		}
	}
	/**
	* Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
	* part of the initial request or set via Astro.cookies.set(key)
	* @param key The cookie to check for.
	* @param _options This parameter is no longer used.
	* @returns
	*/
	has(key, _options) {
		if (this.#outgoing?.has(key)) {
			let [, , isSetValue] = this.#outgoing.get(key);
			return isSetValue;
		}
		return this.#ensureParsed()[key] !== void 0;
	}
	/**
	* Astro.cookies.set(key, value) is used to set a cookie's value. If provided
	* an object it will be stringified via JSON.stringify(value). Additionally you
	* can provide options customizing how this cookie will be set, such as setting httpOnly
	* in order to prevent the cookie from being read in client-side JavaScript.
	* @param key The name of the cookie to set.
	* @param value A value, either a string or other primitive or an object.
	* @param options Options for the cookie, such as the path and security settings.
	*/
	set(key, value, options) {
		if (this.#consumed) this.#logger.warn("SKIP_FORMAT", "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page.");
		let serializedValue;
		if (typeof value === "string") serializedValue = value;
		else {
			let toStringValue = value.toString();
			if (toStringValue === Object.prototype.toString.call(value)) serializedValue = JSON.stringify(value);
			else serializedValue = toStringValue;
		}
		const { encode, ...attributes } = options ?? {};
		this.#ensureOutgoingMap().set(key, [
			serializedValue,
			stringifySetCookie({
				...attributes,
				name: key,
				value: serializedValue
			}, { encode }),
			true
		]);
		if (this.#request[responseSentSymbol]) throw new AstroError({ ...ResponseSentError });
	}
	/**
	* Merges a new AstroCookies instance into the current instance. Any new cookies
	* will be added to the current instance, overwriting any existing cookies with the same name.
	*/
	merge(cookies) {
		const outgoing = cookies.#outgoing;
		if (outgoing) for (const [key, value] of outgoing) this.#ensureOutgoingMap().set(key, value);
	}
	/**
	* Astro.cookies.header() returns an iterator for the cookies that have previously
	* been set by either Astro.cookies.set() or Astro.cookies.delete().
	* This method is primarily used by adapters to set the header on outgoing responses.
	* @returns
	*/
	*headers() {
		if (this.#outgoing == null) return;
		for (const [, value] of this.#outgoing) yield value[1];
	}
	/**
	* Marks the cookies as consumed and returns the header values.
	* After consumption, any subsequent `set()` calls will warn.
	*/
	consume() {
		this.#consumed = true;
		return this.headers();
	}
	/**
	* @deprecated Use the instance method `cookies.consume()` instead.
	* Kept for backward compatibility with adapters.
	*/
	static consume(cookies) {
		return cookies.consume();
	}
	#ensureParsed() {
		if (!this.#requestValues) this.#parse();
		if (!this.#requestValues) this.#requestValues = /* @__PURE__ */ Object.create(null);
		return this.#requestValues;
	}
	#ensureOutgoingMap() {
		if (!this.#outgoing) this.#outgoing = /* @__PURE__ */ new Map();
		return this.#outgoing;
	}
	#parse() {
		const raw = this.#request.headers.get("cookie");
		if (!raw) return;
		this.#requestValues = parseCookie(raw, { decode: identity });
	}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cookies/response.js
var astroCookiesSymbol = /* @__PURE__ */ Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
	Reflect.set(response, astroCookiesSymbol, cookies);
}
function getCookiesFromResponse(response) {
	let cookies = Reflect.get(response, astroCookiesSymbol);
	if (cookies != null) return cookies;
	else return;
}
function* getSetCookiesFromResponse(response) {
	const cookies = getCookiesFromResponse(response);
	if (!cookies) return [];
	for (const headerValue of cookies.consume()) yield headerValue;
	return [];
}
function getAmbientManifest() {
	const manifest$1 = manifest;
	if (!manifest$1) throw new AstroError(NoManifestAvailable);
	return manifest$1;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/app/render-options.js
var renderOptionsSymbol = /* @__PURE__ */ Symbol.for("astro.renderOptions");
function getRenderOptions(request) {
	return Reflect.get(request, renderOptionsSymbol);
}
function setRenderOptions(request, options) {
	Reflect.set(request, renderOptionsSymbol, options);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/middleware/defineMiddleware.js
function defineMiddleware(fn) {
	return fn;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/app/origin-check.js
var SAFE_METHODS = [
	"GET",
	"HEAD",
	"OPTIONS"
];
function isForbiddenCrossOriginRequest(request, url, isPrerendered) {
	if (isPrerendered) return false;
	if (SAFE_METHODS.includes(request.method)) return false;
	switch (request.headers.get("sec-fetch-site")) {
		case "":
		case null: break;
		case "same-origin":
		case "none": return false;
		default: return true;
	}
	const origin = request.headers.get("origin");
	if (!origin) return false;
	return origin !== url.origin;
}
function createCrossOriginForbiddenResponse(request) {
	return new Response(`Cross-site ${request.method} form submissions are forbidden`, { status: 403 });
}
function createOriginCheckMiddleware() {
	return defineMiddleware((context, next) => {
		const { request, url, isPrerendered } = context;
		if (isForbiddenCrossOriginRequest(request, url, isPrerendered)) return createCrossOriginForbiddenResponse(request);
		return next();
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/fetch/features.js
var FetchFeatures = {
	redirects: 1,
	sessions: 2,
	actions: 4,
	middleware: 8,
	i18n: 16,
	cache: 32
};
var ALL_FETCH_FEATURES = FetchFeatures.redirects | FetchFeatures.sessions | FetchFeatures.actions | FetchFeatures.middleware | FetchFeatures.i18n | FetchFeatures.cache;
var usedFeatures = /* @__PURE__ */ new WeakMap();
function markFeatureUsed(manifest, feature) {
	const entry = usedFeatures.get(manifest);
	if (entry) entry.bits |= feature;
	else usedFeatures.set(manifest, { bits: feature });
}
function getUsedFeatures(manifest) {
	return usedFeatures.get(manifest)?.bits ?? 0;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/invalid-encoding.js
function rejectInvalidEncoding(state) {
	if (state.invalidEncoding) return new Response(null, {
		status: 400,
		statusText: "Bad Request"
	});
}
var ACTION_QUERY_PARAMS = {
	actionName: "_action",
	actionPayload: "_astroActionPayload"
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/actions/runtime/client.js
var codeToStatusMap = {
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	PROXY_AUTHENTICATION_REQUIRED: 407,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	LENGTH_REQUIRED: 411,
	PRECONDITION_FAILED: 412,
	CONTENT_TOO_LARGE: 413,
	URI_TOO_LONG: 414,
	UNSUPPORTED_MEDIA_TYPE: 415,
	RANGE_NOT_SATISFIABLE: 416,
	EXPECTATION_FAILED: 417,
	MISDIRECTED_REQUEST: 421,
	UNPROCESSABLE_CONTENT: 422,
	LOCKED: 423,
	FAILED_DEPENDENCY: 424,
	TOO_EARLY: 425,
	UPGRADE_REQUIRED: 426,
	PRECONDITION_REQUIRED: 428,
	TOO_MANY_REQUESTS: 429,
	REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	HTTP_VERSION_NOT_SUPPORTED: 505,
	VARIANT_ALSO_NEGOTIATES: 506,
	INSUFFICIENT_STORAGE: 507,
	LOOP_DETECTED: 508,
	NETWORK_AUTHENTICATION_REQUIRED: 511
};
var statusToCodeMap = Object.fromEntries(Object.entries(codeToStatusMap).map(([key, value]) => [value, key]));
var ActionError = class ActionError extends Error {
	type = "AstroActionError";
	code = "INTERNAL_SERVER_ERROR";
	status = 500;
	constructor(params) {
		super(params.message);
		this.code = params.code;
		this.status = ActionError.codeToStatus(params.code);
		if (params.stack) this.stack = params.stack;
	}
	static codeToStatus(code) {
		return codeToStatusMap[code];
	}
	static statusToCode(status) {
		return statusToCodeMap[status] ?? "INTERNAL_SERVER_ERROR";
	}
	static fromJson(body) {
		if (isInputError(body)) return new ActionInputError(body.issues);
		if (isActionError(body)) return new ActionError(body);
		return new ActionError({ code: "INTERNAL_SERVER_ERROR" });
	}
};
function isActionError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionError";
}
function isInputError(error) {
	return typeof error === "object" && error != null && "type" in error && error.type === "AstroActionInputError" && "issues" in error && Array.isArray(error.issues);
}
var ActionInputError = class extends ActionError {
	type = "AstroActionInputError";
	issues;
	fields;
	constructor(issues) {
		super({
			message: `Failed to validate: ${JSON.stringify(issues, null, 2)}`,
			code: "BAD_REQUEST"
		});
		this.issues = issues;
		this.fields = {};
		for (const issue of issues) if (issue.path.length > 0) {
			const key = issue.path[0].toString();
			this.fields[key] ??= [];
			this.fields[key]?.push(issue.message);
		}
	}
};
function deserializeActionResult(res) {
	if (res.type === "error") {
		let json;
		try {
			json = JSON.parse(res.body);
		} catch {
			return {
				data: void 0,
				error: new ActionError({
					message: res.body,
					code: "INTERNAL_SERVER_ERROR"
				})
			};
		}
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": "https://deepseek.playform.cloud",
			"SSR": true
		}, {})?.PROD) return {
			error: ActionError.fromJson(json),
			data: void 0
		};
		else {
			const error = ActionError.fromJson(json);
			error.stack = actionResultErrorStack.get();
			return {
				error,
				data: void 0
			};
		}
	}
	if (res.type === "empty") return {
		data: void 0,
		error: void 0
	};
	return {
		data: parse(res.body, { URL: (href) => new URL(href) }),
		error: void 0
	};
}
var actionResultErrorStack = /* @__PURE__ */ (function actionResultErrorStackFn() {
	let errorStack;
	return {
		set(stack) {
			errorStack = stack;
		},
		get() {
			return errorStack;
		}
	};
})();
function getActionQueryString(name) {
	return `?${new URLSearchParams({ [ACTION_QUERY_PARAMS.actionName]: name }).toString()}`;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/actions/utils.js
function hasActionPayload(locals) {
	return "_actionPayload" in locals;
}
function createGetActionResult(locals) {
	return (actionFn) => {
		if (!hasActionPayload(locals) || actionFn.toString() !== getActionQueryString(locals._actionPayload.actionName)) return;
		return deserializeActionResult(locals._actionPayload.actionResult);
	};
}
function createCallAction(context) {
	return (baseAction, input) => {
		Reflect.set(context, ACTION_API_CONTEXT_SYMBOL, true);
		return baseAction.bind(context)(input);
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/render/slots.js
function getFunctionExpression(slot) {
	if (!slot) return;
	const expressions = slot?.expressions?.filter((e) => isRenderInstruction(e) === false || isRenderTemplateResult(e));
	if (expressions?.length !== 1) return;
	const expression = expressions[0];
	if (isRenderTemplateResult(expression)) return getFunctionExpression(expression);
	return expression;
}
var Slots = class {
	#result;
	#slots;
	#logger;
	constructor(result, slots, logger) {
		this.#result = result;
		this.#slots = slots;
		this.#logger = logger;
		if (slots) for (const key of Object.keys(slots)) {
			if (this[key] !== void 0) throw new AstroError({
				...ReservedSlotName,
				message: ReservedSlotName.message(key)
			});
			Object.defineProperty(this, key, {
				get() {
					return true;
				},
				enumerable: true
			});
		}
	}
	has(name) {
		if (!this.#slots) return false;
		return Boolean(this.#slots[name]);
	}
	async render(name, args = []) {
		if (!this.#slots || !this.has(name)) return;
		const result = this.#result;
		if (!Array.isArray(args)) this.#logger.warn(null, `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as an item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
		else if (args.length > 0) {
			const slotValue = this.#slots[name];
			const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
			const expression = getFunctionExpression(component);
			if (expression) {
				const slot = async () => typeof expression === "function" ? expression(...args) : expression;
				return await renderSlotToString(result, slot).then((res) => {
					return res;
				});
			}
			if (typeof component === "function") return await renderJSX(result, component(...args)).then((res) => res != null ? String(res) : res);
		}
		const content = await renderSlotToString(result, this.#slots[name]);
		return chunkToString(result, content);
	}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/i18n/fallback.js
function computeFallbackRoute(options) {
	const { pathname, responseStatus, fallback, fallbackType, locales, defaultLocale, strategy } = options;
	if (responseStatus !== 404) return { type: "none" };
	if (!fallback || Object.keys(fallback).length === 0) return { type: "none" };
	const segments = pathname.split("/");
	const urlLocale = segments.find((segment) => {
		for (const locale of locales) if (typeof locale === "string") {
			if (locale === segment) return true;
		} else if (locale.path === segment) return true;
		return false;
	});
	if (!urlLocale) return { type: "none" };
	if (!Object.keys(fallback).includes(urlLocale)) return { type: "none" };
	const fallbackLocale = fallback[urlLocale];
	const pathFallbackLocale = getPathByLocale(fallbackLocale, locales);
	const localeIndex = segments.indexOf(urlLocale);
	let newPathname;
	if (pathFallbackLocale === defaultLocale && strategy === "pathname-prefix-other-locales") {
		segments.splice(localeIndex, 1);
		newPathname = segments.join("/") || "/";
	} else {
		segments[localeIndex] = pathFallbackLocale;
		newPathname = segments.join("/");
	}
	return {
		type: fallbackType,
		pathname: newPathname
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/i18n/router.js
var I18nRouter = class {
	#strategy;
	#defaultLocale;
	#locales;
	#base;
	#domains;
	constructor(options) {
		this.#strategy = options.strategy;
		this.#defaultLocale = options.defaultLocale;
		this.#locales = options.locales;
		this.#base = options.base === "/" ? "/" : removeTrailingForwardSlash(options.base || "");
		this.#domains = options.domains;
	}
	/**
	* Evaluate routing strategy for a pathname.
	* Returns decision object (not HTTP Response).
	*/
	match(pathname, context) {
		if (this.shouldSkipProcessing(pathname, context)) return { type: "continue" };
		switch (this.#strategy) {
			case "manual": return { type: "continue" };
			case "pathname-prefix-always": return this.matchPrefixAlways(pathname, context);
			case "domains-prefix-always":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixAlways(pathname, context);
			case "pathname-prefix-other-locales": return this.matchPrefixOtherLocales(pathname, context);
			case "domains-prefix-other-locales":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixOtherLocales(pathname, context);
			case "pathname-prefix-always-no-redirect": return this.matchPrefixAlwaysNoRedirect(pathname, context);
			case "domains-prefix-always-no-redirect":
				if (this.localeHasntDomain(context.currentLocale, context.currentDomain)) return { type: "continue" };
				return this.matchPrefixAlwaysNoRedirect(pathname, context);
			default: return { type: "continue" };
		}
	}
	/**
	* Check if i18n processing should be skipped for this request
	*/
	shouldSkipProcessing(pathname, context) {
		if (pathname.includes("/404") || pathname.includes("/500")) return true;
		if (pathname.includes("/_server-islands/")) return true;
		if (context.isReroute) return true;
		if (context.routeType && context.routeType !== "page" && context.routeType !== "fallback") return true;
		return false;
	}
	/**
	* Strategy: pathname-prefix-always
	* All locales must have a prefix, including the default locale.
	*/
	matchPrefixAlways(pathname, context) {
		if (pathname === this.#base + "/" || pathname === this.#base) return {
			type: "redirect",
			location: `${this.#base === "/" ? "" : this.#base}/${this.#defaultLocale}`
		};
		if (!context.allowUnprefixedPath && !pathHasLocale(pathname, this.#locales)) return { type: "notFound" };
		return { type: "continue" };
	}
	/**
	* Strategy: pathname-prefix-other-locales
	* Default locale has no prefix, other locales must have a prefix.
	*/
	matchPrefixOtherLocales(pathname, _context) {
		let pathnameContainsDefaultLocale = false;
		for (const segment of pathname.split("/")) if (normalizeTheLocale(segment) === normalizeTheLocale(this.#defaultLocale)) {
			pathnameContainsDefaultLocale = true;
			break;
		}
		if (pathnameContainsDefaultLocale) return {
			type: "notFound",
			location: pathname.replace(`/${this.#defaultLocale}`, "")
		};
		return { type: "continue" };
	}
	/**
	* Strategy: pathname-prefix-always-no-redirect
	* Like prefix-always but allows root to serve instead of redirecting
	*/
	matchPrefixAlwaysNoRedirect(pathname, context) {
		if (pathname === this.#base + "/" || pathname === this.#base) return { type: "continue" };
		if (!context.allowUnprefixedPath && !pathHasLocale(pathname, this.#locales)) return { type: "notFound" };
		return { type: "continue" };
	}
	/**
	* Check if the current locale doesn't belong to the configured domain.
	* Used for domain-based routing strategies.
	*/
	localeHasntDomain(currentLocale, currentDomain) {
		if (!this.#domains || !currentDomain) return false;
		if (!currentLocale) return false;
		const localesForDomain = this.#domains[currentDomain];
		if (!localesForDomain) return true;
		return !localesForDomain.includes(currentLocale);
	}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/i18n/handler.js
function compileI18n(i18n, base, trailingSlash, format) {
	return {
		config: i18n,
		base,
		trailingSlash,
		format,
		router: new I18nRouter({
			strategy: i18n.strategy,
			defaultLocale: i18n.defaultLocale,
			locales: i18n.locales,
			base,
			domains: i18n.domainLookupTable ? Object.keys(i18n.domainLookupTable).reduce((acc, domain) => {
				const locale = i18n.domainLookupTable[domain];
				if (!acc[domain]) acc[domain] = [];
				acc[domain].push(locale);
				return acc;
			}, {}) : void 0
		})
	};
}
var i18nMemo = createManifestMemo((manifest) => {
	const config = manifest.i18n;
	return config && config.strategy !== "manual" ? compileI18n(config, manifest.base, manifest.trailingSlash, manifest.buildFormat) : null;
});
function getI18n(manifest) {
	return i18nMemo.get(manifest);
}
async function finalizeI18n(compiled, state, response) {
	markFeatureUsed(state.manifest, FetchFeatures.i18n);
	const i18n = compiled.config;
	if (state.skipErrorReroute && typeof i18n.fallback === "undefined") return response;
	if (state.responseRouteType !== "page" && state.responseRouteType !== "fallback") return response;
	const url = state.url;
	const currentLocale = state.computeCurrentLocale();
	const routeData = state.routeData;
	const isPrerendered = routeData.prerender;
	const routerContext = {
		currentLocale,
		currentDomain: url.hostname,
		routeType: state.responseRouteType,
		isReroute: false,
		allowUnprefixedPath: routeData.origin === "external" && !routeData.segments?.[0]?.some((part) => part.dynamic)
	};
	const routeDecision = compiled.router.match(url.pathname, routerContext);
	switch (routeDecision.type) {
		case "redirect": {
			let location = routeDecision.location;
			if (shouldAppendForwardSlash(compiled.trailingSlash, compiled.format)) location = appendForwardSlash(location);
			return new Response(null, {
				status: routeDecision.status ?? 302,
				headers: { Location: location }
			});
		}
		case "notFound": {
			if (isPrerendered) {
				const prerenderedRes = new Response(response.body, {
					status: 404,
					headers: response.headers
				});
				state.skipErrorReroute = true;
				if (routeDecision.location) prerenderedRes.headers.set("Location", routeDecision.location);
				return prerenderedRes;
			}
			const headers = new Headers();
			if (routeDecision.location) headers.set("Location", routeDecision.location);
			return new Response(null, {
				status: 404,
				headers
			});
		}
	}
	if (i18n.fallback && i18n.fallbackType) {
		const effectiveStatus = state.responseRouteType === "fallback" ? 404 : response.status;
		const fallbackDecision = computeFallbackRoute({
			pathname: url.pathname,
			responseStatus: effectiveStatus,
			currentLocale,
			fallback: i18n.fallback,
			fallbackType: i18n.fallbackType,
			locales: i18n.locales,
			defaultLocale: i18n.defaultLocale,
			strategy: i18n.strategy,
			base: compiled.base
		});
		switch (fallbackDecision.type) {
			case "redirect": return new Response(null, {
				status: 302,
				headers: { Location: fallbackDecision.pathname + url.search }
			});
			case "rewrite": try {
				return await state.rewrite(fallbackDecision.pathname + url.search);
			} catch {
				break;
			}
		}
	}
	return response;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/i18n/index.js
function getPathByLocale(locale, locales) {
	for (const loopLocale of locales) if (typeof loopLocale === "string") {
		if (loopLocale === locale) return loopLocale;
	} else for (const code of loopLocale.codes) if (code === locale) return loopLocale.path;
	throw new AstroError(i18nNoLocaleFoundInPath);
}
function getAllCodes(locales) {
	const result = [];
	for (const loopLocale of locales) if (typeof loopLocale === "string") result.push(loopLocale);
	else result.push(...loopLocale.codes);
	return result;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/i18n/utils.js
function parseLocale(header) {
	if (header === "*") return [{
		locale: header,
		qualityValue: void 0
	}];
	const result = [];
	const localeValues = header.split(",").map((str) => str.trim());
	for (const localeValue of localeValues) {
		const split = localeValue.split(";").map((str) => str.trim());
		const localeName = split[0];
		const qualityValue = split[1];
		if (!split) continue;
		if (qualityValue && qualityValue.startsWith("q=")) {
			const qualityValueAsFloat = Number.parseFloat(qualityValue.slice(2));
			if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) result.push({
				locale: localeName,
				qualityValue: void 0
			});
			else result.push({
				locale: localeName,
				qualityValue: qualityValueAsFloat
			});
		} else result.push({
			locale: localeName,
			qualityValue: void 0
		});
	}
	return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
	const normalizedLocales = getAllCodes(locales).map(normalizeTheLocale);
	return browserLocaleList.filter((browserLocale) => {
		if (browserLocale.locale !== "*") return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
		return true;
	}).sort((a, b) => {
		const qa = a.locale === "*" ? a.qualityValue ?? 0 : a.qualityValue ?? 1;
		return (b.locale === "*" ? b.qualityValue ?? 0 : b.qualityValue ?? 1) - qa;
	});
}
function computePreferredLocale(request, locales) {
	const acceptHeader = request.headers.get("Accept-Language");
	let result = void 0;
	if (acceptHeader) {
		const firstResult = sortAndFilterLocales(parseLocale(acceptHeader), locales).at(0);
		if (firstResult && firstResult.locale !== "*") {
			outer: for (const currentLocale of locales) if (typeof currentLocale === "string") {
				if (normalizeTheLocale(currentLocale) === normalizeTheLocale(firstResult.locale)) {
					result = currentLocale;
					break;
				}
			} else for (const currentCode of currentLocale.codes) if (normalizeTheLocale(currentCode) === normalizeTheLocale(firstResult.locale)) {
				result = currentCode;
				break outer;
			}
		}
	}
	return result;
}
function computePreferredLocaleList(request, locales) {
	const acceptHeader = request.headers.get("Accept-Language");
	let result = [];
	if (acceptHeader) {
		const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
		if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") return getAllCodes(locales);
		else if (browserLocaleList.length > 0) {
			for (const browserLocale of browserLocaleList) for (const loopLocale of locales) if (typeof loopLocale === "string") {
				if (normalizeTheLocale(loopLocale) === normalizeTheLocale(browserLocale.locale)) result.push(loopLocale);
			} else for (const code of loopLocale.codes) if (normalizeTheLocale(code) === normalizeTheLocale(browserLocale.locale)) result.push(code);
		}
	}
	return result;
}
function computeCurrentLocale(pathname, locales, defaultLocale) {
	for (const segment of pathname.split("/").map(normalizeThePath)) for (const locale of locales) if (typeof locale === "string") {
		if (!segment.includes(locale)) continue;
		if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) return locale;
	} else if (locale.path === segment) return locale.codes.at(0);
	else for (const code of locale.codes) if (normalizeTheLocale(code) === normalizeTheLocale(segment)) return code;
	for (const locale of locales) if (typeof locale === "string") {
		if (locale === defaultLocale) return locale;
	} else if (locale.path === defaultLocale) return locale.codes.at(0);
}
function computeCurrentLocaleFromParams(params, locales) {
	const byNormalizedCode = /* @__PURE__ */ new Map();
	const byPath = /* @__PURE__ */ new Map();
	for (const locale of locales) if (typeof locale === "string") byNormalizedCode.set(normalizeTheLocale(locale), locale);
	else {
		byPath.set(locale.path, locale.codes[0]);
		for (const code of locale.codes) byNormalizedCode.set(normalizeTheLocale(code), code);
	}
	for (const value of Object.values(params)) {
		if (!value) continue;
		const pathMatch = byPath.get(value);
		if (pathMatch) return pathMatch;
		const codeMatch = byNormalizedCode.get(normalizeTheLocale(value));
		if (codeMatch) return codeMatch;
	}
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/app/prepare-response.js
function prepareResponse(response, { addCookieHeader }) {
	if (addCookieHeader) for (const setCookieHeaderValue of getSetCookiesFromResponse(response)) response.headers.append("set-cookie", setCookieHeaderValue);
	Reflect.set(response, responseSentSymbol$1, true);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/pages/handler.js
var EMPTY_SLOTS = Object.freeze({});
async function handlePages(state, ctx) {
	const { logger, streaming } = state;
	state.resetResponseMetadata();
	let response;
	const componentInstance = await state.loadComponentInstance();
	switch (state.routeData.type) {
		case "endpoint":
			response = await renderEndpoint(componentInstance, ctx, state.routeData.prerender, logger, state);
			break;
		case "page": {
			const props = await state.getProps();
			const actionApiContext = state.getActionAPIContext();
			const result = await state.createResult(componentInstance, actionApiContext);
			try {
				response = await renderPage(result, componentInstance?.default, props, state.slots ?? EMPTY_SLOTS, streaming, state.routeData);
			} catch (e) {
				result.cancelled = true;
				throw e;
			}
			state.responseRouteType = "page";
			if (state.routeData.route === "/404" || state.routeData.route === "/500") state.skipErrorReroute = true;
			break;
		}
		case "redirect": return new Response(null, {
			status: 404,
			headers: { [ASTRO_ERROR_HEADER]: "true" }
		});
		case "fallback":
			state.responseRouteType = "fallback";
			return new Response(null, { status: 500 });
	}
	const responseCookies = getCookiesFromResponse(response);
	if (responseCookies) state.cookies.merge(responseCookies);
	state.response = response;
	return response;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/match.js
function matchRoute$1(pathname, manifest) {
	if (isRoute404(pathname)) {
		const errorRoute = manifest.routes.find((route) => isRoute404(route.route));
		if (errorRoute) return errorRoute;
	}
	if (isRoute500(pathname)) {
		const errorRoute = manifest.routes.find((route) => isRoute500(route.route));
		if (errorRoute) return errorRoute;
	}
	return manifest.routes.find((route) => {
		return route.pattern.test(pathname) || route.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
	});
}
function isRoute404or500(route) {
	return isRoute404(route.route) || isRoute500(route.route);
}
function isRouteServerIsland(route) {
	return route.component === SERVER_ISLAND_COMPONENT;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/astro-designed-error-pages.js
function ensure404Route(manifest) {
	if (!manifest.routes.some((route) => route.route === "/404")) manifest.routes.push(DEFAULT_404_ROUTE);
	return manifest;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/priority.js
function routeComparator(a, b) {
	const commonLength = Math.min(a.segments.length, b.segments.length);
	for (let index = 0; index < commonLength; index++) {
		const aSegment = a.segments[index];
		const bSegment = b.segments[index];
		const aIsStatic = aSegment.every((part) => !part.dynamic && !part.spread);
		const bIsStatic = bSegment.every((part) => !part.dynamic && !part.spread);
		if (aIsStatic && bIsStatic) {
			const aContent = aSegment.map((part) => part.content).join("");
			const bContent = bSegment.map((part) => part.content).join("");
			if (aContent !== bContent) return aContent.localeCompare(bContent);
		}
		if (aIsStatic !== bIsStatic) return aIsStatic ? -1 : 1;
		const aAllDynamic = aSegment.every((part) => part.dynamic);
		if (aAllDynamic !== bSegment.every((part) => part.dynamic)) return aAllDynamic ? 1 : -1;
		const aHasSpread = aSegment.some((part) => part.spread);
		if (aHasSpread !== bSegment.some((part) => part.spread)) return aHasSpread ? 1 : -1;
	}
	const aLength = a.segments.length;
	const bLength = b.segments.length;
	if (aLength !== bLength) {
		const aEndsInRest = a.segments.at(-1)?.some((part) => part.spread);
		const bEndsInRest = b.segments.at(-1)?.some((part) => part.spread);
		if (aEndsInRest !== bEndsInRest && Math.abs(aLength - bLength) === 1) {
			if (aLength > bLength && aEndsInRest) return 1;
			if (bLength > aLength && bEndsInRest) return -1;
		}
		return aLength > bLength ? -1 : 1;
	}
	if (a.type === "endpoint" !== (b.type === "endpoint")) return a.type === "endpoint" ? -1 : 1;
	return a.route.localeCompare(b.route);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/router.js
var Router = class {
	#routes;
	#base;
	#baseWithoutTrailingSlash;
	#buildFormat;
	#trailingSlash;
	constructor(routes, options) {
		this.#routes = [...routes].sort(routeComparator);
		this.#base = normalizeBase(options.base);
		this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#base);
		this.#buildFormat = options.buildFormat;
		this.#trailingSlash = options.trailingSlash;
	}
	/**
	* Match an input pathname against the route list.
	* If allowWithoutBase is true, a non-base-prefixed path is still considered.
	*/
	match(inputPathname, { allowWithoutBase = false } = {}) {
		const normalized = getRedirectForPathname(inputPathname);
		if (normalized.redirect) return {
			type: "redirect",
			location: normalized.redirect,
			status: 301
		};
		if (this.#base !== "/") {
			const baseWithSlash = `${this.#baseWithoutTrailingSlash}/`;
			if (this.#trailingSlash === "always" && (normalized.pathname === this.#baseWithoutTrailingSlash || normalized.pathname === this.#base)) return {
				type: "redirect",
				location: baseWithSlash,
				status: 301
			};
			if (this.#trailingSlash === "never" && normalized.pathname === baseWithSlash) return {
				type: "redirect",
				location: this.#baseWithoutTrailingSlash,
				status: 301
			};
		}
		const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
		if (!baseResult) {
			if (!allowWithoutBase) return {
				type: "none",
				reason: "outside-base"
			};
		}
		let pathname = baseResult ?? normalized.pathname;
		if (this.#buildFormat === "file") pathname = normalizeFileFormatPathname(pathname);
		const route = this.#routes.find((candidate) => {
			if (candidate.pattern.test(pathname)) return true;
			return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
		});
		if (!route) return {
			type: "none",
			reason: "no-match"
		};
		return {
			type: "match",
			route,
			params: getParams(route, pathname),
			pathname
		};
	}
	/**
	* Returns all routes that match the given pathname, in priority order.
	* Used when the first match (e.g. a prerendered route) cannot serve
	* the request and subsequent matches need to be tried.
	*/
	matchAll(inputPathname, { allowWithoutBase = false } = {}) {
		const normalized = getRedirectForPathname(inputPathname);
		if (normalized.redirect) return [];
		const baseResult = stripBase(normalized.pathname, this.#base, this.#baseWithoutTrailingSlash, this.#trailingSlash);
		if (!baseResult && !allowWithoutBase) return [];
		let pathname = baseResult ?? normalized.pathname;
		if (this.#buildFormat === "file") pathname = normalizeFileFormatPathname(pathname);
		return this.#routes.filter((candidate) => {
			if (candidate.pattern.test(pathname)) return true;
			return candidate.fallbackRoutes.some((fallbackRoute) => fallbackRoute.pattern.test(pathname));
		});
	}
};
function normalizeBase(base) {
	if (!base) return "/";
	if (base === "/") return base;
	return prependForwardSlash(base);
}
function getRedirectForPathname(pathname) {
	let value = prependForwardSlash(pathname);
	if (value.startsWith("//")) return {
		pathname: value,
		redirect: `/${value.replace(/^\/+/, "")}`
	};
	return { pathname: value };
}
function stripBase(pathname, base, baseWithoutTrailingSlash, trailingSlash) {
	if (base === "/") return pathname;
	const baseWithSlash = `${baseWithoutTrailingSlash}/`;
	if (pathname === baseWithoutTrailingSlash || pathname === base) return trailingSlash === "always" ? null : "/";
	if (pathname === baseWithSlash) return trailingSlash === "never" ? null : "/";
	if (pathname.startsWith(baseWithSlash)) return pathname.slice(baseWithoutTrailingSlash.length);
	return null;
}
function normalizeFileFormatPathname(pathname) {
	if (pathname.endsWith("/index.html")) {
		const trimmed = pathname.slice(0, -11);
		return trimmed === "" ? "/" : trimmed;
	}
	if (pathname.endsWith(".html")) {
		const trimmed = pathname.slice(0, -5);
		return trimmed === "" ? "/" : trimmed;
	}
	return pathname;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/route-table.js
function compileRouteTable(manifest, routes) {
	const routesList = ensure404Route({ routes });
	const router = new Router(routesList.routes, {
		base: manifest.base,
		trailingSlash: manifest.trailingSlash,
		buildFormat: manifest.buildFormat
	});
	return {
		routes: routesList.routes,
		router
	};
}
var routeTables = createManifestMemo((manifest) => compileRouteTable(manifest, (manifest.routes ?? []).map((route) => route.routeData)));
function getRouteTable(manifest) {
	return routeTables.get(manifest);
}
function updateRouteTable(manifest, routes) {
	routeTables.set(manifest, compileRouteTable(manifest, [...routes]));
}
function matchRoute(manifest, pathname) {
	const match = getRouteTable(manifest).router.match(pathname, { allowWithoutBase: true });
	if (match.type !== "match") return void 0;
	return match.route;
}
function matchAllRoutes(manifest, pathname) {
	return getRouteTable(manifest).router.matchAll(pathname, { allowWithoutBase: true });
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/session/provider-disabled.js
function provideSession(state) {
	markFeatureUsed(state.manifest, FetchFeatures.sessions);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/output-filename.js
var STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["/404", "/500"]);
function getOutputFilename(buildFormat, name, routeData) {
	if (routeData.type === "endpoint") return name;
	if (name === "/" || name === "") return name === "" ? "index.html" : "/index.html";
	if (buildFormat === "file" || STATUS_CODE_PAGES.has(name)) return `${removeTrailingForwardSlash(name || "index")}.html`;
	if (buildFormat === "preserve" && !routeData.isIndex) return `${removeTrailingForwardSlash(name || "index")}.html`;
	return `${removeTrailingForwardSlash(name)}/index.html`;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/errors/default-handler.js
async function renderDefaultError(manifest, request, { status, response: originalResponse, skipMiddleware = false, error, pathname, ...resolvedRenderOptions }) {
	const resolvedPathname = pathname ?? new FetchState(manifest, request).pathname;
	const routeTable = getRouteTable(manifest);
	const errorRouteData = matchRoute$1(getErrorRoutePath(resolvedPathname, status, routeTable.routes, manifest.i18n?.locales, manifest.trailingSlash === "always"), routeTable);
	const url = new URL(request.url);
	if (errorRouteData) {
		if (errorRouteData.prerender) {
			const allowedDomains = manifest.allowedDomains;
			const safeOrigin = validateHost(url.host, url.protocol.replace(":", ""), allowedDomains) ? url.origin : `${url.protocol}//localhost`;
			const statusURL = new URL(`${removeTrailingForwardSlash(manifest.base)}${getOutputFilename(manifest.buildFormat, errorRouteData.route, errorRouteData)}`, safeOrigin);
			if (statusURL.toString() !== request.url && resolvedRenderOptions.prerenderedErrorPageFetch) try {
				const newResponse = mergeResponses(await resolvedRenderOptions.prerenderedErrorPageFetch(statusURL.toString()), originalResponse, {
					status,
					removeContentEncodingHeaders: true
				});
				prepareResponse(newResponse, resolvedRenderOptions);
				return newResponse;
			} catch {
				const response2 = mergeResponses(new Response(null, { status }), originalResponse);
				prepareResponse(response2, resolvedRenderOptions);
				return response2;
			}
		}
		const mod = await getEnvironment(manifest).getComponentByRoute(manifest, errorRouteData);
		const errorState = new FetchState(manifest, request);
		errorState.skipMiddleware = skipMiddleware;
		errorState.clientAddress = resolvedRenderOptions.clientAddress;
		errorState.routeData = errorRouteData;
		errorState.pathname = resolvedPathname;
		errorState.status = status;
		errorState.componentInstance = mod;
		errorState.locals = resolvedRenderOptions.locals ?? {};
		errorState.initialProps = { error };
		try {
			await provideSession(errorState);
			const response2 = await handleMiddleware(errorState, handlePages);
			if (rewroteToEmptyErrorResponse(skipMiddleware, errorRouteData, errorState.routeData, response2)) return renderDefaultError(manifest, request, {
				...resolvedRenderOptions,
				status,
				error,
				response: originalResponse,
				skipMiddleware: true,
				pathname: resolvedPathname
			});
			const newResponse = mergeResponses(response2, originalResponse);
			prepareResponse(newResponse, resolvedRenderOptions);
			return newResponse;
		} catch {
			if (skipMiddleware === false) return renderDefaultError(manifest, request, {
				...resolvedRenderOptions,
				status,
				error,
				response: originalResponse,
				skipMiddleware: true,
				pathname: resolvedPathname
			});
		} finally {
			await errorState.finalizeAll();
		}
	}
	const response = mergeResponses(new Response(null, { status }), originalResponse);
	prepareResponse(response, resolvedRenderOptions);
	return response;
}
function mergeResponses(newResponse, originalResponse, override) {
	let newResponseHeaders = newResponse.headers;
	if (override?.removeContentEncodingHeaders) {
		newResponseHeaders = new Headers(newResponseHeaders);
		newResponseHeaders.delete("Content-Encoding");
		newResponseHeaders.delete("Content-Length");
	}
	if (!originalResponse) {
		if (override !== void 0) return new Response(newResponse.body, {
			status: override.status,
			statusText: newResponse.statusText,
			headers: newResponseHeaders
		});
		return newResponse;
	}
	const status = override?.status ? override.status : originalResponse.status === 200 ? newResponse.status : originalResponse.status;
	try {
		originalResponse.headers.delete("Content-type");
		originalResponse.headers.delete("Content-Length");
		originalResponse.headers.delete("Transfer-Encoding");
	} catch {}
	const newHeaders = new Headers();
	const seen = /* @__PURE__ */ new Set();
	for (const [name, value] of originalResponse.headers) {
		newHeaders.append(name, value);
		seen.add(name.toLowerCase());
	}
	for (const [name, value] of newResponseHeaders) {
		const lower = name.toLowerCase();
		if (!seen.has(lower) || lower === "set-cookie") newHeaders.append(name, value);
	}
	const mergedResponse = new Response(newResponse.body, {
		status,
		statusText: status === 200 ? newResponse.statusText : originalResponse.statusText,
		headers: newHeaders
	});
	const originalCookies = getCookiesFromResponse(originalResponse);
	const newCookies = getCookiesFromResponse(newResponse);
	if (originalCookies) {
		if (newCookies) originalCookies.merge(newCookies);
		attachCookiesToResponse(mergedResponse, originalCookies);
	} else if (newCookies) attachCookiesToResponse(mergedResponse, newCookies);
	return mergedResponse;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/errors/build-handler.js
async function renderBuildError(manifest, request, options) {
	if (options.status === 500) {
		if (options.response) return options.response;
		throw options.error;
	}
	return renderDefaultError(manifest, request, {
		...options,
		prerenderedErrorPageFetch: void 0
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/errors/dev-handler.js
async function renderDevError(manifest, request, { skipMiddleware = false, error, status, response: _response, pathname, ...resolvedRenderOptions }, { shouldInjectCspMetaTags }) {
	if (isAstroError(error) && [MiddlewareNoDataOrNextCalled.name, MiddlewareNotAResponse.name].includes(error.name)) throw error;
	const resolvedPathname = pathname ?? new FetchState(manifest, request).pathname;
	const renderRoute = async (routeData) => {
		try {
			const preloadedComponent = await getEnvironment(manifest).getComponentByRoute(manifest, routeData);
			const errorState = new FetchState(manifest, request);
			errorState.skipMiddleware = skipMiddleware;
			errorState.clientAddress = resolvedRenderOptions.clientAddress;
			errorState.shouldInjectCspMetaTags = shouldInjectCspMetaTags ? !!manifest.csp : false;
			errorState.routeData = routeData;
			errorState.pathname = resolvedPathname;
			errorState.status = status;
			errorState.componentInstance = preloadedComponent;
			errorState.locals = resolvedRenderOptions.locals ?? {};
			errorState.initialProps = { error };
			const response = await handleMiddleware(errorState, handlePages);
			if (rewroteToEmptyErrorResponse(skipMiddleware, routeData, errorState.routeData, response)) return renderDevError(manifest, request, {
				...resolvedRenderOptions,
				status,
				error,
				skipMiddleware: true,
				pathname: resolvedPathname
			}, { shouldInjectCspMetaTags });
			if (error) getLogger(manifest).error("router", error.stack || error.message);
			return response;
		} catch (_err) {
			if (skipMiddleware === false) return renderDevError(manifest, request, {
				...resolvedRenderOptions,
				status: 500,
				skipMiddleware: true,
				error: _err,
				pathname: resolvedPathname
			}, { shouldInjectCspMetaTags });
			throw _err;
		}
	};
	if (status === 404) {
		const custom404 = getCustom404Route(getRouteTable(manifest));
		if (custom404) return renderRoute(custom404);
	}
	const custom500 = getCustom500Route(getRouteTable(manifest));
	if (!custom500) throw error;
	else return renderRoute(custom500);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/errors/handler.js
function renderErrorPage(manifest, request, options) {
	const env = getEnvironment(manifest);
	switch (env.errorStrategy) {
		case "dev": return renderDevError(manifest, request, options, { shouldInjectCspMetaTags: env.injectCspMetaTagsOnErrorPages });
		case "build": return renderBuildError(manifest, request, options);
		case "default": return renderDefaultError(manifest, request, options);
	}
}
function renderErrorFromState(state, request, options) {
	if (state.renderError) return state.renderError(request, options);
	return renderErrorPage(state.manifest, request, options);
}
function rewroteToEmptyErrorResponse(skipMiddleware, errorRouteData, renderedRouteData, response) {
	return skipMiddleware === false && renderedRouteData !== errorRouteData && response.body === null && REROUTABLE_STATUS_CODES.includes(response.status);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/middleware/callMiddleware.js
async function callMiddleware(onRequest, apiContext, responseFunction) {
	let nextCalled = false;
	let responseFunctionPromise = void 0;
	const next = async (payload) => {
		nextCalled = true;
		responseFunctionPromise = responseFunction(apiContext, payload);
		return responseFunctionPromise;
	};
	const middlewarePromise = onRequest(apiContext, next);
	return await Promise.resolve(middlewarePromise).then(async (value) => {
		if (nextCalled) {
			if (typeof value !== "undefined") {
				if (value instanceof Response === false) throw new AstroError(MiddlewareNotAResponse);
				return value;
			} else if (responseFunctionPromise) return responseFunctionPromise;
			else throw new AstroError(MiddlewareNotAResponse);
		} else if (typeof value === "undefined") throw new AstroError(MiddlewareNoDataOrNextCalled);
		else if (value instanceof Response === false) throw new AstroError(MiddlewareNotAResponse);
		else return value;
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/middleware/sequence.js
function sequence(...handlers) {
	const filtered = handlers.filter((h) => !!h);
	const length = filtered.length;
	if (!length) return defineMiddleware((_context, next) => {
		return next();
	});
	return defineMiddleware((context, next) => {
		let carriedPayload = void 0;
		return applyHandle(0, context);
		function applyHandle(i, handleContext) {
			const handle = filtered[i];
			return handle(handleContext, async (payload) => {
				if (i < length - 1) {
					if (payload) {
						const oldPathname = handleContext.url.pathname;
						const state = Reflect.get(handleContext, fetchStateSymbol);
						if (!state) throw new Error("FetchState not found on APIContext. `next(payload)` rewrites require a context created through Astro's request pipeline.");
						const manifest = state.manifest;
						const { routeData, pathname } = await getEnvironment(manifest).tryRewrite(manifest, payload, handleContext.request);
						let newRequest;
						if (payload instanceof Request) newRequest = payload;
						else {
							const request = handleContext.request.method === "GET" || handleContext.request.method === "HEAD" ? handleContext.request : handleContext.request.clone();
							newRequest = copyRequest(payload instanceof URL ? payload : new URL(payload, handleContext.url.origin), request, false, state.logger, routeData.route);
						}
						if (manifest.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) throw new AstroError({
							...ForbiddenRewrite,
							message: ForbiddenRewrite.message(handleContext.url.pathname, pathname, routeData.component),
							hint: ForbiddenRewrite.hint(routeData.component)
						});
						carriedPayload = payload;
						handleContext.request = newRequest;
						handleContext.url = new URL(newRequest.url);
						handleContext.params = getParams(routeData, pathname);
						handleContext.routePattern = routeData.route;
						setOriginPathname(handleContext.request, oldPathname, manifest.trailingSlash, manifest.buildFormat);
					}
					return applyHandle(i + 1, handleContext);
				} else return next(payload ?? carriedPayload);
			});
		}
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/middleware/load.js
var resolvedMiddleware = /* @__PURE__ */ new WeakMap();
var middlewareMemo = createAsyncManifestMemo(async (manifest) => {
	let handler;
	if (manifest.middleware) {
		const internalMiddlewares = [(await manifest.middleware()).onRequest ?? NOOP_MIDDLEWARE_FN];
		if (manifest.checkOrigin) internalMiddlewares.unshift(createOriginCheckMiddleware());
		handler = sequence(...internalMiddlewares);
	} else handler = NOOP_MIDDLEWARE_FN;
	resolvedMiddleware.set(manifest, handler);
	return handler;
});
function getMiddleware(manifest) {
	return middlewareMemo.get(manifest);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cache/runtime/noop.js
var EMPTY_OPTIONS = Object.freeze({ tags: [] });
var NoopAstroCache = class {
	enabled = false;
	set() {}
	get tags() {
		return [];
	}
	get options() {
		return EMPTY_OPTIONS;
	}
	async invalidate() {}
};
var hasWarned = false;
var DisabledAstroCache = class {
	enabled = false;
	#logger;
	constructor(logger) {
		this.#logger = logger;
	}
	#warn() {
		if (!hasWarned) {
			hasWarned = true;
			this.#logger?.warn("cache", "`cache.set()` was called but caching is not enabled. Configure a cache provider in your Astro config under `cache` to enable caching.");
		}
	}
	set() {
		this.#warn();
	}
	get tags() {
		return [];
	}
	get options() {
		return EMPTY_OPTIONS;
	}
	async invalidate() {
		throw new AstroError(CacheNotEnabled);
	}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/middleware/astro-middleware.js
async function handleMiddleware(state, renderRouteCallback) {
	markFeatureUsed(state.manifest, FetchFeatures.middleware);
	await state.getProps();
	const apiContext = state.getAPIContext();
	state.counter++;
	if (state.counter === 4) return new Response("Loop Detected", {
		status: 508,
		statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times."
	});
	const next = async (ctx, payload) => {
		if (payload) {
			state.logger.debug("router", "Called rewriting to:", payload);
			applyRewriteToState(state, payload, await getEnvironment(state.manifest).tryRewrite(state.manifest, payload, state.request));
		}
		return renderRouteCallback(state, ctx);
	};
	let response;
	if (state.skipMiddleware) response = await next(apiContext);
	else response = await callMiddleware(sequence(await getMiddleware(state.manifest)), apiContext, next);
	attachCookiesToResponse(response, state.cookies);
	state.response = response;
	return response;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/util/normalized-url.js
function createNormalizedUrl(requestUrl) {
	return normalizeUrl(new URL(requestUrl));
}
function setPathname(url, pathname) {
	if (url.pathname !== pathname) url.pathname = pathname;
}
function normalizeUrl(url) {
	try {
		setPathname(url, validateAndDecodePathname(url.pathname));
	} catch {
		try {
			setPathname(url, decodeURI(url.pathname));
		} catch {}
	}
	setPathname(url, collapseDuplicateSlashes(url.pathname));
	return url;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/rewrites/handler.js
function applyRewriteToState(state, payload, { routeData, componentInstance, newUrl, pathname }, { mergeCookies = false } = {}) {
	const oldPathname = state.pathname;
	const isI18nFallback = routeData.fallbackRoutes && routeData.fallbackRoutes.length > 0;
	if (state.manifest.serverLike && !state.routeData.prerender && routeData.prerender && !isI18nFallback) throw new AstroError({
		...ForbiddenRewrite,
		message: ForbiddenRewrite.message(state.pathname, pathname, routeData.component),
		hint: ForbiddenRewrite.hint(routeData.component)
	});
	state.routeData = routeData;
	state.componentInstance = componentInstance;
	if (payload instanceof Request) state.request = payload;
	else state.request = copyRequest(newUrl, state.request, routeData.prerender, state.logger, state.routeData.route);
	state.url = createNormalizedUrl(state.request.url);
	if (mergeCookies) {
		const newCookies = new AstroCookies(state.request, state.logger);
		if (state.cookies) newCookies.merge(state.cookies);
		state.cookies = newCookies;
	}
	state.params = getParams(routeData, pathname);
	state.pathname = pathname;
	state.isRewriting = true;
	state.status = 200;
	setOriginPathname(state.request, oldPathname, state.manifest.trailingSlash, state.manifest.buildFormat);
	state.invalidateContexts();
}
async function executeRewrite(state, payload) {
	state.logger.debug("router", "Calling rewrite: ", payload);
	applyRewriteToState(state, payload, await getEnvironment(state.manifest).tryRewrite(state.manifest, payload, state.request), { mergeCookies: true });
	return handleMiddleware(state, handlePages);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/manifest/derived.js
var sites = createManifestMemo((manifest) => manifest.site ? new URL(manifest.site) : void 0);
function getSite(manifest) {
	return sites.get(manifest);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/server-islands/mappings.js
async function getServerIslands(manifest) {
	if (manifest.serverIslandMappings) return manifest.serverIslandMappings();
	return {
		serverIslandMap: /* @__PURE__ */ new Map(),
		serverIslandNameMap: /* @__PURE__ */ new Map()
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/fetch/fetch-state.js
var slotValuesSymbol = /* @__PURE__ */ Symbol("astro.slotValues");
function getFetchStateFromAPIContext(context) {
	const state = context[fetchStateSymbol];
	if (!state) throw new Error("FetchState not found on APIContext. This is an internal error — the context was not created through Astro's request pipeline.");
	return state;
}
var FetchState = class {
	/** The manifest — the single ambient source of static, build-time data. */
	manifest;
	/** The manifest's identity-stable logger, captured once at construction. */
	logger;
	/**
	* Whether page renders stream. From the facade hooks on the fast path,
	* else the environment's default.
	*/
	streaming;
	/**
	* Internal facade hook: late-bound `app.renderError` dispatch. Undefined on
	* bare and custom-handler paths — those fall through to the environment's
	* error strategy (`renderErrorPage`).
	*/
	renderError;
	/**
	* Internal facade hook: late-bound `app.logThisRequest` dispatch. Undefined
	* on bare and custom-handler paths — those fall through to the
	* environment's `logRequest` behavior.
	*/
	logRequest;
	/**
	* The request to render. Mutated during rewrites so subsequent renders
	* see the rewritten URL.
	*/
	request;
	routeData;
	/**
	* The pathname to use for routing and rendering. Starts out as the raw,
	* base-stripped, decoded pathname from the request. May be further
	* normalized by `handleRequest` after routeData is known (in dev, when
	* the matched route has no `.html` extension, `.html` / `/index.html`
	* suffixes are stripped).
	*/
	pathname;
	/** Resolved render options (addCookieHeader, clientAddress, locals, etc.). */
	renderOptions;
	/** When the request started, used to log duration. */
	timeStart;
	/**
	* The route's loaded component module. Set before middleware runs; may
	* be swapped during in-flight rewrites from inside the middleware chain.
	*/
	componentInstance;
	/**
	* Slot overrides supplied by the container API. `undefined` for HTTP
	* requests — `PagesHandler` coalesces to `{}` on read so we don't
	* allocate an empty object per request.
	*/
	slots;
	/**
	* The `Response` produced by handlers, if any. Set after page
	* rendering or middleware completes.
	*/
	response;
	/** Explicitly assigned status; `undefined` until a caller sets one. */
	#status;
	/**
	* Default HTTP status for the rendered response. Callers override
	* before rendering runs (e.g. `handleRequest` sets this from
	* `BaseApp.getDefaultStatusCode`; error handlers set `404` / `500`).
	* Reads `200` until assigned.
	*/
	get status() {
		return this.#status ?? 200;
	}
	set status(value) {
		this.#status = value;
	}
	/**
	* Sets `status` from the matched route (see `getDefaultStatusCode`)
	* unless a caller already assigned one.
	*/
	applyDefaultStatus() {
		if (this.#status === void 0 && this.routeData) this.#status = getDefaultStatusCode(this.manifest, this.routeData, this.pathname);
	}
	/** Whether user middleware should be skipped for this request. */
	skipMiddleware = false;
	/**
	* Set to `true` when the request path was encoded too many times to fully
	* decode (see {@link validateAndDecodePathname}). These requests are
	* rejected with a `400` before middleware or routing run.
	*/
	invalidEncoding = false;
	/** A flag that tells the render content if the rewriting was triggered. */
	isRewriting = false;
	/** A safety net in case of loops (rewrite counter). */
	counter = 0;
	/** Cookies for this request. Created lazily on first access. */
	cookies;
	/** Route params derived from routeData + pathname. Computed lazily. */
	#params;
	get params() {
		if (!this.#params && this.routeData) this.#params = getParams(this.routeData, this.pathname);
		return this.#params;
	}
	set params(value) {
		this.#params = value;
	}
	/** Normalized URL for this request. */
	url;
	/** Client address for this request. */
	clientAddress;
	/** Whether this is a partial render (container API). */
	partial;
	/** Internal metadata about the current response route type. */
	responseRouteType;
	/** Internal flag to prevent rerouting this response to an error page. */
	skipErrorReroute = false;
	/** Whether to inject CSP meta tags. */
	shouldInjectCspMetaTags;
	/** Request-scoped locals object, shared with user middleware. */
	locals = {};
	/**
	* Memoized `props` (see `getProps`). `null` means "not yet computed"
	* — using `null` (rather than `undefined`) keeps the hidden class
	* stable and distinct from a valid-but-empty result.
	*/
	props = null;
	/** Memoized `ActionAPIContext` (see `getActionAPIContext`). */
	actionApiContext = null;
	/** Memoized `APIContext` (see `getAPIContext`). */
	apiContext = null;
	/** Registered context providers keyed by name. Lazy-initialized on first provide(). */
	#providers;
	/** Cached values from resolved providers. Lazy-initialized on first resolve(). */
	#providersResolvedValues;
	/** Cached promise for lazy component instance loading. */
	#componentInstancePromise;
	/** SSR result for the current page render. */
	result;
	/** Initial props (from container/error handler). */
	initialProps = {};
	/** Memoized Astro page partial. */
	#astroPagePartial;
	/**
	* Locale-prefixed pathname derived from the Host header for domain-based
	* i18n routing (e.g. `/en/boats/1/foo`), or `undefined` when the request
	* isn't served from a locale-mapped domain. When set, `this.pathname` is
	* derived from it so locale/param resolution match the route pattern.
	*/
	#domainPathname;
	/** Memoized current locale. */
	#currentLocale;
	/** Memoized preferred locale. */
	#preferredLocale;
	/** Memoized preferred locale list. */
	#preferredLocaleList;
	constructor(manifest, request, options, hooks) {
		this.manifest = manifest;
		this.logger = getLogger(manifest);
		this.streaming = hooks?.streaming ?? getEnvironment(manifest).defaultStreaming(manifest);
		this.renderError = hooks?.renderError;
		this.logRequest = hooks?.logRequest;
		this.request = request;
		options ??= getRenderOptions(request);
		this.routeData = options?.routeData;
		const self = this;
		this.renderOptions = {
			...options ?? {
				addCookieHeader: false,
				clientAddress: void 0,
				prerenderedErrorPageFetch: fetch,
				routeData: void 0,
				waitUntil: void 0
			},
			get locals() {
				return self.locals;
			}
		};
		this.componentInstance = void 0;
		this.slots = void 0;
		const url = new URL(request.url);
		const publicPathname = this.#normalizePathname(url.pathname);
		const pathname = this.#computePathname(publicPathname);
		setPathname(url, publicPathname);
		setPathname(url, collapseDuplicateSlashes(url.pathname));
		const domainPathname = computePathnameFromDomain(request, url, manifest.i18n, manifest.base, manifest.trailingSlash, manifest.allowedDomains, this.logger, pathname);
		if (domainPathname) {
			this.#domainPathname = domainPathname;
			this.pathname = domainPathname;
		} else this.pathname = pathname;
		this.timeStart = performance.now();
		this.clientAddress = options?.clientAddress;
		this.locals = options?.locals ?? {};
		this.url = url;
		this.cookies = new AstroCookies(request, this.logger);
		if (manifest.allowedDomains && manifest.allowedDomains.length > 0 && !this.routeData?.prerender) this.#applyForwardedHeaders();
		if (!Reflect.get(this.request, originPathnameSymbol)) setOriginPathname(this.request, this.pathname, manifest.trailingSlash, manifest.buildFormat);
		this.#resolveRouteData();
	}
	/**
	* Triggers a rewrite. Delegates to the rewrites handler module.
	*/
	rewrite(payload) {
		return executeRewrite(this, payload);
	}
	/**
	* Creates the SSR result for the current page render.
	*/
	async createResult(mod, ctx) {
		const manifest = this.manifest;
		const env = getEnvironment(manifest);
		const { clientDirectives, inlinedScripts, compressHTML } = manifest;
		const renderers = env.getRenderers(manifest);
		const resolve = (specifier) => env.resolve(manifest, specifier);
		const routeData = this.routeData;
		const { links, scripts, styles } = await env.headElements(manifest, routeData);
		const extraStyleHashes = [];
		const extraScriptHashes = [];
		const shouldInjectCspMetaTags = this.shouldInjectCspMetaTags ?? manifest.shouldInjectCspMetaTags;
		const cspAlgorithm = manifest.csp?.algorithm ?? "SHA-256";
		if (shouldInjectCspMetaTags) {
			for (const style of styles) extraStyleHashes.push(await generateCspDigest(style.children, cspAlgorithm));
			for (const script of scripts) extraScriptHashes.push(await generateCspDigest(script.children, cspAlgorithm));
		}
		const componentMetadata = await env.componentMetadata(manifest, routeData) ?? manifest.componentMetadata;
		const headers = new Headers({ "Content-Type": "text/html" });
		const partial = typeof this.partial === "boolean" ? this.partial : Boolean(mod.partial);
		const actionResult = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0;
		const status = this.status;
		const response = {
			status: actionResult?.error ? actionResult?.error.status : status,
			statusText: actionResult?.error ? actionResult?.error.type : "OK",
			get headers() {
				return headers;
			},
			set headers(_) {
				throw new AstroError(AstroResponseHeadersReassigned);
			}
		};
		const state = this;
		const result = {
			base: manifest.base,
			userAssetsBase: manifest.userAssetsBase,
			cancelled: false,
			clientDirectives,
			inlinedScripts,
			componentMetadata,
			compressHTML,
			cookies: this.cookies,
			createAstro: (props, slots) => state.createAstro(result, props, slots, ctx),
			links,
			params: this.params,
			partial,
			pathname: this.pathname,
			renderers,
			resolve,
			response,
			request: this.request,
			scripts,
			styles,
			actionResult,
			async getServerIslandNameMap() {
				return (await getServerIslands(manifest)).serverIslandNameMap ?? /* @__PURE__ */ new Map();
			},
			key: manifest.key,
			trailingSlash: manifest.trailingSlash,
			_metadata: {
				hasHydrationScript: false,
				rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(),
				hasRenderedHead: false,
				renderedScripts: /* @__PURE__ */ new Set(),
				hasDirectives: /* @__PURE__ */ new Set(),
				hasRenderedServerIslandRuntime: false,
				headInTree: false,
				extraHead: [],
				extraStyleHashes,
				extraScriptHashes,
				propagators: /* @__PURE__ */ new Set(),
				routeHasPropagation: false,
				pendingSlotEvaluations: [],
				templateDepth: 0
			},
			cspDestination: manifest.csp?.cspDestination ?? (routeData.prerender ? "meta" : "header"),
			shouldInjectCspMetaTags,
			cspAlgorithm,
			directives: manifest.csp?.directives ? [...manifest.csp.directives] : [],
			scriptHashes: manifest.csp?.scriptHashes ? [...manifest.csp.scriptHashes] : [],
			scriptResources: manifest.csp?.scriptResources ? [...manifest.csp.scriptResources] : [],
			styleHashes: manifest.csp?.styleHashes ? [...manifest.csp.styleHashes] : [],
			styleResources: manifest.csp?.styleResources ? [...manifest.csp.styleResources] : [],
			isStrictDynamic: manifest.csp?.isStrictDynamic ?? false,
			scriptDirective: {
				resources: manifest.csp?.scriptDirective ? [...manifest.csp.scriptDirective.resources] : [],
				hashes: manifest.csp?.scriptDirective ? [...manifest.csp.scriptDirective.hashes] : [],
				strictDynamic: manifest.csp?.scriptDirective?.strictDynamic ?? false
			},
			styleDirective: {
				resources: manifest.csp?.styleDirective ? [...manifest.csp.styleDirective.resources] : [],
				hashes: manifest.csp?.styleDirective ? [...manifest.csp.styleDirective.hashes] : []
			},
			speculationRulesContent: manifest.csp?.speculationRulesContent,
			internalFetchHeaders: manifest.internalFetchHeaders
		};
		this.result = result;
		return result;
	}
	/**
	* Creates the Astro global object for a component render.
	*/
	createAstro(result, props, slotValues, apiContext) {
		let astroPagePartial;
		if (this.isRewriting) this.#astroPagePartial = this.createAstroPagePartial(result, apiContext);
		this.#astroPagePartial ??= this.createAstroPagePartial(result, apiContext);
		astroPagePartial = this.#astroPagePartial;
		const Astro = Object.assign(Object.create(astroPagePartial), {
			props,
			self: null
		});
		Object.defineProperty(Astro, slotValuesSymbol, {
			value: slotValues,
			writable: true,
			configurable: true,
			enumerable: false
		});
		return Astro;
	}
	/**
	* Creates the Astro page-level partial (prototype for Astro global).
	*/
	createAstroPagePartial(result, apiContext) {
		const state = this;
		const { cookies, locals, params, logger, url } = this;
		const { response } = result;
		const redirect = (path, status = 302) => {
			if (state.request[responseSentSymbol$1]) throw new AstroError({ ...ResponseSentError });
			return new Response(null, {
				status,
				headers: { Location: path }
			});
		};
		const rewrite = async (reroutePayload) => {
			return await state.rewrite(reroutePayload);
		};
		const callAction = createCallAction(apiContext);
		const partial = {
			generator: ASTRO_GENERATOR,
			routePattern: this.routeData.route,
			isPrerendered: this.routeData.prerender,
			cookies,
			get slots() {
				const slotsByAstro = result._metadata.slotsByAstro ??= /* @__PURE__ */ new WeakMap();
				let slots = slotsByAstro.get(this);
				if (slots === void 0) {
					slots = new Slots(result, this[slotValuesSymbol] ?? null, logger);
					slotsByAstro.set(this, slots);
				}
				return slots;
			},
			get clientAddress() {
				return state.getClientAddress();
			},
			get currentLocale() {
				return state.computeCurrentLocale();
			},
			params,
			get preferredLocale() {
				return state.computePreferredLocale();
			},
			get preferredLocaleList() {
				return state.computePreferredLocaleList();
			},
			locals,
			redirect,
			rewrite,
			request: this.request,
			response,
			site: getSite(this.manifest),
			getActionResult: createGetActionResult(locals),
			get callAction() {
				return callAction;
			},
			url,
			get originPathname() {
				return getOriginPathname(state.request);
			},
			get csp() {
				return state.getCsp();
			},
			get logger() {
				return astroToRuntimeLogger(logger);
			}
		};
		this.defineProviderGetters(partial);
		return partial;
	}
	getClientAddress() {
		const { clientAddress } = this;
		const routeData = this.routeData;
		if (routeData.prerender) throw new AstroError({
			...PrerenderClientAddressNotAvailable,
			message: PrerenderClientAddressNotAvailable.message(routeData.component)
		});
		if (clientAddress) return clientAddress;
		if (this.manifest.adapterName) throw new AstroError({
			...ClientAddressNotAvailable,
			message: ClientAddressNotAvailable.message(this.manifest.adapterName)
		});
		throw new AstroError(StaticClientAddressNotAvailable);
	}
	getCookies() {
		return this.cookies;
	}
	getCsp() {
		const state = this;
		if (!this.manifest.csp) {
			if (getEnvironment(this.manifest).runtimeMode === "production") this.logger.warn("csp", `context.csp was used when rendering the route ${colors.green(state.routeData.route)}, but CSP was not configured. For more information, see https://docs.astro.build/en/reference/configuration-reference/#securitycsp`);
			return;
		}
		const warnedFallback = /* @__PURE__ */ new Set();
		const warnFallback = (family, kind) => {
			if (kind === "default" || !state.result) return;
			const defaultResources = (family === "script" ? state.result.scriptDirective : state.result.styleDirective).resources.map(normalizeCspResourceEntry).filter((entry) => entry.kind === "default").map((entry) => entry.resource);
			if (defaultResources.length === 0) return;
			const key = `${family}:${kind}`;
			if (warnedFallback.has(key)) return;
			warnedFallback.add(key);
			const general = `${family}-src`;
			const specific = `${general}-${kind === "element" ? "elem" : "attr"}`;
			state.logger.warn("csp", `A resource was added to \`${specific}\`, but \`${general}\` also defines custom resources (${defaultResources.join(" ")}). Because \`${specific}\` overrides \`${general}\` for its scope (browsers do not fall back), those resources will not apply there. Add them to \`${specific}\` as well if needed.`);
		};
		return {
			insertDirective(payload) {
				if (state.result) state.result.directives = pushDirective(state.result.directives, payload);
			},
			insertScriptResource(payload) {
				if (!state.result) return;
				warnFallback("script", normalizeCspResourceEntry(payload).kind);
				state.result.scriptDirective.resources.push(payload);
			},
			insertStyleResource(payload) {
				if (!state.result) return;
				warnFallback("style", normalizeCspResourceEntry(payload).kind);
				state.result.styleDirective.resources.push(payload);
			},
			insertStyleHash(payload) {
				state.result?.styleDirective.hashes.push(payload);
			},
			insertScriptHash(payload) {
				state.result?.scriptDirective.hashes.push(payload);
			}
		};
	}
	computeCurrentLocale() {
		const { url, manifest: { i18n }, routeData } = this;
		if (!i18n || !routeData) return;
		const { defaultLocale, locales, strategy } = i18n;
		const fallbackTo = strategy === "pathname-prefix-other-locales" || strategy === "domains-prefix-other-locales" ? defaultLocale : void 0;
		if (this.#currentLocale) return this.#currentLocale;
		let computedLocale;
		if (isRouteServerIsland(routeData)) {
			let referer = this.request.headers.get("referer");
			if (referer) {
				if (URL.canParse(referer)) referer = new URL(referer).pathname;
				computedLocale = computeCurrentLocale(referer, locales, defaultLocale);
			}
		} else {
			let pathname = routeData.pathname;
			if (this.#domainPathname) pathname = this.pathname;
			else if (url && !routeData.pattern.test(url.pathname)) {
				for (const fallbackRoute of routeData.fallbackRoutes) if (fallbackRoute.pattern.test(url.pathname)) {
					pathname = fallbackRoute.pathname;
					break;
				}
			}
			pathname = pathname && !isRoute404or500(routeData) ? pathname : url.pathname ?? this.pathname;
			computedLocale = computeCurrentLocale(pathname, locales, defaultLocale);
			if (routeData.params.length > 0) {
				const localeFromParams = computeCurrentLocaleFromParams(this.params, locales);
				if (localeFromParams) computedLocale = localeFromParams;
			}
		}
		this.#currentLocale = computedLocale ?? fallbackTo;
		return this.#currentLocale;
	}
	computePreferredLocale() {
		const { manifest: { i18n }, request } = this;
		if (!i18n) return;
		return this.#preferredLocale ??= computePreferredLocale(request, i18n.locales);
	}
	computePreferredLocaleList() {
		const { manifest: { i18n }, request } = this;
		if (!i18n) return;
		return this.#preferredLocaleList ??= computePreferredLocaleList(request, i18n.locales);
	}
	/**
	* Lazily loads the route's component module. Returns the cached
	* instance if already loaded. The promise is cached so concurrent
	* callers share the same load.
	*/
	async loadComponentInstance() {
		if (this.componentInstance) return this.componentInstance;
		if (this.#componentInstancePromise) return this.#componentInstancePromise;
		this.#componentInstancePromise = getEnvironment(this.manifest).getComponentByRoute(this.manifest, this.routeData).then((mod) => {
			this.componentInstance = mod;
			return mod;
		});
		return this.#componentInstancePromise;
	}
	/**
	* Registers a context provider under the given key. Handlers call
	* this to contribute values to the request context (e.g. sessions).
	* The `create` factory is called lazily on the first `resolve(key)`.
	*/
	provide(key, provider) {
		(this.#providers ??= /* @__PURE__ */ new Map()).set(key, provider);
	}
	/**
	* Lazily resolves a provider registered under `key`. Calls
	* `provider.create()` on first access and caches the result.
	* Returns `undefined` if no provider was registered for the key.
	*/
	resolve(key) {
		if (this.#providersResolvedValues?.has(key)) return this.#providersResolvedValues.get(key);
		const provider = this.#providers?.get(key);
		if (!provider) return void 0;
		const value = provider.create();
		(this.#providersResolvedValues ??= /* @__PURE__ */ new Map()).set(key, value);
		return value;
	}
	/**
	* Runs all registered `finalize` callbacks. Should be called after
	* the response is produced, typically in a `finally` block.
	*
	* Returns synchronously (no promise allocation) when nothing needs
	* finalizing — important for the hot path where sessions are not used.
	*/
	finalizeAll() {
		if (!this.#providersResolvedValues || this.#providersResolvedValues.size === 0) return;
		let chain;
		for (const [key, provider] of this.#providers) if (provider.finalize && this.#providersResolvedValues.has(key)) {
			const result = provider.finalize(this.#providersResolvedValues.get(key));
			if (result) chain = chain ? chain.then(() => result) : result;
		}
		return chain;
	}
	/**
	* Adds lazy getters to `target` for each registered provider key.
	* Used by context creation (APIContext, Astro global) so that
	* provider values like `session` and `cache` appear as properties
	* without hard-coding the keys.
	*
	* Always defines a `session` getter (returning `undefined` when no
	* provider is registered) so `ctx.session` / `Astro.session` is a
	* present property regardless of whether the sessions handler was
	* included in the pipeline.
	*/
	defineProviderGetters(target) {
		const state = this;
		if (this.#providers) for (const key of this.#providers.keys()) Object.defineProperty(target, key, {
			get: () => state.resolve(key),
			enumerable: true,
			configurable: true
		});
		if (!this.#providers?.has("session")) {
			let warned = false;
			Object.defineProperty(target, "session", {
				get() {
					if (!warned) {
						warned = true;
						state.logger.warn("session", "`Astro.session` was accessed but no session storage is configured. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/");
					}
				},
				enumerable: true,
				configurable: true
			});
		}
	}
	/**
	* Resolves the route to use for this request and stores it on
	* `this.routeData`. If the adapter (or the dev server) provided a
	* `routeData` via render options it's already set and this is a
	* no-op. Otherwise we use the app's synchronous route matcher and
	* fall back to a `404.astro` route so middleware can still run.
	*
	* Called eagerly from the constructor so individual handlers
	* (actions, pages, middleware, etc.) always see a resolved route
	* without the caller needing an extra setup step.
	*
	* Once routeData is known, finalizes `this.pathname`: in dev, if the
	* matched route has no `.html` extension, strip `.html` / `/index.html`
	* suffixes so the rendering pipeline sees the canonical pathname.
	*/
	/**
	* Strip `.html` / `/index.html` suffixes from the pathname so the
	* rendering pipeline sees the canonical route path. Only applies to
	* page routes where `.html` is framework-injected. Endpoint routes
	* preserve `.html` because any such suffix is user-provided (e.g.
	* from `getStaticPaths` params). Skipped when the matched route
	* itself has an `.html` extension in its definition.
	*/
	#stripHtmlExtension() {
		if (this.routeData && this.routeData.type === "page" && !routeHasHtmlExtension(this.routeData)) {
			const original = this.pathname;
			this.pathname = this.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
			if (this.manifest.trailingSlash === "always" && this.pathname !== "" && !this.pathname.endsWith("/")) this.pathname += "/";
			if (this.pathname !== original && this.routeData.pattern.test(original) && !this.routeData.pattern.test(this.pathname)) this.pathname = original;
		}
	}
	#resolveRouteData() {
		if (this.routeData) {
			this.#stripHtmlExtension();
			return;
		}
		const matched = matchRoute(this.manifest, this.pathname);
		if (matched && matched.prerender && this.manifest.serverLike) {
			if (matched.params.length > 0) {
				const allMatches = matchAllRoutes(this.manifest, this.pathname);
				this.routeData = allMatches.find((r) => !r.prerender);
			} else this.routeData = void 0;
		} else this.routeData = matched;
		this.logger.debug("router", "Astro matched the following route for " + this.request.url);
		this.logger.debug("router", "RouteData:\n" + this.routeData);
		if (!this.routeData) {
			const custom404 = getCustom404Route(getRouteTable(this.manifest));
			if (custom404 && !custom404.prerender) this.routeData = custom404;
		}
		if (!this.routeData) {
			this.logger.debug("router", "Astro hasn't found routes that match " + this.request.url);
			this.logger.debug("router", "Here's the available routes:\n", getRouteTable(this.manifest));
			return;
		}
		this.#stripHtmlExtension();
	}
	/**
	* Strips the manifest's base from a normalized request pathname and prepends
	* a forward slash.
	*
	* Mirrors `BaseApp.removeBase`: the router matches against this stripped path
	* while middleware reads the un-stripped `context.url.pathname`, so both must
	* strip the base identically.
	*/
	#computePathname(normalizedPathname) {
		return prependForwardSlash(stripRequestBase(normalizedPathname, this.manifest.base));
	}
	/**
	* Decodes and normalizes the public request pathname before deriving the
	* separate pathname used for route matching.
	*/
	#normalizePathname(pathname) {
		try {
			pathname = validateAndDecodePathname(pathname);
		} catch (e) {
			if (e instanceof MultiLevelEncodingError) this.invalidEncoding = true;
			else this.logger.error(null, e.toString());
		}
		return collapseDuplicateSlashes(pathname);
	}
	/**
	* Reads X-Forwarded-Proto, X-Forwarded-Host, and X-Forwarded-Port
	* from the request headers, validates them against the manifest's
	* `allowedDomains`, and updates `this.url` accordingly. Also resolves
	* `clientAddress` from X-Forwarded-For when the host is trusted.
	*
	* Only called when `allowedDomains` is configured — without it,
	* forwarded headers are never trusted.
	*/
	#applyForwardedHeaders() {
		const headers = this.request.headers;
		const allowedDomains = this.manifest.allowedDomains;
		const validated = validateForwardedHeaders(getFirstForwardedValue(headers.get("x-forwarded-proto") ?? void 0), getFirstForwardedValue(headers.get("x-forwarded-host") ?? void 0), getFirstForwardedValue(headers.get("x-forwarded-port") ?? void 0), allowedDomains);
		if (!validated.protocol && !validated.host && !validated.port) return;
		if (validated.protocol) this.url.protocol = validated.protocol + ":";
		if (validated.host) {
			const colonIdx = validated.host.indexOf(":");
			if (colonIdx !== -1) {
				this.url.hostname = validated.host.slice(0, colonIdx);
				this.url.port = validated.host.slice(colonIdx + 1);
			} else {
				this.url.hostname = validated.host;
				this.url.port = "";
			}
		}
		if (validated.port) this.url.port = validated.port;
		if (validated.host !== void 0 && !this.clientAddress) {
			const forwardedFor = getFirstForwardedValue(this.request.headers.get("x-forwarded-for") ?? void 0);
			if (forwardedFor) this.clientAddress = forwardedFor;
		}
		this.request = new Request(this.url, this.request);
	}
	/**
	* Returns the resolved `props` for this render, computing them lazily
	* from the route + component module on first access. If the
	* `initialProps` already carries user-supplied props (e.g. the
	* container API) those are used verbatim.
	*/
	async getProps() {
		if (this.props !== null) return this.props;
		if (Object.keys(this.initialProps).length > 0) {
			this.props = this.initialProps;
			return this.props;
		}
		const mod = await this.loadComponentInstance();
		this.props = await getProps({
			mod,
			routeData: this.routeData,
			routeCache: getRouteCache(this.manifest),
			pathname: this.pathname,
			logger: this.logger,
			serverLike: this.manifest.serverLike,
			base: this.manifest.base,
			trailingSlash: this.manifest.trailingSlash
		});
		return this.props;
	}
	/**
	* Returns the `ActionAPIContext` for this render, creating it lazily.
	* Used by middleware, actions, and page dispatch.
	*/
	getActionAPIContext() {
		if (this.actionApiContext !== null) return this.actionApiContext;
		const state = this;
		const ctx = {
			get cookies() {
				return state.cookies;
			},
			routePattern: this.routeData.route,
			isPrerendered: this.routeData.prerender,
			get clientAddress() {
				return state.getClientAddress();
			},
			get currentLocale() {
				return state.computeCurrentLocale();
			},
			generator: ASTRO_GENERATOR,
			get locals() {
				return state.locals;
			},
			set locals(_) {
				throw new AstroError(LocalsReassigned);
			},
			params: this.params,
			get preferredLocale() {
				return state.computePreferredLocale();
			},
			get preferredLocaleList() {
				return state.computePreferredLocaleList();
			},
			request: this.request,
			site: getSite(this.manifest),
			url: this.url,
			get originPathname() {
				return getOriginPathname(state.request);
			},
			get csp() {
				return state.getCsp();
			},
			get logger() {
				return astroToRuntimeLogger(state.logger);
			}
		};
		this.defineProviderGetters(ctx);
		this.actionApiContext = ctx;
		return this.actionApiContext;
	}
	/**
	* Returns the `APIContext` for this render, creating it lazily from
	* the memoized props + action context.
	*
	* Called before `getProps()` has resolved, the context carries
	* `props: null` and is not memoized; the next call after `getProps()`
	* fills in `props` on the same object. Callers that read `props`
	* must await `getProps()` first.
	*/
	getAPIContext() {
		if (this.apiContext !== null) return this.apiContext;
		const actionApiContext = this.getActionAPIContext();
		const state = this;
		const redirect = (path, status = 302) => new Response(null, {
			status,
			headers: { Location: path }
		});
		const rewrite = async (reroutePayload) => {
			return await state.rewrite(reroutePayload);
		};
		actionApiContext[fetchStateSymbol] = this;
		const apiContext = Object.assign(actionApiContext, {
			props: this.props,
			redirect,
			rewrite,
			getActionResult: createGetActionResult(actionApiContext.locals),
			callAction: createCallAction(actionApiContext)
		});
		if (this.props !== null) this.apiContext = apiContext;
		return apiContext;
	}
	/**
	* Invalidates the cached `APIContext` so the next `getAPIContext()`
	* call re-derives it from the (possibly mutated) state. Used
	* after an in-flight rewrite swaps the route / request / params.
	*/
	invalidateContexts() {
		this.props = null;
		this.actionApiContext = null;
		this.apiContext = null;
	}
	resetResponseMetadata() {
		this.responseRouteType = void 0;
		this.skipErrorReroute = false;
	}
};
//#endregion
//#region node_modules/.pnpm/@astrojs+internal-helpers@0.12.0/node_modules/@astrojs/internal-helpers/dist/object.js
var FORBIDDEN_PATH_KEYS = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/actions/noop-actions.js
var NOOP_ACTIONS_MOD = { server: {} };
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/actions/load.js
var actionsMemo = createAsyncManifestMemo(async (manifest) => manifest.actions ? await manifest.actions() : NOOP_ACTIONS_MOD);
function getActions(manifest) {
	return actionsMemo.get(manifest);
}
async function getAction(manifest, path) {
	const pathKeys = path.split(".").map((key) => decodeURIComponent(key));
	let { server } = await getActions(manifest);
	if (!server || !(typeof server === "object")) throw new TypeError(`Expected \`server\` export in actions file to be an object. Received ${typeof server}.`);
	for (const key of pathKeys) {
		if (typeof server === "function") throw new AstroError({
			...ActionNotFoundError,
			message: ActionNotFoundError.message(pathKeys.join("."))
		});
		if (FORBIDDEN_PATH_KEYS.has(key)) throw new AstroError({
			...ActionNotFoundError,
			message: ActionNotFoundError.message(pathKeys.join("."))
		});
		if (!Object.hasOwn(server, key)) throw new AstroError({
			...ActionNotFoundError,
			message: ActionNotFoundError.message(pathKeys.join("."))
		});
		server = server[key];
	}
	if (typeof server !== "function") throw new TypeError(`Expected handler for action ${pathKeys.join(".")} to be a function. Received ${typeof server}.`);
	return server;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/actions/runtime/server.js
function getActionContext(context) {
	const callerInfo = getCallerInfo(context);
	const actionResultAlreadySet = Boolean(context.locals._actionPayload);
	let action = void 0;
	if (callerInfo && context.request.method === "POST" && !actionResultAlreadySet) action = {
		calledFrom: callerInfo.from,
		name: callerInfo.name,
		handler: async () => {
			const { manifest } = getFetchStateFromAPIContext(context);
			const callerInfoName = shouldAppendForwardSlash(manifest.trailingSlash, manifest.buildFormat) ? removeTrailingForwardSlash(callerInfo.name) : callerInfo.name;
			let baseAction;
			try {
				baseAction = await getAction(manifest, callerInfoName);
			} catch (error) {
				if (error instanceof Error && "name" in error && typeof error.name === "string" && error.name === ActionNotFoundError.name) return {
					data: void 0,
					error: new ActionError({ code: "NOT_FOUND" })
				};
				if (error instanceof URIError) return {
					data: void 0,
					error: new ActionError({ code: "NOT_FOUND" })
				};
				throw error;
			}
			const bodySizeLimit = manifest.actionBodySizeLimit;
			let input;
			try {
				input = await parseRequestBody(context.request, bodySizeLimit);
			} catch (e) {
				if (e instanceof ActionError) return {
					data: void 0,
					error: e
				};
				if (e instanceof TypeError) return {
					data: void 0,
					error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" })
				};
				if (e instanceof SyntaxError) return {
					data: void 0,
					error: new ActionError({
						code: "BAD_REQUEST",
						message: "Invalid JSON request body"
					})
				};
				throw e;
			}
			const omitKeys = [
				"props",
				"getActionResult",
				"callAction",
				"redirect"
			];
			const actionAPIContext = Object.create(Object.getPrototypeOf(context), Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(context)).filter(([key]) => !omitKeys.includes(key))));
			Reflect.set(actionAPIContext, ACTION_API_CONTEXT_SYMBOL, true);
			return baseAction.bind(actionAPIContext)(input);
		}
	};
	function setActionResult(actionName, actionResult) {
		context.locals._actionPayload = {
			actionResult,
			actionName
		};
	}
	return {
		action,
		setActionResult,
		serializeActionResult,
		deserializeActionResult
	};
}
function getCallerInfo(ctx) {
	if (ctx.routePattern === "/_actions/[...path]") return {
		from: "rpc",
		name: ctx.url.pathname.replace(/^.*\/_actions\//, "")
	};
	const queryParam = ctx.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
	if (queryParam) return {
		from: "form",
		name: queryParam
	};
}
async function parseRequestBody(request, bodySizeLimit) {
	const contentType = request.headers.get("content-type");
	const contentLengthHeader = request.headers.get("content-length");
	const contentLength = contentLengthHeader ? Number.parseInt(contentLengthHeader, 10) : void 0;
	const hasContentLength = typeof contentLength === "number" && Number.isFinite(contentLength);
	if (!contentType) return void 0;
	if (hasContentLength && contentLength > bodySizeLimit) throw new ActionError({
		code: "CONTENT_TOO_LARGE",
		message: `Request body exceeds ${bodySizeLimit} bytes`
	});
	try {
		if (hasContentType(contentType, formContentTypes)) {
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				return await new Request(request.url, {
					method: request.method,
					headers: request.headers,
					body: toArrayBuffer(body)
				}).formData();
			}
			return await request.clone().formData();
		}
		if (hasContentType(contentType, ["application/json"])) {
			if (contentLength === 0) return void 0;
			if (!hasContentLength) {
				const body = await readBodyWithLimit(request.clone(), bodySizeLimit);
				if (body.byteLength === 0) return void 0;
				return JSON.parse(new TextDecoder().decode(body));
			}
			return await request.clone().json();
		}
	} catch (e) {
		if (e instanceof BodySizeLimitError) throw new ActionError({
			code: "CONTENT_TOO_LARGE",
			message: `Request body exceeds ${bodySizeLimit} bytes`
		});
		throw e;
	}
	throw new TypeError("Unsupported content type");
}
var ACTION_API_CONTEXT_SYMBOL = /* @__PURE__ */ Symbol.for("astro.actionAPIContext");
var formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
function hasContentType(contentType, expected) {
	const type = contentType.split(";")[0].toLowerCase();
	return expected.some((t) => type === t);
}
function serializeActionResult(res) {
	if (res.error) {
		if (Object.assign({
			"ASSETS_PREFIX": void 0,
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SITE": "https://deepseek.playform.cloud",
			"SSR": true
		}, {})?.DEV) actionResultErrorStack.set(res.error.stack);
		let body2;
		if (res.error instanceof ActionInputError) body2 = {
			type: res.error.type,
			issues: res.error.issues,
			fields: res.error.fields
		};
		else body2 = {
			...res.error,
			message: res.error.message
		};
		return {
			type: "error",
			status: res.error.status,
			contentType: "application/json",
			body: JSON.stringify(body2)
		};
	}
	if (res.data === void 0) return {
		type: "empty",
		status: 204
	};
	let body;
	try {
		body = stringify(res.data, { URL: (value) => value instanceof URL && value.href });
	} catch (e) {
		let hint = ActionsReturnedInvalidDataError.hint;
		if (res.data instanceof Response) hint = REDIRECT_STATUS_CODES.includes(res.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes";
		throw new AstroError({
			...ActionsReturnedInvalidDataError,
			message: ActionsReturnedInvalidDataError.message(String(e)),
			hint
		});
	}
	return {
		type: "data",
		status: 200,
		contentType: "application/json+devalue",
		body
	};
}
function toArrayBuffer(buffer) {
	const copy = new Uint8Array(buffer.byteLength);
	copy.set(buffer);
	return copy.buffer;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/actions/handler.js
function handleAction(apiContext, state) {
	markFeatureUsed(state.manifest, FetchFeatures.actions);
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return Promise.resolve(invalidEncodingResponse);
	if (apiContext.isPrerendered) return;
	const { action, setActionResult } = getActionContext(apiContext);
	if (!action) return;
	if (state.manifest.checkOrigin && isForbiddenCrossOriginRequest(apiContext.request, apiContext.url, apiContext.isPrerendered)) return Promise.resolve(createCrossOriginForbiddenResponse(apiContext.request));
	return executeAction(action, setActionResult);
}
async function executeAction(action, setActionResult) {
	const serialized = serializeActionResult(await action.handler());
	if (action.calledFrom === "rpc") {
		if (serialized.type === "empty") return new Response(null, { status: serialized.status });
		return new Response(serialized.body, {
			status: serialized.status,
			headers: { "Content-Type": serialized.contentType }
		});
	}
	setActionResult(action.name, serialized);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/3xx.js
function redirectTemplate({ status, absoluteLocation, relativeLocation, from }) {
	const delay = status === 302 ? 2 : 0;
	const rel = escape(String(relativeLocation));
	return `<!doctype html>
<title>Redirecting to: ${rel}</title>
<meta http-equiv="refresh" content="${delay};url=${rel}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${escape(String(absoluteLocation))}">
<body>
	<a href="${rel}">Redirecting ${from ? `from <code>${escape(from)}</code> ` : ""}to <code>${rel}</code></a>
</body>`;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/trailing-slash-handler.js
function handleTrailingSlash(state) {
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return invalidEncodingResponse;
	const url = new URL(state.request.url);
	const redirect = redirectTrailingSlash(state.manifest.trailingSlash, url.pathname);
	if (redirect === url.pathname) return;
	const addCookieHeader = state.renderOptions.addCookieHeader;
	const status = state.request.method === "GET" ? 301 : 308;
	const location = redirect + url.search;
	const response = new Response(redirectTemplate({
		status,
		relativeLocation: location,
		absoluteLocation: location,
		from: state.request.url
	}), {
		status,
		headers: { location }
	});
	prepareResponse(response, { addCookieHeader });
	return response;
}
function redirectTrailingSlash(trailingSlash, pathname) {
	if (pathname === "/" || isInternalPath(pathname)) return pathname;
	const path = collapseDuplicateTrailingSlashes(pathname, trailingSlash !== "never");
	if (path !== pathname) return path;
	if (trailingSlash === "ignore") return pathname;
	if (trailingSlash === "always" && !hasFileExtension(pathname)) return appendForwardSlash(pathname);
	if (trailingSlash === "never") return removeTrailingForwardSlash(pathname);
	return pathname;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cache/provider.js
var cacheProviderMemo = createAsyncManifestMemo(async (manifest) => {
	if (manifest.cacheProvider) {
		const factory = (await manifest.cacheProvider())?.default || null;
		return factory ? factory(manifest.cacheConfig?.options) : null;
	}
	return null;
});
function getCacheProvider(manifest) {
	return cacheProviderMemo.get(manifest);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cache/runtime/utils.js
function defaultSetHeaders(options) {
	const headers = new Headers();
	const directives = [];
	if (options.maxAge !== void 0) directives.push(`max-age=${options.maxAge}`);
	if (options.swr !== void 0) directives.push(`stale-while-revalidate=${options.swr}`);
	if (directives.length > 0) headers.set("CDN-Cache-Control", directives.join(", "));
	if (options.tags && options.tags.length > 0) headers.set("Cache-Tag", options.tags.join(", "));
	if (options.lastModified) headers.set("Last-Modified", options.lastModified.toUTCString());
	if (options.etag) headers.set("ETag", options.etag);
	return headers;
}
function isLiveDataEntry(value) {
	return value != null && typeof value === "object" && "id" in value && "data" in value && "cacheHint" in value;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cache/runtime/cache.js
var APPLY_HEADERS = /* @__PURE__ */ Symbol.for("astro:cache:apply");
var IS_ACTIVE = /* @__PURE__ */ Symbol.for("astro:cache:active");
var AstroCache = class {
	#options = {};
	#tags = /* @__PURE__ */ new Set();
	#disabled = false;
	#provider;
	enabled = true;
	constructor(provider) {
		this.#provider = provider;
	}
	set(input) {
		if (input === false) {
			this.#disabled = true;
			this.#tags.clear();
			this.#options = {};
			return;
		}
		this.#disabled = false;
		let options;
		if (isLiveDataEntry(input)) {
			if (!input.cacheHint) return;
			options = input.cacheHint;
		} else options = input;
		if ("maxAge" in options && options.maxAge !== void 0) this.#options.maxAge = options.maxAge;
		if ("swr" in options && options.swr !== void 0) this.#options.swr = options.swr;
		if ("etag" in options && options.etag !== void 0) this.#options.etag = options.etag;
		if (options.lastModified !== void 0) {
			if (!this.#options.lastModified || options.lastModified > this.#options.lastModified) this.#options.lastModified = options.lastModified;
		}
		if (options.tags) for (const tag of options.tags) this.#tags.add(tag);
	}
	get tags() {
		return [...this.#tags];
	}
	/**
	* Get the current cache options (read-only snapshot).
	* Includes all accumulated options: maxAge, swr, tags, etag, lastModified.
	*/
	get options() {
		return {
			...this.#options,
			tags: this.tags
		};
	}
	async invalidate(input) {
		if (!this.#provider) throw new AstroError(CacheNotEnabled);
		let options;
		if (isLiveDataEntry(input)) options = { tags: input.cacheHint?.tags ?? [] };
		else options = input;
		return this.#provider.invalidate(options);
	}
	/** @internal */
	[APPLY_HEADERS](response, request) {
		if (this.#disabled) return;
		const finalOptions = {
			...this.#options,
			tags: this.tags
		};
		if (finalOptions.maxAge === void 0 && !finalOptions.tags?.length) return;
		const headers = this.#provider?.setHeaders?.(finalOptions, request) ?? defaultSetHeaders(finalOptions);
		for (const [key, value] of headers) response.headers.set(key, value);
		if (!response.headers.has("Cache-Control") && !response.headers.has("Expires") && (response.headers.has("Last-Modified") || response.headers.has("ETag"))) response.headers.set("Cache-Control", "no-cache");
	}
	/** @internal */
	get [IS_ACTIVE]() {
		return !this.#disabled && (this.#options.maxAge !== void 0 || this.#tags.size > 0);
	}
};
function applyCacheHeaders(cache, response, request) {
	if (APPLY_HEADERS in cache) cache[APPLY_HEADERS](response, request);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/parts.js
var ROUTE_DYNAMIC_SPLIT = /\[(.+?\(.+?\)|.+?)\]/;
var ROUTE_SPREAD = /^\.{3}.+$/;
function getParts(part, file) {
	const result = [];
	part.split(ROUTE_DYNAMIC_SPLIT).map((str, i) => {
		if (!str) return;
		const dynamic = i % 2 === 1;
		const [, content] = dynamic ? /([^(]+)$/.exec(str) || [null, null] : [null, str];
		if (!content || dynamic && !/^(?:\.\.\.)?[\w$]+$/.test(content)) throw new Error(`Invalid route ${file} \u2014 parameter name must match /^[a-zA-Z0-9_$]+$/`);
		result.push({
			content,
			dynamic,
			spread: dynamic && ROUTE_SPREAD.test(content)
		});
	});
	return result;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cache/runtime/route-matching.js
function compileCacheRoutes(routes, base, trailingSlash) {
	const compiled = Object.entries(routes).map(([path, options]) => {
		const segments = removeLeadingForwardSlash(path).split("/").filter(Boolean).map((s) => getParts(s, path));
		return {
			pattern: getPattern(segments, base, trailingSlash),
			options,
			segments,
			route: path
		};
	});
	compiled.sort((a, b) => routeComparator({
		segments: a.segments,
		route: a.route,
		type: "page"
	}, {
		segments: b.segments,
		route: b.route,
		type: "page"
	}));
	return compiled;
}
function matchCacheRoute(pathname, compiledRoutes) {
	for (const route of compiledRoutes) if (route.pattern.test(pathname)) return route.options;
	return null;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/cache/handler.js
var CACHE_KEY = "cache";
function provideCache(state) {
	const manifest = state.manifest;
	if (!manifest.cacheConfig) {
		state.provide(CACHE_KEY, { create: () => new DisabledAstroCache(state.logger) });
		return;
	}
	if (getEnvironment(manifest).runtimeMode === "development") {
		state.provide(CACHE_KEY, { create: () => new NoopAstroCache() });
		return;
	}
	return provideCacheAsync(state, manifest);
}
async function provideCacheAsync(state, manifest) {
	const cacheProvider = await getCacheProvider(manifest);
	state.provide(CACHE_KEY, { create() {
		const cache = new AstroCache(cacheProvider);
		if (manifest.cacheConfig?.routes) {
			const matched = matchCacheRoute(state.pathname, getCompiledCacheRoutes(manifest));
			if (matched) cache.set(matched);
		}
		return cache;
	} });
}
async function handleCache(state, next) {
	markFeatureUsed(state.manifest, FetchFeatures.cache);
	if (!state.manifest.cacheProvider) return next();
	const cache = state.resolve(CACHE_KEY);
	const cacheProvider = await getCacheProvider(state.manifest);
	if (cacheProvider?.onRequest) {
		const response2 = await cacheProvider.onRequest({
			request: state.request,
			url: new URL(state.request.url),
			waitUntil: state.renderOptions.waitUntil,
			logger: {
				info(msg) {
					state.logger.info("cache", msg);
				},
				warn(msg) {
					state.logger.warn("cache", msg);
				},
				error(msg) {
					state.logger.error("cache", msg);
				}
			}
		}, async () => {
			const res = await next();
			applyCacheHeaders(cache, res, state.request);
			return res;
		});
		response2.headers.delete("CDN-Cache-Control");
		response2.headers.delete("Cache-Tag");
		return response2;
	}
	const response = await next();
	applyCacheHeaders(cache, response, state.request);
	return response;
}
var compiledCacheRoutesMemo = createManifestMemo((manifest) => manifest.cacheConfig?.routes ? compileCacheRoutes(manifest.cacheConfig.routes, manifest.base, manifest.trailingSlash) : []);
function getCompiledCacheRoutes(manifest) {
	return compiledCacheRoutesMemo.get(manifest);
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/redirects/render.js
function isExternalURL(url) {
	return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("//");
}
function redirectIsExternal(redirect) {
	if (typeof redirect === "string") return isExternalURL(redirect);
	else return isExternalURL(redirect.destination);
}
function computeRedirectStatus(method, redirect, redirectRoute) {
	return redirectRoute && typeof redirect === "object" ? redirect.status : method === "GET" ? 301 : 308;
}
function resolveRedirectTarget(params, redirect, redirectRoute, trailingSlash) {
	if (typeof redirectRoute !== "undefined") return getRouteGenerator(redirectRoute.segments, trailingSlash)(params) || redirectRoute?.pathname || "/";
	else if (typeof redirect === "string") {
		if (redirectIsExternal(redirect)) return redirect;
		else {
			let target = redirect;
			for (const param of Object.keys(params)) {
				const paramValue = params[param];
				target = target.replace(`[${param}]`, () => paramValue).replace(`[...${param}]`, () => paramValue);
			}
			return target;
		}
	} else if (typeof redirect === "undefined") return "/";
	return redirect.destination;
}
async function renderRedirect(state) {
	markFeatureUsed(state.manifest, FetchFeatures.redirects);
	const { redirect, redirectRoute } = state.routeData;
	const status = computeRedirectStatus(state.request.method, redirect, redirectRoute);
	const headers = { location: encodeURI(resolveRedirectTarget(state.params, redirect, redirectRoute, state.manifest.trailingSlash)) };
	if (redirect && redirectIsExternal(redirect)) {
		if (typeof redirect === "string") return Response.redirect(redirect, status);
		else return Response.redirect(redirect.destination, status);
	}
	return new Response(null, {
		status,
		headers
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/handler.js
function logRequestFromState(state, payload) {
	if (state.logRequest) state.logRequest(payload);
	else getEnvironment(state.manifest).logRequest(state.manifest, payload);
}
function actionsAndPages(state, ctx) {
	if (!state.skipMiddleware) {
		const actionResult = handleAction(ctx, state);
		if (actionResult) return actionResult.then((response) => response ?? handlePages(state, ctx));
	}
	return handlePages(state, ctx);
}
async function handleRequest(state) {
	await getResolvedLogger(state.manifest);
	markFeatureUsed(state.manifest, ALL_FETCH_FEATURES);
	const invalidEncodingResponse = rejectInvalidEncoding(state);
	if (invalidEncodingResponse) return invalidEncodingResponse;
	const trailingSlashRedirect = handleTrailingSlash(state);
	if (trailingSlashRedirect) return trailingSlashRedirect;
	if (!state.routeData) return renderErrorFromState(state, state.request, {
		...state.renderOptions,
		status: 404,
		pathname: state.pathname
	});
	return render(state);
}
async function render(state) {
	const routeData = state.routeData;
	const pathname = state.pathname;
	const request = state.request;
	const { addCookieHeader } = state.renderOptions;
	state.status = getDefaultStatusCode(state.manifest, routeData, pathname);
	let response;
	let finalizeError;
	try {
		const sessionP = state.manifest.sessionConfig ? provideSession(state) : void 0;
		const cacheP = provideCache(state);
		if (sessionP || cacheP) await Promise.all([sessionP, cacheP]);
		markFeatureUsed(state.manifest, FetchFeatures.sessions);
		if (routeData.type === "redirect") {
			const redirectResponse = await renderRedirect(state);
			logRequestFromState(state, {
				pathname,
				method: request.method,
				statusCode: redirectResponse.status,
				isRewrite: false,
				timeStart: state.timeStart
			});
			prepareResponse(redirectResponse, { addCookieHeader });
			state.logger.flush();
			return redirectResponse;
		}
		const i18n = getI18n(state.manifest);
		if (!state.manifest.cacheProvider) {
			markFeatureUsed(state.manifest, FetchFeatures.cache);
			response = await handleMiddleware(state, actionsAndPages);
			if (i18n) response = await finalizeI18n(i18n, state, response);
		} else {
			const runPipeline = async () => {
				let res = await handleMiddleware(state, actionsAndPages);
				if (i18n) res = await finalizeI18n(i18n, state, res);
				return res;
			};
			response = await handleCache(state, runPipeline);
		}
		logRequestFromState(state, {
			pathname,
			method: request.method,
			statusCode: response.status,
			isRewrite: state.isRewriting,
			timeStart: state.timeStart
		});
	} catch (err) {
		state.logger.error(null, err.stack || err.message || String(err));
		return renderErrorFromState(state, request, {
			...state.renderOptions,
			status: 500,
			error: err,
			pathname: state.pathname
		});
	} finally {
		try {
			const finalize = state.finalizeAll();
			if (finalize) await finalize;
		} catch (err) {
			finalizeError = err;
			state.logger.error(null, err.stack || err.message || String(err));
		}
	}
	if (finalizeError) return renderErrorFromState(state, request, {
		...state.renderOptions,
		status: 500,
		error: finalizeError,
		pathname: state.pathname
	});
	if (REROUTABLE_STATUS_CODES.includes(response.status) && response.body === null && !state.skipErrorReroute) return renderErrorFromState(state, request, {
		...state.renderOptions,
		response,
		status: response.status,
		error: response.status === 500 ? null : void 0,
		pathname: state.pathname
	});
	prepareResponse(response, { addCookieHeader });
	state.logger.flush();
	return response;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/fetch/default-handler.js
var DefaultFetchHandler = class {
	#manifest;
	/**
	* `BaseApp` passes itself so states resolve that app's manifest ahead of
	* the ambient one; generated builds construct the handler with no
	* arguments and use the ambient manifest.
	*/
	constructor(app) {
		this.#manifest = app?.manifest;
	}
	fetch = (request) => {
		const options = getRenderOptions(request);
		return handleRequest(new FetchState(this.#manifest ?? getAmbientManifest(), request, options));
	};
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/routing/match-request.js
function safeDecodePathname(manifest, pathname) {
	try {
		return validateAndDecodePathname(pathname);
	} catch (e) {
		new AstroIntegrationLogger(getLogger(manifest).options, manifest.adapterName).debug(e.toString());
		try {
			return decodeURI(pathname);
		} catch {
			return pathname;
		}
	}
}
function matchRequest(manifest, request, allowPrerenderedRoutes = false) {
	const url = new URL(request.url);
	if (manifest.assets.has(url.pathname)) return void 0;
	let pathname = computePathnameFromDomain(request, url, manifest.i18n, manifest.base, manifest.trailingSlash, manifest.allowedDomains, getLogger(manifest));
	if (!pathname) pathname = prependForwardSlash(stripRequestBase(url.pathname, manifest.base));
	pathname = safeDecodePathname(manifest, pathname);
	const routeData = matchRoute(manifest, pathname);
	if (!routeData) return void 0;
	if (allowPrerenderedRoutes) return routeData;
	if (routeData.prerender) {
		if (routeData.params.length > 0) return matchAllRoutes(manifest, pathname).find((r) => !r.prerender);
		return;
	}
	return routeData;
}
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/app/base.js
var BaseApp = class BaseApp {
	manifest;
	#adapterLogger;
	baseWithoutTrailingSlash;
	/**
	* The streaming flag passed to the constructor, surfaced through the
	* protected `resolveStreaming()` hook and fed into the internal
	* `FetchState` facade hooks on the fast path.
	*/
	#streaming;
	/**
	* The handler that turns incoming `Request` objects into `Response`s.
	* Defaults to a `DefaultFetchHandler` pinned to this app and can be
	* overridden via `setFetchHandler` — typically by the bundled
	* entrypoint after importing `virtual:astro:fetchable`.
	*/
	#fetchHandler;
	#errorHandler;
	/**
	* Whether a custom fetch handler (from `src/fetch.ts`) has been set
	* via `setFetchHandler`. When false, the `DefaultFetchHandler` is
	* in use and all features are implicitly active.
	*/
	#hasCustomFetchHandler = false;
	/**
	* Whether the missing-feature check has already run. We only want
	* to warn once — after the first request in dev, or at build end.
	*/
	#featureCheckDone = false;
	get logger() {
		return getLogger(this.manifest);
	}
	/**
	* Route data derived from the manifest, used for route matching. Reads and
	* writes go through the single per-manifest route table, so HMR updates are
	* visible to every consumer at once.
	*/
	get manifestData() {
		return getRouteTable(this.manifest);
	}
	set manifestData(routesList) {
		updateRouteTable(this.manifest, routesList.routes);
	}
	get adapterLogger() {
		const currentOptions = this.logger.options;
		if (!this.#adapterLogger || this.#adapterLogger.options !== currentOptions) this.#adapterLogger = new AstroIntegrationLogger(currentOptions, this.manifest.adapterName);
		return this.#adapterLogger;
	}
	constructor(manifest, streaming = true) {
		this.manifest = manifest;
		this.baseWithoutTrailingSlash = removeTrailingForwardSlash(manifest.base);
		this.#streaming = streaming;
		getRouteTable(manifest);
		getLogger(manifest);
		this.#fetchHandler = new DefaultFetchHandler(this);
		this.#errorHandler = this.createErrorHandler();
	}
	/**
	* Resolves the user-configured logger destination from the manifest and
	* returns the logger. Lazy and only resolves once; safe to call before
	* the first render (adapters use this to log startup messages through
	* the configured destination).
	*/
	getLogger() {
		return getResolvedLogger(this.manifest);
	}
	/**
	* The streaming flag fed into the internal `FetchState` facade hooks on
	* the fast path. Returns the constructor flag by
	* default; `BuildApp` overrides this to return `undefined` so streaming
	* falls through to the environment default (`manifest.serverLike`).
	*/
	resolveStreaming() {
		return this.#streaming;
	}
	/**
	* Override the fetch handler used to dispatch requests. Entrypoints
	* call this with the default export of `virtual:astro:fetchable` to
	* plug in a user-authored handler from `src/fetch.ts`.
	*/
	setFetchHandler(handler) {
		this.#fetchHandler = handler;
		this.#hasCustomFetchHandler = !(handler instanceof DefaultFetchHandler);
	}
	/**
	* Returns the error handler used by this app. The default is a thin
	* bridge over the functional error API — strategy selection (production
	* default / dev / build) is environment-driven inside `renderErrorPage`.
	* External subclasses can override this to customize error rendering.
	*/
	createErrorHandler() {
		return { renderError: (request, options) => renderErrorPage(this.manifest, request, options) };
	}
	/**
	* Resets the cached adapter logger so it picks up a new logger instance.
	* Used by BuildApp when the logger is replaced via setOptions().
	*/
	resetAdapterLogger() {
		this.#adapterLogger = void 0;
	}
	getAllowedDomains() {
		return this.manifest.allowedDomains;
	}
	matchesAllowedDomains(forwardedHost, protocol) {
		return BaseApp.validateForwardedHost(forwardedHost, this.manifest.allowedDomains, protocol);
	}
	static validateForwardedHost(forwardedHost, allowedDomains, protocol) {
		if (!allowedDomains || allowedDomains.length === 0) return false;
		try {
			const testUrl = new URL(`${protocol || "https"}://${forwardedHost}`);
			return allowedDomains.some((pattern) => {
				return matchPattern(testUrl, pattern);
			});
		} catch {
			return false;
		}
	}
	set setManifestData(newManifestData) {
		updateRouteTable(this.manifest, newManifestData.routes);
	}
	removeBase(pathname) {
		return stripRequestBase(pathname, this.manifest.base);
	}
	/**
	* Fully decodes a pathname, falling back to a single decode and then the raw pathname
	* when validation fails. Adapter matching runs before `render()`, so it must not throw
	* for request input that render-time validation handles.
	*/
	safeDecodePathname(pathname) {
		try {
			return validateAndDecodePathname(pathname);
		} catch (e) {
			this.adapterLogger.debug(e.toString());
			try {
				return decodeURI(pathname);
			} catch {
				return pathname;
			}
		}
	}
	/**
	* Extracts the base-stripped, decoded pathname from a request.
	* Used by adapters to compute the pathname for dev-mode route matching.
	*/
	getPathnameFromRequest(request) {
		const url = new URL(request.url);
		const pathname = prependForwardSlash(this.removeBase(url.pathname));
		return this.safeDecodePathname(pathname);
	}
	/**
	* Given a `Request`, it returns the `RouteData` that matches its `pathname`. By default, prerendered
	* routes aren't returned, even if they are matched.
	*
	* When `allowPrerenderedRoutes` is `true`, the function returns matched prerendered routes too.
	* @param request
	* @param allowPrerenderedRoutes
	*/
	match(request, allowPrerenderedRoutes = false) {
		return matchRequest(this.manifest, request, allowPrerenderedRoutes);
	}
	/**
	* A matching route function to use in the development server.
	* Contrary to the `.match` function, this function resolves props and params, returning the correct
	* route based on the priority, segments. It also returns the correct, resolved pathname.
	* @param pathname
	*/
	devMatch(pathname) {}
	computePathnameFromDomain(request) {
		return computePathnameFromDomain(request, new URL(request.url), this.manifest.i18n, this.manifest.base, this.manifest.trailingSlash, this.manifest.allowedDomains, this.logger);
	}
	async render(request, { addCookieHeader = false, clientAddress = Reflect.get(request, clientAddressSymbol), locals, prerenderedErrorPageFetch = fetch, routeData, waitUntil } = {}) {
		await getResolvedLogger(this.manifest);
		if (routeData) {
			this.logger.debug("router", "The adapter " + this.manifest.adapterName + " provided a custom RouteData for ", request.url);
			this.logger.debug("router", "RouteData");
			this.logger.debug("router", routeData);
		}
		if (locals) {
			if (typeof locals !== "object") {
				const error = new AstroError(LocalsNotAnObject);
				this.logger.error(null, error.stack);
				return this.renderError(request, {
					addCookieHeader,
					clientAddress,
					prerenderedErrorPageFetch,
					locals: void 0,
					routeData,
					waitUntil,
					status: 500,
					error
				});
			}
		}
		if (!routeData) {
			const domainPathname = this.computePathnameFromDomain(request);
			if (domainPathname) routeData = matchRoute(this.manifest, this.safeDecodePathname(domainPathname));
		}
		const resolvedOptions = {
			addCookieHeader,
			clientAddress,
			prerenderedErrorPageFetch,
			locals,
			routeData,
			waitUntil
		};
		let response;
		if (this.#fetchHandler instanceof DefaultFetchHandler) response = await handleRequest(new FetchState(this.manifest, request, resolvedOptions, {
			streaming: this.resolveStreaming(),
			renderError: (req, opts) => this.renderError(req, opts),
			logRequest: (payload) => this.logThisRequest(payload)
		}));
		else {
			setRenderOptions(request, resolvedOptions);
			response = await this.#fetchHandler.fetch(request);
		}
		this.#warnMissingFeatures();
		if (response.headers.get("X-Astro-Error")) {
			response.headers.delete(ASTRO_ERROR_HEADER);
			return this.renderError(request, {
				addCookieHeader,
				clientAddress,
				prerenderedErrorPageFetch,
				locals,
				routeData,
				waitUntil,
				response,
				status: response.status,
				error: response.status === 500 ? null : void 0
			});
		}
		return response;
	}
	setCookieHeaders(response) {
		return getSetCookiesFromResponse(response);
	}
	/**
	* Reads all the cookies written by `Astro.cookie.set()` onto the passed response.
	* For example,
	* ```ts
	* for (const cookie_ of App.getSetCookieFromResponse(response)) {
	*     const cookie: string = cookie_
	* }
	* ```
	* @param response The response to read cookies from.
	* @returns An iterator that yields key-value pairs as equal-sign-separated strings.
	*/
	static getSetCookieFromResponse = getSetCookiesFromResponse;
	/**
	* If it is a known error code, try sending the according page (e.g. 404.astro / 500.astro).
	* This also handles pre-rendered /404 or /500 routes.
	*
	* Delegates to the app's configured `ErrorHandler`. To customize behavior
	* for a specific environment, override `createErrorHandler()` rather than
	* this method.
	*/
	async renderError(request, options) {
		return this.#errorHandler.renderError(request, options);
	}
	/**
	* One-shot check: after the first request with a custom `src/fetch.ts`,
	* compare `usedFeatures` against the manifest and warn about any
	* configured features the user's pipeline doesn't call.
	*/
	#warnMissingFeatures() {
		if (this.#featureCheckDone || !this.#hasCustomFetchHandler) return;
		this.#featureCheckDone = true;
		const manifest = this.manifest;
		const missing = [];
		const used = getUsedFeatures(this.manifest);
		if (manifest.routes.some((r) => r.routeData.type === "redirect") && !(used & FetchFeatures.redirects)) missing.push("redirects");
		if (manifest.sessionConfig && !(used & FetchFeatures.sessions)) missing.push("sessions");
		if (manifest.actions && !(used & FetchFeatures.actions)) missing.push("actions");
		if (manifest.middleware && !(used & FetchFeatures.middleware)) missing.push("middleware");
		if (manifest.i18n && manifest.i18n.strategy !== "manual" && !(used & FetchFeatures.i18n)) missing.push("i18n");
		if (manifest.cacheConfig && !(used & FetchFeatures.cache)) missing.push("cache");
		for (const feature of missing) this.logger.warn("router", `Your project uses ${feature}, but your custom src/fetch.ts does not call the ${feature}() handler. This feature will not work unless your fetch handler calls it.`);
	}
	getDefaultStatusCode(routeData, pathname) {
		return getDefaultStatusCode(this.manifest, routeData, pathname);
	}
	getManifest() {
		return this.manifest;
	}
	logThisRequest({ pathname, method, statusCode, isRewrite, timeStart }) {
		const timeEnd = performance.now();
		this.logRequest({
			pathname,
			method,
			statusCode,
			isRewrite,
			reqTime: timeEnd - timeStart
		});
	}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/core/build/app.js
var BuildApp = class extends BaseApp {
	#buildEnv;
	constructor(manifest, buildEnv) {
		super(manifest);
		this.#buildEnv = buildEnv;
	}
	isDev() {
		return true;
	}
	/**
	* Streaming falls through to the environment default
	* (`manifest.serverLike` for the build environment) — we can skip
	* streaming in SSG for performance, as writing strings is faster.
	*/
	resolveStreaming() {}
	setInternals(internals) {
		this.#buildEnv.setInternals(internals);
	}
	setOptions(options) {
		this.#buildEnv.setOptions(options);
		this.logger.setDestination(options.logger.options.destination);
		this.resetAdapterLogger();
	}
	getOptions() {
		return this.#buildEnv.getOptions();
	}
	getSettings() {
		return this.#buildEnv.getSettings();
	}
	/**
	* Route cache and component loader for `StaticPaths`. Defined on the app
	* (rather than reached through the functional core at the call site) so
	* they execute inside the prerender bundle's module graph: the default
	* prerenderer constructs `StaticPaths` from a different bundle, whose
	* copies of the core modules hold separate per-manifest state.
	*/
	get routeCache() {
		return getRouteCache(this.manifest);
	}
	getComponentByRoute(routeData) {
		return getEnvironment(this.manifest).getComponentByRoute(this.manifest, routeData);
	}
	logRequest(_options) {}
};
//#endregion
//#region node_modules/.pnpm/astro@7.3.6_@types+node@26.6.4_jiti@1.21.7_terser@5.49.2_yaml@2.9.1/node_modules/astro/dist/entrypoints/prerender.js
var buildEnv = createBuildEnvironment();
setEnvironment(manifest, buildEnv.env);
var app = new BuildApp(manifest, buildEnv);
//#endregion
export { app, manifest };
