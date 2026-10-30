import "@Stylesheet/Component/Inspector.scss";

import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from "solid-js";

// The inspector, made live. The document beside it is static HTML, so this
// island listens at the document level for a click on any line that carries a
// sequence number, and shows that record here. The tabs stay a real radio
// group, so the keyboard works whether or not the island ever hydrates.

export interface InspectorRecord {
	Index: number;
	Name: string;
	Kind: string;
	Proves: string;
	Durable: boolean;
}

interface Props {
	/** Every record the document shows, in log order. */
	Record: InspectorRecord[];
}

const Tab = ["Summary", "Payload", "Schema", "Timing"];

export default function InspectorLive(Props: Props) {
	const [Pick, SetPick] = createSignal(0);
	const [Open, SetOpen] = createSignal("Summary");

	const Entry = createMemo(() => Props.Record[Pick()] ?? Props.Record[0]);
	const Opening = createMemo(() => Props.Record.slice(0, 4));
	const Durable = createMemo(() => Opening().filter((Item) => Item.Durable).length);

	const Read = (Event: MouseEvent) => {
		const Line = (Event.target as HTMLElement | null)?.closest("[data-seq]");

		if (!Line) return;

		const Seq = Number(Line.getAttribute("data-seq"));
		const At = Props.Record.findIndex((Item) => Item.Index === Seq);

		if (At >= 0) SetPick(At);
	};

	const Key = (Event: KeyboardEvent) => {
		if (Event.key === "ArrowDown") {
			SetPick((At) => Math.min(Props.Record.length - 1, At + 1));
			Event.preventDefault();
		} else if (Event.key === "ArrowUp") {
			SetPick((At) => Math.max(0, At - 1));
			Event.preventDefault();
		}
	};

	onMount(() => {
		document.addEventListener("click", Read);
		onCleanup(() => document.removeEventListener("click", Read));
	});

	createEffect(() => {
		const Host = document.getElementById("inspector-live");

		if (!Host) return;

		Host.setAttribute("tabindex", "-1");
		Host.addEventListener("keydown", Key as unknown as EventListener);
		onCleanup(() => Host.removeEventListener("keydown", Key as unknown as EventListener));
	});

	return (
		<div class="inspector" id="inspector-live" aria-live="polite">
			<Show when={Entry()}>
				{(Item) => (
					<>
						<p class="inspector__subject">
							{String(Item().Index).padStart(2, "0")} {Item().Name}
						</p>

						<div class="inspector__tabs">
							<For each={Tab}>
								{(Label) => (
									<>
										<input
											class="inspector__radio"
											type="radio"
											name="inspector-live-tab"
											id={`inspector-live-${Label}`}
											checked={Open() === Label}
											onChange={() => SetOpen(Label)}
										/>
										<label
											class="inspector__tab"
											for={`inspector-live-${Label}`}>
											{Label}
										</label>
										<div class="inspector__panel">
											<Show when={Open() === Label}>
												<p class="inspector__text">
													{Label === "Summary" &&
														`${Item().Kind}, ${Item().Durable ? "durable" : "live"}. ${Opening().length} records open the turn: ${Durable()} durable.`}
													{Label === "Payload" && Item().Proves}
													{Label === "Schema" &&
														"A session event is a seq, a type, a time, and a data payload. The document beside this panel names the type of each record."}
													{Label === "Timing" &&
														"The log carries a wall clock per record; this slice shows the order and not the durations."}
												</p>
											</Show>
										</div>
									</>
								)}
							</For>
						</div>
					</>
				)}
			</Show>
		</div>
	);
}
