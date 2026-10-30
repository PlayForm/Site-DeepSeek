// The arms a package registers beyond the seam its README documents. Read from
// the source of each package: every `Context.on("<seam>", ...)` in its
// `Source/` tree, minus the one seam the behavior map already carries.
//
// The two are different facts and the site keeps them apart on purpose. The
// behavior map says where a hook is documented; this map says where its code
// also listens. A page that shows only the first understates the family, and a
// page that shows only the second loses the sentence a reader can find in the
// README.
//
// The Effect-TS twins register the same arms, so a lookup strips the `ets-`
// prefix the same way the behavior map does.
export const Arm: Record<string, string[]> = {
	"hook-dsh-ccr": ["agent/pre-step"],
	"hook-dsh-comment-filter": ["agent/pre-step"],
	"hook-dsh-convention-suggester": ["agent/pre-step"],
	"hook-dsh-doc-suggester": ["agent/pre-step"],
	"hook-dsh-edit-suggester": ["agent/pre-step"],
	"hook-dsh-graph-suggester": ["agent/pre-step"],
	"hook-dsh-live-containers": [
		"agent/pre-step",
		"session/event",
		"tools/change",
		"tools/execute",
		"tools/post-execute",
		"tools/pre-execute",
	],
	"hook-dsh-normalize-dash": ["agent/pre-step", "tools/post-execute"],
	"hook-dsh-normalize-ellipsis": ["agent/pre-step", "tools/post-execute"],
	"hook-dsh-normalize-fullwidth": ["agent/pre-step", "tools/post-execute"],
	"hook-dsh-normalize-invisible": ["agent/pre-step", "tools/post-execute"],
	"hook-dsh-normalize-quotes": ["agent/pre-step", "tools/post-execute"],
	"hook-dsh-normalize-spaces": ["agent/pre-step", "tools/post-execute"],
	"hook-dsh-replay-suggester": ["agent/pre-step"],
	"hook-dsh-search-suggester": ["agent/pre-step", "system-prompt/assemble", "tools/change"],
	"hook-dsh-test-suggester": ["agent/pre-step"],
	"hook-dsh-tool-coach": [
		"agent/pre-step",
		"system-prompt/assemble",
		"tools/change",
		"tools/pre-execute",
	],
	"hook-dsh-workspace-govern": ["tools/post-execute"],
	"plugin-dsh-batch-edit": ["agent/pre-step", "tools/pre-execute"],
	"plugin-dsh-cost": ["session/event", "session/flush"],
	"plugin-dsh-factory": ["loader/volatile-update"],
	"plugin-dsh-gitguard": ["tools/pre-execute"],
	"plugin-dsh-normalize-file": ["agent/pre-step", "tools/post-execute"],
	"plugin-dsh-route": ["agent/pre-step", "tools/pre-execute"],
};

/** The arms a package registers beyond its documented seam. */
export function ArmFor(Slug: string): string[] {
	return Arm[Slug] ?? Arm[Slug.replace(/^ets-/, "")] ?? [];
}

/** Every seam a package listens on: the documented one, then its arms. */
export function SeamsOf(Slug: string, Documented: string | undefined): string[] {
	const All = new Set<string>();

	if (Documented !== undefined) All.add(Documented);

	for (const Name of ArmFor(Slug)) All.add(Name);

	return [...All];
}

export default Arm;
