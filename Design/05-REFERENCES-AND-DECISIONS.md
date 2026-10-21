# 05 - References and Open Decisions

## What the reference set already has

- `Conversation.md` - the design reasoning, from the meter photograph to
  the thick door, the thin faceplate, the apertures, the trims, the
  routing background, and the acceptance criteria.
- Eleven HTML attempts with screenshots:
  `deepseek_harness_extruded_instrument_cabinet_1/2`,
  `deepseek_harness_service_panel_instrument_cabinet_1/2/3`,
  `deepseek_harness_extruded_service_cabinet_infrastructure`,
  `deepseek_harness_front_facing_instrument_cabinet`,
  `deepseek_harness_industrial_apparatus_master_overview`,
  `deepseek_harness_industrial_apparatus_relay_array`,
  `deepseek_harness_unified_architectural_ecosystem`,
  `deepseek_harness_overview`, `deepseek_harness_overview_dark_mode`.
- `technical_precision_documentation/DESIGN.md` - the token file and the
  current design system.

## What would help (the references to collect)

1. **The original meter photograph.** The conversation cites
   `orig-orig-elektromer-tok-ceni.jpg` but the file is not in
   `Site/Reference/`. It is the source for the aperture corners, the
   black stepped trims, the digit wheels, the plate labels, and the
   proportions. Without it, the apertures and the trims are interpreted
   from the ASCII sketches.
2. **The door and the lock, close up.** A photo of the actual door edge,
   the hinge (the piano or the two butt hinges), the closure seam, and
   the keylock (the cam lock or the quarter-turn cylinder, the keyhole,
   the ring, the seal). This is the signature interaction; a real
   mechanism photograph would settle the lock's shape and the door's
   thickness.
3. **An open cabinet or switchboard.** The interior mounting plate, the
   DIN rails, the terminal blocks, the wiring loom, the labels. This is
   what the open door reveals; the current attempts show the closed face
   only.
4. **The plate typography and the marks.** The engraved/stamped serial
   plates, the model codes, the certification marks, the units, the
   Cyrillic labels, the small tabs and symbols. These give the plate
   labels their authenticity.
5. **The specific era and model.** The old electrometer (the
   Weston/Siemens/Sangamo type), the Soviet-era meter (the Cyrillic
   `ТАРИФ II`), the new digital meter, or the water meter - each has a
   different aperture, dial, and lock language. A decision on the era
   would narrow the references.
6. **The schematic style.** The single-line electrical diagrams, the
   terminal numbering, the wire colors, the relay symbols. This feeds the
   `WiringDiagram` and the background routing.
7. **The horizontal rack reference.** The rack/cabinet row, the drawer
   slides, the scroll snap, the category selector. The rack is a new
   interaction; a physical reference would help the snap and the depth.
8. **The brand constraints.** The PlayForm mark usage, the blue
   (#0052ff), the font licenses (Inter and IBM Plex Mono are OFL), the
   dark theme expectations.

## The open decisions

1. **The palette.** The instrument neutrals (the pale shell, the gray
   top, the darker right) plus the site's blue as the functional accent
   (recommended), or the full green-gray meter palette. The blue keeps
   the brand and the active states legible; the meter palette is more
   authentic but loses the blue dominance.
2. **The door scope.** The category cabinets and the plugin detail pages
   (recommended); the landing cabinet too. Not every card.
3. **The lock.** A quarter-turn keylock with the keyhole and the ring
   (recommended), or the latch from the attempts ("ROTATE TO UNSEAL"), or
   a padlock hasp.
4. **The first slice.** One plugin detail page (the cabinet with the
   door, the lock, the faceplate, the counter, the module) as the canary
   (recommended), then the rack, then the landing.
5. **The rack order.** The engine first (the dependency order,
   recommended), or the flow first (the user's example: the pipes first).
   The rack is a one-line reorder.
6. **The 3D implementation.** The CSS 3D transform for the door swing
   plus the SVG/CSS polygons for the shell (recommended; no WebGL), or a
   static SVG with the door as a separate layer.
7. **The copy.** The existing claims and voice stay; the new labels are
   short functional strings (the module codes, the units, the statuses).
   No decorative hardware poetry ("release latch" -> "Open cabinet").
8. **The page order.** The detail canary, the rack, the landing, then
   the workbench, the matrix, the setup, the versions, the models, the
   flavors, the case study, the 404.

## The acceptance for the whole transformation

- The site builds; 24 content pages + 404.
- The Drift passes; the claims stay true.
- The door and the lock work by click and keyboard on the landing, the
  rack, the detail pages, and the 404.
- The modules open their trays; the content is readable; the reduced
  motion path works.
- The mobile: the depth reduces, the rack stacks, the doors reveal
  inline, the text never shrinks below 13px.
- The performance: the CSS and the SVG stay measured; no WebGL; the
  fonts unchanged.
- The content: the install boxes do not promise a 404; the publish-
  pending state is a first-class plate.
