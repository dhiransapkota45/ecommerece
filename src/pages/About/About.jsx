import React from 'react'
import AboutImage from "./assets/about.png"
import about1 from "./assets/about1.png"
import about2 from "./assets/about2.png"


const About = () => {
    return (
        <>
            <div className=' w-full'>
                <div className='h-96 relative md:clip-your-needful-style bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] flex justify-center'>
                    <div className=' w-4/5 pt-24 relative '>
                        <div className=' relative'>
                            <div className=' text-white font-bold text-3xl'>About Us</div>
                            <div className='w-full md:w-80 lg:w-96 text-white mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ab qui quaerat consequuntur ratione eaque accusamus autem dolores perferendis! Repellat magni cum iste? Totam alias aut iure dolorem quisquam. Est.</div>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-60 md:h-0 flex justify-center'>
                    <div className=' w-4/5 relative'>
                        <div className=' w-80 shadow-xl flex items-center justify-center bg-white text-black z-20 absolute -top-10 md:-top-60 right-0'>
                            <img className=' w-full' src={AboutImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-center mt-8 mb-24'>
                <div className=' w-4/5'>
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                        <div className=' col-span-1 text-gray-600 '>
                            <div className=' font-bold text-2xl my-3 text-black'>Profile</div>
                            <div className=' mb-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi similique eum dolor. Earum molestiae asperiores dicta, aut tenetur sequi odio, animi quos similique repellat nisi tempore eum iure nemo.
                            </div>
                            <div className='mb-9'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cum placeat et eum sequi quos voluptatem sunt culpa quam doloribus reiciendis possimus necessitatibus beatae, distinctio aut, quis illo excepturi facere!
                            </div>
                        </div>
                        <div className=' col-span-1 w-full flex justify-center'>
                            <img className=' w-96' src={about1} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full flex justify-center mt-8 mb-24'>
                <div className=' w-4/5'>
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                    <div className=' col-span-1 mb-3 w-full flex justify-center'>
                            <img className=' w-96 ' src={about2} alt="" />
                        </div>
                        <div className=' flex justify-end'>
                        <div className=' col-span-1 text-gray-600'>
                            <div className=' font-bold text-2xl my-3 text-black'>Our Mission</div>
                            <div className=' my-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi similique eum dolor. Earum molestiae asperiores dicta, aut tenetur sequi odio, animi quos similique repellat nisi tempore eum iure nemo.
                            </div>
                            <div>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cum placeat et eum sequi quos voluptatem sunt culpa quam doloribus reiciendis possimus necessitatibus beatae, distinctio aut, quis illo excepturi facere!
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About