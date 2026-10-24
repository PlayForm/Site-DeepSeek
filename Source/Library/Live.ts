// Live.ts - the build-time data layer.
// The site's dynamic figures are read directly from the monorepo at build
// time.
// There is NO runtime fetching.
//
// EVERY value the site renders is pulled here from the REAL sources:
//   - the package.json version fields of the two release trees (Classic and
//     EffectTS).
//     The release version is the MODE of the release packages' versions (the
//     version the most packages carry: 0.1.0); the packages that differ are
//     reported as outliers (the panel family at 0.2.0). The historical
//     Boilerplate tree is read but is absent, so it returns no packages.
//   - the effect dependency pin of the EffectTS packages that carry one (the
//     base and eleven others; the rest ride ets-base-dsh).
//   - the per-folder smoke counts: every package's
//     Source/Test/<folder>/README.md declares its expected PASS count
//     ("## Expected count" -> "<N> PASS."), exactly the count
//     Maintain/Run-Smokes.mjs guards. A tree's checks are the sum of its
//     folder counts (Classic 3,485 + EffectTS 3,158 = 6,643) and its suite
//     count is its folder count (271 + 242 = 513).
//     The smoke READMEs' manifest lines are the SECONDARY source for the
//     fourteen mechanics suites' per-suite pairs: the manifest is the printed
//     summary and may lag the folder arbiter by a check (the factory suite),
//     so the folder sums win and the manifest fills only a missing folder
//     sum.
//   - the package, suite, twin, library, normalizer and stream-flavor
//     counts, derived from the Classic release tree's package directories.
//   - the factory's callable-method count, read from the §2 method sections
//     of Classic/packages/plugin-dsh-factory/SCHEME.md plus ONE for the
//     shared §2.7 (Write + GuardedWrite). The §2.19 policy-block section is
//     MODULE-LEVEL, not a method, so it is excluded.
//   - the completion program's new surfaces, each from its own source:
//       * the trace bus: lib-dsh-trace's Names/Envelope/Bound/Adapter, the
//         factory's Trace interface (the service methods) and the plugins
//         carrying a Source/Trace/ adapter;
//       * the pack layer: lib-dsh-pack's Builtin family table (31 families
//         over 6 domains);
//       * the learner: hook-dsh-convention-suggester's Function/Learn
//         (10 modules), its family table (9 derivable families) and its
//         signature ladder (3 markers);
//       * the workspace tools: plugin-dsh-workspace's registered tool names;
//       * the policy block: the factory's Variable/Policy defaults (8 action
//         keys, 5 auto, 3 approve) and the packages carrying a
//         Policy-Defaults folder;
//       * the storage domains: every config-declared `domain` default plus
//         the code-declared Domain.defineDomain names;
//       * the client adapters: the panel family's Variable/Reference
//         manifests;
//       * the suggesters' gate and learning layer: the Workspace-Gate and
//         Learning-Loop folders, and the lib-dsh-pack dependents;
//       * the delivery census: PLUGIN-FAMILY.md's 2026-10-22 sentence (36 new
//         Classic plugins, 30 ETS twins, the two completion libraries) and
//         the Completion-Spec's re-spec table (the eleven approved re-specs);
//       * the direct dependents: every package.json's runtime dependency
//         names - the core's Classic and EffectTS fan-in and the factory's
//         Classic dependents (the seven non-consumers are the packages that
//         declare neither the factory nor are the factory itself);
//       * the package catalog: every Classic package without a hand-authored
//         detail page, read from its package.json (name/version/description),
//         its README (the summary paragraph, the top-level headings and the
//         activation line) and the EffectTS tree (the ets-* twin);
//       * the harness profile: the desktop profile's cordis.patch.yml and
//         its package.json - the ONE source outside the monorepo (49 patch
//         rows; 51 installed @playform dependencies, 48 bundle rows, 3
//         installed-not-enabled). A machine without it serves the
//         documented fallback.
//
// BUILD-TIME ONLY: this module reads the filesystem with node:fs and is
// imported by Content.ts, which the .astro frontmatter (the server) imports.
// It must NEVER be imported from a browser <script> bundle.
//
// EVERY reader returns null when its source is missing or unparseable.
// Content.ts falls back to its documented constants then, so the build NEVER
// fails on a moved or renamed source.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** The monorepo root marker: the Classic tree's package directory. */
const Marker = join("Classic", "packages");

/**
 * The monorepo root, found by walking up from the candidate directories
 * until ONE contains the marker. The candidates matter because Vite's SSR
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
	// NO root found: EVERY reader degrades to null (the documented fallbacks).
	return "";
}

const Root = FindRoot();

/** One tree's package: the directory, the npm name, the version, the effect pin, the dependencies. */
export interface TreePackage {
	/** The package directory under the tree. */
	Dir: string;
	/** The npm package name from the package.json. */
	Name: string;
	/** The version field from the package.json. */
	Version: string;
	/** The effect dependency pin (dependencies or peerDependencies), or null. */
	Effect: string | null;
	/** The runtime dependency names from the package.json (the direct dependents' source). */
	Dependencies: string[];
	/** The package.json description (the catalog role's source), or null. */
	Description: string | null;
}

/** One package's smoke folders: the folder count and the expected-count sum. */
export interface SuiteFolder {
	/** The package's Source/Test/<folder> directories with a parseable README. */
	Folders: number;
	/** The sum of the folders' "## Expected count" PASS counts. */
	Checks: number;
}

/** One tree's smoke folders: the tree totals plus the per-package figures. */
export interface SuiteTree {
	/** The tree's total folder count (the runner's suites). */
	Folders: number;
	/** The tree's total expected-check sum. */
	Checks: number;
	/** The per-package figures, keyed by the package directory. */
	PerPackage: Record<string, SuiteFolder>;
}

/** A per-suite smoke-count pair: the CLASSIC checks against the EFFECT-TS checks. */
export interface SuitePair {
	/** The CLASSIC suite's check count. */
	Classic: number;
	/** The EFFECT-TS suite's check count. */
	EffectTS: number;
}

/** The trace bus's figures (the D5 vocabulary and the adapting plugins). */
export interface TraceFigures {
	Events: number;
	EnvelopeFields: number;
	Ring: number;
	Service: number;
	Adapters: number;
}

/** The pack layer's figures (the built-in pack's families over its domains). */
export interface PackFigures {
	Families: number;
	Domains: number;
}

/** The learner's figures (the bootstrap's modules, families and markers). */
export interface LearnerFigures {
	Modules: number;
	Families: number;
	Markers: number;
}

/** The workspace family's figures (the navigation tools and the packages). */
export interface WorkspaceFigures {
	Tools: number;
	Packages: number;
}

/** The policy block's figures (the action keys, the defaults and the owners). */
export interface PolicyFigures {
	Actions: number;
	Auto: number;
	Approve: number;
	Packages: number;
}

/** The client family's figures (the packages and the panel's adapters). */
export interface ClientFigures {
	Packages: number;
	Adapters: number;
}

/** The suggester family's figures (the pack-driven six, the gate, the learning). */
export interface SuggesterFigures {
	Count: number;
	PackDriven: number;
	Gate: number;
	Learning: number;
}

/** The profile's installed/enabled split: its package.json, a different figure from the patch rows. */
export interface ProfileInstalledFigures {
	/** The @playform dependencies installed in the profile package.json. */
	Dependencies: number;
	/** The @playform rows in `dsh.profile.bundles`. */
	Bundles: number;
	/** The installed packages that are not bundle rows. */
	Inactive: number;
	/** The installed-not-enabled package names (the @playform/ scope stripped). */
	Names: string[];
}

/** The profile's figures (the @playform rows, the enabled ones, the factory, the installed split). */
export interface ProfileFigures {
	Rows: number;
	Enabled: number;
	Factory: number;
	Installed: ProfileInstalledFigures | null;
}

/** The delivery census's figures (the 2026-10-22 delivery and the completion program). */
export interface DeliveryFigures {
	/** The new Classic plugins the delivery added, or null. */
	NewClassic: number | null;
	/** The ETS twins generated for the delivery, or null. */
	ETSTwins: number | null;
	/** The completion program's two libraries, or null. */
	Libraries: number | null;
	/** The approved re-specs, or null. */
	Respecs: number | null;
}

/** The direct dependents of the two shared packages (the dependency graph's fan-in). */
export interface DependentsFigures {
	/** The Classic packages declaring @playform/lib-dsh-core. */
	CoreClassic: number;
	/** The EffectTS packages declaring @playform/ets-lib-dsh-core. */
	CoreEffectTS: number;
	/** The Classic packages declaring @playform/plugin-dsh-factory. */
	Factory: number;
	/** The Classic packages that declare neither the factory nor are the factory itself. */
	FactoryNonConsumers: string[];
}

/** One catalog entry: a new Classic package's facts, read from its package.json and README/SCHEME. */
export interface PackageEntry {
	/** The package directory under Classic/packages. */
	name: string;
	/** The npm package name without the @playform/ scope. */
	title: string;
	/** The role prefix: lib, plugin, hook or client. */
	kind: "lib" | "plugin" | "hook" | "client";
	/** The package.json version. */
	version: string;
	/** The ets-* twin's directory name when the EffectTS tree carries one, else null. */
	twin: string | null;
	/** One concise sentence: the package.json description's first sentence, or null. */
	role: string | null;
	/** The standard ledger path: ~/.dsh/playform/<title>.log. */
	ledger: string;
	/** The first activation line the README or SCHEME documents (byte-exact), or null. */
	activation: string | null;
	/** The README's first prose paragraph (line breaks joined, three sentences), or null. */
	summary: string | null;
	/** The README's top-level headings (##; the ### level when the README has no ##). */
	sections: string[];
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
function ReadJSON(Path: string): any {
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

/** List a directory's file names (sorted), or null. */
function ReadFiles(Path: string): string[] | null {
	try {
		return readdirSync(Path, { withFileTypes: true })
			.filter((Entry) => Entry.isFile())
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
		const Package = ReadJSON(join(Dir, PackageDir, "package.json"));
		if (!Package || typeof Package.version !== "string") return [];
		const Pin = Package.dependencies?.["effect"] ?? Package.peerDependencies?.["effect"] ?? null;
		return [
			{
				Dir: PackageDir,
				Name: String(Package.name ?? PackageDir),
				Version: Package.version,
				Effect: typeof Pin === "string" ? Pin : null,
				Dependencies: Object.keys(Package.dependencies ?? {}),
				Description: typeof Package.description === "string" ? Package.description : null,
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
 * "**core 15 / factory 53 / ... / tool-coach 129** - live as per-test
 * folders ..." (the restructure layout; the retired "live in this
 * directory" spelling accepted as a fallback), em-dash or hyphen separated.
 * Returns null when the line is not found.
 */
function ReadSmokeManifest(Tree: string): Record<string, number> | null {
	const Text = ReadText(join(Root, Tree, "smokes", "README.md"));
	if (!Text) return null;
	const Match =
		Text.match(/\*\*([^*]+)\*\* [\u2014-] live as per-test/) ??
		Text.match(/\*\*([^*]+)\*\* [\u2014-] live in this/);
	if (!Match) return null;
	const Counts: Record<string, number> = {};
	for (const [, Suite, Count] of Match[1].matchAll(/([\w-]+) (\d+)/g)) {
		Counts[Suite] = Number(Count);
	}
	return Counts;
}

/**
 * Sum one tree's per-folder smoke READMEs - the arbiter's count. Every
 * Source/Test/<folder>/README.md carries "## Expected count" followed by
 * "<N> PASS."; the folder count is the suite count and the sum is the
 * check count. A folder without a parseable count is skipped (the runner
 * would fail it), and a tree with no parseable folder returns null so the
 * documented fallback serves.
 */
function ReadSuiteTree(Tree: string): SuiteTree | null {
	const Packages = ReadDirs(join(Root, Tree, "packages"));
	if (!Packages) return null;
	const PerPackage: Record<string, SuiteFolder> = {};
	let Folders = 0;
	let Checks = 0;
	for (const Package of Packages) {
		const Test = join(Root, Tree, "packages", Package, "Source", "Test");
		const FolderNames = ReadDirs(Test);
		if (!FolderNames) continue;
		let PackageFolders = 0;
		let PackageChecks = 0;
		for (const Folder of FolderNames) {
			const Readme = ReadText(join(Test, Folder, "README.md"));
			if (!Readme) continue;
			const Index = Readme.indexOf("## Expected count");
			if (Index < 0) continue;
			const Match = /(\d+)\s*PASS/.exec(Readme.slice(Index));
			if (!Match) continue;
			PackageFolders += 1;
			PackageChecks += Number(Match[1]);
		}
		if (PackageFolders === 0) continue;
		PerPackage[Package] = { Folders: PackageFolders, Checks: PackageChecks };
		Folders += PackageFolders;
		Checks += PackageChecks;
	}
	return Folders > 0 ? { Folders, Checks, PerPackage } : null;
}

/** The per-suite keys: the Content pair key, the Classic package, the manifest name. */
const SuiteSources = [
	["Core", "lib-dsh-core", "core"],
	["Factory", "plugin-dsh-factory", "factory"],
	["Governor", "hook-dsh-package-governor", "governor"],
	["Pinner", "hook-dsh-package-pinner", "pinner"],
	["Cargo", "hook-dsh-cargo-governor", "cargo"],
	["Dash", "hook-dsh-normalize-dash", "normalize-dash"],
	["Quotes", "hook-dsh-normalize-quotes", "quotes"],
	["Ellipsis", "hook-dsh-normalize-ellipsis", "ellipsis"],
	["Spaces", "hook-dsh-normalize-spaces", "spaces"],
	["Invisible", "hook-dsh-normalize-invisible", "invisible"],
	["Fullwidth", "hook-dsh-normalize-fullwidth", "fullwidth"],
	["File", "plugin-dsh-normalize-file", "normalize-file"],
	["CCR", "hook-dsh-ccr", "ccr"],
	["Coach", "hook-dsh-tool-coach", "tool-coach"],
] as const;

const ClassicPackages = ReadTree("Classic");
const EffectTSPackages = ReadTree("EffectTS");
const ClassicSmoke = ReadSmokeManifest("Classic");
const EffectTSSmoke = ReadSmokeManifest("EffectTS");
const ClassicSuiteTree = ReadSuiteTree("Classic");
const EffectTSSuiteTree = ReadSuiteTree("EffectTS");

/** The per-suite pairs: the folder sums, the manifest as the secondary source. */
const SuitePairs: Partial<Record<(typeof SuiteSources)[number][0], SuitePair>> = {};
for (const [Key, Dir, Manifest] of SuiteSources) {
	const ClassicCount =
		ClassicSuiteTree?.PerPackage[Dir]?.Checks ?? ClassicSmoke?.[Manifest];
	const EffectTSCount =
		EffectTSSuiteTree?.PerPackage[`ets-${Dir}`]?.Checks ?? EffectTSSmoke?.[Manifest];
	if (typeof ClassicCount === "number" && typeof EffectTSCount === "number") {
		SuitePairs[Key] = { Classic: ClassicCount, EffectTS: EffectTSCount };
	}
}

/** The package census: the two release trees' directory counts. */
const PackageCounts = {
	Classic: ClassicPackages.length || null,
	EffectTS: EffectTSPackages.length || null,
};

/** The smoke-folder census: the two trees' per-test folder counts. */
const SuiteCensus = {
	Classic: ClassicSuiteTree?.Folders ?? null,
	EffectTS: EffectTSSuiteTree?.Folders ?? null,
};

/** The release version: the mode of the release packages' versions. */
function ReadRelease(): { Mode: string | null; Outliers: { Dir: string; Version: string }[] } {
	const Versions = [...ClassicPackages, ...EffectTSPackages].map((Package) => Package.Version);
	const Tally = new Map<string, number>();
	for (const Version of Versions) Tally.set(Version, (Tally.get(Version) ?? 0) + 1);
	let Mode: string | null = null;
	let Best = 0;
	for (const [Version, Count] of Tally) {
		if (Count > Best) {
			Best = Count;
			Mode = Version;
		}
	}
	// A tie is not a release identity: serve the documented fallback.
	if (Mode === null || [...Tally.values()].filter((Count) => Count === Best).length > 1) {
		return { Mode: null, Outliers: [] };
	}
	const Outliers = [...ClassicPackages, ...EffectTSPackages]
		.filter((Package) => Package.Version !== Mode)
		.map((Package) => ({ Dir: Package.Dir, Version: Package.Version }));
	return { Mode, Outliers };
}

const Release = ReadRelease();

/** The panel family's version: the release's one outlier (0.2.0). */
const PanelFamily =
	ClassicPackages.find((Package) => Package.Dir === "client-dsh-panel-family")?.Version ?? null;

/** The effect pin: the unanimous non-null pin, and how many packages carry it. */
const EffectPins = EffectTSPackages.map((Package) => Package.Effect).filter(
	(Pin): Pin is string => typeof Pin === "string",
);
const Effect = Unanimous(EffectPins);

/** The ETS twins: the EffectTS packages minus the base, each with a Classic twin. */
const Twins =
	EffectTSPackages.filter(
		(Package) =>
			Package.Dir !== "ets-base-dsh" &&
			existsSync(
				join(Root, "Classic", "packages", Package.Dir.replace(/^ets-/, ""), "package.json"),
			),
	).length || null;

/** The libraries: the Classic lib-* packages (core, trace, pack, workspace-live). */
const Libraries = ClassicPackages.filter((Package) => Package.Dir.startsWith("lib-")).length || null;

/** The factory's callable-method count: the SCHEME's §2 method sections + §2.7. */
function ReadMethodCount(): number | null {
	const Scheme = ReadText(join(Root, "Classic", "packages", "plugin-dsh-factory", "SCHEME.md"));
	if (!Scheme) return null;
	// §2.19 documents the module-level Policy()/Decide() block, not a method.
	const Sections = [...Scheme.matchAll(/^### 2\.\d+ .*$/gm)]
		.map((Match) => Match[0])
		.filter((Heading) => !/MODULE-LEVEL/.test(Heading));
	return Sections.length > 0 ? Sections.length + 1 : null;
}

/** The trace bus: the vocabulary, the envelope, the ring and the service. */
function ReadTrace(): TraceFigures | null {
	const Library = join(Root, "Classic", "packages", "lib-dsh-trace", "Source");
	const Names = ReadText(join(Library, "Variable", "Names.ts"));
	const Envelope = ReadText(join(Library, "Interface", "Envelope.ts"));
	const Bound = ReadText(join(Library, "Variable", "Bound.ts"));
	const Adapter = ReadText(join(Library, "Interface", "Adapter.ts"));
	const Service = ReadText(
		join(Root, "Classic", "packages", "plugin-dsh-factory", "Source", "Interface", "Trace.ts"),
	);
	if (!Names || !Envelope || !Bound || !Adapter || !Service) return null;
	// The event names are the "domain/name" string values (the service name is not one).
	const Events = [...Names.matchAll(/^\t[A-Za-z]+: "[a-z]+\/[a-z]+",$/gm)].length;
	const EnvelopeFields = [...Envelope.matchAll(/^\t[A-Za-z]+\??: /gm)].length;
	const Ring = Number(Bound.match(/export default (\d+);/)?.[1]);
	const ServiceMethods =
		[...Adapter.matchAll(/^\t[A-Za-z]+\(/gm)].length +
		[...Service.matchAll(/^\t[A-Za-z]+\(/gm)].length;
	const Adapters = ClassicPackages.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source", "Trace")),
	).length;
	if (!Events || !EnvelopeFields || !Ring || !ServiceMethods || !Adapters) return null;
	return { Events, EnvelopeFields, Ring, Service: ServiceMethods, Adapters };
}

/** The pack layer: the built-in pack's families and their domains. */
function ReadPack(): PackFigures | null {
	const Builtin = ReadText(
		join(Root, "Classic", "packages", "lib-dsh-pack", "Source", "Variable", "Builtin.ts"),
	);
	if (!Builtin) return null;
	const Keys = [...Builtin.matchAll(/^\t\t"([a-z]+)\/[A-Za-z]+": \{/gm)];
	const Families = Keys.length;
	const Domains = new Set(Keys.map((Match) => Match[1])).size;
	return Families > 0 && Domains > 0 ? { Families, Domains } : null;
}

/** The learner: the bootstrap's modules, its family table and its marker ladder. */
function ReadLearner(): LearnerFigures | null {
	const Learn = join(
		Root,
		"Classic",
		"packages",
		"hook-dsh-convention-suggester",
		"Source",
		"Function",
		"Learn",
	);
	const Modules = (ReadFiles(Learn) ?? []).filter((File) => File.endsWith(".ts")).length;
	const Families = (ReadText(join(Learn, "Families.ts")) ?? "").match(/Add\("/g)?.length ?? 0;
	const Order = /const Order = \[([^\]]+)\]/.exec(ReadText(join(Learn, "Signature.ts")) ?? "");
	const Markers = Order ? Order[1].split(",").length : 0;
	return Modules > 0 && Families > 0 && Markers > 0 ? { Modules, Families, Markers } : null;
}

/** The workspace tools: the registered `workspace_*` tool names. */
function ReadWorkspace(): WorkspaceFigures | null {
	const Function = join(Root, "Classic", "packages", "plugin-dsh-workspace", "Source", "Function");
	const Tools = (ReadFiles(Function) ?? [])
		.filter((File) => File.endsWith(".ts"))
		.reduce((Sum, File) => Sum + ((ReadText(join(Function, File)) ?? "").match(/name: "workspace_/g)?.length ?? 0), 0);
	const Packages = ClassicPackages.filter((Package) => Package.Dir.includes("workspace")).length;
	return Tools > 0 && Packages > 0 ? { Tools, Packages } : null;
}

/** The policy block: the factory's defaults and the packages carrying the block. */
function ReadPolicy(): PolicyFigures | null {
	const Defaults = ReadText(
		join(Root, "Classic", "packages", "plugin-dsh-factory", "Source", "Variable", "Policy.ts"),
	);
	if (!Defaults) return null;
	const Keys = [...Defaults.matchAll(/^\t([A-Za-z]+): "(auto|approve)",$/gm)];
	const Actions = Keys.length;
	const Auto = Keys.filter((Match) => Match[2] === "auto").length;
	const Approve = Keys.filter((Match) => Match[2] === "approve").length;
	const Packages = ClassicPackages.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source", "Test", "Policy-Defaults")),
	).length;
	return Actions > 0 ? { Actions, Auto, Approve, Packages } : null;
}

/** The storage domains: the config defaults plus the code-declared domain names. */
function ReadStorageDomains(): number | null {
	const Domains = new Set<string>();
	for (const Package of ClassicPackages) {
		const Config = ReadText(
			join(Root, "Classic", "packages", Package.Dir, "Source", "Variable", "Config.ts"),
		);
		if (Config) {
			for (const [, Name] of Config.matchAll(/domain:\s*Schema\.[^\n]*default\("([^"]+)"\)/g)) {
				Domains.add(Name);
			}
		}
		for (const File of ["Storage.ts", "Open.ts"]) {
			const Text = ReadText(join(Root, "Classic", "packages", Package.Dir, "Source", "Function", File));
			if (!Text) continue;
			for (const [, Name] of Text.matchAll(
				/Domain\.defineDomain\(\{[\s\S]{0,400}?name:\s*"([a-z][a-z0-9_]*)"/g,
			)) {
				Domains.add(Name);
			}
		}
	}
	return Domains.size || null;
}

/** The client family: the client packages and the panel's adapter manifests. */
function ReadClient(): ClientFigures | null {
	const Packages = ClassicPackages.filter((Package) => Package.Dir.startsWith("client-dsh-")).length;
	const Adapters = (
		ReadFiles(
			join(
				Root,
				"Classic",
				"packages",
				"client-dsh-panel-family",
				"Source",
				"Variable",
				"Reference",
			),
		) ?? []
	).filter((File) => File.endsWith(".ts")).length;
	return Packages > 0 && Adapters > 0 ? { Packages, Adapters } : null;
}

/** The suggester family: the count, the pack-driven six, the gate and the learning. */
function ReadSuggesters(): SuggesterFigures | null {
	const Suggesters = ClassicPackages.filter((Package) => Package.Dir.endsWith("-suggester"));
	const PackDriven = Suggesters.filter((Package) => {
		const Manifest = ReadJSON(join(Root, "Classic", "packages", Package.Dir, "package.json"));
		return Boolean(
			Manifest?.dependencies?.["@playform/lib-dsh-pack"] ??
				Manifest?.peerDependencies?.["@playform/lib-dsh-pack"],
		);
	}).length;
	const Gate = ClassicPackages.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source", "Test", "Workspace-Gate")),
	).length;
	const Learning = ClassicPackages.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source", "Test", "Learning-Loop")),
	).length;
	return Suggesters.length > 0 ? { Count: Suggesters.length, PackDriven, Gate, Learning } : null;
}

/**
 * The harness profile: the @playform rows of the harness home's profile
 * patches and the installed/enabled split of its package.json. The site's
 * ONE source outside the monorepo - the desktop profile is the live one,
 * picked by its @playform row count; a machine without a profile returns
 * null and Content.ts serves the documented fallback.
 */
function ReadProfile(): ProfileFigures | null {
	const Home = process.env.DSH_HOME || join(homedir(), ".dsh");
	const Profiles = ReadDirs(join(Home, "profiles"));
	if (!Profiles) return null;
	let Best: ProfileFigures | null = null;
	for (const Profile of Profiles) {
		const Text = ReadText(join(Home, "profiles", Profile, "cordis.patch.yml"));
		if (!Text) continue;
		const Rows = Text.split(/\n- id: /)
			.slice(1)
			.filter((Block) => /^  name: "@playform\//m.test(Block));
		if (Rows.length === 0) continue;
		const Manifest = ReadJSON(join(Home, "profiles", Profile, "package.json"));
		const Dependencies = Object.keys(Manifest?.dependencies ?? {}).filter((Name) =>
			Name.startsWith("@playform/"),
		);
		const Bundles = (Array.isArray(Manifest?.dsh?.profile?.bundles)
			? Manifest.dsh.profile.bundles
			: []
		).filter((Name: unknown): Name is string => typeof Name === "string" && Name.startsWith("@playform/"));
		const Inactive = Dependencies.filter((Name) => !Bundles.includes(Name));
		const Installed =
			Dependencies.length > 0
				? {
						Dependencies: Dependencies.length,
						Bundles: Bundles.length,
						Inactive: Inactive.length,
						Names: Inactive.map((Name) => Name.replace(/^@playform\//, "")),
					}
				: null;
		if (Best === null || Rows.length > Best.Rows) {
			Best = {
				Rows: Rows.length,
				Enabled: Rows.filter((Block) => /^\s+enabled: true$/m.test(Block)).length,
				Factory: Rows.filter((Block) => !/^\s+enabled:/m.test(Block)).length,
				Installed,
			};
		}
	}
	return Best;
}

/**
 * The delivery census (2026-10-22): the new Classic plugins and their ETS
 * twins (PLUGIN-FAMILY.md's sentence), the completion's two libraries (the
 * same paragraph) and the eleven approved re-specs (the Completion-Spec's
 * table). A missing document leaves the field null and the fallback serves.
 */
function ReadDelivery(): DeliveryFigures | null {
	const Registry = ReadText(join(Root, "Documentation", "Plugins", "PLUGIN-FAMILY.md"));
	const Spec = ReadText(join(Root, "Documentation", "Plans", "Completion-Spec", "00-OVERVIEW.md"));
	if (!Registry && !Spec) return null;
	const TwinLine = Registry?.match(/(\d+) of the (\d+) packages added 2026-10-22 have ETS twins/);
	const LibraryLine = Registry?.match(
		/The two libraries of the completion program - ([\s\S]+?) - now have/,
	);
	const RespecRows = Spec
		? [...Spec.matchAll(/^\| ((?:hook|plugin|client)-dsh-[a-z0-9-]+)\s/gm)].length
		: 0;
	return {
		NewClassic: TwinLine ? Number(TwinLine[2]) : null,
		ETSTwins: TwinLine ? Number(TwinLine[1]) : null,
		Libraries: LibraryLine
			? [...LibraryLine[1].matchAll(/`lib-dsh-[a-z0-9-]+`/g)].length || null
			: null,
		Respecs: RespecRows > 0 ? RespecRows : null,
	};
}

/**
 * The direct dependents of the two shared packages: every package.json that
 * declares the dependency by its exact npm name. The core has two names (the
 * Classic @playform/lib-dsh-core and the EffectTS @playform/ets-lib-dsh-core);
 * the factory's non-consumers are the Classic packages that declare neither
 * the factory nor are the factory itself.
 */
function ReadDependents(): DependentsFigures | null {
	if (ClassicPackages.length === 0 || EffectTSPackages.length === 0) return null;
	const Declares = (Packages: TreePackage[], Name: string): number =>
		Packages.filter((Package) => Package.Dependencies.includes(Name)).length;
	return {
		CoreClassic: Declares(ClassicPackages, "@playform/lib-dsh-core"),
		CoreEffectTS: Declares(EffectTSPackages, "@playform/ets-lib-dsh-core"),
		Factory: Declares(ClassicPackages, "@playform/plugin-dsh-factory"),
		FactoryNonConsumers: ClassicPackages.filter(
			(Package) =>
				Package.Dir !== "plugin-dsh-factory" &&
				!Package.Dependencies.includes("@playform/plugin-dsh-factory"),
		).map((Package) => Package.Dir),
	};
}

/** The storage domains' figures: the distinct named KV domains. */
function ReadStorage(): { Domains: number } | null {
	const Domains = ReadStorageDomains();
	return Domains === null ? null : { Domains };
}

/**
 * The fifteen legacy modules with hand-authored detail pages
 * (Site/Source/pages/plugins/<name>.astro). The catalog covers every OTHER
 * Classic package; the list is pinned because the detail lane ADDS pages for
 * the new packages - deriving the set from the pages directory would empty
 * the catalog.
 */
const LegacyPackages = [
	"lib-dsh-core",
	"plugin-dsh-factory",
	"hook-dsh-package-governor",
	"hook-dsh-package-pinner",
	"hook-dsh-cargo-governor",
	"hook-dsh-normalize-dash",
	"hook-dsh-normalize-quotes",
	"hook-dsh-normalize-ellipsis",
	"hook-dsh-normalize-spaces",
	"hook-dsh-normalize-invisible",
	"hook-dsh-normalize-fullwidth",
	"plugin-dsh-normalize-file",
	"hook-dsh-ccr",
	"hook-dsh-tool-coach",
	"hook-dsh-live-containers",
];

/** The role kind from the package directory's prefix, or null outside the four roles. */
function KindOf(Dir: string): PackageEntry["kind"] | null {
	switch (true) {
		case Dir.startsWith("lib-"):
			return "lib";
		case Dir.startsWith("plugin-"):
			return "plugin";
		case Dir.startsWith("hook-"):
			return "hook";
		case Dir.startsWith("client-"):
			return "client";
		default:
			return null;
	}
}

/** The first sentence of a text: a sentence end followed by a capital or an opener. */
function FirstSentence(Text: string | null): string | null {
	if (!Text) return null;
	const Parts = Text.trim().split(/(?<=[.!?])\s+(?=[A-Z(\[*_"])/);
	const First = Parts[0]?.trim() ?? "";
	return First || null;
}

/** The first N sentences of a paragraph (the same sentence boundary). */
function FirstSentences(Text: string, Count: number): string {
	const Parts = Text.split(/(?<=[.!?])\s+(?=[A-Z(\[*_"])/);
	return Parts.slice(0, Count).join(" ").trim();
}

/**
 * The README's first prose paragraph, verbatim: the H1, the badges, the
 * italic tagline block, the images and the tables are skipped; a blockquote
 * note contributes its first paragraph (the [!NOTE] marker dropped); the
 * paragraph's line breaks are joined with spaces and the result is bounded
 * to three sentences. Null when the README has no prose paragraph.
 */
function FirstParagraph(Readme: string | null): string | null {
	if (!Readme) return null;
	const Lines = Readme.split("\n");
	const Skip = (Line: string): boolean =>
		/^\s*$/.test(Line) ||
		/^#/.test(Line) ||
		/^!\[/.test(Line) ||
		/^\[!\[/.test(Line) ||
		/^<[a-z]/i.test(Line) ||
		/^---\s*$/.test(Line) ||
		/^\|/.test(Line) ||
		/^```/.test(Line);
	let Index = 0;
	while (Index < Lines.length && Skip(Lines[Index])) Index++;
	// The boilerplate tagline (an italic-only line) is not the summary.
	if (Index < Lines.length && /^_.+_$/.test(Lines[Index].trim())) {
		Index++;
		while (Index < Lines.length && Skip(Lines[Index])) Index++;
	}
	const Block: string[] = [];
	if (Index < Lines.length && /^>/.test(Lines[Index])) {
		while (Index < Lines.length && /^>/.test(Lines[Index])) {
			const Content = Lines[Index].replace(/^>\s?/, "").trim();
			if (/^\[!/.test(Content)) {
				Index++;
				continue;
			}
			if (!Content) {
				if (Block.length > 0) break;
				Index++;
				continue;
			}
			Block.push(Content);
			Index++;
		}
	} else {
		while (Index < Lines.length && !/^\s*$/.test(Lines[Index])) {
			Block.push(Lines[Index].trim());
			Index++;
		}
	}
	const Paragraph = Block.join(" ").replace(/\s+/g, " ").trim();
	return Paragraph ? FirstSentences(Paragraph, 3) : null;
}

/**
 * The first activation line a README/SCHEME documents: the backticked
 * segment when the line quotes one (the prose and table forms), the table
 * cell that carries it, or the plain line with the list marker stripped.
 * The line is kept byte-exact to the document. Null when neither document
 * carries an "activated (" line.
 */
function ActivationLine(Text: string | null): string | null {
	if (!Text) return null;
	for (const Line of Text.split("\n")) {
		if (!Line.includes("activated (")) continue;
		const Backticked = /`([^`]*activated \([^`]*)`/.exec(Line);
		if (Backticked) return Backticked[1].trim();
		if (/^\s*\|/.test(Line)) {
			const Cell = Line.split("|")
				.map((Part) => Part.trim())
				.find((Part) => Part.includes("activated ("));
			if (Cell) return Cell;
		}
		return Line.replace(/^\s*[-*]\s+/, "").replace(/\*\*/g, "").trim();
	}
	return null;
}

/** The README's top-level headings (##; the ### level when the README has no ##). */
function Sections(Readme: string | null): string[] {
	if (!Readme) return [];
	const Lines = Readme.split("\n");
	const Top = Lines.filter((Line) => /^## /.test(Line)).map((Line) => Line.replace(/^## /, "").trim());
	if (Top.length > 0) return Top;
	return Lines.filter((Line) => /^### /.test(Line)).map((Line) => Line.replace(/^### /, "").trim());
}

/**
 * The catalog: one entry per new Classic package (every Classic package
 * without a hand-authored detail page), each field read from the tree - the
 * package.json (name/version/description), the README (summary, sections,
 * the activation line) and the EffectTS tree (the twin). A directory outside
 * the four role prefixes leaves the catalog to the documented fallback, so
 * the Drift surfaces it.
 */
function ReadPackageCatalog(): PackageEntry[] | null {
	if (ClassicPackages.length === 0) return null;
	const EffectTSNames = new Set(EffectTSPackages.map((Package) => Package.Dir));
	const NewPackages = ClassicPackages.filter((Package) => !LegacyPackages.includes(Package.Dir));
	if (NewPackages.length === 0) return null;
	const Catalog: PackageEntry[] = [];
	for (const Package of NewPackages) {
		const Kind = KindOf(Package.Dir);
		if (Kind === null) return null;
		const Readme = ReadText(join(Root, "Classic", "packages", Package.Dir, "README.md"));
		const Scheme = ReadText(join(Root, "Classic", "packages", Package.Dir, "SCHEME.md"));
		const Title = Package.Name.replace(/^@playform\//, "");
		Catalog.push({
			name: Package.Dir,
			title: Title,
			kind: Kind,
			version: Package.Version,
			twin: EffectTSNames.has(`ets-${Package.Dir}`) ? `ets-${Package.Dir}` : null,
			role: FirstSentence(Package.Description),
			ledger: `~/.dsh/playform/${Title}.log`,
			activation: ActivationLine(Readme) ?? ActivationLine(Scheme),
			summary: FirstParagraph(Readme),
			sections: Sections(Readme),
		});
	}
	return Catalog;
}

/** One package's smoke folders, or null when the package has none. */
function LibrarySuite(Dir: string): SuiteFolder | null {
	return ClassicSuiteTree?.PerPackage[Dir] ?? null;
}

/** The build-time snapshot of the monorepo's real values (null = no live source). */
export const Live = {
	/** The monorepo root the build read from. */
	Root,
	/** The release trees' packages, each with its actual package.json version. */
	TreePackages: {
		/** The historical boilerplate tree (absent in the current layout). */
		Boilerplate: ReadTree("Boilerplate"),
		Classic: ClassicPackages,
		EffectTS: EffectTSPackages,
	},
	/** The npm names of the Classic release packages. */
	PackageNames: ClassicPackages.map((Package) => Package.Name),
	/** The package census: 54 Classic + 48 EffectTS. */
	PackageCounts,
	/** The smoke-folder census: 271 Classic + 242 EffectTS. */
	SuiteCensus,
	/** The mode release version of the 100 packages at 0.1.0. */
	Release: Release.Mode,
	/** The packages whose version differs from the mode (the panel family). */
	ReleaseOutliers: Release.Outliers,
	/** The panel family's version (the release's one outlier). */
	PanelFamily,
	/** The unanimous effect dependency pin of the packages that carry one. */
	Effect,
	/** The number of EffectTS packages that carry the effect pin. */
	EffectPinned: EffectPins.length || null,
	/** The per-tree smoke folders: the folder counts and the expected-count sums. */
	SuiteTree: {
		Classic: ClassicSuiteTree,
		EffectTS: EffectTSSuiteTree,
	},
	/** The per-suite smoke-count pairs from the per-folder READMEs. */
	SuitePairs,
	/** The number of Classic release packages. */
	Packages: ClassicPackages.length || null,
	/** The ETS twins (the 48 EffectTS packages minus ets-base-dsh). */
	Twins,
	/** The four libraries (the Classic lib-* packages). */
	Libraries,
	/** The normalize packages (the six stream flavors + the file tool). */
	Normalizers:
		ClassicPackages.filter((Package) => /(^|-)normalize(-|$)/.test(Package.Dir)).length || null,
	/** The stream-flavor hooks (the normalize packages minus the file tool). */
	StreamFlavors:
		ClassicPackages.filter(
			(Package) =>
				/(^|-)normalize(-|$)/.test(Package.Dir) &&
				Package.Dir !== "plugin-dsh-normalize-file",
		).length || null,
	/** The factory's callable-method count, from the SCHEME's §2 method sections. */
	Methods: ReadMethodCount(),
	/** The trace bus's figures (the vocabulary, the envelope, the ring, the adapters). */
	Trace: ReadTrace(),
	/** The pack layer's figures (the built-in pack's families over its domains). */
	Pack: ReadPack(),
	/** The learner's figures (the modules, the derivable families, the markers). */
	Learner: ReadLearner(),
	/** The workspace tools' figures (the five tools and the package count). */
	Workspace: ReadWorkspace(),
	/** The policy block's figures (the action keys, the defaults, the owners). */
	Policy: ReadPolicy(),
	/** The storage domains' count (the config defaults + the code-declared names). */
	Storage: ReadStorage(),
	/** The client family's figures (the packages and the panel's adapters). */
	Client: ReadClient(),
	/** The suggester family's figures (the gate and the learning layer). */
	Suggesters: ReadSuggesters(),
	/** The harness profile's figures (49 rows, 48 enabled, the factory, the installed split). */
	Profile: ReadProfile(),
	/** The 2026-10-22 delivery census (the new Classic plugins, the ETS twins, the libraries, the re-specs). */
	Delivery: ReadDelivery(),
	/** The direct dependents of the two shared packages (the dependency graph's fan-in). */
	Dependents: ReadDependents(),
	/** The new Classic packages' catalog (every package without a hand-authored detail page). */
	Package: ReadPackageCatalog(),
	/** One package's smoke folders by directory (the library checks). */
	LibrarySuite,
};
