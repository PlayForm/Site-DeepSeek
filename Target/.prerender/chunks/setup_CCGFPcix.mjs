import { C as Mention, D as __exportAll, E as createComponent, S as DotSep, T as createAstro, _ as Steps, a as Links, b as Versions, n as $$Base, r as Link, t as $$Badge, w as renderScript, x as $$BrandIcon, y as Totals } from "./Badge_BcqTIV8g.mjs";
import { E as unescapeHTML, _ as maybeRenderHead, g as renderTemplate, l as renderComponent, u as Fragment, y as addAttribute } from "./server_DzHHf9NM.mjs";
import { t as $$Card } from "./Card_CsNNQgw0.mjs";
import { t as $$Concept } from "./Concept_B-uQEyUE.mjs";
import { t as $$PageHero } from "./PageHero_CSrnuBSY.mjs";
import { t as $$SectionHeader } from "./SectionHeader_CwH-UUI4.mjs";
import { t as $$CodeBlock } from "./CodeBlock_D0mCXfg1.mjs";
//#region Source/Component/Configurator.astro
var $$Configurator = createComponent(($$result, $$props, $$slots) => {
	const Order = [
		"core",
		"factory",
		"governor",
		"pinner",
		"cargo",
		"dash",
		"quotes",
		"ellipsis",
		"spaces",
		"invisible",
		"fullwidth",
		"file",
		"ccr",
		"tool-coach"
	];
	const Exclusions = "[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app]";
	const ClassicSlots = {
		core: {
			Pkg: "@playform/hook-dsh-core",
			Patch: null,
			Line: null,
			Note: "# the core: a library bundle - no patch entry, no ledger line"
		},
		factory: {
			Pkg: "@playform/plugin-dsh-factory",
			Patch: [
				"- insert:",
				"      - id: plugin-dsh-factory",
				"        name: \"@playform/plugin-dsh-factory\"",
				"        config: {}"
			].join("\n"),
			Line: null,
			Note: "# the factory: the service registers silently - the consumers print the lines"
		},
		governor: {
			Pkg: "@playform/hook-dsh-package-governor",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-package-governor",
				"        name: \"@playform/hook-dsh-package-governor\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-package-governor.log",
				"            updateCooldownMs: 3000",
				"            strict: false",
				"            mutationTools: [write, edit, str_replace_editor, raw-write]",
				"            maxUpdateFailures: 3",
				"            ncuBin: /usr/local/bin/ncu",
				"            updateMode: programmatic",
				"            policyFile: \"\"",
				`            exclude: ${Exclusions}`
			].join("\n"),
			Line: "hook-dsh-package-governor: activated (anywhere mode, logFile=~/.dsh/hook-dsh-package-governor.log, updateMode=programmatic, ncuBin=/usr/local/bin/ncu, exclude=[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app], policyFile=(discovery))",
			Note: null
		},
		pinner: {
			Pkg: "@playform/hook-dsh-package-pinner",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-package-pinner",
				"        name: \"@playform/hook-dsh-package-pinner\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-package-pinner.log",
				"            mutationTools: [write, edit, str_replace_editor, raw-write]",
				"            policyFile: \"\"",
				"            sections: [dependencies, devDependencies, peerDependencies, optionalDependencies]",
				`            exclude: ${Exclusions}`
			].join("\n"),
			Line: "hook-dsh-package-pinner: activated (pinner, logFile=~/.dsh/hook-dsh-package-pinner.log, sections=[dependencies, devDependencies, peerDependencies, optionalDependencies], exclude=[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app])",
			Note: null
		},
		cargo: {
			Pkg: "@playform/hook-dsh-cargo-governor",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-cargo-governor",
				"        name: \"@playform/hook-dsh-cargo-governor\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-cargo-governor.log",
				"            updateCooldownMs: 3000",
				"            strict: false",
				"            mutationTools: [write, edit, str_replace_editor, raw-write]",
				"            maxUpdateFailures: 3",
				"            cargoBin: cargo",
				"            updateMode: cargo",
				"            policyFile: \"\"",
				"            keepFile: \"\"",
				`            exclude: ${Exclusions}`
			].join("\n"),
			Line: `hook-dsh-cargo-governor: activated (cargo flavor, logFile=~/.dsh/hook-dsh-cargo-governor.log, updateMode=cargo, cargoBin=cargo, exclude=${Exclusions}, policyFile=(discovery))`,
			Note: null
		},
		dash: {
			Pkg: "@playform/hook-dsh-normalize-dash",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-normalize-dash",
				"        name: \"@playform/hook-dsh-normalize-dash\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-normalize-dash.log",
				"            replacement: \"-\"",
				"            normalizeReasoning: true",
				"            normalizeToolArguments: true"
			].join("\n"),
			Line: "hook-dsh-normalize-dash: activated (replacement=-, reasoning=on, toolArgs=on, logFile=~/.dsh/hook-dsh-normalize-dash.log)",
			Note: null
		},
		quotes: {
			Pkg: "@playform/hook-dsh-normalize-quotes",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-normalize-quotes",
				"        name: \"@playform/hook-dsh-normalize-quotes\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-normalize-quotes.log",
				"            normalizeReasoning: true",
				"            normalizeToolArguments: true"
			].join("\n"),
			Line: "hook-dsh-normalize-quotes: activated (reasoning=on, toolArgs=on, logFile=~/.dsh/hook-dsh-normalize-quotes.log)",
			Note: null
		},
		ellipsis: {
			Pkg: "@playform/hook-dsh-normalize-ellipsis",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-normalize-ellipsis",
				"        name: \"@playform/hook-dsh-normalize-ellipsis\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-normalize-ellipsis.log",
				"            replacement: \"...\"",
				"            normalizeReasoning: true",
				"            normalizeToolArguments: true"
			].join("\n"),
			Line: "hook-dsh-normalize-ellipsis: activated (replacement=..., reasoning=on, toolArgs=on, logFile=~/.dsh/hook-dsh-normalize-ellipsis.log)",
			Note: null
		},
		spaces: {
			Pkg: "@playform/hook-dsh-normalize-spaces",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-normalize-spaces",
				"        name: \"@playform/hook-dsh-normalize-spaces\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-normalize-spaces.log",
				"            replacement: \" \"",
				"            normalizeReasoning: true",
				"            normalizeToolArguments: true"
			].join("\n"),
			Line: "hook-dsh-normalize-spaces: activated (replacement=\" \", reasoning=on, toolArgs=on, logFile=~/.dsh/hook-dsh-normalize-spaces.log)",
			Note: null
		},
		invisible: {
			Pkg: "@playform/hook-dsh-normalize-invisible",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-normalize-invisible",
				"        name: \"@playform/hook-dsh-normalize-invisible\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-normalize-invisible.log",
				"            replacement: \"\"",
				"            normalizeReasoning: true",
				"            normalizeToolArguments: true"
			].join("\n"),
			Line: "hook-dsh-normalize-invisible: activated (replacement=\"\", reasoning=on, toolArgs=on, logFile=~/.dsh/hook-dsh-normalize-invisible.log)",
			Note: null
		},
		fullwidth: {
			Pkg: "@playform/hook-dsh-normalize-fullwidth",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-normalize-fullwidth",
				"        name: \"@playform/hook-dsh-normalize-fullwidth\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-normalize-fullwidth.log",
				"            normalizeReasoning: true",
				"            normalizeToolArguments: true"
			].join("\n"),
			Line: "hook-dsh-normalize-fullwidth: activated (reasoning=on, toolArgs=on, logFile=~/.dsh/hook-dsh-normalize-fullwidth.log)",
			Note: null
		},
		file: {
			Pkg: "@playform/hook-dsh-normalize-file",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-normalize-file",
				"        name: \"@playform/hook-dsh-normalize-file\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-normalize-file.log",
				"            replacement: \"-\""
			].join("\n"),
			Line: "hook-dsh-normalize-file: activated (replacement=-, logFile=~/.dsh/hook-dsh-normalize-file.log)",
			Note: null
		},
		ccr: {
			Pkg: "@playform/hook-dsh-ccr",
			Patch: [
				"- insert:",
				"      - id: ccr",
				"        name: \"@playform/hook-dsh-ccr\"",
				"        config:",
				"            log: true",
				"            logFile: /Users/nikola/.dsh/ccr.log",
				"            targets:",
				"                - bash",
				"                - glob",
				"                - grep",
				"                - read",
				"                - web_fetch",
				"                - web_search",
				"                - list",
				"                - search",
				"            exempt:",
				"                - write",
				"                - edit",
				"                - raw-write",
				"                - subagent",
				"                - ask_user_question",
				"                - ccr_retrieve",
				"            thresholdBytes: 2048",
				"            inlineThresholdBytes: 1024",
				"            autoExpand: true",
				"            autoExpandLimitBytes: 102400",
				"            compressFailures: false",
				"            multipliers:",
				"                terminal: 1",
				"                error: 8",
				"                grep: 2",
				"                paths: 2",
				"                file: 1",
				"                json: 1",
				"                web: 2",
				"                default: 1",
				"            previewMaxChars: 240",
				"            ttlSeconds: 3600",
				"            storeBudgetBytes: 268435456",
				"            journalPath: \"\"",
				"            contextEngine: false",
				"            contextEngineThresholdPct: 30",
				"            protectFirstTurns: 2",
				"            protectLastTurns: 4"
			].join("\n"),
			Line: "ccr: activated (bundle 0.0.1, targets 8, budget 268435456)",
			Note: null
		},
		"tool-coach": {
			Pkg: "@playform/hook-dsh-tool-coach",
			Patch: [
				"- insert:",
				"      - id: hook-dsh-tool-coach",
				"        name: \"@playform/hook-dsh-tool-coach\"",
				"        config:",
				"            log: true",
				"            logFile: ~/.dsh/hook-dsh-tool-coach.log",
				"            enabled: true",
				"            judgeTools:",
				"                - bash",
				"                - pwsh",
				"            threshold: 3",
				"            window: 8",
				"            cooldown: 10",
				"            escalateThreshold: 6",
				"            cleanWindow: 12",
				"            enforce: off",
				"            enforceThreshold: 4",
				"            fetchLive: true",
				"            maxSectionTools: 8",
				"            sectionTtl: 20"
			].join("\n"),
			Line: null,
			Note: "# the coach: no activation line - every knob is volatile, and the tier-0 ledger opens with offense <tool> <class> <pattern>"
		}
	};
	const ETSNames = {
		core: "ets-hook-dsh-core",
		factory: "ets-plugin-dsh-factory",
		governor: "ets-hook-dsh-package-governor",
		pinner: "ets-hook-dsh-package-pinner",
		cargo: "ets-hook-dsh-cargo-governor",
		dash: "ets-hook-dsh-normalize-dash",
		quotes: "ets-hook-dsh-normalize-quotes",
		ellipsis: "ets-hook-dsh-normalize-ellipsis",
		spaces: "ets-hook-dsh-normalize-spaces",
		invisible: "ets-hook-dsh-normalize-invisible",
		fullwidth: "ets-hook-dsh-normalize-fullwidth",
		file: "ets-hook-dsh-normalize-file",
		ccr: "ets-hook-dsh-ccr",
		"tool-coach": "ets-hook-dsh-tool-coach"
	};
	function RenameETS(Slots) {
		const Out = {};
		for (const Key of Order) {
			const Slot = Slots[Key];
			const Classic = Slot.Pkg.replace("@playform/", "");
			const ID = ETSNames[Key];
			const Swap = (Text) => Text.split(Classic).join(ID);
			Out[Key] = {
				Pkg: `@playform/${ID}`,
				Patch: Slot.Patch ? Swap(Slot.Patch) : null,
				Line: Slot.Line ? Swap(Slot.Line) : null,
				Note: Slot.Note
			};
		}
		return Out;
	}
	const EffectTSSlots = RenameETS(ClassicSlots);
	EffectTSSlots["tool-coach"] = {
		...EffectTSSlots["tool-coach"],
		Patch: [
			"- insert:",
			"      - id: hook-dsh-tool-coach",
			"        name: \"@playform/ets-hook-dsh-tool-coach\"",
			"        config:",
			"            log: true",
			"            logFile: ~/.dsh/hook-dsh-tool-coach.log",
			"            enabled: true",
			"            judgeTools:",
			"                - bash",
			"                - pwsh",
			"            threshold: 3",
			"            window: 8",
			"            cooldown: 10",
			"            escalateThreshold: 6",
			"            cleanWindow: 12",
			"            enforce: off",
			"            enforceThreshold: 4",
			"            fetchLive: true",
			"            maxSectionTools: 8",
			"            sectionTtl: 20"
		].join("\n")
	};
	const Engines = {
		classic: {
			Slots: ClassicSlots,
			Base: null
		},
		ets: {
			Slots: EffectTSSlots,
			Base: "@playform/ets-base-dsh"
		}
	};
	const Groups = [
		{
			Name: "CORE",
			Keys: ["core"]
		},
		{
			Name: "FACTORY",
			Keys: ["factory"]
		},
		{
			Name: "GOVERNANCE TRIO",
			Keys: [
				"governor",
				"pinner",
				"cargo"
			]
		},
		{
			Name: "NORMALIZE · 7",
			Keys: [
				"dash",
				"quotes",
				"ellipsis",
				"spaces",
				"invisible",
				"fullwidth",
				"file"
			]
		},
		{
			Name: "GUARDIANS",
			Keys: ["ccr", "tool-coach"]
		}
	];
	const DefaultEngine = "classic";
	const DefaultPkgs = [
		"factory",
		"governor",
		"pinner",
		"dash"
	];
	const DefaultProfile = "my-dsh-profile";
	function CleanProfile(Profile) {
		return Profile.replace(/["\\\n\r]/g, "").trim() || DefaultProfile;
	}
	function InstallOutput(Engine, Pkgs, Profile) {
		const Name = CleanProfile(Profile);
		const Slots = Engines[Engine].Slots;
		const Lines = [
			`# inside ~/.dsh/profiles/${Name}`,
			`cd ~/.dsh/profiles/${Name}`,
			...Pkgs.map((Key) => `npm install ${Slots[Key].Pkg}@${Versions.Release}`)
		];
		const Base = Engines[Engine].Base;
		if (Base && Pkgs.length > 0) Lines.push(`# the base ${Base} rides in transitively - the shared plumbing`);
		if (Pkgs.length === 0) Lines.push("# nothing selected - toggle the packages above");
		return Lines.join("\n");
	}
	function WiringOutput(Engine, Pkgs, Profile) {
		const Name = CleanProfile(Profile);
		const Slots = Engines[Engine].Slots;
		const PatchKeys = Pkgs.filter((Key) => Slots[Key].Patch);
		const Deps = Pkgs.length > 0 ? Pkgs.map((Key) => `    "${Slots[Key].Pkg}": "link:../bundles/${Slots[Key].Pkg.replace("@playform/", "")}"`).join(",\n") : "";
		const Bundles = PatchKeys.length > 0 ? PatchKeys.map((Key) => `        "${Slots[Key].Pkg}"`).join(",\n") : "";
		const JSON = [
			"{",
			`  "name": "${Name}",`,
			Pkgs.length > 0 ? "  \"dependencies\": {" : "  \"dependencies\": {},",
			...Pkgs.length > 0 ? [Deps] : [],
			...Pkgs.length > 0 ? ["  },"] : [],
			"  \"dsh\": {",
			"    \"profile\": {",
			PatchKeys.length > 0 ? "      \"bundles\": [" : "      \"bundles\": [],",
			...PatchKeys.length > 0 ? [Bundles] : [],
			...PatchKeys.length > 0 ? ["      ]"] : [],
			"    }",
			"  }",
			"}"
		].join("\n");
		const Patch = PatchKeys.map((Key) => Slots[Key].Patch).join("\n");
		const Parts = [JSON];
		if (PatchKeys.length > 0) Parts.push("", "# cordis.patch.yml", Patch);
		else Parts.push("", "# cordis.patch.yml - no insert entries: nothing plugin-shaped is selected");
		return Parts.join("\n");
	}
	function VerifyOutput(Engine, Pkgs) {
		const Slots = Engines[Engine].Slots;
		const Lines = [];
		for (const Key of Pkgs) {
			if (Slots[Key].Note) Lines.push(Slots[Key].Note);
			if (Slots[Key].Line) Lines.push(Slots[Key].Line);
		}
		if (Lines.length === 0) Lines.push("# nothing to verify yet - select a plugin package");
		return Lines.join("\n");
	}
	const InitialPkgs = DefaultPkgs;
	const Initial = {
		Install: InstallOutput(DefaultEngine, InitialPkgs, DefaultProfile),
		Wiring: WiringOutput(DefaultEngine, InitialPkgs, DefaultProfile),
		Verify: VerifyOutput(DefaultEngine, InitialPkgs)
	};
	const Data = {
		Version: Versions.Release,
		Order,
		Groups,
		Defaults: {
			Engine: DefaultEngine,
			Pkgs: DefaultPkgs,
			Profile: DefaultProfile
		},
		Engines: Object.fromEntries(Object.entries(Engines).map(([Name, Engine]) => [Name, {
			Base: Engine.Base,
			Slots: Object.fromEntries(Order.map((Key) => [Key, {
				Pkg: Engine.Slots[Key].Pkg,
				Patch: Engine.Slots[Key].Patch,
				Line: Engine.Slots[Key].Line,
				Note: Engine.Slots[Key].Note
			}]))
		}]))
	};
	const Payload = Buffer.from(JSON.stringify(Data), "utf8").toString("base64");
	return renderTemplate`${maybeRenderHead($$result)}<div class="cfg" data-configurator data-astro-cid-fe3fgn4v> <script crossorigin=\"anonymous\" type="application/json" data-configurator-data>${unescapeHTML(Payload)}<\/script><!-- THE SELECTION: the engine choice + the profile name + the 12 toggles --> <div class="cfg__controls" data-astro-cid-fe3fgn4v> <div class="cfg__engine" role="group" aria-label="The engine" data-astro-cid-fe3fgn4v> <button type="button" class="cfg__engine-btn is-active" data-engine="classic" aria-pressed="true" data-astro-cid-fe3fgn4v>
CLASSIC
</button> <button type="button" class="cfg__engine-btn" data-engine="ets" aria-pressed="false" data-astro-cid-fe3fgn4v>
EFFECT-TS
</button> </div> <label class="cfg__profile" data-astro-cid-fe3fgn4v> <span class="cfg__profile-label" data-astro-cid-fe3fgn4v>PROFILE NAME</span> <input class="cfg__profile-input" type="text" data-profile${addAttribute(DefaultProfile, "value")} spellcheck="false" autocomplete="off" aria-label="The profile name" data-astro-cid-fe3fgn4v> </label> </div> <div class="cfg__groups" data-astro-cid-fe3fgn4v> ${Groups.map((Group) => renderTemplate`<div class="cfg__group" data-astro-cid-fe3fgn4v> <span class="cfg__group-name" data-astro-cid-fe3fgn4v>${Group.Name}</span> <div class="cfg__chips" data-astro-cid-fe3fgn4v> ${Group.Keys.map((Key) => renderTemplate`<label class="cfg__chip"${addAttribute(Key, "data-chip")} data-astro-cid-fe3fgn4v> <input type="checkbox"${addAttribute(Key, "data-pkg")}${addAttribute(InitialPkgs.includes(Key), "checked")}${addAttribute(Key, "aria-label")} data-astro-cid-fe3fgn4v> <span class="cfg__chip-name"${addAttribute(Key, "data-chip-name")} data-astro-cid-fe3fgn4v>${Key}</span> </label>`)} </div> </div>`)} </div> <!-- THE GENERATED OUTPUT: the three live blocks, each copyable --> <div class="cfg__outputs" data-astro-cid-fe3fgn4v> <div class="cfg__panel" data-astro-cid-fe3fgn4v> <div class="cfg__bar" data-astro-cid-fe3fgn4v> <span class="cfg__title" data-astro-cid-fe3fgn4v> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep(`1 · INSTALL-ALL · PUBLISHED ROUTE · NPM · ${Versions.Release}`))}` })} </span> <span class="cfg__status" data-astro-cid-fe3fgn4v>COPIED</span> <button type="button" class="cfg__copy" aria-label="Copy the install commands" data-astro-cid-fe3fgn4v> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-fe3fgn4v> <rect x="9" y="9" width="11" height="11" rx="2" data-astro-cid-fe3fgn4v></rect> <path d="M5 15 H4 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 H14 a1 1 0 0 1 1 1 v1" data-astro-cid-fe3fgn4v></path> </svg> </button> </div> <pre class="cfg__code" data-out="install" data-astro-cid-fe3fgn4v>${Initial.Install}</pre> </div> <div class="cfg__panel" data-astro-cid-fe3fgn4v> <div class="cfg__bar" data-astro-cid-fe3fgn4v> <span class="cfg__title" data-astro-cid-fe3fgn4v> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep("2 · PROFILE WIRING · PACKAGE.JSON + CORDIS.PATCH.YML"))}` })} </span> <span class="cfg__status" data-astro-cid-fe3fgn4v>COPIED</span> <button type="button" class="cfg__copy" aria-label="Copy the profile wiring" data-astro-cid-fe3fgn4v> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-fe3fgn4v> <rect x="9" y="9" width="11" height="11" rx="2" data-astro-cid-fe3fgn4v></rect> <path d="M5 15 H4 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 H14 a1 1 0 0 1 1 1 v1" data-astro-cid-fe3fgn4v></path> </svg> </button> </div> <pre class="cfg__code" data-out="wiring" data-astro-cid-fe3fgn4v>${Initial.Wiring}</pre> </div> <div class="cfg__panel" data-astro-cid-fe3fgn4v> <div class="cfg__bar" data-astro-cid-fe3fgn4v> <span class="cfg__title" data-astro-cid-fe3fgn4v> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep("3 · VERIFY · THE ACTIVATION LEDGERS · ONE PER PLUGIN"))}` })} </span> <span class="cfg__status" data-astro-cid-fe3fgn4v>COPIED</span> <button type="button" class="cfg__copy" aria-label="Copy the verification lines" data-astro-cid-fe3fgn4v> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-fe3fgn4v> <rect x="9" y="9" width="11" height="11" rx="2" data-astro-cid-fe3fgn4v></rect> <path d="M5 15 H4 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 H14 a1 1 0 0 1 1 1 v1" data-astro-cid-fe3fgn4v></path> </svg> </button> </div> <pre class="cfg__code" data-out="verify" data-astro-cid-fe3fgn4v>${Initial.Verify}</pre> </div> </div> <p class="cfg__note" data-astro-cid-fe3fgn4v>
The commands are the published npm route - the family is on npm since the v0.0.1
		release; run them inside <code data-astro-cid-fe3fgn4v>~/.dsh</code> against the registry. The
		selection persists in the URL and in localStorage - share the URL to hand over the
		exact setup.
</p> </div>${renderScript($$result, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Configurator.astro?astro&type=script&index=0&lang.ts")}<!-- The token classes are runtime-generated (the client-side highlighter),
	so they carry no Astro scope hash: this block is global, prefixed cfg-tok
	to stay collision-free. The palettes are the site's shiki palettes - the
	github-light colors inline, the github-dark colors under the data-theme
	swap, exactly the --shiki-dark bridge Global.css runs for CodeBlock. -->`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/Configurator.astro", void 0);
//#endregion
//#region Source/Component/InstallDemo.astro
createAstro("https://deepseek.playform.cloud");
var $$InstallDemo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InstallDemo;
	const { Steps } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="install-grid" data-astro-cid-fh543yjg> ${Steps.map((Step) => renderTemplate`<article class="install-card" data-astro-cid-fh543yjg> <span class="install-card__step" data-astro-cid-fh543yjg> <span class="install-card__step-marker" aria-hidden="true" data-astro-cid-fh543yjg></span>
STEP ${Step.N} </span> <h3 class="install-card__title" data-astro-cid-fh543yjg>${Step.Title}</h3> <span class="install-card__meta" data-astro-cid-fh543yjg>${unescapeHTML(Mention(Step.Meta))}</span> <pre class="install-card__screen" data-astro-cid-fh543yjg>${Step.Lines.join("\n")}</pre> <p class="install-card__outcome" data-astro-cid-fh543yjg>${Step.Outcome}</p> </article>`)} </div>`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/Component/InstallDemo.astro", void 0);
//#endregion
//#region Source/pages/setup.astro
var setup_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Setup,
	file: () => $$file,
	url: () => $$url
});
var $$Setup = createComponent(($$result, $$props, $$slots) => {
	const DemoSteps = [
		{
			N: 1,
			Title: "Add the bundles",
			Meta: "~/.dsh/profiles/<name>/package.json",
			Lines: [
				"\"dependencies\": {",
				"  \"@playform/plugin-dsh-factory\": \"link:../bundles/plugin-dsh-factory\",",
				"  \"@playform/hook-dsh-normalize-dash\": \"link:../bundles/hook-dsh-normalize-dash\"",
				"},",
				"\"dsh\": { \"profile\": { \"bundles\": [ ... ] } }"
			],
			Outcome: "The bundles list is what activates - the link: dependencies alone are not."
		},
		{
			N: 2,
			Title: "Add the patch entries",
			Meta: "cordis.patch.yml",
			Lines: [
				"- insert:",
				"    - id: plugin-dsh-factory",
				"      name: \"@playform/plugin-dsh-factory\"",
				"      config: {}",
				"- insert:",
				"    - id: ccr",
				"      name: \"@playform/hook-dsh-ccr\"",
				"      config: { targets: [bash, ...], thresholdBytes: 2048, ... }",
				"- insert:",
				"    - id: hook-dsh-tool-coach",
				"      name: \"@playform/hook-dsh-tool-coach\"",
				"      config: { threshold: 3, window: 8, cooldown: 10, ... }"
			],
			Outcome: "EACH insert: entry declares the loader row and its config; the loader rejects unknown ids. The full real bodies (from each package's cordis.patch.yml) are in the Configurator and the patch example below."
		},
		{
			N: 3,
			Title: "Restart the harness",
			Meta: "BUNDLE LAYERS COMPOSE AT HOST BOOT",
			Lines: [
				"activation is at the next start,",
				"not at install time.",
				"dev loop: edit - build - restart."
			],
			Outcome: "Every rebuilt Target is fresh on the next restart - the bundles list plus the patches load at boot."
		},
		{
			N: 4,
			Title: "Verify the ledgers",
			Meta: "~/.dsh/<name>.log",
			Lines: ["hook-dsh-package-governor: activated (anywhere mode, logFile=..., updateMode=..., ncuBin=..., exclude=[...], policyFile=(discovery))", "hook-dsh-normalize-dash: activated (replacement=-, reasoning=on, toolArgs=off, logFile=~/.dsh/hook-dsh-normalize-dash.log)"],
			Outcome: "The ledger answers 'did it activate' - EACH plugin writes its activation line at boot."
		}
	];
	const ProfileExample = [
		"{",
		"  \"name\": \"my-dsh-profile\",",
		"  \"dependencies\": {",
		"    \"@playform/plugin-dsh-factory\": \"link:../bundles/plugin-dsh-factory\",",
		"    \"@playform/hook-dsh-package-governor\": \"link:../bundles/hook-dsh-package-governor\",",
		"    \"@playform/hook-dsh-package-pinner\": \"link:../bundles/hook-dsh-package-pinner\",",
		"    \"@playform/hook-dsh-normalize-dash\": \"link:../bundles/hook-dsh-normalize-dash\"",
		"  },",
		"  \"dsh\": {",
		"    \"profile\": {",
		"      \"bundles\": [",
		"        \"@playform/plugin-dsh-factory\",",
		"        \"@playform/hook-dsh-package-governor\",",
		"        \"@playform/hook-dsh-package-pinner\",",
		"        \"@playform/hook-dsh-normalize-dash\"",
		"      ]",
		"    }",
		"  }",
		"}"
	];
	const PatchExample = [
		"- insert:",
		"      - id: plugin-dsh-factory",
		"        name: \"@playform/plugin-dsh-factory\"",
		"        config: {}",
		"- insert:",
		"      - id: hook-dsh-package-governor",
		"        name: \"@playform/hook-dsh-package-governor\"",
		"        config:",
		"            log: true",
		"            logFile: ~/.dsh/hook-dsh-package-governor.log",
		"            updateCooldownMs: 3000",
		"            strict: false",
		"            mutationTools: [write, edit, str_replace_editor, raw-write]",
		"            maxUpdateFailures: 3",
		"            ncuBin: /usr/local/bin/ncu",
		"            updateMode: programmatic",
		"            policyFile: \"\"",
		"            exclude: [node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app]",
		"- insert:",
		"      - id: hook-dsh-normalize-dash",
		"        name: \"@playform/hook-dsh-normalize-dash\"",
		"        config:",
		"            log: true",
		"            logFile: ~/.dsh/hook-dsh-normalize-dash.log",
		"            replacement: \"-\"",
		"            normalizeReasoning: true",
		"            normalizeToolArguments: true",
		"- insert:",
		"      - id: ccr",
		"        name: \"@playform/hook-dsh-ccr\"",
		"        config:",
		"            log: true",
		"            logFile: /Users/nikola/.dsh/ccr.log",
		"            targets: [bash, glob, grep, read, web_fetch, web_search, list, search]",
		"            exempt: [write, edit, raw-write, subagent, ask_user_question, ccr_retrieve]",
		"            thresholdBytes: 2048",
		"            autoExpand: true",
		"            compressFailures: false",
		"            journalPath: \"\"",
		"- insert:",
		"      - id: hook-dsh-tool-coach",
		"        name: \"@playform/hook-dsh-tool-coach\"",
		"        config:",
		"            log: true",
		"            logFile: ~/.dsh/hook-dsh-tool-coach.log",
		"            enabled: true",
		"            judgeTools: [bash, pwsh]",
		"            threshold: 3",
		"            window: 8",
		"            cooldown: 10",
		"            enforce: off",
		"            fetchLive: true"
	];
	const VerifyLines = [
		"hook-dsh-package-governor: activated (anywhere mode, logFile=~/.dsh/hook-dsh-package-governor.log, updateMode=programmatic, ncuBin=/usr/local/bin/ncu, exclude=[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app], policyFile=(discovery))",
		"hook-dsh-package-pinner: activated (pinner, logFile=~/.dsh/hook-dsh-package-pinner.log, sections=[dependencies, devDependencies, peerDependencies, optionalDependencies], exclude=[node_modules, .git, .dsh, .pnpm, .store, DeepSeek Harness.app])",
		"hook-dsh-normalize-dash: activated (replacement=-, reasoning=on, toolArgs=off, logFile=~/.dsh/hook-dsh-normalize-dash.log)",
		"ccr: activated (bundle 0.0.1, targets 8, budget 268435456)",
		"# the tool-coach writes no activation line - its tier-0 ledger opens with the first offense line"
	];
	const TrapLines = [
		"update: running verifyCommand: pnpm install",
		"update: verifyCommand failed (status 1)",
		"update: verifyCommand runner unavailable (exit 127) — skipped, non-fatal",
		"update stage FAILED (1) for <dir>; consecutive=2"
	];
	const Knobs = [
		{
			Group: "The governance trio",
			Fields: [
				{
					Name: "log / logFile",
					Effect: "the durable ledger file (EACH plugin keeps its own, separate by default)"
				},
				{
					Name: "mutationTools",
					Effect: "which actor tools count as triggers - the deployed layers set [write, edit, str_replace_editor, raw-write]"
				},
				{
					Name: "exclude",
					Effect: "the exclusion segments - the plugin's own fence (node_modules, .git, .dsh, ...)"
				},
				{
					Name: "updateCooldownMs / maxUpdateFailures",
					Effect: "the update stage's pacing and its circuit breaker (3 failures pause a directory)"
				},
				{
					Name: "updateMode + ncuBin / cargoBin",
					Effect: "programmatic (library) vs bin (external binary via the subprocess seam); absolute paths because host PATH != shell PATH"
				},
				{
					Name: "strict",
					Effect: "strip unknown dependencies - explicit ONLY, NEVER a default-delete"
				},
				{
					Name: "policyFile / keepFile / sections",
					Effect: "the update-policy and keep-list sidecars, and which dependency sections the pinner touches"
				}
			]
		},
		{
			Group: "The stream flavors",
			Fields: [
				{
					Name: "log / logFile",
					Effect: "the flavor's own ledger, separate from the family's logs"
				},
				{
					Name: "replacement",
					Effect: "the transform's ONLY knob on class flavors (dash - / ellipsis ... / spaces space / invisible empty) - hot-editable, the next stream picks it up with NO remount"
				},
				{
					Name: "normalizeReasoning",
					Effect: "default ON - normalize reasoning deltas and the assembled reasoning block too"
				},
				{
					Name: "normalizeToolArguments",
					Effect: "default OFF - tool-call arguments are execution-critical raw JSON; the example patch turns it on (opt-in)"
				}
			]
		},
		{
			Group: "The file tool",
			Fields: [
				{
					Name: "log / logFile",
					Effect: "the normalize-file ledger"
				},
				{
					Name: "replacement",
					Effect: "the dash step's replacement - the transform's ONLY knob"
				},
				{
					Name: "normalize (per call)",
					Effect: "the raw-write tool's sibling flag: absent/false = verbatim, true = ALL six transforms, or the flavor-name array"
				}
			]
		},
		{
			Group: "The guardians",
			Fields: [
				{
					Name: "ccr: thresholdBytes / previewMaxChars / multipliers",
					Effect: "the compression gate's volatile knobs - hot-editable; targets/exempt/the store are structural (remount on edit)"
				},
				{
					Name: "ccr: autoExpand / compressFailures / journalPath",
					Effect: "auto-expand on by default (small results stored and returned FULL); failures pass through; the store is memory-only until journalPath is set"
				},
				{
					Name: "coach: threshold / window / cooldown",
					Effect: "3 strikes within an 8-judged-call window, 10 calls between notes - EVERY cell volatile"
				},
				{
					Name: "coach: escalateThreshold / cleanWindow / enforce",
					Effect: "the persistent section at 6, cleared after 12 clean calls; the deny tier off by default (enforce: 'off')"
				},
				{
					Name: "coach: judgeTools / fetchLive / maxSectionTools / sectionTtl",
					Effect: "the judged tools (bash, pwsh), the live ctx.tools.schemas() fetch, the 8-row section table, the 20-call section cache"
				}
			]
		}
	];
	return renderTemplate`<!-- The meta description stays plain text: no anchor markup, it renders into
     a content attribute and any <a> there truncates the tag at build. -->${renderComponent($$result, "Base", $$Base, {
		"Title": "Setup - DSH Family @ PlayForm",
		"Description": "How to configure the DeepSeek Harness Plugin Family in a profile: the bundle list, the cordis.patch.yml entries, the restart, the activation lines in EACH ledger. And the full configurable surface with its defaults-off posture."
	}, { "default": ($$result) => renderTemplate` ${maybeRenderHead($$result)}<main class="container container--main"> <div class="eyebrow-row"> ${renderComponent($$result, "Badge", $$Badge, {
		"Variant": "primary",
		"Dot": true
	}, { "default": ($$result) => renderTemplate`
SETUP
` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`${Steps.Count} STEPS` })} ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result) => renderTemplate`PROFILE: ~/.dsh` })} </div> ${renderComponent($$result, "PageHero", $$PageHero, {
		"Title": "Set up the family in a DeepSeek Harness profile.",
		"Sub": "Four steps: add the bundles to the profile, add the patch entries, restart, verify the ledgers.\nEVERY step below is the actual wiring the loader reads - NO separate configuration UI exists."
	})} <!-- The configurator: the selection (the 14 package toggles + the
			engine + the profile name) generating the wiring live - the
			install commands, the profile wiring and the verification
			ledgers, from the same data the steps below document. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The configurator",
		"Meta": "SELECT · GENERATE · COPY"
	})} ${renderComponent($$result, "Configurator", $$Configurator, {})} </section> <!-- The wiring at a glance: the four install-demo cards visualizing
			the profile-wiring steps (the detailed sections follow below). --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The wiring at a glance",
		"Meta": "PROFILE · PATCH · RESTART · VERIFY"
	})} ${renderComponent($$result, "InstallDemo", $$InstallDemo, { "Steps": DemoSteps })} </section> <!-- Step 1 --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Step 1 - Add the bundles to the profile",
		"Meta": "~/.dsh/profiles/<name>/package.json"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-bundles-list",
		"Title": "The bundles list is what activates",
		"Diagram": "The profile's package.json with the link: dependencies on the left and the dsh.profile.bundles list on the right - the list marking which entries actually activate."
	}, { "default": ($$result) => renderTemplate` <p>
A profile's <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-json",
		"Size": "0.9em"
	})}package.json</span> lists the bundles as${" "} <code>link:</code> dependencies and in the <code>dsh.profile.bundles</code> list.
						The list is what activates them.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-workspace-boundary",
		"Title": "The linked checkout needs its own workspace",
		"Diagram": "The profile workspace and a linked bundle side by side - the bundle carrying its own node_modules and pnpm-workspace.yaml, with an install inside the bundle landing in the bundle's own workspace, never the profile's root."
	}, { "default": ($$result) => renderTemplate` <p>
The linked checkout must carry its own${" "} <code class="code-token">node_modules</code>.
						EACH bundle needs its own <span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-yaml",
		"Size": "0.9em"
	})}pnpm-workspace.yaml</span> (<code>packages: [.]</code>).
</p> <p>
An install inside a bundle under the profile's workspace acts on the
						workspace root.
						It does nothing to the bundle.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-remote-installs",
		"Title": "Remote installs work the same way",
		"Diagram": "The tarball route into the same bundles list - dsh plugin --profile add of a built bundle; the npm install route against the registry is the other path in, live since the v0.0.1 release."
	}, { "default": ($$result) => renderTemplate` <p> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "playform" })}${" "} <code>dsh plugin --profile &lt;name&gt; add &lt;tarball&gt;</code> for a built bundle today, or${" "} <code>npm install @playform/&lt;pkg&gt;@0.0.1</code> in the profile directory.
						The family is LIVE on <code class="code-token">npm</code> since the v0.0.1
						release (provenance via OIDC trusted publishing).
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "json",
		"Source": ProfileExample.join("\n")
	})} </section> <!-- Step 2 --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Step 2 - The patch entries",
		"Meta": "cordis.patch.yml"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-patch-rows",
		"Title": "The insert: entries declare the loader row",
		"Diagram": "A [cordis.patch.yml](Ours:Classic/packages/plugin-dsh-factory/cordis.patch.yml) insert: entry mapping to its loader row and config - a bare id: row patching an existing entry, and an unknown id rejected by the loader."
	}, { "default": ($$result) => renderTemplate` <p>
Each bundle ships a <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/cordis.patch.yml"), "href")}><span class="file-mention">${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "file-yaml",
		"Size": "0.9em"
	})}cordis.patch.yml</span></a>.
						Its <code>insert:</code> entries declare the loader row and the config.
</p> <p>
A bare <code>id:</code> row patches an existing entry.
						The loader rejects unknown ids with <code>entry "..." not found</code>.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-factory-config",
		"Title": "The factory needs no config",
		"Diagram": "The factory's insert: row registering the service with an empty config, while the consumers' rows carry the actual configuration."
	}, { "default": ($$result) => renderTemplate` <p>
It registers the service.
						The consumers' rows do the rest.
</p> <p>
The example below is the deployed combination.
						The two governance plugins have <code class="code-token">raw-write</code> added to mutationTools.
						The dash flavor has the example patch's opt-in <code class="code-token">toolArgs</code>.
</p> ` })} </div> ${renderComponent($$result, "CodeBlock", $$CodeBlock, {
		"Language": "yaml",
		"Source": PatchExample.join("\n")
	})} </section> <!-- Step 3 --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Step 3 - Restart",
		"Meta": "BUNDLE LAYERS COMPOSE AT HOST BOOT"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-boot-activation",
		"Title": "Activation is at the next start, not at install time",
		"Diagram": "Install-time vs boot-time: the file: dependency alone not activating, the bundles list plus the restart loading the entries from each bundle's built Target/."
	}, { "default": ($$result) => renderTemplate` <p>
Bundle layers compose when the host boots.
						Activation is at the next start, NOT at install time.
</p> <p>
A <code>file:</code> dependency alone is NOT activation.
						The bundles list plus the restart is what loads the entries from EACH bundle's built${" "} <code>Target/</code>.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-dev-loop",
		"Title": "The dev loop is edit - build - restart",
		"Diagram": "The loop: edit a linked bundle's source, build its Target, restart the host - the rebuilt Target fresh on every restart."
	}, { "default": ($$result) => renderTemplate` <p>
EVERY rebuild of a linked bundle's Target is fresh on the next restart.
						The dev loop is edit - build - restart.
</p> ` })} </div> </section> <!-- Step 4 --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Step 4 - Verify",
		"Meta": "THE LEDGERS' ACTIVATION LINES"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-ledger-verify",
		"Title": "The ledger answers 'did it activate'",
		"Diagram": "Each plugin writing its activation line to its own ~/.dsh/<name>.log at boot - the ledger and the runtime's inspect providers as the activation assessors."
	}, { "default": ($$result) => renderTemplate` <p>
"Did it activate" is answerable from the ledger alone.
						EACH plugin writes its activation line to its own ~/.dsh/&lt;name&gt;.log at boot.
</p> <p>
The ledgers and the runtime's inspect providers are the activation assessors.
						The old <code>--dump-config</code> verification path is gone behind the
						app-managed profile guard.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-effective-config",
		"Title": "Read the effective config, not the schema",
		"Diagram": "The bundle patch layers projecting the live effective config - a patch config replacing the entry config wholesale, the schema-advertised defaults shown as possibly-not-running."
	}, { "default": ($$result) => renderTemplate` <p>
Read the effective config from the bundle patch layers, NOT the schema
						projection alone.
						A patch config replaces the entry config wholesale.
						The defaults the schema advertises may NOT be what runs.
</p> ` })} </div> <div class="code-block">${VerifyLines.join("\n")}</div> </section> <!-- The configurable surface --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "The configurable surface",
		"Meta": "REAL SCHEMA FIELDS"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-real-fields",
		"Title": "Real schema fields, hot-editable",
		"Diagram": "The Config schemas behind every knob - the volatile cells (log, logFile, replacement, each plugin's own hot fields) committing without remounting the plugin."
	}, { "default": ($$result) => renderTemplate` <p>
EVERY knob below is a real field in the packages' Config schemas.
						Volatile cells (log, <code class="code-token">logFile</code>, replacement and EACH
						plugin's own hot fields) commit WITHOUT remounting the plugin.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-full-tables",
		"Title": "The full tables live on each plugin page",
		"Diagram": "The plugin pages carrying the full config table for each bundle - the eight pages linked from this section."
	}, { "default": ($$result) => renderTemplate` <p>
EACH plugin's full table lives on its page: the
<a href="/plugins/hook-dsh-package-governor/">package governor</a>, the
<a href="/plugins/hook-dsh-package-pinner/">pinner</a>, the${" "} ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "rust" })}${" "} <a href="/plugins/hook-dsh-cargo-governor/">cargo governor</a>, the
<a href="/plugins/hook-dsh-normalize-dash/">dash flavor</a>, the
<a href="/plugins/hook-dsh-normalize-file/">normalize-file tool</a>, the${" "} <a href="/plugins/hook-dsh-ccr/">ccr compressor</a>, the${" "} <a href="/plugins/hook-dsh-tool-coach/">tool-coach</a> and the
<a href="/plugins/plugin-dsh-factory/">factory service</a>.
</p> ` })} </div> <div class="grid grid--3"> ${Knobs.map((Group) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "Variant": "white" }, { "default": ($$result) => renderTemplate` <div class="card__top"> <span class="card__name card__name--ink">${Group.Group}</span> </div> ${Group.Fields.map((Field) => renderTemplate`<p class="card__desc card__desc--muted" style="margin-top: var(--space-sm)"> <span class="hook-tally">${unescapeHTML(Mention(Field.Name))}</span> -${" "} <span>${unescapeHTML(Mention(Field.Effect))}</span> </p>`)}` })}`)} </div> </section> <!-- Optionality --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Optional by default",
		"Meta": "WHAT STAYS OFF UNLESS YOU ASK"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-toolargs",
		"Title": "normalizeToolArguments: false",
		"Diagram": "The schema default OFF for tool-call arguments - execution-critical raw JSON - and the structural pass-through exemptions (edit/raw-write/normalize-file by identity, the __normalize:false first-key marker) when a patch turns it on."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`DEFAULT OFF` })} <p>
The default.
</p> <p>
Tool-call arguments are execution-critical raw JSON.
						Rewriting them is the user's accepted risk.
						The schema default is OFF and the example patch turns it on.
</p> <p>
Effective tool-input normalization is${" "} <code>normalizeToolArguments || scopes.toolInput</code>.
						The field is kept and OR-ed in, so this knob and the granular scopes compose.
</p> <p>
Even when on, the three structural exemptions pass through by identity -${" "} <code>edit</code> (its <code>old_string</code> must match the real file
						bytes), <code>raw-write</code> (it owns its content normalization through
						its explicit <code>normalize</code> parameter) and${" "} <code>normalize-file</code> (its arguments carry a file path).
						And a <code>&#123;"__normalize":false&#125;</code>-marked call passes through
						unnormalized: the per-call "leave that search alone" control.
						Its marker must be the FIRST key (the core strips the marker entry, so the
						executed call carries NO unknown key; a first delta shorter than the marker
						is invisible to the probe and the call normalizes normally).
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-govern",
		"Title": "govern: absent",
		"Diagram": "The raw-write tool with no govern flag emitting [fs/observed](Harness:packages/fs/fs/src/index.ts) exactly like a built-in write - the event path governing it as always, the per-call direct chain running only when asked."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`ESCAPE HATCH` })} <p>
The raw-write tool's escape hatch: with NO govern flag the write emits
<a${addAttribute(Link(Links.DeepSeekHarness, "packages/fs/fs/src/index.ts"), "href")}>fs/observed</a> exactly like a built-in write.
						The event path governs it as always.
</p> <p>The per-call direct chain ONLY runs when you ask for it.</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-normalize",
		"Title": "normalize: absent (raw-write)",
		"Diagram": "The raw-write tool's default posture: content landing verbatim, byte-for-byte - normalization happening only when the call selects it, all six transforms or specific flavors."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`VERBATIM BY DEFAULT` })} <p>
The default posture of the raw-write tool: content lands verbatim,
						byte-for-byte.
</p> <p>
Normalization happens ONLY when the call selects it - ALL six transforms, or
						specific flavors.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-tracing",
		"Title": "Tracing: no-op by default",
		"Diagram": "The Effect-TS release wrapping every governance stage in spans while shipping Effect's no-op Tracer - the OTLP exporter attaching only when configured, spans never altering ledger strings or timing-sensitive gates."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`ZERO COST BY DEFAULT` })} <p> ${renderComponent($$result, "BrandIcon", $$BrandIcon, { "Name": "effect" })}${" "} <a${addAttribute(Link(Links.OurRepo, "EffectTS"), "href")}>The Effect-TS release</a> wraps EVERY governance stage in spans (dsh.gate,
						dsh.discover, dsh.chain-pass, dsh.write).
						It ships Effect's no-op Tracer as the default - zero cost, NO behavior
						change.
</p> <p>
The OTLP exporter attaches ONLY when configured.
						Spans NEVER alter ledger strings or timing-sensitive gates.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-parallel",
		"Title": "The parallel-govern toggle",
		"Diagram": "The direct-govern path running SEQUENTIAL (the awaited fold - the live-verified race fix) against the inherently concurrent event path - the designed per-call toggle riding the same govern flag shape in both releases."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(DotSep("PLANNED · DEFAULT SEQUENTIAL"))}` })}` })} <p> <a${addAttribute(Link(Links.OurRepo, "Classic/packages/plugin-dsh-factory/Source/Function/Govern.ts"), "href")}>The direct-govern path</a> is deliberately SEQUENTIAL (the awaited fold - the
						live-verified race fix).
						The event path is inherently concurrent.
</p> <p>
A per-call toggle to run the steps concurrently is designed (#14) to ride
						the same govern flag shape in BOTH releases.
						It is planned, with the sequential fold as the default.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-best-effort",
		"Title": "Best-effort everywhere",
		"Diagram": "The four best-effort postures: storage records buffering or dropping without a facility, excluded paths logging one line and moving on, a no-op write writing nothing, a thrown-away stream writing no ledger line."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`SILENCE AS INVARIANT` })} <p>
Storage records buffer or drop when NO storage facility is present (the
						human ledger stays the complete record).
						Excluded paths log ONE line and move on.
						A no-op write writes nothing.
						A thrown-away stream writes NO ledger line.
</p> <p>
Silence is the invariant.
						The ledger is the receipt.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-scopes",
		"Title": "scopes.toolInput / toolResults / batch: off",
		"Diagram": "The granular volatile scopes' defaults are exactly the pre-scopes behavior: conversation and reasoning on, toolInput / toolResults / batch off, files on - the whole object one volatile cell, so a flip lands on the next judged call with no remount."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`DEFAULT OFF` })} <p>
The granular scopes keep the historical behavior by default.
						ONLY <code>conversation</code>, <code>reasoning</code> and <code>files</code> are on.
<code>toolInput</code>, <code>toolResults</code> and <code>batch</code> are off.
</p> <p>
Effective tool-input normalization is${" "} <code>normalizeToolArguments || scopes.toolInput</code>.
						So an existing patch that turns the field on keeps working unchanged.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-overpass",
		"Title": "The overpass arms: opt-in",
		"Diagram": "The two extra listeners registered at apply but gated at RUNTIME on the scope cells - the tools/post-execute tool-results arm (the OUTERMOST prepend) and the agent/pre-step step-batch arm - reachable through the normalize-overpass command; the file sweep is owned by the normalize-file hook."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`OPT-IN` })} <p>
The overpass arms ship registered but inert.
						They gate at runtime on <code>scopes.toolResults</code> and <code>scopes.batch</code>.
						So arming them is a config flip (or the <code>normalize-overpass</code> command), NOT a
						re-registration.
</p> <p>
The <code>files &lt;path...&gt;</code> sweep is owned by
						the <a href="/plugins/hook-dsh-normalize-file/">normalize-file hook</a>.
</p> <p>
And the invisibility contract: a tool-result normalization replaces the
						bytes PRE-COMMIT.
						The waterfall settles before the result is appended to the durable log.
						So the model ONLY ever sees the normalized output, the write-path
						counterpart of the governance trio's never-notify precedent.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-optional-guardians",
		"Title": "The guardians' off-by-default surfaces",
		"Diagram": "ccr's compressFailures off (failures pass through, the error x8 tier is the only beneficiary) and journalPath empty (memory-only store); the tool-coach's enforce tier 'off' (coaching only, no denies) with enabled as the master switch."
	}, { "default": ($$result) => renderTemplate` ${renderComponent($$result, "Badge", $$Badge, { "Variant": "outline" }, { "default": ($$result) => renderTemplate`COACHING, NOT POLICING` })} <p> <a href="/plugins/hook-dsh-ccr/">ccr</a>: <code>compressFailures</code> is
						off (failures pass through; the error ×8 tier is the ONLY beneficiary).
<code>journalPath</code> is empty.
						The store is memory-only until you point it at a JSONL file.
</p> <p> <a href="/plugins/hook-dsh-tool-coach/">The tool-coach</a>:${" "} <code>enforce: 'off'</code>.
						The deny tier is the configurable last resort.
						Out of the box the coach ONLY logs and notes.
</p> <p>
EVERY knob of BOTH plugins is volatile.
						A flip lands on the next judged call.
</p> ` })} </div> </section> <!-- The ledgers --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "One ledger per plugin",
		"Meta": "~/.dsh/<name>.log"
	})} <div class="concept-list"> ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-separate-ledgers",
		"Title": "Separate ledgers, separate concerns",
		"Diagram": "The governor's, the pinner's and the cargo governor's ledgers as three separate files - activating one never implying another."
	}, { "default": ($$result) => renderTemplate` <p>
Each plugin writes its own durable ledger - the governor's, the pinner's and
						the cargo governor's are separate files and separate concerns: activating
						one never implies another.
</p> ` })} ${renderComponent($$result, "Concept", $$Concept, {
		"ID": "setup-line-format",
		"Title": "The line format",
		"Diagram": "One message flowing through [the factory's Append](Ours:Classic/packages/plugin-dsh-factory/Source) into its two forms: [ISO] message in the file, plugin: message on the logger."
	}, { "default": ($$result) => renderTemplate` <p> <code>[&lt;ISO&gt;] &lt;message&gt;</code> in the file
						and <code>&lt;plugin&gt;: &lt;message&gt;</code> on the logger, both
						composed by the factory's Append around the plugin's own string.
</p> ` })} </div> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Plugin</th> <th> ${renderComponent($$result, "BrandIcon", $$BrandIcon, {
		"Name": "terminal",
		"Size": "0.9em"
	})}Ledger
</th> <th>First line at boot</th> </tr> </thead> <tbody> <tr> <td><a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-package-governor/Source"), "href")}>hook-dsh-package-governor</a></td> <td>~/.dsh/hook-dsh-package-governor.log</td> <td>activated (anywhere mode, ...)</td> </tr> <tr> <td><a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-package-pinner/Source"), "href")}>hook-dsh-package-pinner</a></td> <td>~/.dsh/hook-dsh-package-pinner.log</td> <td>activated (pinner, ...)</td> </tr> <tr> <td><a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-cargo-governor/Source"), "href")}>hook-dsh-cargo-governor</a></td> <td>~/.dsh/hook-dsh-cargo-governor.log</td> <td>activated (cargo flavor, ...)</td> </tr> <tr> <td><a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-dash/Source"), "href")}>hook-dsh-normalize-dash</a></td> <td>~/.dsh/hook-dsh-normalize-dash.log</td> <td>activated (replacement=-, reasoning=on, ...)</td> </tr> <tr> <td><a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-normalize-file/Source"), "href")}>hook-dsh-normalize-file</a></td> <td>~/.dsh/hook-dsh-normalize-file.log</td> <td>activated (replacement=-, ...)</td> </tr> <tr> <td><a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-ccr/Source"), "href")}>hook-dsh-ccr</a></td> <td>~/.dsh/ccr.log</td> <td>activated (bundle 0.0.1, targets 8, budget 268435456)</td> </tr> <tr> <td><a${addAttribute(Link(Links.OurRepo, "Classic/packages/hook-dsh-tool-coach/Source"), "href")}>hook-dsh-tool-coach</a></td> <td>~/.dsh/hook-dsh-tool-coach.log</td> <td>no boot line - the tier-0 ledger starts at the first offense</td> </tr> </tbody> </table> </div> </section> <!-- The known gaps: where users hit them, stated as they are - the
			corrected claims stay, no marketing gloss. --> <section class="section"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, {
		"Title": "Pitfalls",
		"Meta": "THE KNOWN GAPS"
	})} <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The gaps and the working lessons, stated as they are.
</p> <p class="page-hero__sub" style="margin-bottom: var(--space-md)">
The narrative form lives on
				the <a href="/case-study/">case-study page</a>; this section is the
				setup-relevant inventory.
</p> <div class="table-wrap"> <table class="table"> <thead> <tr> <th>Pitfall</th> <th>What actually happens</th> <th>The lesson</th> </tr> </thead> <tbody> <tr> <td><strong>Load order is not list order</strong></td> <td>
The pinner can activate before the governor at boot - the
								registration order is not controlled.
</td> <td>
Never rely on the bundles-list order for step ordering; the fold
								and the fresh-version writes make the order irrelevant. Each
								ledger answers for its own plugin.
</td> </tr> <tr> <td><strong>The verifyCommand trap</strong></td> <td>
An update-policy <code>verifyCommand</code> can fail with a
								non-zero status - on a vendored-fork workspace,${" "} <code>pnpm install</code> has no registry to install from.
</td> <td>
The documented cordis registry trap: the failure is expected, not
								a bug. Exit 127 (the runner unavailable) is non-fatal; any other
								failure trips the circuit breaker (<code>maxUpdateFailures</code>).
</td> </tr> <tr> <td><strong>The smoke/live fidelity gap</strong></td> <td>
All ${Totals.Classic} + ${Totals.EffectTS} smokes green does not prove the profile wiring -
								every real bug was found live, not by the smokes.
</td> <td>
The smokes prove the mechanics; the live battery proves the
								wiring. Verify the ledgers after every restart.
</td> </tr> <tr> <td><strong>The timestamp confusion</strong></td> <td>
The ledger lines are ISO UTC; the storage records are epoch
								milliseconds; the local display adds +03.
</td> <td>
The "missing records" scares were filter mistakes, not lost data -
								check the timezone before hunting for loss.
</td> </tr> <tr> <td><strong>The byte-integrity law</strong></td> <td>
A write that emits bytes the file's format forbids corrupts the
								file - the NUL-byte incident class, the lesson of the URL-registry
								corruption.
</td> <td>
Verbatim is the default; the normalize family restores the
								integrity; the byte-scan is the arbiter.
</td> </tr> <tr> <td><strong>The raw-write marker semantics</strong></td> <td> <code>govern</code> absent = no chain (the escape hatch); a
								marked call passes through only when marked.
</td> <td>
Markers are stripped before the tool validates - the harness
								tools reject unknown argument keys (
<code>additionalProperties: false</code>).
</td> </tr> </tbody> </table> </div> <div class="code-block">${TrapLines.join("\n")}</div> <p class="page-hero__sub" style="margin-top: var(--space-md)">
The verifyCommand lines above are byte-exact ledger strings of the update stage's
				Verify step; the live battery's <code>governed-chain</code> fixture records the
				running and failure lines, and the smokes assert all four forms.
</p> </section> </main> ` })}`;
}, "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/setup.astro", void 0);
var $$file = "/Volumes/CORSAIR/Developer/macOS/Application/PlayForm/DeepSeek/Site/Source/pages/setup.astro";
var $$url = "/setup";
//#endregion
//#region \0virtual:astro:page:Source/pages/setup@_@astro
var page = () => setup_exports;
//#endregion
export { page };
