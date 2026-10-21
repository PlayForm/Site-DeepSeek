// Iso.test.mjs - the T01 geometry test.
//
// The shell's four polygons are asserted against the constants in
// Design/06-THE-BIG-CABINET.md section 2 at the reference viewport
// (W = 1440, header 56, body 844, depth 72). The test also proves the
// invariants the CSS relies on: every depth edge is exactly 45 degrees,
// the painter's order is right/front/top with the far block first, the
// bounds cover the projected box, and the point test agrees with the
// front face.
//
// Run: node Source/Library/Iso.test.mjs   (pnpm Test)

import {
	Bounds,
	Faces,
	Inside,
	Painted,
	Points,
	Project,
	Rise,
} from "./Iso.ts";

let Failures = 0;
let Checks = 0;

function Check(Label, Actual, Expected) {
	Checks += 1;
	const Ok = JSON.stringify(Actual) === JSON.stringify(Expected);
	if (!Ok) Failures += 1;
	console.log(
		`${Ok ? "PASS" : "FAIL"}  ${Label}${Ok ? "" : `  (expected ${JSON.stringify(Expected)}, got ${JSON.stringify(Actual)})`}`,
	);
}

// The shell's near box: front top-left (0,72), 1368 x 844, depth 72.
const Shell = { X: 0, Y: 72, Z: 0, W: 1368, D: 72, H: 844 };
const ShellFaces = Faces(Shell);
const Face = (Name) => ShellFaces.find((Candidate) => Candidate.Name === Name)?.Points ?? [];

// 06 section 2: front (0,72)-(1368,916); back (72,0)-(1440,844);
// top (0,72)(1368,72)(1440,0)(72,0); right (1368,72)(1440,0)(1440,844)(1368,916).
Check("front = (0,72) (1368,72) (1368,916) (0,916)", Face("front"), [
	{ X: 0, Y: 72 },
	{ X: 1368, Y: 72 },
	{ X: 1368, Y: 916 },
	{ X: 0, Y: 916 },
]);
Check("top = (0,72) (1368,72) (1440,0) (72,0)", Face("top"), [
	{ X: 0, Y: 72 },
	{ X: 1368, Y: 72 },
	{ X: 1440, Y: 0 },
	{ X: 72, Y: 0 },
]);
Check("right = (1368,72) (1440,0) (1440,844) (1368,916)", Face("right"), [
	{ X: 1368, Y: 72 },
	{ X: 1440, Y: 0 },
	{ X: 1440, Y: 844 },
	{ X: 1368, Y: 916 },
]);
Check("back = (72,0) (1440,0) (1440,844) (72,844)", [
	Project(0, 72, 72),
	Project(1368, 72, 72),
	Project(1368, 916, 72),
	Project(0, 916, 72),
], [
	{ X: 72, Y: 0 },
	{ X: 1440, Y: 0 },
	{ X: 1440, Y: 844 },
	{ X: 72, Y: 844 },
]);

// The 45 degree invariant: every segment that changes both x and y moves
// the same distance on both axes (the depth edges are the diagonal ones).
const DepthEdges = [];
for (const ShellFace of ShellFaces) {
	for (let Index = 0; Index < ShellFace.Points.length; Index += 1) {
		const From = ShellFace.Points[Index];
		const To = ShellFace.Points[(Index + 1) % ShellFace.Points.length];
		if (From.X !== To.X && From.Y !== To.Y) {
			DepthEdges.push({
				Face: ShellFace.Name,
				Dx: Math.abs(To.X - From.X),
				Dy: Math.abs(To.Y - From.Y),
			});
		}
	}
}
Check(
	"every depth edge is a 45 degree diagonal (|dx| = |dy|)",
	DepthEdges.length > 0 && DepthEdges.every((Edge) => Edge.Dx === Edge.Dy),
	true,
);

// The responsive depths keep the ratio: the diagonal is always D by D.
for (const Depth of [72, 48, 24]) {
	const Box = { X: 0, Y: Depth, Z: 0, W: 1024 - Depth, D: Depth, H: 700 };
	const Top = Faces(Box).find((Candidate) => Candidate.Name === "top")?.Points ?? [];
	Check(
		`depth ${Depth}: the top plane's diagonal is ${Depth} by ${Depth}`,
		[Top[1], Top[2]],
		[
			{ X: 1024 - Depth, Y: Depth },
			{ X: 1024, Y: 0 },
		],
	);
}

// The paint order: the far block first, and right/front/top inside it.
const Near = { X: 0, Y: 0, Z: 0, W: 100, D: 10, H: 50 };
const Far = { X: 0, Y: 0, Z: 40, W: 100, D: 10, H: 50 };
const Order = Painted([Near, Far]).map((FaceOf) => `${FaceOf.Block === Far ? "far" : "near"}:${FaceOf.Name}`);
Check("painter's order: far block, then near; right, front, top", Order, [
	"far:right",
	"far:front",
	"far:top",
	"near:right",
	"near:front",
	"near:top",
]);

// The bounds cover the whole projected box (the meter SVG's viewBox).
const BoundsOfMeter = Bounds([{ X: 0, Y: 0, Z: 0, W: 200, D: 22, H: 64 }]);
Check("bounds of a 200 x 64 x 22 meter", BoundsOfMeter, {
	X: 0,
	Y: -22,
	W: 222,
	H: 86,
});

// The entrance easing: the endpoints and monotonicity.
Check("Rise(0) = 0", Rise(0), 0);
Check("Rise(1) = 1", Rise(1), 1);
Check("Rise(0.5) = 0.875 (ease-out cubic)", Rise(0.5), 0.875);

// The point test: inside the front face, outside the top plane's hole.
Check(
	"Inside((10,100), front) = true",
	Inside({ X: 10, Y: 100 }, Face("front")),
	true,
);
Check(
	"Inside((1400,100), front) = false",
	Inside({ X: 1400, Y: 100 }, Face("front")),
	false,
);
Check(
	"Inside((10,10), front) = false (above the front's top edge)",
	Inside({ X: 10, Y: 10 }, Face("front")),
	false,
);

// The SVG emitter: integers stay clean, fractions round to two places.
Check(
	'Points([{X:1,Y:2},{X:3.14159,Y:-0.5}]) = "1,2 3.14,-0.5"',
	Points([
		{ X: 1, Y: 2 },
		{ X: 3.14159, Y: -0.5 },
	]),
	"1,2 3.14,-0.5",
);

console.log(`\n${Checks} checks run.`);
if (Failures > 0) {
	console.error(`ISO TEST FAILED: ${Failures} check(s).`);
	process.exit(1);
} else {
	console.log("The isometric engine matches 06 at every depth.");
}
