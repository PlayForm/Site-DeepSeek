// Engine-pill icon-vs-text optical alignment: icon bbox ink center vs text ink center.
const path = require("path");
const puppeteer = require(path.join(process.cwd(), "node_modules", "puppeteer"));
const PORT = process.argv[2] || 9999;
const PAGES = ["/workbench/", "/matrix/", "/models/"];
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    for (const pagePath of PAGES) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 900 });
      await page.goto(`http://localhost:${PORT}${pagePath}`, { waitUntil: "networkidle0", timeout: 30000 });
      for (const theme of ["light", "dark"]) {
        await page.evaluate((t) => { document.documentElement.dataset.theme = t; }, theme);
        const rows = await page.evaluate(() => {
          const out = [];
          for (const pill of document.querySelectorAll(".engine-pill")) {
            const icon = pill.querySelector(".brand-icon");
            if (!icon) continue;
            // icon ink bbox: union of drawn geometry (rect of svg is the box; use path getBBox in svg coords mapped)
            const svg = icon.tagName === "svg" ? icon : icon.querySelector("svg");
            let ink;
            if (svg) {
              const b = svg.getBBox();
              const ctm = svg.getScreenCTM();
              ink = { l: b.x * ctm.a + ctm.e, t: b.y * ctm.d + ctm.f, w: b.width * ctm.a, h: b.height * ctm.d };
            } else { const r = icon.getBoundingClientRect(); ink = { l: r.left, t: r.top, w: r.width, h: r.height }; }
            // text ink center: union of client rects of text nodes inside pill (exclude icon element)
            const range = document.createRange();
            let tl = Infinity, tt = Infinity, tr = -Infinity, tb = -Infinity;
            const walk = (node) => {
              for (const child of node.childNodes) {
                if (child.nodeType === 3 && child.textContent.trim()) {
                  range.selectNodeContents(child);
                  for (const r of range.getClientRects()) { tl = Math.min(tl, r.left); tt = Math.min(tt, r.top); tr = Math.max(tr, r.right); tb = Math.max(tb, r.bottom); }
                } else if (child.nodeType === 1 && !child.classList.contains("brand-icon")) walk(child);
              }
            };
            walk(pill);
            const ic = { c: ink.t + ink.h / 2, i: (ink.t + ink.h) - (ink.t) }; // center y
            const tcy = (tt + tb) / 2;
            out.push({ label: pill.textContent.trim().slice(0, 24), off: +(ic.c - tcy).toFixed(2), ih: +ink.h.toFixed(1) });
          }
          return out;
        });
        const seen = new Set();
        for (const r of rows) {
          const k = r.label + r.ih;
          if (seen.has(k)) continue; seen.add(k);
          console.log(`${pagePath} [${theme}] "${r.label}" icon-h=${r.ih} offset(iconCenter - textCenter)=${r.off}px`);
        }
      }
      await page.close();
    }
  } finally { await browser.close(); }
})();
