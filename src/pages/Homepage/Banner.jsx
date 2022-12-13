import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import VerticalCarousel from './VerticalCarousel'

const Banner = () => {

    return (
        <>
            <div className='w-full flex justify-center bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] '>
                <div className=' max-w-7xl px-4 sm:grid grid-cols-12 '>

                    <div className=' col-span-6 lg:col-span-4 h-96 flex items-center '>
                        <div className=' mt-11 max-w-md'>
                            <div className=' text-3xl sm:text-4xl font-bold text-white leading-10 md:leading-[55px]'>
                                Get the Latest Dress Models from Us
                            </div>
                            <div className=' text-white my-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                            </div>
                            <NavLink to="/shop" className=' text-center'>
                                <div className='text-purple-600 p-2 w-36 bg-white font-bold'>
                                    Shop Now
                                </div>
                            </NavLink>
                        </div>
                    </div>


                    {/* horizontral carousel */}
                    <div className=' col-span-4 lg:flex items-center   hidden justify-center  flex-col   '>
                        <div className=' font-bold text-lg text-white m-4'>
                            More list
                        </div>
                        <div>
                            <VerticalCarousel />
                        </div>
                    </div>



                    <div className=' col-span-6 lg:col-span-4 flex items-center   p-4'>
                        <ImageSlider />
                    </div>
                </div>


            </div>
            {/* <div>
                <img className=' w-full' src={Frame22} alt="" />
            </div> */}
        </>
    )
}

export default Banner

/* <div className=' h-44 relative overflow-hidden'>
                            <img src={image} className={`  absolute ${state ? "-top-44" : "top-0"}  w-full h-44 duration-500`} alt="" />
                        </div> */
/* <button onClick={() => setState(!state)} className='bg-green-300'>Animation</button> */ 