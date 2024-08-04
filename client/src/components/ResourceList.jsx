import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ResourceList() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/resources')
      .then(response => setResources(response.data))
      .catch(error => console.error('Error fetching resources:', error));
  }, []);

  return (
    <div>
      <h2>Counseling Resources</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource._id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit Resource</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceList;
