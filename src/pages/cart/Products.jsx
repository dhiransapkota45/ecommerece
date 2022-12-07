import React, { useState } from 'react'
import { useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri"
import Counter from '../../Components/Counter/Counter'
import instance from "../../api/api_instance"
import { successToast } from '../../utils/toastify';
import { errorToast } from '../../utils/errorToast';

const Products = ({ cartdetails, setCartdetails }) => {
    const [total, setTotal] = useState(0)

    const deleteCartitems = async (id) => {
        const response = await instance.put(`/deletecart/${id}`)
        if (response.data.success) {
            let data = cartdetails.filter((data) => data.productdetails._id !== id)
            setCartdetails(data)    
            successToast(response.data.msg)
        } else {
            errorToast(response.data.msg)
        }
    }

    useEffect(() => {
        setTotal(cartdetails.reduce((accumulator, currentValue) => {
            // console.log(currentValue);
            return accumulator + currentValue.cartItems.quantity * currentValue.productdetails.price
        }, 0))
    }, [cartdetails])

    return (
        <div className=' grid grid-cols-12 gap-4'>
            {cartdetails.length === 0 ?
                <div className=' col-span-8 mb-16'>No items in cart</div>
                :
                <div className=' col-span-8'>
                    {
                        cartdetails.map((data, index) => {
                            return (
                                <div className=' bg-gray-100 px-4 my-4 py-4'>
                                    <div className=' flex justify-between'>
                                        <img className=' w-24 h-24 object-cover' src={data.productdetails.image} alt="" />
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
                                        <button onClick={() => deleteCartitems(data.productdetails._id)} className='  text-gray-400 w-8 h-8 rounded-full hover:bg-red-600 duration-300 hover:bg-opacity-40 flex justify-center items-center hover:text-black'>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>

                                    <Counter setTotal={setTotal} count={data.cartItems.quantity} {...data.productdetails} />
                                </div>
                            )
                        })
                    }   
                </div>
            }
            {cartdetails.length > 0 &&
                < div className=' col-span-4  my-4  '>
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
            }
        </div >
    )
}

export default Products

// id={data.productdetails._id} stock={data.productdetails.stock}