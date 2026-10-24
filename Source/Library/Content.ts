// Content.ts - the family's single source of truth for EVERY dynamic figure
// the site renders.
// The figures cover the smoke counts and totals, the package/suite/twin
// census, the method ledger, the release versions, the completion program's
// new surfaces (the trace bus, the pack layer and its learner, the workspace
// tools, the policy block, the storage domains, the client adapters, the
// suggesters' gate and learning layer), the profile rows, the migration facts
// and the SCHEME references.
//
// The figures are LIVE.
// They are read from the monorepo at build time by Library/Live.ts:
//   - the per-folder smoke READMEs - the runner's arbiter (Maintain/
//     Run-Smokes.mjs): every Source/Test/<folder>/README.md declares its
//     "## Expected count" -> "<N> PASS.", and a tree's checks are the sum of
//     those counts (Classic 3,454 + EffectTS 3,158 = 6,612 across 511
//     folders). The folder sums are the figure; the smoke READMEs' manifest
//     lines are the secondary source and may lag them by a check (the
//     factory suite: the manifest says 53/42, the folders say 54/43).
//   - the package directories and their package.json files (101 packages:
//     53 Classic + 48 EffectTS; the release versions; the effect pin; the
//     47 ETS twins).
//   - the factory's SCHEME §2 method sections (19 methods: the 18 method
//     sections + the shared §2.7; §2.19 is the module-level policy block,
//     not a method).
//   - the completion's own sources: the trace vocabulary (lib-dsh-trace),
//     the built-in pack (lib-dsh-pack), the learner's family table
//     (hook-dsh-convention-suggester), the workspace tools
//     (plugin-dsh-workspace), the factory's policy defaults and the 25
//     Policy-Defaults folders, the named storage domains, the client panel's
//     13 adapter manifests and the suggesters' gate/learning folders.
//   - the delivery census: PLUGIN-FAMILY.md's 2026-10-22 sentence (36 new
//     Classic plugins, 30 ETS twins, the two completion libraries) and the
//     Completion-Spec's re-spec table (the eleven approved re-specs).
//   - the direct dependents: each package.json's runtime dependency names -
//     the core's 46 Classic + 12 EffectTS dependents and the factory's 45
//     Classic dependents, with the seven non-consumers.
//   - the harness home's desktop profile - the ONE source outside the
//     monorepo: 49 @playform patch rows = 48 enabled + the factory (no
//     `enabled` field), and the profile package.json's installed/enabled
//     split (51 installed, 48 bundle rows, 3 installed-not-enabled). A
//     machine without the profile serves the documented fallbacks.
// There is NO runtime fetching, so the built pages ALWAYS carry the repo's
// real values.
// When a live source is missing or unparseable, the documented FALLBACK below
// is served instead, so the build NEVER fails on a moved source.
//
// The fallback constants are the previously verified values (2026-10-24).
// They are kept in the same shapes the Drift-Guard (Scripts/Drift-Guard.mjs)
// extracts and checks against the repo.
// A stale fallback is caught by `pnpm run Drift`.
//
// Values with NO live source (documented fallbacks, verified against the
// records):
//   - NewLibraries: 2 - the completion's two libraries (lib-dsh-trace and
//     lib-dsh-pack); the count is historical, not derivable.
//   - Pack.Layers: 3 - the pack's resolution layers (the user layer, the repo
//     layer, the cycle-guarded extends chain), per lib-dsh-pack's SCHEME.
//   - Migration: 76 records, compatibleVersions [1] - the v1-record migration
//     (Documentation/Handoff/Packages/Package-13.md).
//   - History: the five original boilerplate-era bundles, the 231 checks, the
//     15-method factory at the consolidation and the port-era deltas (the
//     Package 1 record). The live twins have since diverged (the ETS factory
//     carries 43 checks against Classic's 54; the ETS parity wave is open),
//     so the record's deltas are NOT derived from the current pairs.
//   - Decisions: the twelve decisions plus the abort-signal fix.
//   - Sprite: the 11 shields-style symbols in /assets/badges.svg.
//   - Steps: the four setup steps.
//   - Copyright: the 2025 footer line.
//   - Roles: the two governance roles.
//   - Groups.Core / Groups.Governance / Groups.Guardians / Groups.Live: the
//     plugins-page section groupings (Groups.Normalize is LIVE).
//
// The formatters own the pluralization and the phrase shapes ("N checks in
// CLASSIC, M in EFFECT-TS", the totals pair, the migration sentence, the
// FAMILY POSITION metas).
// NO two pages can render the same fact differently.
// This module is imported from the .astro frontmatter ONLY (it reaches the
// filesystem through Live.ts at build time) - NEVER from a <script> block.

import { Live } from "./Live.ts";

/** A smoke-count pair: the CLASSIC checks against the EFFECT-TS checks. */
export interface Pair {
	/** The CLASSIC suite's check count. */
	Classic: number;
	/** The EFFECT-TS suite's check count (parity or the additive coverage). */
	EffectTS: number;
}

/** The fallback constants: served ONLY when a live source is unavailable. */
const Fallback = {
	Counts: {
		Core: { Classic: 15, EffectTS: 14 },
		Factory: { Classic: 54, EffectTS: 43 },
		Governor: { Classic: 79, EffectTS: 82 },
		Pinner: { Classic: 32, EffectTS: 32 },
		Cargo: { Classic: 62, EffectTS: 62 },
		Dash: { Classic: 184, EffectTS: 184 },
		Quotes: { Classic: 104, EffectTS: 104 },
		Ellipsis: { Classic: 104, EffectTS: 104 },
		Spaces: { Classic: 104, EffectTS: 104 },
		Invisible: { Classic: 104, EffectTS: 104 },
		Fullwidth: { Classic: 104, EffectTS: 104 },
		File: { Classic: 112, EffectTS: 112 },
		CCR: { Classic: 147, EffectTS: 147 },
		Coach: { Classic: 129, EffectTS: 129 },
	},
	Totals: {
		/** The CLASSIC total: 3454 checks across the 269 CLASSIC folders. */
		Classic: 3454,
		/** The EFFECT-TS total: 3158 checks across the 242 EFFECT-TS folders. */
		EffectTS: 3158,
	},
	Versions: {
		/** The release version of the 100 packages at the mode (the rest). */
		Release: "0.1.0",
		/** The effect dependency pin the base and eleven packages carry. */
		Effect: "4.0.5",
		/** The panel family's outlier version (the one package at 0.2.0). */
		PanelFamily: "0.2.0",
		/** The packages that carry the effect pin (the rest ride ets-base-dsh). */
		EffectPinned: 12,
	},
	Packages: 101,
	PackagesClassic: 53,
	PackagesEffectTS: 48,
	Suites: 511,
	SuitesClassic: 269,
	SuitesEffectTS: 242,
	Twins: 47,
	Libraries: 4,
	NewLibraries: 2,
	Normalizers: 7,
	StreamFlavors: 6,
	Roles: 2,
	Methods: 19,
	Trace: { Events: 3, EnvelopeFields: 5, Ring: 256, Service: 5, Adapters: 3, Checks: 10 },
	Pack: { Families: 31, Domains: 6, Layers: 3, Folders: 4, Checks: 30 },
	Learner: { Modules: 10, Families: 9, Markers: 3 },
	Workspace: { Tools: 5, Packages: 17 },
	Policy: { Actions: 8, Auto: 5, Approve: 3, Packages: 25 },
	Storage: { Domains: 15 },
	Client: { Packages: 3, Adapters: 13 },
	Suggesters: { Count: 7, PackDriven: 6, Gate: 6, Learning: 2 },
	Profile: { Rows: 49, Enabled: 48, Factory: 1 },
	/** The profile package.json's installed/enabled split: 51 installed, 48 bundle rows, 3 not enabled. */
	ProfileInstalled: { Dependencies: 51, Bundles: 48, Inactive: 3, Names: ["hook-dsh-ccr", "lib-dsh-core", "lib-dsh-workspace-live"] },
	/** The 2026-10-22 delivery census: 36 new Classic plugins, 30 ETS twins, the 2 completion libraries, the 11 re-specs. */
	Delivery: { NewClassic: 36, ETSTwins: 30, Libraries: 2, Respecs: 11 },
	/** The direct dependents: 46 Classic + 12 EffectTS declare the core; 45 Classic declare the factory (7 do not). */
	Dependents: { CoreClassic: 46, CoreEffectTS: 12, Factory: 45, FactoryNonConsumers: ["client-dsh-panel-family", "client-dsh-panel-family-host", "client-dsh-workspace-live", "lib-dsh-core", "lib-dsh-pack", "lib-dsh-trace", "lib-dsh-workspace-live"] },
	Groups: { Core: 2, Governance: 3, Guardians: 2, Live: 1 },
	/** The v1-record migration facts (Package-13.md: the loud, per-record fix). */
	Migration: { Records: 76, CompatibleVersions: [1] as const },
	/** The era facts the case study's history rests on (the Oct 3-6, 2026 stretch). */
	History: {
		/** The five original boilerplate-era bundles (Package 1 of the record). */
		OriginBundles: 5,
		/** The boilerplate era's smoke total: 231 checks across the five bundles. */
		OriginChecks: 231,
		/** The factory's original callable-method count at the consolidation. */
		OriginMethods: 15,
		/** The port-era additive EFFECT-TS coverage: 10 checks (the record). */
		EffectDelta: 10,
		/** The port-era per-suite deltas over the CLASSIC counts (the record). */
		Deltas: { Core: 0, Factory: 7, Governor: 3 },
	},
	/** The case study's decision index: the twelve decisions plus the abort-signal fix. */
	Decisions: { Index: 12, Count: 13 },
	/** The badge sprite at /assets/badges.svg (the flavors page's shields row). */
	Sprite: { Badges: 11 },
	/** The setup page's step count ("Four steps: add the bundles, patch, restart, verify."). */
	Steps: { Count: 4 },
	/** The site footer's copyright line. */
	Copyright: { Year: 2025, Line: "© 2025 PlayForm Cloud" },
};

/** The live value when present, the documented fallback otherwise. */
function Pick<T>(LiveValue: T | null | undefined, FallbackValue: T): T {
	return LiveValue ?? FallbackValue;
}

/** The live package census: 53 Classic + 48 EffectTS = 101. */
const PackageCensus = Live.PackageCounts;

/** The live smoke-folder census: 269 Classic + 242 EffectTS = 511. */
const SuiteCensus = Live.SuiteCensus;

/** The per-suite smoke counts, one pair per package (the arbiter's numbers). */
export const Counts: {
	Core: Pair;
	Factory: Pair;
	Governor: Pair;
	Pinner: Pair;
	Cargo: Pair;
	Dash: Pair;
	Quotes: Pair;
	Ellipsis: Pair;
	Spaces: Pair;
	Invisible: Pair;
	Fullwidth: Pair;
	File: Pair;
	/** The CCR compressor's smoke suite (the 147-check suite, BOTH trees). */
	CCR: Pair;
	/** The tool-coach guardian's smoke suite (the 129-check suite, BOTH trees). */
	Coach: Pair;
	/** The seven normalize packages: the six stream flavors + the file tool. */
	Normalizers: number;
	/** The six stream flavor hooks (the file tool is the seventh sibling). */
	StreamFlavors: number;
	/** The two governance roles: GOVERNOR and PINNER. */
	Roles: number;
	/** The 101 release packages: 53 Classic + 48 EffectTS. */
	Packages: number;
	/** The 53 Classic release packages. */
	PackagesClassic: number;
	/** The 48 EffectTS release packages (47 twins + ets-base-dsh). */
	PackagesEffectTS: number;
	/** The 511 smoke suites: 269 CLASSIC + 242 EFFECT-TS per-test folders. */
	Suites: number;
	/** The 269 CLASSIC smoke folders. */
	SuitesClassic: number;
	/** The 242 EFFECT-TS smoke folders. */
	SuitesEffectTS: number;
	/** The 47 ETS twins (the 48 EffectTS packages minus ets-base-dsh). */
	Twins: number;
	/** The four libraries: core, trace, pack and the workspace-live renderer. */
	Libraries: number;
	/** The completion's two new libraries: lib-dsh-trace and lib-dsh-pack. */
	NewLibraries: number;
	/** The factory's callable-method ledger. */
	Methods: number;
	/** The registry groups as the plugins page sections count them. */
	Groups: { Core: number; Governance: number; Guardians: number; Normalize: number; Live: number };
} = {
	Core: Pick(Live.SuitePairs.Core, Fallback.Counts.Core),
	Factory: Pick(Live.SuitePairs.Factory, Fallback.Counts.Factory),
	Governor: Pick(Live.SuitePairs.Governor, Fallback.Counts.Governor),
	Pinner: Pick(Live.SuitePairs.Pinner, Fallback.Counts.Pinner),
	Cargo: Pick(Live.SuitePairs.Cargo, Fallback.Counts.Cargo),
	Dash: Pick(Live.SuitePairs.Dash, Fallback.Counts.Dash),
	Quotes: Pick(Live.SuitePairs.Quotes, Fallback.Counts.Quotes),
	Ellipsis: Pick(Live.SuitePairs.Ellipsis, Fallback.Counts.Ellipsis),
	Spaces: Pick(Live.SuitePairs.Spaces, Fallback.Counts.Spaces),
	Invisible: Pick(Live.SuitePairs.Invisible, Fallback.Counts.Invisible),
	Fullwidth: Pick(Live.SuitePairs.Fullwidth, Fallback.Counts.Fullwidth),
	File: Pick(Live.SuitePairs.File, Fallback.Counts.File),
	CCR: Pick(Live.SuitePairs.CCR, Fallback.Counts.CCR),
	Coach: Pick(Live.SuitePairs.Coach, Fallback.Counts.Coach),
	Normalizers: Pick(Live.Normalizers, Fallback.Normalizers),
	StreamFlavors: Pick(Live.StreamFlavors, Fallback.StreamFlavors),
	Roles: Fallback.Roles,
	Packages: Pick(
		PackageCensus ? PackageCensus.Classic + PackageCensus.EffectTS : null,
		Fallback.Packages,
	),
	PackagesClassic: Pick(PackageCensus?.Classic, Fallback.PackagesClassic),
	PackagesEffectTS: Pick(PackageCensus?.EffectTS, Fallback.PackagesEffectTS),
	Suites: Pick(SuiteCensus ? SuiteCensus.Classic + SuiteCensus.EffectTS : null, Fallback.Suites),
	SuitesClassic: Pick(SuiteCensus?.Classic, Fallback.SuitesClassic),
	SuitesEffectTS: Pick(SuiteCensus?.EffectTS, Fallback.SuitesEffectTS),
	Twins: Pick(Live.Twins, Fallback.Twins),
	Libraries: Pick(Live.Libraries, Fallback.Libraries),
	NewLibraries: Fallback.NewLibraries,
	Methods: Pick(Live.Methods, Fallback.Methods),
	Groups: {
		Core: Fallback.Groups.Core,
		Governance: Fallback.Groups.Governance,
		Guardians: Fallback.Groups.Guardians,
		Normalize: Pick(Live.Normalizers, Fallback.Normalizers),
		Live: Fallback.Groups.Live,
	},
};

/** The fourteen per-suite pairs, in suite order - the mechanics subtotal's source. */
const SuiteOrder = [
	Counts.Core,
	Counts.Factory,
	Counts.Governor,
	Counts.Pinner,
	Counts.Cargo,
	Counts.Dash,
	Counts.Quotes,
	Counts.Ellipsis,
	Counts.Spaces,
	Counts.Invisible,
	Counts.Fullwidth,
	Counts.File,
	Counts.CCR,
	Counts.Coach,
];

/** The live totals, picked once so the pair and the sum share the same values. */
const TotalClassic = Pick(Live.SuiteTree.Classic?.Checks, Fallback.Totals.Classic);
const TotalEffectTS = Pick(Live.SuiteTree.EffectTS?.Checks, Fallback.Totals.EffectTS);

/** The family-wide smoke totals: the per-folder README sums (the arbiter). */
export const Totals = {
	/** The CLASSIC total: the sum of every CLASSIC folder's expected count. */
	Classic: TotalClassic,
	/** The EFFECT-TS total: the sum of every EFFECT-TS folder's expected count. */
	EffectTS: TotalEffectTS,
	/** Both trees' checks together: 3454 + 3158 = 6612. */
	Both: TotalClassic + TotalEffectTS,
	/** The fourteen mechanics suites' subtotal (the sum of the pairs). */
	Mechanics: {
		Classic: SuiteOrder.reduce((Sum, PairCount) => Sum + PairCount.Classic, 0),
		EffectTS: SuiteOrder.reduce((Sum, PairCount) => Sum + PairCount.EffectTS, 0),
	},
	/** "3454 checks Classic · 3158 EffectTS" - the sentence-case totals pair. */
	Pair: (): string => `${Totals.Classic} checks Classic · ${Totals.EffectTS} EffectTS`,
	/** "3454 checks Classic · 3158 Effect-TS" - the pair with the hyphenated tree name. */
	PairHyphen: (): string => `${Totals.Classic} checks Classic · ${Totals.EffectTS} Effect-TS`,
	/** "511 SUITES · 3454 CHECKS CLASSIC · 3158 EFFECT-TS" - the meta strip. */
	Metadata: (): string =>
		`${Counts.Suites} SUITES · ${Totals.Classic} CHECKS CLASSIC · ${Totals.EffectTS} EFFECT-TS`,
};

/** The release versions: read live from the release trees' package.json files. */
export const Versions = {
	/** The release version of the 100 packages at the mode (the rest). */
	Release: Pick(Live.Release, Fallback.Versions.Release),
	/** The effect dependency pin the base and eleven packages carry. */
	Effect: Pick(Live.Effect, Fallback.Versions.Effect),
	/** The panel family's outlier version: the one package at 0.2.0. */
	PanelFamily: Pick(Live.PanelFamily, Fallback.Versions.PanelFamily),
	/** The packages that carry the effect pin (the rest ride ets-base-dsh). */
	EffectPinned: Pick(Live.EffectPinned, Fallback.Versions.EffectPinned),
};

/** The SCHEME section references the pages cite (the factory's method contract). */
export const Scheme = {
	/** §2.7 - Write, the shared executor; GuardedWrite lives on as its alias. */
	Write: "§2.7",
	/** §2.16 - UpdateKey(target), the namespaced Inflight key (the P2 helper). */
	UpdateKey: "§2.16",
	/** §2.17 - RegisterGovern, the direct-govern step registry. */
	RegisterGovern: "§2.17",
	/** §2.18 - Govern, the sequential-fold direct-govern entry. */
	Govern: "§2.18",
	/** §2.19 - Policy() and Decide(), the module-level policy block (D6). */
	Policy: "§2.19",
} as const;

/** Spell a count in the page's word form: 19 → "Nineteen", 21 → "Twenty-One". */
export function Word(Count: number): string {
	const Ones = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
	const Teens = [
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen",
	];
	const Tens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
	if (Count < 10) return Ones[Count] ?? String(Count);
	if (Count < 20) return Teens[Count - 10] ?? String(Count);
	const Ten = Math.floor(Count / 10);
	const Rest = Count % 10;
	const TenWord = Tens[Ten - 2] ?? String(Count);
	return Rest === 0 ? TenWord : `${TenWord}-${Ones[Rest] ?? Rest}`;
}

/** The factory's method ledger: read live from the SCHEME's §2 method sections. */
export const Methods = {
	/** The callable-method count of the factory service. */
	Count: Pick(Live.Methods, Fallback.Methods),
	/** The count in the page's word form. */
	Word: Word(Pick(Live.Methods, Fallback.Methods)),
	/** "19 METHODS" - the meta strip form. */
	Metadata: (): string => `${Methods.Count} METHODS`,
};

/** The trace bus (D5): the vocabulary, the envelope, the ring and the adapters. */
export const Trace = {
	/** The event names the library owns: observe/stamp, graph/indexed, graph/invalidated. */
	Events: Pick(Live.Trace?.Events, Fallback.Trace.Events),
	/** The envelope fields: trace, kind, at, actor, payload. */
	EnvelopeFields: Pick(Live.Trace?.EnvelopeFields, Fallback.Trace.EnvelopeFields),
	/** The service's fixed ring bound (a library constant, not a config knob). */
	Ring: Pick(Live.Trace?.Ring, Fallback.Trace.Ring),
	/** The service methods: emit, on, flush, ring, dispose. */
	Service: Pick(Live.Trace?.Service, Fallback.Trace.Service),
	/** The plugins carrying a Source/Trace/ adapter (observe, graph, context). */
	Adapters: Pick(Live.Trace?.Adapters, Fallback.Trace.Adapters),
	/** The trace library's smoke checks (the Loop-And-Vocabulary folder). */
	Checks: Pick(Live.LibrarySuite("lib-dsh-trace")?.Checks, Fallback.Trace.Checks),
};

/** The pack layer (D2-D4): the built-in pack, the layers and the library's smokes. */
export const Pack = {
	/** The built-in pack's families, keyed by the domain-qualified id. */
	Families: Pick(Live.Pack?.Families, Fallback.Pack.Families),
	/** The domains sharing the family map: doc, edit, search, convention, test, replay. */
	Domains: Pick(Live.Pack?.Domains, Fallback.Pack.Domains),
	/** The resolution layers: the user layer, the repo layer, the extends chain. */
	Layers: Fallback.Pack.Layers,
	/** The pack library's smoke folders (Resolve, Merge, Extends, Parser). */
	Folders: Pick(Live.LibrarySuite("lib-dsh-pack")?.Folders, Fallback.Pack.Folders),
	/** The pack library's smoke checks (10 + 8 + 6 + 6). */
	Checks: Pick(Live.LibrarySuite("lib-dsh-pack")?.Checks, Fallback.Pack.Checks),
};

/** The pack learner (D4): the opt-in bootstrap that proposes a repo's pack. */
export const Learner = {
	/** The learner's modules (the bounded scan, the ladder, the derive+write). */
	Modules: Pick(Live.Learner?.Modules, Fallback.Learner.Modules),
	/** The derivable families the bootstrap proposes when their companions exist. */
	Families: Pick(Live.Learner?.Families, Fallback.Learner.Families),
	/** The signature markers, strongest first: style, index, package.json. */
	Markers: Pick(Live.Learner?.Markers, Fallback.Learner.Markers),
};

/** The workspace family: the five navigation tools over the graph. */
export const Workspace = {
	/** The tools: map, find, expand, context, index. */
	Tools: Pick(Live.Workspace?.Tools, Fallback.Workspace.Tools),
	/** The Classic packages carrying the workspace surface. */
	Packages: Pick(Live.Workspace?.Packages, Fallback.Workspace.Packages),
};

/** The policy block (D6): the per-action allowlist and the packages carrying it. */
export const Policy = {
	/** The action keys: read, index, record, suggest, write, commit, spawn, message. */
	Actions: Pick(Live.Policy?.Actions, Fallback.Policy.Actions),
	/** The actions that run automatically by default. */
	Auto: Pick(Live.Policy?.Auto, Fallback.Policy.Auto),
	/** The actions that wait for approval by default. */
	Approve: Pick(Live.Policy?.Approve, Fallback.Policy.Approve),
	/** The packages carrying a policy (or automation) block and its Policy-Defaults folder. */
	Packages: Pick(Live.Policy?.Packages, Fallback.Policy.Packages),
};

/** The named KV storage domains the family opens (one owner per domain). */
export const Storage = {
	/** The distinct domain names: the config defaults plus the code-declared ones. */
	Domains: Pick(Live.Storage?.Domains, Fallback.Storage.Domains),
};

/** The client family: the three packages and the panel's per-bundle adapters. */
export const Client = {
	/** The client packages: the panel, its host and the live view. */
	Packages: Pick(Live.Client?.Packages, Fallback.Client.Packages),
	/** The panel's per-bundle adapter manifests (the 3 references + the 10 residual). */
	Adapters: Pick(Live.Client?.Adapters, Fallback.Client.Adapters),
};

/** The suggester family: the pack-driven six and the graph-driven seventh. */
export const Suggesters = {
	/** The suggester packages in total (the six pack-driven + the graph suggester). */
	Count: Pick(Live.Suggesters?.Count, Fallback.Suggesters.Count),
	/** The suggesters projecting their domain out of the resolved pack. */
	PackDriven: Pick(Live.Suggesters?.PackDriven, Fallback.Suggesters.PackDriven),
	/** The suggesters carrying the workspace gate (the foreign-workspace abstention). */
	Gate: Pick(Live.Suggesters?.Gate, Fallback.Suggesters.Gate),
	/** The suggesters carrying the D8 learning loop (the decision record + accept rate). */
	Learning: Pick(Live.Suggesters?.Learning, Fallback.Suggesters.Learning),
};

/** The harness profile: the @playform rows the desktop patch wires and its installed split. */
export const Profile = {
	/** The @playform rows in the profile patch (the factory included). */
	Rows: Pick(Live.Profile?.Rows, Fallback.Profile.Rows),
	/** The rows carrying `enabled: true` (the factory row has no enabled field). */
	Enabled: Pick(Live.Profile?.Enabled, Fallback.Profile.Enabled),
	/** The factory row: always on, no enable toggle. */
	Factory: Pick(Live.Profile?.Factory, Fallback.Profile.Factory),
	/** The profile package.json's installed/enabled split (a different figure from the patch rows). */
	Installed: {
		/** The @playform dependencies installed in the profile (51). */
		Dependencies: Pick(Live.Profile?.Installed?.Dependencies, Fallback.ProfileInstalled.Dependencies),
		/** The @playform rows in `dsh.profile.bundles` (48). */
		Bundles: Pick(Live.Profile?.Installed?.Bundles, Fallback.ProfileInstalled.Bundles),
		/** The installed packages that are not bundle rows (3). */
		Inactive: Pick(Live.Profile?.Installed?.Inactive, Fallback.ProfileInstalled.Inactive),
		/** The installed-not-enabled package names: ccr, core, workspace-live. */
		Names: Pick(Live.Profile?.Installed?.Names, Fallback.ProfileInstalled.Names),
	},
};

/** The 2026-10-22 delivery census: the new Classic plugins, the ETS twins, the libraries, the re-specs. */
export const Delivery = {
	/** The 36 new Classic plugins the delivery added (the 15 pre-existing → 51). */
	NewClassic: Pick(Live.Delivery?.NewClassic, Fallback.Delivery.NewClassic),
	/** The 30 ETS twins generated for the delivery (six of the 36 have no twin). */
	ETSTwins: Pick(Live.Delivery?.ETSTwins, Fallback.Delivery.ETSTwins),
	/** The completion program's two libraries: lib-dsh-trace and lib-dsh-pack. */
	Libraries: Pick(Live.Delivery?.Libraries, Fallback.Delivery.Libraries),
	/** The eleven approved re-specs (D10, 2026-10-23). */
	Respecs: Pick(Live.Delivery?.Respecs, Fallback.Delivery.Respecs),
};

/** The direct dependents of the two shared packages (the dependency graph's fan-in). */
export const Dependents = {
	/** The Classic packages declaring @playform/lib-dsh-core directly (46). */
	CoreClassic: Pick(Live.Dependents?.CoreClassic, Fallback.Dependents.CoreClassic),
	/** The EffectTS packages declaring @playform/ets-lib-dsh-core directly (12). */
	CoreEffectTS: Pick(Live.Dependents?.CoreEffectTS, Fallback.Dependents.CoreEffectTS),
	/** The Classic packages declaring @playform/plugin-dsh-factory directly (45 of the 53). */
	Factory: Pick(Live.Dependents?.Factory, Fallback.Dependents.Factory),
	/** The seven Classic packages that declare neither the factory nor are the factory itself. */
	FactoryNonConsumers: Pick(Live.Dependents?.FactoryNonConsumers, Fallback.Dependents.FactoryNonConsumers),
};

/** The v1-record migration facts (Package-13.md: the loud, per-record fix). */
export const Migration = {
	/** The v1 records auto-migrated on THE FIRST v2 open. */
	Records: Fallback.Migration.Records,
	/** The version list the v2 layout accepts (v1 records migrate). */
	CompatibleVersions: Fallback.Migration.CompatibleVersions,
	/** The unit the records count in. */
	Unit: "record",
	/** "compatibleVersions [1] (76 v1 records auto-migrated)" - the sentence fragment. */
	Sentence: (): string =>
		`compatibleVersions [${Migration.CompatibleVersions.join(", ")}] (${Migration.Records} v1 ${Pluralize(Migration.Records, Migration.Unit)} auto-migrated)`,
} as const;

/**
 * The register identities: the @-sentence names the tree documents.
 * The twelve BRANDING.md rows (factory, core, the two governors, the pinner,
 * the six stream flavors and the file tool), the pack library's own README
 * line, and the mechanical four-segment forms of the register law
 * (Documentation/Plugins/PLUGIN-FAMILY.md:67-68) for the coach and
 * live-containers hooks. The CCR hook has NO documented @-sentence - the
 * register law documents the four-segment form and only the two explicitly
 * written three-segment library rows (`Lib @ DSH @ Core`, `Lib @ DSH @ Pack`)
 * - so its field carries the package's documented name, never an invented
 * identity.
 */
export const Families = {
	Core: "Lib @ DSH @ Core",
	Factory: "Plugin @ DSH @ Factory",
	GovernorPackage: "Hook @ DSH @ Governor @ Package",
	PinnerPackage: "Hook @ DSH @ Pinner @ Package",
	GovernorCargo: "Hook @ DSH @ Governor @ Cargo",
	Dash: "Hook @ DSH @ Normalize @ Dash",
	Quotes: "Hook @ DSH @ Normalize @ Quotes",
	Ellipsis: "Hook @ DSH @ Normalize @ Ellipsis",
	Spaces: "Hook @ DSH @ Normalize @ Spaces",
	Invisible: "Hook @ DSH @ Normalize @ Invisible",
	Fullwidth: "Hook @ DSH @ Normalize @ Fullwidth",
	File: "Plugin @ DSH @ Normalize @ File",
	/** No tree source assigns the CCR hook an @-sentence; the package's documented name stands in. */
	CCR: "hook-dsh-ccr",
	/** The register law's mechanical four-segment form for hook-dsh-tool-coach. */
	Coach: "Hook @ DSH @ Tool @ Coach",
	/** The register law's mechanical four-segment form for hook-dsh-live-containers. */
	LiveContainers: "Hook @ DSH @ Live @ Containers",
	/** The pack library's identity: its README states it byte-exact (Lib @ DSH @ Pack). */
	Pack: "Lib @ DSH @ Pack",
} as const;

/** The era facts the case study's history rests on (the Oct 3-6, 2026 stretch). */
export const History = {
	/** The five original boilerplate-era bundles (Package 1 of the record). */
	OriginBundles: Fallback.History.OriginBundles,
	/** The boilerplate era's smoke total: 231 checks across the five bundles. */
	OriginChecks: Fallback.History.OriginChecks,
	/** The factory's original callable-method count at the consolidation. */
	OriginMethods: Fallback.History.OriginMethods,
	/** The port-era additive EFFECT-TS coverage (the record; see the header). */
	EffectDelta: Fallback.History.EffectDelta,
	/** The port-era per-suite deltas over the CLASSIC counts (the record). */
	Deltas: Fallback.History.Deltas,
};

/** The case study's decision index: the twelve decisions plus the abort-signal fix. */
export const Decisions = {
	/** The twelve decisions of the index. */
	Index: Fallback.Decisions.Index,
	/** The index rows in total (the abort-signal fix is the +1). */
	Count: Fallback.Decisions.Count,
} as const;

/** The badge sprite at /assets/badges.svg (the flavors page's shields row). */
export const Sprite = {
	/** The shields-style symbols in the sprite. */
	Badges: Fallback.Sprite.Badges,
} as const;

/** The setup page's step count. */
export const Steps = {
	/** "Four steps: add the bundles, patch, restart, verify." */
	Count: Fallback.Steps.Count,
} as const;

/** The site footer's copyright line. */
export const Copyright = {
	/** The copyright year. */
	Year: Fallback.Copyright.Year,
	/** The full footer line, byte-exact. */
	Line: Fallback.Copyright.Line,
} as const;

/** Pluralize a unit the site's voice way: 1 record, 76 records. */
export function Pluralize(Count: number, Unit: string): string {
	return Count === 1 ? Unit : `${Unit}s`;
}

/** "NTH" - the ordinal form for the FAMILY POSITION metas (1ST, 2ND, 3RD, 4TH...). */
export function Ordinal(Number: number): string {
	const Remainder10 = Number % 10;
	const Remainder100 = Number % 100;
	if (Remainder100 >= 11 && Remainder100 <= 13) return `${Number}TH`;
	switch (Remainder10) {
		case 1:
			return `${Number}ST`;
		case 2:
			return `${Number}ND`;
		case 3:
			return `${Number}RD`;
		default:
			return `${Number}TH`;
	}
}

/**
 * "FAMILY POSITION: 1ST OF 6 STREAM NORMALIZERS" - the detail pages' meta
 * strip for the stream flavors (the file tool is the seventh sibling and
 * carries its own label).
 */
export function FamilyPosition(Nth: number): string {
	return `FAMILY POSITION: ${Ordinal(Nth)} OF ${Counts.StreamFlavors} STREAM NORMALIZERS`;
}

/**
 * The per-suite card description, auto-enriched from the count pair:
 * "54 checks in CLASSIC, 43 in EFFECT-TS - <Detail>" for a divergent pair,
 * "32 checks in both releases - <Detail>" when the pair is equal.
 */
export function SuiteCount(PairCount: Pair, Detail: string): string {
	return PairCount.Classic === PairCount.EffectTS
		? `${PairCount.Classic} checks in both releases - ${Detail}`
		: `${PairCount.Classic} checks in CLASSIC, ${PairCount.EffectTS} in EFFECT-TS - ${Detail}`;
}

/**
 * The normalize family's card description, assembled from the seven pairs:
 * "184 (dash) + 104 each (quotes, ellipsis, spaces, invisible, fullwidth) +
 * 112 (file) - identical in both releases - <Detail>".
 */
export function NormalizeFamily(Detail: string): string {
	return (
		`${Counts.Dash.Classic} (dash) + ${Counts.Quotes.Classic} each (quotes, ellipsis, spaces, ` +
		`invisible, fullwidth) + ${Counts.File.Classic} (file) - identical in both releases - ${Detail}`
	);
}
