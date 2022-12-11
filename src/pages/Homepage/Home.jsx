import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Oblongers from './Oblongers'
import Products from './Products'
import Testimonials from './Testimonials'
import Models from './Models'
import Carousel from "react-elastic-carousel"

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Products />
      <Oblongers />
      <Testimonials />
      <Models />
    </>
  )
}

export default Home