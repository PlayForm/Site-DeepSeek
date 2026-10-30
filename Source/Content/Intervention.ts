// Ten plugins, one per family, and what each actually changes: the seams it
// registers on, whether the model sees something different, what reaches the
// disk, and the one property a page may claim. Transcribed from
// `Documentation/Interpretability/Intervention.md`, which reads the source of
// each package and cites `path:line` for every field.
//
// `Mark` is the kind of change at that seam: `rewrite` when the payload the
// model reads next is different, `record` when the plugin only observes there,
// and absent when it does not act at that seam at all.
export type Mark = "rewrite" | "record";

export interface Intervention {
	/** The package directory. */
	Slug: string;
	/** The seams it acts at, and how. */
	Seam: Record<string, Mark>;
	/** The one property the code supports. */
	Property: string;
	/** What it leaves on disk, in a clause. */
	Disk: string;
	/** A source-grounded caveat, when the marketing name overstates the code. */
	Note?: string;
}

/** The columns the matrix draws, in the order the turn reaches them. */
export const Column = [
	"system-prompt/assemble",
	"llm/stream",
	"tools/pre-execute",
	"tools/post-execute",
	"fs/observed",
	"session/event",
	"agent/status",
];

export const Intervention: Intervention[] = [
	{
		Slug: "hook-dsh-normalize-dash",
		Seam: { "llm/stream": "rewrite", "tools/post-execute": "rewrite" },
		Property: "Deterministic output",
		Disk: "one ledger line per activation",
	},
	{
		Slug: "hook-dsh-ccr",
		Seam: { "tools/post-execute": "rewrite" },
		Property: "Bounded context",
		Disk: "the store journal and its ledger",
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Seam: { "tools/pre-execute": "rewrite", "tools/post-execute": "record" },
		Property: "A write guard",
		Disk: "its ledger",
	},
	{
		Slug: "hook-dsh-workspace-operate",
		Seam: { "fs/observed": "record" },
		Property: "A proposal surface",
		Disk: "the storage domain and its ledger",
		Note: "Its source registers no event listener. The two tools and the fence tracker are the mechanism, so the tool-call advice this family advertises does not come from this package.",
	},
	{
		Slug: "plugin-dsh-batch-edit",
		Seam: { "tools/pre-execute": "rewrite", "fs/observed": "record" },
		Property: "A batched atomic edit",
		Disk: "the edited files and its ledger",
	},
	{
		Slug: "hook-dsh-comment-filter",
		Seam: { "tools/post-execute": "rewrite" },
		Property: "Comment-free results",
		Disk: "its ledger",
	},
	{
		Slug: "plugin-dsh-cost",
		Seam: { "session/event": "record" },
		Property: "Cost visibility",
		Disk: "a SQLite ledger",
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Seam: { "fs/observed": "record" },
		Property: "A write journal",
		Disk: "the batch records and the reverted files",
	},
	{
		Slug: "hook-dsh-tool-coach",
		Seam: {
			"system-prompt/assemble": "rewrite",
			"tools/pre-execute": "rewrite",
			"tools/post-execute": "rewrite",
		},
		Property: "Tool-use coaching",
		Disk: "its ledger",
	},
	{
		Slug: "hook-dsh-live-containers",
		Seam: { "system-prompt/assemble": "rewrite", "agent/status": "record" },
		Property: "Live state in the prompt",
		Disk: "the monitor records and its ledger",
	},
];

export default Intervention;
