import React from 'react'
import Calendar from 'react-calendar'

const Calendar2 = () => {

 const [date2, setDate2] = useState(new Date())

  return (
    <div>
    <div className='react-calendar bg-white rounded-[20px] m-auto'>
    <Calendar onChange={setDate2} value={date2}/>  
    </div>  
    </div>
  )
}

export default Calendar2