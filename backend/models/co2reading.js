const mongoose = require("mongoose");

const CO2Schema = new mongoose.Schema({
  co2: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("CO2Reading", CO2Schema);
