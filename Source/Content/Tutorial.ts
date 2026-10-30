// Three moments in a turn, each shown twice: what the harness does on its own,
// and what the family does there instead. Transcribed from
// `Documentation/Interpretability/Intervention.md` and from each package's own
// bundle patch, which is where the shipped defaults live. A scenario that
// claims a property also names the knob that turns it on, because two of these
// three ship disabled.
export interface Scenario {
	/** The moment, as a reader would describe it. */
	Title: string;
	/** What happens in the turn. */
	Situation: string;
	/** The harness on its own. */
	Default: string;
	/** The family at the same seam. */
	Family: string;
	/** The property the family adds, in a word. */
	Property: string;
	/** The line a reader changes, when the property is opt-in. */
	Knob: string;
	/** What that knob ships as, in the package's own words. */
	KnobNote: string;
	/** True when the family ships the property off. */
	OptIn: boolean;
}

export const Scenario: Scenario[] = [
	{
		Title: "A two-hundred-kilobyte result",
		Situation:
			"A grep over a large tree returns two hundred kilobytes of matches, and the result reaches the model as content.",
		Default:
			"The harness hands the result to the model, bounded only by its own spill policy, so the bytes the model did not ask for are still in its context.",
		Family:
			"The CCR hook replaces the result with a preview and a retrieval marker, and keeps the original behind a tool call. The model asks for the bytes only when it needs them.",
		Property: "Bounded context",
		Knob: "autoExpandLimitBytes",
		KnobNote:
			"ships at 102400 bytes: under that ceiling the model still reads the full result, so this scenario needs a result above it",
		OptIn: false,
	},
	{
		Title: "A write outside the workspace",
		Situation:
			"The model asks to write a file outside the working directory, and the call reaches the tool pipeline.",
		Default:
			"The sandbox decides. With no guard in the profile, a call the sandbox allows is a call that runs.",
		Family: "The workspace guard answers at the pre-execute seam: deny, ask, or allow, from a policy the profile names. The journal records the write so it can be reverted.",
		Property: "A write guard",
		Knob: "enabled",
		KnobNote: "ships off; set it in the profile's bundle patch",
		OptIn: true,
	},
	{
		Title: "A dash the model likes",
		Situation:
			"The model writes a typographic dash, and the token leaves the model as it was generated.",
		Default:
			"The transcript stores what the model wrote, so the same prompt can produce an em dash, an en dash, or a hyphen on different days.",
		Family: "Six normalizers rewrite the stream at the seam: dashes, quotes, ellipses, spaces, invisible marks, and fullwidth glyphs. The same prompt produces the same bytes.",
		Property: "Deterministic output",
		Knob: "replacement",
		KnobNote: "ships on; the replacement is the one the README documents",
		OptIn: false,
	},
];

export default Scenario;
