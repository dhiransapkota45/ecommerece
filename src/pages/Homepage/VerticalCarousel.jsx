import React, { useEffect } from 'react'
import { useState } from 'react'
import imagedata from "./assets/imagedata"
import ImageCarousel from './ImageCarousel'

const VerticalCarousel = () => {
    const [activeElement, setActiveElement] = useState(0)
    useEffect(() => {
        let timer = setTimeout(() => {
            setActiveElement((activeElement + 1) % imagedata.length)
        }, 3000)

        return ()=> clearTimeout(timer)
    })
    const height = imagedata.length * 192
    return (
        <div className='h-4/5 w-full flex gap-2 overflow-hidden '>
            <div style={{ height: height, top: -activeElement * 256 }} className=" w-56 duration-700   relative">
                {
                    imagedata.map((image, index) => {
                        return (
                            <ImageCarousel image={image} index={index} activeElement={activeElement} />
                        )
                    })
                }
            </div>

            <div className=' flex flex-col items-center mt-10'>
                {
                    imagedata.map((image, index) => {
                        return (
                            <button onClick={() => setActiveElement(index)} className={`${activeElement === index ? "w-3 h-3" : "w-2 h-2"} duration-300 rounded-full bg-white mb-1 `}>

                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VerticalCarousel