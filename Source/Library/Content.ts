// Content.ts - the family's single source of truth for every dynamic figure
// the site renders: the smoke counts, the totals pair, the method ledger, the
// release versions, the migration facts and the SCHEME references.
//
// The figures are LIVE: they are read from the monorepo at build time by
// Library/Live.ts (the package.json versions of the three trees, the smoke
// README manifests, the Classic package directories and the factory's SCHEME
// method sections) - no runtime fetching, so the built pages always carry the
// repo's real values. When a live source is missing or unparseable, the
// documented FALLBACK below is served instead, so the build never fails on a
// moved source.
//
// The fallback constants are the previously verified values, kept in the
// same shapes the Drift-Guard (Scripts/Drift-Guard.mjs) extracts and checks
// against the repo - a stale fallback is caught by `pnpm run Drift`.
//
// Values with NO live source (documented fallbacks, verified against the
// records):
//   - Migration: 76 records, compatibleVersions [1] - the v1-record
//     migration (Documentation/Handoff/Packages/Package-13.md);
//   - History: the five original boilerplate-era bundles, the 231 checks and
//     the 15-method factory at the consolidation (the Package 1 record);
//   - Decisions: the twelve decisions plus the abort-signal fix;
//   - Sprite: the 11 shields-style symbols in /assets/badges.svg;
//   - Steps: the four setup steps; Copyright: the 2025 footer line;
//   - Roles: the two governance roles; Groups.Core / Groups.Governance: the
//     plugins-page section groupings (Groups.Normalize is live).
// History's per-suite deltas and total are LIVE - derived from the merged
// pairs - and mirror the fallback record below.
//
// The formatters own the pluralization and the phrase shapes ("N checks in
// CLASSIC, M in EFFECT-TS", the totals pair, the migration sentence, the
// FAMILY POSITION metas) so no two pages can render the same fact differently.
// This module is imported from the .astro frontmatter only (it reaches the
// filesystem through Live.ts at build time) - never from a <script> block.

import { Live } from "./Live.ts";

/** A smoke-count pair: the CLASSIC checks against the EFFECT-TS checks. */
export interface Pair {
	/** The CLASSIC suite's check count. */
	Classic: number;
	/** The EFFECT-TS suite's check count (parity or the additive coverage). */
	EffectTS: number;
}

/** The fallback constants: served only when a live source is unavailable. */
const Fallback = {
	Counts: {
		Core: { Classic: 14, EffectTS: 17 },
		Factory: { Classic: 34, EffectTS: 41 },
		Governor: { Classic: 78, EffectTS: 81 },
		Pinner: { Classic: 32, EffectTS: 32 },
		Cargo: { Classic: 62, EffectTS: 62 },
		Dash: { Classic: 132, EffectTS: 132 },
		Quotes: { Classic: 62, EffectTS: 62 },
		Ellipsis: { Classic: 62, EffectTS: 62 },
		Spaces: { Classic: 62, EffectTS: 62 },
		Invisible: { Classic: 62, EffectTS: 62 },
		Fullwidth: { Classic: 62, EffectTS: 62 },
		File: { Classic: 71, EffectTS: 71 },
	},
	Totals: {
		/** The CLASSIC total: 733 checks across the twelve suites. */
		Classic: 733,
		/** The EFFECT-TS total: 746 checks (core +3, factory +7, governor +3). */
		EffectTS: 746,
		/** "733 checks Classic · 746 EffectTS" - the pair the formatters mirror. */
	},
	Versions: {
		/** The release version of all twelve packages in both trees. */
		Release: "0.0.1",
		/** The effect dependency pin of the EffectTS packages. */
		Effect: "4.0.2",
	},
	Packages: 12,
	Suites: 12,
	Normalizers: 7,
	StreamFlavors: 6,
	Roles: 2,
	Methods: 19,
	Groups: { Core: 2, Governance: 3 },
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
		/** The additive EFFECT-TS coverage: 13 checks (core +3, factory +7, governor +3). */
		EffectDelta: 13,
		/** The per-suite additive EFFECT-TS deltas over the CLASSIC counts. */
		Deltas: { Core: 3, Factory: 7, Governor: 3 },
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
	/** The seven normalize packages: the six stream flavors + the file tool. */
	Normalizers: number;
	/** The six stream flavor hooks (the file tool is the seventh sibling). */
	StreamFlavors: number;
	/** The two governance roles: GOVERNOR and PINNER. */
	Roles: number;
	/** The twelve release packages. */
	Packages: number;
	/** The twelve smoke suites (one per package). */
	Suites: number;
	/** The factory's callable-method ledger. */
	Methods: number;
	/** The registry groups as the plugins page sections count them. */
	Groups: { Core: number; Governance: number; Normalize: number };
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
	Normalizers: Pick(Live.Normalizers, Fallback.Normalizers),
	StreamFlavors: Pick(Live.StreamFlavors, Fallback.StreamFlavors),
	Roles: Fallback.Roles,
	Packages: Pick(Live.Packages, Fallback.Packages),
	Suites: Pick(Live.SuiteCount, Fallback.Suites),
	Methods: Pick(Live.Methods, Fallback.Methods),
	Groups: {
		Core: Fallback.Groups.Core,
		Governance: Fallback.Groups.Governance,
		Normalize: Pick(Live.Normalizers, Fallback.Normalizers),
	},
};

/** The twelve per-suite pairs, in suite order - the totals' live source. */
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
];

/** The family-wide smoke totals, derived from the per-suite pairs. */
export const Totals = {
	/** The CLASSIC total: the sum of the twelve CLASSIC pair counts. */
	Classic: SuiteOrder.reduce((Sum, PairCount) => Sum + PairCount.Classic, 0),
	/** The EFFECT-TS total: the sum of the twelve EFFECT-TS pair counts. */
	EffectTS: SuiteOrder.reduce((Sum, PairCount) => Sum + PairCount.EffectTS, 0),
	/** "733 checks Classic · 746 EffectTS" - the sentence-case totals pair. */
	Pair: (): string => `${Totals.Classic} checks Classic · ${Totals.EffectTS} EffectTS`,
	/** "733 checks Classic · 746 Effect-TS" - the pair with the hyphenated tree name. */
	PairHyphen: (): string => `${Totals.Classic} checks Classic · ${Totals.EffectTS} Effect-TS`,
	/** "12 SUITES · 733 CHECKS CLASSIC · 746 EFFECT-TS · ALL PASS" - the meta strip. */
	Meta: (): string =>
		`${Counts.Suites} SUITES · ${Totals.Classic} CHECKS CLASSIC · ${Totals.EffectTS} EFFECT-TS · ALL PASS`,
};

/** The release versions: read live from the release trees' package.json files. */
export const Versions = {
	/** The release version of all twelve packages in both trees. */
	Release: Pick(Live.Release, Fallback.Versions.Release),
	/** The effect dependency pin of the EffectTS packages. */
	Effect: Pick(Live.Effect, Fallback.Versions.Effect),
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
} as const;

/** The count in the page's word form: 19 → "Nineteen", 21 → "Twenty-One". */
export function CountWord(Count: number): string {
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

/** The factory's method ledger: read live from the SCHEME's §2 sections. */
export const Methods = {
	/** The callable-method count of the factory service. */
	Count: Pick(Live.Methods, Fallback.Methods),
	/** The count in the page's word form. */
	Word: CountWord(Pick(Live.Methods, Fallback.Methods)),
	/** "19 METHODS" - the meta strip form. */
	Meta: (): string => `${Methods.Count} METHODS`,
};

/** The v1-record migration facts (Package-13.md: the loud, per-record fix). */
export const Migration = {
	/** The v1 records auto-migrated on the first v2 open. */
	Records: Fallback.Migration.Records,
	/** The version list the v2 layout accepts (v1 records migrate). */
	CompatibleVersions: Fallback.Migration.CompatibleVersions,
	/** The unit the records count in. */
	Unit: "record",
	/** "compatibleVersions [1] (76 v1 records auto-migrated)" - the sentence fragment. */
	Sentence: (): string =>
		`compatibleVersions [${Migration.CompatibleVersions.join(", ")}] (${Migration.Records} v1 ${Plural(Migration.Records, Migration.Unit)} auto-migrated)`,
} as const;

/** The register #15 identities: the @-sentence release names of the twelve packages. */
export const Families = {
	Core: "Hook @ DSH @ Core",
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
	File: "Hook @ DSH @ Normalize @ File",
} as const;

/** The per-suite additive EFFECT-TS deltas over the CLASSIC counts (live-derived). */
const Deltas = {
	Core: Counts.Core.EffectTS - Counts.Core.Classic,
	Factory: Counts.Factory.EffectTS - Counts.Factory.Classic,
	Governor: Counts.Governor.EffectTS - Counts.Governor.Classic,
};

/** The era facts the case study's history rests on (the Oct 3-6, 2026 stretch). */
export const History = {
	/** The five original boilerplate-era bundles (Package 1 of the record). */
	OriginBundles: Fallback.History.OriginBundles,
	/** The boilerplate era's smoke total: 231 checks across the five bundles. */
	OriginChecks: Fallback.History.OriginChecks,
	/** The factory's original callable-method count at the consolidation. */
	OriginMethods: Fallback.History.OriginMethods,
	/** The additive EFFECT-TS coverage - the sum of the live-derived deltas. */
	EffectDelta: Deltas.Core + Deltas.Factory + Deltas.Governor,
	/** The per-suite additive EFFECT-TS deltas over the CLASSIC counts. */
	Deltas,
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
export function Plural(Count: number, Unit: string): string {
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
 * "34 checks in CLASSIC, 41 in EFFECT-TS - <Detail>" for a divergent pair,
 * "32 checks in both releases - <Detail>" when the pair is equal.
 */
export function SuiteCount(PairCount: Pair, Detail: string): string {
	return PairCount.Classic === PairCount.EffectTS
		? `${PairCount.Classic} checks in both releases - ${Detail}`
		: `${PairCount.Classic} checks in CLASSIC, ${PairCount.EffectTS} in EFFECT-TS - ${Detail}`;
}

/**
 * The normalize family's card description, assembled from the seven pairs:
 * "132 (dash) + 62 each (quotes, ellipsis, spaces, invisible, fullwidth) +
 * 71 (file) - identical in both releases - <Detail>".
 */
export function NormalizeFamily(Detail: string): string {
	return (
		`${Counts.Dash.Classic} (dash) + ${Counts.Quotes.Classic} each (quotes, ellipsis, spaces, ` +
		`invisible, fullwidth) + ${Counts.File.Classic} (file) - identical in both releases - ${Detail}`
	);
}
