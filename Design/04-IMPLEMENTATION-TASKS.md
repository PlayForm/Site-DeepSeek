# 04 - The Implementation Tasks

The ordered task series for the implementing agent. Take them one at a
time; each task ends in a working build and a READY-TO-COMMIT report. Do
not start a task before its dependencies are green.

## The working rules

1. **The build is the arbiter.** `cd Site && pnpm prepublishOnly` exits
   zero; the built output in `Site/Target/` is the evidence. No dev
   server.
2. **Drift after every figure change.** `cd Site && pnpm Drift` passes.
3. **The page count stays 24 content pages + 404.**
4. **Build alongside, then swap.** The new components live beside the old
   ones; a page switches only when its replacement passes.
5. **The tokens first.** No component uses the cabinet materials before
   T00 lands.
6. **The geometry is generated, not eyeballed.** Every polygon comes from
   `Source/Library/Iso.ts` or from a `calc()` expression; no hand-tuned
   pixel that disagrees with 06.
7. **The accessibility is part of each task**: the real buttons, the
   `inert` states, the focus, the reduced motion, the contrast.
8. **The content is unchanged.** The claims, the counts, the copy voice,
   the page data stay. The new labels are functional strings.
9. **No git mutations.** Report READY-TO-COMMIT with the `Site/` file
   list.
10. **The glyphs through raw-write.** The deliberate typographic
    characters go through raw-write; the prose stays ASCII.

## T00 - The tokens and the materials

- **Goal**: add the cabinet and interior tokens and the depth primitives
  to `Source/Stylesheet/Global.css`; no visual change yet.
- **Spec**: the tokens from 01 section 3 (the shell, the interior, the
  modules, the meters, the lamps; the light and the dark maps); the
  `--cabinet-depth` (72/48/24/0), `--door-thickness` (16/14/12),
  `--door-gap` (8/7/6), `--lintel-h`, `--stile-w`, `--base-h`,
  `--field-gap` (12), `--module-h` (116); the `--iso-k` (1); the radii
  (0/2/4/999); the reuse of `--ease-snap` and `--ease-crisp`; the type
  scale's 11px floor for the plate labels only.
- **Acceptance**: the tokens exist; the build passes; the current pages
  are visually unchanged; the dark theme maps every new token.
- **Files**: `Source/Stylesheet/Global.css`.

## T01 - The isometric engine

- **Goal**: the ported geometry library and its test.
- **Spec**: `Source/Library/Iso.ts`: `project(x, y, z) = (x + z, y - z)`;
  `faces(block)` returning the front, top, and right polygons in the
  section 1 order; `bounds(blocks)`; `painted(blocks)` (the topological
  order, ported from Ely `engine.ts`); `rise(t)`; `inside(p, poly)`;
  `points(poly)` for the SVG emitter. A `Block` type with `x, y, z, w, d,
  h, accent`. A unit test asserting the reference viewport's four shell
  polygons against the constants in 06 section 2.
- **Acceptance**: the test passes; the shell polygons equal 06; no
  runtime dependency; the module is imported only by build-time code and
  by the meter components.
- **Files**: `Source/Library/Iso.ts`, `Source/Library/Iso.test.mjs` (or
  the existing test convention).

## T02 - The shell

- **Goal**: the page-sized cabinet's stationary parts.
- **Spec**: `PageCabinet.astro` with the front, the top plane, the right
  wall, the lintel, the stile, and the base plate. The faces are `div`s
  with `clip-path: polygon(calc(...))` per 06 section 2, one solid fill
  each, a 1px line where the geometry needs one (the front's inset top
  and right edges, the one rotated 45 degree line at the top plane's left
  edge). No SVG, no shadow. The front's bottom bleeds 72px below the
  page. The lintel carries the title slot, the serial slot, the tabs
  slot, the lamps slot.
- **Acceptance**: at 1440x900 the polygons match 06; the back touches the
  page's top and right edges; the top-left triangle is page field; the
  right wall is darker than the top; the front is pure white; the object
  reads solid with every shadow off; the 45 degree angle holds at 1024,
  1280, 1440, and 1920; the mobile depths apply.
- **Files**: `Source/Component/PageCabinet.astro`,
  `Source/Component/CabinetShell.astro`, a demo page section.

## T03 - The interior

- **Goal**: the black box and its frame.
- **Spec**: `InteriorCavity.astro`: the aperture, the 20px reveal, the
  left and bottom walls, the field plate, the shelf frame (96), the field
  frame (428), the status strip (32). The plate is frontal and
  unprojected. The cavity is inert when the door is closed. The field
  frame is a labelled scroll region with a stable gutter and a 24px fade.
- **Acceptance**: the interior is the darkest surface; the walls read as
  depth; the field scrolls without trapping the page; the shelf and the
  status strip stay fixed; the dark theme keeps the interior darker than
  the front.
- **Files**: `Source/Component/InteriorCavity.astro`,
  `Source/Component/FieldPlate.astro`.

## T04 - The door

- **Goal**: the slab, the gap, the thickness, the cover, the swing.
- **Spec**: `CabinetDoor.astro`: the slab 1288 x 596 x 16, the
  displacement `-(gap + t)` / `+(gap + t)`, the top and right faces as
  clipped parallelograms, the gap slot in `--cabinet-gap`, the cover
  content (the code, the title, the claim, the count, the lamps, the
  faint grid), the hinge knuckles, the `perspective: 8000px` container,
  the `rotateY(-88deg)` swing at 320ms, the static hinge edge at the end,
  the flat `scaleX` fallback, the reduced-motion `hidden` toggle.
- **Acceptance**: the door's front face lands flush at the page's left
  and on the base plate; the 16px band and the 8px slot are visible on
  the top and right only; the cover is readable; the swing never leaves
  the door covering the interior at rest; the reduced motion is instant;
  the flat fallback matches the final state.
- **Files**: `Source/Component/CabinetDoor.astro`,
  `Source/Component/DoorCover.astro`.

## T05 - The lock, the close plate, the focus

- **Goal**: the signature control and its state machine.
- **Spec**: `DoorLock.astro` (the 72px plate, the ring, the keyhole, the
  LOCKED/OPEN legend, the 160ms turn), `ClosePlate.astro` (the 56 x 72
  plate on the stile, open state only), the transparent `.door-hit`
  button over the door's face with `aria-expanded` / `aria-controls`, the
  `inert` swap, the Esc close, the focus move to the first module on open
  and back to the door on close, the `sessionStorage` persistence.
- **Acceptance**: the door opens by click, by the lock, by Enter and
  Space, and closes by Esc and the close plate; the aria state matches;
  the focus never lands in an inert subtree; the ring is visible on the
  door's outline; the state survives a reload and a deep link overrides
  it.
- **Files**: `Source/Component/DoorLock.astro`,
  `Source/Component/ClosePlate.astro`, `Source/Script/Door.mjs`.

## T06 - The meters

- **Goal**: the isometric meter bodies on the shelf.
- **Spec**: `IsoMeter.astro` (the body, the plinth, the front window, the
  top code, the right ticks, the seal), `DigitWheel.astro` (the cell, the
  tabular digit, the divider, the red last wheel), `ApertureTrim.astro`
  (the four separate stepped shapes), `MeterShelf.astro` (the three
  meters and the calibration plate). The bodies are inline SVG generated
  by `Iso.ts` at build time; the digits are HTML on the front face. The
  values come from `Content.ts`; each meter carries `role="img"` with a
  sentence label and the same value in text.
- **Acceptance**: the three bodies read as one instrument; the digits are
  legible and tabular; the red wheel is the last one only; the trims are
  four shapes, not a border; the label matches the value; the dark theme.
- **Files**: `Source/Component/IsoMeter.astro`,
  `Source/Component/DigitWheel.astro`,
  `Source/Component/ApertureTrim.astro`,
  `Source/Component/MeterShelf.astro`.

## T07 - The module plates and the field

- **Goal**: the plugin grid as the interior's content.
- **Spec**: `ModulePlate.astro` (the identity, the sentence, the footer,
  the Inspect disclosure), `ModuleField.astro` (the 4/3/2/1 columns, the
  bay groups, the scroll, the fade), `FieldGauge.astro` (the track on the
  right wall, the thumb, the count). The plate is 300 x 116 at 1440; the
  bay group headers are `BayHeader`s on the plate.
- **Acceptance**: 14 plates in four groups; the field scrolls; the gauge
  tracks the scroll; the plate stays readable at 1024 and 768; the
  pending plates carry the amber lamp; the count updates with the filter.
- **Files**: `Source/Component/ModulePlate.astro`,
  `Source/Component/ModuleField.astro`,
  `Source/Component/FieldGauge.astro`.

## T08 - The module tray

- **Goal**: the module's own reveal.
- **Spec**: `ModuleTray.astro`: the dark tray, the three columns
  (CONNECTIONS, MECHANISM, EVIDENCE) as light insets, the detail link, the
  `grid-column: 1 / -1` expansion, the `grid-template-rows: 0fr -> 1fr`
  height animation at 220ms, the `aria-expanded` / `aria-controls`, the
  content from a `<template>` cloned on first open.
- **Acceptance**: the tray opens by click and keyboard; the plate stays
  visible; the neighbours do not overlap; the reduced motion is instant;
  the tray's weight is not paid until it opens.
- **Files**: `Source/Component/ModuleTray.astro`.

## T09 - The screen sequence

- **Goal**: the horizontal page set.
- **Spec**: `ScreenSequence.astro`: the scroller, the two `100vw` panels,
  the snap, the tablist and the tabpanels, the IntersectionObserver, the
  hash (`replaceState`), the arrows / Home / End, the position readout on
  the base plate, the reduced-motion jump, the mobile stack.
- **Acceptance**: the tabs, the arrows, the swipe, and the hash all agree;
  the body has no vertical overflow; the focus order follows the screen;
  the back button is unaffected; the sequence works at 768 and at 1920.
- **Files**: `Source/Component/ScreenSequence.astro`,
  `Source/Component/ScreenTab.astro`, `Source/Script/Sequence.mjs`.

## T10 - The readouts

- **Goal**: the terminal, the document, the bank, the shutter.
- **Spec**: `TerminalReadout.astro` (the dark window in a light inset, the
  label, the `$`, the copy, the COPIED lamp, the orange rail option),
  `DocumentWindow.astro` (the light inset, the mono, the line marks),
  `ReadoutBank.astro` (the banked windows with the seam dividers),
  `ShutterWindow.astro` (the two apertures, the shutter, the keyboard, the
  reduced-motion static split).
- **Acceptance**: the copy works; the contrast; the bank reads as one
  instrument; the shutter is keyboard operable; the dark theme.
- **Files**: the four components.

## T11 - The control panel

- **Goal**: the configurator inside the cabinet.
- **Spec**: `ControlPanel.astro`: the 14 rockers, the engine selector, the
  profile plate, the generated wiring (the terminal block and the patch
  inserts), the verification readouts, the copy; the URL and localStorage
  state; the server-rendered default.
- **Acceptance**: the selection works; the output is byte-faithful; the
  URL state; the keyboard; the mobile.
- **Files**: `Source/Component/ControlPanel.astro`, the setup page swap.

## T12 - The wiring and the routing texture

- **Goal**: the conduits and the etched network.
- **Spec**: `WiringDiagram.astro` (the terminal blocks, the labelled
  wires, the junctions, the 45 degree runs) and `RoutingTexture.astro`
  (the plate's routes at 8-12 percent, the crossings, the glyphs,
  `aria-hidden`, one SVG per plate).
- **Acceptance**: the texture stays subordinate and never carries
  meaning; the diagram's labels are readable; the SVG weight is measured
  per page; the texture does not repeat per module.
- **Files**: the two components.

## T13 - The pages

- **Goal**: swap each page, one page per commit.
- **Order**: the registry screen 01 (the canary), screen 02, the landing,
  one detail page (the second canary), the remaining detail pages, the
  workbench, the matrix, the setup, the versions, the models, the
  flavors, the case study, the 404.
- **Spec**: per 03; each page keeps its content, its data, its meta, its
  JSON-LD.
- **Acceptance**: the page renders; the build; the page count; the Drift;
  the keyboard; the reduced motion; the mobile; the door's default state
  is the one 03 names.
- **Files**: the pages and the shared layout.

## T14 - The audits

- **Goal**: the cross-cutting pass.
- **Spec**: the motion audit (the lock, the door, the trays, the
  sequence), the a11y audit (the inert states, the focus order, the
  tablist, the scroll region, the contrast, the skip link), the responsive
  audit (the five depth steps, the field columns, the sequence stack), the
  performance audit (the CSS weight, the SVG count, the no-canvas rule,
  the fonts unchanged).
- **Acceptance**: the keyboard-only walkthrough; the reduced-motion
  walkthrough; the mobile walkthrough; the Lighthouse or equivalent
  numbers recorded; no layout shift on load; no per-frame JavaScript.
- **Files**: the report, not the code.

## T15 - The verification and the handoff

- **Goal**: the final gate.
- **Spec**: the full build; the Drift; the page count (24 + 404); the
  claim audit (the pending packages, the counts, the versions); the
  screenshots at 1440x900 light and dark, 1024, 768, 390; the
  READY-TO-COMMIT report with the `Site/` file list.
- **Acceptance**: every line of 06 section 9 and 01 section 14 holds; the
  install boxes do not promise a 404; the copy voice is unchanged.

## The dependencies

```text
T00 -> T01 -> T02 -> T03 -> T04 -> T05
                        T06, T07 after T03
T07 -> T08
T09 after T02 (the lintel) and T03
T10, T11, T12 after T07
T13 after the components it uses
T14, T15 last
```

## The first slice

T00 through T07, then **one plugin detail page** as the canary (per 07):
it exercises the cabinet, the door, the lock, the faceplate, the
aperture, the counter, the mounting plate, the module, and the tray. The
hooks screen of `/plugins/` follows the canary; then screen 02 and the
landing. This is the smallest path to the signature: one full-width
cabinet, one door that opens onto one real plugin, and the meters that
prove the interior is an instrument.
