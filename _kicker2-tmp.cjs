const puppeteer = require("puppeteer");
(async () => {
	const b = await puppeteer.launch({ headless: true, executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", args: ["--no-sandbox", "--disable-gpu"] });
	const p = await b.newPage();
	await p.setViewport({ width: 1280, height: 1600 });
	await p.goto("http://localhost:9999/plugins/hook-dsh-pinner-package/", { waitUntil: "networkidle2", timeout: 60000 });
	const res = await p.evaluate(() => {
		const kickers = [...document.querySelectorAll("p.section-kicker")].filter(k => k.querySelector("svg"));
		const out = [];
		for (const k of kickers) {
			const svg = k.querySelector("svg");
			const st = svg.getBoundingClientRect();
			const textNode = [...k.childNodes].find(n => n.nodeType === 3);
			const range = document.createRange();
			range.selectNodeContents(textNode);
			const tr = range.getBoundingClientRect();
			out.push({
				kicker: k.textContent.trim().slice(0, 30),
				textBox: { y: tr.y, h: tr.height, center: tr.y + tr.height/2 },
				svgBox: { y: st.y, h: st.height, center: st.y + st.height/2 },
				delta: Math.round((tr.y + tr.height/2) - (st.y + st.height/2)),
				// also the glyph visual center estimate: use the svg viewBox glyph center
			});
		}
		return out;
	});
	console.log(JSON.stringify(res, null, 1));
	// also the index pair labels + arrow
	const p2 = await b.newPage();
	await p2.setViewport({ width: 1280, height: 1200 });
	await p2.goto("http://localhost:9999/", { waitUntil: "networkidle2", timeout: 60000 });
	const idx = await p2.evaluate(() => {
		const pair = document.querySelector("#use-cases .showcase__pair");
		const labels = [...pair.querySelectorAll(".showcase__side-label")];
		const flow = pair.querySelector(".showcase__flow");
		const fr = flow.getBoundingClientRect();
		const out = [];
		for (const l of labels) {
			const lr = l.getBoundingClientRect();
			out.push({ label: l.textContent, y: lr.y, h: lr.height, center: lr.y + lr.height/2 });
		}
		return { arrowCenter: fr.y + fr.height/2, labels: out };
	});
	console.log("INDEX:", JSON.stringify(idx, null, 1));
	await b.close();
})();
