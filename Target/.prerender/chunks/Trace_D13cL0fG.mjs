import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, d as renderSlot, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$Badge } from "./Badge_v9jAR5qs.mjs";
// Source/Component/Gutter.astro
createAstro("https://deepseek.playform.cloud");
var $$Gutter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Gutter;
	const { Seq, Foldable = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span class="gutter"${addAttribute(Foldable, "data-foldable")}> ${Foldable && renderTemplate`<span class="gutter__chevron" aria-hidden="true"></span>`} <span class="gutter__number">${String(Seq).padStart(2, "0")}</span> </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Gutter.astro", void 0);
// Source/Component/Line.astro
createAstro("https://deepseek.playform.cloud");
var $$Line = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Line;
	const { Seq, Kind, Name, Foldable = false, Current = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="line"${addAttribute(Kind, "data-kind")}${addAttribute(Seq, "data-seq")}${addAttribute(Current, "data-current")} role="listitem"> <span class="line__gutter"> ${renderComponent($$result, "Gutter", $$Gutter, {
		"Seq": Seq,
		"Foldable": Foldable
	})} </span> <span class="line__body"> <span class="line__kind">${Kind}</span> <span class="line__name">${Name}</span> <span class="line__slot"> ${renderSlot($$result, $$slots["default"])} </span> </span> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Line.astro", void 0);
// Source/Component/Trace.astro
createAstro("https://deepseek.playform.cloud");
var $$Trace = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Trace;
	const { Record } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="trace" role="list"> ${Record.map((Entry) => renderTemplate`${renderComponent($$result, "Line", $$Line, {
		"Seq": Entry.Index,
		"Kind": Entry.Kind,
		"Name": Entry.Name
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, {
		"Label": Entry.Durable ? "durable" : "live",
		"Tone": Entry.Durable ? "accent" : "quiet"
	})} <span class="trace__proves">${Entry.Proves}</span> ` })}`)} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Trace.astro", void 0);
// Source/Content/Trace.ts
var Record = [
	{
		Index: 1,
		Name: "turn/start",
		Kind: "turn",
		Proves: "a turn opened, before any input was claimed",
		Durable: true
	},
	{
		Index: 2,
		Name: "agent/inbox/claimed",
		Kind: "turn",
		Proves: "which message this turn took",
		Durable: false
	},
	{
		Index: 3,
		Name: "step/start",
		Kind: "step",
		Proves: "a step began, with its request controls",
		Durable: true
	},
	{
		Index: 4,
		Name: "system/message",
		Kind: "message",
		Proves: "the system prompt the model read",
		Durable: true
	},
	{
		Index: 5,
		Name: "user/message",
		Kind: "message",
		Proves: "the user turn as admitted",
		Durable: true
	},
	{
		Index: 6,
		Name: "request/header",
		Kind: "message",
		Proves: "the model, the effort, and the controls of the call",
		Durable: true
	},
	{
		Index: 7,
		Name: "agent/assistant-stream",
		Kind: "message",
		Proves: "that the stream was live, and nothing after a reload",
		Durable: false
	},
	{
		Index: 8,
		Name: "assistant/message",
		Kind: "message",
		Proves: "the text the model produced, as settled",
		Durable: true
	},
	{
		Index: 9,
		Name: "tool/call",
		Kind: "tool",
		Proves: "the call the model asked for",
		Durable: true
	},
	{
		Index: 10,
		Name: "tool/result",
		Kind: "tool",
		Proves: "the result the model read next",
		Durable: true
	},
	{
		Index: 11,
		Name: "step/end",
		Kind: "step",
		Proves: "the step closed and its tool set was disposed",
		Durable: true
	},
	{
		Index: 12,
		Name: "agent/status",
		Kind: "turn",
		Proves: "the agent went idle",
		Durable: false
	},
	{
		Index: 13,
		Name: "turn/end",
		Kind: "turn",
		Proves: "the turn closed, and the step count it took",
		Durable: true
	},
	{
		Index: 14,
		Name: "session/flush",
		Kind: "session",
		Proves: "the log was flushed to its file",
		Durable: true
	}
];
export { $$Trace as n, Record as t };
