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
	Node: ExplorerNode[];
	Edge: ExplorerEdge[];
	Family: string[];
	Kind: string[];
}

interface Module {
	Cytoscape: typeof import("cytoscape").default;
	Fcose: unknown;
}

// The node colour is the kind, in the one chromatic family plus the neutrals.
const Colour: Record<string, string> = {
	plugin: "#0052ff",
	hook: "#0038b8",
	lib: "#64748b",
	client: "#94a3b8",
	base: "#0b0f19",
};

const Layout = [
	{ Value: "fcose", Label: "Force" },
	{ Value: "concentric", Label: "Concentric" },
	{ Value: "grid", Label: "Grid" },
];

export default (Props: Props) => {
	const [Module, SetModule] = createSignal<Module>();
	const [Release, SetRelease] = createSignal("All");
	const [Mode, SetMode] = createSignal("fcose");
	const [Labels, SetLabels] = createSignal(false);
	const [Query, SetQuery] = createSignal("");
	const [Selected, SetSelected] = createSignal<ExplorerNode | null>(null);

	let Host: HTMLDivElement | undefined;
	let Instance: Core | undefined;

	const Visible = createMemo(() => {
		const Search = Query().trim().toLowerCase();

		return Props.Node.filter(
			(Entry) =>
				(Release() === "All" || Entry.Family === Release()) &&
				(Search === "" || Entry.Label.toLowerCase().includes(Search)),
		);
	});

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

	const Highlight = (Target: Core | undefined) => {
		if (!Instance) {
			return;
		}

		if (!Target) {
			Instance.elements().removeClass("muted");
			return;
		}

		const Neighbourhood = Target.closedNeighborhood();

		Instance.elements().addClass("muted");
		Neighbourhood.removeClass("muted");
	};

	onMount(() => {
		void (async () => {
			const Cytoscape = (await import("cytoscape")).default;
			const Fcose = (await import("cytoscape-fcose")).default;

			Cytoscape.use(Fcose as Parameters<typeof Cytoscape.use>[0]);
			SetModule({ Cytoscape, Fcose });
		})();
	});

	createEffect(() => {
		const Loaded = Module();
		const ReleaseNow = Release();
		const ModeNow = Mode();
		const LabelsNow = Labels();
		const SearchNow = Query().trim().toLowerCase();

		if (!Loaded || !Host) {
			return;
		}

		const Node = Props.Node.filter(
			(Entry) =>
				(ReleaseNow === "All" || Entry.Family === ReleaseNow) &&
				(SearchNow === "" || Entry.Label.toLowerCase().includes(SearchNow)),
		);
		const Ids = new Set(Node.map((Entry) => Entry.Id));
		const Edge = Props.Edge.filter((Entry) => Ids.has(Entry.Source) && Ids.has(Entry.Target));

		const Elements: ElementDefinition[] = [
			...Node.map((Entry) => ({
				data: {
					id: Entry.Id,
					Label: Entry.Label,
					Kind: Entry.Kind,
					Color: Colour[Entry.Kind] ?? "#64748b",
					Size: 8 + Math.min(26, Entry.Dependents * 3),
				},
			})),
			...Edge.map((Entry) => ({
				data: { id: Entry.Id, source: Entry.Source, target: Entry.Target },
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

			SetSelected(Node.find((Entry) => Entry.Id === Id) ?? null);
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
				<label class="explorer__field">
					<span class="explorer__label">Search</span>
					<input
						class="explorer__input"
						type="search"
						placeholder="Package"
						value={Query()}
						onInput={(Event) => SetQuery(Event.currentTarget.value)}
					/>
				</label>

				<div class="explorer__field">
					<span class="explorer__label">Release</span>
					<div class="explorer__options">
						<For each={["All", ...Props.Family]}>
							{(Entry) => (
								<button
									type="button"
									class="explorer__option"
									aria-pressed={Release() === Entry}
									onClick={() => SetRelease(Entry)}
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
						<For each={Layout}>
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

				<ul class="explorer__legend">
					<For each={Props.Kind}>
						{(Entry) => (
							<li>
								<span
									class="explorer__swatch"
									style={{ "background-color": Colour[Entry] ?? "#64748b" }}
									aria-hidden="true"
								/>
								{Entry}
							</li>
						)}
					</For>
				</ul>

				<span class="explorer__count">{Visible().length} nodes</span>
			</div>

			<div class="explorer__body">
				<div
					class="explorer__canvas"
					ref={Host}
					role="img"
					aria-label={`The package graph: ${Visible().length} nodes, ${Props.Edge.length} dependency edges`}
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
						{(Entry) => (
							<div class="explorer__detail">
								<p class="explorer__kicker">
									{Entry().Kind} / {Entry().Family}
								</p>
								<a class="explorer__name" href={Entry().Href}>
									{Entry().Label}
								</a>
								<dl class="explorer__facts">
									<div>
										<dt>Version</dt>
										<dd>{Entry().Version}</dd>
									</div>
									<div>
										<dt>Tests</dt>
										<dd>{Entry().Tests}</dd>
									</div>
									<div>
										<dt>Requires</dt>
										<dd>{Entry().Dependencies}</dd>
									</div>
									<div>
										<dt>Required by</dt>
										<dd>{Entry().Dependents}</dd>
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
