// DiagramNav.ts - the diagrams as navigation. Two halves, both shared by
// every surface that renders a pre-baked Mermaid SVG (Concept.astro, the
// pinner page's diagram figures):
//
//   1. THE LINKED NODES (build time): a Mermaid node whose label names a
//      concrete artifact of the family (a plugin package, the factory's
//      cordis.patch.yml) becomes a real anchor into the monorepo - the
//      tree/Current links composed through the one registry (Links.ts,
//      Resolve()'s safelist). Enhance() wraps the matching node group in an
//      SVG2 <a>; an unregistered label stays untouched (never a guessed
//      link). No runtime Mermaid, no network: this runs on the pre-baked
//      SVG string at build time.
//
//   2. THE OVERLAY SCRIPT (runtime, in Layout/Base.astro): a tiny delegated
//      listener that highlights the RELATED nodes on hover/focus - the
//      adjacency is read from the Mermaid edge ids (L_FROM_TO_0 between
//      node ids flowchart-FROM-N / flowchart-TO-N), so the pre-baked SVGs
//      need no re-render. The highlight styles live in Global.css and are
//      token-based (the Harness Blue, the fast duration), so they follow
//      both themes.

import { Resolve } from "@Library/Links";

/**
 * The node-label registry: the first pattern that matches a node's label
 * text decides its link. Every target goes through Resolve(), so an
 * unregistered target degrades to no link (the node stays inert), never to
 * an off-registry URL.
 */
const NodeLinks: ReadonlyArray<readonly [RegExp, string]> = [
	// The specific packages first (the shared "-dsh-hook" suffix never
	// collides, but the order keeps the intent readable).
	[/hook-dsh-package-pinner/, "Ours:Classic/packages/hook-dsh-package-pinner/Source"],
	[/hook-dsh-package-governor/, "Ours:Classic/packages/hook-dsh-package-governor/Source"],
	[/hook-dsh-cargo-governor/, "Ours:Classic/packages/hook-dsh-cargo-governor/Source"],
	[/hook-dsh-normalize-dash/, "Ours:Classic/packages/hook-dsh-normalize-dash/Source"],
	[/hook-dsh-normalize-ellipsis/, "Ours:Classic/packages/hook-dsh-normalize-ellipsis/Source"],
	[/hook-dsh-normalize-file/, "Ours:Classic/packages/hook-dsh-normalize-file/Source"],
	[/hook-dsh-normalize-fullwidth/, "Ours:Classic/packages/hook-dsh-normalize-fullwidth/Source"],
	[/hook-dsh-normalize-invisible/, "Ours:Classic/packages/hook-dsh-normalize-invisible/Source"],
	[/hook-dsh-normalize-quotes/, "Ours:Classic/packages/hook-dsh-normalize-quotes/Source"],
	[/hook-dsh-normalize-spaces/, "Ours:Classic/packages/hook-dsh-normalize-spaces/Source"],
	[/dsh-plugin-factory/, "Ours:Classic/packages/dsh-plugin-factory/Source"],
	[/hook-dsh-core/, "Ours:Classic/packages/hook-dsh-core/Source"],
	// The factory's patch config, named verbatim in some labels.
	[/cordis\.patch\.yml/, "Ours:Classic/packages/dsh-plugin-factory/cordis.patch.yml"],
] as const;

/**
 * The link for a node label, or null when no registered artifact matches.
 */
export function DiagramNodeLink(Label: string): string | null {
	for (const [Pattern, Target] of NodeLinks) {
		if (Pattern.test(Label)) return Resolve(Target);
	}
	return null;
}

/** The visible text of one Mermaid node group (the label's tspans, joined). */
function NodeLabel(Group: string): string {
	const Spans = Group.match(/<tspan[^>]*>([^<]*)<\/tspan>/g) ?? [];
	return Spans.map((Span) => Span.replace(/<[^>]*>/g, "")).join(" ");
}

/**
 * Enhance a pre-baked Mermaid SVG string: every node group whose label
 * resolves to a registered artifact gets wrapped in
 * `<a class="diagram-node-link" href="...">`. The wrapper carries no
 * transform - the node's own `<g class="node" transform=...>` keeps the
 * geometry byte-identical; only the anchor is added around it.
 */
export function Enhance(Svg: string): string {
	// `node` but never `nodes` (the lookalike container class): the
	// lookahead keeps the scanner on the actual node groups.
	const NodeOpen = /<g class="node(?![a-z])/g;
	let Out = "";
	let Cursor = 0;
	for (;;) {
		const Match = NodeOpen.exec(Svg);
		if (Match === null) break;
		const Start = Match.index;
		// Find this group's matching `</g>` with a depth scan (the node
		// group nests label groups inside it, so a naive first-close scan
		// would truncate it).
		const Token = /<g[\s>]|<\/g>/g;
		Token.lastIndex = Start;
		let Depth = 0;
		let End = -1;
		for (;;) {
			const TokenMatch = Token.exec(Svg);
			if (TokenMatch === null) break;
			Depth += TokenMatch[0] === "</g>" ? -1 : 1;
			if (Depth === 0) {
				End = Token.lastIndex;
				break;
			}
		}
		if (End < 0) break;
		const Url = DiagramNodeLink(NodeLabel(Svg.slice(Start, End)));
		if (Url !== null) {
			Out += Svg.slice(Cursor, Start);
			Out += `<a class="diagram-node-link" href="${Url}">${Svg.slice(Start, End)}</a>`;
			Cursor = End;
		}
	}
	return Out + Svg.slice(Cursor);
}
