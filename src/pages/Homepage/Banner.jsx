import React, { useState } from 'react'

import imagedata from './assets/imagedata'
import { NavLink } from 'react-router-dom'
import image1 from "./assets/image1.png"
import Frame22 from "./assets/Frame 22.png"
const Banner = () => {
    const [state, setState] = useState(0)
    return (
        <>
            <div className='w-full flex justify-center bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] '>
                <div className='w-4/5 grid grid-cols-12 '>

                    <div className=' col-span-12 md:col-span-4 h-96 flex items-center '>
                        <div className=' mt-11'>
                            <div className=' text-2xl lg:text-4xl font-bold text-white leading-10 md:leading-[55px]'>
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
                    <div className=' col-span-3 lg:flex  hidden justify-center   flex-col items-center'>
                        <div className=''>
                            <div className=' font-bold text-lg text-white'>
                                More list
                            </div>
                            <div>
                                <img src={imagedata[0]} alt="" />
                            </div>
                        </div>
                    </div>



                    <div className=' col-span-12 md:col-span-8 lg:col-span-5  p-4'>
                        <div className=' flex justify-end'>
                            <img className=' rounded-t-full rounded-r-full border-white border-4 w-96' src={image1} alt="" />
                        </div>
                    </div>
                </div>


            </div>
            <div>
                <img className=' w-full' src={Frame22} alt="" />
            </div>
        </>
    )
}

export default Banner

{/* <div className=' h-44 relative overflow-hidden'>
                            <img src={image} className={`  absolute ${state ? "-top-44" : "top-0"}  w-full h-44 duration-500`} alt="" />
                        </div> */}
{/* <button onClick={() => setState(!state)} className='bg-green-300'>Animation</button> */ }