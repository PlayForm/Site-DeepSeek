# 08 - The Final Product Decisions

The second design review accepted the system and asked for four product
decisions before the build goes beyond the first canary. They are decided
here and are binding.

## 1. The camera is fixed

**The reference view stands.** The depth travels up and to the right; the
top plane and the right wall are visible; the light comes from the upper
left (the front is the lit surface, the top the ambient, the right wall
the shadow). The mirror alternative (the depth up-left, the top and left
visible) is rejected.

This is the one construction for every page. The 06 geometry is the canon:
`project(x, y, z) = (x + z, y - z)`, 45 degrees at every width, the front
square, the back running off the page's top and right edges.

## 2. The registry field scrolls

**Accepted.** At 1440x900 the 14 plates plus the four bay rails make five
plate rows: 838px of content in the 423px field, so it scrolls by about
415px (the canary measured it; the earlier ~72px estimate was wrong). The
shelf and the status strip stay fixed; the field is the roll. The four bay
groups are collapsible (default expanded), and collapsing them makes the
field fit. At 1600x1000 it still scrolls by about 600px. The shorter 98px
plate is rejected - it costs the sentence's second line, and the sentence
is the module's purpose.

## 3. The display screen stays

**Kept.** The second screen (CAB-02 THE DISPLAY) exists because the user
asked for a UI cabinet; live-containers ships, and the planned panel is a
clearly labelled preview.

The revisit condition: if the panel is not approved, the screen becomes a
single-module cabinet with the container anatomy, and the sequence may be
one screen instead of two. The decision is recorded, not silently
deferred.

## 4. The small-label floor is approved

**Approved with conditions.** The 11px size is allowed **only** for the
short mono plate labels: uppercase, wide tracking, never prose, never the
only carrier of meaning (the same information is available in the text or
an `aria-label`). All prose and all functional labels stay at 13px or
above. If a plate needs more room, the plate grows; the label does not
shrink below 11px, and the functional text never goes below 13px.

## 5. The canary is one Mode A cabinet

The first build is **one full Mode A canary cabinet**:

- the shell (the front, the top, the right wall, the bleed);
- the door (the thick slab, the gap, the hinge, the swing, the edge-on
  rest);
- the lock (the quarter-turn, the single activation, the close plate on
  the fixed stile);
- one meter shelf (the meters);
- one module with a working inspection tray (the connections, the
  mechanism, the evidence);
- the reduced-motion, keyboard, focus, and narrow-screen paths.

The full 14-module field and the registry sequence follow the canary. The
canary is the smallest page that exercises the whole system.

## 6. The review's verdict, kept as the quality gate

The system is a spatial one, not a mood board: the page-scale object, the
unambiguous depth and door relationships, the realistic open/closed
interaction, the meter details tied to the reference, the dark readable
interior, the reusable primitives, the Mode A/Mode B split, and the
concrete constraints for the responsive, the accessibility, the motion,
and the implementation. The one remaining risk is an implementation that
makes the door, the trims, and the apertures decorative rather than
connected, layered geometry - the canary exists to prove that it does not.
