// One package's control flow, as the site draws it: the seam it answers at,
// the work in the order it happens, the branch that decides, the ledger it
// writes, and the path that fails.
//
// Every record is transcribed by hand, from the corpus where the corpus draws
// the package and from the source in every case:
//
//   * the corpus at `Diagram/`, one Mermaid flowchart per package, which is
//     the package's own control flow - for the governance trio in
//     `02-governance/` and the tool coach in `04-guardians/`;
//   * the package's `Source/` tree in `Classic/packages/<slug>/` and
//     `EffectTS/packages/ets-<slug>/`, which is the arbiter when the two
//     disagree: `Source/Function/Apply.ts` for the listeners and the
//     registration order, `Source/Function/Observe.ts` for the fs/observed
//     body, and the service module for a hook whose work is a call rather
//     than an event.
//
// The packages with no corpus diagram are authored from their `Apply.ts`
// alone: the workspace family, the batch decision, the lesson nudge, and the
// test suggester. The plugin packages add the other direction: a plugin's flow
// is the sequence its register does not show, read from the entry module and
// the Function module each stage names. A flow is data rather than prose
// because the page compares one package against another, and a sentence would
// have to be read twice to see the same shape.
//
// The twins do not differ in control flow. Every `ets-` package registers the
// same listeners in the same order and composes the same ledger strings, and
// its own corpus diagram says so in as many words; what the ETS diagrams add
// is the Effect runtime around the hook (the dispatch, the scope fork, the
// per-step containment), which is that release tree's execution model rather
// than the hook's own decisions. The two things that do differ are the ledger
// file, which is named for the package identity, and the factory base import.
// The lookup strips the prefix for that reason, the way `PortraitFor` does,
// and fills the identity into the one path that carries it.

export interface Stage {
	/** The node's own words. */
	Label: string;
	/** What kind of node it is. */
	Kind: "seam" | "step" | "branch" | "pass" | "store" | "fail";
	/** The one line under the label, when the node needs one. */
	Note?: string;
}

export interface Current {
	/** The package directory, without the `ets-` prefix. */
	Slug: string;
	/** The package's flow, in order, with branches inline. */
	Stage: Stage[];
	/** The rule the flow obeys, said once. */
	Rule: string;
}

export const Current: Current[] = [
	// The governance trio: one seam, one gate, one write, and an update stage
	// that runs off the settled continuation. The corpus draws all three, and
	// the pinner is the one with no update stage at all.
	{
		Slug: "hook-dsh-package-governor",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "A tool-layer write lands, carrying its path, its actor, and its version token.",
			},
			{
				Label: "Gate: the basename package.json, a mutation tool, a present observation, the stash, and the exclusion list",
				Kind: "step",
				Note: "The gate writes nothing to the ledger; the module composes its own lines.",
			},
			{
				Label: "skipped (excluded) <path>",
				Kind: "fail",
				Note: "Exclusion-first: the internals of a dependency are never governed.",
			},
			{
				Label: "Discover the nearest registry.json, and parse it",
				Kind: "step",
				Note: "The walk-up is an auxiliary plain-fs probe; the governed manifest is never read here.",
			},
			{
				Label: "No registry.json found, or it is unreadable",
				Kind: "branch",
				Note: "The chain pass is skipped, and the line says which of the two happened.",
			},
			{
				Label: "Chain pass: canonicalize every chain-governed pin to the resolved range",
				Kind: "step",
				Note: "A dependency outside the chain is left where the author put it.",
			},
			{
				Label: "The refusal guard: a non-dependency section would change",
				Kind: "branch",
				Note: "The rewrite is aborted, and the refusal names the section.",
			},
			{
				Label: "GuardedWrite replaceIfVersion, then re-emit fs/observed with the fresh version",
				Kind: "step",
				Note: "The author sees its own bytes; the observation policy's version record is refreshed.",
			},
			{
				Label: "Update stage: npm-check-updates in process, or the ncu bin",
				Kind: "step",
				Note: "A detached continuation off the settled chain pass, with the chain deps rejected.",
			},
			{
				Label: "The circuit breaker: maxUpdateFailures in a row for one directory",
				Kind: "branch",
				Note: "The directory pauses, and the line carries the count.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "One global ledger, with the module identity as the line prefix.",
			},
		],
		Rule: "The manifest is the only thing that changes: the listener never awaits, the chain pass and the update stage run as detached continuations, and the author is never told.",
	},
	{
		Slug: "hook-dsh-package-pinner",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "A tool-layer write lands, carrying its path, its actor, and its version token.",
			},
			{
				Label: "Gate: the basename package.json, a mutation tool, a present observation, the stash, and the exclusion list",
				Kind: "step",
				Note: "The same gate set as the governor, on the same seam.",
			},
			{
				Label: "skipped (excluded) <path>",
				Kind: "fail",
				Note: "Exclusion-first, and silent to the author.",
			},
			{
				Label: "Discover the walk-up, and resolve the union keep-list",
				Kind: "step",
				Note: "The global policy file, the file's own directory, and the nearest registry, unioned.",
			},
			{
				Label: "Decode the manifest: null on failure",
				Kind: "step",
				Note: "The manifest is read through ctx.fs, never from the raw text.",
			},
			{
				Label: "observed non-JSON package.json <path>",
				Kind: "fail",
				Note: "The observed file is not JSON, so there is nothing to pin.",
			},
			{
				Label: "The range law: strip one leading ^, ~, or =",
				Kind: "step",
				Note: "A static version, a compound range, a wildcard, and a protocol dependency stay as authored.",
			},
			{
				Label: "The refusal guard: a non-dependency section would change",
				Kind: "branch",
				Note: "The pass is refused rather than guessed, and the section is named.",
			},
			{
				Label: "REFUSED line, and no write",
				Kind: "fail",
				Note: "The manifest keeps the bytes it had.",
			},
			{
				Label: "GuardedWrite replaceIfVersion, then re-emit fs/observed",
				Kind: "step",
				Note: "The version token is the service's, so a stale fence cannot overwrite.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "The pinner's own ledger, separate from the governor's.",
			},
		],
		Rule: "One range prefix leaves and nothing else does: the pass is deterministic, there is no update stage, and every write goes through the version fence.",
	},
	{
		Slug: "hook-dsh-cargo-governor",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "A tool-layer write lands, carrying its path, its actor, and its version token.",
			},
			{
				Label: "Gate: the basename Cargo.toml, a mutation tool, a present observation, the stash, and the exclusion list",
				Kind: "step",
				Note: "The gate writes nothing to the ledger; the module composes its own lines.",
			},
			{
				Label: "skipped (excluded) <path>",
				Kind: "fail",
				Note: "Exclusion-first: the internals of a crate are never governed.",
			},
			{
				Label: "Discover the nearest registry.json, and parse it",
				Kind: "step",
				Note: "The walk-up is an auxiliary plain-fs probe; the governed manifest is never read here.",
			},
			{
				Label: "No registry.json found, or it is unreadable",
				Kind: "branch",
				Note: "The chain pass is skipped, and the line says which of the two happened.",
			},
			{
				Label: "Plan the pass: chain, strip, and normalize the dependency sections",
				Kind: "step",
				Note: "smol-toml is read only to identify the entries, never to stringify them back.",
			},
			{
				Label: "Rewrite the raw lines, so comments and formatting survive",
				Kind: "step",
				Note: "The rewrite is surgical: an internal calculation over the text, not a TOML round trip.",
			},
			{
				Label: "The refusal guard: a non-dependency section, an unsupported value shape, or an entry missing from the text",
				Kind: "branch",
				Note: "Each refusal has its own line, and the rewrite is aborted rather than guessed.",
			},
			{
				Label: "GuardedWrite replaceIfVersion, then re-emit fs/observed with the fresh version",
				Kind: "step",
				Note: "The author sees its own bytes; the observation policy's version record is refreshed.",
			},
			{
				Label: "Update stage: cargo upgrade through the subprocess seam, then the verify command",
				Kind: "step",
				Note: "The exclusion list is enforced at the CLI level, one flag per crate, and a verifier that cannot run is skipped as non-fatal.",
			},
			{
				Label: "The circuit breaker: maxUpdateFailures in a row for one directory",
				Kind: "branch",
				Note: "The directory pauses, and the line carries the count.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "The cargo module's own ledger, separate from the npm governor's.",
			},
		],
		Rule: "The Rust boundary is exclusionary and the manifest is the only thing that changes: no npm equivalent exists for a cargo update, so the CLI is the update path and the text rewrite is the pass.",
	},

	// The workspace family: one invisible flow, split across eight hooks, each
	// of which owns one step. The corpus does not cover them, so these are read
	// from Apply.ts and the module it calls.
	{
		Slug: "hook-dsh-workspace-observe",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The listener registers on the root context, so it hears every emission.",
			},
			{
				Label: "Read the display path and the observed version, verbatim",
				Kind: "step",
				Note: "An absent observation is stamped absent, never a fabricated token.",
			},
			{
				Label: "The actor is the hook's own, the path is excluded, or it is outside include",
				Kind: "branch",
				Note: "The own-actor check is an identity test on the actor object, not a name.",
			},
			{
				Label: "ignored <path> (own actor | excluded | not included)",
				Kind: "fail",
				Note: "Each refusal names its own reason, so a silent skip is never a guess.",
			},
			{
				Label: "A repeat event: the same path at the same version inside the coalescing window",
				Kind: "branch",
				Note: "The version token identifies the file state, so the stamp for it already exists.",
			},
			{
				Label: "Dropped silently: no sequence, no stamp, no line",
				Kind: "pass",
				Note: "A different version, or the same version after the window, is stamped normally.",
			},
			{
				Label: "Increment the plugin's own sequence, and stamp the path",
				Kind: "step",
				Note: "The counter is the plugin's own and never a wall clock.",
			},
			{
				Label: "Emit observe/stamp on the trace bus, when the bus exists",
				Kind: "step",
				Note: "The indexer's first source; a context without the bus records exactly as before.",
			},
			{
				Label: "workspace_observe: a record per path, and a bounded ring",
				Kind: "store",
				Note: "The oldest drop is ledgered as capped rather than discarded in silence.",
			},
		],
		Rule: "The conversation never sees a stamp: the listener records the event's own words, the last distinct version wins, and the hook reads no file content and writes no file.",
	},
	{
		Slug: "hook-dsh-workspace-audit",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "Every observed write is an outcome node on the traceability graph.",
			},
			{
				Label: "Read the display path, the version, and the actor's tag",
				Kind: "step",
				Note: "The tag becomes the line's parent, so a chain composes without recursion.",
			},
			{
				Label: "The actor is the hook's own, or the path is excluded",
				Kind: "branch",
				Note: "The audit records the world, not itself.",
			},
			{
				Label: "ignored <path> (own actor | excluded)",
				Kind: "fail",
				Note: "The line is the accountability record, so the refusal is recorded too.",
			},
			{
				Label: "A repeat event: the same path at the same version inside the coalescing window",
				Kind: "branch",
				Note: "The guard is on the listener only; the service's manual lines are never coalesced.",
			},
			{
				Label: "Dropped silently: that observed write already has its line",
				Kind: "pass",
				Note: "The last distinct version always wins.",
			},
			{
				Label: "Write one OutcomeEvidence line: success on presence, failure on absence",
				Kind: "step",
				Note: "One path every line takes, so the id and the ledger string have one definition.",
			},
			{
				Label: "Close the loop with an IntentAssessment, when the service is asked to",
				Kind: "step",
				Note: "The assessment renders the verdict rather than the outcome.",
			},
			{
				Label: "workspace_audit: one line per event, and a bounded ring",
				Kind: "store",
				Note: "The ring is the newest first, and the bound is maxLines.",
			},
		],
		Rule: "Every observed write becomes one line and one line only: the version token identifies the state, so a repeat inside the window is silence rather than a second record.",
	},
	{
		Slug: "hook-dsh-workspace-monitor",
		Stage: [
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The event is the watch, and it is also the sweep's checkpoint.",
			},
			{
				Label: "Read the path and the version, and classify the path into its check sets",
				Kind: "step",
				Note: "The shipped catalog is tsc, format, cargo, and governance, and no command is ever run.",
			},
			{
				Label: "The actor is the hook's own, the path is excluded, or it is outside include",
				Kind: "branch",
				Note: "The three guards run in order, before any entry is touched.",
			},
			{
				Label: "ignored <path> (own actor | excluded | not included)",
				Kind: "fail",
				Note: "A malformed event is caught on the same path, and ledgered as failed rather than thrown.",
			},
			{
				Label: "Record the watch entry: the version, the clock stamp, the check sets, and the debounce deadline",
				Kind: "step",
				Note: "The deadline is computed from the module's clock, and a version change bumps the count.",
			},
			{
				Label: "The watch map is over maxWatch",
				Kind: "branch",
				Note: "The oldest entry is the map head.",
			},
			{
				Label: "capped <path> (maxWatch <n>)",
				Kind: "fail",
				Note: "The drop is ledgered, never silent.",
			},
			{
				Label: "Sweep the deadlines the clock has passed",
				Kind: "step",
				Note: "There is no setTimeout and no setInterval anywhere; the next event is the bound.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "The health counters ride the probed state instead of the ledger.",
			},
		],
		Rule: "There are no real timers: the event records the watch, the deadline comes from the module's clock, and the sweep runs inside the next event.",
	},
	{
		Slug: "hook-dsh-workspace-approve",
		Stage: [
			{
				Label: "bind: the exact candidate, with its path, its fingerprint, its version, and its constraints",
				Kind: "step",
				Note: "An approval binds the concrete change set, never a fuzzy intent.",
			},
			{
				Label: "Rejected: an incomplete identity, or constraints required and missing",
				Kind: "fail",
				Note: "The binding never becomes pending.",
			},
			{
				Label: "approve or deny: the decision lands on the pending binding, with the commitment",
				Kind: "step",
				Note: "The constraints travel with the approval rather than being re-read at check time.",
			},
			{
				Label: "The constraint set changed at approval time",
				Kind: "branch",
				Note: "A changed set is a rejection, because an amendment would approve what nobody read.",
			},
			{
				Label: "Rejected, and the binding keeps its decision",
				Kind: "fail",
				Note: "The refusal is its own ledger line.",
			},
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The invalidation listener hears every observed write on the root context.",
			},
			{
				Label: "An observed version differs from the one the approval bound",
				Kind: "branch",
				Note: "A pending or approved binding is the only thing it looks at.",
			},
			{
				Label: "invalidated <id> (version changed)",
				Kind: "fail",
				Note: "The binding stops covering the file, and the merge side will see stale.",
			},
			{
				Label: "check: an approved binding must cover the exact fingerprint, at the bound version",
				Kind: "step",
				Note: "The check validates the implementation; the authority licensing happened earlier.",
			},
			{
				Label: "unbound, the binding's own decision, or stale",
				Kind: "fail",
				Note: "Each answer is its own decision rather than a single refusal.",
			},
			{
				Label: "approved: the merge side derives its AuthorizationDecision",
				Kind: "pass",
				Note: "An intent must not authorize its own means, so this grants nothing by itself.",
			},
			{
				Label: "workspace_approve: one record per binding, and a bounded ring",
				Kind: "store",
				Note: "The sequence is the plugin's own counter, never a wall clock.",
			},
		],
		Rule: "An approval binds the exact candidate and never the intent: a changed constraint set is a rejection, a moved version is an invalidation, and the check only confirms what the authority already licensed.",
	},
	{
		Slug: "hook-dsh-workspace-govern",
		Stage: [
			{
				Label: "tools/pre-execute",
				Kind: "seam",
				Note: "The gate arm runs on every gated call, and next() is always awaited first.",
			},
			{
				Label: "The tool is outside the gate set, the event is the hook's own, or the target is excluded",
				Kind: "branch",
				Note: "An excluded target is never gated, and the pass is silent.",
			},
			{
				Label: "The downstream decision is returned unchanged",
				Kind: "pass",
				Note: "A gate that is not gating leaves the waterfall exactly as it found it.",
			},
			{
				Label: "Extract the proposal: the operate record when one is attached, else the minimal synthesis from the call",
				Kind: "step",
				Note: "The operation, the parent, and the category travel with the proposal.",
			},
			{
				Label: "The operation identifier has been gated more than loopBound times",
				Kind: "branch",
				Note: "A self-feeding operation can never re-enter the gate without end.",
			},
			{
				Label: "loop <operation> (recursion guard)",
				Kind: "fail",
				Note: "The call passes through, and the line names the operation.",
			},
			{
				Label: "Run the four independent checks: contributes, scope, policy, preconditions",
				Kind: "step",
				Note: "The intent is never the permission, so the gate checks the means.",
			},
			{
				Label: "A check fails, and the recovery table says fail-closed",
				Kind: "branch",
				Note: "Scope is the one obligation that fails closed; the others fail open and say so.",
			},
			{
				Label: "deny: the waterfall returns a deny decision with the govern reason",
				Kind: "fail",
				Note: "The proposals become effects only through the gates.",
			},
			{
				Label: "A policy rule says escalate",
				Kind: "branch",
				Note: "The approval is the approve family's step, not this one.",
			},
			{
				Label: "ask: the call waits for the exact approval",
				Kind: "pass",
				Note: "An escalate is a hand-off rather than a refusal.",
			},
			{
				Label: "tools/post-execute",
				Kind: "seam",
				Note: "The observer records accepted or errored for the same call, so the trail is auditable.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "The decision ring is bounded by maxDecisions.",
			},
		],
		Rule: "An intent must not authorize its own means: the gate checks the four obligations, the recovery table decides what a failed check means, and a pass returns the downstream decision unchanged.",
	},
	{
		Slug: "hook-dsh-workspace-journal",
		Stage: [
			{
				Label: "open(batch, entries): journal the batch before its writes land",
				Kind: "step",
				Note: "Each entry is a file's pre-image, its content and its version captured before the write.",
			},
			{
				Label: "Storage is down, so open throws",
				Kind: "fail",
				Note: "There is no journal, so there are no writes: the transaction never starts.",
			},
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The listener counts the writes landing against the batches still applying.",
			},
			{
				Label: "Bump the batch's progress, and persist the record",
				Kind: "step",
				Note: "The progress is how far a crash got, written as it happens rather than guessed later.",
			},
			{
				Label: "seal(batchId, verified | recovery-required)",
				Kind: "step",
				Note: "The batch leaves applying only through this call.",
			},
			{
				Label: "revert(batchId): replay the pre-images backward, one file at a time",
				Kind: "step",
				Note: "Last written, first restored, and every write goes through the version fence.",
			},
			{
				Label: "The policy block's write verdict is approve",
				Kind: "branch",
				Note: "The revert is the journal's one gated action, because it writes the pre-images back.",
			},
			{
				Label: "revert held (<n> files): zero writes, and the batch keeps its state",
				Kind: "fail",
				Note: "Nothing is persisted, so the revert waits for the user rather than half-applying.",
			},
			{
				Label: "The fence contradicts the file version, or a pre-image was recorded truncated",
				Kind: "branch",
				Note: "One file's failure never aborts the pass.",
			},
			{
				Label: "Reported per file: a conflict, or a skip with its reason",
				Kind: "fail",
				Note: "Never a silent overwrite, and never a half-applied pre-image.",
			},
			{
				Label: "Boot recovery: every batch still applying is marked recovery-required",
				Kind: "step",
				Note: "The pass runs as a microtask at mount, after the storage open had its first tick.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "One line per open, seal, revert, and recovery.",
			},
		],
		Rule: "Recoverable partial states, never an invisible intermediate state: the batch is journaled before its writes, the revert replays the pre-images through the fence, and a boot finds whatever a crash left applying.",
	},
	{
		Slug: "hook-dsh-workspace-merge",
		Stage: [
			{
				Label: "workspace_merge: the batch arrives with its operations and their version fences",
				Kind: "step",
				Note: "The merge is called rather than observed, so it registers no event listener.",
			},
			{
				Label: "The policy block's commit verdict is approve",
				Kind: "branch",
				Note: "The outer gate, in front of the atomic gates and every write.",
			},
			{
				Label: "merge held (<n> files): zero writes, and every operation replied rejected",
				Kind: "fail",
				Note: "Nothing is persisted, so the batch never starts.",
			},
			{
				Label: "The atomic gates: an empty batch, maxFiles, maxTotalBytes, a duplicate path, a missing fence, an unresolved path, a stale fence",
				Kind: "step",
				Note: "The gates run before any write, so a refusal costs nothing.",
			},
			{
				Label: "batch <id> rejected (<reason>): the whole batch is refused",
				Kind: "fail",
				Note: "All-or-nothing is the default, so a gate conflict is the batch's and not the file's.",
			},
			{
				Label: "Commit one file at a time through the factory's Write, with replaceIfVersion and the sandbox fence",
				Kind: "step",
				Note: "The sequential fold is what keeps the version-guarded writes from racing.",
			},
			{
				Label: "Verify every applied write by reading the file back",
				Kind: "step",
				Note: "An applied reply is a verified reply, not an assumed one.",
			},
			{
				Label: "A mid-batch write fails, in all-or-nothing mode",
				Kind: "branch",
				Note: "Survivors mode is the alternative, and it reports what survived instead.",
			},
			{
				Label: "The remaining files are replied recovery-required",
				Kind: "fail",
				Note: "The journal domain completes or compensates, and the state is never invisible.",
			},
			{
				Label: "The reply union per file: applied, conflict, denied, rejected, recovery-required, outcome-unknown",
				Kind: "pass",
				Note: "Derived from the edit lifecycle rather than guessed.",
			},
			{
				Label: "workspace_merge: one record per batch",
				Kind: "store",
				Note: "The journal the recovery domain reads later.",
			},
		],
		Rule: "The commit is all-or-nothing by default and every write is fenced: a gate failure refuses the batch, a mid-batch failure marks what is left, and no reply is ever guessed.",
	},
	{
		Slug: "hook-dsh-workspace-operate",
		Stage: [
			{
				Label: "workspace_propose: a rename, a connect, or a replace, with its version fence",
				Kind: "step",
				Note: "The request shape is the first thing the rules look at.",
			},
			{
				Label: "The resolution rules: the shape, the graph, the fence, the staleness, the span",
				Kind: "step",
				Note: "One entry point, three guard chains, and a fixed order of arms.",
			},
			{
				Label: "The graph service is absent",
				Kind: "branch",
				Note: "A rename and a connect cannot be resolved without it, and neither can be faked.",
			},
			{
				Label: "graph-unavailable: refused rather than guessed",
				Kind: "fail",
				Note: "The replace path is the one that still resolves, because its span is read from the file.",
			},
			{
				Label: "The fence is missing, or it contradicts the observed version or the file's own stat",
				Kind: "branch",
				Note: "A fence is the caller's token, or the hook's own heard version, and never an invention.",
			},
			{
				Label: "missing-version or stale-version",
				Kind: "fail",
				Note: "A proposal made against a moved file is refused, not amended.",
			},
			{
				Label: "The live proposal table is at maxProposals",
				Kind: "branch",
				Note: "A full table refuses rather than evicting the oldest proposal.",
			},
			{
				Label: "refused full (<n> live proposals)",
				Kind: "fail",
				Note: "The refusal carries the count, so the bound is visible.",
			},
			{
				Label: "proposed: the id and the sequence are assigned, and the proposal is stored",
				Kind: "pass",
				Note: "The hook never writes a file; applying is the approve and merge steps' work.",
			},
			{
				Label: "fs/observed",
				Kind: "seam",
				Note: "The fence tracker hears every write, silently, and writes nothing itself.",
			},
			{
				Label: "workspace_operate: the proposal table, best-effort",
				Kind: "store",
				Note: "An absent storage facility degrades to memory rather than failing the propose.",
			},
		],
		Rule: "The refusal is the product: every rule that fails returns a typed refusal, the fence is never invented, and a proposal is recorded rather than applied.",
	},

	// The batch decision, the nudge, the suggester, and the coach: one seam
	// each, and a decision that is not a file write.
	{
		Slug: "hook-dsh-batch-decision",
		Stage: [
			{
				Label: "batch/proposed",
				Kind: "seam",
				Note: "One proposal arrives from the suggester, with its intent, its targets, and its revision.",
			},
			{
				Label: "Record the proposal, and ignore a revision that is not newer",
				Kind: "step",
				Note: "The recorder is synchronous: no awaits, no file I/O, and no throws into the emit.",
			},
			{
				Label: "Sweep the decided entries past pendingTtlMs",
				Kind: "step",
				Note: "Expiry is lazy, decided on first touch, because the family runs no timers.",
			},
			{
				Label: "The policy block's commit verdict is approve",
				Kind: "branch",
				Note: "The shipped default, and the outer gate in front of the auto-approve knob.",
			},
			{
				Label: "The proposal stays pending, and the held line is written",
				Kind: "pass",
				Note: "The knob can never widen an approve verdict, and an off knob writes no held line.",
			},
			{
				Label: "autoApprove is on, and the intent, the target count, and the confidence all pass",
				Kind: "branch",
				Note: "The first batch of any intent class always requires the user.",
			},
			{
				Label: "Record the decision as approved by policy, and emit batch/decision",
				Kind: "step",
				Note: "The bus reaches the ingester and the live view.",
			},
			{
				Label: "Write the decision into the agent-team inbox",
				Kind: "step",
				Note: "The same channel plugin-dsh-batchstate reads, so the board's status follows the decision.",
			},
			{
				Label: "No live agent to address",
				Kind: "fail",
				Note: "The inbox line says so, and the decision stands.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "One line per decision, per refusal, and per handoff.",
			},
		],
		Rule: "The decision is the hook's product and not the ingester's: the hook records and announces it, writes no file, and the policy block's approve verdict is the outer gate in front of the auto-approve knob.",
	},
	{
		Slug: "hook-dsh-lesson-nudge",
		Stage: [
			{
				Label: "agent/status",
				Kind: "seam",
				Note: "The status emit. Only the idle edge is a moment a review may run.",
			},
			{
				Label: "The switch, the edge, and the agent",
				Kind: "step",
				Note: "enabled, then status is idle, then the payload carries an agent.",
			},
			{
				Label: "The lesson service is absent, or its tick says no review is due",
				Kind: "branch",
				Note: "The service is probed at every transition, because it may load after this hook.",
			},
			{
				Label: "No lesson service: one warning per process",
				Kind: "fail",
				Note: "The nudge is inert until the service loads, and the emit is never broken.",
			},
			{
				Label: "The session has reached maxReviewsPerSession",
				Kind: "branch",
				Note: "The hook's own runaway guard, on top of whatever interval the service reports.",
			},
			{
				Label: "cap reached (<n> reviews): the edge passes unnudged",
				Kind: "fail",
				Note: "The line carries the count, so a mis-set interval is visible rather than silent.",
			},
			{
				Label: "Claim the idle phase through agent.runMaintenance",
				Kind: "step",
				Note: "The review never shares the endpoint with the live turn.",
			},
			{
				Label: "Snapshot from the service, run the review, and ledger what it applied and queued",
				Kind: "step",
				Note: "One digest per session, because the projection is the review package's seam.",
			},
			{
				Label: "The review task rejects",
				Kind: "fail",
				Note: "The task is detached from the emit, so the rejection is warned rather than unhandled.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "The activation line, the cap line, and one line per review.",
			},
		],
		Rule: "The review runs on the idle edge and nowhere else: the listener returns at once, the maintenance task is detached, and a failure is a warning rather than a throw into the status publication.",
	},
	{
		Slug: "hook-dsh-test-suggester",
		Stage: [
			{
				Label: "tools/post-execute",
				Kind: "seam",
				Note: "A judged call settles, after the ccr's prepended listener, and next() is awaited first.",
			},
			{
				Label: "Classify the call probe into the pack's test intents",
				Kind: "step",
				Note: "The probe is the tool name plus the arguments JSON, so detection is deterministic.",
			},
			{
				Label: "The confidence clears the intent's threshold",
				Kind: "branch",
				Note: "The score is a sigmoid of the summed weights, so the gate is one number.",
			},
			{
				Label: "The workspace pack matches, and a candidate survives the exclusion list",
				Kind: "branch",
				Note: "A repository without a pack stays silent rather than borrowing this one.",
			},
			{
				Label: "abstained ambiguous, no-companions, or foreign-workspace",
				Kind: "fail",
				Note: "Each abstention is its own line, and no note is built.",
			},
			{
				Label: "Reconcile the package's smoke claims with the tree it has",
				Kind: "step",
				Note: "The README counts, the folders, the runner's roster, and the graph's test nodes, read-only.",
			},
			{
				Label: "A drift, a cooldown, a dedupe, or the per-turn cap",
				Kind: "branch",
				Note: "The noise controls gate the reconciliation note exactly like an intent note, and agent/pre-step resets the counter when a user message enters.",
			},
			{
				Label: "Prepend one additionalContexts notice, and leave the content alone",
				Kind: "pass",
				Note: "A ccr-compressed result is untouched, because the hook never replaces content.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "Every activation, refusal, and suggestion is one line.",
			},
		],
		Rule: "The hook advises and never rewrites: one notice is prepended to the decision, the content is untouched, and every refusal is an abstention with a line rather than a guess.",
	},
	{
		Slug: "hook-dsh-tool-coach",
		Stage: [
			{
				Label: "tools/post-execute",
				Kind: "seam",
				Note: "A terminal call settles; the coach judges bash, pwsh, and the configured judge tools.",
			},
			{
				Label: "Normalize the command, then classify it: write, read, search, discovery, control",
				Kind: "step",
				Note: "Heredoc bodies are stripped and substitutions masked before any row is matched.",
			},
			{
				Label: "The head is exempt: a build, a test, git, a package manager, or a file lifecycle",
				Kind: "branch",
				Note: "An exempt head dominates its pipe, so a diff redirected to a file is still exempt.",
			},
			{
				Label: "exempt <tool> <pattern>: one line, and the call is not judged",
				Kind: "pass",
				Note: "An exempt call neither strikes nor escalates, and the ledger is its only trace.",
			},
			{
				Label: "Tier 0: one offense line, and the strike lands in the window",
				Kind: "step",
				Note: "The model sees nothing at tier 0; the ledger is the only record.",
			},
			{
				Label: "The class reaches threshold strikes inside window judged calls, past the cooldown",
				Kind: "branch",
				Note: "The note is one per class, not one per call.",
			},
			{
				Label: "Tier 1: one notice with the live tool line, prepended as additionalContexts",
				Kind: "step",
				Note: "The tool name, the first sentence of its description, and its primary parameter come from the registry.",
			},
			{
				Label: "escalateThreshold offenses since the last note",
				Kind: "branch",
				Note: "The escalation is a section rather than a louder notice.",
			},
			{
				Label: "Tier 2: the persistent section, appended at system-prompt/assemble",
				Kind: "step",
				Note: "The section is rebuilt on its own TTL and again when the tool registry changes.",
			},
			{
				Label: "enforce is on, and the class has enforceThreshold strikes",
				Kind: "branch",
				Note: "Off by default; write is the narrow scope, and all adds read and search.",
			},
			{
				Label: "Tier 3: tools/pre-execute denies the call, with the lesson as the reason",
				Kind: "fail",
				Note: "Discovery and control are never denied, because flagging them hard dilutes the signal.",
			},
			{
				Label: "~/.dsh/playform/<identity>.log",
				Kind: "store",
				Note: "Every tier writes its own line, and the deny is byte-exact.",
			},
		],
		Rule: "The ladder escalates in one direction and only on judged terminal calls: the notice teaches, the section persists, the deny comes last and is off by default, and discovery and control are never denied.",
	},

	// The plugin packages. A plugin is not a listener, so its flow is not the
	// seam it answers at: it is the sequence its register does not show - the
	// gate before a write, the detach after apply, the fence before an apply,
	// the drop that keeps a packet inside its budget. Each of these is
	// transcribed from the package's entry module and from the Function module
	// the stage names, and the three the corpus draws - the factory, the core
	// library, and the ETS base - follow their own diagrams in
	// `Diagram/01-foundation/`.
	{
		Slug: "plugin-dsh-factory",
		Stage: [
			{
				Label: "loader apply",
				Kind: "seam",
				Note: "The bundle row mounts the class plugin, and the constructor registers pluginFactory on the context.",
			},
			{
				Label: "inject: a consumer declares fs and pluginFactory",
				Kind: "step",
				Note: "The loader holds the consumer PENDING until the service exists, so the bundle order never decides whether a hook can start.",
			},
			{
				Label: "State: unwrap the volatile cells, and map the shared fields and the module's own",
				Kind: "step",
				Note: "A volatile edit commits through the loader's update dispatch, in place, with no remount.",
			},
			{
				Label: "Gate: target, govern marker, actor, kind, stash idempotence, basename, exclusion",
				Kind: "step",
				Note: "The gate set logs nothing, because the consumer composes its own lines.",
			},
			{
				Label: "a gate verdict other than pass",
				Kind: "branch",
				Note: "The consumer stops before the write, and says so in its own line.",
			},
			{
				Label: "Write: intent, policy, observe, stash, transform, then the write itself",
				Kind: "step",
				Note: "One executor, with replaceIfVersion at the observed version.",
			},
			{
				Label: "Refresh: re-emit fs/observed with the fresh version, under the same actor",
				Kind: "step",
				Note: "The observation record stays current, so the author's next write is not a conflict.",
			},
			{
				Label: "a governed basename",
				Kind: "branch",
				Note: "The direct-govern fold runs the registered steps in order, awaited, one try/catch per step.",
			},
			{
				Label: "Append: the consumer's message to the logger and to its own ledger file",
				Kind: "step",
				Note: "The factory owns no string of its own.",
			},
			{
				Label: "~/.dsh/<identity>.log",
				Kind: "store",
				Note: "One log per module, with the module as the line prefix.",
			},
			{
				Label: "a consumer throw",
				Kind: "fail",
				Note: "Contained: one logger-only line, and the host keeps running.",
			},
		],
		Rule: "The factory owns the mechanism and none of the words: the consumer composes its line, and every primitive is contained, so a broken consumer cannot break the host.",
	},
	{
		Slug: "lib-dsh-core",
		Stage: [
			{
				Label: "import a named export from Target/",
				Kind: "step",
				Note: "No context, no service, and no registration.",
			},
			{
				Label: "the consumer's config supplies the parameters",
				Kind: "step",
				Note: "Replace takes a table and a replacement, Policy takes the defaults, and Chunk takes the transform.",
			},
			{
				Label: "the transform returns text and a count",
				Kind: "step",
				Note: "The count is the only thing that says whether anything changed.",
			},
			{
				Label: "the count is zero",
				Kind: "pass",
				Note: "An identity pass-through, not a copy: the caller keeps the original payload.",
			},
			{
				Label: "Refusal compares the author's manifest with the proposed one",
				Kind: "branch",
				Note: "A non-dependency section that would change aborts the rewrite.",
			},
			{
				Label: "the consumer logs the composed line through its own Append",
				Kind: "step",
				Note: "The core writes nothing itself.",
			},
			{
				Label: "no ledger, no logger, no Config",
				Kind: "fail",
				Note: "The core has no strings of its own and writes no file.",
			},
		],
		Rule: "The core fails open: a read failure falls back to the module's defaults, a contained throw becomes one logger line, and a refusal refuses rather than rewriting.",
	},
	{
		Slug: "ets-base-dsh",
		Stage: [
			{
				Label: "import: the ETS factory imports the four service layers from the base",
				Kind: "step",
			},
			{
				Label: "composition: Layer.mergeAll over Ledger, Journal, Write, and Govern",
				Kind: "step",
			},
			{
				Label: "runtime: Effect.scoped over Layer.build materializes one runtime, in the factory's constructor",
				Kind: "step",
				Note: "The layers are closures over the shell's instance state, so the runtime holds no scoped resources.",
			},
			{
				Label: "delegation: each factory method delegates into that runtime",
				Kind: "step",
				Note: "A sync method runs through Effect.runSync, and a promise seam through Effect.runPromise.",
			},
			{
				Label: "no RunOptions are passed",
				Kind: "branch",
				Note: "The caller's abort signal rides the write seam instead of interrupting a fiber.",
			},
			{
				Label: "consumers: the hooks consume the factory, never the runtime",
				Kind: "step",
				Note: "The base is not a plugin: no patch row, no Config, and no listener.",
			},
		],
		Rule: "The layer graph composes once at the factory's construction: the base supplies the mechanism, and the consuming modules keep their own strings.",
	},
	{
		Slug: "plugin-dsh-boot",
		Stage: [
			{
				Label: "loader apply",
				Kind: "seam",
				Note: "The bundle's one row is applied while the harness is still on its boot rail.",
			},
			{
				Label: "filter the mount list",
				Kind: "step",
				Note: "Every specifier that is a non-empty string, in the order the config lists them.",
			},
			{
				Label: "the list is empty",
				Kind: "branch",
				Note: "apply returns at once, and nothing is scheduled.",
			},
			{
				Label: "setImmediate: hand the rail back",
				Kind: "step",
				Note: "The loader's readiness is not held open by any import.",
			},
			{
				Label: "the specifier already mounted in this process",
				Kind: "branch",
				Note: "Skipped, because a re-applied fiber would double-register its services.",
			},
			{
				Label: "import the specifier, then mount it with an empty config",
				Kind: "step",
			},
			{
				Label: "record the specifier in the mounted set",
				Kind: "step",
				Note: "In memory only: the set is what the next turn consults.",
			},
			{
				Label: "an import or an apply throws",
				Kind: "fail",
				Note: "One warning, the specifier dropped from the set, and the rail continues.",
			},
		],
		Rule: "Nothing here may throw into the rail: the mount is contained per specifier, and a failure is a warning rather than a fatal.",
	},
	{
		Slug: "plugin-dsh-batch-edit",
		Stage: [
			{
				Label: "batch_edit, action=open",
				Kind: "seam",
				Note: "The scope is declared, and each path is inserted as a process at its observed version.",
			},
			{
				Label: "validate the prepared schema",
				Kind: "step",
				Note: "Searches and operations are checked fail-loud, and a miss is listed rather than guessed.",
			},
			{
				Label: "batch_edit, action=commit",
				Kind: "seam",
				Note: "The transition table is about to run.",
			},
			{
				Label: "Decide on the policy's write verdict",
				Kind: "branch",
				Note: "The shipped verdict is approve, so the apply is refused with the policy line, and nothing is read or written.",
			},
			{
				Label: "plan each file's operations",
				Kind: "step",
				Note: "A planning failure halts or errors that file alone.",
			},
			{
				Label: "Write through the executor, with the fresh-stat version guard and the govern marker",
				Kind: "step",
				Note: "Every write goes through the executor and nothing else.",
			},
			{
				Label: "a held file was touched externally",
				Kind: "branch",
				Note: "It halts with the stale reason, the machine stays open, and the agent resumes explicitly.",
			},
			{
				Label: "a write fails",
				Kind: "branch",
				Note: "The loop stops, and the unwritten remainder returns to observed.",
			},
			{
				Label: "settle: applied, failed, and halted per file, then the machine's committed line",
				Kind: "step",
			},
			{
				Label: "~/.dsh/playform/plugin-dsh-batch-edit.log",
				Kind: "store",
			},
		],
		Rule: "The gate is all-or-nothing on the apply loop, the machine stays open across a halt, and no plugin-owned timer exists anywhere.",
	},
	{
		Slug: "plugin-dsh-gitguard",
		Stage: [
			{
				Label: "tools/pre-execute on the terminal surface",
				Kind: "seam",
				Note: "The dispatch arrives before the command runs.",
			},
			{
				Label: "the working directory matches the exclusion list",
				Kind: "branch",
				Note: "Out of the guard's jurisdiction, silently: next() runs.",
			},
			{
				Label: "read the command, then split a compound into segments",
				Kind: "step",
				Note: "The split is on the shell separators, and empty segments are dropped.",
			},
			{
				Label: "no segment is a git command",
				Kind: "branch",
				Note: "The guard judges only git, so next() runs.",
			},
			{
				Label: "strict mode",
				Kind: "branch",
				Note: "Every git command is denied, the read-only checks included.",
			},
			{
				Label: "the subcommand is allow-listed",
				Kind: "branch",
				Note: "The allow list wins over the deny list, so this segment passes.",
			},
			{
				Label: "deny: the refusal replaces the dispatch, and next() is deliberately not called",
				Kind: "step",
			},
			{
				Label: "the ledger: denied <subcommand> (<reason>)",
				Kind: "store",
			},
			{
				Label: "no readable command, or the guard's own error",
				Kind: "fail",
				Note: "next() runs, because the guard never guesses and never breaks a legitimate call.",
			},
		],
		Rule: "A denial surfaces once and is ledgered for the audit; it never punishes, and the read-only checks are the whole allowed set.",
	},
	{
		Slug: "plugin-dsh-queue",
		Stage: [
			{
				Label: "queue_enqueue, or dshQueue.Enqueue",
				Kind: "seam",
				Note: "A task carries its spec verbatim, its role, its priority, and its dependencies.",
			},
			{
				Label: "dispatch: dependencies first, then priority, then enqueue order",
				Kind: "step",
			},
			{
				Label: "take a seat from the agent's pool, and flip the state to dispatched",
				Kind: "step",
			},
			{
				Label: "probe dshRoute and resolve the route, silently",
				Kind: "step",
				Note: "A missing service or a throw leaves the task unrouted, and the dispatch proceeds.",
			},
			{
				Label: "autoSpawn is off",
				Kind: "branch",
				Note: "The assignment is ledgered, and no spawn line is written at all.",
			},
			{
				Label: "the policy's spawn verdict is approve",
				Kind: "branch",
				Note: "The launch is held, the task keeps its seat, and it waits for the user.",
			},
			{
				Label: "spawn through the harness subagent service",
				Kind: "step",
				Note: "The spec goes verbatim, and the resolved route goes as the child's agentOptions.",
			},
			{
				Label: "the child's own result settles the task",
				Kind: "step",
				Note: "completed when the child stopped completed, and failed for any other stop reason.",
			},
			{
				Label: "a released seat pulls the next queued task",
				Kind: "step",
				Note: "The idle-slot automation, when both knobs are on.",
			},
			{
				Label: "the ledger and the P5 journal",
				Kind: "store",
				Note: "The restart reconcile's raw data.",
			},
		],
		Rule: "The policy is the outer gate and the knob the inner one: an approve verdict refuses the launch even with the knob on, and a knob that is off refuses on its own and writes no line.",
	},
	{
		Slug: "plugin-dsh-route",
		Stage: [
			{
				Label: "tools/pre-execute on the subagent tool",
				Kind: "seam",
				Note: "next() is awaited first, so the downstream listeners settle before any decision.",
			},
			{
				Label: "the exec is not the subagent tool, or the plugin is disabled",
				Kind: "branch",
				Note: "The downstream decision passes through unchanged.",
			},
			{
				Label: "read the launch: the declared route, the spec text, and the escalation marker",
				Kind: "step",
			},
			{
				Label: "the spec carries the escalation marker, and the policy enables it",
				Kind: "branch",
				Note: "The planner rung's model is verified against the live catalog before it is used.",
			},
			{
				Label: "resolve: the declared route is kept or corrected, and a missing one is resolved from the policy",
				Kind: "step",
				Note: "The task type comes from the declared role, else the keyword table, else the default role.",
			},
			{
				Label: "write the resolved triple back into the launch arguments",
				Kind: "step",
			},
			{
				Label: "append the route line to the prompt, once",
				Kind: "step",
				Note: "A prompt that already carries the hint is left alone.",
			},
			{
				Label: "the ledger: route <taskType> <source> <provider> <model> <effort>",
				Kind: "store",
			},
			{
				Label: "agent/pre-step at a delegated child's first step",
				Kind: "seam",
				Note: "The same hint, for a child started straight through the subagent service, which never passes a tool.",
			},
			{
				Label: "the resolution throws",
				Kind: "fail",
				Note: "One warning, and the launch passes through unrouted.",
			},
		],
		Rule: "The orchestrator never sees the model configuration: a resolved launch succeeds exactly as if the caller had passed the right values, and the ledger is the only record.",
	},
	{
		Slug: "plugin-dsh-pass-on",
		Stage: [
			{
				Label: "Prepare(intent, origin)",
				Kind: "seam",
				Note: "An intent names one of the three shipped kinds, and its targets.",
			},
			{
				Label: "the plugin is disabled, the kind is unknown, or no target resolves",
				Kind: "branch",
				Note: "No batch at all, never an empty one.",
			},
			{
				Label: "read each target, and hash its content",
				Kind: "step",
				Note: "The hash is the version the apply will check.",
			},
			{
				Label: "synthesize the operation, and skip a target that would not change",
				Kind: "step",
				Note: "A target with no effective operation is not an operation.",
			},
			{
				Label: "render the bounded preview of the matched region, before and after",
				Kind: "step",
			},
			{
				Label: "digest the targets and the operations",
				Kind: "step",
				Note: "The proposal id is the digest's head.",
			},
			{
				Label: "publish the canonical batch on batch/proposed",
				Kind: "step",
				Note: "The decision hook records it, and the ingester holds it.",
			},
			{
				Label: "deliver the proposal block into the agent-team inbox",
				Kind: "step",
				Note: "The board splices it, and no turn is started.",
			},
			{
				Label: "no live agent for the origin",
				Kind: "branch",
				Note: "An honest inbox none line, and the bus emission still carries the proposal.",
			},
			{
				Label: "~/.dsh/playform/plugin-dsh-pass-on.log",
				Kind: "store",
			},
		],
		Rule: "The pass-on is read-only: it computes the proposal, the decision decides, and the ingester applies.",
	},
	{
		Slug: "plugin-dsh-ingester",
		Stage: [
			{
				Label: "batch/proposed",
				Kind: "seam",
				Note: "The proposal is recorded within the ring bound.",
			},
			{
				Label: "batch/decision",
				Kind: "seam",
				Note: "The decision names the proposal it resolves.",
			},
			{
				Label: "the proposal was never recorded",
				Kind: "branch",
				Note: "Refused as unknown, and nothing is applied against a guessed proposal.",
			},
			{
				Label: "claim: one apply per decision, keyed by proposal, outcome, and time",
				Kind: "step",
			},
			{
				Label: "validate: the decision references this proposal, the outcome is approved, it is not expired, and it carries operations",
				Kind: "step",
			},
			{
				Label: "the validation fails",
				Kind: "branch",
				Note: "Every target is reported skipped, and the run is rejected before any write.",
			},
			{
				Label: "per target: resolve, stat, and hash the current content",
				Kind: "step",
			},
			{
				Label: "the hash differs from the prepare-time version",
				Kind: "branch",
				Note: "A conflict, not a silent overwrite; the run stops at that target by default.",
			},
			{
				Label: "apply one version-fenced literal edit per operation",
				Kind: "step",
				Note: "A racing write between edits fails the version guard, and lands as recovery-required.",
			},
			{
				Label: "report the outcome to the feedback member, and journal per target",
				Kind: "step",
			},
			{
				Label: "~/.dsh/playform/plugin-dsh-ingester.log",
				Kind: "store",
			},
		],
		Rule: "The ingester is the only writer of the batch flow, and every failure is reported honestly: a conflict, a recovery, or a skip, never an invisible intermediate state.",
	},
	{
		Slug: "plugin-dsh-normalize-file",
		Stage: [
			{
				Label: "the normalize-file tool",
				Kind: "seam",
				Note: "One agent-chosen file per call.",
			},
			{
				Label: "the files scope is off",
				Kind: "branch",
				Note: "The unchanged result returns, with no read, no write, and no line.",
			},
			{
				Label: "resolve, read, and apply the six tables in order",
				Kind: "step",
				Note: "Dashes, quotes, ellipsis, spaces, invisible, then fullwidth.",
			},
			{
				Label: "the count is zero",
				Kind: "branch",
				Note: "Nothing is written, and no line is written either.",
			},
			{
				Label: "write through the factory's executor, behind the version fence",
				Kind: "step",
			},
			{
				Label: "journal one normalized record, and append the count line",
				Kind: "step",
			},
			{
				Label: "~/.dsh/playform/plugin-dsh-normalize-file.log",
				Kind: "store",
			},
			{
				Label: "normalize-overpass, when a scope is armed",
				Kind: "seam",
				Note: "The tool-results arm prepends, and the step-batch arm rides agent/pre-step.",
			},
			{
				Label: "a failed read, or an aborted write",
				Kind: "fail",
				Note: "No count line, and the tool reports the failure.",
			},
		],
		Rule: "The rewrite is explicit and visible: the tool is the only trigger, nothing rewrites in the background, and a zero count writes nothing at all.",
	},
	{
		Slug: "plugin-dsh-cost",
		Stage: [
			{
				Label: "session/event",
				Kind: "seam",
				Note: "A committed session event arrives; the recorder pushes it into the capture queue and never awaits.",
			},
			{
				Label: "queue by session",
				Kind: "step",
				Note: "No I/O on the event path, so a throw can never fail the tool call that produced the event.",
			},
			{
				Label: "session/flush",
				Kind: "seam",
				Note: "The session's durability checkpoint.",
			},
			{
				Label: "drain: price each call from the provider's usage, and split it across the files the turn touched",
				Kind: "step",
			},
			{
				Label: "attribute the output side by changed bytes, and the input side by each file's cached and uncached mass",
				Kind: "step",
			},
			{
				Label: "record the stage, the branch, and the read-before-edit at capture time",
				Kind: "step",
			},
			{
				Label: "rollup: rebuild exactly the UTC days the flush's events landed in",
				Kind: "step",
			},
			{
				Label: "a command reads the rollup, the views, or the assessment",
				Kind: "step",
			},
			{
				Label: "~/.dsh/cost/ledger.db",
				Kind: "store",
				Note: "One SQLite file: the price rows, the call and touch grain, the allocations, the rollup, and the views.",
			},
			{
				Label: "the ledger does not open",
				Kind: "fail",
				Note: "The mount fails loud, and no listener is registered behind a closed database.",
			},
		],
		Rule: "Telemetry only: no tool, no prompt section, and no model-visible message, and every figure is read from the provider's own usage.",
	},
	{
		Slug: "plugin-dsh-batchstate",
		Stage: [
			{
				Label: "the write API: setTask, setStatus, setScope, queue, setGate, clear",
				Kind: "seam",
				Note: "The parent's activations and the agents' phase reports flow through the plugin.",
			},
			{
				Label: "emit batch/state-change",
				Kind: "step",
				Note: "Every change is an event the plugin owns.",
			},
			{
				Label: "persist the full state",
				Kind: "step",
				Note: "The storage domain first, and the JSON file only when no domain opens.",
			},
			{
				Label: "compile the block from the state",
				Kind: "step",
				Note: "Pure functions, recompiled on every change.",
			},
			{
				Label: "agent/inbox/spliced, or the live agent/inbox/inserted",
				Kind: "seam",
				Note: "A batch proposal or decision arrives as text.",
			},
			{
				Label: "parse the first block, and de-duplicate on the message id",
				Kind: "step",
			},
			{
				Label: "the message carries no batch block",
				Kind: "branch",
				Note: "Ordinary messages are silence.",
			},
			{
				Label: "project the proposal or the decision into the board",
				Kind: "step",
				Note: "The queue line is read from the queue service, never recomputed.",
			},
			{
				Label: "the batch_state domain, else ~/.dsh/batch-state.json",
				Kind: "store",
			},
		],
		Rule: "The board records and projects, and every block is a compiled output the model only reads: nothing the model writes enters it.",
	},
	{
		Slug: "plugin-dsh-feedback",
		Stage: [
			{
				Label: "Record(block)",
				Kind: "seam",
				Note: "A completion's honest block enters its session's record.",
			},
			{
				Label: "journal the event",
				Kind: "step",
				Note: "One JSONL line per event.",
			},
			{
				Label: "Push(block, parent)",
				Kind: "step",
				Note: "One hop up the parentage, and one link added to the transferred chain.",
			},
			{
				Label: "the chain reaches the hop bound",
				Kind: "branch",
				Note: "The block is dropped, and the drop is journaled.",
			},
			{
				Label: "Delta(session, agent, text)",
				Kind: "step",
				Note: "The parent appends, and never edits or sanitizes.",
			},
			{
				Label: "Read(session, agent, reader)",
				Kind: "step",
				Note: "The recipient's optional read, recorded as read-at.",
			},
			{
				Label: "Summary(session)",
				Kind: "step",
				Note: "Counts, the unread count, the word clusters, and the batch outcomes.",
			},
			{
				Label: "Outcome, from the ingester after an apply",
				Kind: "seam",
				Note: "The batch outcome lands in the journal and in the summary.",
			},
			{
				Label: "~/.dsh/playform/plugin-dsh-feedback.log",
				Kind: "store",
			},
		],
		Rule: "Nothing sanitizes the honest content: the parent appends, the read is a choice, and the user's override wins.",
	},
	{
		Slug: "plugin-dsh-lesson-review",
		Stage: [
			{
				Label: "the nudge hook calls Review from the idle phase",
				Kind: "seam",
				Note: "The service owns the review, and never the trigger.",
			},
			{
				Label: "digest: the conversation snapshot, a verbatim tail, older turns collapsed, a hard cap from the front",
				Kind: "step",
			},
			{
				Label: "ask once with the constant prompt",
				Kind: "step",
			},
			{
				Label: "parse the reply strictly as one JSON object with five operation kinds",
				Kind: "step",
			},
			{
				Label: "judge every operation: class-level name, no incident narration, no bare negative, read-before-write, pins",
				Kind: "step",
			},
			{
				Label: "the write verdict is approve",
				Kind: "branch",
				Note: "The accepted operation is queued, so nothing reaches the corpus unasked.",
			},
			{
				Label: "the judge refuses an operation",
				Kind: "branch",
				Note: "It is reported, and never applied.",
			},
			{
				Label: "apply through the guarded corpus write, with the exact-file fence",
				Kind: "step",
			},
			{
				Label: "report the run in run.json and REPORT.md, and write one ledger line",
				Kind: "step",
			},
			{
				Label: "Curate: active to stale to archived, with the pinned, the foreign, and the unused protected",
				Kind: "step",
			},
			{
				Label: "~/.dsh/lesson/reports, and the pending queue",
				Kind: "store",
			},
		],
		Rule: "Propose, never publish: the shipped verdict queues every accepted operation, agreement operations are always queued, and even an auto verdict keeps the judge and the fence.",
	},
	{
		Slug: "plugin-dsh-pattern",
		Stage: [
			{
				Label: "Match(context)",
				Kind: "seam",
				Note: "A tool name, and a text fragment.",
			},
			{
				Label: "look up the registry, and score the candidates",
				Kind: "step",
				Note: "A lookup plus arithmetic, never a model call.",
			},
			{
				Label: "the top score is under the match threshold",
				Kind: "branch",
				Note: "The empty result is the abstention.",
			},
			{
				Label: "the top two scores sit within the ambiguity epsilon",
				Kind: "branch",
				Note: "Two patterns matching equally is not a decision.",
			},
			{
				Label: "return the ranked matches, up to the match bound",
				Kind: "step",
			},
			{
				Label: "Record(id, outcome)",
				Kind: "seam",
				Note: "accepted, rejected, applied, or failed moves the confidence.",
			},
			{
				Label: "Decay: the half-life sweep toward the neutral floor",
				Kind: "step",
			},
			{
				Label: "Save: the whole registry, plus the saved-at record",
				Kind: "step",
				Note: "The KV domain first, and the JSON snapshot as the fallback.",
			},
			{
				Label: "the pattern domain, else ~/.dsh/pattern/registry.json",
				Kind: "store",
			},
		],
		Rule: "The cold start is the shipped catalog rather than an empty registry, and the ledger records every Record call so precision is measured rather than assumed.",
	},
	{
		Slug: "plugin-dsh-cost-analysis",
		Stage: [
			{
				Label: "the analysis command",
				Kind: "seam",
				Note: "A scope: file, project, client, model, or session.",
			},
			{
				Label: "open the ledger with readOnly",
				Kind: "step",
				Note: "An open failure is recorded, and the mount continues.",
			},
			{
				Label: "the ledger is not open",
				Kind: "branch",
				Note: "The command says so, and the plugin still loads.",
			},
			{
				Label: "credit: the cache saving each read produced, minus the cache-write premium",
				Kind: "step",
			},
			{
				Label: "effectiveness, lines, overhead, and cache over the same scope",
				Kind: "step",
			},
			{
				Label: "the scope has no rows",
				Kind: "branch",
				Note: "The ledger is empty, said plainly.",
			},
			{
				Label: "render the readings as short text",
				Kind: "step",
				Note: "Outside model history, because a command is not a message.",
			},
		],
		Rule: "Read-only in the strict sense: no row written, no table created, and no listener registered, so the ledger keeps recording facts while the judgement lives here.",
	},
	{
		Slug: "plugin-dsh-workspace",
		Stage: [
			{
				Label: "workspace_map, find, expand, or context",
				Kind: "seam",
				Note: "A read of the graph service.",
			},
			{
				Label: "the graph is empty",
				Kind: "branch",
				Note: "The map reports zero files, honestly; the index trigger is the answer.",
			},
			{
				Label: "query the graph through the tool's own bounds",
				Kind: "step",
				Note: "Depth capped, limits clamped, and pagination by cursor.",
			},
			{
				Label: "render a compact table plus ids",
				Kind: "step",
				Note: "Never a file body.",
			},
			{
				Label: "workspace_index",
				Kind: "seam",
				Note: "The one tool that changes the graph.",
			},
			{
				Label: "delegate the walk to indexWorkspace",
				Kind: "step",
				Note: "The agent never touches the filesystem itself.",
			},
			{
				Label: "the graph's own storage domain",
				Kind: "store",
			},
		],
		Rule: "The conversation addresses the workspace through this plugin and nothing else: the stamps, the indexes, the journals, and the gates stay invisible until an event surfaces them.",
	},
	{
		Slug: "plugin-dsh-workspace-authority",
		Stage: [
			{
				Label: "grant(holder, resource, operations, expiry, delegation)",
				Kind: "seam",
				Note: "A capability answers what the actor may do.",
			},
			{
				Label: "the authority is disabled",
				Kind: "branch",
				Note: "A byte-stable refusal, and nothing is granted.",
			},
			{
				Label: "acquire(holder, resource, ttl)",
				Kind: "step",
				Note: "A lease answers for how long, and expires lazily.",
			},
			{
				Label: "residence(resource, kind, weight)",
				Kind: "step",
				Note: "A residency answers what stays in store, and the weight only ranks.",
			},
			{
				Label: "evict(resources)",
				Kind: "seam",
				Note: "The disposition pass.",
			},
			{
				Label: "sort the candidates by weight, descending",
				Kind: "step",
				Note: "The weight orders the candidates, and decides nothing.",
			},
			{
				Label: "an open lease, or an active capability within its grace",
				Kind: "branch",
				Note: "keep, forced over the rule table.",
			},
			{
				Label: "the rule table decides keep, defer, evict, discard, or promote",
				Kind: "step",
			},
			{
				Label: "the residency set and the graveyard",
				Kind: "store",
				Note: "evict is recoverable, and discard is not.",
			},
		],
		Rule: "The license decides and the weight only ranks: priority, retention, and permission are never interchangeable.",
	},
	{
		Slug: "plugin-dsh-workspace-context",
		Stage: [
			{
				Label: "packet(query)",
				Kind: "seam",
				Note: "A node id or a query, a lens, and a budget.",
			},
			{
				Label: "probe the graph's snapshot, and filter through the lens",
				Kind: "step",
				Note: "An absent sibling still renders, with an honest open line.",
			},
			{
				Label: "resolve the focus, rank the neighbors by edge strength, and bound each section",
				Kind: "step",
			},
			{
				Label: "render the eight sections, and measure the text in tokens",
				Kind: "step",
			},
			{
				Label: "the packet is over the target",
				Kind: "branch",
				Note: "The weakest neighbors drop first, one at a time.",
			},
			{
				Label: "it is still over the hard cap",
				Kind: "branch",
				Note: "The open lines go, then the evidence lines, and the clamp is ledgered.",
			},
			{
				Label: "memoize the packet under the query and the revision",
				Kind: "step",
				Note: "A hit returns the same object, and writes no second line.",
			},
			{
				Label: "graph/invalidated clears the memo",
				Kind: "step",
				Note: "The next identical query rebuilds against the new revision.",
			},
			{
				Label: "the ledger: context: packet, and context: clamped",
				Kind: "store",
			},
		],
		Rule: "The budget is a sequence of drops, not a truncation: the weakest neighbor goes before any section does, and every clamp is one line.",
	},
	{
		Slug: "plugin-dsh-workspace-evidence",
		Stage: [
			{
				Label: "validate(id, kind, subject, dependencies, verdict)",
				Kind: "seam",
				Note: "One validation object, with the caller's own verdict.",
			},
			{
				Label: "the kind is outside the four",
				Kind: "branch",
				Note: "Refused at the call boundary.",
			},
			{
				Label: "store the object with its dependencies and the service's own sequence",
				Kind: "step",
			},
			{
				Label: "fs/observed, through the factory's Wire on the root context",
				Kind: "seam",
				Note: "A dependency changed.",
			},
			{
				Label: "the event carries the service's own actor, an excluded path, or an absent observation",
				Kind: "branch",
				Note: "Ignored, each with its own line.",
			},
			{
				Label: "the same path carries the same version within the window",
				Kind: "branch",
				Note: "Dropped silently, because that state's pass already ran.",
			},
			{
				Label: "invalidate(key): one pass over the fresh objects",
				Kind: "step",
			},
			{
				Label: "mark every object that declares the key stale, and ledger each one",
				Kind: "step",
			},
			{
				Label: "the workspace_evidence domain, and the ledger",
				Kind: "store",
			},
		],
		Rule: "A stale object is never guessed back to fresh: a revalidation is a new object that supersedes the old one.",
	},
	{
		Slug: "plugin-dsh-workspace-graph",
		Stage: [
			{
				Label: "observe/stamp, on the family's trace bus",
				Kind: "seam",
				Note: "The indexer is inferred from the events, not a separate process.",
			},
			{
				Label: "coalesce by path",
				Kind: "step",
				Note: "One in-flight re-index per path, and no timer.",
			},
			{
				Label: "indexFile: resolve, stat, and run the gates",
				Kind: "step",
				Note: "Enabled, excluded, included, file type, language, and size.",
			},
			{
				Label: "read, parse, and ask the semantics service for the references",
				Kind: "step",
				Note: "No service, or an undefined answer, means no reference edges.",
			},
			{
				Label: "store the record, bump the revision, and persist the meta record",
				Kind: "step",
			},
			{
				Label: "emit graph/indexed, or graph/invalidated for an absent or replaced record",
				Kind: "step",
			},
			{
				Label: "indexWorkspace: a deterministic walk, one indexFile per candidate, capped at the file bound",
				Kind: "step",
			},
			{
				Label: "the workspace_graph domain, else the in-memory mirror",
				Kind: "store",
			},
		],
		Rule: "The deferred kinds are not faked, and a reference that names no symbol node of the same file is dropped rather than turned into a dangling edge.",
	},
	{
		Slug: "plugin-dsh-workspace-reflect",
		Stage: [
			{
				Label: "replace, rename, connect, or act",
				Kind: "seam",
				Note: "One call carries the whole transformation.",
			},
			{
				Label: "the policy's write verdict is approve",
				Kind: "branch",
				Note: "The operation is held with its own line, and zero writes reach the filesystem.",
			},
			{
				Label: "resolve the target: a node id and fingerprint, or an explicit span",
				Kind: "step",
				Note: "The span guard rejects a span outside the file, or one wider than the block bound.",
			},
			{
				Label: "the fingerprint does not match the current text",
				Kind: "branch",
				Note: "rejected, and nothing is written.",
			},
			{
				Label: "publish through the guarded write: the version fence, the sandbox policy, the stash",
				Kind: "step",
			},
			{
				Label: "carry: ask the graph to re-index the changed file",
				Kind: "step",
				Note: "An absent graph is an honest skip.",
			},
			{
				Label: "the reply union, and the ledger",
				Kind: "store",
			},
		],
		Rule: "The policy is the outer check and the fingerprint the inner one, and the reply is part of the type rather than a boolean or a throw.",
	},
	{
		Slug: "plugin-dsh-workspace-semantics",
		Stage: [
			{
				Label: "fs/observed, through the factory's Wire on the root context",
				Kind: "seam",
				Note: "The index trigger.",
			},
			{
				Label: "the event carries the service's own actor, an excluded path, or a repeat version",
				Kind: "branch",
				Note: "Ignored, or dropped silently.",
			},
			{
				Label: "drop the stale model for the path, and advance the monotonic revision",
				Kind: "step",
			},
			{
				Label: "resolve(path)",
				Kind: "seam",
				Note: "A lazily built knowledge graph, through the adapter for the file type.",
			},
			{
				Label: "symbol, references, and the import dependencies",
				Kind: "step",
			},
			{
				Label: "deepen the references through the lsp seam, when the harness provides one",
				Kind: "step",
				Note: "Same-file locations only, and every cannot-answer path falls back to the lexical list.",
			},
			{
				Label: "rename(path, span, to): the per-adapter plan",
				Kind: "step",
				Note: "The plan goes to the operate proposals, and the service never writes.",
			},
			{
				Label: "no adapter, or an adapter that cannot be certain",
				Kind: "branch",
				Note: "undefined plus one line, never a guessed plan.",
			},
			{
				Label: "the workspace_semantics domain, and the ledger",
				Kind: "store",
			},
		],
		Rule: "The rename means something different per format, so the plan is the adapter's, and the service only refuses to guess.",
	},
];

/** The flow of one package, or undefined when the site has not authored one. */
export function CurrentFor(Slug: string): Current | undefined {
	const Entry = Current.find(
		(Item) => Item.Slug === Slug || Item.Slug === Slug.replace(/^ets-/, ""),
	);

	if (Entry === undefined) {
		return undefined;
	}

	// The ledger file is named for the package identity, so it is the one
	// thing the two trees do not share: the data carries `<identity>` and the
	// lookup fills it with the slug the page was built for, so a Classic page
	// prints `hook-dsh-...log` and its twin prints `ets-hook-dsh-...log`.
	return {
		...Entry,
		Stage: Entry.Stage.map((Item) => ({
			...Item,
			Label: Item.Label.replace("<identity>", Slug),
		})),
	};
}

export default Current;
