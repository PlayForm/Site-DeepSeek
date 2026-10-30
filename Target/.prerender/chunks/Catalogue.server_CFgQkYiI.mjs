import { a as Package } from "./Base_Cq25m4iE.mjs";
// Source/Library/Graph/Catalogue.server.ts
function SelectFamily(Roster) {
	return [...new Set(Roster.map((Entry) => Entry.Family))];
}
function SelectKind(Roster) {
	return [...new Set(Roster.map((Entry) => Entry.Kind))];
}
function BuildEdge(Roster) {
	const Slug = new Map(Roster.map((Entry) => [Entry.Name, Entry.Slug]));
	const Edge = [];
	for (const Entry of Roster) for (const Dependency of Entry.Dependencies) {
		const Source = Slug.get(Dependency);
		if (Source !== void 0 && Source !== Entry.Slug) Edge.push({
			Id: `${Source}->${Entry.Slug}`,
			Source,
			Target: Entry.Slug
		});
	}
	return Edge;
}
function CountEdge(Edge, Pick) {
	const Count = /* @__PURE__ */ new Map();
	for (const Entry of Edge) {
		const Key = Entry[Pick];
		Count.set(Key, (Count.get(Key) ?? 0) + 1);
	}
	return Count;
}
function BuildCatalogue() {
	const Edge = BuildEdge(Package);
	const Dependents = CountEdge(Edge, "Source");
	const Dependencies = CountEdge(Edge, "Target");
	return {
		Node: Package.map((Entry) => ({
			Id: Entry.Slug,
			Label: Entry.Slug,
			Kind: Entry.Kind,
			Family: Entry.Family,
			Version: Entry.Version,
			Tests: Entry.Tests,
			Href: Entry.Href,
			Dependencies: Dependencies.get(Entry.Slug) ?? 0,
			Dependents: Dependents.get(Entry.Slug) ?? 0
		})),
		Edge,
		Family: SelectFamily(Package),
		Kind: SelectKind(Package)
	};
}
var Catalogue_server_default = BuildCatalogue();
export { Catalogue_server_default as t };
