import "@Stylesheet/Component/Flow.scss";

import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";

// Flow: the turn as a graph. One node per stage, one edge from each stage to
// the next, and a node lights up when the family stands at any of its seams.
// Cytoscape renders it, breadth-first left to right, so the drawing reads as
// the turn reads: left to right, with the family's stations lit.

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
				? [{ data: { id: `edge-${Entry.Index}`, source: `stage-${Entry.Index}`, target: `stage-${Entry.Index + 1}` } }]
				: []),
		]),
	);

	onMount(() => {
		let Live = true;

		(async () => {
			const Cytoscape = (await import("cytoscape")).default;
			if (!Live || !Host) return;

			Instance = Cytoscape({
				container: Host,
				elements: Data(),
				style: [
					{
						selector: "node",
						style: {
							shape: "round-rectangle",
							"background-color": "#ffffff",
							"border-width": 1,
							"border-color": "#b9c6dc",
							label: "data(label)",
							"font-family": "IBM Plex Mono, monospace",
							"font-size": 10,
							color: "#0b0f19",
							"text-valign": "center",
							"text-halign": "center",
							width: 132,
							height: 44,
						},
					},
					{
						selector: 'node[family = 1]',
						style: {
							"background-color": "#ebf2ff",
							"border-color": "#0052ff",
							"border-width": 2,
						},
					},
					{
						selector: "node:selected",
						style: { "border-color": "#0052ff", "border-width": 3 },
					},
					{
						selector: "edge",
						style: {
							width: 1,
							"line-color": "#cbd5e1",
							"target-arrow-color": "#cbd5e1",
							"target-arrow-shape": "triangle",
							"curve-style": "bezier",
							"arrow-scale": 0.7,
						},
					},
				],
				layout: { name: "breadthfirst", directed: true, padding: 16, spacingFactor: 1.1 },
				userZoomingEnabled: false,
				userPanningEnabled: false,
				boxSelectionEnabled: false,
			});

			Instance.on("tap", "node", (Event) => {
				const Id = String(Event.target.id()).replace("stage-", "");
				SetSelect(Props.Stage.find((Entry) => String(Entry.Index) === Id));
			});

			Instance.fit(undefined, 16);
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
		Instance.layout({ name: "breadthfirst", directed: true, padding: 16, spacingFactor: 1.1 }).run();
	});

	return (
		<div class="flow">
			<div class="flow__canvas" ref={Host} role="img" aria-label="The turn as a graph of stages" />

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

			<ul class="flow__list">
				<For each={Props.Stage}>
					{(Entry) => (
						<li class="flow__item" data-family={Count(Entry) > 0}>
							<button class="flow__pick" type="button" onClick={() => SetSelect(Entry)}>
								{String(Entry.Index).padStart(2, "0")} {Entry.Title}
							</button>
						</li>
					)}
				</For>
			</ul>
		</div>
	);
}
