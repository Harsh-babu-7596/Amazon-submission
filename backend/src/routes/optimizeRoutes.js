const express = require('express');
const router = express.Router();
const { fetchProductDetails } = require('../services/scrapeService');
const { optimizeListing } = require('../services/aiService');
const Optimization = require('../models/Optimization');

router.post('/', async (req, res) => {
  const { asin } = req.body;

  if (!asin) {
    return res.status(400).json({ error: "ASIN is required" });
  }

  try {
    // Scrape Amazon
    const original = await fetchProductDetails(asin);

    // AI Optimize
    const optimized = await optimizeListing({
      asin,
      title: original.title,
      bullets: original.bullets,
      description: original.description,
    });

    // Save to DB
    const record = await Optimization.create({
      asin,
      originalTitle: original.title,
      originalBullets: JSON.stringify(original.bullets),
      originalDescription: original.description,
      optimizedTitle: optimized.optimizedTitle,
      optimizedBullets: JSON.stringify(optimized.optimizedBullets),
      optimizedDescription: optimized.optimizedDescription,
      optimizedKeywords: JSON.stringify(optimized.keywords),
    });

    res.json({
      id: record.id,
      original,
      optimized,
      createdAt: record.createdAt
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Optimization failed" });
  }
});

module.exports = router;
