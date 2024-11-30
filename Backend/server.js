require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');
const chartDataRoutes = require('./routes/chartDataRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for debugging
console.log('Connecting to MongoDB using URI:', process.env.DB_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Debug: Log every incoming request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Request Body:', req.body);
  next();
});

// Setup API routes
app.use('/api', apiRoutes);
app.use('/api', chartDataRoutes);

// Serve static files from the React app build folder
app.use(express.static(path.join(__dirname, 'build')));

// React Frontend: Catchall handler for React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Debug: Enable mongoose debugging
mongoose.set('debug', true);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
    // List all collections for debugging
    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.error('Error listing collections:', err);
      } else {
        console.log('Existing collections:', collections.map((c) => c.name));
      }
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
