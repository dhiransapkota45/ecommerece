import React, { useState } from 'react'
import Logo from "./assets/Logo.png"
import Hamiicon from "./assets/Vector.png"
import { NavLink } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { FiSearch } from "react-icons/fi"

import Sidenav from './Sidenav'
import CartIcon from '../Buttons/CartIcon/CartIcon'



const Navbar = () => {
  const [hamburger, setHamburger] = useState(false)
  return (
    <div className='bg-white shadow-lg sticky top-0 z-30'>
      <div className='  max-w-7xl mx-auto  flex justify-center'>
        <div className=' w-full  p-4 flex justify-between items-center'>
          <NavLink to="/" className='flex items-center'>
            <img src={Logo} alt="" />
            <div className=' font-bold ml-4 w-36'>mangcoding Store</div>
          </NavLink>
          <div id='mainnav' className='  hidden md:flex  gap-6 items-center font-semibold '>
            <NavLink className=" " to="/" > Home</NavLink>
            <NavLink className=" " to="/shop"> Shop</NavLink>
            <NavLink className=" " to="/about"> About Us</NavLink>
            <NavLink className=" " to="/contact"> Contact</NavLink>
            <NavLink className=" " to="/cart" >
              <CartIcon />
            </NavLink>
            <NavLink className=" " to="/wishlist" >
              <AiOutlineHeart className=' text-xl' />
            </NavLink>
            <NavLink className=" " to="/account">
              <CgProfile className=' text-xl ' />
            </NavLink>
            <div className='hidden lg:flex overflow-hidden items-center mx-6 border-2 rounded-md'>
              <input className='w-52 border-none focus:outline-none  ' type="text" placeholder='Search' />
              <FiSearch className='text-md  mr-4 text-gray-600' />
            </div>
          </div>

          <button onClick={() => setHamburger(!hamburger)} className=' w-6 h-6  relative flex flex-col  gap-1 md:hidden'>
            <img className={`${hamburger ? " rotate-45 absolute top-1" : " rotate-0"} duration-300`} src={Hamiicon} alt="" />
            <img className={`${hamburger ? "  hidden" : "block"} duration-300`} src={Hamiicon} alt="" />
            <img className={`${hamburger ? " -rotate-45 absolute   top-1" : "rotate-0"} duration-300`} src={Hamiicon} alt="" />
          </button>
        </div>

        <Sidenav setHamburger={setHamburger} hamburger={hamburger} />
      </div>
    </div>
  )
}

export default Navbar