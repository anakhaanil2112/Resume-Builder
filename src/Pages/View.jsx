import React, { useEffect, useRef, useState } from 'react'
import { AiFillBackward } from 'react-icons/ai';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import Preview from '../Components/Preview';
import Edit from '../Components/Edit'
import { downloadResumeAPI, viewResumeAPI } from '../services/allAPI';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function View() {

  const {id}=useParams()
  const[resume,setResume]=useState({})
  console.log("Current resume:", resume)
  const previewRef=useRef()

  const getResume=async()=>{
    const response=await viewResumeAPI(id)
    // console.log(response);
    
    if(response.status==200){
      setResume(response.data)
    }
  }
  useEffect(()=>{getResume()},[])

  const downloadCv=async()=>{
    const previewTag=previewRef.current
    const canvas=await html2canvas(previewTag)
    canvas.toBlob(async(imgFile)=>{
      const formData=new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","resumes")
      const result=await fetch("https://api.cloudinary.com/v1_1/gkmhiyoi/auto/upload",{
        method:"POST",
        body:formData
      })
      const serverData=await result.json()
      // console.log(serverData);
      const url=serverData.secure_url
      // console.log(url);
      genaratePDF(url)
    })
  }

  const genaratePDF=async(resumeIMG)=>{
    const pdf=new jsPDF()
    const imgWidth=pdf.internal.pageSize.getWidth()
    const imgHeight=pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeIMG,"PNG",0,0,imgWidth,imgHeight)
    //api call to save download resume details in jsonserver
    const today=new Date()
    console.log(today);
    let timeStamp=`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
    // console.log("Resume being saved:", resume);
    const result=await downloadResumeAPI({timeStamp,resumeIMG,resumeId:resume.id,jobRole:resume.job})
    if(result.status==201){
      pdf.save(`${resume.fullName}-CV.pdf`)
    }
    
  }

  return (
    <div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-2'></div>
          <div className='col-lg-8'>
            <div className='d-flex justify-content-center align-items-center'>
              <button onClick={downloadCv} style={{color:'#714a2f'}} className='btn me-2'><FaFileDownload className='fs-5'/>Download CV</button>
              <Edit resumeData={resume} setResumeData={setResume}/>
              <Link to={'/form'} style={{color:'#714a2f'}} className='btn'><AiFillBackward className='fs-3'/>Home</Link>
            </div>
            <div className='p-5' ref={previewRef}>
              <Preview resumeData={resume}/>
            </div>
          </div>
          <div className='col-lg-2'></div>
        </div>
      </div>
    </div>
  )
}

export default View