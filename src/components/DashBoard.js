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
    <div className=''>
      <div className='z-50 fixed flex flex-col w-full '>
        <Navbar />
      </div>
      <div className='pt-[80px] fixed z-[10] w-full shadow'>
        <UpperBar />
      </div>
     
      <div className="pt-[200px]">
        <Feed />
      </div>

    </div>
  )
}

export default DashBoard