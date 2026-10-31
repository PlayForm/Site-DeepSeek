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
	/** The things it does, each a phrase; the last says so when the flow carries it. */
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

	// The fifteen hooks with a drawn flow. Each of these also has a record in
	// `Source/Content/Current.ts`, so the page carries two things: the words
	// here, and the order and the branch there. The shape is still chosen by
	// what the hook does at its seam, because a reader who knows the four
	// shapes should be able to guess which one a hook takes; where the flow is
	// the interesting part rather than the verdict, the last line of `Does`
	// says so and the flow section carries it.
	{
		Slug: "hook-dsh-package-governor",
		Role: "The silent governor of every written package.json",
		Plugs:
			"the fs/observed event through the factory's Wire, and the direct-govern entries for package.json",
		Does: [
			"Gates on the basename, the actor tool, a present observation, the stash, and the exclusion list",
			"Canonicalizes a chain-governed pin to the resolved range the nearest registry records",
			"Bumps the public pins from a detached update stage, in process or through the ncu bin",
			"Re-emits fs/observed with the fresh version, so the observation policy's record is current",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-package-pinner",
		Role: "The silent pinner of every written package.json",
		Plugs:
			"the fs/observed event through the factory's Wire, and the direct-govern pin entry for package.json",
		Does: [
			"Strips one leading ^, ~, or = from the sections the config declares",
			"Leaves a static version, a compound range, a wildcard, and a protocol dependency as authored",
			"Unions the keep-list from the global policy file, the file's directory, and the nearest registry",
			"Runs no update stage at all, so the pass is deterministic and its only write is fenced",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-cargo-governor",
		Role: "The silent governor of every written Cargo.toml",
		Plugs:
			"the fs/observed event through the factory's Wire, the direct-govern entries for Cargo.toml, and the subprocess seam",
		Does: [
			"Gates on the basename, the actor tool, a present observation, the stash, and the exclusion list",
			"Rewrites dependency pins surgically, so comments and formatting survive the pass",
			"Runs cargo upgrade as a detached continuation, with the exclusion list enforced at the CLI",
			"Pauses a directory at the circuit breaker, and never notifies the author",
		],
		Shape: "rewrite",
	},
	{
		Slug: "hook-dsh-workspace-observe",
		Role: "The first step of the invisible flow: one observation stamp per file state",
		Plugs:
			"the workspaceObserve service, the fs/observed listener on the root context, and the trace bus",
		Does: [
			"Stamps the event's display path and version verbatim, and stamps an absence as absent",
			"Guards the own actor, the exclusion list, the include list, and a repeat event",
			"Emits observe/stamp for the indexer, when the trace bus exists",
			"Keeps the latest stamp per path plus a bounded ring, and ledgers the drop",
		],
		Shape: "record",
	},
	{
		Slug: "hook-dsh-workspace-audit",
		Role: "The workspace's accountability: one line per event, and the graph those lines form",
		Plugs: "the workspaceAudit service and the fs/observed listener on the root context",
		Does: [
			"Writes one OutcomeEvidence line per observed write: success on presence, failure on absence",
			"Coalesces a repeat event, because the version token already identifies that file state",
			"Carries the operation, the parent, and the category, so a chain composes without recursion",
			"Closes the loop with an IntentAssessment when the service is asked to",
		],
		Shape: "record",
	},
	{
		Slug: "hook-dsh-workspace-monitor",
		Role: "The watch and the sweep, with the next event as the only clock",
		Plugs: "the fs/observed listener and the state probe on the context",
		Does: [
			"Records a watch entry per observed write, with its check sets and its debounce deadline",
			"Classifies a path into the shipped check sets, and never executes one",
			"Sweeps the deadlines the clock passed, inside the event rather than on a timer",
			"Caps the watch map, and ledgers the entry it drops",
		],
		Shape: "record",
	},
	{
		Slug: "hook-dsh-workspace-approve",
		Role: "The exact human approval: a candidate bound by fingerprint and version",
		Plugs: "the workspaceApprove service and the fs/observed invalidation listener",
		Does: [
			"Binds the concrete change set, with its constraints traveling beside it",
			"Rejects a changed constraint set at approval time rather than amending it",
			"Invalidates a binding when the file is observed at a different version",
			"Answers a check with approved, unbound, the binding's own decision, or stale",
		],
		Shape: "gate",
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Role: "The gate that checks the means, because an intent must not authorize its own",
		Plugs:
			"the workspaceGovern service, the tools/pre-execute gate, and the tools/post-execute observer",
		Does: [
			"Runs four independent checks on a proposed change: contributes, scope, policy, preconditions",
			"Takes each failure behavior from the recovery table rather than a silent default",
			"Returns the downstream decision unchanged on pass, a deny reason, or an ask",
			"Drops an operation that re-enters the gate past the loop bound",
			"Its flow is the interesting part rather than its verdict: the four checks and the recovery table, not the deny",
		],
		Shape: "gate",
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Role: "The evidence record: the pre-images, the revert, and what a crash left applying",
		Plugs:
			"the workspaceJournal service, the fs/observed checkpoint listener, and the boot recovery pass",
		Does: [
			"Journals a batch before its writes land, with each file's pre-image and version",
			"Replays a revert backward through the version fence, and reports a conflict rather than overwriting",
			"Counts the writes landing against open batches, so a crash's progress is known",
			"Marks every batch still applying at boot as recovery-required",
			"Its flow is the interesting part: the batch lifecycle is what the four calls describe",
		],
		Shape: "record",
	},
	{
		Slug: "hook-dsh-workspace-merge",
		Role: "The batch commit: atomic gates, fenced writes, and a reply per file",
		Plugs: "the workspaceMerge service and the workspace_merge tool",
		Does: [
			"Holds the whole batch when the policy block's commit verdict is approve",
			"Runs the atomic gates before any write, and refuses the batch rather than a file",
			"Commits one file at a time through the factory's Write, then reads each file back",
			"Reports applied, conflict, denied, rejected, recovery-required, or outcome-unknown",
		],
		Shape: "gate",
	},
	{
		Slug: "hook-dsh-workspace-operate",
		Role: "The operation engine: typed proposals, and the refusal-to-guess beside them",
		Plugs:
			"the workspaceOperate service, the workspace_propose and workspace_proposals tools, and the fs/observed fence tracker",
		Does: [
			"Proposes a rename, a connect, or a replace, and never writes a file",
			"Refuses with a typed reason: a bad request, an absent graph, an unknown symbol, a stale fence, a full table",
			"Tracks the version fence from fs/observed, so a proposal against a moved file is refused",
			"Records the proposal, and leaves the applying to the approve and merge steps",
		],
		Shape: "advise",
	},
	{
		Slug: "hook-dsh-batch-decision",
		Role: "The thin workflow owner between a proposal, its decision, and the board",
		Plugs:
			"the batch/proposed and batch/decision events, the batch_decision tool, and the agent-team inbox",
		Does: [
			"Records a proposal once, and ignores a revision that is not newer",
			"Answers the policy gate before the auto-approve knob, so an approve verdict is never widened",
			"Expires a proposal on first touch rather than on a timer, and says so in the ledger",
			"Writes the decision into the inbox as well as the bus, so the board and the ingester both hear it",
			"Its flow is the interesting part: a proposal crosses a policy gate, a knob, and a handoff before anyone is told",
		],
		Shape: "gate",
	},
	{
		Slug: "hook-dsh-lesson-nudge",
		Role: "The idle edge of the agent's status turned into a self-improvement review",
		Plugs:
			"the agent/status event on its idle edge, and the lesson service that plugin-dsh-lesson-review provides",
		Does: [
			"Applies four gates in order: the switch, the idle edge, the service, and the cadence",
			"Claims the idle phase through agent.runMaintenance, so the review never shares the live turn",
			"Detaches the maintenance task, so a rejected review cannot break the status publication",
			"Caps its own reviews per session, on top of whatever interval the service reports",
			"Its flow is the interesting part: the value is where the review runs, not what it says",
		],
		Shape: "advise",
	},
	{
		Slug: "hook-dsh-test-suggester",
		Role: "The test intent answered with a target set before the search finishes",
		Plugs: "the tools/post-execute waterfall, the agent/pre-step reset, and the pack's test domain",
		Does: [
			"Classifies a search call into the pack's test intents, from the tool name and the arguments",
			"Names the suite, the README, the runner, and the badge a test task usually touches",
			"Reconciles a package's smoke claims with the tree it actually has, read-only",
			"Abstains rather than guesses: an ambiguous call, a missing companion, and a foreign workspace each have a line",
		],
		Shape: "advise",
	},
	{
		Slug: "hook-dsh-tool-coach",
		Role: "The four-tier ladder that keeps file content out of the terminal",
		Plugs:
			"the tools/post-execute and tools/pre-execute waterfalls, the system-prompt/assemble section, and the agent/pre-step reset",
		Does: [
			"Normalizes the command before matching, so an obfuscated variant still counts",
			"Classifies a segment as write, read, search, discovery, or control, and lets an exempt head dominate its pipe",
			"Escalates from a silent strike to a notice to a persistent section, and denies last",
			"Names the right tool from the live registry, and falls back to a static table when the fetch fails",
			"Its flow is the interesting part: the ladder is the hook, and the deny is only its last rung",
		],
		Shape: "advise",
	},
];

export function PortraitFor(Slug: string): Portrait | undefined {
	return Portrait.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}

export default Portrait;
