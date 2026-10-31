// The design check, run as the seventh check of `pnpm Check`:
//
//     node Scripts/Design.ts
//
// A storyboard is a Markdown file in the repository's `Documentation/Design/`
// or `Documentation/Showcase/` folder that carries `## The layout` and
// `## The history`: the drawing a lane implements, and the record of what the
// page became. This check reads the folders and exits non-zero when a
// storyboard is missing either one.
//
// The folder's own `README.md` is the method, not a storyboard, so it is
// exempt. The check reads source rather than the built output because the lab
// is a development surface: a production build publishes no `/design/` route
// to inspect.

import { Storyboard } from "../Source/Library/Design.server.ts";

const Required = ["The layout", "The history"];

export function Design(): string[] {
	const Issue: string[] = [];

	for (const Entry of Storyboard) {
		if (Entry.Method) {
			continue;
		}

		for (const Heading of Required) {
			if (
				!Entry.Section.some((Part) => Part.Heading.toLowerCase() === Heading.toLowerCase())
			) {
				Issue.push(`${Entry.Title} (${Entry.File}): no "## ${Heading}" section`);
			}
		}
	}

	return Issue;
}

if (process.argv[1]?.endsWith("Design.ts") === true) {
	const Issue = Design();
	const Story = Storyboard.filter((Entry) => !Entry.Method);

	if (Issue.length > 0) {
		console.error(`design: ${Issue.length} issue(s)`);

		for (const Line of Issue) console.error(`  ${Line}`);

		process.exit(1);
	}

	console.log(
		`design: ${Story.length} storyboard(s), every one carries the layout and the history`,
	);
}
