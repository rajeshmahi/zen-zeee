const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// Get all moods
router.get('/', async (req, res) => {
  try {
    const moods = await Mood.find();
    res.json(moods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new mood
router.post('/', async (req, res) => {
  const mood = new Mood({
    mood: req.body.mood
  });
  try {
    const newMood = await mood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
