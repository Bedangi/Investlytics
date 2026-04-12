const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model("Stats", StatSchema, "company_statistics");