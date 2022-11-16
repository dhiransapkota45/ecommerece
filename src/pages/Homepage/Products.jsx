import React, { useEffect, useState } from 'react'
import categoryimage from "./assets/categoryimage"
import Card from './Card'

const Products = () => {
    const products = ["T-Shirt", "Jacket", "Shirt", "Jeans"]
    const [productState, setProductState] = useState("T-Shirt")
    const [data, setData] = useState([])

    useEffect(() => {
        setData(categoryimage.filter((category) => category.category === productState))
    }, [productState])

    return (
        <div className='flex flex-col items-center mb-14'>
            <div className=' font-bold text-5xl my-6'>Our Best Seller Product</div>
            <div className='flex gap-4'>
                {products.map((product) => {
                    return (
                        <div className={`${productState === product ? " text-blue-500 border-b-2 font-bold border-blue-500" : "bg-white"} text-gray-700 my-6   cursor-pointer`} onClick={() => setProductState(product)}>{product}</div>
                    )
                })}
            </div>
            <div className=' w-full flex justify-center p-2'>
                <div className='w-4/5 flex gap-6'>
                    {
                        data.map((data) => {
                            return (
                                <Card {...data} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products