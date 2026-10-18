const puppeteer = require("puppeteer");

// Measures the vertical offset between the live-dot's box center and the
// surrounding mono text's INK center (canvas font metrics + Range box),
// for each live-dot placement, both themes, several widths.
const PAGES = [
	{ file: "Target/plugins/index.html", sels: [".registry-telemetry__count"] },
	{
		file: "Target/plugins/hook-dsh-package-pinner/index.html",
		sels: [".registry-telemetry__count", ".inspect-card__meta"],
	},
];

async function measure(page, url, sels) {
	await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
	return page.evaluate((sels) => {
		const out = [];
		for (const sel of sels) {
			const host = document.querySelector(sel);
			if (!host) continue;
			const dot = host.querySelector(".live-dot");
			if (!dot) continue;
			// The text node(s) of the host, excluding the dot itself.
			const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT);
			let node;
			const ranges = [];
			while ((node = walker.nextNode())) {
				if (!node.textContent.trim()) continue;
				const r = document.createRange();
				r.selectNodeContents(node);
				const rect = r.getBoundingClientRect();
				if (rect.height > 0) ranges.push({ text: node.textContent.trim(), rect });
			}
			const dr = dot.getBoundingClientRect();
			const cs = getComputedStyle(host);
			const text = ranges[0];
			// Canvas ink metrics for the exact string in the host's font.
			const c = document.createElement("canvas").getContext("2d");
			c.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
			const m = c.measureText(text.text);
			const fbA = m.fontBoundingBoxAscent,
				fbD = m.fontBoundingBoxDescent;
			const inkA = m.actualBoundingBoxAscent,
				inkD = m.actualBoundingBoxDescent;
			// Baseline position inside the Range line box: the half-leading
			// centers the font box in the line box.
			const fontBox = fbA + fbD;
			const baseline = text.rect.top + (text.rect.height - fontBox) / 2 + fbA;
			const inkCenter = baseline - (inkA + inkD) / 2;
			const dotCenter = dr.top + dr.height / 2;
			out.push({
				sel,
				text: text.text,
				dotCenter: +dotCenter.toFixed(2),
				inkCenter: +inkCenter.toFixed(2),
				// positive = dot sits BELOW the text ink center
				offset: +(dotCenter - inkCenter).toFixed(2),
				fontSize: cs.fontSize,
				rectH: +text.rect.height.toFixed(2),
			});
		}
		return out;
	}, sels);
}

(async () => {
	const b = await puppeteer.launch({
		headless: true,
		executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
		args: ["--no-sandbox", "--disable-gpu"],
	});
	const p = await b.newPage();
	const widths = [375, 768, 1024, 1280];
	for (const theme of ["light", "dark"]) {
		for (const w of widths) {
			await p.setViewport({ width: w, height: 900 });
			await p.evaluateOnNewDocument((t) => {
				document.documentElement.setAttribute("data-theme", t);
			}, theme);
			for (const pg of PAGES) {
				const res = await measure(
					p,
					"http://127.0.0.1:4821/" + pg.file.replace("Target/", ""),
					pg.sels,
				);
				for (const r of res)
					console.log(
						`${theme} ${w} ${pg.file.split("/")[1]} ${r.sel} "${r.text}" offset=${r.offset} (dot=${r.dotCenter} ink=${r.inkCenter} fs=${r.fontSize} lh-box=${r.rectH})`,
					);
			}
		}
	}
	await b.close();
})();
