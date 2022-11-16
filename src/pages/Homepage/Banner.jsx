import React, { useState } from 'react'

import imagedata from './assets/imagedata'
import dotIcon from "./assets/Ellipse 49.png"
import image1 from "./assets/image1.png"
const Banner = () => {
    const [state, setState] = useState(0)
    return (
        <div className='w-full flex justify-center bg-red-200 '>
            <div className='w-4/5 grid grid-cols-12 border-2'>

                <div className=' col-span-4 bg-red-600'>
                    <div className=' text-4xl font-bold text-white leading-[75px]'>
                        Get the Latest Dress Models from Us
                    </div>
                    <div className=' text-white mt-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                    </div>
                    <div>
                        <button className=' text-[#7D89FF] p-4 bg-green-500 font-bold'>Shop Now</button>
                    </div>
                </div>


                {/* horizontral carousel */}
                <div className=' col-span-3 bg-blue-400 flex  flex-col items-center'>
                    <div className=' font-bold text-lg text-white'>
                        More list
                    </div>
                    {/* <div className='bg-red-200 h-96 flex  relative'>
                        
                        <div className={`-top-${48 * state} duration-500 absolute`}>
                            {
                                imagedata.map((image, index) => {
                                    return (
                                        <img className={`  w-40 h-48 `} key={index} src={image} alt="" />
                                    )
                                })
                            }
                        </div>
                        <div className='relative'>
                            {imagedata.map((data, index) => {
                                return (
                                    <img onClick={() => setState(index)} className=' mt-3' key={index} src={dotIcon} alt="" />
                                )
                            })}
                        </div>

                    </div> */}
                    <div>
                        <img src={imagedata[0]} alt="" />
                    </div>

                </div>



                <div className=' col-span-5 bg-gray-500 p-4'>
                    <div className=''>
                    <img className=' rounded-t-3xl rounded-r-3xl border-white border-4 w-60' src={image1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

{/* <div className=' h-44 relative overflow-hidden'>
                            <img src={image} className={`  absolute ${state ? "-top-44" : "top-0"}  w-full h-44 duration-500`} alt="" />
                        </div> */}
{/* <button onClick={() => setState(!state)} className='bg-green-300'>Animation</button> */ }