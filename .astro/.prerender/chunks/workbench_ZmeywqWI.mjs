import { C as __exportAll, S as createComponent, b as $$BrandIcon, n as $$Base, o as Counts, t as $$Badge, x as renderScript } from "./Badge_CHteF_GF.mjs";
import { g as addAttribute, m as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_jUwDEDCs.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_DQw92EC9.mjs";
import { t as $$PageHero } from "./PageHero_BDRlROTw.mjs";
//#region Source/pages/workbench.astro
var workbench_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Workbench,
	file: () => $$file,
	url: () => $$url
});
var $$Workbench = createComponent(($$result, $$props, $$slots) => {
	const Hooks = [
		{
			Id: "dash",
			Prefix: "NORM",
			Token: "DASH",
			Name: "Hyphen Standardizer",
			From: "— –",
			To: "-",
			Armed: true
		},
		{
			Id: "quotes",
			Prefix: "NORM",
			Token: "QUOTES",
			Name: "Curly Quotes",
			From: "“ ” ‘ ’",
			To: "\" '",
			Armed: true
		},
		{
			Id: "ellipsis",
			Prefix: "NORM",
			Token: "ELLIPSIS",
			Name: "Ellipsis Expander",
			From: "…",
			To: "...",
			Armed: true
		},
		{
			Id: "spaces",
			Prefix: "NORM",
			Token: "SPACES",
			Name: "Whitespace Purge",
			From: "\\u00A0",
			To: "\\x20",
			Armed: true
		},
		{
			Id: "invisible",
			Prefix: "STRIP",
			Token: "ZWSP",
			Name: "Zero-Width Strip",
			From: "\\u200B\\uFEFF",
			To: "∅",
			Armed: true
		},
		{
			Id: "fullwidth",
			Prefix: "NORM",
			Token: "FULLWIDTH",
			Name: "Width Normalizer",
			From: "\\uFF01..\\uFF5E",
			To: "Halfwidth",
			Armed: true
		},
		{
			Id: "file",
			Prefix: "NORM",
			Token: "FILE",
			Name: "File Content Normalizer",
			From: "on disk",
			To: "6 transforms",
			Armed: false
		}
	];
	const Runtimes = [{
		Id: "classic",
		Label: "Classic Pipeline"
	}, {
		Id: "effect",
		Label: "Effect-TS v4 Fiber"
	}];
	const Engines = [
		{
			Id: "deepseek",
			Label: "DeepSeek Engine v4 (120 tps)"
		},
		{
			Id: "glm",
			Label: "GLM Engine 5.3"
		},
		{
			Id: "raw",
			Label: "Raw Ingest Stream"
		}
	];
	const Spans = [
		{
			Text: "next() first",
			Flow: false
		},
		{
			Text: "CoreChunk dispatch",
			Flow: false
		},
		{
			Text: "per-flavor transform",
			Flow: false
		},
		{
			Text: "yield",
			Flow: true,
			To: "transcript"
		},
		{
			Text: "Append",
			Flow: true,
			To: "ledger line"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Workbench - @playform / DSH Family",
		"Description": "The interactive Stream Gate & Normalization Workbench: raw LLM token emission passing through the seven flavor hooks into clean ASCII output, live."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
LIVE EMISSION
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`STREAM GATE` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${Counts.Normalizers} FLAVOR HOOKS` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Interactive Stream Gate & Normalization Workbench",
		"Sub": "Runtime matrix: raw LLM token emission transitioning through the stream gate into clean ASCII output.\nToggle the flavor hooks, switch the ingest engine, and watch the raw buffer and the canonical sanitized stream diverge."
	})} <!-- Runtime & gate tally --> <section class="workbench-controls"> <div class="workbench-controls__group"> <span class="workbench-controls__label">Runtime:</span> ${Runtimes.map((Runtime, Index) => renderTemplate`<button type="button" class="engine-pill"${addAttribute(Runtime.Id, "data-runtime")}${addAttribute(Index === 1 ? "" : void 0, "data-active")}> ${Runtime.Id === "classic" && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"Size": "0.8em"
	})}`} ${Runtime.Id === "effect" && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"Size": "0.8em"
	})}`} ${Runtime.Label} </button>`)} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Armed hooks:</span> <span class="hook-tally" data-hook-tally> ${Counts.StreamFlavors} of ${Counts.Normalizers} Active
</span> </div> </section> <!-- Ingest engine selection --> <section class="workbench-controls"> <div class="workbench-controls__group"> <span class="workbench-controls__label">Ingest source:</span> ${Engines.map((Engine, Index) => renderTemplate`<button type="button" class="engine-pill"${addAttribute(Engine.Id, "data-engine")}${addAttribute(Index === 0 ? "" : void 0, "data-active")}${addAttribute(Index === 0, "aria-pressed")}> <span class="dot"></span> ${Engine.Label} </button>`)} </div> <div class="workbench-controls__group"> <button type="button" class="engine-pill" data-action="toggle" aria-pressed="false">
Pause Stream
</button> <button type="button" class="engine-pill" data-action="clear">
Clear
</button> <button type="button" class="engine-pill" data-action="burst">
10k Burst
</button> <button type="button" class="engine-pill engine-pill--active" data-action="copy">
Copy Clean
</button> </div> </section> <!-- Telemetry metrics --> <section class="section"> <div class="metric-grid"> <div class="metric"> <span class="metric__label">Zero-Width Purged</span> <div class="metric__row"> <span class="metric__value" data-metric="invisible">
0
</span> <span class="metric__note">U+200B..F</span> </div> </div> <div class="metric"> <span class="metric__label">Curly Quotes Converted</span> <div class="metric__row"> <span class="metric__value" data-metric="quotes">
0
</span> <span class="metric__note">
\\u201C\\u201D ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} ""
</span> </div> </div> <div class="metric"> <span class="metric__label">Dashes Standardized</span> <div class="metric__row"> <span class="metric__value" data-metric="dash">
0
</span> <span class="metric__note">
\\u2014 \\u2013 ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} -
</span> </div> </div> <div class="metric"> <span class="metric__label">Replacements Applied</span> <div class="metric__row"> <span class="metric__value" data-metric="replacements">
0
</span> <span class="metric__note">count &gt; 0 per flavor</span> </div> </div> </div> </section> <!-- Flavor hook switchboard --> <section class="section"> <div class="section-header"> <div class="section-header__left"> <span class="section-header__marker"></span> <h2 class="section-header__title">Canonical Transformation Flavor Hooks</h2> </div> <div class="workbench-controls__group"> <span class="section-header__meta">INTERACTIVE CIRCUIT MATRIX</span> <button type="button" class="engine-pill" data-action="toggle-all">
Toggle All
</button> </div> </div> <div class="hook-grid"> ${Hooks.map((Hook) => renderTemplate`<button type="button"${addAttribute(`hook-card ${Hook.Armed ? "is-armed" : "is-disarmed"}`, "class")}${addAttribute(Hook.Id, "data-hook")}${addAttribute(Hook.Armed ? "true" : "false", "data-armed")}${addAttribute(Hook.Armed, "aria-pressed")}> <div class="hook-card__top"> <span class="hook-card__token"> <span class="flavor-prefix">${Hook.Prefix}:</span> ${Hook.Token} </span> <span class="hook-card__status"></span> </div> <span class="hook-card__name">${Hook.Name}</span> <span class="hook-card__rule"> <span>${Hook.From}</span> ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <span>${Hook.To}</span> </span> </button>`)} </div> </section> <!-- Dual terminal view --> <section class="section"> <p class="visually-hidden" role="status" aria-live="polite" data-stream-status>
Stream running
</p> <div class="stream-grid"> <div class="stream-pane rail-orange"> <div class="stream-pane__bar"> <span class="stream-pane__label is-orange"> <span class="dot dot--raw"></span>
RAW LLM INGEST BUFFER
</span> <span class="stream-pane__count" data-count="raw">
0 bytes
</span> </div> <div class="stream-pane__terminal" data-stream="raw"></div> </div> <div class="stream-hub"> <div class="stream-hub__core"> <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path d="M21 12 a9 9 0 1 1 -2.6 -6.4 M21 3 v6 h-6"></path> </svg> <span>DEMO</span> <strong>client-side</strong> </div> <!-- The paused tag, split: only the PAUSED word carries the
					     accent-orange token; the separator and the rest keep the
					     on-surface-variant ink. Hidden until the stage is paused
					     (see the .stream-hub__paused rules in Global.css). --> <span class="stream-hub__paused" aria-hidden="true"> <span class="stream-hub__paused-word">PAUSED</span> · HOVER TO RESUME
</span> </div> <div class="stream-pane"> <div class="stream-pane__bar"> <span class="stream-pane__label"> <span class="dot dot--clean"></span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })} CANONICAL SANITIZED STREAM
</span> <span class="stream-pane__count" data-count="clean">
0 bytes
</span> </div> <div class="stream-pane__terminal" data-stream="clean"></div> </div> </div> <div class="trace-ribbon"> <div class="trace-ribbon__chain"> <span>The pipeline this demo mirrors:</span> ${Spans.map((Span) => renderTemplate`<span class="trace-ribbon__span"> ${Span.Flow ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Span.Text}${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} ${Span.To}` })}` : Span.Text} </span>`)} </div> <span>
Count &gt; 0 only • <strong>count === 0 keeps the chunk by identity</strong> • a
					thrown-away stream writes no ledger line
</span> </div> </section> </main> ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro";
var $$url = "/workbench";
//#endregion
//#region \0virtual:astro:page:Source/pages/workbench@_@astro
var page = () => workbench_exports;
//#endregion
export { page };
