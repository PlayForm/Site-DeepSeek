import { a as Package } from "./Base_CT63gv6q.mjs";
import { t as ConfigFor } from "./Config.server_CF2kUQLq.mjs";
// Source/Library/Ledger.server.ts
function Load() {
	const Roster = [];
	for (const Entry of Package) {
		const Knob = ConfigFor(Entry.Slug).find((Item) => Item.Field === "logFile");
		if (Knob && Knob.Default.startsWith("~")) Roster.push({
			Slug: Entry.Slug,
			Href: Entry.Href,
			Path: Knob.Default
		});
	}
	return Roster;
}
var Ledger = Load();
export { Ledger as t };
