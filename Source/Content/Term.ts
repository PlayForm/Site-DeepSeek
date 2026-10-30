// The vocabulary the site speaks, one word per concept, each borrowed from the
// code. A page prints a term through `Component/Term.astro`, so the same word
// always looks the same and carries the same meaning.
export interface Term {
	Name: string;
	Meaning: string;
}

export const Term: Record<string, Term> = {
	package: {
		Name: "package",
		Meaning: "One directory with a manifest: the npm artifact and its source.",
	},
	plugin: {
		Name: "plugin",
		Meaning: "A package that loads into the harness and adds tools or a bundle.",
	},
	hook: {
		Name: "hook",
		Meaning: "A package that registers a listener on a harness event.",
	},
	seam: {
		Name: "seam",
		Meaning: "The harness event a hook listens on, named area/event.",
	},
	surface: {
		Name: "surface",
		Meaning: "What a package exposes to the harness: a listener, a tool, a service, a config.",
	},
	knob: {
		Name: "knob",
		Meaning: "One field of a package's configuration, with its default.",
	},
	lens: {
		Name: "lens",
		Meaning: "What the thing at a seam sees: the prompt, the text, the tool, the file.",
	},
	effect: {
		Name: "effect",
		Meaning: "What a hook does at its seam: rewrite, record, or advise.",
	},
	trace: {
		Name: "trace",
		Meaning: "The durable record a run leaves behind, one line per event.",
	},
	ledger: {
		Name: "ledger",
		Meaning: "The file one package writes about what it did.",
	},
	release: {
		Name: "release",
		Meaning: "One of the two trees: Classic, or the same packages rebuilt on Effect.",
	},
	version: {
		Name: "version",
		Meaning: "One line of the release: a number a package's changelog records.",
	},
	bundle: {
		Name: "bundle",
		Meaning: "One entry in the marketplace index: a package with its title and category.",
	},
	category: {
		Name: "category",
		Meaning: "The kind a bundle is listed under in the marketplace index.",
	},
	node: {
		Name: "node",
		Meaning: "One package drawn in the graph.",
	},
	edge: {
		Name: "edge",
		Meaning:
			"One dependency drawn in the graph, from the dependency to the package that requires it.",
	},
};

export function TermFor(Name: string): Term | undefined {
	return Term[Name.toLowerCase()];
}

export default Term;
