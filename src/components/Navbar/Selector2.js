import React from 'react'
import StayPopup from './StayPopUpFile/StayPopup'
import { useState } from 'react'


export const DateSelector2 = ({setToggle2}) => {

    const [category, setCategory] = useState("")

    const NavContent = [
        { Title: "Stays" },
        { Title: "Experiences" },
        { Title: "Online Experiences" }
 ]

  return (
    <div>
       <div class="flex flex-col z-[20]">
                            <div class="flex flex-row space-x-8 font-poppins mt-[12px]">
                                   {NavContent.map((Nav, index) => (
                                   <div onClick={() => (setCategory(Nav.Title))}>
                                       
                                          <span class={` pb-[4px]  hover:cursor-pointer ${Nav.Title === category ? "text-black border-b-[2px] border-black" : "text-gray-700 hover:border-b-[2px] hover:border-gray-400 hover:text-gray-400"}`}>
                                          {Nav.Title}
                                          </span>
                                   </div>))}
                            </div>

                            <div>
                                   <StayPopup
                                   setToggle2={setToggle2}/>
                                   
                            </div> 
                            </div> 
    </div>
  )
}

export default DateSelector2