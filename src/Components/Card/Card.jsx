import React, { useState } from 'react'
import star1 from "./assets/Star 3.png"
import { AiOutlineHeart } from "react-icons/ai"
import { FiBookmark } from "react-icons/fi"
import { NavLink } from 'react-router-dom'
import { addtowishlist } from '../../utils/addtowishlist'

const Card = ({ _id, image, name, price, star = 5 }) => {
    const [hover, setHover] = useState(false)
    const [colorchange, setColorchange] = useState(false)
    const wishstate = JSON.parse(localStorage.getItem("wishlistproducts"))

    let stars = []
    for (let i = 0; i < star; i++) {
        stars.push(<img src={star1} />)
    }

    const wishlistHandler = () => {
        setColorchange(true)
        addtowishlist(_id)
    }
    return (
        <div className=' rounded-md shadow-xl w-60 ' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className=' relative overflow-hidden' >
                <img className=' w-full h-48 object-cover' src={image} alt="" />

                <div className={`${hover ? "bottom-0" : "-bottom-14"} duration-300 absolute   w-full bg-black bg-opacity-80 h-14`}>
                    <button className='text-white absolute right-3 top-2 border p-2'><FiBookmark className=' text-xl ' /></button>
                    <button onClick={wishlistHandler} className={`duration-500 ${colorchange ? " text-red-500   border-red-500" : "text-white"} ${wishstate && wishstate.includes(_id) && "text-red-500   border-red-500"}  absolute right-16 top-2 border p-2`}><AiOutlineHeart className={` text-xl  `} /></button>

                </div>
            </div>
            <NavLink to={`/item/${_id}`}>
                <div className='flex justify-between p-4 font-bold'>
                    <div>{name}</div>
                    <div>${price}</div>
                </div>
                <div className='px-4 text-gray-600'>Best quality</div>
                <div className='flex p-4'>{stars}</div>
            </NavLink>
        </div>
    )
}

export default Card
