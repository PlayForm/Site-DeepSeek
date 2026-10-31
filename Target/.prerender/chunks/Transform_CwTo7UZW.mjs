// Source/Content/Transform.ts
var Transform = [
	{
		Slug: "hook-dsh-normalize-dash",
		Code: "U+2014",
		In: "—",
		Out: "-",
		Note: "the dash family: em, en, and seventeen exotic relatives"
	},
	{
		Slug: "hook-dsh-normalize-ellipsis",
		Code: "U+2026",
		In: "…",
		Out: "...",
		Note: "the single ellipsis character, default replacement"
	},
	{
		Slug: "hook-dsh-normalize-quotes",
		Code: "U+201C",
		In: "“",
		Out: "\"",
		Note: "eight typographic quotes to their straight ASCII counterpart"
	},
	{
		Slug: "hook-dsh-normalize-spaces",
		Code: "U+00A0",
		In: "\xA0",
		Out: " ",
		Note: "exotic spaces to the plain ASCII space"
	},
	{
		Slug: "hook-dsh-normalize-fullwidth",
		Code: "U+FF21",
		In: "Ａ",
		Out: "A",
		Note: "the fullwidth ASCII block back to halfwidth"
	},
	{
		Slug: "hook-dsh-normalize-invisible",
		Code: "U+200B",
		In: "​",
		Out: "",
		Note: "zero-width, joiner, bidi, and BOM characters removed"
	}
];
export { Transform as t };
