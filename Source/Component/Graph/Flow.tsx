import "@Stylesheet/Component/Flow.scss";

import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";

// Flow: the turn as a graph. One node per stage, one edge from each stage to
// the next, and a node lights up when the family stands at any of its seams.
// Cytoscape renders it as one row, left to right, so the drawing reads as the
// turn reads, with the family's stations lit.

export interface FlowStage {
	Index: number;
	Title: string;
	Seam: string[];
}

interface Props {
	/** The stages, in the order the turn reaches them. */
	Stage: FlowStage[];
	/** The seams the family documents a hook at. */
	Family: string[];
}

// Breadth-first rotates the tree into the requested direction, and then skews
// it by the canvas aspect ratio. The skew stretches one row of twelve stages
// far beyond the canvas, and fit() shrinks the row until the labels are
// unreadable. Removing the skew keeps the rotation and the spacing the layout
// computed, so the row fits at the node's own size.
const Straighten = (
	Node: import("cytoscape").NodeSingular,
	Position: { x: number; y: number },
) => {
	const Box = Node.cy().extent();
	const Center = Box.x1 + Box.w / 2;
	const Skew = Box.w / Box.h;

	return { x: (Position.x - Center) / Skew + Center, y: Position.y };
};

// The row is twelve nodes wide, so the spacing is one node plus a gap rather
// than a share of the canvas.
const Layout = {
	name: "breadthfirst",
	directed: true,
	direction: "rightward",
	padding: 12,
	spacingFactor: 1.1,
	avoidOverlap: true,
	fit: true,
	transform: Straighten,
} as const;

export default function Flow(Props: Props) {
	const [Select, SetSelect] = createSignal<FlowStage | undefined>(Props.Stage[0]);
	let Host: HTMLDivElement | undefined;
	let Instance: import("cytoscape").Core | undefined;

	const Lit = createMemo(() => new Set(Props.Family));

	const Count = (Entry: FlowStage) => Entry.Seam.filter((Name) => Lit().has(Name)).length;

	const Data = createMemo(() =>
		Props.Stage.flatMap((Entry) => [
			{
				data: {
					id: `stage-${Entry.Index}`,
					label: `${String(Entry.Index).padStart(2, "0")} ${Entry.Title}`,
					family: Count(Entry) > 0 ? 1 : 0,
					seam: Entry.Seam.length,
				},
			},
			...(Entry.Index < Props.Stage.length
				? [
						{
							data: {
								id: `edge-${Entry.Index}`,
								source: `stage-${Entry.Index}`,
								target: `stage-${Entry.Index + 1}`,
							},
						},
					]
				: []),
		]),
	);

	onMount(() => {
		let Live = true;

		(async () => {
			const Cytoscape = (await import("cytoscape")).default;
			if (!Live || !Host) return;

			const Token = (Name: string) =>
				getComputedStyle(document.documentElement).getPropertyValue(Name).trim();

			Instance = Cytoscape({
				container: Host,
				elements: Data(),
				style: [
					{
						selector: "node",
						style: {
							shape: "round-rectangle",
							"background-color": Token("--color-surface"),
							"border-width": 1,
							"border-color": Token("--cabinet-line"),
							label: "data(label)",
							"font-family": "IBM Plex Mono, monospace",
							"font-size": 12,
							color: Token("--color-ink"),
							"text-valign": "center",
							"text-halign": "center",
							"text-wrap": "wrap",
							"text-max-width": "76px",
							width: 84,
							height: 48,
							"min-width": "84px",
							"min-height": "48px",
						},
					},
					{
						selector: "node[family = 1]",
						style: {
							"background-color": Token("--color-accent-soft"),
							"border-color": Token("--color-accent"),
							"border-width": 2,
						},
					},
					{
						selector: "node:selected",
						style: { "border-color": Token("--color-accent"), "border-width": 3 },
					},
					{
						selector: "edge",
						style: {
							width: 1,
							"line-color": Token("--color-line-strong"),
							"target-arrow-color": Token("--color-line-strong"),
							"target-arrow-shape": "triangle",
							"curve-style": "bezier",
							"arrow-scale": 0.7,
						},
					},
				],
				layout: Layout,
				userZoomingEnabled: false,
				userPanningEnabled: false,
				boxSelectionEnabled: false,
			});

			Instance.on("tap", "node", (Event) => {
				const Id = String(Event.target.id()).replace("stage-", "");
				SetSelect(Props.Stage.find((Entry) => String(Entry.Index) === Id));
			});

			Instance.fit(undefined, 12);
		})();

		onCleanup(() => {
			Live = false;
			Instance?.destroy();
			Instance = undefined;
		});
	});

	createEffect(() => {
		if (!Instance) return;
		Instance.elements().remove();
		Instance.add(Data());
		Instance.layout(Layout).run();
	});

	return (
		<div class="flow">
			<div
				class="flow__canvas"
				ref={Host}
				role="img"
				aria-label="The turn as a graph of stages"
			/>

			<ul class="flow__list">
				<For each={Props.Stage}>
					{(Entry) => (
						<li class="flow__item" data-family={Count(Entry) > 0}>
							<button
								class="flow__pick"
								type="button"
								onClick={() => SetSelect(Entry)}>
								{String(Entry.Index).padStart(2, "0")} {Entry.Title}
							</button>
						</li>
					)}
				</For>
			</ul>

			<Show when={Select()}>
				{(Entry) => (
					<aside class="flow__read">
						<p class="flow__title">
							{String(Entry().Index).padStart(2, "0")} {Entry().Title}
						</p>
						<p class="flow__seam">
							{Entry().Seam.length > 0 ? Entry().Seam.join(", ") : "no seam here"}
						</p>
						<p class="flow__note">
							{Count(Entry()) > 0
								? `${Count(Entry())} of these seams carry a family hook.`
								: "The family stands at none of this stage's seams."}
						</p>
					</aside>
				)}
			</Show>
		</div>
	);
}
