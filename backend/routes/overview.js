const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");
const User = require("../models/User");

router.get("/top-holdings", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });

    const data = await Stats.aggregate([
      {
        $match: {
          "stats.ticker": { $in: user.holdings }
        }
      },
      { $unwind: "$stats" },
      {
        $match: {
          "stats.ticker": { $in: user.holdings }
        }
      },
      {
        $project: {
          ticker: "$stats.ticker",
          return: "$stats.income_stats.total_return_%"
        }
      },
      { $sort: { return: -1 } },
      { $limit: 6 }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/distribution", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });

    const data = await Stats.aggregate([
      {
        $match: {
          "stats.ticker": { $in: user.holdings }
        }
      },
      { $unwind: "$stats" },
      {
        $match: {
          "stats.ticker": { $in: user.holdings }
        }
      },
      {
        $group: {
          _id: "$Asset_Type",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/holdings-details", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });

    const data = await Stats.aggregate([
      {
        $match: {
          "stats.ticker": { $in: user.holdings }
        }
      },
      { $unwind: "$stats" },
      {
        $match: {
          "stats.ticker": { $in: user.holdings }
        }
      },
      {
        $project: {
          ticker: "$stats.ticker",
          income: "$stats.income_stats"
        }
      }
    ]);

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/gainers-losers", async (req, res) => {
  try {

    const base = [
      { $unwind: "$stats" },
      {
        $project: {
          ticker: "$stats.ticker",
          return: "$stats.income_stats.total_return_%"
        }
      }
    ];

    const gainers = await Stats.aggregate([
      ...base,
      { $sort: { return: -1 } },
      { $limit: 10 }
    ]);

    const losers = await Stats.aggregate([
      ...base,
      { $sort: { return: 1 } },
      { $limit: 10 }
    ]);

    res.json({ gainers, losers });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;