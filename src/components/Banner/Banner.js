import React, { useState } from 'react';
import axios from 'axios';
import Popup from '../Popup/Popup';
import './banner.css';

function Banner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://thatisbig.azurewebsites.net/search/?search_query=${searchQuery}`);
      setSearchResults(response.data);
      setShowPopup(true); 
      document.body.classList.add('popup-open');
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }
  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove('popup-open');
  }
  return (
    <div className='banner'>
      <div className="row px-4">
        <div className="col-md-7 col-sm-12">
          <div className="content">
            <h1>Mastering Time, Unveiling Opportunities: Your Exam  Compass</h1>
          </div>
        </div>
        <div className="col-md-5  col-sm-12 ">
          <form action="/search" method="GET" className="search-form" onSubmit={handleSearch}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search for your exam"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      
      {showPopup && (
        <Popup searchResults={searchResults} closePopup={closePopup} />
      )}
    </div>
  );
}

export default Banner;
