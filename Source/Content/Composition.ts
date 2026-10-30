// How the family composes at one turn. The order below is the order the
// listeners actually run, read from the source of each package and from the
// bundle order the profile mounts. Transcribed from
// `Documentation/Interpretability/Intervention.md`, section 4.
//
// `Position` is the one fact a reader cannot guess: a `prepend` arm runs
// outside the plain listeners at the same seam, so it sees the payload before
// them and its output is what they receive. The family uses that on purpose:
// the CCR gate compresses the bytes the normalizers already rewrote.
export type Position = "prepend" | "plain" | "independent";

export interface Arm {
	/** The package directory. */
	Slug: string;
	/** The order it runs in, within its seam. */
	Position: Position;
	/** What it does to the payload, in one clause. */
	Does: string;
}

export interface Layer {
	/** The seam the layer runs at. */
	Seam: string;
	/** The arms, in the order they run. */
	Arm: Arm[];
	/** What the chain produces, in one sentence. */
	Note: string;
}

export const Layer: Layer[] = [
	{
		Seam: "agent/pre-step",
		Arm: [
			{
				Slug: "hook-dsh-comment-filter",
				Position: "plain",
				Does: "reads the intent it will act on later",
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "adds a coaching note to the step",
			},
			{
				Slug: "hook-dsh-live-containers",
				Position: "plain",
				Does: "adds the live container state",
			},
			{
				Slug: "plugin-dsh-batch-edit",
				Position: "plain",
				Does: "arms its one-shot batch flag",
			},
			{
				Slug: "hook-dsh-ccr",
				Position: "plain",
				Does: "runs the middle-turn archive decision when its engine is on",
			},
		],
		Note: "The first seam of every step, and the busiest: five packages read or extend the step before the model is called.",
	},
	{
		Seam: "tools/pre-execute",
		Arm: [
			{
				Slug: "hook-dsh-workspace-govern",
				Position: "plain",
				Does: "allows, denies, or asks",
			},
			{ Slug: "hook-dsh-tool-coach", Position: "plain", Does: "annotates the call it sees" },
			{
				Slug: "plugin-dsh-batch-edit",
				Position: "plain",
				Does: "turns its armed flag into a batch",
			},
		],
		Note: "The gate: a deny here stops the call before any tool body runs, which is what makes the guard a guard.",
	},
	{
		Seam: "tools/execute",
		Arm: [{ Slug: "hook-dsh-live-containers", Position: "plain", Does: "wraps the tool body" }],
		Note: "The only arm around the tool body itself, which is where a timeout or a metric would attach.",
	},
	{
		Seam: "tools/post-execute",
		Arm: [
			{
				Slug: "hook-dsh-ccr",
				Position: "prepend",
				Does: "compresses an oversized result into a preview and a marker",
			},
			{
				Slug: "hook-dsh-comment-filter",
				Position: "prepend",
				Does: "strips comments from the result",
			},
			{
				Slug: "hook-dsh-normalize-dash",
				Position: "prepend",
				Does: "normalizes the result's text",
			},
			{
				Slug: "hook-dsh-tool-coach",
				Position: "plain",
				Does: "reads the result and records a lesson",
			},
			{
				Slug: "hook-dsh-live-containers",
				Position: "plain",
				Does: "reads the result for its monitor",
			},
			{
				Slug: "hook-dsh-workspace-govern",
				Position: "plain",
				Does: "observes the result of a call it allowed",
			},
		],
		Note: "The chain that matters: the three prepended arms run outside the plain listeners, so CCR compresses the bytes the normalizers already rewrote.",
	},
	{
		Seam: "system-prompt/assemble",
		Arm: [
			{ Slug: "hook-dsh-tool-coach", Position: "plain", Does: "adds its coaching section" },
			{
				Slug: "hook-dsh-live-containers",
				Position: "plain",
				Does: "adds its live-state section",
			},
		],
		Note: "The prompt is assembled per step, so a section added here is added to every request the step makes.",
	},
	{
		Seam: "llm/stream",
		Arm: [
			{
				Slug: "hook-dsh-normalize-dash",
				Position: "plain",
				Does: "rewrites each chunk as it arrives",
			},
		],
		Note: "The last seam before the model's text becomes the transcript, and the one place a character can still change.",
	},
];

export const Independent: Arm[] = [
	{
		Slug: "plugin-dsh-cost",
		Position: "independent",
		Does: "records spend on every committed event",
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Position: "independent",
		Does: "records each write and keeps its pre-image",
	},
];

export default Layer;
