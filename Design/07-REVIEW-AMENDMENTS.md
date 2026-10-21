# 07 - The Review Amendments

The design review of the set added four implementation decisions and one
wording change. They are binding; where a doc in 00-06 disagrees, this
document wins.

## 1. The lock interaction

**Single activation.** One click on the lock (or the "Open cabinet"
button) turns the lock and opens the door in one gesture. The control's
label becomes "Close cabinet"; a second click closes it.

```text
Closed / locked
  -> click "Open cabinet"
  -> the lock turns (160ms)
  -> the door swings (240-320ms)
  -> the label becomes "Close cabinet"
```

No two-step unlock-then-open. The lock is the real accessible control:
`<button>`, `aria-expanded`, Enter/Space, Esc closes, the focus returns to
the lock on close.

The canary implements the door as the hit target (a real `<button>` with
the lock drawn inside it) and the close plate as a second real button on
the fixed stile; the lock remains the visual key. This is the accepted
equivalent (09 section 3.3): one activation, the larger accessible target,
the fixed close control.

## 2. The open-door rest position

After the swing, the door must not cover the interior or the neighboring
content:

- The door settles as a **narrow left-side slab**, edge-on (about
  88-90 degrees), or the flat `scaleX(1 -> 0.02)` fallback.
- The mounting plate and the documentation stay **square to the
  viewport**; the text never reads in perspective.
- The door's rest is stable: no idle animation, no drift.
- Below 768px: **no swing**; the door becomes the 240px cover band with
  the inline height reveal (the reduced-motion path).

## 3. The background-density rule

The etched routing on the plate and the cover stays subordinate to the
cabinet. The limits:

| Viewport | Major routes | Secondary segments | Oversized glyphs |
| --- | --- | --- | --- |
| Desktop | 3-5 | 4-8 | 2-4 |
| Tablet | 2-3 | 2-4 | 1-2 |
| Mobile | 0-2 faded | 0 | 0 |

No crossing cluster behind body content. The cabinet is the primary
silhouette; the routing is a texture at 8-12 percent ink, `aria-hidden`.

## 4. The reference board

Before the high-fidelity pass, assemble a compact reference board:

1. One close-up of a meter or switchboard aperture (the stepped corner
   trims, the cut edge, the recess).
2. One cabinet door edge and hinge (the thickness, the seam, the pivot).
3. One quarter-turn cam lock (the cylinder, the keyhole, the ring, the
   turn).
4. One open electrical/switchboard cabinet interior (the mounting plate,
   the DIN rails, the wiring, the labels).
5. One restrained single-line electrical schematic (the routing
   vocabulary).

Until the board exists, use the restrained geometry in 06; do not invent
sci-fi hardware.

## 5. The build order

The single plugin detail page is the smallest canary: it exercises the
whole system. The order:

1. The `Cabinet` shell: the front rectangle, the top plane, the right
   wall, the shadow, the background occlusion.
2. The `CabinetDoor`: the thick slab, the closure seam, the left hinge
   pivot, the lock, the handle.
3. The `Faceplate` plus one `Aperture`: the thin plate, the real opening,
   the stepped black trim, the recessed dark cavity.
4. One fully accessible `MeterCounter`.
5. One open-state `MountingPlate` with a single `InstrumentModule`.
6. One `InstrumentModule` inspection tray.
7. The reduced-motion, the keyboard, the focus, and the narrow-screen
   paths.
8. Only then extract the reusable primitives and scale to the category
   screens and the landing.

This supersedes the earlier "hooks screen first" order: the hooks screen
follows the canary.

## 6. The wording

The direction is called **hard-edged instrument cabinet UI**. The phrase
"flat-skeuomorphic" is retired from the docs; the Ely borrowings are
described as "the hard-edged surface and the isometric construction".

## 7. Where the amendments apply

| Doc | Change |
| --- | --- |
| 00-BRIEF | the wording; the lock, the rest, the density |
| 01-DESIGN-LANGUAGE | the lock (single activation), the door rest, the density limits |
| 04-IMPLEMENTATION-TASKS | the first slice is the detail page canary; the lock/rest/density in T04-T05 |
| 05-REFERENCES | the reference board |
| 06-THE-BIG-CABINET | the door rest (edge-on), the density table |
| README | the wording; the first slice |
