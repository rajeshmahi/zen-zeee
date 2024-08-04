import React, { useState } from 'react';
import axios from 'axios';

function MoodTracker() {
  const [mood, setMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/moods', { mood })
      .then(response => alert('Mood recorded!'))
      .catch(error => console.error('Error recording mood:', error));
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Mood:
          <input type="text" value={mood} onChange={(e) => setMood(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MoodTracker;
