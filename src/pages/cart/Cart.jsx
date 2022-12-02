import React, { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import { useNavigate } from 'react-router-dom'
import instance from "../../api/api_instance"
import { RiDeleteBin6Line } from "react-icons/ri"

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
        <div className=' font-semibold text-3xl'>
          Cart Product
        </div>

        <div className=' grid grid-cols-12 gap-4'>
          {cartdetails.length === 0 ?
            <div>No items in cart</div>
            :
            <div className=' col-span-8'>
              {
                cartdetails.map((data, index) => {
                  return (
                    <div>
                      <div className=' flex justify-between'>
                        <img className=' w-24 h-24' src={data.productdetails.image} alt="" />
                        <div className=''>
                          <div>
                            {data.productdetails.name}
                          </div>
                          <div>
                            {data.cartItems.color}
                          </div>
                        </div>
                        <div>
                          <div>${data.productdetails.price}</div>
                          <div>Price</div>
                        </div>

                        <div>
                          <div>{data.productdetails.stock}</div>
                          <div>stock</div>

                        </div>
                        <button>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  )
                })
              }
            </div>
          }

          <div className=' col-span-4'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
