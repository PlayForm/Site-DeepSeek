// The eight plugin showcases, one record per harness plugin, read from
// `Temporary/Corca/Compositions.md` section "The eight plugin showcases" and
// grounded in `Temporary/Corca/Dissection/Plugins.ts`.
//
// A showcase does not restate the plugin record in `Plugin.ts`; it names the
// operator that distinguishes this plugin from its neighbour and carries only
// the data that operator draws. The values are illustrative, but each one
// agrees with what the plugin actually does.
export type Operator =
	| "matrix"
	| "timeline"
	| "ledger"
	| "ladder"
	| "fork"
	| "chain"
	| "diff";

export interface Showcase {
	/** The plugin record the showcase extends. */
	Slug: string;
	/** The operator that distinguishes this plugin from its neighbour. */
	Operator: Operator;
	/** The dimension the operator adds, in one phrase. */
	Dimension: string;
	/** A total or a caveat the operator states in words. */
	Note?: string;
	/** For the matrix operator: the two axes and the outcomes. */
	Grid?: { Head: string[]; Row: { Label: string; Cell: string[] }[]; Caption: string };
	/** For the timeline operator: the lanes and their spans. */
	Lane?: {
		Label: string;
		Span: {
			Label: string;
			Start: number;
			Duration: number;
			Kind: "model" | "tool" | "disk" | "record";
		}[];
	}[];
	/** For the ledger operator: the attempts and their counts. */
	Attempt?: { Label: string; In: number; Out: number }[];
	/** For the ladder operator: the rungs. */
	Rung?: { Label: string; Value: string; Body: string; Note?: string; Mark?: boolean }[];
	/** For the fork operator: the two exits. */
	Exit?: { Label: string; Body: string; Taken?: boolean }[];
	/** For the chain operator: the generations. */
	Link?: { Label: string; Body: string; Current?: boolean }[];
}

export const Showcase: Showcase[] = [
	{
		Slug: "fs-observation-policy",
		Operator: "matrix",
		Dimension: "the rule holds at every sandbox mode",
		Grid: {
			Head: ["read first", "never read"],
			Row: [
				{ Label: "read-only", Cell: ["allow", "deny"] },
				{ Label: "workspace-write", Cell: ["allow", "deny"] },
				{ Label: "danger-full-access", Cell: ["allow", "deny"] },
			],
			Caption:
				"Read-before-write holds at every sandbox mode: a file that was never read is never written.",
		},
	},
	{
		Slug: "user-approval",
		Operator: "timeline",
		Dimension: "how long the world stopped",
		Lane: [
			{
				Label: "call",
				Span: [
					{ Label: "runs", Start: 0, Duration: 18, Kind: "tool" },
					{ Label: "paused", Start: 18, Duration: 72, Kind: "record" },
					{ Label: "settles", Start: 90, Duration: 10, Kind: "tool" },
				],
			},
			{
				Label: "person",
				Span: [
					{ Label: "reads", Start: 18, Duration: 30, Kind: "record" },
					{ Label: "answers", Start: 48, Duration: 12, Kind: "record" },
				],
			},
			{
				Label: "harness",
				Span: [{ Label: "waits 42s", Start: 18, Duration: 72, Kind: "record" }],
			},
		],
	},
	{
		Slug: "token-meter",
		Operator: "ledger",
		Dimension: "cost accumulates across attempts",
		Note: "Four attempts: 51,924 in, 8,760 out, 60,684 total.",
		Attempt: [
			{ Label: "request 1", In: 12480, Out: 2106 },
			{ Label: "retry", In: 12480, Out: 1884 },
			{ Label: "request 2", In: 13104, Out: 2460 },
			{ Label: "request 3", In: 13860, Out: 2310 },
		],
	},
	{
		Slug: "spill-policy",
		Operator: "ladder",
		Dimension: "the same call has three possible bodies",
		Rung: [
			{
				Label: "small",
				Value: "2 KB",
				Body: "the whole result reaches the model",
				Note: "under the cap",
			},
			{
				Label: "truncated",
				Value: "40 KB",
				Body: "the model reads the head and the tail is cut",
				Note: "at the cap",
			},
			{
				Label: "spilled",
				Value: "4.2 MB",
				Body: "the bytes move to a file and the model reads a locator",
				Note: "/tmp/dsh-spill-7f2a",
				Mark: true,
			},
		],
	},
	{
		Slug: "timeout-policy",
		Operator: "fork",
		Dimension: "the call's fate depends on a clock",
		Exit: [
			{
				Label: "blocking",
				Body: "the call holds the turn until the window closes",
			},
			{
				Label: "background",
				Body: "the call becomes job bash-7f2a and the turn goes on",
				Taken: true,
			},
		],
	},
	{
		Slug: "session-checkpoint-policy",
		Operator: "chain",
		Dimension: "which file a resume reads",
		Link: [
			{ Label: "v1", Body: "turn 1 closes and checkpoint c-1 is written" },
			{ Label: "v2", Body: "turn 2 resumes and writes checkpoint c-2" },
			{ Label: "v3", Body: "a later run resumes from checkpoint c-3", Current: true },
		],
	},
	{
		Slug: "image-offload",
		Operator: "diff",
		Dimension: "the model sees less than the log holds",
	},
	{
		Slug: "repeat-tool-reminder",
		Operator: "ladder",
		Dimension: "the guard speaks without blocking",
		Rung: [
			{
				Label: "the call",
				Value: "1x",
				Body: "bash ls -la runs and returns its result",
			},
			{
				Label: "the repeat",
				Value: "2x",
				Body: "the same call runs again with no note",
			},
			{
				Label: "the repeat with a reminder",
				Value: "3x",
				Body: "the step carries note: repeated call",
				Mark: true,
			},
		],
	},
];

export default Showcase;
