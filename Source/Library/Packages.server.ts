import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

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
	Hooks: number;
	Plugins: number;
	Libraries: number;
	Clients: number;
	Bases: number;
	Tests: number;
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

// `import.meta.url` cannot locate the monorepo: Astro bundles this module into
// a prerender chunk under `Target/.prerender/`, so the module's own path is
// the build output rather than the source. The walk from the working
// directory finds the directory that holds both package trees, and it holds
// for a page's frontmatter and for a route's `getStaticPaths` alike.
function FindRoot(): string {
	let Directory = process.cwd();

	for (let Depth = 0; Depth < 8; Depth += 1) {
		const Classic = existsSync(join(Directory, "Classic", "packages"));
		const EffectTS = existsSync(join(Directory, "EffectTS", "packages"));

		if (Classic && EffectTS) {
			return Directory;
		}

		const Parent = dirname(Directory);

		if (Parent === Directory) {
			break;
		}

		Directory = Parent;
	}

	throw new Error(
		"The monorepo root was not found: no ancestor of the working directory holds Classic/packages and EffectTS/packages. Build the site from inside the monorepo.",
	);
}

const Root = FindRoot();

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
		Summary: Summarize(Description),
		Directory: Relative,
		Href: `/plugins/${Slug}/`,
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

function CountBy(Packages: PackageRecord[], Match: (Package: PackageRecord) => boolean): number {
	return Packages.filter(Match).length;
}

// One read per build process: every page imports this module, and the tree is
// read once.
export const Packages: PackageRecord[] = LoadPackages();

export const Counts: PackageCounts = {
	All: Packages.length,
	Classic: CountBy(Packages, (Package) => Package.Family === "Classic"),
	EffectTS: CountBy(Packages, (Package) => Package.Family === "EffectTS"),
	Hooks: CountBy(Packages, (Package) => Package.Kind === "hook"),
	Plugins: CountBy(Packages, (Package) => Package.Kind === "plugin"),
	Libraries: CountBy(Packages, (Package) => Package.Kind === "lib"),
	Clients: CountBy(Packages, (Package) => Package.Kind === "client"),
	Bases: CountBy(Packages, (Package) => Package.Kind === "base"),
	Tests: Packages.reduce((Total, Package) => Total + Package.Tests, 0),
};

export const Families: Family[] = ["Classic", "EffectTS"];

export const Kinds: Kind[] = KindOrder;

export function FindPackage(Slug: string): PackageRecord | undefined {
	return Packages.find((Package) => Package.Slug === Slug);
}

export function SelectFamily(Family: Family): PackageRecord[] {
	return Packages.filter((Package) => Package.Family === Family);
}

export function SelectKind(Kind: Kind): PackageRecord[] {
	return Packages.filter((Package) => Package.Kind === Kind);
}

export default Packages;
