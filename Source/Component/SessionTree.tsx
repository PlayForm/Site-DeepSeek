import "@Stylesheet/Component/SessionTree.scss";

import { For } from "solid-js";

import {
	Acting,
	FormatNumber,
	Meta,
	Plugin,
	PluginRecord,
	Plural,
	Record,
	Turn,
	TurnRecord,
	TurnStep,
	type Face,
} from "@Content/Session";

interface Props {
	/** The face the tree reads. */
	Face: Face;
	/** The selected record's sequence number. */
	Pick: number;
	/** Select a record by its sequence number. */
	OnPick: (Seq: number) => void;
}

export default function SessionTree(Props: Props) {
	const Selected = () => Record.find((Entry) => Entry.Seq === Props.Pick);
	const CurrentTurn = () => Selected()?.Turn;
	const CurrentStep = () => Selected()?.Step;
	const First = (Group: number, Order?: number) =>
		Record.find(
			(Entry) => Entry.Turn === Group && (Order === undefined || Entry.Step === Order),
		)?.Seq ?? 0;

	return (
		<nav class="session-tree" data-face={Props.Face} aria-label="The session tree">
			<div class="session-tree__head">
				<span class="session-tree__title">Turns</span>
				<span class="session-tree__meta">
					{Meta.Id}&nbsp;|&nbsp;{Plural(Record.length, "record")}
				</span>
			</div>

			<For each={Turn}>
				{(Group) => (
					<div class="session-tree__group">
						<p class="session-tree__label">
							<span>Turn&nbsp;{Group.Index}</span>
							<span>{Plural(TurnRecord(Group.Index), "record")}</span>
						</p>
						<a
							class="session-tree__turn"
							href={`#turn-${Group.Index}`}
							data-current={CurrentTurn() === Group.Index ? "true" : undefined}
							onClick={() => Props.OnPick(First(Group.Index))}
						>
							<span class="session-tree__number">
								{String(Group.Index).padStart(2, "0")}
							</span>
							<span class="session-tree__name">{Group.Title}</span>
							<span class="session-tree__count">
								{Plural(TurnStep(Group.Index).length, "step")}
							</span>
						</a>
						<For each={TurnStep(Group.Index)}>
							{(Item) => (
								<a
									class="session-tree__step"
									href={`#step-${Item.Index}`}
									data-current={
										CurrentStep() === Item.Index ? "true" : undefined
									}
									onClick={() => Props.OnPick(First(Group.Index, Item.Index))}
								>
									<span class="session-tree__number">
										{String(Item.Index).padStart(2, "0")}
									</span>
									<span class="session-tree__name">
										step&nbsp;{Item.Index}
									</span>
									<span class="session-tree__count">
										{Plural(Item.Record.length, "record")}
									</span>
								</a>
							)}
						</For>
					</div>
				)}
			</For>

			<div class="session-tree__group">
				<p class="session-tree__label">
					<span>Plugins</span>
					<span>{`${FormatNumber(Acting(Props.Face))} acting`}</span>
				</p>
				<For each={Plugin}>
					{(Item) => (
						<div class="session-tree__plugin" data-state={Item.State} title={Item.Does}>
							<span class="session-tree__slug">{Item.Slug}</span>
							<span class="session-tree__plugin-count">
								{FormatNumber(PluginRecord(Item.Slug, Props.Face))}
							</span>
							<span class="session-tree__state">{Item.State}</span>
						</div>
					)}
				</For>
			</div>
		</nav>
	);
}
