import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import { useNavigate } from 'react-router-dom'
import instance from "../../api/api_instance"
import Products from './Products'
import { useSelector, useDispatch } from 'react-redux'
import { cartnumber } from "../../redux/cart/cartnumberActionCreator"
import { useContext } from 'react'
import { CartCountContext } from "../../context/cartcount"

import { getCart } from '../../redux/cart/getCartActionCreator'


const Cart = () => {

  const { setCountnumber } = useContext(CartCountContext)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [cartdetails, setCartdetails] = useState([])

  useEffect(() => {
    if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
      const fetchcartitems = async () => {
        dispatch(getCart())
        const fetchcartdetails = await instance.get("/usercartproduct")
        setCartdetails(fetchcartdetails.data)
      }
      fetchcartitems()
    } else {
      navigate("/login")
    }
  }, [])

  // useEffect(() => {
  //   // dispatch(cartnumber(cartdetails.length))
  //   setCountnumber(cartdetails.length)
  // }, [cartdetails])

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
