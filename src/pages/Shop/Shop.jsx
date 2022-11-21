import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import title from './assets/title'
import { IoOptionsSharp } from "react-icons/io5"
import { FaAngleDown } from "react-icons/fa"

const Shop = () => {
    const [dropdown, setDropdown] = useState({
        category: true,
        price: true,
        color: true,
        size: true
    })

    const [filterValue, setFilterValue] = useState({
        category: "men",
        price: "$40",
        color: "red",
        size: "s"
    })
    const { product } = useSelector((store) => store.product)

    //these are use to extract product categories
    // const categoriesWithDuplicates = []
    // // color size agegroup
    // const agegroupwithDuplicates = []
    // const colorwithDuplicates = []
    // const sizewithDuplicates = []
    // product.map((product) => {
    //     categoriesWithDuplicates.push(product.category)
    //     agegroupwithDuplicates.push(product)
    // })
    // const categories = [...new Set(categoriesWithDuplicates)]

    const colors = ["pink", "red", "green", "yellow"]
    const [color, setColor] = useState("red")
    const sizes = ["S", "M", "L", "XL", "XXL"]
    const [size, setSize] = useState("S")
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
                                    <img src={category.imgsrc} alt="" />
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
                    <div className=' col-span-3'>
                        <div className=' font-bold text-3xl mb-4'>T-Shirt </div>
                        <div className=' flex gap-4 items-center mb-7'>Filter <IoOptionsSharp className=' text-xl' /></div>

                        {/* category filter */}
                        <div>
                            <div className=' flex justify-between items-center'>
                                <div className=' font-semibold'>Categories</div>
                                <div onClick={() => setDropdown({ ...dropdown, category: !dropdown.category })} className=' cursor-pointer'><FaAngleDown className={` -rotate-90 ${dropdown.category && "rotate-0"} duration-300`} /></div>
                            </div>

                            <div className={` h-0 overflow-hidden ${dropdown.category && " h-8"} duration-300 mt-3 flex gap-8 mx-2`}>
                                <button className=' border px-2'>Men</button>
                                <button className=' border px-2'>Women</button>
                                <button className=' border px-2'>Other</button>
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
                                    <input className=' w-full' type="range" name="" id="" />
                                </div>
                                <div className=' flex justify-between mx-6'>
                                    <div>$40</div>
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

                            <div className={` h-0 duration-300 overflow-hidden ${dropdown.color && " h-12"}  flex my-2 gap-4`}>
                                {colors.map((colordiv, index) => {
                                    return (

                                        <div key={index} className={` w-3 h-3 rounded-full bg-${colordiv}-500`}>
                                        </div>

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
                                {sizes.map((size) => {
                                    return (
                                        <div className=' flex flex-col items-center'>
                                            <div>{size}</div>
                                            <div className=' w-3 h-3 mt-1 bg-gray-200 rounded-full'></div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className=' w-full h-[1px] bg-gray-300 mt-2'></div>

                        </div>

                        <button className=' p-2 w-32 font-bold bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] text-white my-4 rounded-md'>Apply Filter</button>
                    </div>
                    <div className=' col-span-9'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop