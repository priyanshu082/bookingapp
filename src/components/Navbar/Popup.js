import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Popup = ({Toggle,setShowLogInPage}) => {

    const Router =useNavigate()

  return (
    <div className={`${Toggle ? "flex" : "hidden"} z-[6] p-6  absolute h-[200px] right-0 mx-4  min-w-[140px] w-[230px] border-[1px] border-gray-300 rounded-xl mt-[55px] mr-[50px] bg-white shadow-[10px_20px_30px_-10px_rgba(0,0,50,0.2)]`}>
    <ul>
            <div>
                <div className={`hover:cursor-pointer pb-[10px] font-poppins font-light hover:text-purple-700 text-md tracking-wider`}
                onClick={()=>{
                    Router('/loginpage')
                  }}>LogIn</div>
                <div className={`hover:cursor-pointer pb-[10px] font-poppins font-medium hover:text-purple-700 text-md tracking-wider`}
                onClick={()=>{
                    Router("/signuppage")
                }}>SignUp</div>
                <div className={`hover:cursor-pointer pb-[10px] font-poppins font-light hover:text-purple-700 text-md tracking-wider`}
                onClick={()=>{
                    Router("/community")
                }}>Community</div>
                <div className={`hover:cursor-pointer pb-[10px] font-poppins font-light hover:text-purple-700 text-md tracking-wider`}
                onClick={()=>{
                    Router("/abouthousee")
                }}>About HouSEE</div>
                <div className={`hover:cursor-pointer pb-[10px] font-poppins font-light hover:text-purple-700 text-md tracking-wider`}
                onClick={()=>{
                    Router("/help")
                }}>Help</div>
            </div>
        </ul>
       
    </div>
  )
}

export default Popup