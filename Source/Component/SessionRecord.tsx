import "@Stylesheet/Component/SessionRecord.scss";

import {
	DispatchGlyph,
	FormatSize,
	NoteOf,
	OutcomeOf,
	Touched,
	type Entry,
	type Face,
} from "@Content/Session";
import { Show } from "solid-js";

interface Props {
	/** The record the row draws. */
	Entry: Entry;
	/** The face the row reads. */
	Face: Face;
	/** The selected record's sequence number. */
	Pick: number;
	/** Select this record. */
	OnPick: (Seq: number) => void;
}

export default function SessionRecord(Props: Props) {
	const Outcome = () => OutcomeOf(Props.Entry, Props.Face);
	const Note = () => NoteOf(Props.Entry, Outcome());

	return (
		<div
			class="session-record"
			data-current={Props.Entry.Seq === Props.Pick ? "true" : undefined}
			role="listitem">
			<button
				type="button"
				class="session-record__line"
				aria-label={`Select record ${Props.Entry.Seq}, ${Props.Entry.Name}${Outcome().State === "ok" ? "" : `, ${Outcome().State}`}`}
				onClick={() => Props.OnPick(Props.Entry.Seq)}>
				<span class="session-record__seq">{String(Props.Entry.Seq).padStart(2, "0")}</span>{" "}
				<span class="session-record__kind" data-kind={Props.Entry.Kind}>
					{Props.Entry.Kind.toUpperCase()}
				</span>{" "}
				<span class="session-record__dispatch" title={Props.Entry.Dispatch}>
					{DispatchGlyph[Props.Entry.Dispatch]}
				</span>{" "}
				<span class="session-record__call">
					<span class="session-record__name">{Props.Entry.Name}</span>
					<span class="session-record__payload">{Props.Entry.Payload}</span>
				</span>
				<span class="session-record__size">{FormatSize(Outcome().Size)}</span>
				<span class="session-record__outcome">
					<span class="session-record__arrow" aria-hidden="true">
						-&gt;
					</span>
					<span class="session-record__result" data-kind={Props.Entry.Kind}>
						{Outcome().Result}
					</span>{" "}
					<Show when={Outcome().State !== "ok"}>
						<span class="session-record__state" data-state={Outcome().State}>
							{Outcome().State}
						</span>
					</Show>{" "}
					<Show when={Note()}>
						<span class="session-record__note">{Note() ?? ""}</span>
					</Show>{" "}
					<Show when={Outcome().By !== undefined}>
						<span class="session-record__by">{Outcome().By ?? ""}</span>
					</Show>
					<Show when={Touched(Props.Entry, Props.Face)}>
						<span class="session-record__plugin" title={Props.Entry.Effect}>
							{Props.Entry.Plugin ?? ""}
						</span>
					</Show>
				</span>
			</button>
		</div>
	);
}
