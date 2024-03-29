import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { HiOutlineMinus } from "react-icons/hi"
import { GoPlus } from "react-icons/go"
import { useDispatch } from 'react-redux';
import { addtoCart } from "../../redux/cart/cartActionCreator"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import instance from '../../api/api_instance';

import { addToCartIcon } from "../../redux/cart/getCartActionCreator"
import ImageMagnifier from './ImageMagnifier';


const Item = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()

    const [item, setItem] = useState({})
    const [featureImage, setFeatureImage] = useState(null)


    const [activebuttons, setActivebuttons] = useState({
        color: state ? state.color : "",
        size: state ? state.size : "",
        quantity: state?.quantity || 1
    })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addtoCart(activebuttons, item._id, addToCartIcon))

    }

    useEffect(() => {
        if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
            const fetchItem = async () => {

                const item = await instance.get(`/item/${id}`)

                setItem(item.data.item)
                setFeatureImage(item.data.item.image)
            }
            fetchItem()
        } else {
            navigate("/login")
        }
    }, [])

    const domyimage = [item?.image, "https://images.unsplash.com/photo-1669046635809-b682a850ea5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1669007841111-d36d3d72c52e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
    ]

    return (
        <div className=' w-full flex justify-center'>
            <div className='w-full px-10 grid md:grid-cols-2 gap-10 my-20'>
                <div className=' w-full flex flex-col gap-3 mb-7 mt-6'>
                    <ImageMagnifier featureImage={featureImage} />
                    <div className='w-full grid grid-cols-3 gap-3 px-5'>
                        {
                            domyimage?.map((image, index) => {
                                return (
                                    <img onMouseEnter={() => setFeatureImage(image)} className=' w-full h-20 object-contain border-2' src={image} alt="" />
                                )
                            })
                        }
                    </div>
                </div>
                <form onSubmit={onSubmitHandler} className=' w-full sm:px-5 flex flex-col gap-3   '>
                    <div className=' font-bold text-3xl mb-4'>{item?.name}</div>
                    <div className=' text-gray-400 text-sm my-4'>{item?.description}</div>
                    <div className=' my-3'>5 star here</div>
                    <div className=' my-4 flex justify-between'>
                        <div>
                            <div className=' font-bold'>Available Colors</div>
                            <div className=' flex gap-2 my-2'>
                                {item?.color && item?.color.map((color) => {
                                    return (
                                        <>
                                            {/* <input checked={activebuttons.color} type='radio' style={{ backgroundColor: `${color}` }} name='color' onClick={() => setActivebuttons({ ...activebuttons, color: color })} className={`w-5 h-5 form-radio rounded-full`}></input> */}
                                            <div onClick={() => setActivebuttons({ ...activebuttons, color: color })} style={{ backgroundColor: color }} className={`${color === activebuttons.color && "border-2"} border-black w-4 h-4 rounded-full cursor-pointer`}>

                                            </div>
                                        </>
                                    )
                                })}
                            </div>

                        </div>
                        <div className=' flex flex-col items-center'>
                            <div className='  font-bold'>Stock</div>
                            <div className=' flex gap-x-3 items-center  p-2 text-gray-600'>{item?.stock}<AiOutlineShoppingCart className=' text-xl ' /></div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className=' font-bold'>Available Sizes</div>
                        <div className=' flex gap-4  w-fit mt-3 '>
                            {
                                item?.size && item?.size.map((size) => {
                                    return (
                                        <button type='button' onClick={() => setActivebuttons({ ...activebuttons, size })} className={`${size === activebuttons.size ? "bg-gray-600" : "bg-gray-400"} font-semibold text-white p-2 rounded-full w-9 h-9 flex justify-center items-center capitalize duration-300`}>{size}</button>
                                    )
                                })}

                        </div>
                    </div>
                    <div className=' flex justify-between'>
                        <div>
                            <div className=' font-bold '>
                                Quantity
                            </div>
                            <div className=' flex gap-6 p-2 font-bold text-xl border items-center mt-1 mb-3'>
                                <button type='button' onClick={() => setActivebuttons({ ...activebuttons, quantity: activebuttons.quantity - 1 })} disabled={activebuttons.quantity === 1} className={`${activebuttons.quantity === 1 && "text-gray-400"}`} ><HiOutlineMinus /></button>
                                <div className=' '>{activebuttons.quantity}</div>
                                <button type='button' disabled={activebuttons.quantity === item?.stock} className={`${activebuttons.quantity === item?.price && "text-gray-400"}`} onClick={() => setActivebuttons({ ...activebuttons, quantity: activebuttons.quantity + 1 })}><GoPlus /></button>
                            </div>
                        </div>
                        <div className=' font-bold'>
                            ${item?.price * activebuttons.quantity}
                        </div>
                    </div>

                    <div className=' grid grid-cols-12 gap-2'>
                        {/* <button type='button' className=' p-2 col-span-9 lg:col-span-11 font-bold bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] text-white'>Checkout</button> */}
                        <button disabled={activebuttons.color === "" || activebuttons.size === ""} type='submit' className={`${(activebuttons.color === "" || activebuttons.size === "") ? "bg-gradient-to-t from-[#d4a8f5] to-[#8f97e0]" : "bg-gradient-to-t from-[#AB40FF] to-[#7D89FF]"} col-span-12  text-white text-2xl flex justify-center items-center duration-300 `}><FaShoppingCart /></button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Item