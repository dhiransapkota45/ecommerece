import React from 'react'
// import image2 from "./assets/image2.png"
import Slider from './Slider'
const Categories = () => {
    return (
        <div className='flex flex-col items-center my-16'>
            {/* <div className='w-full flex justify-center '> */}
                <div className='md:grid grid-cols-12 mx-4 max-w-6xl gap-8'>


                    <div className=' col-span-4 flex mb-7 md:mb-0  flex-col items-center md:items-start'>
                        <div className='font-normal text-base text-[#5463FF] uppercase  my-9'>Choose from your category</div>
                        <div className='text-3xl font-bold my-3 md:my-6'>Categories Style</div>
                        <div className=' text-center md:text-start w-72 md:w-fit'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                        </div>
                    </div>
                    <div className=' col-span-8 flex justify-center'>
                        {/* <img src={image2} alt="" /> */}
                        <Slider />
                    </div>

                </div>





            {/* </div> */}
            <div className='font-normal text-base text-[#5463FF] uppercase  my-9'>
                Choose from the best products
            </div>
        </div>
    )
}

export default Categories