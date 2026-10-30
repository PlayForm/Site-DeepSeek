import { createEffect, createSignal, For, onMount, Show } from "solid-js";

interface Entry {
	Slug: string;
	Kind: string;
	Family: string;
}

interface Props {
	Entry: Entry[];
	Family: string[];
	Kind: string[];
}

// The catalogue is server-rendered; the island only narrows what is already on
// the page. With no JavaScript every card stays visible, so the filter adds a
// convenience and never a dependency.
export default (Props: Props) => {
	const [Query, SetQuery] = createSignal("");
	const [Family, SetFamily] = createSignal("All");
	const [Kind, SetKind] = createSignal("All");
	const [Shown, SetShown] = createSignal(Props.Entry.length);

	onMount(() => {
		createEffect(() => {
			const Search = Query().trim().toLowerCase();
			const FamilyNow = Family();
			const KindNow = Kind();

			let Count = 0;

			for (const Card of document.querySelectorAll<HTMLElement>("[data-package]")) {
				const Match =
					(FamilyNow === "All" || Card.dataset["family"] === FamilyNow) &&
					(KindNow === "All" || Card.dataset["kind"] === KindNow) &&
					(Search === "" ||
						(Card.dataset["summary"] ?? "").toLowerCase().includes(Search));

				Card.hidden = !Match;

				if (Match) {
					Count += 1;
				}
			}

			for (const Section of document.querySelectorAll<HTMLElement>("[data-group]")) {
				Section.hidden =
					Section.querySelectorAll("[data-package]:not([hidden])").length === 0;
			}

			SetShown(Count);
		});
	});

	return (
		<div class="filter">
			<label class="filter__field">
				<span class="filter__label">Search</span>
				<input
					class="filter__input"
					type="search"
					placeholder="Slug or what it does"
					value={Query()}
					onInput={(Event) => SetQuery(Event.currentTarget.value)}
				/>
			</label>

			<div class="filter__field">
				<span class="filter__label">Release</span>
				<div class="filter__options">
					<For each={["All", ...Props.Family]}>
						{(Entry) => (
							<button
								type="button"
								class="filter__option"
								aria-pressed={Family() === Entry}
								onClick={() => SetFamily(Entry)}>
								{Entry}
							</button>
						)}
					</For>
				</div>
			</div>

			<div class="filter__field">
				<span class="filter__label">Kind</span>
				<div class="filter__options">
					<For each={["All", ...Props.Kind]}>
						{(Entry) => (
							<button
								type="button"
								class="filter__option"
								aria-pressed={Kind() === Entry}
								onClick={() => SetKind(Entry)}>
								{Entry}
							</button>
						)}
					</For>
				</div>
			</div>

			<span class="filter__count" aria-live="polite">
				{Shown()} shown
			</span>

			{/* The collection's own empty state: a query that matches nothing is a
			    result, and the page says so rather than showing a blank grid. */}
			<Show when={Shown() === 0}>
				<p class="filter__empty">
					No package matches this filter. Clear the search or pick All.
				</p>
			</Show>
		</div>
	);
};
