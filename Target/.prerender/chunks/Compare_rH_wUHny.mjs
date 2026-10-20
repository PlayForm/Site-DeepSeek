import { E as createComponent, T as createAstro, w as renderScript } from "./Badge_BknqmmDW.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$TerminalTray } from "./TerminalTray_DVo8htQV.mjs";
//#region Source/Component/Compare.astro
createAstro("https://deepseek.playform.cloud");
var $$Compare = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Compare;
	const { Raw, Clean, Flavor, ID, Start = 50, RawLabel = "RAW - what the model wrote", CleanLabel = "NORMALIZED - what reaches the transcript" } = Astro.props;
	const RawMatch = RawLabel.match(/^RAW(?=[\s-]|$)/i);
	function Escape(Text) {
		return Text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	}
	const Classes = {
		dash: /[\u2013\u2014\u2015]/g,
		quotes: /[\u2018\u2019\u201C\u201D]/g,
		ellipsis: /\u2026/g,
		fullwidth: /[\uFF01-\uFF5E]/g
	};
	const SpaceGaps = /[\u00A0]/g;
	const SpaceWide = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/g;
	const Invisible = [
		[/\u00AD/g, "[SHY]"],
		[/\u200B/g, "[ZWSP]"],
		[/\u200C/g, "[ZWNJ]"],
		[/\u200D/g, "[ZWJ]"],
		[/\u200E/g, "[LRM]"],
		[/\u200F/g, "[RLM]"],
		[/\u2060/g, "[WJ]"],
		[/\uFEFF/g, "[BOM]"]
	];
	function Highlight(Text) {
		let Out = Escape(Text);
		if (Flavor === "dash" || Flavor === "file" || Flavor === "all") Out = Out.replace(Classes.dash, (Mark) => `<span class="anom">${Mark}</span>`);
		if (Flavor === "quotes" || Flavor === "all") Out = Out.replace(Classes.quotes, (Mark) => `<span class="anom">${Mark}</span>`);
		if (Flavor === "ellipsis" || Flavor === "all") Out = Out.replace(Classes.ellipsis, "<span class=\"anom\">…</span>");
		if (Flavor === "spaces" || Flavor === "all") {
			Out = Out.replace(SpaceGaps, "<span class=\"zwsp\">[NBSP]</span>");
			Out = Out.replace(SpaceWide, (Mark) => `<span class="anom">${Mark}</span>`);
		}
		if (Flavor === "invisible" || Flavor === "all") for (const [Pattern, Marker] of Invisible) Out = Out.replace(Pattern, `<span class="zwsp">${Marker}</span>`);
		if (Flavor === "fullwidth" || Flavor === "all") Out = Out.replace(Classes.fullwidth, (Mark) => `<span class="anom">${Mark}</span>`);
		return Out;
	}
	const RawHTML = Raw.map(Highlight).join("\n");
	const CleanText = Clean.join("\n");
	return renderTemplate`${maybeRenderHead($$result)}<figure class="compare"${addAttribute(ID, "id")} data-astro-cid-5ho3r3vh> ${renderComponent($$result, "TerminalTray", $$TerminalTray, {
		"Label": "Before / After",
		"data-astro-cid-5ho3r3vh": true
	}, { "default": ($$result) => renderTemplate` <span class="compare__hint" aria-hidden="true" data-astro-cid-5ho3r3vh>DRAG <span class="compare__keys" data-astro-cid-5ho3r3vh>← →</span></span> ` })} <!-- The panes' state, announced: the split position updates this polite
	     live region at a sane rate (throttled in the script below - at most
	     one announcement per 600ms, plus a forced one on drag release) so
	     the raw/clean balance is perceivable without per-frame chatter. --> <p class="visually-hidden" role="status" aria-live="polite" data-compare-status data-astro-cid-5ho3r3vh>
Raw 50% • normalized 50%
</p> <div class="compare__stage" data-compare${addAttribute(Start, "data-start")} data-astro-cid-5ho3r3vh> <pre class="compare__screen compare__screen--clean" data-astro-cid-5ho3r3vh>${CleanText}</pre> <pre class="compare__screen compare__screen--raw rail-orange" data-astro-cid-5ho3r3vh>${unescapeHTML(RawHTML)}</pre> <!-- The step markers: the 25 / 50 / 75 snap positions as flat
		     hairline ticks on the stage's top and bottom edges
		     (pointer-events: none - the drag and the click pass
		     through; the script snaps onto them on release). --> <div class="compare__steps" aria-hidden="true" data-astro-cid-5ho3r3vh> <i style="left: 25%" data-astro-cid-5ho3r3vh></i> <i style="left: 50%" data-astro-cid-5ho3r3vh></i> <i style="left: 75%" data-astro-cid-5ho3r3vh></i> </div> <div class="compare__handle" role="slider" tabindex="0" aria-label="Compare the raw input and the normalized output - arrow keys move the split" aria-valuemin="0" aria-valuemax="100"${addAttribute(Start, "aria-valuenow")} aria-orientation="horizontal" data-handle data-astro-cid-5ho3r3vh> <span class="compare__grip" aria-hidden="true" data-astro-cid-5ho3r3vh></span> </div> </div> <figcaption class="compare__legend" data-astro-cid-5ho3r3vh> <span class="compare__legend-item" data-astro-cid-5ho3r3vh> <span class="dot dot--raw" data-astro-cid-5ho3r3vh></span> <span class="compare__legend-label" data-astro-cid-5ho3r3vh> ${RawMatch ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` <span class="compare__legend-raw" data-astro-cid-5ho3r3vh>${RawMatch[0]}</span> ${RawLabel.slice(RawMatch[0].length)} ` })}` : RawLabel} </span> </span> <span class="compare__legend-item" data-astro-cid-5ho3r3vh> <span class="dot dot--clean" data-astro-cid-5ho3r3vh></span> <span class="compare__legend-label" data-astro-cid-5ho3r3vh>${CleanLabel}</span> </span> </figcaption> </figure>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Compare.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Compare.astro", void 0);
//#endregion
export { $$Compare as t };
