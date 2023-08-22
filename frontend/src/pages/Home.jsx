import React from 'react'

function Home() {
  const handleClick = ()=>{
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <>
     <div className="container login">
        <h1>!Authorized Successfully</h1><br />
        <button className='btn btn-primary' onClick={handleClick}>Signout</button>
        </div> 
        
    </>
  )
}

export default Home
