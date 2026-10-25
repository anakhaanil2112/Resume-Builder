import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Landing */}
      <div style={{ height: '100vh', backgroundImage: 'url("/landing.png")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className="d-flex justify-content-center align-items-center">
        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} className="w-50 p-5 rounded text-light text-center">
          <h1>Designed to get hired. Your Skills, Your Story, Your Next Job - All In One</h1>
          <Link to={'/steps'} style={{ backgroundColor: '#755846' }} className="btn text-light mt-3">Make your resume with AI</Link>
        </div>
      </div>
      {/* About */}
      <div className="container my-5">
        <h1 className="text-center mb-5">Whats AI Resume Builder</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <p style={{ textAlign: 'justify' }}>
              An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.
            </p>
            <p style={{ textAlign: 'justify' }}>
              The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly.          </p>
            <p style={{ textAlign: 'justify' }}>
              The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.          </p>
            <p style={{ textAlign: 'justify' }}>
              This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.          </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <img width={'100%'} height={'550px'} src="/resume.png" alt="" />
          </div>
        </div>
      </div>
      {/* Banner */}
      <div style={{ height: '80vh', backgroundImage: 'url("/team.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
      {/* Testimony */}
      <div className="container my-5">
        <h1 className="text-center mb-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Trusted by professionals world wide</h5>
            <p style={{ textAlign: 'justify' }}>
              At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.            </p>
            <p style={{ textAlign: 'justify' }}>
              In fact, users who used rBuilder reported getting hired an average of 48 days faster.</p>
              <p style={{ textAlign: 'justify' }}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out </p>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-md-6">
                    <img className="img-fluid p-2" src="https://img.magnific.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                  </div>
                  <div className="col-md-6">
                    <img className="img-fluid p-2" src="https://img.magnific.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                  </div>
                  <div className="col-md-6">
                    <img className="img-fluid p-2" src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=eaVcXTz5" alt="" />
                  </div>
                  <div className="col-md-6">
                    <img className="img-fluid p-2" src="https://www.fluentu.com/blog/wp-content/uploads/site//4/african-american-young-mom-with-curly-hair-in-stylish-outfit-feeling-grateful-and-happy-receiving-surprise-gift-from-kid-holding-palms-on-heart-smiling.jpg" alt="" />
                  </div>
                  
                </div>
              </div>
          </div>
        </div>
      </>
      )
}

      export default Home