import React, { useState } from 'react'
import Form from './LogInForm'
import Register from './Register'
import Intro from './Intro'
import Right1 from './Right1'
import Right2 from './Right2'


export const SecondPage = () => {

    const [Witch, setWitch] = useState("Register")
    const [Login, setLogin] = useState(false)
    const [Sign, setSign] = useState(true)
    

    

    // const [Login, setLogin] = useState(false)

    // function login() {
    //     setLogin(true)
    // }

    return (
        <div className='form bg-gray-900  flex flex-row justify-between'>
            <div class="border-r-2 border-orange-300 h-[565px] pr-8">
                <Intro />
                <div class="pl-[40px]">
                    <div>
                        <div className='pt-6 flex justify-between w-[250px] pb-5'>
                            <button className='btn-3'
                                onClick={() => {
                                    setWitch("Register")
                                }}
                            >
                                Register
                            </button>
                            <button className='btn-3'
                                onClick={() => {
                                    setWitch("LogIn")
                                }}
                            >
                                Login
                            </button>
                            <span class="b" />
                        </div>
                        <div class="">
                            {Witch === "Register" ? <Register /> : <Form />}
                        </div>

                    </div>
                </div>
            </div>
            <div>
                {Witch === "Register" ? <Right1 /> : <Right2 />}
            </div>

        </div>

    )
}

export default SecondPage