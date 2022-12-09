import React from 'react'

const Banner = ({ title, description }) => {
    return (
        <div className=' w-full flex justify-center bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] '>
            <div className=' md:w-4/5 px-6 w-full'>
                <div className=' max-w-md flex flex-col gap-8 my-14'>
                    <div className=' text-white font-bold text-4xl'>
                        {title}
                    </div>
                    <div className=' text-white'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

Banner.defaultProps = {
    title: "title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officia exercitationem fuga consequuntur cumque corrupti harum molestiae consectetur officiis quisquam, sint mollitia id itaque, asperiores odio provident alias ratione? Assumenda!"
}

export default Banner