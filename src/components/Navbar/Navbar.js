import React, { useState } from 'react'
import { Link } from '@mui/material'
import logo from "./images/logo.png"
import side from "./images/user-3296.svg"
import side2 from "./images/three-horizontal-lines-icon.svg"
import world from "./images/earth-globe.png"
import Popup from './Popup'
import StayPopup from './StayPopup'
import DateSelector1 from './DateSelector1'



export const Navbar = ({ setShowLogInPage }) => {

       const [Toggle, setToggle] = useState(false)

       const [category, setCategory] = useState("")


       const NavContent = [
              { Title: "Stays" },
              { Title: "Experiences" },
              { Title: "Online Experiences" }
       ]


       return (
              <div class="">
                     <div class="flex flex-row justify-between pt-[20px] bg-white text-align border-b-[1px]  pb-[18px]">
                            <Link href='/' underline='none'>
                                   <div class="flex flex-row pl-[85px] ">
                                          <div class=" h-10 w-10 pt-[4px]"><img src={logo} alt='logo' /></div>
                                          <div class="ml-[2px] text-purple-800 font-poppins font-bold tracking-wide text-2xl pt-[8px]">HouSEE</div>
                                   </div>
                            </Link>

                             {/* <button>
                                   <DateSelector1/> 
                            </button> */}
                            <div class="flex flex-col">
                            <div class="flex flex-row space-x-8 font-poppins mt-[12px] m-auto">
                                   {NavContent.map((Nav, index) => (
                                   <div onClick={() => (setCategory(Nav.Title))}>
                                          <span class={` pb-[4px]  hover:cursor-pointer ${Nav.Title === category ? "text-black border-b-[2px] border-black" : "text-gray-700 hover:border-b-[2px] hover:border-gray-400 hover:text-gray-400"}`}>
                                          {Nav.Title}
                                          </span>
                                   </div>))}
                            </div>

                           <div>
                                   <StayPopup/>
                            </div>
                            </div> 
                            



                            <div class="flex flex-row">
                                   <div >
                                          <button class="mt-[12px] mr-[20px] shadow-xl">
                                                 <img src={world} class="h-[17px] w-[17px]" />
                                          </button>
                                   </div>

                                   <div>
                                          <button class="border-[1px] rounded-l-[42px] rounded-r-[42px] border-gray-300 mr-[80px] p-[4px] shadow-sm hover:shadow-xl transition-shadow"
                                                 onClick={() => {
                                                        setToggle((prev) => !prev)
                                                 }}>
                                                 <div className='flex flex-row'>
                                                        <img src={side2} class="h-[12px] w-[14px] mt-[9px] mr-[14px] ml-[10px]" />
                                                        <img src={side} class="h-[30px] w-[30px] pb-[0px]" />
                                                 </div>
                                          </button>
                                   </div>
                            </div>
                            <Popup
                                   Toggle={Toggle}
                                   setToggle={setToggle}
                                   setShowLogInPage={setShowLogInPage} />
                     </div>

              </div>

       )
}

export default Navbar