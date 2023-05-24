import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom'


export const Form = () => {

    const Router=useNavigate()

    const schema = yup.object().shape({
        Gmail: yup.string().email().required("Enter your Username"),
        password: yup.string().required("Enter your Password")
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
                        class="w-[280px] h-[35px] border-b-[1px] border-blue-800 text-xl font-light text-black mr-[20px] placeholder-blue-900 tracking-[2px] focus:outline-none"
                    />
                    <p class="text-[15px] text-red-500">{errors.Gmail?.message}</p>
            
                <br />

                    <input
                    placeholder='Password'
                    type="password"
                    {...register("password")}
                    class="w-[280px] h-[35px] border-b-[1px] border-blue-800 text-xl font-light text-black mr-[20px] placeholder-blue-900 tracking-[1px] mt-[20px] focus:outline-none"
                />
                    <p class="text-[15px] text-red-500">{errors.password?.message}</p>

                <br />
                <section>
                    <button class='btn-2  ml-[53px] mt-[15px] font-poppins text-white py-[8px] px-[45px] text-lg'>Login</button>
                </section>

            </form>
            <div>
                <button class="text-blue-900 mt-[25px] text-sm font-poppins ml-[72px] hover:cursor-pointer hover:underline font-medium"
                onClick={()=>{
                    Router("/signuppage")
                }}> Create Account </button>
            </div>

            <div>
                <button class="text-blue-900 mt-[40px] text-sm font-poppins ml-[66px] hover:cursor-pointer border-b-2 border-blue-900 pb-[2px]">
                    Forgot Password?
                </button>
            </div>

        </div>
    )
}

export default Form