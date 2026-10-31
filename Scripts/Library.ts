// The library check, run as the sixth check of `pnpm Check`:
//
//     node Scripts/Library.ts
//
// The registry names every component and the states its preview draws. This
// check reads the registry and the preview source and exits non-zero when a
// slug has no preview block or a declared state is not named in that block.
//
// It reads source rather than the built output because the library is a
// development surface: a production build publishes no `/library/` route to
// inspect, and the preview file is the one artifact that proves the vocabulary
// exists before a lane composes a page.

import { readFileSync } from "node:fs";
import { join } from "node:path";

import { Component } from "../Source/Library/Component.ts";

const Preview = readFileSync(join(process.cwd(), "Source", "Library", "Preview.astro"), "utf8");

// A block is marked by a comment naming its slug and runs to the next marker.
// The marker is an Astro comment, so it never reaches the built page.
const Marker = /\{\/\* Library: ([a-z0-9-]+) \*\/\}/g;
const Hit = [...Preview.matchAll(Marker)];
const Block = new Map<string, string>();

for (const [Index, Match] of Hit.entries()) {
	const Start = (Match.index ?? 0) + Match[0].length;
	const End = Index + 1 < Hit.length ? (Hit[Index + 1].index ?? Preview.length) : Preview.length;

	Block.set(Match[1]!, Preview.slice(Start, End));
}

export function Library(): string[] {
	const Issue: string[] = [];

	for (const Entry of Component) {
		const Text = Block.get(Entry.Slug);

		if (Text === undefined) {
			Issue.push(`${Entry.Name} (${Entry.Slug}): no preview block`);
			continue;
		}

		if (!Array.isArray(Entry.State) || Entry.State.length === 0) {
			Issue.push(`${Entry.Name} (${Entry.Slug}): no State list`);
			continue;
		}

		for (const State of Entry.State) {
			if (!Text.includes(State)) {
				Issue.push(
					`${Entry.Name} (${Entry.Slug}): state "${State}" is not named in the preview`,
				);
			}
		}
	}

	return Issue;
}

if (process.argv[1]?.endsWith("Library.ts") === true) {
	const Issue = Library();

	if (Issue.length > 0) {
		console.error(`library: ${Issue.length} issue(s)`);

		for (const Line of Issue) console.error(`  ${Line}`);

		process.exit(1);
	}

	console.log(
		`library: ${Component.length} component(s), ${Block.size} preview block(s), every state named`,
	);
}
