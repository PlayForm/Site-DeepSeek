# 00 - The Transformation Brief

## What this is

The site is moving from a flat documentation layout (white cards, 1px
hairlines, blue accents) to a **flat-skeuomorphic service-panel instrument
cabinet**: a pronounced obliquely extruded enclosure, a thick hinged door
with a big keylock, a thin instrument faceplate with stepped apertures and
mechanical digit wheels, printed plate labels, and a quiet gray routing
network behind everything.

The source material is `Site/Reference/`: the design conversation
(`Conversation.md`), eleven HTML attempts with screenshots, and the
`technical_precision_documentation/DESIGN.md` token file. This document
set distills that material plus the current site into the system, the
component map, the page map, and the ordered implementation tasks.

## The reference set

- `Conversation.md` - the design reasoning: the enclosure hierarchy, the
  thick upper edge, the module anatomy, the doors, the pronounced
  extrusion, the thick door, the thin faceplate, the apertures, the
  corner trims, the routing background, the acceptance criteria.
- `deepseek_harness_extruded_instrument_cabinet_2/screen.png` - the full
  page attempt: the header rail, the bays, the counter meters, the engine
  cards, the module rack, the workbench, the footer.
- `deepseek_harness_service_panel_instrument_cabinet_2/screen.png` - the
  documentation-style cabinet: the view modes (Overview, Inspection,
  Workbench), the 15 module cards with Inspect trays, the meter counters.
- `deepseek_harness_extruded_service_cabinet_infrastructure/screen.png` -
  the pronounced extrusion: the shell, the bays, the latch, the footer
  plate.
- The other eight attempts and screenshots - the variants to draw from.

## The design thesis

**A field instrument, not a themed card grid.** The page is a cabinet;
sections are fitted bays; plugins are mounted modules; values are recessed
readouts; the internals are revealed by opening the door. The depth is
hard-edged (top and side planes, edge bands, seams, recesses), not soft
(shadows, gradients, glass). The cabinet is the one object that projects
forward; the modules are mounted on its face; the screens sink into it.

**The signature interaction is the door.** Each category cabinet and each
plugin detail page has a thick front door, hinged on the left, with a big
keylock on the right middle. Click the lock: it turns, the door swings
open, and the internals (the mounting plate, the modules, the wiring, the
schematics) are revealed. The closed face stays useful; the open state is
the reward. The modules inside use the smaller telescoping inspection
trays, not the dramatic door.

**The plugin family is ordered in boxes.** Five category cabinets, laid
out in a horizontal rack with scroll snap:

| Cabinet | Role | Plugins |
| --- | --- | --- |
| THE ENGINE | the machinery | hook-dsh-core, plugin-dsh-factory |
| THE FLOW | the pipes (the stream and file normalizers) | normalize-dash, quotes, ellipsis, spaces, invisible, fullwidth, file |
| THE GOVERNORS | the regulators | package-governor, package-pinner, cargo-governor |
| THE SERVICES | the compression and the coaching | ccr, tool-coach |
| THE DISPLAY | the UI and the containers | live-containers (and the future panel) |

The user's example - the pipe plugins in the first box, the visual/UI
plugins in another - is satisfied; the dependency order (the engine
first) is the recommended sequence, and the rack can start at THE FLOW if
the narrative wants the pipes first.

## What is being kept from the current site

- The blue (#0052ff) as the functional accent: selection, active controls,
  the primary engine.
- The orange (#bf3003) for the RAW/stream surfaces, and the red (#c62828)
  for the PIN identity and errors.
- Inter for prose; IBM Plex Mono for labels, readouts, and code.
- The content model (`Content.ts`, `Live.ts`), the page set, the copy
  voice, the build-and-Drift discipline.
- The page structure: hero, sections, the notation, the footer.

## What is changing

- The surfaces: the white canvas becomes the pale instrument field; the
  cards become mounted faceplates; the hairlines become seams and edge
  bands; the flat panels become recessed bays and readouts.
- The depth: the cabinet projects forward (the top and right planes, a
  cast shadow); the door is a thick slab; the faceplate is thin; the
  apertures are cut; the digits sit behind the plate.
- The language: the module codes, the serial plates, the units, the
  status lamps, the fasteners, the hinges, the lock, the printed symbols.
- The interaction: the door and the lock are the signature; the trays are
  the module-level inspection; the horizontal rack is the plugin index.

## The decisions this brief needs

1. **The door scope**: the category cabinets and the plugin detail pages
   (recommended), not every card.
2. **The lock**: a real quarter-turn keylock with a keyhole and a
   shackle-free cylinder (recommended), not a padlock hasp.
3. **The palette**: the instrument neutrals plus the site's blue accent
   (recommended); the full green-gray meter palette only if the brand
   accepts losing the blue dominance.
4. **The first slice**: the plugins page rack (the five cabinets) or one
   plugin detail page (the cabinet with the door). Recommended: one detail
   page first, then the rack.
5. **The horizontal scroll**: the five cabinets with scroll snap and a
   category selector (recommended); the vertical stack on mobile.
6. **The copy**: the existing claims stay; the new labels are short
   functional strings (module codes, units, statuses), not decorative
   hardware poetry.
