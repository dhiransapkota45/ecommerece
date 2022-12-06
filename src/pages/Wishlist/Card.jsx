import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"

const Card = ({ image, name, price, stock, color, deleteHandler, _id }) => {
    return (
        <div className='flex justify-between flex-wrap px-4 items-center gap-3 my-4   py-6 bg-gray-100 '>
            <button onClick={()=>{deleteHandler(_id)}} className='text-gray-500 '><RiDeleteBin6Line className=' text-2xl' /></button>
            <div className='w-12 '>
                <img className=' ' src={image} alt="" />
            </div>
            <div className='sm:col-span-3 flex flex-col items-center sm:items-start  '>
                <div className=' text-sm md:text-base font-bold'>{name}</div>
                <div className=' text-gray-500 capitalize'>color : {color[0]}</div>
            </div>

            <div className='sm:col-span-3  flex flex-col items-center '>
                <div className=' font-bold'>${price}USD</div>
                <div className='text-gray-500 capitalize'>Price</div>
            </div>

            <div className=' sm:col-span-2  flex flex-col items-center'>
                <div className=' font-bold'>{stock}</div>
                <div className='text-gray-500 capitalize'>In Stock</div>
            </div>

            <div className=' sm:col-span-2  flex flex-col items-center'>
                <button className=' btn w-28'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Card