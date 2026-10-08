const puppeteer = require("puppeteer");
(async () => {
	const b = await puppeteer.launch({ headless: true, executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", args: ["--no-sandbox", "--disable-gpu"] });
	const p = await b.newPage();
	await p.setViewport({ width: 1100, height: 900 });
	await p.goto("http://localhost:9999/plugins/hook-dsh-core/", { waitUntil: "networkidle2", timeout: 60000 });
	await p.screenshot({ path: "/tmp/core-top.png" });
	const el = await p.$('[data-diagram="core-family-position"]');
	if (el) { await el.scrollIntoView(); await new Promise(r => setTimeout(r, 500)); await el.screenshot({ path: "/tmp/diagram-block.png" }); console.log("diagram shot ok"); }
	else console.log("diagram element not found");
	await p.goto("http://localhost:9999/plugins/hook-dsh-pinner-package/", { waitUntil: "networkidle2", timeout: 60000 });
	const pin = await p.$('[data-diagram="pin-then-bump-exact"]');
	if (pin) { await pin.scrollIntoView(); await new Promise(r => setTimeout(r, 500)); await pin.screenshot({ path: "/tmp/pin-block.png" }); }
	await b.close();
})();
