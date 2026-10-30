import { createMemo, createSignal, For, Show } from "solid-js";

interface Entry {
	Title: string;
	Detail: string;
	Href: string;
	Group: string;
}

interface Props {
	Entry: Entry[];
}

// The index is built once at build time and handed over as props; the island
// only narrows it. An empty query shows the first entries, so the page has
// content before the reader types and with no JavaScript at all.
export default (Props: Props) => {
	const [Query, SetQuery] = createSignal("");

	const Results = createMemo(() => {
		const Search = Query().trim().toLowerCase();

		if (Search === "") {
			return Props.Entry.slice(0, 8);
		}

		return Props.Entry.filter(
			(Item) => `${Item.Title} ${Item.Detail}`.toLowerCase().includes(Search),
		).slice(0, 20);
	});

	const Groups = createMemo(() =>
		["Package", "Page", "Term"].map((Name) => ({
			Name,
			Item: Results().filter((Result) => Result.Group === Name),
		})),
	);

	return (
		<div class="search">
			<label class="search__field">
				<span class="search__label">Search</span>
				<input
					class="search__input"
					type="search"
					placeholder="Package, page, or term"
					value={Query()}
					onInput={(Event) => SetQuery(Event.currentTarget.value)}
					onKeyDown={(Event) => {
						if (Event.key === "Escape") {
							SetQuery("");
						}
					}}
				/>
			</label>

			<span class="search__count" aria-live="polite">
				{Results().length} result
			</span>

			<div class="search__body">
				<For each={Groups()}>
					{(Group) => (
						<Show when={Group.Item.length > 0}>
							<section class="search__group">
								<h2 class="search__heading">{Group.Name}</h2>
								<ul class="search__list">
									<For each={Group.Item}>
										{(Item) => (
											<li class="search__row">
												<a class="search__link" href={Item.Href}>
													{Item.Title}
												</a>
												<span class="search__detail">{Item.Detail}</span>
											</li>
										)}
									</For>
								</ul>
							</section>
						</Show>
					)}
				</For>

				<Show when={Results().length === 0}>
					<p class="search__empty">Nothing matches. Try a shorter word.</p>
				</Show>
			</div>
		</div>
	);
};
