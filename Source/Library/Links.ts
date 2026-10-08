// Links.ts - the family's URL registry: the single place the repository base
// URLs and the branch segments appear, plus the Link() composer and the
// Linkify() string-prop renderer built on top of them.
//
// The registry serves three surfaces:
//   - the .astro pages, which compose every href through Link() so no page
//     repeats a base URL (the markup reads as a function of a URL: the
//     DeepSeek Harness repo + a specific part of its internals -> the link);
//   - the string props (Concept's Diagram, Card's Desc, Seams' What / Seam /
//     Outcome), which stay plain text in the source and carry a lightweight
//     inline-link syntax that Linkify() turns into safe <a> elements;
//   - the future transforms: every URL-scheme decision - a redirect service,
//     tracking parameters, version bumps, the branch segments, the hosting
//     scheme itself - applies HERE, in the two constants and in Link(),
//     site-wide, without touching a single page.
//
// The site's own URL is deliberately absent: astro.config.ts carries the
// `site` option as a TODO (no canonical or sitemap hrefs are emitted), so
// there is nothing to register yet. When a domain lands, it gets its entry
// here, next to the two repositories, and nowhere else.

/** A repository entry: the bare base URL plus the branch segment links compose with. */
export interface Repo {
	/** The bare repository URL - no branch, no trailing slash. */
	Base: string;
	/** The branch segment inserted between the base and the path ("tree/master" form, never "blob"). */
	Branch: string;
}

/** The branch segment of the deepseek-ai tree links. */
export const BranchDeepSeek = "tree/master";

/** The branch segment of our own tree links. */
export const BranchOurs = "tree/Current";

/** The registered repositories - the only base URLs the site knows. */
export const Links = {
	/** The DeepSeek Harness repository (the upstream we link into). */
	DeepSeekHarness: {
		Base: "https://github.com/deepseek-ai/deepseek-harness",
		Branch: BranchDeepSeek,
	},
	/** Our own monorepo (this site's source of truth). */
	OurRepo: {
		Base: "https://github.com/PlayForm/DeepSeek",
		Branch: BranchOurs,
	},
} as const satisfies Record<string, Repo>;

/**
 * Compose a repository link: Link(Links.DeepSeekHarness, "packages/llm/llm/src/index.ts")
 * -> "https://github.com/deepseek-ai/deepseek-harness/tree/master/packages/llm/llm/src/index.ts".
 *
 * THE TRANSFORM POINT: a future URL transform (redirect service, tracking,
 * version bumps, scheme changes) is applied here, once, and every composed
 * link on the site follows.
 */
export function Link(Repo: Repo, Path: string): string {
	return `${Repo.Base}/${Repo.Branch}/${Path}`;
}

/** Escape text for safe HTML interpolation: everything is escaped, nothing passes through. */
function Escape(Text: string): string {
	return Text.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

/** Resolve a Linkify target to a registered URL, or null when the target is not safelisted. */
function Resolve(Target: string): string | null {
	// The registry shorthand: "DeepSeekHarness:packages/llm/llm/src/index.ts"
	// composes through Link(), so the prop strings never repeat a base URL.
	const Shorthand = /^(DeepSeekHarness|OurRepo):(.+)$/.exec(Target);
	if (Shorthand) {
		return Link(Links[Shorthand[1] as keyof typeof Links], Shorthand[2]);
	}
	// A full URL is allowed only when it points into a registered repository.
	if (
		/^https:\/\//i.test(Target) &&
		Object.values(Links).some((Repo) => Target.startsWith(`${Repo.Base}/`))
	) {
		return Target;
	}
	return null;
}

/**
 * Render a string prop as safe HTML: the [text](target) segments become <a>
 * elements, everything else - and the link labels themselves - is escaped.
 * The target accepts the registry shorthand ("DeepSeekHarness:path",
 * "OurRepo:path") or a full URL into a registered repository; anything else
 * renders as plain escaped text, so an unregistered or hostile target can
 * never produce a link.
 */
export function Linkify(Text: string): string {
	const Pattern = /\[([^\]]+)\]\(([^()\s]+)\)/g;
	let Out = "";
	let At = 0;
	for (const Match of Text.matchAll(Pattern)) {
		Out += Escape(Text.slice(At, Match.index));
		const Href = Resolve(Match[2]);
		Out += Href ? `<a href="${Escape(Href)}">${Escape(Match[1])}</a>` : Escape(Match[0]);
		At = Match.index + Match[0].length;
	}
	Out += Escape(Text.slice(At));
	return Out;
}
