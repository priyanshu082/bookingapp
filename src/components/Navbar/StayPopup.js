import React from 'react'
import { useState } from 'react'
import SearchIcon from "./images/SearchIcon.svg"
import Calendar2 from './Calendar2'
import Calendars from './Calendar'
import MemberSelector from './MemberSelector'


export const StayPopup = ({ setToggle2 }) => {

  const [categoryStay, setCategoryStay] = useState("")

  // memberselector
  const [adult, setAdult] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [pets, setPets] = useState(0)


  // calendar1 
  const [dates, setDates] = useState(new Date())

  // calendar2
  const [date2, setDate2] = useState(new Date())

  const deleteDate =()=>{
      setDate2("")
      setDates("")
  }

  
  var day =  dates.getDate()
  var Month = dates.getMonth()
  var day2 = date2.getDate()
  var Month2 = date2.getMonth()


  var Guest=adult+children+infants+pets

  if (Month === 0 ) {
    Month = "January"
  }
  if (Month === 1) {
    Month = "Febraury"
  }
  if (Month === 2) {
    Month = "March"
  }
  if (Month === 3) {
    Month = "April"
  }
  if (Month === 4) {
    Month = "May"
  }
  if (Month === 5) {
    Month = "June"
  }
  if (Month === 6) {
    Month = "July"
  }
  if (Month === 7) {
    Month = "August"
  }
  if (Month === 8) {
    Month = "September"
  }
  if (Month === 9) {
    Month = "October"
  }
  if (Month === 10) {
    Month = "November"
  }
  if (Month === 11) {
    Month = "December"
  }



  if (Month2 === 11) {
    Month2 = "December"
  }
  if (Month2 === 10) {
    Month2 = "November"
  }
  if (Month2 === 9) {
    Month2 = "October"
  }
  if (Month2 === 8) {
    Month2 = "September"
  }
  if (Month2 === 7) {
    Month2 = "August"
  }
  if (Month2 === 6) {
    Month2 = "July"
  }
  if (Month2 === 5) {
    Month2 = "June"
  }
  if (Month2 === 4) {
    Month2 = "May"
  }
  if (Month2 === 3) {
    Month2 = "April"
  }
  if (Month2 === 2) {
    Month2 = "March"
  }
  if (Month2 === 1) {
    Month2 = "Febraury"
  }
  if (Month2 === 0) {
    Month2 = "January"
  }




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
            className="focus:outline-none bg-transparent placeholder-gray-500 font-extrabold text-[12px]" />
        </div>





        <div className={`${"Check In" === categoryStay ? 'bg-white shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] scale-105 border-[1px] rounded-[40px]' : "transparent"} w-[15%] p-[12px] pl-[15px] pt-[15px] hover:cursor-pointer`}
          onClick={() => {
            if (categoryStay === "Check In") {
              setCategoryStay("")
            }
            else {
              setCategoryStay("Check In")
            }}}>

          <div>Check In</div>
          <input
            placeholder='Add Dates'
            type='text'
            value={`${day} ${Month}`}
            className="focus:outline-none bg-transparent placeholder-gray-500 font-extrabold text-[12px]" />
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
            value={`${day2} ${Month2}`}
            className="focus:outline-none bg-transparent font-extrabold placeholder-gray-500 text-[12px]" />
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
          <div className='flex flex-col py-[12px] pl-[22px] pt-[15px]'>
            <div>Who</div>
            <input
              placeholder='Add guest'
              type='text'
              value={ Guest===0 ? "" : `${Guest} guest`}
              className="focus:outline-none bg-transparent font-extrabold placeholder-gray-500 text-[12px] w-[85px]" />
          </div>

          <div className='gradient flex flex-row w-[130px] h-[78%] rounded-[40px] p-[14px] m-auto ml-[10px] pt-[16px] pl-[20px]'
           onClick={()=>(setToggle2((prev) => !prev))}
          >
            <div>
              <img src={SearchIcon} alt='pp' className='h-[18px] w-[18px] mr-[10px]' />
            </div>
            <div className='pt-[2px] text-white tracking-wider font-poppins text-[17px] mt-[-5px]'>
              Search
            </div>
          </div>
        </div>




      </div>
      <div className=' mt-[15px] absolute ml-[40px]'>
        {categoryStay=== "Check In" &&  <Calendars setDates={setDates}
        dates={dates}/>}
      </div>
      <div className=' absolute ml-[110px] mt-[15px]'>
      {categoryStay=== "Check Out" &&  <Calendar2 setDate2={setDate2}
      date2={date2}/>}
      </div>
      <div className='absolute '>
        {categoryStay==="Who" && <MemberSelector
        adult={adult}
        setAdult={setAdult}
        children={children}
        setChildren={setChildren}
        infants={infants}
        setInfants={setInfants}
        pets={pets}
        setPets={setPets}/>}
      </div>
     
                                  
    </div>
  )
}

export default StayPopup