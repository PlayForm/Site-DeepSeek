import { ConfigFor } from "./Config.server";
import { Package } from "./Package.server";

// Each plugin documents the ledger file it writes, as the default of its
// `logFile` knob. The site prints those paths so a reader knows where to look
// after a run; it never reads a ledger.

export interface Ledger {
	Slug: string;
	Href: string;
	Path: string;
}

function Load(): Ledger[] {
	const Roster: Ledger[] = [];

	for (const Entry of Package) {
		const Knob = ConfigFor(Entry.Slug).find((Item) => Item.Field === "logFile");

		if (Knob && Knob.Default.startsWith("~")) {
			Roster.push({ Slug: Entry.Slug, Href: Entry.Href, Path: Knob.Default });
		}
	}

	return Roster;
}

export const Ledger = Load();

export default Ledger;
