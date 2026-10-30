// One turn of the harness, with no plugin of this family installed: the twelve
// stages the docs define, and the seams the harness itself dispatches on the
// way through. Transcribed from `Documentation/Interpretability/Turn.md`, which
// cites the harness docs section by section. This is the baseline every page on
// this site compares against, so it is data rather than prose.
export interface Stage {
	/** The order the turn reaches the stage. */
	Index: number;
	/** The stage, named as the docs name it. */
	Title: string;
	/** What enters the stage. */
	Enters: string;
	/** What leaves it. */
	Leaves: string;
	/** The seams dispatched here, in the order the docs list them. */
	Seam: string[];
}

export const Stage: Stage[] = [
	{
		Index: 1,
		Title: "Queue",
		Enters: "the message the user sends",
		Leaves: "an inbox entry, announced live",
		Seam: ["agent/inbox/inserted"],
	},
	{
		Index: 2,
		Title: "Claim",
		Enters: "the pending input and one queued message",
		Leaves: "a durable turn start and one claim per message",
		Seam: ["agent/inbox/claimed"],
	},
	{
		Index: 3,
		Title: "Assemble",
		Enters: "the agent, the model selection, and a cancellation signal",
		Leaves: "the step tool set, the prompt sections, and the admitted tool schemas",
		Seam: ["system-prompt/assemble"],
	},
	{
		Index: 4,
		Title: "Pre-step",
		Enters: "the claimed messages and the model selection",
		Leaves: "an authoritative decision: reject, or enter with messages",
		Seam: ["agent/pre-step"],
	},
	{
		Index: 5,
		Title: "Request",
		Enters: "the accepted messages",
		Leaves: "a durable step start and the adjusted request controls",
		Seam: ["agent/request"],
	},
	{
		Index: 6,
		Title: "Bind",
		Enters: "the call configuration and a cancellation signal",
		Leaves: "a prepared call capability that governs prompt admission",
		Seam: [],
	},
	{
		Index: 7,
		Title: "Admit",
		Enters: "the prepared call capability",
		Leaves: "durable system and user messages, and a frozen request derived from the log",
		Seam: [],
	},
	{
		Index: 8,
		Title: "Stream",
		Enters: "the bound prepared call",
		Leaves: "stream chunks, republished as live start, chunk, and end frames",
		Seam: ["llm/stream", "agent/assistant-stream"],
	},
	{
		Index: 9,
		Title: "Settle",
		Enters: "the stream outcome",
		Leaves: "a durable assistant message, or a durable attempt on failure",
		Seam: ["agent/request-error"],
	},
	{
		Index: 10,
		Title: "Execute",
		Enters: "the tool calls the model asked for",
		Leaves: "a durable call and result per settled tool",
		Seam: ["tools/pre-execute", "tools/execute", "tools/post-execute", "tools/result"],
	},
	{
		Index: 11,
		Title: "Close step",
		Enters: "the settled tool batch",
		Leaves: "a durable step end, then a fresh claim or the stopping checkpoint",
		Seam: [],
	},
	{
		Index: 12,
		Title: "Close turn",
		Enters: "the stopping condition",
		Leaves: "a durable turn end, an idle status, and a persisted session",
		Seam: ["agent/turn-stopping", "agent/status", "session/event", "session/flush"],
	},
];

// Every seam the docs place on the turn path, with the power the dispatch mode
// gives a listener. `Change` is a waterfall: a listener may replace what it
// passes on. `Observe` is an emit: a listener sees a fact that already happened.
// `Stop` is serial: a listener may end the turn but cannot rewrite it.
export interface SeamRow {
	Name: string;
	Producer: string;
	Power: "Change" | "Observe" | "Stop";
	/** What the listener receives, when the docs state it. */
	Shape: string;
}

export const SeamRow: SeamRow[] = [
	{
		Name: "agent/inbox/inserted",
		Producer: "agent-loop",
		Power: "Observe",
		Shape: "the message",
	},
	{
		Name: "agent/inbox/claimed",
		Producer: "agent-loop",
		Power: "Observe",
		Shape: "the message and its turn",
	},
	{
		Name: "agent/inbox/discarded",
		Producer: "agent-loop",
		Power: "Observe",
		Shape: "not stated",
	},
	{ Name: "agent/status", Producer: "agent-loop", Power: "Observe", Shape: "running or idle" },
	{
		Name: "system-prompt/assemble",
		Producer: "system-prompt",
		Power: "Change",
		Shape: "the tool set in, the prompt sections out",
	},
	{
		Name: "agent/pre-step",
		Producer: "agent-loop",
		Power: "Change",
		Shape: "the claimed messages",
	},
	{
		Name: "agent/request",
		Producer: "agent-loop",
		Power: "Change",
		Shape: "the request controls, never the model selection",
	},
	{
		Name: "llm/stream",
		Producer: "llm",
		Power: "Change",
		Shape: "the bound call in, the chunks out",
	},
	{
		Name: "agent/assistant-stream",
		Producer: "agent-loop",
		Power: "Observe",
		Shape: "live start, chunk, and end frames",
	},
	{
		Name: "agent/request-error",
		Producer: "agent-loop",
		Power: "Change",
		Shape: "the error in, a retry or the original error out",
	},
	{
		Name: "tools/pre-execute",
		Producer: "tools",
		Power: "Change",
		Shape: "the call, with allow, deny, or ask",
	},
	{
		Name: "tools/execute",
		Producer: "tools",
		Power: "Change",
		Shape: "the tool body, wrapped for timeout, retry, and metrics",
	},
	{
		Name: "tools/post-execute",
		Producer: "tools",
		Power: "Change",
		Shape: "the result, with accept, block, replace, or add context",
	},
	{ Name: "tools/result", Producer: "tools", Power: "Observe", Shape: "the frozen outcome" },
	{
		Name: "fs/write-intent",
		Producer: "tool-fs",
		Power: "Change",
		Shape: "the write, before it lands",
	},
	{
		Name: "fs/edit-intent",
		Producer: "tool-fs",
		Power: "Change",
		Shape: "the edit, before it lands",
	},
	{
		Name: "approval/request",
		Producer: "user-approval",
		Power: "Change",
		Shape: "a one-shot prompt",
	},
	{
		Name: "agent/turn-stopping",
		Producer: "agent-loop",
		Power: "Stop",
		Shape: "the terminal checkpoint",
	},
	{ Name: "session/event", Producer: "session", Power: "Observe", Shape: "every committed fact" },
	{ Name: "session/flush", Producer: "session", Power: "Observe", Shape: "not stated" },
];

export default Stage;
