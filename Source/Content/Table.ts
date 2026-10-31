// The six normalize hooks are one table shape, mounted six times: the code
// points a family maps, the character each one becomes, and the name the
// source gives it. The rows are transcribed from the core's Normalize modules
// (Classic/packages/lib-dsh-core/Source/Normalize: Dashes.ts:18,
// Quotes.ts:18-27, Ellipsis.ts:12, Spaces.ts:19, Invisible.ts:18,
// Fullwidth.ts:12-107). The EffectTS twins in ets-lib-dsh-core ship
// byte-identical tables, so one record covers both pages and the reader drops
// the `ets-` prefix. The dash names, its replacement default, and the gate
// every flavor shares (the edit exemption, the raw marker, the tool-result
// exemptions) come from hook-dsh-normalize-dash/SCHEME.md:30-50 and :91-104;
// the other flavors' laws come from their README and their core header.
export interface Entry {
	/** The code point, as the source names it. */
	Code: string;
	/** The character it becomes. */
	To: string;
	/** What the family calls it, when the source names it. */
	Name?: string;
}
export interface Table {
	/** The package the table belongs to. */
	Slug: string;
	/** The family's own name for itself. */
	Family: string;
	/** One row per code point the table maps. */
	Entry: Entry[];
	/** The rule the family obeys, in one line: the boundary rule, the
	 *  replacement default, the exempt list. */
	Rule: string;
}

export const Table: Table[] = [
	{
		Slug: "hook-dsh-normalize-dash",
		Family: "Dash",
		Entry: [
			{ Code: "U+058A", To: "-", Name: "Armenian hyphen" },
			{ Code: "U+05BE", To: "-", Name: "Hebrew punctuation maqaf" },
			{ Code: "U+1400", To: "-", Name: "Canadian syllabics hyphen" },
			{ Code: "U+1806", To: "-", Name: "Mongolian todo soft hyphen" },
			{ Code: "U+2010", To: "-", Name: "Hyphen" },
			{ Code: "U+2011", To: "-", Name: "Non-breaking hyphen" },
			{ Code: "U+2012", To: "-", Name: "Figure dash" },
			{ Code: "U+2013", To: "-", Name: "En dash" },
			{ Code: "U+2014", To: "-", Name: "Em dash" },
			{ Code: "U+2015", To: "-", Name: "Horizontal bar" },
			{ Code: "U+2E17", To: "-", Name: "Double oblique hyphen" },
			{ Code: "U+2E1A", To: "-", Name: "Hyphen with diaeresis" },
			{ Code: "U+2E3A", To: "-", Name: "Two-em dash" },
			{ Code: "U+2E3B", To: "-", Name: "Three-em dash" },
			{ Code: "U+2E40", To: "-", Name: "Double hyphen" },
			{ Code: "U+2E5D", To: "-", Name: "Supplementary punctuation hyphen" },
			{ Code: "U+301C", To: "-", Name: "Wave dash" },
			{ Code: "U+3030", To: "-", Name: "Wavy dash" },
			{ Code: "U+30A0", To: "-", Name: "Katakana-Hiragana double hyphen" },
			{ Code: "U+FE31", To: "-", Name: "Presentation form for vertical em dash" },
			{ Code: "U+FE32", To: "-", Name: "Presentation form for vertical en dash" },
			{ Code: "U+FE58", To: "-", Name: "Small em dash" },
			{ Code: "U+FE63", To: "-", Name: "Small hyphen-minus" },
			{ Code: "U+FF0D", To: "-", Name: "Fullwidth hyphen-minus" },
		],
		Rule: "No context rule and no lookahead: every dash code point becomes the configured replacement, ASCII hyphen-minus by default, so a chunk boundary cannot change the result; an edit call, a raw-marked call, and a listed tool result pass by identity.",
	},
	{
		Slug: "hook-dsh-normalize-quotes",
		Family: "Quotes",
		Entry: [
			{ Code: "U+2018", To: "'", Name: "Left single quotation mark" },
			{ Code: "U+2019", To: "'", Name: "Right single quotation mark" },
			{ Code: "U+201A", To: "'", Name: "Single low-9 quotation mark" },
			{ Code: "U+201B", To: "'", Name: "Single high-reversed-9 quotation mark" },
			{ Code: "U+201C", To: '"', Name: "Left double quotation mark" },
			{ Code: "U+201D", To: '"', Name: "Right double quotation mark" },
			{ Code: "U+201E", To: '"', Name: "Double low-9 quotation mark" },
			{ Code: "U+201F", To: '"', Name: "Double high-reversed-9 quotation mark" },
		],
		Rule: "No context rule and no replacement knob: every typographic quote code point becomes its straight ASCII counterpart; an edit call, a raw-marked call, and a listed tool result pass by identity.",
	},
	{
		Slug: "hook-dsh-normalize-ellipsis",
		Family: "Ellipsis",
		Entry: [{ Code: "U+2026", To: "...", Name: "Horizontal ellipsis" }],
		Rule: "No context rule: the horizontal ellipsis becomes the configured replacement, the ASCII three-dot sequence by default, so a chunk boundary cannot change the result; an edit call, a raw-marked call, and a listed tool result pass by identity.",
	},
	{
		Slug: "hook-dsh-normalize-spaces",
		Family: "Spaces",
		Entry: [
			{ Code: "U+00A0", To: " ", Name: "No-break space" },
			{ Code: "U+1680", To: " ", Name: "Ogham space mark" },
			{ Code: "U+2000", To: " ", Name: "En quad" },
			{ Code: "U+2001", To: " ", Name: "Em quad" },
			{ Code: "U+2002", To: " ", Name: "En space" },
			{ Code: "U+2003", To: " ", Name: "Em space" },
			{ Code: "U+2004", To: " ", Name: "Three-per-em space" },
			{ Code: "U+2005", To: " ", Name: "Four-per-em space" },
			{ Code: "U+2006", To: " ", Name: "Six-per-em space" },
			{ Code: "U+2007", To: " ", Name: "Figure space" },
			{ Code: "U+2008", To: " ", Name: "Punctuation space" },
			{ Code: "U+2009", To: " ", Name: "Thin space" },
			{ Code: "U+200A", To: " ", Name: "Hair space" },
			{ Code: "U+202F", To: " ", Name: "Narrow no-break space" },
			{ Code: "U+205F", To: " ", Name: "Medium mathematical space" },
			{ Code: "U+3000", To: " ", Name: "Ideographic space" },
		],
		Rule: "No context rule: every non-ASCII space in the Zs category becomes the configured replacement, the plain ASCII space by default; an edit call, a raw-marked call, and a listed tool result pass by identity.",
	},
	{
		Slug: "hook-dsh-normalize-invisible",
		Family: "Invisible",
		Entry: [
			{ Code: "U+00AD", To: "", Name: "Soft hyphen" },
			{ Code: "U+200B", To: "", Name: "Zero-width space" },
			{ Code: "U+200C", To: "", Name: "Zero-width non-joiner" },
			{ Code: "U+200D", To: "", Name: "Zero-width joiner" },
			{ Code: "U+200E", To: "", Name: "Left-to-right mark" },
			{ Code: "U+200F", To: "", Name: "Right-to-left mark" },
			{ Code: "U+202A", To: "", Name: "Left-to-right embedding" },
			{ Code: "U+202B", To: "", Name: "Right-to-left embedding" },
			{ Code: "U+202C", To: "", Name: "Pop directional formatting" },
			{ Code: "U+202D", To: "", Name: "Left-to-right override" },
			{ Code: "U+202E", To: "", Name: "Right-to-left override" },
			{ Code: "U+2060", To: "", Name: "Word joiner" },
			{ Code: "U+FEFF", To: "", Name: "Zero-width no-break space" },
		],
		Rule: "No context rule: every zero-width, joiner, bidi, and BOM code point is removed, because the replacement default is the empty string; an edit call, a raw-marked call, and a listed tool result pass by identity.",
	},
	{
		Slug: "hook-dsh-normalize-fullwidth",
		Family: "Fullwidth",
		Entry: [
			{ Code: "U+FF01", To: "!" },
			{ Code: "U+FF02", To: '"' },
			{ Code: "U+FF03", To: "#" },
			{ Code: "U+FF04", To: "$" },
			{ Code: "U+FF05", To: "%" },
			{ Code: "U+FF06", To: "&" },
			{ Code: "U+FF07", To: "'" },
			{ Code: "U+FF08", To: "(" },
			{ Code: "U+FF09", To: ")" },
			{ Code: "U+FF0A", To: "*" },
			{ Code: "U+FF0B", To: "+" },
			{ Code: "U+FF0C", To: "," },
			{ Code: "U+FF0D", To: "-" },
			{ Code: "U+FF0E", To: "." },
			{ Code: "U+FF0F", To: "/" },
			{ Code: "U+FF10", To: "0" },
			{ Code: "U+FF11", To: "1" },
			{ Code: "U+FF12", To: "2" },
			{ Code: "U+FF13", To: "3" },
			{ Code: "U+FF14", To: "4" },
			{ Code: "U+FF15", To: "5" },
			{ Code: "U+FF16", To: "6" },
			{ Code: "U+FF17", To: "7" },
			{ Code: "U+FF18", To: "8" },
			{ Code: "U+FF19", To: "9" },
			{ Code: "U+FF1A", To: ":" },
			{ Code: "U+FF1B", To: ";" },
			{ Code: "U+FF1C", To: "<" },
			{ Code: "U+FF1D", To: "=" },
			{ Code: "U+FF1E", To: ">" },
			{ Code: "U+FF1F", To: "?" },
			{ Code: "U+FF20", To: "@" },
			{ Code: "U+FF21", To: "A" },
			{ Code: "U+FF22", To: "B" },
			{ Code: "U+FF23", To: "C" },
			{ Code: "U+FF24", To: "D" },
			{ Code: "U+FF25", To: "E" },
			{ Code: "U+FF26", To: "F" },
			{ Code: "U+FF27", To: "G" },
			{ Code: "U+FF28", To: "H" },
			{ Code: "U+FF29", To: "I" },
			{ Code: "U+FF2A", To: "J" },
			{ Code: "U+FF2B", To: "K" },
			{ Code: "U+FF2C", To: "L" },
			{ Code: "U+FF2D", To: "M" },
			{ Code: "U+FF2E", To: "N" },
			{ Code: "U+FF2F", To: "O" },
			{ Code: "U+FF30", To: "P" },
			{ Code: "U+FF31", To: "Q" },
			{ Code: "U+FF32", To: "R" },
			{ Code: "U+FF33", To: "S" },
			{ Code: "U+FF34", To: "T" },
			{ Code: "U+FF35", To: "U" },
			{ Code: "U+FF36", To: "V" },
			{ Code: "U+FF37", To: "W" },
			{ Code: "U+FF38", To: "X" },
			{ Code: "U+FF39", To: "Y" },
			{ Code: "U+FF3A", To: "Z" },
			{ Code: "U+FF3B", To: "[" },
			{ Code: "U+FF3C", To: "\\" },
			{ Code: "U+FF3D", To: "]" },
			{ Code: "U+FF3E", To: "^" },
			{ Code: "U+FF3F", To: "_" },
			{ Code: "U+FF40", To: "`" },
			{ Code: "U+FF41", To: "a" },
			{ Code: "U+FF42", To: "b" },
			{ Code: "U+FF43", To: "c" },
			{ Code: "U+FF44", To: "d" },
			{ Code: "U+FF45", To: "e" },
			{ Code: "U+FF46", To: "f" },
			{ Code: "U+FF47", To: "g" },
			{ Code: "U+FF48", To: "h" },
			{ Code: "U+FF49", To: "i" },
			{ Code: "U+FF4A", To: "j" },
			{ Code: "U+FF4B", To: "k" },
			{ Code: "U+FF4C", To: "l" },
			{ Code: "U+FF4D", To: "m" },
			{ Code: "U+FF4E", To: "n" },
			{ Code: "U+FF4F", To: "o" },
			{ Code: "U+FF50", To: "p" },
			{ Code: "U+FF51", To: "q" },
			{ Code: "U+FF52", To: "r" },
			{ Code: "U+FF53", To: "s" },
			{ Code: "U+FF54", To: "t" },
			{ Code: "U+FF55", To: "u" },
			{ Code: "U+FF56", To: "v" },
			{ Code: "U+FF57", To: "w" },
			{ Code: "U+FF58", To: "x" },
			{ Code: "U+FF59", To: "y" },
			{ Code: "U+FF5A", To: "z" },
			{ Code: "U+FF5B", To: "{" },
			{ Code: "U+FF5C", To: "|" },
			{ Code: "U+FF5D", To: "}" },
			{ Code: "U+FF5E", To: "~" },
		],
		Rule: "No context rule and no replacement knob: the whole FULLWIDTH FORMS block maps one code point at a time to its ASCII counterpart; an edit call, a raw-marked call, and a listed tool result pass by identity.",
	},
];

export function TableFor(Slug: string): Table | undefined {
	return Table.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}

export default Table;
