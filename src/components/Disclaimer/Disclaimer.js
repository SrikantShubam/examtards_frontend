import React from 'react'
import { Helmet } from 'react-helmet';
import mainlogo from '../../assets/images/favicon.ico';
function Disclaimer() {
  return (
    <>
    <div class="body mt-5">
    <Helmet>
    <title>Exam Tards | Disclaimer</title>
    <meta
      name="description"
      content="Disclaimer exam tards, We are not responsible for any date changes in our website. Users and aspirants are requested to always go to the official websites for correct exam information." 
    />
    <meta name="keywords" content="Exam Tards | Disclaimer"></meta>
    <meta property="og:title" content="Exam Tards | Disclaimer"></meta>
  <meta property="og:description"       content="Disclaimer exam tards, We are not responsible for any date changes in our website. Users and aspirants are requested to always go to the official websites for correct exam information." 
  ></meta>
<meta property="og:image" content={mainlogo}></meta>
  </Helmet>
  <div class="jumbotron">
    <h1>Welcome to ExamTards</h1>
    <p class="lead">Your go-to platform for accurate and reliable examination information sourced directly from official resources.</p>
    <p>We strive to provide comprehensive and up-to-date details about various exams, including dates, schedules, syllabi, and more.</p>
    <p>At ExamTards, we understand the importance of precise and verified information for aspirants preparing for exams. Therefore, all the content presented here is diligently collected from the respective official sources, ensuring accuracy and reliability.</p>
    <p class="text-danger">However, it's crucial to note that while we make every effort to maintain the accuracy of the information provided, discrepancies may occur. We strongly advise aspirants to cross-check any information found on this platform with the respective official sources before relying on it for their preparations.</p>
    <p>Additionally, regarding syllabus comparison, it's essential to clarify that our platform utilizes simple Natural Language Processing (NLP) techniques for generating a general comparison. However, this comparison is not exhaustive and is intended to offer an overall view. Aspirants are requested to conduct their thorough comparison themselves as we are not responsible for the accuracy or completeness of this comparison.</p>
    <p>We are committed to serving aspirants by delivering a platform that aims to facilitate their exam preparations effectively. Your success is our priority, and we endeavor to provide a reliable resource for your academic endeavors.</p>
    <p class="text-muted">Please note that ExamTards holds no responsibility for any consequences arising from the use of information on this platform. Users are encouraged to verify all details with official sources.</p>
  </div>
</div>
    </>
  )
}

export default Disclaimer
