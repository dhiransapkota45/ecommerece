import React, { useState } from 'react'
import { HiOutlineMinus } from "react-icons/hi"
import { GoPlus } from "react-icons/go"
import { incrementItem, decrementItem } from '../../redux/cart/changeCartNumber'
import { useSelector, useDispatch } from 'react-redux'


const Counter = ({ count, stock, _id }) => {
    const state = useSelector((store) => store.changeCartNumber)
    // console.log(state);
    const dispatch = useDispatch()

    // const findProduct = state.filter((product) => product._id === _id)

    return (
        <div className='flex font-bold text-xl justify-end'>
            <div className=' flex gap-4 bg-white p-2 w-40 justify-between '>
                <button className={`${state.value === 1 && "text-gray-400"}`} disabled={state.value === 1} onClick={() => dispatch(decrementItem({ _id, count }))}><HiOutlineMinus /></button>
                <div>
                    {/* {findProduct.value || count} */}4
                </div>
                <button className={`${state.value === stock && "text-gray-400"}`} disabled={state.value === stock} onClick={() => dispatch(incrementItem())}><GoPlus /></button>
            </div>
        </div>
    )
}

export default Counter