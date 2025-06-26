const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    duration: String,
    link: String
});

module.exports = mongoose.model('Course', courseSchema);
