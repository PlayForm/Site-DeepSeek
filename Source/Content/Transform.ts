// One worked example per normalize hook, sourced from the package's own
// README: the code point it names, and the replacement the README documents
// (the default where the transform has a `replacement` knob). The characters
// are written as escapes so this file stays ASCII; the page prints the real
// glyph.
export interface Sample {
	Slug: string;
	Code: string;
	In: string;
	Out: string;
	Note: string;
}

export const Transform: Sample[] = [
	{
		Slug: "hook-dsh-normalize-dash",
		Code: "U+2014",
		In: "\u2014",
		Out: "-",
		Note: "the dash family: em, en, and seventeen exotic relatives",
	},
	{
		Slug: "hook-dsh-normalize-ellipsis",
		Code: "U+2026",
		In: "\u2026",
		Out: "...",
		Note: "the single ellipsis character, default replacement",
	},
	{
		Slug: "hook-dsh-normalize-quotes",
		Code: "U+201C",
		In: "\u201C",
		Out: '"',
		Note: "eight typographic quotes to their straight ASCII counterpart",
	},
	{
		Slug: "hook-dsh-normalize-spaces",
		Code: "U+00A0",
		In: "\u00A0",
		Out: " ",
		Note: "exotic spaces to the plain ASCII space",
	},
	{
		Slug: "hook-dsh-normalize-fullwidth",
		Code: "U+FF21",
		In: "\uFF21",
		Out: "A",
		Note: "the fullwidth ASCII block back to halfwidth",
	},
	{
		Slug: "hook-dsh-normalize-invisible",
		Code: "U+200B",
		In: "\u200B",
		Out: "",
		Note: "zero-width, joiner, bidi, and BOM characters removed",
	},
];

export default Transform;
