import "@Stylesheet/Component/SessionDocument.scss";

import SessionRecord from "@Component/SessionRecord";
import {
	Call,
	Characters,
	DispatchGlyph,
	DispatchOrder,
	FormatNumber,
	Plural,
	Session,
	StepsOf,
	TurnRecord,
	TurnStep,
	type Face,
	type SessionData,
} from "@Content/Session";
import { For } from "solid-js";

interface Props {
	/** The face the document reads. */
	Face: Face;
	/** The selected record's sequence number. */
	Pick: number;
	/** Select a record by its sequence number. */
	OnPick: (Seq: number) => void;
	/** Read the run in the other face. */
	OnFace: (Face: Face) => void;
	/** The run the document reads; defaults to the trace page's authored session. */
	Data?: SessionData;
}

export default function SessionDocument(Props: Props) {
	const Source = () => Props.Data ?? Session;

	return (
		<article class="session-document">
			<header class="session-document__head">
				<p class="session-document__meta">
					{`session ${Source().Meta.Id} | ${Source().Meta.Model} | ${Source().Meta.Effort} | ${Plural(Source().Turn.length, "turn")} | ${Plural(StepsOf(Source()).length, "step")} | ${Plural(Source().Record.length, "record")}${Source().Meta.Simulated ? " | simulated" : ""}`}
				</p>
				<div
					class="session-document__face"
					role="group"
					aria-label="Read the run with the family or without it">
					<button
						type="button"
						class="session-document__face-cell"
						data-active={Props.Face === "family" ? "true" : undefined}
						aria-pressed={Props.Face === "family"}
						onClick={() => Props.OnFace("family")}>
						Family
					</button>
					<button
						type="button"
						class="session-document__face-cell"
						data-active={Props.Face === "default" ? "true" : undefined}
						aria-pressed={Props.Face === "default"}
						onClick={() => Props.OnFace("default")}>
						Default
					</button>
				</div>
			</header>

			<div class="session-document__legend">
				<For each={DispatchOrder}>
					{(Name) => (
						<span class="session-document__legend-item">
							<span class="session-document__legend-mark">{DispatchGlyph[Name]}</span>
							<span>{Name}</span>
						</span>
					)}
				</For>
			</div>

			<p class="session-document__prompt">{Source().Prompt}</p>

			<For each={Source().Turn}>
				{(Group) => (
					<>
						<div class="session-document__turn" id={`turn-${Group.Index}`}>
							<span class="session-document__turn-label">
								Turn&nbsp;{Group.Index}
							</span>
							<span class="session-document__turn-title">{Group.Title}</span>
							<span class="session-document__turn-count">
								{`${Plural(TurnRecord(Group.Index, Source()), "record")} | ${Plural(TurnStep(Group.Index, Source()).length, "step")}`}
							</span>
						</div>
						<For each={TurnStep(Group.Index, Source())}>
							{(Item) => (
								<div class="session-document__step">
									<h3 class="session-document__rule" id={`step-${Item.Index}`}>
										<span class="session-document__rule-name">
											Step&nbsp;{Item.Index}
										</span>
										<span class="session-document__rule-count">
											{`${Plural(Call(Item).length, "call")}, ${FormatNumber(Characters(Item, Props.Face))} chars`}
										</span>
									</h3>
									<div class="session-document__log" role="list">
										<For each={Item.Record}>
											{(Entry) => (
												<SessionRecord
													Entry={Entry}
													Face={Props.Face}
													Pick={Props.Pick}
													OnPick={Props.OnPick}
												/>
											)}
										</For>
									</div>
								</div>
							)}
						</For>
					</>
				)}
			</For>
		</article>
	);
}
