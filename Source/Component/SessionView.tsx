import "@Stylesheet/Component/SessionView.scss";
import "@Stylesheet/Component/SectionHeader.scss";

import { createMemo, createSignal, Show } from "solid-js";

import InspectorLive from "@Component/InspectorLive";
import LaneStrip from "@Component/LaneStrip";
import SessionDocument from "@Component/SessionDocument";
import SessionTree from "@Component/SessionTree";
import { Record, Timeline, TotalOf, type Face } from "@Content/Session";

// The session view: one island, so the face switch reaches every machine. The
// lane, the tree, the document, and the inspector all read the same signal;
// the default face is the run with no family plugin acting.
export default function SessionView() {
	const [View, SetView] = createSignal<Face>("family");
	const [Pick, SetPick] = createSignal(Record[0]?.Seq ?? 0);

	const Moment = createMemo(() => Timeline(View()));
	const Total = createMemo(() => TotalOf(View()));
	const Selected = createMemo(() => Moment().find((Item) => Item.Entry.Seq === Pick()) ?? Moment()[0]);

	return (
		<>
			<section class="section trace-page__section" id="lane">
				<header class="section-header">
					<h2>Lane</h2>
					<p class="section-header__lede">
						The same run as time: one row per resource, a bar per span, and the clock
						every record shares. A wait is drawn as an outline, because nothing is busy.
					</p>
				</header>
				<div class="section__body">
					<LaneStrip Face={View()} />
				</div>
			</section>

			<section class="section trace-page__section" id="session">
				<header class="section-header">
					<h2>Session</h2>
					<p class="section-header__lede">
						The tree, the document, and the inspector read one record list. The switch
						at the top of the document changes the face they read, and the run changes
						with it.
					</p>
				</header>
				<div class="section__body">
					<div class="session-view">
						<aside class="session-view__tree" id="tree">
							<SessionTree Face={View()} Pick={Pick()} OnPick={SetPick} />
						</aside>
						<div class="session-view__document" id="document">
							<SessionDocument
								Face={View()}
								Pick={Pick()}
								OnPick={SetPick}
								OnFace={SetView}
							/>
						</div>
						<aside class="session-view__inspector" id="inspector">
							<Show when={Selected()}>
								{(Item) => (
									<InspectorLive
										Entry={Item().Entry}
										Face={View()}
										Start={Item().Start}
										Total={Total()}
									/>
								)}
							</Show>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
}
