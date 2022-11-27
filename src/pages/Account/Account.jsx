import React, { useEffect } from 'react'
import profiledata from './assets/profiledata'
import { AiFillPlusCircle } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Account = () => {
    const dispatch = useDispatch()
    const { authToken } = useSelector((store) => store.signup)
    const { authTokenLogin } = useSelector((store) => store.login)

    const { name, street, email, address, phone, gender, image } = profiledata
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (authToken === null && authTokenLogin === null) {
    //         navigate("/login")
    //     }
    // }, [])
    useEffect(() => {
        if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
            return
        } else {

            navigate("/login")
        }
    }, [])
    return (
        <div className='w-full '>
            <div className='h-96 relative md:clip-your-needful-style   bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] flex justify-center'>
                <div className=' w-4/5 pt-24 relative '>
                    <div className=' relative'>
                        <div className=' text-white font-bold text-3xl'>My Account</div>
                        <div className='w-full md:w-96 text-white mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ab qui quaerat consequuntur ratione eaque accusamus autem dolores perferendis! Repellat magni cum iste? Totam alias aut iure dolorem quisquam. Est.</div>
                    </div>
                </div>
            </div>
            <div className=' w-full h-60 md:h-0 flex justify-center'>
                <div className=' w-4/5 relative'>
                    <div className=' w-60 h-60 shadow-xl flex items-center justify-center bg-white text-black z-20 absolute -top-10 md:-top-60 right-0'>
                        <div className='flex flex-col items-center'>
                            <div className='w-24 rounded-full relative h-24 mb-3  bg-green-300'>
                                <img className=' cursor-pointer  rounded-full w-full h-full overflow-hidden ' src={image} alt="" />
                                <AiFillPlusCircle className='absolute top-10 text-2xl text-purple-600 right-10 bg-white rounded-full' />
                            </div>
                            <div className=' font-bold  my-1'>{name}</div>
                            <div className=' text-gray-600'>{email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex  justify-center mb-20'>
                <form className=' w-full sm:w-4/5 grid grid-cols-2'>
                    <div className=' col-span-2 lg:col-span-1 px-6 lg:mb-10'>
                        <div className='flex flex-col my-3'>
                            <label htmlFor="name" className=' mb-2 font-bold'>Name</label>
                            <input className=' w-full sm:w-96 border p-2 text-black outline-none' type="text" placeholder={name} />
                        </div>
                        <div className='flex flex-col my-3'>
                            <label htmlFor="name" className='mb-2  font-bold'>Street</label>
                            <input className=' w-full sm:w-96 border p-2 text-black outline-none' type="text" placeholder={street} />
                        </div>
                        <div className='flex flex-col my-3'>
                            <label htmlFor="name" className='mb-2  font-bold'>Address</label>
                            <input className=' w-full sm:w-96 border p-2 text-black outline-none' type="text" placeholder={address} />
                        </div>
                    </div>
                    <div className=' col-span-2 lg:col-span-1 px-6 lg:py-6 flex flex-col justify-center'>
                        <div className='flex flex-col '>
                            <label htmlFor="name" className='mb-2  font-bold'>No. phone</label>
                            <input className=' w-full sm:w-96 border p-2 text-black outline-none' type="text" placeholder={phone} />
                        </div>
                        <div className='flex flex-col my-3'>
                            <label htmlFor="name" className='mb-2  font-bold'>Gender</label>
                            <input className=' w-full sm:w-96 border p-2 text-black outline-none' type="text" placeholder={gender} />
                        </div>
                    </div>

                    <div className=''>
                        <button className='bg-gradient-to-t from-[#AB40FF] to-[#7D89FF] font-bold text-white ml-6 p-2 w-40'>Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Account