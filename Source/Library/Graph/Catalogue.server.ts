import { Packages, type PackageRecord } from "../Packages.server";

// The catalogue is the renderer boundary: plain, serializable records that a
// browser island can receive as props. The module that reads the monorepo
// never enters a browser import chain.

export interface GraphNode {
	Id: string;
	Label: string;
	Kind: string;
	Family: string;
	Version: string;
	Tests: number;
	Href: string;
	Dependencies: number;
	Dependents: number;
}

export interface GraphEdge {
	Id: string;
	Source: string;
	Target: string;
}

export interface Catalogue {
	Nodes: GraphNode[];
	Edges: GraphEdge[];
	Families: string[];
	Kinds: string[];
}

function SelectFamilies(Packages: PackageRecord[]): string[] {
	return [...new Set(Packages.map((Package) => Package.Family))];
}

function SelectKinds(Packages: PackageRecord[]): string[] {
	return [...new Set(Packages.map((Package) => Package.Kind))];
}

// The edge points from the dependency to the consumer: the arrow reads "is
// required by". A dependency outside the family is not an edge.
function BuildEdges(Packages: PackageRecord[]): GraphEdge[] {
	const Slugs = new Map(Packages.map((Package) => [Package.Name, Package.Slug]));
	const Edges: GraphEdge[] = [];

	for (const Package of Packages) {
		for (const Dependency of Package.Dependencies) {
			const Source = Slugs.get(Dependency);

			if (Source !== undefined && Source !== Package.Slug) {
				Edges.push({
					Id: `${Source}->${Package.Slug}`,
					Source,
					Target: Package.Slug,
				});
			}
		}
	}

	return Edges;
}

function CountEdges(Edges: GraphEdge[], Pick: "Source" | "Target"): Map<string, number> {
	const Counts = new Map<string, number>();

	for (const Edge of Edges) {
		const Key = Edge[Pick];

		Counts.set(Key, (Counts.get(Key) ?? 0) + 1);
	}

	return Counts;
}

export function BuildCatalogue(): Catalogue {
	const Edges = BuildEdges(Packages);
	const Dependents = CountEdges(Edges, "Source");
	const Dependencies = CountEdges(Edges, "Target");

	const Nodes: GraphNode[] = Packages.map((Package) => ({
		Id: Package.Slug,
		Label: Package.Slug,
		Kind: Package.Kind,
		Family: Package.Family,
		Version: Package.Version,
		Tests: Package.Tests,
		Href: Package.Href,
		Dependencies: Dependencies.get(Package.Slug) ?? 0,
		Dependents: Dependents.get(Package.Slug) ?? 0,
	}));

	return {
		Nodes,
		Edges,
		Families: SelectFamilies(Packages),
		Kinds: SelectKinds(Packages),
	};
}

export default BuildCatalogue();
