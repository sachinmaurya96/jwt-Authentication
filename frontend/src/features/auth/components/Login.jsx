import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm} from "react-hook-form"
import { useDispatch,useSelector } from "react-redux";
import {  isAuthenticated, loginUserAsync } from "../authSlice";

function Login() {
const dispatch = useDispatch()
const [token,setToken] = useState(false)
const isAuth = useSelector(isAuthenticated)
console.log("login",isAuth)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm()

      const onSubmit = (data)=>{
        dispatch(loginUserAsync(data))
      }
      useEffect(()=>{
        setTimeout(()=>{
          const token = localStorage.getItem("token")
        console.log("token",token)
        if(token){
          setToken(true)
        }
        })
      })
  return (
    <>
    {isAuth && <Navigate to="/"/>}
    <div className="container login">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlForm-label">
            Email address
          </label>
          <input
            type="email"
            className="htmlForm-control"
            {...register("email",{required:true})} 
          />
          <div id="emailHelp" className="htmlForm-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">
            Password
          </label>
          <input
            type="password"
            className="htmlForm-control"
            {...register("password",{required:true})} 
          />
            <span>Create an account. <Link to="/signup">Signup</Link></span>
        </div>
      
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
