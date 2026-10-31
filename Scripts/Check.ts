// The site's own checks, run against the built output rather than the source:
//
//     pnpm Check
//
// Five checks, each one a failure mode the site has shipped before:
//
// 1. Links: every `href="/..."` in a built page resolves to a file or a page.
// 2. Structure: one h1, a title, a description, no skipped heading levels, no
//    duplicate id, a lang, and a main landmark.
// 3. Spacing: a digit glued to a word, and a space before punctuation. Both are
//    what a whitespace-only text node looks like after the compressor drops it.
// 4. Plural: a count followed by a plural noun, which the site's voice forbids.
// 5. Islands: every `astro-island` is counted and reported, because an island
//    that hydrated but never drew is invisible to the other four checks.
//
// A failure exits non-zero, so the script is usable as the last step of a build.

import { existsSync, readdirSync, statSync } from "node:fs";
import { readFileSync } from "node:fs";
import { join, relative } from "node:path";

const Root = join(process.cwd(), "Target");

if (!existsSync(Root)) {
	console.error("Target/ is missing. Run the build first.");
	process.exit(1);
}

function Walk(Directory: string): string[] {
	const File: string[] = [];

	for (const Entry of readdirSync(Directory)) {
		const Path = join(Directory, Entry);

		if (statSync(Path).isDirectory()) File.push(...Walk(Path));
		else if (Entry.endsWith(".html")) File.push(Path);
	}

	return File;
}

const Page = Walk(Root);
const Issue: string[] = [];

// 1. Links. A path resolves when the file exists, or when the directory holds
// an index.html. A hash or a query is stripped before the check.
function Resolve(Href: string): boolean {
	const Path = Href.split("#")[0].split("?")[0];

	if (!Path.startsWith("/")) return true;

	const Direct = join(Root, Path);

	return (existsSync(Direct) && statSync(Direct).isFile()) || existsSync(join(Root, Path, "index.html"));
}

// 2, 3, 4. One pass per page over the built HTML.
const Plural = /\b\d[\d,]*\s+(hooks|seams|packages|versions|nodes|edges|rows|results|pages|terms|bundles|categories|knobs|files|examples|listeners)\b/gi;

for (const File of Page) {
	const Html = readFileSync(File, "utf8");
	const Route = relative(Root, File).replace("/index.html", "/").replace("index.html", "/");

	for (const Match of Html.matchAll(/href=(?:"|)(\/[^" >]*)/g)) {
		if (!Resolve(Match[1])) Issue.push(`${Route}: link to ${Match[1]} does not resolve`);
	}

	const Head = [...Html.matchAll(/<h([1-6])[^>]*>/g)].map((Match) => Number(Match[1]));
	const H1 = Head.filter((Level) => Level === 1).length;

	if (H1 !== 1) Issue.push(`${Route}: ${H1} h1`);
	if (!/<title>[^<]+<\/title>/.test(Html)) Issue.push(`${Route}: no title`);
	if (!/name=description|name="description"/.test(Html)) Issue.push(`${Route}: no description`);
	if (!/lang=en/.test(Html)) Issue.push(`${Route}: no lang`);
	if (!/<main\b/.test(Html)) Issue.push(`${Route}: no main landmark`);

	let Previous = 0;

	for (const Level of Head) {
		if (Previous !== 0 && Level > Previous + 1) {
			Issue.push(`${Route}: h${Previous} then h${Level}`);
			break;
		}

		Previous = Level;
	}

	const Id = [...Html.matchAll(/\sid=(?:"([^"]+)"|([^\s>]+))/g)].map((Match) => Match[1] ?? Match[2]);
	const Duplicate = Id.find((Value, Index) => Id.indexOf(Value) !== Index);

	if (Duplicate !== undefined) Issue.push(`${Route}: duplicate id ${Duplicate}`);

	// The text a reader sees. Two rules make it honest:
	//
	// - Verbatim content is dropped first. A table cell or a code block carries
	//   text the site did not write, and the site's voice rules do not govern a
	//   README's sentence.
	// - Verbatim content is dropped first: a table cell or a code block carries
	//   text the site did not write, and the site's voice rules do not govern a
	//   README's sentence. Inline `code` stays, because it is part of a
	//   sentence the site did write, and dropping it would leave the sentence's
	//   punctuation stranded.
	const Verbatim = Html.replace(/<table[\s\S]*?<\/table>/g, " ").replace(/<pre[\s\S]*?<\/pre>/g, " ");

	// An island carries its props as a JSON attribute, and that JSON holds the
	// page's own strings with no spaces between them. It is data, not text: drop
	// the attribute before the tags are stripped, or a record's sequence number
	// and kind arrive glued together and the scan reports the island's payload.
	const Text = Verbatim.replace(/<script[\s\S]*?<\/script>/g, " ")
		.replace(/<style[\s\S]*?<\/style>/g, " ")
		.replace(/\sprops="[^"]*"/g, " ")
		.replace(
			/<\/?(?:td|th|tr|dt|dd|li|p|div|section|article|aside|header|footer|nav|main|figure|figcaption|h[1-6]|br)\b[^>]*>/g,
			" ",
		)
		.replace(/<[^>]+>/g, "")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, " ");

	for (const Match of Text.matchAll(/(?:^|\s)(\d{1,4}[a-z]{3,})/g)) {
		Issue.push(`${Route}: digit glued to word "${Match[1]}"`);
	}

	for (const Match of Text.matchAll(/\s+[,.;:!?](?=\s|$)/g)) {
		const At = Match.index ?? 0;

		Issue.push(`${Route}: space before punctuation "${Text.slice(Math.max(0, At - 30), At + 8).trim()}"`);
	}

	for (const Match of Text.matchAll(Plural)) {
		Issue.push(`${Route}: plural count "${Match[0]}"`);
	}
}

// 5. Islands, reported rather than judged: the count is the signal, and the
// browser check is what proves a given island drew.
const Island = Page.map((File) => ({
	Route: relative(Root, File).replace("/index.html", "/").replace("index.html", "/"),
	Count: (readFileSync(File, "utf8").match(/<astro-island/g) ?? []).length,
})).filter((Entry) => Entry.Count > 0);

console.log(`pages: ${Page.length}`);
console.log(`islands: ${Island.length} page(s), ${Island.reduce((Total, Entry) => Total + Entry.Count, 0)} island(s)`);

// Only the pages with more than one island are worth naming: a page with one
// is the normal case, and a page with several is where a hydration mistake
// hides.
for (const Entry of Island.filter((Item) => Item.Count > 1)) {
	console.log(`  ${Entry.Route} ${Entry.Count}`);
}

if (Issue.length > 0) {
	console.error(`\n${Issue.length} issue(s):`);

	for (const Entry of [...new Set(Issue)].slice(0, 40)) console.error(`  ${Entry}`);

	process.exit(1);
}

console.log("checks: links, structure, spacing, plural all pass");
