// What each hook does, encoded by hand from the package's own README: the one
// seam it listens on, and what it does to what passes there.
//
// The site does not infer this at build time. The only values read
// programmatically are the package names, versions, and the release line.
export type Effect = "rewrite" | "record" | "advise" | "pass";

export interface Behavior {
	Seam: string;
	Effect: Effect;
}

export const Behavior: Record<string, Behavior> = {
	// The stream: the model's own output, rewritten before anyone reads it.
	"hook-dsh-normalize-dash": { Seam: "llm/stream", Effect: "rewrite" },
	"hook-dsh-normalize-ellipsis": { Seam: "llm/stream", Effect: "rewrite" },
	"hook-dsh-normalize-fullwidth": { Seam: "llm/stream", Effect: "rewrite" },
	"hook-dsh-normalize-invisible": { Seam: "llm/stream", Effect: "rewrite" },
	"hook-dsh-normalize-quotes": { Seam: "llm/stream", Effect: "rewrite" },
	"hook-dsh-normalize-spaces": { Seam: "llm/stream", Effect: "rewrite" },

	// The prompt: the block the model reads before it writes.
	"hook-dsh-live-containers": { Seam: "system-prompt/assemble", Effect: "rewrite" },

	// Before a tool runs: the gate.
	"hook-dsh-workspace-govern": { Seam: "tools/pre-execute", Effect: "rewrite" },
	"hook-dsh-workspace-operate": { Seam: "tools/pre-execute", Effect: "advise" },

	// After a tool runs: the result the model reads next.
	"hook-dsh-ccr": { Seam: "tools/post-execute", Effect: "rewrite" },
	"hook-dsh-comment-filter": { Seam: "tools/post-execute", Effect: "rewrite" },
	"hook-dsh-convention-suggester": { Seam: "tools/post-execute", Effect: "advise" },
	"hook-dsh-doc-suggester": { Seam: "tools/post-execute", Effect: "advise" },
	"hook-dsh-edit-suggester": { Seam: "tools/post-execute", Effect: "advise" },
	"hook-dsh-graph-suggester": { Seam: "tools/post-execute", Effect: "advise" },
	"hook-dsh-replay-suggester": { Seam: "tools/post-execute", Effect: "advise" },
	"hook-dsh-search-suggester": { Seam: "tools/post-execute", Effect: "advise" },
	"hook-dsh-test-suggester": { Seam: "tools/post-execute", Effect: "advise" },
	"hook-dsh-tool-coach": { Seam: "tools/post-execute", Effect: "advise" },

	// A file on disk: the write that already happened.
	"hook-dsh-cargo-governor": { Seam: "fs/observed", Effect: "rewrite" },
	"hook-dsh-package-governor": { Seam: "fs/observed", Effect: "rewrite" },
	"hook-dsh-package-pinner": { Seam: "fs/observed", Effect: "rewrite" },
	"hook-dsh-workspace-approve": { Seam: "fs/observed", Effect: "record" },
	"hook-dsh-workspace-audit": { Seam: "fs/observed", Effect: "record" },
	"hook-dsh-workspace-journal": { Seam: "fs/observed", Effect: "record" },
	"hook-dsh-workspace-merge": { Seam: "fs/observed", Effect: "rewrite" },
	"hook-dsh-workspace-monitor": { Seam: "fs/observed", Effect: "record" },
	"hook-dsh-workspace-observe": { Seam: "fs/observed", Effect: "record" },

	// The batch: the edits proposed together.
	"hook-dsh-batch-decision": { Seam: "batch/proposed", Effect: "record" },

	// The turn's own state: the moment after it ends.
	"hook-dsh-lesson-nudge": { Seam: "agent/status", Effect: "advise" },
};

export function BehaviorFor(Slug: string): Behavior | undefined {
	return Behavior[Slug] ?? Behavior[Slug.replace(/^ets-/, "")];
}

export default Behavior;
