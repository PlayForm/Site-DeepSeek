# DSH Family Site - Design Handoff

One document for a designer. It describes the site as built: the brand,
the design tokens, the shell, the component library, every page and how it
renders, the interactive surfaces, the content model, and the known design
issues worth improving. The source of truth is `Site/Source/`; this
document explains it, it does not replace it.

## 0. The brief

**What the site is.** The documentation and marketing site for the
DeepSeek Harness Plugin Family by PlayForm: 31 npm packages that add
deterministic governance, normalization, compression, and coaching to the
DeepSeek Harness. The site is a static Astro build, deployed to Cloudflare
Pages, with 24 content pages plus a 404.

**Audience.** Developers evaluating or installing the family: they need to
understand what each plugin does, whether it is safe, how to install it,
and what the smoke checks prove. Secondary: returning users checking
versions and release state.

**Conversion paths.** The install command (the terminal boxes), the setup
configurator, and the plugin detail pages. Every install box is a promise;
a 404 breaks the primary conversion path.

**Personality.** Technical, precise, calm, evidence-first. A field manual,
not a landing page. Blue and white, hairlines, mono labels, zero
decoration. The copy is the family's own vocabulary: plugin, package, hook,
flavor, normalizer, ledger, bundle.

## 1. The design system

### 1.1 Color (light)

| Token | Value | Use |
| --- | --- | --- |
| `--color-surface` | `#ffffff` | the canvas |
| `--color-surface-container-low` | `#f8fafc` | trays, table headers, terminal readouts |
| `--color-surface-container` | `#f0f4ff` | the blue-tinted panel |
| `--color-surface-container-high` | `#e5edff` | selected / raised tint |
| `--color-surface-container-highest` | `#dde9ff` | the deepest tint |
| `--color-surface-variant` | `#dfe2f1` | the neutral variant |
| `--color-on-surface` | `#0b0f19` | primary ink |
| `--color-on-surface-variant` | `#475569` | secondary ink |
| `--color-outline` | `#64748b` | the muted outline |
| `--color-outline-variant` | `#e2e8f0` | **every 1px hairline** |
| `--color-primary` / `--color-harness-blue` | `#0052ff` | the one chromatic primary |
| `--color-harness-blue-deep` | `#0038b8` | pressed / deep |
| `--color-harness-blue-subtle` | `#ebf2ff` | the subtle fill |
| `--color-harness-blue-tint` | `#f0f4ff` | the tint |
| `--color-harness-blue-badge` | `#e5edff` | the badge fill |
| `--color-harness-blue-focus` | `#cce0ff` | the focus ring |
| `--color-accent-orange` | `#bf3003` | **only** the RAW / stream / flavor surfaces |
| `--color-pin-red` | `#c62828` | **only** the PIN identity words |

The orange and the red are sanctioned second and third hues, each with a
documented AA rationale. Do not introduce another hue. The blue is the
primary accent everywhere else.

### 1.2 Color (dark)

The dark theme is a token override on `:root[data-theme="dark"]`; the
geometry never changes.

| Token | Value |
| --- | --- |
| `--color-surface` | `#0b0f19` (the ink becomes the canvas) |
| `--color-surface-container-low` | `#161e33` |
| `--color-surface-container` | `#1b2742` |
| `--color-surface-container-high` | `#223052` |
| `--color-surface-container-highest` | `#2a3a63` |
| `--color-surface-variant` | `#2a3a63` |
| `--color-on-surface` | `#eef0ff` |
| `--color-on-surface-variant` | `#a3aecb` |
| `--color-outline` | `#8291b3` |
| `--color-outline-variant` | `#2b3852` |
| `--color-harness-blue` | `#8ab0ff` |
| `--color-accent-orange` | `#ff8a4c` |

The theme is set before first paint by an inline head script: a stored
choice wins, otherwise `prefers-color-scheme` decides, and with no stored
choice the OS stays live. The header switch is a two-cell mono chip
(LIGHT / DARK); the active cell is attribute-driven CSS.

### 1.3 Typography

| Role | Family | Size / line / weight | Notes |
| --- | --- | --- | --- |
| Hero display | Inter | `clamp(2rem, 1.775rem + 0.95vw, 2.5rem)` / 1.2 / 600 | tracking -0.03em; 32px at 360, 40px from ~1200 |
| Headline LG | Inter | 28 / 36 / 600 | tracking -0.015em |
| Headline MD | Inter | 20 / 28 / 600 | tracking -0.01em |
| Body LG | Inter | 17 / 26 / 400 | |
| Body MD | Inter | 16 / 24 / 400 | |
| Body SM | Inter | 14 / 21 / 400 | |
| Label LG | IBM Plex Mono | 15 / 22 / 500 | |
| Label MD | IBM Plex Mono | 14 / 20 / 500 | |
| Label SM | IBM Plex Mono | 13 / 18 / 500 | the floor; nothing smaller |

Fonts are self-hosted: Inter (one variable file), IBM Plex Mono (400, 500,
600), latin subsets, OFL licensed. The two above-the-fold faces are
preloaded.

### 1.4 Space, radius, layout, motion

- Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48 (`--space-xs` ... `--space-3xl`).
- Radii: 2 / 4 / 6 / 8 / 12 / 9999 px (`--radius-sm` ... `--radius-full`).
- Layout: header 56px; content max-width 1120px; gutters 16px (12px small,
  24px large); page margins 24px (16px mobile).
- Motion: 50 / 100 / 150 / 200 / 300 ms; easings
  `cubic-bezier(0.4,0,0.2,1)` (crisp) and `cubic-bezier(0.16,1,0.3,1)`
  (snap). No float, no bounce. Every animation dies under
  `prefers-reduced-motion`.
- **Zero elevation**: no shadows, no gradients. Every boundary is a 1px
  `--color-outline-variant` hairline.

### 1.5 Breakpoints

| Query | What changes |
| --- | --- |
| `max-width: 767.98px` | the mobile layout; the nav collapses to the hamburger tray |
| `min-width: 640px` | the small grid expands (2-up) |
| `min-width: 768px` | the desktop nav returns; the 2-3 column grids |
| `min-width: 900px` | the wide two-column demos (the showcase, the workbench) |
| `min-width: 1024px` | the full grids and the case-study layout |

## 2. The shell

Every page wraps in `Base.astro`:

1. **The head**: the theme script (before paint), the title, the meta, the
   canonical, the Open Graph and Twitter cards, the JSON-LD
   (`SoftwareApplication` with the packages as parts), the font preloads,
   the manifest, the favicons, the global stylesheet.
2. **The header** (fixed, 56px, hairline bottom):
   - the brand: the PlayForm glyph (28px) + "DSH Family @ PlayForm";
   - the primary nav: 9 items (Overview, Plugins, Workbench, Matrix,
     Models, Versions, Setup, Flavors, Case Study); the current item gets
     `aria-current="page"`;
   - the theme chip (LIGHT / DARK);
   - the mobile hamburger (`.js-gated`: no dead control without JS), with
     `aria-expanded` / `aria-controls`; the tray opens on narrow screens,
     closes on Esc, outside click, a link click, and the 768px breakpoint.
3. **The page**: `<div class="page">` with the page's sections.
4. **The toast**: one transient status instance (copy, filter, stream
   actions), with a progress line and a 2.6s life.
5. **The footer**: the 9 nav links, the @playform note, the copyright.

The case-study page adds a 2px reading gauge along the top edge. Every
`main .section` fades up on first view (IntersectionObserver, one gesture,
no stagger; a scroll fallback for fast scrolls; reduced-motion users get
the full-opacity state).

## 3. The component library

| Component | Anatomy | Variants / states | Used on |
| --- | --- | --- | --- |
| `PageHero` | the `h1` + one or two sub lines; a `sub-1` slot for icon-bearing lines | | every page |
| `SectionHeader` | the blue marker bar + the Inter title + the uppercase mono meta; the meta passes through the file-icon and the PIN/GOVERN/NORMALIZE word coloring | | every section |
| `Badge` | a mono chip | primary, muted, outline, active, classic, effect, flavor; an optional blue dot | eyebrows, statuses, flavor chips |
| `Card` | the hairline plane: the name (optionally linked + a brand icon), a badge slot, a sentence, a description (with safe inline links), an install row (the `$` command + COPY), an after slot | default, white, primary; `data-tags` for the filter | the landing's plugins/versions, the plugin grid, the models |
| `StatsBand` | three cells in one hairline band: the value + the uppercase mono label; the pair renders `1314 + 1324` | | the landing |
| `Concept` | a titled block with an optional diagram and the notation | | the landing, the detail pages |
| `Terminal` | the hairline panel: the bar (the label + the transient COPIED), the command line with the `$`, the copy button; an optional 2px orange rail for the input/raw surfaces | | the install boxes everywhere |
| `TerminalTray` | a set of terminal panes with a shared label | | the landing, the demos, the detail pages |
| `CodeBlock` | a syntax-highlighted code block | | the config and the how-it-works |
| `Compare` | the draggable split: the RAW pane (the orange rail, the anomaly highlights) versus the NORMALIZED pane, the blue handle; keyboard (arrows, home/end); the reduced-motion static split | | the flavor detail pages |
| `Configurator` | the setup surface: the 14 package toggles, the engine choice, the profile name; the generated install-all command, the bundles list, the patch inserts, the verification lines; the URL + localStorage state; the default server-rendered | | the setup page |
| `FlavorBadge` | the flavor chip | | the flavors page, the demos |
| `InstallDemo` | the install command + the copy action | | the landing |
| `Seams` | the harness seam diagram row | | the detail pages |
| `Showcase` | the example switcher: the tabs + the terminal panes | | the landing's use cases |
| `SupportsButton` | the support call-to-action | | the landing / the footer |
| `BrandIcon` | the brand glyph with an accessible label (the playform, the file types, the engines) | | everywhere |
| `ArrowIcon` | a decorative arrow | | the links |

The icon set is inline SVG; the file-type icons are a shared sprite; the
brand glyphs are the PlayForm and the engine marks.

## 4. The pages

### 4.1 `/` - Overview (the landing)

1. The hero: the family name, the one-sentence claim, the primary install
   terminal (with the orange rail), the live stream-gate preview.
2. The stats band: 31 packages, 1314 + 1324 checks, 0.1.0.
3. Plugins: the four family cards (the governor, the normalizer, the
   compressor, the coach) linking to the registry.
4. Versions: the two engine cards (Classic, Effect-TS) with the version
   and the install rows.
5. The use cases: four `Showcase` blocks (PIN, GOVERN, NORMALIZE,
   COMPRESS), each with the terminal panes.
6. The coaching ledger: the tool-coach terminal tray.
7. The verdict tray: the closing statement and the CTA.

### 4.2 `/plugins/` - the registry

The hero (the fifteen TypeScript plugins; the @-sentence naming; the
publish-pending caveat for ccr, tool-coach, and live-containers), the
filter/tag bar, and the 15-card grid. Each card: the name (linked to its
detail page), the sentence, the description, the install row. The filter
hides cards by `data-tags`; the count updates.

### 4.3 `/plugins/<name>/` - the 15 detail pages

The shared template:

1. The hero: the package name, the sentence, the family-position badges,
   the install terminal.
2. **Where It Fits**: the family position, the composition, the
   machinery.
3. **In the DeepSeek Harness**: the seams diagram (the Mermaid render).
4. **The Problem**: why the plugin exists.
5. **How It Works**: the pipeline, the gate order, the tables.
6. **The Config**: the exported schema, the defaults, the volatile cells.
7. **In Action**: the terminal demos, the compare slider (the flavors),
   the ledger.
8. **The Ledger**: the lines and the format.
9. **Known limits**.
10. **Related plugins**.

### 4.4 `/workbench/` - the interactive workbench

The stream gate and normalization workbench: the input editor, the gate
toggles (conversation, reasoning, tool input, tool results, files, batch),
the six flavor panes, the live transform, the keyboard controls, the
reduced-motion path. It is a client-side demo with no server.

### 4.5 `/matrix/` - the interactive matrix

The matrix stream inspector: the gate-hook toggles, the matrix canvas of
the stream states, the per-flavor smoke-check table. The same transforms
as the workbench, shown as a matrix.

### 4.6 `/setup/` - the install walkthrough

1. The configurator (the selection surface, the generated output).
2. **The wiring at a glance**.
3. **Step 1 - Add the bundles**: the bundles list, the linked checkout,
   the remote installs.
4. **Step 2 - The patch entries**: the `cordis.patch.yml` inserts.
5. **Step 3 - Restart**: the activation at the next start.
6. **Step 4 - Verify**: the ledger activation lines.
7. **The configurable surface**: the real schema fields.
8. **Optional by default**: the off-by-default surfaces.
9. **One ledger per plugin**.
10. **Pitfalls**.

### 4.7 `/versions/` - the versions

The operating set, the changelog record, the shared invariants, the smoke
baseline (the arbiter), and the honest caveat.

### 4.8 `/models/` - the models

The reference models (the battle-tested routes), what applies to every
model (the seven normalizers), the two routes, the per-batch coverage.

### 4.9 `/flavors/` - the flavors and roles

The seven flavors (six stream + the file tool), the six-flavor chain, the
roles (governance + the guardians), and the badge sprite.

### 4.10 `/case-study/` - the long-form narrative

The five phases (the boilerplate era, the audit and the fixes, going live,
the stream family, the raw-write saga and the ETS port), the decision
index, the working lessons. The reading gauge tracks the scroll.

### 4.11 `/404`

A hand-written page in `Public/404.html`: no external font dependency (it
must render when the network is degraded), the full nav, the message, and
the links home. It is not built from `Base.astro`; it is its own shell.

## 5. The interactive surfaces

| Surface | Behavior |
| --- | --- |
| Theme | the pre-paint script + the header chip; the localStorage pin; the OS live fallback; the tokens flip |
| Copy | one delegated `[data-copy]` handler: the clipboard, the button's COPIED state, the toast |
| Compare | the pointer-drag split, the keyboard arrows/home/end, the reduced-motion static split |
| Configurator | the toggles + the engine + the profile; the URL and localStorage state; the generated command, the bundles, the patch, the verification; the default server-rendered |
| Workbench | the input, the gate toggles, the six panes, the keyboard |
| Matrix | the gate hooks, the canvas, the smoke table |
| Showcase | the tab switcher + the terminal panes |
| Diagrams | the hover/focus highlight of a node and its neighbors; the keyboard-focusable linked nodes |
| Nav | the hamburger tray; Esc, outside click, link click, the 768px close |
| Sections | the fade-up reveal; the reduced-motion full-opacity state |
| Case study | the 2px reading gauge (transform-only, rAF-throttled) |
| Service worker | none; the site is a static build; `_headers` sets the cache policy; `Manifest.json` carries the install metadata |

## 6. The content model

`Source/Library/Content.ts` is the single source of truth for every
dynamic figure: the package count, the smoke totals (1314 Classic, 1324
Effect-TS), the release version (0.1.0), the history, the copyright, and
the fallbacks. `Live.ts` reads the monorepo at build time: the package
names and versions, the smoke manifests, the factory's method sections.
When a live source is missing, the documented fallback is served and the
build never fails. `Scripts/Drift-Guard.mjs` (`pnpm Drift`) checks the
fallbacks and the rendered claims against the repository (310 checks).

**The publication state.** The registry currently resolves 25 of the 31
names; `hook-dsh-ccr`, `hook-dsh-live-containers`, `hook-dsh-tool-coach`,
and their three `ets-` twins are missing. The plugins page, the setup
page, and the Configurator say **publish-pending** for the three Classic
ones. The `Terminal` component's label says `NPM 0.1.0`, and its source
comment claims all 31 are published; that comment is ahead of the
registry. The designer must preserve the publish-pending caveat, and the
install boxes must not promise a 404.

## 7. Assets

- **Fonts**: `Public/Font/` (Inter variable, IBM Plex Mono 400/500/600,
  latin subsets, the OFL license).
- **Brand**: `Public/Brand/` (the favicon SVG/PNG, the apple touch icon,
  the OG image at 1200x630).
- **Badges**: the badge sprite on the flavors page.
- **Diagrams**: `.mmd` sources rendered to inline SVG by
  `Source/Content/Mermaid/Render.mjs`; the labels wrap, the boxes must
  stay inside the viewBox.
- **Icons**: inline SVG in the components and `BrandIcon`.

## 8. Accessibility and performance

- Focus-visible rings on every interactive element; `aria-current` on the
  nav; `aria-expanded`/`aria-controls` on the menu; `role="switch"` on the
  theme chip; `aria-live` on the toast.
- Every meaningful icon carries a label; decorative icons are
  `aria-hidden`; every image has alt text.
- The orange and the red were chosen for AA contrast on the white and the
  `#f8fafc` surfaces.
- Reduced motion is honored in CSS and in the scripts (the reveals, the
  compare, the diagrams).
- **Gap**: there is no skip link; long pages (the case study, the setup)
  would benefit from one.
- Fonts are self-hosted and preloaded; the stylesheet is the dominant
  weight (the single global sheet is ~3,800 lines); the scripts are
  per-page and small; `_headers` sets the cache policy.

## 9. The design issues worth improving

1. **The single global stylesheet.** `Global.css` is one ~3,800-line file
   with the tokens and every page's rules. A designer's refactor should
   split it into tokens, base, components, and page layers, and measure
   the shipped weight per page.
2. **The 15 detail pages repeat one template.** The layout is consistent,
   but the visual system could support a shared "plugin page" frame with
   the per-plugin data injected, so a template change is one change.
3. **The publish-pending mismatch.** The install boxes are the primary
   conversion path; six names are not on the registry. The visual state
   (a pending chip, a disabled copy, a "build from source" route) should
   be a first-class component, not a sentence in the hero.
4. **The 404 is a separate shell.** It duplicates the palette and the nav
   by hand; a shared error layout would keep it in sync.
5. **The nav density.** Nine items plus the brand and the theme chip in
   56px is tight at the middle breakpoints; the information architecture
   (Overview, Plugins, Workbench, Matrix, Models, Versions, Setup,
   Flavors, Case Study) may want a "Docs" grouping.
6. **The workbench and the matrix** are the most custom surfaces; they
   are dense and keyboard-driven. Preserve their affordances; they are
   the proof of the family's mechanics.
7. **The mobile tables and diagrams.** The wide tables and the Mermaid
   diagrams need explicit small-screen treatment (scroll containers or a
   stacked form); the 900px breakpoint carries the wide demos.
8. **The case study** is the one long-form page; the reading gauge is the
   only orientation aid. A section index or a sticky mini-TOC would help.
9. **The missing skip link** and the absence of a visible focus style on
   some custom controls (the compare handle, the matrix) are the two
   accessibility gaps to close first.
10. **The future visual panel.** The family is planning a plugin-provided
    panel in the Harness UI (the family tab, the workspace lens). The
    site's visual language should be the reference for that panel, not a
    separate design.

## 10. How to verify a change

1. Edit under `Site/Source/` (and `Content.ts` for a figure).
2. Build: `cd Site && pnpm prepublishOnly` (no dev server; the built
   output is the arbiter).
3. Inspect `Site/Target/`: 24 content pages plus `404.html`.
4. Run `pnpm Drift` for the figure and claim checks.
5. Report READY-TO-COMMIT for the `Site/` files.

The site is its own git repository; the built `Target/` is committed.
