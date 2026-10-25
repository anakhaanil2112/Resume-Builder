import React, { useEffect, useMemo, useState } from 'react'
import { FaBackward, FaForward, FaSearch, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deleteResumeAPI, getAllResumesAPI } from '../services/allAPI';


function Allresume() {

  const [allResumes, setAllResumes] = useState([])
  const [allDummyResumes, setAllDummyResumes] = useState([])
  const[searchKey,setSearchKey]=useState("")
  const[currentPage,setCurrentPage]=useState(1)
  const rowsPerPage=4
  const lastIndexofCurrentPage=currentPage*rowsPerPage
  const firstIndexofCurrentPage=lastIndexofCurrentPage-rowsPerPage
  const currentResumes=allResumes.slice(firstIndexofCurrentPage,lastIndexofCurrentPage)
  const totalPages=Math.ceil(allResumes.length/rowsPerPage)

  const getAllResumes = async () => {
    const result = await getAllResumesAPI()
    if (result.status == 200) {
      setAllResumes(result.data);
      setAllDummyResumes(result.data);

    }
  }

  const removeResume=async(id)=>{
  if(confirm("Are you sure you want to delete resume")){
    const response=await deleteResumeAPI(id)
    if(response.status==200){
      getAllResumes()
    }
  }
  }

  const searchOutput=useMemo(()=>{
    setAllResumes(allDummyResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  },[searchKey])

  useEffect(() => {
    getAllResumes()
  }, [])
  return (
    <>
      <div className='my-5 container d-flex justify-content-center align-items-center flex-column'>
        <h1>All saved resumes</h1>
        <p style={{ textAlign: 'justify' }}>All resumes submitted to the platform in one place, allowing administrators or recruiters to efficiently view, search, filter, and manage candidate profiles. It provides a quick overview of available candidates and their key details, making the recruitment and candidate-selection process more organized and efficient.</p>
        <div className="d-flex justify-content-center w-50">
  <div className="position-relative" style={{ width: '400px' }}>
    <input
      className="form-control"
      type="text"
      placeholder="Search Candidates by their Job Roles"
      onChange={e => {
        setSearchKey(e.target.value);
        setCurrentPage(1);
      }}
    />

    <FaSearch
      style={{
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)'
      }}
    />
  </div>
</div>
        <table className='my-5 table table-hover table-stripped'>
          <thead>
            <tr className='table-dark'>
              <th>#</th>
              <th>Resume</th>
              <th>Job Roles</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
           { currentResumes.length>0?currentResumes.map((resume,index)=>(
            <tr key={resume.id}>
              <td>{index+1}</td>
              <td><Link to={`/view/${resume.id}`}>{resume.fullName}</Link></td>
              <td>{resume.job}</td>
              <td> <button onClick={()=>removeResume(resume.id)} className='btn text-danger'> <FaTrash /> </button></td>
            </tr>
            )):<p>Nothing to display</p>}
          </tbody>
        </table>
        <div className='d-flex align-items-center'>
          <button className='btn'><FaBackward onClick={()=>setCurrentPage(currentPage-1)}/></button>
          {currentPage} of {totalPages}
          <button className='btn'><FaForward onClick={()=>setCurrentPage(currentPage+1)}/></button>
        </div>
      </div>
    </>
  )
}

export default Allresume