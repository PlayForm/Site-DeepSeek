import { D as __exportAll, E as createComponent, n as $$Base, s as Counts, t as $$Badge, w as renderScript, x as $$BrandIcon } from "./Badge_epMRbWWn.mjs";
import { _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_ajB5vkMW.mjs";
import { t as $$PageHero } from "./PageHero_ecgFcnX1.mjs";
import { t as $$TerminalTray } from "./TerminalTray_CpSvUys4.mjs";
//#region Source/pages/workbench.astro
var workbench_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Workbench,
	file: () => $$file,
	url: () => $$url
});
var $$Workbench = createComponent(($$result, $$props, $$slots) => {
	const Hooks = [
		{
			ID: "dash",
			Prefix: "NORM",
			Token: "DASH",
			Name: "Hyphen Standardizer",
			From: "— –",
			To: "-",
			Armed: true
		},
		{
			ID: "quotes",
			Prefix: "NORM",
			Token: "QUOTES",
			Name: "Curly Quotes",
			From: "“ ” ‘ ’",
			To: "\" '",
			Armed: true
		},
		{
			ID: "ellipsis",
			Prefix: "NORM",
			Token: "ELLIPSIS",
			Name: "Ellipsis Expander",
			From: "…",
			To: "...",
			Armed: true
		},
		{
			ID: "spaces",
			Prefix: "NORM",
			Token: "SPACES",
			Name: "Whitespace Purge",
			From: "\\u00A0",
			To: "\\x20",
			Armed: true
		},
		{
			ID: "invisible",
			Prefix: "STRIP",
			Token: "ZWSP",
			Name: "Zero-Width Strip",
			From: "\\u200B\\uFEFF",
			To: "∅",
			Armed: true
		},
		{
			ID: "fullwidth",
			Prefix: "NORM",
			Token: "FULLWIDTH",
			Name: "Width Normalizer",
			From: "\\uFF01..\\uFF5E",
			To: "Halfwidth",
			Armed: true
		},
		{
			ID: "file",
			Prefix: "NORM",
			Token: "FILE",
			Name: "File Content Normalizer",
			From: "on disk",
			To: "6 transforms",
			Armed: false
		}
	];
	const Runtimes = [{
		ID: "classic",
		Label: "Classic Pipeline"
	}, {
		ID: "effect",
		Label: "Effect-TS v4 Fiber"
	}];
	const Engines = [
		{
			ID: "deepseek",
			Label: "DeepSeek Engine v4"
		},
		{
			ID: "glm",
			Label: "GLM Engine 5.3"
		},
		{
			ID: "raw",
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
		"Title": "Workbench - DSH Family @ PlayForm",
		"Description": "The interactive Stream Gate & Normalization Workbench. Raw LLM token emission passing through the seven flavor hooks into clean ASCII output, LIVE."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
LIVE EMISSION
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`STREAM GATE` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${Counts.Normalizers} FLAVOR HOOKS` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Interactive Stream Gate & Normalization Workbench",
		"Sub": "Runtime matrix: raw LLM token emission transitioning through the stream gate into clean ASCII output.\nToggle the flavor hooks, switch the ingest engine, and watch the raw buffer and the canonical sanitized stream diverge."
	})} <!-- Runtime & gate tally --> <section class="workbench-controls"> <div class="workbench-controls__group"> <span class="workbench-controls__label">Runtime:</span> ${Runtimes.map((Runtime, Index) => renderTemplate`<button type="button" class="engine-pill"${addAttribute(Runtime.ID, "data-runtime")}${addAttribute(Index === 1 ? "" : void 0, "data-active")}> ${Runtime.ID === "classic" && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"Size": "0.8em"
	})}`} ${Runtime.ID === "effect" && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"Size": "0.8em"
	})}`} ${Runtime.Label} </button>`)} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Armed hooks:</span> <span class="hook-tally" data-hook-tally${addAttribute(Counts.Normalizers, "data-total")}> ${Counts.StreamFlavors} of ${Counts.Normalizers} Active
</span> </div> </section> <!-- Ingest engine selection --> <section class="workbench-controls"> <div class="workbench-controls__group"> <span class="workbench-controls__label">Ingest source:</span> ${Engines.map((Engine, Index) => renderTemplate`<button type="button" class="engine-pill"${addAttribute(Engine.ID, "data-engine")}${addAttribute(Index === 0 ? "" : void 0, "data-active")}${addAttribute(Index === 0, "aria-pressed")}> <span class="dot"></span> ${Engine.ID === "glm" && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "zhipu",
		"Size": "0.8em"
	})}`} ${Engine.Label} </button>`)} </div> <div class="workbench-controls__group"> <button type="button" class="engine-pill" data-action="toggle" aria-pressed="false">
Pause Stream
</button> <button type="button" class="engine-pill" data-action="clear">
Clear
</button> <button type="button" class="engine-pill" data-action="burst">
10k Burst
</button> <button type="button" class="engine-pill engine-pill--active" data-action="copy">
Copy Clean
</button> </div> </section> <!-- Telemetry metrics --> <section class="section"> <div class="metric-grid"> <div class="metric"> <span class="metric__label">Zero-Width Purged</span> <div class="metric__row"> <span class="metric__value" data-metric="invisible">
0
</span> <span class="metric__note"><code class="code-token">U+200B..F</code></span> </div> </div> <div class="metric"> <span class="metric__label">Curly Quotes Converted</span> <div class="metric__row"> <span class="metric__value" data-metric="quotes">
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
</button> </div> </div> <div class="hook-grid"> ${Hooks.map((Hook) => renderTemplate`<button type="button"${addAttribute(`hook-card ${Hook.Armed ? "is-armed" : "is-disarmed"}`, "class")}${addAttribute(Hook.ID, "data-hook")}${addAttribute(Hook.Armed ? "true" : "false", "data-armed")}${addAttribute(Hook.Armed, "aria-pressed")}> <div class="hook-card__top"> <span class="hook-card__token"> <span class="flavor-prefix">${Hook.Prefix}:</span> ${Hook.Token} </span> <span class="hook-card__status"></span> </div> <span class="hook-card__name">${Hook.Name}</span> <span class="hook-card__rule"> <span>${Hook.From}</span> ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} <span>${Hook.To}</span> </span> </button>`)} </div> </section> <!-- Dual terminal view --> <section class="section"> <p class="visually-hidden" role="status" aria-live="polite" data-stream-status>
Stream running
</p> <div class="stream-grid"> <div class="stream-pane rail-orange"> ${renderComponent($$result, "TerminalTray", $$TerminalTray, {
		"Label": "RAW LLM INGEST BUFFER",
		"Orange": true
	}, { "default": ($$result) => renderTemplate` <span class="stream-pane__count" data-count="raw">
0 bytes
</span> ` })} <div class="stream-pane__terminal" data-stream="raw"></div> </div> <div class="stream-hub"> <div class="stream-hub__core"> <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path d="M21 12 a9 9 0 1 1 -2.6 -6.4 M21 3 v6 h-6"></path> </svg> <span>DEMO</span> <strong>client-side</strong> </div> <!-- The paused tag, split: only the PAUSED word carries the
					     accent-orange token; the separator and the rest keep the
					     on-surface-variant ink. Hidden until the stage is paused
					     (see the .stream-hub__paused rules in Global.css). --> <span class="stream-hub__paused" aria-hidden="true"> <span class="stream-hub__paused-word">PAUSED</span><span class="dot-sep" aria-hidden="true"></span>HOVER TO RESUME
</span> <!-- The settled tag, split: only the SETTLED word carries the
					     primary-blue token (the normalized signature); the
					     separator and the rest keep the on-surface-variant ink.
					     Hidden until the stage is settled (see the
					     .stream-hub__settled rules in Global.css) - one pass over
					     the pool played, no line repeats; the restart toggle above
					     the stage resumes by a new pass. --> <span class="stream-hub__settled" aria-hidden="true"> <span class="stream-hub__settled-word">SETTLED</span><span class="dot-sep" aria-hidden="true"></span>PLAYED ONCE
</span> </div> <div class="stream-pane"> ${renderComponent($$result, "TerminalTray", $$TerminalTray, {
		"Label": "CANONICAL SANITIZED STREAM",
		"Icon": true
	}, { "default": ($$result) => renderTemplate` <span class="stream-pane__count" data-count="clean">
0 bytes
</span> ` })} <div class="stream-pane__terminal" data-stream="clean"></div> </div> </div> <div class="trace-ribbon"> <div class="trace-ribbon__chain"> <span>The pipeline this demo mirrors:</span> ${Spans.map((Span) => renderTemplate`<span class="trace-ribbon__span"> ${Span.Flow ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Span.Text}${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} ${Span.To}` })}` : Span.Text} </span>`)} </div> <span>
Count &gt; 0 ONLY • <strong>count === 0 keeps the chunk by identity</strong> • a
					thrown-away stream writes NO ledger line
</span> </div> </section> <!-- The arms beyond the demo: text-only note (the stream-gate demo
		     itself stays untouched). One sentence per paragraph - the
		     sentence text stays byte-exact, only the paragraphing changes. --> <section class="section"> <p class="page-hero__sub"> <strong>Beyond the demo:</strong> this workbench models the${" "} <strong>conversation arm</strong> (<code>llm/stream</code>) ONLY.
</p> <p class="page-hero__sub">
The family's other arms - tool input, tool results, step batch, files - are
				configurable via the volatile <code>scopes</code> surface (conversation /
				reasoning / toolInput / toolResults / files / batch, EVERY scope
				hot-flippable through <code>loader/volatile-update</code>), reachable in the
				LIVE profile through the <code>normalize-overpass</code> command.
</p> <p class="page-hero__sub">
And tool output can additionally be <strong>compressed</strong>: the${" "} <a href="/plugins/hook-dsh-ccr/">ccr hook</a> replaces oversized results of
				the target tools with a one-line preview plus a${" "} <code>&lt;&lt;&lt;CCR:</code> retrieval marker. The${" "} <a href="/plugins/hook-dsh-tool-coach/">tool-coach</a> judges the terminal
				calls the stream never sees.
</p> <p class="page-hero__sub">
The <a href="/plugins/hook-dsh-normalize-dash/">flavor pages</a> carry the
				full scopes and overpass tables.
</p> </section> </main> ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/workbench.astro";
var $$url = "/workbench";
//#endregion
//#region \0virtual:astro:page:Source/pages/workbench@_@astro
var page = () => workbench_exports;
//#endregion
export { page };
