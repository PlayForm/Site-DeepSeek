import "@Stylesheet/Component/Compare.scss";

import { createSignal, onCleanup, onMount } from "solid-js";

// Compare: one text, two states, and a handle between them. The clean text is
// the page; the raw text is clipped to the handle's left edge, so dragging the
// handle reveals the model's own characters under the harness's rewrite. The
// handle is a slider to the keyboard, so the comparison works without a
// pointer, and the drag writes one style per frame rather than per event.

interface Props {
	/** The text the model wrote. */
	Raw: string;
	/** The text the harness kept. */
	Clean: string;
	/** Where the handle starts, as a percentage. */
	Start?: number;
}

export default function Compare(Props: Props) {
	const [Position, SetPosition] = createSignal(Props.Start ?? 50);
	let Stage: HTMLDivElement | undefined;

	const Move = (ClientX: number) => {
		if (!Stage) return;
		const Box = Stage.getBoundingClientRect();
		const Next = ((ClientX - Box.left) / Box.width) * 100;
		SetPosition(Math.min(100, Math.max(0, Next)));
	};

	const Key = (Event: KeyboardEvent) => {
		if (Event.key === "ArrowLeft") SetPosition(Math.max(0, Position() - 2));
		else if (Event.key === "ArrowRight") SetPosition(Math.min(100, Position() + 2));
		else if (Event.key === "Home") SetPosition(0);
		else if (Event.key === "End") SetPosition(100);
		else return;
		Event.preventDefault();
	};

	const Down = (Event: PointerEvent) => {
		const Target = Event.currentTarget as HTMLElement;
		Target.setPointerCapture(Event.pointerId);
		Move(Event.clientX);
	};

	const Drag = (Event: PointerEvent) => {
		if ((Event.currentTarget as HTMLElement).hasPointerCapture(Event.pointerId)) {
			Move(Event.clientX);
		}
	};

	const Up = (Event: PointerEvent) => {
		const Target = Event.currentTarget as HTMLElement;
		if (Target.hasPointerCapture(Event.pointerId))
			Target.releasePointerCapture(Event.pointerId);
	};

	return (
		<div class="compare">
			<div class="compare__stage" ref={Stage}>
				<div class="compare__pane compare__pane--clean">
					<span class="compare__label">Transcript</span>
					<span class="compare__text">{Props.Clean}</span>
				</div>

				<div
					class="compare__pane compare__pane--raw"
					style={{ "--compare": `${Position()}%` }}>
					<span class="compare__label">Model</span>
					<span class="compare__text">{Props.Raw}</span>
				</div>

				<div
					class="compare__handle"
					style={{ "--compare": `${Position()}%` }}
					role="slider"
					tabindex="0"
					aria-label="Reveal the text the model wrote"
					aria-valuemin="0"
					aria-valuemax="100"
					aria-valuenow={Math.round(Position())}
					onKeyDown={Key}
					onPointerDown={Down}
					onPointerMove={Drag}
					onPointerUp={Up}
					onPointerCancel={Up}>
					<span class="compare__grip" aria-hidden="true" />
				</div>
			</div>

			<p class="compare__hint">Drag the handle, or use the arrow keys, to compare.</p>
		</div>
	);
}
