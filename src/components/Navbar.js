import React, { useState } from 'react'
import { Link } from '@mui/material'
import logo from "../logo.png"
import SearchIcon from "../images/icons8-search (1).svg"
import side from "../images/user-3296.svg"
import side2 from "../images/three-horizontal-lines-icon.svg"



export const Navbar = () => {

       const [Toggle, setToggle] = useState(false)


       return (
              <div>
                     <div class="flex flex-row justify-between mt-[20px] bg-white  text-align border-b-[1px] pb-[18px]">
                            <Link href='/' underline='none'>
                                   <div class="flex flex-row pl-[85px] ">
                                          <div class=" h-10 w-10 pt-[4px]"><img src={logo} alt='logo' /></div>
                                          <div class="ml-[2px] text-purple-800 font-poppins font-bold tracking-wide text-2xl pt-[8px]">HouSEE</div>
                                   </div>
                            </Link>

                            <div class="border-[1px] rounded-r-[30px] rounded-l-[30px] pt-[10px] pl-[16px] pr-[8px] pb-[4px] mr-[100px] border-gray-300 font-poppins shadow-md hover:shadow-lg transition-shadow ">
                                   <div class="flex font-poppins  space-x-3 justify-center">
                                          <div>
                                                 <button className='text-sm font-bold'>Anywhere</button>
                                          </div>
                                          <span class="text-gray-300 text-2xl">|</span>
                                          <div>
                                                 <button className='text-sm font-bold'>Any week</button>
                                          </div>
                                          <span class="text-gray-300 text-2xl">|</span>
                                          <div class="flex flex-row hover:cursor-pointer">
                                                 <input
                                                        placeholder='Add guests'
                                                        class=" placeholder:font-poppins w-[100px] h-[25px] focus:outline-none placeholder:text-sm" />
                                                 <img src={SearchIcon} class="rounded-3xl h-[28px] w-[28px] " />
                                          </div>
                                   </div>
                            </div>
                            
                                   <button class="border-[1px] rounded-l-[35px] rounded-r-[35px] border-gray-200 mr-[50px] px-[6px] shadow-sm hover:shadow-xl transition-shadow"
                                          onClick={() => {
                                                 setToggle((prev) => !prev)
                                          }}>
                                          <div className='flex flex-row'>
                                                 <img src={side2} class="h-[12px] w-[14px] mt-[10px] mr-[20px] ml-[10px]" />
                                                 <img src={side} class="h-[30px] w-[30px]  " />
                                          </div>
                                          <div>

                                          </div>
                                   </button>
                     </div>

              </div>

       )
}

export default Navbar