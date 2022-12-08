import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card/Card';

const Products = () => {
  const { product } = useSelector((store) => store.product)
  return (
    <div className=' mx-10 flex gap-6 flex-wrap justify-evenly md:justify-start w-full p-6 '>
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
