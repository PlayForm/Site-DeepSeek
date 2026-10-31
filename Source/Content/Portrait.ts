// The authored presentation of a package: what it is, what it plugs into,
// what it does, and the one picture that fits its kind. A library's work is a
// layer; a hook's work is an answer at a seam, so a hook takes the shape of
// that answer: the verdict it returns, the payload it changes, the line it
// writes, or the note it adds.
//
// Every record is written by hand from the package's own README and its
// `Source/` tree in `Classic/packages/`, and from
// `Documentation/Interpretability/Turn.md` for where it sits in the harness.
// The page reads the facts from `Package.server.ts`; this module carries the
// presentation, and no field here is a README sentence copied across.
export interface Portrait {
	/** The package directory. */
	Slug: string;
	/** What it is, in one sentence a reader would repeat. */
	Role: string;
	/** What it plugs into, named: the service, the tab, the layer. */
	Plugs: string;
	/** The three or four things it does, each a phrase. */
	Does: string[];
	/** The one visual that fits this package's kind. */
	Shape: "stream" | "layer" | "surface" | "buffer" | "gate" | "rewrite" | "record" | "advise";
}

export const Portrait: Portrait[] = [
	{
		Slug: "client-dsh-workspace-live",
		Role: "The live view of the workspace, presenting representations rather than processes",
		Plugs:
			"the workspaceLive client service, the workspace-live tab in conversation.view, and the D5 trace bus",
		Does: [
			"Holds one snapshot until an event or a graph refresh replaces it",
			"Follows observe/stamp, graph/indexed, graph/invalidated, and the batch transitions",
			"Presents the entity, presentation, and interaction model without calling a process an entity",
			"Keeps the tail newest first, and stops at maxEvents",
		],
		Shape: "stream",
	},
	{
		Slug: "client-dsh-panel-family",
		Role: "The panel that renders the tab and the overlay, from whatever the adapters register",
		Plugs: "the family-tab mount in conversation.view and the overlay mount in shell.overlay",
		Does: [
			"Registers one section per adapter, ordered and filtered by slot",
			"Shows each plugin's activation, and the tail that proves it moved",
			"Turns a plugin's schema into the fields its form shows",
			"Applies a volatile change without a remount, and a plain one through the bridge",
		],
		Shape: "surface",
	},
	{
		Slug: "client-dsh-panel-family-host",
		Role: "The host process behind the panel: a read face, a write face, and a forwarded bus",
		Plugs: "the panelFamilyHost, panelFamilyBridge, and panelFamilyTrace services",
		Does: [
			"Tails a family log by namespace, with the name checked before the path",
			"Summarizes the ccr store: its path, its bytes, its lines",
			"Forwards the D5 bus, on and ring, when the bus exists",
			"Applies a whole resolved config through the config editor, and refuses a secret",
		],
		Shape: "buffer",
	},
	{
		Slug: "lib-dsh-core",
		Role: "The helpers, tables, and dispatchers every other family package imports",
		Plugs: "the governance hooks and the six normalize flavors, by named import",
		Does: [
			"Composes the suppression line, the refusal guard, and the activation line",
			"Carries the six character tables and the two replacers",
			"Dispatches a stream chunk and a block end with the transform injected",
			"Loads the update policy, and falls back to the module's own defaults",
		],
		Shape: "layer",
	},
	{
		Slug: "lib-dsh-conversation",
		Role: "The names and the fold that every conversation-aware plugin shares",
		Plugs: "the ctx.conversation provider and each plugin's own conversation adapter",
		Does: [
			"Names the service and the six conversation events",
			"Reduces the session log to one session's current state",
			"Derives a tool call's file touches, resolved against the session's cwd",
			"Emits an envelope per change, stamped with the source record's Seq and time",
		],
		Shape: "layer",
	},
	{
		Slug: "lib-dsh-trace",
		Role: "The names, the guards, and the coalescing loop the trace bus runs on",
		Plugs: "the ctx.trace service that plugin-dsh-factory provides",
		Does: [
			"Names the bus events and the ring bound",
			"Completes a draft into an envelope with a trace id and a time",
			"Queues work by path, and runs one task per path at a time",
			"Guards the envelope and the stamp shapes",
		],
		Shape: "buffer",
	},
	{
		Slug: "lib-dsh-pack",
		Role: "One file per repository, holding the conventions its suggesters read",
		Plugs: "the six suggesters, each projecting its own domain out of the resolved pack",
		Does: [
			"Parses the documented YAML subset, and accepts JSON",
			"Resolves the user layer, then the repo layer, then the extends chain",
			"Merges families by id and targets by path, and normalizes once",
			"Locates the workspace by its pack signature, or returns undefined",
		],
		Shape: "buffer",
	},
	{
		Slug: "lib-dsh-workspace-live",
		Role: "The frame, the budget collapse, and the packet grammar under the live view",
		Plugs: "plugin-dsh-workspace and client-dsh-workspace-live",
		Does: [
			"Types the operational view's sections and its packet",
			"Draws one section as a framed block with its version in the header",
			"Turns an overflow section into a one-line summary rather than a gap",
			"Renders the orientation packet, one line per fixed heading",
		],
		Shape: "layer",
	},

	// The gate: the hook's answer at its seam is a verdict, so the picture is
	// the verdicts and the condition that picks one.
	{
		Slug: "hook-dsh-ccr",
		Role: "The gate on oversized tool output: whole, stored, or a marker the model can retrieve",
		Plugs:
			"the tools/post-execute waterfall (prepended), the ccr_retrieve tool, and the agent/pre-step engine phase",
		Does: [
			"Reads the result, the tool name, and the failure flag before any other listener sees them",
			"Returns pass, store, or replace, and writes the store only for the last two",
			"Replaces an oversized result with a one-line type-aware preview and a retrieval marker",
			"Answers ccr_retrieve by exact hash, or by a line range inside that hash",
		],
		Shape: "gate",
	},

	// The rewrite: the hook changes what the model reads next, so the picture
	// is the payload before and after with the changed span marked.
	{
		Slug: "hook-dsh-comment-filter",
		Role: "The overpass that takes comments out of the results a read hands back",
		Plugs: "the tools/post-execute waterfall (prepended) and the agent/pre-step intent recorder",
		Does: [
			"Strips a full-line comment to an empty line and a trailing comment from its start",
			"Keeps every line-number prefix and every other byte of the envelope",
			"Passes the result when the task itself asks about comments",
			"Names the omission in one notice line inside the content",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-live-containers",
		Role: "The conversation blocks that are recomputed at ask time and read as live",
		Plugs:
			"the system-prompt/assemble waterfall as one appended section, beside its own tools and observers",
		Does: [
			"Appends one section whose blocks are recomputed at every request",
			"Frames each block so the model cannot mistake it for harness state",
			"Renders an unknown token literally rather than failing the assembly",
			"Collapses the oldest frames to one line when the section passes its budget",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-normalize-dash",
		Role: "The dash family, rewritten to the ASCII hyphen as the model streams it",
		Plugs: "the llm/stream waterfall and the family's raw-write tool, which this package registers",
		Does: [
			"Rewrites the em dash, the en dash, and their relatives to one ASCII hyphen",
			"Reaches text deltas, reasoning deltas, and the block ends the stream assembles",
			"Takes the replacement from config, so the next stream picks a new glyph up",
			"Leaves tool arguments alone unless the risky arm is switched on",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-normalize-ellipsis",
		Role: "The ellipsis code point, rewritten to three ASCII dots as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Rewrites the horizontal ellipsis to three ASCII dots",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Takes the replacement from config, so a different string is one edit away",
			"Writes no count line when the stream held nothing to rewrite",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-normalize-fullwidth",
		Role: "The fullwidth block, mapped back to ASCII as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Maps the fullwidth forms block to its halfwidth ASCII counterpart",
			"Reads the substitution from the core's char table rather than a knob",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to rewrite",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-normalize-invisible",
		Role: "The zero-width family, removed from the stream before anyone reads it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Removes the zero-width spaces, joiners, bidi controls, and the byte order mark",
			"Removes rather than replaces, because the empty string is the default",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to remove",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-normalize-quotes",
		Role: "Eight typographic quotes, rewritten to the straight ASCII pair as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Maps the eight typographic quote code points to two ASCII characters",
			"Reads the substitution from the core's char table rather than a knob",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to rewrite",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-normalize-spaces",
		Role: "The exotic space family, rewritten to the plain ASCII space as the model streams it",
		Plugs: "the llm/stream waterfall",
		Does: [
			"Rewrites every visible non-terminator space that is not the ASCII space",
			"Takes the replacement from config, the plain space by default",
			"Reaches text and reasoning, and the block ends the stream assembles",
			"Writes no count line when the stream held nothing to rewrite",
		],
		Shape: "rewrite",
	},

	// The record: the hook writes a line about what happened, so the picture is
	// the line and the field it carries.
	{
		Slug: "hook-dsh-replay-suggester",
		Role: "The record of what a search touched, and the recall that answers with it",
		Plugs:
			"the tools/post-execute waterfall, the replay_history storage domain, and the seeded history file",
		Does: [
			"Appends one entry per judged call that names a path, in the store's own order",
			"Recalls the paths recorded around a similar earlier call",
			"Abstains when the store holds no matching record, rather than guessing",
			"Keeps repo-relative paths and no file contents",
		],
		Shape: "record",
	},

	// The advice: the hook adds a note the model reads next, so the picture is
	// the note, the seam it lands at, and the condition that triggers it.
	{
		Slug: "hook-dsh-convention-suggester",
		Role: "The pack's conventions, named before the model writes the file",
		Plugs:
			"the tools/post-execute waterfall, the agent/pre-step counter reset, and the pack's convention/ domain",
		Does: [
			"Classifies the written path into one of the pack's convention intents",
			"Names the companion targets the convention requires, each with its reason",
			"Stays silent when the cooldown, the per-turn cap, or the confidence refuses",
			"Proposes a pack when the workspace has none, and never writes the live one",
		],
		Shape: "advise",
	},
	{
		Slug: "hook-dsh-doc-suggester",
		Role: "The doc graph's companions, named at the call that touches one document",
		Plugs: "the tools/post-execute waterfall and the pack's doc/ domain",
		Does: [
			"Classifies the doc path into one of seven families",
			"Names the graph companions the task has not touched yet",
			"Drops a companion that does not exist under the workspace root",
			"Records the decision, and counts a later call that names a companion as an accept",
		],
		Shape: "advise",
	},
	{
		Slug: "hook-dsh-edit-suggester",
		Role: "The files that rarely change alone, named at the edit that changed one",
		Plugs: "the tools/post-execute waterfall for the modification tools, and the pack's edit/ domain",
		Does: [
			"Classifies the edited path into one of seven families, the version family first",
			"Names the standard companions the turn has not touched",
			"Drops the companions the model already edited this turn",
			"Records the decision, and closes an untouched window as a soft reject",
		],
		Shape: "advise",
	},
	{
		Slug: "hook-dsh-graph-suggester",
		Role: "The component around a symbol, resolved from the workspace graph rather than guessed",
		Plugs: "the tools/post-execute waterfall and the workspaceGraph neighborhood query",
		Does: [
			"Asks the workspace graph for the component around the anchor",
			"Falls back to a static set only when the graph answers an empty component",
			"Abstains rather than guessing when the service is absent or throws",
			"Resolves a package-name grep to the family roster and the sibling README",
		],
		Shape: "advise",
	},
	{
		Slug: "hook-dsh-search-suggester",
		Role: "The target set for an intent, named at the first search that shows it",
		Plugs:
			"the tools/post-execute waterfall, the suggestion_dismiss tool, and the optional sticky prompt section",
		Does: [
			"Classifies a search call into one of ten intents, destructive first",
			"Names the standard locations for that intent before the next search",
			"Dismisses a family or a path through its own tool",
			"Ranks a candidate by the graph's proof when the graph is present",
		],
		Shape: "advise",
	},
];

export function PortraitFor(Slug: string): Portrait | undefined {
	return Portrait.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}

export default Portrait;
