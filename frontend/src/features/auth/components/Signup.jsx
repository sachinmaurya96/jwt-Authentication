import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm} from "react-hook-form"
import { useDispatch,useSelector } from "react-redux";
import {  isSignup, signupUserAsync } from "../authSlice";


function Signup() {
    const dispatch = useDispatch()
   const isResgister = useSelector(isSignup)
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm()

      const onSubmit = (data)=>{
        dispatch(signupUserAsync(data))
        reset()
      }
  return (
    <>
  {isResgister && <Navigate to="/login"/>}
      <div className="container login">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
            <label className="htmlForm-label">
              Name
            </label>
            <input
              type="text"
              className="htmlForm-control"
              {...register("name",{required:true})} 
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <label  className="htmlForm-label">
              Password
            </label>
            <input
              type="password"
              className="htmlForm-control"
              {...register("password",{required:true})} 
            />
          </div>
          <div className="mb-4">
            <label  className="htmlForm-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="htmlForm-control"
              {...register("cpassword",{required:true})} 
            />
             <span>Already have an account . <Link to="/login">Login</Link></span>
          </div>
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
