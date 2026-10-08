// @ts-nocheck

// Alias table mirroring the `@playform/build` tsconfig paths convention, so
// that PostCSS (`postcss-import`) resolves the same `@Stylesheet/`,
// `@Script/`, ... imports that Vite resolves via tsconfig `paths`.
const { resolve: Resolve } = require("path");

const Aliases = {
	"@Asset/": "Source/Asset/",
	"@Class/": "Source/Class/",
	"@Component/": "Source/Component/",
	"@Context/": "Source/Context/",
	"@Element/": "Source/Element/",
	"@Function/": "Source/Function/",
	"@Interface/": "Source/Interface/",
	"@Layout/": "Source/Layout/",
	"@Library/": "Source/Library/",
	"@Notation/": "Source/Notation/",
	"@Option/": "Source/Option/",
	"@Page/": "Source/pages/",
	"@Script/": "Source/Script/",
	"@Stylesheet/": "Source/Stylesheet/",
	"@Target/": "Source/Target/",
	"@Test/": "Source/Test/",
};

// Resolve `@Alias/File` imports to absolute paths inside `Source/`; anything
// else (relative paths, package imports) is returned as-is so that
// `postcss-import`'s default resolver handles it.
function ResolveAlias(Id) {
	for (const [Alias, Directory] of Object.entries(Aliases)) {
		if (Id.startsWith(Alias)) {
			return Resolve(Directory, Id.slice(Alias.length));
		}
	}

	return Id;
}

module.exports = {
	plugins: [
		require("postcss-import")({
			resolve: ResolveAlias,
		}),
		require("postcss-url"),
		require("tailwindcss/nesting"),
		require("tailwindcss")("./tailwind.config.js"),
		require("postcss-combine-media-query"),
		require("postcss-combine-duplicated-selectors").default({
			removeDuplicatedProperties: true,
			removeDuplicatedValues: false,
		}),
		require("autoprefixer"),
		// The advanced preset's discard-unused deletes @font-face rules when it
	// cannot see the font-family referenced in the same stylesheet - ours are
	// referenced via the --font-sans/--font-mono custom properties, which it
	// does not resolve, so the self-hosted faces were being dropped from the
	// built CSS. Keep the @font-face rules.
	require("cssnano")({
		preset: ["advanced", { discardUnused: { fontFace: false } }],
	}),
		require("postcss-reporter"),
	],
};
