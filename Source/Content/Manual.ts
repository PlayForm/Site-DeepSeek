import type { SessionData } from "@Content/Session";

// The manual's run: one turn, one step, three records, and the ellipsis hook
// acting on the stream. The session view is shared with the trace and package
// pages, so this file is the manual's own `SessionData` rather than an edit to
// the shared session: the same lane, tree, document, and inspector, fed the
// activation the page is about instead of the trace page's forty-record run.
//
// The two faces are the two worlds in one component. `Default` is the stream as
// the adapter sent it, with the U+2026 code points; `Family` is the transcript
// after the hook rewrote them to three ASCII dots each. The face switch at the
// top of the document is the before/after control.
//
// The text is authored, like the rest of the sheet's run, and the meta line
// says `simulated`; the ledger line and the count are the package's own.
export const Manual: SessionData = {
	Meta: {
		Id: "0b7e2f41",
		Model: "deepseek-v4.1-flash",
		Effort: "max",
		Simulated: true,
	},
	Prompt: "Show the stream rewrite: the model streams, the hook normalizes, and the transcript keeps three dots.",
	Turn: [{ Index: 1, Title: "Stream the rewrite" }],
	Record: [
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
				Took: 1200,
				State: "ok",
			},
		},
		{
			Seq: 7,
			Turn: 1,
			Step: 1,
			Kind: "assistant",
			Name: "assistant/message",
			Payload: '{"text":"Loading\u2026 the run\u2026"}',
			Dispatch: "emit",
			Default: {
				Result: "Loading\u2026 the run\u2026",
				Size: 17,
				Took: 6000,
				State: "ok",
			},
			Family: {
				Result: "Loading... the run...",
				Size: 21,
				Took: 6000,
				State: "normalized",
				Note: "2 code points",
			},
			Plugin: "hook-dsh-normalize-ellipsis",
			Effect: "rewrote 2 code points to six dots",
		},
		{
			Seq: 9,
			Turn: 1,
			Step: 1,
			Kind: "tool",
			Name: "read",
			Payload: '{"file_path":"Source/Function/Replace.ts"}',
			Dispatch: "serial",
			Default: {
				Result: "the replacer: one character class, one replacement, one count",
				Size: 62,
				Took: 800,
				State: "ok",
			},
		},
	],
	Plugin: [
		{
			Slug: "hook-dsh-normalize-ellipsis",
			State: "on",
			Seam: "llm/stream",
			Does: "rewrites every U+2026 to three dots as the model streams",
		},
	],
};
