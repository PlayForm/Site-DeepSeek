import { _ as createComponent$1, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Term } from "./Term_X89c52ym.mjs";
import { t as $$Callout } from "./Callout_CcAHykrn.mjs";
import { n as $$Trace$1, t as Record } from "./Trace_D13cL0fG.mjs";
import { t as $$Pending } from "./Pending_DFcgK_4t.mjs";
import { createComponent, escape, ssr, ssrAttribute, ssrHydrationKey } from "solid-js/web";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { For, Show, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";
import { execFileSync } from "node:child_process";
import { homedir } from "node:os";
import { zstdDecompressSync } from "node:zlib";
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
	const Source = Session.Live ? `read from a session log at build time: ${Session.Record.length} of its records, in log order` : `the authored fixture, because ${Session.Note ?? "no log was reachable"}`;
	const Durable = Record$1.filter((Entry) => Entry.Durable).length;
	const Live = Record$1.length - Durable;
	const Call = Record$1.filter((Entry) => Entry.Kind === "tool" && Entry.Name === "tool/call");
	const Result = Record$1.filter((Entry) => Entry.Kind === "tool" && Entry.Name === "tool/result");
	const Waiting = [...Call].reverse().find((Entry) => !Result.some((Answer) => Answer.Index > Entry.Index));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Trace",
		"Description": `What one turn leaves in the session log: ${Record$1.length} records, and the ones a reload keeps.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Trace",
		"Title": "What a run leaves"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
One turn writes ${Record$1.length}&nbsp;records. ${Durable}&nbsp;survive a reload and ${Live}
&nbsp;exist only while the process runs, which is the difference between a&nbsp;
${renderComponent($$result, "Term", $$Term, { "Name": "trace" })} and a live view.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Record",
		"Lede": "Read top to bottom. The solid rail is a record the log keeps; the dashed rail is one the process drops when it ends."
	})} <p class="muted">${Source}.</p> <div class="section__body trace-page"> <div class="trace-page__document"> ${renderComponent($$result, "Trace", $$Trace$1, { "Record": Record$1 })} ${Waiting && renderTemplate`${renderComponent($$result, "Pending", $$Pending, {
		"Name": Waiting.Name,
		"Meta": Waiting.Proves
	})}`} </div> <aside class="trace-page__inspector"> ${renderComponent($$result, "InspectorLive", InspectorLive, {
		"Record": Record$1,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@Component/InspectorLive.tsx",
		"client:component-export": "default"
	})} </aside> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Rule",
		"Lede": "The harness keeps the facts and drops the frames, and the family adds to the kept side."
	})} <div class="section__body stack"> ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Durable",
		"Tone": "note"
	}, { "default": ($$result) => renderTemplate`
A durable record is what the session log projects the next request from, so a reader
				who reloads the page sees exactly the messages the model saw.
` })} ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Live",
		"Tone": "note"
	}, { "default": ($$result) => renderTemplate`
A live frame exists so a client can render the turn while it happens. It is not part
				of the log, and a hard stop before settlement leaves no trace of it.
` })} ${renderComponent($$result, "Callout", $$Callout, {
		"Title": "Added",
		"Tone": "warn"
	}, { "default": ($$result) => renderTemplate`
The family writes beside the log, not into it: a ledger line per hook, a journal per
				write, a cost row per event. That is what makes a run inspectable after the process
				ends.
` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Next",
		"Lede": "The same model, driven by a real trace, is the dashboard this site is built toward."
	})} <div class="section__body stack"> <p class="lede">
Every record above is a row the dashboard would read, and every ledger the family
				writes is a column it would add. The page is static today and the layout is the one
				a live source would fill.
</p> <div class="cluster"> <a class="button"${addAttribute(Route.Turn, "href")}>
The turn
</a> <a class="button button--quiet"${addAttribute(Route.Connect, "href")}>
The ledgers
</a> </div> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/trace.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/trace.astro";
var $$url = "/trace";
// \0virtual:astro:page:Source/pages/trace@_@astro
var page = () => trace_exports;
export { page };
