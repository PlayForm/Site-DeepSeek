// The authored presentation of a package whose work is not a listener: what
// it is, what it plugs into, what it does, and the one picture that fits its
// kind.
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
	Shape: "stream" | "layer" | "surface" | "buffer";
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
];

export function PortraitFor(Slug: string): Portrait | undefined {
	return Portrait.find((Entry) => Entry.Slug === Slug);
}

export default Portrait;
