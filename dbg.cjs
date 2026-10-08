const { pathToFileURL } = require("url");
const { join } = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");
(async () => {
	const Html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>
	<script type="module">
		import mermaid from "${pathToFileURL(join(process.cwd(), "node_modules/mermaid/dist/mermaid.esm.min.mjs")).href}";
		window.__m = mermaid;
		window.__ready = true;
	</script></body></html>`;
	fs.writeFileSync("/tmp/mm-test.html", Html);
	const b = await puppeteer.launch({
		headless: true,
		executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
		args: ["--no-sandbox", "--disable-gpu", "--allow-file-access-from-files"],
	});
	const p = await b.newPage();
	p.on("console", (m) => console.log("PAGE:", m.type(), m.text()));
	p.on("pageerror", (e) => console.log("PAGEERR:", e.message.split("\n")[0]));
	await p.goto(pathToFileURL("/tmp/mm-test.html").href, { waitUntil: "load" });
	try {
		await p.waitForFunction("window.__ready === true", { timeout: 15000 });
		console.log("READY");
	} catch { console.log("NOT READY"); }
	await b.close();
})();
