// Live.ts - the build-time data layer: the site's dynamic figures read
// directly from the monorepo at build time (no runtime fetching).
//
// Every value the site renders is pulled here from the REAL sources:
//   - the package.json version fields of the three trees (Boilerplate,
//     Classic, EffectTS); the release version is the UNANIMOUS version of
//     the Classic + EffectTS release packages (the Boilerplate tree keeps
//     its historical names and versions, so it is read but never polled
//     for the release identity);
//   - the effect dependency pin of the EffectTS packages;
//   - the per-suite smoke counts, parsed from the two smoke README
//     manifest lines (Classic/smokes/README.md and EffectTS/smokes/README.md
//     - the suites are the arbiter, and the manifest line is their printed
//     summary; the same line Scripts/Drift-Guard.mjs verifies against);
//   - the package, suite, normalizer and stream-flavor counts, derived from
//     the Classic release tree's package directories;
//   - the factory's callable-method count, read from the §2 method sections
//     of Classic/packages/dsh-plugin-factory/SCHEME.md plus one for the
//     shared §2.7 (Write + GuardedWrite), per the scheme's own heading.
//
// BUILD-TIME ONLY: this module reads the filesystem with node:fs and is
// imported by Content.ts, which the .astro frontmatter (the server) imports.
// It must never be imported from a browser <script> bundle.
//
// Every reader returns null when its source is missing or unparseable;
// Content.ts falls back to its documented constants then, so the build
// never fails on a moved or renamed source.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** The monorepo root marker: the Classic tree's package directory. */
const Marker = join("Classic", "packages");

/**
 * The monorepo root, found by walking up from the candidate directories
 * until one contains the marker. The candidates matter because Vite's SSR
 * bundle rewrites import.meta.url to the bundled chunk's location - the
 * source-relative path is tried first, then the build's working directory
 * (astro runs from Site/, the monorepo root's child) and the cwd itself.
 */
function FindRoot(): string {
	const Candidates = [
		resolve(dirname(fileURLToPath(import.meta.url)), "../../.."),
		resolve(process.cwd(), ".."),
		process.cwd(),
	];
	for (const Candidate of Candidates) {
		if (Candidate && existsSync(join(Candidate, Marker))) return Candidate;
	}
	// No root found: every reader degrades to null (the documented fallbacks).
	return "";
}

const Root = FindRoot();

/** One tree's package: the directory, the npm name, the version, the effect pin. */
export interface TreePackage {
	/** The package directory under the tree. */
	Dir: string;
	/** The npm package name from the package.json. */
	Name: string;
	/** The version field from the package.json. */
	Version: string;
	/** The effect dependency pin (dependencies or peerDependencies), or null. */
	Effect: string | null;
}

/** Read a text file, or null when it is missing or unreadable. */
function ReadText(Path: string): string | null {
	try {
		return readFileSync(Path, "utf8");
	} catch {
		return null;
	}
}

/** Read a JSON file, or null when it is missing or unparseable. */
function ReadJson(Path: string): any {
	try {
		return JSON.parse(readFileSync(Path, "utf8"));
	} catch {
		return null;
	}
}

/** List a directory's subdirectory names (sorted), or null. */
function ReadDirs(Path: string): string[] | null {
	try {
		return readdirSync(Path, { withFileTypes: true })
			.filter((Entry) => Entry.isDirectory())
			.map((Entry) => Entry.name)
			.sort();
	} catch {
		return null;
	}
}

/** One tree's packages, read from each package directory's package.json. */
function ReadTree(Tree: string): TreePackage[] {
	const Dir = join(Root, Tree, "packages");
	return (ReadDirs(Dir) ?? []).flatMap((PackageDir) => {
		const Package = ReadJson(join(Dir, PackageDir, "package.json"));
		if (!Package || typeof Package.version !== "string") return [];
		const Pin =
			Package.dependencies?.["effect"] ??
			Package.peerDependencies?.["effect"] ??
			null;
		return [
			{
				Dir: PackageDir,
				Name: String(Package.name ?? PackageDir),
				Version: Package.version,
				Effect: typeof Pin === "string" ? Pin : null,
			},
		];
	});
}

/** The unanimous value of a string list (null when it is empty or disagrees). */
function Unanimous(Values: string[]): string | null {
	const Unique = [...new Set(Values)];
	return Unique.length === 1 ? (Unique[0] ?? null) : null;
}

/**
 * Parse the smoke README's manifest line - the printed per-suite summary
 * "**core 14 / factory 34 / ... / normalize-file 71** - live in this ...",
 * em-dash or hyphen separated. Returns null when the line is not found.
 */
function ReadSmokeManifest(Tree: string): Record<string, number> | null {
	const Text = ReadText(join(Root, Tree, "smokes", "README.md"));
	if (!Text) return null;
	const Match = Text.match(/\*\*([^*]+)\*\* [\u2014-] live in this/);
	if (!Match) return null;
	const Counts: Record<string, number> = {};
	for (const [, Suite, Count] of Match[1].matchAll(/([\w-]+) (\d+)/g)) {
		Counts[Suite] = Number(Count);
	}
	return Counts;
}

/** The per-suite keys: the Content pair key against the smoke manifest name. */
const SuiteKeys = [
	["Core", "core"],
	["Factory", "factory"],
	["Governor", "governor"],
	["Pinner", "pinner"],
	["Cargo", "cargo"],
	["Dash", "normalize-dash"],
	["Quotes", "quotes"],
	["Ellipsis", "ellipsis"],
	["Spaces", "spaces"],
	["Invisible", "invisible"],
	["Fullwidth", "fullwidth"],
	["File", "normalize-file"],
] as const;

/** A per-suite smoke-count pair: the CLASSIC checks against the EFFECT-TS checks. */
export interface SuitePair {
	/** The CLASSIC suite's check count. */
	Classic: number;
	/** The EFFECT-TS suite's check count. */
	EffectTS: number;
}

const ClassicPackages = ReadTree("Classic");
const EffectTSPackages = ReadTree("EffectTS");
const ClassicSmoke = ReadSmokeManifest("Classic");
const EffectTSSmoke = ReadSmokeManifest("EffectTS");

/** The per-suite pairs, present only when BOTH README manifests report the suite. */
const SuitePairs: Partial<Record<(typeof SuiteKeys)[number][0], SuitePair>> = {};
for (const [Key, Suite] of SuiteKeys) {
	const ClassicCount = ClassicSmoke?.[Suite];
	const EffectTSCount = EffectTSSmoke?.[Suite];
	if (typeof ClassicCount === "number" && typeof EffectTSCount === "number") {
		SuitePairs[Key] = { Classic: ClassicCount, EffectTS: EffectTSCount };
	}
}

/** The Classic release tree's normalize packages (the dash..file seven). */
const NormalizePackages = ClassicPackages.filter((Package) =>
	Package.Dir.startsWith("normalize-"),
);

/** The factory's callable-method count: the SCHEME's §2 sections + the shared §2.7. */
function ReadMethodCount(): number | null {
	const Scheme = ReadText(
		join(Root, "Classic", "packages", "dsh-plugin-factory", "SCHEME.md"),
	);
	if (!Scheme) return null;
	const Sections = [...Scheme.matchAll(/^### 2\.\d+ /gm)].length;
	return Sections > 0 ? Sections + 1 : null;
}

/** The build-time snapshot of the monorepo's real values (null = no live source). */
export const Live = {
	/** The monorepo root the build read from. */
	Root,
	/** The three trees' packages, each with its actual package.json version. */
	TreePackages: {
		Boilerplate: ReadTree("Boilerplate"),
		Classic: ClassicPackages,
		EffectTS: EffectTSPackages,
	},
	/** The npm names of the Classic release packages. */
	PackageNames: ClassicPackages.map((Package) => Package.Name),
	/** The unanimous release version of the Classic + EffectTS packages. */
	Release: Unanimous([
		...ClassicPackages.map((Package) => Package.Version),
		...EffectTSPackages.map((Package) => Package.Version),
	]),
	/** The unanimous effect dependency pin of the EffectTS packages. */
	Effect: Unanimous(
		EffectTSPackages.map((Package) => Package.Effect).filter(
			(Pin): Pin is string => typeof Pin === "string",
		),
	),
	/** The per-suite smoke-count pairs from the two README manifests. */
	SuitePairs,
	/** The number of smoke suites in the CLASSIC manifest (one per package). */
	SuiteCount: ClassicSmoke ? Object.keys(ClassicSmoke).length || null : null,
	/** The number of Classic release packages. */
	Packages: ClassicPackages.length || null,
	/** The normalize packages (the six stream flavors + the file tool). */
	Normalizers: NormalizePackages.length || null,
	/** The stream-flavor hooks (the normalize packages minus the file tool). */
	StreamFlavors:
		NormalizePackages.filter(
			(Package) => Package.Dir !== "hook-dsh-normalize-file",
		).length || null,
	/** The factory's callable-method count, from the SCHEME's §2 sections. */
	Methods: ReadMethodCount(),
};
