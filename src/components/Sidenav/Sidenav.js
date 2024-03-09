import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sidenav.css';

function Sidenav({ handleCategoryClick }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    axios
      .get('https://thatisbig.azurewebsites.net/get-categories/')
      .then((response) => {
        const sortedCategories = response.data.categories.sort((a, b) => {
          if (a === 'popular') return -1;
          if (b === 'Popular') return 1;
          return 0;
    
        });
        setCategories(sortedCategories);
        setLoading(false);
        console.log(response.data.categories);
        if (activeCategory === '') {
          setActiveCategory(sortedCategories[0]);
          handleCategoryClick(sortedCategories[0]);
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, [handleCategoryClick]);

  const handleClick = (category) => {
    setActiveCategory(category);
    handleCategoryClick(category);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="sidebar">
        {categories.map((category) => (
          <li key={category}>
            <div
              className={`wrapper-buttons ${category === activeCategory ? 'active-side' : ''}`}
              onClick={() => handleClick(category)}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="0"
            >
              <button className="btn">{category}</button>
              <i className="fas fa-chevron-right"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidenav;




