const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  mood: { type: String, required: true }
});

module.exports = mongoose.model('Mood', MoodSchema);
