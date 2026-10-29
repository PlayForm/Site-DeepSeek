// The URL registry. Every internal link the site prints resolves through this
// module, so a route rename is one edit here rather than a sweep of the pages.
export const Site = "https://deepseek.playform.cloud";

export const Repository = "https://github.com/PlayForm/DeepSeek";

export const Routes = {
	Home: "/",
	Package: "/package/",
	Showcase: "/showcase/",
	Behavior: "/behavior/",
	Observatory: "/explore/",
	Timeline: "/tl/",
	Setup: "/setup/",
	Reference: "/reference/",
	CaseStudy: "/case-study/",
	Marketplace: "/marketplace/",
	Connect: "/connect/",
	Library: "/library/",
	NotFound: "/404/",
};

// The header carries the entries a returning reader needs; the footer carries
// the full sitemap. The two lists are not mirrors.
export const Primary = [
	{ Href: Routes.Package, Label: "Package" },
	{ Href: Routes.Showcase, Label: "Showcase" },
	{ Href: Routes.Behavior, Label: "Behavior" },
	{ Href: Routes.Observatory, Label: "Observatory" },
	{ Href: Routes.Setup, Label: "Setup" },
	{ Href: Routes.Reference, Label: "Reference" },
];

export const Sitemap = [
	{ Href: Routes.Home, Label: "Overview" },
	{ Href: Routes.Package, Label: "Package" },
	{ Href: Routes.Showcase, Label: "Showcase" },
	{ Href: Routes.Behavior, Label: "Behavior" },
	{ Href: Routes.Observatory, Label: "Observatory" },
	{ Href: Routes.Timeline, Label: "Timeline" },
	{ Href: Routes.Setup, Label: "Setup" },
	{ Href: Routes.Reference, Label: "Reference" },
	{ Href: Routes.CaseStudy, Label: "Case study" },
	{ Href: Routes.Marketplace, Label: "Marketplace" },
	{ Href: Routes.Connect, Label: "Connect" },
	{ Href: Routes.Library, Label: "Component" },
];

export function PackageHref(Slug) {
	return `/package/${Slug}/`;
}

export function ComponentHref(Slug) {
	return `/library/${Slug}/`;
}

export function IsCurrent(Path, Href) {
	return Href === "/" ? Path === "/" : Path.startsWith(Href.replace(/\/$/, ""));
}
