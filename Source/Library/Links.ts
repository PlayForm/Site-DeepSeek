// Links.ts - the family's URL registry: the single source for every external
// URL the site composes. The base URLs appear HERE and nowhere else; the
// markup reads as a function of a URL - "Link(Repo, Path)" - so a page never
// repeats a full address.
//
//   import { Link, Links } from "@Library/Links";
//   <a href={Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts")}>
//     -> https://github.com/deepseek-ai/deepseek-harness/tree/master/packages/llm/llm/src/index.ts
//
// THE TRANSFORM POINT (the reason this file exists): any future URL transform
// - a redirect service, tracking parameters, version bumps, a scheme change -
// is applied HERE, at one point: edit the constants below, or wrap the return
// of Link()/Resolve(), and the whole site follows. No page changes. The
// markdown mirrors this at file scope: each URL repeated in a document gets
// one reference definition at that file's bottom, so the definitions are the
// document's local registry and the full URL appears once per file.
//
// The site's own URL is deliberately absent: astro.config.ts has no `site`
// option set (the built pages carry no canonical or sitemap URLs to compose),
// so there is nothing to register yet - add it here when the site gets one.
// This module is browser-safe (constants + pure string functions only).

/** A repository entry: the bare base URL plus the branch segment links compose with. */
export interface Repo {
	/** The repository's base URL - no branch segment, no trailing slash. */
	Base: string;
	/** The branch segment links compose with: the exact "tree/<branch>" form, never blob. */
	Branch: string;
}

/** The branch segments - the exact "tree/<branch>" forms the linking verified, never blob. */
export const BranchDeepSeek = "tree/master";
export const BranchOurs = "tree/Current";

/** The registry: the only place the base URLs appear. */
export const Links = {
	/** The DeepSeek Harness repository (deepseek-ai), linked at branch master. */
	DeepSeekHarness: {
		Base: "https://github.com/deepseek-ai/deepseek-harness",
		Branch: BranchDeepSeek,
	},
	/** The family's own repository (PlayForm/DeepSeek), linked at branch Current. */
	OurRepo: {
		Base: "https://github.com/PlayForm/DeepSeek",
		Branch: BranchOurs,
	},
} as const satisfies Record<string, Repo>;

/**
 * Compose a full link: the repository's branch segment plus the path.
 * Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts") is the whole
 * contract - pages compose, the registry owns the addresses.
 */
export function Link(Repo: Repo, Path: string): string {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}

/**
 * The prop shorthand for Link(): "Harness:<path>" and "Ours:<path>" resolve
 * through the registry, so a string prop never carries a base URL either.
 * A full URL is accepted only when its origin is one of the registry's own
 * repositories (the safelist) - anything else resolves to null and renders
 * as plain text, never as a link.
 */
export function Resolve(Target: string): string | null {
	const Colon = Target.indexOf(":");
	if (Colon > 0) {
		const Path = Target.slice(Colon + 1);
		if (Target.slice(0, Colon) === "Harness") return Link(Links.DeepSeekHarness, Path);
		if (Target.slice(0, Colon) === "Ours") return Link(Links.OurRepo, Path);
	}
	const Allowed = [Links.DeepSeekHarness.Base, Links.OurRepo.Base];
	if (Allowed.some((Base) => Target === Base || Target.startsWith(`${Base}/`))) {
		return Target;
	}
	return null;
}

/** Escape text for safe interpolation into HTML (the renderer's only escape hatch). */
function Escape(Text: string): string {
	return Text.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

/**
 * Linkify: the string-prop renderer. The Concept/Card/Seams props stay
 * editable plain text in the source; a "[label](target)" segment inside them
 * becomes one safe <a> at render - the label escaped, the target resolved
 * through the registry (Resolve), the href escaped, everything else escaped.
 * A segment whose target does not resolve renders as its literal text.
 */
export function Linkify(Text: string): string {
	let Out = "";
	let Rest = Text;
	const Pattern = /\[([^\]]+)\]\(([^)\s]+)\)/;
	for (;;) {
		const Match = Rest.match(Pattern);
		if (!Match || Match.index === undefined) break;
		const Url = Resolve(Match[2]);
		Out += Escape(Rest.slice(0, Match.index));
		Out +=
			Url === null
				? Escape(Match[0])
				: `<a href="${Escape(Url)}">${Escape(Match[1])}</a>`;
		Rest = Rest.slice(Match.index + Match[0].length);
	}
	return Out + Escape(Rest);
}
