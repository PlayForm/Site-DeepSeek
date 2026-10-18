// Theme-toggle header-row clip measurement (the 768-803px band).
// Reports the toggle's bounding box vs the viewport width at 768/780/800/803px,
// both themes, on the served Target build. Usage: node Scripts/toggle-clip-measure.cjs [port]
const path = require("path");
const http = require("http");
const fs = require("fs");
const puppeteer = require(path.join(process.cwd(), "node_modules", "puppeteer"));

const ROOT = path.join(process.cwd(), "Target");
const PORT = Number(process.argv[2] || 9999);
const WIDTHS = [768, 780, 800, 803];
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
    await page.setViewport({ width: 768, height: 900 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0", timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    for (const theme of ["light", "dark"]) {
      await page.evaluate((t) => document.documentElement.setAttribute("data-theme", t), theme);
      for (const width of WIDTHS) {
        await page.setViewport({ width, height: 900 });
        const m = await page.evaluate(() => {
          const t = document.querySelector(".theme-toggle");
          if (!t) return null;
          const r = t.getBoundingClientRect();
          return { left: +r.left.toFixed(1), right: +r.right.toFixed(1), viewport: document.documentElement.clientWidth };
        });
        const clipped = !m || m.right > m.viewport + 0.5 || m.left < -0.5;
        rows.push({ theme, width, ...m, clipped, clickable: !clipped && m.right <= m.viewport });
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.table(rows);
  console.log(JSON.stringify(rows));
})();
