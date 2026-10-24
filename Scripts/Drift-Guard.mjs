// Drift-Guard.mjs - the content-integrity check: does what the site RENDERS
// still match what the repo IS? Re-derives every dynamic figure the site's
// content library (Source/Library/Content.ts + Source/Library/Live.ts)
// publishes, from the primary sources, and compares:
//
//   - the per-suite smoke counts and the family totals: the per-folder smoke
//     READMEs' "## Expected count" sums (the runner's arbiter,
//     Maintain/Run-Smokes.mjs) vs Counts and Totals. The smoke READMEs'
//     manifest lines are checked for integrity and their lag against the
//     folders is reported as a NOTE (the folder sums are the figure);
//   - the census: the package directories (102 = 54 + 48), the smoke folders
//     (513 = 271 + 242), the 47 ETS twins and the four libraries;
//   - the release versions: the mode of every package.json version in both
//     trees vs Versions.Release, the panel family's outlier (0.2.0) vs
//     Versions.PanelFamily, and the effect pin of the packages that carry one
//     vs Versions.Effect (the base and eleven others; the rest ride
//     ets-base-dsh);
//   - the factory's method ledger: the SCHEME's §2 method sections (the 18
//     sections + the shared §2.7; §2.19 is the module-level policy block);
//   - the completion's new surfaces, each re-derived from its own source:
//     the trace vocabulary/envelope/ring/service/adapters, the pack's
//     families and domains, the learner's modules/families/markers, the
//     workspace tools, the policy block's actions and owners, the named
//     storage domains, the client adapters, the suggesters' gate and
//     learning layer, the delivery census (PLUGIN-FAMILY.md and the
//     Completion-Spec's re-spec table), the harness profile's patch rows
//     plus its installed/enabled split, and the direct dependents (the
//     package.json dependency names: the core's Classic/EffectTS fan-in and
//     the factory's Classic dependents);
//   - the package catalog: every Classic package without a hand-authored
//     detail page - the name, title, kind, version, twin, ledger and the
//     README/SCHEME-derived role, activation line, summary paragraph and
//     top-level headings;
//   - the name forms: the post-splice naming under the role-prefix contract
//     (the Classic tree the plugin-* / hook-* / lib-* / client-* forms, the
//     EffectTS tree the same names under the ets- prefix) - every npm name
//     is @playform/ + its directory, and the stale pre-role forms are gone;
//   - the Live.ts layer: the build-time snapshot equals what this script
//     re-derives (the census, the versions, the pairs, the totals and every
//     completion surface);
//   - the ledger-line samples: every ledger excerpt/string constant the
//     site's pages AND components carry (LedgerExcerpt/LedgerStrings/
//     LedgerLines/TrapLines/JournalExcerpt) appears byte-exact in the repo's
//     primary sources (the package READMEs, the smoke batteries, the
//     Documentation), and the components' inline claims hold: every concrete
//     ~/.dsh path is the playform ledger or the profile path, and no
//     component composes an npm install command (the family is unpublished);
//   - the built Target's freshness: every Source module has a compiled
//     Target counterpart and no Target file is older than its Source beyond
//     the checkout's measured copy skew - the zero stale/hardcoded drift
//     posture. (A restored/copied tree writes the Source tree after the
//     Target tree uniformly; the guard measures that skew instead of failing
//     every package on it.)
//
// The package lists are read from the filesystem (data-driven), so a later
// rename cannot silently uncheck packages.
//
// Run with `pnpm run Drift` (in Site/) - CI-ready: exit 0 on pass, 1 on any
// drift, with a per-check pass/fail line and the full check count.

import { readFile, stat } from "node:fs/promises";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const Here = dirname(fileURLToPath(import.meta.url));
const SiteRoot = dirname(Here);
const Root = dirname(SiteRoot);

let Failures = 0;
let Checks = 0;
function Check(Label, Expected, Actual) {
	Checks += 1;
	const Ok = JSON.stringify(Expected) === JSON.stringify(Actual);
	if (!Ok) Failures += 1;
	console.log(`${Ok ? "PASS" : "FAIL"}  ${Label}${Ok ? "" : `  (expected ${JSON.stringify(Expected)}, got ${JSON.stringify(Actual)})`}`);
}
function Skip(Label, Reason) {
	console.log(`SKIP  ${Label} (${Reason})`);
}

// --- The content library, parsed as text (no TS compilation needed) ---
const ContentSource = await readFile(join(SiteRoot, "Source/Library/Content.ts"), "utf8");

function ExtractNumber(Pattern) {
	const Match = ContentSource.match(Pattern);
	if (!Match) throw new Error(`Content.ts: pattern not found: ${Pattern}`);
	return Number(Match[1]);
}
function ExtractString(Pattern) {
	const Match = ContentSource.match(Pattern);
	if (!Match) throw new Error(`Content.ts: pattern not found: ${Pattern}`);
	return String(Match[1]);
}

// The fourteen mechanics suites: the Content key, the Classic package
// directory and the smoke README's manifest name.
const SuiteOrder = [
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
];

const Counts = {};
for (const [Key] of SuiteOrder) {
	Counts[Key] = {
		Classic: ExtractNumber(new RegExp(`${Key}: \\{ Classic: (\\d+), EffectTS: \\d+ \\}`)),
		EffectTS: ExtractNumber(new RegExp(`${Key}: \\{ Classic: \\d+, EffectTS: (\\d+) \\}`)),
	};
}
// The fallback shapes: the totals carry their figure in the comment above the
// field ("The CLASSIC total: 3454 checks ..."), so the parse reads the claim.
const TotalsClassic = ExtractNumber(/The CLASSIC total: (\d+) checks/);
const TotalsEffectTS = ExtractNumber(/The EFFECT-TS total: (\d+) checks/);
const Census = {
	Packages: ExtractNumber(/^\tPackages: (\d+),$/m),
	PackagesClassic: ExtractNumber(/^\tPackagesClassic: (\d+),$/m),
	PackagesEffectTS: ExtractNumber(/^\tPackagesEffectTS: (\d+),$/m),
	Suites: ExtractNumber(/^\tSuites: (\d+),$/m),
	SuitesClassic: ExtractNumber(/^\tSuitesClassic: (\d+),$/m),
	SuitesEffectTS: ExtractNumber(/^\tSuitesEffectTS: (\d+),$/m),
	Twins: ExtractNumber(/^\tTwins: (\d+),$/m),
	Libraries: ExtractNumber(/^\tLibraries: (\d+),$/m),
	NewLibraries: ExtractNumber(/^\tNewLibraries: (\d+),$/m),
	Normalizers: ExtractNumber(/^\tNormalizers: (\d+),$/m),
	StreamFlavors: ExtractNumber(/^\tStreamFlavors: (\d+),$/m),
	Roles: ExtractNumber(/^\tRoles: (\d+),$/m),
	Methods: ExtractNumber(/^\tMethods: (\d+),$/m),
};
const Version = {
	Release: ExtractString(/^\t\tRelease: "([^"]+)",$/m),
	Effect: ExtractString(/^\t\tEffect: "([^"]+)",$/m),
	PanelFamily: ExtractString(/^\t\tPanelFamily: "([^"]+)",$/m),
	EffectPinned: ExtractNumber(/^\t\tEffectPinned: (\d+),$/m),
};
const Surface = {
	Trace: /Trace: \{ Events: (\d+), EnvelopeFields: (\d+), Ring: (\d+), Service: (\d+), Adapters: (\d+), Checks: (\d+) \}/.exec(ContentSource),
	Pack: /Pack: \{ Families: (\d+), Domains: (\d+), Layers: (\d+), Folders: (\d+), Checks: (\d+) \}/.exec(ContentSource),
	Learner: /Learner: \{ Modules: (\d+), Families: (\d+), Markers: (\d+) \}/.exec(ContentSource),
	Workspace: /Workspace: \{ Tools: (\d+), Packages: (\d+) \}/.exec(ContentSource),
	Policy: /Policy: \{ Actions: (\d+), Auto: (\d+), Approve: (\d+), Packages: (\d+) \}/.exec(ContentSource),
	Storage: /Storage: \{ Domains: (\d+) \}/.exec(ContentSource),
	Client: /Client: \{ Packages: (\d+), Adapters: (\d+) \}/.exec(ContentSource),
	Suggesters: /Suggesters: \{ Count: (\d+), PackDriven: (\d+), Gate: (\d+), Learning: (\d+) \}/.exec(ContentSource),
	Profile: /Profile: \{ Rows: (\d+), Enabled: (\d+), Factory: (\d+) \}/.exec(ContentSource),
};
for (const [Name, Match] of Object.entries(Surface)) {
	if (!Match) throw new Error(`Content.ts: the ${Name} fallback pattern was not found`);
}
const History = {
	OriginBundles: ExtractNumber(/OriginBundles: (\d+),/),
	OriginChecks: ExtractNumber(/OriginChecks: (\d+),/),
	OriginMethods: ExtractNumber(/OriginMethods: (\d+),/),
	EffectDelta: ExtractNumber(/EffectDelta: (\d+),/),
	Deltas: {
		Core: ExtractNumber(/Deltas: \{ Core: (\d+), Factory: \d+, Governor: \d+ \}/),
		Factory: ExtractNumber(/Deltas: \{ Core: \d+, Factory: (\d+), Governor: \d+ \}/),
		Governor: ExtractNumber(/Deltas: \{ Core: \d+, Factory: \d+, Governor: (\d+) \}/),
	},
};
// The profile's installed/enabled split and the delivery census (both one-line
// fallbacks, parsed by field).
const ProfileInstalled = {
	Dependencies: ExtractNumber(/ProfileInstalled: \{ Dependencies: (\d+), Bundles: \d+, Inactive: \d+, Names: \[/),
	Bundles: ExtractNumber(/ProfileInstalled: \{ Dependencies: \d+, Bundles: (\d+), Inactive: \d+, Names: \[/),
	Inactive: ExtractNumber(/ProfileInstalled: \{ Dependencies: \d+, Bundles: \d+, Inactive: (\d+), Names: \[/),
};
const ProfileInstalledNames = JSON.parse(
	`[${ExtractString(/ProfileInstalled: \{ Dependencies: \d+, Bundles: \d+, Inactive: \d+, Names: \[([^\]]+)\]/)}]`,
);
const Delivery = {
	NewClassic: ExtractNumber(/Delivery: \{ NewClassic: (\d+), ETSTwins: \d+, Libraries: \d+, Respecs: \d+ \}/),
	ETSTwins: ExtractNumber(/Delivery: \{ NewClassic: \d+, ETSTwins: (\d+), Libraries: \d+, Respecs: \d+ \}/),
	Libraries: ExtractNumber(/Delivery: \{ NewClassic: \d+, ETSTwins: \d+, Libraries: (\d+), Respecs: \d+ \}/),
	Respecs: ExtractNumber(/Delivery: \{ NewClassic: \d+, ETSTwins: \d+, Libraries: \d+, Respecs: (\d+) \}/),
};
// The direct dependents (one-line fallback, parsed by field; the non-consumer
// names are a JSON array in the same line).
const Dependents = {
	CoreClassic: ExtractNumber(/Dependents: \{ CoreClassic: (\d+), CoreEffectTS: \d+, Factory: \d+, FactoryNonConsumers: \[/),
	CoreEffectTS: ExtractNumber(/Dependents: \{ CoreClassic: \d+, CoreEffectTS: (\d+), Factory: \d+, FactoryNonConsumers: \[/),
	Factory: ExtractNumber(/Dependents: \{ CoreClassic: \d+, CoreEffectTS: \d+, Factory: (\d+), FactoryNonConsumers: \[/),
};
const DependentsNonConsumers = JSON.parse(
	`[${ExtractString(/Dependents: \{ CoreClassic: \d+, CoreEffectTS: \d+, Factory: \d+, FactoryNonConsumers: \[([^\]]+)\]/)}]`,
);
// The catalog's fallback tuples: [name, kind, version, twin] - the minimal
// fields the fallback carries.
const FallbackPackages = [
	...ContentSource.matchAll(
		/^\t\t\["([a-z0-9-]+)", "(lib|plugin|hook|client)", "([0-9.]+)", (null|"([a-z0-9-]+)")\],$/gm,
	),
].map((Match) => ({ name: Match[1], kind: Match[2], version: Match[3], twin: Match[5] ?? null }));

// --- 0. The trees, read from the filesystem (data-driven) ---
// Directory-only listing, mirroring Live.ts (stray files like .DS_Store
// excluded). Each package's identity comes from its own package.json.
function ListDirs(Path) {
	return readdirSync(Path, { withFileTypes: true })
		.filter((Entry) => Entry.isDirectory())
		.map((Entry) => Entry.name)
		.sort();
}

function ReadText(Path) {
	try {
		return readFileSync(Path, "utf8");
	} catch {
		return null;
	}
}

async function ReadTree(Tree) {
	const Base = join(Root, Tree, "packages");
	const Result = [];
	for (const Dir of ListDirs(Base)) {
		try {
			const Package = JSON.parse(await readFile(join(Base, Dir, "package.json"), "utf8"));
			Result.push({
				Dir,
				Name: String(Package.name ?? Dir),
				Version: Package.version,
				Effect:
					Package.dependencies?.["effect"] ??
					Package.peerDependencies?.["effect"] ??
					null,
				Dependencies: Object.keys(Package.dependencies ?? {}),
				Description: typeof Package.description === "string" ? Package.description : null,
			});
		} catch (Error) {
			Result.push({ Dir, Name: null, Version: null, Effect: null, Dependencies: [], Description: null, Error: String(Error) });
		}
	}
	return Result;
}

const Trees = {
	Classic: await ReadTree("Classic"),
	EffectTS: await ReadTree("EffectTS"),
};

// --- 1. The smoke folders (the runner's arbiter) ---
// The independent re-derivation: every Source/Test/<folder>/README.md carries
// "## Expected count" -> "<N> PASS."; a tree's folder count is its suite count
// and the sum is its check count.
function ReadSuiteTree(Tree) {
	const PerPackage = {};
	let Folders = 0;
	let Checks = 0;
	for (const Dir of ListDirs(join(Root, Tree, "packages"))) {
		const Test = join(Root, Tree, "packages", Dir, "Source", "Test");
		if (!existsSync(Test)) continue;
		let PackageFolders = 0;
		let PackageChecks = 0;
		for (const Folder of ListDirs(Test)) {
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
		PerPackage[Dir] = { Folders: PackageFolders, Checks: PackageChecks };
		Folders += PackageFolders;
		Checks += PackageChecks;
	}
	return { Folders, Checks, PerPackage };
}

const SuiteTrees = {
	Classic: ReadSuiteTree("Classic"),
	EffectTS: ReadSuiteTree("EffectTS"),
};

// 1a. The per-suite pairs: the folder sums (the manifest fills only a gap).
function ParseSmokeReadme(Text) {
	// The restructure moved the fourteen mechanics suites to per-test folders
	// under the packages; the count line now says "live as per-test folders"
	// instead of "live in this directory" (the em dash and the hyphen are both
	// accepted, as in Live.ts).
	const Match =
		Text.match(/\*\*([^*]+)\*\* \u2014 live as per-test/) ||
		Text.match(/\*\*([^*]+)\*\* - live as per-test/) ||
		Text.match(/\*\*([^*]+)\*\* \u2014 live in this directory/) ||
		Text.match(/\*\*([^*]+)\*\* - live in this directory/);
	if (!Match) throw new Error("smoke count line not found");
	const Result = {};
	for (const [, Suite, Count] of Match[1].matchAll(/([\w-]+) (\d+)/g)) {
		Result[Suite] = Number(Count);
	}
	return Result;
}

const Manifests = {
	Classic: ParseSmokeReadme(await readFile(join(Root, "Classic", "smokes/README.md"), "utf8")),
	EffectTS: ParseSmokeReadme(await readFile(join(Root, "EffectTS", "smokes/README.md"), "utf8")),
};

const DerivedPairs = {};
for (const [Key, Dir, Manifest] of SuiteOrder) {
	const ClassicChecks =
		SuiteTrees.Classic.PerPackage[Dir]?.Checks ?? Manifests.Classic[Manifest];
	const EffectTSChecks =
		SuiteTrees.EffectTS.PerPackage[`ets-${Dir}`]?.Checks ?? Manifests.EffectTS[Manifest];
	if (typeof ClassicChecks === "number" && typeof EffectTSChecks === "number") {
		DerivedPairs[Key] = { Classic: ClassicChecks, EffectTS: EffectTSChecks };
	}
}
for (const [Key] of SuiteOrder) {
	Check(`Counts.${Key} = the per-folder README sums`, DerivedPairs[Key], Counts[Key]);
}

// 1b. The totals: the per-tree folder sums.
Check(
	"Totals.Classic = the CLASSIC per-folder README sum",
	SuiteTrees.Classic.Checks,
	TotalsClassic,
);
Check(
	"Totals.EffectTS = the EFFECT-TS per-folder README sum",
	SuiteTrees.EffectTS.Checks,
	TotalsEffectTS,
);

// 1c. The folder census: 271 + 242 = 513.
Check("Counts.SuitesClassic = the CLASSIC folder count", SuiteTrees.Classic.Folders, Census.SuitesClassic);
Check(
	"Counts.SuitesEffectTS = the EFFECT-TS folder count",
	SuiteTrees.EffectTS.Folders,
	Census.SuitesEffectTS,
);
Check(
	"Counts.Suites = both trees' folder count",
	SuiteTrees.Classic.Folders + SuiteTrees.EffectTS.Folders,
	Census.Suites,
);

// 1d. The manifest lines: intact (the fourteen suites) and their lag reported.
for (const Tree of ["Classic", "EffectTS"]) {
	Check(
		`${Tree}/smokes: the manifest line parses the fourteen mechanics suites`,
		14,
		Object.keys(Manifests[Tree]).length,
	);
}
const Lag = [];
for (const [, Dir, Manifest] of SuiteOrder) {
	for (const Tree of ["Classic", "EffectTS"]) {
		const PackageDir = Tree === "Classic" ? Dir : `ets-${Dir}`;
		const FolderChecks = SuiteTrees[Tree].PerPackage[PackageDir]?.Checks;
		const ManifestChecks = Manifests[Tree][Manifest];
		if (typeof FolderChecks === "number" && ManifestChecks !== FolderChecks) {
			Lag.push(`${Tree} ${Manifest} manifest ${ManifestChecks} vs folders ${FolderChecks}`);
		}
	}
}
if (Lag.length > 0) {
	console.log(`NOTE  the smoke README manifest lags the per-folder arbiter: ${Lag.join("; ")}`);
}

// --- 2. The census: packages, twins, libraries, normalizers ---
const PackageTotal = Trees.Classic.length + Trees.EffectTS.length;
Check("Counts.PackagesClassic = the Classic package directories", Trees.Classic.length, Census.PackagesClassic);
Check(
	"Counts.PackagesEffectTS = the EffectTS package directories",
	Trees.EffectTS.length,
	Census.PackagesEffectTS,
);
Check("Counts.Packages = both trees' packages", PackageTotal, Census.Packages);
// The seven Classic packages with no ETS twin (the documented roster).
const NoTwin = [
	"client-dsh-panel-family",
	"client-dsh-panel-family-host",
	"hook-dsh-batch-decision",
	"hook-dsh-comment-filter",
	"plugin-dsh-ingester",
	"plugin-dsh-pass-on",
	"plugin-dsh-pattern",
];
const TwinDirs = Trees.EffectTS.filter((Package) => Package.Dir !== "ets-base-dsh");
Check(
	"Counts.Twins = the EffectTS packages minus ets-base-dsh",
	Trees.EffectTS.length - 1,
	Census.Twins,
);
Check(
	"the ETS twins are the ets- names of the Classic packages with a twin",
	[...Trees.Classic.filter((Package) => !NoTwin.includes(Package.Dir)).map((Package) => `ets-${Package.Dir}`), "ets-base-dsh"].sort(),
	Trees.EffectTS.map((Package) => Package.Dir),
);
Check(
	"the Classic packages without an ETS twin = the documented seven",
	NoTwin,
	Trees.Classic.filter(
		(Package) => !Trees.EffectTS.some((Twin) => Twin.Dir === `ets-${Package.Dir}`),
	).map((Package) => Package.Dir),
);
Check(
	"every ETS twin has its Classic package.json",
	0,
	TwinDirs.filter(
		(Package) => !existsSync(join(Root, "Classic", "packages", Package.Dir.replace(/^ets-/, ""), "package.json")),
	).length,
);
Check(
	"Counts.Libraries = the Classic lib-* packages",
	Trees.Classic.filter((Package) => Package.Dir.startsWith("lib-")).length,
	Census.Libraries,
);
Check(
	"Counts.Normalizers = the normalize-* directories",
	Trees.Classic.filter((Package) => /(^|-)normalize(-|$)/.test(Package.Dir)).length,
	Census.Normalizers,
);
Check(
	"Counts.StreamFlavors = the normalize packages minus the file tool",
	Trees.Classic.filter(
		(Package) => /(^|-)normalize(-|$)/.test(Package.Dir) && Package.Dir !== "plugin-dsh-normalize-file",
	).length,
	Census.StreamFlavors,
);

// --- 3. The release versions ---
const Versions = [...Trees.Classic, ...Trees.EffectTS].map((Package) => Package.Version);
const Tally = new Map();
for (const Version of Versions) Tally.set(Version, (Tally.get(Version) ?? 0) + 1);
let Mode = null;
let Best = 0;
for (const [Version, Count] of Tally) {
	if (Count > Best) {
		Best = Count;
		Mode = Version;
	}
}
Check("Versions.Release = the mode of every package version", Mode, Version.Release);
Check(
	"Versions.PanelFamily = the panel family's version",
	Trees.Classic.find((Package) => Package.Dir === "client-dsh-panel-family")?.Version,
	Version.PanelFamily,
);
const Pins = Trees.EffectTS.map((Package) => Package.Effect).filter((Pin) => typeof Pin === "string");
Check(
	"Versions.Effect = the unanimous effect pin of the packages that carry one",
	[...new Set(Pins)].length === 1 ? Pins[0] : null,
	Version.Effect,
);
Check("Versions.EffectPinned = the packages carrying the effect pin", Pins.length, Version.EffectPinned);
Check(
	"ets-base-dsh carries the effect pin (the shared dependency of the rest)",
	Version.Effect,
	Trees.EffectTS.find((Package) => Package.Dir === "ets-base-dsh")?.Effect,
);
Check(
	"every ETS package without a pin is dependency-free or rides ets-base-dsh",
	0,
	Trees.EffectTS.filter((Package) => {
		if (Package.Effect !== null) return false;
		const Manifest = JSON.parse(
			ReadText(join(Root, "EffectTS", "packages", Package.Dir, "package.json")) ?? "{}",
		);
		const Dependencies = {
			...(Manifest?.dependencies ?? {}),
			...(Manifest?.peerDependencies ?? {}),
		};
		// The pure libraries and the client halves carry no runtime dependency.
		if (Object.keys(Dependencies).length === 0) return false;
		return !Boolean(Dependencies["@playform/ets-base-dsh"]);
	}).length,
);

// --- 4. The factory's method ledger ---
const Scheme = ReadText(join(Root, "Classic", "packages", "plugin-dsh-factory", "SCHEME.md"));
const MethodSections = Scheme
	? [...Scheme.matchAll(/^### 2\.\d+ .*$/gm)]
			.map((Match) => Match[0])
			.filter((Heading) => !/MODULE-LEVEL/.test(Heading))
	: [];
Check(
	"Counts.Methods = the §2 method sections + the shared §2.7",
	MethodSections.length > 0 ? MethodSections.length + 1 : null,
	Census.Methods,
);

// --- 5. The completion's new surfaces ---
// 5a. The trace bus: the vocabulary, the envelope, the ring, the service and
// the adapting plugins.
const TraceSource = {
	Names: ReadText(join(Root, "Classic", "packages", "lib-dsh-trace", "Source/Variable/Names.ts")),
	Envelope: ReadText(join(Root, "Classic", "packages", "lib-dsh-trace", "Source/Interface/Envelope.ts")),
	Bound: ReadText(join(Root, "Classic", "packages", "lib-dsh-trace", "Source/Variable/Bound.ts")),
	Adapter: ReadText(join(Root, "Classic", "packages", "lib-dsh-trace", "Source/Interface/Adapter.ts")),
	Service: ReadText(join(Root, "Classic", "packages", "plugin-dsh-factory", "Source/Interface/Trace.ts")),
};
const TraceDerived = {
	Events: [...(TraceSource.Names ?? "").matchAll(/^\t[A-Za-z]+: "[a-z]+\/[a-z]+",$/gm)].length,
	EnvelopeFields: [...(TraceSource.Envelope ?? "").matchAll(/^\t[A-Za-z]+\??: /gm)].length,
	Ring: Number((TraceSource.Bound ?? "").match(/export default (\d+);/)?.[1]),
	Service:
		[...(TraceSource.Adapter ?? "").matchAll(/^\t[A-Za-z]+\(/gm)].length +
		[...(TraceSource.Service ?? "").matchAll(/^\t[A-Za-z]+\(/gm)].length,
	Adapters: Trees.Classic.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source", "Trace")),
	).length,
};
const TraceChecks = SuiteTrees.Classic.PerPackage["lib-dsh-trace"];
Check("Trace.Events = the vocabulary's event names", TraceDerived.Events, Number(Surface.Trace[1]));
Check("Trace.EnvelopeFields = the envelope's fields", TraceDerived.EnvelopeFields, Number(Surface.Trace[2]));
Check("Trace.Ring = the library's fixed bound", TraceDerived.Ring, Number(Surface.Trace[3]));
Check("Trace.Service = the service methods (emit/on + flush/ring/dispose)", TraceDerived.Service, Number(Surface.Trace[4]));
Check("Trace.Adapters = the plugins with a Source/Trace/ adapter", TraceDerived.Adapters, Number(Surface.Trace[5]));
Check("Trace.Checks = the trace library's smoke sum", TraceChecks?.Checks, Number(Surface.Trace[6]));

// 5b. The pack layer: the built-in families and their domains.
const Builtin = ReadText(join(Root, "Classic", "packages", "lib-dsh-pack", "Source/Variable/Builtin.ts"));
const BuiltinKeys = [...(Builtin ?? "").matchAll(/^\t\t"([a-z]+)\/[A-Za-z]+": \{/gm)];
Check("Pack.Families = the built-in pack's families", BuiltinKeys.length, Number(Surface.Pack[1]));
Check(
	"Pack.Domains = the domains sharing the family map",
	new Set(BuiltinKeys.map((Match) => Match[1])).size,
	Number(Surface.Pack[2]),
);
const PackChecks = SuiteTrees.Classic.PerPackage["lib-dsh-pack"];
Check("Pack.Folders = the pack library's smoke folders", PackChecks?.Folders, Number(Surface.Pack[4]));
Check("Pack.Checks = the pack library's smoke sum", PackChecks?.Checks, Number(Surface.Pack[5]));

// 5c. The learner: the modules, the derivable families, the markers.
const Learn = join(
	Root,
	"Classic",
	"packages",
	"hook-dsh-convention-suggester",
	"Source/Function/Learn",
);
const LearnerDerived = {
	Modules: readdirSync(Learn).filter((File) => File.endsWith(".ts")).length,
	Families: (ReadText(join(Learn, "Families.ts")) ?? "").match(/Add\("/g)?.length ?? 0,
	Markers: (() => {
		const Order = /const Order = \[([^\]]+)\]/.exec(ReadText(join(Learn, "Signature.ts")) ?? "");
		return Order ? Order[1].split(",").length : 0;
	})(),
};
Check("Learner.Modules = the learner's modules", LearnerDerived.Modules, Number(Surface.Learner[1]));
Check("Learner.Families = the derivable families", LearnerDerived.Families, Number(Surface.Learner[2]));
Check("Learner.Markers = the signature ladder", LearnerDerived.Markers, Number(Surface.Learner[3]));

// 5d. The workspace tools: the registered workspace_* names.
const WorkspaceFunction = join(Root, "Classic", "packages", "plugin-dsh-workspace", "Source/Function");
const WorkspaceTools = readdirSync(WorkspaceFunction)
	.filter((File) => File.endsWith(".ts"))
	.reduce(
		(Sum, File) => Sum + ((ReadText(join(WorkspaceFunction, File)) ?? "").match(/name: "workspace_/g)?.length ?? 0),
		0,
	);
Check("Workspace.Tools = the registered workspace_* tools", WorkspaceTools, Number(Surface.Workspace[1]));
Check(
	"Workspace.Packages = the Classic workspace packages",
	Trees.Classic.filter((Package) => Package.Dir.includes("workspace")).length,
	Number(Surface.Workspace[2]),
);

// 5e. The policy block: the factory's defaults and the owners.
const PolicyDefaults = ReadText(
	join(Root, "Classic", "packages", "plugin-dsh-factory", "Source/Variable/Policy.ts"),
);
const PolicyKeys = [...(PolicyDefaults ?? "").matchAll(/^\t([A-Za-z]+): "(auto|approve)",$/gm)];
Check("Policy.Actions = the policy block's action keys", PolicyKeys.length, Number(Surface.Policy[1]));
Check(
	"Policy.Auto = the actions that run automatically",
	PolicyKeys.filter((Match) => Match[2] === "auto").length,
	Number(Surface.Policy[2]),
);
Check(
	"Policy.Approve = the actions that wait for approval",
	PolicyKeys.filter((Match) => Match[2] === "approve").length,
	Number(Surface.Policy[3]),
);
Check(
	"Policy.Packages = the packages carrying a Policy-Defaults folder",
	Trees.Classic.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source/Test/Policy-Defaults")),
	).length,
	Number(Surface.Policy[4]),
);

// 5f. The storage domains: the config defaults plus the code-declared names.
const Domains = new Set();
for (const Package of Trees.Classic) {
	const Config = ReadText(join(Root, "Classic", "packages", Package.Dir, "Source/Variable/Config.ts"));
	if (Config) {
		for (const [, Name] of Config.matchAll(/domain:\s*Schema\.[^\n]*default\("([^"]+)"\)/g)) {
			Domains.add(Name);
		}
	}
	for (const File of ["Storage.ts", "Open.ts"]) {
		const Text = ReadText(join(Root, "Classic", "packages", Package.Dir, "Source/Function", File));
		if (!Text) continue;
		for (const [, Name] of Text.matchAll(
			/Domain\.defineDomain\(\{[\s\S]{0,400}?name:\s*"([a-z][a-z0-9_]*)"/g,
		)) {
			Domains.add(Name);
		}
	}
}
Check("Storage.Domains = the named KV storage domains", Domains.size, Number(Surface.Storage[1]));

// 5g. The client family: the packages and the panel's adapters.
Check(
	"Client.Packages = the client-dsh-* packages",
	Trees.Classic.filter((Package) => Package.Dir.startsWith("client-dsh-")).length,
	Number(Surface.Client[1]),
);
Check(
	"Client.Adapters = the panel's adapter manifests",
	readdirSync(join(Root, "Classic", "packages", "client-dsh-panel-family", "Source/Variable/Reference")).filter(
		(File) => File.endsWith(".ts"),
	).length,
	Number(Surface.Client[2]),
);

// 5h. The suggesters: the pack-driven six, the gate, the learning layer.
const Suggesters = Trees.Classic.filter((Package) => Package.Dir.endsWith("-suggester"));
const SuggestersDerived = {
	Count: Suggesters.length,
	PackDriven: Suggesters.filter((Package) => {
		const Manifest = JSON.parse(
			ReadText(join(Root, "Classic", "packages", Package.Dir, "package.json")) ?? "{}",
		);
		return Boolean(
			Manifest?.dependencies?.["@playform/lib-dsh-pack"] ??
				Manifest?.peerDependencies?.["@playform/lib-dsh-pack"],
		);
	}).length,
	Gate: Trees.Classic.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source/Test/Workspace-Gate")),
	).length,
	Learning: Trees.Classic.filter((Package) =>
		existsSync(join(Root, "Classic", "packages", Package.Dir, "Source/Test/Learning-Loop")),
	).length,
};
Check("Suggesters.Count = the suggester packages", SuggestersDerived.Count, Number(Surface.Suggesters[1]));
Check("Suggesters.PackDriven = the lib-dsh-pack dependents", SuggestersDerived.PackDriven, Number(Surface.Suggesters[2]));
Check("Suggesters.Gate = the packages carrying a Workspace-Gate folder", SuggestersDerived.Gate, Number(Surface.Suggesters[3]));
Check("Suggesters.Learning = the packages carrying a Learning-Loop folder", SuggestersDerived.Learning, Number(Surface.Suggesters[4]));

// 5i. The harness profile: the @playform rows of the desktop profile patch
// and the installed/enabled split of its package.json.
const HarnessHome = process.env.DSH_HOME || join(homedir(), ".dsh");
const Profiles = existsSync(join(HarnessHome, "profiles")) ? ListDirs(join(HarnessHome, "profiles")) : [];
let ProfileDerived = null;
for (const Profile of Profiles) {
	const Text = ReadText(join(HarnessHome, "profiles", Profile, "cordis.patch.yml"));
	if (!Text) continue;
	const Rows = Text.split(/\n- id: /)
		.slice(1)
		.filter((Block) => /^  name: "@playform\//m.test(Block));
	if (Rows.length === 0) continue;
	const Manifest = JSON.parse(
		ReadText(join(HarnessHome, "profiles", Profile, "package.json")) ?? "{}",
	);
	const Dependencies = Object.keys(Manifest?.dependencies ?? {}).filter((Name) =>
		Name.startsWith("@playform/"),
	);
	const Bundles = (Array.isArray(Manifest?.dsh?.profile?.bundles)
		? Manifest.dsh.profile.bundles
		: []
	).filter((Name) => typeof Name === "string" && Name.startsWith("@playform/"));
	const Inactive = Dependencies.filter((Name) => !Bundles.includes(Name));
	const Figures = {
		Rows: Rows.length,
		Enabled: Rows.filter((Block) => /^\s+enabled: true$/m.test(Block)).length,
		Factory: Rows.filter((Block) => !/^\s+enabled:/m.test(Block)).length,
		Installed:
			Dependencies.length > 0
				? {
						Dependencies: Dependencies.length,
						Bundles: Bundles.length,
						Inactive: Inactive.length,
						Names: Inactive.map((Name) => Name.replace(/^@playform\//, "")),
					}
				: null,
	};
	if (ProfileDerived === null || Figures.Rows > ProfileDerived.Rows) ProfileDerived = Figures;
}
if (ProfileDerived) {
	Check("Profile.Rows = the profile's @playform rows", ProfileDerived.Rows, Number(Surface.Profile[1]));
	Check(
		"Profile.Enabled = the rows carrying enabled: true",
		ProfileDerived.Enabled,
		Number(Surface.Profile[2]),
	);
	Check(
		"Profile.Factory = the factory row (no enabled field)",
		ProfileDerived.Factory,
		Number(Surface.Profile[3]),
	);
	if (ProfileDerived.Installed) {
		Check(
			"Profile.Installed.Dependencies = the installed @playform dependencies",
			ProfileDerived.Installed.Dependencies,
			ProfileInstalled.Dependencies,
		);
		Check(
			"Profile.Installed.Bundles = the bundle rows",
			ProfileDerived.Installed.Bundles,
			ProfileInstalled.Bundles,
		);
		Check(
			"Profile.Installed.Inactive = the installed-not-enabled count",
			ProfileDerived.Installed.Inactive,
			ProfileInstalled.Inactive,
		);
		Check(
			"Profile.Installed.Names = the installed-not-enabled names",
			ProfileDerived.Installed.Names,
			ProfileInstalledNames,
		);
	} else {
		Skip("Profile.Installed fallbacks", "no profile package.json on this machine");
	}
} else {
	Skip("Profile fallbacks vs the harness profile", "no harness profile on this machine");
}

// 5j. The delivery census: the 2026-10-22 delivery (PLUGIN-FAMILY.md) and the
// approved re-specs (the Completion-Spec's table).
const RegistryDoc = ReadText(join(Root, "Documentation", "Plugins", "PLUGIN-FAMILY.md"));
const SpecDoc = ReadText(join(Root, "Documentation", "Plans", "Completion-Spec", "00-OVERVIEW.md"));
const TwinLine = RegistryDoc?.match(/(\d+) of the (\d+) packages added 2026-10-22 have ETS twins/);
const LibraryLine = RegistryDoc?.match(/The two libraries of the completion program - ([\s\S]+?) - now have/);
const RespecRows = SpecDoc
	? [...SpecDoc.matchAll(/^\| ((?:hook|plugin|client)-dsh-[a-z0-9-]+)\s/gm)].length
	: 0;
const DeliveryDerived = {
	NewClassic: TwinLine ? Number(TwinLine[2]) : null,
	ETSTwins: TwinLine ? Number(TwinLine[1]) : null,
	Libraries: LibraryLine
		? [...LibraryLine[1].matchAll(/`lib-dsh-[a-z0-9-]+`/g)].length || null
		: null,
	Respecs: RespecRows > 0 ? RespecRows : null,
};
Check(
	"Delivery.NewClassic = the packages added 2026-10-22",
	DeliveryDerived.NewClassic,
	Delivery.NewClassic,
);
Check("Delivery.ETSTwins = the ETS twins generated", DeliveryDerived.ETSTwins, Delivery.ETSTwins);
Check("Delivery.Libraries = the completion's two libraries", DeliveryDerived.Libraries, Delivery.Libraries);
Check("Delivery.Respecs = the approved re-specs", DeliveryDerived.Respecs, Delivery.Respecs);

// 5k. The direct dependents of the two shared packages: the package.json
// runtime dependency names, matched by the exact npm name.
const DependentsDerived = {
	CoreClassic: Trees.Classic.filter((Package) =>
		Package.Dependencies.includes("@playform/lib-dsh-core"),
	).length,
	CoreEffectTS: Trees.EffectTS.filter((Package) =>
		Package.Dependencies.includes("@playform/ets-lib-dsh-core"),
	).length,
	Factory: Trees.Classic.filter((Package) =>
		Package.Dependencies.includes("@playform/plugin-dsh-factory"),
	).length,
	FactoryNonConsumers: Trees.Classic.filter(
		(Package) =>
			Package.Dir !== "plugin-dsh-factory" &&
			!Package.Dependencies.includes("@playform/plugin-dsh-factory"),
	).map((Package) => Package.Dir),
};
Check(
	"Dependents.CoreClassic = the Classic @playform/lib-dsh-core dependents",
	DependentsDerived.CoreClassic,
	Dependents.CoreClassic,
);
Check(
	"Dependents.CoreEffectTS = the EffectTS @playform/ets-lib-dsh-core dependents",
	DependentsDerived.CoreEffectTS,
	Dependents.CoreEffectTS,
);
Check(
	"Dependents.Factory = the Classic @playform/plugin-dsh-factory dependents",
	DependentsDerived.Factory,
	Dependents.Factory,
);
Check(
	"Dependents.FactoryNonConsumers = the documented seven",
	DependentsDerived.FactoryNonConsumers,
	DependentsNonConsumers,
);
Check(
	"the factory's dependents + non-consumers + the factory = the Classic packages",
	Census.PackagesClassic,
	DependentsDerived.Factory + DependentsDerived.FactoryNonConsumers.length + 1,
);

// 5l. The package catalog: every Classic package without a hand-authored
// detail page, re-derived from its package.json, README and SCHEME.
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
const KindOf = (Dir) =>
	Dir.startsWith("lib-")
		? "lib"
		: Dir.startsWith("plugin-")
			? "plugin"
			: Dir.startsWith("hook-")
				? "hook"
				: Dir.startsWith("client-")
					? "client"
					: null;
const FirstSentence = (Text) => {
	if (!Text) return null;
	const First = Text.trim().split(/(?<=[.!?])\s+(?=[A-Z(\[*_"])/)[0]?.trim() ?? "";
	return First || null;
};
const FirstSentences = (Text, Count) =>
	Text.split(/(?<=[.!?])\s+(?=[A-Z(\[*_"])/).slice(0, Count).join(" ").trim();
function FirstParagraph(Readme) {
	if (!Readme) return null;
	const Lines = Readme.split("\n");
	const Skip = (Line) =>
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
	if (Index < Lines.length && /^_.+_$/.test(Lines[Index].trim())) {
		Index++;
		while (Index < Lines.length && Skip(Lines[Index])) Index++;
	}
	const Block = [];
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
function ActivationLine(Text) {
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
function Sections(Readme) {
	if (!Readme) return [];
	const Lines = Readme.split("\n");
	const Top = Lines.filter((Line) => /^## /.test(Line)).map((Line) => Line.replace(/^## /, "").trim());
	if (Top.length > 0) return Top;
	return Lines.filter((Line) => /^### /.test(Line)).map((Line) => Line.replace(/^### /, "").trim());
}
const EffectTSNames = new Set(Trees.EffectTS.map((Package) => Package.Dir));
const CatalogDerived = Trees.Classic.filter((Package) => !LegacyPackages.includes(Package.Dir)).map(
	(Package) => {
		const Readme = ReadText(join(Root, "Classic", "packages", Package.Dir, "README.md"));
		const Scheme = ReadText(join(Root, "Classic", "packages", Package.Dir, "SCHEME.md"));
		const Title = String(Package.Name).replace(/^@playform\//, "");
		return {
			name: Package.Dir,
			title: Title,
			kind: KindOf(Package.Dir),
			version: Package.Version,
			twin: EffectTSNames.has(`ets-${Package.Dir}`) ? `ets-${Package.Dir}` : null,
			role: FirstSentence(Package.Description),
			ledger: `~/.dsh/playform/${Title}.log`,
			activation: ActivationLine(Readme) ?? ActivationLine(Scheme),
			summary: FirstParagraph(Readme),
			sections: Sections(Readme),
		};
	},
);
Check(
	"the catalog's fallback tuples = the tree's minimal fields",
	CatalogDerived.map((Entry) => ({
		name: Entry.name,
		kind: Entry.kind,
		version: Entry.version,
		twin: Entry.twin,
	})),
	FallbackPackages,
);

// --- 6. The port-era record: the History deltas ---
Check(
	"History.EffectDelta = the record's deltas sum",
	History.Deltas.Core + History.Deltas.Factory + History.Deltas.Governor,
	History.EffectDelta,
);

// --- 7. The release identity and the name forms ---
const Release = Version.Release;
for (const [Tree, Packages] of Object.entries(Trees)) {
	for (const Package of Packages) {
		if (Package.Error) {
			Check(`${Tree}/${Package.Dir}: package.json readable`, "ok", Package.Error);
			continue;
		}
		// The post-splice naming: the npm name is the @playform scope plus
		// the directory name, byte-exact.
		Check(
			`${Tree}/${Package.Dir}: npm name = @playform/ + the directory`,
			`@playform/${Package.Dir}`,
			Package.Name,
		);
		// The release identity: the mode version, plus the panel family's
		// documented outlier (0.2.0).
		Check(
			`${Tree}/${Package.Dir}: version = the release identity`,
			Package.Dir === "client-dsh-panel-family" ? Version.PanelFamily : Release,
			Package.Version,
		);
	}
}
// The role-prefix contract (2026-10-21): the Classic tree the plugin-* /
// hook-* / lib-* / client-* packages, the EffectTS tree the same names under
// the ets- prefix plus the shared ets-base-dsh base.
const NameForm = {
	Classic: (Dir) =>
		Dir === "plugin-dsh-factory" || /^(plugin|hook|lib|client)-dsh-[a-z0-9-]+$/.test(Dir),
	EffectTS: (Dir) =>
		Dir === "ets-base-dsh" || /^ets-(plugin|hook|lib|client)-dsh-[a-z0-9-]+$/.test(Dir),
};
for (const [Tree, Packages] of Object.entries(Trees)) {
	Check(
		`${Tree}/packages: every directory carries the post-splice name form`,
		true,
		Packages.every((Package) => NameForm[Tree](Package.Dir)),
	);
}
// The stale pre-role forms (the *-dsh-hook word order, the ets-* spellings
// without the shared hook-dsh- body, the hook-* spelling of the core and the
// file tool, the bare panel names) must be gone from the names and the
// directories alike.
const StaleForm = (Text) => {
	const Stem = Text.replace(/^@playform\//, "");
	return (
		(/[a-z0-9]-dsh-hook$/.test(Stem) && Stem !== "ets-base-dsh") ||
		Stem === "dsh-plugin-factory" ||
		Stem === "ets-dsh-plugin-factory" ||
		/(^|\/)dsh-hook-/.test(Stem) ||
		/(^|\/)(ets-)?hook-dsh-(core|normalize-file)$/.test(Stem) ||
		/(^|\/)(ets-)?dsh-panel-family(-host)?$/.test(Stem)
	);
};
for (const [Tree, Packages] of Object.entries(Trees)) {
	Check(
		`${Tree}/packages: zero stale pre-splice name forms`,
		0,
		Packages.filter((Package) => StaleForm(Package.Dir) || StaleForm(Package.Name ?? "")).length,
	);
}
Check(
	"the release identity is the mode the rest of the packages carry",
	0,
	[...Trees.Classic, ...Trees.EffectTS].filter(
		(Package) => Package.Version !== Release && Package.Dir !== "client-dsh-panel-family",
	).length,
);

// --- 8. The live data layer: Source/Library/Live.ts reads the same sources ---
// The site build pulls its figures through Library/Live.ts (build-time, no
// runtime fetching); check that the snapshot matches the repo directly.
// The import needs the runtime's TypeScript stripping (Node >= 23.6); on an
// older runtime the layer degrades to SKIP instead of crashing the guard.
let Live = null;
let LiveSkip = null;
try {
	({ Live } = await import(new URL("../Source/Library/Live.ts", import.meta.url).href));
} catch (Error) {
	LiveSkip = Error;
}
if (Live) {
	Check("Live.PackageCounts = the two trees' directories", { Classic: Trees.Classic.length, EffectTS: Trees.EffectTS.length }, Live.PackageCounts);
	Check("Live.SuiteCensus = the two trees' folder counts", { Classic: SuiteTrees.Classic.Folders, EffectTS: SuiteTrees.EffectTS.Folders }, Live.SuiteCensus);
	Check("Live.Release = the mode release version", Release, Live.Release);
	Check(
		"Live.ReleaseOutliers = the packages off the mode",
		[{ Dir: "client-dsh-panel-family", Version: Version.PanelFamily }],
		Live.ReleaseOutliers,
	);
	Check("Live.PanelFamily = the panel family's version", Version.PanelFamily, Live.PanelFamily);
	Check("Live.Effect = the unanimous effect pin", Version.Effect, Live.Effect);
	Check("Live.EffectPinned = the pinned package count", Version.EffectPinned, Live.EffectPinned);
	Check("Live.SuitePairs = the per-folder README sums", DerivedPairs, Live.SuitePairs);
	Check(
		"Live.SuiteTree.Classic.Checks = the CLASSIC folder sum",
		SuiteTrees.Classic.Checks,
		Live.SuiteTree.Classic?.Checks,
	);
	Check(
		"Live.SuiteTree.EffectTS.Checks = the EFFECT-TS folder sum",
		SuiteTrees.EffectTS.Checks,
		Live.SuiteTree.EffectTS?.Checks,
	);
	Check("Live.Twins = the ETS twins", Census.Twins, Live.Twins);
	Check("Live.Libraries = the Classic lib-* packages", Census.Libraries, Live.Libraries);
	Check("Live.Methods = the factory's method count", Census.Methods, Live.Methods);
	// The normalize tokens are matched dash-delimited, so the guard follows
	// the naming convention rather than one spelling of it.
	const IsNormalize = (Dir) => /(^|-)normalize(-|$)/.test(Dir);
	const IsFileTool = (Dir) => /(^|-)file(-|$)/.test(Dir);
	const ClassicDirs = ListDirs(join(Root, "Classic", "packages"));
	Check("Live.Normalizers = the normalize-* directories", ClassicDirs.filter(IsNormalize).length, Live.Normalizers);
	Check(
		"Live.StreamFlavors = the stream flavors (the file tool excluded)",
		ClassicDirs.filter((Dir) => IsNormalize(Dir) && !IsFileTool(Dir)).length,
		Live.StreamFlavors,
	);
	Check(
		"Live.PackageNames = the Classic npm names (@playform/ + the directories)",
		Trees.Classic.map((Package) => Package.Name),
		Live.PackageNames,
	);
	Check("Live.Trace = the trace bus's figures", TraceDerived, Live.Trace);
	Check(
		"Live.Pack = the pack layer's figures",
		{ Families: BuiltinKeys.length, Domains: new Set(BuiltinKeys.map((Match) => Match[1])).size },
		Live.Pack,
	);
	Check("Live.Learner = the learner's figures", LearnerDerived, Live.Learner);
	Check(
		"Live.Workspace = the workspace tools' figures",
		{
			Tools: WorkspaceTools,
			Packages: Trees.Classic.filter((Package) => Package.Dir.includes("workspace")).length,
		},
		Live.Workspace,
	);
	Check(
		"Live.Policy = the policy block's figures",
		{
			Actions: PolicyKeys.length,
			Auto: PolicyKeys.filter((Match) => Match[2] === "auto").length,
			Approve: PolicyKeys.filter((Match) => Match[2] === "approve").length,
			Packages: Trees.Classic.filter((Package) =>
				existsSync(join(Root, "Classic", "packages", Package.Dir, "Source/Test/Policy-Defaults")),
			).length,
		},
		Live.Policy,
	);
	Check("Live.Storage = the storage domains' count", { Domains: Domains.size }, Live.Storage);
	Check(
		"Live.Client = the client family's figures",
		{
			Packages: Trees.Classic.filter((Package) => Package.Dir.startsWith("client-dsh-")).length,
			Adapters: readdirSync(join(Root, "Classic", "packages", "client-dsh-panel-family", "Source/Variable/Reference")).filter(
				(File) => File.endsWith(".ts"),
			).length,
		},
		Live.Client,
	);
	Check(
		"Live.Suggesters = the suggester family's figures",
		SuggestersDerived,
		Live.Suggesters,
	);
	if (ProfileDerived) {
		Check("Live.Profile = the harness profile's figures", ProfileDerived, Live.Profile);
	} else {
		Skip("Live.Profile", "no harness profile on this machine");
	}
	Check("Live.Delivery = the delivery census", DeliveryDerived, Live.Delivery);
	Check("Live.Dependents = the direct dependents", DependentsDerived, Live.Dependents);
	Check("Live.Package = the new packages' catalog", CatalogDerived, Live.Package);
} else {
	console.log(`SKIP  Live.ts layer (the runtime cannot import Live.ts: ${LiveSkip?.message?.split("\n")[0] ?? "unknown"})`);
}

// --- 9. The ledger-line samples: byte-verification against the repo ---
// Every ledger excerpt/string constant the site's pages carry must appear
// byte-exact in the repo's primary sources (the package READMEs, the smoke
// batteries, the Documentation). The one tolerated spelling variance is the
// excerpt path token: the READMEs write the sample workspace as
// ~/Projects/... while the pages abstract it to <project>/... - both sides
// are normalized to <project>/ before the byte comparison, so any OTHER
// byte drift still fails.
const LedgerArrayNames = [
	"LedgerExcerpt",
	"LedgerStrings",
	"LedgerLines",
	"TrapLines",
	"JournalExcerpt",
];
const NormalizePaths = (Text) => Text.replaceAll("~/Projects/", "<project>/");

const Walk = (Base, Out = []) => {
	if (!existsSync(Base)) return Out;
	for (const Entry of readdirSync(Base, { withFileTypes: true })) {
		const Path = join(Base, Entry.name);
		if (Entry.isDirectory()) Walk(Path, Out);
		else Out.push(Path);
	}
	return Out;
};

const Corpus = [
	...Walk(join(Root, "Classic", "packages")).filter((Path) => Path.endsWith("README.md")),
	...Walk(join(Root, "Classic", "smokes")).filter((Path) => Path.endsWith(".mjs")),
	...Walk(join(Root, "Documentation")).filter((Path) => Path.endsWith(".md")),
	join(Root, "README.md"),
]
	.map((Path) => [Path, readFile(Path, "utf8")])
	.map(async ([Path, Text]) => [Path, NormalizePaths(await Text)]);

const CorpusText = await Promise.all(Corpus);

const ArrayPattern = new RegExp(
	`const (${LedgerArrayNames.join("|")}) = \\[([\\s\\S]*?)\\n\\];`,
	"g",
);
const StringPattern = /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'/g;

function Unquote(Quote, Body) {
	// JSON.parse decodes the double-quoted escapes; the single-quoted form
	// only differs in the apostrophe escape, which these samples never use.
	if (Quote === '"') {
		try {
			return JSON.parse(`"${Body}"`);
		} catch {
			return null;
		}
	}
	return Body.replace(/\\(['\\])/g, "$1");
}

for (const Directory of [
	join(SiteRoot, "Source", "pages"),
	join(SiteRoot, "Source", "Component"),
]) {
	for (const Page of Walk(Directory).filter((Path) => Path.endsWith(".astro"))) {
		const Text = await readFile(Page, "utf8");
		const Label = relative(join(SiteRoot, "Source"), Page);
		for (const Match of Text.matchAll(ArrayPattern)) {
			const [, ArrayName, Body] = Match;
			let Index = 0;
			for (const StringMatch of Body.matchAll(StringPattern)) {
				const Sample = Unquote(StringMatch[1] !== undefined ? '"' : "'", StringMatch[1] ?? StringMatch[2]);
				Index += 1;
				if (Sample === null || Sample.length === 0) continue;
				const Hit = CorpusText.find(([, CorpusBody]) => CorpusBody.includes(NormalizePaths(Sample)));
				Check(
					`Ledger sample ${Label} ${ArrayName}[${Index}] = a byte-exact line in the repo`,
					true,
					Hit ? true : `no corpus source contains it`,
				);
			}
		}
	}
}

// --- 9b. The components' concrete claims ---
// The components build their ledger paths and their install route inline, so
// the named-array walk above cannot see them; the guard checks the two claim
// shapes directly. The profile path (~/.dsh/profiles/...) and the standard
// ledger path (~/.dsh/playform/<pkg>.log) are the only allowed forms.
const ComponentFiles = Walk(join(SiteRoot, "Source", "Component")).filter((Path) =>
	Path.endsWith(".astro"),
);
const ComponentLedgerPaths = ComponentFiles.flatMap((Path) => {
	const Text = ReadText(Path) ?? "";
	return [...Text.matchAll(/~\/\.dsh\/(?!playform\/|profiles\/)[^\s"'`<),]*/g)].map(
		(Match) => `${relative(join(SiteRoot, "Source"), Path)}: ${Match[0]}`,
	);
});
Check(
	"Source/Component: every concrete ~/.dsh path is the playform ledger or the profile path",
	0,
	ComponentLedgerPaths.length,
);
const ComponentInstall = ComponentFiles.flatMap((Path) => {
	const Text = ReadText(Path) ?? "";
	return [...Text.matchAll(/npm (?:install|i) @playform\/[^\s"'`<)]*/g)].map(
		(Match) => `${relative(join(SiteRoot, "Source"), Path)}: ${Match[0]}`,
	);
});
Check(
	"Source/Component: zero npm install commands (the family is unpublished)",
	0,
	ComponentInstall.length,
);

// --- 9c. The catalog detail pages: the dynamic route over the catalog ---
// The 15 hand-authored pages keep their own file routes; every other catalog
// package renders through Source/pages/plugins/[slug].astro. The check walks
// the catalog, confirms one built page per entry (the catalog excludes the 15
// legacy packages itself), and verifies each new page's shape: exactly one
// h1, the playform ledger form, no npm install command, no dead internal link,
// a registry link and a sitemap entry.
const Catalog = Live?.Package ?? FallbackPackages;
const TargetPlugins = join(SiteRoot, "Target", "plugins");
if (!existsSync(TargetPlugins)) {
	Skip("the catalog detail pages", "no built Target on this machine");
} else {
	const CatalogPages = Catalog.map((Entry) => ({
		Entry,
		Path: join(TargetPlugins, Entry.name, "index.html"),
	}));
	const PageTexts = CatalogPages.map(({ Path }) => (existsSync(Path) ? ReadText(Path) : null));
	Check(
		"the catalog: no entry shadows a hand-authored route",
		[],
		Catalog.filter((Entry) => LegacyPackages.includes(Entry.name)).map((Entry) => Entry.name),
	);
	Check(
		"the catalog: every entry has a built page",
		[],
		CatalogPages.filter(({ Path }) => !existsSync(Path)).map(({ Entry }) => Entry.name),
	);
	// The route source: one getStaticPaths, over the catalog.
	const RouteSource = ReadText(join(SiteRoot, "Source", "pages", "plugins", "[slug].astro")) ?? "";
	Check(
		"the catalog route: one getStaticPaths",
		1,
		(RouteSource.match(/export function getStaticPaths\(\)/g) ?? []).length,
	);
	// One h1 per page (the hero).
	const CountH1 = (Text) => (Text.match(/<h1[\s>]/g) ?? []).length;
	Check(
		"the catalog pages: exactly one h1 per page",
		[],
		CatalogPages.filter(({ Entry, Path }, Index) => existsSync(Path) && CountH1(PageTexts[Index]) !== 1).map(({ Entry }) => Entry.name),
	);
	// The playform ledger form renders on every page.
	Check(
		"the catalog pages: the playform ledger path renders",
		[],
		CatalogPages.filter(
			({ Entry, Path }, Index) =>
				existsSync(Path) && !(PageTexts[Index] ?? "").includes(Entry.ledger),
		).map(({ Entry }) => Entry.name),
	);
	// The unpublished law: zero npm install commands on the new pages.
	Check(
		"the catalog pages: zero npm install commands (the family is unpublished)",
		0,
		PageTexts.filter((Text) => Text && /npm (?:install|i) @playform\//.test(Text)).length,
	);
	// The internal links: every page-shaped href ("/.../") resolves to a built
	// page. The sitemap and the 404 are the only non-page HTML files.
	const BuiltPages = new Set(
		Walk(join(SiteRoot, "Target"))
			.filter((Path) => Path.endsWith(".html"))
			.map((Path) => {
				const Rel = relative(join(SiteRoot, "Target"), Path).replace(/\\/g, "/");
				return `/${Rel.replace(/index\.html$/, "").replace(/\.html$/, "")}`;
			}),
	);
	const DeadLinks = [];
	CatalogPages.forEach(({ Entry }, Index) => {
		const Text = PageTexts[Index];
		if (!Text) return;
		// The built HTML is compressed: the attribute values may be unquoted.
		for (const Match of Text.matchAll(/href=(?:"([^"]*)"|([^"'\s>]+))/g)) {
			const Href = Match[1] ?? Match[2] ?? "";
			if (!Href.startsWith("/") || !Href.endsWith("/") || BuiltPages.has(Href)) continue;
			DeadLinks.push(`${Entry.name}: ${Href}`);
		}
	});
	Check("the catalog pages: every internal link resolves", 0, DeadLinks.length);
	// The registry page links every catalog page (the built HTML may drop the
	// attribute quotes).
	const RegistryHtml = ReadText(join(TargetPlugins, "index.html")) ?? "";
	Check(
		"the registry: every catalog page is linked",
		[],
		Catalog.filter(
			(Entry) =>
				!new RegExp(`href=["']?/plugins/${Entry.name}/["']?`).test(RegistryHtml),
		).map((Entry) => Entry.name),
	);
	// The registry's Classic-only markers are the catalog's twin-less entries.
	const RegistrySource = ReadText(join(SiteRoot, "Source", "pages", "plugins.astro")) ?? "";
	const ClassicOnlyBlock = RegistrySource.match(/const ClassicOnly = new Set\(\[([\s\S]*?)\]\);/);
	const RegistryClassicOnly = [
		...(ClassicOnlyBlock?.[1] ?? "").matchAll(/"([a-z0-9-]+)"/g),
	]
		.map((Match) => Match[1])
		.sort();
	Check(
		"the registry: the Classic-only markers = the catalog's twin-less entries",
		Catalog.filter((Entry) => Entry.twin === null)
			.map((Entry) => Entry.name)
			.sort(),
		RegistryClassicOnly,
	);
	// The sitemap lists every catalog page.
	const SitemapText = Walk(join(SiteRoot, "Target"))
		.filter((Path) => /sitemap[^/]*\.xml$/.test(Path))
		.map((Path) => ReadText(Path) ?? "")
		.join("\n");
	Check(
		"the sitemap: every catalog page is listed",
		[],
		Catalog.filter((Entry) => !SitemapText.includes(`/plugins/${Entry.name}/`)).map(
			(Entry) => Entry.name,
		),
	);
	// The page count: the static routes + the catalog + the 404.
	const PageSources = Walk(join(SiteRoot, "Source", "pages")).filter((Path) =>
		Path.endsWith(".astro"),
	);
	const StaticPages = PageSources.filter((Path) => !Path.includes("[")).length;
	const BuiltHtml = Walk(join(SiteRoot, "Target")).filter((Path) => Path.endsWith(".html"));
	Check(
		"the built site: one HTML page per route (the static pages + the catalog + the 404)",
		StaticPages + Catalog.length + (existsSync(join(SiteRoot, "Public", "404.html")) ? 1 : 0),
		BuiltHtml.length,
	);
}

// --- 10. The built Target's freshness vs the Source (zero stale drift) ---
// Every Source module must have a compiled Target counterpart and no
// Target file may be older than its Source - the smokes read the compiled
// bundles, so a stale bundle is a hardcoded-drift hazard.
//
// The mtime ordering is only meaningful within one machine's build: a
// restored or copied checkout writes the Target tree and the Source tree in
// separate passes, so EVERY Source lands a little newer than its Target with
// no content change. The guard measures that environment skew (the median
// per-package delta) and allows it plus a two-minute margin, so a source
// edited after its build by more than the copy skew still fails while a
// pristine copy does not.
const Mtime = async (Path) => (await stat(Path)).mtimeMs;
const Freshness = [];
for (const [Tree, Packages] of Object.entries(Trees)) {
	for (const Package of Packages) {
		if (Package.Error) continue;
		const SourceBase = join(Root, Tree, "packages", Package.Dir, "Source");
		const TargetBase = join(Root, Tree, "packages", Package.Dir, "Target");
		if (!existsSync(SourceBase)) continue;
		const Sources = Walk(SourceBase).filter((Path) => Path.endsWith(".ts"));
		let NewestSource = 0;
		let NewestTarget = 0;
		for (const SourcePath of Sources) {
			NewestSource = Math.max(NewestSource, await Mtime(SourcePath));
			const TargetPath = join(
				TargetBase,
				relative(SourceBase, SourcePath).replace(/\.ts$/, ".js"),
			);
			if (existsSync(TargetPath)) NewestTarget = Math.max(NewestTarget, await Mtime(TargetPath));
		}
		Freshness.push({ Tree, Package, SourceBase, TargetBase, Sources, Delta: NewestSource - NewestTarget });
	}
}
const Deltas = Freshness.map((Entry) => Entry.Delta).sort((Left, Right) => Left - Right);
const Skew = Deltas.length > 0 ? Math.max(0, Deltas[Math.floor(Deltas.length / 2)]) : 0;
const Tolerance = Skew + 120000;
if (Skew > 0) {
	console.log(
		`NOTE  the checkout writes the Source tree after the Target tree (median skew ${Math.round(Skew / 1000)}s); the freshness check allows ${Math.round(Tolerance / 1000)}s`,
	);
}
for (const Entry of Freshness) {
	let Missing = 0;
	let Stale = 0;
	for (const SourcePath of Entry.Sources) {
		const TargetPath = join(
			Entry.TargetBase,
			relative(Entry.SourceBase, SourcePath).replace(/\.ts$/, ".js"),
		);
		if (!existsSync(TargetPath)) {
			Missing += 1;
			continue;
		}
		if ((await Mtime(TargetPath)) + Tolerance < (await Mtime(SourcePath))) Stale += 1;
	}
	Check(
		`${Entry.Tree}/${Entry.Package.Dir}: every Source module has a compiled Target counterpart`,
		0,
		Missing,
	);
	Check(
		`${Entry.Tree}/${Entry.Package.Dir}: the Target is fresh (no module older than its Source beyond the checkout skew)`,
		0,
		Stale,
	);
}

// --- Verdict ---
console.log(`\n${Checks} checks run.`);
if (Failures > 0) {
	console.error(`DRIFT DETECTED: ${Failures} check(s) failed - the content library no longer matches the repo.`);
	process.exit(1);
} else {
	console.log("All content-integrity checks passed - the rendered values match the repo.");
}
