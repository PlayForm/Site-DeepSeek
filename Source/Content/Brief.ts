// The per-plugin brief: the one sentence, the kind of thing the plugin is, the
// question its page answers, the facts the page must state, and the sections
// that page carries.
//
// The plugin record in `Plugin.ts` says what changes; this record says how the
// page argues it. Two plugins of different kinds get different sections, so a
// reader who opens the gate and then the clock learns something from the
// second page rather than recognizing the first one's template.
//
// The section names are component names, in the order the page renders them.
export interface Brief {
	/** The plugin record the brief extends. */
	Slug: string;
	/** The one sentence a reader should leave with. */
	Claim: string;
	/** What the plugin is, as a kind of thing: a gate, a wait, a meter, a
	 *  threshold, a clock, a lineage, a swap, a reminder. */
	Kind: string;
	/** The question this plugin's page answers, in the reader's words. */
	Question: string;
	/** The three or four facts the page must state, each a phrase. */
	Fact: string[];
	/** The sections this page has, in order, as component names. */
	Section: string[];
}

export const Brief: Brief[] = [
	{
		Slug: "fs-observation-policy",
		Claim: "A write is refused when the file it changes was never read, and the refusal is the call's result.",
		Kind: "a gate",
		Question: "Why did the write stop before it reached the disk?",
		Fact: ["the decision", "the listener that made it", "the duration"],
		Section: ["Pipeline", "Difference", "Grid", "Callout"],
	},
	{
		Slug: "user-approval",
		Claim: "The call pauses on a person, and the turn measures the pause as part of the call.",
		Kind: "a wait",
		Question: "How long did the world stop, and who restarted it?",
		Fact: ["the prompt", "the answer", "the wait"],
		Section: ["Lane", "Pending", "StatBand", "Difference"],
	},
	{
		Slug: "token-meter",
		Claim: "Every request declares its tokens, so cost is a sum over attempts rather than a single number.",
		Kind: "a meter",
		Question: "What did this turn cost, attempt by attempt?",
		Fact: ["the token counts", "the model", "the effort"],
		Section: ["StatBand", "Table", "Curve"],
	},
	{
		Slug: "spill-policy",
		Claim: "Past a size, the bytes leave the prompt and the model reads a locator instead.",
		Kind: "a threshold",
		Question: "What does the model read when the result is too large?",
		Fact: ["the size", "the locator", "the retrieval"],
		Section: ["Ladder", "Card", "CodeBlock", "Absence"],
	},
	{
		Slug: "timeout-policy",
		Claim: "A call that outlives its window becomes a job, and the turn goes on without it.",
		Kind: "a clock",
		Question: "What happens to a call that runs past its window?",
		Fact: ["the window", "the job id", "the outcome"],
		Section: ["Fork", "Lane", "Pending", "Difference"],
	},
	{
		Slug: "session-checkpoint-policy",
		Claim: "A turn closes by writing a checkpoint, and a later run resumes from the newest one.",
		Kind: "a lineage",
		Question: "Which file does the next run read?",
		Fact: ["the checkpoint", "the turn it covers", "the file a resume reads"],
		Section: ["Chain", "Difference", "Callout"],
	},
	{
		Slug: "image-offload",
		Claim: "The image leaves the prompt and a reference takes its place, while the log keeps the bytes.",
		Kind: "a swap",
		Question: "What does the model see where the image was?",
		Fact: ["the reference", "the original size", "the bytes the log keeps"],
		Section: ["Difference", "Card", "Absence", "Callout"],
	},
	{
		Slug: "repeat-tool-reminder",
		Claim: "The third identical call carries a note, and the call still runs.",
		Kind: "a reminder",
		Question: "What does the harness say when a call repeats?",
		Fact: ["the repeated call", "the note", "the count that triggers it"],
		Section: ["Ladder", "Disclosure", "Callout"],
	},
];

export default Brief;
