const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
