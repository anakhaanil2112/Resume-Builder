import { Button, Divider } from '@mui/material';
import React from 'react'

function Preview({resumeData}) {
  console.log(resumeData);
  
  return (
    <div>
      <div className='w=100'>
        <h2>{resumeData.fullName}</h2>
        <p className='fs-6 lh-1'>Phone: {resumeData.phone}</p>
        <p className='fs-6 lh-1'>Email: {resumeData.email}</p>
        <p className='fs-6 lh-1'>Linkedin: {resumeData.linkedin}</p>
        <p className='fs-6 lh-1'>Github: {resumeData.github}</p>
        <p className='fs-6 lh-1'>Location: {resumeData.location}</p>
        <Divider className='bg-dark my-3'/>
        <h4>Professional Summary</h4>
        <p>{resumeData.summary}</p>
        <Divider className='bg-dark my-3'/>
        <h4>Technical skill</h4>
        {resumeData.skills?.map(skill=>(<span><Button  variant='text' className='text-dark'>{skill}</Button></span>))}
        <Divider className='bg-dark my-3'/>
        <h4>Education</h4>
        <p className='fs-6 lh-1'>Bachelor's Degree in {resumeData.degree} </p>
        <p className='fs-6 lh-1'>University/College name : {resumeData.college}</p>
        <p className='fs-6 lh-1'>Year of graduation : {resumeData.year} </p>
      </div>
    </div>
  )
}

export default Preview