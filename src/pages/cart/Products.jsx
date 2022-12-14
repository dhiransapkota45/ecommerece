import React, { useState } from 'react'
import { useEffect } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri"
import Counter from '../../Components/Counter/Counter'
import instance from "../../api/api_instance"
import { successToast } from '../../utils/toastify';
import { errorToast } from '../../utils/errorToast';
import { deleteOneCartItem } from "../../redux/cart/getCartActionCreator"
import { useDispatch, useSelector } from 'react-redux';
import { RiEdit2Line } from "react-icons/ri"
import { NavLink } from 'react-router-dom';
import Loader from '../../Components/Common/Loader';
import { totalCartPrice } from '../../redux/cart/getCartActionCreator';
import Stripe from "../../stripe/StripeContainer"

const Products = () => {
    // const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const { cartdetails, total } = useSelector((store) => store.getcart)

    const deleteCartitems = async (id) => {
        const response = await instance.put(`/deletecart/${id}`)
        if (response.data.success) {
            dispatch(deleteOneCartItem(id))
            successToast(response.data.msg)
        } else {
            errorToast(response.data.msg)
        }
    }

    // const checkout = async () => {
    //     setLoader(true)
    //     const response = await instance.post("/checkout", { cartdetails })
    //     console.log(response);
    //     if (response.status === 200) {
    //         window.location = response?.data?.url
    //         setLoader(false)
    //     }
    // }


    useEffect(() => {
        dispatch(totalCartPrice())
    }, [cartdetails])

    return (
        <>
            <div className=' lg:grid grid-cols-12 gap-4'>

                {cartdetails.length === 0 ?
                    <div className=' col-span-8 mb-16'>No items in cart</div>
                    :
                    <div className=' col-span-8'>
                        {
                            cartdetails?.map((data, index) => {
                                return (
                                    <div key={index} className=' bg-gray-100 px-4 my-4 py-4'>
                                        <div className=' flex justify-between flex-wrap'>
                                            <img className=' w-24 h-24 object-cover' src={data.productdetails.image} alt="" />
                                            <div className=''>
                                                <div className=' font-semibold text-lg'>
                                                    {data.productdetails.name}
                                                </div>
                                                <div className=' text-gray-400 text-sm capitalize'>
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
                                            <div className=' flex gap-1'>
                                                <button onClick={() => deleteCartitems(data.productdetails._id)} className='  text-gray-400 w-8 h-8 rounded-full hover:bg-red-100 duration-300  flex justify-center items-center hover:text-red-600'>
                                                    <RiDeleteBin6Line />
                                                </button>

                                                <NavLink to={`/item/${data.productdetails._id}`} state={{ ...data.cartItems }} className='text-gray-400 w-8 h-8 rounded-full hover:bg-orange-100 duration-300  flex justify-center items-center hover:text-orange-600'><RiEdit2Line /></NavLink>

                                            </div>
                                        </div>
                                        <Counter index={index} count={data.cartItems.quantity} {...data.productdetails} />
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                {cartdetails.length > 0 &&
                    <div className='col-span-4 my-4 flex lg:block justify-end '>
                        <div className=' px-8 py-8 flex flex-col gap-8 bg-gray-100'>
                            <div className=' flex  justify-between'>
                                <div className=' font-bold'>Total</div>
                                <div className=' font-semibold'>${total}USD</div>
                            </div>
                            <div className=' flex justify-end '>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className=' btn w-36 font-bold ' >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                }

                <div>
                    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <Stripe />
                            </div>
                        </div>
                    </div>

                </div>


            </div >

        </>
    )
}

export default Products