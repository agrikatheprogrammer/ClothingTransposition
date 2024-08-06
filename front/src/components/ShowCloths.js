// src/ShowCloths.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../stylings/ShowCloths.css';

const ShowCloths = () => {
  const [cloths, setCloths] = useState([]);

  useEffect(() => {
    const fetchCloths = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pictures');
        setCloths(response.data);
      } catch (error) {
        console.error('Error fetching cloths:', error);
      }
    };

    fetchCloths();
  }, []);

  return (
    <div className="cloth-container">
      {cloths.map((cloth) => (
        <div className="cloth-card" key={cloth.id}>
          <img src={`data:image/jpeg;base64,${cloth.image}`} alt={cloth.name} />
          <div className="cloth-info">
            <h3>{cloth.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCloths;
