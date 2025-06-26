const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Correct MongoDB connection string
mongoose.connect(
  "mongodb+srv://parasurams423:parasuram6281@cluster0.vk2znf0.mongodb.net/learnhub?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// ✅ Course schema
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const Course = mongoose.model("Course", courseSchema);

// ✅ /courses route
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

    
