import { $ as AstroError, F as InvalidComponentArgs, Z as UnavailableAstroGlobal, _ as addAttribute, d as renderSlot, f as renderSlotToString, g as renderAllHeadContent, h as maybeRenderHead, m as renderTemplate, nt as ASTRO_GENERATOR, s as renderComponent, t as spreadAttributes, v as createRenderInstruction, w as unescapeHTML } from "./server_DTTNCURM.mjs";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { ELEMENT_NODE, parse, renderSync, walkSync } from "ultrahtml";
// \0rolldown/runtime.js
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
// node_modules/.pnpm/astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1/node_modules/astro/dist/runtime/server/astro-component.js
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
// node_modules/.pnpm/astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1/node_modules/astro/dist/runtime/server/astro-global.js
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
// node_modules/.pnpm/astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1/node_modules/astro/dist/runtime/server/render/script.js
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
var $$PageHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHero;
	const { Title, Lede, Eyebrow, Level = 1 } = Astro.props;
	const Heading = Level === 1 ? "h1" : "h2";
	return renderTemplate`${maybeRenderHead($$result)}<header class="page-hero"> <div class="page-hero__head"> ${renderSlot($$result, $$slots["Mark"])} <div class="page-hero__text"> ${Eyebrow && renderTemplate`<p class="eyebrow">${Eyebrow}</p>`} ${renderComponent($$result, "Heading", Heading, {}, { "default": ($$result) => renderTemplate`${Title}` })} </div> </div> ${Astro.slots.has("Lede") ? renderTemplate`<div class="lede"> ${renderSlot($$result, $$slots["Lede"])} </div>` : Lede && renderTemplate`<p class="lede">${Lede}</p>`} <div class="page-hero__actions"> ${renderSlot($$result, $$slots["Actions"])} </div> </header>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/PageHero.astro", void 0);
// Source/Library/Content.ts
var Content = {
	Title: "The DeepSeek Harness plugin family",
	Short: "DSH family",
	Description: "See what every plugin does to the harness: the turn it runs in, the seam it stands at, and the bytes it changes. The DeepSeek Harness plugin family.",
	Lede: "The harness already has the slots. The family fills them, and this site shows every one: the turn, the seam, the bytes that change, and the ledger that proves it ran.",
	Repository: "https://github.com/PlayForm/DeepSeek",
	Licence: "CC0-1.0"
};
// Source/Library/Flag.ts
var Dev = process.env["SITE_DEV"] === "1" || process.env.NODE_ENV === "development";
// Source/Library/Link.ts
var Site = "https://deepseek.playform.cloud";
var Repository = "https://github.com/PlayForm/DeepSeek";
var Route = {
	Home: "/",
	Harness: "/harness/",
	Package: "/package/",
	Showcase: "/showcase/",
	Behavior: "/behavior/",
	Workbench: "/workbench/",
	Turn: "/turn/",
	Intervention: "/intervention/",
	Tutorial: "/tutorial/",
	Tool: "/tool/",
	Message: "/message/",
	Composition: "/composition/",
	Dashboard: "/dashboard/",
	Trace: "/trace/",
	Plugin: "/plugin/",
	Observatory: "/explore/",
	Timeline: "/tl/",
	Setup: "/setup/",
	Reference: "/reference/",
	CaseStudy: "/case-study/",
	Marketplace: "/marketplace/",
	Connect: "/connect/",
	Search: "/search/",
	Library: "/library/",
	NotFound: "/404/"
};
var Primary = [
	{
		Href: Route.Package,
		Label: "Package"
	},
	{
		Href: Route.Showcase,
		Label: "Showcase"
	},
	{
		Href: Route.Behavior,
		Label: "Behavior"
	},
	{
		Href: Route.Trace,
		Label: "Trace"
	},
	{
		Href: Route.Setup,
		Label: "Setup"
	},
	{
		Href: Route.Reference,
		Label: "Reference"
	}
];
var Sitemap = [
	{
		Href: Route.Home,
		Label: "Overview"
	},
	{
		Href: Route.Search,
		Label: "Search"
	},
	{
		Href: Route.Package,
		Label: "Package"
	},
	{
		Href: Route.Showcase,
		Label: "Showcase"
	},
	{
		Href: Route.Behavior,
		Label: "Behavior"
	},
	{
		Href: Route.Workbench,
		Label: "Workbench"
	},
	{
		Href: Route.Harness,
		Label: "Harness"
	},
	{
		Href: Route.Tutorial,
		Label: "Tutorial"
	},
	{
		Href: Route.Trace,
		Label: "Trace"
	},
	{
		Href: Route.Timeline,
		Label: "Timeline"
	},
	{
		Href: Route.Setup,
		Label: "Setup"
	},
	{
		Href: Route.CaseStudy,
		Label: "Case study"
	},
	{
		Href: Route.Connect,
		Label: "Connect"
	},
	...Dev ? [{
		Href: Route.Library,
		Label: "Component"
	}] : []
];
function PackageHref(Slug) {
	return `/package/${Slug}/`;
}
function SeamHref(Seam) {
	return `/behavior/${Seam.replace(/\//g, "-")}/`;
}
function IsCurrent(Path, Href) {
	return Href === "/" ? Path === "/" : Path.startsWith(Href.replace(/\/$/, ""));
}
// Source/Content/Summary.ts
var Summary = {
	"client-dsh-panel-family": "The panel the family's UI lives in, with slots for sections and overlays",
	"client-dsh-panel-family-host": "Gives the panel live data and its one trusted write path",
	"client-dsh-workspace-live": "The workspace view that updates on events, not on a timer",
	"hook-dsh-batch-decision": "Decides when a batch of edits is ready to apply",
	"hook-dsh-cargo-governor": "Keeps Cargo.toml in order without asking",
	"hook-dsh-ccr": "Compresses oversized tool output, caches it, and retrieves it on demand",
	"hook-dsh-comment-filter": "Strips code comments out of read results",
	"hook-dsh-convention-suggester": "Names the repo's conventions before the model breaks them",
	"hook-dsh-doc-suggester": "Suggests the documents a documentation task should touch",
	"hook-dsh-edit-suggester": "Suggests the files an edit is about to touch",
	"hook-dsh-graph-suggester": "Widens a suggestion from a symbol to everything connected to it",
	"hook-dsh-lesson-nudge": "Turns the idle moment after a turn into a self-review",
	"hook-dsh-live-containers": "Keeps live, editable blocks in the system prompt",
	"hook-dsh-normalize-dash": "Turns every unicode dash into a plain hyphen, live",
	"hook-dsh-normalize-ellipsis": "Turns the unicode ellipsis into three dots, live",
	"hook-dsh-normalize-fullwidth": "Turns fullwidth characters back into ASCII, live",
	"hook-dsh-normalize-invisible": "Removes invisible characters from model output",
	"hook-dsh-normalize-quotes": "Turns curly quotes into straight ones, live",
	"hook-dsh-normalize-spaces": "Turns exotic spaces into plain spaces, live",
	"hook-dsh-package-governor": "Keeps package.json in order without asking",
	"hook-dsh-package-pinner": "Pins every dependency to the version actually used",
	"hook-dsh-replay-suggester": "Shows what the model touched the last time it did this",
	"hook-dsh-search-suggester": "Suggests where to search before the model starts reading",
	"hook-dsh-test-suggester": "Suggests the tests a task should run",
	"hook-dsh-tool-coach": "Teaches the model to stop reading files through the terminal",
	"hook-dsh-workspace-approve": "Binds an approved proposal to its execution",
	"hook-dsh-workspace-audit": "Records what the workspace did, as events and ledger lines",
	"hook-dsh-workspace-govern": "Gates workspace changes before they happen",
	"hook-dsh-workspace-journal": "Keeps undo, checkpoints, and crash recovery",
	"hook-dsh-workspace-merge": "Merges a batch atomically, file by file",
	"hook-dsh-workspace-monitor": "Watches the workspace and sweeps it on a schedule",
	"hook-dsh-workspace-observe": "Observes the workspace so the family can reason about it",
	"hook-dsh-workspace-operate": "Turns intent into typed proposals: rename, connect, replace",
	"lib-dsh-conversation": "The conversation spine the family's clients share",
	"lib-dsh-core": "The shared core: normalization classes, contracts, and ledgers",
	"lib-dsh-pack": "The pattern pack format the suggesters read",
	"lib-dsh-trace": "The trace vocabulary the workspace family speaks",
	"lib-dsh-workspace-live": "Shared client machinery for the live workspace view",
	"plugin-dsh-batch-edit": "Applies a batch of edits as one reviewed change",
	"plugin-dsh-batchstate": "Holds the state of an open batch",
	"plugin-dsh-boot": "Mounts the family's plugins on a later turn, so boot does not wait on them",
	"plugin-dsh-cost": "Tracks what each run costs",
	"plugin-dsh-cost-analysis": "Reads the cost record and explains it",
	"plugin-dsh-factory": "Builds every plugin: config, tools, and seams",
	"plugin-dsh-feedback": "Collects honest feedback on a finished turn",
	"plugin-dsh-gitguard": "Refuses to touch a dirty tree",
	"plugin-dsh-ingester": "Applies what a batch decided",
	"plugin-dsh-lesson-review": "Turns a finished turn into a lesson",
	"plugin-dsh-normalize-file": "Normalizes files already on disk",
	"plugin-dsh-pass-on": "Prepares what a batch will hand over",
	"plugin-dsh-pattern": "The pattern graph behind every suggester",
	"plugin-dsh-queue": "Turns subagent work into a queue",
	"plugin-dsh-route": "Enforces the model route silently",
	"plugin-dsh-workspace": "The conversational surface of the workspace",
	"plugin-dsh-workspace-authority": "Licenses a change before it binds",
	"plugin-dsh-workspace-context": "Projects the context a task needs",
	"plugin-dsh-workspace-evidence": "Tracks what counts as evidence, and when it goes stale",
	"plugin-dsh-workspace-graph": "Builds the graph of the workspace's files",
	"plugin-dsh-workspace-reflect": "Reflects on the workspace state",
	"plugin-dsh-workspace-semantics": "Holds symbols, references, and dependencies"
};
function SummaryFor(Slug) {
	return Summary[Slug] ?? Summary[Slug.replace(/^ets-/, "")];
}
// Source/Library/Package.server.ts
var Submodule = "Module/DeepSeek";
function HoldsTrees(Directory) {
	return existsSync(join(Directory, "Classic", "packages")) && existsSync(join(Directory, "EffectTS", "packages"));
}
function FindRoot() {
	const Override = process.env["DSH_SOURCE_ROOT"];
	if (Override !== void 0 && Override !== "") {
		const Resolved = resolve(Override);
		if (!HoldsTrees(Resolved)) throw new Error(`DSH_SOURCE_ROOT points at ${Resolved}, which holds neither Classic/packages nor EffectTS/packages.`);
		return Resolved;
	}
	const Module = join(process.cwd(), Submodule);
	if (HoldsTrees(Module)) return Module;
	throw new Error("The package trees are not reachable. Run `pnpm Prepare` in Site/ to initialize the Module/DeepSeek submodule, or set DSH_SOURCE_ROOT to a monorepo checkout for a deliberate build against another tree.");
}
var Root = FindRoot();
var Trees = [{
	Family: "Classic",
	Directory: join(Root, "Classic", "packages")
}, {
	Family: "EffectTS",
	Directory: join(Root, "EffectTS", "packages")
}];
var KindOrder = [
	"plugin",
	"hook",
	"lib",
	"client",
	"base"
];
var Branch = "Current";
function DetectKind(Slug) {
	const Stem = Slug.replace(/^ets-/, "");
	return KindOrder.find((Kind) => Stem.startsWith(`${Kind}-`)) ?? "plugin";
}
function Summarize(Description) {
	const Head = Description.split("(")[0] ?? Description;
	const Trimmed = (Head.split(/(?:[.!?]\s)|(?:\s[\u2014\u2013]\s)/)[0] ?? Head).trim().replace(/[:,]$/, "");
	return Trimmed.length > 180 ? `${Trimmed.slice(0, 177).trimEnd()}...` : Trimmed;
}
function CountTests(Directory) {
	const Base = join(Directory, "Source", "Test");
	if (!existsSync(Base)) return 0;
	let Count = 0;
	for (const Entry of readdirSync(Base, {
		recursive: true,
		withFileTypes: true
	})) if (Entry.isFile() && Entry.name === "Test.ts") Count += 1;
	return Count;
}
function CountModules(Directory) {
	const Base = join(Directory, "Source", "Function");
	if (!existsSync(Base)) return 0;
	return readdirSync(Base).filter((Entry) => statSync(join(Base, Entry)).isFile()).length;
}
function ReadPackage(Family, Directory, Slug) {
	const Manifest = JSON.parse(readFileSync(join(Directory, "package.json"), "utf8"));
	const Description = Manifest.description ?? "";
	const Relative = Directory.slice(Root.length + 1);
	return {
		Slug,
		Family,
		Kind: DetectKind(Slug),
		Name: Manifest.name ?? Slug,
		Version: Manifest.version ?? "0.0.0",
		Private: Manifest.private === true,
		Licence: Manifest.license ?? "unlicensed",
		Description,
		Summary: (SummaryFor(Slug) ?? Summarize(Description)).trim(),
		Directory: Relative,
		Href: `/package/${Slug}/`,
		Source: `https://github.com/PlayForm/DeepSeek/tree/${Branch}/${Relative}`,
		Readme: existsSync(join(Directory, "README.md")),
		Scheme: existsSync(join(Directory, "SCHEME.md")),
		Patch: existsSync(join(Directory, "cordis.patch.yml")),
		Dependencies: Object.keys(Manifest.dependencies ?? {}),
		Tests: CountTests(Directory),
		Modules: CountModules(Directory)
	};
}
function LoadPackages() {
	const Roster = [];
	for (const { Family, Directory } of Trees) {
		if (!existsSync(Directory)) continue;
		for (const Slug of readdirSync(Directory).sort()) {
			const Package = join(Directory, Slug);
			if (statSync(Package).isDirectory() && existsSync(join(Package, "package.json"))) Roster.push(ReadPackage(Family, Package, Slug));
		}
	}
	return Roster;
}
function CountBy(Roster, Match) {
	return Roster.filter(Match).length;
}
var Package = LoadPackages();
var Count = {
	All: Package.length,
	Classic: CountBy(Package, (Entry) => Entry.Family === "Classic"),
	EffectTS: CountBy(Package, (Entry) => Entry.Family === "EffectTS"),
	Hook: CountBy(Package, (Entry) => Entry.Kind === "hook"),
	Plugin: CountBy(Package, (Entry) => Entry.Kind === "plugin"),
	Library: CountBy(Package, (Entry) => Entry.Kind === "lib"),
	Client: CountBy(Package, (Entry) => Entry.Kind === "client"),
	Base: CountBy(Package, (Entry) => Entry.Kind === "base"),
	Test: Package.reduce((Total, Entry) => Total + Entry.Tests, 0)
};
var Family = ["Classic", "EffectTS"];
var Kind = KindOrder;
function SelectFamily(Family) {
	return Package.filter((Entry) => Entry.Family === Family);
}
function SelectKind(Kind) {
	return Package.filter((Entry) => Entry.Kind === Kind);
}
// node_modules/.pnpm/astro-capo@0.0.1_astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1_/node_modules/astro-capo/src/capo/rules.ts
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
// node_modules/.pnpm/astro-capo@0.0.1_astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1_/node_modules/astro-capo/src/capo/index.ts
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
// node_modules/.pnpm/astro-capo@0.0.1_astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1_/node_modules/astro-capo/src/Head.ts
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
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"> <meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/node_modules/.pnpm/astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/node_modules/.pnpm/astro@7.4.2_@types+node@26.6.6_esbuild@0.28.1_jiti@1.21.7_sass@1.106.1_terser@5.51.2_yaml@2.9.1/node_modules/astro/components/ClientRouter.astro", void 0);
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { Title = Content.Title, Description = Content.Description } = Astro.props;
	const Path = Astro.url.pathname;
	const Canonical = new URL(Path, Site).href;
	const Full = Title === Content.Title ? Title : `${Title} - ${Content.Short}`;
	const Year = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`<html lang="en" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result) => renderTemplate` <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <script crossorigin=\"anonymous\">
			// Set the theme before the first paint: a stored choice wins, and with
			// no stored choice the operating system decides.
			const Stored = localStorage.getItem("theme");
			const Dark =
				Stored === "dark" ||
				(Stored === null && window.matchMedia("(prefers-color-scheme: dark)").matches);

			document.documentElement.dataset.theme = Dark ? "dark" : "light";
		<\/script> <title>${Full}</title> <meta name="description"${addAttribute(Description, "content")}> <link rel="canonical"${addAttribute(Canonical, "href")} crossorigin=\"anonymous\"> <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"> <meta name="theme-color" content="#0b0f19" media="(prefers-color-scheme: dark)"> <meta name="format-detection" content="telephone=no"> <meta name="twitter:dnt" content="on"> <meta property="og:type" content="website"> <meta property="og:site_name"${addAttribute(Content.Short, "content")}> <meta property="og:title"${addAttribute(Full, "content")}> <meta property="og:description"${addAttribute(Description, "content")}> <meta property="og:url"${addAttribute(Canonical, "content")}> <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin=\"anonymous\"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin crossorigin=\"anonymous\"> <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" crossorigin=\"anonymous\"> <link rel="manifest" href="/Manifest.json" crossorigin="use-credentials">  <script crossorigin=\"anonymous\" type="application/ld+json">${unescapeHTML(JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: Content.Title,
		url: Site,
		description: Content.Description
	}))}<\/script>${renderSlot($$result, $$slots["Head"])} ${renderComponent($$result, "ClientRouter", $$ClientRouter, {})} ` })} ${maybeRenderHead($$result)}<body> <a class="skip" href="#main">
Skip to content
</a> <header class="shell-header"> <div class="page shell-header__inner"> <a class="shell-brand"${addAttribute(Route.Home, "href")}> <span class="shell-brand__mark" aria-hidden="true">
DSH
</span> <span class="shell-brand__name">${Content.Short}</span> </a> <nav class="shell-nav" aria-label="Primary"> <ul> ${Primary.map((Entry) => renderTemplate`<li> <a${addAttribute(Entry.Href, "href")}${addAttribute(IsCurrent(Path, Entry.Href) ? "page" : void 0, "aria-current")}> ${Entry.Label} </a> </li>`)} </ul> </nav> <a class="shell-repository"${addAttribute(Route.Search, "href")}>
Search
</a> <a class="shell-repository"${addAttribute(Repository, "href")}>
GitHub
</a> <button class="shell-theme" type="button" data-theme-toggle aria-label="Switch between the light and dark theme"> <span class="shell-theme__cell" data-theme-cell="light">
Light
</span> <span class="shell-theme__cell" data-theme-cell="dark">
Dark
</span> </button> </div> </header> <main id="main" class="page"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="shell-footer"> <div class="page shell-footer__inner"> <div class="shell-footer__brand"> <p class="shell-footer__name">${Content.Title}</p> <p class="shell-footer__note"> ${Count.All} total in two releases. Source on GitHub.
</p> </div> <nav class="shell-sitemap" aria-label="Sitemap"> <ul> ${Sitemap.map((Entry) => renderTemplate`<li> <a${addAttribute(Entry.Href, "href")}>${Entry.Label}</a> </li>`)} </ul> </nav> <p class="shell-footer__licence"> <span>${Content.Licence}</span> <span>${Year} PlayForm</span> </p> </div> </footer> <script crossorigin=\"anonymous\">
			// One listener on the document survives the client router's page
			// swaps, so the switch keeps working after a navigation.
			document.addEventListener("click", (Event) => {
				const Button = Event.target.closest("[data-theme-toggle]");

				if (!Button) {
					return;
				}

				const Next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

				document.documentElement.dataset.theme = Next;
				localStorage.setItem("theme", Next);
			});
		<\/script> </body> </html>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Layout/Base.astro", void 0);
export { createComponent as _, Package as a, SelectKind as c, SeamHref as d, Sitemap as f, createAstro as g, $$PageHero as h, Kind as i, PackageHref as l, Content as m, Count as n, Root as o, Dev as p, Family as r, SelectFamily as s, $$Base as t, Route as u, __exportAll as v };
