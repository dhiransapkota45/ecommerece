import React from 'react'
import Logo from "./assets/Logo.png"
import { NavLink } from 'react-router-dom'
import icons from './data/icons'

const Footer = () => {
    const category = ["T-Shirt", "Jacket", "Shirt", "Jeans"]
    const age = ["men", "women", "children"]
    return (
        <div className=' w-full bg-[#393E46]'>
            <div className=' max-w-6xl mx-auto  flex justify-between px-6 flex-wrap gap-6  py-10'>
                <div className=' col-span-3 md:col-span-2 xl:col-span-1 flex flex-col gap-5'>
                    <div className='flex gap-2 items-center'>
                        <img src={Logo} alt="" />
                        <div className=' font-bold text-white'>mangcoding Store</div>
                    </div>

                    <div className=' w-full sm:w-96 text-gray-300 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero laborum autem animi eveniet nihil atque eius corporis iure eaque suscipit ipsa temporibus magni, nam sequi. Quasi optio commodi facilis tempora!</div>
                    {
                        localStorage.getItem("authToken") || sessionStorage.getItem("authToken") ?
                            <NavLink to="/shop">
                                <button className=' p-2 font-bold text-purple-600 bg-white w-36'>Shop Now</button>
                            </NavLink>
                            :
                            <NavLink to="/login">
                                <button className=' p-2 font-bold text-purple-600 bg-white w-36'>Login Now</button>
                            </NavLink>
                    }

                </div>

                <div className=' flex gap-3 sm:gap-8'>
                    <div className='flex flex-col  gap-6 text-white'>
                        <div className=' font-bold'>Home</div>
                        <div className='flex flex-col gap-3'>
                            <div>Categories</div>
                            <div>Shop</div>
                            <div>Login</div>
                            <div>Product</div>
                        </div>
                    </div>

                    <div className='flex flex-col  gap-6 text-white'>
                        <div className=' font-bold'>Shop</div>
                        <div className='flex flex-col gap-3'>
                            <div>T-Shirt</div>
                            <div>Jacket</div>
                            <div>Shirt</div>
                            <div>Jeans</div>
                        </div>
                    </div>
                    <div className='flex flex-col  gap-6 text-white'>
                        <div className=' font-bold'>Categories</div>
                        <div className='flex flex-col gap-3'>
                            <div>Men</div>
                            <div>Children</div>
                            <div>Woman</div>
                        </div>
                    </div>
                </div>
                <div className='flex  flex-col gap-3  md:gap-6 text-white'>
                    <div className=' font-bold'>Contact</div>
                    <div className='flex flex-col gap-3'>
                        <div>mangocoding@gmail.com</div>
                        <div className='flex gap-4'>
                            {
                                icons.map((icon, index) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-no-target-blank
                                        <a key={index} target="_blank" href={icon.link} className="p-2 border hover:bg-white duration-300 cursor-pointer hover:text-black"  >{icon.icon}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer