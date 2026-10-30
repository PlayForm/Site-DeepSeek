// Twenty plugins dissected from source: what the harness does at the seam with
// no plugin, what the plugin makes happen instead, and the exact strings that
// change. Transcribed from `Documentation/Interpretability/Delta.md` and
// `Delta-Workspace.md`, which cite `path:line` for every field.
//
// `Before` and `After` are the one line that differs. A package page renders
// them as a pair, so the change is visible rather than asserted.
export interface Delta {
	/** The package directory. */
	Slug: string;
	/** The seam the source registers. */
	Seam: string;
	/** The line as the harness runs it, with no plugin. */
	Before: string;
	/** The same line with the plugin. */
	After: string;
	/** The one property the code supports. */
	Property: string;
	/** The knob that changes the behavior, and its default. */
	Knob: string;
	/** True when the bundle patch ships the package disabled. */
	Off?: boolean;
}

export const Delta: Delta[] = [
	{
		Slug: "hook-dsh-normalize-dash",
		Seam: "llm/stream",
		Before: "a \u2014 b \u2013 c \u2011 d \u2015 e",
		After: "a - b - c - d - e",
		Property: "Deterministic output",
		Knob: "replacement, a plain hyphen by default",
	},
	{
		Slug: "hook-dsh-ccr",
		Seam: "tools/post-execute",
		Before: "the full make output, 5231 bytes",
		After: "[terminal:exit 0 | 142 lines | make: *** Error 1] plus <<<CCR:9d3c1f0a|terminal|5231>>>",
		Property: "Bounded context",
		Knob: "autoExpandLimitBytes, 102400 by default",
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Seam: "tools/pre-execute",
		Before: "govern: passed op:1 (write /repo/src/a.ts)",
		After: 'kind: "deny", reason: "govern: contributes"',
		Property: "A write guard",
		Knob: "enabled, off in the bundle patch",
		Off: true,
	},
	{
		Slug: "hook-dsh-comment-filter",
		Seam: "tools/post-execute",
		Before: "1: // leading comment",
		After: "1:",
		Property: "Comment-free results",
		Knob: "enabled, on by default",
	},
	{
		Slug: "hook-dsh-tool-coach",
		Seam: "tools/post-execute",
		Before: "the fourth cat a.md returns its content",
		After: "the result gains Tool-coach note (strike 4, read-class bash pattern)",
		Property: "Tool-use coaching",
		Knob: "strike threshold, documented per rule",
	},
	{
		Slug: "hook-dsh-live-containers",
		Seam: "system-prompt/assemble",
		Before: "only the harness sections",
		After: "--- LIVE CONTAINER n (recomputed each request; not harness state) ---",
		Property: "Live state in the prompt",
		Knob: "sections, one per container",
	},
	{
		Slug: "plugin-dsh-batch-edit",
		Seam: "tools/pre-execute",
		Before: "a.txt holds hello then world",
		After: "a.txt holds hello then HI, diff - world + HI",
		Property: "A batched atomic edit",
		Knob: "policy.write, refuse by default",
	},
	{
		Slug: "plugin-dsh-cost",
		Seam: "session/event",
		Before: "no cost block",
		After: "// Inference cost: 12.4183 USD (direct 3.1022 + amortized 9.3161)",
		Property: "Cost visibility",
		Knob: "rates, documented per model",
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Seam: "fs/observed",
		Before: "the file holds the batch's bytes",
		After: "journal: reverted b1 /a (fence ok)",
		Property: "A write journal",
		Knob: "maxBatches, 200 by default",
	},
	{
		Slug: "hook-dsh-workspace-merge",
		Seam: "fs/observed",
		Before: "the file holds its previous bytes",
		After: 'path: "/repo/src/a.ts", status: "applied", version: "v2"',
		Property: "A merge of concurrent writes",
		Knob: "strategy, documented per domain",
	},
	{
		Slug: "hook-dsh-workspace-approve",
		Seam: "fs/observed",
		Before: "an approved binding at its bound version",
		After: "invalidated ap-2 (version changed)",
		Property: "An approval binding",
		Knob: "enabled, off in the bundle patch",
		Off: true,
	},
	{
		Slug: "hook-dsh-workspace-audit",
		Seam: "fs/observed",
		Before: "no line",
		After: "audit outcome-evidence /repo/src/a.ts (success)",
		Property: "An outcome audit",
		Knob: "enabled, off in the bundle patch",
		Off: true,
	},
	{
		Slug: "hook-dsh-workspace-monitor",
		Seam: "fs/observed",
		Before: "no watch entry",
		After: "monitor: watch /repo/src/a.ts version 1 (tsc,format)",
		Property: "A change watch",
		Knob: "enabled, off in the bundle patch",
		Off: true,
	},
	{
		Slug: "hook-dsh-workspace-observe",
		Seam: "fs/observed",
		Before: "no stamp",
		After: "observe: stamped /repo/src/a.ts version 1 (fs/observed)",
		Property: "A version stamp",
		Knob: "enabled, off in the bundle patch",
		Off: true,
	},
	{
		Slug: "hook-dsh-cargo-governor",
		Seam: "fs/observed",
		Before: 'serde = "2.0" with the registry at 2.1',
		After: 'serde = "2.1.0"',
		Property: "A dependency floor",
		Knob: "pinStyle, caret by default",
	},
	{
		Slug: "hook-dsh-package-governor",
		Seam: "fs/observed",
		Before: 'leftpad "^2.0.0" with the effective latest at 1.0.0',
		After: 'leftpad "^1.0.0", chalk untouched',
		Property: "A dependency ceiling",
		Knob: "registry, npm by default",
	},
	{
		Slug: "hook-dsh-package-pinner",
		Seam: "fs/observed",
		Before: '"caret": "^0.3.4"',
		After: '"caret": "0.3.4"',
		Property: "A pinned range",
		Knob: "ranges, caret by default",
	},
	{
		Slug: "hook-dsh-batch-decision",
		Seam: "batch/proposed",
		Before: "the proposal is applied",
		After: "decision held prop-1 (policy commit=approve)",
		Property: "A policy gate on batches",
		Knob: "commit, approve by default",
		Off: true,
	},
	{
		Slug: "hook-dsh-lesson-nudge",
		Seam: "agent/status",
		Before: "every idle edge starts a review",
		After: "hook-dsh-lesson-nudge: cap reached (1 reviews)",
		Property: "A review budget",
		Knob: "maxReviewsPerSession, 1 by default",
		Off: true,
	},
	{
		Slug: "plugin-dsh-gitguard",
		Seam: "tools/pre-execute",
		Before: "git add -A reaches the terminal tool",
		After: 'gitguard: refused "git add" (deny-list: git add)',
		Property: "A read-only git policy",
		Knob: "deny, git add by default",
		Off: true,
	},
];

export function DeltaFor(Slug: string): Delta | undefined {
	return Delta.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}

export default Delta;
