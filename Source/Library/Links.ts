// Links.ts - the family's URL registry.
// It is the single source of EVERY base URL the site and the docs are
// generated from.
// Pages and components NEVER spell out a repository URL.
// They compose ONE through Link() from a registry entry plus a path, so a
// URL scheme change, a version bump or a future transform (a redirect
// service, tracking, a branch rename) edits this file alone.
//
// The registry is also the markdown layer's authority.
// The READMEs and the handoff docs carry ONE link-reference definition per
// repeated URL, and the definitions mirror the base URLs and branch segments
// defined here.
//
// BRANCH FORM LAW: repository links are ALWAYS tree/<branch> (NEVER blob),
// matching the exact forms the term-linking pass verified across the site,
// the READMEs and the Documentation tree.
//
// THE TRANSFORM POINT: ANY future URL transform applies in Link() (and in
// the markdown definitions), site-wide and doc-wide, WITHOUT touching a
// single page or component.
// Link() is the ONE function EVERY composed URL flows through.
// Resolve() is the ONE gate EVERY string-prop link target passes before it
// may render as an <a>.
//
// THE MENTION LAYER: Linkify renders through Mention (Library/FileIcon.ts),
// so EVERY string prop that flows through it (the Card Desc, the Concept
// Diagram briefs, the Seams cells) also renders EVERY file mention with its
// file-type icon - and the .log filenames as the special log chips.
// The visible text bytes stay byte-exact.
// ONLY UI adornment is added.

/** A repository entry: the bare clone URL plus the branch segment links compose with. */
export interface Repository {
	/** The repository's base URL (no branch, no trailing slash). */
	Base: string;
	/** The branch segment, ALWAYS in the tree/<branch> form. */
	Branch: string;
}

/** The branch segments - the two exact forms the linking pass verified. */
export const BranchDeepSeek = "tree/master";
export const BranchOurs = "tree/Current";

/**
 * The registry.
 * ONLY the Base and Branch values above may name a host.
 * EVERY other URL on the site is composed from these.
 * The site's own base URL is Site below: the header brand links to it and
 * astro.config.ts mirrors it (the config cannot import this module at
 * config-eval time, so it repeats the expression with a comment pointing
 * here).
 *
 * Site is environment-keyed: in development (NODE_ENV, the same key the
 * service-worker gate in astro.config.ts uses) EVERY URL the site emits is
 * http://localhost:9999 so ALL links, canonicals and og:url resolve against
 * the dev server.
 * The build (NODE_ENV unset) keeps the canonical
 * https://deepseek.playform.cloud, so the published SEO surface - canonical
 * tags, og:url, the sitemap and the JSON-LD - NEVER leaks localhost.
 */
export const Links = {
	/** The site's own base URL - what the site is served from (dev or deployed). */
	Site:
		process.env["NODE_ENV"] === "development"
			? "http://localhost:9999"
			: "https://deepseek.playform.cloud",
	/** The DeepSeek Harness repository (deepseek-ai), linked at branch master. */
	DeepSeekHarness: { Base: "https://github.com/deepseek-ai/deepseek-harness", Branch: BranchDeepSeek },
	/** The family monorepo - this site's own repository (PlayForm/DeepSeek), at branch Current. */
	OurRepo: { Base: "https://github.com/PlayForm/DeepSeek", Branch: BranchOurs },
} as const satisfies Record<string, Repository | string>;

/**
 * Compose a repository URL: Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts")
 * -> "https://github.com/deepseek-ai/deepseek-harness/tree/master/packages/llm/llm/src/index.ts".
 * The ONE function EVERY composed URL flows through - the future transform
 * point for redirects, tracking, version bumps and scheme changes.
 */
export function Link(Repository: Repository, Path: string): string {
	return `${Repository.Base}/${Repository.Branch}/${Path}`;
}

/** The string-prop shorthand keys: "Key:Path" targets resolved through the registry. */
const Shorthand: Record<string, Repository> = {
	Harness: Links.DeepSeekHarness,
	Ours: Links.OurRepo,
};

/** The registered origins - the ONLY absolute URLs a string prop may link to. */
const Safelist = /^(?:https:\/\/(?:github\.com\/deepseek-ai\/deepseek-harness|github\.com\/PlayForm\/DeepSeek)\/)/;

import { Mention } from "@Library/FileIcon";

/**
 * Resolve a string-prop link target to a verified URL, or null when the
 * target is not registered. Accepts the "Harness:<path>" / "Ours:<path>"
 * shorthand (composed through Link) and an absolute URL on a registered
 * origin; anything else is refused and rendered as plain text.
 */
export function Resolve(Target: string): string | null {
	const Colon = Target.indexOf(":");
	if (Colon > 0) {
		const Repository = Shorthand[Target.slice(0, Colon)];
		if (Repository) return Link(Repository, Target.slice(Colon + 1));
	}
	if (Safelist.test(Target)) return Target;
	return null;
}

/** Escape a text fragment for safe interpolation into HTML. */
function Escape(Text: string): string {
	return Text.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

/**
 * Linkify: the string-prop renderer.
 * The Concept/Card/Seams string props are plain editable text that may carry
 * lightweight inline links - a "[label](Harness:packages/...)" /
 * "[label](Ours:...)" segment - and this function turns exactly those
 * segments into safe <a> elements.
 * EVERY other character is escaped (the label and the surrounding text
 * alike).
 * The URL is composed through Link() and guarded by Resolve()'s registry
 * safelist.
 * An unregistered target degrades to its literal text.
 * The props stay plain text in the source.
 * The rendering is a function of the registry.
 *
 * EVERY text segment also passes through Mention (the file-icon + log-chip
 * renderer), so a filename in a Desc / Diagram / Seam string carries its
 * file-type icon on the left - the file mentions render the same way on
 * EVERY string-prop surface.
 */
export function Linkify(Text: string): string {
	let Out = "";
	let Rest = Text;
	const Pattern = /\[([^\]]+)\]\(([^()\s]+)\)/;
	for (;;) {
		const Match = Rest.match(Pattern);
		if (!Match || Match.index === undefined) break;
		const URL = Resolve(Match[2]);
		Out += Mention(Rest.slice(0, Match.index));
		Out +=
			URL === null
				? Mention(Match[0])
				: `<a href="${Escape(URL)}">${Mention(Match[1])}</a>`;
		Rest = Rest.slice(Match.index + Match[0].length);
	}
	return Out + Mention(Rest);
}
