import React from 'react'
import { HiOutlineMinus } from "react-icons/hi"
import { GoPlus } from "react-icons/go"
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/cart/getCartActionCreator'
import { incrementCartPrice, decrementCartPrice } from "../../redux/cart/getCartActionCreator"

const Counter = ({ count, stock, _id,  price, index }) => {
    const dispatch = useDispatch()
    const onIncrementHandler = () => {
        dispatch(increment(_id))
        dispatch(incrementCartPrice(price))
    }

    const onDecrementHandler = () => {
        dispatch(decrement(_id))
        dispatch(decrementCartPrice(price))
    }

    return (
        <div className='flex font-bold text-xl justify-end'>
            <div className=' flex gap-4 bg-white p-2 w-40 justify-between '>
                <button onClick={onDecrementHandler} disabled={count === 1} className={`${count === 1 && "text-gray-400"}`} ><HiOutlineMinus /></button>
                <div>
                    {count}
                </div>
                <button onClick={onIncrementHandler} disabled={count === stock} className={`${count === stock && "text-gray-400"}`}><GoPlus /></button>
            </div>
        </div>
    )
}

export default Counter