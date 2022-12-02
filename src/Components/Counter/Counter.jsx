import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa"
import { BsPlusLg } from "react-icons/bs"

const Counter = () => {
    const [value, setValue] = useState()
    return (
        <div>
            <button><FaMinus /></button>
            <div>
                {}
            </div>
            <button><BsPlusLg /></button>
        </div>
    )
}

export default Counter