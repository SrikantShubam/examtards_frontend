import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cards.css';
import { Link } from 'react-router-dom';
function calculateExamDuration(examDate) {
  const examDateTime = new Date(examDate);
  const now = new Date();

  const timeDiff = examDateTime - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


  return  days ;
}
function Card({ category }) {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Fetch exams belonging to the specified category from Django backend
    if (category) {
      axios.get(`https://thatisbig.azurewebsites.net/category-data/${category}/`)
        .then(response => {
          setExams(response.data);
        })
        .catch(error => {
          console.error('Error fetching exams:', error);
        });
    }
  }, [category]);
  const formatDate = (inputDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', options);
  };
  return (
    
  <div className="row " id="card-jum">
    {exams.map((exam, index) => (
      <div className="col-lg-4 col-sm-12" key={index}>
        <Link to={`/exam-detail/${encodeURIComponent(exam.name.replace(/\s/g, '-'))}`}>
          <div className="card">
          <div className="row">
            <div className="col-md-7">
            <div className="card-body">
            
            <h4 className="card-title">{exam.name}</h4>
            
           
            <p className="card-text">{formatDate(exam.exam_date)}</p>
           
          
        
          </div>

            </div>
            <div className="col-md-5">
            <div className="card-side">
              <div className="text-center align-items-center">
              <div className="small-card">{calculateExamDuration(exam.exam_date)}</div>
              <h5 >Days</h5>
              </div>
            
            </div>
            </div>
          </div>
       
        
       
        </div>   
        
        </Link>
      </div>
    ))}
  </div>

  );
}

export default Card;
