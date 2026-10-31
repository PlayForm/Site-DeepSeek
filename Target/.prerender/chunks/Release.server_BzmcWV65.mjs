import { a as Package, o as Root } from "./Base_CT63gv6q.mjs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
// Source/Library/Release.server.ts
function VersionOf(Package) {
	const Path = join(Root, Package.Directory, "CHANGELOG.md");
	if (!existsSync(Path)) return [];
	return readFileSync(Path, "utf8").split("\n").filter((Line) => /^##\s+\d+\.\d+\.\d+/.test(Line)).map((Line) => Line.replace(/^##\s+/, "").trim());
}
function Compare(Left, Right) {
	const LeftPart = Left.split(".").map(Number);
	const RightPart = Right.split(".").map(Number);
	for (let Index = 0; Index < 3; Index += 1) {
		const Difference = (RightPart[Index] ?? 0) - (LeftPart[Index] ?? 0);
		if (Difference !== 0) return Difference;
	}
	return 0;
}
function Load() {
	const Count = /* @__PURE__ */ new Map();
	const Current = new Set(Package.map((Entry) => Entry.Version));
	for (const Entry of Package) for (const Version of new Set(VersionOf(Entry))) Count.set(Version, (Count.get(Version) ?? 0) + 1);
	const Newest = Package.map((Entry) => Entry.Version).sort(Compare)[0] ?? "0.0.0";
	return [...Count.entries()].map(([Version, Amount]) => ({
		Version,
		Package: Amount,
		State: Current.has(Version) ? "current" : Compare(Version, Newest) < 0 ? "written" : "recorded"
	})).sort((Left, Right) => Compare(Left.Version, Right.Version));
}
var Line = Load();
Package[0]?.Version;
export { VersionOf as n, Line as t };
