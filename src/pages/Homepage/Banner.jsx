import React from 'react'

const Banner = () => {
    return (
        <div className='w-full flex justify-center bg-red-200 '>
            <div className='w-4/5 grid grid-cols-12 border-2'>



                <div className=' col-span-4 bg-red-600'>
                    <div className=' text-4xl font-bold text-white leading-[75px]'>
                        Get the Latest Dress Models from Us
                    </div>
                    <div className=' text-white mt-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                    </div>
                    <div>
                        <button className=' text-[#7D89FF] p-4 bg-green-500 font-bold'>Shop Now</button>
                    </div>
                </div>


                {/* horizontral carousel */}
                <div className=' col-span-3 bg-blue-400'></div>
                <div className=' col-span-5 bg-gray-500'></div>
            </div>
        </div>
    )
}

export default Banner