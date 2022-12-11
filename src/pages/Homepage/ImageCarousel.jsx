import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ImageCarousel = ({ image, index, activeElement }) => {
    const [imageHover, setImageHover] = useState(false)
    return (
        <div className={`h-64 w-full pb-6  mx-auto`}>
            <div onMouseEnter={() => setImageHover(true)} onMouseLeave={() => setImageHover(false)} className={`h-full duration-300 overflow-hidden mx-auto object-cover cursor-pointer ${index === activeElement ? "w-full" : " w-3/4"} relative`}>
                <NavLink to="/shop" state={{ age: image.type }}>
                    <img src={image.image} alt="" srcset="" />
                    <div>{image.type}</div>

                    <div className={` absolute top-0 left-0 gradient  w-full  h-full`}></div>
                    <div className={` ${imageHover ? " opacity-100" : " opacity-0"} absolute duration-300 font-bold text-white bottom-4 left-6 capitalize`}>{image.type}</div>
                </NavLink>
            </div>
        </div >
    )
}

export default ImageCarousel