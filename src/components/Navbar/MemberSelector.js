import React from 'react'
import { useState } from 'react';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


export const MemberSelector = () => {

    const [adult, setAdult] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    const [pets, setPets] = useState(0)

    // console.log(adult)

  return (
    <div className='memberSelector flex flex-col ml-[380px] bg-white w-[55%] px-[30px] pt-[20px] mt-[15px] rounded-[30px] font-poppins text-[16px] font-semibold text-gray-700'>
        <div className='flex flex-row space-x-2 justify-between border-b-[1px] py-[0px] pb-[20px]'>
            <div>
                <div>
                 Adults
            </div>
            <div className='font-medium text-gray-400 text-[14px]'>
                Ages 13 or Above
            </div>
            </div>
            
            <div className='flex flex-row justify-between w-[35%] mr-[10px] pt-[8px]'>
            <div 
            onClick={()=>{
                if(adult>=1){
                    setAdult((p)=>p-1)
                }
                else{
                    setAdult(0)
                }
            }}>
                <RemoveCircleOutlineOutlinedIcon className={`${adult===0 ? "text-gray-200" : "text-gray-500"}`} sx={{fontSize:"30px"}}/>
            </div>
            <div className="space-x-2 mt-[2px]">
                {adult}
            </div>
            <div className='rounded-[100%]'
             onClick={()=>{
                setAdult((p)=>p+1)
             }}>
                 <AddCircleOutlineOutlinedIcon className='text-gray-500' sx={{fontSize:"30px"}}/>
            </div>
            </div>
        </div>





        <div className='flex flex-row space-x-2 justify-between border-b-[1px] pb-[20px] py-[15px]'>
            <div>
                <div>
                 Children
            </div>
            <div className='font-medium text-gray-400 text-[14px]'>
                Ages 2-12
            </div>
            </div>
            
            <div className='flex flex-row justify-between w-[35%] mr-[10px] pt-[8px]'>
            <div 
            onClick={()=>{
                if(children>=1){
                    setChildren((p)=>p-1)
                }
                else{
                    setChildren(0)
                }
            }}>
                <RemoveCircleOutlineOutlinedIcon className={`${ children === 0 ? "text-gray-200" : "text-gray-500"}`} sx={{ fontSize:"30px" }}/>
            </div>
            <div className="space-x-2 mt-[2px]">
                {children}
            </div>
            <div className='rounded-[100%]'
             onClick={()=>{
                setChildren((p)=>p+1)
             }}
            >
                 <AddCircleOutlineOutlinedIcon className='text-gray-500' sx={{fontSize:"30px"}}/>
            </div>
            </div>
        </div>





        <div className='flex flex-row space-x-2 justify-between border-b-[1px] pb-[20px] py-[15px]'>
            <div>
                <div>
                Infants
            </div>
            <div className='font-medium text-gray-400 text-[14px]'>
                Under 2
            </div>
            </div>
            
            <div className='flex flex-row justify-between w-[35%] mr-[10px] pt-[8px]'>
            <div 
            onClick={()=>{
                if(infants>=1){
                    setInfants((p)=>p-1)
                }
                else{
                    setInfants(0)
                }
            }}>
                <RemoveCircleOutlineOutlinedIcon className={`${infants===0 ? "text-gray-200" : "text-gray-500"}`} sx={{fontSize:"30px" }}/>
            </div>
            <div className="space-x-2 mt-[2px]">
                {infants}
            </div>
            <div className='rounded-[100%]'
             onClick={()=>{
                setInfants((p)=>p+1)
             }}
            >
                 <AddCircleOutlineOutlinedIcon className='text-gray-500' sx={{fontSize:"30px" }}/>
            </div>
            </div>
        </div>




        <div className='flex flex-row space-x-2 justify-between pb-[30px] py-[15px]'>
            <div>
                <div>
                 Pets
            </div>
            <div className='font-medium text-gray-400 text-[14px] underline hover:cursor-pointer hover:text-black'>
                Bringing a service animal?
            </div>
            </div>
            
            <div className='flex flex-row justify-between w-[35%] mr-[10px] pt-[8px]'>
            <div 
            onClick={()=>{
                if(pets>=1){
                    setPets((p)=>p-1)
                }
                else{
                    setPets(0)
                }
            }}>
                <RemoveCircleOutlineOutlinedIcon className={`${pets===0 ? "text-gray-200" : "text-gray-500"}`} sx={{fontSize:"30px" }}/>
            </div>
            <div className="space-x-2 mt-[2px]">
                {pets}
            </div>
            <div className='rounded-[100%]'
             onClick={()=>{
                setPets((p)=>p+1)
             }}
            >
                 <AddCircleOutlineOutlinedIcon className='text-gray-500' sx={{fontSize:"30px",color:"gray" }}/>
            </div>
            </div>
        </div>


    </div>
  )
}

export default MemberSelector