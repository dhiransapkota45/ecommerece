import React, { cloneElement, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { HiOutlineMinus } from "react-icons/hi"
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from "../../redux/cart/cartActionCreator"


const baseUrl = "http://localhost:8000"

const Item = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const [item, setItem] = useState({})
    const [featureImage, setFeatureImage] = useState(null)

    const [activebuttons, setActivebuttons] = useState({
        color: "",
        size: "",
        quantity: 1
    })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(addtoCart(activebuttons, item._id))
    }

    useEffect(() => {
        const fetchItem = async () => {

            const item = await axios.get(`${baseUrl}/item/${id}`)

            setItem(item.data.item)
            console.log(item);
            setFeatureImage(item.data.item.image)
        }
        fetchItem()
    }, [])

    console.log(item.color);

    const domyimage = [item.image, "https://images.unsplash.com/photo-1669046635809-b682a850ea5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1669007841111-d36d3d72c52e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
    ]

    return (
        <div className=' w-full flex justify-center'>
            <div className='w-full px-10 grid md:grid-cols-2 gap-10 my-20'>
                <div className=' w-full flex flex-col gap-3 mb-7 mt-6'>
                    <img className='w-full h-96 object-contain' src={featureImage} alt="" />
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
                    <div className=' font-bold text-3xl mb-4'>{item.name}</div>
                    <div className=' text-gray-400 text-sm my-4'>{item.description}</div>
                    <div className=' my-3'>5 star here</div>
                    <div className=' my-4 flex justify-between'>
                        <div>
                            <div className=' font-bold'>Available Colors</div>
                            <div className=' flex gap-4'>
                                {item.color && item.color.map((color) => {
                                    return (
                                        <button type='button' onClick={() => setActivebuttons({ ...activebuttons, color: color })} className={`${color === activebuttons.color ? "bg-green-400" : "bg-gray-400"}  font-semibold text-white p-2 rounded-full mt-3 h-9 flex justify-center items-center`}>{color}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className=' flex flex-col items-center'>
                            <div className='  font-bold'>Stock</div>
                            <div className=' flex gap-x-3 items-center  p-2 text-gray-600'>{item.stock}<AiOutlineShoppingCart className=' text-xl ' /></div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className=' font-bold'>Available Sizes</div>
                        <div className=' flex gap-4  w-fit mt-3 '>
                            {
                                item.size && item.size.map((size) => {
                                    return (
                                        <button type='button' onClick={() => setActivebuttons({ ...activebuttons, size })} className={`${size === activebuttons.size ? "bg-green-400" : "bg-gray-400"} font-semibold text-white p-2 rounded-full w-9 h-9 flex justify-center items-center`}>{size}</button>
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
                                <button type='button' disabled={activebuttons.quantity === item.stock} className={`${activebuttons.quantity === item.price && "text-gray-400"}`} onClick={() => setActivebuttons({ ...activebuttons, quantity: activebuttons.quantity + 1 })}><GoPlus /></button>
                            </div>
                        </div>
                        <div className=' font-bold'>
                            ${item.price * activebuttons.quantity}
                        </div>
                    </div>

                    <div className=' grid grid-cols-12 gap-2'>
                        <button type='button' className=' p-2 col-span-9 lg:col-span-11 font-bold bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] text-white'>Checkout</button>
                        <button disabled={activebuttons.color === "" || activebuttons.size === ""} type='submit' className={`${(activebuttons.color === "" || activebuttons.size === "") ? "bg-gradient-to-t from-[#d4a8f5] to-[#8f97e0]" : "bg-gradient-to-t from-[#AB40FF] to-[#7D89FF]"} col-span-3 lg:col-span-1  text-white text-2xl flex justify-center items-center duration-300 `}><FaShoppingCart /></button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Item