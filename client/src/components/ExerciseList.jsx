import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/exercises')
      .then(response => setExercises(response.data))
      .catch(error => console.error('Error fetching exercises:', error));
  }, []);

  return (
    <div>
      <h2>Exercises</h2>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise._id}>
            <h3>{exercise.title}</h3>
            <p>{exercise.description}</p>
            <p>{exercise.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
