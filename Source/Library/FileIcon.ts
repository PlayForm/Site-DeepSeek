// FileIcon.ts - the FILE-TYPE ICON FAMILY: the official file-type marks from
// the vscode-icons theme, rendered as the site's mono-ink mechanics family.
//
// SOURCE (verified at activation): the user pointed at the
// pierrecomputer/vscode-icons repository (github.com/pierrecomputer/vscode-icons).
// Verification found that repo to be a CUSTOM 16x16 currentColor icon set
// (its svgs/ directory) that carries NO file_type_* family and no json /
// toml / log / sh icons at all - so the file-type icons come from the
// CANONICAL theme the BrandIcon already cites for the TypeScript mark:
// vscode-icons/vscode-icons, icons/file_type_*.svg (fetched + verified
// against the repo's master tree at activation; the geometry below is
// verbatim from those files - never invented).
//
// TREATMENT (the design-voice choice): MONO-INK. The pierre set the user
// showed renders in currentColor monochrome by design (16x16 single-fill
// glyphs), and the site is blue+white-only with the sanctioned color
// exception reserved for BRAND marks - so the file-type shapes keep the
// official geometry while the theme's fills swap to currentColor: the
// icons inherit the site's ink in prose and the accent in badges, and flip
// automatically with the dark theme. The one two-tone survivor is the
// TypeScript square (the official white letters on the ink tile - without
// them the mark would be a blank square); the .svg mark drops its three
// white detail runs (the mono treatment would erase them anyway).
//
// THE MENTION RENDERER: Mention() turns a plain editable string (the Card
// Desc / Concept Diagram / Seams cells / table cells / metas) into safe
// HTML where every FILE MENTION carries its file-type icon on the left
// (package.json -> the json braces, Cargo.toml -> the T mark,
// cordis.patch.yml -> the Y mark, SCHEME.md -> the M mark, the .sh ->
// the shell tray, the .ts -> the TS tile ...) and every .log FILENAME
// renders as the LOG CHIP (the light #F8FAFC tray, the rounded corners,
// the log icon on the side - the markdown-like special mention the user
// asked for). The quoted ledger-line content stays untouched: a token
// inside a double-quoted run never gets an icon. The visible text bytes
// are preserved exactly - the icons are UI adornments, never text.
//
// THE CODE-TOKEN PASS: the same renderer also wraps every technical term
// in the string into the shared .code-token identity (the mono + the
// light #F8FAFC tray + the hairline + the rounded - the
// markdown-fenced-code style): the U+XXXX code-point mentions, the
// tool/command names (perl, ncu, cargo, pnpm, node, ...), the code
// identifiers (pluginFactory, normalizeReasoning, the core classes, the
// events and the seams) and the short quoted literals ("all", "edit",
// {"__normalize":false). Unlike the file pass, the code-token pass runs
// INSIDE quoted runs too - a quoted run is a literal, and the user asked
// for the literals styled. The visible text bytes stay byte-exact; only
// the presentation changes.

/** The file-type icon names of the family (the BrandIcon Name union). */
export type FileIconName =
	| "file-json"
	| "file-toml"
	| "file-yaml"
	| "file-markdown"
	| "file-shell"
	| "file-log"
	| "file-ts"
	| "file-js"
	| "file-svg";

/** Escape a text fragment for safe interpolation into HTML. */
function Escape(Text: string): string {
	return Text.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

/**
 * The verbatim body markup per name. Every path is the official
 * file_type_*.svg geometry (the fills of the official theme swapped to
 * currentColor - the mono treatment); the TS letters keep the official
 * white; the markdown frame keeps its stroke.
 */
const Bodies: Record<FileIconName, string> = {
	"file-json":
		'<path d="M4.014,14.976a2.51,2.51,0,0,0,1.567-.518A2.377,2.377,0,0,0,6.386,13.1,15.261,15.261,0,0,0,6.6,10.156q.012-2.085.075-2.747a5.236,5.236,0,0,1,.418-1.686,3.025,3.025,0,0,1,.755-1.018A3.046,3.046,0,0,1,9,4.125,6.762,6.762,0,0,1,10.544,4h.7V5.96h-.387a2.338,2.338,0,0,0-1.723.468A3.4,3.4,0,0,0,8.709,8.52a36.054,36.054,0,0,1-.137,4.133,4.734,4.734,0,0,1-.768,2.06A4.567,4.567,0,0,1,6.1,16a3.809,3.809,0,0,1,1.992,1.754,8.861,8.861,0,0,1,.618,3.865q0,2.435.05,2.9A1.755,1.755,0,0,0,9.264,25.7a2.639,2.639,0,0,0,1.592.337h.387V28h-.7a5.655,5.655,0,0,1-1.773-.2,2.97,2.97,0,0,1-1.324-.93,3.353,3.353,0,0,1-.681-1.63A24.175,24.175,0,0,1,6.6,22.006,16.469,16.469,0,0,0,6.386,18.9a2.408,2.408,0,0,0-.805-1.361,2.489,2.489,0,0,0-1.567-.524Z"></path><path d="M27.986,17.011a2.489,2.489,0,0,0-1.567.524,2.408,2.408,0,0,0-.805,1.361,16.469,16.469,0,0,0-.212,3.109,24.175,24.175,0,0,1-.169,3.234,3.353,3.353,0,0,1-.681,1.63,2.97,2.97,0,0,1-1.324.93,5.655,5.655,0,0,1-1.773.2h-.7V26.04h.387a2.639,2.639,0,0,0,1.592-.337,1.755,1.755,0,0,0,.506-1.186q.05-.462.05-2.9a8.861,8.861,0,0,1,.618-3.865A3.809,3.809,0,0,1,25.9,16a4.567,4.567,0,0,1-1.7-1.286,4.734,4.734,0,0,1-.768-2.06,36.054,36.054,0,0,1-.137-4.133,3.4,3.4,0,0,0-.425-2.092,2.338,2.338,0,0,0-1.723-.468h-.387V4h.7A6.762,6.762,0,0,1,23,4.125a3.046,3.046,0,0,1,1.149.581,3.025,3.025,0,0,1,.755,1.018,5.236,5.236,0,0,1,.418,1.686q.062.662.075,2.747a15.261,15.261,0,0,0,.212,2.947,2.377,2.377,0,0,0,.805,1.355,2.51,2.51,0,0,0,1.567.518Z"></path>',
	"file-toml":
		'<path d="M22.76,6.83v3.25h-5V25.17H14.26V10.08h-5V6.83Z"></path><path d="M2,2H8.2V5.09H5.34v21.8H8.2V30H2Z"></path><path d="M30,30H23.8V26.91h2.86V5.11H23.8V2H30Z"></path>',
	"file-yaml":
		'<path d="M2 12.218c.755 0 1.51-.008 2.264 0l.053.038 2.761 2.758c.891-.906 1.8-1.794 2.7-2.7.053-.052.11-.113.192-.1h1.823a1.4 1.4 0 0 1 .353.019c-.7.67-1.377 1.369-2.069 2.05L5.545 18.8c-.331.324-.648.663-.989.975-.754.022-1.511.007-2.266.007 1.223-1.209 2.431-2.433 3.658-3.637-1.321-1.304-2.63-2.62-3.948-3.927M12.7 12.218h1.839v7.566c-.611 0-1.222.012-1.832-.008v-4.994c-1.6 1.607-3.209 3.2-4.811 4.8-.089.08-.166.217-.305.194-.824-.006-1.649 0-2.474 0Q8.916 16 12.7 12.218M14.958 12.22c.47-.009.939 0 1.409 0 .836.853 1.69 1.689 2.536 2.532q1.268-1.267 2.539-2.532h1.4q-.008 3.784 0 7.567c-.471 0-.943.006-1.414 0q.008-2.387 0-4.773c-.844.843-1.676 1.7-2.526 2.536-.856-.835-1.687-1.695-2.532-2.541 0 1.594-.006 3.188.006 4.781-.472 0-.943.005-1.415 0q-.003-3.79-.003-7.57M23.259 12.217c.472 0 .944-.007 1.416 0q-.007 3.083 0 6.166h3.782c.063.006.144-.012.191.045.448.454.907.9 1.353 1.354q-3.371.007-6.741 0 .007-3.782-.001-7.565"></path>',
	"file-markdown":
		'<rect x="2.5" y="7.955" width="27" height="16.091" fill="none" stroke="currentColor"></rect><polygon points="5.909 20.636 5.909 11.364 8.636 11.364 11.364 14.773 14.091 11.364 16.818 11.364 16.818 20.636 14.091 20.636 14.091 15.318 11.364 18.727 8.636 15.318 8.636 20.636 5.909 20.636"></polygon><polygon points="22.955 20.636 18.864 16.136 21.591 16.136 21.591 11.364 24.318 11.364 24.318 16.136 27.045 16.136 22.955 20.636"></polygon>',
	"file-shell":
		'<path d="M29.4,27.6H2.5V4.5H29.4Zm-25.9-1H28.4V5.5H3.5Z"></path><polygon points="6.077 19.316 5.522 18.484 10.366 15.255 5.479 11.184 6.12 10.416 12.035 15.344 6.077 19.316"></polygon><rect x="12.7" y="18.2" width="7.8" height="1"></rect><rect x="2.5" y="5.5" width="26.9" height="1.9"></rect>',
	"file-log":
		'<path d="M29.4,27.6H2.5V4.5H29.4Zm-25.9-1H28.4V5.5H3.5Z"></path><rect x="2.5" y="5.5" width="26.9" height="1.9"></rect><rect x="11.333" y="9.5" width="8.167" height="1"></rect><rect x="11.333" y="12.083" width="12.5" height="1"></rect><rect x="11.333" y="14.75" width="10.617" height="1"></rect><rect x="11.333" y="17.583" width="14.167" height="1"></rect><rect x="11.333" y="20.5" width="9.834" height="1"></rect><rect x="11.5" y="23.083" width="12.167" height="1"></rect><rect x="5.5" y="9.5" width="4.333" height="1"></rect><rect x="5.5" y="12.083" width="4.333" height="1"></rect><rect x="5.5" y="12.083" width="4.333" height="1"></rect><rect x="5.5" y="14.667" width="4.333" height="1"></rect><rect x="5.5" y="17.25" width="4.333" height="1"></rect><rect x="5.5" y="20.5" width="4.333" height="1"></rect><rect x="5.5" y="23.083" width="4.333" height="1"></rect>',
	"file-ts":
		'<rect x="2" y="2" width="28" height="28" rx="1.312" fill="currentColor"></rect><path fill="#fff" fill-rule="evenodd" d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"></path>',
	"file-js":
		'<path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z"></path>',
	// The .svg mark: the official hexagon arms + the screen band, mono-ink.
	// The three white detail runs of the official file (the "svg" letters,
	// the curl and the prompt) are dropped - a white-on-ink two-tone cannot
	// survive the mono treatment, and the hexagon + band carries the shape.
	"file-svg":
		'<path d="M7.674,14.488a2.218,2.218,0,1,0,0,3.137H24.326a2.218,2.218,0,1,0,0-3.137Z"></path><path d="M11.222,9.06A2.218,2.218,0,1,0,9,11.278L20.778,23.052A2.218,2.218,0,1,0,23,20.834Z"></path><path d="M17.568,7.73a2.218,2.218,0,1,0-3.137,0V24.382a2.218,2.218,0,1,0,3.137,0Z"></path><path d="M23,11.278A2.218,2.218,0,1,0,20.778,9.06L9,20.834a2.218,2.218,0,1,0,2.218,2.218Z"></path><path d="M2,16.056H30V25.95a4.035,4.035,0,0,1-4.106,4.106H6.106A4.035,4.035,0,0,1,2,25.95Z"></path>',
};

/**
 * The complete inline SVG markup for one file-type icon - the same
 * class/style/a11y contract the BrandIcon component renders, so the
 * mention renderer and the component share one geometry source.
 */
export function FileIconMark(
	Name: FileIconName,
	Size = "0.9em",
	ClassName = "",
	Label?: string,
): string {
	const A11y = Label
		? ` role="img" aria-label="${Escape(Label)}"`
		: ' aria-hidden="true"';
	const Cls = `brand-icon brand-icon--${Name}${ClassName ? ` ${ClassName}` : ""}`;
	return `<svg class="${Cls}" style="height: ${Size}; width: auto;" viewBox="0 0 32 32" fill="currentColor"${A11y}>${Bodies[Name]}</svg>`;
}

/**
 * The file-mention token: the known file names first (matched as the bare
 * basename, so a mention inside a template path like
 * ~/.dsh/profiles/<name>/package.json still icons the basename), then the
 * generic path token (the maximal run of path characters ending in a known
 * extension - package.json, Cargo.toml, cordis.patch.yml, SCHEME.md,
 * README.md, .sh, .ts, .mjs, .js, .svg and the .log files). SCHEME and
 * README match bare (the site cites them without the .md).
 */
const FileAlternatives = [
	"SCHEME(?:\\.md)?",
	"READMEs?(?:\\.md)?",
	"~?/\\.dsh/<name>\\.log",
	"<name>\\.log",
	"package\\.json",
	"pin-policy\\.json",
	"update-policy\\.json",
	"registry\\.json",
	"pnpm-workspace\\.yaml",
	"cordis\\.patch\\.yml",
	"Cargo\\.toml",
	"(?:[A-Za-z0-9_~./-]+[A-Za-z0-9_-])\\.(?:json|toml|yaml|yml|md|sh|ts|mjs|js|svg|log)",
].join("|");

/**
 * The code-token alternatives: every technical term the site cites renders
 * as the shared .code-token identity (the markdown-fenced style). The
 * U+XXXX code points first, then the {"__normalize":false raw-marker
 * literal, the short quoted literals ("all", "edit", "cargo" - the
 * single-word quoted runs, quotes included), the tool/command names, the
 * events and seams, the identifiers and the core class names. The word
 * alternatives carry their own \\b boundaries so a term never matches
 * inside a longer word ("node" never matches "nodes"; "npm" never matches
 * inside "pnpm"; "cargo" never matches inside "Cargo.toml", which the file
 * pass above already owns). Capitalized identifiers (State, Append,
 * Write, ...) only match the technical names - the prose uses the
 * lowercase English words.
 */
const CodeAlternatives = [
	"U\\+[0-9A-Fa-f]{4,6}",
	'\\{"__normalize":false',
	'"[A-Za-z0-9@._-]{1,24}"',
	"\\b(?:perl|ncu|cargo|pnpm|npm|node|node_modules|subprocess)\\b",
	"\\b(?:llm/stream|fs/observed|fs/write-intent|raw-write|writeText)\\b",
	"\\b(?:Factory\\.RegisterGovern|Factory\\.Govern|RegisterGovern|Govern)\\b",
	"\\b(?:pluginFactory|normalizeReasoning|normalizeToolArguments|argumentsDelta|old_string)\\b",
	"\\b(?:ctx\\.fs|ctx\\.tools|LlmRuntime|CoreChunk|TextBlock|ReasoningBlock|ToolCallBlock)\\b",
	"\\b(?:logFile|updateMode|ncuBin|cargoBin|policyFile|keepFile|toolArgs|next\\(\\))\\b",
	"\\b(?:Dashes|Quotes|Ellipsis|Spaces|Invisible|Fullwidth|ReplaceMap|Replace)\\b",
	"\\b(?:State|Append|Ledger|Enabled|Write|Guard|UpdateKey|LRE|RLE|PDF|LRO|RLO)\\b",
].join("|");

const FilePattern = new RegExp(FileAlternatives, "g");
const CodePattern = new RegExp(CodeAlternatives, "g");
const MentionPattern = new RegExp(`${FileAlternatives}|${CodeAlternatives}`, "g");
const IsCodeToken = new RegExp(`^(?:${CodeAlternatives})$`);

/** The icon name a matched file token renders with. */
function IconFor(Token: string): FileIconName {
	const Lower = Token.toLowerCase();
	if (Lower.endsWith(".toml")) return "file-toml";
	if (Lower.endsWith(".yaml") || Lower.endsWith(".yml")) return "file-yaml";
	if (Lower.endsWith(".md")) return "file-markdown";
	if (Lower.endsWith(".sh")) return "file-shell";
	if (Lower.endsWith(".ts")) return "file-ts";
	if (Lower.endsWith(".mjs") || Lower.endsWith(".js")) return "file-js";
	if (Lower.endsWith(".svg")) return "file-svg";
	if (Lower.endsWith(".log")) return "file-log";
	return "file-json";
}

/** Whether the token is a .log filename (the chip treatment). */
function IsLog(Token: string): boolean {
	return Token.toLowerCase().endsWith(".log");
}

/**
 * The double-quoted runs of a string: a token inside one of these is
 * quoted ledger-line / code content and stays untouched (the byte-exact
 * quotes rule - the chip and the icons adorn the mentions, never the
 * quoted content).
 */
function QuotedRuns(Text: string): Array<[number, number]> {
	const Runs: Array<[number, number]> = [];
	let Start = -1;
	for (let I = 0; I < Text.length; I += 1) {
		if (Text[I] !== '"') continue;
		if (Start < 0) Start = I;
		else {
			Runs.push([Start, I + 1]);
			Start = -1;
		}
	}
	return Runs;
}

/**
 * Mention: the string-prop renderer for file mentions and code tokens.
 * Escapes the text, renders every file mention with its file-type icon on
 * the left (the .log filenames as the special log chip) - skipping tokens
 * inside double-quoted runs - and every technical term (the U+XXXX code
 * points, the tool names, the identifiers, the short quoted literals) as
 * the shared .code-token identity. The visible text bytes stay byte-exact
 * - the icons and the trays are UI adornments outside the strings.
 */
export function Mention(Text: string): string {
	const Runs = QuotedRuns(Text);
	const IsQuoted = (Index: number): boolean =>
		Runs.some(([From, To]) => Index >= From && Index < To);

	let Out = "";
	let Rest = Text;
	for (;;) {
		// exec (not match): with the global flag, String.match returns a
		// plain array without .index - exec keeps the match object.
		MentionPattern.lastIndex = 0;
		const Match = MentionPattern.exec(Rest);
		if (!Match || Match.index === undefined) break;
		const Token = Match[0];
		const Start = Match.index;
		Out += Escape(Rest.slice(0, Start));
		// The absolute index within the ORIGINAL text: the token begins at
		// Text.length - Rest.length + Start.
		const Absolute = Text.length - Rest.length + Start;
		if (IsCodeToken.test(Token)) {
			// The code-token pass: the technical terms render as the shared
			// .code-token identity everywhere, quoted runs included (a
			// quoted run is a literal, and the literals are tokens too).
			Out += `<code class="code-token">${Escape(Token)}</code>`;
		} else if (IsQuoted(Absolute)) {
			Out += Escape(Token);
		} else {
			const Icon = FileIconMark(IconFor(Token));
			Out += IsLog(Token)
				? `<span class="log-chip">${Icon}${Escape(Token)}</span>`
				: `<span class="file-mention">${Icon}${Escape(Token)}</span>`;
		}
		Rest = Rest.slice(Start + Token.length);
	}
	return Out + Escape(Rest);
}