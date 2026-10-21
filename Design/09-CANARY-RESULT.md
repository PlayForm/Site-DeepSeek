# 09 - The Canary Result

The first slice is built and verified. This document records the evidence,
the deviations, and the decisions the canary forced.

## 1. What landed

One full-width Mode A cabinet on `/plugins/`, above the legacy registry
content (build-alongside; the swap is T13):

- the shell: the front, the top plane, the right wall, the 72px bleed,
  the top-left field triangle, the 45-degree angle at every depth;
- the black interior: the shelf 96, the field 428, the status 32, the
  frontal plate;
- the door: the 1288x596x16 slab, the 8px gap on the top and right only,
  the 320ms swing, the edge-on rest, the flat fallback;
- the lock: the quarter-turn with single activation, the fixed close
  plate on the stile;
- the three isometric meters: MODULES, CHECKS, RELEASE, with the stepped
  trims and the red digits;
- the 14-module field in four collapsible bay groups, each plate with a
  working Inspect tray.

## 2. The evidence

| Gate | Result |
| --- | --- |
| `pnpm prepublishOnly` | exit 0, 24 pages, 25 HTML = 24 + 404 |
| `pnpm Test` | 17/17 geometry checks (the 06 polygons, the 45-degree diagonals at 72/48/24, the paint order, the bounds, inside, Rise, Points) |
| `pnpm Drift` | 310 checks, 279 pass; the 31 fails are all the package "Target is fresh" check (pre-existing; zero content-value failures) |
| A11y | one h1; the door and close plate are real buttons with aria-expanded/aria-controls; Esc; the focus moves to the first Inspect and back; the interior inert closed, the door inert open; the skip link is the first Tab stop; the field is a labelled scroll region; the meters are role=img with sentence labels; the trays/bays/filters use the real ARIA; the no-JS fallback shows the interior; reduced motion hides the door instantly |
| Responsive | 1440x900 depth 72, 4 columns, no horizontal overflow; 1024 depth 48, 3 columns; 768 depth 24, 2 columns; 390 depth 0, 1 column, the 240px cover band |

Screenshots: `/tmp/shots/final-1440-closed.png`,
`/tmp/shots/final-1440-open.png`, the dark variants, the mid-swing, the
1024/768/390, and the no-JS proof.

## 3. The deviations, and the decisions

### 3.1 The canary is the hooks screen

The build-alongside hooks screen (CAB-01, 14 modules) on `/plugins/`,
not the single detail page. Accepted: it exercises the whole system at
the real density, and the legacy content stays below until T13. The
detail-page canary moves to T13 (the first page swap).

### 3.2 The field scrolls about 415px, not 72px

The four bay rails force five plate rows: 838px of content in the 423px
field. The 06/08 estimate of ~72px was wrong. **Decision: accept the
internal scroll.** The shelf and the status strip stay fixed; the field
is the roll; the four bay groups are collapsible (default expanded), and
collapsing them makes the field fit. The shorter 98px plate stays
rejected. The 06 and 08 are corrected with the measured number.

### 3.3 The lock is the visual key inside the door-wide button

The implemented canary makes the whole door the hit target (a real
`<button>` with the lock drawn inside it), and the close plate is a
second real `<button>` on the fixed stile. The 07's "the lock is the real
accessible control" is met functionally: one activation, aria-expanded,
Esc, the focus return. **Decision: accept the door-wide hit target.** It
is the larger, more accessible target; the lock remains the visual
affordance that says "this opens". If a literal separate lock button is
wanted later, it is a small change.

### 3.4 The deferred tasks

T08 (the three-column tray), T09 (the sequence, the tabs, the hash, the
arrows, CAB-02), T10-T12 (the readouts, the control panel, the wiring),
T13 (the page swaps), T14/T15 (the audits and the handoff). The
`Screens.ts` data for CAB-02 exists but is unrendered; the `/plugins/`
sequence does not exist yet.

### 3.5 The 31 package freshness failures

All 31 are the monorepo packages' "Target is fresh" check: the package
Sources are 01:53 and their Targets 01:52, both before this session. The
fix is the root package rebuild (`pnpm run build` at the repo root) or an
accepted baseline. The Site lane cannot fix it; the content figures are
unaffected.

### 3.6 The publish-pending install rows

The legacy cards for ccr, tool-coach, and live-containers no longer
render install rows: the registry returns 404 for those three and 200 for
the other 12. `/plugins/` no longer promises a 404 install.

## 4. The next step

T08 (the three-column tray) and T09 (the `ScreenSequence`, the
`ScreenTab`, the `Sequence.mjs`, and CAB-02 with live-containers and the
PLANNED panel), then T10-T13, then T14/T15. The detail-page canary is the
first T13 swap; the `/plugins/` swap removes the legacy content.
