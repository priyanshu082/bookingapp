import React from 'react'
import property from "../JSON Files/search_property.json"
import starRate from "../images/black-star-icon.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const HotelCard = () => {
  return (
    <div>
      <div className='flex flex-col max-w-[300px] ml-[20px]'>
        <div className="relative group">
          <div className="absolute ml-[15px] invisible group-hover:visible transition-all ease-in-out hover:scale-110 duration-200 hover:bg-white  mt-[132px] bg-white bg-opacity-80 rounded-3xl pb-[1px] pr-[1px]">
            <KeyboardArrowLeftIcon />
          </div>
          <div className='absolute ml-[258px] mt-[132px] rounded-3xl pb-[1px] pl-[1px] invisible group-hover:visible transition-all ease-in-out hover:scale-110 duration-200 hover:bg-white bg-white bg-opacity-80 '>
            <KeyboardArrowRightIcon />
          </div>
          <div className='absolute ml-[260px] mt-[20px] font-extralight text-white bg-black hover:bg-opacity-50 rounded-[50px] bg-opacity-30 hover:cursor-pointer'>
            <FavoriteBorderOutlinedIcon />
          </div>
          <img
            src={property[1].images[1]}
            className='h-[286px] w-[auto] rounded-b-[17px] rounded-t-[17px]' />
        </div>

        <div className='pt-[10px] flex flex-col'>
          <div className='flex flex-row justify-between'>
            <span className='font-poppins font-medium mb-[0px]'>
              Wadi Rum Jordan
            </span>
            <div className='flex fex-row mr-[2px]'>
              <img src={starRate} className='h-[13px] w-[13px] mr-[4px] mt-[6px]' />
              <span className='mb-[0px] font-light'>4.91</span>
            </div>
          </div>
          <div className='text-gray-500 font-light flex flex-col text-[15px]'>
            <span>Ocean Views</span>
            <span>27 Nov-2 Dec</span>
          </div>
          <div className='mt-[4px]'>
            <span className=' font-bold text-[14px] '>&#8377;6277 </span> <span>night</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard