const express = require("express");
const Optimization = require("../models/Optimization");
const router = express.Router();

// GET latest 10 optimization records globally
router.get("/", async (req, res) => {
  try {
    const records = await Optimization.findAll({
      order: [["createdAt", "DESC"]],
      limit: 10
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

module.exports = router;
