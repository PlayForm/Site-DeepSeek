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
	Node: GraphNode[];
	Edge: GraphEdge[];
	Family: string[];
	Kind: string[];
}

function SelectFamily(Roster: PackageRecord[]): string[] {
	return [...new Set(Roster.map((Entry) => Entry.Family))];
}

function SelectKind(Roster: PackageRecord[]): string[] {
	return [...new Set(Roster.map((Entry) => Entry.Kind))];
}

// The edge points from the dependency to the consumer: the arrow reads "is
// required by". A dependency outside the family is not an edge.
function BuildEdge(Roster: PackageRecord[]): GraphEdge[] {
	const Slug = new Map(Roster.map((Entry) => [Entry.Name, Entry.Slug]));
	const Edge: GraphEdge[] = [];

	for (const Entry of Roster) {
		for (const Dependency of Entry.Dependencies) {
			const Source = Slug.get(Dependency);

			if (Source !== undefined && Source !== Entry.Slug) {
				Edge.push({
					Id: `${Source}->${Entry.Slug}`,
					Source,
					Target: Entry.Slug,
				});
			}
		}
	}

	return Edge;
}

function CountEdge(Edge: GraphEdge[], Pick: "Source" | "Target"): Map<string, number> {
	const Count = new Map<string, number>();

	for (const Entry of Edge) {
		const Key = Entry[Pick];

		Count.set(Key, (Count.get(Key) ?? 0) + 1);
	}

	return Count;
}

export function BuildCatalogue(): Catalogue {
	const Edge = BuildEdge(Package);
	const Dependents = CountEdge(Edge, "Source");
	const Dependencies = CountEdge(Edge, "Target");

	const Node: GraphNode[] = Package.map((Entry) => ({
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
		Node,
		Edge,
		Family: SelectFamily(Package),
		Kind: SelectKind(Package),
	};
}

export default BuildCatalogue();
