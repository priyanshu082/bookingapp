import React from 'react'
// import { useState } from 'react'
import { Link, Typography } from '@mui/material'
// import { Stack } from '@mui/material'


export const Navbar = () => {

       // const [selectedCategory,setSelectedCategory] = useState("Find HouSEe")



       return (
              <div class="flex flex-row justify-between py-5 bg-gray-900">
                     <div class="flex flex-row">
                            <img src='../images/1.jpg' alt='logo'/><div class="space-x-1 text-orange-300 font-serif font-bold tracking-wide text-2xl">HouSEE</div>
                     </div>
                     <div>
                            <div class="flex flex-column justify-end pr-16 space-x-3 font-sans">
                                   <button className='btn'>
                                          <Link href='/' underline="none" sx={{ color: "Black" }} >Find HouSEE</Link>
                                   </button>
                                   <button className='btn'>
                                          <Link href='/Community' underline="none" sx={{ color: "Black" }} >Community</Link>
                                   </button>
                                   <button className='btn'>
                                          <Link href='/Blog' underline="none" sx={{ color: "Black" }}>Blog</Link>
                                   </button>
                                   <button className='btn'>
                                          <Link href='/' underline="none" sx={{ color: "Black" }}>About HouSEE</Link>
                                   </button>
                            </div>
                     </div>
              </div>

       )
}

export default Navbar