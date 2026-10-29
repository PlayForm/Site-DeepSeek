// The site's own words, as opposed to the package facts that every page reads
// from the monorepo. Nothing here states a count, a version, or a publication
// state: those come from `Packages.server.ts` at build time.
export const Content = {
	Title: "The DeepSeek Harness plugin family",
	Short: "DSH family",
	Description:
		"Hooks, tools, and clients for DeepSeek Harness. They normalize model output, guard the workspace, and record what each run did.",
	Lede:
		"They normalize model output, guard the workspace, and record what each run did. Hooks, tools, clients, and libraries, in two releases.",
	Repository: "https://github.com/PlayForm/DeepSeek",
	Licence: "CC0-1.0",
};

export default Content;
