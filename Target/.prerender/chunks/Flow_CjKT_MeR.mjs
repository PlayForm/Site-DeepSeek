import { createComponent, escape, ssr, ssrAttribute, ssrHydrationKey } from "solid-js/web";
import { For, Show, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";
// Source/Component/Graph/Flow.tsx
var _tmpl$ = [
	"<div",
	" class=\"flow\"><div class=\"flow__canvas\" role=\"img\" aria-label=\"The turn as a graph of stages\"></div><!--$-->",
	"<!--/--><ul class=\"flow__list\">",
	"</ul></div>"
];
var _tmpl$2 = [
	"<aside",
	" class=\"flow__read\"><p class=\"flow__title\"><!--$-->",
	"<!--/--> <!--$-->",
	"<!--/--></p><p class=\"flow__seam\">",
	"</p><p class=\"flow__note\">",
	"</p></aside>"
];
var _tmpl$3 = [
	"<li",
	" class=\"flow__item\"",
	"><button class=\"flow__pick\" type=\"button\"><!--$-->",
	"<!--/--> <!--$-->",
	"<!--/--></button></li>"
];
function Flow(Props) {
	const [Select, SetSelect] = createSignal(Props.Stage[0]);
	let Instance;
	const Lit = createMemo(() => new Set(Props.Family));
	const Count = (Entry) => Entry.Seam.filter((Name) => Lit().has(Name)).length;
	const Data = createMemo(() => Props.Stage.flatMap((Entry) => [{ data: {
		id: `stage-${Entry.Index}`,
		label: `${String(Entry.Index).padStart(2, "0")} ${Entry.Title}`,
		family: Count(Entry) > 0 ? 1 : 0,
		seam: Entry.Seam.length
	} }, ...Entry.Index < Props.Stage.length ? [{ data: {
		id: `edge-${Entry.Index}`,
		source: `stage-${Entry.Index}`,
		target: `stage-${Entry.Index + 1}`
	} }] : []]));
	onMount(() => {
		(async () => {
			(await import("cytoscape")).default;
		})();
		onCleanup(() => {
			Instance?.destroy();
			Instance = void 0;
		});
	});
	createEffect(() => {
		if (!Instance) return;
		Instance.elements().remove();
		Instance.add(Data());
		Instance.layout({
			name: "breadthfirst",
			directed: true,
			padding: 16,
			spacingFactor: 1.1
		}).run();
	});
	return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Show, {
		get when() {
			return Select();
		},
		children: (Entry) => ssr(_tmpl$2, ssrHydrationKey(), escape(String(Entry().Index).padStart(2, "0")), escape(Entry().Title), Entry().Seam.length > 0 ? escape(Entry().Seam.join(", ")) : "no seam here", Count(Entry()) > 0 ? `${escape(Count(Entry()))} of these seams carry a family hook.` : "The family stands at none of this stage's seams.")
	})), escape(createComponent(For, {
		get each() {
			return Props.Stage;
		},
		children: (Entry) => ssr(_tmpl$3, ssrHydrationKey(), ssrAttribute("data-family", escape(Count(Entry), true) > 0, false), escape(String(Entry.Index).padStart(2, "0")), escape(Entry.Title))
	})));
}
export { Flow as t };
