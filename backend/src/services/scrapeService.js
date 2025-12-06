const axios = require('axios');
const cheerio = require('cheerio');

async function fetchProductDetails(asin) {
  const url = `https://www.amazon.in/dp/${asin}`;

  try {
    const response = await axios.get(url, {
      headers: {
        // Pretend to be a real Chrome browser in India
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-IN,en;q=0.9",
        "Upgrade-Insecure-Requests": "1",
      },
    });

    const $ = cheerio.load(response.data);

    const title = $("#productTitle").text().trim();
    const bullets = $("#feature-bullets ul li")
      .map((_, el) => $(el).text().trim())
      .get()
      .filter(t => t.length > 0);

    const description =
      $("#productDescription").text().trim() ||
      $("#aplus").text().trim() ||
      "";

    if (!title) {
      throw new Error("Product title not found (Amazon blocked or invalid ASIN)");
    }

    return { title, bullets, description };

  } catch (err) {
    console.error("Scrape error:", err.message);
    throw new Error("Failed to fetch product details from Amazon");
  }
}

module.exports = { fetchProductDetails };
