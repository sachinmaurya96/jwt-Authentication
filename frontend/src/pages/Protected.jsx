import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Protected({children}) {
   const token = localStorage.getItem("token")
  return (
    <>
      {
        token ? children : <Navigate to="/login"/>
      }
    </>
  )
}

export default Protected
