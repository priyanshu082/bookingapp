import React, { useState } from 'react'
import { Link } from '@mui/material'
import logo from "./images/logo.png"
import side from "./images/user-3296.svg"
import side2 from "./images/three-horizontal-lines-icon.svg"
import world from "./images/earth-globe.png"
import Popup from './Popup'
import DateSelector1 from './Selector1'
import DateSelector2 from './Selector2'



export const Navbar = ({ setShowLogInPage }) => {

       const [toggle, setToggle] = useState(false)

       const [toggle2, setToggle2] = useState(false)


       return (
              <div class="">
                     <div class="flex flex-row justify-between pt-[20px] bg-white text-align border-b-[1px]  pb-[18px]">
                            <Link href='/' underline='none'>
                                   <div class="flex flex-row md:ml-[75px] sm:ml-[20px] ">
                                          <div class=" h-10 w-10 pt-[4px]"><img src={logo} alt='logo' /></div>
                                          <div class="ml-[2px] text-purple-800 font-poppins font-bold tracking-wide text-2xl pt-[8px]">HouSEE</div>
                                   </div>
                            </Link>

                            <button onClick={() => { setToggle2((prev) => !prev) }}>
                                   {!toggle2 && <DateSelector1 />}
                            </button>

                            {toggle2 && <DateSelector2
                                   setToggle2={setToggle2} />}


                            <div class="flex flex-row">
                                   <div >
                                          <button class="mt-[12px] mr-[20px] shadow-xl">
                                                 <img src={world} alt='pp' class="h-[17px] w-[17px]" />
                                          </button>
                                   </div>

                                   <div>
                                          <button class="border-[1px] rounded-l-[42px] rounded-r-[42px] border-gray-300 md:mr-[80px] sm:mr-[20px] p-[4px] shadow-sm hover:shadow-xl transition-shadow"
                                                 onClick={() => {
                                                        setToggle((prev) => !prev)
                                                 }}>
                                                 <div className='flex flex-row'>
                                                        <img src={side2} alt='pp' class="h-[12px] w-[14px] mt-[9px] mr-[14px] ml-[10px]" />
                                                        <img src={side} alt='pp' class="h-[30px] w-[30px] pb-[0px]" />
                                                 </div>
                                          </button>
                                   </div>
                            </div>
                            <Popup
                                   toggle={toggle}
                                   setToggle={setToggle}
                                   setShowLogInPage={setShowLogInPage} />
                     </div>

              </div>

       )
}

export default Navbar