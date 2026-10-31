import "@Stylesheet/Component/SessionDocument.scss";

import { For } from "solid-js";

import SessionRecord from "@Component/SessionRecord";
import {
	Call,
	Characters,
	DispatchGlyph,
	DispatchOrder,
	FormatNumber,
	Meta,
	Plural,
	Prompt,
	Record,
	Step,
	Turn,
	TurnRecord,
	TurnStep,
	type Face,
} from "@Content/Session";

interface Props {
	/** The face the document reads. */
	Face: Face;
	/** The selected record's sequence number. */
	Pick: number;
	/** Select a record by its sequence number. */
	OnPick: (Seq: number) => void;
	/** Read the run in the other face. */
	OnFace: (Face: Face) => void;
}

export default function SessionDocument(Props: Props) {
	return (
		<article class="session-document">
			<header class="session-document__head">
				<p class="session-document__meta">
					{`session ${Meta.Id} | ${Meta.Model} | ${Meta.Effort} | ${Plural(Turn.length, "turn")} | ${Plural(Step.length, "step")} | ${Plural(Record.length, "record")}${Meta.Simulated ? " | simulated" : ""}`}
				</p>
				<div
					class="session-document__face"
					role="group"
					aria-label="Read the run with the family or without it"
				>
					<button
						type="button"
						class="session-document__face-cell"
						data-active={Props.Face === "family" ? "true" : undefined}
						aria-pressed={Props.Face === "family"}
						onClick={() => Props.OnFace("family")}
					>
						Family
					</button>
					<button
						type="button"
						class="session-document__face-cell"
						data-active={Props.Face === "default" ? "true" : undefined}
						aria-pressed={Props.Face === "default"}
						onClick={() => Props.OnFace("default")}
					>
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

			<p class="session-document__prompt">{Prompt}</p>

			<For each={Turn}>
				{(Group) => (
					<>
						<div class="session-document__turn" id={`turn-${Group.Index}`}>
							<span class="session-document__turn-label">
								Turn&nbsp;{Group.Index}
							</span>
							<span class="session-document__turn-title">{Group.Title}</span>
							<span class="session-document__turn-count">
								{`${Plural(TurnRecord(Group.Index), "record")} | ${Plural(TurnStep(Group.Index).length, "step")}`}
							</span>
						</div>
						<For each={TurnStep(Group.Index)}>
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
