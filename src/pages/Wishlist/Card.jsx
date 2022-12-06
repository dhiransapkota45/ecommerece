import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../../redux/cart/cartActionCreator'

const Card = ({ image, name, price, size, stock, color, deleteHandler, _id }) => {
    const [itemdetails, setItemdetails] = useState({
        color: color[0],
        size: size[0],
        quantity: 1
    })
    const dispatch = useDispatch()
    const { loading, error } = useSelector((store) => store.cart)
    // console.log(itemdetails);

    const onsubmithandler = () => {
        dispatch(addtoCart(itemdetails, _id, deleteHandler))
    }

    return (
        <div className='flex justify-between flex-wrap px-4 items-center gap-3 my-4 py-6 bg-gray-100 '>
            <div className=' flex gap-6'>
                <button onClick={() => { deleteHandler(_id) }} className='text-gray-500 '><RiDeleteBin6Line className=' text-2xl' /></button>
                <div className='w-12 '>
                    <img className=' ' src={image} alt="" />
                </div>
                <div className=' flex flex-col items-center sm:items-start  '>
                    <div className=' text-sm md:text-base font-bold'>{name}</div>
                    <div className=' text-gray-500 capitalize'>color :
                        <select value={itemdetails.color} onChange={(e) => setItemdetails({ ...itemdetails, color: e.target.value })} name="color" id="color">
                            {
                                color.map((color) => {
                                    return <option className=' capitalize' >{color}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className=' flex flex-col items-center sm:items-start  '>
                    <div className=' text-sm md:text-base font-bold'>Size</div>
                    <div className=' text-gray-500 capitalize'>
                        <select name="size" id="size" value={itemdetails.size} onChange={(e) => setItemdetails({ ...itemdetails, size: e.target.value })} >
                            {
                                size.map((size) => {
                                    return <option onChange={() => setItemdetails({ ...itemdetails, size: size })} className='' >{size}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col items-center '>
                <div className=' font-bold'>${price}USD</div>
                <div className='text-gray-500 capitalize'>Price</div>
            </div>

            <div className=' sm:col-span-2  flex flex-col items-center'>
                {
                    stock === 0 ?
                        <div className=' font-bold'>
                            Out of stock
                        </div> :
                        <>
                            <div className=' font-bold'>{stock}</div>
                            <div className='text-gray-500 capitalize'>In Stock</div>
                        </>
                }
            </div>

            <div className=' sm:col-span-2  flex flex-col items-center'>
                <button onClick={onsubmithandler} className=' btn w-28'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Card