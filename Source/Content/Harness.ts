// The harness's own side of every seam the family uses, transcribed from the
// harness documentation checkout: `docs/event-producer-consumer.md`, the
// generated event matrix. A seam the family listens on is a seam the harness
// already dispatches, and the harness already has listeners there; the family
// adds listeners beside them rather than inventing the event. That fact is the
// base of every comparison the site makes, so it is data, not prose.
//
// `Mode` is the dispatch mode the matrix records: a `waterfall` listener
// receives the payload and may return a changed one, while an `emit` listener
// observes a fact that already happened and cannot change it. A family hook on
// an `emit` seam can therefore record, or act on the world beside the payload,
// but it cannot rewrite the payload itself.
export interface Seam {
	/** The event string, exactly as the harness declares it. */
	Name: string;
	/** The dispatch mode the matrix records. */
	Mode: "waterfall" | "emit" | "serial" | "parallel";
	/** Where the harness declares the event. */
	Declared: string;
	/** The harness's own listeners at the seam, by package name. */
	Harness: string[];
	/** What the seam carries, in one clause. */
	Carries: string;
}

export const Seam: Seam[] = [
	{
		Name: "system-prompt/assemble",
		Mode: "waterfall",
		Declared: "packages/core/system-prompt/src/index.ts:31",
		Harness: ["browser-use-runtime", "working-directory"],
		Carries: "the block the model reads before it writes",
	},
	{
		Name: "llm/stream",
		Mode: "waterfall",
		Declared: "packages/llm/llm/src/index.ts:75",
		Harness: ["llm-replay", "session-checkpoint-policy", "session-title"],
		Carries: "each token as it leaves the model",
	},
	{
		Name: "tools/pre-execute",
		Mode: "waterfall",
		Declared: "packages/core/tools/src/events.ts:18",
		Harness: [
			"auto-review",
			"hooks-claude-code",
			"hooks-codex",
			"liveshare",
			"tool-jobs",
			"workspace-changes",
		],
		Carries: "the tool call the model asked for",
	},
	{
		Name: "tools/post-execute",
		Mode: "waterfall",
		Declared: "packages/core/tools/src/events.ts:41",
		Harness: [
			"claude-code-mods",
			"hooks-claude-code",
			"hooks-codex",
			"repeat-tool-reminder",
			"spill-policy",
			"tool-fs-search",
		],
		Carries: "the result before it becomes model content",
	},
	{
		Name: "batch/proposed",
		Mode: "emit",
		Declared: "the family's own batch plugin",
		Harness: [],
		Carries: "a batch of edits, after the model proposes it",
	},
	{
		Name: "fs/observed",
		Mode: "emit",
		Declared: "packages/fs/fs/src/index.ts:77",
		Harness: ["fs-observation-policy", "skill-filesystem", "workspace-files"],
		Carries: "a write that already happened",
	},
	{
		Name: "agent/status",
		Mode: "emit",
		Declared: "packages/core/agent/src/runtime-types.ts:309",
		Harness: [
			"acp",
			"agent-team",
			"compaction-basic",
			"goal-round-driver",
			"server",
			"session-controller",
		],
		Carries: "the agent's state between steps",
	},
];

export function SeamFor(Name: string): Seam | undefined {
	return Seam.find((Entry) => Entry.Name === Name);
}

export default Seam;
