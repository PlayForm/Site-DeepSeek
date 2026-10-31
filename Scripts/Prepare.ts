import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The site reads the package trees and the generated icon set at build time.
// Locally they sit in the monorepo above the site; on CI they come from the
// `Module/DeepSeek` submodule. This step checks the submodule out when the
// trees are missing and copies the icon set into `Public/Icon`, so a clean
// clone builds without a manual step and a Cloudflare build - which never sees
// the monorepo above it - still serves the same icon bytes.
const Module = resolve(process.cwd(), "Module", "DeepSeek");

// The builder has no SSH key, so the submodule is fetched over HTTPS even when
// a local checkout recorded an SSH remote.
const Url = "https://github.com/PlayForm/DeepSeek.git";

// The published icon directory. `Public` is the directory Astro copies to the
// build output, so the icon is served at `/Icon/<dir>.svg` with no runtime work.
const Icon = resolve(process.cwd(), "Public", "Icon");

// The published market index. The site is where the format-1 index is served,
// and the `icon` field inside it is relative to that URL, so the published copy
// and the published icons have to come from the same commit.
const Market = resolve(process.cwd(), "Public", "marketplace.json");

function HoldsTrees(Directory: string): boolean {
	return (
		existsSync(join(Directory, "Classic", "packages")) &&
		existsSync(join(Directory, "EffectTS", "packages"))
	);
}

// The same three anchors that `Source/Library/Package.server.ts` resolves, in
// the same order: an explicit `DSH_SOURCE_ROOT`, the monorepo above the site,
// and the submodule. A build with none of them names the remedy rather than
// serving a page with a broken image.
// The source is the submodule and only the submodule: a parent checkout is not
// what the deployment has, so preparing against it would copy an icon set and a
// marketplace index the built site could not be rebuilt from.
function Source(): string {
	const Override = process.env["DSH_SOURCE_ROOT"];

	if (Override !== undefined && Override !== "") {
		const Resolved = resolve(Override);

		if (!HoldsTrees(Resolved)) {
			throw new Error(
				`[Prepare] DSH_SOURCE_ROOT points at ${Resolved}, which holds neither Classic/packages nor EffectTS/packages.`,
			);
		}

		return Resolved;
	}

	if (HoldsTrees(Module)) {
		return Module;
	}

	throw new Error(
		"[Prepare] The package trees are not reachable. Run `git submodule update --init --depth 1 Module/DeepSeek` in Site/, or set DSH_SOURCE_ROOT to a monorepo checkout for a deliberate build against another tree.",
	);
}

// The published copy is the generator's bytes, never the checkout's. This
// repository runs with `core.autocrlf=true`, so a submodule checkout carries
// CRLF; the browser would draw that the same way, but the site publishes what
// the generator wrote, so a byte comparison across the two repositories stays
// meaningful.
function Write(Source: string, Target: string): void {
	writeFileSync(Target, readFileSync(Source, "utf8").replace(/\r\n/g, "\n"));
}

// The icon set is a committed asset of the monorepo, so it travels the same
// path as the package trees: the generator writes it there, and this site
// publishes the colour render, which is the one render the pages show.
function Populate(Directory: string): void {
	const Source = join(Directory, "Maintain", "Icon", "Asset", "Color");

	if (!existsSync(Source)) {
		throw new Error(
			`[Prepare] ${Source} is missing. Generate the set in the monorepo with \`pnpm icons\`, commit it, and update the Module/DeepSeek submodule.`,
		);
	}

	mkdirSync(Icon, { recursive: true });

	const Name = readdirSync(Source).filter((Entry) => Entry.endsWith(".svg"));
	const Present = new Set(Name);

	for (const Entry of Name) {
		Write(join(Source, Entry), join(Icon, Entry));
	}

	// A package that left the tree must not leave its icon published, so a file
	// with no source is removed rather than served forever.
	let Removed = 0;

	for (const Entry of readdirSync(Icon)) {
		if (Entry.endsWith(".svg") && !Present.has(Entry)) {
			rmSync(join(Icon, Entry));
			Removed += 1;
		}
	}

	console.log(
		`[Prepare] ${Name.length} icons in Public/Icon${Removed > 0 ? `, ${Removed} stale removed` : ""}.`,
	);
}

// The market index is generated in the monorepo and committed there, so the
// site publishes the same bytes rather than a second copy somebody has to keep
// in step. The page reads the index at build time either way; this copy is what
// `/marketplace.json` serves.
function Publish(Directory: string): void {
	const Source = join(Directory, "marketplace.json");

	if (!existsSync(Source)) {
		console.warn(`[Prepare] ${Source} is absent; the site will not publish /marketplace.json.`);
		return;
	}

	Write(Source, Market);
	console.log("[Prepare] marketplace.json in Public/marketplace.json.");
}

function Prepare(): void {
	const Override = process.env["DSH_SOURCE_ROOT"];

	if ((Override === undefined || Override === "") && !HoldsTrees(Module)) {
		if (existsSync(resolve(process.cwd(), ".gitmodules"))) {
			console.warn("[Prepare] The package trees are missing; checking out Module/DeepSeek.");

			execFileSync("git", ["config", `submodule.Module/DeepSeek.url`, Url], {
				stdio: "ignore",
			});
			execFileSync("git", ["submodule", "sync", "Module/DeepSeek"], { stdio: "ignore" });
			execFileSync(
				"git",
				["submodule", "update", "--init", "--depth", "1", "Module/DeepSeek"],
				{ stdio: "inherit" },
			);
		} else {
			console.warn(
				"[Prepare] No .gitmodules and no package trees; the build will report what is missing.",
			);
		}
	}

	const Root = Source();

	Populate(Root);
	Publish(Root);
}

Prepare();
