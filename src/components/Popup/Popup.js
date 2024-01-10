

import React from 'react';
import { Link } from 'react-router-dom';
import './popup.css';



function Popup({ searchResults, closePopup }) {
  return (
 
      <div>
        <div className="popup-overlay" onClick={closePopup}></div>
        <div className="container">
          <div className="popup-header">
            <div className="d-flex justify-content-between">
              <div className='text'>Search <span>Results</span></div>
              <button className="btn btn-dark" onClick={closePopup}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          
        
              <div className="results-container">
                {searchResults.map((result, index) => (
                  <div className="row pop-row" key={index}>
                    <div className="col-md-4">{result.name}</div>
                    <div className="col-md-4">{result.exam_date}</div>
                    <div className="col-md-4">
                    <Link to={`/exam-detail/${encodeURIComponent(result.name.replace(/\s/g, '-'))}`}>

                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-2">
                Did not find what you were looking for?
              </div>
              <div className='t2'>
                <Link to="/contact-us">Click here.</Link>
              </div>
        
        
          
        </div>
      </div>
    
  );
}




export default Popup;
