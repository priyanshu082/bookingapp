import React from 'react'
import UpperBar from './upperBar'
import Navbar from './Navbar'
import Feed from './Feed'

export const DashBoard = () => {
  return (
    <div>
      <div >
        <Navbar/>
        <UpperBar/>
      </div>
      
    <div>
      <Feed/>
    </div>
    
    </div>
  )
}

export default DashBoard