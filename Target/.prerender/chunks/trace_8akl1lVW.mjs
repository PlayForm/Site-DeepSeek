import { _ as createComponent$1, g as createAstro, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, c as Fragment, d as renderSlot, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_DdDx5Sgv.mjs";
import { t as $$Badge } from "./Badge_DH5fDljn.mjs";
import { t as $$StatBand } from "./StatBand_9iPwwZ-l.mjs";
import { t as $$Term } from "./Term_rdCIvkpk.mjs";
import { t as Ledger } from "./Ledger.server_B-ABR5zn.mjs";
import { t as $$Callout } from "./Callout_C9VjeKLa.mjs";
import { t as Catalogue_server_default } from "./Catalogue.server_CXquq_3K.mjs";
import { t as $$Grid } from "./Grid_INZpLUje.mjs";
import { createComponent, escape, ssr, ssrAttribute, ssrHydrationKey, ssrStyleProperty } from "solid-js/web";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { For, Show, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";
import { zstdDecompressSync } from "node:zlib";
// Source/Component/Graph/Explorer.tsx
var _tmpl$$1 = [
	"<div",
	" class=\"explorer\"><div class=\"explorer__toolbar\"><label class=\"explorer__field\"><span class=\"explorer__label\">Search</span><input class=\"explorer__input\" type=\"search\" placeholder=\"Package\"",
	"></label><div class=\"explorer__field\"><span class=\"explorer__label\">Release</span><div class=\"explorer__options\">",
	"</div></div><div class=\"explorer__field\"><label class=\"explorer__label\" for=\"explorer-layout\">Layout</label><select id=\"explorer-layout\" class=\"explorer__select\"",
	">",
	"</select></div><label class=\"explorer__toggle\"><input type=\"checkbox\"",
	"><span>Label</span></label><ul class=\"explorer__legend\">",
	"</ul><span class=\"explorer__count\"><!--$-->",
	"<!--/--> node</span></div><div class=\"explorer__body\"><div class=\"explorer__canvas\" role=\"img\" aria-label=\"",
	"\"></div><aside class=\"explorer__inspector\" aria-live=\"polite\">",
	"</aside></div></div>"
];
var _tmpl$2$1 = [
	"<button",
	" type=\"button\" class=\"explorer__option\"",
	">",
	"</button>"
];
var _tmpl$3$1 = [
	"<option",
	">",
	"</option>"
];
var _tmpl$4$1 = [
	"<li",
	"><span class=\"explorer__swatch\" style=\"",
	"\" aria-hidden=\"true\"></span><!--$-->",
	"<!--/--></li>"
];
var _tmpl$5$1 = ["<p", " class=\"explorer__empty\">Select a node to read the package. The arrow runs from a dependency to the package that requires it.</p>"];
var _tmpl$6$1 = [
	"<div",
	" class=\"explorer__detail\"><p class=\"explorer__kicker\"><!--$-->",
	"<!--/--> / <!--$-->",
	"<!--/--></p><a class=\"explorer__name\"",
	">",
	"</a><dl class=\"explorer__facts\"><div><dt>Version</dt><dd>",
	"</dd></div><div><dt>Tests</dt><dd>",
	"</dd></div><div><dt>Requires</dt><dd>",
	"</dd></div><div><dt>Required by</dt><dd>",
	"</dd></div></dl></div>"
];
var Colour = {
	plugin: "#0052ff",
	hook: "#0038b8",
	lib: "#64748b",
	client: "#94a3b8",
	base: "#0b0f19"
};
var Layout = [
	{
		Value: "fcose",
		Label: "Force"
	},
	{
		Value: "concentric",
		Label: "Concentric"
	},
	{
		Value: "grid",
		Label: "Grid"
	}
];
var Explorer_default = (Props) => {
	const [Module, SetModule] = createSignal();
	const [Release, SetRelease] = createSignal("All");
	const [Mode, SetMode] = createSignal("fcose");
	const [Labels, SetLabels] = createSignal(false);
	const [Query, SetQuery] = createSignal("");
	const [Selected, SetSelected] = createSignal(null);
	const Visible = createMemo(() => {
		const Search = Query().trim().toLowerCase();
		return Props.Node.filter((Entry) => (Release() === "All" || Entry.Family === Release()) && (Search === "" || Entry.Label.toLowerCase().includes(Search)));
	});
	onMount(() => {
		(async () => {
			const Cytoscape = (await import("cytoscape")).default;
			const Fcose = (await import("cytoscape-fcose")).default;
			Cytoscape.use(Fcose);
			SetModule({
				Cytoscape,
				Fcose
			});
		})();
	});
	createEffect(() => {
		Module();
		Release();
		Mode();
		Labels();
		Query().trim().toLowerCase();
	});
	onCleanup(() => void 0);
	return ssr(_tmpl$$1, ssrHydrationKey(), ssrAttribute("value", escape(Query(), true), false), escape(createComponent(For, {
		get each() {
			return ["All", ...Props.Family];
		},
		children: (Entry) => ssr(_tmpl$2$1, ssrHydrationKey(), ssrAttribute("aria-pressed", escape(Release(), true) === escape(Entry, true), false), escape(Entry))
	})), ssrAttribute("value", escape(Mode(), true), false), escape(createComponent(For, {
		each: Layout,
		children: (Entry) => ssr(_tmpl$3$1, ssrHydrationKey() + ssrAttribute("value", escape(Entry.Value, true), false), escape(Entry.Label))
	})), ssrAttribute("checked", Labels(), true), escape(createComponent(For, {
		get each() {
			return Props.Kind;
		},
		children: (Entry) => ssr(_tmpl$4$1, ssrHydrationKey(), ssrStyleProperty("background-color:", escape(Colour[Entry] ?? "#64748b", true)), escape(Entry))
	})), escape(Visible().length), `The package graph: ${escape(Visible().length, true)} node, ${escape(Props.Edge.length, true)} dependency edge`, escape(createComponent(Show, {
		get when() {
			return Selected();
		},
		get fallback() {
			return ssr(_tmpl$5$1, ssrHydrationKey());
		},
		children: (Entry) => ssr(_tmpl$6$1, ssrHydrationKey(), escape(Entry().Kind), escape(Entry().Family), ssrAttribute("href", escape(Entry().Href, true), false), escape(Entry().Label), escape(Entry().Version), escape(Entry().Tests), escape(Entry().Dependencies), escape(Entry().Dependents))
	})));
};
// Source/Component/InspectorLive.tsx
var _tmpl$ = [
	"<div",
	" class=\"inspector\" id=\"inspector-live\" aria-live=\"polite\">",
	"</div>"
];
var _tmpl$2 = [
	"<p",
	" class=\"inspector__subject\"><!--$-->",
	"<!--/--> <!--$-->",
	"<!--/--></p>"
];
var _tmpl$3 = [
	"<div",
	" class=\"inspector__tabs\">",
	"</div>"
];
var _tmpl$4 = [
	"<input",
	" class=\"inspector__radio\" type=\"radio\" name=\"inspector-live-tab\" id=\"",
	"\"",
	">"
];
var _tmpl$5 = [
	"<label",
	" class=\"inspector__tab\" for=\"",
	"\">",
	"</label>"
];
var _tmpl$6 = [
	"<p",
	" class=\"inspector__text\"><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--><!--$-->",
	"<!--/--></p>"
];
var _tmpl$7 = [
	"<div",
	" class=\"inspector__panel\">",
	"</div>"
];
var Tab = [
	"Summary",
	"Payload",
	"Schema",
	"Timing"
];
function InspectorLive(Props) {
	const [Pick, SetPick] = createSignal(0);
	const [Open, SetOpen] = createSignal("Summary");
	const Entry = createMemo(() => Props.Record[Pick()] ?? Props.Record[0]);
	const Opening = createMemo(() => Props.Record.slice(0, 4));
	const Durable = createMemo(() => Opening().filter((Item) => Item.Durable).length);
	const Read = (Event) => {
		const Line = Event.target?.closest("[data-seq]");
		if (!Line) return;
		const Seq = Number(Line.getAttribute("data-seq"));
		const At = Props.Record.findIndex((Item) => Item.Index === Seq);
		if (At >= 0) SetPick(At);
	};
	const Key = (Event) => {
		if (Event.key === "ArrowDown") {
			SetPick((At) => Math.min(Props.Record.length - 1, At + 1));
			Event.preventDefault();
		} else if (Event.key === "ArrowUp") {
			SetPick((At) => Math.max(0, At - 1));
			Event.preventDefault();
		}
	};
	onMount(() => {
		document.addEventListener("click", Read);
		onCleanup(() => document.removeEventListener("click", Read));
	});
	createEffect(() => {
		const Host = document.getElementById("inspector-live");
		if (!Host) return;
		Host.setAttribute("tabindex", "-1");
		Host.addEventListener("keydown", Key);
		onCleanup(() => Host.removeEventListener("keydown", Key));
	});
	return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Show, {
		get when() {
			return Entry();
		},
		children: (Item) => [ssr(_tmpl$2, ssrHydrationKey(), escape(String(Item().Index).padStart(2, "0")), escape(Item().Name)), ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent(For, {
			each: Tab,
			children: (Label) => [
				ssr(_tmpl$4, ssrHydrationKey(), `inspector-live-${escape(Label, true)}`, ssrAttribute("checked", Open() === Label, true)),
				ssr(_tmpl$5, ssrHydrationKey(), `inspector-live-${escape(Label, true)}`, escape(Label)),
				ssr(_tmpl$7, ssrHydrationKey(), escape(createComponent(Show, {
					get when() {
						return Open() === Label;
					},
					get children() {
						return ssr(_tmpl$6, ssrHydrationKey(), Label === "Summary" && `${escape(Item().Kind)}, ${Item().Durable ? "durable" : "live"}. ${escape(Opening().length)} records open the turn: ${escape(Durable())} durable.`, Label === "Payload" && escape(Item().Proves), Label === "Schema" && "A session event is a seq, a type, a time, and a data payload. The document beside this panel names the type of each record.", Label === "Timing" && "The log carries a wall clock per record; this slice shows the order and not the durations.");
					}
				})))
			]
		})))]
	})));
}
// Source/Component/Lane.astro
createAstro("https://deepseek.playform.cloud");
var $$Lane = createComponent$1(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Lane;
	const { Lane } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="lane" role="img" aria-label="The turn as lanes: when each actor was busy"> ${Lane.map((Entry) => renderTemplate`<div class="lane__row"> <span class="lane__label">${Entry.Label}</span> <span class="lane__track"> ${Entry.Span.map((Span) => renderTemplate`<span class="lane__span"${addAttribute(Span.Kind, "data-kind")}${addAttribute({
		left: `${Span.Start}%`,
		width: `${Span.Duration}%`
	}, "style")}${addAttribute(`${Span.Label}: ${Span.Duration}% of the turn`, "title")}> <span class="lane__text">${Span.Label}</span> </span>`)} </span> </div>`)} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Lane.astro", void 0);
// Source/Component/Pending.astro
createAstro("https://deepseek.playform.cloud");
var $$Pending = createComponent$1(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Pending;
	const { Name, Meta } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="pending"> <span class="pending__dot" aria-hidden="true"></span> <span class="pending__name">${Name}</span> ${Meta && renderTemplate`<span class="pending__meta">${Meta}</span>`} <span class="pending__state">pending</span> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Pending.astro", void 0);
// Source/Component/Gutter.astro
createAstro("https://deepseek.playform.cloud");
var $$Gutter = createComponent$1(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Gutter;
	const { Seq, Foldable = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span class="gutter"${addAttribute(Foldable, "data-foldable")}> ${Foldable && renderTemplate`<span class="gutter__chevron" aria-hidden="true"></span>`} <span class="gutter__number">${String(Seq).padStart(2, "0")}</span> </span>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Gutter.astro", void 0);
// Source/Component/Line.astro
createAstro("https://deepseek.playform.cloud");
var $$Line = createComponent$1(($$result, $$props, $$slots) => {
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
var $$Trace$1 = createComponent$1(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Trace$1;
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
// Source/Content/Coverage.ts
var Coverage = [
	{
		State: "turn.open",
		Feed: "yes",
		Why: "turn/start and turn/end are session events"
	},
	{
		State: "turn.compacted",
		Feed: "yes",
		Why: "compaction/start, compaction/end, and compaction/summary"
	},
	{
		State: "step.open",
		Feed: "yes",
		Why: "step/start and step/end bracket the group"
	},
	{
		State: "input.rejected",
		Feed: "no",
		Why: "agent/pre-step closes the turn with no step and no reason"
	},
	{
		State: "call.pending",
		Feed: "yes",
		Why: "a tool/call with no tool/result for its id"
	},
	{
		State: "call.background",
		Feed: "yes",
		Why: "job/registered and job/settled carry the job id"
	},
	{
		State: "call.failed",
		Feed: "yes",
		Why: "the tool/result content carries the error shape"
	},
	{
		State: "call.denied",
		Feed: "no",
		Why: "tools/pre-execute decides in memory, and nothing names the listener"
	},
	{
		State: "result.truncated",
		Feed: "yes",
		Why: "the result body ends with the truncation marker"
	},
	{
		State: "result.spilled",
		Feed: "no",
		Why: "tools/post-execute replaces the body, and only the locator text lands"
	},
	{
		State: "reference.inbound",
		Feed: "yes",
		Why: "sourceEventSeqs names the call the result answers"
	},
	{
		State: "stream.timed",
		Feed: "yes",
		Why: "the settled message embeds the compact timed stream"
	},
	{
		State: "stream.frame",
		Feed: "no",
		Why: "agent/assistant-stream is process-local and never written"
	},
	{
		State: "error.retry",
		Feed: "yes",
		Why: "llm/retry and llm/retry-started are session events"
	},
	{
		State: "error.silent",
		Feed: "no",
		Why: "a call with no result looks the same as one still running"
	},
	{
		State: "approval.requested",
		Feed: "yes",
		Why: "approval/asked and approval/decided are log-only events"
	},
	{
		State: "cost.strip",
		Feed: "yes",
		Why: "usage rides on assistant/message when the adapter reports it"
	},
	{
		State: "delegation.tree",
		Feed: "no",
		Why: "a child session writes its own file, and nothing joins it"
	}
];
// Source/Content/Lane.ts
var Lane = [
	{
		Label: "Model",
		Span: [
			{
				Label: "step 1",
				Start: 4,
				Duration: 22,
				Kind: "model"
			},
			{
				Label: "step 2",
				Start: 38,
				Duration: 18,
				Kind: "model"
			},
			{
				Label: "step 3",
				Start: 70,
				Duration: 16,
				Kind: "model"
			}
		]
	},
	{
		Label: "Tool",
		Span: [
			{
				Label: "grep",
				Start: 28,
				Duration: 8,
				Kind: "tool"
			},
			{
				Label: "read",
				Start: 58,
				Duration: 6,
				Kind: "tool"
			},
			{
				Label: "write",
				Start: 88,
				Duration: 4,
				Kind: "tool"
			}
		]
	},
	{
		Label: "Disk",
		Span: [{
			Label: "write",
			Start: 92,
			Duration: 3,
			Kind: "disk"
		}]
	},
	{
		Label: "Record",
		Span: [
			{
				Label: "ledger",
				Start: 36,
				Duration: 1,
				Kind: "record"
			},
			{
				Label: "ledger",
				Start: 66,
				Duration: 1,
				Kind: "record"
			},
			{
				Label: "flush",
				Start: 96,
				Duration: 3,
				Kind: "record"
			}
		]
	}
];
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
// Source/Library/Session.server.ts
function KindOf(Type) {
	switch (true) {
		case Type.startsWith("turn/"): return "turn";
		case Type.startsWith("step/"): return "step";
		case Type.startsWith("tool/"): return "tool";
		case Type.startsWith("session/"): return "session";
		default: return "message";
	}
}
function ProvesOf(Type) {
	return {
		"turn/start": "a turn opened",
		"turn/end": "the turn closed",
		"step/start": "a step began",
		"step/end": "the step closed",
		"user/message": "the user's input as committed",
		"assistant/message": "the model's text as settled",
		"system/message": "the prompt the model read",
		"request/header": "the model and the controls of the call",
		"tool/call": "the call the model asked for",
		"tool/result": "the result the model read next"
	}[Type] ?? `the log recorded ${Type}`;
}
function Newest() {
	const Root = join(homedir(), ".dsh", "sessions");
	if (!existsSync(Root)) return void 0;
	let Best;
	for (const Directory of readdirSync(Root)) {
		const Session = join(Root, Directory);
		if (!statSync(Session).isDirectory()) continue;
		for (const Entry of readdirSync(Session)) {
			const Path = join(Session, Entry, "session.v4.jsonl.zstd");
			if (!existsSync(Path)) continue;
			const Time = statSync(Path).mtimeMs;
			if (Best === void 0 || Time > Best.Time) Best = {
				Path,
				Time
			};
		}
	}
	return Best?.Path;
}
function Load() {
	const Path = process.env["DSH_SESSION"] ?? Newest();
	if (Path === void 0 || !existsSync(Path)) return {
		Live: false,
		Record: [],
		Note: "no session log was reachable at build time"
	};
	let Text;
	try {
		Text = execFileSync("zstd", ["-dc", Path], { maxBuffer: 268435456 }).toString("utf8");
	} catch (Error) {
		try {
			Text = zstdDecompressSync(readFileSync(Path)).toString("utf8");
		} catch (Second) {
			return {
				Live: false,
				Record: [],
				Note: `the log at ${Path} could not be decompressed`
			};
		}
	}
	const Line = Text.trim().split("\n").filter(Boolean);
	const Record = [];
	for (const Entry of Line) {
		let Event;
		try {
			Event = JSON.parse(Entry);
		} catch {
			continue;
		}
		if (Event.type === void 0 || Event.seq === void 0) continue;
		if (Event.type === "session") continue;
		Record.push({
			Index: Event.seq,
			Name: Event.type,
			Kind: KindOf(Event.type),
			Proves: ProvesOf(Event.type),
			Durable: true
		});
	}
	if (Record.length === 0) return {
		Live: false,
		Record: [],
		Note: "the newest log had no records"
	};
	return {
		Live: true,
		Path,
		Record: Record.slice(0, 40)
	};
}
var Session = Load();
// Source/pages/trace.astro
var trace_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Trace,
	file: () => $$file,
	url: () => $$url
});
var $$Trace = createComponent$1(($$result, $$props, $$slots) => {
	const Record$1 = Session.Live ? Session.Record : Record;
	const Source = Session.Live ? "read from a session log at build time, in log order" : `the authored fixture, because ${Session.Note ?? "no session log was reachable"}`;
	const Durable = Record$1.filter((Entry) => Entry.Durable).length;
	const Live = Record$1.length - Durable;
	const Scope = Session.Live ? "The log's first slice" : "One authored turn";
	const Call = Record$1.filter((Entry) => Entry.Kind === "tool" && Entry.Name === "tool/call");
	const Result = Record$1.filter((Entry) => Entry.Kind === "tool" && Entry.Name === "tool/result");
	const Waiting = [...Call].reverse().find((Entry) => !Result.some((Answer) => Answer.Index > Entry.Index));
	const Shown = Ledger.slice(0, 8);
	const Feedable = Coverage.filter((Entry) => Entry.Feed === "yes").length;
	const Machine = [
		{
			Name: "Record",
			Id: "record"
		},
		{
			Name: "Lane",
			Id: "lane"
		},
		{
			Name: "Board",
			Id: "board"
		},
		{
			Name: "Graph",
			Id: "graph"
		},
		{
			Name: "Coverage",
			Id: "coverage"
		},
		{
			Name: "Live",
			Id: "live"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Trace",
		"Description": `One run as an operator reads it: ${Record$1.length} records, the lanes, the counts, the package graph, and the states the log can and cannot feed.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Observability",
		"Title": "What a run leaves"
	}, {
		"Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
One run, read every way an operator reads it afterwards: the order the log wrote, the
			time it took, the size of what it left, the topology it ran inside, the states it can and
			cannot feed, and the limit of a static page. Each reading is the same
${renderComponent($$result, "Term", $$Term, { "Name": "trace" })}, and no two draw the same fact.
` })}`,
		"Actions": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Actions" }, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<nav class="trace-page__index" aria-label="The machines"> ${Machine.map((Entry) => renderTemplate`<a${addAttribute(`#${Entry.Id}`, "href")}>${Entry.Name}</a>`)} </nav> ` })}`
	})} <section class="section trace-page__section" id="record"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Record",
		"Lede": "The records the run wrote, in the order the log wrote them, and the one a reader selects. A solid rail is a record a reload keeps; a dashed rail is one the process drops when it ends."
	})} <div class="section__body"> <div class="trace-page"> <div class="trace-page__document"> ${renderComponent($$result, "Trace", $$Trace$1, { "Record": Record$1 })} ${Waiting && renderTemplate`${renderComponent($$result, "Pending", $$Pending, {
		"Name": Waiting.Name,
		"Meta": Waiting.Proves
	})}`} </div> <aside class="trace-page__inspector"> ${renderComponent($$result, "InspectorLive", InspectorLive, {
		"Record": Record$1,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/InspectorLive.tsx",
		"client:component-export": "default"
	})} </aside> </div> <p class="trace-page__note"> ${Source}. The envelope is a&nbsp;<code>type</code>, a&nbsp;<code>seq</code>,
				a&nbsp;<code>time</code>, and a&nbsp;<code>data</code> payload, with
				a&nbsp;<code>surfaceOp</code> and a&nbsp;<code>sourceEventSeqs</code> on the records
				that carry them. The board counts them.
</p> </div> </section> <section class="section trace-page__section" id="lane"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Lane",
		"Lede": "The same turn as time: who was busy, when, and for how long. A bar is one span of work, and its fill weight says what kind of work it was, never a hue."
	})} <div class="section__body"> ${renderComponent($$result, "LaneChart", $$Lane, { "Lane": Lane })} <p class="trace-page__note">
The log carries a wall clock per record, so a lane is derivable from any log; the
				fixture carries no clock, so these spans are authored from the documented turn. The
				short bars on the record lane are the ledger writes, and the board names the files
				they land in.
</p> </div> </section> <section class="section trace-page__section" id="board"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Board",
		"Lede": "The counts, and the files the family writes beside the log. A ledger line is written at the seam the hook answers, in the same dispatch the session log never records, so a hook's decision survives in its ledger even though the trace cannot show it."
	})} <div class="section__body"> <div class="trace-page__board"> ${renderComponent($$result, "StatBand", $$StatBand, { "Stat": [
		{
			Label: "Record",
			Value: Record$1.length,
			Note: Scope
		},
		{
			Label: "Durable",
			Value: Durable,
			Note: "A reload keeps"
		},
		{
			Label: "Live",
			Value: Live,
			Note: "Process only"
		},
		{
			Label: "Ledger",
			Value: Ledger.length,
			Note: "Across both trees"
		}
	] })} <ul class="trace-page__ledger"> ${Shown.map((Entry) => renderTemplate`<li class="trace-page__row"> <a class="trace-page__slug"${addAttribute(Entry.Href, "href")}> ${Entry.Slug} </a> <span class="trace-page__path">${Entry.Path}</span> </li>`)} </ul> <p class="trace-page__note"> ${Shown.length}&nbsp;of them are here, and every path is on the&nbsp;<a${addAttribute(Route.Connect, "href")}>connect page</a>.
					A path is what a package documents, not a file this page has read: a hook that
					ships disabled, as the journal and the monitor do, leaves it empty until it is
					enabled, and the cost plugin keeps a database rather than a log. The same plugin
					exists in both trees, and the journal's two READMEs name two files, so which one a
					run writes depends on the tree it loads.
</p> </div> </div> </section> <section class="section trace-page__section" id="graph"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Graph",
		"Lede": "The packages that write those ledgers are the nodes: the topology the run executes inside, with one arrow from a dependency to the package that requires it."
	})} <div class="section__body"> ${renderComponent($$result, "Explorer", Explorer_default, {
		"Node": Catalogue_server_default.Node,
		"Edge": Catalogue_server_default.Edge,
		"Family": Catalogue_server_default.Family,
		"Kind": Catalogue_server_default.Kind,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/Graph/Explorer.tsx",
		"client:component-export": "default"
	})} <p class="trace-page__note"> ${Catalogue_server_default.Node.length}&nbsp;${renderComponent($$result, "Term", $$Term, { "Name": "node" })} and ${Catalogue_server_default.Edge.length}&nbsp;${renderComponent($$result, "Term", $$Term, { "Name": "edge" })},
				read from both release trees. The graph is the catalogue, not one run's composition:
				a run loads a profile, and which packages that profile holds is a fact this page
				does not have.
</p> </div> </section> <section class="section trace-page__section" id="coverage"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Coverage",
		"Lede": "What the record section can feed, state by state, and what it cannot. The second column names the event that carries a state, or the seam that decides it and writes nothing."
	})} <div class="section__body"> ${renderComponent($$result, "Grid", $$Grid, {
		"Head": ["Feedable", "Why"],
		"Row": Coverage.map((Entry) => ({
			Label: Entry.State,
			Cell: [Entry.Feed, Entry.Why]
		})),
		"Caption": `A filled square is a state the log feeds today, and a dash is a state the harness decides without writing it down. ${Feedable} of ${Coverage.length} are feedable now.`
	})} <p class="trace-page__note">
The waterfalls are dispatched in memory and never written to the log:&nbsp;<code>agent/pre-step</code>,
<code>agent/request</code>, <code>llm/stream</code>, and the three
<code>tools/*</code> events. A durable trace can show that a call happened; it cannot
				show what a listener decided on the way through. The Claude and Codex hook bridge
				records its own decisions as&nbsp;<code>hook/invoked</code> and&nbsp;<code>hook/result</code>;
				the harness's own waterfalls do not.
</p> </div> </section> <section class="section trace-page__section" id="live"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Live",
		"Lede": "This page is static. A running harness would fill the same machines from a stream, and would not fill one dash in the coverage above."
	})} <div class="section__body stack"> <p class="lede">
A live source would change what fills these machines, not their shape: a tail that
				appends while the reader reads, an inspector that follows the newest record, a lane
				from the log's own clock, and a graph cut to the packages the session loaded.
</p> ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "The limit",
		"Tone": "warn"
	}, { "default": ($$result) => renderTemplate` <p>
Every dash above is a fact the harness decides and does not write. A live view of a
					log that lacks a fact is a live view of the same gap: the frames would arrive, and
					the decision behind them would still be missing.
</p> ` })} <div class="cluster"> <a class="button"${addAttribute(Route.Turn, "href")}>
The turn, stage by stage
</a> <a class="button button--quiet"${addAttribute(Route.Tool, "href")}>
One tool call
</a> </div> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/trace.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/trace.astro";
var $$url = "/trace";
// \0virtual:astro:page:Source/pages/trace@_@astro
var page = () => trace_exports;
export { page };
