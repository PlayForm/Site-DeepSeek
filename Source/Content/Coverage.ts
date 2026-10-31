// Which states of a run a reader can see afterwards, and which the harness
// decides without writing anything down.
//
// The yes rows are read from the harness's own session event catalog
// (`docs/persistence-catalog.md`): a yes names the event that carries the state,
// so a page can point at the record rather than promise a picture. The no rows
// are the waterfalls on the turn path, which the harness dispatches in memory
// and never writes to the log (`Temporary/Corca/Curated/Primitives.md`, "Not
// observable"), plus the three facts that live outside the parent's log: a child
// session's events, a call that never settles, and a body a listener replaced.
//
// A row is a state, never an event: the document beside this grid already lists
// the events, and a second list of them would be the same fact drawn twice.
export interface Coverage {
	/** The state's name, as the reading experience names it. */
	State: string;
	/** True when a session event carries the state today. */
	Feed: "yes" | "no";
	/** The event that carries it, or the seam that decides it without writing. */
	Why: string;
}

export const Coverage: Coverage[] = [
	{ State: "turn.open", Feed: "yes", Why: "turn/start and turn/end are session events" },
	{
		State: "turn.compacted",
		Feed: "yes",
		Why: "compaction/start, compaction/end, and compaction/summary",
	},
	{ State: "step.open", Feed: "yes", Why: "step/start and step/end bracket the group" },
	{
		State: "input.rejected",
		Feed: "no",
		Why: "agent/pre-step closes the turn with no step and no reason",
	},
	{ State: "call.pending", Feed: "yes", Why: "a tool/call with no tool/result for its id" },
	{ State: "call.background", Feed: "yes", Why: "job/registered and job/settled carry the job id" },
	{ State: "call.failed", Feed: "yes", Why: "the tool/result content carries the error shape" },
	{
		State: "call.denied",
		Feed: "no",
		Why: "tools/pre-execute decides in memory, and nothing names the listener",
	},
	{ State: "result.truncated", Feed: "yes", Why: "the result body ends with the truncation marker" },
	{
		State: "result.spilled",
		Feed: "no",
		Why: "tools/post-execute replaces the body, and only the locator text lands",
	},
	{
		State: "reference.inbound",
		Feed: "yes",
		Why: "sourceEventSeqs names the call the result answers",
	},
	{
		State: "stream.timed",
		Feed: "yes",
		Why: "the settled message embeds the compact timed stream",
	},
	{
		State: "stream.frame",
		Feed: "no",
		Why: "agent/assistant-stream is process-local and never written",
	},
	{ State: "error.retry", Feed: "yes", Why: "llm/retry and llm/retry-started are session events" },
	{
		State: "error.silent",
		Feed: "no",
		Why: "a call with no result looks the same as one still running",
	},
	{
		State: "approval.requested",
		Feed: "yes",
		Why: "approval/asked and approval/decided are log-only events",
	},
	{
		State: "cost.strip",
		Feed: "yes",
		Why: "usage rides on assistant/message when the adapter reports it",
	},
	{
		State: "delegation.tree",
		Feed: "no",
		Why: "a child session writes its own file, and nothing joins it",
	},
];

export default Coverage;
