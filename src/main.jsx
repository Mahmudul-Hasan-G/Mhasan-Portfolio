import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Certifications from './Components/Certifications/Certifications.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/aboutMe",
        element: <AboutMe />
      },
      {
        path:"/certifications",
        element:<Certifications />
      },
      {
        path:"/certifications",
        element:<Certifications />
      },      
      {
        path:"/certifications",
        element:<Certifications />
      },      


    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
