import { _ as createComponent, g as createAstro } from "./Base_Cq25m4iE.mjs";
import { c as Fragment, h as maybeRenderHead, m as renderTemplate, s as renderComponent } from "./server_DTTNCURM.mjs";
// Source/Library/Difference.ts
function Compare(Before, After) {
	let Start = 0;
	while (Start < Before.length && Start < After.length && Before[Start] === After[Start]) Start += 1;
	let End = 0;
	while (End < Before.length - Start && End < After.length - Start && Before[Before.length - 1 - End] === After[After.length - 1 - End]) End += 1;
	const Prefix = Before.slice(0, Start);
	const Left = Before.slice(Start, Before.length - End);
	const Right = After.slice(Start, After.length - End);
	return {
		Prefix,
		Before: Left,
		After: Right,
		Suffix: Before.slice(Before.length - End),
		Changed: Left !== Right,
		Count: Math.max([...Left].length, [...Right].length)
	};
}
/** The code points of a string, written the way the READMEs write them. */
function Code(Text) {
	return [...Text].map((Character) => `U+${(Character.codePointAt(0) ?? 0).toString(16).toUpperCase().padStart(4, "0")}`).join(" ");
}
// Source/Component/Difference.astro
createAstro("https://deepseek.playform.cloud");
var $$Difference = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Difference;
	const { Before, After } = Astro.props;
	const Diff = Compare(Before, After);
	return renderTemplate`${maybeRenderHead($$result)}<div class="difference"> <ol class="difference__list"> <li class="difference__row"> <span class="difference__label">Model</span> <span class="difference__text"> ${Diff.Prefix} <mark class="difference__mark">${Diff.Before}</mark> ${Diff.Suffix} </span> </li> <li class="difference__row"> <span class="difference__label">Transcript</span> <span class="difference__text"> ${Diff.Prefix} <mark class="difference__mark difference__mark--after">${Diff.After}</mark> ${Diff.Suffix} </span> </li> </ol> <p class="difference__verdict"> ${Diff.Changed ? Diff.Count <= 3 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Diff.Count} character changed: <code>${Code(Diff.Before)}</code> to&nbsp;
<code>${Code(Diff.After)}</code> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate` ${Diff.Count}&nbsp;character changed, from <code>${Diff.Before.length}</code> to${" "} <code>${Diff.After.length}</code>.
` })}` : "No change: the two texts are identical."} </p> </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Difference.astro", void 0);
export { $$Difference as t };
