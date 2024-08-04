const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// Get all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new exercise
router.post('/', async (req, res) => {
  const exercise = new Exercise({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content
  });
  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
