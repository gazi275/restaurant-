import React from 'react'
import ReactDOM from 'react-dom/client'
import image2 from './assets/seamlesstexture21_1200-cooler-2.jpg'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element:<About> </About> ,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

     <div className={`bg-cover bg-center h-screen`} style={{backgroundImage: `url(${image2})`}}>
     <RouterProvider  router={router} />
     </div>
  </React.StrictMode>,
)
