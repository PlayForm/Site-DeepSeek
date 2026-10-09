const puppeteer = require("puppeteer");
(async () => {
  const b = await puppeteer.launch({ headless: true, executablePath: "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser", args: ["--no-sandbox"] });
  const pg = await b.newPage();
  await pg.setViewport({ width: 1200, height: 900 });
  const out = {};
  for (const theme of ["light", "dark"]) {
    await pg.goto("http://127.0.0.1:8931/index.html", { waitUntil: "networkidle0" });
    if (theme === "dark") await pg.evaluate(() => document.documentElement.setAttribute("data-theme", "dark"));
    const read = () => pg.$eval("[data-theme-mode]", e => e.textContent);
    const t = { initial: await read() };
    await pg.click("[data-theme-toggle]");
    t.afterClick = await read();
    await pg.reload({ waitUntil: "networkidle0" });
    t.afterReload = await read();
    await pg.click("[data-theme-toggle]");
    t.afterSecondClick = await read();
    out[theme] = t;
  }
  console.log(JSON.stringify(out));
  await b.close();
})().catch(e => { console.error("FAIL", e); process.exit(1); });
