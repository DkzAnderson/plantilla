import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/NavBar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Products } from './components/Products/Products'
import { TopProducts } from './components/TopProducts/TopProducts'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Footer } from './components/Footer/Footer'
import { Banner } from './components/Banner/Banner'


function App() {



  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
