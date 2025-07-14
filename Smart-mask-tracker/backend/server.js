const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const DataPoint = require('./models/DataPoint');
const CO2Reading = require('./models/co2reading');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

// Route 1: VOC/PM2.5 + GPS (every 30–60s)
app.post('/api/datapoints', async (req, res) => {
  try {
    const { latitude, longitude, vocIndex, pm25 } = req.body;
    const point = await DataPoint.create({ latitude, longitude, vocIndex, pm25 });
    res.status(201).json(point);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route 2: CO₂ data only (every 5s)
app.post('/api/co2', async (req, res) => {
  try {
    const { co2 } = req.body;
    const reading = await CO2Reading.create({ co2 });
    res.status(201).json(reading);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// For testing: show recent CO₂ and VOC data
app.get('/api/test', async (req, res) => {
  const datapoints = await DataPoint.find().sort({ timestamp: -1 }).limit(5);
  const co2 = await CO2Reading.find().sort({ timestamp: -1 }).limit(5);
  res.json({ datapoints, co2 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
