import { Box } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

export const Register = () => {

  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter Your Gamil"),
    password1: yup.string().min(6,"Password must have at least 6 characters").max(20).required("Password is must"),
    password2: yup.string().required().oneOf([yup.ref("password1"), null], "Passwords don't Match")

  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div class="border-t-[1px] max-w-[210px] border-orange-300 pb-[15px]" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ paddingTop: "1px" }}>
          <label class='text-orange-300 text-md'>
            Gmail:
          </label>
          <br />
          <input
            placeholder='Enter you Gmail'
            type="text"
            // value={Gmail}
            // onChange={(e) => setGmail(e.target.value)}
            {...register("email")}
            class="w-[280px] h-[29px] rounded-[8px] bg-teal-100 p-2"
          />
          <p class="text-[13px] text-red-500">{errors.email?.message}</p>
        </Box>
        <Box sx={{ paddingTop: "10px" }}>
          <label class='text-orange-300 text-md '>
            Set Password:
          </label>
          <br />
          <input
            placeholder='Enter you Gmail'
            type="password"
            // value={Gmail}
            // onChange={(e) => setGmail(e.target.value)}
            {...register("password1")}
            class="w-[280px] h-[29px] rounded-[8px] bg-teal-100 p-2"
          />
          <p class="text-[13px] text-red-500">{errors.password1?.message}</p>
        </Box>
        <Box sx={{ paddingTop: "10px" }}>
          <label class='text-orange-300 text-md '>
            Confirm Password:
          </label>
          <br />
          <input
            placeholder='Enter you Gmail'
            type="password"
            // value={Gmail}
            // onChange={(e) => setGmail(e.target.value)}
            {...register("password2")}
            class="w-[280px] h-[29px] rounded-[8px] bg-teal-100 p-2"
          />
          <p class="text-[13px] text-red-500">{errors.password2?.message}</p>
        </Box>
        <Box sx={{ paddingTop: "7px" }}>
          <button className='btn-2 w-[280px] hover:bg-orange-200 font-serif'>SignUp</button>
        </Box>
      </form>
      <div class="text-green-200 pt-5">Have an account? <button class="hover:underline text-blue-500 hover:text-red-500 hover:cursor-pointer">Click here</button></div>
    </div>
  )
}

export default Register