// The URL registry. Every internal link the site prints resolves through this
// module, so a route rename is one edit here rather than a sweep of the pages.
import { Dev } from "./Flag";

export const Site = "https://deepseek.playform.cloud";

export const Repository = "https://github.com/PlayForm/DeepSeek";

export const Route = {
	Home: "/",
	Harness: "/harness/",
	Package: "/package/",
	Showcase: "/showcase/",
	Behavior: "/behavior/",
	Workbench: "/workbench/",
	Turn: "/turn/",
	Intervention: "/intervention/",
	Tutorial: "/tutorial/",
	Tool: "/tool/",
	Message: "/message/",
	Composition: "/composition/",
	Dashboard: "/dashboard/",
	Trace: "/trace/",
	Plugin: "/plugin/",
	Observatory: "/explore/",
	Timeline: "/tl/",
	Setup: "/setup/",
	Reference: "/reference/",
	CaseStudy: "/case-study/",
	Marketplace: "/marketplace/",
	Connect: "/connect/",
	Search: "/search/",
	Library: "/library/",
	Design: "/design/",
	NotFound: "/404/",
};

// The header carries the entries a returning reader needs; the footer carries
// the full sitemap. The two lists are not mirrors.
export const Primary = [
	{ Href: Route.Package, Label: "Package" },
	{ Href: Route.Showcase, Label: "Showcase" },
	{ Href: Route.Behavior, Label: "Behavior" },
	{ Href: Route.Trace, Label: "Trace" },
	{ Href: Route.Setup, Label: "Setup" },
	{ Href: Route.Reference, Label: "Reference" },
];

export const Sitemap = [
	{ Href: Route.Home, Label: "Overview" },
	{ Href: Route.Search, Label: "Search" },
	{ Href: Route.Package, Label: "Package" },
	{ Href: Route.Showcase, Label: "Showcase" },
	{ Href: Route.Behavior, Label: "Behavior" },
	{ Href: Route.Workbench, Label: "Workbench" },
	{ Href: Route.Harness, Label: "Harness" },
	{ Href: Route.Tutorial, Label: "Tutorial" },
	{ Href: Route.Trace, Label: "Trace" },
	{ Href: Route.Timeline, Label: "Timeline" },
	{ Href: Route.Setup, Label: "Setup" },
	{ Href: Route.CaseStudy, Label: "Case study" },
	{ Href: Route.Connect, Label: "Connect" },
	...(Dev
		? [
				{ Href: Route.Library, Label: "Component" },
				{ Href: Route.Design, Label: "Design lab" },
			]
		: []),
];

export function PackageHref(Slug) {
	return `/package/${Slug}/`;
}

// A seam is named area/event, and its page keeps one path segment: the slash
// becomes a dash, so `llm/stream` reads at `/behavior/llm-stream/`.
export function SeamHref(Seam: string): string {
	return `/behavior/${Seam.replace(/\//g, "-")}/`;
}

export function ComponentHref(Slug) {
	return `/library/${Slug}/`;
}

// The lab keeps one path segment per storyboard: the reader prefixes the slug
// with its folder, so the two folders cannot collide on a `README.md`.
export function DesignHref(Slug: string): string {
	return `/design/${Slug}/`;
}

export function IsCurrent(Path, Href) {
	return Href === "/" ? Path === "/" : Path.startsWith(Href.replace(/\/$/, ""));
}
