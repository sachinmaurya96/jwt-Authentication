import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginUser, signupUser } from './authApi';
const initialState = {
    loggedInUser:null,
    status: 'idle',
    loading:"",
    isAuthenticated :false,
    isSignup:false,
  };

  export const signupUserAsync = createAsyncThunk(
    "user/signupUser",
    async (userData)=>{
        const response = await signupUser(userData)
        return response.data
    }
  )

  export const loginUserAsync = createAsyncThunk(
    "user/loginUser",
    async (userData)=>{
        const response = await LoginUser(userData)
        return response
    }
  )

  export const createAuthSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers: (builders)=>{
        builders
        .addCase(signupUserAsync.pending,(state)=>{
            state.status = "pending"
            state.loading = true
        })
        .addCase(signupUserAsync.fulfilled,(state,action)=>{
            state.status = action.payload
            state.loading = false
            state.isSignup=true
           
        })
        .addCase(loginUserAsync.pending,(state)=>{
          state.status = "pending"
          state.loading = true
      })
      .addCase(loginUserAsync.fulfilled,(state,action)=>{
          state.status = "fullfield"
          state.loading = false
          state.loggedInUser = action.payload
          state.isAuthenticated=true
      })
    }
  })

 export const selectLoggedInUser = (state)=>state.user.loggedInUser
 export const isAuthenticated = (state)=>state.user.isAuthenticated
 export const isSignup = (state)=>state.user.isSignup
  export default  createAuthSlice.reducer