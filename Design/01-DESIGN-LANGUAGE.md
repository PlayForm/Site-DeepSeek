# 01 - The Design Language

> The review amendments in 07 are binding: the single-activation lock, the
> door's edge-on rest, the routing density limits, and the reference board.

## 1. The scene

Five layers, back to front. The first is the page itself; there is no
background behind the cabinet, because the cabinet has no margin.

```text
1. Page field        the 72 x 72 triangle at the top left, and nothing else
2. Shell             the top plane, the right wall, the front, the lintel,
                     the stile, the base plate
3. Interior          the black cavity, the plate, the shelf, the field
4. Door assembly     the slab, the gap, the thickness, the cover plate,
                     the lock
5. Insets            the light windows inside the interior: the document,
                     the terminal, the table, the tray
```

The shell is opaque and clipped by the page's edges. The depth is drawn,
not shaded: with every shadow disabled the object must still read as a
solid box with a door standing off its face.

## 2. The projection

A frontal oblique at exactly 45 degrees:

```text
project(x, y, z) = (x + z, y - z)     x right, y down, z away
```

The front stays square, the depth runs up-right, and the visible faces
are the front, the top, and the right. Paint order: right, front, top.
The full coordinates, the thicknesses, and the responsive depth table are
in [06-THE-BIG-CABINET.md](06-THE-BIG-CABINET.md); this document defines
the materials and the rules that sit on that geometry.

The Ely engine is ported for its model, not its projection: the `Block`
shape, `faces()`, `painted()`, `bounds()`, `inside()`, and `rise()` come
from `frontend/src/iso/engine.ts`; the fill order and the single stroke
come from `frontend/src/iso/draw.ts`. Ely's `project()` is replaced,
because Ely draws a true isometric (all axes at 30 degrees) and the site's
front must stay rectangular. The port is in `Source/Library/Iso.ts`.

## 3. The surfaces

Three tones and one line, in the light theme:

| Token | Value | Face | Role |
| --- | --- | --- | --- |
| `--cabinet-front` | `#ffffff` | front | the lit instrument face |
| `--cabinet-top` | `#eef2f8` | top | the ambient upper plane |
| `--cabinet-right` | `#c8d2e2` | right | the shadow wall |
| `--cabinet-line` | `#1b2433` | every edge | the single drawing line |
| `--cabinet-page` | `#e9edf3` | the top-left triangle | the only page field |
| `--cabinet-lintel` | `#f7f9fd` | the lintel | the head band |
| `--cabinet-stile` | `#ffffff` | the stile | the latch band |
| `--cabinet-gap` | `#06090f` | the door gap | the slot; the interior's black |

The interior:

| Token | Value | Role |
| --- | --- | --- |
| `--interior-void` | `#06090f` | the cavity |
| `--interior-plate` | `#0b1018` | the field plate |
| `--interior-wall` | `#101724` | the visible cavity faces |
| `--interior-line` | `#26303f` | the interior seams |
| `--interior-ink` | `#e6ecf5` | the interior text |
| `--interior-muted` | `#9aa8bc` | the interior labels |
| `--module-plate` | `#ffffff` | the module faceplates |
| `--module-ink` | `#10151f` | the module text |
| `--module-muted` | `#4a5568` | the module sentences |
| `--module-line` | `#c9d2e0` | the module edges |

The instruments and the signals:

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--meter-body` | `#f4f7fb` | `#232c3d` | the meter shell |
| `--meter-window` | `#0a0f16` | `#05070c` | the digit window |
| `--meter-ink` | `#dfe8f2` | `#eef3fb` | the digits |
| `--meter-red` | `#b3261e` | `#ff6b6b` | the last wheel only |
| `--color-primary` | `#0052ff` | `#8ab0ff` | the active control |
| `--color-accent-orange` | `#bf3003` | `#ff8a4c` | the RAW/stream surfaces only |
| `--color-pin-red` | `#c62828` | `#ff6b6b` | the PIN identity, errors |
| `--lamp-green` | `#15803d` | `#4ade80` | ACTIVE, VERIFIED |
| `--lamp-amber` | `#b45309` | `#fbbf24` | PENDING, CALIBRATION DUE |
| `--lamp-grey` | `#8a97a8` | `#5b6779` | IDLE |

Rules, taken from Ely's stylesheet and the reference attempts:

1. **One solid fill per face.** No gradients, no gloss, no inner blur.
2. **One line colour per drawing.** Every face boundary is 1px of
   `--cabinet-line` (or `--interior-line` inside), the same weight, the
   same colour.
3. **No cast shadow.** The old brief's "broad shadow toward the lower
   left" is retired: the cabinet bleeds off the page edges, so there is
   no surface for a shadow to fall on. The door's gap is the only dark
   separation, and it is geometry.
4. **Radii**: 0 on the shell, 2 on the plates, 4 on the insets, 999 on the
   status chips. Ely's 8 and 12 are for a desktop app, not an instrument.
5. **The dark theme is a material inversion, not a hue swap**: the metal
   darkens (the front `#151b26`, the top `#1d2534`, the right `#242e40`),
   the lit plates dim to a paper grey (`--module-plate: #d7dfec`), and the
   interior stays the darkest surface in the scene. Pure white survives
   only in the light theme; in the dark theme the instrument is lit from
   within, not from the sun.

## 4. The door

- **The slab**: 1288 x 596 x 16 in the reference viewport, its footprint
  equal to the aperture, standing 8px in front of the front plane.
- **The displacement**: `-(gap + thickness)` on x and `+(gap + thickness)`
  on y, so the front face lands flush with the page's left edge and on the
  base plate, and the thickness and the gap show on the top and the right.
- **The cover plate**: the door's face is pure white, with a printed
  block at the left (the category code, the title, the claim, the module
  count, the status lamps) and the lock at the right middle. The rest of
  the face stays quiet: at most a faint 8 percent calibration grid on the
  lower half, never decoration for its own sake.
- **The hinge**: the left edge, at the door's back plane. The pivot is a
  real detail: two knuckles on the stile, a 1px pin line, visible only
  when the door is open.
- **The lock**: a 72px circular plate on the door's face at the right
  middle: the steel ring, the keyhole, the "LOCKED" legend, and a quarter
  turn indicator. The cylinder turns 90 degrees in 160ms when the door is
  activated.
- **The close plate**: a fixed 56 x 72 plate on the stile, visible only
  when the door is open, labelled "CLOSE". It never moves with the door.

The door's screen rectangle is the interaction target. A transparent
`<button class="door-hit">` covers it and carries `aria-expanded` and
`aria-controls`; the printed cover beneath it is inert text; the focus
ring is drawn on the door's outline via `:has(.door-hit:focus-visible)`.

**The swing.** The door opens with a weak perspective:

```text
container      perspective: 8000px
transform      rotateY(0deg) -> rotateY(-88deg)
origin         left center, at the door's back plane
duration       320ms, --ease-snap
end state      the door is hidden; a static 16px hinge edge is shown
```

The perspective is deliberately weak (8000px) so the free edge grows by
about 19 percent, not by 116. At 88 degrees the door is a ~53px wedge at
the hinge and the interior is fully visible. The scene is a parallel
projection and the swing is a perspective one: this is the one place the
two disagree, and it is invisible in every still frame because the door
is edge-on at rest-open. A flat fallback (`scaleX(1) -> scaleX(0.02)`)
is specified for browsers or test harnesses that cannot do 3D transforms.

## 5. The interior

The aperture is 1288 x 596. The plate is inset 20 on all sides; the left
and bottom 20px bands are the cavity walls the projection makes visible,
one step darker than the plate.

```text
shelf      96px   three isometric meters, the calibration plate
field     428px   the module grid; scrolls; the only scroll surface
status     32px   the module count, the filter, the field gauge
```

- **The plate is frontal and unprojected.** Text is never skewed.
- **The shelf is fixed.** The meters are the instrument's live readings
  and they never scroll away.
- **The field is a roll.** It scrolls with a visible gauge on the right
  wall, a stable scrollbar gutter, and a 24px fade at both edges. It is
  not a trap: the wheel scrolls the field only while the pointer is over
  it, and the keyboard needs an explicit focus on the field.
- **The insets are light.** Prose, tables, terminals, and code sit in
  white or near-white windows mounted on the black plate. The black is the
  cabinet, not the reading surface.
- **The routing texture** lives on the plate at 8 to 12 percent ink and on
  the cover plate at 6 percent: the old background network, moved inside
  the object because there is no outside left.

## 6. The meters

Three bodies on the shelf, each an isometric block on a 6px plinth:

| Meter | Body | Window | Reading |
| --- | --- | --- | --- |
| M-01 MODULES | 200 x 64 x 22 | 4 digits | the screen's module count |
| M-02 CHECKS | 320 x 64 x 22 | 2 x 4 digits | the Classic and Effect-TS totals |
| M-03 RELEASE | 200 x 64 x 22 | 5 digits | the release version |

Anatomy, front to back:

```text
black stepped corner trims   four separate shapes, 1-2 thick, asymmetric
the thin faceplate           2-3 thick, the window cut through it
the aperture's inner wall    1px, the cut edge
the dark window              6-10 behind the plate
the digit wheels             tabular mono, the last wheel red
the body, the top, the right the three projected faces
```

The corner trims are the detail that makes the window an electrometer and
not a rectangle: an upper cap with a downward return, a lower cap with an
upward return, a short side segment, and a small tab under the aperture.
They are four polygons, never a uniform border.

The digits: cell 26 x 34, divider 1, radius 0, tabular numerals, the
screen ink. A 5-digit value reads as one opening with five wheels. The
top face carries the model code at 9px mono; the right face carries eight
tick marks; the plinth carries the seal.

## 7. The modules

A module is a white faceplate mounted on the black plate: 300 x 116 at the
reference width, 1px `--module-line`, 2px radius.

```text
identity   the code (mono 11), the name (Inter 15/600), the status lamp
sentence   two lines, 13/20, --module-muted
footer     the check count (mono 12) and the Inspect [+] disclosure
tray       opens to the full row; the dark cavity; three columns
```

The tray is the module's own reveal and it is dark: opening a module is
looking behind it. The tray's three columns are CONNECTIONS, MECHANISM,
and EVIDENCE, each a light inset on the dark tray, plus the link to the
detail page. The module's plate stays visible above the tray.

## 8. Typography

| Role | Family | Size / weight | Notes |
| --- | --- | --- | --- |
| Cover title | Inter | clamp(2rem, 3.4vw, 3.25rem) / 640 | -0.035em, the door's face |
| Lintel title | Inter | 24 / 640 | -0.02em, always visible |
| Bay title | Inter | 18 / 600 | -0.01em |
| Body | Inter | 16 / 400 | 26 line |
| Body small | Inter | 14 / 400 | 21 line |
| Plate label | IBM Plex Mono | 11-13 / 500 | uppercase, 0.08em tracking |
| Readout | IBM Plex Mono | 12-14 / 500 | tabular numerals |
| Digit | IBM Plex Mono | 30-40 / 500 | tabular, the screen ink |
| Code | IBM Plex Mono | 13 / 400 | 20 line |

The floor is 11px, and only for the plate labels (the module code, the
unit, the serial). Prose never goes below 13. The mono labels are the
instrument's voice; the prose stays Inter.

Ely's display is heavier and tighter (800, -0.045em) than the site's
(600, -0.03em). The cover title moves to 640 and -0.035em: enough
architectural weight without turning the site into a poster.

## 9. The symbols and the marks

- **The plate marks**: the serials (`CAB-01`, `M-02`), the module codes
  (`GOV-01`, `NRM-04`), the units (`checks`, `packages`, `v0.1.0`), the
  revision, the calibration date, the seal tag.
- **The physical details**: the hinge knuckles, the lock cylinder, the
  latch keeper, the four aperture trims, the plinth, the field gauge.
  Sparse: one fastener family, used once per object.
- **The status lamps**: 6px, the green ACTIVE, the amber PENDING, the red
  ERROR, the grey IDLE, the blue SELECTED.
- **The routing texture**: 45 degree runs, over-under crossings with one
  convention, junction dots only at real joins, at 8 to 12 percent ink.
- **The glyphs**: the PlayForm mark and the engine marks, drawn in the
  same three tones as the shell (Ely's `mark.ts` does exactly this for its
  own logo: `frontend/src/iso/mark.ts`).

## 10. The states

The door: `closed`, `opening`, `open`, `closing`. The lock: `locked`,
`turning`, `released`. The module: `closed`, `hovered`, `focused`,
`open`, `loading`, `empty`, `error`, `stale`, `pending`. The screen:
`active`, `inactive`. The field: `at-top`, `scrolled`, `at-end`.

States are independent: opening the door does not mean the modules are
running; a selected screen does not mean its modules are verified;
hovering never changes a reported condition.

## 11. The motion

| Motion | Duration | Easing | Reduced motion |
| --- | --- | --- | --- |
| The lock turn | 160ms | `--ease-crisp` | instant |
| The door swing | 320ms | `--ease-snap` | instant, `hidden` toggle |
| The module tray | 220ms | `--ease-snap` | instant |
| The screen change | 420ms | `--ease-snap` | instant jump |
| The field scroll | native | - | native |
| The LIVE lamp | 2.4s pulse | linear | static |

No staggered entrance on the interior: the cabinet opens and the content
is there. The only infinite motion is the LIVE lamp and the terminal
caret, and both stop under `prefers-reduced-motion`.

## 12. The accessibility

- **The door** is a real `<button>` over the door's face, labelled "Open
  the cabinet: <title>", with `aria-expanded` and `aria-controls`. Esc
  closes it. The close control is a second real button on the stile, so
  the action exists on both sides of the transition.
- **`inert`**: the interior is inert while the door is closed; the door
  assembly is inert while it is open. Focus moves to the first module's
  Inspect button on open and back to the door on close.
- **The screens** are a tablist: two `role="tab"` buttons in the lintel,
  two `role="tabpanel"` panels with `tabindex="0"`, arrow keys, Home and
  End. The scroll position updates the selected tab; the tab click scrolls
  the sequence. The hash (`#hooks`, `#ui`) is the canonical position.
- **The field** is a labelled scroll region (`tabindex="0"`,
  `aria-label="The module field"`, `role="group"`), so a keyboard user can
  reach it, and its gauge is `aria-hidden`.
- **The trays** are disclosure buttons with `aria-expanded` and
  `aria-controls`; the tray content follows the button in the DOM.
- **The meters** are `role="img"` with a sentence label ("M-02 CHECKS,
  1314 Classic, 1324 Effect-TS") and the same value in text beside them.
  A meter never carries a value that exists nowhere else.
- **The focus ring** is Ely's: `outline: 2px solid var(--color-primary);
  outline-offset: 3px; border-radius: 6px`. On the door it is drawn on the
  door's outline, 3px outside the slab.
- **The skip link** is Ely's `.skip` pattern: off-screen, the first
  focusable element, "Skip to the interior".
- **The contrast**: the module ink on white 18:1, the interior ink on the
  plate 16:1, the interior muted 8:1, the accent on white 4.6:1, the
  orange 5.9:1, the red 5.9:1. The lamps are never the only signal: each
  lamp has a text label.
- **The routing texture** is `aria-hidden` and never carries meaning.

## 13. The responsive

| Viewport | Depth | Lintel | Door | Field | Behaviour |
| --- | --- | --- | --- | --- | --- |
| >= 1600 | 72 | 88 | 16 / 8 | 4 cols, fits | full swing |
| 1280-1599 | 72 | 88 | 16 / 8 | 4 cols, scrolls | full swing |
| 1024-1279 | 48 | 80 | 14 / 7 | 3 cols | full swing |
| 768-1023 | 24 | 72 | 12 / 6 | 2 cols | full swing, 240ms |
| < 768 | 0 | 64 | - | 1 col, in flow | the cover band |

- The angle stays 45 degrees at every width; only the depth changes.
- Below 768 the cabinet is not viewport-locked: the page scrolls, the
  field is in flow, and the door becomes a 240px cover band over the top
  of the field, opening with a height reveal. The horizontal sequence
  becomes a vertical stack, and the tabs become anchor links.
- The digit cells keep their tabular alignment at every width; the meters
  wrap to two per row at 1024 and one per row below 768, each keeping its
  own body proportions.
- The type floor holds: 11px only for the plate labels, 13px for prose.

## 14. The acceptance

- The back reaches the page's top edge and the page's right edge; the
  front is rectangular and its text is never transformed.
- The top plane and the right wall are unmistakably visible, and the right
  is darker than the top, which is darker than the front.
- The object reads solid with every shadow disabled, because there is no
  shadow.
- The door shows a 16px thickness band and an 8px black slot on its top
  and right, and is flush with the page on its left and bottom.
- The interior is the darkest surface; the module plates are the lightest;
  the field is flat and the meters are isometric.
- Opening the door reveals the meters and the modules, not decorative
  machinery; closing restores the cover with the focus intact.
- The screens move right by tab, by arrow, by scroll, and by hash.
- Every control works by click and keyboard; nothing requires a drag.
- The reduced-motion path changes no content, only the transition.
