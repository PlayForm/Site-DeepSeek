import { _ as createComponent, d as SeamHref, h as $$PageHero, t as $$Base, u as Route, v as __exportAll } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
import { t as $$SectionHeader } from "./SectionHeader_evFx2eBS.mjs";
import { t as $$Table } from "./Table_Bp8g1OQS.mjs";
import { t as Seam } from "./Harness_Dw5IkvLG.mjs";
import { t as $$CodeBlock } from "./CodeBlock_C-lnWEGy.mjs";
import { t as $$RoleList } from "./RoleList_CNLMVAJF.mjs";
import { t as Role } from "./Message_BOm4sbiG.mjs";
// Source/pages/message.astro
var message_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Message,
	file: () => $$file,
	url: () => $$url
});
var $$Message = createComponent(($$result, $$props, $$slots) => {
	const Seam$1 = [...new Set(Role.flatMap((Item) => Item.Seam))];
	const Page = new Set(Seam.map((Item) => Item.Name));
	const Row = Role.flatMap((Item) => Item.Seam.map((Name) => [
		Page.has(Name) ? {
			Text: Name,
			Href: SeamHref(Name)
		} : Name,
		Item.What,
		Item.Plugin.length > 0 ? Item.Plugin.join(", ") : "none"
	]));
	const Before = [
		"system: You are a coding agent.",
		"        Tools: read, write, bash.",
		"",
		"user: Read build.log and tell me what failed.",
		"",
		"assistant: [call] read {\"path\": \"build.log\"}",
		"",
		"tool: 1  Linking CXX executable app",
		"      2  FAILED: app",
		"      3  ld: library not found for -lfoo",
		"      ... 38 lines ...",
		"",
		"assistant: The build failed at step 3 — the linker cannot find libfoo."
	].join("\n");
	const After = [
		"system: You are a coding agent.",
		"        Tools: read, write, bash.",
		"",
		"        --- LIVE CONTAINER clock (recomputed each request; not harness state) ---",
		"        time: 17:15:18 UTC",
		"        --- END LIVE CONTAINER clock ---",
		"",
		"user: Read build.log and tell me what failed.",
		"",
		"assistant: [call] read {\"path\": \"build.log\"}",
		"",
		"tool: [file:38 lines | 1  Linking CXX executable app]",
		"      <<<CCR:9f2c1a7b3d4e5f60718293a4|file|2412>>>",
		"",
		"assistant: The build failed at step 3 - the linker cannot find libfoo."
	].join("\n");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "Conversation",
		"Description": `The conversation the model reads, role by role, and the ${Seam$1.length} seams that can change it.`
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "PageHero", $$PageHero, {
		"Eyebrow": "Conversation",
		"Title": "What the model reads"
	}, { "Lede": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "Lede" }, { "default": ($$result) => renderTemplate`
The model never sees the harness, only the messages the log projects, and
${Seam$1.length}&nbsp;seam can change them.
` })}` })} ${maybeRenderHead($$result)}<section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Role",
		"Lede": "One entry per part of the message the model reads, in the order it reads them. Each names the seam that can change it, the package that stands there, and what that package does."
	})} <div class="section__body"> ${renderComponent($$result, "RoleList", $$RoleList, { "Entry": Role })} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Change",
		"Lede": "One conversation, before and after the family's seams. The same messages, in the order the request carries them."
	})} <div class="section__body stack"> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "Before - the harness default",
		"Language": "text",
		"Code": Before
	})} ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Label": "After - the family's seams",
		"Language": "text",
		"Code": After
	})} <p class="muted">
CCR replaces the oversized read with a preview and a marker, live-containers adds a
				section to the system prompt, and normalize-dash rewrites the dash the model wrote.
</p> </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Seam",
		"Lede": "One row per seam in the role list, with the part of the conversation it changes and the package that stands there."
	})} <div class="section__body"> ${renderComponent($$result, "Table", $$Table, {
		"Caption": `The ${Seam$1.length} seams that can change the conversation, with the part each changes and the plugin at it`,
		"Head": [
			"Seam",
			"Which part of the conversation it changes",
			"Which plugin stands there"
		],
		"Row": Row
	})} </div> </section> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "Title": "Read" })} <div class="section__body stack"> <p class="lede">
Every message above is a projection of the log, so the seam that changes it changes
				what the next request carries. The turn shows where the seams sit, and the tool
				pipeline shows how a result becomes model content.
</p> <div class="cluster"> <a class="button"${addAttribute(Route.Turn, "href")}>
The stages
</a> <a class="button button--quiet"${addAttribute(Route.Tool, "href")}>
The tool pipeline
</a> </div> </div> </section> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/message.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/message.astro";
var $$url = "/message";
// \0virtual:astro:page:Source/pages/message@_@astro
var page = () => message_exports;
export { page };
