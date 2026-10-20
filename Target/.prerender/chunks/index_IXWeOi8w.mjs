import { C as Mention, D as __exportAll, E as createComponent, S as DotSep, T as createAstro, b as Versions, c as Families, n as $$Base, s as Counts, t as $$Badge, w as renderScript, x as $$BrandIcon, y as Totals } from "./Badge_epMRbWWn.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, n as templateEnter, p as renderSlot, r as templateExit, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$Card } from "./Card_Burs0ZFi.mjs";
import { t as $$SectionHeader } from "./SectionHeader_Dq_7HTHT.mjs";
import { t as $$Terminal } from "./Terminal_C56Vdwct.mjs";
import { t as $$TerminalTray } from "./TerminalTray_CpSvUys4.mjs";
import { t as $$Compare } from "./Compare_Djs2PE6H.mjs";
import { t as $$FlavorBadge } from "./FlavorBadge_KBZ5UEUR.mjs";
//#region Source/Component/Showcase.astro
createAstro("https://deepseek.playform.cloud");
var $$Showcase = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Showcase;
	const { Kicker, Title, Lead, Href, Before, After, Mark = true, Fact, FactLabel = "LEDGER", Wide = false, ID, Examples } = Astro.props;
	function Escape(Text) {
		return Text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	}
	function MarkLine(Raw, Other) {
		let Prefix = 0;
		while (Prefix < Raw.length && Prefix < Other.length && Raw[Prefix] === Other[Prefix]) Prefix += 1;
		if (Prefix === Raw.length && Prefix === Other.length) return Escape(Raw);
		let Suffix = 0;
		while (Suffix < Raw.length - Prefix && Suffix < Other.length - Prefix && Raw[Raw.length - 1 - Suffix] === Other[Other.length - 1 - Suffix]) Suffix += 1;
		const Middle = Raw.slice(Prefix, Raw.length - Suffix);
		const Tail = Raw.slice(Raw.length - Suffix);
		const Head = Escape(Raw.slice(0, Prefix));
		if (Middle.length === 0) return `${Head}${Escape(Tail)}`;
		return `${Head}<span class="showcase__mark">${Escape(Middle)}</span>${Escape(Tail)}`;
	}
	function JSONKey(Line) {
		return Line.replace(/(&quot;[^&]*?&quot;)(?=\s*:)/g, "<span class=\"showcase__key\">$1</span>");
	}
	const HasPair = Before !== void 0 && After !== void 0;
	const IdentityPattern = /\b(PIN|GOVERN|NORMALIZE)\b/g;
	function IdentityWords(Text) {
		return Text.replace(IdentityPattern, (Word) => {
			return `<span class="${Word === "PIN" ? "word-pin" : Word === "GOVERN" ? "word-govern" : "word-normalize"}">${Word}</span>`;
		});
	}
	const BeforeHTML = HasPair ? Before.map((Line, Index) => JSONKey(MarkLine(Line, After[Index] ?? ""))).join("\n") : "";
	const AfterHTML = HasPair ? After.map((Line, Index) => JSONKey(MarkLine(Line, Before[Index] ?? ""))).join("\n") : "";
	const ExampleVariants = Examples ? Object.entries(Examples).map(([Manifest, Example]) => ({
		Manifest,
		BeforeHTML: Example.Before.map((Line, Index) => JSONKey(MarkLine(Line, Example.After[Index] ?? ""))).join("\n"),
		AfterHTML: Example.After.map((Line, Index) => JSONKey(MarkLine(Line, Example.Before[Index] ?? ""))).join("\n"),
		Fact: Example.Fact
	})) : [];
	return renderTemplate`${maybeRenderHead($$result)}<article${addAttribute(`showcase${Wide ? ` showcase--wide${HasPair ? "" : " showcase--slot"}` : ""}`, "class")}${addAttribute(ID, "data-showcase-id")} data-astro-cid-ee5ahrvu> <div class="showcase__head" data-astro-cid-ee5ahrvu> <span class="showcase__kicker" data-astro-cid-ee5ahrvu> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "swap",
		"Size": "0.8em",
		"data-astro-cid-ee5ahrvu": true
	})} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(IdentityWords(Kicker))}` })} </span> ${Href ? renderTemplate`<a class="showcase__title"${addAttribute(Href, "href")} data-astro-cid-ee5ahrvu>${Title}</a>` : renderTemplate`<h3 class="showcase__title" data-astro-cid-ee5ahrvu>${Title}</h3>`} <p class="showcase__lead" data-astro-cid-ee5ahrvu>${unescapeHTML(Mention(Lead))}</p> </div> ${HasPair ? renderTemplate`<div class="showcase__pair" data-showcase-pair data-astro-cid-ee5ahrvu> <span class="showcase__side-label" data-astro-cid-ee5ahrvu>Before</span> <span class="showcase__side-label" data-astro-cid-ee5ahrvu>After</span> <pre class="showcase__screen" data-screen="before" data-astro-cid-ee5ahrvu>${unescapeHTML(BeforeHTML)}</pre> <span class="showcase__flow" aria-hidden="true" data-astro-cid-ee5ahrvu> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "swap",
		"data-astro-cid-ee5ahrvu": true
	})} </span> <pre class="showcase__screen" data-screen="after" data-astro-cid-ee5ahrvu>${unescapeHTML(AfterHTML)}</pre> </div>` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} ${Fact && renderTemplate`<div class="showcase__fact" data-showcase-fact data-astro-cid-ee5ahrvu> <span class="showcase__fact-label" data-astro-cid-ee5ahrvu> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "terminal",
		"Size": "0.9em",
		"data-astro-cid-ee5ahrvu": true
	})} ${FactLabel} </span> <span class="showcase__fact-text" data-astro-cid-ee5ahrvu>${Fact}</span> </div>`} ${ExampleVariants.length > 0 && ExampleVariants.map((Variant) => renderTemplate`<template${addAttribute(Variant.Manifest, "data-example")} data-astro-cid-ee5ahrvu>${templateEnter($$result)} <pre class="showcase__screen" data-screen="before" data-astro-cid-ee5ahrvu>${unescapeHTML(Variant.BeforeHTML)}</pre> <pre class="showcase__screen" data-screen="after" data-astro-cid-ee5ahrvu>${unescapeHTML(Variant.AfterHTML)}</pre> <span class="showcase__fact-text" data-fact-text data-astro-cid-ee5ahrvu> ${Variant.Fact} </span> ${templateExit($$result)}</template>`)} </article> <!-- The supports row: the "supports: <manifest>" chip buttons plus the
     click-to-expand use-case panel (the SupportsButton component). It
     renders OUTSIDE the article - underneath the whole box, as the
     article's sibling (the user's ruling: the use-case panel is not part
     of the box) - so the ledger fact stays attached to the story and the
     supports block closes the whole use-case unit from below. The
     component returns the article + this slot as siblings (a fragment);
     the article's own layout is unchanged, and the chips' right-aligned
     placement stays (the SupportsButton's own styles). --> ${renderSlot($$result, $$slots["supports"])}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Showcase.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Showcase.astro", void 0);
//#endregion
//#region Source/Component/StatsBand.astro
var $$StatsBand = createComponent(($$result, $$props, $$slots) => {
	const Cells = [
		{
			Value: String(Counts.Packages),
			Label: "PACKAGES",
			Pair: void 0
		},
		{
			Value: `${Totals.Classic}`,
			Label: "CHECKS · CLASSIC + EFFECT-TS",
			Pair: Totals.EffectTS
		},
		{
			Value: Versions.Release,
			Label: "RELEASE VERSION",
			Pair: void 0
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="section"> <div class="stats-band" aria-label="The family at a glance"> ${Cells.map((Cell) => renderTemplate`<div class="stats-band__cell"> <span class="stats-band__value"> ${Cell.Value} ${Cell.Pair !== void 0 && renderTemplate`<span class="stats-band__plus"> + ${Cell.Pair}</span>`} </span> <span class="stats-band__label">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep(Cell.Label))}` })}</span> </div>`)} </div> </section>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/StatsBand.astro", void 0);
//#endregion
//#region Source/Component/SupportsButton.astro
createAstro("https://deepseek.playform.cloud");
var $$SupportsButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SupportsButton;
	const { Manifests, Detail, Details, ShowcaseID } = Astro.props;
	const ID = `supports-${Manifests.join("-").toLowerCase()}`;
	const Slug = (Manifest) => Manifest.toLowerCase().replace(/[^a-z0-9]+/g, "-");
	const ManifestIdentity = {
		"package.json": {
			Icon: "npm",
			Kind: "npm"
		},
		"Cargo.toml": {
			Icon: "cargo",
			Kind: "cargo"
		}
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="supports"${addAttribute(ShowcaseID, "data-showcase-target")} data-astro-cid-mwh6yo7d> <p class="supports__row" data-astro-cid-mwh6yo7d> <span class="supports__label" data-astro-cid-mwh6yo7d>supports:</span> ${Manifests.map((Manifest) => {
		const Identity = ManifestIdentity[Manifest];
		return renderTemplate`<button type="button"${addAttribute(`supports__chip${Identity ? ` supports__chip--${Identity.Kind}` : ""}`, "class")} data-supports-toggle${addAttribute(Manifest, "data-manifest")} aria-expanded="false"${addAttribute(`${ID}-${Slug(Manifest)}`, "aria-controls")} data-astro-cid-mwh6yo7d> ${Identity && renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": Identity.Icon,
			"Size": "0.8em",
			"data-astro-cid-mwh6yo7d": true
		})}`} ${Manifest} </button>`;
	})} </p> ${Manifests.map((Manifest) => renderTemplate`<div class="supports__panel"${addAttribute(`${ID}-${Slug(Manifest)}`, "id")}${addAttribute(Manifest, "data-panel")} hidden data-astro-cid-mwh6yo7d> ${(Details?.[Manifest] ?? Detail ?? []).map((Line) => renderTemplate`<p class="supports__line" data-astro-cid-mwh6yo7d>${unescapeHTML(Line)}</p>`)} </div>`)} </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/SupportsButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/SupportsButton.astro", void 0);
//#endregion
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
			Name: "hook-dsh-package-governor",
			Tone: "ink",
			Role: "ROLE: GOVERNOR",
			Sentence: Families.GovernorPackage,
			Desc: "The silent package.json governor. Hooks fs/observed. Rewrites chain-governed pins to the effective registry's resolved versions. Runs the update stage as a detached, contained continuation."
		},
		{
			Name: "hook-dsh-package-pinner",
			Tone: "ink",
			Role: "ROLE: PINNER",
			Sentence: Families.PinnerPackage,
			Desc: "The silent package.json version pinner. Hooks fs/observed and deterministically rewrites EVERY ranged dependency version to its static version. Protected by a pin-policy keep-list."
		},
		{
			Name: "hook-dsh-cargo-governor",
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
	const Guardians = [{
		Name: "hook-dsh-ccr",
		Role: "ROLE: COMPRESSOR",
		Sentence: Families.CCR,
		Desc: "The tool-output compressor. Hooks the tools/post-execute waterfall. Replaces oversized results of the allow-listed target tools with a one-line type-aware preview plus a <<<CCR:hash|type|size>>> retrieval marker. The original stays retrievable through the registered ccr_retrieve tool over the sha256-24 LRU store."
	}, {
		Name: "hook-dsh-tool-coach",
		Role: "ROLE: COACH",
		Sentence: Families.Coach,
		Desc: "The terminal coach. Judges EVERY bash/pwsh call through the four-tier ladder - silent ledger lines, live-fetched coaching notes, a persistent system-prompt discipline section, an optional hard deny. Teaches the model to stop using the terminal for file content."
	}];
	const PinBefore = ["    \"@playform/build\": \"^0.3.4\","];
	const PinAfter = ["    \"@playform/build\": \"0.3.4\","];
	const GovernBefore = ["    \"@acme/chain-core\": \"0.4.1\","];
	const GovernAfter = ["    \"@acme/chain-core\": \"^0.4.5\","];
	const PinFact = "[2026-10-03T09:16:01.880Z] pinned <project>/acme/tool/package.json (2 versions)";
	const GovernFact = "[2026-10-03T09:16:01.880Z] governed <project>/acme/tool/package.json → 42";
	const NormalizeFact = "hook-dsh-normalize-dash: normalized 4 dash char(s) in one stream";
	const NormalizeBefore = ["  \"The refactor is complete — every call site updated, ranges 10–15", "   covered, and the odd U+2015 bar ― swept too.\""];
	const NormalizeAfter = ["  \"The refactor is complete - every call site updated, ranges 10-15", "   covered, and the odd U+2015 bar - swept too.\""];
	const CompressBefore = [
		"$ make -C packages/core test",
		"resolving 214 modules...",
		"compiling 96 files...",
		"[ ... 137 more lines ... ]",
		"smoke: 146 checks green",
		"make: *** Error 1"
	];
	const CompressAfter = ["[terminal:exit 0 | 142 lines | make: *** Error 1]", "<<<CCR:9d3c1f0a7b2e4d5c6a8b9c0d|terminal|5231>>>"];
	const CompressFact = "ccr: compressed bash terminal 5231 -> 9d3c1f0a7b2e4d5c6a8b9c0d";
	const Tag = (Kind, Label) => `<span class="supports__tag supports__tag--${Kind}">${Label}</span>`;
	const PinSupports = [
		`${Tag("npm", "THE GATE")} package.json - the pinner's ONLY gate. EVERY ranged dependency version in ANY agent-written package.json is rewritten to its static version: <code>&quot;@playform/build&quot;: &quot;^0.3.4&quot;</code> -&gt; <code>&quot;@playform/build&quot;: &quot;0.3.4&quot;</code>.`,
		`${Tag("npm", "THE KEEP-LIST")} Protected by the pin-policy keep-list: <code>pin-policy.json</code> keeps named ranges as authored - keep-list wins.`,
		`${Tag("npm", "THE PASS")} Pure pin pass: no ncu, no jobs, no subprocess, no cooldown. A fully pinned manifest leaves the governor's update stage nothing to do.`,
		`${Tag("npm", "THE EXCLUSIONS")} Exclusion-first: paths containing node_modules / .git / .dsh / .pnpm / .store are skipped silently (<code>skipped (excluded) &lt;path&gt;</code>).`,
		`${Tag("npm", "NOT CARGO")} Cargo.toml is NOT handled by the pinner - the family's Cargo coverage lives in <a href="/plugins/hook-dsh-cargo-governor/">hook-dsh-cargo-governor</a>.`,
		`${Tag("npm", "THE FULL STORY")} <a href="/plugins/hook-dsh-package-pinner/">the pinner page</a>.`
	];
	const GovernDetails = {
		"package.json": [
			`${Tag("npm", "THE CHAIN PASS")} canonicalizes chain-governed pins to the effective registry's resolved versions (<code>&quot;0.4.1&quot;</code> -&gt; <code>&quot;^0.4.5&quot;</code> for a dep in the nearest registry.json).`,
			`${Tag("npm", "THE UPDATE STAGE")} then runs <code>npm-check-updates</code> (programmatic by default, or the absolute ncuBin binary) as a detached, contained continuation in the jobs envelope.`,
			`${Tag("npm", "THE CORDIS-TRAP GUARD")} ncu's reject list is always policy.reject + the chain-governed dep names - a chain pin is NEVER bumped to public npm latest.`,
			`${Tag("npm", "THE SILENCE")} the transcript shows ONLY what the author wrote; the ledger shows what actually happened (<code>governed &lt;path&gt; -&gt; &lt;version&gt;</code>).`,
			`${Tag("npm", "THE FULL STORY")} <a href="/plugins/hook-dsh-package-governor/">the governor page</a>.`
		],
		"Cargo.toml": [
			`${Tag("cargo", "THE SAME ARCHITECTURE")} the Cargo.toml flavor of the silent package.json governor, in <a href="/plugins/hook-dsh-cargo-governor/">hook-dsh-cargo-governor</a> - chain pass + full-version normalization + surgical rewrite + the Rust-side update stage.`,
			`${Tag("cargo", "THE SURGICAL REWRITE")} rewrites on the raw TOML lines (NEVER a TOML stringify - comments survive), so the pair above keeps the author's comments and inline spacing byte-for-byte.`,
			`${Tag("cargo", "THE NORMALIZATION")} full-version normalization, shorthand padded: <code>serde = &quot;1.0&quot;</code> -&gt; <code>serde = &quot;1.0.0&quot;</code> (<code>=1.0</code> keeps its <code>=</code> under <code>pinStyle &quot;exact&quot;</code>; complex ranges left as-is).`,
			`${Tag("cargo", "THE UPDATE STAGE")} driven by <code>cargo upgrade --exclude</code> through the ctx.subprocess seam - the rejects and the chain deps become one --exclude flag per crate, so the CLI NEVER bumps a chain pin.`,
			`${Tag("cargo", "THE LEDGER")} <code>[2026-10-03T09:16:01.880Z] governed ~/Projects/acme/engine/Cargo.toml \u2192 42</code> - the fact line under the pair above.`
		]
	};
	const CargoBefore = [
		"[dependencies]",
		"# the engine — keep the comment alive",
		`serde = "1.0"              # shorthand: must become 1.0.0`,
		`tokio = { version = "0.4.1", features = ["full"] }  # chain-governed`
	];
	const CargoAfter = [
		"[dependencies]",
		"# the engine — keep the comment alive",
		`serde = "1.0.0"            # shorthand: must become 1.0.0`,
		`tokio = { version = "0.4.5", features = ["full"] }  # chain-governed`
	];
	const CargoFact = "[2026-10-03T09:16:01.880Z] governed ~/Projects/acme/engine/Cargo.toml → 42";
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"Title": "DSH Family @ PlayForm - Tame the model's output and govern the project's files.",
		"Description": "The DeepSeek Harness Plugin Family for PlayForm: fifteen TypeScript packages - the core, the factory service, the governance trio, the seven-member normalize family, the CCR compressor and tool-coach guardians, and the live-containers hook (shipped disabled). CLASSIC and EFFECT-TS releases.",
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main" data-astro-cid-k7pmibev> <!-- Eyebrow badges --><div class="eyebrow-row" data-astro-cid-k7pmibev> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true,
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate`
ECOSYSTEM: ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "playform",
		"Size": "0.8em",
		"data-astro-cid-k7pmibev": true
	})} @PLAYFORM
` })} ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-k7pmibev": true }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "typescript",
		"Size": "0.8em",
		"data-astro-cid-k7pmibev": true
	})} CLASSIC
` })} ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-k7pmibev": true }, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "effect",
		"Size": "0.8em",
		"data-astro-cid-k7pmibev": true
	})} EFFECT-TS
` })} </div> <!-- Hero: the two-split stage. The h1 stays above the split; the
			LEFT column carries the hero text and the install terminal (the
			site's input surface); the RIGHT column carries the live stream
			gate preview, filling its column so the hero has no blank side.
			The action buttons sit in a single full-width row UNDER the
			split, so all four share one line at desktop widths and the
			hero's bottom padding lets the engineering grid draw out
			behind/below them. --> <section class="hero hero--grid" data-astro-cid-k7pmibev> <h1 class="hero__title" data-astro-cid-k7pmibev>Tame the model's output and govern the project's files.</h1> <div class="hero__split" data-astro-cid-k7pmibev> <div class="hero__lead" data-astro-cid-k7pmibev> <p class="hero__sub" data-astro-cid-k7pmibev>
The ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "deepseek",
		"data-astro-cid-k7pmibev": true
	})} DeepSeek Harness Plugin Family for PlayForm: EVERY model's output normalized to clean ASCII characters.
					EVERY manifest pinned and governed under the author's control - fifteen TypeScript packages, smoke-arbitrated.</p> <p class="hero__sub" data-astro-cid-k7pmibev>
Model output, clean and governed.
</p> ${renderComponent($$result, "Terminal", $$Terminal, {
		"Pkg": "hook-dsh-core",
		"Rail": true,
		"data-astro-cid-k7pmibev": true
	})} </div> <!-- Live stream gate preview (the hero's right column): the gate as
					the left-to-right pipeline it is - the RAW STREAM pane on the
					left feeds the flagged tokens through the middle pipe, and the
					NORMALIZED OUTPUT pane on the right lands the clean ASCII. Both
					panes are height-bounded (fixed line budget, overflow hidden):
					every generation appends the next response inside the panes, the
					oldest lines scroll out, and the page below never shifts. The
					stream is one-pass-then-settle (see the script below): each
					sample line plays exactly once - no pass repeats, so no line
					repetition - and when the pass completes the stream settles
					(the panes keep the final content, the caret/pulse freeze, the
					status lands SETTLED); a settled pass restarts on click. --> <section class="terminal-demo" data-demo data-astro-cid-k7pmibev> ${renderComponent($$result, "TerminalTray", $$TerminalTray, {
		"Label": "LIVE STREAM GATE PREVIEW",
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate` <span class="terminal-demo__status" data-demo-status role="status" aria-live="polite" data-astro-cid-k7pmibev>
NORMALIZING<span class="dot-sep" aria-hidden="true" data-astro-cid-k7pmibev></span>0 CHARS
</span> ` })} <div class="terminal-demo__stage" data-astro-cid-k7pmibev> <div class="terminal-demo__pane" data-astro-cid-k7pmibev> <span class="terminal-demo__pane-label" data-astro-cid-k7pmibev><span class="is-orange" data-astro-cid-k7pmibev>RAW</span> STREAM</span> <div class="terminal-demo__screen rail-orange" data-demo-raw data-astro-cid-k7pmibev></div> </div> <div class="terminal-demo__flow" data-astro-cid-k7pmibev> <span class="flow-tag flow-tag--raw" data-astro-cid-k7pmibev>RAW <span class="flow-tag__arrow" data-astro-cid-k7pmibev>→</span></span> <span class="flow-line" data-astro-cid-k7pmibev> <span class="flow-line__pulse" data-astro-cid-k7pmibev></span> </span> <span class="flow-tag" data-astro-cid-k7pmibev>CLEAN</span> </div> <div class="terminal-demo__pane" data-astro-cid-k7pmibev> <span class="terminal-demo__pane-label" data-astro-cid-k7pmibev>NORMALIZED OUTPUT</span> <div class="terminal-demo__screen" data-demo-clean data-astro-cid-k7pmibev></div> </div> </div> </section> </div> <!-- The action row: all four buttons share ONE full-width line
				under the split (they leave the lead column so the desktop row
				has room for the longest label); the hero's bottom padding
				extends the engineering grid behind/below the row. --> <div class="action-row hero__actions" data-astro-cid-k7pmibev> <a class="action" href="/plugins/" data-astro-cid-k7pmibev>Explore Plugins</a> <a class="action action--secondary" href="/workbench/" data-astro-cid-k7pmibev>Open the Workbench</a> <a class="action action--secondary" href="/versions/" data-astro-cid-k7pmibev>Two Releases, One Behavior</a> <a class="action action--secondary" href="/setup/" data-astro-cid-k7pmibev>Set It Up in a Profile</a> </div> </section> <!-- The stats band: the three verified family facts from the content
			library - 14 packages, the 1008 + 1021 check totals, the 0.0.1
			release - the proof strip between the hero and the plugins. --> ${renderComponent($$result, "StatsBand", $$StatsBand, { "data-astro-cid-k7pmibev": true })} <!-- Plugins --> <section class="section" id="plugins" data-astro-cid-k7pmibev> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Plugins",
		"Meta": `${Counts.Packages} PACKAGES`,
		"data-astro-cid-k7pmibev": true
	})} <!-- Group 1: Core & Factory --> <p class="section-kicker" data-astro-cid-k7pmibev>Core &amp; Factory</p> <div class="grid grid--3" style="margin-bottom: var(--space-md)" data-astro-cid-k7pmibev> ${Core.map((Package) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Name": Package.Name,
		"Href": `/plugins/${Package.Name}/`,
		"NameTone": Package.Tone,
		"Sentence": Package.Sentence,
		"Desc": Package.Desc,
		"Muted": true,
		"data-astro-cid-k7pmibev": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"Variant": "outline",
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate`${Package.Role}` })}` })}`)} </div> <!-- Group 2: Governance --> <p class="section-kicker" data-astro-cid-k7pmibev>Governance</p> <div class="grid grid--3" style="margin-bottom: var(--space-md)" data-astro-cid-k7pmibev> ${Governance.map((Package) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Name": Package.Name,
		"Href": `/plugins/${Package.Name}/`,
		"NameTone": "primary",
		"Sentence": Package.Sentence,
		"Desc": Package.Desc,
		"Muted": true,
		"data-astro-cid-k7pmibev": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate`${Package.Role}` })}` })}`)} </div> <!-- Group 3: Guardians --> <p class="section-kicker" data-astro-cid-k7pmibev>Guardians &amp; Compression</p> <div class="grid grid--2" style="margin-bottom: var(--space-md)" data-astro-cid-k7pmibev> ${Guardians.map((Package) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Name": Package.Name,
		"Href": `/plugins/${Package.Name}/`,
		"NameTone": "primary",
		"Sentence": Package.Sentence,
		"Desc": Package.Desc,
		"Muted": true,
		"data-astro-cid-k7pmibev": true
	}, { "badge": ($$result) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {
		"slot": "badge",
		"Variant": "outline",
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate`${Package.Role}` })}` })}`)} </div> <!-- Group 4: Normalize --> <p class="section-kicker" data-astro-cid-k7pmibev>Normalize</p> <div class="grid grid--3" data-astro-cid-k7pmibev> ${Normalize.map((Package) => renderTemplate`${renderComponent($$result, "Card", $$Card, {
		"Name": Package.Name,
		"Href": `/plugins/${Package.Name}/`,
		"Sentence": Package.Sentence,
		"Desc": Package.Desc,
		"Muted": true,
		"data-astro-cid-k7pmibev": true
	}, { "badge": ($$result) => renderTemplate`<span class="flavor-cell flavor-cell--compact" data-astro-cid-k7pmibev> ${renderComponent($$result, "FlavorBadge", $$FlavorBadge, {
		"Flavor": Package.Flavor,
		"data-astro-cid-k7pmibev": true
	})} </span>` })}`)} </div> </section> <!-- Versions --> <section class="section" id="versions" data-astro-cid-k7pmibev> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Versions",
		"Meta": "DUAL ENGINE",
		"data-astro-cid-k7pmibev": true
	})} <div class="grid grid--2" data-astro-cid-k7pmibev> ${renderComponent($$result, "Card", $$Card, {
		"Variant": "white",
		"data-astro-cid-k7pmibev": true
	}, {
		"default": ($$result) => renderTemplate`  <p class="version-card__body" data-astro-cid-k7pmibev>
The fifteen contracts in plain TypeScript - classes, Maps and plain
						functions, zero runtime framework dependencies.</p> <p class="version-card__body" data-astro-cid-k7pmibev>
The straightforward integration release.
</p> <div class="version-card__facts" data-astro-cid-k7pmibev> ${renderComponent($$result, "Badge", $$Badge, {
			"Variant": "primary",
			"Dot": true,
			"data-astro-cid-k7pmibev": true
		}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "typescript",
			"Size": "0.8em",
			"data-astro-cid-k7pmibev": true
		})} PLAIN TYPESCRIPT
` })} ${renderComponent($$result, "Badge", $$Badge, { "data-astro-cid-k7pmibev": true }, { "default": ($$result) => renderTemplate`ZERO FRAMEWORK DEPS` })} </div> `,
		"head": ($$result) => renderTemplate`<div class="version-card__head" data-astro-cid-k7pmibev> <span class="version-card__title" data-astro-cid-k7pmibev>CLASSIC RELEASE</span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "typescript",
			"Size": "1.333em",
			"ClassName": "version-card__icon",
			"data-astro-cid-k7pmibev": true
		})} </div>`
	})} ${renderComponent($$result, "Card", $$Card, {
		"Variant": "primary",
		"data-astro-cid-k7pmibev": true
	}, {
		"default": ($$result) => renderTemplate`  <p class="version-card__body" data-astro-cid-k7pmibev>
The same fifteen contracts re-expressed on Effect-TS services and layers -
						same behavior, same smokes, different runtime plumbing.
</p> <div class="version-card__facts" data-astro-cid-k7pmibev> ${renderComponent($$result, "Badge", $$Badge, {
			"Variant": "active",
			"data-astro-cid-k7pmibev": true
		}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "effect",
			"Size": "0.8em",
			"data-astro-cid-k7pmibev": true
		})} EFFECT-TS SERVICES &amp; LAYERS` })} ${renderComponent($$result, "Badge", $$Badge, {
			"Variant": "outline",
			"data-astro-cid-k7pmibev": true
		}, { "default": ($$result) => renderTemplate`SAME SMOKES` })} </div> `,
		"head": ($$result) => renderTemplate`<div class="version-card__head" data-astro-cid-k7pmibev> <span class="version-card__title" data-astro-cid-k7pmibev>EFFECT-TS RELEASE</span> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
			"Name": "effect",
			"Size": "1.333em",
			"ClassName": "version-card__icon",
			"data-astro-cid-k7pmibev": true
		})} </div>`
	})} </div> </section> <!-- The use cases: what the family accomplishes - the pin, the govern,
			the normalize and the compress before/after stories, each a
			full-width wide card (one card per row, spanning the section's
			width - the squished three-column grid replaced by the wide stack;
			the normalize card keeps its Compare slider full-width for the
			drag). The pairs are the real example content from the plugin
			pages; the fact lines are the real ledger excerpts; the totals
			strip is the content library's pair. The two governance cards
			close with the supports-buttons - the manifests each module
			actually handles, click-to-expand (the site's class-toggle
			pattern - there is no <details> anywhere on the site) - rendered
			OUTSIDE the article, underneath the whole box (the supports
			block is the article's sibling, not part of it). --> <section class="section" id="use-cases" data-astro-cid-k7pmibev> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The use cases",
		"Meta": "PIN · GOVERN · NORMALIZE · COMPRESS",
		"data-astro-cid-k7pmibev": true
	})} <div class="use-cases" data-astro-cid-k7pmibev> ${renderComponent($$result, "Showcase", $$Showcase, {
		"Wide": true,
		"ID": "pin",
		"Kicker": "THE PIN",
		"Title": "Pinned manifests, deterministically",
		"Lead": "The pinner rewrites EVERY ranged dependency version to its static version - protected by the pin-policy keep-list.",
		"Href": "/plugins/hook-dsh-package-pinner/",
		"Before": PinBefore,
		"After": PinAfter,
		"Fact": PinFact,
		"data-astro-cid-k7pmibev": true
	}, { "supports": ($$result) => renderTemplate`${renderComponent($$result, "SupportsButton", $$SupportsButton, {
		"Manifests": ["package.json"],
		"Detail": PinSupports,
		"slot": "supports",
		"data-astro-cid-k7pmibev": true
	})}` })} ${renderComponent($$result, "Showcase", $$Showcase, {
		"Wide": true,
		"ID": "govern",
		"Kicker": "THE GOVERN",
		"Title": "Governed pins, silently",
		"Lead": "The governor canonicalizes chain-governed pins to the effective registry's resolved versions - then runs the update stage detached.",
		"Href": "/plugins/hook-dsh-package-governor/",
		"Before": GovernBefore,
		"After": GovernAfter,
		"Fact": GovernFact,
		"Examples": {
			"package.json": {
				Before: GovernBefore,
				After: GovernAfter,
				Fact: GovernFact
			},
			"Cargo.toml": {
				Before: CargoBefore,
				After: CargoAfter,
				Fact: CargoFact
			}
		},
		"data-astro-cid-k7pmibev": true
	}, { "supports": ($$result) => renderTemplate`${renderComponent($$result, "SupportsButton", $$SupportsButton, {
		"Manifests": ["package.json", "Cargo.toml"],
		"Details": GovernDetails,
		"ShowcaseId": "govern",
		"slot": "supports",
		"data-astro-cid-k7pmibev": true
	})}` })} ${renderComponent($$result, "Showcase", $$Showcase, {
		"Wide": true,
		"Kicker": "THE NORMALIZE",
		"Title": "Clean output as it is born",
		"Lead": "The stream flavors rewrite the model's output at the llm/stream waterfall - LIVE in the UI, durable in the transcript. Drag the handle.",
		"Href": "/plugins/hook-dsh-normalize-dash/",
		"Fact": NormalizeFact,
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Compare", $$Compare, {
		"ID": "index-normalize",
		"Flavor": "dash",
		"Raw": NormalizeBefore,
		"Clean": NormalizeAfter,
		"Start": 50,
		"data-astro-cid-k7pmibev": true
	})} ` })} ${renderComponent($$result, "Showcase", $$Showcase, {
		"Wide": true,
		"Kicker": "THE COMPRESS",
		"Title": "Big tool output, one line and a marker",
		"Lead": "The ccr hook replaces an oversized tool result with a one-line type-aware preview plus the retrieval marker. The original stays retrievable through the registered ccr_retrieve tool.",
		"Href": "/plugins/hook-dsh-ccr/",
		"Before": CompressBefore,
		"After": CompressAfter,
		"Fact": CompressFact,
		"data-astro-cid-k7pmibev": true
	})} </div> <p class="page-hero__sub" style="margin-top: var(--space-md)" data-astro-cid-k7pmibev>
The six stream flavors plus normalize-file now also expose the volatile <code data-astro-cid-k7pmibev>scopes</code> surface (conversation / reasoning / toolInput / toolResults / files / batch, with <code data-astro-cid-k7pmibev>toolResultsExempt</code>) with LIVE <code data-astro-cid-k7pmibev>loader/volatile-update</code> toggles.
				The overpass arms (<code data-astro-cid-k7pmibev>tools/post-execute</code> tool results + <code data-astro-cid-k7pmibev>agent/pre-step</code> step batch) are reachable through the <code data-astro-cid-k7pmibev>normalize-overpass</code> command.
</p> <p class="section-kicker" style="margin-top: var(--space-md)" data-astro-cid-k7pmibev> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep(`${Totals.Meta()} · the ledger strings, byte-identical`))}` })} </p> </section> <!-- The coachy tool-coach section: the same technical-minimalist
			system, a DIFFERENT palette and structure. The palette reuses the
			two sanctioned non-blue tokens already in the system (the section
			root aliases them locally - no new hex); the structure is a
			two-column coaching board instead of the header-then-grid shape
			every other section uses: a sticky tier-ladder rail on the left,
			the interactive judge demo on the right. All copy comes from the
			hook-dsh-tool-coach README/SCHEME (the ledger strings byte-exact). --> <section class="section coach" id="coach" data-astro-cid-k7pmibev> <header class="coach__header" data-astro-cid-k7pmibev> <p class="coach__kicker" data-astro-cid-k7pmibev>THE COACH</p> <h2 class="coach__title" data-astro-cid-k7pmibev>A guardian that coaches the model, tier by tier.</h2> <p class="coach__lead" data-astro-cid-k7pmibev>
The one-sentence rule the coach enforces: <strong data-astro-cid-k7pmibev>the terminal runs
					COMMANDS (builds, tests, git, package managers); the tools handle
					CONTENT.</strong> </p> <p class="coach__lead" data-astro-cid-k7pmibev>
Terminal file edits are invisible to the plugin system.
					The <code data-astro-cid-k7pmibev>fs/observed</code> chain (the governor's, the pinner's and the
					normalize plugins' trigger) fires ONLY on tool-layer writes.
					A <code data-astro-cid-k7pmibev>sed -i</code> edit bypasses ALL of them.
</p> <p class="coach__lead" data-astro-cid-k7pmibev>
The coach goes where that regression flows: the terminal tool calls.
</p> </header> <div class="coach__board" data-astro-cid-k7pmibev> <!-- The tier ladder rail: four steps, click-to-focus, one active
					at a time. The selection is the script's machine's state (no
					static active class here - the initial render applies Focus 0
					deterministically, so the markup never carries a stale
					selection if the script is delayed). --><nav class="coach__ladder" aria-label="The coaching ladder" data-astro-cid-k7pmibev> <button type="button" class="coach__tier" data-coach-tier="0" data-astro-cid-k7pmibev> <span class="coach__tier-n" data-astro-cid-k7pmibev>TIER 0</span> <span class="coach__tier-name" data-astro-cid-k7pmibev>LEDGER</span> <span class="coach__tier-brief" data-astro-cid-k7pmibev>every offense, silent</span> </button> <button type="button" class="coach__tier" data-coach-tier="1" aria-pressed="false" data-astro-cid-k7pmibev> <span class="coach__tier-n" data-astro-cid-k7pmibev>TIER 1</span> <span class="coach__tier-name" data-astro-cid-k7pmibev>NOTE</span> <span class="coach__tier-brief" data-astro-cid-k7pmibev>threshold 3 &middot; window 8 &middot; cooldown 10</span> </button> <button type="button" class="coach__tier" data-coach-tier="2" aria-pressed="false" data-astro-cid-k7pmibev> <span class="coach__tier-n" data-astro-cid-k7pmibev>TIER 2</span> <span class="coach__tier-name" data-astro-cid-k7pmibev>SECTION</span> <span class="coach__tier-brief" data-astro-cid-k7pmibev>escalate 6 &middot; clean window 12</span> </button> <button type="button" class="coach__tier" data-coach-tier="3" aria-pressed="false" data-astro-cid-k7pmibev> <span class="coach__tier-n" data-astro-cid-k7pmibev>TIER 3</span> <span class="coach__tier-name" data-astro-cid-k7pmibev>DENY</span> <span class="coach__tier-brief" data-astro-cid-k7pmibev>enforce off by default</span> </button> </nav> <!-- The judge demo stage: click a bash call, the coach judges it. --> <div class="coach__stage" data-astro-cid-k7pmibev> <p class="coach__focus" data-coach-focus data-astro-cid-k7pmibev></p> <div class="coach__calls" data-astro-cid-k7pmibev> <button type="button" class="coach__call" data-coach-call data-call-kind="clean" aria-label="Judge: pnpm test" data-astro-cid-k7pmibev><code data-astro-cid-k7pmibev>$ pnpm test</code></button> <button type="button" class="coach__call" data-coach-call data-call-kind="read" data-call-pattern="cat" aria-label="Judge: cat config.json" data-astro-cid-k7pmibev><code data-astro-cid-k7pmibev>$ cat config.json</code></button> <button type="button" class="coach__call" data-coach-call data-call-kind="write" data-call-pattern="--in-place" aria-label="Judge: sed -i 's/a/b/' app.ts" data-astro-cid-k7pmibev><code data-astro-cid-k7pmibev>$ sed -i 's/a/b/' app.ts</code></button> <button type="button" class="coach__call" data-coach-call data-call-kind="write" data-call-pattern="&lt;catch-all&gt;" aria-label="Judge: echo x &gt; notes.md" data-astro-cid-k7pmibev><code data-astro-cid-k7pmibev>$ echo x &gt; notes.md</code></button> <button type="button" class="coach__call" data-coach-call data-call-kind="exempt" data-call-pattern="git diff" aria-label="Judge: git diff &gt; patch.txt" data-astro-cid-k7pmibev><code data-astro-cid-k7pmibev>$ git diff &gt; patch.txt</code></button> </div> <div class="coach__tray rail-orange" data-astro-cid-k7pmibev> ${renderComponent($$result, "TerminalTray", $$TerminalTray, {
		"Label": "THE COACHING LEDGER",
		"data-astro-cid-k7pmibev": true
	}, { "default": ($$result) => renderTemplate` <span class="coach__status" data-coach-status role="status" aria-live="polite" data-astro-cid-k7pmibev>
0 STRIKES
</span> ` })} <div class="coach__screen" data-coach-screen data-astro-cid-k7pmibev></div> </div> <button type="button" class="coach__enforce" data-coach-enforce aria-pressed="false" data-astro-cid-k7pmibev>TIER 3 (ENFORCE): OFF</button> </div> </div> <div class="coach__notes" data-astro-cid-k7pmibev> <p class="coach__note" data-astro-cid-k7pmibev> <strong data-astro-cid-k7pmibev>Detection is deliberately adversarial.</strong> </p> <p class="coach__note" data-astro-cid-k7pmibev>
The pattern table is ONE input, not the authority.
					The command is normalized first (heredoc bodies stripped, subshells and
					variables wrapped, quote layers removed).
					Then come the pattern rows, an intent-marker scan, a craft library for the
					obfuscated variants, and a catch-all.
					ANY write-intent marker on a non-/dev/null path lands as write, so novel
					zero-day forms still count.
</p> <p class="coach__note" data-astro-cid-k7pmibev>
Exemptions are checked per pipeline after normalization.
					An exempt head dominates its pipe (<code data-astro-cid-k7pmibev>git diff &gt; patch.txt</code> is exempt).
					A bare <code data-astro-cid-k7pmibev>echo x &gt; tracked.md</code> is NOT.
</p> <p class="coach__note" data-astro-cid-k7pmibev> <strong data-astro-cid-k7pmibev>EVERY note names the correct tool with its LIVE registry data,</strong>
fetched through <code data-astro-cid-k7pmibev>ctx.tools.schemas()</code> (the same way the model
					itself is given tools).
					The note carries the tool name, the first sentence of its description
					(&le; 120 chars) and the primary parameter key.
</p> <p class="coach__note" data-astro-cid-k7pmibev>
ANY fetch failure degrades to the static table and logs
<code data-astro-cid-k7pmibev>schema fetch failed -&gt; static fallback</code>.
					A note NEVER fails a waterfall.
</p> </div> <p class="coach__cta-row" data-astro-cid-k7pmibev> <a class="coach__cta" href="/plugins/hook-dsh-tool-coach/" data-astro-cid-k7pmibev>MEET THE COACH</a> <a class="coach__cta coach__cta--secondary" href="/plugins/hook-dsh-ccr/" data-astro-cid-k7pmibev>ITS SIBLING ON THE SAME WATERFALL: THE CCR HOOK</a> </p> </section> <!-- Model independence --> <section class="section" data-astro-cid-k7pmibev> <div class="independence" data-astro-cid-k7pmibev> <div class="independence__label" data-astro-cid-k7pmibev> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-k7pmibev> <rect x="5" y="5" width="14" height="14" rx="1" data-astro-cid-k7pmibev></rect> <path d="M9 2 v3 M15 2 v3 M9 19 v3 M15 19 v3 M2 9 h3 M2 15 h3 M19 9 h3 M19 15 h3" data-astro-cid-k7pmibev></path> <rect x="9" y="9" width="6" height="6" data-astro-cid-k7pmibev></rect> </svg>
Model Independence
</div> <p class="independence__title" data-astro-cid-k7pmibev>Built to serve any LLM.</p> <p class="independence__body" data-astro-cid-k7pmibev>
Extensively battle-tested on ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "deepseek",
		"data-astro-cid-k7pmibev": true
	})}${" "} <strong data-astro-cid-k7pmibev>DeepSeek V4 Flash</strong> &amp;
${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "zhipu",
		"data-astro-cid-k7pmibev": true
	})}${" "} <strong data-astro-cid-k7pmibev>GLM 5.3 Flash</strong> token output streams.</p> <p class="independence__body" data-astro-cid-k7pmibev>
See the
<a href="/models/" data-astro-cid-k7pmibev>models page</a>.
</p> </div> </section> <!-- Summary notation --> <section class="section" data-astro-cid-k7pmibev> <div class="notation" data-astro-cid-k7pmibev> <p data-astro-cid-k7pmibev>DSH Family @ PlayForm: the complete deterministic stream governor matrix.</p> <p data-astro-cid-k7pmibev>
the hook-dsh-* hooks: zero runtime overhead normalizers with zero unicode drift.
</p> <p data-astro-cid-k7pmibev>the fifteen packages: pinned under atomic version gates.</p> </div> </section> </main> ` })}${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:Source/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
