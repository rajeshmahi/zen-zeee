const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define Routes
app.get('/',(req,res)=>{
  res.send("hello there")
})
app.use('/api/moods', require('./routes/moods'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/exercises', require('./routes/exercises'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
