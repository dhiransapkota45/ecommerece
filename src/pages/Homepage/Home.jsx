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

     {/* <div className='bg-red-100 mx-auto w-4/12' >
     <Carousel verticalMode itemsToShow={3}>
       <div>1</div>
       <div>2</div>
       <div>3</div>

       <div>1</div>
       <div>2</div>
       <div>3</div>
      </Carousel>
     </div> */}
    </>
  )
}

export default Home