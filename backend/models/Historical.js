const mongoose = require("mongoose");

const HistoricalSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model(
  "Historical",
  HistoricalSchema,
  "historical_data"
);