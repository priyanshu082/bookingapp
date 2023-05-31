import React , { useState} from 'react'
import Calendar from 'react-calendar'

const Calendar2 = ({setDate2,date2}) => {

//  console.log(date2)

  return (
    
    <div className='react-calendar  rounded-[20px] m-auto bg-green-500'>
    <Calendar onChange={setDate2} value={date2}/>  
    </div>  
  )
  
}

export default Calendar2