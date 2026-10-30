import { t as Plugin } from "./Plugin_W_iBMq8G.mjs";
// Source/Content/Hook.ts
var Hook = {};
for (const Entry of Plugin) for (const Name of Entry.Seam) Hook[Name] = [...Hook[Name] ?? [], Entry];
/** The harness plugins that answer at a seam, in the order the records list them. */
function HookFor(Seam) {
	return Hook[Seam] ?? [];
}
export { HookFor as t };
