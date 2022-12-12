import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/product/productActionCreators'
import Card from '../../Components/Card/Card'

const Products = () => {
    const dispatch = useDispatch()
    const { product } = useSelector((store) => store.product)
    const products = ["T-Shirt", "Jacket", "Shirt", "Jeans"]
    const [productState, setProductState] = useState({ category: "T-Shirt", price: "400" })


    useEffect(() => {
        dispatch(getProduct(productState))
        // console.log(response);
    }, [productState])

    return (
        <>
            <div className='flex flex-col items-center mb-14'>
                <div className=' text-center font-bold text-5xl my-6'>Our Best Seller Product</div>
                <div className='flex gap-4'>
                    {products.map((product) => {
                        return (
                            <div className={`${productState.category === product ? " text-blue-500 border-b-2 font-bold border-blue-500" : "bg-white"} text-gray-700 my-6   cursor-pointer`} onClick={() => setProductState({ ...productState, category: product })}>{product}</div>
                        )
                    })}
                </div>
            </div>
            {/* <div className=' border-2 w-full flex justify-center p-2'> */}
            <div className=' px-6 max-w-7xl m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-6'>
                {
                    product.map((data, index) => {
                        return (
                            <Card key={index} {...data} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products