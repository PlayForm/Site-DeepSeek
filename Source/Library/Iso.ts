// Iso.ts - the ported isometric engine (Design 01 section 2, 06 section 1).
//
// The model is Ely's (frontend/src/iso/engine.ts): a Block with a near
// top-left corner, a width, a height and a depth; Faces() builds the three
// visible faces; Painted() returns them in the painter's order; Bounds()
// measures the projected extent; Inside() tests a point; Rise() is the
// entrance easing; Points() emits the SVG polygon attribute.
//
// The projection is NOT Ely's. Ely draws a true isometric (all axes at 30
// degrees); the cabinet's front must stay square and readable, so this file
// projects a FRONTAL OBLIQUE at exactly 45 degrees:
//
//   project(x, y, z) = (x + z, y - z)     x right, y down, z away
//
// One pixel of depth therefore moves one pixel right and one pixel up, at
// every viewport width. The 45 degree angle is preserved by changing only
// the depth (--cabinet-depth), never the ratio - the single reason the
// shell's faces can be CSS calc() clip-path polygons instead of SVG.
//
// BUILD-TIME ONLY. The .astro frontmatter imports this module to generate
// the meter SVGs; it is never imported from a browser script.

/** A projected point in screen pixels. */
export interface Point {
	X: number;
	Y: number;
}

/**
 * One box in world coordinates. X/Y/Z is the near top-left corner; W is the
 * width (x), H the height (y), D the depth (z, away from the viewer).
 */
export interface Block {
	X: number;
	Y: number;
	Z: number;
	W: number;
	D: number;
	H: number;
	/** Ely's accent flag: the face is drawn with the accent tone. */
	Accent?: boolean;
}

/** The three visible faces, in the section 1 order: front, top, right. */
export type FaceName = "front" | "top" | "right";

/** One projected face polygon. */
export interface Face {
	Name: FaceName;
	Points: Point[];
}

/** A face plus the block that owns it (the painter's-order output). */
export interface PaintedFace extends Face {
	Block: Block;
}

/**
 * The frontal oblique at 45 degrees: one pixel of depth is one pixel right
 * and one pixel up. The --iso-k token exists for a future camera change;
 * the design fixes it at 1 (decision 2.5, 08 decision 1).
 */
export function Project(X: number, Y: number, Z: number): Point {
	return { X: X + Z, Y: Y - Z };
}

/**
 * The visible faces of a box: the front at the near plane, the top at y0,
 * the right at x1. Each face is one solid fill in the drawing; the order
 * here is the section 1 order (front, top, right), NOT the paint order.
 */
export function Faces(Block: Block): Face[] {
	const { X, Y, Z, W, D, H } = Block;
	return [
		{
			Name: "front",
			Points: [
				Project(X, Y, Z),
				Project(X + W, Y, Z),
				Project(X + W, Y + H, Z),
				Project(X, Y + H, Z),
			],
		},
		{
			Name: "top",
			Points: [
				Project(X, Y, Z),
				Project(X + W, Y, Z),
				Project(X + W, Y, Z + D),
				Project(X, Y, Z + D),
			],
		},
		{
			Name: "right",
			Points: [
				Project(X + W, Y, Z),
				Project(X + W, Y, Z + D),
				Project(X + W, Y + H, Z + D),
				Project(X + W, Y + H, Z),
			],
		},
	];
}

/**
 * The painter's order, back to front (Ely's draw.ts, restated for the
 * frontal projection): blocks sorted by their far plane (Z + D) ascending,
 * and inside each block the faces painted right, then front, then top.
 * The topological sort collapses to a depth sort here because every block
 * shares the same 45 degree projection.
 */
export function Painted(Blocks: Block[]): PaintedFace[] {
	return [...Blocks]
		.sort((A, B) => B.Z + B.D - (A.Z + A.D))
		.flatMap((Block) => {
			const FacesOf = Faces(Block);
			const Order: FaceName[] = ["right", "front", "top"];
			return Order.flatMap((Name) => {
				const Face = FacesOf.find((Candidate) => Candidate.Name === Name);
				return Face ? [{ ...Face, Block }] : [];
			});
		});
}

/** The projected bounding box of a set of blocks (the SVG viewBox). */
export function Bounds(Blocks: Block[]): { X: number; Y: number; W: number; H: number } {
	const Points = Blocks.flatMap((Block) =>
		Faces(Block).flatMap((Face) => Face.Points),
	);
	const Xs = Points.map((Point) => Point.X);
	const Ys = Points.map((Point) => Point.Y);
	const X = Math.min(...Xs);
	const Y = Math.min(...Ys);
	return { X, Y, W: Math.max(...Xs) - X, H: Math.max(...Ys) - Y };
}

/**
 * The entrance easing: an ease-out cubic over the clamped unit interval.
 * The design's only use is the reduced-motion still path, where Rise(1) is
 * the settled state; nothing animates per frame.
 */
export function Rise(T: number): number {
	const Clamped = Math.min(1, Math.max(0, T));
	return 1 - Math.pow(1 - Clamped, 3);
}

/** Point-in-polygon (ray casting), for the hit areas the meters may need. */
export function Inside(Point: Point, Polygon: Point[]): boolean {
	let Odd = false;
	for (let Index = 0, Previous = Polygon.length - 1; Index < Polygon.length; Previous = Index++) {
		const Current = Polygon[Index];
		const Prior = Polygon[Previous];
		if (!Current || !Prior) continue;
		const Crosses =
			Current.Y > Point.Y !== Prior.Y > Point.Y &&
			Point.X <
				((Prior.X - Current.X) * (Point.Y - Current.Y)) / (Prior.Y - Current.Y) +
					Current.X;
		if (Crosses) Odd = !Odd;
	}
	return Odd;
}

/** Emit an SVG polygon's points attribute: "x,y x,y ...". */
export function Points(Polygon: Point[]): string {
	return Polygon.map(
		(Point) => `${Math.round(Point.X * 100) / 100},${Math.round(Point.Y * 100) / 100}`,
	).join(" ");
}
