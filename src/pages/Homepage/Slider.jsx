import React from 'react'
import { useState, useEffect } from 'react'
import sliderdata from './data/Slider'
import Slider2 from './Slider2'


const Slider = () => {

    const [activeElement, setActiveElement] = useState(0)
    useEffect(() => {
        let timer = setTimeout(() => {
            setActiveElement((activeElement + 1) % sliderdata.length)
        }, 3000)

        return () => clearTimeout(timer)
    })
    return (
        <div className='overflow-hidden h-80 w-96 md:w-full'>
            {/* <img src="" alt="" /> */}
            <div style={{ width: sliderdata.length * 384, left: -activeElement * 384 }} className=" duration-300 flex relative  items-center  h-full">
                {
                    sliderdata?.map((detail, index) => {
                        return (
                            <Slider2 length={sliderdata.length} setActiveElement={setActiveElement} activeElement={activeElement} detail={detail} index={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider