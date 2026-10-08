const path = require("path");
const puppeteer = require(path.join(process.cwd(), "node_modules", "puppeteer"));

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  for (const [pagePath, width] of [["/flavors/", 800], ["/plugins/", 800], ["/flavors/", 768], ["/plugins/", 640]]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 900 });
    await page.goto(`http://localhost:9999${pagePath}`, { waitUntil: "networkidle0" });
    const out = await page.evaluate(() => {
      const rect = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { left: Math.round(r.left), right: Math.round(r.right), w: Math.round(r.width), disp: getComputedStyle(el).display, pos: getComputedStyle(el).position, scrollW: el.scrollWidth, clientW: el.clientWidth };
      };
      return {
        vw: document.documentElement.clientWidth,
        bodyScroll: document.body.scrollWidth,
        header: rect(".site-header"),
        inner: rect(".site-header__inner"),
        brand: rect(".site-header__brand"),
        nav: rect(".site-header__nav"),
        toggle: rect(".nav-toggle"),
        theme: rect(".theme-toggle"),
      };
    });
    console.log(`\n${pagePath} @${width} vw=${out.vw} bodyScroll=${out.bodyScroll}`);
    for (const k of ["header", "inner", "brand", "nav", "toggle", "theme"]) {
      console.log(`  ${k}:`, JSON.stringify(out[k]));
    }
    await page.close();
  }
  await browser.close();
})().catch((e) => { console.error("FAIL:", e.message); process.exit(1); });