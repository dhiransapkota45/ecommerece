import React from 'react'

import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"
import { NavLink } from 'react-router-dom'

const Slider2 = ({ detail, index, activeElement, setActiveElement, length }) => {
    return (
        <div className={`w-full mr-2 duration-300 ${activeElement === index ? "h-full" : "h-1/2"} relative`}>
            <NavLink className="" to="shop" state={{ category: detail.title }}>
                <img className={`w-full h-full  object-cover`} src={detail.image} alt="" srcset="" />
            </NavLink>
            <button onClick={() => setActiveElement(activeElement - 1)} disabled={index === 0} className={`${activeElement === index ? "absolute" : "hidden"} p-2 text-white ${index === 0 ? "bg-blue-400" : "bg-blue-600"} left-1 top-1/2`}><BsCaretLeftFill className=' text-xl' /></button>
            <button onClick={() => setActiveElement(activeElement + 1)} disabled={index === length - 1} className={`${activeElement === index ? "absolute" : "hidden"} p-2 text-white ${index === length - 1 ? "bg-blue-400" : "bg-blue-600"} top-1/2 right-1`}><BsCaretRightFill /></button>
            <div className=' absolute top-6 text-white font-bold bg-blue-600 right-6 p-2 w-32 text-center'>{detail.title}</div>
        </div>
    )
}

export default Slider2