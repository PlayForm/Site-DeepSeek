// The seam to plugin map, derived from the plugin records rather than written
// by hand. Every page that lists what answers at a seam reads this, so a seam
// with no plugin can say so in the same slot a seam with one names it.
import { Plugin, type Plugin as Record } from "./Plugin";

export const Hook: Record<string, Record[]> = {};

for (const Entry of Plugin) {
	for (const Name of Entry.Seam) {
		Hook[Name] = [...(Hook[Name] ?? []), Entry];
	}
}

/** The harness plugins that answer at a seam, in the order the records list them. */
export function HookFor(Seam: string): Record[] {
	return Hook[Seam] ?? [];
}

export default Hook;
