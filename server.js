const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

mongoose
  .connect("mongodb+srv://parasurams423:parasuram6281@cluster0.vk2znf0.mongodb.net/learnhub?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
});
const Course = mongoose.model("Course", courseSchema);

const skillSchema = new mongoose.Schema({
  name: String,
  level: String,
});
const Skill = mongoose.model("Skill", skillSchema);

app.get("/", (req, res) => {
  res.send("✅ LearnHub Backend Working Successfully");
});

app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});