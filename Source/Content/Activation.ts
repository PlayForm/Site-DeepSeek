// The activation line, the one proof every plugin writes when it loads:
//
//   activated (k1=v1, k2=v2, ...)
//
// The composer is `Classic/packages/lib-dsh-core/Source/Function/Activate.ts`
// and the field lists are module-side, one per Apply.ts. This file holds the
// template, the three rules that decide how a pair renders, and the field lists
// the source hands the composer, so the page can show the string a plugin
// actually writes rather than describing it.
//
// Read from: `Activate.ts` (the rules), and the `Activate([...])` call in each
// package's `Source/Function/Apply.ts` (the lists).
export interface Rule {
	/** The rule, named as the composer's comment names it. */
	Name: string;
	/** What it decides. */
	Body: string;
}

export interface Variant {
	/** The package whose Apply.ts composes this list. */
	Slug: string;
	/** The pairs, in the order the source passes them. */
	Field: [string, string][];
}

export interface Activation {
	/** The packages whose Apply stage writes a line through the composer. */
	Slug: string[];
	/** The rules the composer applies to a pair. */
	Rule: Rule[];
	/** The field lists the source passes, one per package. */
	Variant: Variant[];
}

export const Activation: Activation = {
	Slug: [
		"hook-dsh-normalize-dash",
		"hook-dsh-normalize-quotes",
		"hook-dsh-normalize-ellipsis",
		"hook-dsh-normalize-spaces",
		"hook-dsh-normalize-invisible",
		"hook-dsh-normalize-fullwidth",
		"hook-dsh-package-governor",
		"hook-dsh-package-pinner",
		"hook-dsh-cargo-governor",
		"hook-dsh-tool-coach",
	],
	Rule: [
		{
			Name: "absent field",
			Body: "A pair whose value is undefined is skipped, so a flavor with no replacement simply omits the pair.",
		},
		{
			Name: "bare segment",
			Body: "A pair with an empty key renders its value alone, which is how the governance trio leads with its flavor word.",
		},
		{
			Name: "present field",
			Body: "An empty string is a value, not an absence: the invisible flavor writes replacement= to say it removed the family.",
		},
	],
	Variant: [
		{
			Slug: "hook-dsh-normalize-quotes",
			Field: [
				["reasoning", "on"],
				["toolArgs", "off"],
				["logFile", "~/.dsh/hook-dsh-normalize-quotes.log"],
			],
		},
		{
			Slug: "hook-dsh-normalize-invisible",
			Field: [
				["replacement", ""],
				["reasoning", "on"],
				["toolArgs", "off"],
				["logFile", "~/.dsh/hook-dsh-normalize-invisible.log"],
			],
		},
		{
			Slug: "hook-dsh-package-governor",
			Field: [
				["", "anywhere mode"],
				["logFile", "~/.dsh/hook-dsh-package-governor.log"],
				["updateMode", "chain"],
				["ncuBin", "ncu"],
				["exclude", "[]"],
				["policyFile", "(discovery)"],
			],
		},
		{
			Slug: "hook-dsh-package-pinner",
			Field: [
				["", "pinner"],
				["logFile", "~/.dsh/hook-dsh-package-pinner.log"],
				["keep", "[@types/*]"],
			],
		},
	],
};

/** The line the composer builds from a variant, by the composer's own rules. */
export function LineOf(Field: [string, string][]): string {
	const Part = Field.filter(([, Value]) => Value !== undefined).map(([Key, Value]) =>
		Key === "" ? Value : `${Key}=${Value}`,
	);

	return `activated (${Part.join(", ")})`;
}
