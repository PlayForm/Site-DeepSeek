const puppeteer = require("puppeteer");
(async () => {
	const b = await puppeteer.launch({ headless: true, executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", args: ["--no-sandbox", "--disable-gpu"] });
	const p = await b.newPage();
	await p.setViewport({ width: 1280, height: 1600 });
	await p.goto("http://localhost:9999/plugins/hook-dsh-pinner-package/", { waitUntil: "networkidle2", timeout: 60000 });
	const res = await p.evaluate(() => {
		const kickers = [...document.querySelectorAll("p.section-kicker")];
		const out = [];
		for (const k of kickers) {
			const svg = k.querySelector("svg");
			if (!svg) continue;
			const kt = k.getBoundingClientRect();
			const st = svg.getBoundingClientRect();
			const textNodes = [...k.childNodes].filter(n => n.nodeType === 3);
			// text range box
			const range = document.createRange();
			range.selectNodeContents(k);
			// measure the text: clone minus svg
			out.push({
				kicker: k.textContent.trim().slice(0, 40),
				kickerBox: { y: kt.y, h: kt.height },
				svgBox: { y: st.y, h: st.height, center: st.y + st.height/2 },
				svgTopGap: st.y - kt.y,
				svgBottomGap: kt.y + kt.height - (st.y + st.height),
				lineHeight: getComputedStyle(k).lineHeight,
				fontSize: getComputedStyle(k).fontSize,
				verticalAlign: getComputedStyle(svg).verticalAlign,
				display: getComputedStyle(svg).display,
			});
		}
		return out;
	});
	console.log(JSON.stringify(res, null, 1));
	await b.close();
})();
