import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { FaFacebookF } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { loginUser } from '../../redux/login/loginActionCreator'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const schema = yup.object({
  email: yup.string().email("field should contain a valid email").required("email is required"),
  password: yup.string().required("password is required"),
}).required();

const Login = () => {
  const dispatch = useDispatch()
  const [checkbox, setCheckbox] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(loginUser(data, checkbox, navigate))
  }
  return (
    <div className=" bg-hero-pattern h-[600px] w-full flex justify-center ">
      <div className='grid grid-rows-2 w-4/5'>
        <div className=' col-span-1 text-white'>
          <div className='text-3xl font-bold my-8'>My Account</div>
          <div className='text-3xl  font-bold my-8'>Login</div>
          <div>Don't have an account? <NavLink to="/signup" className=' font-bold'>Signup</NavLink></div>
          <div className='flex gap-6 my-6'>
            <button className='flex p-2 bg-white text-black gap-3 w-32 items-center font-semibold'><FcGoogle />Google</button>
            <button className='flex p-2 bg-white text-black gap-3 w-32 items-center font-semibold'><FaFacebookF className='text-blue-600' />Facebook</button>
          </div>

          <form className=' w-full sm:w-96' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <div className=' font-bold mb-2 '>Email</div>
              <input {...register("email")} className=' w-full p-2 text-black outline-none ' type="email" placeholder='Email' />
              {errors?.email?.type === "required" && <p className=' text-red-300 font-bold'>*{errors.email.message}</p>}
              {errors?.email?.type === "email" && <p className=' text-red-300 font-bold'>*{errors.email.message}</p>}
            </div>
            <div>
              <div className='font-bold mb-2'>Password</div>
              <input {...register("password")} className=' w-full p-2 text-black outline-none' type="password" placeholder='Password' />
              {errors?.password?.type === "required" && <p className=' text-red-300 font-bold'>*{errors.password.message}</p>}
            </div>

            <div className=' mt-4 flex justify-between'>
              <div>
                <input checked={checkbox} onChange={() => setCheckbox(!checkbox)} className=' mr-3' type="checkbox" name="" id="check" />
                <label htmlFor="check" className=' font-bold'>Remember Me</label>
              </div>
              <button type='button' className=' font-bold'>
                Forget Password?
              </button>
            </div>

            <div className=' flex justify-end mt-6 '>
              <button type='submit' className=' text-purple-600 p-2 w-32 font-bold  bg-white'>Login</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login