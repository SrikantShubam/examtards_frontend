import React , { useState } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import {Header,Banner,Card,Sidenav,Footer,CompareSyllabus,ExamDetail,Contact,Disclaimer} from './components';



function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Header />
   
    <Routes>
    <Route path="/compare-syllabus" element={<CompareSyllabus />} />

      <Route path="/exam-detail/:examName" element={<ExamDetail />} />
      <Route path="/contact-us" element={<Contact />} />
<Route path="/disclaimer" element={<Disclaimer />}/>
    
      <Route
        path="/"
        element={
          <>
             <div className="body">
            <Banner />
            <div id="menu" className='mb-5'>
          <h2 className=''>Get Latest Exam <span>Details</span></h2>  
              <div className="row mt-5">
                <div className="col-md-2 col-sm-6">
                <Sidenav handleCategoryClick={handleCategoryClick} />
                </div>
                <div className="col-md-10 col-sm-6">
                <Card category={selectedCategory} />
                </div>
              </div>
            </div>
           
            </div>
      
     
          
          </>
        }
      />
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
