import React from 'react'
import { Navbar } from './NavBar/Navbar'
import { Hero } from './Hero/Hero'
import { Products } from './Products/Products'
import { TopProducts } from './TopProducts/TopProducts'
import { Banner } from './Banner/Banner'
import { Testimonials } from './Testimonials/Testimonials'
import { Footer } from './Footer/Footer'

export const Home = () => {
  return (
    <section className='size-full'>
        <Navbar/>
        <Hero/>
        <Products/>
        <TopProducts/>
        <Banner/>
        <Testimonials/>
        <Footer/>
    </section>
  )
}
