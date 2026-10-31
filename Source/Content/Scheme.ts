// The scheme, as the package writes it in `SCHEME.md`: the laws a plugin
// satisfies, the pipeline it runs, and the invariant that makes it invisible.
//
// Read from `Classic/packages/hook-dsh-package-governor/SCHEME.md`: section 2
// (the pipeline G = U o P), section 3 (the trigger law and the non-trigger
// law), section 4 (commutativity), and section 5 (the silence invariant).
export interface Condition {
	/** The law's condition, as the scheme states it. */
	Body: string;
	/** True when the condition must hold for the plugin to act. */
	Hold: boolean;
}

export interface Law {
	/** The law's name, as the scheme's heading names it. */
	Name: string;
	/** What the law decides, in one line. */
	Claim: string;
	/** The conditions the law tests. */
	Condition: Condition[];
}

export interface Scheme {
	/** The package the scheme belongs to. */
	Slug: string;
	/** The pipeline, as the scheme writes it: a composition of stages. */
	Pipeline: { Label: string; Body: string }[];
	/** The laws that decide when the pipeline runs. */
	Law: Law[];
	/** The invariant: what is identical, and what is not. */
	Silence: { Same: string[]; Differ: string[] };
}

export const Scheme: Scheme[] = [
	{
		Slug: "hook-dsh-package-governor",
		Pipeline: [
			{
				Label: "P",
				Body: "The chain pass: decode, satisfy the registry, and rewrite a chain-governed pin. Pure, deterministic, idempotent.",
			},
			{
				Label: "U",
				Body: "The update stage: policy-gated, cooldown-guarded, async, and skipped when the chain pass changed nothing.",
			},
		],
		Law: [
			{
				Name: "Trigger",
				Claim: "The governor fires only on an author write to a package.json.",
				Condition: [
					{ Body: "observation.kind is present", Hold: true },
					{ Body: "actor.name is write, edit, or str_replace_editor", Hold: true },
					{ Body: "basename(displayPath) is package.json", Hold: true },
				],
			},
			{
				Name: "Exclusion",
				Claim: "A path inside the tooling is never governed.",
				Condition: [
					{
						Body: "no path segment is node_modules, .git, .dsh, .pnpm, .store",
						Hold: true,
					},
					{ Body: "no path segment is the harness application bundle", Hold: true },
				],
			},
			{
				Name: "Non-trigger",
				Claim: "The governor does not trigger itself.",
				Condition: [
					{
						Body: "its own write goes through the fs service, which dispatches no fs/observed",
						Hold: true,
					},
					{ Body: "its update stage is a continuation, not an author call", Hold: true },
				],
			},
		],
		Silence: {
			Same: [
				"the tool result the author receives",
				"the transcript the model reads",
				"the session events the log records",
			],
			Differ: [
				"the bytes on disk, discoverable only by a later read",
				"the ledger line the module writes",
			],
		},
	},
];

/** The scheme for a package, when the site has authored one. */
export function SchemeFor(Slug: string): Scheme | undefined {
	const Stem = Slug.replace(/^ets-/, "");

	return Scheme.find((Entry) => Entry.Slug === Stem);
}
