import React from 'react'
import Intro from './Intro'
import Right2 from './Right2'
import Register from "../components/SignUpform"

const SignupPage = () => {
  return (
    <div>
         <div class="pt-[110px]">
            <div className=' form bg-white flex flex-row-reverse justify-between'>
                <div>
                    <Intro />
                    <div class="mt-[70px]">
                        <section class="flex justify-center mb-[20px] pr-[30px] text-2xl font-poppins font-medium text-blue-800">
                            Login to your Account
                        </section>
                        <div>
                            <Register />
                        </div>
                    </div>
                </div>

                <div>
                    <Right2 />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupPage