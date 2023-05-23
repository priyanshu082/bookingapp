import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom'

export const Register = () => {

  const Router=useNavigate()

  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter Your Gamil"),
    password1: yup.string().min(6, "Password must have at least 6 characters").max(20).required("Password is must"),
    password2: yup.string().required().oneOf([yup.ref("password1"), null], "Passwords don't Match")

  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div class=" text-black pt-[30px]">

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder='Username'
          type="text"
          {...register("Gmail")}
          class="w-[280px] h-[35px] border-b-[1px] border-blue-800 text-xl font-light text-black  placeholder-blue-900 tracking-[2px] focus:outline-none"
        />
        <p class="text-[15px] text-red-500">{errors.email?.message}</p>

        <br />

        <input
          placeholder='Password'
          type="password"
          {...register("password1")}
          class="w-[280px] h-[35px] border-b-[1px] border-blue-800 text-xl font-light text-black  placeholder-blue-900 tracking-[1px] mt-[20px] focus:outline-none"
        />
        <p class="text-[15px] text-red-500">{errors.password1?.message}</p>

        <br />
        <input
          placeholder='Password'
          type="password"
          {...register("password2")}
          class="w-[280px] h-[35px] border-b-[1px] border-blue-800 text-xl font-light text-black  placeholder-blue-900 tracking-[1px] mt-[20px] focus:outline-none"
        />
        <p class="text-[15px] text-red-500">{errors.password2?.message}</p>

        <br />
        <section>
          <button class='btn-2  ml-[53px] mt-[15px] font-poppins text-white py-[8px] px-[45px] text-lg'>SignUp</button>
        </section>

      </form>
      <div>
        <button class="text-blue-900 mt-[25px] text-sm font-poppins ml-[44px] hover:cursor-pointer hover:underline font-medium"
        onClick={()=>{
          Router("/")
        }}> Already have a Account? </button>
      </div>

      

    </div>
  )
}

export default Register