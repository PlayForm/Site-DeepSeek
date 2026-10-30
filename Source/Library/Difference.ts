// The span that differs between two strings, found by matching the common
// prefix and the common suffix. For a single-character replacement the span is
// that character, which is the case the case study shows; for a larger edit it
// is the whole edited region, which is still an honest "this is what changed"
// without pretending to be a word diff.
export interface Difference {
	/** The text the two share before the edit. */
	Prefix: string;
	/** The text that was replaced. */
	Before: string;
	/** The text that replaced it. */
	After: string;
	/** The text the two share after the edit. */
	Suffix: string;
	/** True when the two strings differ at all. */
	Changed: boolean;
	/** The length of the longer changed span, in code points. */
	Count: number;
}

export function Compare(Before: string, After: string): Difference {
	let Start = 0;

	while (Start < Before.length && Start < After.length && Before[Start] === After[Start]) {
		Start += 1;
	}

	let End = 0;

	while (
		End < Before.length - Start &&
		End < After.length - Start &&
		Before[Before.length - 1 - End] === After[After.length - 1 - End]
	) {
		End += 1;
	}

	const Prefix = Before.slice(0, Start);
	const Left = Before.slice(Start, Before.length - End);
	const Right = After.slice(Start, After.length - End);
	const Suffix = Before.slice(Before.length - End);

	return {
		Prefix,
		Before: Left,
		After: Right,
		Suffix,
		Changed: Left !== Right,
		Count: Math.max([...Left].length, [...Right].length),
	};
}

/** The code points of a string, written the way the READMEs write them. */
export function Code(Text: string): string {
	return [...Text]
		.map(
			(Character) =>
				`U+${(Character.codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0")}`,
		)
		.join(" ");
}
