// Index page horizontal-overflow sweep: per-element scrollWidth vs clientWidth
// at the common widths, both themes. Usage: node Scripts/index-overflow-measure.cjs [port] [buildDir]
const path = require("path");
const http = require("http");
const fs = require("fs");
const puppeteer = require(path.join(process.cwd(), "node_modules", "puppeteer"));

const ROOT = path.join(process.argv[3] ? process.argv[3] : path.join(process.cwd(), "Target"));
const PORT = Number(process.argv[2] || 9991);
const WIDTHS = [375, 768, 803, 1024, 1280, 1440];
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff", ".json": "application/json", ".png": "image/png" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  fs.readFile(path.join(ROOT, p), (err, data) => {
    if (err) { res.writeHead(404); res.end("nf"); return; }
    res.writeHead(200, { "content-type": MIME[path.extname(p)] || "application/octet-stream" });
    res.end(data);
  });
});

(async () => {
  await new Promise((r) => server.listen(PORT, r));
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"], executablePath: process.env.PUPPETEER_EXEC_PATH || undefined });
  const rows = [];
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0", timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    for (const theme of ["light", "dark"]) {
      await page.evaluate((t) => document.documentElement.setAttribute("data-theme", t), theme);
      for (const width of WIDTHS) {
        await page.setViewport({ width, height: 900 });
        const found = await page.evaluate(() => {
          const doc = document.documentElement;
          const over = [];
          if (doc.scrollWidth > doc.clientWidth) {
            for (const el of document.querySelectorAll("body *")) {
              const r = el.getBoundingClientRect();
              const sw = el.scrollWidth, cw = el.clientWidth;
              // Right-edge overflow or intrinsic scrollWidth overflow
              if (r.right > doc.clientWidth + 0.5 || (sw > cw + 1 && getComputedStyle(el).overflowX !== "auto" && getComputedStyle(el).overflowX !== "hidden" && getComputedStyle(el).overflowX !== "scroll")) {
                over.push({ sel: el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).join(".") : ""), right: +r.right.toFixed(1), delta: +(r.right - doc.clientWidth).toFixed(1), scrollW: sw, clientW: cw, w: +r.width.toFixed(1) });
              }
            }
          }
          // Report the widest offenders
          over.sort((a, b) => Math.max(b.delta, b.scrollW - b.clientW) - Math.max(a.delta, a.scrollW - a.clientW));
          return { docScroll: doc.scrollWidth, docClient: doc.clientWidth, over: over.slice(0, 6) };
        });
        if (found.docScroll > found.docClient) rows.push({ theme, width, ...found });
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
  for (const r of rows) {
    console.log(`\n=== ${r.theme} @ ${r.width}px: docScroll=${r.docScroll} docClient=${r.docClient} delta=${r.docScroll - r.docClient}`);
    for (const o of r.over) console.log("   ", o.sel, "right=" + o.right, "delta=" + o.delta, "scroll=" + o.scrollW, "client=" + o.clientW, "w=" + o.w);
  }
  if (!rows.length) console.log("NO OVERFLOW at any width/theme");
})();
