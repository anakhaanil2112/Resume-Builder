import axiosService from '../api/axiosService'

// Save resume API
export const saveResumeAPI=async(resumeDetails)=>{
    return await axiosService('POST','/resumes',resumeDetails)
}
export const viewResumeAPI=async(resumeId)=>{
    return await axiosService('GET',`/resumes/${resumeId}`,{})
}

//getAllresumesAPI
export const getAllResumesAPI=async()=>{
    return await axiosService('GET',`/resumes/`,{})
}

// deleteResumeAPI called by  allResumes component when deleted button clicked
export const deleteResumeAPI =async(resumeId)=>{
    return await axiosService('DELETE',`/resumes/${resumeId}`,{})
}

// downloadResumeAPI called by  allResumes component when download button clicked
export const downloadResumeAPI =async(resumeDetails)=>{
    return await axiosService('POST',`/downloads`,resumeDetails)
}

// getalldownloadResumeAPI called by  allResumes component when download button clicked
export const getAlldownloadResumeAPI =async()=>{
    return await axiosService('GET',`/downloads`,{})
}

// updateResumeAPI- called y component edit when update button clicked
export const updateResumeAPI =async(resumeId,resumeDetails)=>{
    return await axiosService('PUT',`/resumes/${resumeId}`,resumeDetails)
}