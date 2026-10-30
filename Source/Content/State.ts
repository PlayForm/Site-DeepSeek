// The life of one tool call, as states and the moves between them. Read from
// the harness's tool pipeline: a call is proposed, gated, run, and settled, and
// three outcomes leave the main line.
export interface State {
	/** The state's name, as the pipeline names it. */
	Name: string;
	/** What the state means for the call. */
	Note: string;
	/** How the drawing should weigh it. */
	Tone: "start" | "ok" | "warn" | "quiet";
}

export interface Edge {
	/** The state the move leaves. */
	From: string;
	/** The state it arrives at. */
	To: string;
	/** What causes the move. */
	Label: string;
}

export const State: State[] = [
	{ Name: "proposed", Note: "the model asked for the call", Tone: "start" },
	{ Name: "gated", Note: "a listener allowed it", Tone: "ok" },
	{ Name: "running", Note: "the tool body is executing", Tone: "ok" },
	{ Name: "settled", Note: "the result is the model's next input", Tone: "ok" },
	{ Name: "denied", Note: "a listener refused it", Tone: "warn" },
	{ Name: "failed", Note: "the body raised", Tone: "warn" },
	{ Name: "background", Note: "the body outlived its window", Tone: "quiet" },
];

export const Edge: Edge[] = [
	{ From: "proposed", To: "gated", Label: "allow" },
	{ From: "gated", To: "running", Label: "dispatch" },
	{ From: "running", To: "settled", Label: "return" },
	{ From: "proposed", To: "denied", Label: "deny or ask" },
	{ From: "running", To: "failed", Label: "raise" },
	{ From: "running", To: "background", Label: "timeout" },
];

export default State;
