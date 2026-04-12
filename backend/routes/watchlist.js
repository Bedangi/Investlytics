const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");

router.get("/", async (req, res) => {
  try {
    const { type, exchange, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    
    const data = await Stats.aggregate([
    {
      $match: {
        Asset_Type: type.toLowerCase()
      }
    },

    {
      $unwind: "$stats"
    },

    ...(exchange ? [{
      $match: {
        "stats.exchange": exchange
      }
    }] : []),

      {
        $project: {
          _id: 0,
          ticker: "$stats.ticker",
          starting_price: "$stats.income_stats.starting_price",
          ending_price: "$stats.income_stats.ending_price",
          highest_price: "$stats.income_stats.highest_price",
          lowest_price: "$stats.income_stats.lowest_price",
          total_return: "$stats.income_stats.total_return_%",
          volume: "$stats.income_stats.avg_daily_volume"
        }
      },

      {
        $sort: { total_return: -1 }
      },

      { $skip: parseInt(skip) },
      { $limit: parseInt(limit) }

    ]);

    const totalCount = await Stats.aggregate([
      { $match: { Asset_Type: type.toLowerCase() } },
      { $unwind: "$stats" },
      ...(exchange ? [{
        $match: {
          "stats.exchange": exchange
        }
      }] : []),
      { $count: "count" }
    ]);
    
    res.json({
      data,
      total: totalCount[0]?.count || 0,
      page: parseInt(page),
      totalPages: Math.ceil((totalCount[0]?.count || 0) / limit)
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;