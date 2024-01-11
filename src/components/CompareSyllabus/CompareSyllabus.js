import React, { useRef } from 'react';
import { Fragment, useState, useEffect } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import ReactApexChart from 'react-apexcharts';


import {  XIcon, WhatsappIcon,WhatsappShareButton, TwitterShareButton } from 'react-share';
import { Helmet } from 'react-helmet';
import mainlogo from '../../assets/images/favicon.ico';
import './CompareSyllabus.css';

function CompareSyllabus() {
  const [selectedExamOne, setSelectedExamOne] = useState('');
  const [selectedExamTwo, setSelectedExamTwo] = useState('');
  

  const [queryOne, setQueryOne] = useState('');
  const [queryTwo, setQueryTwo] = useState('');
  const [examNames, setExamNames] = useState([]);
  const [comparisonResult, setComparisonResult] = useState(null); // Track comparison result
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {

    fetch('https://thatisbig.azurewebsites.net/all-exams/')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.exam_names) {
          setExamNames(data.exam_names);
          setSelectedExamOne(data.exam_names[0]); 
          
          setSelectedExamTwo(data.exam_names[0]); 

        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle errors if needed
      });
  }, []); // Run this effect only once, similar to componentDidMount

  const handleSelectExamOne = (value) => {
    // Check if the value is different from the current selectedExamTwo before updating the state
    if (value !== selectedExamTwo) {
      setSelectedExamOne(value);
      setQueryOne(''); // Clear query after selecting an item
    }
  };

  const handleSelectExamTwo = (value) => {
    // Check if the value is different from the current selectedExamTwo before updating the state
    if (value !== selectedExamTwo) {
      setSelectedExamTwo(value);
      setQueryTwo(''); // Clear query after selecting an item
    }
  };
  const handleComparison = () => {
    // Make an API call to pass selected exams to compare_syllabus endpoint
    fetchComparison(selectedExamOne, selectedExamTwo);
  };
 
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const chartRef = useRef(null);


  const fetchComparison = (examOne, examTwo) => {
 
    fetch(`https://thatisbig.azurewebsites.net/compare_syllabus/?selected_exam_names[]=${examOne}&selected_exam_names[]=${examTwo}`)
      .then(response => {
        if (response.ok) {
         
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
      
        if (data.error) {
      
          console.warn('Server-side error:', data.error);
          alert(data.error);
          
      
        
        } else {
         console.log(data);
          setComparisonResult(data); 

        
        }
      })
      .catch(error => {
        
        if (error.response && error.response.text) {
    
          error.response.text().then(errorMessage => {
            try {
              const errorObject = JSON.parse(errorMessage);
              if (errorObject.error) {
               
                return;
              }
            } catch (e) {
              
              console.error('Error parsing server response:', e);
            }
          });
        }
        
        // Log and handle other types of errors
        console.error('There was a problem with the fetch operation:', error);
        console.warn('There was an unexpected error. Please try again later.');
      });
  };
  const renderTopics = () => {
    if (!comparisonResult || !comparisonResult.common_topics) {
      return <div>No topics available</div>;
    }

    const topics = comparisonResult.common_topics;

    let topicList = [];

    // Extract all topics from each subject into a single array
    Object.values(topics).forEach(subjectTopics => {
      topicList = [...topicList, ...subjectTopics];
    });

    // Apply slicing based on the showMore state
    const slicedTopics = showMore ? topicList : topicList.slice(0, 3);

    return slicedTopics.map((topic, index) => (
      <div key={index}>
        {topic}
      </div>
    ));
  };

  


  const handleToggle = () => {
    setShowMore(!showMore);
  };
const filteredExamsOne =
    queryOne === ''
      ? examNames
      : examNames.filter((exam) =>
          exam.toLowerCase().includes(queryOne.toLowerCase())
        );

  const filteredExamsTwo =
    queryTwo === ''
      ? examNames
      : examNames.filter((exam) =>
          exam.toLowerCase().includes(queryTwo.toLowerCase())
        );

        const ShareURL="https://examtards.com";

  return (
    <>
      <div className="body">
      <Helmet>
      <title>Exam Tards | Compare Syllabus</title>
      <meta
        name="description"
        content="Compare Syllabus of different exams and dive into your aspirant journey." 
      />
      <meta name="keywords" content="Compare exams,Compare syllabus,Examtards Compare Exams"></meta>
      <meta property="og:title" content="Exam Tards | Compare Syllabus"></meta>
    <meta property="og:description"         content="Compare Syllabus of different exams and dive into your aspirant journey." 
    ></meta>
  <meta property="og:image" content={mainlogo}></meta>
    </Helmet>
        <div className='banner'>
          <div className="row px-4">
            <div className="col-md-7 col-sm-12">
              <div className="content c-2 mt-5">
                <h1 className='mt-5'>Compare Syllabus</h1>
              </div>
            </div>
          </div>
        </div>
        <section id="inputs">
        <div className="row mt-5">
          <div className="col-md-6 col-sm-12">
          <label className='text-align-left'>Choose your exam</label>
          <div className="text-center align-items-center ">
            <Combobox value={selectedExamOne} onChange={handleSelectExamOne}>
              <Combobox.Input
                onChange={(event) => setQueryOne(event.target.value)}
                className="form-control" 
              />
              <Transition
                show={queryOne.length > 0 && filteredExamsOne.length > 0}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Combobox.Options className="list-group mt-2 rounded-md  shadow-lg">
                  {filteredExamsOne.map((examName) => (
                    <Combobox.Option key={examName} value={examName}>
                      <button className="list-group-item list-group-item-action">
                        {examName}
                        
                      

                      </button>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Transition>
            </Combobox>
          </div>
          </div>
          <div className="col-md-6 ">
          <label className='text-align-left f2'>Choose your exam</label>
          <div className="text-center align-items-center">
          <Combobox value={selectedExamTwo} onChange={handleSelectExamTwo}>
          <Combobox.Input
            onChange={(event) => setQueryTwo(event.target.value)}
            className="form-control " 
          />
          <Transition
            show={queryTwo.length > 0 && filteredExamsTwo.length > 0}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-75"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Combobox.Options className="list-group mt-2 rounded-md shadow-lg">
              {filteredExamsTwo.map((examName) => (
                <Combobox.Option key={examName} value={examName}>
                  <button className="list-group-item list-group-item-action">
                    {examName}
                 
                  </button>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </Combobox></div>
         
          </div>
        </div>
        <button className="btn btn-primary mt-5" onClick={handleComparison}>Compare</button>
        </section>
          
        <section className="comparison">
        {comparisonResult && (
          <div>
            <h1 className='text-center'>Comparison</h1>
         
         

            <div className="row mt-5">
            <div className="col-md-8 col-sm-12 order-sm-2">
            <div className="table-responsive">
            <table className="table  table-sm">
            <thead>
              <tr>
               
                <th scope="col"></th>
                <th scope="col">{selectedExamOne}</th>
             
                <th scope="col">{selectedExamTwo}</th>
              </tr>
            </thead>
            <tbody>
            <tr>
            <th scope="row">Total Subjects</th>
            <td>{comparisonResult.exam1_total_subject}</td>
            <td>{comparisonResult.exam2_total_subject}</td>
         
          </tr>
          <tr>
            <th scope="row">Subject Names</th>
            <td>{comparisonResult.names_subjects_exam1}</td>
            <td>{comparisonResult.names_subjects_exam2}</td>
         
          </tr>
         
          <tr>
          <th scope="row">Unique Subjects</th>
          <td>{comparisonResult.unique_subjects_in_exam1}</td>
          <td>{comparisonResult.unique_subjects_in_exam2}</td>
       
        </tr>
        
        <tr>
        <th scope="row">Total Topics</th>
        <td>{comparisonResult.total_topics_exam1}</td>
        <td>{comparisonResult.total_topics_exam2}</td>
    
      </tr>
      <tr>
      <th scope="row">Topic Count by Subjects</th>
      <td>
    
        {Object.entries(comparisonResult.subject_topic_count_exam1).map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))}
      
      </td>
      <td>
    
      {Object.entries(comparisonResult.subject_topic_count_exam2).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
    
    </td>
    
    </tr>
    <tr>
    <th scope="row">Common Subjects</th>
    <td>
    {renderTopics()}
    {comparisonResult && (
      <button onClick={handleToggle}>
        {showMore ? 'View less' : 'View more'}
      </button>
    )}
  
    </td>
    <td>Same as previous</td>
    </tr>
    <tr>
    <th scope="row">Common Subject Similarity &nbsp;
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FontAwesomeIcon
        icon={faQuestionCircle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      />
      {showTooltip && (
        <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          padding: '10px',
          borderRadius: '8px',
          bottom: 'calc(100% + 10px)', // Position it above the element
          left: '75px',
          transform: 'translateX(-50%)',
          fontSize: '14px',
          minWidth: '150px',
          textAlign: 'center',
          zIndex: '999', // Ensure it's on top of other elements
          boxShadow: '0 0 10px rgba(0,0,0,0.3)', // Optional: Add a shadow for better visibility
        }}
      >
          
This metric measures topic similarity between identical subjects. Higher values suggest closer syllabus alignment
        </div>
      )}
    </div>
    </th>
    <td>
{comparisonResult.common_subjects_similarity_score}
    </td>
    <td>Same as previous</td>
    </tr>
            </tbody>
            </table></div>
            </div>
            <div className="col-md-4 col-sm-12 order-sm-1">
            <div className="card-extra"  ref={chartRef}>
            <ReactApexChart
            options={{
              chart: {
                type: 'donut', // Set chart type to donut
              },
              labels: ['Similarity Score', 'Difference'],
              colors: ['#008FFB', '#FF4560'],
              dataLabels: {
                enabled: false,
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '75%', // Adjust the size of the donut
                    labels: {
                      show: false, // Hide labels if needed
                    },
                  },
                },
              },
              stroke: {
                show: false, // Set stroke color to null to remove the outline
              },
            }}
            series={[comparisonResult.Final_Similarity_Score, 100 - comparisonResult.Final_Similarity_Score]}
            type="donut" // Set chart type to donut
            width="100%"
          />
<h4 className='text-center mt-3'>Similarity Score</h4>
<h6 className='text-center'>{selectedExamOne} vs {selectedExamTwo}</h6>
<p className='text-center'>The exams are {comparisonResult.Final_Similarity_Score}% similar.</p>
<div className="text-center"><WhatsappShareButton  url={ShareURL}   title={
  "The syllabus similarity between " +
  selectedExamOne +
  " and " +
  selectedExamTwo +
  " is " +
  (comparisonResult ? comparisonResult.Final_Similarity_Score + "%" : "0%.") +
  " Compare more such exams syllabus on :"
}



>
<WhatsappIcon size={32} round className='mx-2' />
</WhatsappShareButton>

<TwitterShareButton url={ShareURL}  className='mx-2' >
<XIcon size={32} round />
</TwitterShareButton></div>


          </div>
         
      
            </div>
            
            </div>
          </div>
        )}
      </section>
      </div>


   
    </>
  );
}

export default CompareSyllabus;
