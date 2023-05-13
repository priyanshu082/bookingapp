import React from 'react'
import Intro from './Intro'
import Right1 from './Right1'
import Register from "./SignUpform"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {

    const Router =useNavigate()


  return (
    <div className='flex flex-row justify-center'>
     <div>
         <div class="pt-[110px]">
            <div className=' form bg-white flex flex-row-reverse justify-between'>
                <div>
                    <Intro />
                    <div class="mt-[50px]">
                        <section class="flex justify-center mb-[10px] pr-[10px] text-2xl font-poppins font-medium text-blue-800">
                            SignUp For New Account
                        </section>
                        <div>
                            <Register />
                        </div>
                    </div>
                </div>

                <div>
                    <Right1 />
                </div>
            </div>
        </div>
    </div>
    <div className='mt-[400px] ml-[20px] bg-purple-500 mb-[230px] pt-[11px] pb-[0px] text-white rounded-[50px] hover:text-purple-600 hover:bg-white hover:scale-105 hover:shadow-purple-600 shadow-xl delay-100 font-poppins text-[17px] font-extrabold hover:cursor-pointer pl-[20px] pr-[10px]'
          onClick={()=>{
            Router("/dashboard")
          }}>
          HouSEE<ArrowForwardIosIcon sx={{fontSize:"35px" ,marginBottom:"4px"}}/>
          </div>
    </div> 
    
  )
}

export default SignupPage