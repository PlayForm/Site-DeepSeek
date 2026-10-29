import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";
import type { Core, ElementDefinition, Stylesheet } from "cytoscape";

export interface ExplorerNode {
	Id: string;
	Label: string;
	Kind: string;
	Family: string;
	Version: string;
	Tests: number;
	Href: string;
	Dependencies: number;
	Dependents: number;
}

export interface ExplorerEdge {
	Id: string;
	Source: string;
	Target: string;
}

interface Props {
	Nodes: ExplorerNode[];
	Edges: ExplorerEdge[];
	Families: string[];
	Kinds: string[];
}

interface Modules {
	Cytoscape: typeof import("cytoscape").default;
	Fcose: unknown;
}

// The node colour is the kind, in the one chromatic family plus the neutrals.
const Colours: Record<string, string> = {
	plugin: "#0052ff",
	hook: "#0038b8",
	lib: "#64748b",
	client: "#94a3b8",
	base: "#0b0f19",
};

const Layouts = [
	{ Value: "fcose", Label: "Force" },
	{ Value: "concentric", Label: "Concentric" },
	{ Value: "grid", Label: "Grid" },
];

export default (Props: Props) => {
	const [Modules, SetModules] = createSignal<Modules>();
	const [Family, SetFamily] = createSignal("All");
	const [Mode, SetMode] = createSignal("fcose");
	const [Labels, SetLabels] = createSignal(false);
	const [Selected, SetSelected] = createSignal<ExplorerNode | null>(null);

	let Host: HTMLDivElement | undefined;
	let Instance: Core | undefined;

	const Visible = createMemo(() =>
		Props.Nodes.filter((Node) => Family() === "All" || Node.Family === Family()),
	);

	const Styles: Stylesheet[] = [
		{
			selector: "node",
			style: {
				"background-color": "data(Color)",
				width: "data(Size)",
				height: "data(Size)",
				label: "data(Label)",
				"font-family": "IBM Plex Mono, monospace",
				"font-size": 9,
				"text-valign": "bottom",
				"text-margin-y": 3,
				"text-opacity": 0,
				"border-width": 1,
				"border-color": "#ffffff",
			},
		},
		{
			selector: "edge",
			style: {
				width: 1,
				"line-color": "#dbe3f0",
				"target-arrow-color": "#b9c6dc",
				"target-arrow-shape": "triangle",
				"arrow-scale": 0.5,
				"curve-style": "bezier",
			},
		},
		{
			selector: ".labelled",
			style: { "text-opacity": 1 },
		},
		{
			selector: "node:selected",
			style: {
				"border-width": 2,
				"border-color": "#0052ff",
				"text-opacity": 1,
			},
		},
		{
			selector: "edge:selected",
			style: { "line-color": "#0052ff", "target-arrow-color": "#0052ff", width: 2 },
		},
		{
			selector: ".muted",
			style: { opacity: 0.12 },
		},
	];

	const Highlight = (Node: Core | undefined) => {
		if (!Instance) {
			return;
		}

		if (!Node) {
			Instance.elements().removeClass("muted");
			return;
		}

		const Neighbourhood = Node.closedNeighborhood();

		Instance.elements().addClass("muted");
		Neighbourhood.removeClass("muted");
	};

	onMount(() => {
		void (async () => {
			const Cytoscape = (await import("cytoscape")).default;
			const Fcose = (await import("cytoscape-fcose")).default;

			Cytoscape.use(Fcose as Parameters<typeof Cytoscape.use>[0]);
			SetModules({ Cytoscape, Fcose });
		})();
	});

	createEffect(() => {
		const Loaded = Modules();
		const FamilyNow = Family();
		const ModeNow = Mode();
		const LabelsNow = Labels();

		if (!Loaded || !Host) {
			return;
		}

		const Nodes = Props.Nodes.filter((Node) => FamilyNow === "All" || Node.Family === FamilyNow);
		const Ids = new Set(Nodes.map((Node) => Node.Id));
		const Edges = Props.Edges.filter((Edge) => Ids.has(Edge.Source) && Ids.has(Edge.Target));

		const Elements: ElementDefinition[] = [
			...Nodes.map((Node) => ({
				data: {
					id: Node.Id,
					Label: Node.Label,
					Kind: Node.Kind,
					Color: Colours[Node.Kind] ?? "#64748b",
					Size: 8 + Math.min(26, Node.Dependents * 3),
				},
			})),
			...Edges.map((Edge) => ({
				data: { id: Edge.Id, source: Edge.Source, target: Edge.Target },
			})),
		];

		Instance?.destroy();

		Instance = Loaded.Cytoscape({
			container: Host,
			elements: Elements,
			style: Styles,
			wheelSensitivity: 0.2,
			minZoom: 0.15,
			maxZoom: 3,
		});

		if (LabelsNow) {
			Instance.nodes().addClass("labelled");
		}

		Instance.on("tap", "node", (Event) => {
			const Id = Event.target.id() as string;

			SetSelected(Nodes.find((Node) => Node.Id === Id) ?? null);
			Highlight(Event.target);
		});

		Instance.on("tap", (Event) => {
			if (Event.target === Instance) {
				SetSelected(null);
				Highlight(undefined);
			}
		});

		Instance
			.layout({
				name: ModeNow,
				animate: false,
				fit: true,
				padding: 28,
				...(ModeNow === "fcose"
					? {
							quality: "default",
							randomize: true,
							nodeRepulsion: 3500,
							idealEdgeLength: 45,
							nodeSeparation: 45,
							packComponents: false,
							numIter: 1500,
						}
					: ModeNow === "concentric"
						? { concentric: (Element: Core) => Element.data("Size"), levelWidth: () => 3 }
						: {}),
			} as Parameters<Core["layout"]>[0])
			.run();
	});

	onCleanup(() => Instance?.destroy());

	return (
		<div class="explorer">
			<div class="explorer__toolbar">
				<div class="explorer__field">
					<span class="explorer__label">Release</span>
					<div class="explorer__options">
						<For each={["All", ...Props.Families]}>
							{(Entry) => (
								<button
									type="button"
									class="explorer__option"
									aria-pressed={Family() === Entry}
									onClick={() => SetFamily(Entry)}
								>
									{Entry}
								</button>
							)}
						</For>
					</div>
				</div>

				<div class="explorer__field">
					<label class="explorer__label" for="explorer-layout">
						Layout
					</label>
					<select
						id="explorer-layout"
						class="explorer__select"
						value={Mode()}
						onChange={(Event) => SetMode(Event.currentTarget.value)}
					>
						<For each={Layouts}>
							{(Entry) => <option value={Entry.Value}>{Entry.Label}</option>}
						</For>
					</select>
				</div>

				<label class="explorer__toggle">
					<input
						type="checkbox"
						checked={Labels()}
						onChange={(Event) => SetLabels(Event.currentTarget.checked)}
					/>
					<span>Labels</span>
				</label>

				<span class="explorer__count">{Visible().length} nodes</span>
			</div>

			<div class="explorer__body">
				<div
					class="explorer__canvas"
					ref={Host}
					role="img"
					aria-label={`The package graph: ${Visible().length} nodes, ${Props.Edges.length} dependency edges`}
				/>

				<aside class="explorer__inspector" aria-live="polite">
					<Show
						when={Selected()}
						fallback={
							<p class="explorer__empty">
								Select a node to read the package. The arrow runs from a dependency to the
								package that requires it.
							</p>
						}
					>
						{(Node) => (
							<div class="explorer__detail">
								<p class="explorer__kicker">
									{Node().Kind} / {Node().Family}
								</p>
								<a class="explorer__name" href={Node().Href}>
									{Node().Label}
								</a>
								<dl class="explorer__facts">
									<div>
										<dt>Version</dt>
										<dd>{Node().Version}</dd>
									</div>
									<div>
										<dt>Tests</dt>
										<dd>{Node().Tests}</dd>
									</div>
									<div>
										<dt>Requires</dt>
										<dd>{Node().Dependencies}</dd>
									</div>
									<div>
										<dt>Required by</dt>
										<dd>{Node().Dependents}</dd>
									</div>
								</dl>
							</div>
						)}
					</Show>
				</aside>
			</div>
		</div>
	);
};
