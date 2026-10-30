// The harness plugins whose interjection changes what a reader sees, read from
// the harness documentation and the Corca research
// (`Temporary/Corca/Curated/Plugins.md`, `Integration-Plan.md` section 4).
//
// These are the harness's own plugins, not this family's: the site documents
// both, because a reader has to see the default behavior before the family's
// intervention means anything. Each record names the seam, the state it unlocks,
// and the fact the log would have to carry for the page to show it.
export interface Plugin {
	/** The package name inside the harness. */
	Slug: string;
	/** What it is, in one word. */
	Role: string;
	/** The seams it answers at. */
	Seam: string[];
	/** The state a reader sees because of it. */
	State: string;
	/** One sentence: what it decides. */
	Interjection: string;
	/** The facts the log must carry for the page to show the state. */
	Data: string[];
}

export const Plugin: Plugin[] = [
	{
		Slug: "fs-observation-policy",
		Role: "gate",
		Seam: ["fs/edit-intent"],
		State: "call.denied",
		Interjection:
			"It answers before a filesystem mutation lands, and a refusal becomes the call's result.",
		Data: ["the decision", "the listener that made it", "the duration"],
	},
	{
		Slug: "user-approval",
		Role: "gate",
		Seam: ["approval/request"],
		State: "approval.requested",
		Interjection:
			"It asks the person once, and the pipeline denies the call when no answer arrives.",
		Data: ["the prompt", "the answer", "the wait"],
	},
	{
		Slug: "token-meter",
		Role: "meter",
		Seam: ["request/header"],
		State: "cost.strip",
		Interjection: "It records the tokens a request declares, so the cost strip has a source.",
		Data: ["the token counts", "the model", "the effort"],
	},
	{
		Slug: "spill-policy",
		Role: "gate",
		Seam: ["tool/result"],
		State: "result.spilled",
		Interjection:
			"It saves an oversized result and hands the model a locator instead of the bytes.",
		Data: ["the size", "the locator", "the retrieval"],
	},
	{
		Slug: "timeout-policy",
		Role: "watch",
		Seam: ["tools/execute"],
		State: "call.background",
		Interjection: "It wraps the tool body, and a call that outlives its window becomes a job.",
		Data: ["the window", "the job id", "the outcome"],
	},
	{
		Slug: "session-checkpoint-policy",
		Role: "record",
		Seam: ["turn/end"],
		State: "turn.resumed",
		Interjection: "It writes a checkpoint when a turn closes, so a later run resumes from it.",
		Data: ["the checkpoint", "the turn it covers"],
	},
	{
		Slug: "image-offload",
		Role: "gate",
		Seam: ["agent/pre-step"],
		State: "result.binary",
		Interjection:
			"It moves an image out of the prompt and leaves a reference where the bytes were.",
		Data: ["the reference", "the original size"],
	},
	{
		Slug: "repeat-tool-reminder",
		Role: "advise",
		Seam: ["agent/pre-step"],
		State: "step.note",
		Interjection: "It notices a repeated call and adds a note to the step that says so.",
		Data: ["the repeated call", "the note"],
	},
];

export function PluginFor(Slug: string): Plugin | undefined {
	return Plugin.find((Entry) => Entry.Slug === Slug);
}

export default Plugin;
