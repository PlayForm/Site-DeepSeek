// Detailed probe: DOM path + computed style of every element exceeding the viewport.
const path = require("path");
const puppeteer = require(path.join(process.cwd(), "node_modules", "puppeteer"));

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const targets = [
    ["/flavors/", 800],
    ["/plugins/", 640],
    ["/flavors/", 640],
  ];
  try {
    for (const [pagePath, width] of targets) {
      const page = await browser.newPage();
      await page.setViewport({ width, height: 900 });
      await page.goto(`http://localhost:9999${pagePath}`, { waitUntil: "networkidle0" });
      const out = await page.evaluate(() => {
        const vw = document.documentElement.clientWidth;
        const rows = [];
        const seen = new Set();
        for (const el of document.querySelectorAll("body *")) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.right > vw + 1) {
            const cls = (el.className && typeof el.className === "string") ? el.className : "";
            const key = cls || el.tagName;
            if (seen.has(key)) continue;
            seen.add(key);
            const cs = getComputedStyle(el);
            let chain = [];
            let n = el;
            while (n && n !== document.body && chain.length < 5) {
              chain.unshift(n.tagName + (n.className && typeof n.className === "string" ? "." + String(n.className).split(" ")[0] : ""));
              n = n.parentElement;
            }
            rows.push({
              cls: key.slice(0, 70),
              right: Math.round(r.right),
              left: Math.round(r.left),
              w: Math.round(r.width),
              minW: cs.minWidth,
              gridCols: cs.gridTemplateColumns,
              display: cs.display,
              overflow: cs.overflow,
              whiteSpace: cs.whiteSpace,
              chain: chain.join(" < "),
            });
          }
        }
        const header = document.querySelector(".site-header");
        const hdr = header ? { w: Math.round(header.getBoundingClientRect().width), left: Math.round(header.getBoundingClientRect().left), right: Math.round(header.getBoundingClientRect().right), pos: getComputedStyle(header).position, disp: getComputedStyle(header).display, cols: getComputedStyle(header).gridTemplateColumns } : null;
        return { vw, bodyScroll: document.body.scrollWidth, rows, header: hdr };
      });
      console.log(`\n=== ${pagePath} @${width}px bodyScroll=${out.bodyScroll} vw=${out.vw}`);
      console.log("  header:", JSON.stringify(out.header));
      for (const r of out.rows) console.log(`  ${r.right}>${r.vw} w=${r.w} minW=${r.minW} disp=${r.display} overflow=${r.overflow} ws=${r.whiteSpace} cols=${r.gridCols} | ${r.cls} | ${r.chain}`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
})().catch((e) => { console.error("FAIL:", e.message); process.exit(1); });