import "@Stylesheet/Component/LaneStrip.scss";

import { createMemo, For } from "solid-js";

import {
	FormatDuration,
	FormatTick,
	Plural,
	Record,
	ResourceOf,
	Share,
	SpanLabel,
	Step,
	Timeline,
	type Face,
	type Resource,
} from "@Content/Session";

interface Props {
	/** The face the lane draws. */
	Face: Face;
}

// The rows a reader scans, in the order the run reaches them.
const Band: Resource[] = ["Input", "Model", "Tools"];

export default function LaneStrip(Props: Props) {
	const Moment = createMemo(() => Timeline(Props.Face));
	const Total = createMemo(() => Moment().reduce((Sum, Item) => Math.max(Sum, Item.End), 0));
	const Span = (Name: Resource) =>
		Moment().filter((Item) => ResourceOf(Item.Entry) === Name && Item.Outcome.Took > 0);

	return (
		<div
			class="lane-strip"
			role="img"
			aria-label="The run as time: the input, the model, and the tools"
		>
			<div class="lane-strip__head">
				<span class="lane-strip__meta">
					{FormatDuration(Total())}&nbsp;of wall clock
				</span>
				<span class="lane-strip__meta">
					{Plural(Step.length, "step")},&nbsp;{Plural(Record.length, "record")}
				</span>
			</div>
			<For each={Band}>
				{(Name) => (
					<div class="lane-strip__row">
						<span class="lane-strip__name">{Name}</span>
						<span class="lane-strip__track">
							<For each={Span(Name)}>
								{(Item) => (
									<span
										class="lane-strip__span"
										data-resource={Name}
										data-state={Item.Outcome.State}
										style={{
											left: Share(Item.Start, Total()),
											width: Share(Item.Outcome.Took, Total()),
										}}
										title={`${SpanLabel(Item.Entry)}: ${FormatDuration(Item.Outcome.Took)}`}
									>
										<span class="lane-strip__text">{SpanLabel(Item.Entry)}</span>
									</span>
								)}
							</For>
						</span>
					</div>
				)}
			</For>
			<div class="lane-strip__axis">
				<For each={[0, 0.25, 0.5, 0.75, 1]}>
					{(Ratio) => <span class="lane-strip__tick">{FormatTick(Total() * Ratio)}</span>}
				</For>
			</div>
		</div>
	);
}
