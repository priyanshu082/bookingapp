import React from 'react'
import Navbar from './Navbar/Navbar'
import Calendar from "react-calendar"

export const Community = () => {
  return (
    <div>
       <div>
                <Navbar />
            </div>
            <div class="h-[200px] w-[500px] bg-yellow-300 p-[100px]">
              <Calendar/>
              
            </div>
    </div>
  )
}

export default Community