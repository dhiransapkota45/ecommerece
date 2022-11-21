import React from 'react'
import Logo from "./assets/Logo.png"
import { NavLink } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci"
import { AiOutlineHeart } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { FiSearch } from "react-icons/fi"

const Navbar = () => {
  return (
    <div className=' z-30 bg-white w-full shadow-lg sticky top-0 flex justify-center'>
      <div className='w-4/5  p-4 flex justify-between'>
        <div className='flex items-center'>
          <img src={Logo} alt="" />
          <div className=' font-bold ml-4 w-36'>mangcoding Store</div>
        </div>
        <div className=' hidden lg:flex  gap-6 items-center font-semibold '>
          <NavLink to="/" > Home</NavLink>
          <NavLink to="/shop"> Shop</NavLink>
          <NavLink to="/about"> About Us</NavLink>
          <NavLink to="/contact"> Contact</NavLink>
          <CiShoppingCart className=' text-xl' />
          <AiOutlineHeart className=' text-xl' />
          <NavLink to="/account">
            <CgProfile className=' text-xl ' />
          </NavLink>
          <div className=' flex items-center mx-6 border-2 p-2 rounded-md'>
            {/* <input className=' border-none overflow-hidden outline-none border w-52  ' type="text" placeholder='Search' /> */}
            <FiSearch className='text-md  mr-4 text-gray-600' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar