// The seam to family map, derived from the behavior records rather than written
// by hand. Every page that lists what answers at a seam reads this, so a seam
// with no package can say so in the same slot a seam with one names it.
import { Behavior, type Effect } from "./Behavior";

export interface Answer {
	/** The package directory that answers at the seam. */
	Slug: string;
	/** The seam it answers on. */
	Seam: string;
	/** The effect it has there. */
	Effect: Effect;
}

export const Hook: Record<string, Answer[]> = {};

for (const [Slug, Entry] of Object.entries(Behavior)) {
	Hook[Entry.Seam] = [
		...(Hook[Entry.Seam] ?? []),
		{ Slug, Seam: Entry.Seam, Effect: Entry.Effect },
	];
}

/** The family packages that answer at a seam, in the order the records list them. */
export function HookFor(Seam: string): Answer[] {
	return Hook[Seam] ?? [];
}

export default Hook;
