import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card/Card';

const Products = () => {
  const { product } = useSelector((store) => store.product)
  console.log(product);
  return (
    <div className=' flex gap-6 '>
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
