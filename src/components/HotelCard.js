import React from 'react'
import property from "../JSON Files/search_property.json"
import starRate from "../images/black-star-icon.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



const HotelCard = () => {

  const scrolll = () => {
    var left = document.querySelector(".hotelPhotoScroll");
    left.scrollBy(300,0)
    console.log(left)
   }

  
   const scrollR = () => {
    var Right = document.querySelector(".hotelPhotoScroll");
    Right.scrollBy(-300,0)
   }

  // var cars =['jump','sff','svfv']

  
  //  for (let j = 0; j < 7 ; j++) {
  //      console.log(property[0].images[j]);
  //   }
  
 

  return (
    <div>
      <div className='flex flex-col max-w-[300px] mb-[20px] mt-[20px] '>
        <div className="relative group hover:scale-105 hover:cursor-pointer ">
          <div className={` absolute ml-[15px] invisible group-hover:visible transition-all ease-in-out hover:scale-110 hover:bg-white  mt-[132px] bg-white bg-opacity-80 rounded-3xl pb-[1px] pr-[1px]`} onClick={scrollR}>
            <KeyboardArrowLeftIcon />
          </div>
          <div className=' absolute ml-[258px] mt-[132px] rounded-3xl pb-[1px] pl-[1px] invisible group-hover:visible transition-all ease-in-out hover:scale-110 hover:bg-white bg-white bg-opacity-80 ' onClick={scrolll}>
            <KeyboardArrowRightIcon />
          </div>
          <div className='absolute ml-[260px] mt-[20px] font-extralight text-white bg-black hover:bg-opacity-50 rounded-[50px] bg-opacity-30 hover:cursor-pointer'>
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className='flex flex-row overflow-scroll scrollbar-hide scroll-smooth hotelPhotoScroll rounded-b-[17px] rounded-t-[17px]'>
            
              {property[0].images.map((image,key)=>(
            <img src={image} alt='Icon'
             className='h-[286px] w-[auto] '/>
               ))}
        
               
          </div>
        </div>

        <div className='pt-[10px] flex flex-col'>
          <div className='flex flex-row justify-between'>
            <span className='font-poppins font-bold text-[15px] mb-[0px]'>
              Wadi Rum , Jordan
            </span>
            <div className='flex fex-row mr-[2px]'>
              <img src={starRate} alt='Icon' className='h-[13px] w-[13px] mr-[4px] mt-[6px]' />
              <span className='mb-[0px] font-light'>4.91</span>
            </div>
          </div>
          <div className='text-gray-500 font-medium flex flex-col text-[14px]'>
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