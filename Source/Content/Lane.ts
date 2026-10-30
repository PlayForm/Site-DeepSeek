// A turn as a set of lanes: who was busy, when, and for how long. The spans are
// authored from the turn the harness documents, because a real timeline needs a
// live run's timings; the shape is what the dashboard fills when it has them.
export interface Span {
	/** What was busy, in the harness's own words. */
	Label: string;
	/** Where the span starts, as a percentage of the turn. */
	Start: number;
	/** How long it runs, as a percentage of the turn. */
	Duration: number;
	/** What kind of work it was. */
	Kind: "model" | "tool" | "disk" | "record";
}

export interface Lane {
	/** The actor: the model, the harness, a tool, the disk. */
	Label: string;
	/** Its spans, in the order they ran. */
	Span: Span[];
}

export const Lane: Lane[] = [
	{
		Label: "Model",
		Span: [
			{ Label: "step 1", Start: 4, Duration: 22, Kind: "model" },
			{ Label: "step 2", Start: 38, Duration: 18, Kind: "model" },
			{ Label: "step 3", Start: 70, Duration: 16, Kind: "model" },
		],
	},
	{
		Label: "Tool",
		Span: [
			{ Label: "grep", Start: 28, Duration: 8, Kind: "tool" },
			{ Label: "read", Start: 58, Duration: 6, Kind: "tool" },
			{ Label: "write", Start: 88, Duration: 4, Kind: "tool" },
		],
	},
	{
		Label: "Disk",
		Span: [{ Label: "write", Start: 92, Duration: 3, Kind: "disk" }],
	},
	{
		Label: "Record",
		Span: [
			{ Label: "ledger", Start: 36, Duration: 1, Kind: "record" },
			{ Label: "ledger", Start: 66, Duration: 1, Kind: "record" },
			{ Label: "flush", Start: 96, Duration: 3, Kind: "record" },
		],
	},
];

export default Lane;
