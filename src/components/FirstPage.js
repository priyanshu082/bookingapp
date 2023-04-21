import { Typography } from '@mui/material'
import React from 'react'
// import { useState } from 'react'
import Form from './LogInForm'
import Bar from './Bar'
import rightpik from "../rightpik.avif"
import Register from './Register'


export const Login = () => {

    return (
        <div className='form bg-gray-900  flex flex-row justify-between'>
            <div class="border-r-2 border-orange-300 h-[560px] pr-4">
                 <div class="text-orange-300 ">
                <Typography variant='h3' sx={{ fontWeight: "bold" }}>
                    Register to HouSEE
                </Typography>
                </div>
                <div class="max-w-[380px] pt-5 pb-4 text-orange-300 ">
                    Join HouSEE You will get the best recommendations for rent house available near you.
            </div>
            <div class="pl-[35px]">
                <Bar/>
                
            <Register/>
            {/* <Form/> */}
            </div>
            </div> 
            <div>
                <img src={rightpik} alt="pik" class=" rightimg h-[560px] w-[530px] "/>
            </div>
             
        </div>

    )
}

export default Login