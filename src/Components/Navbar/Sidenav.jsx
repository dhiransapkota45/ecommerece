import React from 'react'
import { GrClose } from "react-icons/gr"
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"

const Sidenav = ({hamburger, setHamburger}) => {
    return (
        <>
            {hamburger && <div onClick={()=>setHamburger(false)} className=' fixed z-40 top-0 w-full h-screen bg-black bg-opacity-60'></div>}
            {
                <div id='offcanvas' className={` fixed top-0 w-full sm:w-96 z-50 h-full  bg-gradient-to-t bg-white ${hamburger ? "left-0" : " -left-full sm:-left-96 "} duration-500`}>
                    <div className=' h-16 px-2 flex justify-end'>
                        <button onClick={() => setHamburger(!hamburger)}>
                            <GrClose />
                        </button>
                    </div>

                    <div className='flex divide-y flex-col items-center py-5 px-3  font-semibold '>
                        <NavLink onClick={()=>setHamburger(false)} className=" p-4 w-full text-center " to="/" > Home</NavLink>
                        <NavLink onClick={()=>setHamburger(false)} className=" p-4 w-full text-center" to="/shop"> Shop</NavLink>
                        <NavLink onClick={()=>setHamburger(false)} className=" p-4 w-full text-center" to="/about"> About Us</NavLink>
                        <NavLink onClick={()=>setHamburger(false)} className=" p-4 w-full text-center" to="/contact"> Contact</NavLink>
                        <NavLink onClick={()=>setHamburger(false)} className=" p-4 w-full flex justify-center" to="/cart"  >
                            <FiShoppingCart className=' text-xl ' />
                        </NavLink>
                        <NavLink onClick={()=>setHamburger(false)} className=" p-4 w-full flex justify-center" to="/wishlist"  >
                            <AiOutlineHeart className=' text-xl' />
                        </NavLink>
                        <NavLink onClick={()=>setHamburger(false)} className=" p-4 w-full flex justify-center" to="/account">
                            <CgProfile className=' text-xl ' />
                        </NavLink>
                    </div>
                </div>
            }
        </>
    )
}

export default Sidenav