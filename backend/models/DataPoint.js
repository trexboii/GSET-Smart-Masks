const mongoose = require("mongoose");

const DataPointSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  vocIndex: Number,
  pm25: Number,
  temperature:Number,
  humidity:Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("DataPoint", DataPointSchema);
