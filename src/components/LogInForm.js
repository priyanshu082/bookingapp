import React from 'react'
// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Box } from '@mui/material'

 export const Form = () => {

    const schema =yup.object().shape({
        Gmail:yup.string().email().required(),
        password:yup.string().required()
    })
    const{register ,handleSubmit,formState:{errors}}= useForm({
        resolver:yupResolver(schema)
    })

    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    <div class=" text-black">
        <div class="border-t-[1px] max-w-[210px] border-orange-300 pb-[20px]"/>
        
                <form onSubmit={handleSubmit(onSubmit)}>   {/* wont understand this logic */} 
                
                <label class="text-orange-300 text-lg">
                    Gmail:
                   </label>
                   <Box>
                    <input
                        placeholder='Enter you Gmail'
                        type="text"
                        // value={Gmail}
                        // onChange={(e) => setGmail(e.target.value)}
                        {...register("Gmail")}
                        class="w-[280px] h-[29px] rounded-[8px] bg-teal-100 p-2"
                    />
                    <p class="text-[15px] text-red-500">{errors.Gmail?.message}</p>
                   </Box>
                    
                   <br/>
                   <label class="text-orange-300 text-lg">
                    Password:
                   </label>
                   <Box><input
                        placeholder='Password'
                        type="password"
                        // value={Password}
                        // onChange={(e) => setPassword(e.target.value)}
                        {...register("password")}
                        class="w-[280px] h-[29px] rounded-[8px] bg-teal-100 p-2"
                    />
                     <p class="text-[15px] text-red-500">{errors.password?.message}</p></Box>
                     <br/>
                    <button className='btn-2 w-[280px] hover:bg-orange-200 font-serif font-extrabold'>Login</button>
                </form>
                
                <div class="text-green-200 pt-5"> Don't have an account? <button class="hover:underline text-blue-500 hover:text-red-500 hover:cursor-pointer">Click here</button></div>
    </div>
  )
}

export default Form