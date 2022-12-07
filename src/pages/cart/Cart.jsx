import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import { useNavigate } from 'react-router-dom'
import instance from "../../api/api_instance"
import Products from './Products'

const Cart = () => {
  const navigate = useNavigate()
  const [cartdetails, setCartdetails] = useState([])
  useEffect(() => {
    if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
      const fetchcartitems = async () => {
        const fetchcartdetails = await instance.get("/usercartproduct")
        setCartdetails(fetchcartdetails.data)
      }
      fetchcartitems()
    } else {
      navigate("/login")
    }
  }, [])


  console.log(cartdetails);
  return (
    <div>
      <Banner title="Cart" />
      <div className='  max-w-[900px] mx-auto '>
        <div className=' font-semibold text-3xl my-8'>
          Cart Product
        </div>
        <Products setCartdetails={setCartdetails} cartdetails={cartdetails} />

      </div>
    </div>
  )
}

export default Cart
