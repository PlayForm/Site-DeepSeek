# 06 - The Big Cabinet

> The review amendments in 07 are binding: the single-activation lock, the
> door's edge-on rest after the swing, and the routing density limits.

The exact geometry of the one full-width cabinet. Every number here is a
starting value, not a measurement: the implementer may tune a value, but
must keep the ratios and the invariants at the end of this document.

## 1. The projection

One projection for the whole site: a frontal oblique at exactly 45
degrees. The front stays square to the reader; the depth runs up and to
the right.

```text
project(x, y, z) = (x + z, y - z)        x right, y down, z away from the viewer
```

`z` is measured in screen pixels, so one pixel of depth moves one pixel
right and one pixel up. The angle is therefore 45 degrees at every
viewport width; only the depth `D` changes (section 8). This is the
single reason the shell can be built with CSS `calc()` instead of a
fixed-viewBox SVG: the diagonal is always `D` by `D`.

The visible faces of a box with the near plane at `z0` and the far plane
at `z1`:

```text
front (z0)   (x0,y0,z0) (x1,y0,z0) (x1,y1,z0) (x0,y1,z0)
top   (y0)   (x0,y0,z0) (x1,y0,z0) (x1,y0,z1) (x0,y0,z1)
right (x1)   (x1,y0,z0) (x1,y0,z1) (x1,y1,z1) (x1,y1,z0)
```

Paint order, back to front: **right, then front, then top**. Each face is
one solid fill, and every face carries the same 1px line colour. There
are no gradients, no blurs, and no cast shadow. This is the Ely rule
(`frontend/src/iso/draw.ts`, the `[[f.right, colors.shade], [f.front,
colors.side], [f.top, colors.ground]]` loop) restated for a frontal
projection.

**The light comes from the upper left.** The front is the lit surface
(pure white), the top plane is the ambient surface (light grey), the
right wall is the shadow surface (mid grey). The three tones are separated
by 1px lines so the object reads with every shadow disabled.

## 2. The reference viewport

A 1440 x 900 window. `W = 1440`, header `56`, body `HB = 844`, depth
`D = 72`.

Body coordinates, origin at the body's top-left, below the header:

```text
front    (0,72)      (1368,72)     (1368,916)    (0,916)
back     (72,0)      (1440,0)      (1440,844)    (72,844)
top      (0,72)      (1368,72)     (1440,0)      (72,0)
right    (1368,72)   (1440,0)      (1440,844)    (1368,916)
```

The front's box is `W - D` wide and `HB` tall; its bottom 72px fall below
the page, so the front bleeds off the bottom edge. The back's top edge is
the page's top edge; the back's right edge is the page's right edge. The
top plane is a 72px band that reaches the page's top edge from `x = 72`
rightwards. The right wall is a 72px band that reaches the page's right
edge. The bottom-right corner of the page is filled by the right wall,
whose bottom edge runs from `(1368,916)` to `(1440,844)`.

The top-left corner of the page (a 72 x 72 triangle) stays page field.
That triangle is the one place the background is visible, and it is what
makes the object read as placed in front of the page rather than painted
on it. Do not fill it.

## 3. The front, local coordinates

Origin at the front's top-left `(0,72)` in body space. The visible front
is 1368 x 772; the box continues 72px below the page.

```text
y    0 ..  88    the lintel        the h1, the serial, the screen tabs, the status
y   88 .. 112    the lip           24px of front face above the aperture
y  112 .. 708    the aperture      596 tall, the door's nominal opening
y  708 .. 732    the bottom rail   24px of front face below the aperture
y  732 .. 772    the base plate    40px, the footer band
y  772 .. 844    off page
```

Horizontally:

```text
x    0 ..  24    the left reveal
x   24 ..1312    the aperture      1288 wide
x 1312 ..1368    the stile         56px, carries the latch and the close plate
```

## 4. The door

The door is a slab `1288 x 596 x 16`, its nominal footprint equal to the
aperture, standing `8` in front of the front plane. Its front face is
therefore displaced by `-(gap + thickness)` on x and `+(gap + thickness)`
on y:

```text
door front face on screen:  (0,136) .. (1288,732)
```

It lands flush with the page's left edge and on the base plate's top
edge, and its top and right edges show the assembly:

```text
from the lintel down, at any x in 24 .. 1312
  88 .. 112   front lip          white
 112 .. 120   gap slot           the black interior seen through the gap
 120 .. 136   door top face      top tone, 16px
 136 ..       door front face    pure white

from the left, at any y in 136 .. 732
 1288 ..1304  door right face    top tone, 16px
1304 ..1312   gap slot           black
1312 ..1368   stile              white, the latch
1368 ..1440   right wall         mid grey
```

The gap slot is not a border: it is the 8px of air between the door's
back and the front plane, and it is visible only on the top and the right
because the door is hinged on the left and laps the frame on the left and
bottom. The slot shows the interior's black, which is what makes the door
read as standing off the face rather than painted on it.

The door's screen rectangle is the interaction target. A transparent
`<button>` covers it (`aria-expanded`, `aria-controls`), the printed
content beneath it stays inert text, and `:has(:focus-visible)` draws the
focus ring on the door's outline.

## 5. The interior

The aperture's cavity. The plate is inset 20 from the aperture on all
sides; the left and bottom 20px bands are the cavity walls (the faces the
projection makes visible), and they are one step darker than the plate.

```text
aperture    (24,112) .. (1312,708)
plate       (44,132) .. (1292,688)      1248 x 556
walls       x 24..44, y 688..708        the visible cavity faces
shelf       y 132..228                  96px, the meters
field       y 228..656                  428px, the module grid, scrolls
status      y 656..688                  32px, the count, the filter, the gauge
```

The plate is **frontal and unprojected**. The modules mounted on it are
not skewed and not scaled. This is deliberate: the interior instruments
are isometric objects, the field is a flat panel, and the reader never
reads text in perspective. The old conversation's rule ("internal modules
remain flat and readable") is the binding one; the projection applies to
the shell, the door, and the meters.

At 1440 x 900 the field holds the 14 plates plus the four bay rails: five
plate rows, 838px of content in the 423px field, so it scrolls by about
415px. That is by design: the shelf and the status strip are fixed, the
field is the roll, and the four bay groups are collapsible (default
expanded) - collapsing them makes the field fit. At 1600 x 1000 it still
scrolls by about 600px. The 06 estimate of a 72px scroll was wrong; the
canary measured the real number.

## 6. The meters

Three isometric bodies on the shelf, each a block with the section 1
faces. They stand on a 6px plinth so they read as mounted on a rail.

| Meter | Body w x h x d | Window | Reading |
| --- | --- | --- | --- |
| M-01 MODULES | 200 x 64 x 22 | 4 digits | the screen's module count |
| M-02 CHECKS | 320 x 64 x 22 | two windows of 4 | the Classic and Effect-TS totals |
| M-03 RELEASE | 200 x 64 x 22 | 5 digits, two red | the release version |

The front face carries the window; the window's digits are unskewed
because the front face is unprojected. The top face carries the model
code etched at 9px mono. The right face carries eight tick marks. The
window is framed by four separate stepped black corner trims, not a
uniform border: an upper cap with a downward return, a lower cap with an
upward return, a side segment, a small tab. The last wheel is red.

Placement: M-01 at `x 64`, M-02 at `x 288`, M-03 at `x 632`, each 24
apart; the calibration plate occupies `x 860 .. 1272` on the same shelf.

## 7. The module field

Four columns of 300 with 16px gaps at 1440 (4 x 300 + 3 x 16 = 1248). Each
module plate is 116 tall: the identity strip 30, the sentence 44 (two
lines at 13/20), the footer 26, plus 8px padding top and bottom. The plate
is pure white, 1px outline, 2px radius. The tray opens to the full row.

## 8. The responsive reductions

| Viewport | D | Lintel | Door t / gap | Field | Door behaviour |
| --- | --- | --- | --- | --- | --- |
| >= 1600 | 72 | 88 | 16 / 8 | 4 columns, fits | full swing |
| 1280 - 1599 | 72 | 88 | 16 / 8 | 4 columns, scrolls | full swing |
| 1024 - 1279 | 48 | 80 | 14 / 7 | 3 columns | full swing |
| 768 - 1023 | 24 | 72 | 12 / 6 | 2 columns | full swing, 240ms |
| < 768 | 0 | 64 | 0 / 0 | 1 column, in flow | the cover band, height reveal |

The angle never changes. Only `D` does. At `D = 0` the shell is a flat
front with a 1px outline, and the door is no longer the page's cover: it
becomes a 240px cover band over the top of the field, opening with a
`grid-template-rows: 0fr -> 1fr` reveal. Below 768 the cabinet is not
viewport-locked; the page scrolls normally and the field is in flow.

## 9. The invariants

1. The front is rectangular; its text is never transformed.
2. The depth edges are parallel and at 45 degrees; the angle is the same
   on every page and at every width.
3. The right wall is darker than the top plane; the top plane is darker
   than the front; the front is pure white.
4. The door's gap is visible on the top and the right only.
5. The door's thickness band is 16 and the cabinet's depth is 72: a ratio
   of 4.5 to 1. Never give the door the cabinet's depth, or the faceplate
   the door's thickness.
6. The interior is black; the plates are white; the field is flat.
7. No cast shadow. The object reads solid with every shadow disabled.
8. Nothing is drawn behind the cabinet: the page has no margin on the
   left, top, right, or bottom.
9. The routing texture lives on the plate and the cover, at 8-12 percent
   ink, and is `aria-hidden`.
10. At `D = 0` the object still reads as a cabinet: the lintel, the
    stile, the base plate, and the interior do the work the depth did.
