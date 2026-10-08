// Grid-overflow measurement: body scrollWidth vs clientWidth + offenders.
// Usage: node Scripts/grid-measure.cjs [port] [width...]
const path = require("path");
const puppeteer = require(path.join(process.cwd(), "node_modules", "puppeteer"));

const PORT = process.argv[2] || 9999;
const WIDTHS = (process.argv[3] ? process.argv[3].split(",") : ["1100", "1280", "1440", "1024", "900", "800", "640", "480"]).map(Number);
const PAGES = ["/", "/plugins/", "/flavors/", "/versions/", "/setup/", "/plugins/hook-dsh-normalize-dash/", "/plugins/hook-dsh-normalize-quotes/", "/plugins/hook-dsh-core/", "/workbench/", "/matrix/", "/models/", "/case-study/"];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXEC_PATH || undefined,
    args: ["--no-sandbox"],
  });
  try {
    for (const pagePath of PAGES) {
      for (const width of WIDTHS) {
        const page = await browser.newPage();
        await page.setViewport({ width, height: 900 });
        await page.goto(`http://localhost:${PORT}${pagePath}`, { waitUntil: "networkidle0", timeout: 30000 });
        const m = await page.evaluate(() => {
          const doc = document.documentElement;
          const body = document.body;
          const offenders = [];
          const vw = doc.clientWidth;
          for (const el of document.querySelectorAll("body *")) {
            const r = el.getBoundingClientRect();
            if (r.width > 0 && (r.right > vw + 1 || r.left < -1)) {
              const cls = (el.className && typeof el.className === "string") ? el.className.slice(0, 60) : el.tagName;
              offenders.push({ tag: el.tagName, cls, right: Math.round(r.right), left: Math.round(r.left), w: Math.round(r.width) });
            }
          }
          // unique offenders by class
          const seen = new Set();
          const uniq = offenders.filter((o) => {
            const k = o.tag + "." + o.cls;
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
          }).slice(0, 12);
          return {
            bodyScroll: body.scrollWidth,
            bodyClient: body.clientWidth,
            docScroll: doc.scrollWidth,
            docClient: doc.clientWidth,
            vw,
            offenders: uniq,
          };
        });
        const ov = m.bodyScroll - m.bodyClient;
        const flag = ov > 0 ? "OVERFLOW" : "ok";
        console.log(
          `${flag} ${pagePath} @${width}px body scroll=${m.bodyScroll} client=${m.bodyClient} delta=${ov}`
        );
        if (ov > 0) {
          for (const o of m.offenders) console.log(`     offender <${o.tag}> .${o.cls} right=${o.right} left=${o.left} w=${o.w}`);
        }
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error("MEASURE FAIL:", e.message);
  process.exit(1);
});