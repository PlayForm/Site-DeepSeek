# 04 - The Implementation Tasks

The ordered task series for the implementing agent. Take them one at a
time; each task ends in a working build and a READY-TO-COMMIT report.
Do not start a task before its dependencies are green.

## The working rules

1. **The build is the arbiter.** `cd Site && pnpm prepublishOnly` exits
   zero; the built output in `Site/Target/` is the evidence. No dev
   server.
2. **Drift after every figure change.** `cd Site && pnpm Drift` passes
   (the content checks; the freshness lines are package mtimes).
3. **The page count stays 24 content pages + 404.**
4. **Build alongside, then swap.** The new components live beside the old
   ones; a page switches only when its replacement passes. No half-built
   page ships.
5. **The tokens first.** No component uses the instrument materials
   before T00 lands.
6. **The accessibility is part of each task**, not a later pass: the real
   buttons, the aria-expanded, the focus, the reduced motion, the
   contrast.
7. **The content is unchanged.** The claims, the counts, the copy voice,
   the page data stay. The new labels are functional strings (the module
   codes, the units, the statuses).
8. **No git mutations.** Report READY-TO-COMMIT with the `Site/` file
   list.
9. **The glyphs through raw-write.** The deliberate typographic
   characters go through raw-write; the prose stays ASCII.

## T00 - The tokens and the materials

- **Goal**: add the instrument material tokens and the depth primitives to
  `Source/Stylesheet/Global.css`; no visual change yet.
- **Spec**: the `--instrument-*` tokens from 01 section 2 (the light and
  the dark); the `--depth-*` values (the cabinet 64, the door 16, the
  faceplate 3, the trim 2, the screen 8); the `--edge-*` bands (the
  cabinet 8, the compartment 3, the module 5, the screen 2); the
  `--mount-gap` (8), `--bay-gap` (24); the `--radius-*` reuse; the
  `--ease-snap` reuse.
- **Acceptance**: the tokens exist; the build passes; the current pages
  are visually unchanged; the dark theme maps the instrument tokens.
- **Files**: `Source/Stylesheet/Global.css`.

## T01 - The Cabinet primitive

- **Goal**: the static extruded shell, the background slot, the shadow.
- **Spec**: the `Cabinet.astro` component: the front rectangle, the top
  polygon, the right polygon, the front frame, the reveal gap, the cast
  shadow, the `Background` slot, the content slot. The geometry from 01
  section 3.1 (the 40/28 offset at 64; the reduced mobile offsets). The
  surfaces use the T00 tokens. No door yet.
- **Acceptance**: the object reads as solid with the shadow disabled; the
  top and the right are visible; the right is darker than the top; the
  front is rectangular; the depth edges are parallel; the mobile depth
  reduces; the build passes.
- **Files**: `Source/Component/Cabinet.astro`, the page that mounts it
  (a demo section first).

## T02 - The Door, the Hinge, the Seam

- **Goal**: the thick hinged door on the cabinet.
- **Spec**: the `CabinetDoor.astro`: the slab, the hinge pivot (the left
  edge), the closure seam, the faceplate slot, the label slot, the lock
  slot, the handle slot. The closed state shows the two depth bands (the
  door 16, the cabinet 72) separated by the seam. The open state swings
  the door around the hinge (the transform-origin left; the perspective
  container; the 240-320ms; the reduced-motion instant reveal). The door
  stays readable; the content never stays angled.
- **Acceptance**: the door is separate from the shell; the hinge is
  physical; the open state reveals the interior slot; the closed state
  shows the seam; the keyboard/focus works; the reduced motion works.
- **Files**: `Source/Component/CabinetDoor.astro`, the demo.

## T03 - The Lock

- **Goal**: the big quarter-turn keylock, the signature interaction.
- **Spec**: the `CabinetLock.astro`: the steel ring, the keyhole, the
  LOCKED/OPEN label, the turn indicator; the states locked/turning/
  unlocked; a real `<button>` labeled "Open cabinet" / "Close cabinet";
  the aria-expanded; the 120-180ms turn; the click unlocks and triggers
  the door; the Esc closes; the focus returns to the lock on close; the
  hidden internals are not focusable when closed.
- **Acceptance**: the lock is keyboard operable; the aria state matches;
  the door opens and closes; the focus moves correctly; the reduced
  motion opens instantly; the contrast passes.
- **Files**: `Source/Component/CabinetLock.astro`, the demo.

## T04 - The Faceplate, the Aperture, the CornerTrims

- **Goal**: the thin plate with the cut opening and the stepped trims.
- **Spec**: the `Faceplate.astro` (the 2-3 unit plate, the cut edge), the
  `Aperture.astro` (the stepped corner caps, the short inner wall, the
  dark cavity), the corner trims as the separate SVG/CSS shapes (the
  upper cap with the downward return, the lower cap with the upward
  return, the side segment, the small tab; the asymmetry preserved; the
  1-2 thickness). The aperture sits on the door's faceplate.
- **Acceptance**: the opening passes through the plate; the cut edge and
  the cavity read separately; the trims are physical (not a uniform
  border); the silhouette is stepped; the build passes.
- **Files**: `Source/Component/Faceplate.astro`,
  `Source/Component/Aperture.astro`, the demo.

## T05 - The DigitWheel and the MeterCounter

- **Goal**: the mechanical counter window.
- **Spec**: the `DigitWheel.astro` (the cell, the tabular digit, the
  divider, the red last wheel), the `MeterCounter.astro` (the label, the
  cells, the unit, the revision). The counter reads as one opening; the
  value is fully legible; the tabular numerals; the red wheel only on the
  last cell; the unit label below/right.
- **Acceptance**: the digits align; the value is legible; the counter
  fits the faceplate; the dark theme; the reduced motion (no rolling
  animation required; if added, it dies under reduced motion).
- **Files**: `Source/Component/DigitWheel.astro`,
  `Source/Component/MeterCounter.astro`, the demo.

## T06 - The InstrumentModule

- **Goal**: the module faceplate with the identity, the readout, the
  Inspect tray.
- **Spec**: the `InstrumentModule.astro`: the identity strip (the name,
  the code, the status lamp), the sentence, the readout slot, the footer
  strip (the status + the Inspect [+]), the telescoping tray (the
  connections, the mechanism, the evidence; the 180-240ms; the
  aria-expanded; the tray in the flow; the selected row span on the
  desktop; the inline expansion on the mobile). The faceplate stays
  visible while open.
- **Acceptance**: the closed face is useful; the tray opens by click and
  keyboard; the focus is managed; the tray does not overlap the
  neighbors; the reduced motion works; the module is reusable for every
  plugin.
- **Files**: `Source/Component/InstrumentModule.astro`, the demo.

## T07 - The PlateTag, the BayHeader, the CabinetHeader

- **Goal**: the labels.
- **Spec**: the `PlateTag.astro` (the stamped tag; the variants from the
  Badge), the `BayHeader.astro` (the marker, the title, the meta, the
  lamp), the `CabinetHeader.astro` (the title plate, the serial, the
  model, the status). The mono labels; the tracking; the uppercase; the
  plate borders.
- **Acceptance**: the hierarchy reads; the tags are not buttons; the
  headers align with the bays; the dark theme.
- **Files**: `Source/Component/PlateTag.astro`,
  `Source/Component/BayHeader.astro`,
  `Source/Component/CabinetHeader.astro`, the demo.

## T08 - The readouts

- **Goal**: the terminal, the document, the bank.
- **Spec**: the `TerminalReadout.astro` (the dark inset, the label, the
  `$`, the copy, the COPIED lamp, the orange rail option), the
  `DocumentWindow.astro` (the light inset, the mono, the line marks),
  the `ReadoutBank.astro` (the banked windows with the seam dividers).
- **Acceptance**: the copy works; the contrast; the bank reads as one
  instrument; the dark theme.
- **Files**: the three components, the demo.

## T09 - The ShutterWindow

- **Goal**: the RAW vs the NORMALIZED shutter.
- **Spec**: the `ShutterWindow.astro`: the two apertures, the sliding
  shutter, the grip, the orange rail on the RAW, the anomaly marks, the
  keyboard (the arrows, the home/end), the reduced-motion static split.
- **Acceptance**: the click/drag/keyboard; the reduced motion; the
  labels; the contrast.
- **Files**: `Source/Component/ShutterWindow.astro`, the demo.

## T10 - The ControlPanel

- **Goal**: the configurator as the control panel.
- **Spec**: the `ControlPanel.astro`: the rocker switches (the 14
  packages), the engine selector, the profile plate, the generated wiring
  (the terminal block + the patch inserts), the verification readouts,
  the copy; the URL/localStorage state; the default server-rendered.
- **Acceptance**: the selection works; the generated output is byte-
  faithful; the URL state; the copy; the keyboard; the mobile.
- **Files**: `Source/Component/ControlPanel.astro`, the setup page swap.

## T11 - The WiringDiagram and the RoutingBackground

- **Goal**: the conduits and the gray network.
- **Spec**: the `WiringDiagram.astro` (the terminal blocks, the labeled
  wires, the junction dots, the 45-degree runs) and the
  `RoutingBackground.astro` (the SVG routes, the over-under crossings,
  the oversized glyphs, the occlusion, the aria-hidden).
- **Acceptance**: the background stays subordinate; no line shows through
  the cabinet; the diagram labels are readable; the SVG weight is
  measured; the reduced motion.
- **Files**: the two components, the landing/plugins page swap.

## T12 - The ModuleRack

- **Goal**: the horizontal rack of the five category cabinets.
- **Spec**: the `ModuleRack.astro`: the five cabinets, the scroll snap,
  the category selector, the keyboard (the arrows, the tab), the
  active/inactive states, the mobile stack.
- **Acceptance**: the rack scrolls; the snap works; the keyboard works;
  the active cabinet; the mobile; the build.
- **Files**: `Source/Component/ModuleRack.astro`, the plugins page swap.

## T13 - The pages

- **Goal**: swap each page to the new system, one page per commit.
- **Order**: the landing, the plugins index, one plugin detail page (the
  canary), the remaining detail pages, the workbench, the matrix, the
  setup, the versions, the models, the flavors, the case study, the 404.
- **Spec**: per 03; each page keeps its content, its data, its meta, its
  JSON-LD.
- **Acceptance**: the page renders; the build; the page count; the Drift;
  the keyboard; the reduced motion; the mobile.

## T14 - The motion, the accessibility, the responsive, the verification

- **Goal**: the cross-cutting pass.
- **Spec**: the motion audit (the lock, the door, the trays, the reduced
  motion), the a11y audit (the focus, the aria, the contrast, the hidden
  internals), the responsive audit (the depth, the rack, the tables, the
  diagrams), the performance (the CSS weight, the SVG, the fonts), the
  final screenshots.
- **Acceptance**: the full build; the Drift; the page count; the
  keyboard-only walkthrough; the reduced-motion walkthrough; the mobile
  walkthrough; the READY-TO-COMMIT.

## The dependencies

```text
T00 -> T01 -> T02 -> T03
                T04 -> T05
T06 -> T07 -> T08
T09, T10, T11, T12 after T06
T13 after the components it uses
T14 last
```

## The first slice

T00, T01, T02, T03, T04, T05 on a single demo section, then T06, then one
plugin detail page (the canary). The rack (T12) and the landing follow
once the module and the cabinet are proven. This is the smallest path to
the signature: the door with the lock opening onto one real plugin.
