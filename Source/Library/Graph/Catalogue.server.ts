import { Package, type PackageRecord } from "../Package.server";

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

function SelectFamilies(Roster: PackageRecord[]): string[] {
	return [...new Set(Roster.map((Entry) => Entry.Family))];
}

function SelectKinds(Roster: PackageRecord[]): string[] {
	return [...new Set(Roster.map((Entry) => Entry.Kind))];
}

// The edge points from the dependency to the consumer: the arrow reads "is
// required by". A dependency outside the family is not an edge.
function BuildEdges(Roster: PackageRecord[]): GraphEdge[] {
	const Slugs = new Map(Roster.map((Entry) => [Entry.Name, Entry.Slug]));
	const Edges: GraphEdge[] = [];

	for (const Entry of Roster) {
		for (const Dependency of Entry.Dependencies) {
			const Source = Slugs.get(Dependency);

			if (Source !== undefined && Source !== Entry.Slug) {
				Edges.push({
					Id: `${Source}->${Entry.Slug}`,
					Source,
					Target: Entry.Slug,
				});
			}
		}
	}

	return Edges;
}

function CountEdges(Edges: GraphEdge[], Pick: "Source" | "Target"): Map<string, number> {
	const Count = new Map<string, number>();

	for (const Edge of Edges) {
		const Key = Edge[Pick];

		Count.set(Key, (Count.get(Key) ?? 0) + 1);
	}

	return Count;
}

export function BuildCatalogue(): Catalogue {
	const Edges = BuildEdges(Package);
	const Dependents = CountEdges(Edges, "Source");
	const Dependencies = CountEdges(Edges, "Target");

	const Nodes: GraphNode[] = Package.map((Entry) => ({
		Id: Entry.Slug,
		Label: Entry.Slug,
		Kind: Entry.Kind,
		Family: Entry.Family,
		Version: Entry.Version,
		Tests: Entry.Tests,
		Href: Entry.Href,
		Dependencies: Dependencies.get(Entry.Slug) ?? 0,
		Dependents: Dependents.get(Entry.Slug) ?? 0,
	}));

	return {
		Nodes,
		Edges,
		Families: SelectFamilies(Package),
		Kinds: SelectKinds(Package),
	};
}

export default BuildCatalogue();
