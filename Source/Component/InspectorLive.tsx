import "@Stylesheet/Component/Inspector.scss";
import "@Stylesheet/Component/Schema.scss";

import {
	FormatDuration,
	FormatNumber,
	FormatSize,
	OutcomeOf,
	Percent,
	SchemaFor,
	type Entry,
	type Face,
} from "@Content/Session";
import { createSignal, For, Show } from "solid-js";

interface Props {
	/** The selected record, in the session's own shape. */
	Entry: Entry;
	/** The face the inspector reads. */
	Face: Face;
	/** Where the record starts, in milliseconds from the session's first record. */
	Start: number;
	/** The wall clock the face's run occupies. */
	Total: number;
}

const Tab = ["Summary", "Payload", "Result", "Schema", "Timing"];

export default function InspectorLive(Props: Props) {
	const [Open, SetOpen] = createSignal("Summary");
	const Outcome = () => OutcomeOf(Props.Entry, Props.Face);
	const Property = () => SchemaFor(Props.Entry.Name);
	const Share = () => Percent(Outcome().Took, Props.Total);

	const Row = (Line: { Key: string; Value: string }) => (
		<div class="inspector__row">
			<dt class="inspector__key">{Line.Key}</dt>
			<dd class="inspector__value">{Line.Value}</dd>
		</div>
	);

	return (
		<div class="inspector" aria-live="polite">
			<p class="inspector__subject">
				<span class="inspector__seq">{String(Props.Entry.Seq).padStart(2, "0")}</span>{" "}
				<span class="inspector__name">{Props.Entry.Name}</span>
			</p>
			<p class="inspector__sub">
				{`${Props.Entry.Kind} | +${FormatDuration(Props.Start)} | ${FormatDuration(Outcome().Took)} | ${Props.Face}`}
			</p>

			<div class="inspector__tabs">
				<For each={Tab}>
					{(Label) => (
						<>
							<input
								class="inspector__radio"
								type="radio"
								name="inspector-session-tab"
								id={`inspector-session-${Label}`}
								checked={Open() === Label}
								onChange={() => SetOpen(Label)}
							/>
							<label class="inspector__tab" for={`inspector-session-${Label}`}>
								{Label}
							</label>
							<div class="inspector__panel">
								<Show when={Open() === Label}>
									{Label === "Summary" && (
										<>
											<div class="inspector__object">
												<div class="inspector__object-head">
													<span
														class="inspector__glyph"
														data-kind={Props.Entry.Kind}>
														{Props.Entry.Kind.toUpperCase()}
													</span>
													<span class="inspector__object-type">
														{`${Props.Entry.Kind} | ${Outcome().State}`}
													</span>
												</div>
												<dl class="inspector__rows">
													<Row
														Key="Seq"
														Value={String(Props.Entry.Seq)}
													/>
													<Row Key="Kind" Value={Props.Entry.Kind} />
													<Row
														Key="Turn"
														Value={String(Props.Entry.Turn)}
													/>
													<Row
														Key="Step"
														Value={String(Props.Entry.Step)}
													/>
													<Row
														Key="Dispatch"
														Value={Props.Entry.Dispatch}
													/>
													<Show when={Outcome().Gate !== undefined}>
														<Row
															Key="Gate"
															Value={String(Outcome().Gate)}
														/>
													</Show>
													<Show when={Outcome().By !== undefined}>
														<Row
															Key="By"
															Value={String(Outcome().By)}
														/>
													</Show>
													<Show when={Outcome().Reason !== undefined}>
														<Row
															Key="Reason"
															Value={String(Outcome().Reason)}
														/>
													</Show>
													<Show
														when={
															Props.Face === "family" &&
															Props.Entry.Plugin !== undefined
														}>
														<Row
															Key="Plugin"
															Value={String(Props.Entry.Plugin)}
														/>
													</Show>
													<Show
														when={
															Props.Face === "family" &&
															Props.Entry.Effect !== undefined
														}>
														<Row
															Key="Effect"
															Value={String(Props.Entry.Effect)}
														/>
													</Show>
													<Row Key="State" Value={Outcome().State} />
													<Show when={Outcome().Note !== undefined}>
														<Row
															Key="Note"
															Value={String(Outcome().Note)}
														/>
													</Show>
												</dl>
											</div>
											<Show when={Props.Entry.Kind === "tool"}>
												<div class="inspector__pipeline">
													<span
														class="inspector__stage"
														data-state={
															Outcome().Gate === "deny"
																? "deny"
																: "pass"
														}>
														pre
													</span>
													<span class="inspector__arrow">-&gt;</span>
													<span
														class="inspector__stage"
														data-state={
															Outcome().Gate === "deny"
																? "skip"
																: "pass"
														}>
														execute
													</span>
													<span class="inspector__arrow">-&gt;</span>
													<span
														class="inspector__stage"
														data-state={
															Outcome().Gate === "deny"
																? "skip"
																: "pass"
														}>
														post
													</span>
												</div>
											</Show>
										</>
									)}
									{Label === "Payload" && (
										<>
											<pre class="inspector__code">{Props.Entry.Payload}</pre>
											<p class="inspector__meta">
												{`${FormatNumber(Props.Entry.Payload.length)} chars`}
											</p>
										</>
									)}
									{Label === "Result" && (
										<>
											<pre class="inspector__code">{Outcome().Result}</pre>
											<p class="inspector__meta">
												{`${FormatSize(Outcome().Size)} | ${Outcome().State}`}
											</p>
										</>
									)}
									{Label === "Schema" && (
										<>
											<p class="inspector__meta">
												{`JSON Schema | ${Property().length} properties`}
											</p>
											<dl class="schema">
												<For each={Property()}>
													{(Item) => (
														<div
															class="schema__row"
															data-required={Item.Required}>
															<dt class="schema__term">
																<span class="schema__name">
																	{Item.Name}
																</span>
																<span class="schema__type">
																	{Item.Type}
																</span>
																{Item.Required && (
																	<span class="schema__flag">
																		required
																	</span>
																)}
															</dt>
															<dd class="schema__description">
																{Item.Description}
															</dd>
														</div>
													)}
												</For>
											</dl>
										</>
									)}
									{Label === "Timing" && (
										<>
											<dl class="inspector__rows">
												<Row
													Key="Start"
													Value={`+${FormatDuration(Props.Start)}`}
												/>
												<Row
													Key="Took"
													Value={FormatDuration(Outcome().Took)}
												/>
												<Row Key="Share" Value={`${Share()}%`} />
												<Row Key="Face" Value={Props.Face} />
											</dl>
											<div class="inspector__track">
												<span
													class="inspector__fill"
													style={{ width: `${Share()}%` }}
												/>
											</div>
										</>
									)}
								</Show>
							</div>
						</>
					)}
				</For>
			</div>
		</div>
	);
}
