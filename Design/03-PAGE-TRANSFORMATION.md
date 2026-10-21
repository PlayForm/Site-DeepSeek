# 03 - The Page Transformation

Every page is one cabinet. The content stays; the containers, the
surfaces, and the interactions change. The order below is the recommended
build order too.

## 1. The two cabinet modes

One shell, two behaviours, chosen by whether the interior is bounded:

| Mode | The front | The door | The interior | Pages |
| --- | --- | --- | --- | --- |
| **A - the instrument** | exactly one viewport, locked | present, closed or open | a fixed shelf, a scrolling field, a status strip | the registry screens, the landing, the detail pages, the workbench, the matrix, the setup |
| **B - the dossier** | content height, the page scrolls | none: the cover is removed, the cabinet is in service | the bays in the page's flow, on the dark plate | the versions, the models, the flavors, the case study |

Mode B is the honest reduction. A 6000px-tall article behind a 6000px door
is not a door; it is a wall. The long-form pages keep the shell, the
lintel, the base plate, and the dark plate with the light insets, and
they lose the swing. The 404 is mode A.

## 2. The registry sequence (`/plugins/`)

The page is a **horizontal sequence of page-sized cabinets**. It replaces
the five-cabinet rack entirely.

```text
   +------------------------------------------------------+  +------------------------------+
   | CAB-01  THE HOOKS                                    |  | CAB-02  THE DISPLAY          |
   | lintel: h1 | serial | tabs | lamps                    |  | lintel                       |
   | +--------------------------------------------------+ |  | +--------------------------+ |
   | |                                                  | |  | |                          | |
   | |                 THE DOOR (white)                 | |  | |      THE DOOR            | |
   | |   cover: the title, the claim, the count, lock    | |  | |                          | |
   | |                                                  | |  | |                          | |
   | +--------------------------------------------------+ |  | +--------------------------+ |
   | base plate: spec | revision | SCREEN 01 / 02 | gauge  |  | base plate                   |
   +------------------------------------------------------+  +------------------------------+
                          scroll right ->
```

**The sequence.** One scroller, two panels each the scroller's own width,
`scroll-snap-type: x mandatory`, `scroll-snap-align: start`. The body has
no vertical overflow: the cabinet is the viewport. A horizontal swipe, a
tab click, the left and right arrows, Home and End, or a `#hash` moves
between screens. The panel width is the scroller's width, not `100vw`, so
a visible scrollbar can never push a panel half off the page.

**The tabs.** Two `role="tab"` buttons in the lintel, "01 THE HOOKS / 14"
and "02 THE DISPLAY / 1 + 1", in a `role="tablist"`; the panels are
`role="tabpanel"` with `tabindex="0"`. The scroll position updates
`aria-selected` through an IntersectionObserver at 0.6 threshold; the tab
click scrolls the sequence; the hash is written with `history.replaceState`
on settle, never `pushState`, so the back button is not polluted by
scrolling.

**Screen 01 - THE HOOKS (CAB-01).** The door is closed by default; opening
it is the page's primary action. The cover carries the category code, the
title, the claim, "14 MODULES", the ACTIVE and VERIFIED lamps, and the
lock. The interior:

```text
shelf     M-01 MODULES 14 | M-02 CHECKS 1314 / 1324 | M-03 RELEASE 0.1.0 | calibration
field     THE MACHINERY   core, factory                      2 plates
          THE GOVERNORS   governor, pinner, cargo            3 plates
          THE FLOW        dash, quotes, ellipsis, spaces,
                          invisible, fullwidth, file          7 plates
          THE SERVICES    ccr, tool-coach                     2 plates
status    14 MODULES | the filter (ALL / GOVERN / NORMALIZE / SERVICE) | the field gauge
```

The four bay groups are the old cabinet names, demoted from objects to
labels, which is where a grouping belongs. The order is the dependency
order: the machinery first, then the governors, the flow, the services.

**Screen 02 - THE DISPLAY (CAB-02).** The door is closed by default. The
interior carries `hook-dsh-live-containers` and, beside it, the planned
Harness panel as a labelled preview (PLANNED, not shipped, with the same
amber pending plate the registry uses). The field is deliberately sparse:
one module, one preview, and the container anatomy as a light inset. The
panel preview is the site's own visual language applied to the family's
future UI, which is the design issue the current site names in its
handoff.

**The publish-pending state.** `hook-dsh-ccr`, `hook-dsh-tool-coach`, and
`hook-dsh-live-containers` are not on the registry. Their plates carry the
amber PENDING lamp and the "build from source" line; their install boxes
never promise a 404. The state is a first-class plate, not a sentence in
the hero.

**The mobile.** The sequence stacks vertically; each cabinet is mode A
with the depth at 0 and the cover band; the tabs become anchor links; the
field is in flow.

## 3. The landing (`/`)

Mode A, the door **open by default**: the landing is a workspace, and its
conversion path must not be behind a latch.

- **The lintel** (88px, and 160px on the landing): the h1, the claim, the
  ingest terminal, the two engine plates.
- **The interior**:
  - **BAY 01 - SYSTEM OVERVIEW**: the shelf meters, the verification
    lamps, the ingest terminal repeated.
  - **BAY 02 - THE DUAL-ENGINE CHASSIS**: the two engines as mounted
    modules, the specs, the HASH IDENTICAL strip.
  - **BAY 03 - THE REGISTRY**: two screen plates (CAB-01, CAB-02) linking
    to `/plugins/#hooks` and `/plugins/#ui`; the count on each.
  - **BAY 04 - THE WORKBENCH**: the 3-stage sanitizer and the 4-tier
    penalty rail, as a preview of `/workbench/`.
- **The cover** (the closed state): the identity, the claim, the install
  terminal, the three meter readings, and the lock. One click away, not
  the default.

## 4. The detail pages (`/plugins/<name>/`)

Mode A, the door **open by default**; the cover is one click away and
carries the identity, the key figure, and the install.

- **The lintel**: the package name, the module code, the family position,
  the back link to its screen.
- **The interior**:
  - **CONNECTIONS**: the seams, what enters, what leaves, the
    dependencies (`WiringDiagram`).
  - **MECHANISM**: the pipeline, the gate order, the tables, the config
    (`ControlPanel`, `DocumentWindow`).
  - **EVIDENCE**: the ledger lines, the smoke counts, the known limits
    (`TerminalReadout`, `ReadoutBank`).
- **The section mapping** from the current template: Where It Fits -> the
  connections; In the Harness -> the wiring; The Problem -> the cover;
  How It Works -> the mechanism; The Config -> the control panel; In
  Action -> the readouts; The Ledger -> the evidence; Known limits -> the
  caveat plate; Related plugins -> a strip of three module plates.
- **The flavour pages** put the `ShutterWindow` in the mechanism.
- **The field** scrolls; the shelf carries the plugin's own figure (the
  budget, the check count, the version) in one meter, and the page's
  checks in a second.

## 5. The workbench (`/workbench/`)

Mode A, open. The bench is the interior:

- the input tray (the sample stream, editable) in a light inset;
- the six gate switches as labelled rockers on the plate;
- the six flavour panes as a bank of light insets;
- the patch cables as the `WiringDiagram` between the stages;
- the penalty rail as four tier plates with the strike and reset controls;
- the keyboard and the reduced motion unchanged.

The door is parked; the cover, if opened, shows the bench's title and its
one-line claim.

## 6. The matrix (`/matrix/`)

Mode A, open. The relay array: the gate switches, the matrix canvas of the
stream states, the per-flavour smoke table as a `HeatmapTable`-style grid
of lamps, the live indicators. The matrix is the bus view of the same
mechanics as the workbench, and it keeps its density.

## 7. The setup (`/setup/`)

Mode A, open. The wiring panel inside the cabinet:

- the configurator as the `ControlPanel`: the 14 rockers, the engine
  selector, the profile plate;
- the generated wiring: the bundles as a terminal block, the patch inserts
  as a `WiringDiagram`, the verification lines as readouts;
- the four steps as four numbered wiring stages (add, patch, restart,
  verify);
- the configurable surface as the field table;
- the optional-by-default surfaces as a "NORMALLY OPEN" plate bank;
- the ledgers as the logbook plate.

## 8. The versions (`/versions/`)

Mode B. The operating set as the shelf meters (the release, the engines,
the checks); the changelog as the logbook of stamped entries; the
invariants as the spec plate; the smoke baseline as the calibration
certificate. The front grows with the page; the right wall runs the full
height.

## 9. The models (`/models/`)

Mode B. The engine room: the two engine nameplates, the reference routes,
the coverage plate, the per-model notes. The shelf carries the model
counts.

## 10. The flavors (`/flavors/`)

Mode B. The specimen board: the seven flavour plates (the six stream plus
the file), the chain as the signal path, the roles as the governance
plate, the badge sprite as the stamp sheet.

## 11. The case study (`/case-study/`)

Mode B. The dossier: the long-form as a bound logbook of light insets on
the dark plate, the phase tabs as bay headers, the reading gauge as the
tape measure along the right wall, the decision index as the index plate,
the lessons as the closing plate.

## 12. The 404

Mode A, one screen. The disconnected cabinet: the shell intact, the
interior black and empty, the door hanging off one hinge at 12 degrees,
the cut cable, the NO SIGNAL plate, the links home. It keeps its own
shell with no external font dependency, and it is not built from the
shared layout.

## 13. The shared behaviour

- **The door** exists in mode A only: closed on the registry screens,
  open on the landing, the detail pages, the workbench, the matrix, and
  the setup; always togglable; the state persisted per page in
  `sessionStorage` and reset by a `#hash` deep link to a module.
- **The lintel, the base plate, the notice lamp, and the header rail** on
  every page.
- **The routing texture** on the field plate and the cover; nowhere else.
- **The reduced-motion path**: the doors open instantly, the trays
  appear, the sequence jumps, the content is immediate.
- **The scroll**: the registry screens and the workspaces scroll
  horizontally between screens and vertically only inside the field; the
  dossier pages scroll vertically as before.
