// The URL registry. Every internal link the site prints resolves through this
// module, so a route rename is one edit here rather than a sweep of the pages.
import { Dev } from "./Flag";

export const Site = "https://deepseek.playform.cloud";

export const Repository = "https://github.com/PlayForm/DeepSeek";

export const Route = {
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
	{ Href: Route.Package, Label: "Package" },
	{ Href: Route.Showcase, Label: "Showcase" },
	{ Href: Route.Behavior, Label: "Behavior" },
	{ Href: Route.Observatory, Label: "Observatory" },
	{ Href: Route.Setup, Label: "Setup" },
	{ Href: Route.Reference, Label: "Reference" },
];

export const Sitemap = [
	{ Href: Route.Home, Label: "Overview" },
	{ Href: Route.Package, Label: "Package" },
	{ Href: Route.Showcase, Label: "Showcase" },
	{ Href: Route.Behavior, Label: "Behavior" },
	{ Href: Route.Observatory, Label: "Observatory" },
	{ Href: Route.Timeline, Label: "Timeline" },
	{ Href: Route.Setup, Label: "Setup" },
	{ Href: Route.Reference, Label: "Reference" },
	{ Href: Route.CaseStudy, Label: "Case study" },
	{ Href: Route.Marketplace, Label: "Marketplace" },
	{ Href: Route.Connect, Label: "Connect" },
	...(Dev ? [{ Href: Route.Library, Label: "Component" }] : []),
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
