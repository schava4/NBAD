const mongoose = require('mongoose');

const ChartDataSchema = new mongoose.Schema({
  title: String,
  labels: [String],
  datasets: [
    {
      label: String,
      data: [Number],
      borderColor: String,
      backgroundColor: String,
    },
  ],
});

module.exports = mongoose.model('ChartData', ChartDataSchema);
