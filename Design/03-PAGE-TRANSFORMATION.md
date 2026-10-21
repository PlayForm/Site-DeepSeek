# 03 - The Page Transformation

Every page becomes a cabinet or a bay inside one. The content stays; the
containers, the surfaces, and the interactions change. The order below is
the recommended build order too.

## 1. The landing (`/`)

The page is one large cabinet, centered, in front of the gray routing
network.

- **The header rail** (the fixed shell above the cabinet): the brand
  plate, the nav tabs, the version plate, the theme lever.
- **The cabinet**: the extruded shell (the top, the right, the front
  frame), the thick door, the big keylock at the right middle.
- **The closed door**: the identity plate ("DSH FAMILY // INSTRUMENT
  CABINET"), the one-sentence claim, the ingest terminal (the install
  command), the meter bank (31 packages, 1314 + 1324 checks, 0.1.0), the
  two engine nameplates (Classic, Effect-TS), the "OPEN CABINET" hint on
  the lock.
- **The open cabinet**: the door swings left; the interior mounting plate
  is revealed: the bays.
  - **BAY 01 - SYSTEM OVERVIEW & INGEST**: the terminal, the counters,
    the verification lamps.
  - **BAY 02 - DUAL-ENGINE CHASSIS**: the two engines as the mounted
    modules with the specs and the "HASH IDENTICAL" strip.
  - **BAY 03 - THE PLUGIN RACK**: the five category cabinets in a
    horizontal rack (the section 2 below), or the five cabinet doors as
    the entry points.
  - **BAY 04 - THE WORKBENCH**: the 3-stage stream sanitizer (the input
    tray, the stages, the output) and the 4-tier penalty rail.
- **The base plate**: the spec line, the revision, the organization, the
  copyright.

The landing's lock opens the main cabinet; the internals are the whole
documentation. The closed face must already be useful: the install, the
counters, the engines, the entry to the plugins.

## 2. The plugins page (`/plugins/`)

The page is a **horizontal rack of five category cabinets**. The user's
example: the pipe plugins (the hooks) in the first box as the internals,
the visual/UI plugins in another.

```text
[ THE ENGINE ] [ THE FLOW ] [ THE GOVERNORS ] [ THE SERVICES ] [ THE DISPLAY ]
     |             |               |                |               |
  the door      the door        the door         the door        the door
  + lock        + lock          + lock           + lock          + lock
```

- **The rack**: the five cabinets side by side, each with its door,
  lock, and identity plate; the horizontal scroll with the scroll snap;
  the category selector above (the rail tabs) and the keyboard (the left
  and right arrows move the rack; the tab focuses the active cabinet).
- **The closed cabinet**: the category plate, the count (the module
  count), the status lamps (the ACTIVE/VERIFIED), the one-line purpose,
  the lock.
- **The open cabinet**: the door swings; the mounting plate shows the
  modules of that category as the `InstrumentModule` faceplates: the
  identity, the sentence, the primary readout (the meter, the terminal,
  or the preview), the Inspect tray, the link to the detail page.
- **The filter**: the tag selector as the segmented switch (the
  ALL/GOVERNANCE/STREAM/FILE/...), the count updates.
- **The publish-pending state**: the pending modules carry the amber/
  pending lamp and the "build from source" plate; the install box does
  not promise a 404.
- **The mobile**: the rack stacks vertically; the doors become the
  inline expansions; the internals stack.

The order: the engine first (the foundation), then the flow (the pipes),
the governors, the services, the display. The user's "pipe first" variant
is a one-line reorder of the rack.

## 3. The plugin detail pages (`/plugins/<name>/`)

Each page is one cabinet at the single-plugin scale.

- **The closed door**: the identity plate (the package name, the module
  code, the family position), the purpose (the sentence), the primary
  readout (the package's key value: the budget, the version, the
  transform, the tier), the install terminal, the lock.
- **The open cabinet**: the door swings; the interior plate shows the
  plugin's internals in three layers:
  - **CONNECTIONS**: the seams it listens on, what enters, what leaves,
    the dependencies (the `WiringDiagram`).
  - **MECHANISM**: the pipeline, the gate order, the tables, the config
    (the `ControlPanel`, the `DocumentWindow`).
  - **EVIDENCE**: the ledger lines, the smoke counts, the known limits,
    the examples (the `TerminalReadout`, the `MeterCounter`).
- **The sections** map from the current template: Where It Fits ->
  the connections; In the Harness -> the wiring; The Problem -> the
  purpose plate; How It Works -> the mechanism; The Config -> the
  control panel; In Action -> the readouts; The Ledger -> the evidence;
  Known limits -> the caveats plate; Related plugins -> the rack strip.
- **The compare**: the flavor pages use the `ShutterWindow` (the RAW vs
  the NORMALIZED) in the mechanism.
- **The lock**: the same big keylock; the closed face is the summary;
  the open state is the documentation.

## 4. The workbench (`/workbench/`)

The bench is a wide instrument bay:

- the input tray (the sample stream, the editable);
- the processing stages (the gate switches: the conversation, the
  reasoning, the tool input, the tool results, the files, the batch);
- the output tray (the six flavor panes);
- the patch cables (the connectors between the stages, the labeled
  endpoints);
- the penalty rail (the tiers) and the strike/reset controls;
- the keyboard and the reduced motion.

## 5. The matrix (`/matrix/`)

The relay array: the matrix of the relays/lamps (the stream states), the
gate switches, the per-flavor smoke table, the live indicator lamps. The
matrix is the "bus" view of the same mechanics.

## 6. The setup (`/setup/`)

The wiring panel:

- the configurator as the control panel (the 14 rockers, the engine
  selector, the profile plate);
- the generated wiring: the bundles list as the terminal block, the patch
  inserts as the wiring diagram, the verification lines as the readouts;
- the four steps as the numbered wiring stages (the add, the patch, the
  restart, the verify);
- the configurable surface as the field table;
- the optional-by-default as the "NORMALLY OPEN" plate bank;
- the ledgers as the logbook plate.

## 7. The versions (`/versions/`)

The counter and the record: the operating set as the meter bank (the
release, the engines, the checks); the changelog as the logbook (the
stamped entries); the invariants as the spec plate; the smoke baseline as
the calibration certificate.

## 8. The models (`/models/`)

The engine selection: the two engine nameplates (the dials or the
segmented switch), the reference routes, the coverage plate, the
per-model notes. The page is the "engine room" of the cabinet.

## 9. The flavors (`/flavors/`)

The specimen board: the seven flavor plates (the six stream + the file),
the chain as the signal path, the roles as the governance plate, the badge
sprite as the stamp sheet.

## 10. The case study (`/case-study/`)

The dossier: the long-form as the bound logbook (the stamped pages, the
phase tabs, the reading gauge as the tape measure), the decision index as
the index plate, the lessons as the closing plate.

## 11. The 404

The disconnected cabinet: the open door, the cut wire, the "NO SIGNAL"
plate, the links home. It stays a standalone page with no external font
dependency.

## 12. The shared behavior

- The door/lock on the landing, the plugins rack, the detail pages, and
  the 404.
- The trays on the modules.
- The background routing on the landing and the plugins page (the
  quieter variant elsewhere).
- The header rail, the base plate, the notice lamp on every page.
- The reduced motion path: the doors open instantly, the trays appear,
  the content is immediate.
