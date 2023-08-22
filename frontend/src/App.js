import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Protected from "./pages/Protected";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Protected ><Home/></Protected>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/signup",
      element: <SignupPage/>,
    },
  ])

  
  return (
    <div className="App">
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
