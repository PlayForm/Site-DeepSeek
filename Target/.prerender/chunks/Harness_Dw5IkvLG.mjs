// Source/Content/Harness.ts
var Seam = [
	{
		Name: "system-prompt/assemble",
		Mode: "waterfall",
		Declared: "packages/core/system-prompt/src/index.ts:31",
		Harness: ["browser-use-runtime", "working-directory"],
		Carries: "the block the model reads before it writes"
	},
	{
		Name: "llm/stream",
		Mode: "waterfall",
		Declared: "packages/llm/llm/src/index.ts:75",
		Harness: [
			"llm-replay",
			"session-checkpoint-policy",
			"session-title"
		],
		Carries: "each token as it leaves the model"
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
			"workspace-changes"
		],
		Carries: "the tool call the model asked for"
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
			"tool-fs-search"
		],
		Carries: "the result before it becomes model content"
	},
	{
		Name: "batch/proposed",
		Mode: "emit",
		Declared: "the family's own batch plugin",
		Harness: [],
		Carries: "a batch of edits, after the model proposes it"
	},
	{
		Name: "fs/observed",
		Mode: "emit",
		Declared: "packages/fs/fs/src/index.ts:77",
		Harness: [
			"fs-observation-policy",
			"skill-filesystem",
			"workspace-files"
		],
		Carries: "a write that already happened"
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
			"session-controller"
		],
		Carries: "the agent's state between steps"
	}
];
function SeamFor(Name) {
	return Seam.find((Entry) => Entry.Name === Name);
}
export { SeamFor as n, Seam as t };
