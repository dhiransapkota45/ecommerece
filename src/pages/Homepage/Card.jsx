import React from 'react'
import star1 from "./assets/Star 3.png"

const Card = ({ link, title, price, star }) => {
    let stars = []
    for (let i = 0; i < star; i++) {
        stars.push(<img src={star1} />)
    }
    return (
        <div className=' rounded-md shadow-xl col-span-3'>
            <img className=' w-full h-60 overflow-hidden' src={link} alt="" />
            <div className='flex justify-between p-2 font-bold'>
                <div>{title}</div>
                <div>{price}</div>
            </div>
            <div className='px-2 text-gray-600'>Best quality</div>
            <div className='flex p-2'>{stars}</div>
        </div>
    )
}

export default Card