import puppeteer from "puppeteer";

export default defineEventHandler(async (event) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(
    "https://www.dexters.co.uk/property-lettings/1-bathroom-properties-available-to-rent-in-se23-under-3000"
  );

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  await new Promise((r) => setTimeout(r, 2000));

  const rawItems = await page.$$("li.result.item.to-let.infinite-item");

  const results = rawItems.length;

  const items = await Promise.all(
    rawItems.map(async (item) => {
      const address = await item.$eval(
        ".result-content h2 a",
        (el) => el.innerText
      );

      const price = await item.$eval(".price-qualifier", (el) => el.innerText);

      const beds = await item.$eval(
        ".list-info li:first-child",
        (el) => el.innerText
      );

      const url = await item.$eval(".result-content h2 a", (el) => el.href);

      const images = await item.$$eval(".result-image img", (nodes) =>
        nodes.map((img) => img.src)
      );

      return { address, price, beds, url, images };
    })
  );

  await browser.close();
  return items;
});
