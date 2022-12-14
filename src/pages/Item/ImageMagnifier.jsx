import React from 'react'
import { useState } from 'react'

const ImageMagnifier = ({ featureImage }) => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);

    const onMouseEnterHandler = (e) => {
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    }

    const onMouseMoveHandler = (e) => {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();

        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;

        setXY([x, y]);
    }

    return (
        <div className=' border-2 relative'>
            <img onMouseEnter={(e) => onMouseEnterHandler(e)} onMouseMove={(e) => onMouseMoveHandler(e)} onMouseLeave={() => { setShowMagnifier(false) }} className='w-full h-96 object-contain' src={featureImage} alt="" />


            <div
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",

                    // prevent maginier blocks the mousemove event of img
                    pointerEvents: "none",
                    // set size of magnifier
                    height: `200px`,
                    width: `200px`,
                    // move element center to cursor pos
                    top: `${y - 100 / 2}px`,
                    left: `${x - 100 / 2}px`,
                    opacity: "1", // reduce opacity so you can verify position
                    border: "1px solid white",
                    backgroundColor: "white",
                    backgroundImage: `url('${featureImage}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * 1.5}px ${imgHeight * 1.5
                        }px`,

                    //calculete position of zoomed image.
                    backgroundPositionX: `${-x * 1.5 + 1.5 / 2}px`,
                    backgroundPositionY: `${-y * 1.5 + 1.5 / 2}px`
                }}
            ></div>
        </div>
    )
}

export default ImageMagnifier