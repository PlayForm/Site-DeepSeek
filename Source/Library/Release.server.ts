import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { Package, Root, type PackageRecord } from "./Package.server";

// Every package records its release line in its own CHANGELOG. The site reads
// those headings rather than restating a release note: a version the tree does
// not record cannot appear here.

export interface Line {
	Version: string;
	Package: number;
	State: "recorded" | "current" | "written";
}

export function VersionOf(Package: PackageRecord): string[] {
	const Path = join(Root, Package.Directory, "CHANGELOG.md");

	if (!existsSync(Path)) {
		return [];
	}

	return readFileSync(Path, "utf8")
		.split("\n")
		.filter((Line) => /^##\s+\d+\.\d+\.\d+/.test(Line))
		.map((Line) => Line.replace(/^##\s+/, "").trim());
}

function Compare(Left: string, Right: string): number {
	const LeftPart = Left.split(".").map(Number);
	const RightPart = Right.split(".").map(Number);

	for (let Index = 0; Index < 3; Index += 1) {
		const Difference = (RightPart[Index] ?? 0) - (LeftPart[Index] ?? 0);

		if (Difference !== 0) {
			return Difference;
		}
	}

	return 0;
}

function Load(): Line[] {
	const Count = new Map<string, number>();
	const Current = new Set(Package.map((Entry) => Entry.Version));

	for (const Entry of Package) {
		for (const Version of new Set(VersionOf(Entry))) {
			Count.set(Version, (Count.get(Version) ?? 0) + 1);
		}
	}

	const Newest = Package.map((Entry) => Entry.Version).sort(Compare)[0] ?? "0.0.0";

	return [...Count.entries()]
		.map(([Version, Amount]) => ({
			Version,
			Package: Amount,
			State: (Current.has(Version)
				? "current"
				: Compare(Version, Newest) < 0
					? "written"
					: "recorded") as Line["State"],
		}))
		.sort((Left, Right) => Compare(Left.Version, Right.Version));
}

export const Line = Load();

export const Current = Package[0]?.Version ?? "0.0.0";

export default Line;
