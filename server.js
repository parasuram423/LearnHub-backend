const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Optional: If using .env file

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection URI (uses encoded password)
const MONGO_URI = 'mongodb+srv://learnhub:Learnhub%40123@cluster0.vk2znf0.mongodb.net/learnhub?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// ✅ Course Schema & Model
const Course = require('./Course');

// ✅ API Route: Get all courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// ✅ Start Express Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
