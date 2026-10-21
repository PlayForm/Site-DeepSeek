# 02 - The Component Map

Every current component maps to one instrument element. The rule holds: a
component keeps its content contract and its data props; only the surface,
the anatomy, and the interaction change. The new primitives come first,
the current components follow, and the Ely borrowings are last.

## 1. The new primitives

| Primitive | What it is | Anatomy |
| --- | --- | --- |
| `PageCabinet` | the page-sized assembly | the shell, the lintel, the stile, the base plate, the interior, the door; one per page |
| `CabinetShell` | the extruded box | the front (pure white), the top plane, the right wall, the 1px line; built with `calc()` clip-path polygons |
| `CabinetLintel` | the fixed head band | the h1, the serial, the screen tabs, the status lamps, the mode switch |
| `CabinetStile` | the fixed right band | the latch, the close plate, the hinge knuckles |
| `BasePlate` | the bottom rail | the spec line, the revision, the organization, the copyright, the field gauge |
| `CabinetDoor` | the thick slab | the face, the top face, the right face, the gap, the hinge, the swing state |
| `DoorCover` | the printed cover | the category code, the title, the claim, the module count, the lamps, the calibration grid |
| `DoorLock` | the quarter-turn cylinder | the ring, the keyhole, the LOCKED/OPEN legend, the turn indicator; locked/turning/released |
| `ClosePlate` | the fixed close control | a 56 x 72 plate on the stile, visible only when open |
| `InteriorCavity` | the black box | the void, the left and bottom walls, the plate, the clip |
| `FieldPlate` | the mounting plate | the flat frontal plate, the routing texture at 8-12 percent, the 1px interior line |
| `MeterShelf` | the fixed instrument shelf | the three meters, the calibration plate, the shelf's front edge |
| `IsoMeter` | the isometric meter body | the front (the window), the top (the model code), the right (the ticks), the plinth, the seal |
| `ApertureTrim` | the stepped black corner | four separate shapes: the upper cap, the lower cap, the side segment, the tab |
| `DigitWheel` | the mechanical digit | the tabular numeral, the 1px divider, the red last wheel |
| `ModuleField` | the module grid | 4/3/2/1 columns, the scroll, the fade, the gauge |
| `ModulePlate` | the mounted faceplate | the identity strip, the sentence, the footer, the Inspect disclosure |
| `ModuleTray` | the module's reveal | the dark tray, the three columns, the detail link |
| `FieldGauge` | the scroll indicator | the track on the right wall, the thumb, the count |
| `ScreenSequence` | the horizontal page set | the scroller, the snap, the tabs, the hash, the keyboard |
| `ScreenTab` | one screen's control | the code, the title, the count, the active marker |
| `PlateTag` | the stamped label | the mono uppercase text, the optional code, the optional lamp |
| `BayHeader` | the bay's header rail | the marker, the title, the meta, the lamp |
| `StatusLamp` | the indicator | the 6px lamp, the colour meaning, the text label |
| `TerminalReadout` | the command window | the label plate, the `$`, the command, the copy, the COPIED lamp |
| `DocumentWindow` | the light inset | the near-white window, the mono, the line marks, the copy |
| `ReadoutBank` | the banked windows | the shared frame, the seam dividers |
| `ShutterWindow` | the RAW/NORMALIZED split | the two apertures, the sliding shutter, the orange rail, the keyboard |
| `ControlPanel` | the setup surface | the rockers, the engine selector, the profile plate, the generated wiring |
| `WiringDiagram` | the conduit schematic | the terminal blocks, the labelled wires, the junctions, the 45 degree runs |
| `RoutingTexture` | the etched network | the plate's routes, the crossings, the glyphs; `aria-hidden` |
| `PushButton` | the execution control | the hard-edged cap, the short travel, the label, the lamp |
| `EngravedMark` | the etched brand mark | the same SVG in the three shell tones |
| `NoticeLamp` | the transient notice | the plate, the mono message, the progress line, 2.6s |
| `LeverSwitch` | the theme control | the two positions, the lever, the active lamp |
| `HeaderRail` | the fixed site header | the brand plate, the 9 tabs, the version plate, the lever, the mobile tray |
| `DisconnectedCabinet` | the 404 | the open door off one hinge, the cut cable, the NO SIGNAL plate |

## 2. The current components

### PageHero -> CabinetLintel + DoorCover

- **Now**: the h1 and one or two sub lines.
- **New**: two pieces. The **lintel** keeps the h1 (24/640) and the serial,
  always visible, on the fixed front above the door. The **cover** carries
  the large title, the claim, the module count, and the lamps, on the door.
  The h1 is never duplicated: the cover's title is a `<p>`, not a second
  heading, unless the page has no lintel title.
- **States**: the default; the compact (the detail pages).

### SectionHeader -> BayHeader

- **Now**: the blue marker, the title, the mono meta.
- **New**: the bay's rail on the interior plate: the engraved marker (the
  blue, the red, the orange, or the grey, by the bay's role), the title,
  the meta, the right-aligned lamp. The rail is a 1px rule with a 3px
  marker, not a floating heading.

### Badge -> PlateTag

- **Now**: the mono chip with variants.
- **New**: the stamped tag: the mono uppercase, 1px border, 2px radius,
  the optional code, the optional lamp. primary -> the blue tag; classic
  -> the ink tag; effect -> the blue-tinted tag; flavor -> the flavour
  tag; muted -> the neutral; pending -> the amber tag (the publish state).
- **States**: default, active, disabled, pending.

### Card -> ModulePlate + ModuleTray

- **Now**: the hairline card: the name, the sentence, the description, the
  install row, the tags.
- **New**: the white faceplate on the black plate: the identity strip (the
  code, the name, the lamp), the sentence, the footer (the check count and
  the Inspect [+] disclosure), and the tray. The install row moves to the
  detail page and the ingest terminal; the card keeps a one-line link.
- **States**: closed, hovered, focused, open, loading, empty, error,
  stale, pending. The plate stays visible while the tray is open.
- **Content mapping**: the name -> the identity; the sentence -> the
  sentence; the desc -> the tray's evidence; the install -> the detail
  page; the tags -> the plate tags; the href -> the module's detail page.

### StatsBand -> MeterShelf

- **Now**: three cells in one hairline band.
- **New**: the fixed shelf with three isometric meters. The checks meter
  shows the Classic and Effect-TS totals as two windows in one body; the
  release meter shows the version with its last two wheels red; the
  modules meter shows the screen's count. The calibration plate carries
  the revision and the calibration date.
- **States**: loaded, stale (the calibration due lamp), error (dashes and
  the red lamp).

### Terminal -> TerminalReadout

- **Now**: the hairline panel, the bar, the command, the copy.
- **New**: the dark window inside a light inset: the label plate, the `$`
  prompt, the command, the copy, the transient COPIED lamp. The orange
  rail for the RAW and input surfaces.
- **States**: default, copied, disabled (the pending package).

### TerminalTray -> ReadoutBank

- **Now**: a set of terminal panes.
- **New**: the banked windows in one recessed frame, each with its label;
  the seams divide them; the bank reads as one instrument.

### CodeBlock -> DocumentWindow

- **Now**: the syntax-highlighted block.
- **New**: the light inset: the near-white window, the 1px line, the mono,
  the line marks, the copy control.

### Compare -> ShutterWindow

- **Now**: the draggable split.
- **New**: two apertures (RAW and NORMALIZED) with the sliding shutter;
  the RAW carries the orange rail and the anomaly marks; the keyboard
  (arrows, Home, End); the reduced-motion static split.

### Configurator -> ControlPanel

- **Now**: the toggles, the engine, the profile, the generated output.
- **New**: the interior control panel: the 14 labelled rockers with lamps,
  the engine selector (the segmented switch), the profile plate, the
  generated wiring (the terminal block and the patch inserts), the
  verification lines; the copy as a push button. The same URL and
  localStorage state, the same server-rendered default.

### Showcase -> Bay

- **Now**: the tab switcher and the terminal panes.
- **New**: the bay instrument: the rail tabs with the active marker, the
  content as the readout, the status strip.

### Seams -> WiringDiagram

- **Now**: the seam diagram row.
- **New**: the conduit schematic: the terminal blocks, the labelled wires,
  the junction dots, the 45 degree runs.

### InstallDemo -> IngestTerminal

- **Now**: the install command and the copy.
- **New**: the ingest terminal: the plate label, the dark window with the
  command, the copy, the dependency and target notes.

### FlavorBadge -> FlavorTag

- **Now**: the flavour chip.
- **New**: the flavour plate tag: the orange for the raw, the blue for the
  normalised, the flavour number, the label.

### SupportsButton -> PushButton

- **Now**: the support call-to-action.
- **New**: the hard-edged cap with the short travel, the label, the focus
  ring, the optional lamp.

### BrandIcon -> EngravedMark

- **Now**: the brand glyph.
- **New**: the etched mark in the three shell tones, optically aligned to
  the plate's grid (Ely's `mark.ts` draws its own logo exactly this way).

### ArrowIcon -> IndicatorNeedle

- **Now**: the decorative arrow.
- **New**: the small needle or chevron, in the muted ink, `aria-hidden`.

### Concept -> SchematicPanel

- **Now**: the titled concept and the optional diagram.
- **New**: the schematic panel: the title plate, the diagram (the Mermaid
  SVG or the wiring), the notation, in a light inset on the dark plate.

### The footer -> BasePlate

- **Now**: the nav links, the note, the copyright.
- **New**: the base plate: the engraved spec line, the revision, the
  organization, the copyright, and (on the registry screens) the field
  gauge and the screen position. The nine nav links live in the fixed
  header, so the base plate is a spec plate, not a second nav.

### The toast -> NoticeLamp

- **Now**: the transient status.
- **New**: the notice plate: the rail, the mono message, the progress line,
  the same 2.6s life.

### The theme toggle -> LeverSwitch

- **Now**: the LIGHT/DARK chip.
- **New**: the two-position lever with the LIGHT and DARK plates, the
  lever, the active lamp; the same localStorage pin and OS fallback.

### The nav -> HeaderRail

- **Now**: the nine links.
- **New**: the fixed rail: the brand plate, the nine tabs with the blue
  active marker, the version plate, the lever, the mobile tray. The rail
  sits above the cabinet's top plane and is the only element with a
  translucent ground.

### The 404 -> DisconnectedCabinet

- **Now**: the standalone error page.
- **New**: the disconnected cabinet: the shell, the interior black and
  empty, the door hanging off one hinge at 12 degrees, the cut cable, the
  NO SIGNAL plate, the links home. It keeps its own shell with no external
  font dependency.

## 3. The screens and their modules

The registry is a horizontal sequence of page-sized cabinets. The data is
derived from `Content.ts`, never hard-coded in a page.

| Screen | Code | Modules | Bay groups |
| --- | --- | --- | --- |
| THE HOOKS | CAB-01 | 14 | THE MACHINERY (core, factory), THE GOVERNORS (3), THE FLOW (7), THE SERVICES (ccr, tool-coach) |
| THE DISPLAY | CAB-02 | 1 + 1 planned | THE CONTAINERS (live-containers), THE PANEL (planned preview) |

The machinery is in screen 01 on purpose: the hooks depend on it, and the
door should reveal the whole system, not a subset of it. If the field
becomes too dense, moving core and factory to their own screen is a
change to the screen data only, not to the layout.

Screen 03 exists only when a third category exists. The sequence is
data-driven: `Screens` is an array, and the tabs, the hash, the snap
points, and the base plate's position readout all come from it.

## 4. The Ely borrowings

| Ely file | What is taken | Where it lands |
| --- | --- | --- |
| `frontend/src/iso/engine.ts` | the `Block` model, `faces()`, `painted()`, `bounds()`, `inside()`, `rise()` | `Source/Library/Iso.ts`, the meter and mark geometry |
| `frontend/src/iso/draw.ts` | the paint order (right, front, top), one fill per face, one stroke per drawing, the `accent` flag | the shell and meter faces |
| `frontend/src/iso/models.ts` | the model-as-data idiom (`b(x, z, w, d, h, y, accent)`, the beat sweep) | the meter models, the mark |
| `frontend/src/iso/mark.ts` | the polygon emitter and the padded bounds | `EngravedMark` |
| `frontend/src/iso/Iso.tsx` | `role="img"` plus a label on a drawn object, the reduced-motion still path | every `IsoMeter`, the mark |
| `frontend/src/styles.css` | the token set, `--iso-line` / `--iso-side` / `--iso-shade`, the focus ring, the skip link, the `.button` anatomy, the 160ms ease-out, the reduced-motion reset | `Global.css`, the shell tokens, `PushButton`, the focus system |
| `frontend/src/theme.ts` | the external-store mode hook and the localStorage pin | the door and theme state stores |
| `gpui-components.md` | the catalog anatomy: `SegmentedControl`, `Meter`, `Gauge`, `Statistic`, `PropertyGrid`, `KeyValueList`, `RowExpansion`, `Accordion`, `ToolCallCard`, `AgentStatus`, `CommandBlock`, `LogViewer`, `BeforeAfter`, `TableToolbar`, `Elevation`, `ReducedMotionProvider` | the screen tabs, the meters, the module trays, the terminals, the matrix, the compare, the theme |

Ely's isometric projection is **not** taken; the site's frontal oblique
replaces it (see 01 section 2). Ely's sound-on-hover (`marimba.ts`) is
not taken: a documentation site must not make noise.
