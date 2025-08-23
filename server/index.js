const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'TrueLinks Dating App API' });
});

// User routes
app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

app.post('/api/users', (req, res) => {
  res.json({ message: 'Create new user' });
});

// AI matching routes
app.post('/api/match', (req, res) => {
  res.json({ message: 'AI matching endpoint' });
});

app.post('/api/learn-preferences', (req, res) => {
  res.json({ message: 'Learn user preferences' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});