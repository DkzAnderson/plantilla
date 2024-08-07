import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to={"/home"}/>
  },
  {
    path: '/home',
    element: <App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
