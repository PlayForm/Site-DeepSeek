const puppeteer = require("puppeteer");
(async () => {
	const b = await puppeteer.launch({ headless: true, executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", args: ["--no-sandbox", "--disable-gpu"] });
	// --- plugin page kickers ---
	const p = await b.newPage();
	await p.setViewport({ width: 1280, height: 2000 });
	await p.goto("http://localhost:9999/plugins/hook-dsh-pinner-package/", { waitUntil: "networkidle2", timeout: 60000 });
	const k = await p.evaluate(() => {
		const out = [];
		for (const k of [...document.querySelectorAll("p.section-kicker")].filter(k => k.querySelector("svg"))) {
			const svg = k.querySelector("svg");
			const st = svg.getBoundingClientRect();
			const textNode = [...k.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
			const range = document.createRange();
			range.selectNodeContents(textNode);
			const tr = range.getBoundingClientRect();
			// the glyph visual center: sample several chars' rects via caretRangeFromPoint? simpler: measure the text rect
			out.push({
				label: k.textContent.trim().slice(0, 30),
				textRect: { y: +tr.y.toFixed(2), h: +tr.height.toFixed(2), center: +(tr.y + tr.height/2).toFixed(2) },
				svgRect: { y: +st.y.toFixed(2), h: +st.height.toFixed(2), center: +(st.y + st.height/2).toFixed(2) },
				deltaTextVsSvgBox: +(tr.y + tr.height/2 - (st.y + st.height/2)).toFixed(2),
				va: getComputedStyle(svg).verticalAlign,
			});
		}
		return out;
	});
	console.log("PLUGIN KICKERS:", JSON.stringify(k, null, 1));
	// --- index pair: label text vs arrow svg ---
	const p2 = await b.newPage();
	await p2.setViewport({ width: 1280, height: 1400 });
	await p2.goto("http://localhost:9999/", { waitUntil: "networkidle2", timeout: 60000 });
	const idx = await p2.evaluate(() => {
		const pair = document.querySelector("#use-cases .showcase__pair");
		const flow = pair.querySelector(".showcase__flow svg");
		const fr = flow.getBoundingClientRect();
		const out = { arrow: { y: +fr.y.toFixed(2), h: +fr.height.toFixed(2), center: +(fr.y + fr.height/2).toFixed(2) }, labels: [] };
		for (const l of pair.querySelectorAll(".showcase__side-label")) {
			const lr = l.getBoundingClientRect();
			out.labels.push({ label: l.textContent, y: +lr.y.toFixed(2), h: +lr.height.toFixed(2), center: +(lr.y + lr.height/2).toFixed(2) });
		}
		return out;
	});
	console.log("INDEX:", JSON.stringify(idx, null, 1));
	await b.close();
})();
