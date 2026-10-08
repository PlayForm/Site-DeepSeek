// Links.ts - the family's URL registry: the single source of every base URL
// the site and the docs are generated from. Pages and components never spell
// out a repository URL; they compose one through Link() from a registry entry
// plus a path, so a URL scheme change, a version bump or a future transform
// (a redirect service, tracking, a branch rename) edits THIS file alone.
//
// The registry is also the markdown layer's authority: the READMEs and the
// handoff docs carry one link-reference definition per repeated URL, and the
// definitions mirror the base URLs and branch segments defined here.
//
// BRANCH FORM LAW: repository links are always tree/<branch> (never blob),
// matching the exact forms the term-linking pass verified across the site,
// the READMEs and the Documentation tree.
//
// THE TRANSFORM POINT: any future URL transform applies in Link() (and in
// the markdown definitions), site-wide and doc-wide, without touching a
// single page or component. Link() is the one function every composed URL
// flows through; Resolve() is the one gate every string-prop link target
// passes before it may render as an <a>.

/** A repository entry: the bare clone URL plus the branch segment links compose with. */
export interface Repo {
	/** The repository's base URL (no branch, no trailing slash). */
	Base: string;
	/** The branch segment, always in the tree/<branch> form. */
	Branch: string;
}

/** The branch segments - the two exact forms the linking pass verified. */
export const BranchDeepSeek = "tree/master";
export const BranchOurs = "tree/Current";

/**
 * The registry. Only the Base and Branch values above may name a host; every
 * other URL on the site is composed from these. The site carries no URL of
 * its own yet: astro.config.ts leaves `site` unset (the TODO comment), the
 * built HTML has no canonical or sitemap hrefs, so there is no Links.Site
 * entry to invent - add one here, beside the repos, when the site deploys
 * under a domain.
 */
export const Links = {
	/** The DeepSeek Harness repository (deepseek-ai), linked at branch master. */
	DeepSeekHarness: { Base: "https://github.com/deepseek-ai/deepseek-harness", Branch: BranchDeepSeek },
	/** The family monorepo - this site's own repository (PlayForm/DeepSeek), at branch Current. */
	OurRepo: { Base: "https://github.com/PlayForm/DeepSeek", Branch: BranchOurs },
} as const satisfies Record<string, Repo>;

/**
 * Compose a repository URL: Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts")
 * -> "https://github.com/deepseek-ai/deepseek-harness/tree/master/packages/llm/llm/src/index.ts".
 * The one function every composed URL flows through - the future transform
 * point for redirects, tracking, version bumps and scheme changes.
 */
export function Link(Repo: Repo, Path: string): string {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}

/** The string-prop shorthand keys: "Key:Path" targets resolved through the registry. */
const Shorthand: Record<string, Repo> = {
	Harness: Links.DeepSeekHarness,
	Ours: Links.OurRepo,
};

/** The registered origins - the only absolute URLs a string prop may link to. */
const Safelist = /^(?:https:\/\/(?:github\.com\/deepseek-ai\/deepseek-harness|github\.com\/PlayForm\/DeepSeek)\/)/;

/**
 * Resolve a string-prop link target to a verified URL, or null when the
 * target is not registered. Accepts the "Harness:<path>" / "Ours:<path>"
 * shorthand (composed through Link) and an absolute URL on a registered
 * origin; anything else is refused and rendered as plain text.
 */
export function Resolve(Target: string): string | null {
	const Colon = Target.indexOf(":");
	if (Colon > 0) {
		const Repo = Shorthand[Target.slice(0, Colon)];
		if (Repo) return Link(Repo, Target.slice(Colon + 1));
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
 * Linkify: the string-prop renderer. The Concept/Card/Seams string props are
 * plain editable text that may carry lightweight inline links - a
 * "[label](Harness:packages/...)" / "[label](Ours:...)" segment - and this
 * function turns exactly those segments into safe <a> elements: every other
 * character is escaped (the label and the surrounding text alike), the URL is
 * composed through Link() and guarded by Resolve()'s registry safelist, and
 * an unregistered target degrades to its literal text. The props stay plain
 * text in the source; the rendering is a function of the registry.
 */
export function Linkify(Text: string): string {
	let Out = "";
	let Rest = Text;
	const Pattern = /\[([^\]]+)\]\(([^()\s]+)\)/;
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
