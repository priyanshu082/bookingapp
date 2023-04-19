import React from 'react'
import { Link } from '@mui/material'
import logo123 from "../logo123.png"


export const Navbar = () => {
       return (
              <div class="flex flex-row justify-between py-5 bg-gray-950 text-align">
                    <Link href='/' underline='none'>
                     <div class="flex flex-row px-4 ">
                            <div class="h-12 w-12 z-[4]"><img src={logo123} alt='logo'/></div>
                            <div class="ml-2 text-orange-300 font-serif font-bold tracking-wide text-2xl pt-3 z-[4]">Hou</div>
                            <div class="text-orange-400 font-serif font-extrabold tracking-wide text-3xl pt-2 z-[4]">SEE</div>
              {/* <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' /> */}
              <div className='absolute z-[1] w-[30%] h-[30%] rounded-full  white__gradient' />
              <div className='absolute z-[0] w-[30%] h-[30%] -top-10 rounded-full blue__gradient' />
                     </div>
                    </Link>
                     
                     <div>
                            <div class="flex flex-column justify-end pr-16 space-x-3 font-sans pt-2">

                                   <Link href='/' underline="none" sx={{ color: "Black" }}>
                                          <button className='btn'>Find HouSEE</button></Link>
                                   <Link href='/Community' underline="none" sx={{ color: "Black" }}>
                                          <button className='btn'>Community</button></Link>
                                   <Link href='/blog' underline="none" sx={{ color: "Black" }}>
                                          <button className='btn'>Blog</button></Link>
                                   <Link href='/about' underline="none" sx={{ color: "Black" }}>
                                          <button className='btn'>About HouSEE</button></Link>

                            </div>
                     </div>
              </div>

       )
}

export default Navbar