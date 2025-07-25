const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  duration: String
});

module.exports = mongoose.model('Course', courseSchema);
