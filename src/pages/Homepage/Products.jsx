import React, { useEffect, useState } from 'react'
import categoryimage from "./assets/categoryimage"
import Card from './Card'

const Products = () => {
    const products = ["T-Shirt", "jacket", "shirt", "jeans"]
    const [productState, setProductState] = useState("T-Shirt")
    const [data, setData] = useState([])

    useEffect(() => {
        setData(categoryimage.filter((category) => category.category === productState))
    }, [productState])
    console.log(data);
    return (
        <div className='flex flex-col items-center mb-14'>
            <div className=' font-bold text-5xl my-6'>Our Best Seller Product</div>
            <div className='flex gap-4'>
                {products.map((product) => {
                    return (
                        <div onClick={() => setProductState(product)}>{product}</div>
                    )
                })}
            </div>
            <div className=' w-full flex justify-center p-2'>
                <div className='w-4/5 grid grid-cols-12  gap-6'>
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