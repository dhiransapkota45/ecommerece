import React from 'react'
import { useState, useEffect } from 'react'
import sliderdata from './data/Slider'
import Slider2 from './Slider2'


const Slider = () => {
    const sizes = [
        {
            style: "w-80",
            size: "320"
        },
        {
            style: "w-96",
            size: "384"
        },

    ]

    const [activeElement, setActiveElement] = useState(0)
    useEffect(() => {
        let timer = setTimeout(() => {
            setActiveElement((activeElement + 1) % sliderdata.length)
        }, 3000)

        return () => clearTimeout(timer)
    })
    return (
        <>
            <div className=' block md:hidden'>
                {sizes.slice(0, 1).map((data, index) => {
                    return (
                        <div key={index} className={`overflow-hidden h-80 ${data.style} md:w-full`}>
                            {/* <img src="" alt="" /> */}


                            <div style={{ width: sliderdata.length * data.size, left: -activeElement * data.size }} className=" duration-300 flex relative  items-center  h-full">
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
                })}
            </div>
           
                {sizes.slice(1, 2).map((data, index) => {
                    return (
                        <div key={index} className={`overflow-hidden hidden md:block h-80 ${data.style} md:w-full`}>
                            {/* <img src="" alt="" /> */}


                            <div style={{ width: sliderdata.length * data.size, left: -activeElement * data.size }} className=" duration-300 flex relative  items-center  h-full">
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
                })}
           
            {/* <div className='overflow-hidden h-80 w-80 md:w-full'>
             


                <div style={{ width: sliderdata.length * 320, left: -activeElement * 320 }} className=" duration-300 flex relative  items-center  h-full">
                    {
                        sliderdata?.map((detail, index) => {
                            return (
                                <Slider2 length={sliderdata.length} setActiveElement={setActiveElement} activeElement={activeElement} detail={detail} index={index} />
                            )
                        })
                    }
                </div>
            </div> */}
        </>
    )
}

export default Slider