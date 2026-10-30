// One tool call through the harness's pipeline, in the order the harness runs
// it: four steps, four seams, and the family packages that stand at each one.
// Transcribed from `docs/tool-execution-pipeline.md` and the turn flow in
// `docs/architecture.md`, and from the `tools/pre-execute` and
// `tools/post-execute` registrations in the four packages named below.
//
// `Seam` is the event string the harness dispatches at the step, or "" when the
// step has no seam of its own. `Decides` is the decision vocabulary the docs
// give at that seam: an empty list means the docs name none there, and the page
// says that rather than inventing a word for it. `Plugin` holds package
// directories, not display names, so the page links the package the source
// lives in.
export interface Step {
	/** The order the harness reaches the step. */
	Index: number;
	/** The step, in one word. */
	Title: string;
	/** The event the harness dispatches here, or "" when there is none. */
	Seam: string;
	/** What enters the step. */
	Receives: string;
	/** The decision vocabulary the docs give here. */
	Decides: string[];
	/** The package directories that act here. */
	Plugin: string[];
	/** What the model sees differently afterwards. */
	Changes: string;
}

// The approval seam is a branch of the gate, not a step of its own: the gate
// returns `ask`, and the one-shot prompt decides whether the call continues.
// The docs name the prompt `ctx.approval`; the seam string is the one the
// site's own seam table carries.
export const Approval = "approval/request";

export const Step: Step[] = [
	{
		Index: 1,
		Title: "The gate",
		Seam: "tools/pre-execute",
		Receives: "the call the model asked for, by name and arguments",
		Decides: ["allow", "deny", "ask"],
		Plugin: ["hook-dsh-workspace-govern", "plugin-dsh-batch-edit"],
		Changes:
			"The model reads nothing different unless the gate refuses, and then it reads the refusal where a result would have been.",
	},
	{
		Index: 2,
		Title: "The body",
		Seam: "tools/execute",
		Receives: "the allowed call, wrapped for timeout, retry, and metrics",
		Decides: [],
		Plugin: ["plugin-dsh-batch-edit", "hook-dsh-ccr"],
		Changes:
			"Nothing here is rewritten: the family supplies two of the bodies that run, and a result the CCR hook stored comes back only through one of them.",
	},
	{
		Index: 3,
		Title: "The result",
		Seam: "tools/post-execute",
		Receives: "the result, before it becomes model content",
		Decides: ["accept", "block", "replace", "add context"],
		Plugin: ["hook-dsh-ccr", "hook-dsh-comment-filter", "hook-dsh-workspace-govern"],
		Changes:
			"The model reads a one-line preview and a retrieval marker where the full result was, or a source file with its comments gone.",
	},
	{
		Index: 4,
		Title: "The record",
		Seam: "tools/result",
		Receives: "the frozen outcome, after normalization and the last content invariant",
		Decides: [],
		Plugin: [],
		Changes:
			"Nothing changes here: the outcome is frozen, so every change the family makes is already inside the content the model reads.",
	},
];

export default Step;
