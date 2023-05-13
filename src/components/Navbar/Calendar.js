import React, { useState } from 'react'
import Calendar from 'react-calendar'
import StayPopup from './StayPopup'

export const Calendars = () => {

  const [toggle3, setToggle3] = useState(false)
  const [dates, setDates] = useState(new Date())
  

  var day = dates.getDate()
  var Month = dates.getMonth()


  if (Month === 0) {
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

  //  console.log(dates)

  return (
    <div className={`${!toggle3 ? "visible" : "hidden"} react-calendar bg-white rounded-[20px] m-auto `}>
      <Calendar onChange={setDates} value={dates} />
      {/* <div className='hidden'>
        <StayPopup
          setToggle3={setToggle3}
          dates={dates}
          day={day}
          Month={Month}/>
      </div> */}

    </div>
  )
}

export default Calendars