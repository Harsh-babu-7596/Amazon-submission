const express = require('express');
const router = express.Router();
const { fetchProductDetails } = require('../services/scrapeService');

router.get('/:asin', async (req, res) => {
  try {
    const details = await fetchProductDetails(req.params.asin);
    res.json(details);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
