import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Resumesteps() {
  return (
    <div style={{ minHeight: '90vh' }} className='mt-5'>
      <h1 className='text-center'>Create an ATS Friendly Resume with AI in Minutes</h1>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-4 rounded p-5 shadow text-center'>
            <IoDocumentTextSharp className='fs-1 mb-3 text-primary' />
            <h4>Add your details</h4>
            <p>Our AI will generate skills and summary</p>
            <h5>Step 1</h5>
          </div>
          <div className='col-md-2'></div>
          <div className='col-md-4 rounded p-5 shadow text-center'>
             <FaFileDownload className='fs-1 mb-3 text-danger' />
            <h4>Add your details</h4>
            <p>Our AI will generate skills and summary</p>
            <h5>Step 1</h5>
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
      <div className='mt-5 text-center'>
        <Link to={'/form'} style={{backgroundColor:'#393735'}} className='btn text-light'>LET'S START</Link>
      </div>
    </div>
  )
}

export default Resumesteps