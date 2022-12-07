import React from 'react'
import { useSelector } from 'react-redux'
import { FiShoppingCart } from "react-icons/fi"

const CartIcon = () => {
    const cartnumber = useSelector(store => store.getcart.cartcount)
    return (
        <div className=' relative'>
            <div className=' text-xl'>
                <FiShoppingCart />
            </div>
            {cartnumber > 0 &&
                <div className=' absolute bg-blue-600 text-white w-4 h-4 text-center rounded-full -top-2 -right-2 text-xs'>
                    {cartnumber}
                </div>
            }
        </div>
    )
}

export default CartIcon