import React from 'react'
import Calendars from "./Navbar/StayPopUpFile/Calendar"


export const Community = ({faltu}) => {

  console.log(faltu)

  return (
    <div>
      <input
      placeholder='priyaaaaa'
      type='text'
      value={faltu === "" && "priyanshu" }
      />

      {/*  <h1 className='text-black'>{paap.name}</h1>  */}

        
    </div>
  )
}

export default Community