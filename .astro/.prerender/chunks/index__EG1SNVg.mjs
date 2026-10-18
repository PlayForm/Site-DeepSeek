import { C as __exportAll, S as createComponent, b as $$BrandIcon, n as $$Base, o as Counts, s as Families, t as $$Badge, x as renderScript } from "./Badge_CHteF_GF.mjs";
import { m as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_jUwDEDCs.mjs";
import { t as $$Card } from "./Card_B96geFVd.mjs";
import { t as $$SectionHeader } from "./SectionHeader_w9WBitnM.mjs";
import { t as $$Terminal } from "./Terminal_DR1pHPfM.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_BnYKfk14.mjs";
//#region Source/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Core = [{
		Name: "hook-dsh-core",
		Tone: "primary",
		Role: "ROLE: CORE",
		Sentence: Families.Core,
		Desc: "The pure, dependency-free commonalities of the family: the section lists, the exclusion segments, the suppression composer, the policy loader, the refusal guard and the normalize/Stream machinery."
	}, {
		Name: "plugin-dsh-factory",
		Tone: "primary",
		Role: "ROLE: FACTORY",
		Sentence: Families.Factory,
		Desc: "The family's first service: the ledger, the exclusion match, the discovery, the keep-list union, the gate set, the version-guarded fenced write, the wiring, the effects and the schema factory."
	}];
	const Governance = [
		{
			Name: "hook-dsh-governor-package",
			Tone: "ink",
			Role: "ROLE: GOVERNOR",
			Sentence: Families.GovernorPackage,
			Desc: "The silent package.json governor: hooks fs/observed, rewrites chain-governed pins to the effective registry's resolved versions, and runs the update stage as a detached, contained continuation."
		},
		{
			Name: "hook-dsh-pinner-package",
			Tone: "ink",
			Role: "ROLE: PINNER",
			Sentence: Families.PinnerPackage,
			Desc: "The silent package.json version pinner: hooks fs/observed and deterministically rewrites every ranged dependency version to its static version, protected by a pin-policy keep-list."
		},
		{
			Name: "hook-dsh-governor-cargo",
			Tone: "ink",
			Role: "ROLE: GOVERNOR",
			Sentence: Families.GovernorCargo,
			Desc: "The Cargo.toml governor: the Rust-sided flavor of the package governor - surgical chain-pin rewrites on the raw TOML lines and cargo upgrade driven through the subprocess seam."
		}
	];
	const Normalize = [
		{
			Name: "hook-dsh-normalize-dash",
			Flavor: "DASH",
			Sentence: Families.Dash,
			Desc: "Normalizes the unicode dash family to ASCII hyphen-minus in model output streams."
		},
		{
			Name: "hook-dsh-normalize-quotes",
			Flavor: "QUOTES",
			Sentence: Families.Quotes,
			Desc: "Maps the eight curly quote code points to their ASCII straight counterparts in model output streams."
		},
		{
			Name: "hook-dsh-normalize-ellipsis",
			Flavor: "ELLIPSIS",
			Sentence: Families.Ellipsis,
			Desc: "Replaces the horizontal ellipsis (U+2026) with the plain ASCII three-dot sequence in model output streams."
		},
		{
			Name: "hook-dsh-normalize-spaces",
			Flavor: "SPACES",
			Sentence: Families.Spaces,
			Desc: "Normalizes the unicode space family (Zs minus the ASCII space) to the plain space in model output streams."
		},
		{
			Name: "hook-dsh-normalize-invisible",
			Flavor: "INVISIBLE",
			Sentence: Families.Invisible,
			Desc: "Removes the zero-width/invisible character family (soft hyphen, zero-width spaces and joiners, bidi controls, BOM) from model output streams."
		},
		{
			Name: "hook-dsh-normalize-fullwidth",
			Flavor: "FULLWIDTH",
			Sentence: Families.Fullwidth,
			Desc: "Maps the entire FULLWIDTH FORMS range (U+FF01-U+FF5E) to its ASCII half-width counterparts in model output streams."
		},
		{
			Name: "hook-dsh-normalize-file",
			Flavor: "FILE",
			Sentence: Families.File,
			Desc: "The file-content normalizer: the normalize-file tool - the read, count, write pipeline applying all six transforms to a file already on disk, writing only when something changed."
		}
	];
	const Flavors = [
		"DASH",
		"QUOTES",
		"ELLIPSIS",
		"SPACES",
		"INVISIBLE",
		"FULLWIDTH",
		"FILE"
	];
	const Roles = ["ROLE: GOVERNOR", "ROLE: PINNER"];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "@playform / DSH Family - Tame the model's output and govern the project's files.",
		"Description": "The DeepSeek Harness Plugin Family for PlayForm: twelve TypeScript packages - the core, the factory service, the governance trio and the seven-member normalize family. CLASSIC and EFFECT-TS releases."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <!-- Eyebrow badges --><div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
ECOSYSTEM: ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "playform",
		"Size": "0.8em"
	})} @PLAYFORM
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"Size": "0.8em"
	})} CLASSIC
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"Size": "0.8em"
	})} EFFECT-TS
` })} </div> <!-- Hero: the two-split stage. The h1 stays above the split; the
			LEFT column carries the hero text, the install terminal (the
			site's input surface) and the action buttons; the RIGHT column
			carries the live stream gate preview, filling its column so the
			hero has no blank side. --> <section class="hero"> <h1 class="hero__title">Tame the model's output and govern the project's files.</h1> <div class="hero__split"> <div class="hero__lead"> <p class="hero__sub">
The ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "deepseek" })} DeepSeek Harness Plugin Family for
						PlayForm: every model's output normalized to clean ASCII characters, every
						manifest pinned and governed under the author's control - twelve TypeScript
						packages, smoke-arbitrated.<br>
Model output, clean and governed.
</p> ${renderComponent($$result, "Terminal", $$Terminal, {
		"Command": "pnpm add @playform/hook-dsh-core",
		"Rail": true
	})} <div class="action-row" style="margin-top: var(--space-md)"> <a class="action" href="/plugins/">
Explore Plugins
</a> <a class="action action--secondary" href="/workbench/">
Open the Workbench
</a> <a class="action action--secondary" href="/versions/">
Two Releases, One Behavior
</a> <a class="action action--secondary" href="/setup/">
Set It Up in a Profile
</a> </div> </div> <!-- Live stream gate preview (the hero's right column): the gate as
					the left-to-right pipeline it is - the RAW STREAM pane on the
					left feeds the flagged tokens through the middle pipe, and the
					NORMALIZED OUTPUT pane on the right lands the clean ASCII. Both
					panes are height-bounded (fixed line budget, overflow hidden):
					every generation appends the next response inside the panes, the
					oldest lines scroll out, and the page below never shifts. --> <section class="terminal-demo" data-demo> <div class="terminal-demo__bar"> <span class="terminal-demo__label"> <span class="live-dot"></span>
LIVE STREAM GATE PREVIEW
</span> <span class="terminal-demo__status" data-demo-status>
NORMALIZING · 0 CHARS
</span> </div> <div class="terminal-demo__stage"> <div class="terminal-demo__pane"> <span class="terminal-demo__pane-label is-orange">RAW STREAM</span> <div class="terminal-demo__screen rail-orange" data-demo-raw></div> </div> <div class="terminal-demo__flow"> <span class="flow-tag flow-tag--raw">RAW <span class="flow-tag__arrow">→</span></span> <span class="flow-line"> <span class="flow-line__pulse"></span> </span> <span class="flow-tag">CLEAN</span> </div> <div class="terminal-demo__pane"> <span class="terminal-demo__pane-label">NORMALIZED OUTPUT</span> <div class="terminal-demo__screen" data-demo-clean></div> </div> </div> </section> </div> </section> <!-- Plugins --> <section class="section" id="plugins"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Plugins",
		"Meta": `${Counts.Packages} PACKAGES`
	})} <!-- Group 1: Core & Factory --> <p class="section-kicker">Core &amp; Factory</p> <div class="grid grid--3" style="margin-bottom: var(--space-md)"> ${Core.map((Package) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Name": Package.Name,
		"Href": `/plugins/${Package.Name}/`,
		"NameTone": Package.Tone,
		"Sentence": Package.Sentence,
		"Desc": Package.Desc,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"Variant": "outline"
	}, { "default": ($$result) => renderTemplate`${Package.Role}` })}` })}`)} </div> <!-- Group 2: Governance --> <p class="section-kicker">Governance</p> <div class="grid grid--3" style="margin-bottom: var(--space-md)"> ${Governance.map((Package) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Name": Package.Name,
		"Href": `/plugins/${Package.Name}/`,
		"Sentence": Package.Sentence,
		"Desc": Package.Desc,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "slot": "badge" }, { "default": ($$result) => renderTemplate`${Package.Role}` })}` })}`)} </div> <!-- Group 3: Normalize --> <p class="section-kicker">Normalize</p> <div class="grid grid--3"> ${Normalize.map((Package) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Name": Package.Name,
		"Href": `/plugins/${Package.Name}/`,
		"Sentence": Package.Sentence,
		"Desc": Package.Desc,
		"Muted": true
	}, { "badge": ($$result) => renderTemplate`<span class="flavor-cell flavor-cell--compact"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": Package.Flavor })} </span>` })}`)} </div> </section> <!-- Versions --> <section class="section" id="versions"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Versions",
		"Meta": "DUAL ENGINE"
	})} <div class="grid grid--2"> ${renderComponent($$result, "Card", $$Card, { "Variant": "white" }, {
		"default": ($$result) => renderTemplate`  <p class="version-card__body">
The twelve contracts in plain TypeScript - classes, Maps and plain
						functions, zero runtime framework dependencies.<br>
The straightforward integration release.
</p> <div class="version-card__facts"> ${renderComponent($$result, "Badge", $$Badge, {
			"Variant": "primary",
			"Dot": true
		}, { "default": ($$result) => renderTemplate`
PLAIN TYPESCRIPT
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`ZERO FRAMEWORK DEPS` })} </div> `,
		"head": ($$result) => renderTemplate`<div class="version-card__head"> <span class="version-card__title">CLASSIC RELEASE</span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "typescript",
			"Size": "1.333em",
			"ClassName": "version-card__icon"
		})} </div>`
	})} ${renderComponent($$result, "Card", $$Card, { "Variant": "primary" }, {
		"default": ($$result) => renderTemplate`  <p class="version-card__body">
The same twelve contracts re-expressed on Effect-TS services and layers -
						same behavior, same smokes, different runtime plumbing.
</p> <div class="version-card__facts"> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`EFFECT-TS SERVICES &amp; LAYERS` })} ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`SAME SMOKES` })} </div> `,
		"head": ($$result) => renderTemplate`<div class="version-card__head"> <span class="version-card__title">EFFECT-TS RELEASE</span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "effect",
			"Size": "1.333em",
			"ClassName": "version-card__icon"
		})} </div>`
	})} </div> </section> <!-- Flavors --> <section class="section" id="flavors"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Flavors & Roles",
		"Meta": `${Counts.Normalizers} FLAVORS / ${Counts.Roles} ROLES`
	})} <!-- The canonical order: the seven flavors (DASH -> QUOTES ->
				ELLIPSIS -> SPACES -> INVISIBLE -> FULLWIDTH -> FILE), then
				the two roles. Each item is its own delineated cell: the
				stacked FLAVOR label + version chip read inside the cell's
				box, the grid fills the section width with no blank space. --> <div class="flavor-strip"> <div class="flavor-strip__flavors"> ${Flavors.map((Flavor) => renderTemplate`<span class="flavor-cell"> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, { "Flavor": Flavor })} </span>`)} </div> <div class="flavor-strip__roles"> ${Roles.map((Role) => renderTemplate`<span class="flavor-cell flavor-cell--role"> ${renderComponent($$result, "Badge", $$Badge, { "Variant": "active" }, { "default": ($$result) => renderTemplate`${Role}` })} </span>`)} </div> </div> </section> <!-- Model independence --> <section class="section"> <div class="independence"> <div class="independence__label"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"> <rect x="5" y="5" width="14" height="14" rx="1"></rect> <path d="M9 2 v3 M15 2 v3 M9 19 v3 M15 19 v3 M2 9 h3 M2 15 h3 M19 9 h3 M19 15 h3"></path> <rect x="9" y="9" width="6" height="6"></rect> </svg>
Model Independence
</div> <p class="independence__title">Built to serve any LLM.</p> <p class="independence__body">
Extensively battle-tested on <strong>DeepSeek V4 Flash</strong> &amp;
<strong>GLM 5.3 Flash</strong> token output streams.<br>
See the
<a href="/models/">models page</a>.
</p> </div> </section> <!-- Summary notation --> <section class="section"> <div class="notation"> <p>@playform / DSH Family: the complete deterministic stream governor matrix.</p> <p>
the hook-dsh-* hooks: zero runtime overhead normalizers with zero unicode drift.
</p> <p>the twelve packages: pinned under atomic version gates.</p> </div> </section> </main> ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:Source/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
