import React from 'react'
import testimonials from './assets/testimmonials'
import star1 from "./assets/Star 3.png"
import vector from "./assets/Vector 10.png"

const Testimonials = () => {
    return (
        <div className='w-full flex justify-center py-10 '>
            <div className='w-full md:w-4/5 flex flex-col items-center '>
                <div className='text-black font-bold text-3xl'>Testimonials</div>
                <div className='flex flex-col md:flex-row items-center justify-around px-2 w-full gap-6'>
                    {testimonials.map((data) => {
                        return (
                            <div className=' w-full sm:w-[500px] p-10 my-6 shadow-2xl relative'>

                                <div className='flex gap-4'>
                                    <img src={data.image} alt="" />
                                    <div className='flex flex-col'>
                                        <div className=' font-bold'>{data.name}</div>
                                        <div className=' text-gray-600'>Client</div>
                                    </div>
                                </div>
                                <div className='my-2 flex gap-1'> <img src={star1} alt="" />
                                    <img src={star1} alt="" />
                                    <img src={star1} alt="" />
                                    <img src={star1} alt="" />
                                    <img src={star1} alt="" />
                                </div>
                                <div className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugit quo impedit.</div>
                                <div>
                                    <img className=' absolute top-0 right-0' src={vector} alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials