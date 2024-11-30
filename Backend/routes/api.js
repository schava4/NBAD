const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  console.log('Login request received:', req.body);
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username, password });
    if (!user) {
      console.log('Invalid credentials');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      console.log('Login successful, token generated:', token);
      res.json({ token });
    });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).send('Server error');
  }
});

// Signup Route
router.post('/signup', async (req, res) => {
  console.log('Signup request received:', req.body);
  const { username, password, email } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      console.log('Username already exists');
      return res.status(400).json({ msg: 'Username already exists' });
    }

    user = new User({ username, password, email });
    await user.save();

    console.log('User registered successfully:', user);
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).send('Server error');
  }
});

// Protected Data Endpoint
router.get('/data', auth, (req, res) => {
  console.log('Protected data request from user:', req.user);
  res.json({ data: 'Secure data response' });
});

module.exports = router;
