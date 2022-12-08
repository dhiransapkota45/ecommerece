import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card/Card';

const Products = () => {
  const { product } = useSelector((store) => store.product)
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  justify-center items-center w-full  '>
        {
          product.map((product)=>{
            return(
              <Card {...product}/>
            )
          })
        }
    </div>
  )
}

export default Products
