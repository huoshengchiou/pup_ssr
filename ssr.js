const puppeteer = require("puppeteer");
async function ssr(url) {
  console.info("SSR rendering");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  //等page完成loading
  try {
    await page.goto(url, { waitUntil: "networkidle0" });
  } catch (err) {
    console.err(err);
    throw new Error("time out");
  }
  const html = await page.content(); // serialized HTML of page DOM.
  await browser.close();
  return html;
}
module.exports = ssr;
