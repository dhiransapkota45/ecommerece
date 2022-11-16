import React from 'react'
import image2 from "./assets/image2.png"
const Categories = () => {
    return (
        <div className='flex flex-col items-center my-16'>
            <div className='w-full flex justify-center '>
                <div className='grid grid-cols-12 w-4/5 gap-8'>


                    <div className=' col-span-12 md:col-span-4 flex  flex-col items-center md:items-start'>
                        <div className='font-normal text-base text-[#5463FF] uppercase  my-9'>Choose from your category</div>
                        <div className='text-3xl font-bold my-3 md:my-6'>Categories Style</div>
                        <div className=' text-center md:text-start w-72 md:w-fit'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                        </div>
                    </div>
                    <div className=' col-span-12 md:col-span-8 flex justify-center'>
                        <img src={image2} alt="" />
                    </div>

                </div>





            </div>
            <div className='font-normal text-base text-[#5463FF] uppercase  my-9'>
                Choose from the best products
            </div>
        </div>
    )
}

export default Categories