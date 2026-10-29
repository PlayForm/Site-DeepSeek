import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";

// The site reads the package trees at build time. Locally they sit in the
// monorepo above the site; on CI they come from the `Module/DeepSeek`
// submodule. This step checks the submodule out when the trees are missing, so
// a clean clone builds without a manual step.
const Module = resolve(process.cwd(), "Module", "DeepSeek");

// The builder has no SSH key, so the submodule is fetched over HTTPS even when
// a local checkout recorded an SSH remote.
const Url = "https://github.com/PlayForm/DeepSeek.git";

function HoldsTrees(Directory: string): boolean {
	return (
		existsSync(join(Directory, "Classic", "packages")) &&
		existsSync(join(Directory, "EffectTS", "packages"))
	);
}

function Prepare(): void {
	if (process.env["DSH_SOURCE_ROOT"]) {
		return;
	}

	if (HoldsTrees(Module)) {
		return;
	}

	if (!existsSync(resolve(process.cwd(), ".gitmodules"))) {
		console.warn("[Prepare] No .gitmodules and no package trees; the build will report what is missing.");
		return;
	}

	console.warn("[Prepare] The package trees are missing; checking out Module/DeepSeek.");

	execFileSync("git", ["config", `submodule.Module/DeepSeek.url`, Url], { stdio: "ignore" });
	execFileSync("git", ["submodule", "sync", "Module/DeepSeek"], { stdio: "ignore" });
	execFileSync("git", ["submodule", "update", "--init", "--depth", "1", "Module/DeepSeek"], {
		stdio: "inherit",
	});
}

Prepare();
