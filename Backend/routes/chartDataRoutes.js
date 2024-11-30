const express = require('express');
const router = express.Router();
const ChartData = require('../models/ChartData');

// Route for static chart data
router.get('/static-chart-data', (req, res) => {
  console.log('Static chart data request received');
  res.json({
    title: 'Static Investment Trends',
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Static Data',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  });
});

// Route for dynamic chart data from MongoDB
router.get('/dynamic-chart-data', async (req, res) => {
  console.log('Dynamic chart data request received');
  try {
    const chartData = await ChartData.findOne();
    if (!chartData) {
      console.log('No dynamic chart data found');
      return res.status(404).json({ msg: 'No dynamic chart data found' });
    }
    console.log('Dynamic chart data fetched:', chartData);
    res.json(chartData);
  } catch (error) {
    console.error('Failed to retrieve dynamic chart data:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
