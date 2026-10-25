import axios from 'axios'
const  axiosInstance=axios.create({
    baseURL:"https://resume-builder-server-s1m6.onrender.com",
    timeout:5000 //5 seconds
})
    
// Global error handling
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response recieved");
        return response    
        
    },
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("Unauthorized acess");
            }
            else if(status==404){
                console.log("API noot found");
                
            }
            else if(status==500){
                console.log("Something went wrong");
                
            }
            else if(error.request){
                console.log("No response fromm server");
                
            }
            else{
                console.log("Error"+error.message);
                
            }
            return Promise.reject(error)
        }
    }
)
export default axiosInstance