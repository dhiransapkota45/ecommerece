import React from 'react'
import tshirt from "./assets/Rectangle 7.png"
const Oblongers = () => {
    return (
        <div className=' w-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] pt-10 text-white'>
            <div className=' col-span-1 flex justify-center'>
                <img src={tshirt} alt="" />
            </div>
            <div className=' col-span-1 p-6'>
                <div className=' font-bold  text-3xl'>The Oblongers T-Shirt</div>
                <div className='flex justify-between mt-6'>
                    <div>
                        <div className=' font-semibold'>Color</div>
                        <div className='flex my-2'>
                            <div className='mx-1 w-3 h-3 rounded-full bg-white'></div>
                            <div className='mx-1 w-3 h-3 rounded-full bg-green-500'></div>
                            <div className='mx-1 w-3 h-3 rounded-full bg-red-500'></div>

                        </div>
                    </div>
                    <div>
                        Stars
                    </div>
                </div>
                <div className='flex justify-between my-4'>
                    <div>
                        <div className='font-semibold'>Size</div>
                        <div>buttons</div>
                    </div>
                    <div className='text-3xl font-bold'>
                        50$
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. Proin et lacus blandit quam semper placerat.
                </div>
                <div className=' my-6'>
                    <button className=' bg-white text-purple-500 p-2 font-bold'>Order  Now</button>
                </div>
            </div>

        </div>
    )
}

export default Oblongers