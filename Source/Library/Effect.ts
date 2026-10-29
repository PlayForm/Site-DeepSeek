// What a listener does to the thing it sees, read from the package's own
// surface sentence. The classification is the two lenses in one word: a
// rewrite changes what the model reads, a record leaves the model unchanged
// and writes the ledger, and an advise adds context the model then reads.
export type Effect = "rewrite" | "record" | "advise" | "pass";

const Rewrite =
	/normaliz|rewrit|replac|strip|compress|pin\b|convert|clean|remov|shorten|truncat|reject|refus|gate|block|enforce/i;
const Record = /record|audit|journal|log\b|track|keep|stor|cache|ledger|checkpoint|undo|snapshot/i;
const Advise = /suggest|notice|nudge|context|teach|coach|name|widen|project|offer|hint/i;

export function EffectOf(What: string): Effect {
	switch (true) {
		case Rewrite.test(What):
			return "rewrite";
		case Record.test(What):
			return "record";
		case Advise.test(What):
			return "advise";
		default:
			return "pass";
	}
}

export default EffectOf;
