import { _ as createComponent, d as SeamHref, g as createAstro, l as PackageHref } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
// Source/Content/Intervention.ts
/** The columns the matrix draws, in the order the turn reaches them. */
var Column = [
	"system-prompt/assemble",
	"llm/stream",
	"tools/pre-execute",
	"tools/post-execute",
	"fs/observed",
	"session/event",
	"agent/status"
];
var Intervention = [
	{
		Slug: "hook-dsh-normalize-dash",
		Seam: {
			"llm/stream": "rewrite",
			"tools/post-execute": "rewrite"
		},
		Property: "Deterministic output",
		Disk: "one ledger line per activation"
	},
	{
		Slug: "hook-dsh-ccr",
		Seam: { "tools/post-execute": "rewrite" },
		Property: "Bounded context",
		Disk: "the store journal and its ledger"
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Seam: {
			"tools/pre-execute": "rewrite",
			"tools/post-execute": "record"
		},
		Property: "A write guard",
		Disk: "its ledger"
	},
	{
		Slug: "hook-dsh-workspace-operate",
		Seam: { "fs/observed": "record" },
		Property: "A proposal surface",
		Disk: "the storage domain and its ledger",
		Note: "Its source registers no event listener. The two tools and the fence tracker are the mechanism, so the tool-call advice this family advertises does not come from this package."
	},
	{
		Slug: "plugin-dsh-batch-edit",
		Seam: {
			"tools/pre-execute": "rewrite",
			"fs/observed": "record"
		},
		Property: "A batched atomic edit",
		Disk: "the edited files and its ledger"
	},
	{
		Slug: "hook-dsh-comment-filter",
		Seam: { "tools/post-execute": "rewrite" },
		Property: "Comment-free results",
		Disk: "its ledger"
	},
	{
		Slug: "plugin-dsh-cost",
		Seam: { "session/event": "record" },
		Property: "Cost visibility",
		Disk: "a SQLite ledger"
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Seam: { "fs/observed": "record" },
		Property: "A write journal",
		Disk: "the batch records and the reverted files"
	},
	{
		Slug: "hook-dsh-tool-coach",
		Seam: {
			"system-prompt/assemble": "rewrite",
			"tools/pre-execute": "rewrite",
			"tools/post-execute": "rewrite"
		},
		Property: "Tool-use coaching",
		Disk: "its ledger"
	},
	{
		Slug: "hook-dsh-live-containers",
		Seam: {
			"system-prompt/assemble": "rewrite",
			"agent/status": "record"
		},
		Property: "Live state in the prompt",
		Disk: "the monitor records and its ledger"
	}
];
// Source/Component/Matrix.astro
createAstro("https://deepseek.playform.cloud");
var $$Matrix = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Matrix;
	const { Row } = Astro.props;
	const Page = new Set(Seam.map((Entry) => Entry.Name));
	const Tone = {
		rewrite: "matrix__mark--rewrite",
		record: "matrix__mark--record"
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="matrix"> <table> <caption class="visually-hidden">
The seams each plugin acts at, and whether it rewrites what the model reads or only
			records
</caption> <thead> <tr> <th scope="col" class="matrix__lead">
Plugin
</th> ${Column.map((Name) => renderTemplate`<th scope="col"> ${Page.has(Name) ? renderTemplate`<a class="matrix__column"${addAttribute(SeamHref(Name), "href")}> ${Name} </a>` : renderTemplate`<span class="matrix__column">${Name}</span>`} </th>`)} </tr> </thead> <tbody> ${Row.map((Entry) => renderTemplate`<tr> <th scope="row" class="matrix__lead"> <a class="matrix__slug"${addAttribute(PackageHref(Entry.Slug), "href")}> ${Entry.Slug} </a> <span class="matrix__property">${Entry.Property}</span> </th> ${Column.map((Name) => {
		const Mark = Entry.Seam[Name];
		return renderTemplate`<td> ${Mark === void 0 ? renderTemplate`<span class="matrix__none" aria-hidden="true"></span>` : renderTemplate`<span${addAttribute(["matrix__mark", Tone[Mark]], "class:list")}${addAttribute(`${Mark} at ${Name}`, "title")}> <span class="visually-hidden"> ${Mark} at ${Name} </span> </span>`} </td>`;
	})} </tr>`)} </tbody> </table> <ul class="matrix__legend"> <li class="matrix__legend-item"> <span${addAttribute(["matrix__mark", "matrix__mark--rewrite"], "class:list")} aria-hidden="true"></span>
rewrites what the model reads next
</li> <li class="matrix__legend-item"> <span${addAttribute(["matrix__mark", "matrix__mark--record"], "class:list")} aria-hidden="true"></span>
records what happened
</li> </ul> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Matrix.astro", void 0);
export { Intervention as n, $$Matrix as t };
