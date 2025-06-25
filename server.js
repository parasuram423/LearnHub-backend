const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Replace this with your correct MongoDB URI
const MONGO_URI = 'mongodb+srv://parasurams423:parasuram6281@cluster0.vk2znf0.mongodb.net/learnhub?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Mongoose Schema
const courseSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Course = mongoose.model('Course', courseSchema);

// ✅ GET all courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// ✅ Default route
app.get('/', (req, res) => {
  res.send('✅ LearnHub Backend Working Successfully');
});

// ✅ Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
