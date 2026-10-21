# 00 - The Transformation Brief

## What this is

The site is moving from a flat documentation layout (white cards, 1px
hairlines, blue accents) to **one full-width instrument cabinet per page**:
an extruded shell whose back runs off the page's top and right edges, a
thick white door standing a visible gap in front of the front face, and a
black interior that holds the plugin modules and the real meters.

The previous edition of this brief proposed five small cabinets in a
horizontal rack. That is retired. Five cabinets side by side made the
cabinet a card: the object was repeated, small, and never the page. The
new design makes the cabinet the page, and gives each category its own
screen.

The source material is `Site/Reference/`: the design conversation
(`Conversation.md`), eleven HTML attempts with screenshots, and the
`technical_precision_documentation/DESIGN.md` token file. The
hard-edged surface, the isometric construction, and the component
anatomy are borrowed from `~/Developer/Documentation/Module/Ely-GPUI-Components`
(hereafter "Ely"); the exact files are cited in 05 and 02.

## The design thesis

**The page is one cabinet, and the cabinet is built into the page.** The
front is the page's body; the top plane is the 72px band between the
header and the front; the right wall is the 72px band at the right edge.
The object does not float in a margin: it has no margin. The protrusion
comes from the page edges, and the one place the background shows is the
72 x 72 triangle at the top left, where the top plane's diagonal begins.

**The door is the page's cover, and the interior is the page's content.**
The door is a 1288 x 596 x 16 slab standing 8px in front of the front
plane. Its top and right edges show a 16px thickness band and an 8px black
slot; its left and bottom edges are flush with the page. Click it and it
swings: the interior - a black cavity with three isometric meters on a
shelf and the plugin modules on a flat field plate - is revealed.

**The plugin grid is the interior, not a row of cabinets.** One cabinet
holds the whole category. The modules are white faceplates mounted on the
interior's plate; each opens its own tray; the detail page is one click
away. There are no per-plugin cabinets.

**Scrolling right moves to the next cabinet.** `/plugins/` is a horizontal
sequence of full-viewport screens: screen 01 THE HOOKS, screen 02 THE
DISPLAY, and a third screen only if a category warrants one. Each screen
is a complete cabinet with its own door, lintel, interior, and base plate.

**The hard-edged construction is a drawing, not a photograph.** Three solid
surface tones and one 1px line colour; no gradients, no blurs, no cast
shadow; the depth is the drawn top and right planes and the drawn door
gap. Ely's isometric engine supplies the block model, the face builder,
the painter's order, and the bounds; the site swaps Ely's 30 degree
isometric projection for a frontal oblique at 45 degrees, because the
front must stay square and readable.

## The page-cabinet sequence

| Screen | Page | Code | Modules | The interior |
| --- | --- | --- | --- | --- |
| 01 | `/plugins/#hooks` | CAB-01 | 14 | the governors (3), the normalizers (7), ccr, tool-coach, and the machinery (core, factory) |
| 02 | `/plugins/#ui` | CAB-02 | 1 + 1 planned | live-containers, and the planned Harness panel as a labelled preview |
| 03 | only if warranted | CAB-03 | - | a new category, when the family grows one |

The first screen carries **all of the initial hook plugins**, as asked:
`hook-dsh-package-governor`, `hook-dsh-package-pinner`,
`hook-dsh-cargo-governor`, the six stream normalizers
(`dash`, `quotes`, `ellipsis`, `spaces`, `invisible`, `fullwidth`),
`plugin-dsh-normalize-file`, `hook-dsh-ccr`, and `hook-dsh-tool-coach`.
`lib-dsh-core` and `plugin-dsh-factory` are included **as the machinery**:
they sit in the first interior bay, above the module field, because every
hook in the field depends on them and because a cabinet with its power
supply removed is a prop. The alternative - a separate ENGINE screen - is
a one-line reorder of the screen data if the field gets too dense.

The second screen is the UI category: `hook-dsh-live-containers` and the
planned panel. It has one shipped module, so its field is deliberately
sparse: the container anatomy and the panel preview fill it, and the
panel preview is labelled PLANNED, never shipped.

The five old cabinet names survive as the **bay groups inside screen 01**
(THE MACHINERY, THE GOVERNORS, THE FLOW, THE SERVICES), which is where the
grouping belongs: a label on a bay, not a separate object.

## What is being kept from the current site

- The blue `#0052ff` as the functional accent, the orange `#bf3003` for
  the RAW/stream surfaces, the red `#c62828` for the PIN identity and
  errors.
- Inter for prose; IBM Plex Mono for labels, readouts, and code.
- The content model (`Content.ts`, `Live.ts`), the page set, the copy
  voice, the build-and-Drift discipline, the 24 content pages plus 404.
- The page anatomy: the title, the sections, the notation, the footer -
  now expressed as the lintel, the bays, the base plate.

## What is changing

- **The unit**: from a card or a rack of cabinets to one page-sized
  cabinet per page.
- **The depth**: the shell bleeds off the page's top and right; the door
  stands off the face with a real gap; there is no cast shadow, because
  there is no background to cast one onto.
- **The interior**: black, not white. The modules are white plates on a
  black plate; the meters are isometric bodies, not flat counters.
- **The navigation**: a horizontal screen sequence with tabs, hash links,
  keyboard, and scroll snap, replacing the vertical card grid.
- **The surfaces**: Ely's three-tone, one-line drawing replaces the
  hairline-and-tint system for the shell and the instruments; the site's
  hairline survives inside the light insets (the document windows, the
  tables, the terminals).

## The decisions this brief makes

1. **The cabinet scope**: one cabinet per page, full width, no margin, on
   every page. The long-form pages (the versions, the models, the
   flavors, the case study) keep the shell and the bays but have no door,
   because a 6000px door is not a door (see 03).
2. **The door's default**: closed on the registry screens, where opening
   is the primary action; open on the landing, the detail pages, and the
   workspaces, where the content is the point. The state is persisted per
   page and always togglable.
3. **The lock**: a quarter-turn cylinder mounted on the door, with the
   close control on the fixed stile, so the control that closes the door
   never moves with it.
4. **The palette**: the site's cool blue-white-grey, arranged by Ely's
   tonal rule (front lightest, top mid, right darkest). Ely's warm hues
   are not imported.
5. **The projection**: a frontal oblique at 45 degrees, not Ely's 30
   degree isometric, because the front must stay square.
6. **The implementation**: CSS `calc()` clip-path polygons for the shell
   and the door faces, inline SVG for the meters, no canvas, no WebGL, no
   per-frame JavaScript.
7. **The first slice**: the tokens, the engine, the shell, the interior,
   the door, the lock, the meters, the module plates, then screen 01 as
   the canary.

## The reference set

- `Conversation.md` - the design reasoning: the enclosure hierarchy, the
  pronounced extrusion, the thick door, the thin faceplate, the
  apertures, the corner trims, the routing, the acceptance criteria.
- `deepseek_harness_extruded_instrument_cabinet_2/screen.png` - the full
  page: the header rail, the numbered bays, the counter meters, the module
  cards with coloured top rules, the Inspect trays, the spec footer.
- `deepseek_harness_service_panel_instrument_cabinet_2/screen.png` - the
  documentation cabinet: the BAY 01-04 mode tabs, the 15 modules in a
  four-column field, the per-category accent rules.
- `deepseek_harness_extruded_service_cabinet_infrastructure/screen.png` -
  the strongest extrusion: the hatched top band, the ribbed right wall,
  the routing glyphs at the left, the view-mode segmented control.
- Ely, `frontend/src/iso/engine.ts`, `draw.ts`, `models.ts`, `Iso.tsx` -
  the block model, the faces, the painter's order, the bounds, the
  easing, the reduced-motion still path.
- Ely, `frontend/src/styles.css` - the token set, the three-tone faces,
  the one-line stroke, the focus ring, the skip link, the reduced-motion
  reset.
- Ely, `gpui-components.md` - the catalog: SegmentedControl, Meter, Gauge,
  Statistic, PropertyGrid, KeyValueList, RowExpansion, ToolCallCard,
  AgentStatus, CommandBlock, LogViewer, BeforeAfter, TableToolbar.
