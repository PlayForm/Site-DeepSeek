import { createSignal, onCleanup } from "solid-js";

interface Props {
	Text: string;
}

// The one interactive primitive the prototype ships: it copies the code block
// it belongs to. The island exists so the Solid pipeline is proven on the
// built output before the interactive routes arrive.
export default (Props: Props) => {
	const [Copied, SetCopied] = createSignal(false);
	let Timer: ReturnType<typeof setTimeout> | undefined;

	const Copy = async () => {
		try {
			await navigator.clipboard.writeText(Props.Text);
			SetCopied(true);
			Timer = setTimeout(() => SetCopied(false), 1600);
		} catch {
			SetCopied(false);
		}
	};

	// `clearTimeout` is global in the browser and in the build process, while
	// `window` is not; the island renders on the server first.
	onCleanup(() => clearTimeout(Timer));

	return (
		<button type="button" class="copy-button" onClick={Copy} aria-live="polite">
			{Copied() ? "Copied" : "Copy"}
		</button>
	);
};
