import { Typography } from '@mui/material'
import React, { useState } from 'react'
// import { useState } from 'react'
import Form from './LogInForm'
import Bar from './Bar'
import rightpik from "../rightpik.avif"
import Register from './Register'
import Intro from './Intro'



export const Login = () => {

    // const [Login, setLogin] = useState(false)

    // function login() {
    //     setLogin(true)
    // }

    return (
        <div className='form bg-gray-900  flex flex-row justify-between'>
            <div class="border-r-2 border-orange-300 h-[560px] pr-4">
                <Intro />
                <div class="pl-[35px]">
                    <Bar />
                </div>
            </div>

            <div>
                <img src={rightpik} alt="pik" class=" rightimg h-[560px] w-[530px] " />
            </div>

        </div>

    )
}

export default Login