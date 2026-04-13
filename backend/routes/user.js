const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Stats = require("../models/Stats");

router.post("/addHolding", async (req, res) => {
  try {
    const { email, ticker } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { $addToSet: { holdings: ticker } }, 
      { returnDocument: "after"  }
    );

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/removeHolding", async (req, res) => {
  try {
    const { email, ticker } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { $pull: { holdings: ticker } },
      { returnDocument: "after" }
    );

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/holdings", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });

    res.json(user.holdings || []);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/holdingsData", async (req, res) => {
  try {
    const {
      tickers,
      type,
      page = 1,
      limit = 10
    } = req.body;

    const skip = (page - 1) * limit;

    const basePipeline = [
      ...(type ? [{
        $match: {
          Asset_Type: { $regex: `^${type}$`, $options: "i" }
        }
      }] : []),

      { $unwind: "$stats" },

      {
        $match: {
          "stats.ticker": { $in: tickers }
        }
      },

    ];

    const data = await Stats.aggregate([
      ...basePipeline,

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

      { $sort: { total_return: -1 } },
      { $skip: skip },
      { $limit: limit }

    ]);

    const count = await Stats.aggregate([
      ...basePipeline,
      { $count: "count" }
    ]);

    const total = count[0]?.count || 0;

    res.json({
      data,
      total,
      totalPages: Math.ceil(total / limit)
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;