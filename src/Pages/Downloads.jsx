import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAlldownloadResumeAPI } from '../services/allAPI'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { color } from 'chart.js/helpers';


ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Downloads() {

  const [allDownloadList, setAllDownloadList] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //used to store all job roles
  const [label, setLabel] = useState([])
  //to store count of job roles
  const [value, setValue] = useState([])
  const colorPallete = ['#701d19', '#5a943a', '#156774', '#b6b124', '#28157d', '#7e1874']
  const backgroundColor = label.map((value, index) => colorPallete[index % colorPallete.length])

  const data = {
    labels: label,
    datasets: [
      {
        label: 'downloads',
        data: value,
        backgroundColor
      }
    ]
  }


  useEffect(() => {
    getAllDownloads()
  }, [])

  const getAllDownloads = async () => {
    const result = await getAlldownloadResumeAPI()
    setAllDownloadList(result.data)
    const output={}
    result.data.forEach(item=>{
      const currentJob=item.jobRole
      if(currentJob in output){
        output[currentJob]+=1
      }
      else{
        output[currentJob]=1
      }
    })
    setLabel(Object.keys(output))
    setValue(Object.values(output))
  }

  // console.log(allDownloadList);

  return (
    <>
      <div className='container my-5'>
        <div className='d-flex justify-content-center align-items-center'>
          <h2>All Downloaded resume detailes</h2>
          <button onClick={handleOpen} style={{ backgroundColor: 'rgba(155, 108, 37, 0.78)' }} className='btn text-light m-3'>View in Chart</button>
        </div>
        <p className='my-3 fw-bolder'>Total Downloaded resumes from our site is <span className='text-danger fs-4'>{allDownloadList.length}</span></p>
        <div className='row my-5'>
          {allDownloadList.length > 0 ? allDownloadList.map(resume => (
            <div className='col-lg-4 mb-3'>
              <div className='shadow p-3 rounded' style={{ height: '400px' }}>
                <h6>Review at : {resume.timeStamp}</h6>
                <div className='mt-3 text-center'>
                  <Link to={`/view/${resume.resumeId}`}><img className='w-100' height={'300px'} src={resume.resumeIMG} alt="" /></Link>
                </div>
              </div>
            </div>
          )) : <p>Nothing to display</p>
          }
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          CV download count by job role
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='d-flex justify-content-center align-items-center m-5'>
              <Pie data={data} />
            </div>
            <p style={{textAlign:'justify'}}>
              This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide useful insights into user preferences and the popularity of different career opportunities on the platform.
            </p>
          </Box>
        </Box>
      </Modal>
    </>

  )
}

export default Downloads