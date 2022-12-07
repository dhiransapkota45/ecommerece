import React, { useState } from 'react'
import { useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri"
import Counter from '../../Components/Counter/Counter'

const Products = ({ cartdetails }) => {
    // console.log(cartdetails);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cartdetails.reduce((accumulator, currentValue) => {
            // console.log(currentValue);
            return accumulator + currentValue.cartItems.quantity * currentValue.productdetails.price
        }, 0))
    }, [cartdetails])

    return (
        <div className=' grid grid-cols-12 gap-4'>
            {cartdetails.length === 0 ?
                <div>No items in cart</div>
                :
                <div className=' col-span-8'>
                    {
                        cartdetails.map((data, index) => {
                            return (
                                <div className=' bg-gray-100 px-4 my-4 py-4'>
                                    <div className=' flex justify-between'>
                                        <img className=' w-24 h-24' src={data.productdetails.image} alt="" />
                                        <div className=''>
                                            <div className=' font-semibold text-lg'>
                                                {data.productdetails.name}
                                            </div>
                                            <div className=' text-gray-400 text-sm'>
                                                Color : {data.cartItems.color}
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold text-lg'>${data.productdetails.price} USD</div>
                                            <div className='text-gray-400 text-sm'>Price</div>
                                        </div>

                                        <div>
                                            <div className=' font-semibold text-lg'>{data.productdetails.stock}</div>
                                            <div className='text-gray-400 text-sm'>In Stock</div>

                                        </div>
                                        <button className=' h-fit text-gray-400'>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>

                                    <Counter setTotal={setTotal} count={data.cartItems.quantity} {...data.productdetails} />
                                    {/* <div className='flex font-bold text-xl justify-end'>
                                        <div className=' flex gap-4 bg-white p-2 w-40 justify-between '>
                                            <button className={`${ "text-gray-400"}`} disabled={value === 1} onClick={()=>{}}><HiOutlineMinus /></button>
                                            <div>
                                                {data.value}
                                            </div>
                                            <button className={`${ "text-gray-400"}`} disabled={value === data.stock} onClick={()=>{}}><GoPlus /></button>
                                        </div>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            }

            <div className=' col-span-4  my-4  '>
                <div className=' px-4 py-8 flex flex-col gap-8 bg-gray-100'>
                    <div className=' flex  justify-between'>
                        <div className=' font-bold'>Total</div>
                        <div className=' font-semibold'>${total}USD</div>
                    </div>
                    <div className=' flex justify-end '>
                        <button className=' btn w-36 font-bold'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products

// id={data.productdetails._id} stock={data.productdetails.stock}