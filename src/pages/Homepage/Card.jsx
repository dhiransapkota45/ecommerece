import React, { useState } from 'react'
import star1 from "./assets/Star 3.png"
import {AiOutlineHeart} from "react-icons/ai"
import {FiBookmark} from "react-icons/fi"

const Card = ({ link, title, price, star }) => {
    const [hover, setHover] = useState(false)

    let stars = []
    for (let i = 0; i < star; i++) {
        stars.push(<img src={star1} />)
    }
    return (
        <div className=' rounded-md shadow-xl w-96'>
            <div className=' relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img className=' w-full h-60 overflow-hidden' src={link} alt="" />
                
                    <div className={`${hover ? "absolute" : "hidden"}  bottom-0 w-full bg-black bg-opacity-50 h-14`}>
                        <div className='text-white absolute right-3 top-2 border p-2'><FiBookmark  className=' text-xl '/></div>
                        <div className='text-white absolute right-16 top-2 border p-2'><AiOutlineHeart  className=' text-xl '/></div>

                    </div>
            </div>
            <div className='flex justify-between p-4 font-bold'>
                <div>{title}</div>
                <div>{price}</div>
            </div>
            <div className='px-4 text-gray-600'>Best quality</div>
            <div className='flex p-4'>{stars}</div>
        </div>
    )
}

export default Card