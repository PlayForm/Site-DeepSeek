const puppeteer = require("puppeteer");
(async () => {
const b = await puppeteer.launch({headless:true,executablePath:"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",args:["--no-sandbox","--disable-gpu"]});
const p = await b.newPage();
await p.setViewport({width:1280,height:900,deviceScaleFactor:6});
await p.goto("http://127.0.0.1:4821/plugins/hook-dsh-package-pinner/",{waitUntil:"networkidle0"});
const meta = await p.$(".inspect-card__meta");
await meta.scrollIntoView(); await new Promise(r=>setTimeout(r,300));
await meta.screenshot({path:"/tmp/inspect-meta.png"});
await p.goto("http://127.0.0.1:4821/plugins/",{waitUntil:"networkidle0"});
const tel = await p.$(".registry-telemetry__count");
await tel.scrollIntoView(); await new Promise(r=>setTimeout(r,300));
await tel.screenshot({path:"/tmp/telemetry.png"});
await b.close();})();
