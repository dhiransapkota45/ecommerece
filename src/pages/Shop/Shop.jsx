import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import title from './assets/title'
import { IoOptionsSharp } from "react-icons/io5"
import { FaAngleDown } from "react-icons/fa"
import { getProduct } from "../../redux/product/productActionCreators"
import Products from './Products'
import useWindowWidth from '../../hooks/useWindowWidth'
import { useLocation } from 'react-router-dom'

const Shop = () => {
    const { state } = useLocation()
    const windowWidth = useWindowWidth()
    const agegroupref = useRef()
    const dispatch = useDispatch()

    const [dropdown, setDropdown] = useState({
        filter: true,
        category: true,
        price: true,
        color: true,
        size: true
    })

    const [filterValue, setFilterValue] = useState({
        agegroup: state?.age || "men",
        price: state?.price || "200",
        color: state?.color || "blue",
        size: state?.size || "m",
        category: state?.category || "Jacket"
    })

    const colors = ["blue", "red", "green", "yellow"]

    const sizes = ["s", "m", "l", "xl", "xxl"]

    const agegroup = ["men", "women", "children"]

    const func = () => { dispatch(getProduct(filterValue)) }
    useEffect(() => {
        if (windowWidth <= 1023) {
            setDropdown({ ...dropdown, filter: false })
        } else {
            setDropdown({ ...dropdown, filter: true })
        }
    }, [windowWidth])

    useEffect(() => {
        func()
        // eslint-disable-next-line
    }, [filterValue])


    return (
        <div>
            {/* banner */}
            <div className=' w-full flex justify-center  bg-gradient-to-t from-[#AB40FF] to-[#7D89FF]'>
                <div className=' w-full px-4 max-w-6xl  text-black h-80 flex flex-wrap justify-between items-center'>
                    <div className=' text-3xl font-bold text-white'>Shop</div>
                    <div className=' flex gap-5'>
                        {title.map((category) => {
                            return (
                                <div className=' flex flex-col items-center'>
                                    <img className={` cursor-pointer rounded-full border-opacity-0 border-blue-700 hover:border-opacity-100 border-4 duration-300 ${category.name === filterValue.category ? " border-opacity-100  " : ""}`} onClick={() => { setFilterValue({ ...filterValue, category: category.name }) }} src={category.imgsrc} alt="" />
                                    <div className=' text-white font-semibold text-sm'>{category.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* main part */}
            <div className=' w-full my-12 p-8'>
                <div className='  lg:grid gap-6 grid-cols-12 '>
                    <form className='col-span-3 sticky top-[66px] md:top-[80px] h-fit border-b z-20 px-4 bg-white py-5'>
                        <div className=' font-bold text-3xl mb-4'>{filterValue.category} </div>
                        <div onClick={() => setDropdown({ ...dropdown, filter: !dropdown.filter })} className='pb-4 mb-3 cursor-pointer flex justify-between '>

                            <div className='flex gap-4 items-center  '>Filter <IoOptionsSharp className=' text-xl' /></div>
                            <button type='button' className={`${dropdown.filter ? " rotate-0" : " -rotate-90"} duration-300`}><FaAngleDown /></button>
                        </div>

                        {dropdown.filter &&
                            <div className=''>
                                {/* category filter */}
                                <div className=''>
                                    <div onClick={() => setDropdown({ ...dropdown, category: !dropdown.category })} className=' flex justify-between items-center cursor-pointer'>
                                        <div className=' text-sm sm:text-base font-semibold '>Categories</div>
                                        <div className=' cursor-pointer'><FaAngleDown className={`  ${dropdown.category ? "rotate-0" : "-rotate-90"} duration-300`} /></div>
                                    </div>

                                    <div style={{ height: dropdown.category ? agegroupref?.current?.scrollHeight + "px" : "0px" }} ref={agegroupref} className={` duration-300 overflow-hidden  mt-1 md:mt-3 flex flex-wrap gap-4 mx-2`}>
                                        {agegroup.map((category, index) => {
                                            return (
                                                <button type='button' onClick={() => setFilterValue((prev) => ({ ...prev, agegroup: prev.agegroup === category ? "all" : category }))} key={index} className={` border rounded px-2 ${category === filterValue.agegroup ? " bg-blue-400 text-white font-semibold" : " text-black  "}`}>{category}</button>
                                            )
                                        })}
                                    </div>

                                    <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>
                                </div>

                                {/* price Filter */}
                                <div className=' mt-3'>
                                    <div onClick={() => setDropdown({ ...dropdown, price: !dropdown.price })} className=' flex justify-between cursor-pointer'>
                                        <div className='text-sm sm:text-base mb-1 font-semibold'>Price</div>
                                        <div className=' cursor-pointer'><FaAngleDown className={` ${dropdown.price ? "rotate-0" : "-rotate-90"} duration-300`} /></div>
                                    </div>
                                    <div className={` h-0 duration-300 overflow-hidden ${dropdown.price && " h-12"}`}>
                                        <div>
                                            <input min="0" max="500" onChange={(e) => { setFilterValue({ ...filterValue, price: e.target.value }) }} value={filterValue.price} className=' w-full' type="range" name="" id="" />
                                        </div>
                                        <div className=' flex justify-between mx-6'>
                                            <div className={`font-bold ${filterValue.price === "500" && "text-red-600"} duration-300`}>${filterValue.price}</div>
                                            <div className=' font-bold text-red-500'>$500</div>
                                        </div>
                                    </div>
                                    <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>

                                </div>

                                {/* color filter */}
                                <div className=' mt-3'>
                                    <div className=' flex justify-between  cursor-pointer' onClick={() => setDropdown({ ...dropdown, color: !dropdown.color })}>
                                        <div className='text-sm sm:text-base mb-1 font-semibold'>Color</div>
                                        <div className=' cursor-pointer'><FaAngleDown className={` ${dropdown.color ? "rotate-0" : "-rotate-90"} duration-300`} /></div>
                                    </div>

                                    <div className={` h-0 duration-300 overflow-hidden ${dropdown.color && " h-12"}  flex justify-center my-2 gap-6`}>
                                        {colors.map((colordiv, index) => {
                                            return (
                                                <button style={{ color: colordiv === filterValue.color && colordiv }} type='button' onClick={() => setFilterValue((prev) => ({ ...prev, color: prev.color === colordiv ? "all" : colordiv }))} key={index} className={` duration-300 font-semibold cursor-pointer ${colordiv === filterValue.color ? ` text-black` : " text-gray-300"} capitalize `}>{colordiv}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>

                                </div>

                                {/* size filter */}
                                <div>
                                    <div className=' flex justify-between mt-3 '>
                                        <div className='text-sm sm:text-base font-semibold'>Size</div>
                                        <div className=' cursor-pointer' onClick={() => setDropdown({ ...dropdown, size: !dropdown.size })}><FaAngleDown className={` ${dropdown.size ? "rotate-0" : "-rotate-90"} duration-300`} /></div>
                                    </div>
                                    <div className={` h-0 duration-300 overflow-hidden ${dropdown.size && " h-12"}  flex gap-8 mt-2 justify-center`}>
                                        {sizes.map((size, index) => {
                                            return (
                                                <div className=' flex flex-col items-center capitalize'>
                                                    <div>{size}</div>
                                                    <button type='button' onClick={() => setFilterValue((prev) => ({ ...prev, size: prev.size === size ? "all" : size }))} key={index} className={`w-3 h-3 mt-1 ${size === filterValue.size ? " bg-blue-500 duration-300  font-semibold" : " bg-gray-200"} rounded-full`}></button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>

                                </div>
                                {/* <button type=' submit' className=' p-2 w-32 font-bold bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] text-white my-4 rounded-md'>Apply Filter</button> */}
                            </div>
                        }


                    </form>
                    <div className=' col-span-9'>
                        <Products />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Shop