// One realistic turn, as the session log would write it. The fixture is
// checked in, so every page that shows a trace builds with no runtime
// dependency: the same fourteen records, the same sequence numbers, the same
// three states (a call with no result yet, a denied call, a failed result).
//
// The turn: a reader asks for the trace page, the agent reads the page, a read
// fails on a mistyped path, a write is denied by the policy, and a test run is
// left in the background while the step closes.
export interface MockRecord {
	Index: number;
	Name: string;
	Kind: "turn" | "step" | "message" | "tool" | "session";
	Proves: string;
	Durable: boolean;
	/** The payload the inspector shows for this record, when it has one. */
	Payload?: string;
}

export const Mock: MockRecord[] = [
	{
		Index: 1,
		Name: "turn/start",
		Kind: "turn",
		Proves: "a turn opened, before any input was claimed",
		Durable: true,
		Payload: '{"turn":"t-8f2c","step":0,"input":"show me the trace page"}',
	},
	{
		Index: 2,
		Name: "agent/inbox/claimed",
		Kind: "turn",
		Proves: "which message this turn took",
		Durable: false,
		Payload: '{"message":"m-41","bytes":38}',
	},
	{
		Index: 3,
		Name: "step/start",
		Kind: "step",
		Proves: "a step began, with its request controls",
		Durable: true,
		Payload: '{"step":0,"effort":"low","tools":9}',
	},
	{
		Index: 4,
		Name: "system/message",
		Kind: "message",
		Proves: "the system prompt the model read",
		Durable: true,
		Payload: '{"chars":2140,"parts":3}',
	},
	{
		Index: 5,
		Name: "user/message",
		Kind: "message",
		Proves: "the user turn as admitted",
		Durable: true,
		Payload: '{"text":"show me the trace page"}',
	},
	{
		Index: 6,
		Name: "assistant/message",
		Kind: "message",
		Proves: "the text the model produced, as settled",
		Durable: true,
		Payload: '{"text":"I will read the page first."}',
	},
	{
		Index: 7,
		Name: "tool/call",
		Kind: "tool",
		Proves: "the read the model asked for",
		Durable: true,
		Payload: '{"tool":"read","path":"Source/pages/traces.astro"}',
	},
	{
		Index: 8,
		Name: "tool/result",
		Kind: "tool",
		Proves: "the read that failed on a path that does not exist",
		Durable: true,
		Payload: '{"tool":"read","status":"failed","error":"no such file"}',
	},
	{
		Index: 9,
		Name: "tool/call",
		Kind: "tool",
		Proves: "the write the policy denied, so no result follows",
		Durable: true,
		Payload: '{"tool":"write","path":"Source/index.ts"}',
	},
	{
		Index: 10,
		Name: "tool/call",
		Kind: "tool",
		Proves: "the test run the step left running, with no result yet",
		Durable: true,
		Payload: '{"tool":"bash","command":"pnpm test","background":true}',
	},
	{
		Index: 11,
		Name: "step/end",
		Kind: "step",
		Proves: "the step closed and its tool set was disposed",
		Durable: true,
		Payload: '{"step":0,"calls":3}',
	},
	{
		Index: 12,
		Name: "agent/status",
		Kind: "turn",
		Proves: "the agent went idle",
		Durable: false,
		Payload: '{"status":"idle"}',
	},
	{
		Index: 13,
		Name: "turn/end",
		Kind: "turn",
		Proves: "the turn closed, and the step count it took",
		Durable: true,
		Payload: '{"turn":"t-8f2c","steps":1}',
	},
	{
		Index: 14,
		Name: "session/flush",
		Kind: "session",
		Proves: "the log was flushed to its file",
		Durable: true,
		Payload: '{"records":14,"file":"session-8f2c.jsonl"}',
	},
];

// The conversation, as three lines. Every page that shows a conversation reads
// this one, so "the same three lines" is enforced by the build rather than by a
// comment: a plugin page changes exactly one of them and nothing else.
export interface Line {
	/** The sequence number the log assigns the call. */
	Seq: number;
	/** What the model asked for. */
	Call: string;
	/** What the harness answered. */
	Outcome: string;
}

export const Conversation: Line[] = [
	{ Seq: 20, Call: "bash ls -la", Outcome: "ok" },
	{ Seq: 21, Call: "write src/index.ts", Outcome: "ok" },
	{ Seq: 22, Call: "read src/index.ts", Outcome: "ok" },
];

export default Mock;
