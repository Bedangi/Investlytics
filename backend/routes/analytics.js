const express = require("express");
const router = express.Router();
const Historical = require("../models/Historical");

router.get("/", async (req, res) => {
  try {


    const basePipeline = [
      {
        $match: {
          "yearly_performance.1": { $exists: true }
        }
      },
      {
        $project: {
          ticker: "$stock_details.ticker",
          y1: { $arrayElemAt: ["$yearly_performance", 0] },
          y2: { $arrayElemAt: ["$yearly_performance", 1] }
        }
      },
      {
        $group: {
          _id: "$ticker",
          y1: { $first: "$y1" },
          y2: { $first: "$y2" }
        }
      },
      {
        $project: {
          _id: 0,
          ticker: "$_id",
          y1: 1,
          y2: 1
        }
      },
      {
        $addFields: {
          difference: { $subtract: ["$y2", "$y1"] }
        }
      }
    ];

    const paginated = await Historical.aggregate([
      ...basePipeline,
      {
        $sort: { difference: -1 }
      },
      {
        $limit: 50 
      }

    ],{allowDiskUse: true});

    const top = await Historical.aggregate([
      ...basePipeline,
      { $sort: { y2: -1 } }, 
      { $limit: 5 }          
    ], { allowDiskUse: true });

    res.json({
      paginated,
      top
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { ticker } = req.query;

    if (!ticker) {
      return res.status(400).json({ error: "Ticker required" });
    }

    const doc = await Historical.findOne(
      {
        "stock_details.ticker": {
          $regex: `^${ticker}`,
          $options: "i"
        }
      },
      {
        "stock_details.company_details": 1,
        "chart_detail.entry_exit_points": 1,
        "chart_detail.movement": 1,
        "chart_detail.volume": 1,
        "company_benefits": 1,
        "market_sentiment": 1,
        _id: 0
      }
    );

    if (!doc) {
      return res.json({});
    }

    res.json({
      company_details: doc.stock_details?.company_details || {},
      chart_details: doc.chart_detail || {},
      company_benefits: doc.company_benefits || {},
      market_sentiment: doc.market_sentiment || {}
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;