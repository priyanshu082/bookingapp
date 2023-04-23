import React from 'react'
import { useNavigate } from 'react-router-dom'
import icon from "../images/skip-button.png"

 export const FirstPage = () => {

    const Router= useNavigate()

  return (
    <div>
        <button
        class="btn-4 border rounded-[10px] p-[10px] mt-[300px] ml-[670px] "
    onClick={()=>{
      Router("/secondpage")
    }}>
        <div class="flex flex-row justify-between">
            <h3>Enter</h3> <img src={icon} alt="" class="h-[15px] w-[15px] ml-[5px] pt-[3px]"/>
        </div>
      
    </button></div>
  )
}

export default FirstPage