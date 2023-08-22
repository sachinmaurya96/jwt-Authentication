import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const url = "http://localhost:3001"


export const signupUser = async (userData)=>{
    try{
      const response =   await axios.post(url+"/user/signup",userData)
      console.log("api",response)
        return response
       
    }catch(err){
        console.log(err)
    }
}

export const LoginUser = async (userData)=>{
    try{
      const response =  await axios.post(url+"/user/login",userData)
      localStorage.setItem('token', response.data.token)
    return response.data.user
    }catch(err){
        console.log(err)
    }
}