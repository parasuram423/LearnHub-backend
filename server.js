const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Optional if using .env

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB URI - Direct or via environment variable
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://learnhub:Learnhub%40123@cluster0.vk2znf0.mongodb.net/learnhub?retryWrites=true&w=majority&appName=Cluster0';

// ✅ Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err.message);
  process.exit(1);
});

// ✅ Mongoose Course model
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  duration: String
});
const Course = mongoose.model('Course', courseSchema);

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('🚀 LearnHub Backend Live');
});

// ✅ API Route: Get all courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
