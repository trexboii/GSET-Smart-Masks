//require functions to import libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
//creating the datapoint routes
const DataPoint = require('./models/DataPoint');
const CO2Reading = require('./models/co2reading');
//creating an express app (used for data upload)
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

// Route 1: VOC/PM2.5 + GPS (every 60s). aysnc part lets the 
// function wait to create the datapoint before sending data
app.post('/api/datapoints', async (req, res) => {
  try {
    //get all of the individual variables from the recieved data
    const { latitude, longitude, vocIndex, pm25, temperature, humidity } = req.body;
    //wait to create the datapoint (./models/DataPoint.js) for use in heatmap
    const point = await DataPoint.create({ latitude, longitude, vocIndex, pm25, temperature, humidity });
    //if the result is a good status send the data to the client
    res.status(201).json(point);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route 2: CO₂ data only (every 3s)
app.post('/api/co2', async (req, res) => {
  try {
    const { co2 } = req.body;
    const reading = await CO2Reading.create({ co2 });
    res.status(201).json(reading);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/datapoints', async (req,res) =>
{
  try {
    //get the datapoints and sort them in ascending time order
    //just the first 100 points
    //wait until the results are ready
    const points = await DataPoint.find().sort({timestamp:1}).limit(100);
    res.json(points);
  } catch (err) {
    res.status(500).json ({ error:err.message });
  }
})
// For testing: show recent CO₂ and VOC data
app.get('/api/test', async (req, res) => {
  const datapoints = await DataPoint.find().sort({ timestamp: -1 }).limit(5);
  const co2 = await CO2Reading.find().sort({ timestamp: -1 }).limit(5);
  res.json({ datapoints, co2 });
});

app.get ('/api/co2/latest', async (req,res) => {
  try {
  const latest = await CO2Reading.findOne().sort({ timestamp: -1});
  res.json(latest);}
  catch (err) {
    res.status(500).json({error: err.message})
  }

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
