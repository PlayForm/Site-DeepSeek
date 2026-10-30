// Source/Content/Plugin.ts
var Plugin = [
	{
		Slug: "fs-observation-policy",
		Role: "gate",
		Seam: ["fs/edit-intent"],
		State: "call.denied",
		Interjection: "It answers before a filesystem mutation lands, and a refusal becomes the call's result.",
		Data: [
			"the decision",
			"the listener that made it",
			"the duration"
		],
		Before: "write src/index.ts, ok",
		After: "write src/index.ts, denied: the file was never read",
		Seq: 21
	},
	{
		Slug: "user-approval",
		Role: "gate",
		Seam: ["approval/request"],
		State: "approval.requested",
		Interjection: "It asks the person once, and the pipeline denies the call when no answer arrives.",
		Data: [
			"the prompt",
			"the answer",
			"the wait"
		],
		Before: "write src/index.ts, ok",
		After: "write src/index.ts, asked: waiting for you",
		Seq: 21
	},
	{
		Slug: "token-meter",
		Role: "meter",
		Seam: ["request/header"],
		State: "cost.strip",
		Interjection: "It records the tokens a request declares, so the cost strip has a source.",
		Data: [
			"the token counts",
			"the model",
			"the effort"
		],
		Before: "bash ls -la, ok",
		After: "bash ls -la, ok, 812 tokens",
		Seq: 20
	},
	{
		Slug: "spill-policy",
		Role: "gate",
		Seam: ["tool/result"],
		State: "result.spilled",
		Interjection: "It saves an oversized result and hands the model a locator instead of the bytes.",
		Data: [
			"the size",
			"the locator",
			"the retrieval"
		],
		Before: "bash ls -la, ok",
		After: "bash ls -la, 48 KB spilled, locator c-7",
		Seq: 20
	},
	{
		Slug: "timeout-policy",
		Role: "watch",
		Seam: ["tools/execute"],
		State: "call.background",
		Interjection: "It wraps the tool body, and a call that outlives its window becomes a job.",
		Data: [
			"the window",
			"the job id",
			"the outcome"
		],
		Before: "bash ls -la, ok",
		After: "bash ls -la, background, job 7",
		Seq: 20
	},
	{
		Slug: "session-checkpoint-policy",
		Role: "record",
		Seam: ["turn/end"],
		State: "turn.resumed",
		Interjection: "It writes a checkpoint when a turn closes, so a later run resumes from it.",
		Data: ["the checkpoint", "the turn it covers"],
		Before: "turn/end, ok",
		After: "turn/end, checkpoint c-3 written"
	},
	{
		Slug: "image-offload",
		Role: "gate",
		Seam: ["agent/pre-step"],
		State: "result.binary",
		Interjection: "It moves an image out of the prompt and leaves a reference where the bytes were.",
		Data: ["the reference", "the original size"],
		Before: "read src/index.ts, ok",
		After: "read src/index.ts, image moved, ref img-3",
		Seq: 22
	},
	{
		Slug: "repeat-tool-reminder",
		Role: "advise",
		Seam: ["agent/pre-step"],
		State: "step.note",
		Interjection: "It notices a repeated call and adds a note to the step that says so.",
		Data: ["the repeated call", "the note"],
		Before: "bash ls -la, ok",
		After: "bash ls -la, ok, note: repeated call",
		Seq: 20
	}
];
export { Plugin as t };
