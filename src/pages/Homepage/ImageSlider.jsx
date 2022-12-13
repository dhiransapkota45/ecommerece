import React, { useState } from 'react'
import image1 from "./assets/image1.png"
import { useSelector } from 'react-redux'
// import { GoChevronRight, GoChevronLeft } from "react-icons/go"
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const ImageSlider = () => {
  const imageDatas = useSelector((store) => store.product.product)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setActiveImage((activeImage + 1) % imageDatas.length)
    }, 5000)

    return () => clearTimeout(timer)
  })
  return (
    <div className=' flex justify-end'>
      <div className='rounded-t-[60px] rounded-r-[60px] bg-white border-white border-4 max-w-96 h-[500px] overflow-hidden relative'>
        <NavLink to={`/item/${imageDatas[activeImage]?._id}`}>
          <img className=' h-full w-full object-contain' src={imageDatas[activeImage]?.image || image1} alt="" />
        </NavLink>
        {/* <img src={image1} alt="" srcset="" /> */}

        <div>
          <div className=' absolute w-80 overflow-hidden bg-black bg-opacity-50 h-16 bottom-4 left-5'>
            {/* <div className=' w-full border'>hello</div> */}
            {/* <div className=' border-2 border-cyan-600 h-full relative'> */}
            <div style={{ width: 80 * imageDatas.length, left: -activeImage * 81 }} className=' duration-300 relative h-full overflow-hidden flex gap-2'>
              {
                imageDatas.map((imagedata, index) => {
                  return (
                    <div key={index} className={`${index === activeImage && "border-blue-500"} w-20 border-4 h-full overflow-hidden`}>
                      <img onClick={() => { setActiveImage(index) }} className=' cursor-pointer h-full w-full object-cover' src={imagedata.image} alt="" />
                    </div>
                  )
                })
              }
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <div className=' absolute bottom-8 left-2 text-white bg-blue-700 p-1 text-xl'>
          <GoChevronLeft />
        </div>
        <div className=' absolute bottom-8 right-5 text-white bg-blue-700 p-1 text-xl'>
          <GoChevronRight />
        </div> */}
      </div>
    </div>
  )
}

export default ImageSlider