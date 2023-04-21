import React from 'react'
import { useState } from 'react'
import Register from './Register'
import Form from './LogInForm'



export const Bar = () => {

 const [Login, setLogin] = useState(false)
 const [Sign, setSign] = useState(true)
 const [bitch, setBitch] = useState(false)

 function isLogin (){
   setLogin(!Login)
   setSign(!Sign)
  }

//  function isSign (){
//   setSign(!Sign)
//   }

//   function iswitch(){
//     setBitch(!bitch)
//   }
  

  return (
    <div>
      <div className='pt-6 flex justify-between w-[250px] pb-5'>
       <button className='btn-3'
        onClick={isLogin}
       >
            Register
        </button>
       <button className='btn-3'
          onClick={isLogin}
          >
           Login
        </button>
        <span class="b"/>
      </div>
      
        {Sign && <Register/>} 
        {Login && <Form/>} 


    </div>
  )
}

export default Bar