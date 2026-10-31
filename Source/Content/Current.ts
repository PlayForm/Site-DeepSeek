// One package's control flow, as the site draws it: the seam it answers at,
// the work in the order it happens, the branch that decides, the ledger it
// writes, and the path that fails.
//
// Every record is transcribed by hand from two places, and a record is only
// written when both agree:
//
//   * the corpus at `Diagram/`, one Mermaid flowchart per package, which is
//     the package's own control flow drawn by the diagram lane - for the
//     governance trio in `02-governance/` and the tool coach in
//     `04-guardians/`;
//   * the package's `Source/` tree in `Classic/packages/<slug>/` and
//     `EffectTS/packages/ets-<slug>/`, which is the arbiter when the two
//     disagree: `Source/Function/Apply.ts` for the listeners and the
//     registration order, `Source/Function/Observe.ts` for the fs/observed
//     body, and the service module for a hook whose work is a call rather
//     than an event.
//
// The eleven packages with no corpus diagram are authored from their
// `Apply.ts` alone: the workspace family, the batch decision, the lesson
// nudge, and the test suggester. A flow is data rather than prose because
// the page compares one package against another, and a sentence would have
// to be read twice to see the same shape.
//
// The twins do not differ in control flow. Every `ets-` package registers the
// same listeners in the same order and composes the same ledger strings; the
// ETS tree swaps the factory's own base import, which is a fact about the
// package's dependencies rather than about its flow. The lookup strips the
// prefix for that reason, the way `PortraitFor` does.

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
				Label: "~/.dsh/playform/hook-dsh-package-governor.log",
				Kind: "store",
				Note: "One global ledger, with the module identity hook-dsh-governor-package.",
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
				Label: "~/.dsh/playform/hook-dsh-package-pinner.log",
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
				Label: "~/.dsh/playform/hook-dsh-cargo-governor.log",
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
				Note: "A malformed event is caught and ledgered rather than thrown into the emitter.",
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
				Label: "~/.dsh/playform/hook-dsh-workspace-monitor.log",
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
				Label: "~/.dsh/playform/hook-dsh-workspace-govern.log",
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
				Label: "~/.dsh/playform/hook-dsh-workspace-journal.log",
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
				Label: "~/.dsh/playform/hook-dsh-batch-decision.log",
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
				Label: "~/.dsh/playform/hook-dsh-lesson-nudge.log",
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
				Label: "~/.dsh/playform/hook-dsh-test-suggester.log",
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
				Label: "~/.dsh/playform/hook-dsh-tool-coach.log",
				Kind: "store",
				Note: "Every tier writes its own line, and the deny is byte-exact.",
			},
		],
		Rule: "The ladder escalates in one direction and only on judged terminal calls: the notice teaches, the section persists, the deny comes last and is off by default, and discovery and control are never denied.",
	},
];

/** The flow of one package, or undefined when the site has not authored one. */
export function CurrentFor(Slug: string): Current | undefined {
	return Current.find((Entry) => Entry.Slug === Slug || Entry.Slug === Slug.replace(/^ets-/, ""));
}

export default Current;
