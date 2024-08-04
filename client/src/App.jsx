import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseList from './components/ExerciseList';
import MoodTracker from './components/MoodTracker';
import ResourceList from './components/ResourceList';


function App() {
  return (
    <Router>
      <div>
        <h1>Mental Health and Well-being Support</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/mood-tracker">Mood Tracker</a></li>
            <li><a href="/exercises">Exercises</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/exercises" element={<ExerciseList />} />
          <Route path="/resources" element={<ResourceList />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to the Mental Health and Well-being Support App</h2>
      <p>Use the navigation links to explore different features.</p>
    </div>
  );
}

export default App;
