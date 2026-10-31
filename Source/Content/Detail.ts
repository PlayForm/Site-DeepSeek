// The structured knowledge in `hook-dsh-comment-filter`'s Detect.ts: the seven
// comment-syntax families with every extension each one covers, transcribed
// from the header comment at Source/Function/Detect.ts:9-32 and the table at
// Source/Function/Detect.ts:82-165, plus the four extensions the filter
// deliberately leaves alone (Source/Function/Detect.ts:5-7).
//
// Every extension in the table appears in exactly one family, and every
// refinement the header names is a Note on its family. The twin
// `ets-hook-dsh-comment-filter` ships a byte-identical Detect.ts, so one
// record covers both pages and the reader drops the `ets-` prefix.
export interface Family {
	/** The comment syntax family, as the source names it. */
	Syntax: string;
	/** The extensions that use it. */
	Extension: string[];
	/** The refinement the family needs, when it has one. */
	Note?: string;
}

export interface Detail {
	Slug: string;
	Family: Family[];
	/** The extensions the plugin deliberately does not handle, and why. */
	Absent: { Extension: string; Why: string }[];
}

export const Detail: Detail[] = [
	{
		Slug: "hook-dsh-comment-filter",
		Family: [
			{
				Syntax: "// + /* */",
				Extension: [
					"ts",
					"tsx",
					"mts",
					"cts",
					"js",
					"jsx",
					"mjs",
					"cjs",
					"c",
					"h",
					"cc",
					"cpp",
					"cxx",
					"hpp",
					"hh",
					"cs",
					"java",
					"kt",
					"kts",
					"swift",
					"go",
					"rs",
					"scala",
					"php",
					"dart",
					"css",
					"scss",
					"sass",
					"less",
					"proto",
					"groovy",
					"gradle",
					"vue",
					"svelte",
					"zig",
				],
				Note: 'php also reads # and Scan refuses #[; cs also has @"..." verbatim strings; js, ts, go, vue and svelte have backtick template strings',
			},
			{
				Syntax: "#",
				Extension: [
					"py",
					"pyi",
					"rb",
					"sh",
					"bash",
					"zsh",
					"fish",
					"pl",
					"pm",
					"r",
					"yml",
					"yaml",
					"toml",
					"ini",
					"cfg",
					"conf",
					"tf",
					"hcl",
					"nix",
					"cmake",
				],
				Note: "boundary-sensitive: # opens a comment only at the start of the line or after whitespace (YAML and TOML require it); rb also has the full-line =begin/=end block; py and pyi have triple-quoted docstrings",
			},
			{
				Syntax: "--",
				Extension: ["sql", "lua", "hs", "elm"],
				Note: "lua has the --[[ ]] block; hs and elm have the {- -} block",
			},
			{
				Syntax: ";",
				Extension: ["lisp", "clj", "cljs", "scm", "asm"],
			},
			{
				Syntax: "%",
				Extension: ["tex", "erl", "hrl", "matlab"],
			},
			{
				Syntax: "<!-- -->",
				Extension: ["html", "htm", "xml", "svg", "xsl", "plist"],
			},
			{
				Syntax: "# + <# #>",
				Extension: ["ps1"],
			},
		],
		Absent: [
			{
				Extension: "md",
				Why: "Prose has no code comment to remove; a // in a markdown code fence is content.",
			},
			{
				Extension: "mdx",
				Why: "Prose has no code comment to remove; a // in a markdown code fence is content.",
			},
			{
				Extension: "json",
				Why: "Data has no code comment to remove; a // in a JSON string is content.",
			},
			{
				Extension: "txt",
				Why: "Plain text has no code comment to remove.",
			},
		],
	},
];

export function DetailFor(Slug: string): Detail | undefined {
	return Detail.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}

export default Detail;
