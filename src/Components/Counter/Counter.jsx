import React, { useState } from 'react'
import { HiOutlineMinus } from "react-icons/hi"
import { GoPlus } from "react-icons/go"

const Counter = ({ count, stock, _id, setTotal, price }) => {
    const [value, setValue] = useState(count)
    const onIncrementHandler = () => {
        setValue(value + 1)
        setTotal((prev) => prev + price)
    }

    const onDecrementHandler = () => {
        setValue(value - 1)
        setTotal((prev) => prev - price)
    }

    return (
        <div className='flex font-bold text-xl justify-end'>
            <div className=' flex gap-4 bg-white p-2 w-40 justify-between '>
                <button onClick={onDecrementHandler} disabled={value === 1} className={`${value === 1 && "text-gray-400"}`} ><HiOutlineMinus /></button>
                <div>
                    {value}
                </div>
                <button onClick={onIncrementHandler} disabled={value === stock} className={`${value === stock && "text-gray-400"}`}><GoPlus /></button>
            </div>
        </div>
    )
}

export default Counter