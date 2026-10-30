// The one measurement the site can make without a live run: how many bytes of a
// tool result reach the model, as the result grows. Both numbers come from the
// CCR package's own README, which documents its defaults:
//
//   thresholdBytes 1024      the base size threshold
//   autoExpand true          a result at or under the ceiling is stored but
//   autoExpandLimitBytes     returned FULL, so the model reads all of it
//   previewMaxChars 240      the preview length cap past the ceiling
//
// The harness's own spill policy is a `tools/post-execute` consumer too, so the
// honest comparison is not "context vs no context": it is the shape of the
// curve, and where it bends.
export interface Curve {
	/** The size at which a result becomes a candidate for compression. */
	Threshold: number;
	/** The ceiling under which the model still reads the whole result. */
	Ceiling: number;
	/** The preview length past the ceiling, in characters. */
	Preview: number;
	/** The largest result the chart draws, in bytes. */
	Limit: number;
}

export const Curve: Curve = {
	Threshold: 1024,
	Ceiling: 102400,
	Preview: 240,
	Limit: 10 * 1024 * 1024,
};

/** The bytes the model reads at a given result size, with the family. */
export function Read(Size: number): number {
	return Size <= Curve.Ceiling ? Size : Curve.Preview;
}

/** The bytes the model reads at a given result size, with the harness alone. */
export function Default(Size: number): number {
	return Size;
}

export default Curve;
