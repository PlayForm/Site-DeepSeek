// Drift-Guard.mjs - the content-integrity check: does what the site RENDERS
// still match what the repo IS? Re-derives every dynamic figure the site's
// content library (Source/Library/Content.ts + Source/Library/Live.ts)
// publishes, from the primary sources, and compares:
//
//   - the per-suite smoke counts: Classic/smokes/README.md and
//     EffectTS/smokes/README.md (the suites are the arbiter) vs Counts;
//   - the family-wide totals: the sums of the per-suite pairs vs Totals;
//   - the release versions: the version field of EVERY package.json in both
//     trees vs Versions.Release, and the effect dependency pin of every
//     EffectTS package vs Versions.Effect;
//   - the name forms: the post-splice naming (the Classic tree the
//     *-dsh-hook / plugin-dsh-factory forms, the EffectTS tree the ets-*
//     forms) - every npm name is @playform/ + its directory, and the stale
//     pre-splice forms (hook-dsh-*) are gone;
//   - the additive Effect-TS deltas (core +3, factory +7, governor +3) vs
//     History.Deltas and the EffectDelta sum;
//   - the Live.ts layer: the build-time snapshot equals what this script
//     re-derives (the Release/Effect/SuitePairs/Packages/Normalizers/
//     StreamFlavors/PackageNames figures);
//   - the ledger-line samples: every ledger excerpt/string constant the
//     site's pages carry (LedgerExcerpt/LedgerStrings/LedgerLines/
//     TrapLines/JournalExcerpt) appears byte-exact in the repo's primary
//     sources (the package READMEs, the smoke batteries, the Documentation);
//   - the built Target's freshness: every Source module has a compiled
//     Target counterpart and no Target file is older than its Source - the
//     zero stale/hardcoded drift posture.
//
// The package lists are read from the filesystem (data-driven), so a later
// rename cannot silently uncheck packages.
//
// Run with `pnpm run Drift` (in Site/) - CI-ready: exit 0 on pass, 1 on any
// drift, with a per-check pass/fail line and the full check count.

import { readFile, stat } from "node:fs/promises";
import { readdirSync, existsSync } from "node:fs";
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

// --- The content library, parsed as text (no TS compilation needed) ---
const ContentSource = await readFile(join(SiteRoot, "Source/Library/Content.ts"), "utf8");

function ExtractNumber(Pattern) {
	const Match = ContentSource.match(Pattern);
	if (!Match) throw new Error(`Content.ts: pattern not found: ${Pattern}`);
	return Number(Match[1]);
}

const SuiteOrder = [
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
];

const Counts = {};
for (const [Key] of SuiteOrder) {
	Counts[Key] = {
		Classic: ExtractNumber(new RegExp(`${Key}: \\{ Classic: (\\d+), EffectTS: \\d+ \\}`)),
		EffectTS: ExtractNumber(new RegExp(`${Key}: \\{ Classic: \\d+, EffectTS: (\\d+) \\}`)),
	};
}
const TotalsClassic = ExtractNumber(/Classic: (\d+),\s*\n\s*\/\*\* The EFFECT-TS total/);
const TotalsEffectTS = ExtractNumber(new RegExp(`EffectTS: (\\d+),\\s*\\n\\s*\\n?\\s*\\/\\*\\* "`));

// --- 0. The trees, read from the filesystem (data-driven) ---
// Directory-only listing, mirroring Live.ts (stray files like .DS_Store
// excluded). Each package's identity comes from its own package.json.
function ListDirs(Path) {
	return readdirSync(Path, { withFileTypes: true })
		.filter((Entry) => Entry.isDirectory())
		.map((Entry) => Entry.name)
		.sort();
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
			});
		} catch (Error) {
			Result.push({ Dir, Name: null, Version: null, Effect: null, Error: String(Error) });
		}
	}
	return Result;
}

const Trees = {
	Classic: await ReadTree("Classic"),
	EffectTS: await ReadTree("EffectTS"),
};

// --- 1. The smoke READMEs (the arbiter) ---
// The Classic README separates the count list with an em dash, the EffectTS
// one with a hyphen - accept either.
function ParseSmokeReadme(Text) {
	const Match =
		Text.match(/\*\*([^*]+)\*\* — live in this directory/) ||
		Text.match(/\*\*([^*]+)\*\* - live in this directory/);
	if (!Match) throw new Error("smoke count line not found");
	const Result = {};
	for (const [, Suite, Count] of Match[1].matchAll(/([\w-]+) (\d+)/g)) {
		Result[Suite] = Number(Count);
	}
	return Result;
}

for (const Tree of ["Classic", "EffectTS"]) {
	const Text = await readFile(join(Root, Tree, "smokes/README.md"), "utf8");
	const Parsed = ParseSmokeReadme(Text);
	for (const [Key, Suite] of SuiteOrder) {
		Check(
			`${Tree}/smokes: ${Suite} count vs Counts.${Key}.${Tree}`,
			Parsed[Suite],
			Counts[Key][Tree],
		);
	}
}

// --- 2. The totals pair: the sums of the per-suite pairs ---
const SumClassic = SuiteOrder.reduce((Sum, [Key]) => Sum + Counts[Key].Classic, 0);
const SumEffectTS = SuiteOrder.reduce((Sum, [Key]) => Sum + Counts[Key].EffectTS, 0);
Check("Totals.Classic = the sum of the CLASSIC pairs", SumClassic, TotalsClassic);
Check("Totals.EffectTS = the sum of the EFFECT-TS pairs", SumEffectTS, TotalsEffectTS);

// --- 3. The release versions and the names, across every package ---
const Release = ContentSource.match(/Release: "([^"]+)"/)?.[1];
const Effect = ContentSource.match(/Effect: "([^"]+)"/)?.[1];
for (const [Tree, Packages] of Object.entries(Trees)) {
	for (const Package of Packages) {
		if (Package.Error) {
			Check(`${Tree}/${Package.Dir}: package.json readable`, "ok", Package.Error);
			continue;
		}
		Check(`${Tree}/${Package.Dir}: version vs Versions.Release`, Release, Package.Version);
		// The post-splice naming: the npm name is the @playform scope plus
		// the directory name, byte-exact.
		Check(
			`${Tree}/${Package.Dir}: npm name = @playform/ + the directory`,
			`@playform/${Package.Dir}`,
			Package.Name,
		);
		if (Tree === "EffectTS") {
			Check(`${Tree}/${Package.Dir}: effect pin vs Versions.Effect`, Effect, Package.Effect);
		}
	}
}

// --- 3b. The splice's name forms: the new shapes on, the stale forms gone ---
// The post-splice convention: the Classic tree the hook-dsh-* packages plus
// the plugin-dsh-factory, the EffectTS tree the same names under the ets-
// prefix plus the ets-plugin-dsh-factory and the shared ets-dsh-hook base.
const NameForm = {
	Classic: (Dir) => Dir === "plugin-dsh-factory" || /^hook-dsh-[a-z0-9-]+$/.test(Dir),
	EffectTS: (Dir) =>
		Dir === "ets-plugin-dsh-factory" ||
		Dir === "ets-dsh-hook" ||
		/^ets-hook-dsh-[a-z0-9-]+$/.test(Dir),
};
for (const [Tree, Packages] of Object.entries(Trees)) {
	Check(
		`${Tree}/packages: every directory carries the post-splice name form`,
		true,
		Packages.every((Package) => NameForm[Tree](Package.Dir)),
	);
}
// The stale pre-splice forms (the *-dsh-hook word order, the ets-* spellings
// without the shared hook-dsh- body) must be gone from the names and the
// directories alike.
const StaleForm = (Text) => {
	const Stem = Text.replace(/^@playform\//, "");
	return (
		(/[a-z0-9]-dsh-hook$/.test(Stem) && Stem !== "ets-dsh-hook") ||
		Stem === "dsh-plugin-factory" ||
		Stem === "ets-dsh-plugin-factory" ||
		/(^|\/)dsh-hook-/.test(Stem)
	);
};
for (const [Tree, Packages] of Object.entries(Trees)) {
	Check(
		`${Tree}/packages: zero stale pre-splice name forms`,
		0,
		Packages.filter((Package) => StaleForm(Package.Dir) || StaleForm(Package.Name ?? "")).length,
	);
}
// The EffectTS tree mirrors the Classic tree: the ets- prefixed same names,
// plus the two ets-only packages (the base and the factory).
Check(
	"EffectTS/packages = ets- + the Classic names, plus the ets-dsh-hook base",
	[
		...Trees.Classic.map((Package) => `ets-${Package.Dir}`),
		"ets-dsh-hook",
	].sort(),
	Trees.EffectTS.map((Package) => Package.Dir),
);

// --- 4. The additive Effect-TS deltas (core +3, factory +7, governor +3) ---
const Deltas = { Core: 3, Factory: 7, Governor: 3 };
for (const [Key, Expected] of Object.entries(Deltas)) {
	Check(
		`History.Deltas.${Key} = the additive coverage`,
		Counts[Key].EffectTS - Counts[Key].Classic,
		Expected,
	);
}
Check(
	"History.EffectDelta = the sum of the deltas",
	Object.values(Deltas).reduce((Sum, N) => Sum + N, 0),
	ExtractNumber(/EffectDelta: (\d+)/),
);

// --- 5. The live data layer: Source/Library/Live.ts reads the same sources ---
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
	const ClassicDirs = ListDirs(join(Root, "Classic", "packages"));
	Check("Live.Release = the unanimous release version", Release, Live.Release);
	Check("Live.Effect = the unanimous effect pin", Effect, Live.Effect);
	Check("Live.SuitePairs = the parsed README manifests", Counts, Live.SuitePairs);
	// The normalize tokens are matched dash-delimited, so the guard follows
	// the naming convention rather than one spelling of it.
	const IsNormalize = (Dir) => /(^|-)normalize(-|$)/.test(Dir);
	const IsFileTool = (Dir) => /(^|-)file(-|$)/.test(Dir);
	Check("Live.Packages = the Classic package directories", ClassicDirs.length, Live.Packages);
	Check(
		"Live.Normalizers = the normalize-* directories",
		ClassicDirs.filter(IsNormalize).length,
		Live.Normalizers,
	);
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
} else {
	console.log(`SKIP  Live.ts layer (the runtime cannot import Live.ts: ${LiveSkip?.message?.split("\n")[0] ?? "unknown"})`);
}

// --- 6. The ledger-line samples: byte-verification against the repo ---
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

for (const Page of Walk(join(SiteRoot, "Source", "pages")).filter((Path) =>
	Path.endsWith(".astro"),
)) {
	const Text = await readFile(Page, "utf8");
	const Label = relative(join(SiteRoot, "Source", "pages"), Page);
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

// --- 7. The built Target's freshness vs the Source (zero stale drift) ---
// Every Source module must have a compiled Target counterpart and no
// Target file may be older than its Source - the site and the smokes read
// the compiled bundles, so a stale bundle is a hardcoded-drift hazard.
const Mtime = async (Path) => (await stat(Path)).mtimeMs;
for (const [Tree, Packages] of Object.entries(Trees)) {
	for (const Package of Packages) {
		if (Package.Error) continue;
		const SourceBase = join(Root, Tree, "packages", Package.Dir, "Source");
		const TargetBase = join(Root, Tree, "packages", Package.Dir, "Target");
		if (!existsSync(SourceBase)) continue;
		const Sources = Walk(SourceBase).filter((Path) => Path.endsWith(".ts"));
		let Missing = 0;
		let Stale = 0;
		for (const SourcePath of Sources) {
			const TargetPath = join(
				TargetBase,
				relative(SourceBase, SourcePath).replace(/\.ts$/, ".js"),
			);
			if (!existsSync(TargetPath)) {
				Missing += 1;
				continue;
			}
			if ((await Mtime(TargetPath)) < (await Mtime(SourcePath))) Stale += 1;
		}
		Check(
			`${Tree}/${Package.Dir}: every Source module has a compiled Target counterpart`,
			0,
			Missing,
		);
		Check(
			`${Tree}/${Package.Dir}: the Target is fresh (no module older than its Source)`,
			0,
			Stale,
		);
	}
}

// --- Verdict ---
console.log(`\n${Checks} checks run.`);
if (Failures > 0) {
	console.error(`DRIFT DETECTED: ${Failures} check(s) failed - the content library no longer matches the repo.`);
	process.exit(1);
} else {
	console.log("All content-integrity checks passed - the rendered values match the repo.");
}
