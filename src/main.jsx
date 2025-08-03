import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

import App from './Home/App'
import Error from "./Error/err"
import Doctor from "./Doctorloginpage/Doctor"
import Admin from "./Adminpage/Admin"
import Doctordetail from './Doctorshow/Doctordetail'

import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"Doctorlogin",
    element:<Doctor/>
  },
  {
   path:"Admin",
   element:<Admin/>
  },
  {
    path:"Doctorshow/:id",
    element:<Doctordetail/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
