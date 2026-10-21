# 05 - References and Decisions

## 1. The reference set

### 1.1 The design conversation

`Site/Reference/Conversation.md` - the reasoning, in order: the enclosure
hierarchy, the thick upper edge, the module anatomy, the doors and the
exposed internals, the bays, the pronounced extrusion, the cabinet
geometry, the routing background, the interlocking rule, the front as a
door, the four render layers, the meter's construction, the thick door,
the thin faceplate, the apertures, the irregular corner trims, the
hinge, and the acceptance criteria.

### 1.2 The screenshots

- `deepseek_harness_extruded_instrument_cabinet_2/screen.png` - the page
  attempt: the hinge-axis rail, the numbered bays, the two counter
  meters, the dual-engine cards, the 15 module cards with coloured top
  rules and Inspect trays, the workbench bay, the spec footer.
- `deepseek_harness_service_panel_instrument_cabinet_2/screen.png` - the
  documentation cabinet: the BAY 01-04 mode tabs, the 15 modules in a
  four-column field with per-category accent rules, the revenue counters.
- `deepseek_harness_extruded_service_cabinet_infrastructure/screen.png` -
  the strongest extrusion: the hatched top band, the ribbed right wall,
  the routing glyphs and junction dots at the left, the view-mode
  segmented control, the six bays, the columned footer.
- The other eight attempts - the variants to draw from, not to copy.

### 1.3 The hard-edged instrument library (Ely)

`~/Developer/Documentation/Module/Ely-GPUI-Components`. The files this
design borrows from, and what each supplies:

| Path | What is taken |
| --- | --- |
| `README.md` | the framing: every component in light and dark, a warm quiet palette, colour carries meaning |
| `frontend/src/styles.css` | the token set (`--bg`, `--fg`, `--muted`, `--line`, `--accent`, `--iso-line`, `--iso-side`, `--iso-shade`), the three-tone faces, the one-line stroke, the 2px accent focus ring with a 3px offset, the `.skip` link, the `.button` anatomy (48px, ink fill, 160ms), the `color-mix` translucent bar, the reduced-motion reset |
| `frontend/src/iso/engine.ts` | `Block`, `project()`, `faces()`, `painted()`, `bounds()`, `inside()`, `rise()` |
| `frontend/src/iso/draw.ts` | the paint order right/front/top, one fill per face, one stroke per drawing, the accent flag, the line width rule |
| `frontend/src/iso/models.ts` | the model-as-data idiom, the beat sweep |
| `frontend/src/iso/mark.ts` | the polygon emitter, the padded bounds, the logo drawn in the same three tones |
| `frontend/src/iso/Iso.tsx` | `role="img"` with a label on a drawn object, the reduced-motion still path, the observer start |
| `frontend/src/theme.ts` | the external-store mode hook, the localStorage pin |
| `gpui-components.md` | the catalog anatomy for the segmented control, the meter, the gauge, the statistic, the property grid, the key-value list, the row expansion, the accordion, the tool-call card, the agent status, the command block, the log viewer, the before/after, the table toolbar, the elevation system, the reduced-motion provider |

Ely's **projection is not taken** (see decision 5). Ely's **sound** is not
taken (`marimba.ts`): a documentation site must not make noise. Ely's
**warm palette** is not taken: the brand is blue and white, and the tonal
*relationship* is what transfers, not the hue.

### 1.4 What would still help

1. **The original meter photograph.** `Conversation.md` cites
   `orig-orig-elektromer-tok-ceni.jpg`, which is not in
   `Site/Reference/`. It is the source for the aperture corners, the
   stepped trims, the digit wheels, and the plate proportions.
2. **The door and the lock, close up.** The hinge type (piano or two butt
   hinges), the closure seam, the keylock (a cam lock or a quarter-turn
   cylinder), the seal. The lock's plate is currently a designed object,
   not a traced one.
3. **An open cabinet or switchboard.** The mounting plate, the DIN rails,
   the terminal blocks, the loom, the labels. The interior's plate is
   designed from the conversation's description, not photographed.
4. **The plate typography.** The engraved serials, the model codes, the
   certification marks, the units, the Cyrillic labels.
5. **The full-width cabinet reference.** A built-in cabinet, a wall
   switchboard, a rack that meets the floor and the wall. The new design
   bleeds the object into the page; a photograph of a real built-in
   cabinet would settle how the top plane meets the wall and how the base
   plate meets the floor.
6. **The horizontal screen reference.** A slide sequence, a carousel with
   snap, a filmstrip. The transition is designed, not observed.

## 2. The decisions

### 2.1 The page categories (decided)

`/plugins/` is a horizontal sequence of two page-sized cabinets:

- **CAB-01 THE HOOKS** - 14 modules: the governors (3), the six stream
  normalizers, the file normalizer, ccr, tool-coach, and the machinery
  (core, factory).
- **CAB-02 THE DISPLAY** - live-containers, plus the planned panel as a
  labelled preview.

The machinery is included in screen 01 rather than given its own screen:
every hook depends on it, and the door should reveal the whole system.
The cost is a denser field (14 plates, four bay groups); the benefit is
that a reader who opens one door sees the family. A third screen exists
only when a third category exists; the sequence is data-driven.

The five old cabinet names survive as the bay groups inside screen 01.

### 2.2 The cabinet scope (decided)

One cabinet per page, full width, no margin, on every page. The long-form
pages (the versions, the models, the flavors, the case study) are mode B:
the shell, the lintel, the bays, the dark plate, no door. A door on a
6000px article is not a door. The registry screens, the landing, the
detail pages, the workbench, the matrix, the setup, and the 404 are mode
A and keep the door.

### 2.3 The door's default (decided)

Closed on the registry screens, where opening is the primary action and
the cover carries the count and the claim. Open on the landing, the
detail pages, and the workspaces, where the content is the point and the
install must not sit behind a latch. The state is persisted per page in
`sessionStorage`; a deep link to a module forces the open state.

### 2.4 The door gap and the thickness (decided)

The gap is 8px and the door is 16px thick, against a cabinet depth of 72.
The gap is visible on the top and the right only, because the door is
hinged on the left and laps the frame on the left and bottom. The gap is
geometry (a black slot showing the interior), not a border and not a
shadow. The ratio cabinet : door : faceplate is 72 : 16 : 3.

### 2.5 The isometric engine (decided)

Ely's engine, ported for its model and its paint order, with a **frontal
oblique projection at 45 degrees** in place of Ely's 30 degree isometric.
The reason: Ely draws an object floating on a page, where every axis may
recede; the site's cabinet is the page, and its front must stay square
and readable. The 45 degree angle is preserved at every width by changing
only the depth, never the ratio.

The shell and the door faces are CSS `calc()` clip-path polygons, not
SVG: the geometry stays exact at any width, costs no bytes, and needs no
JavaScript. The meters and the mark are inline SVG, generated at build
time by the ported engine, because they are fixed-size objects with
curves and ticks. There is no canvas, no WebGL, and no per-frame
JavaScript anywhere in the design.

### 2.6 The interior darkness (decided)

The interior is `#06090f` to `#0b1018`, the darkest surface in the scene.
The modules are pure white plates on it, and the reading surfaces (prose,
tables, terminals) are light insets. The black is the cabinet; the white
is the page. A dark interior with dark text would fail both contrast and
the metaphor: an instrument's inside is dark, its faceplates are lit.

### 2.7 The palette (decided)

The site's cool blue-white-grey, arranged by Ely's tonal rule: the front
is the lightest (pure white), the top plane is the ambient grey, the
right wall is the shadow. Ely's warm hues are not imported. The blue
`#0052ff` stays the functional accent; the orange stays the RAW surface;
the red stays the PIN and the errors; the amber is added for the pending
state, which the current site handles in prose only.

The dark theme is a material inversion: the metal darkens, the lit plates
dim to paper grey, and the interior stays the darkest. Pure white exists
only in the light theme.

### 2.8 The lock (decided)

A quarter-turn cylinder mounted on the door, with the close control on
the fixed stile. The lock turns 90 degrees in 160ms; the door follows.
The close plate never moves with the door, so the control that closes the
cabinet is where it was when the door opened.

### 2.9 The swing (decided, with a fallback)

`perspective: 8000px`, `rotateY(0 -> -88deg)`, 320ms, origin at the left
edge. The weak perspective keeps the free edge's growth to about 19
percent. At rest-open the door is edge-on, so the parallel scene and the
perspective transition never disagree in a still frame. A flat
`scaleX(1 -> 0.02)` fallback is specified for any environment that cannot
do 3D transforms.

### 2.10 The horizontal transition (decided)

One scroller, `scroll-snap-type: x mandatory`, two `100vw` panels, a
tablist in the lintel, arrows / Home / End, and a hash written with
`replaceState`. The body has no vertical overflow on the registry screens,
so a horizontal gesture can never fight a vertical one; the only vertical
scroll is inside the field, and it is contained.

## 3. The open questions

1. **The camera.** The brief says "viewed slightly from the top left"; the
   reference screenshots and the "45 degree right side" both show the top
   and the **right** wall, which is a view from above-right. This design
   resolves it as **the light** coming from the upper left (the top plane
   is lit, the right wall is in shadow) and keeps the reference's visible
   faces. If the camera reading is binding, the whole shell mirrors: the
   depth recedes up-left, the back bleeds off the top and left edges, and
   the door's gap moves to the top and left. That is a one-variable
   change in `Iso.ts` and the shell's clip paths, but it reverses the
   composition, so it must be decided before T02.
2. **The field's scroll.** At 1440x900 the 14 plates do not fit the 428px
   field and it scrolls by about 72px. The alternative is a shorter plate
   (98px) that fits, at the cost of the sentence's second line. The
   design takes the scroll; a reader who dislikes it can be given the
   four bay groups as collapsible sections instead.
3. **The landing's default.** The design opens the landing's door. A
   closed landing would be more dramatic and a worse conversion path. If
   the owner wants the drama, the cover must carry the install terminal
   in full.
4. **Screen 02's density.** One shipped module plus one planned preview is
   a thin screen. If the panel is not approved, the screen becomes a
   single-module cabinet with the container anatomy, and the sequence may
   be better with one screen than two.
5. **The pending meter.** A fourth meter reading "REGISTRY 25 / 31" would
   be the most honest instrument on the page. It needs a live reader in
   `Live.ts` and a fallback in `Content.ts` before it can ship; until
   then, the pending state stays a plate on the affected modules.
6. **The 11px floor.** The plate labels go to 11px; the site's documented
   floor is 13px. The labels are short uppercase mono strings with wide
   tracking, and they are never prose. If the floor is absolute, the
   labels go to 12px and the module plates grow by 4px.

## 4. The acceptance for the whole transformation

- The site builds; 24 content pages plus 404; the Drift passes.
- Every page is one cabinet; the back meets the page's top and right
  edges; the front is square; the angle is 45 degrees at every width.
- The door's gap and thickness read on the top and right; the door opens
  and closes by click, by Enter, by Space, and by Esc.
- The interior is black; the plates are white; the field is flat; the
  meters are isometric and their values match `Content.ts`.
- The registry sequence moves by tab, arrow, swipe, and hash; the mobile
  stacks; the reduced-motion path changes no content.
- The pending packages are never promised an install that 404s.
- No canvas, no WebGL, no per-frame JavaScript, no cast shadow, no
  gradient.
