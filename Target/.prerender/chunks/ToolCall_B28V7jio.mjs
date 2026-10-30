// Source/Content/ToolCall.ts
var Approval = "approval/request";
var Step = [
	{
		Index: 1,
		Title: "The gate",
		Seam: "tools/pre-execute",
		Receives: "the call the model asked for, by name and arguments",
		Decides: [
			"allow",
			"deny",
			"ask"
		],
		Plugin: ["hook-dsh-workspace-govern", "plugin-dsh-batch-edit"],
		Changes: "The model reads nothing different unless the gate refuses, and then the body never runs and the refusal becomes the result the model reads."
	},
	{
		Index: 2,
		Title: "The body",
		Seam: "tools/execute",
		Receives: "the allowed call, wrapped for timeout, retry, and metrics",
		Decides: [],
		Plugin: ["plugin-dsh-batch-edit", "hook-dsh-ccr"],
		Changes: "Nothing here is rewritten: the family supplies two of the bodies that run, and a result the CCR hook stored comes back only through one of them."
	},
	{
		Index: 3,
		Title: "The result",
		Seam: "tools/post-execute",
		Receives: "the result, before it becomes model content",
		Decides: [
			"accept",
			"block",
			"replace",
			"add context"
		],
		Plugin: [
			"hook-dsh-ccr",
			"hook-dsh-comment-filter",
			"hook-dsh-workspace-govern"
		],
		Changes: "The model reads a one-line preview and a retrieval marker where the full result was, or a source file with its comments gone."
	},
	{
		Index: 4,
		Title: "The record",
		Seam: "tools/result",
		Receives: "the frozen outcome, after normalization and the last content invariant",
		Decides: [],
		Plugin: [],
		Changes: "Nothing changes here: the outcome is frozen, so every change the family makes is already inside the content the model reads."
	}
];
export { Step as n, Approval as t };
