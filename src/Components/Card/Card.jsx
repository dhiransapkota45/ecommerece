import React, { useState } from 'react'
import star1 from "./assets/Star 3.png"
import { AiOutlineHeart } from "react-icons/ai"
import { FiBookmark } from "react-icons/fi"
import { NavLink } from 'react-router-dom'

const Card = ({ _id,image, name, price, star = 5 }) => {
    const [hover, setHover] = useState(false)

    let stars = []
    for (let i = 0; i < star; i++) {
        stars.push(<img src={star1} />)
    }
    return (
        <div className=' rounded-md shadow-xl w-80'>
            <div className=' relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img className=' w-full h-60 object-cover' src={image} alt="" />

                <div className={`${hover ? "absolute" : "hidden"}  bottom-0 w-full bg-black bg-opacity-50 h-14`}>
                    <button className='text-white absolute right-3 top-2 border p-2'><FiBookmark className=' text-xl ' /></button>
                    <button className='text-white absolute right-16 top-2 border p-2'><AiOutlineHeart className=' text-xl ' /></button>

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
