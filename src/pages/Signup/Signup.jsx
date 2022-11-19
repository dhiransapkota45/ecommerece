import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstname: yup.string().required("firstname is required"),
    lastname: yup.string().required("lastname is required"),
    email: yup.string().email("field should contain a valid email").required("email is required"),
    password: yup.string().required("password is required"),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => { console.log(data) }
    return (
        <div className=" bg-hero-pattern h-[800px] w-full flex justify-center ">
            <div className='grid grid-rows-2 w-4/5'>
                <div className=' col-span-1 text-white'>
                    <div className='text-3xl font-bold my-8'>My Account</div>
                    <div className='text-3xl  font-bold my-8'>Signup</div>
                    <div>You have account? <span className=' font-bold'>Login</span></div>
                    <div className='flex gap-6 my-6'>
                        <button className='flex p-2 bg-white text-black gap-3 w-32 items-center font-semibold'><FcGoogle />Google</button>
                        <button className='flex p-2 bg-white text-black gap-3 w-32 items-center font-semibold'><FaFacebookF className='text-blue-600' />Facebook</button>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className=' w-full sm:w-[420px]'>
                        <div className=' my-4 flex justify-between'>
                            <div className=''>
                                <div className='font-bold mb-2'>First Name</div>
                                <input {...register("firstname")} className='  p-2 text-black outline-none' type="text" placeholder='First Name' />
                                {errors?.firstname && <p className=' text-red-300 font-bold'>*{errors.firstname.message}</p>}
                            </div>
                            <div>
                                <div className='font-bold mb-2'>Last Name</div>
                                <input {...register("lastname")} className='  p-2 text-black outline-none' type="text" placeholder='Last Name' />
                                {errors?.lastname && <p className=' text-red-300 font-bold'>*{errors.lastname.message}</p>}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className=' font-bold mb-2 '>Email</div>
                            <input {...register("email")} className=' w-full p-2 text-black outline-none ' type="email" placeholder='Email' />
                            {errors?.email?.type==="required" && <p className=' text-red-300 font-bold'>*{errors.email.message}</p>}
                            {errors?.email?.type==="email" && <p className=' text-red-300 font-bold'>*{errors.email.message}</p>}

                        </div>
                        <div>
                            <div className='font-bold mb-2'>Password</div>
                            <input {...register("password")} className=' w-full p-2 text-black outline-none' type="password" placeholder='Password' />
                            {errors?.password?.type==="required" && <p className=' text-red-300 font-bold'>*{errors.password.message}</p>}

                        </div>

                        <div className=' mt-4'>
                            <div className='font-bold mb-2'>Enter Password Again</div>
                            <input {...register("cpassword")} className=' w-full p-2 text-black outline-none' type="password" placeholder='Password' />
                            {errors?.cpassword?.type==="oneOf" && <p className=' text-red-300 font-bold'>*{errors.cpassword.message}</p>}
                            
                        </div>

                        <div className=' mt-4 flex justify-between'>
                            <div>
                                <input className=' mr-3' type="checkbox" name="" id="check" />
                                <label htmlFor="check" className=' font-bold'>Remember Me</label>
                            </div>
                        </div>

                        <div className=' flex justify-end mt-6 '>
                            <button className=' text-purple-600 p-2 w-32 font-bold  bg-white'>Signup</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Signup