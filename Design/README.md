# The Design Transformation

The distilled design system and the ordered task series for turning the
site into one full-width instrument cabinet per page: an extruded shell
whose back runs off the page's top and right edges, a thick white door
standing a visible gap in front of it, and a black interior that holds the
plugin modules and the meters.

| Doc | Read it for |
| --- | --- |
| [00-BRIEF.md](00-BRIEF.md) | the thesis, the page-cabinet sequence, the categories, the reference set, the decisions |
| [01-DESIGN-LANGUAGE.md](01-DESIGN-LANGUAGE.md) | the geometry, the surfaces, the door, the interior, the meters, the typography, the motion, the accessibility, the responsive rules |
| [02-COMPONENT-MAP.md](02-COMPONENT-MAP.md) | every current component -> its new instrument element, plus the new primitives |
| [03-PAGE-TRANSFORMATION.md](03-PAGE-TRANSFORMATION.md) | every page's new layout, the horizontal screen sequence, the door's default state per page |
| [04-IMPLEMENTATION-TASKS.md](04-IMPLEMENTATION-TASKS.md) | the ordered tasks T00-T15, the first slice, the acceptance |
| [05-REFERENCES-AND-DECISIONS.md](05-REFERENCES-AND-DECISIONS.md) | the reference set, the borrowed files, the open decisions |
| [06-THE-BIG-CABINET.md](06-THE-BIG-CABINET.md) | the exact geometry: coordinates, angles, thicknesses, tokens, the responsive reductions |
| [07-REVIEW-AMENDMENTS.md](07-REVIEW-AMENDMENTS.md) | the review's four decisions (the single-activation lock, the door rest, the density rule, the reference board), the build order, and the wording |
| [08-FINAL-DECISIONS.md](08-FINAL-DECISIONS.md) | the four final product decisions (the fixed camera, the field scroll, the display screen, the small-label floor) and the Mode A canary |

## What changed from the previous edition

The previous edition proposed **five small cabinets side by side** in a
horizontal rack, each with its own door, and a page-wide grid of cards
around them. That is retired. The binding requirements now are:

1. **One big cabinet per page**, the full width of the page.
2. Its **back runs off the page's top and right edges**, so the
   protrusion comes from the page edges, not from a floating card.
3. The **door covers the whole front** and stands a visible gap in front
   of it, in the same flat 3D projection, with a 45 degree right side.
4. The **plugin grid is the interior**, not a row of separate cabinets.
5. **Opening the door reveals a black interior** with the modules and the
   real meters.
6. **Scrolling right moves to the next full-page cabinet** (the UI
   plugins), not to a neighbouring card.

The source material is `Site/Reference/`: `Conversation.md`, the eleven
HTML attempts with screenshots, and `technical_precision_documentation/`.
The hard-edged surface and the isometric construction are borrowed
from `~/Developer/Documentation/Module/Ely-GPUI-Components`; the exact
files are cited in 05.

**The first slice**: T00 (the tokens) -> T01 (the isometric engine) ->
T02 (the full-width shell) -> T03 (the interior) -> T04 (the door) ->
T05 (the lock) -> T06 (the meters) -> T07 (the module plates), then **one
full Mode A canary cabinet** (per 07 and 08: the shell, the door, the
lock, one meter shelf, one module with the inspection tray). The hooks
screen, the second screen, the landing, and the rest of the pages follow.
