// File-mention / log-chip baseline alignment measurement (caret rects + canvas font metrics).
// baseline = caretRect.bottom - fontBoundingBoxDescent, computed for both the reference
// prose text node and the unit's filename text node, each with its own computed font.
// Usage: node Scripts/baseline-measure.cjs [port]
const path = require("path");
const http = require("http");
const fs = require("fs");
const puppeteer = require(path.join(process.cwd(), "node_modules", "puppeteer"));

const ROOT = path.join(process.cwd(), "Target");
const PORT = Number(process.argv[2] || 8899);
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".woff": "font/woff", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p.endsWith("/")) p += "index.html";
  fs.readFile(path.join(ROOT, p), (err, data) => {
    if (err) { res.writeHead(404); res.end("nf"); return; }
    res.writeHead(200, { "content-type": MIME[path.extname(p)] || "application/octet-stream" });
    res.end(data);
  });
});

const PAGES = ["/", "/plugins/", "/setup/", "/case-study/", "/flavors/", "/plugins/hook-dsh-pinner-package/"];

(async () => {
  await new Promise(r => server.listen(PORT, r));
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"], executablePath: process.env.PUPPETEER_EXEC_PATH || undefined });
  const rows = [];
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1100, height: 900 });
    for (const url of PAGES) {
      await page.goto(`http://localhost:${PORT}${url}`, { waitUntil: "networkidle0", timeout: 30000 });
      for (const theme of ["light", "dark"]) {
        await page.evaluate((t) => document.documentElement.setAttribute("data-theme", t), theme);
        await page.evaluate(() => document.fonts.ready);
        const results = await page.evaluate(() => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const metrics = (font) => {
            ctx.font = font;
            const m = ctx.measureText("xXgjpqy");
            return { ascent: m.fontBoundingBoxAscent, descent: m.fontBoundingBoxDescent };
          };
          const computedFont = (el) => {
            const s = getComputedStyle(el);
            return `${s.fontStyle} ${s.fontVariant} ${s.fontWeight} ${s.fontSize}/${s.lineHeight} ${s.fontFamily}`;
          };
          const baselineOfRect = (rect, font) => {
            const { ascent, descent } = metrics(font);
            return { baseline: rect.bottom - descent, rectH: rect.height, ascent, descent };
          };
          const rectsOf = (node) => {
            const range = document.createRange();
            range.selectNodeContents(node);
            return [...range.getClientRects()].filter(r => r.height > 0);
          };
          const out = [];
          for (const el of [...document.querySelectorAll(".file-mention, .log-chip")].slice(0, 60)) {
            const host = el.closest("p, li, h1, h2, h3, h4, td, th, dt, dd") || el.parentElement;
            if (!host) continue;
            const refNode = [...host.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
            if (!refNode) continue;
            const fnNode = [...el.childNodes].reverse().find(n => n.nodeType === 3 && n.textContent.trim());
            if (!fnNode) continue;
            const fnRects = rectsOf(fnNode);
            if (!fnRects.length) continue;
            const fnRect = fnRects[0];
            // Insert a zero-width probe right after the unit: it sits on the unit's line
            // with the host's font — a true same-line reference baseline.
            const probe = document.createElement("span");
            probe.textContent = "x";
            probe.style.cssText = "display:inline;padding:0;margin:0;border:0;font:inherit;";
            el.after(probe);
            const probeRect = rectsOf(probe).find(r => r.height > 0);
            const probeFont = computedFont(probe);
            probe.remove();
            if (!probeRect) continue;
            const ref = baselineOfRect(probeRect, probeFont);
            const fname = baselineOfRect(fnRect, computedFont(el));
            const r = el.getBoundingClientRect();
            if (!ref || !fname) continue;
            out.push({
              cls: el.className.replace("file-mention", "fm").replace("log-chip", "lc"),
              text: el.textContent.trim().slice(0, 34),
              drift: +(ref.baseline - fname.baseline).toFixed(2),
              unitH: +r.height.toFixed(1),
              ctx: host.className || host.tagName,
            });
          }
          return out;
        });
        for (const m of results) rows.push({ url, theme, ...m, pass: Math.abs(m.drift) < 1 });
      }
    }
    await page.close();
  } finally {
    await browser.close();
    server.close();
  }
  for (const o of rows) console.log(`${o.url} [${o.theme}] ${o.cls} "${o.text}" drift=${o.drift} unitH=${o.unitH} ${o.pass ? "PASS" : "FAIL"}`);
  const fails = rows.filter(o => !o.pass);
  console.log(`\nTotal: ${rows.length}  FAIL: ${fails.length}  maxDrift: ${Math.max(...rows.map(r => Math.abs(r.drift))).toFixed(2)}px`);
})();
