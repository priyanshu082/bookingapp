import React from 'react'
import { useState } from 'react'
import SearchIcon from "./images/SearchIcon.svg"

export const StayPopup = () => {

    const [categoryStay, setCategoryStay] = useState("")

     const StayContent = [
        {Title:"Where"},
        {Title:"Check in"},
        {Title:"Check out"},
        {Title:"Who"},
     ]

  return ( 
    <div className="flex flex-row w-[750px] mt-[30px] border-[1px] bg-black bg-opacity-10  rounded-s-[80px] rounded-e-[80px] font-poppins text-[11px] font-extrabold">

           <div className={`${"Where" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[35%] p-[12px] pl-[30px] pt-[15px] mr-[5px] hover:cursor-pointer`}
           onClick={()=>(setCategoryStay("Where"))}>
            <div>Where</div>
            <input
            placeholder='Search Destinations'
            type='text'
            className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px]"/>
           </div>
            
           <div className={`${"Check In" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[15%] p-[12px] pl-[15px] pt-[15px] hover:cursor-pointer`}
           onClick={()=>(setCategoryStay("Check In"))}>
            <div>Check In</div>
            <input
            placeholder='Add Dates'
            type='text'
            className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px]"/>
           </div>

           <div className={`${"Check Out" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[15%]  p-[12px] pl-[15px] pt-[15px] hover:cursor-pointer`}
           onClick={()=>(setCategoryStay("Check Out"))}>
            <div>Check Out</div>
            <input
            placeholder='Add Dates'
            type='text'
            className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px]"/>
           </div>

           <div className={`${"Who" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[35%] pt-[1px] hover:cursor-pointer ml-[5px] flex flex-row `}
           onClick={()=>(setCategoryStay("Who"))}>
           <div className='flex flex-col py-[12px] pl-[15px] pt-[15px]'>
             <div>Who</div>
            <input
            placeholder='Add guest'
            type='text'
            className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px]"/>
           </div>

           <div className='flex flex-row bg-purple-600 w-[140px] h-[78%] rounded-[40px] p-[14px] m-auto mr-[15px] ml-[10px]' >
               <div>
                  <img src={SearchIcon} className='h-[18px] w-[18px] mr-[20px] mt-[px]'/> 
               </div>
               <div className='pt-[2px] text-white text-[16px] align-middle mt-[-5px]'>
                   Search
               </div>
           </div>
       
           </div>
           
    </div>
  )
}

export default StayPopup