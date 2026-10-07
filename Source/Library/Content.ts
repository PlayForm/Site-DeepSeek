// Content.ts - the family's single source of truth for every dynamic figure
// the site renders: the smoke counts, the totals pair, the method ledger, the
// release versions, the migration facts and the SCHEME references.
//
// Every value below is VERIFIED against the code and the records:
//   - the per-suite smoke counts match Classic/smokes/README.md and
//     EffectTS/smokes/README.md (the suites are the arbiter);
//   - Totals.Classic = 733 and Totals.EffectTS = 746 are the sums of the
//     per-suite pairs (14+34+78+32+62+132+62*5+71 and 17+41+81+32+62+132+62*5+71);
//   - Methods.Count = 19 with Write + GuardedWrite sharing SCHEME §2.7, the
//     uncounted helpers UpdateKey §2.16, RegisterGovern §2.17 and the fold
//     entry Govern §2.18 (Classic/packages/plugin-dsh-factory/SCHEME.md);
//   - Versions.Release = "0.0.1" is the version field of all twelve release
//     package.json files in both trees; Versions.Effect = "4.0.2" is the
//     effect dependency pin of the EffectTS packages;
//   - Migration.Records = 76 and Migration.CompatibleVersions = [1] match
//     Documentation/Handoff/Packages/Package-13.md (the v1-record migration);
//   - the family identities are the register #15 @-sentence names the pages
//     carry as the release identity.
//
// The formatters own the pluralization and the phrase shapes ("N checks in
// CLASSIC, M in EFFECT-TS", the totals pair, the migration sentence, the
// FAMILY POSITION metas) so no two pages can render the same fact differently.
// This module is browser-safe (constants + string functions only), so it can
// also be imported from the pages' <script> blocks.

/** A smoke-count pair: the CLASSIC checks against the EFFECT-TS checks. */
export interface Pair {
	/** The CLASSIC suite's check count. */
	Classic: number;
	/** The EFFECT-TS suite's check count (parity or the additive coverage). */
	EffectTS: number;
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
	Normalizers: 7,
	StreamFlavors: 6,
	Roles: 2,
	Packages: 12,
	Suites: 12,
	Methods: 19,
	Groups: { Core: 2, Governance: 3, Normalize: 7 },
};

/** The family-wide smoke totals, derived from the per-suite pairs. */
export const Totals = {
	/** The CLASSIC total: 733 checks across the twelve suites. */
	Classic: 733,
	/** The EFFECT-TS total: 746 checks (core +3, factory +7, governor +3). */
	EffectTS: 746,
	/** "733 checks Classic · 746 EffectTS" - the sentence-case totals pair. */
	Pair: (): string => `${Totals.Classic} checks Classic · ${Totals.EffectTS} EffectTS`,
	/** "733 checks Classic · 746 Effect-TS" - the pair with the hyphenated tree name. */
	PairHyphen: (): string => `${Totals.Classic} checks Classic · ${Totals.EffectTS} Effect-TS`,
	/** "12 SUITES · 733 CHECKS CLASSIC · 746 EFFECT-TS · ALL PASS" - the meta strip. */
	Meta: (): string =>
		`${Counts.Suites} SUITES · ${Totals.Classic} CHECKS CLASSIC · ${Totals.EffectTS} EFFECT-TS · ALL PASS`,
} as const;

/** The release versions: every package at 0.0.1, the Effect-TS tree on effect 4.0.2. */
export const Versions = {
	/** The release version of all twelve packages in both trees. */
	Release: "0.0.1",
	/** The effect dependency pin of the EffectTS packages. */
	Effect: "4.0.2",
} as const;

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

/** The factory's method ledger: 19 callable methods (18 sections; §2.7 shared). */
export const Methods = {
	/** The callable-method count of the factory service. */
	Count: 19,
	/** The count in the page's word form. */
	Word: "Nineteen",
	/** "19 METHODS" - the meta strip form. */
	Meta: (): string => `${Methods.Count} METHODS`,
} as const;

/** The v1-record migration facts (Package-13.md: the loud, per-record fix). */
export const Migration = {
	/** The v1 records auto-migrated on the first v2 open. */
	Records: 76,
	/** The version list the v2 layout accepts (v1 records migrate). */
	CompatibleVersions: [1] as const,
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

/** The era facts the case study's history rests on (the Oct 3-6, 2026 stretch). */
export const History = {
	/** The five original boilerplate-era bundles (Package 1 of the record). */
	OriginBundles: 5,
	/** The boilerplate era's smoke total: 231 checks across the five bundles. */
	OriginChecks: 231,
	/** The factory's original callable-method count at the consolidation. */
	OriginMethods: 15,
	/** The additive EFFECT-TS coverage: 13 checks (core +3, factory +7, governor +3). */
	EffectDelta: 13,
	/** The per-suite additive EFFECT-TS deltas over the CLASSIC counts. */
	Deltas: { Core: 3, Factory: 7, Governor: 3 } as const,
} as const;

/** The case study's decision index: the twelve decisions plus the abort-signal fix. */
export const Decisions = {
	/** The twelve decisions of the index. */
	Index: 12,
	/** The index rows in total (the abort-signal fix is the +1). */
	Count: 13,
} as const;

/** The badge sprite at /assets/badges.svg (the flavors page's shields row). */
export const Sprite = {
	/** The shields-style symbols in the sprite. */
	Badges: 11,
} as const;

/** The setup page's step count. */
export const Steps = {
	/** "Four steps: add the bundles, patch, restart, verify." */
	Count: 4,
} as const;

/** The site footer's copyright line. */
export const Copyright = {
	/** The copyright year. */
	Year: 2025,
	/** The full footer line, byte-exact. */
	Line: "© 2025 PlayForm Systems. All rights reserved.",
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