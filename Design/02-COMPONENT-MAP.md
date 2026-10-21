# 02 - The Component Map

Every current component maps to one instrument element. The rule: a
component keeps its content contract and its data props; only the surface,
the anatomy, and the interaction change. The new primitives are listed
first; the current components follow.

## The new primitives

| Primitive | What it is | Anatomy |
| --- | --- | --- |
| `Cabinet` | the extruded enclosure | the shell (the top, the right, the front frame), the background slot, the cast shadow, the reveal gap |
| `CabinetDoor` | the thick hinged front | the slab, the hinge (the left pivot), the closure seam, the faceplate, the apertures, the trims, the labels, the lock, the handle |
| `CabinetLock` | the quarter-turn keylock | the steel ring, the keyhole, the LOCKED/OPEN label, the turn indicator; the states locked/turning/unlocked; a real button |
| `Faceplate` | the thin plate | the 2-3 unit plate, the cut edge, the mounting |
| `Aperture` | the cut opening | the stepped black corner trims, the short inner wall, the dark cavity |
| `DigitWheel` | the mechanical digit cell | the tabular digit, the divider, the red last wheel |
| `MeterCounter` | the counter window | the label, the digit cells, the unit, the revision |
| `MountingPlate` | the interior back plate | the plate, the rails, the module mounts, the wiring stubs |
| `ModuleRack` | the horizontal cabinet rack | the five cabinets, the scroll snap, the selector, the keyboard |
| `PlateTag` | the stamped label | the mono uppercase text, the optional code, the optional lamp |
| `BayHeader` | the compartment header | the marker bar, the title, the meta, the status lamp |
| `StatusLamp` | the indicator | the 6-8px lamp, the color meaning, the optional label |
| `WiringDiagram` | the conduit schematic | the routes, the terminal blocks, the labels, the junctions |
| `RoutingBackground` | the gray network | the SVG routes, the crossings, the glyphs, the occlusion |
| `PushButton` | the execution button | the hard-edged cap, the short travel, the label |

## The current components

### PageHero -> CabinetHeader

- **Now**: the h1 + the sub lines.
- **New**: the cabinet header plate: the title (the Inter display), the
  sub (the body), the serial/model plate (the mono, the right-aligned),
  the status lamp, the optional badges as the `PlateTag`s. The header
  sits on the fixed shell above the door, not on the door itself.
- **States**: the default; the compact (the interior pages).

### SectionHeader -> BayHeader

- **Now**: the blue marker + the title + the mono meta.
- **New**: the bay header rail: the engraved marker (the blue, the red,
  or the orange, by the bay's role), the title, the meta (the mono
  uppercase), the right-aligned status lamp. The rail is the top edge of
  the recessed bay; it reads as a label plate, not a floating heading.

### Badge -> PlateTag

- **Now**: the mono chip with the variants.
- **New**: the stamped plate tag: the mono uppercase label, the 1px
  border, the 2-4px radius, the optional code, the optional lamp. The
  variants map: primary -> the blue tag; classic -> the ink tag; effect ->
  the blue-tinted tag; flavor -> the flavor tag; muted -> the neutral.
- **States**: the default; the active (the blue fill); the disabled (the
  muted).

### Card -> InstrumentModule

- **Now**: the hairline card with the name, the sentence, the desc, the
  install row, the tags.
- **New**: the mounted faceplate: the identity strip (the name, the code,
  the status lamp), the sentence, the primary readout (the meter, the
  terminal, the preview), the footer strip (the status + the Inspect [+]),
  and the telescoping tray (the connections, the mechanism, the evidence).
- **States**: closed, hovered, focused, selected, open, loading, empty,
  error, stale. The faceplate stays visible while the tray is open.
- **Content mapping**: the name -> the identity; the sentence -> the
  purpose; the desc -> the body; the install -> the terminal readout; the
  tags -> the plate tags; the href -> the module's detail page.

### StatsBand -> MeterBank

- **Now**: the three cells (the packages, the checks, the release).
- **New**: the meter bank: three counter windows on the cabinet's face,
  each with the label, the digit cells, the unit, and the revision. The
  checks cell shows `1314 + 1324` as two windows or one dual window; the
  release shows `0.1.0`; the packages show `31`.
- **States**: the loaded; the stale (the calibration date); the error (the
  dashes, the red lamp).

### Terminal -> TerminalReadout

- **Now**: the hairline panel, the bar, the command, the copy.
- **New**: the dark recessed terminal window on the faceplate: the label
  plate (the mono, the dot separators), the `$` prompt, the command, the
  copy control, the transient COPIED lamp. The orange rail for the
  input/raw surfaces.
- **States**: the default; the copied; the disabled (the pending package).

### TerminalTray -> ReadoutBank

- **Now**: the set of terminal panes.
- **New**: the bank of readout windows in one recessed frame, each with
  its label; the dividers are the seams; the bank reads as one instrument.

### CodeBlock -> DocumentWindow

- **Now**: the syntax-highlighted block.
- **New**: the light inset document window (the pale recess, the mono, the
  line marks); the top-left label plate; the copy control.

### Compare -> ShutterWindow

- **Now**: the draggable split.
- **New**: the two apertures (the RAW and the NORMALIZED) with the sliding
  shutter: the RAW pane carries the orange rail and the anomaly marks; the
  handle is the shutter grip; the keyboard (the arrows, the home/end); the
  reduced motion static split. The shutter is the "sliding shutter" door
  mechanism from the reference.

### Configurator -> ControlPanel

- **Now**: the toggles, the engine, the profile, the generated output.
- **New**: the control panel: the bank of the 14 toggle switches (the
  labeled rockers with the state lamps), the engine selector (the
  segmented switch or the small dial), the profile name plate, the
  generated wiring (the terminal block list + the patch inserts) and the
  verification lines in the readout windows; the copy as the push button.
- **States**: the default; the dirty; the copied; the invalid.

### Showcase -> Bay

- **Now**: the tab switcher + the terminal panes.
- **New**: the bay instrument: the rail tabs (the flat tabs with the
  active marker), the content as the readout, the status strip.

### Seams -> WiringDiagram

- **Now**: the seam diagram row.
- **New**: the conduit schematic: the terminal blocks, the labeled wires,
  the junction dots, the 45-degree runs; the "what enters, what leaves"
  story.

### InstallDemo -> IngestTerminal

- **Now**: the install command + the copy.
- **New**: the ingest terminal: the plate label ("INGEST COMMAND"), the
  dark readout with the command, the copy, the verification note (the
  dependencies, the target).

### FlavorBadge -> FlavorTag

- **Now**: the flavor chip.
- **New**: the flavor tag: the color-coded plate tag (the orange for the
  raw, the blue for the normalized), the code (the flavor number), the
  label.

### SupportsButton -> PushButton

- **Now**: the support CTA.
- **New**: the hard-edged push button with the short travel; the label;
  the focus ring; the optional lamp.

### BrandIcon -> EngravedMark

- **Now**: the brand glyph.
- **New**: the etched/engraved mark on the plate; the same SVG, the
  optical alignment, the optional stamped border.

### ArrowIcon -> IndicatorNeedle

- **Now**: the decorative arrow.
- **New**: the small indicator needle/chevron; the ink-muted; the
  `aria-hidden`.

### Concept -> SchematicPanel

- **Now**: the titled concept + the optional diagram.
- **New**: the schematic panel: the title plate, the diagram (the Mermaid
  SVG or the wiring), the notation; the recessed document window.

### The footer -> BasePlate

- **Now**: the nav links, the note, the copyright.
- **New**: the base plate: the engraved links, the spec line, the
  revision, the organization, the copyright; the plate is the cabinet's
  bottom rail.

### The toast -> NoticeLamp

- **Now**: the transient status.
- **New**: the notice plate/lamp: the rail, the mono message, the progress
  line; the same 2.6s life.

### The theme toggle -> LeverSwitch

- **Now**: the LIGHT/DARK chip.
- **New**: the two-position lever switch (the LIGHT and the DARK plates,
  the lever, the active lamp); the same localStorage and OS behavior.

### The nav -> HeaderRail

- **Now**: the 9 links.
- **New**: the rail tabs on the fixed header: the active tab gets the blue
  marker; the brand plate; the version plate; the theme lever; the mobile
  menu as the sliding tray.

### The 404 -> DisconnectedCabinet

- **Now**: the standalone error page.
- **New**: the disconnected cabinet: the open door, the cut wire, the
  "NO SIGNAL" plate, the links home; the same no-external-dependency rule.

## The plugin categories and the module rack

The five cabinets and their modules:

| Cabinet | Modules |
| --- | --- |
| THE ENGINE | hook-dsh-core, plugin-dsh-factory |
| THE FLOW | normalize-dash, normalize-quotes, normalize-ellipsis, normalize-spaces, normalize-invisible, normalize-fullwidth, normalize-file |
| THE GOVERNORS | package-governor, package-pinner, cargo-governor |
| THE SERVICES | ccr, tool-coach |
| THE DISPLAY | live-containers |

Each module inside a cabinet is an `InstrumentModule` with the identity,
the readout, the Inspect tray, and the link to its detail page. The
cabinet's door and lock are the category-level reveal; the module trays
are the per-plugin reveal. The detail page repeats the cabinet pattern at
the single-plugin scale.
