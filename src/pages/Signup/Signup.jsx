import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"

const Signup = () => {
    return (
        <div className=" bg-hero-pattern h-[800px] w-full flex justify-center ">
            <div className='grid grid-rows-2 w-4/5'>
                <div className=' col-span-1 text-white'>
                    <div className='text-3xl font-bold my-8'>My Account</div>
                    <div className='text-3xl  font-bold my-8'>Signup</div>
                    <div>You have account? <span className=' font-bold'>Login</span></div>
                    <div className='flex gap-6 my-6'>
                        <button className='flex p-2 bg-white text-black gap-3 w-32 items-center font-semibold'><FcGoogle />Google</button>
                        <button className='flex p-2 bg-white text-black gap-3 w-32 items-center font-semibold'><FaFacebookF className='text-blue-600' />Facebook</button>
                    </div>

                    <form className=' w-full sm:w-[420px]'>
                        <div className=' my-4 flex justify-between'>
                            <div className=''>
                                <div className='font-bold mb-2'>First Name</div>
                                <input className='  p-2 text-black outline-none' type="password" placeholder='First Name' />
                            </div>
                            <div>
                                <div className='font-bold mb-2'>Last Name</div>
                                <input className='  p-2 text-black outline-none' type="password" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className=' font-bold mb-2 '>Email</div>
                            <input className=' w-full p-2 text-black outline-none ' type="email" placeholder='Email' />
                        </div>
                        <div>
                            <div className='font-bold mb-2'>Password</div>
                            <input className=' w-full p-2 text-black outline-none' type="password" placeholder='Password' />
                        </div>

                        <div>
                            <div className='font-bold mb-2'>Enter Password Again</div>
                            <input className=' w-full p-2 text-black outline-none' type="password" placeholder='Password' />
                        </div>

                        <div className=' mt-4 flex justify-between'>
                            <div>
                                <input className=' mr-3' type="checkbox" name="" id="check" />
                                <label htmlFor="check" className=' font-bold'>Remember Me</label>
                            </div>
                        </div>

                        <div className=' flex justify-end mt-6 '>
                            <button className=' text-purple-600 p-2 w-32 font-bold  bg-white'>Signup</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Signup