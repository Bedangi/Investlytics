// const mongoose = require("mongoose");
// require("dotenv").config();

// const Historical = require("./models/Historical");
// const Stats = require("./models/Stats");

// async function createIndexes() {
//   await mongoose.connect(process.env.MONGO_URI);
//   console.log("DB Connected");

//   await Historical.collection.createIndex({
//     "stock_details.ticker": 1,
//      y2: -1 
//   });

//   console.log("Index created in Historical collection");

//   await Stats.collection.createIndex({
//     Asset_Type: 1,
//     "stats.ticker": 1
//   });

//   console.log("Index created in Stats collection");
//   process.exit();
// }

// createIndexes();