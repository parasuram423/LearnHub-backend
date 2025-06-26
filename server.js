const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://parasurams423:parasuram6281@cluster0.vk2znf0.mongodb.net/learnhub?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((error) => console.error("❌ MongoDB connection error:", error));

// Course schema and model
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});
const Course = mongoose.model("Course", courseSchema);

// Route to get all courses
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ LearnHub Backend Working Successfully");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
