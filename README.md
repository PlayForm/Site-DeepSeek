# @playform / DSH Family - Site

The website for the **DeepSeek Harness Plugin Family for <a href="https://PlayForm.Cloud">PlayForm</a>** - an Astro static
site in the "Technical Minimalist Harness" design: blue + white only, Inter + IBM Plex Mono, clean
headers, zero elevation (1px hairlines, no shadows, no gradients).

## Pages

| Route              | Contents                                                                                                                                                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                | The landing page: eyebrow badges, hero (the mission), terminal install, action row, plugins grid, versions cards, flavor strip, model independence, notation                                                                      |
| `/plugins/`        | The twelve plugins with their @-sentence identities, `pnpm add @playform/<pkg>` snippets, a filterable registry, the pipeline manifest table, the harness seams, the smoke baseline and the architecture-in-action cards          |
| `/plugins/<name>/` | Twelve plugin detail pages (one per package) built from the packages' real documentation: the install bar, the harness seams, Where It Fits, the Problem, How It Works, the Config, In Action (literal characters) and the Ledger |
| `/setup/`          | The four-step profile setup (bundles list, cordis.patch.yml entries, restart, ledger verification), the configurable surface and the defaults-off optionality                                                                     |
| `/versions/`       | The dual engine distribution: CLASSIC (plain TypeScript) vs EFFECT-TS (services & layers), both 0.0.1, the shared invariants and the smoke baseline                                                                               |
| `/flavors/`        | The seven normalize flavors (dash, quotes, ellipsis, spaces, invisible, fullwidth, file), the two governance roles, and the 11-badge sprite                                                                                       |
| `/models/`         | The model-agnostic story: the family normalizes any LLM's output; battle-tested on DeepSeek V4 Flash and GLM 5.3 Flash                                                                                                            |
| `/workbench/`      | The interactive Stream Gate & Normalization Workbench: live raw-vs-clean terminals, flavor hook switchboard, telemetry metrics, trace ribbon                                                                                      |
| `/matrix/`         | The interactive Matrix Stream Inspector: raw model emission vs normalized output, flavor checkboxes, the smoke suites backing the demo rules                                                                                      |

The old `/products/` routes are gone (renamed to `/plugins/`); stale links land on the styled
`/404` page, which lists the current navigation.

## Structure

```
Source/
	Layout/          the layout shell (Base: header, footer, fonts, meta)
	Component/       the UI components (Badge, Card, SectionHeader, PageHero, Terminal)
	pages/           the Astro pages (index, plugins, versions, flavors, models, workbench, matrix, plugins/<12 detail pages>)
	Script/          the client scripts
	Stylesheet/      the design system (Base.css: Tailwind; Global.css: tokens + layout)
Public/            static assets copied verbatim (404.html, _headers, Manifest.json, robots.txt, assets/)
Target/            the built static site (the deployment artifact)
```

`components.json` declares the component aliases (`./Source/Component`, `./Source/Layout`,
`./Source/pages`, `./Source/Stylesheet`), and `prettier.config.js` carries the formatting standard
(tabs, width 100) with optional Astro/Tailwind plugins detected when installed.

The design tokens and component styles in `Source/Stylesheet/Global.css` are adapted from the
Reference design system: `--color-primary` `#003ec7`, `--color-primary-container` `#0052ff`,
white/near-white surfaces, the `--radius-*` scale, the 8pt spacing rhythm, and the exact Inter /
IBM Plex Mono type scale. Every surface boundary is a 1px `outline-variant` hairline.

## Build

```
pnpm install
pnpm run prepublishOnly   # astro build → Target/
pnpm run Run              # astro dev on :9999
```

## Deployment - Cloudflare Pages

The site is fully static (`output: "static"`, `outDir: "./Target"`). To deploy, point Cloudflare
Pages at this repo:

- **Build command:** `pnpm run prepublishOnly`
- **Build output directory:** `Target/`
- **Framework preset:** none - it is a static site.

A Git-connected Pages project works with no extra configuration: the build command and the
output directory above are all Pages needs (no `wrangler.toml` is required).
`Public/_headers` ships cache rules for the content-hashed `_astro/` assets, and `Public/404.html`
provides the styled not-found page that Cloudflare Pages serves automatically. Routes are emitted
directory-style (`plugins/index.html`), which Pages serves natively.
