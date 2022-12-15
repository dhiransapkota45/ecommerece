import React from 'react'
import { HiOutlineMinus } from "react-icons/hi"
import { GoPlus } from "react-icons/go"
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/cart/getCartActionCreator'

const Counter = ({ count, stock, _id, setTotal, price, index }) => {
    const dispatch = useDispatch()
    // const [value, setValue] = useState(count)
    const onIncrementHandler = () => {
        // setValue(value + 1)
        dispatch(increment(_id))
        setTotal((prev) => prev + price)
    }

    const onDecrementHandler = () => {
        // setValue(value - 1)
        dispatch(decrement(_id))
        setTotal((prev) => prev - price)
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