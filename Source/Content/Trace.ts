// What one turn leaves behind in the session log: the durable events, in the
// order a reload reads them. Transcribed from the harness documentation
// (`architecture.md`, "Turn flow"; `agent-lifecycle.md`, "Agent Turn And Step
// Lifecycle"), which is the source the site's turn page already cites.
//
// The two columns that matter: `Durable` is what survives a reload, and `Live`
// is what exists only while the process runs. A trace viewer can show both; a
// log can show only the durable one.
export interface Record {
	/** The order the log records it. */
	Index: number;
	/** The event name, as the harness writes it. */
	Name: string;
	/** The group the reader scans by. */
	Kind: "turn" | "step" | "message" | "tool" | "session";
	/** What the record proves, in one clause. */
	Proves: string;
	/** True when a reload still has it. */
	Durable: boolean;
}

export const Record: Record[] = [
	{
		Index: 1,
		Name: "turn/start",
		Kind: "turn",
		Proves: "a turn opened, before any input was claimed",
		Durable: true,
	},
	{
		Index: 2,
		Name: "agent/inbox/claimed",
		Kind: "turn",
		Proves: "which message this turn took",
		Durable: false,
	},
	{
		Index: 3,
		Name: "step/start",
		Kind: "step",
		Proves: "a step began, with its request controls",
		Durable: true,
	},
	{
		Index: 4,
		Name: "system/message",
		Kind: "message",
		Proves: "the system prompt the model read",
		Durable: true,
	},
	{
		Index: 5,
		Name: "user/message",
		Kind: "message",
		Proves: "the user turn as admitted",
		Durable: true,
	},
	{
		Index: 6,
		Name: "request/header",
		Kind: "message",
		Proves: "the model, the effort, and the controls of the call",
		Durable: true,
	},
	{
		Index: 7,
		Name: "agent/assistant-stream",
		Kind: "message",
		Proves: "that the stream was live, and nothing after a reload",
		Durable: false,
	},
	{
		Index: 8,
		Name: "assistant/message",
		Kind: "message",
		Proves: "the text the model produced, as settled",
		Durable: true,
	},
	{
		Index: 9,
		Name: "tool/call",
		Kind: "tool",
		Proves: "the call the model asked for",
		Durable: true,
	},
	{
		Index: 10,
		Name: "tool/result",
		Kind: "tool",
		Proves: "the result the model read next",
		Durable: true,
	},
	{
		Index: 11,
		Name: "step/end",
		Kind: "step",
		Proves: "the step closed and its tool set was disposed",
		Durable: true,
	},
	{
		Index: 12,
		Name: "agent/status",
		Kind: "turn",
		Proves: "the agent went idle",
		Durable: false,
	},
	{
		Index: 13,
		Name: "turn/end",
		Kind: "turn",
		Proves: "the turn closed, and the step count it took",
		Durable: true,
	},
	{
		Index: 14,
		Name: "session/flush",
		Kind: "session",
		Proves: "the log was flushed to its file",
		Durable: true,
	},
];

export default Record;
