// Debug: replicate the FileIcon.ts patterns and test matching.
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
const MentionPattern = new RegExp(`${FileAlternatives}|${CodeAlternatives}`, "g");
const IsCodeToken = new RegExp(`^(?:${CodeAlternatives})$`);

const T =
	'IMPLEMENTED (default OFF): rewrite the tool-call argumentsDelta and the assembled ToolCallBlock.arguments when on (with the edit/raw-write name exemptions and the {"__normalize":false raw-marker pass-through) - execution-critical raw JSON, the user\'s accepted risk; the example patch turns it on';
console.log("IsCodeToken(argumentsDelta):", IsCodeToken.test("argumentsDelta"));
console.log('IsCodeToken({"__normalize":false):', IsCodeToken.test('{"__normalize":false'));
let Rest = T;
for (;;) {
	MentionPattern.lastIndex = 0;
	const m = MentionPattern.exec(Rest);
	if (!m || m.index === undefined) break;
	console.log(JSON.stringify(m[0]), "code:", IsCodeToken.test(m[0]));
	Rest = Rest.slice(m.index + m[0].length);
}
console.log("leftover:", JSON.stringify(Rest));