// One heavy session, authored by hand, as the trace page reads it. Three
// turns, nine steps, and forty records: the harness's own tool names and result
// shapes, the sizes as numbers, and a wall clock in milliseconds.
//
// Two faces per record. `Default` is the run with no family plugin acting, and
// `Family` is the same record after the package named by `Plugin` has touched
// it. A record with no `Family` reads the same in both faces. The page says
// once, in the meta line, that the session is a simulation.
export type Face = "family" | "default";

export type Kind = "tool" | "assistant" | "context" | "system";

export type Dispatch = "emit" | "waterfall" | "serial" | "parallel";

export type Gate = "allow" | "deny" | "ask";

export type State =
	| "ok"
	| "denied"
	| "failed"
	| "background"
	| "waiting"
	| "spilled"
	| "ccr"
	| "noted"
	| "governed"
	| "recorded"
	| "normalized";

export type Resource = "Input" | "Model" | "Tools";

export interface Meta {
	/** The session id the log writes. */
	Id: string;
	/** The model the request header names. */
	Model: string;
	/** The effort the request header names. */
	Effort: string;
	/** True when the run is authored rather than read from a log. */
	Simulated: boolean;
}

export interface Outcome {
	/** The result the model reads, as the log settles it. */
	Result: string;
	/** The result's size in characters, as the log records it. */
	Size: number;
	/** How long the work took, in milliseconds. */
	Took: number;
	/** The one-word state the document chips, when the record has one. */
	State: State;
	/** The clause after the state, when it has one. */
	Note?: string;
	/** The gate the call crossed, when it crossed one. */
	Gate?: Gate;
	/** The listener or policy that decided the gate. */
	By?: string;
	/** Why the gate refused or asked, when it did. */
	Reason?: string;
}

export interface Entry {
	/** The order the log records it. */
	Seq: number;
	/** The turn the record belongs to. */
	Turn: number;
	/** The step the record belongs to. */
	Step: number;
	/** The group the reader scans by. */
	Kind: Kind;
	/** The tool name for a call, or the event name. */
	Name: string;
	/** The payload as the log carries it, in the tool's own shape. */
	Payload: string;
	/** The dispatch the event travels by. */
	Dispatch: Dispatch;
	/** The run with no family plugin. */
	Default: Outcome;
	/** The run with the family, when a plugin changed it. */
	Family?: Outcome;
	/** The package directory that acted. */
	Plugin?: string;
	/** What it did, in one clause. */
	Effect?: string;
}

export interface Turn {
	/** The order the turn opens. */
	Index: number;
	/** What the turn set out to do. */
	Title: string;
}

export interface Step {
	/** The order the step opens within its turn. */
	Index: number;
	/** The turn the step belongs to. */
	Turn: number;
	/** The records the step wrote, in log order. */
	Record: Entry[];
}

export interface Plugin {
	/** The package directory. */
	Slug: string;
	/** Whether the profile loaded it. */
	State: "on" | "off";
	/** The seam it answers at. */
	Seam: string;
	/** What it does there, in one clause. */
	Does: string;
}

export interface Property {
	/** The key, as the contract writes it. */
	Name: string;
	/** The value's type, in the harness's own notation. */
	Type: string;
	/** True when the payload is invalid without the key. */
	Required: boolean;
	/** What the key carries, in one clause. */
	Description: string;
}

export interface Moment {
	/** The record the moment belongs to. */
	Entry: Entry;
	/** The face's outcome for that record. */
	Outcome: Outcome;
	/** Where the span starts, in milliseconds from the session's first record. */
	Start: number;
	/** Where the span ends. */
	End: number;
}

export const Meta: Meta = {
	Id: "7c41e0a2",
	Model: "deepseek-v4.1-flash",
	Effort: "max",
	Simulated: true,
};

// The session's opening request, shown once in display type.
export const Prompt =
	"Add the session view to the trace page. Read the specimens first, then build the lane strip, the tree, the document, and the inspector from one authored run. The family's plugins must be visible on the records they touch, and the page must read the same run with the family off.";

export const Turn: Turn[] = [
	{ Index: 1, Title: "Read the specimens" },
	{ Index: 2, Title: "Write the run" },
	{ Index: 3, Title: "Repair the run" },
];

export const Record: Entry[] = [
	{
		Seq: 4,
		Turn: 1,
		Step: 1,
		Kind: "context",
		Name: "context/assemble",
		Payload: '{"sections":9,"tools":14}',
		Dispatch: "waterfall",
		Default: {
			Result: "system prompt assembled: 9 sections, 14 tool schemas, 24,812 chars",
			Size: 61,
			Took: 140,
			State: "ok",
		},
	},
	{
		Seq: 5,
		Turn: 1,
		Step: 1,
		Kind: "context",
		Name: "context/recall",
		Payload: '{"query":"session view","hits":3}',
		Dispatch: "parallel",
		Default: {
			Result: "3 journal entries recalled: the trace page, the session view, and the lane strip",
			Size: 79,
			Took: 60,
			State: "ok",
		},
	},
	{
		Seq: 8,
		Turn: 1,
		Step: 1,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"Temporary/Corca/Curated/Components.md"}',
		Dispatch: "serial",
		Default: {
			Result: "the components file: the line, the gutter, the chip, and the card, measured",
			Size: 76,
			Took: 26,
			State: "ok",
		},
		Family: {
			Result: "the components file: the line, the gutter, the chip, and the card, measured\n\ndoc-suggester: the line and gutter anatomy is documented in Components.md; read it before the document.",
			Size: 196,
			Took: 30,
			State: "noted",
			Note: "doc-suggester",
		},
		Plugin: "hook-dsh-doc-suggester",
		Effect: "appended the document that owns the line anatomy",
	},
	{
		Seq: 11,
		Turn: 1,
		Step: 1,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"Temporary/Corca/Curated/Trace-UX-Model.md"}',
		Dispatch: "serial",
		Default: {
			Result: "the trace model: the session as a tree, a document, and an inspector",
			Size: 69,
			Took: 26,
			State: "ok",
		},
	},
	{
		Seq: 14,
		Turn: 1,
		Step: 1,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The specimens name four machines: a lane for time, a tree for turns and steps, a document for records, and an inspector for the selected record."}',
		Dispatch: "emit",
		Default: {
			Result: "The specimens name four machines: a lane for time, a tree for turns and steps, a document for records, and an inspector for the selected record.",
			Size: 146,
			Took: 1240,
			State: "ok",
		},
	},
	{
		Seq: 17,
		Turn: 1,
		Step: 2,
		Kind: "tool",
		Name: "bash",
		Payload: '{"command":"ls Source","description":"List the source folders"}',
		Dispatch: "serial",
		Default: {
			Result: "Source/Component\nSource/Content\nSource/Layout\nSource/Library\nSource/Stylesheet",
			Size: 78,
			Took: 62,
			State: "ok",
		},
	},
	{
		Seq: 19,
		Turn: 1,
		Step: 2,
		Kind: "tool",
		Name: "bash",
		Payload: '{"command":"rg -n trace-page Source","description":"Find the trace page wiring"}',
		Dispatch: "serial",
		Default: {
			Result: "Source/pages/trace.astro:99: section trace-page__section\nSource/Stylesheet/Component/TracePage.scss:1",
			Size: 99,
			Took: 48,
			State: "ok",
		},
	},
	{
		Seq: 22,
		Turn: 1,
		Step: 2,
		Kind: "tool",
		Name: "grep",
		Payload: '{"pattern":"InspectorLive","path":"Source"}',
		Dispatch: "serial",
		Default: {
			Result: "Source/Component/InspectorLive.tsx\nSource/pages/trace.astro",
			Size: 58,
			Took: 24,
			State: "ok",
		},
	},
	{
		Seq: 25,
		Turn: 1,
		Step: 2,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"Source/Component/InspectorLive.tsx"}',
		Dispatch: "serial",
		Default: {
			Result: "the inspector: a signal, a document-level click, and a radio group of tabs",
			Size: 78,
			Took: 30,
			State: "ok",
		},
	},
	{
		Seq: 28,
		Turn: 1,
		Step: 2,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The inspector already listens for a click on a data-seq line. The new record shape can keep that listener and add the family face."}',
		Dispatch: "emit",
		Default: {
			Result: "The inspector already listens for a click on a data-seq line. The new record shape can keep that listener and add the family face.",
			Size: 133,
			Took: 1460,
			State: "ok",
		},
	},
	{
		Seq: 31,
		Turn: 1,
		Step: 3,
		Kind: "tool",
		Name: "write",
		Payload: '{"file_path":"Source/pages/trace.astro","content":"<the session view>"}',
		Dispatch: "serial",
		Default: {
			Result: "wrote 12,884 bytes to Source/pages/trace.astro",
			Size: 45,
			Took: 34,
			State: "ok",
		},
		Family: {
			Result: "denied: the file was never read first",
			Size: 38,
			Took: 2,
			State: "denied",
			Note: "not read first",
			Gate: "deny",
			By: "fs-observation-policy",
			Reason: "file not read first",
		},
		Plugin: "hook-dsh-edit-suggester",
		Effect: "denied the write through the observation policy",
	},
	{
		Seq: 34,
		Turn: 1,
		Step: 3,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"Source/pages/trace.astro"}',
		Dispatch: "serial",
		Default: {
			Result: "the current trace page: seven sections, one record list, one inspector",
			Size: 70,
			Took: 28,
			State: "ok",
		},
	},
	{
		Seq: 37,
		Turn: 1,
		Step: 3,
		Kind: "tool",
		Name: "write",
		Payload:
			'{"file_path":"Source/pages/trace.astro","content":"<the session view, now read>"}',
		Dispatch: "serial",
		Default: {
			Result: "wrote 12,884 bytes to Source/pages/trace.astro",
			Size: 45,
			Took: 36,
			State: "ok",
		},
	},
	{
		Seq: 40,
		Turn: 1,
		Step: 3,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The page now renders the session view. The next pass writes the data and runs the check."}',
		Dispatch: "emit",
		Default: {
			Result: "The page now renders the session view. The next pass writes the data and runs the check.",
			Size: 91,
			Took: 1180,
			State: "ok",
		},
	},
	{
		Seq: 43,
		Turn: 2,
		Step: 4,
		Kind: "system",
		Name: "request/header",
		Payload: '{"model":"deepseek-v4.1-flash","effort":"max","tools":14}',
		Dispatch: "parallel",
		Default: {
			Result: "deepseek-v4.1-flash, effort max, 14 tools, 24,812 prompt chars",
			Size: 59,
			Took: 4,
			State: "ok",
		},
	},
	{
		Seq: 46,
		Turn: 2,
		Step: 4,
		Kind: "tool",
		Name: "edit",
		Payload:
			'{"file_path":"Source/pages/trace.astro","old_string":"<Trace Record={Record} />","new_string":"<SessionView />"}',
		Dispatch: "serial",
		Default: {
			Result: "edited Source/pages/trace.astro: 1 replacement",
			Size: 48,
			Took: 32,
			State: "ok",
		},
	},
	{
		Seq: 49,
		Turn: 2,
		Step: 4,
		Kind: "tool",
		Name: "write",
		Payload:
			'{"file_path":"package.json","content":"{\\"dependencies\\":{\\"leftpad\\":\\"^2.0.0\\"}}"}',
		Dispatch: "serial",
		Default: {
			Result: "wrote 1,204 bytes to package.json",
			Size: 34,
			Took: 30,
			State: "ok",
		},
		Family: {
			Result: "wrote 1,204 bytes to package.json",
			Size: 34,
			Took: 32,
			State: "governed",
			Note: "result unchanged",
		},
		Plugin: "hook-dsh-package-governor",
		Effect: "held leftpad at the registry's latest; the result is unchanged",
	},
	{
		Seq: 52,
		Turn: 2,
		Step: 4,
		Kind: "tool",
		Name: "bash",
		Payload: '{"command":"pnpm check","description":"Run the site check"}',
		Dispatch: "serial",
		Default: {
			Result: "make: *** Error 1\nsrc/session.ts:41: error TS2322: Type 'string' is not assignable to type 'number'.\n... 139 more lines",
			Size: 5231,
			Took: 1820,
			State: "ok",
		},
		Family: {
			Result: "[terminal:exit 1 | 142 lines | make: *** Error 1] plus <<<CCR:9d3c1f0a|terminal|5231>>>",
			Size: 92,
			Took: 1960,
			State: "ccr",
		},
		Plugin: "hook-dsh-ccr",
		Effect: "replaced the 5,231-char output with a preview and a retrieval marker",
	},
	{
		Seq: 55,
		Turn: 2,
		Step: 4,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The check fails on a string assigned to a number in the session data. The next step reads the file and repairs the type."}',
		Dispatch: "emit",
		Default: {
			Result: "The check fails on a string assigned to a number in the session data. The next step reads the file and repairs the type.",
			Size: 127,
			Took: 1520,
			State: "ok",
		},
	},
	{
		Seq: 58,
		Turn: 2,
		Step: 5,
		Kind: "tool",
		Name: "bash",
		Payload:
			'{"command":"rg -n Size Source/Content/Session.ts","description":"Find the size fields"}',
		Dispatch: "serial",
		Default: {
			Result: "Source/Content/Session.ts:41: Size: 5_231\nSource/Content/Session.ts:42: Took: 1_820",
			Size: 78,
			Took: 52,
			State: "ok",
		},
		Family: {
			Result: "Tool-coach note (strike 3, read-class bash pattern): use read for a single file.\n\nSource/Content/Session.ts:41: Size: 5_231\nSource/Content/Session.ts:42: Took: 1_820",
			Size: 194,
			Took: 54,
			State: "noted",
			Note: "strike 3",
		},
		Plugin: "hook-dsh-tool-coach",
		Effect: "prepended the third-strike coaching note",
	},
	{
		Seq: 61,
		Turn: 2,
		Step: 5,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":".dsh/sessions/7c41e0a2/session.v4.jsonl"}',
		Dispatch: "serial",
		Default: {
			Result: "the full session log: 4.2 MB of records, one JSON object per line",
			Size: 4208000,
			Took: 240,
			State: "ok",
		},
		Family: {
			Result: "<<<CCR:7f21a0c3|fs|4208000>>> spilled to .dsh/spill/7f21a0c3",
			Size: 64,
			Took: 420,
			State: "spilled",
		},
		Plugin: "hook-dsh-ccr",
		Effect: "spilled the 4.2 MB result and returned a marker",
	},
	{
		Seq: 64,
		Turn: 2,
		Step: 5,
		Kind: "system",
		Name: "approval/request",
		Payload:
			'{"tool":"write","file_path":"/Users/nikola/Developer/Documentation/Module/astro/package.json"}',
		Dispatch: "waterfall",
		Default: {
			Result: "approved without a wait",
			Size: 22,
			Took: 0,
			State: "ok",
		},
		Family: {
			Result: "waiting for the operator: write outside the workspace",
			Size: 52,
			Took: 42000,
			State: "waiting",
			Gate: "ask",
			By: "ctx.approval",
			Reason: "write outside the workspace",
		},
		Plugin: "hook-dsh-workspace-govern",
		Effect: "asked before the write outside the workspace",
	},
	{
		Seq: 67,
		Turn: 2,
		Step: 5,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The operator allowed the outside write. The next step writes the governed package and records the journal line."}',
		Dispatch: "emit",
		Default: {
			Result: "The operator allowed the outside write. The next step writes the governed package and records the journal line.",
			Size: 111,
			Took: 1360,
			State: "ok",
		},
	},
	{
		Seq: 70,
		Turn: 2,
		Step: 6,
		Kind: "tool",
		Name: "write",
		Payload:
			'{"file_path":"/Users/nikola/Developer/Documentation/Module/astro/package.json","content":"<the astro package, governed>"}',
		Dispatch: "serial",
		Default: {
			Result: "wrote 1,204 bytes to the astro package",
			Size: 38,
			Took: 34,
			State: "ok",
		},
	},
	{
		Seq: 73,
		Turn: 2,
		Step: 6,
		Kind: "system",
		Name: "fs/observed",
		Payload:
			'{"path":"/Users/nikola/Developer/Documentation/Module/astro/package.json","batch":3}',
		Dispatch: "emit",
		Default: {
			Result: "no journal line",
			Size: 16,
			Took: 3,
			State: "ok",
		},
		Family: {
			Result: "journal: recorded write /Users/nikola/Developer/Documentation/Module/astro/package.json (batch 3, max 200)",
			Size: 106,
			Took: 5,
			State: "recorded",
			Note: "batch 3",
		},
		Plugin: "hook-dsh-workspace-journal",
		Effect: "recorded the governed write to the journal",
	},
	{
		Seq: 76,
		Turn: 2,
		Step: 6,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"/Users/nikola/Developer/Documentation/Module/astro/package.json"}',
		Dispatch: "serial",
		Default: {
			Result: "the package file: one dependency range, leftpad at ^1.0.0 after the governor",
			Size: 77,
			Took: 26,
			State: "ok",
		},
	},
	{
		Seq: 79,
		Turn: 2,
		Step: 6,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The governed write landed\\u2014the journal holds its batch\\u2014and the range now points at the registry latest."}',
		Dispatch: "emit",
		Default: {
			Result: "The governed write landed\u2014the journal holds its batch\u2014and the range now points at the registry latest.",
			Size: 108,
			Took: 1400,
			State: "ok",
		},
		Family: {
			Result: "The governed write landed - the journal holds its batch - and the range now points at the registry latest.",
			Size: 112,
			Took: 1410,
			State: "normalized",
			Note: "2 dashes",
		},
		Plugin: "hook-dsh-normalize-dash",
		Effect: "rewrote the two em dashes to hyphens",
	},
	{
		Seq: 82,
		Turn: 3,
		Step: 7,
		Kind: "context",
		Name: "context/trim",
		Payload: '{"dropped":3,"kept":1208}',
		Dispatch: "waterfall",
		Default: {
			Result: "context trimmed: 3 tool results dropped, 1,208 chars kept",
			Size: 58,
			Took: 90,
			State: "ok",
		},
	},
	{
		Seq: 85,
		Turn: 3,
		Step: 7,
		Kind: "tool",
		Name: "bash",
		Payload:
			'{"command":"pnpm diagrams","description":"Rebuild the diagrams","run_in_background":true}',
		Dispatch: "serial",
		Default: {
			Result: "started the diagram build in the background: job 5f21a0c3",
			Size: 59,
			Took: 35300,
			State: "background",
		},
	},
	{
		Seq: 88,
		Turn: 3,
		Step: 7,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"Temporary/Corca/Assets/Screenshots/61-missing.png"}',
		Dispatch: "serial",
		Default: {
			Result: "EACCES: permission denied, open Temporary/Corca/Assets/Screenshots/61-missing.png",
			Size: 84,
			Took: 18,
			State: "failed",
			Note: "EACCES",
		},
	},
	{
		Seq: 91,
		Turn: 3,
		Step: 7,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The missing screenshot is a dead reference in the brief. The next step greps the page for the path and repairs it."}',
		Dispatch: "emit",
		Default: {
			Result: "The missing screenshot is a dead reference in the brief. The next step greps the page for the path and repairs it.",
			Size: 113,
			Took: 1260,
			State: "ok",
		},
	},
	{
		Seq: 94,
		Turn: 3,
		Step: 8,
		Kind: "tool",
		Name: "grep",
		Payload: '{"pattern":"61-missing","path":"Source"}',
		Dispatch: "serial",
		Default: {
			Result: 'Source/pages/trace.astro:1: import "@Stylesheet/Component/TracePage.scss";',
			Size: 69,
			Took: 22,
			State: "ok",
		},
	},
	{
		Seq: 97,
		Turn: 3,
		Step: 8,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"Source/pages/trace.astro"}',
		Dispatch: "serial",
		Default: {
			Result: "the trace page: the old record list, the lane chart, and the inspector",
			Size: 70,
			Took: 24,
			State: "ok",
		},
	},
	{
		Seq: 100,
		Turn: 3,
		Step: 8,
		Kind: "tool",
		Name: "write",
		Payload:
			'{"file_path":"Source/pages/trace.astro","content":"<the session view, repaired>"}',
		Dispatch: "serial",
		Default: {
			Result: "wrote 12,902 bytes to Source/pages/trace.astro",
			Size: 45,
			Took: 38,
			State: "ok",
		},
	},
	{
		Seq: 103,
		Turn: 3,
		Step: 8,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The dead reference is gone. The last step flushes the session and reads the page once more."}',
		Dispatch: "emit",
		Default: {
			Result: "The dead reference is gone. The last step flushes the session and reads the page once more.",
			Size: 94,
			Took: 1320,
			State: "ok",
		},
	},
	{
		Seq: 106,
		Turn: 3,
		Step: 9,
		Kind: "system",
		Name: "request/header",
		Payload: '{"model":"deepseek-v4.1-flash","effort":"max","tools":14}',
		Dispatch: "parallel",
		Default: {
			Result: "deepseek-v4.1-flash, effort max, 14 tools, 6,204 prompt chars",
			Size: 58,
			Took: 3,
			State: "ok",
		},
	},
	{
		Seq: 109,
		Turn: 3,
		Step: 9,
		Kind: "tool",
		Name: "bash",
		Payload: '{"command":"ls -la Target/trace","description":"Check the built page"}',
		Dispatch: "serial",
		Default: {
			Result: "Target/trace/index.html: 1 file, 12,902 bytes",
			Size: 47,
			Took: 68,
			State: "ok",
		},
	},
	{
		Seq: 112,
		Turn: 3,
		Step: 9,
		Kind: "tool",
		Name: "read",
		Payload: '{"file_path":"Target/trace/index.html"}',
		Dispatch: "serial",
		Default: {
			Result: "the built page: one h1, two h2 sections, forty records, and one island",
			Size: 76,
			Took: 22,
			State: "ok",
		},
	},
	{
		Seq: 115,
		Turn: 3,
		Step: 9,
		Kind: "assistant",
		Name: "assistant/message",
		Payload:
			'{"text":"The session view is built. The four machines share one island, and the family face is the default."}',
		Dispatch: "emit",
		Default: {
			Result: "The session view is built. The four machines share one island, and the family face is the default.",
			Size: 96,
			Took: 980,
			State: "ok",
		},
	},
	{
		Seq: 118,
		Turn: 3,
		Step: 9,
		Kind: "system",
		Name: "session/flush",
		Payload: '{"records":40,"steps":9,"turns":3}',
		Dispatch: "serial",
		Default: {
			Result: "session flushed: 40 records, 9 steps, 3 turns",
			Size: 45,
			Took: 6,
			State: "ok",
		},
	},
];

// The steps are an expression over the records, not a second list: each turn's
// distinct step numbers, sorted, with the records that carry them.
export const Step: Step[] = Turn.flatMap((Group) => {
	const Index = [
		...new Set(Record.filter((Entry) => Entry.Turn === Group.Index).map((Entry) => Entry.Step)),
	].sort((Left, Right) => Left - Right);

	return Index.map((Order) => ({
		Index: Order,
		Turn: Group.Index,
		Record: Record.filter((Entry) => Entry.Turn === Group.Index && Entry.Step === Order),
	}));
});

export const Plugin: Plugin[] = [
	{
		Slug: "hook-dsh-ccr",
		State: "on",
		Seam: "tools/post-execute",
		Does: "replaces an oversized result with a marker and a preview",
	},
	{
		Slug: "hook-dsh-doc-suggester",
		State: "on",
		Seam: "tools/post-execute",
		Does: "appends the document that owns the file just read",
	},
	{
		Slug: "hook-dsh-edit-suggester",
		State: "on",
		Seam: "tools/post-execute",
		Does: "denies a write whose file was never read",
	},
	{
		Slug: "hook-dsh-normalize-dash",
		State: "on",
		Seam: "llm/stream",
		Does: "rewrites the dash family to a hyphen",
	},
	{
		Slug: "hook-dsh-package-governor",
		State: "on",
		Seam: "fs/observed",
		Does: "holds a dependency at the registry's latest",
	},
	{
		Slug: "hook-dsh-tool-coach",
		State: "on",
		Seam: "tools/post-execute",
		Does: "prepends a coaching note when a pattern repeats",
	},
	{
		Slug: "hook-dsh-workspace-govern",
		State: "on",
		Seam: "tools/pre-execute",
		Does: "asks the operator before a write outside the workspace",
	},
	{
		Slug: "hook-dsh-workspace-journal",
		State: "on",
		Seam: "fs/observed",
		Does: "records a governed write to the journal",
	},
	{
		Slug: "hook-dsh-comment-filter",
		State: "off",
		Seam: "tools/post-execute",
		Does: "strips comments from a result",
	},
	{
		Slug: "hook-dsh-package-pinner",
		State: "off",
		Seam: "fs/observed",
		Does: "pins a dependency range",
	},
];

// The five tool contracts the run calls, and the envelope every event carries.
export const Schema: { [Name: string]: Property[] } = {
	bash: [
		{
			Name: "description",
			Type: "string",
			Required: true,
			Description: "What the command does, in active voice.",
		},
		{
			Name: "command",
			Type: "string",
			Required: true,
			Description: "The command line to run.",
		},
		{
			Name: "timeoutMs",
			Type: "number",
			Required: false,
			Description: "A cap in milliseconds; on expiry the command becomes a job.",
		},
		{
			Name: "workdir",
			Type: "string",
			Required: false,
			Description: "The directory to run in; defaults to the session workspace.",
		},
		{
			Name: "run_in_background",
			Type: "boolean",
			Required: false,
			Description: "Return a job id immediately, with no timeout.",
		},
	],
	read: [
		{
			Name: "file_path",
			Type: "string",
			Required: true,
			Description: "The file to read, relative to the workspace.",
		},
		{
			Name: "offset",
			Type: "number",
			Required: false,
			Description: "The first line to return.",
		},
		{
			Name: "limit",
			Type: "number",
			Required: false,
			Description: "How many lines to return.",
		},
	],
	write: [
		{
			Name: "file_path",
			Type: "string",
			Required: true,
			Description: "The file to write.",
		},
		{
			Name: "content",
			Type: "string",
			Required: true,
			Description: "The bytes to write.",
		},
	],
	edit: [
		{
			Name: "file_path",
			Type: "string",
			Required: true,
			Description: "The file to edit.",
		},
		{
			Name: "old_string",
			Type: "string",
			Required: true,
			Description: "The text to replace.",
		},
		{
			Name: "new_string",
			Type: "string",
			Required: true,
			Description: "The replacement text.",
		},
		{
			Name: "replace_all",
			Type: "boolean",
			Required: false,
			Description: "Replace every match, not the first.",
		},
	],
	grep: [
		{
			Name: "pattern",
			Type: "string",
			Required: true,
			Description: "The expression to find.",
		},
		{
			Name: "path",
			Type: "string",
			Required: false,
			Description: "The file or directory to search.",
		},
		{
			Name: "include",
			Type: "string",
			Required: false,
			Description: "A glob the searched files must match.",
		},
	],
};

export const Envelope: Property[] = [
	{
		Name: "type",
		Type: "string",
		Required: true,
		Description: "The event name the log writes.",
	},
	{
		Name: "seq",
		Type: "number",
		Required: true,
		Description: "The record's place in the log.",
	},
	{
		Name: "time",
		Type: "number",
		Required: true,
		Description: "The wall clock, in milliseconds.",
	},
	{
		Name: "data",
		Type: "object",
		Required: true,
		Description: "The payload the event carries.",
	},
];

export const DispatchOrder: Dispatch[] = ["emit", "waterfall", "serial", "parallel"];

export const DispatchGlyph: { [Name in Dispatch]: string } = {
	emit: "*",
	waterfall: "~",
	serial: "=",
	parallel: ">",
};

/** The outcome the given face reads. */
export function OutcomeOf(Entry: Entry, Face: Face): Outcome {
	return Face === "family" && Entry.Family !== undefined ? Entry.Family : Entry.Default;
}

/** True when the family changed this record in the given face. */
export function Touched(Entry: Entry, Face: Face): boolean {
	return Face === "family" && Entry.Family !== undefined && Entry.Plugin !== undefined;
}

/** The session as a clock: each record starts where the one before it ended. */
export function Timeline(Face: Face): Moment[] {
	let Clock = 0;

	return Record.map((Entry) => {
		const Outcome = OutcomeOf(Entry, Face);
		const Start = Clock;

		Clock = Start + Outcome.Took;

		return { Entry, Outcome, Start, End: Clock };
	});
}

/** The wall clock the face's run occupies. */
export function TotalOf(Face: Face): number {
	return Timeline(Face).reduce((Total, Item) => Math.max(Total, Item.End), 0);
}

/** The resource a record occupies, or none when the lane does not draw it. */
export function ResourceOf(Entry: Entry): Resource | undefined {
	switch (true) {
		case Entry.Kind === "context":
			return "Input";
		case Entry.Kind === "assistant":
			return "Model";
		case Entry.Kind === "tool":
			return "Tools";
		case Entry.Name === "approval/request":
			return "Tools";
		default:
			return undefined;
	}
}

/** The word a lane bar carries. */
export function SpanLabel(Entry: Entry): string {
	switch (true) {
		case Entry.Kind === "tool":
			return Entry.Name;
		case Entry.Kind === "assistant":
			return `step ${Entry.Step}`;
		case Entry.Kind === "context":
			return Entry.Name.replace("context/", "");
		default:
			return "approval";
	}
}

/** The tool calls a step wrote. */
export function Call(Step: Step): Entry[] {
	return Step.Record.filter((Entry) => Entry.Kind === "tool");
}

/** The result characters a step's calls carry in the given face. */
export function Characters(Step: Step, Face: Face): number {
	return Call(Step).reduce((Total, Entry) => Total + OutcomeOf(Entry, Face).Size, 0);
}

/** The records a turn wrote. */
export function TurnRecord(Index: number): number {
	return Record.filter((Entry) => Entry.Turn === Index).length;
}

/** The steps a turn wrote. */
export function TurnStep(Index: number): Step[] {
	return Step.filter((Item) => Item.Turn === Index);
}

/** The family packages that act in the given face. */
export function Acting(Face: Face): number {
	return new Set(Record.filter((Entry) => Touched(Entry, Face)).map((Entry) => Entry.Plugin))
		.size;
}

/** The records one package touched in the given face. */
export function PluginRecord(Slug: string, Face: Face): number {
	return Record.filter((Entry) => Touched(Entry, Face) && Entry.Plugin === Slug).length;
}

/** The clause a state's chip carries, derived where the number is a measurement. */
export function NoteOf(Entry: Entry, Outcome: Outcome): string | undefined {
	switch (true) {
		case Outcome.State === "waiting":
			return FormatDuration(Outcome.Took);
		case Outcome.State === "background":
			return FormatDuration(Outcome.Took);
		case Outcome.State === "spilled":
			return FormatSize(Entry.Default.Size);
		case Outcome.State === "ccr":
			return `preview ${FormatNumber(Outcome.Size)} of ${FormatNumber(Entry.Default.Size)}`;
		default:
			return Outcome.Note;
	}
}

/** A count with its thousands marked. */
export function FormatNumber(Value: number): string {
	return String(Value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** A result size: characters below a megabyte, megabytes above it. */
export function FormatSize(Size: number): string {
	return Size >= 1_000_000
		? `${(Size / 1_000_000).toFixed(1)} MB`
		: `${FormatNumber(Size)} chars`;
}

/** A duration in the unit a reader can hold. */
export function FormatDuration(Millisecond: number): string {
	if (Millisecond >= 60_000) {
		const Minute = Math.floor(Millisecond / 60_000);
		const Second = Math.round((Millisecond % 60_000) / 1_000);

		return `${Minute}m ${String(Second).padStart(2, "0")}s`;
	}

	if (Millisecond >= 1_000) {
		const Second = Millisecond / 1_000;

		return `${Number.isInteger(Second) ? Second : Second.toFixed(1)}s`;
	}

	return `${Millisecond}ms`;
}

/** A time-axis label. */
export function FormatTick(Millisecond: number): string {
	return Millisecond >= 120_000
		? `${Math.round(Millisecond / 60_000)}m`
		: `${Math.round(Millisecond / 1_000)}s`;
}

/** A part of a whole, as a percentage with one decimal at most. */
export function Percent(Part: number, Whole: number): number {
	return Whole === 0 ? 0 : Math.round((Part / Whole) * 1_000) / 10;
}

/** A part of a whole, as the percentage string an inline style wants. */
export function Share(Part: number, Whole: number): string {
	return `${Whole === 0 ? 0 : (Part / Whole) * 100}%`;
}

/** A count and its word, with the plural the count asks for. */
export function Plural(Count: number, Word: string): string {
	return `${FormatNumber(Count)} ${Word}${Count === 1 ? "" : "s"}`;
}

/** The contract a record answers to: its tool's, or the event envelope. */
export function SchemaFor(Name: string): Property[] {
	return Schema[Name] ?? Envelope;
}

export default Record;
