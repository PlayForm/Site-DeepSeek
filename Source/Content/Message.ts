// The conversation as the model receives it, role by role, and the seam that
// can change each part. The parts are transcribed from the harness docs:
// `docs/architecture.md` (the turn flow and the session log) and
// `docs/agent-lifecycle.md` (the message events). The seams are the four the
// family's hooks listen on, and a package is named by its directory so the page
// can link the source it lives in.
//
// `Change` is what the family does here, in one sentence, or "nothing" when it
// leaves the part alone. The page prints "unchanged" for that case in the quiet
// voice, so the data says what is true and the component decides how it reads.
export interface Role {
	/** The order the model reads the part. */
	Order: number;
	/** The role, named as the message vocabulary names it. */
	Name: string;
	/** What this part of the conversation holds. */
	What: string;
	/** The seams that can change it. */
	Seam: string[];
	/** The package directories that change it, if any. */
	Plugin: string[];
	/** What the family changes here, or "nothing". */
	Change: string;
}

export const Role: Role[] = [
	{
		Order: 1,
		Name: "System",
		What: "The system prompt: the instructions, the step's admitted tool schemas, and every registered section, assembled fresh for each step.",
		Seam: ["system-prompt/assemble"],
		Plugin: ["hook-dsh-live-containers", "hook-dsh-tool-coach"],
		Change:
			"live-containers appends a live section at every assembly, and tool-coach appends a persistent coaching section once its ladder escalates.",
	},
	{
		Order: 2,
		Name: "User",
		What: "The user messages: the batch the inbox delivers and the step claims, admitted as user/message before the request is frozen.",
		Seam: ["agent/pre-step"],
		Plugin: [],
		Change: "nothing",
	},
	{
		Order: 3,
		Name: "Assistant",
		What: "The assistant messages: the text and reasoning the stream carries, settled as assistant/message and replayed as history.",
		Seam: ["llm/stream"],
		Plugin: ["hook-dsh-normalize-dash"],
		Change:
			"normalize-dash rewrites the dash family in each delta and in the assembled block before the stream is settled.",
	},
	{
		Order: 4,
		Name: "Tool",
		What: "The tool results: what the pipeline returns for each call, before the result becomes model content.",
		Seam: ["tools/post-execute"],
		Plugin: ["hook-dsh-ccr", "hook-dsh-tool-coach"],
		Change:
			"CCR replaces an oversized result with a preview and a retrieval marker, and tool-coach prepends a coaching note once a pattern repeats past its threshold.",
	},
];

export default Role;
