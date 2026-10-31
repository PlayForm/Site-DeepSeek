import { _ as createComponent, g as createAstro } from "./Base_CT63gv6q.mjs";
import { _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_DTTNCURM.mjs";
import { existsSync } from "node:fs";
import { join } from "node:path";
// Source/Component/Icon.astro
createAstro("https://deepseek.playform.cloud");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { Name, Size = 56, Label, Priority = false } = Astro.props;
	if (/^[a-z0-9][a-z0-9-]*$/i.test(Name) === false) throw new Error(`Icon: "${Name}" is not a package directory name (letters, digits and dashes only - no slashes, no dots)`);
	const Directory = join(process.cwd(), "Public", "Icon");
	if (existsSync(Directory) === false) throw new Error("Icon: Public/Icon/ is missing - run `pnpm Prepare` (it copies the icon set out of the monorepo) before building.");
	const Drawn = existsSync(join(Directory, `${Name}.svg`));
	return renderTemplate`${Drawn && renderTemplate`${maybeRenderHead($$result)}<img class="icon"${addAttribute(`/Icon/${Name}.svg`, "src")}${addAttribute(Size, "width")}${addAttribute(Size, "height")}${addAttribute(Label ?? "", "alt")}${addAttribute(Priority ? "eager" : "lazy", "loading")} decoding="async"${addAttribute(Priority ? "high" : "auto", "fetchpriority")}${addAttribute(Name, "data-icon")}>`}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Icon.astro", void 0);
export { $$Icon as t };
