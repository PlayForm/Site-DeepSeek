import { C as Mention, D as __exportAll, E as createComponent, a as Links, b as Versions, c as Families, m as Ordinal, n as $$Base, r as Link, s as Counts, t as $$Badge, x as $$BrandIcon } from "./Badge_BcqTIV8g.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$ArrowIcon } from "./ArrowIcon_DerRPTTd.mjs";
import { t as $$Card } from "./Card_CsNNQgw0.mjs";
import { t as $$Concept } from "./Concept_sjNl5b6w.mjs";
import { t as $$SectionHeader } from "./SectionHeader_CwH-UUI4.mjs";
import { t as $$Terminal } from "./Terminal_BMZtWhRH.mjs";
import { t as $$Compare } from "./Compare_BvteMlTf.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_BnfN9xLH.mjs";
import { t as $$Seams } from "./Seams_DfmJdky_.mjs";
//#region Source/pages/plugins/hook-dsh-normalize-file.astro
var hook_dsh_normalize_file_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HookDshNormalizeFile,
	file: () => $$file,
	url: () => $$url
});
var $$HookDshNormalizeFile = createComponent(($$result, $$props, $$slots) => {
	const Siblings = [
		{
			Flavor: "hook-dsh-normalize-dash",
			Layer: "model output (stream)",
			Mechanism: "core Dashes class → replacement (default -)",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-quotes",
			Layer: "model output (stream)",
			Mechanism: "core Quotes MAP → curly → straight",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-ellipsis",
			Layer: "model output (stream)",
			Mechanism: "core Ellipsis class → ...",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-spaces",
			Layer: "model output (stream)",
			Mechanism: "core Spaces class → \" \"",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-invisible",
			Layer: "model output (stream)",
			Mechanism: "core Invisible class → removed",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-fullwidth",
			Layer: "model output (stream)",
			Mechanism: "core Fullwidth MAP → full-width → half-width",
			This: false
		},
		{
			Flavor: "hook-dsh-normalize-file (this bundle)",
			Layer: "files already on disk (tool)",
			Mechanism: "all SIX, at write time, through Factory.Write",
			This: true
		}
	];
	const Pipeline = [
		"  agent calls normalize-file { file_path }",
		"       |",
		"       v",
		"  ctx.fs.resolve                     the model-supplied path becomes a",
		"       |                             stable target (caller-side, like raw-write)",
		"       v",
		"  ctx.fs.readText(target, signal)    the shared read path - a missing file,",
		"       |                             a directory, a binary/undecodable target,",
		"       |                             a permission failure or an abort rejects",
		"       |                             here -> error result, NO write",
		"       v",
		"  Rewrite(content, replacement)      the counting six-fold chain, in order:",
		"       |                               1. Dashes    class  -> replacement (\"-\")",
		"       |                               2. Quotes    MAP    -> curly -> straight",
		"       |                               3. Ellipsis  class  -> \"...\"",
		"       |                               4. Spaces    class  -> \" \"",
		"       |                               5. Invisible class  -> \"\" (removed)",
		"       |                               6. Fullwidth MAP    -> full-width -> half-width",
		"       |                             every step returns { text, count } and the",
		"       |                             counts are summed -> N",
		"       v",
		"  N == 0 ?  -----------------------> NO write at all: the file is left",
		"       |                               byte-identical, no ledger line, no",
		"       |                               journal record; result: changed: false",
		"       | N > 0",
		"       v",
		"  Factory.Write(state, target,       the ONE shared write executor:",
		"       |    rewritten, { signal,       the fs/write-intent waterfall, the",
		"       |    actor: exec,               standing sandbox policy, writeText end",
		"       |    policy: \"standing\" })     to end, and the fs/observed",
		"       |                             { kind: \"present\", version } emit ON THE",
		"       |                             ROOT CONTEXT with the call's exec as the",
		"       |                             actor - byte-identical with raw-write",
		"       v",
		"  ledger + journal                   `normalized N char(s) in <path>` via",
		"                                      Factory.Append, and the `normalized`",
		"                                      event of the shared package_governance",
		"                                      v2 domain via Factory.Journal",
		"       |",
		"       v",
		"  result { path, count, changed,     the diff card shows the outcome's",
		"           before, after }           before/after in the same turn"
	];
	const Scopes = [
		{
			Scope: "conversation",
			Default: "on",
			Gates: "text-delta text + the assembled text/reasoning blocks"
		},
		{
			Scope: "reasoning",
			Default: "on",
			Gates: "the reasoning-delta sub-gate (ANDed with normalizeReasoning)"
		},
		{
			Scope: "toolInput",
			Default: "off",
			Gates: "the tool-call arguments arm (OR-ed with normalizeToolArguments)"
		},
		{
			Scope: "toolResults",
			Default: "off",
			Gates: "the tools/post-execute arm (tool results in the transcript)"
		},
		{
			Scope: "files",
			Default: "on",
			Gates: "the normalize-file tool - off = the tool returns the unchanged changed:false result, no read, no write, no ledger line"
		},
		{
			Scope: "batch",
			Default: "off",
			Gates: "the agent/pre-step arm (the incoming step batch)"
		}
	];
	const CommandRows = [
		{
			Input: "files <path...>",
			Effect: "run the file sweep - the normalize-file pipeline per path, EACH changed file written through the shared executor with its own count line, then the summary"
		},
		{
			Input: "batch",
			Effect: "arm the one-shot step-batch overpass (consumed by the next incoming batch)"
		},
		{
			Input: "results on|off",
			Effect: "flip scopes.toolResults via the settings service / config editor - NEVER direct State mutation; absent services report the settings-UI path"
		},
		{
			Input: "scopes",
			Effect: "read-only report of the current effective values (the activation line never changes)"
		}
	];
	const LedgerLines = [
		"hook-dsh-normalize-file: overpass: normalized N char(s) in tool result <toolName> <callId>",
		"hook-dsh-normalize-file: overpass: normalized N char(s) in step batch (turn T step S)",
		"hook-dsh-normalize-file: overpass: swept K file(s), normalized M char(s)"
	];
	const Config = [
		{
			Field: "log",
			Type: "boolean",
			Default: "true",
			Volatile: "yes",
			Meaning: "write the durable ledger file"
		},
		{
			Field: "logFile",
			Type: "string",
			Default: "~/.dsh/hook-dsh-normalize-file.log",
			Volatile: "yes",
			Meaning: "the normalize-file ledger (separate from the family's logs)"
		},
		{
			Field: "replacement",
			Type: "string",
			Default: "-",
			Volatile: "yes",
			Meaning: "the dash step's replacement (the transform's only knob)"
		}
	];
	const BeforeAfter = [
		"before (what is on disk):",
		"",
		"  Nova — “launch” ... Q3 — done",
		"",
		"after (what the tool writes back):",
		"",
		"  Nova - \"launch\" ... Q3 - done"
	];
	const LedgerStrings = ["hook-dsh-normalize-file: activated (replacement=-, logFile=~/.dsh/hook-dsh-normalize-file.log)", "hook-dsh-normalize-file: normalized 5 char(s) in <project>/notes/report.md"];
	const Usage = [
		"normalize-file { file_path: \"notes/report.md\" }",
		"→ result { path, count, changed, before, after }   (the diff card shows",
		"                                                     the before/after in",
		"                                                     the same turn)"
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "hook-dsh-normalize-file - DSH Family @ PlayForm",
		"Description": `${Families.File} - the file-content normalizer: the normalize-family tool for files already on disk - read, count, write through ALL six transforms, writing ONLY when something changed.`
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
PLUGIN DETAIL
` })} <span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": "FILE" })} </span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`LISTENER-LESS TOOL` })} </div> <section class="page-hero"> <h1 class="page-hero__title"> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-file/Source"), "href")}>hook-dsh-normalize-file</a> </h1> <p class="page-hero__sub"> ${Families.File} • ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} <em>The DeepSeek Harness Plugin Family
				for PlayForm.</em> The <strong>file-content normalizer</strong> - a DeepSeek Harness
				plugin that registers the normalize family's <code>normalize-file</code> TOOL: the
				read ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} count${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} write pipeline over files ALREADY on
				disk, beyond the tool layer.</p> <p class="page-hero__sub">One agent-chosen file per call: the target's content is
				read, the family's SIX transforms are applied with a per-character count, and ONLY
				when N &gt; 0 is the rewritten content written back through the factory's ONE shared
				write executor.</p> <p class="page-hero__sub">N = 0 writes NOTHING - the no-op no-write rule.</p> <p class="page-hero__sub">The family's first
				LISTENER-LESS flavor: no
<a${addAttribute(Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts"), "href")}><code>llm/stream</code></a>
, no${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/observed</code></a>${" "}
- nothing runs without an explicit agent action.</p> <p class="page-hero__sub">This bundle's own tool calls are
				name-exempt in the stream gate beside <code>edit</code> and <code>raw-write</code> -
				its arguments carry a FILE PATH, and a normalized dash inside a filename would
				corrupt the target.
</p> </section> <section class="section"> <div class="snippet-list"> ${renderComponent($$result, "Terminal", $$Terminal, { "Pkg": "hook-dsh-normalize-file" })} </div> <div class="inspect-card"> <span class="inspect-card__meta"> <span class="live-dot"></span>INSPECTED
</span> <div class="workbench-controls__group"> <span class="workbench-controls__label">Namespace:</span> <span class="hook-tally">@playform/hook-dsh-normalize-file</span> <span class="workbench-controls__label">Release:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`v${Versions.Release}` })} </div> <div class="workbench-controls__group"> <span class="workbench-controls__label">Archetype:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`Tool` })} <span class="workbench-controls__label">Listeners:</span> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`NONE` })} <span class="workbench-controls__label">Injects:</span> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`pluginFactory, fs, tools` })} </div> </div> </section> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The profile wiring for this plugin - the bundles list, the patch entry and the restart -
			is on the <a href="/setup/">setup page</a>.
</p> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Where It Fits",
		"Meta": `FAMILY POSITION: ${Ordinal(Counts.Normalizers)} SIBLING - FILES ON DISK`
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-family-position",
		"Title": "The family position",
		"Diagram": `${Families.File} as a tool-child of the plugin-dsh-factory service and the hook-dsh-core machinery - the seventh sibling, the one flavor that works on files already on disk instead of model output.`
	}, { "default": ($$result) => renderTemplate` <p>
A tool-child of the${" "} <strong> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source"), "href")}>plugin-dsh-factory</a> </strong>${" "}
service (${Families.File}) and the <strong>hook-dsh-core</strong> machinery;
						the seventh sibling - the one flavor that works on files already on disk
						instead of model output.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Flavor</th> <th>Layer</th> <th>Mechanism</th> </tr> </thead> <tbody> ${Siblings.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Flavor}</strong> </td> <td>${Row.Layer}</td> <td> ${Row.Mechanism.split("→").map((Part, Index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${Index > 0 && renderTemplate`${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})}`}${Part.trim() && renderTemplate`<span>${unescapeHTML(Mention(Part.trim()))}</span>`}` })}`)} </td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-gap",
		"Title": "The gap in between",
		"Diagram": "The six stream flavors covering only what the model is emitting right now, the raw-write tool's normalize: true covering only content being written - and this flavor covering the gap in between: pre-existing files, git-cloned material, script-created files - anything already on disk that the agent did not just write."
	}, { "default": ($$result) => renderTemplate` <p>
The six stream flavors cover ONLY what the model is emitting right now; the
						raw-write tool's <code>normalize: true</code> covers ONLY content being
						written.
</p> <p>
This flavor covers the gap in between: pre-existing files, git-cloned
						material, script-created files - anything already on disk that the agent did
						not just write.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-precedent",
		"Title": "The file-hook precedent is direct",
		"Diagram": "The normalize-dashes-for-execute-code.sh hook sweeping script-created files after the fact - DSH making the same rewrite an explicit, visible, opt-in TOOL call instead of a background hook, with normalize-tabs.sh (the repair hook for a repair hook) as the cautionary tale that keeps it that way."
	}, { "default": ($$result) => renderTemplate` <p>
The${" "} <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-shell",
		"Size": "0.9em"
	})}<code>normalize-dashes-for-execute-code.sh</code></span> hook swept script-created
						files after the fact; DSH makes the same rewrite an explicit, visible,
						opt-in TOOL call instead of a background hook.
</p> <p> <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-shell",
		"Size": "0.9em"
	})}<code>normalize-tabs.sh</code></span> - the repair hook for a repair hook - is the
						cautionary tale that keeps it that way.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-non-manifest",
		"Title": "A non-manifest factory consumer - the only one that writes",
		"Diagram": "The tool's factory surface: injecting [\"pluginFactory\", \"fs\", \"tools\"], using State, Append (the ledger), Journal (the P5 storage record) and - uniquely in the family - Write, the ONE shared write executor - with the tool's writes carrying the call's exec as the actor, so the governance trio's Gate (which pins mutationTools to write/edit/str_replace_editor) never treats them as a trigger."
	}, { "default": ($$result) => renderTemplate` <p>
It injects${" "} <code>["pluginFactory", "fs", "tools"]</code> and uses <code>State</code>${" "}
(cell unwrap + shared Ledger/Enabled mappings + its own field),${" "} <code>Append</code> (the ledger), <code>Journal</code> (the P5 storage
						record) and - uniquely in the family - <code>Write</code>, the ONE shared
						write executor.
</p> <p>
The tool's writes carry the call's exec as the actor, so the governance
						trio's Gate (which pins mutationTools to write/edit/str_replace_editor)
						NEVER treats them as a trigger - the same protection raw-write already has.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In the DeepSeek Harness",
		"Meta": "A TOOL IN THE AGENT'S TOOLSET"
	})} ${renderComponent($$result, "Seams", $$Seams, { "Seams": [
		{
			Seam: "The tool layer - the agent's toolset",
			What: "The plugin registers the normalize-file tool into the agent's toolset: the agent calls it like any built-in tool, one agent-chosen file per call. Nothing runs WITHOUT that explicit action - no [llm/stream](Harness:packages/llm/llm/src/index.ts), no [fs/observed](Harness:packages/fs/fs/src/index.ts) listener of any kind.",
			Outcome: "Zero background activity: discoverable, visible, opt-in."
		},
		{
			Seam: "ctx.fs - the write executor behind the tools (dsh-fs)",
			What: "EVERY N > 0 write goes through [the factory's ONE shared write executor](Ours:Classic/packages/plugin-dsh-factory/Source/Function/Write.ts) - [the fs/write-intent waterfall](Harness:packages/fs/fs/src/index.ts), the standing sandbox policy, writeText end to end, and the [fs/observed](Harness:packages/fs/fs/src/index.ts) {kind: present, version} emit on the root context with the call's exec as the actor.",
			Outcome: "Byte-identical with the raw-write path; the observation policy sees it like any tool write."
		},
		{
			Seam: "The governance interlock",
			What: "The write's actor is the call's exec, and normalize-file is NEVER added to any governor's mutationTools pin - so these writes NEVER trigger a chain pass; the tool calls are also name-exempt in the stream gate beside edit and raw-write.",
			Outcome: "Normalization without re-processing loops, and edit targets that never corrupt."
		},
		{
			Seam: "The storage domain",
			What: "EACH N > 0 write journals one normalized record into the shared package_governance v2 domain (path = the target's display path, detail byte-identical to the count line) - best-effort: with no [storage facility](Harness:packages/storage/storage-domain) the record buffers or drops.",
			Outcome: "A machine-readable history beside the human ledger."
		},
		{
			Seam: "The ledger / session",
			What: "Two lines through [the factory's Append](Ours:Classic/packages/plugin-dsh-factory/Source): the activation proof from apply() and the count line that follows ONLY a successful N > 0 write.",
			Outcome: "A no-op writes no line; a failed read or aborted call writes none either."
		}
	] })} </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Problem",
		"Meta": "WHY THE FILE TOOL EXISTS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-problem-invisible",
		"Title": "Files that never passed through a write tool are invisible",
		"Diagram": "Files that never passed through a write tool being invisible to every normalization layer DSH has - raw-write's normalize: true an explicit per-call opt-in for NEW writes, the six stream flavors only rewriting model output, never touching disk - a pre-existing file keeping every typographic character it was born with, exactly the characters that break parsers, shells, diffs and byte-exact edit matches downstream."
	}, { "default": ($$result) => renderTemplate` <p>
They are invisible to EVERY
						normalization layer DSH has: <code>raw-write</code>'s${" "} <code>normalize: true</code> is an explicit per-call opt-in for NEW writes,
						and the six stream flavors ONLY rewrite model output - they NEVER touch
						disk.
</p> <p>
Left unnormalized, a pre-existing file keeps EVERY typographic dash, curly
						quote, ellipsis, unicode space, zero-width character and full-width
						character it was born with - exactly the characters that break parsers,
						shells, diffs and byte-exact edit matches downstream.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-problem-rewriter",
		"Title": "The fix cannot be another silent rewriter",
		"Diagram": "Files rewritten behind the agent only at the price of the edit tool's old_string contract - the agent reading bytes X, a background rewriter silently changing them to X', the next edit failing or half-matching - the cautionary precedent of normalize-tabs.sh, a repair hook for a repair hook, existing to repair the damage after-the-fact rewriting caused."
	}, { "default": ($$result) => renderTemplate` <p>
But the fix cannot be another silent rewriter.</p> <p>Files are rewritten behind
						the agent ONLY at the price of the edit tool's <code>old_string</code>${" "}
contract: the agent read bytes X, a background rewriter silently changed
						them to X', and the next edit fails or half-matches.
</p> <p>
The lesson is real: <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-shell",
		"Size": "0.9em"
	})}<code>normalize-tabs.sh</code></span>, a
						repair hook for a repair hook, exists to repair the damage after-the-fact
						rewriting caused.</p> <p>The tool is
						the answer: explicit, visible, discoverable, zero background activity.
</p> ` })} </div> </section> <section class="section"> <div class="section-header"> <div class="section-header__left"> <span class="section-header__marker"></span> <h2 class="section-header__title">How It Works</h2> </div> <span class="section-header__meta">
READ ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} COUNT${" "} ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, {
		"Direction": "right",
		"Tone": "accent"
	})} WRITE
</span> </div> <div class="code-block">${Pipeline.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-whole-chain",
		"Title": "The whole-chain transform, applied at write time",
		"Diagram": "The transformation being exactly the raw-write normalize: true chain - the core's tables and replacers, applied whole at write time - no stream dispatch to gate: the tool registering NO event listener, the six transforms applied to the entire file content in one pass, the count being the ledger's N and the no-op condition in one."
	}, { "default": ($$result) => renderTemplate` <p>
The transformation is exactly the raw-write <code>normalize: true</code>${" "}
chain - the core's tables and replacers, applied whole at write time.
</p> <p>
There is no stream dispatch to gate: the tool registers NO event listener,
						so the six transforms are applied to the entire file content in one pass,
						and the count is the ledger's N and the no-op condition in one.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-governance-bound",
		"Title": "Governance bounded passes",
		"Diagram": "The write going through Factory.Write and emitting fs/observed - but the governors' Gate requiring the actor tool name in their mutationTools pin, normalize-file never added to any such list, so these writes never trigger a chain pass."
	}, { "default": ($$result) => renderTemplate` <p>
The write goes through${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Write.ts"), "href")}><code>Factory.Write</code></a>${" "}
and emits${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}><code>fs/observed</code></a>
, but the governors' Gate requires the actor tool name in their
						mutationTools pin - <code>normalize-file</code> is never added to any such
						list, so these writes never trigger a chain pass.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-edit-contract",
		"Title": "The edit old_string contract, kept safe because visible",
		"Diagram": "The edit old_string contract safe because visible - the diff card showing the before/after in the same turn, and the tool description saying to re-read before editing."
	}, { "default": ($$result) => renderTemplate` <p>
Edit <code>old_string</code> contract: safe because visible - the diff card
						shows the before/after in the same turn, and the tool description says to
						re-read before editing.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-race",
		"Title": "The raw-write read-before-write race, closed",
		"Diagram": "Tool calls serialized and Factory.Write's before read at write time - a prior normalize-file in the same turn already reflected. No race."
	}, { "default": ($$result) => renderTemplate` <p>
Raw-write read-before-write: tool calls are serialized and${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Write.ts"), "href")}><code>Factory.Write</code></a>
's before is read at write time, so a prior normalize-file in the same turn
						is already reflected.</p> <p>No race.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Config",
		"Meta": "MINIMAL BLOCK + TWO KNOBS"
	})} <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Field</th> <th>Type</th> <th>Default</th> <th>Volatile</th> <th>Meaning</th> </tr> </thead> <tbody> ${Config.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Field}</strong> </td> <td>${Row.Type}</td> <td>${unescapeHTML(Mention(Row.Default))}</td> <td>${Row.Volatile}</td> <td>${unescapeHTML(Mention(Row.Meaning))}</td> </tr>`)} </tbody> </table> </div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-minimal-config",
		"Title": "The minimal config surface",
		"Diagram": "No stream flags (normalizeReasoning, normalizeToolArguments) and no fs/observed fields (updateCooldownMs, mutationTools, policyFile, exclude) - the minimal shared: false block plus the two knobs being the whole config surface, because the tool registers no listener of any kind; volatile cells committing without remounting the plugin."
	}, { "default": ($$result) => renderTemplate` <p>
There are no stream flags (<code>normalizeReasoning</code>,${" "} <code>normalizeToolArguments</code>) and no${" "} <a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}>fs/observed</a>${" "}
fields (<code>updateCooldownMs</code>, <code>mutationTools</code>,${" "} <code>policyFile</code>, <code>exclude</code>): the minimal${" "} <code>shared: false</code> block plus the two knobs is the whole config
						surface, because the tool registers no listener of any kind.
</p> <p>
Volatile cells commit without remounting the plugin. The tool is called by
						the agent like any built-in tool:
</p> ` })} </div> <div class="code-block"> ${Usage.join("\n")} </div> </section> <!-- The granular scopes + the overpass arms: the volatility widening.
		     Every place the scopes/tool-argument control is described carries
		     the four binding facts: the per-call raw marker, the effective-gate
		     formula, the three structural exemptions, and the overpass
		     invisibility contract. The file hook owns the sweep. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The scopes surface & the overpass arms",
		"Meta": "GRANULAR CONTROL · ALL VOLATILE · THE FILE HOOK OWNS THE SWEEP"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-scopes",
		"Title": "Every arm gated independently - and all volatile",
		"Diagram": "The scopes object gating every arm of the hook-dsh-normalize-file hook independently - the defaults exactly the pre-scopes behavior - with the whole object volatile: one leaf change commits one loader/volatile-update dispatch whose whole object the State's refresh listener re-reads - live, silent, no remount, no new activation line."
	}, { "default": ($$result) => renderTemplate` <p>
The <code>scopes</code> object gates every arm of the${" "} <code>hook-dsh-normalize-file</code> hook independently - conversation,
						reasoning, toolInput, toolResults, files, batch - with the defaults exactly
						the pre-scopes behavior.
</p> <p>
The whole object is <strong>volatile</strong>: one leaf change commits one${" "} <code>loader/volatile-update</code> dispatch whose whole object the State's
						refresh listener re-reads - live, silent, no remount, no new activation
						line (a flip lands without remounting).
</p> <p>
The tool-input arm: effective tool-input normalization is${" "} <code>normalizeToolArguments || scopes.toolInput</code> - the field is kept
						and OR-ed in, so every existing profile keeps working.
</p> <p>
It is the only execution-critical arm, and it carries the per-call escape
						hatch: a call whose arguments open with the${" "} <code>&#123;"__normalize":false&#125;</code> FIRST-key marker passes
						through unnormalized, the marker entry stripped (the executed call carries
						no unknown key) - the "leave that search alone" control for a deliberate
						search for an irregular character.
</p> <p>
The marker must be the first key: a first delta shorter than the marker is
						invisible to the probe and the call normalizes normally.
</p> <p>
The <code>normalize-file</code> call itself is a structural exemption: its
						arguments carry a file path - a normalized dash inside a filename would
						corrupt the target.
</p> <p>
Two more structural exemptions are never rewritten: the <code>edit</code>${" "}
call (its <code>old_string</code> must match the real file bytes) and the${" "} <code>raw-write</code> call (it owns its content normalization through its
						explicit <code>normalize</code> parameter).
</p> <p>
And the overpass invisibility contract: the tool-results arm replaces the
						bytes PRE-COMMIT - the waterfall settles before the result is appended to
						the durable log - so the model ONLY ever sees the normalized output and
						NEVER notices the replacement; the exemption list plus the${" "} <code>&lt;&lt;&lt;CCR:</code> marker guard define what passes untouched.
</p> <p>
That is the write-path counterpart of the governance trio's never-notify
						precedent: the result is built from the author's own content, and the
						observation-policy's version record is refreshed by the re-emitted
						fs/observed.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Scope</th> <th>Default</th> <th>Gates</th> </tr> </thead> <tbody> ${Scopes.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Scope}</strong> </td> <td>${Row.Default}</td> <td>${Row.Gates}</td> </tr>`)} </tbody> </table> </div> <p class="page-hero__sub" style="margin-top: var(--space-md)"> <code>toolResultsExempt</code> (volatile): a tool result whose exec name is
				listed passes the tool-results arm by identity - <code>read</code>,${" "} <code>edit</code>, <code>raw-write</code>, <code>normalize-file</code>,${" "} <code>ccr_retrieve</code>, <code>subagent</code>,${" "} <code>ask_user_question</code> by default.
</p> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-overpass",
		"Title": "The overpass arms: opt-in listeners on two more seams",
		"Diagram": "Two additional listeners, both registered at apply and both opt-in (gated at RUNTIME on the scope cells, so flipping a scope lands through the P10 volatile-refresh without any re-registration): the tool-results arm on tools/post-execute with { prepend: true }, and the step-batch arm on agent/pre-step in default order. The file hook owns the sweep."
	}, { "default": ($$result) => renderTemplate` <p> <strong>Tool results</strong> - <code>tools/post-execute</code>,${" "} <code>&#123; prepend: true &#125;</code> (OUTERMOST vs the${" "} <a href="/plugins/hook-dsh-ccr/">ccr hook's</a> own prepended gate: the ccr
						compression sees the NORMALIZED bytes; the <code>&lt;&lt;&lt;CCR:</code>${" "}
marker guard makes any load order safe).
</p> <p>
Accepted, non-value-carrying decisions only; TEXT blocks only; N = 0 is a
						true no-op - no ledger line; fail-open.
</p> <p> <strong>Step batch</strong> - <code>agent/pre-step</code>, default order.
</p> <p>
While <code>scopes.batch</code> is on, EVERY incoming batch is normalized;
						the command's one-shot arm fires ONCE regardless of the scope value and is
						cleared after one use.
</p> <p>Text blocks only; never the assistant/tool history.</p> <p>The overpass lines (N &gt; 0 only):</p> ` })} </div> <div class="code-block">${LedgerLines.join("\n")}</div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The <code>normalize-overpass</code> command (registered through the${" "} <code>commands</code> service when it is present - probe-once, a missing service
				simply skips the registration). The <code>files</code> sweep is THIS hook's row -
				the six stream flavors decline it:
</p> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Input</th> <th>Effect</th> </tr> </thead> <tbody> ${CommandRows.map((Row) => renderTemplate`<tr> <td> <strong>${Row.Input}</strong> </td> <td>${Row.Effect}</td> </tr>`)} </tbody> </table> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "In Action",
		"Meta": "ONE CALL, ONE FILE, ONE COUNT"
	})} <p class="section-kicker"> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "swap" })}Before - the file as it sits on disk
</p> ${renderComponent($$result, "Compare", $$Compare, {
		"ID": "file-before-after",
		"Flavor": "file",
		"Raw": BeforeAfter.slice(0, 4),
		"Clean": BeforeAfter.slice(4),
		"RawLabel": "Before - what is on disk",
		"CleanLabel": "After - what the tool writes back"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-in-action-count",
		"Title": "The counted write",
		"Diagram": "Every em dash (U+2014) becoming the ASCII hyphen-minus, the curly quotes straight ones, the ellipsis three periods - five characters replaced, so N = 5 and the write happens; the result carrying the outcome, the diff card showing the before/after in the same turn, the ledger getting the count line."
	}, { "default": ($$result) => renderTemplate` <p>
EVERY em dash (<code class="code-token">U+2014</code>) becomes the ASCII
						hyphen-minus, the curly quotes
						become straight ones, the ellipsis becomes three periods; five characters
						replaced, so N = 5 and the write happens.
</p> <p>
The result carries the outcome and the diff card shows the before/after in
						the same turn; the ledger gets the count line shown below.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-in-action-noop",
		"Title": "The no-op and the error cases",
		"Diagram": "A file with nothing to replace being a no-op: changed: false, the file staying byte-identical, no write, no count line, no journal record - a missing, binary or undecodable target being an error result with no write - and re-reading before editing, because the file's bytes change under you."
	}, { "default": ($$result) => renderTemplate` <p>
A file with nothing to replace is a no-op: <code>changed: false</code>, the
						file stays byte-identical, no write, no count line, no journal record.</p> <p>A
						missing, binary or undecodable target is an error result with no write.
</p> <p>
Because the file's bytes change under you, re-read before editing - the edit
						tool's <code>old_string</code> must match the new content.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The Ledger",
		"Meta": "TWO LINES VIA FACTORY APPEND"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
Two lines, both written through the factory's <code>Append</code> (the
				hook-dsh-normalize-file: prefix is the logger's
<code>&lt;State.Module&gt;:</code>; the durable file line is
<code>[&lt;ISO&gt;] &lt;message&gt;</code>):
</p> <div class="code-block">${LedgerStrings.join("\n")}</div> <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-ledger-lines",
		"Title": "Two lines, and the lines that never get written",
		"Diagram": "The activation line written by apply() - the count line following only a successful N > 0 write, a no-op writing no line, a failed read or an aborted call writing none either."
	}, { "default": ($$result) => renderTemplate` <p>
The activation line is written by <code>apply()</code>; the count line
						follows ONLY a successful N &gt; 0 write - a no-op writes no line, and a
						failed read or an aborted call writes none either.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "file-journal-record",
		"Title": "The journaled record",
		"Diagram": "Each N > 0 write also journaling one normalized record into the shared package_governance v2 domain (event normalized, path = the target's display path, detail byte-identical to the count line) - best-effort: with no storage facility the record buffers or drops and the human ledger stays the complete record."
	}, { "default": ($$result) => renderTemplate` <p>
EACH N &gt; 0 write also journals one <code>normalized</code> record into
						the shared <code>package_governance</code>${" "} <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Journal.ts"), "href")}>v2 domain</a>${" "}
(event <code>normalized</code>, path = the target's display path, detail
						byte-identical to the count line).
</p> <p>
Best-effort: with no storage facility the record buffers or drops and the
						human ledger stays the complete record.
</p> ` })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Related plugins",
		"Meta": `${Counts.Packages} TOTAL`
	})} <div class="grid grid--3"> ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "plugin-dsh-factory",
		"Href": "/plugins/plugin-dsh-factory/",
		"Desc": "State, Append, Journal and - uniquely here - Write, the ONE shared write executor EVERY N > 0 write goes through.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`PARENT SERVICE` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-normalize-dash",
		"Href": "/plugins/hook-dsh-normalize-dash/",
		"Desc": "The stream sibling and the registrar of the raw-write tool - whose normalize:true chain this tool applies whole.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`SIBLING FLAVOR` })}` })} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"Name": "hook-dsh-core",
		"Href": "/plugins/hook-dsh-core/",
		"Desc": "The six transform tables and the generic Replace/ReplaceMap replacers this tool chains.",
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`DSH FAMILY` })}` })} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
License: CC0-1.0.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-file.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/plugins/hook-dsh-normalize-file.astro";
var $$url = "/plugins/hook-dsh-normalize-file";
//#endregion
//#region \0virtual:astro:page:Source/pages/plugins/hook-dsh-normalize-file@_@astro
var page = () => hook_dsh_normalize_file_exports;
//#endregion
export { page };
