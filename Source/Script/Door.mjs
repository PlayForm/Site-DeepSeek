// Door.mjs - the cabinet's door, lock, tray, filter and field-gauge runtime.
//
// The rules the script implements (Design 01 section 12, T05):
//   - one activation: a click on the door (or Enter/Space on its real
//     button) turns the lock and opens the door; there is no two-step
//     unlock-then-open;
//   - the close control is the fixed plate on the stile, so it never moves
//     with the door;
//   - Esc closes the open cabinet;
//   - the interior is inert while the door is closed and the door assembly
//     is inert while it is open, so focus never lands in a hidden subtree;
//   - focus moves to the first module's Inspect button on open and back to
//     the door on close;
//   - the state persists per cabinet in sessionStorage, and a #hash deep
//     link to a module opens the cabinet that holds it;
//   - the trays are disclosures, the filter chips are pressed buttons, and
//     the gauge tracks the field's scroll.
//
// There is no per-frame animation and no canvas: the swing, the lock turn
// and the tray are CSS transitions, and the gauge updates only on scroll,
// resize or filter.

const StoragePrefix = "dsh-door:";

function ReadStored(Key) {
	try {
		return sessionStorage.getItem(Key);
	} catch {
		return null;
	}
}

function Store(Key, Value) {
	try {
		sessionStorage.setItem(Key, Value);
	} catch {
		// A blocked storage must never break the door.
	}
}

/** The module a #hash deep link names inside this cabinet, or null. */
function HashTarget(Interior) {
	const Hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
	if (!Hash) return null;
	const Candidate =
		document.getElementById(`module-${Hash}`) ?? document.getElementById(Hash);
	return Candidate && Interior.contains(Candidate) ? Candidate : null;
}

function InitCabinet(Root) {
	if (Root.dataset.cabinetReady === "true") return;
	Root.dataset.cabinetReady = "true";

	const Code = Root.dataset.code ?? "cabinet";
	const Key = `${StoragePrefix}${Code}`;
	const Hit = Root.querySelector("[data-door-open]");
	const Close = Root.querySelector("[data-door-close]");
	const Door = Root.querySelector("[data-door-panel]");
	const Interior = Root.querySelector(".cabinet-interior");
	if (!Hit || !Door || !Interior) return;

	const Field = Root.querySelector("[data-field]");
	const Count = Root.querySelector("[data-field-count]");
	const Chips = Array.from(Root.querySelectorAll("[data-cabinet-filter]"));
	const Thumb = Root.querySelector("[data-gauge-thumb]");
	const Plates = Array.from(Root.querySelectorAll("[data-module]"));
	const Shelf = Root.querySelector(".meter-shelf");
	const Face = Root.querySelector(".cabinet-front__face");
	const Mobile = window.matchMedia("(max-width: 767.98px)");

	// Below 768 the door is a 240px cover band over the top of the field
	// (Design 01 section 13). The field's top depends on the wrapped meter
	// shelf, so it is measured once per layout change, never per frame.
	const MeasureFieldTop = () => {
		if (!Shelf || !Face || !Mobile.matches) {
			Root.style.removeProperty("--mobile-field-top");
			return;
		}
		const Offset = Math.round(
			Shelf.getBoundingClientRect().bottom - Face.getBoundingClientRect().top,
		);
		Root.style.setProperty("--mobile-field-top", `${Offset}px`);
	};

	const FirstModuleControl = () =>
		Interior.querySelector("[data-tray-toggle]") ?? Field ?? Hit;

	const Apply = (Open, MoveFocus) => {
		Root.dataset.door = Open ? "open" : "closed";
		Hit.setAttribute("aria-expanded", String(Open));
		Door.classList.toggle("is-open", Open);
		Door.toggleAttribute("inert", Open);
		Interior.toggleAttribute("inert", !Open);
		if (MoveFocus) {
			if (Open) FirstModuleControl().focus();
			else Hit.focus();
		}
	};

	const UpdateGauge = () => {
		if (!Field || !Thumb) return;
		const Max = Field.scrollHeight - Field.clientHeight;
		const Height = Math.max(
			10,
			Math.round((Field.clientHeight / Math.max(1, Field.scrollHeight)) * 100),
		);
		Thumb.style.height = `${Height}%`;
		Thumb.style.top =
			Max > 0 ? `${Math.round((Field.scrollTop / Max) * (100 - Height))}%` : "0%";
	};

	const Filter = (Value) => {
		let Visible = 0;
		for (const Plate of Plates) {
			const Tags = (Plate.dataset.tags ?? "").split(/\s+/);
			const Show = Value === "all" || Tags.includes(Value);
			Plate.classList.toggle("is-filtered", !Show);
			if (Show) Visible += 1;
		}
		for (const Bay of Root.querySelectorAll("[data-bay]")) {
			const Any = Array.from(Bay.querySelectorAll("[data-module]")).some(
				(Plate) => !Plate.classList.contains("is-filtered"),
			);
			Bay.classList.toggle("is-empty", !Any);
		}
		if (Count) {
			Count.textContent = `${Visible} ${Visible === 1 ? "MODULE" : "MODULES"}`;
		}
		UpdateGauge();
	};

	// The initial state: a module deep link wins, then the stored state,
	// then the server-rendered default (closed on the registry screens).
	const Target = HashTarget(Interior);
	const Stored = ReadStored(Key);
	const Initial = Target
		? true
		: Stored === "open"
			? true
			: Stored === "closed"
				? false
				: Root.dataset.door === "open";
	Apply(Initial, false);
	if (Target) {
		Target.scrollIntoView({ block: "nearest" });
		Target.querySelector("[data-tray-toggle]")?.focus();
	}

	Hit.addEventListener("click", () => {
		Apply(true, true);
		Store(Key, "open");
	});

	Close?.addEventListener("click", () => {
		Apply(false, true);
		Store(Key, "closed");
	});

	Root.addEventListener("keydown", (Event) => {
		if (Event.key !== "Escape") return;
		if (Root.dataset.door !== "open") return;
		Event.stopPropagation();
		Apply(false, true);
		Store(Key, "closed");
	});

	// The Inspect disclosure: a real button, aria-expanded, the tray in the
	// DOM after it. The plate stays visible above the tray.
	Root.addEventListener("click", (Event) => {
		if (!(Event.target instanceof Element)) return;
		const Toggle = Event.target.closest("[data-tray-toggle]");
		if (!Toggle) return;
		const Plate = Toggle.closest("[data-module]");
		const Tray = Plate?.querySelector(".module-plate__tray");
		if (!Plate || !Tray) return;
		const Open = Toggle.getAttribute("aria-expanded") !== "true";
		Toggle.setAttribute("aria-expanded", String(Open));
		Plate.classList.toggle("is-open", Open);
		Tray.hidden = !Open;
		const Label = Toggle.querySelector("[data-tray-label]");
		if (Label) Label.textContent = Open ? "INSPECT -" : "INSPECT +";
		UpdateGauge();
	});

	// The bay groups are collapsible sections, expanded by default. The
	// toggle is a real button; the glyph is decorative.
	Root.addEventListener("click", (Event) => {
		if (!(Event.target instanceof Element)) return;
		const Toggle = Event.target.closest("[data-bay-toggle]");
		if (!Toggle) return;
		const Bay = Toggle.closest("[data-bay]");
		if (!Bay) return;
		const Collapsed = !Bay.classList.contains("is-collapsed");
		Bay.classList.toggle("is-collapsed", Collapsed);
		Toggle.setAttribute("aria-expanded", String(!Collapsed));
		const Name = (Toggle.getAttribute("aria-label") ?? "").replace(/^(Collapse|Expand) /, "");
		Toggle.setAttribute("aria-label", `${Collapsed ? "Expand" : "Collapse"} ${Name}`);
		const Glyph = Toggle.querySelector(".bay-header__glyph");
		if (Glyph) Glyph.textContent = Collapsed ? "+" : "-";
		UpdateGauge();
	});

	// The filter chips: one pressed at a time, the count follows the
	// visible set, the empty bays lose their header.
	for (const Chip of Chips) {
		Chip.addEventListener("click", () => {
			for (const Other of Chips) Other.setAttribute("aria-pressed", "false");
			Chip.setAttribute("aria-pressed", "true");
			Filter(Chip.dataset.cabinetFilter ?? "all");
		});
	}

	Field?.addEventListener("scroll", UpdateGauge, { passive: true });
	if (Field && "ResizeObserver" in window) {
		new ResizeObserver(UpdateGauge).observe(Field);
	}
	if (Shelf && "ResizeObserver" in window) {
		new ResizeObserver(MeasureFieldTop).observe(Shelf);
	}
	Mobile.addEventListener("change", MeasureFieldTop);
	window.addEventListener("resize", MeasureFieldTop, { passive: true });
	MeasureFieldTop();
	UpdateGauge();
}

function Init() {
	document.querySelectorAll("[data-cabinet]").forEach(InitCabinet);

	// The skip link: open the target cabinet if the door still covers the
	// interior, then move focus to the interior region.
	for (const Skip of document.querySelectorAll(".skip")) {
		if (Skip.dataset.skipReady === "true") continue;
		Skip.dataset.skipReady = "true";
		Skip.addEventListener("click", () => {
			const Id = decodeURIComponent((Skip.getAttribute("href") ?? "").replace(/^#/, ""));
			const Target = document.getElementById(Id);
			const Cabinet = Target?.closest("[data-cabinet]");
			if (Cabinet && Cabinet.dataset.door !== "open") {
				Cabinet.querySelector("[data-door-open]")?.click();
			}
			requestAnimationFrame(() => Target?.focus?.());
		});
	}
}

document.addEventListener("astro:page-load", Init);
Init();
