const puppeteer = require("puppeteer");
(async () => {
	const b = await puppeteer.launch({ headless: true, executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", args: ["--no-sandbox", "--disable-gpu"] });
	const p = await b.newPage();
	await p.setViewport({ width: 1280, height: 2200 });
	await p.goto("http://localhost:9999/", { waitUntil: "networkidle2", timeout: 60000 });
	await p.evaluate(() => document.getElementById("use-cases").scrollIntoView({ block: "start" }));
	await new Promise(r => setTimeout(r, 500));
	const el = await p.$("#use-cases");
	await el.screenshot({ path: "/tmp/index-cards.png" });
	// zoomed pair shot
	const pair = await p.$("#use-cases .showcase__pair");
	await pair.screenshot({ path: "/tmp/index-pair.png" });
	// plugin page kickers
	await p.goto("http://localhost:9999/plugins/hook-dsh-pinner-package/", { waitUntil: "networkidle2", timeout: 60000 });
	await p.evaluate(() => {
		const k = [...document.querySelectorAll("p.section-kicker")].find(k => k.textContent.includes("Before - the manifest"));
		k.scrollIntoView({ block: "center" });
	});
	await new Promise(r => setTimeout(r, 500));
	await p.screenshot({ path: "/tmp/plugin-kickers.png" });
	await b.close();
	console.log("shots done");
})();
