import React , { useState } from 'react';
import './App.css';
import { Routes, Route,Link} from 'react-router-dom';
import { ReactComponent as MySVG } from "./up.svg";
import ScrollToTop from "react-scroll-to-top";
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
          <h5 className='text-center my-2'>Help us create the one-stop destination for exams excellence.</h5>
          <Link to="/contact-us"><h4 className=' text-center my-4'><i>Contribute</i></h4></Link>


      
            </div>
      
            <ScrollToTop smooth component={<MySVG />} />
          
          </>
        }
      />
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
