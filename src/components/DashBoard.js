import React, { useEffect, useState } from 'react'
import UpperBar from './Navbar/upperBar'
import Navbar from './Navbar/Navbar'
import Feed from './Feed'
import { fetchFromAPI } from '../utils/fetchFromAPI'


export const DashBoard = () => {

  // const [info, setInfo] = useState([])

  // useEffect(()=>{
  //   fetchFromAPI(``).then((data)=>setInfo(data.items))
  // },[info])

  // console.log(info)

  // const [ShowLogInPage, setShowLogInPage] = useState(false)




  return (
    <div className='flex flex-col'>
      <div className='z-50 fixed flex flex-col w-full shadow '>
         <div className=' w-full'>
        <Navbar />
      </div>
      <div className='sticky'>
        <UpperBar />
      </div>
      </div>
     
      <div className="mt-[190px]">
        <Feed />
      </div>

    </div>
  )
}

export default DashBoard