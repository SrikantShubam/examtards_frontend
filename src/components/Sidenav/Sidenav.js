import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sidenav.css';

function Sidenav({ handleCategoryClick }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from Django backend
    axios.get('https://thatisbig.azurewebsites.net/get-categories/')
      .then(response => {
        // Sort the categories to have 'Popular' at the top
        const sortedCategories = response.data.categories.sort((a, b) => {
          if (a === 'popular') return -1;
          if (b === 'Popular') return 1;
          return 0;
        });

        setCategories(sortedCategories);
      
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      <ul className='sidebar'>
        {categories.map(category => (
          <li key={category}>
            <div className='wrapper-buttons ' onClick={() => handleCategoryClick(category)} target="_blank" rel="noopener noreferrer" tabIndex="0">
              <button className="btn">
              {category.split(' ').length === 2 ? (
                <>
                  {category.split(' ')[0]}
                  <br />
                  {category.split(' ')[1]}
                </>
              ) : (
                category
              )}
              </button>
                
             
              <i className="fas fa-chevron-right"></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidenav;
