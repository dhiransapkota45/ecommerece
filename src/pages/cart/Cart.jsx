import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import { useNavigate } from 'react-router-dom'
import Products from './Products'

const Cart = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
      const fetchcartitems = async () => {
        return
        // dispatch(getCart())
      }
      fetchcartitems()
    } else {
      navigate("/login")
    }
  }, [])

  return (
    <div>
      <Banner title="Cart" />
      <div className='  max-w-[900px] mx-auto '>
        <div className=' font-semibold text-3xl my-8'>
          Cart Product
        </div>
        <Products />
      </div>
    </div>
  )
}

export default Cart
