// Drift-Guard.mjs - the content-integrity check: does what the site RENDERS
// still match what the repo IS? Re-derives every dynamic figure the site's
// content library (Source/Library/Content.ts) publishes, from the primary
// sources, and compares:
//
//   - the per-suite smoke counts: Classic/smokes/README.md and
//     EffectTS/smokes/README.md (the suites are the arbiter) vs Counts;
//   - the family-wide totals: the sums of the per-suite pairs vs Totals;
//   - the release versions: the version field of the twelve release
//     package.json files in both trees vs Versions.Release, and the effect
//     dependency pin of the EffectTS packages vs Versions.Effect;
//   - the additive Effect-TS deltas (core +3, factory +7, governor +3) vs
//     History.Deltas and the EffectDelta sum.
//
// Run with `pnpm run Drift` (in Site/) - CI-ready: exit 0 on pass, 1 on any
// drift, with a per-check pass/fail line.

import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const Here = dirname(fileURLToPath(import.meta.url));
const SiteRoot = dirname(Here);
const Root = dirname(SiteRoot);

let Failures = 0;
function Check(Label, Expected, Actual) {
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

// --- 3. The release versions across the twelve packages, both trees ---
const Release = ContentSource.match(/Release: "([^"]+)"/)?.[1];
const Effect = ContentSource.match(/Effect: "([^"]+)"/)?.[1];
const Packages = [
	"hook-dsh-core",
	"plugin-dsh-factory",
	"hook-dsh-governor-package",
	"hook-dsh-pinner-package",
	"hook-dsh-governor-cargo",
	"hook-dsh-normalize-dash",
	"hook-dsh-normalize-quotes",
	"hook-dsh-normalize-ellipsis",
	"hook-dsh-normalize-spaces",
	"hook-dsh-normalize-invisible",
	"hook-dsh-normalize-fullwidth",
	"hook-dsh-normalize-file",
];
for (const Tree of ["Classic", "EffectTS"]) {
	for (const Name of Packages) {
		const Pkg = JSON.parse(
			await readFile(join(Root, Tree, "packages", Name, "package.json"), "utf8"),
		);
		Check(`${Tree}/${Name}: version vs Versions.Release`, Release, Pkg.version);
		if (Tree === "EffectTS") {
			const EffectPin = Pkg.dependencies?.["effect"] ?? Pkg.peerDependencies?.["effect"];
			Check(`EffectTS/${Name}: effect pin vs Versions.Effect`, Effect, EffectPin);
		}
	}
}

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

// --- Verdict ---
if (Failures > 0) {
	console.error(`\nDRIFT DETECTED: ${Failures} check(s) failed - the content library no longer matches the repo.`);
	process.exit(1);
} else {
	console.log("\nAll content-integrity checks passed - the rendered values match the repo.");
}
