import React, { useEffect,useState } from 'react'
import UpperBar from './upperBar'
import Navbar from './Navbar'
import Feed from './Feed'
import {fetchFromAPI } from '../utils/fetchFromAPI'


export const DashBoard = () => {

  const [info, setInfo] = useState([])

useEffect(()=>{
  fetchFromAPI(``).then((data)=>setInfo(data.items))
},[info])

console.log(info)

// const [ShowLogInPage, setShowLogInPage] = useState(false)


  return (
    <div>
      <div >
      <div class="z=[25]">
      
      </div>
        <Navbar/>
        {/* ShowLogInPage={ShowLogInPage}
        setShowLogInPage={setShowLogInPage} */}
        <UpperBar/>
        {/* {ShowLogInPage ? <LoginPage/> : "" } */}
      </div>
      
    <div>
      <Feed/>
    </div>
    <div>
     
    </div>
    </div>
  )
}

export default DashBoard