import React from 'react'
import Intro from './Intro'
import Right2 from './Right2'
import Form from "./LogInForm"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {

    const Router =useNavigate()


    return (
        <div className='flex flex-col xl:flex-row pt-[100px]'>
            <div class="pt-[110px]">
            <div className=' form bg-white flex xxsm:flex-col-reverse md:flex-row-reverse justify-around rounded-[50px] z-[10] md:h-[580px] md:p-[21px] xxsm:h-[980px] xxsm:pb-[20px] md:pb-[0px]'>
                <div class=" md:mr-[0px] md:ml-[80px] xxsm:ml-[25%] xxsm:mr-[25%] ">
                    <div class="md:mx-[10px] xxsm:pt-[50px] md:pt-[0px] xxsm:mx-[40%]">
                        <Intro />
                    </div>
                    
                    <div class="mt-[50px] md:ml-[0px] ">
                        <section class="flex justify-center mb-[10px] pr-[10px] text-2xl font-poppins font-medium text-blue-800">
                            Login to Account
                        </section>
                        <div>
                        <Form/>
                        </div>
                    </div>
                   
                </div>

                <div class="">
                    <Right2 />
                </div>
            </div>
        </div>
          <div className=' flex flex-row justify-center align-middle xxsm:mt-[80px] xl:mt-[400px] xl:ml-[20px] bg-purple-500 xl:mb-[230px] pt-[12px] pb-[0px] text-white rounded-[50px] hover:text-purple-600 hover:bg-white hover:scale-105 hover:shadow-purple-600 shadow-xl delay-100 font-poppins text-[18px] font-extrabold hover:cursor-pointer pl-[20px] pr-[10px] xxsm:w-[130px] xxsm:pb-[5px] xxsm:ml-[50%]'
          onClick={()=>{
            Router("/dashboard")
          }}>
            <div class="pt-[5px]">
               HouSEE 
            </div>
          
          <div>
            <ArrowForwardIosIcon sx={{fontSize:"35px" ,marginBottom:"4px"}}/>
          </div>
          </div>
        </div>
        
    )
}

export default LoginPage