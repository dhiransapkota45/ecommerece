import React from 'react'
import Logo from "./assets/Logo.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='w-full flex justify-center bg-[#393E46]'>
            <div className=' w-4/5 flex flex-wrap gap-12 lg:gap-20 py-10'>
                <div className=' flex flex-col gap-5'>
                    <div className='flex gap-2 items-center'>
                        <img src={Logo} alt="" />
                        <div className=' font-bold text-white'>mangcoding Store</div>
                    </div>

                    <div className=' w-full sm:w-96 text-gray-300 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero laborum autem animi eveniet nihil atque eius corporis iure eaque suscipit ipsa temporibus magni, nam sequi. Quasi optio commodi facilis tempora!</div>
                    <div>
                        <button className=' p-2 font-bold text-purple-600 bg-white w-36'>Login Now</button>
                    </div>
                </div>

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
                <div className='flex flex-col  gap-6 text-white'>
                    <div className=' font-bold'>Contact</div>
                    <div className='flex flex-col gap-3'>
                        <div>mangocoding@gmail.com</div>
                        <div className='flex gap-4'>
                            <div className=' p-2 border'>
                                <FaFacebookF className='' />
                            </div>
                            <div className=' p-2 border'>
                                <FaInstagram />
                            </div>
                            <div className=' p-2 border'>
                                <FaLinkedinIn />
                            </div>
                            <div className=' p-2 border'>
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer