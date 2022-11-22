import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import title from './assets/title'
import { IoOptionsSharp } from "react-icons/io5"
import { FaAngleDown } from "react-icons/fa"
import { getProduct } from "../../redux/product/productActionCreators"
import Products from './Products'

const Shop = () => {
    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState({
        category: true,
        price: true,
        color: true,
        size: true
    })

    const [filterValue, setFilterValue] = useState({
        agegroup: "all",
        price: "200",
        color: "all",
        size: "all",
        category: "Jacket"
    })

    const submitHandler = (e) => {
        console.log(filterValue);
        e.preventDefault()
        dispatch(getProduct(filterValue))
    }
    useEffect(() => {
        dispatch(getProduct(filterValue))
    }, [])

    const colors = ["blue", "red", "green", "yellow", "all"]

    const sizes = ["s", "m", "l", "xl", "xxl", "all"]

    const agegroup = ["men", "women", "other", "all"]
    return (
        <div>
            {/* banner */}
            <div className=' w-full flex justify-center  bg-gradient-to-t from-[#AB40FF] to-[#7D89FF]'>
                <div className=' w-4/5 text-black h-80 flex justify-between items-center'>
                    <div className=' text-3xl font-bold text-white'>Shop</div>
                    <div className=' flex gap-5'>
                        {title.map((category) => {
                            return (
                                <div className=' flex flex-col items-center'>
                                    <img className={` cursor-pointer rounded-full border-opacity-0 border-blue-400 border-4 duration-300 ${category.name === filterValue.category ? " border-opacity-100  " : ""}`} onClick={() => { setFilterValue({ ...filterValue, category: category.name }) }} src={category.imgsrc} alt="" />
                                    <div className=' text-white font-semibold text-sm'>{category.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* main part */}
            <div className=' w-full my-12 flex justify-center'>
                <div className=' w-4/5  grid grid-cols-12'>
                    <form onSubmit={submitHandler} className=' col-span-12 md:col-span-3'>
                        <div className=' font-bold text-3xl mb-4'>T-Shirt </div>
                        <div className=' flex gap-4 items-center mb-7'>Filter <IoOptionsSharp className=' text-xl' /></div>

                        {/* category filter */}
                        <div>
                            <div className=' flex justify-between items-center'>
                                <div className=' font-semibold'>Categories</div>
                                <div onClick={() => setDropdown({ ...dropdown, category: !dropdown.category })} className=' cursor-pointer'><FaAngleDown className={` -rotate-90 ${dropdown.category && "rotate-0"} duration-300`} /></div>
                            </div>

                            <div className={` h-0 overflow-hidden ${dropdown.category && " h-8"} duration-300 mt-3 flex gap-4 mx-2`}>
                                {agegroup.map((category, index) => {
                                    return (
                                        <button type='button' onClick={() => setFilterValue({ ...filterValue, agegroup: category })} key={index} className={`border rounded px-2 ${category === filterValue.agegroup ? " bg-blue-400 text-white font-semibold" : " text-black "}`}>{category}</button>
                                    )
                                })}
                            </div>

                            <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>
                        </div>

                        {/* price Filter */}
                        <div className=' mt-3'>
                            <div className=' flex justify-between'>
                                <div className=' mb-1 font-semibold'>Price</div>
                                <div className=' cursor-pointer' onClick={() => setDropdown({ ...dropdown, price: !dropdown.price })}><FaAngleDown className={`  -rotate-90 ${dropdown.price && "rotate-0"} duration-300`} /></div>
                            </div>
                            <div className={` h-0 duration-300 overflow-hidden ${dropdown.price && " h-12"}`}>
                                <div>
                                    <input min="0" max="500" onChange={(e) => { setFilterValue({ ...filterValue, price: e.target.value }) }} value={filterValue.price} className=' w-full' type="range" name="" id="" />
                                </div>
                                <div className=' flex justify-between mx-6'>
                                    <div>${filterValue.price}</div>
                                    <div>$500</div>
                                </div>
                            </div>
                            <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>

                        </div>

                        {/* color filter */}
                        <div className=' mt-3'>
                            <div className=' flex justify-between'>
                                <div className=' mb-1 font-semibold'>Color</div>
                                <div className=' cursor-pointer' onClick={() => setDropdown({ ...dropdown, color: !dropdown.color })}><FaAngleDown className={` -rotate-90 ${dropdown.color && "rotate-0"} duration-300`} /></div>
                            </div>

                            <div className={` h-0 duration-300 overflow-hidden ${dropdown.color && " h-12"}  flex justify-center my-2 gap-6`}>
                                {colors.map((colordiv, index) => {
                                    return (

                                        <button type='button' onClick={() => setFilterValue({ ...filterValue, color: colordiv })} key={index} className={` duration-300 font-semibold cursor-pointer ${colordiv === filterValue.color ? ` text-black` : " text-gray-300"} `}>{colordiv}
                                        </button>

                                    )
                                })}
                            </div>

                            <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>

                        </div>

                        {/* size filter */}
                        <div>
                            <div className=' flex justify-between mt-3 '>
                                <div className=' font-semibold'>Size</div>
                                <div className=' cursor-pointer' onClick={() => setDropdown({ ...dropdown, size: !dropdown.size })}><FaAngleDown className={` -rotate-90 ${dropdown.size && "rotate-0"} duration-300`} /></div>
                            </div>
                            <div className={` h-0 duration-300 overflow-hidden ${dropdown.size && " h-12"}  flex gap-8 mt-2 justify-center`}>
                                {sizes.map((size, index) => {
                                    return (
                                        <div className=' flex flex-col items-center'>
                                            <div>{size.toUpperCase()}</div>
                                            <button type='button' onClick={() => setFilterValue({ ...filterValue, size: size })} key={index} className={`w-3 h-3 mt-1 ${size === filterValue.size ? " bg-blue-500 duration-300  font-semibold" : " bg-gray-200"} rounded-full`}></button>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>

                        </div>

                        <button type=' submit' className=' p-2 w-32 font-bold bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] text-white my-4 rounded-md'>Apply Filter</button>
                    </form>
                    <div className=' col-span-9'>
                        <Products />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop