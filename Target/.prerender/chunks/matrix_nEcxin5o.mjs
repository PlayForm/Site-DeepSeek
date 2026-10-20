import { D as __exportAll, E as createComponent, S as DotSep, n as $$Base, s as Counts, t as $$Badge, w as renderScript, x as $$BrandIcon, y as Totals } from "./Badge_BcqTIV8g.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_DerRPTTd.mjs";
import { t as $$Concept } from "./Concept_B-uQEyUE.mjs";
import { t as $$PageHero } from "./PageHero_CSrnuBSY.mjs";
import { t as $$SectionHeader } from "./SectionHeader_CwH-UUI4.mjs";
import { t as $$TerminalTray } from "./TerminalTray_4UQy3khO.mjs";
//#region Source/pages/matrix.astro
var matrix_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Matrix,
	file: () => $$file,
	url: () => $$url
});
var $$Matrix = createComponent(($$result, $$props, $$slots) => {
	const Hooks = [
		{
			ID: "dash",
			Label: "Dash",
			Note: "— to -"
		},
		{
			ID: "quotes",
			Label: "Quotes",
			Note: "“” to \"\""
		},
		{
			ID: "ellipsis",
			Label: "Ellipsis",
			Note: "… to ..."
		},
		{
			ID: "spaces",
			Label: "Spaces",
			Note: "\\u00A0 to \\x20"
		},
		{
			ID: "invisible",
			Label: "Invisible",
			Note: "ZWSP to ∅"
		},
		{
			ID: "fullwidth",
			Label: "Fullwidth",
			Note: "Ａ to A"
		},
		{
			ID: "file",
			Label: "File",
			Note: "disk sync"
		}
	];
	const RawPayload = `{
  \u201Cid\u201D: \u201Cnode-01\u201D,
  \u201Cstatus\u201D: \u201Cevaluated\u201D,
  \u201Cstatement\u201D: \u201CSystem\u2014integrity\u00A0check\u2026verified\u201D,
  \u201Cmetrics\u201D: {
    \u201Cdelta\u201D: \u201C42\u00A0ms\u201D,
    \u201Cboundary\u201D: \u201Cnominal\u200Bstate\u201D
  }
}`;
	const CleanPayload = `{
  "id": "node-01",
  "status": "evaluated",
  "statement": "System-integrity check...verified",
  "metrics": {
    "delta": "42 ms",
    "boundary": "nominal state"
  }
}`;
	const Suites = [
		{
			Flavor: "Dash",
			Package: "hook-dsh-normalize-dash",
			Checks: String(Counts.Dash.Classic)
		},
		{
			Flavor: "Quotes",
			Package: "hook-dsh-normalize-quotes",
			Checks: String(Counts.Quotes.Classic)
		},
		{
			Flavor: "Ellipsis",
			Package: "hook-dsh-normalize-ellipsis",
			Checks: String(Counts.Ellipsis.Classic)
		},
		{
			Flavor: "Spaces",
			Package: "hook-dsh-normalize-spaces",
			Checks: String(Counts.Spaces.Classic)
		},
		{
			Flavor: "Invisible",
			Package: "hook-dsh-normalize-invisible",
			Checks: String(Counts.Invisible.Classic)
		},
		{
			Flavor: "Fullwidth",
			Package: "hook-dsh-normalize-fullwidth",
			Checks: String(Counts.Fullwidth.Classic)
		},
		{
			Flavor: "File",
			Package: "hook-dsh-normalize-file",
			Checks: String(Counts.File.Classic)
		}
	];
	const Pipeline = [
		"hook-dsh-core",
		"normalize-dash",
		"normalize-quotes",
		"normalize-ellipsis"
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Matrix - DSH Family @ PlayForm",
		"Description": "The Interactive Matrix Stream Inspector. Raw model emission versus canonical normalized output across the DeepSeek V4 Flash, GLM 5.3 Flash and raw LLM engine routes."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
INSPECTION VECTOR
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`STREAM GATE PIPELINE` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`SMOKES: ${Counts.Suites} SUITES` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Interactive Matrix Stream Inspector",
		"Sub": "Raw model emission versus canonical normalized output, engine by engine.\nThe inspector highlights EVERY unicode anomaly in the raw payload. The inspector shows the deterministic result after the armed flavor hooks."
	})} <!-- Controls --> <section class="workbench-controls"> <div class="workbench-controls__group"> <span class="workbench-controls__label">Engine:</span> <button type="button" class="engine-pill" data-engine="deepseek" data-active aria-pressed="true"> <span class="dot"></span> DeepSeek V4 Flash
</button> <button type="button" class="engine-pill" data-engine="glm" aria-pressed="false"> <span class="dot"></span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "zhipu",
		"Size": "0.8em"
	})} GLM 5.3 Flash
</button> <button type="button" class="engine-pill" data-engine="raw" aria-pressed="false"> <span class="dot"></span> Raw LLM Stream
</button> </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Architecture:</span> <button type="button" class="engine-pill" data-mode="classic" aria-pressed="false"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"Size": "0.8em"
	})} Dual: CLASSIC
</button> <button type="button" class="engine-pill engine-pill--active" data-mode="effect" aria-pressed="true"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"Size": "0.8em"
	})} EFFECT-TS v4 Tracing (Active)
</button> </div> </section> <!-- Flavor gate checkboxes --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Active flavor gate hooks",
		"Meta": `${Counts.Normalizers} OF ${Counts.Normalizers} ARMED`
	})} <div class="hook-grid"> ${Hooks.map((Hook) => renderTemplate`<label class="hook-card is-armed"${addAttribute(Hook.ID, "data-hook")}> <span class="hook-card__top"> <span class="hook-card__name">${Hook.Label}</span> <input class="hook-check" type="checkbox" checked${addAttribute(Hook.ID, "data-flavor")}> </span> <span class="hook-card__rule"> <span>${Hook.Note}</span> </span> </label>`)} </div> <p class="section-kicker" style="margin-top: var(--space-sm)">
File target: synced
</p> <p class="page-hero__sub" style="margin-top: var(--space-sm)">
This demo models the <strong>conversation arm</strong> ONLY.
</p> <p class="page-hero__sub" style="margin-top: var(--space-sm)">
Beyond it, the family's granular volatile <code>scopes</code> surface gates EVERY arm independently.
				Conversation / reasoning / toolInput / toolResults / files / batch: ALL hot-flippable through <code>loader/volatile-update</code>.
				Two <strong>overpass arms</strong> extend the flavors past the stream.
				The tool-results arm (<code>tools/post-execute</code>) is the OUTERMOST prepend.
				The step-batch arm (<code>agent/pre-step</code>) is reachable through the <code>normalize-overpass</code> command.
</p> <p class="page-hero__sub" style="margin-top: var(--space-sm)">
On the same waterfall, the${" "} <a href="/plugins/hook-dsh-ccr/">ccr hook</a> compresses oversized tool output.
				The <a href="/plugins/hook-dsh-tool-coach/">tool-coach</a> judges the terminal calls.
</p> </section> <!-- Split screen inspector --> <section class="section"> <div class="section-header"> <div class="section-header__left"> <span class="section-header__marker"></span> <h2 class="section-header__title">Stream gate pipeline</h2> </div> <span class="section-header__meta"> ${Pipeline.map((Name, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && renderTemplate`${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}`}${Name}` })}`)} </span> </div> <!-- The pause/resume is announced through this visually-hidden
			     status element (role=status, aria-live=polite) - the
			     hover-pause state change reaches assistive tech even
			     though the visible PAUSED tag is aria-hidden. --> <p class="visually-hidden" role="status" aria-live="polite" data-stream-status>
Stream running
</p> <div class="stream-grid"> <div class="stream-pane rail-orange"> ${renderComponent($$result, "TerminalTray", $$TerminalTray, {
		"Label": "RAW MODEL EMISSION",
		"Orange": true
	}, { "default": ($$result) => renderTemplate` <span class="stream-pane__count">
// payload emit: deepseek-v4-chunk-9812
</span> ` })} <div class="stream-pane__terminal" data-raw> ${RawPayload} </div> </div> <div class="stream-hub"> <div class="stream-hub__core"> <svg class="spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path d="M21 12 a9 9 0 1 1 -2.6 -6.4 M21 3 v6 h-6"></path> </svg> <span>DEMO</span> <strong>client-side</strong> </div> <!-- The paused tag, split: only the PAUSED word carries the
					     accent-orange token; the separator and the rest keep the
					     on-surface-variant ink. Hidden until the stage is paused
					     (see the .stream-hub__paused rules in Global.css). --> <span class="stream-hub__paused" aria-hidden="true"> <span class="stream-hub__paused-word">PAUSED</span><span class="dot-sep" aria-hidden="true"></span>HOVER TO RESUME
</span> </div> <div class="stream-pane"> ${renderComponent($$result, "TerminalTray", $$TerminalTray, {
		"Label": "CANONICAL NORMALIZED OUTPUT",
		"Icon": true
	}, { "default": ($$result) => renderTemplate` <span class="stream-pane__count">valid ast ready</span> ` })} <div class="stream-pane__terminal" data-clean> ${CleanPayload} </div> </div> </div> <div class="workbench-controls" style="margin-top: var(--space-md); margin-bottom: 0"> <div class="workbench-controls__group"> <button type="button" class="engine-pill" data-action="reset">
Reset Stream
</button> <button type="button" class="engine-pill engine-pill--active" data-action="benchmark">
Run the smoke baseline
</button> </div> <div class="workbench-controls__group"> <span class="bench-status hook-tally" data-benchmark-status role="status" aria-live="polite"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep(`${Counts.Suites} suites · ${Totals.Pair()} · ALL PASS (the ledger strings, byte-identical)`))}` })} </span> <button type="button" class="engine-pill" data-action="copy">
Copy Normalized Output
</button> </div> </div> </section> <!-- Engine x flavor matrix --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The suites behind this demo",
		"Meta": "SMOKE CHECKS PER FLAVOR"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "matrix-authority",
		"Title": "A client-side demo with a real authority behind it",
		"Diagram": "The inspector running the same per-chunk rules the packages run, client-side - and the flavor's smoke suite loading the built package and asserting the ledger strings byte-identically."
	}, { "default": ($$result) => renderTemplate` <p>
The inspector above runs the same per-chunk rules the packages run, client-side.
</p> <p>
The real authority is EACH flavor's smoke suite.
						The suite loads the built package and asserts the ledger strings byte-identically.
</p> <p>
That makes fourteen suites family-wide.
						The ccr suite (${Counts.CCR.Classic}${" "}
checks) exists outside this demo.
						The tool-coach suite (${Counts.Coach.Classic} checks) exists outside this demo.
						They arbitrate the tool-result compression and the terminal coaching.
						They arbitrate NOT the stream demo above.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Flavor (demo hook)</th> <th>Package</th> <th>Smoke checks</th> </tr> </thead> <tbody> ${Suites.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Flavor}</strong> </td> <td>${Row.Package}</td> <td> <span class="hook-tally">${Row.Checks}</span> </td> </tr>`)} </tbody> </table> </div> </section> </main> ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/matrix.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/matrix.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/matrix.astro";
var $$url = "/matrix";
//#endregion
//#region \0virtual:astro:page:Source/pages/matrix@_@astro
var page = () => matrix_exports;
//#endregion
export { page };
