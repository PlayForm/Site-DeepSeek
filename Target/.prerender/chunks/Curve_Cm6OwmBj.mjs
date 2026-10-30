import { _ as createComponent } from "./Base_Cq25m4iE.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
// Source/Content/Curve.ts
var Curve = {
	Threshold: 1024,
	Ceiling: 102400,
	Preview: 240,
	Limit: 10485760
};
/** The bytes the model reads at a given result size, with the family. */
function Read(Size) {
	return Size <= Curve.Ceiling ? Size : Curve.Preview;
}
/** The bytes the model reads at a given result size, with the harness alone. */
function Default(Size) {
	return Size;
}
// Source/Component/Curve.astro
var $$Curve = createComponent(($$result, $$props, $$slots) => {
	const Width = 720;
	const Height = 300;
	const Pad = 44;
	const MinX = Math.log10(Curve.Threshold);
	const MaxX = Math.log10(Curve.Limit);
	const MinY = Math.log10(Curve.Preview);
	const MaxY = Math.log10(Curve.Limit);
	const X = (Size) => Pad + (Math.log10(Size) - MinX) / (MaxX - MinX) * 632;
	const Y = (Bytes) => 256 - (Math.log10(Math.max(Bytes, Curve.Preview)) - MinY) / (MaxY - MinY) * 212;
	const Family = [
		[Curve.Threshold, Read(Curve.Threshold)],
		[Curve.Ceiling, Read(Curve.Ceiling)],
		[Curve.Limit, Read(Curve.Limit)]
	];
	const Alone = [[Curve.Threshold, Default(Curve.Threshold)], [Curve.Limit, Default(Curve.Limit)]];
	const Path = (Points) => Points.map(([Size, Bytes], Index) => `${Index === 0 ? "M" : "L"}${X(Size).toFixed(1)} ${Y(Bytes).toFixed(1)}`).join(" ");
	const Tick = [
		1024,
		10240,
		102400,
		1048576,
		10485760
	];
	const Label = (Size) => Size >= 1048576 ? `${Math.round(Size / 1048576)} MB` : `${Math.round(Size / 1024)} KB`;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="curve"> <svg class="curve__plot"${addAttribute(`0 0 ${Width} ${Height}`, "viewBox")} role="img" aria-label="Bytes the model reads against the size of the tool result, for the harness alone and for the family"> ${Tick.map((Size) => renderTemplate`<g> <line class="curve__grid"${addAttribute(X(Size), "x1")}${addAttribute(Pad, "y1")}${addAttribute(X(Size), "x2")}${addAttribute(256, "y2")}></line> <text class="curve__tick"${addAttribute(X(Size), "x")}${addAttribute(272, "y")} text-anchor="middle"> ${Label(Size)} </text> </g>`)} <line class="curve__axis"${addAttribute(Pad, "x1")}${addAttribute(256, "y1")}${addAttribute(676, "x2")}${addAttribute(256, "y2")}></line> <path class="curve__alone"${addAttribute(Path(Alone), "d")}></path> <path class="curve__family"${addAttribute(Path(Family), "d")}></path> <line class="curve__ceiling"${addAttribute(X(Curve.Ceiling), "x1")}${addAttribute(Pad, "y1")}${addAttribute(X(Curve.Ceiling), "x2")}${addAttribute(256, "y2")}></line> <text class="curve__note"${addAttribute(X(Curve.Ceiling) + 6, "x")}${addAttribute(56, "y")}>
the ceiling
</text> <text class="curve__legend curve__legend--alone"${addAttribute(X(Curve.Limit) - 8, "x")}${addAttribute(Y(Curve.Limit) + 16, "y")} text-anchor="end">
harness alone
</text> <text class="curve__legend curve__legend--family"${addAttribute(X(Curve.Limit) - 8, "x")}${addAttribute(Y(Curve.Preview) - 8, "y")} text-anchor="end">
with CCR
</text> </svg> <figcaption class="curve__caption">
The two lines are the same until the ceiling: under ${Label(Curve.Ceiling)} the model reads
		every byte either way. Past it the harness keeps the bytes and CCR keeps a preview of${" "} ${Curve.Preview}&nbsp;characters, so the honest claim is not that context is bounded, but
		that it stops growing.
</figcaption> </figure>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Curve.astro", void 0);
export { $$Curve as t };
