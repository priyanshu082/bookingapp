import React, { useState } from 'react'
import Calendar from 'react-calendar'

export const Calendars = ({setDates,dates}) => {
 

  return (
    <div className={` react-calendar bg-white rounded-[20px] m-auto `}>
      <Calendar onChange={setDates} value={dates} />
    </div>
  )
}

export default Calendars