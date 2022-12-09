import React from 'react'
import { IoLocationSharp } from "react-icons/io5"
import { successToast } from '../../utils/toastify'

const Contact = () => {
    const formsubmithandler = (e) => {
        e.preventDefault()
        successToast("Thank you for your message. We will reach to you soon!")
    }
    return (
        <>
            <div className=' w-full flex flex-col items-center  bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] relative'>
                <div className=' w-4/5 pb-28'>
                    <div className=' w-full sm:w-96 mt-12'>
                        <div className='text-white text-3xl my-5 font-bold'>Contact</div>
                        <div className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo optio neque molestias ex maiores aliquid iste magnam? Facilis reiciendis, ut officia inventore odio tempora sequi. Eaque accusamus incidunt explicabo?</div>
                    </div>
                </div>


                <div className=' lg:absolute w-full pb-7 md:pb-0 lg:w-1/2 flex gap-6 justify-evenly items-center -bottom-20'>
                    <div className='  hover:scale-110 transition-all duration-300  w-72 h-48 bg-white shadow-xl hover:shadow-2xl p-4'>
                        <div className=' bg-blue-600 rounded-full w-fit p-2'><IoLocationSharp className='text-2xl text-white' /></div>
                        <div className='font-bold my-3'>Location</div>
                        <div className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className=' hover:scale-110 transition-all duration-300 w-72 h-48 bg-white shadow-2xl p-4'>
                        <div className=' bg-blue-600 rounded-full w-fit p-2'><IoLocationSharp className='text-2xl text-white' /></div>
                        <div className='font-bold my-3'>Location</div>
                        <div className=' text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>

            <div className=' mt-28'>

            </div>
            <div className=' max-w-3xl mx-auto px-5 md:px-0 flex flex-col justify-center items-center mb-20'>
                <div className=' font-bold text-3xl mb-4'>Send a Message</div>
                <form onSubmit={formsubmithandler} className=' w-full'>

                    <div className=' sm:grid grid-cols-2 gap-6 my-5'>
                        <div className='border border-gray-800 my-5 sm:my-0 col-span-1'>
                            <input className=' outline-none p-2 ' type="text" placeholder='first name' />
                        </div>
                        <div className='border border-gray-800 col-span-1'>
                            <input className=' outline-none p-2 ' type="text" placeholder='Last name' />
                        </div>
                    </div>
                    <input className=' mb-5 border border-gray-800 outline-none p-2 w-full' type="text" placeholder='Your email' />
                    <textarea className=' mb-5 border border-gray-800 outline-none p-2 w-full' name="" id="" cols="10" rows="10" placeholder='Description'></textarea>
                    <div className='flex justify-center'>
                        <button type='submit' className='font-bold text-white bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] w-36 p-2 '>Send</button>
                    </div>

                </form>

            </div>

        </>
    )
}

export default Contact