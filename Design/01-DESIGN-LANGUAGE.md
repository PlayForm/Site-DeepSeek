# 01 - The Design Language

## 1. The scene layers

The page is composed in four independent planes, back to front:

```text
1. BackgroundNetwork   the gray routing diagram (SVG), behind everything
2. CastShadow          the cabinet's soft offset, toward the lower left
3. Cabinet             the extruded shell: top, right, front frame
4. DoorAssembly        the thick hinged door: slab, faceplate, apertures,
                       trims, labels, lock, handle
   Interior            the mounting plate + the modules, behind the door
```

The background never shows through the cabinet. The cabinet is opaque and
occludes the routes; the routes reappear beyond its edges. The depth is
visible geometry, not a shadow: with the shadow disabled the object must
still read as solid.

## 2. The materials

Four surfaces, one lighting convention (the upper edge darker than the
face, the lower seam fine, no changing light direction):

| Material | Token | Light | Dark | Role |
| --- | --- | --- | --- | --- |
| Page field | `--instrument-page` | `#eceef0` | `#080b12` | outside the system |
| Shell | `--instrument-shell` | `#f8f9fa` | `#161e33` | the cabinet frame |
| Faceplate | `--instrument-face` | `#fafaf7` | `#1b2742` | the door and the modules |
| Top plane | `--instrument-top` | `#d8dcd9` | `#223052` | the visible upper thickness |
| Side wall | `--instrument-side` | `#b4bab8` | `#2a3a63` | the right depth |
| Outline | `--instrument-outline` | `#626966` | `#8291b3` | the silhouette |
| Bezel | `--instrument-bezel` | `#cdd2ce` | `#2b3852` | the recess transition |
| Recess | `--instrument-recess` | `#edf1f5` | `#101522` | the bays and the cavities |
| Screen | `--instrument-screen` | `#111513` | `#05070c` | the dark readout |
| Screen ink | `--instrument-screen-ink` | `#e8ede9` | `#eef0ff` | the digits and the mono |
| Seam | `--instrument-seam` | `#c3c8c4` | `#2b3852` | the 1px boundaries |
| Functional | `--color-primary` | `#0052ff` | `#8ab0ff` | the active control |
| Raw | `--color-accent-orange` | `#bf3003` | `#ff8a4c` | the RAW/stream only |
| Pin | `--color-pin-red` | `#c62828` | `#ff6b6b` | the PIN identity, errors |
| Verified | `--instrument-green` | `#15803d` | `#4ade80` | the ACTIVE/verified lamp |

Rules: solid fills, no gradients, no glossy highlights. The only soft
shadow is the cabinet's cast shadow; the recesses use a darker solid fill
and a 1-2px inset edge, not a blur.

## 3. The geometry

### 3.1 The oblique extrusion

The front stays rectangular and square to the screen. The depth extends
upward and to the right.

```text
Front:      A0(0,0) A1(W,0) A2(W,H) A3(0,H)
Rear:       B0(+40,-28) B1(W+40,-28) B2(W+40,H-28) B3(+40,H-28)
Top:        A0 -> B0 -> B1 -> A1
Right:      A1 -> B1 -> B2 -> A2
Front:      A0 -> A1 -> A2 -> A3
```

Starting values: the front width 960 units, the height content-driven
(begin at 640), the cabinet depth 64, the projected offset +40 right and
-28 up. The projected object occupies `W+40` by `H+28`; reserve that space
in the layout.

### 3.2 The thickness hierarchy

```text
CABINET DEPTH  >>>  DOOR THICKNESS  >>>  FACEPLATE  >>>  TRIM  >>>  SCREEN
   64-80              14-18               2-3          1-2       6-10 setback
```

Never give the thin faceplate the chunky extrusion of the door. The
contrast - the positive thickness of the plate against the negative depth
of the screen - is the signature.

### 3.3 The front frame and the door

- The outer rim: 20-28px.
- The reveal gap: 3px (a narrow dark channel between the fixed shell and
  the door).
- The inner panel padding: 24px.
- The door seam: 1px.
- The hinge: the left edge, with the pivot slightly outside the
  door/frame junction; the whole door assembly moves around it.
- The lock: the right middle, a circular keylock plate (the steel ring,
  the dark keyhole, the "LOCKED" label, the quarter-turn indicator).
- The handle: a recessed slot beside the lock; the click is the primary
  action, the drag is never required.

Closed, the front shows two depth bands: the door edge (about 16) and the
cabinet body (about 72), separated by the closure seam. The seam is what
says "this opens".

### 3.4 The faceplate and the aperture

The pale plate around the digits is a thin plate (2-3 units) mounted on
the door. Its opening passes through the plate; the digits sit 6-10 units
behind it.

```text
Black corner trim (local, stepped, 1-2 thick)
Thin pale faceplate (2-3)
Aperture cut edge (short inner wall)
Dark cavity
Digit wheels
Rear housing
```

The black corner pieces are separate shapes, not a uniform border: an
upper cap with a downward return, a lower cap with an upward return, a
short side segment, a small tab. Preserve the asymmetry; keep the edges
precise.

### 3.5 The digit primitive

```text
+-------+-------+-------+-------+-------+
|   0   |   0   |   1   |   7   |   4   |  <- the last cell is the red wheel
+-------+-------+-------+-------+-------+
```

Cell height 48-64, width 32-44, divider 1-3, tabular numerals, radius
0-2. The cells read as one opening with several wheels, not five buttons.
A value shown in a website counter must be fully legible; the partial
neighbor digits are decoration only, never at the cost of the value.

## 4. Typography

| Role | Family | Size | Notes |
| --- | --- | --- | --- |
| Display | Inter | clamp(2rem, ..., 2.5rem) | 600, -0.03em |
| Headline | Inter | 28 / 20 | 600 |
| Body | Inter | 17 / 16 / 14 | 400 |
| Plate label | IBM Plex Mono | 13-15 | 500, uppercase, 0.06-0.1em tracking |
| Readout | IBM Plex Mono | 13-14 | 500, tabular numerals |
| Digit | IBM Plex Mono | 28-40 | 500-600, tabular, the screen ink |
| Unit | IBM Plex Mono | 12-13 | 500, the muted ink |
| Code | IBM Plex Mono | 13 | 400 |

The mono labels are the instrument's voice: the module codes, the serials,
the units, the statuses, the plate legends. The prose stays Inter. No
seven-segment font; the tabular mono in the digit cells carries the meter
character.

## 5. The readout family

Five distinct readout types; do not put everything in one black rectangle:

| Type | Treatment | Content |
| --- | --- | --- |
| Counter | The dark window, the digit cells, the red last wheel, the unit label | The package count, the check totals, the release version |
| Terminal | The dark inset, the mono, the copy control, the `$` prompt | The install and the CLI output |
| Document | The light inset, comfortable line spacing | The explanations and the code |
| State strip | The compact label + the lamp + the text | ACTIVE, LOCKED, VERIFIED, DEGRADED |
| Signal path | The aligned stages + the restrained connectors | The stream pipeline |

The black window is a special emphasis surface; if every module has one,
the page becomes heavy. Use it for the counters and the terminals, not for
every card.

## 6. The controls

| Action | Shape | Behavior |
| --- | --- | --- |
| Navigation | The flat rail tabs | The location change |
| Inspection | The recessed handle or the labeled disclosure | The click opens; the drag is optional |
| Execution | The bounded push button (the short travel, the hard edge) | The click |
| Selection | The segmented switch | The small set of alternatives |
| Adjustment | The ordinary form control with the explicit value | No decorative rotary knobs for exact values |
| Read-only | The lamp + the text | No button styling |
| The door | The big keylock + the recessed handle | The click unlocks and opens; Esc closes |
| The module tray | The Inspect [+] strip | The telescoping reveal |

## 7. The symbols and glyphs

- **The background network**: the thick routes (8-12) and the secondary
  (3-5), the horizontal/vertical/45-degree runs, the over-under crossings
  (the lower route, the background mask, the upper route), the connection
  dots only at real joins, the oversized outline glyphs (64-160) - the
  brackets, the junctions, the meter marks, the arrows.
- **The plate marks**: the serial numbers, the model codes (MOD-02,
  GOV/02), the units (kW.h, tokens, checks), the phase marks, the ground,
  the certification marks, the revision codes.
- **The physical details**: the sparse fasteners on the outer cabinet
  (not every nested box), the hinge pins, the lock cylinder, the door
  handle, the seal tag, the small tabs under the apertures.
- **The status lamps**: the 6-8px round lamps with the color meaning
  (the green verified, the blue active, the red error, the gray idle).

Keep one drawing language: the stroke weights, the corner treatment, the
scale families. The printed marks stay flat; the physical trim has
thickness.

## 8. The states

Every module and every cabinet has: closed, hovered, focused, selected,
open, loading, empty, error, stale. The door: locked, unlocking, open,
closing. The lock: locked, turning, unlocked. The states are independent:
opening does not mean running; selecting does not mean success; hovering
does not change the reported condition.

## 9. The motion

- The lock turn: 120-180ms, the crisp easing.
- The door swing: 240-320ms, the snap easing; the shallow rotation only
  during the transition; the final content flat and readable.
- The tray: 180-240ms.
- The content appears without a theatrical stagger.
- The reduced motion: the door opens instantly (no rotation), the tray
  appears, the content is immediate; the aria-expanded announces the
  state.
- The infinite motions only for the live status lamps and the stream
  caret, and they die under reduced motion.

## 10. Accessibility

- The lock is a real `<button>` labeled "Open cabinet" (and "Close
  cabinet" when open); the aria-expanded mirrors the state.
- The hidden internals are not focusable when the door is closed; the
  focus moves to the first internal module on open and back to the lock on
  close.
- The trays use the real disclosure semantics (button + aria-expanded, or
  `<details>`).
- The focus rings are visible on the lock, the handle, the trays, the
  tabs.
- The contrast: the screen ink on the dark readout, the plate labels on
  the faceplate, the orange and the red only on the surfaces where they
  pass AA.
- The background routing is `aria-hidden` and never carries meaning.

## 11. The responsive behavior

- The extrusion's projected depth reduces on mobile (the 40/28 becomes
  20/14, then 0); the text never shrinks below 13.
- The door swing becomes a simple reveal (the reduced motion path) on
  narrow screens; the internals stack.
- The bays stack in the reading order; the horizontal rack becomes a
  vertical stack or a swipe with the scroll snap.
- The digit cells keep the tabular alignment; the counters wrap the unit
  labels below.

## 12. The acceptance (the design's own test)

- The front stays rectangular and readable.
- The top and the right surfaces are unmistakably visible.
- Every outer depth edge follows the same direction.
- The object looks solid with the shadow disabled.
- The right wall is darker than the top and the front.
- The screens look recessed, not raised.
- The door is separate from the stationary shell; the lock is a real
  button.
- The internal modules are shallower than the cabinet.
- The background paths interlock but stay subordinate; no line shows
  through the cabinet.
- Every control works by click and keyboard; the drag is optional.
- Opening the cabinet exposes meaningful content, not decorative
  machinery.
