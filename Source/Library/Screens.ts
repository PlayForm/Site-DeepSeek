// Screens.ts - the registry screens' data (Design 03 section 2, 02 section 3).
//
// The modules are the fifteen release packages' fourteen hooks: the
// machinery (core, factory), the three governors, the six stream
// normalizers plus the file tool, and the two services (ccr, tool-coach).
// The codes are the instrument's plate marks; the sentences, the counts and
// the install commands come from the content library, so a release bump or
// a smoke change re-renders every plate.
//
// The three publish-pending packages (ccr, tool-coach, live-containers) are
// NOT on the registry: their plates carry the amber PENDING lamp and no
// install promise. The check counts stay, because the smokes still run.
//
// BUILD-TIME ONLY: imported from the .astro frontmatter, which reaches
// Content.ts and therefore Live.ts (node:fs).

import { Counts, Families, Versions } from "./Content.ts";

/** One mounted module plate. */
export interface Module {
	/** The plate's stamped code (MAC-01, GOV-01, NRM-04, SVC-01). */
	Code: string;
	/** The package name without the @playform/ scope. */
	Name: string;
	/** The plate's role line (ROLE: GOVERNOR). */
	Role: string;
	/** The @-sentence identity (Hook @ DSH @ Core). */
	Sentence: string;
	/** The tray's evidence paragraph (the Linkify source). */
	Desc: string;
	/** The filter tags: machinery, govern, normalize, service. */
	Tags: string;
	/** The CLASSIC smoke count (the footer's reading). */
	Checks: number;
	/** The npm install command, or "" when the package is publish-pending. */
	Install: string;
	/** True for the three packages that are not on the registry yet. */
	Pending: boolean;
}

/** One bay group on the plate. */
export interface Bay {
	/** The bay's header rail title (THE MACHINERY). */
	Title: string;
	/** The header rail's mono meta (2 MODULES). */
	Meta: string;
	/** The header marker's tone: primary, orange, or grey. */
	Tone: "primary" | "orange" | "grey";
	/** The mounted plates, in reading order. */
	Modules: Module[];
}

/** One page-sized cabinet's data. */
export interface Screen {
	/** The cabinet's stamped code (CAB-01). */
	Code: string;
	/** The page title the lintel carries (Plugins). */
	Title: string;
	/** The screen's own title on the cover (THE HOOKS). */
	ScreenTitle: string;
	/** The cover's one-sentence claim. */
	Claim: string;
	/** The bay groups in dependency order. */
	Bays: Bay[];
	/** The count the cover and the M-01 meter carry. */
	ModuleCount: number;
	/** The planned preview (the display screen only), or null. */
	Planned: { Title: string; Claim: string } | null;
}

/** The install command for a published package at the live release. */
function Install(Name: string): string {
	return `npm install @playform/${Name}@${Versions.Release}`;
}

/** The publish-pending set: the registry returns 404 for these three. */
const PendingNames = new Set([
	"hook-dsh-ccr",
	"hook-dsh-tool-coach",
	"hook-dsh-live-containers",
]);

/** Build one module from its plate marks and its content-library figures. */
function Mount(
	Code: string,
	Name: string,
	Role: string,
	Sentence: string,
	Desc: string,
	Tags: string,
	Checks: number,
): Module {
	return {
		Code,
		Name,
		Role,
		Sentence,
		Desc,
		Tags,
		Checks,
		Install: PendingNames.has(Name) ? "" : Install(Name),
		Pending: PendingNames.has(Name),
	};
}

/** The machinery: every hook depends on it, so it opens the field. */
const Machinery: Bay = {
	Title: "THE MACHINERY",
	Meta: "2 MODULES",
	Tone: "primary",
	Modules: [
		Mount(
			"MAC-01",
			"hook-dsh-core",
			"ROLE: CORE",
			Families.Core,
			"The pure commonalities of the family (dependency-free in CLASSIC; effect-backed in EFFECT-TS): the section lists, the exclusion segments, the suppression composer, the policy loader, the refusal guard and the normalize/Stream machinery.",
			"machinery",
			Counts.Core.Classic,
		),
		Mount(
			"MAC-02",
			"plugin-dsh-factory",
			"ROLE: FACTORY",
			Families.Factory,
			"The family's first service: the ledger, the exclusion match, the discovery, the keep-list union, the gate set, the version-guarded fenced write, the refresh, the detached contained continuation, the State builder, the wiring, the effects, the schema factory and the probe-once seam.",
			"machinery",
			Counts.Factory.Classic,
		),
	],
};

/** The three manifest governors. */
const Governors: Bay = {
	Title: "THE GOVERNORS",
	Meta: "3 MODULES",
	Tone: "primary",
	Modules: [
		Mount(
			"GOV-01",
			"hook-dsh-package-governor",
			"ROLE: GOVERNOR",
			Families.GovernorPackage,
			"The silent package.json governor. Hooks [fs/observed](Harness:packages/fs/fs/src/index.ts). Rewrites chain-governed pins to the effective registry's resolved versions. Runs the update stage as a detached, contained continuation.",
			"govern",
			Counts.Governor.Classic,
		),
		Mount(
			"GOV-02",
			"hook-dsh-package-pinner",
			"ROLE: PINNER",
			Families.PinnerPackage,
			"The silent package.json version pinner. Hooks [fs/observed](Harness:packages/fs/fs/src/index.ts) and deterministically rewrites EVERY ranged dependency version to its static version. Protected by a [pin-policy keep-list](Ours:Classic/packages/hook-dsh-package-pinner/Source/Function/Transform.ts).",
			"govern",
			Counts.Pinner.Classic,
		),
		Mount(
			"GOV-03",
			"hook-dsh-cargo-governor",
			"ROLE: GOVERNOR",
			Families.GovernorCargo,
			"The Cargo.toml governor: the Rust-sided flavor of the package governor - surgical chain-pin rewrites on the raw TOML lines and cargo upgrade driven through the [subprocess seam](Harness:packages/subprocess/subprocess).",
			"govern",
			Counts.Cargo.Classic,
		),
	],
};

/** The six stream flavors plus the file tool. */
const Flow: Bay = {
	Title: "THE FLOW",
	Meta: "7 MODULES",
	Tone: "orange",
	Modules: [
		Mount(
			"NRM-01",
			"hook-dsh-normalize-dash",
			"ROLE: STREAM FLAVOR",
			Families.Dash,
			"The dash flavor: normalizes the unicode dash family to ASCII hyphen-minus in model output streams, mirroring the core's dash class at the injection point a file hook lacks.",
			"normalize",
			Counts.Dash.Classic,
		),
		Mount(
			"NRM-02",
			"hook-dsh-normalize-quotes",
			"ROLE: STREAM FLAVOR",
			Families.Quotes,
			"The quotes flavor: maps the eight curly quote code points to their ASCII straight counterparts in model output streams.",
			"normalize",
			Counts.Quotes.Classic,
		),
		Mount(
			"NRM-03",
			"hook-dsh-normalize-ellipsis",
			"ROLE: STREAM FLAVOR",
			Families.Ellipsis,
			"The ellipsis flavor: replaces the horizontal ellipsis (U+2026) with the plain ASCII three-dot sequence in model output streams.",
			"normalize",
			Counts.Ellipsis.Classic,
		),
		Mount(
			"NRM-04",
			"hook-dsh-normalize-spaces",
			"ROLE: STREAM FLAVOR",
			Families.Spaces,
			"The spaces flavor: normalizes the unicode space family (Zs minus the ASCII space) to the plain space in model output streams.",
			"normalize",
			Counts.Spaces.Classic,
		),
		Mount(
			"NRM-05",
			"hook-dsh-normalize-invisible",
			"ROLE: STREAM FLAVOR",
			Families.Invisible,
			"The invisible flavor: removes the zero-width/invisible character family (soft hyphen, zero-width spaces and joiners, bidi controls, BOM) from model output streams.",
			"normalize",
			Counts.Invisible.Classic,
		),
		Mount(
			"NRM-06",
			"hook-dsh-normalize-fullwidth",
			"ROLE: STREAM FLAVOR",
			Families.Fullwidth,
			"The fullwidth flavor: maps the entire FULLWIDTH FORMS range (U+FF01-U+FF5E) to its ASCII half-width counterparts in model output streams.",
			"normalize",
			Counts.Fullwidth.Classic,
		),
		Mount(
			"NRM-07",
			"hook-dsh-normalize-file",
			"ROLE: FILE TOOL",
			Families.File,
			"The file-content normalizer: the normalize-file tool - the read, count, write pipeline applying all six transforms to a file already on disk, writing ONLY when something changed.",
			"normalize",
			Counts.File.Classic,
		),
	],
};

/** The two tool-layer services. */
const Services: Bay = {
	Title: "THE SERVICES",
	Meta: "2 MODULES",
	Tone: "grey",
	Modules: [
		Mount(
			"SVC-01",
			"hook-dsh-ccr",
			"ROLE: COMPRESSOR",
			Families.CCR,
			"The tool-output compressor. Hooks the [tools/post-execute](Harness:docs/subsystems/tools.md) waterfall. Replaces oversized results of the allow-listed target tools with a one-line type-aware preview plus a `<<<CCR:hash|type|size>>>` retrieval marker. Gated on thresholdBytes x the per-type multipliers, with auto-expand returning small results FULL. The original stays retrievable through the registered ccr_retrieve tool over the sha256-24 LRU store.",
			"service",
			Counts.CCR.Classic,
		),
		Mount(
			"SVC-02",
			"hook-dsh-tool-coach",
			"ROLE: COACH",
			Families.Coach,
			"The terminal coach. Judges EVERY bash/pwsh call through a four-tier ladder - tier-0 ledger lines for every offense, tier-1 live-fetched coaching notes at the strike threshold, tier-2 a persistent system-prompt discipline section, tier-3 (opt-in) tools/pre-execute denies. Teaches the model to stop using the terminal for file content.",
			"service",
			Counts.Coach.Classic,
		),
	],
};

/** Screen 01 - THE HOOKS: the fourteen hooks in dependency order. */
export const HooksScreen: Screen = {
	Code: "CAB-01",
	Title: "Plugins",
	ScreenTitle: "THE HOOKS",
	Claim:
		"Fourteen modules: the machinery, the three governors, the seven normalizers, and the two services.",
	Bays: [Machinery, Governors, Flow, Services],
	ModuleCount: 14,
	Planned: null,
};

/** Screen 02 - THE DISPLAY: the live-containers hook and the planned panel. */
export const DisplayScreen: Screen = {
	Code: "CAB-02",
	Title: "The Display",
	ScreenTitle: "THE DISPLAY",
	Claim:
		"One shipped hook: the live containers that keep a conversation block current at every request. The Harness panel beside it is planned, not shipped.",
	Bays: [
		{
			Title: "THE CONTAINERS",
			Meta: "1 MODULE",
			Tone: "primary",
			Modules: [
				Mount(
					"DSP-01",
					"hook-dsh-live-containers",
					"ROLE: LIVE PROMPT",
					Families.LiveContainers,
					"The live-containers hook. Keeps dynamic, modifiable conversation blocks in the system prompt. Each enabled block a labeled stanza recomputed at EVERY request (the canonical example: a time block always holding the current time at ask-time). Appended as ONE [system-prompt/assemble](Harness:docs/event-producer-consumer.md) section with interpolate: false. Each block inside a fixed LIVE CONTAINER frame so the model cannot mistake it for harness state. Ships DISABLED - the IDLE-forever posture.",
					"service",
					0,
				),
			],
		},
		{
			Title: "THE PANEL",
			Meta: "PLANNED",
			Tone: "grey",
			Modules: [],
		},
	],
	ModuleCount: 1,
	Planned: {
		Title: "THE HARNESS PANEL",
		Claim:
			"Planned, not shipped. The preview applies the cabinet's instrument language to the family's future UI; it is not a product screenshot.",
	},
};

/** The sequence's data: screen 03 exists only when a third category does. */
export const Screens: Screen[] = [HooksScreen, DisplayScreen];
