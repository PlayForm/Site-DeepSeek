import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

import { SummaryFor } from "../Content/Summary";

// The monorepo is the source of every package fact this site prints. The site
// reads the two package trees at build time rather than carrying a copy of
// their manifests, so a version, a licence, or a new package appears on the
// next build with no page edit.
export type Family = "Classic" | "EffectTS";

export type Kind = "plugin" | "hook" | "lib" | "client" | "base";

export interface PackageRecord {
	Slug: string;
	Family: Family;
	Kind: Kind;
	Name: string;
	Version: string;
	Private: boolean;
	Licence: string;
	Description: string;
	Summary: string;
	Directory: string;
	Href: string;
	Source: string;
	Readme: boolean;
	Scheme: boolean;
	Patch: boolean;
	Dependencies: string[];
	Tests: number;
	Modules: number;
}

export interface PackageCounts {
	All: number;
	Classic: number;
	EffectTS: number;
	Hook: number;
	Plugin: number;
	Library: number;
	Client: number;
	Base: number;
	Test: number;
}

interface Manifest {
	name?: string;
	version?: string;
	private?: boolean;
	license?: string;
	description?: string;
	dependencies?: Record<string, string>;
}

interface Tree {
	Family: Family;
	Directory: string;
}

// `import.meta.url` cannot locate the package trees: Astro bundles this module
// into a prerender chunk under `Target/.prerender/`, so the module's own path
// is the build output rather than the source. Three anchors cover every place
// the site builds: an explicit `DSH_SOURCE_ROOT`, the monorepo above the site
// (local development), and the submodule at `Module/DeepSeek` (CI, where the
// site is checked out alone).
const Submodule = "Module/DeepSeek";

function HoldsTrees(Directory: string): boolean {
	return (
		existsSync(join(Directory, "Classic", "packages")) &&
		existsSync(join(Directory, "EffectTS", "packages"))
	);
}

function FindRoot(): string {
	const Override = process.env["DSH_SOURCE_ROOT"];

	if (Override !== undefined && Override !== "") {
		const Resolved = resolve(Override);

		if (!HoldsTrees(Resolved)) {
			throw new Error(
				`DSH_SOURCE_ROOT points at ${Resolved}, which holds neither Classic/packages nor EffectTS/packages.`,
			);
		}

		return Resolved;
	}

	let Directory = process.cwd();

	for (let Depth = 0; Depth < 8; Depth += 1) {
		if (HoldsTrees(Directory)) {
			return Directory;
		}

		const Parent = dirname(Directory);

		if (Parent === Directory) {
			break;
		}

		Directory = Parent;
	}

	const Module = join(process.cwd(), Submodule);

	if (HoldsTrees(Module)) {
		return Module;
	}

	throw new Error(
		"The package trees are not reachable. Run `git submodule update --init --depth 1 Module/DeepSeek` in Site/, set DSH_SOURCE_ROOT to a monorepo checkout, or build from inside the monorepo.",
	);
}

export const Root = FindRoot();

const Trees: Tree[] = [
	{ Family: "Classic", Directory: join(Root, "Classic", "packages") },
	{ Family: "EffectTS", Directory: join(Root, "EffectTS", "packages") },
];

// The five package kinds, in the order a page presents them.
const KindOrder: Kind[] = ["plugin", "hook", "lib", "client", "base"];

// The branch a package page links its source against.
const Branch = "Current";

function DetectKind(Slug: string): Kind {
	const Stem = Slug.replace(/^ets-/, "");

	return KindOrder.find((Kind) => Stem.startsWith(`${Kind}-`)) ?? "plugin";
}

// A manifest description is engineering prose: it carries file paths, plan
// references, and parentheticals. The card prints the first clause, which is
// the sentence that names what the package does.
function Summarize(Description: string): string {
	const Head = Description.split("(")[0] ?? Description;
	const Sentence = Head.split(/(?:[.!?]\s)|(?:\s[\u2014\u2013]\s)/)[0] ?? Head;
	const Trimmed = Sentence.trim().replace(/[:,]$/, "");

	return Trimmed.length > 180 ? `${Trimmed.slice(0, 177).trimEnd()}...` : Trimmed;
}

// Every `Source/Test/**/Test.ts` in the package is one smoke suite. The count
// is a property of the tree, not a claim in a document.
function CountTests(Directory: string): number {
	const Base = join(Directory, "Source", "Test");

	if (!existsSync(Base)) {
		return 0;
	}

	let Count = 0;

	for (const Entry of readdirSync(Base, { recursive: true, withFileTypes: true })) {
		if (Entry.isFile() && Entry.name === "Test.ts") {
			Count += 1;
		}
	}

	return Count;
}

function CountModules(Directory: string): number {
	const Base = join(Directory, "Source", "Function");

	if (!existsSync(Base)) {
		return 0;
	}

	return readdirSync(Base).filter((Entry) => statSync(join(Base, Entry)).isFile()).length;
}

function ReadPackage(Family: Family, Directory: string, Slug: string): PackageRecord {
	const Manifest = JSON.parse(readFileSync(join(Directory, "package.json"), "utf8")) as Manifest;
	const Description = Manifest.description ?? "";
	const Relative = Directory.slice(Root.length + 1);

	return {
		Slug,
		Family,
		Kind: DetectKind(Slug),
		Name: Manifest.name ?? Slug,
		Version: Manifest.version ?? "0.0.0",
		Private: Manifest.private === true,
		Licence: Manifest.license ?? "unlicensed",
		Description,
		// The summary is trimmed at the source: a page appends a period to it,
		// and a trailing space would put that period one space too far right.
		Summary: (SummaryFor(Slug) ?? Summarize(Description)).trim(),
		Directory: Relative,
		Href: `/package/${Slug}/`,
		Source: `https://github.com/PlayForm/DeepSeek/tree/${Branch}/${Relative}`,
		Readme: existsSync(join(Directory, "README.md")),
		Scheme: existsSync(join(Directory, "SCHEME.md")),
		Patch: existsSync(join(Directory, "cordis.patch.yml")),
		Dependencies: Object.keys(Manifest.dependencies ?? {}),
		Tests: CountTests(Directory),
		Modules: CountModules(Directory),
	};
}

function LoadPackages(): PackageRecord[] {
	const Roster: PackageRecord[] = [];

	for (const { Family, Directory } of Trees) {
		if (!existsSync(Directory)) {
			continue;
		}

		for (const Slug of readdirSync(Directory).sort()) {
			const Package = join(Directory, Slug);

			if (statSync(Package).isDirectory() && existsSync(join(Package, "package.json"))) {
				Roster.push(ReadPackage(Family, Package, Slug));
			}
		}
	}

	return Roster;
}

function CountBy(Roster: PackageRecord[], Match: (Entry: PackageRecord) => boolean): number {
	return Roster.filter(Match).length;
}

// One read per build process: every page imports this module, and the tree is
// read once.
export const Package: PackageRecord[] = LoadPackages();

export const Count: PackageCounts = {
	All: Package.length,
	Classic: CountBy(Package, (Entry) => Entry.Family === "Classic"),
	EffectTS: CountBy(Package, (Entry) => Entry.Family === "EffectTS"),
	Hook: CountBy(Package, (Entry) => Entry.Kind === "hook"),
	Plugin: CountBy(Package, (Entry) => Entry.Kind === "plugin"),
	Library: CountBy(Package, (Entry) => Entry.Kind === "lib"),
	Client: CountBy(Package, (Entry) => Entry.Kind === "client"),
	Base: CountBy(Package, (Entry) => Entry.Kind === "base"),
	Test: Package.reduce((Total, Entry) => Total + Entry.Tests, 0),
};

export const Family: Family[] = ["Classic", "EffectTS"];

export const Kind: Kind[] = KindOrder;

export function FindPackage(Slug: string): PackageRecord | undefined {
	return Package.find((Entry) => Entry.Slug === Slug);
}

export function SelectFamily(Family: Family): PackageRecord[] {
	return Package.filter((Entry) => Entry.Family === Family);
}

export function SelectKind(Kind: Kind): PackageRecord[] {
	return Package.filter((Entry) => Entry.Kind === Kind);
}

export default Package;
