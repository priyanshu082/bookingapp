import React, { useEffect, useState } from 'react'
import UpperBar from './Navbar/upperBar'
import Navbar from './Navbar/Navbar'
import Feed from './Feed'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Calendars from './Navbar/Calendar'
import Calendar2 from './Navbar/Calendar2'


export const DashBoard = () => {

  // const [info, setInfo] = useState([])

  // useEffect(()=>{
  //   fetchFromAPI(``).then((data)=>setInfo(data.items))
  // },[info])

  // console.log(info)

  // const [ShowLogInPage, setShowLogInPage] = useState(false)

  //  const [selectedCat, setSelectedCat] = useState("")


  return (
    <div className=''>
      <div className='z-50 fixed flex flex-col w-full '>
        <Navbar />
      </div>
      <div className='pt-[71px] fixed z-[10] w-full shadow'>
        <UpperBar />
      </div>
     
      <div className="pt-[185px]">
        <Feed />
      </div>
     
      
    </div>
  )
}

export default DashBoard