import React from 'react'
import { useState } from 'react'
import SearchIcon from "./images/SearchIcon.svg"
import Calendar2 from './Calendar2'
import Calendars from './Calendar'
import MemberSelector from './MemberSelector'


export const StayPopup = ({ dates, day, Month, setToggle2, setToggle3 }) => {

  const [categoryStay, setCategoryStay] = useState("")
  const [adult, setAdult] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [pets, setPets] = useState(0)

  // console.log(dates)
  // var day = {dates}

  return (
    <div>
      <div className="flex flex-row w-[750px] mt-[30px] border-[1px] border-gray-300 bg-black bg-opacity-5 rounded-s-[80px] rounded-e-[80px] font-poppins text-[13px] font-extrabold mr-[45px]">

        <div className={`${"Where" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[35%] p-[12px] pl-[30px] pt-[15px] mr-[5px] hover:cursor-pointer`}

          onClick={() => {
            if (categoryStay === "Where") {
              setCategoryStay("")
            }
            else {
              setCategoryStay("Where")
            }
          }}>

          <div>Where</div>
          <input
            placeholder='Search Destinations'
            type='text'
            className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px]" />
        </div>

        <div className={`${"Check In" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[15%] p-[12px] pl-[15px] pt-[15px] hover:cursor-pointer`}

          onClick={() => {
            // (setToggle3((prev)=>!prev))

            if (categoryStay === "Check In") {
              setCategoryStay("")
            }
            else {
              setCategoryStay("Check In")
            }
           
          }}>


          <div>Check In</div>
          <input
            placeholder='Add Dates'
            type='text'
            value={dates === "" ? day : Month}
            className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px]" />
        </div>

        <div className={`${"Check Out" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[15%]  p-[12px] pl-[15px] pt-[15px] hover:cursor-pointer`}
          onClick={() => {
            if (categoryStay === "Check Out") {
              setCategoryStay("")
            }
            else {
              setCategoryStay("Check Out")
            }
          }}>
          <div>Check Out</div>
          <input
            placeholder='Add Dates'
            type='text'
            className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px]" />
        </div>

        <div className={`${"Who" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[35%] pt-[1px] hover:cursor-pointer ml-[5px] flex flex-row `}
          onClick={() => {
            if (categoryStay === "Who") {
              setCategoryStay("")
            }
            else {
              setCategoryStay("Who")
            }
          }}>
          <div className='flex flex-col py-[12px] pl-[15px] pt-[15px]'>
            <div>Who</div>
            <input
              placeholder='Add guest'
              type='text'
              className="focus:outline-none bg-transparent placeholder-gray-500 font-medium text-[12px] w-[85px]" />
          </div>

          <div className='gradient flex flex-row w-[130px] h-[78%] rounded-[40px] p-[14px] m-auto ml-[18px] pt-[16px] pl-[20px]'
           onClick={()=>(setToggle2((prev) => !prev))}
          >
            <div>
              <img src={SearchIcon} alt='pp' className='h-[18px] w-[18px] mr-[7px]' />
            </div>
            <div className='pt-[2px] text-white tracking-wider font-poppins text-[17px] mt-[-5px]'>
              Search
            </div>
          </div>

        </div>
      </div>
      <div className=' mt-[15px] absolute ml-[40px]'>
        {categoryStay=== "Check In" &&  <Calendars/>}
      </div>
      <div className=' absolute ml-[110px] mt-[15px]'>
      {categoryStay=== "Check Out" &&  <Calendar2/>}
      </div>
      <div className='absolute '>
        {categoryStay==="Who" && <MemberSelector
        adult={adult}
        setAdult={setAdult}
        children={children}
        setChildren={setChildren}
        setInfants={setInfants}
        infants={infants}
        pets={pets}
        setPets={setPets}/>}
      </div>
     
                                  
    </div>
  )
}

export default StayPopup