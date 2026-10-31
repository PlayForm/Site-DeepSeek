// Source/Content/Behavior.ts
var Behavior = {
	"hook-dsh-normalize-dash": {
		Seam: "llm/stream",
		Effect: "rewrite"
	},
	"hook-dsh-normalize-ellipsis": {
		Seam: "llm/stream",
		Effect: "rewrite"
	},
	"hook-dsh-normalize-fullwidth": {
		Seam: "llm/stream",
		Effect: "rewrite"
	},
	"hook-dsh-normalize-invisible": {
		Seam: "llm/stream",
		Effect: "rewrite"
	},
	"hook-dsh-normalize-quotes": {
		Seam: "llm/stream",
		Effect: "rewrite"
	},
	"hook-dsh-normalize-spaces": {
		Seam: "llm/stream",
		Effect: "rewrite"
	},
	"hook-dsh-live-containers": {
		Seam: "system-prompt/assemble",
		Effect: "rewrite"
	},
	"hook-dsh-workspace-govern": {
		Seam: "tools/pre-execute",
		Effect: "rewrite"
	},
	"hook-dsh-workspace-operate": {
		Seam: "tools/pre-execute",
		Effect: "advise"
	},
	"hook-dsh-ccr": {
		Seam: "tools/post-execute",
		Effect: "rewrite"
	},
	"hook-dsh-comment-filter": {
		Seam: "tools/post-execute",
		Effect: "rewrite"
	},
	"hook-dsh-convention-suggester": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-doc-suggester": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-edit-suggester": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-graph-suggester": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-replay-suggester": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-search-suggester": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-test-suggester": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-tool-coach": {
		Seam: "tools/post-execute",
		Effect: "advise"
	},
	"hook-dsh-cargo-governor": {
		Seam: "fs/observed",
		Effect: "rewrite"
	},
	"hook-dsh-package-governor": {
		Seam: "fs/observed",
		Effect: "rewrite"
	},
	"hook-dsh-package-pinner": {
		Seam: "fs/observed",
		Effect: "rewrite"
	},
	"hook-dsh-workspace-approve": {
		Seam: "fs/observed",
		Effect: "record"
	},
	"hook-dsh-workspace-audit": {
		Seam: "fs/observed",
		Effect: "record"
	},
	"hook-dsh-workspace-journal": {
		Seam: "fs/observed",
		Effect: "record"
	},
	"hook-dsh-workspace-merge": {
		Seam: "fs/observed",
		Effect: "rewrite"
	},
	"hook-dsh-workspace-monitor": {
		Seam: "fs/observed",
		Effect: "record"
	},
	"hook-dsh-workspace-observe": {
		Seam: "fs/observed",
		Effect: "record"
	},
	"hook-dsh-batch-decision": {
		Seam: "batch/proposed",
		Effect: "record"
	},
	"hook-dsh-lesson-nudge": {
		Seam: "agent/status",
		Effect: "advise"
	}
};
function BehaviorFor(Slug) {
	return Behavior[Slug] ?? Behavior[Slug.replace(/^ets-/, "")];
}
export { BehaviorFor as n, Behavior as t };
