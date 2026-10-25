import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json'
import jobSkills from '../assets/jobSkills.json'
import summaries from '../assets/summaries.json'
import {saveResumeAPI} from '../services/allAPI'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Review & Submit'];

function Userinputs({setResumeData,resumeData}) {
  // console.log(resumeData);
  const navigate=useNavigate()
  const [activeStep, setActiveStep] = React.useState(0)
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const renderStepContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className='p-3 row'>
            <TextField id="standard-basic-name" label="FullName" variant="standard" onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} value={resumeData.fullName} />
            <TextField id="standard-basic-loction" label="Location" variant="standard" onChange={e=>setResumeData({...resumeData,location:e.target.value})} value={resumeData.location}/>
            <FormControl variant="standard">
              <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
              <Select
              onChange={e=>setResumeData({...resumeData,job:e.target.value})}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Job"
              >
                {jobRole.jobRoles.map(job=>(<MenuItem key={job} value={job}>{job}</MenuItem>))}
              </Select>
            </FormControl>
          </div>
        </div>
      )
        break;
      case 1: return (
        <div>
          <h3>Conatct Details</h3>
          <div className='p-3 row'>
            <TextField onChange={e=>setResumeData({...resumeData,email:e.target.value})} value={resumeData.email} id="standard-basic-email" label="Email" variant="standard" />
            <TextField onChange={e=>setResumeData({...resumeData,phone:e.target.value})} value={resumeData.phone} id="standard-basic-num" label="Contact Number" variant="standard" />
            <TextField onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})} value={resumeData.linkedin} id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
            <TextField onChange={e=>setResumeData({...resumeData,github:e.target.value})} value={resumeData.github} id="standard-basic-github" label="Github Link" variant="standard" />
            
          </div>
        </div>
      )
        break;
      case 2: return (
        <div>
          <h3>Educational Details</h3>
          <div className='p-3 row'>
            <TextField onChange={e=>setResumeData({...resumeData,degree:e.target.value})} value={resumeData.degree} id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
            <TextField onChange={e=>setResumeData({...resumeData,college:e.target.value})} value={resumeData.college} id="standard-basic-college" label="College/University" variant="standard" />
            <TextField onChange={e=>setResumeData({...resumeData,year:e.target.value})} value={resumeData.year} id="standard-basic-year" label="Year of Graduation " variant="standard" />            
          </div>
        </div>
      )
        break;
      case 3: return(
        <div><p>Our AI will generate Skills & Summary according to your job role.Once the form get submitted, user won't get the chance to update the resume details. If you want ot proceed please click the <b>Generate AI Skill & Summary</b> button to submit. </p></div>      )
        break;
      default:return null
      break;
    }
  }

    //Save resume
  const handleAddresume=async()=>{
    const{fullName,location,job,email,phone,linkedin,github,degree,college,year,skills,summary}=resumeData
    if(fullName&&location&&job&&email&&phone&&linkedin&&github&&degree&&college&&year&&skills&&summary){
      const response=await saveResumeAPI(resumeData)
      // console.log(response)
      const resumeId=response.data.id
      if(response.status==201){
        toast.success("Resume created")
        setTimeout(()=>{
          navigate(`/view/${resumeId}`)
        })
      }
      
    }
    else{
      toast.info("Please fill the details")
    }
  }

  // Generate skill and summary according to jobrole
  const generateSkillsandSummary=()=>{
    setResumeData({...resumeData,skills:jobSkills[resumeData.job],summary:summaries[resumeData.job]})
  handleNext()
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleAddresume}>
                Finish
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box>
              {
                // Render form content on the basis of form content
                renderStepContent(activeStep)
              }
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              {activeStep === steps.length - 1 ? <Button onClick={generateSkillsandSummary}>Generate AI Skills & Summary</Button> : <Button onClick={handleNext}>Next</Button>}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default Userinputs