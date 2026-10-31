// The structured knowledge in a package's source, one typed record per
// package, read by hand and never parsed by the build.
//
// The first record is the comment filter's syntax table, transcribed from
// `Source/Function/Detect.ts:9-32` (the seven families), `:82-165` (the
// extension table), and `:5-7` (the four extensions the filter deliberately
// leaves alone).
//
// The two later records are the Detail pass for `hook-dsh-ccr` and
// `plugin-dsh-gitguard`:
//
//   * `hook-dsh-ccr` - `SCHEME.md` section 2 (the gate, the multipliers, the
//     exempt list), section 4 (the preview and the marker), section 5 (the
//     store and its eviction), section 6 (the retrieval tool), and section 8
//     (the defaults); `Source/Function/Compress.ts:55-99` (the three verdicts
//     and the size basis), `Marker.ts:3-40` (the grammar and the strict
//     parse), `Store.ts:1-36` and `:112-203` (the LRU, the TTL, the victim),
//     `Retrieve.ts:8-48` (the exact hash and the range), and
//     `Source/Variable/Config.ts:42-112` (every default quoted below).
//
//   * `plugin-dsh-gitguard` - `SCHEME.md` section 3 (the config defaults and
//     the two lists), section 4 (the classification chain), and section 5
//     (the refusal and the ledger); `Source/Function/Decide.ts:3-66` (the
//     order), `Guard.ts:29-125` (the refusal), `Variable/Config.ts:31-63`
//     (the default deny and allow lists), and `Source/Test/
//     Wiring-And-Classification/Test.ts:77-133` plus `Guard-And-Ledger/
//     Test.ts:39-62` (the exact command shapes and the exact lines).
//
// Every extension in the first table appears in exactly one family, and every
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

export interface Absent {
	/** The extension or the tool the plugin leaves alone. */
	Name: string;
	/** The source's reason, in one sentence. */
	Why: string;
}

/** One verdict a gate can return, and what produces it. */
export interface Outcome {
	/** The verdict, as the source names it. */
	Label: string;
	/** What produces that verdict, and what it leaves behind. */
	Note: string;
}

/** The verdicts a package's gate returns, and the condition that picks one. */
export interface Gate {
	/** The rule the gate keeps, said once. */
	Rule: string;
	/** The verdicts, in the order the gate tries them. */
	Outcome: Outcome[];
	/** The verdict the documented case returns. */
	Mark: string;
	/** The condition that separates the verdicts. */
	Condition: string;
}

/** One slot of a template, in the order the template writes it. */
export interface Slot {
	/** The key or the literal segment, as the template writes it. */
	Name: string;
	/** The segment's type, in the source's own notation. */
	Type: string;
	/** True when the template is invalid without the segment. */
	Required: boolean;
	/** What the segment carries, in one clause. */
	Description: string;
}

/** One stored entry, as the store's two clocks see it. */
export interface Stored {
	/** The 24-hex hash the marker carries. */
	Hash: string;
	/** The classified type. */
	Type: string;
	/** The serialized byte size. */
	Size: number;
	/** The seconds since the entry was last accessed, the LRU clock. */
	Access: number;
	/** The seconds since the entry was stored, the TTL clock. */
	Age: number;
	/** True for the entry the current insert just wrote. */
	Fresh?: boolean;
}

/** The store: its capacity, its clock, and the entries at one insert. */
export interface Storage {
	/** The LRU budget in bytes. */
	Budget: number;
	/** The TTL in seconds. */
	Ttl: number;
	/** The eviction rule, said once. */
	Rule: string;
	/** The entries the store holds when the insert lands. */
	Entry: Stored[];
}

/** One answer the retrieval tool can return. */
export interface Retrieval {
	/** The call, as the model writes it. */
	Call: string;
	/** What the store does with it. */
	Answer: string;
	/** What the model receives. */
	Model: string;
	/** The ledger line the call writes. */
	Line: string;
}

/** The two subcommand lists a guard compares, and the precedence. */
export interface Policy {
	/** The precedence the guard keeps, said once. */
	Rule: string;
	/** The subcommands the guard refuses. */
	Refuse: string[];
	/** The subcommands the guard allows even when refused. */
	Allow: string[];
	/** The override that outranks both lists. */
	Strict: string;
}

/** One rung of a decision ladder. */
export interface Rung {
	/** The rung's own name. */
	Label: string;
	/** The dimension's value at this rung, as the harness writes it. */
	Value: string;
	/** What the call looks like at this value. */
	Body: string;
	/** A quiet fact beside the body. */
	Note?: string;
	/** True when this is the rung the default case reaches. */
	Mark?: boolean;
}

/** One exact command and the verdict the guard returns for it. */
export interface Command {
	/** The command, exactly as the guard reads it. */
	Shape: string;
	/** The verdict the guard returns. */
	Verdict: "allow" | "deny";
	/** The reason, as the source names it. */
	Why: string;
}

/** One line the package writes, and where it surfaces. */
export interface Line {
	/** The event that writes the line. */
	When: string;
	/** Where the line surfaces: the ledger or the tool result. */
	Where: "ledger" | "result";
	/** The line, exactly as the package writes it. */
	Text: string;
	/** True when this is the line the documented case writes. */
	Mark?: boolean;
}

/** The lines a package writes, and the rule that binds them. */
export interface Ledger {
	/** The rule the lines keep, said once. */
	Rule: string;
	/** The lines, in the order the package writes them. */
	Line: Line[];
}

export type Detail =
	| {
			Slug: string;
			Kind: "Syntax";
			/** The gate is drawn by the portrait for a gate-shaped package. */
			Verdict?: Gate;
			/** The comment-syntax families the scanner knows. */
			Family: Family[];
			/** The extensions the scanner leaves alone. */
			Absent: Absent[];
	  }
	| {
			Slug: string;
			Kind: "Compress";
			/** The three verdicts and the size ceiling. */
			Verdict: Gate;
			/** The marker's grammar, one slot per segment. */
			Marker: Slot[];
			/** The store behind the marker. */
			Storage: Storage;
			/** The answers the retrieval tool can return. */
			Retrieval: Retrieval[];
			/** The tools the gate never compresses. */
			Exempt: Absent[];
	  }
	| {
			Slug: string;
			Kind: "Guard";
			/** The two verdicts and the precedence. */
			Verdict: Gate;
			/** The two subcommand lists. */
			Policy: Policy;
			/** The decision chain, in the order the guard tests it. */
			Order: Rung[];
			/** The exact command shapes the guard judges. */
			Command: Command[];
			/** The lines one denial writes. */
			Ledger: Ledger;
	  };

// The two ccr defaults the gate's sentence quotes, so the printed bytes cannot
// drift from the config (`Source/Variable/Config.ts:67`, `:75`).
const Threshold = 1024;
const Ceiling = 102400;

// The gitguard defaults, written once so the policy, the ladder, the counts,
// and the activation line all read the same arrays
// (`Source/Variable/Config.ts:31-63`).
const Deny = [
	"add",
	"commit",
	"reset",
	"push",
	"tag",
	"rm",
	"checkout",
	"branch",
	"merge",
	"stash",
	"clean",
	"rebase",
	"revert",
	"cherry-pick",
	"mv",
	"apply",
	"am",
	"bisect",
	"gc",
	"prune",
	"worktree",
	"submodule",
	"notes",
];

const Allow = ["status", "log", "diff", "show", "rev-parse", "ls-files", "fetch"];

// The decision chain's ordinal, so a rung inserted in the middle renumbers the
// rest instead of leaving a gap the reader has to notice.
const Step = (Index: number): string => String(Index + 1).padStart(2, "0");

export const Detail: Detail[] = [
	{
		Slug: "hook-dsh-comment-filter",
		Kind: "Syntax",
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
				Name: "md",
				Why: "Prose has no code comment to remove; a // in a markdown code fence is content.",
			},
			{
				Name: "mdx",
				Why: "Prose has no code comment to remove; a // in a markdown code fence is content.",
			},
			{
				Name: "json",
				Why: "Data has no code comment to remove; a // in a JSON string is content.",
			},
			{
				Name: "txt",
				Why: "Plain text has no code comment to remove.",
			},
		],
	},

	// The compression gate. The verdicts are the branch at
	// `Source/Function/Compress.ts:57-98`, the ceiling sentence is
	// `SCHEME.md` section 2, and the marker, the store, the retrieval, and the
	// exemption list are the four facts the gate depends on.
	{
		Slug: "hook-dsh-ccr",
		Kind: "Compress",
		Verdict: {
			Rule: "The gate reads the content, the tool name, and the failure flag, and returns one verdict; only the last two write the store, and the write happens before the verdict leaves.",
			Outcome: [
				{
					Label: "pass",
					Note: "empty content, an exempt tool, a failure while compressFailures is off, a name outside targets, or a size at or under the threshold times the type's multiplier",
				},
				{
					Label: "store",
					Note: "over the gate, with auto-expand on and the size at or under its ceiling: the full content returns, the entry is retrievable, and no marker reaches the model",
				},
				{
					Label: "replace",
					Note: "over the gate and over the auto-expand ceiling: one preview line and one retrieval marker, while the original stays in the store",
				},
			],
			Mark: "replace",
			Condition: `Size is the UTF-8 byte length of the serialized content. The default configuration returns replace only above the auto-expand ceiling of ${Ceiling} bytes; at or under it the same result returns store, and at or under ${Threshold} bytes times the type's multiplier it returns pass.`,
		},
		Marker: [
			{
				Name: "<<<CCR:",
				Type: "literal",
				Required: true,
				Description:
					"The fixed prefix; the marker must occupy the whole trimmed line, byte for byte.",
			},
			{
				Name: "hash",
				Type: "24 hex",
				Required: true,
				Description:
					"The SHA-256 of the serialized bytes, truncated to 24 lowercase hex characters; matched exactly, with no prefix and no fuzzy match.",
			},
			{
				Name: "|",
				Type: "literal",
				Required: true,
				Description: "The separator between the hash and the type.",
			},
			{
				Name: "type",
				Type: "type token",
				Required: true,
				Description:
					"The classified type: terminal, error, grep, paths, file, json, web, default.",
			},
			{
				Name: "|",
				Type: "literal",
				Required: true,
				Description: "The separator between the type and the size.",
			},
			{
				Name: "size",
				Type: "integer",
				Required: true,
				Description:
					"The UTF-8 byte length of the serialized content, not the preview's; a ranged retrieval returns less than this.",
			},
			{
				Name: ">>>",
				Type: "literal",
				Required: true,
				Description: "The fixed suffix; anything after it on the line refuses the parse.",
			},
		],
		Storage: {
			Budget: 268435456,
			Ttl: 3600,
			Rule: "The victim is the entry with the smallest lastAccessed, so the oldest read leaves first; the TTL counts from the store, not from the last read, so an entry expires on its own clock.",
			Entry: [
				{
					Hash: "b41c9e7a2d5f8031c6a9e4d2",
					Type: "terminal",
					Size: 100663296,
					Access: 2520,
					Age: 2520,
				},
				{
					Hash: "6f0a2c8e1b4d7935a2c8e0f6",
					Type: "grep",
					Size: 67108864,
					Access: 120,
					Age: 3000,
				},
				{
					Hash: "d9e2a7c4f10b8365e2a7c4f1",
					Type: "file",
					Size: 125829120,
					Access: 0,
					Age: 0,
					Fresh: true,
				},
				{
					Hash: "3c8f5a1d9e2b7046f3c8f5a1",
					Type: "web",
					Size: 25165824,
					Access: 4200,
					Age: 4200,
				},
			],
		},
		Retrieval: [
			{
				Call: "ccr_retrieve(hash)",
				Answer: "The entry is found, and its clock is refreshed.",
				Model: "The original text: the text blocks newline-joined, byte for byte.",
				Line: "retrieved <hash>",
			},
			{
				Call: "ccr_retrieve(hash, range)",
				Answer: "The entry is found, and the range slices the joined text.",
				Model: "A 0-based line slice: start defaults to 0, count to the end, and both clamp. Asking past the end returns an empty slice, never an error.",
				Line: "retrieved <hash>",
			},
			{
				Call: "ccr_retrieve(hash), unknown",
				Answer: "No entry under that hash.",
				Model: "A self-describing error: the entry is gone, and the model should re-run the original tool.",
				Line: "retrieval miss <hash> (unknown)",
			},
			{
				Call: "ccr_retrieve(hash), expired",
				Answer: "The entry was at or past its ttlAt, so it was dropped.",
				Model: "The same error, with the TTL as the reason.",
				Line: "retrieval miss <hash> (expired)",
			},
		],
		Exempt: [
			{
				Name: "write",
				Why: "The author's own file write; its content is the work, not a result to compress.",
			},
			{
				Name: "edit",
				Why: "The edit result is the change the author asked for, and the diff is the evidence.",
			},
			{
				Name: "raw-write",
				Why: "A raw write is the bytes themselves; replacing it would replace the file's content with a marker.",
			},
			{
				Name: "subagent",
				Why: "A subagent's brief is another agent's whole answer, and the parent reads it once.",
			},
			{
				Name: "ask_user_question",
				Why: "The question is a gate the user answers; a marker would ask the user to retrieve their own prompt.",
			},
			{
				Name: "ccr_retrieve",
				Why: "The retrieval tool's own echo; compressing it would make the restore of a restore.",
			},
		],
	},

	// The git guard. The two verdicts are `Source/Function/Decide.ts:24-66`,
	// the lists are the defaults at `Source/Variable/Config.ts:31-63`, the
	// order is the chain at `Decide.ts:3-14`, the shapes are the assertions at
	// `Source/Test/Wiring-And-Classification/Test.ts:77-133`, and the lines are
	// `SCHEME.md` section 5 and `Guard-And-Ledger/Test.ts:39-62`.
	{
		Slug: "plugin-dsh-gitguard",
		Kind: "Guard",
		Verdict: {
			Rule: "The guard judges only git, judges a compound command by its worst segment, and returns its denial once as the pre-execute decision.",
			Outcome: [
				{
					Label: "allow",
					Note: "the guard is disabled, no segment is a git command, the subcommand is allow-listed, or it is not deny-listed",
				},
				{
					Label: "deny",
					Note: "a segment's subcommand is on the deny list, or strict mode is on and any git command was read at all",
				},
			],
			Mark: "deny",
			Condition:
				"The allow list wins over the deny list, so a user can re-allow a denied subcommand explicitly; strict mode wins over both, because it denies every git command, the read-only checks included.",
		},
		Policy: {
			Rule: "The allow list wins over the deny list, so a subcommand on both lists is allowed and a user can re-allow a denied one explicitly.",
			Refuse: Deny,
			Allow: Allow,
			Strict: "Strict mode wins over both: every git command is denied, the read-only checks included.",
		},
		Order: [
			{
				Label: "disabled",
				Value: Step(0),
				Body: "The guard is off, so the verdict is allow and the cold mount passes everything.",
				Note: "enabled=false",
			},
			{
				Label: "not git",
				Value: Step(1),
				Body: "No segment is a git command, so the verdict is allow: the guard only ever judges git.",
				Note: "ls -la",
			},
			{
				Label: "strict",
				Value: Step(2),
				Body: "Strict mode is on, so the verdict is deny for every git command, the allow list included.",
				Note: "strict=true",
			},
			{
				Label: "allow-listed",
				Value: Step(3),
				Body: "A segment's subcommand is allow-listed, so the verdict is allow, because the allow list wins over the deny list.",
				Note: "git status",
			},
			{
				Label: "deny-listed",
				Value: Step(4),
				Body: "A segment's subcommand is deny-listed, so the verdict is deny, and the reason names the match.",
				Note: "deny-list: git add",
				Mark: true,
			},
			{
				Label: "fallback",
				Value: Step(5),
				Body: "The subcommand is on neither list, so the verdict is allow.",
				Note: "git config",
			},
		],
		Command: [
			{ Shape: "git add -A", Verdict: "deny", Why: "deny-list: git add" },
			{ Shape: "git commit -m x", Verdict: "deny", Why: "deny-list: git commit" },
			{ Shape: "git push --force", Verdict: "deny", Why: "deny-list: git push" },
			{ Shape: "git reset --hard", Verdict: "deny", Why: "deny-list: git reset" },
			{
				Shape: "cd repo && git add -A",
				Verdict: "deny",
				Why: "a compound is judged by its worst segment",
			},
			{
				Shape: "git status; git commit -m x",
				Verdict: "deny",
				Why: "the second segment is denied",
			},
			{
				Shape: "GIT_EDITOR=vim git commit -m y",
				Verdict: "deny",
				Why: "the env prefix is skipped before git",
			},
			{ Shape: "git status", Verdict: "allow", Why: "allow-listed" },
			{ Shape: "git --no-pager log", Verdict: "allow", Why: "the leading flag is skipped" },
			{ Shape: "git", Verdict: "allow", Why: "bare git is not deny-listed" },
			{ Shape: "ls -la", Verdict: "allow", Why: "not a git command" },
		],
		Ledger: {
			Rule: "One denial writes one ledger line and returns one refusal; the two carry the same subcommand and the same reason.",
			Line: [
				{
					When: "cold mount",
					Where: "ledger",
					Text: "gitguard: disabled (enabled=false)",
				},
				{
					When: "activation",
					Where: "ledger",
					Text: `gitguard: activated (strict=false, denyPatterns=${Deny.length}, allowPatterns=${Allow.length})`,
				},
				{
					When: "denial",
					Where: "ledger",
					Text: "gitguard: denied add (deny-list: git add)",
					Mark: true,
				},
				{
					When: "denial",
					Where: "result",
					Text: `gitguard: refused "git add" (deny-list: git add) - git is read-only in this session (the checks-only law). Allowed: git status, log, diff, show, rev-parse, ls-files, fetch.`,
					Mark: true,
				},
			],
		},
	},
];

export function DetailFor(Slug: string): Detail | undefined {
	return Detail.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}

export default Detail;
