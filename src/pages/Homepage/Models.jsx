import React from 'react'
import { NavLink } from 'react-router-dom'
import modelimage from "./assets/modelimage.png"
const Models = () => {
    return (
        <div className=' w-full flex justify-center my-10'>
            <div className=' w-4/5 grid grid-cols-1 md:grid-cols-2'>
                <div className=' col-span-1 my-10 flex flex-col items-center md:items-start '>
                    <div className='text-black text-3xl font-bold'>Look For Models Now</div>
                    <div className=' my-4 text-gray-600 w-4/5 text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iure incidunt! Sequi rem debitis veniam quos voluptatibus blanditiis sint, earum dolores cumque voluptate voluptatum adipisci ipsa qui quam eos repudiandae!
                    </div>
                    <div className=' my-4'>
                        {
                            localStorage.getItem("authToken") || sessionStorage.getItem("authToken")
                                ?
                                <NavLink to="/shop">
                                    <button className='p-2 w-32 font-bold text-white bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] '>Shop Now</button>
                                </NavLink>
                                :
                                <NavLink to="/login">
                                    <button className='p-2 font-bold text-white bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] '>Login Now</button>
                                </NavLink>
                        }

                    </div>
                </div>
                <div className=' col-span-1'>
                    <img src={modelimage} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Models