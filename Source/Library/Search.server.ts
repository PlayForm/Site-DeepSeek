// The site-wide search index, built once at build time. Every page imports
// this module only from a prerendered frontmatter, so the package tree, the
// page roster, and the vocabulary are read on the server and shipped to the
// island as plain data.
import { Term } from "../Content/Term";
import { Route } from "./Link";
import { Package } from "./Package.server";

export interface Entry {
	Title: string;
	Detail: string;
	Href: string;
	Group: "Package" | "Page" | "Term";
}

// The fixed pages a reader looks for by name rather than by content. Each row
// is one line of what the page holds.
const Page: Entry[] = [
	{ Title: "Catalogue", Detail: "Every package, filtered by release and kind.", Href: Route.Package, Group: "Page" },
	{ Title: "Showcase", Detail: "The bundles the harness ships, with their categories.", Href: Route.Showcase, Group: "Page" },
	{ Title: "Behavior", Detail: "What the hooks change about a session, seam by seam.", Href: Route.Behavior, Group: "Page" },
	{ Title: "Workbench", Detail: "The live panel a client package renders.", Href: Route.Workbench, Group: "Page" },
	{ Title: "Observatory", Detail: "The dependency graph, laid out and queryable.", Href: Route.Observatory, Group: "Page" },
	{ Title: "Timeline", Detail: "The releases in order, one line per version.", Href: Route.Timeline, Group: "Page" },
	{ Title: "Setup", Detail: "How to install the harness and run it.", Href: Route.Setup, Group: "Page" },
	{ Title: "Reference", Detail: "The vocabulary, one word per concept.", Href: Route.Reference, Group: "Page" },
	{ Title: "Case study", Detail: "One project, wired end to end with the hooks.", Href: Route.CaseStudy, Group: "Page" },
	{ Title: "Marketplace", Detail: "The bundle index a reader can install from.", Href: Route.Marketplace, Group: "Page" },
	{ Title: "Connect", Detail: "Where to reach the project and its channels.", Href: Route.Connect, Group: "Page" },
];

const PackageEntry: Entry[] = Package.map((Record) => ({
	Title: Record.Slug,
	Detail: `${Record.Summary} (${Record.Kind}, ${Record.Family})`,
	Href: Record.Href,
	Group: "Package",
}));

const TermEntry: Entry[] = Object.values(Term).map((Record) => ({
	Title: Record.Name,
	Detail: Record.Meaning,
	Href: Route.Reference,
	Group: "Term",
}));

const GroupOrder: Entry["Group"][] = ["Package", "Page", "Term"];

export const Search: Entry[] = [...PackageEntry, ...Page, ...TermEntry].sort(
	(Left, Right) =>
		GroupOrder.indexOf(Left.Group) - GroupOrder.indexOf(Right.Group) ||
		Left.Title.localeCompare(Right.Title),
);

export default Search;
