import React from 'react'
import { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Type from "../../JSON Files/icon.json"

export const UpperBar = () => {

    const scrolll = () => {
     var left = document.querySelector(".category");
     left.scrollBy(-500,0)
    }
   
    const scrollR = () => {
     var Right = document.querySelector(".category");
     Right.scrollBy(500,0)
    }

    const [selectedCategory, setSelectedCategory] = useState("")
    

    return (
        <section class="flex flex-row bg-white shadow-inner">
            <div class="mt-[40px] ml-[60px] mr-[5px] pl-[2px] pr-[2px]">
                <div class="border-[1px] border-gray-300 rounded-[50px] pb-[0px] px-[2px] hover:shadow-lg hover:scale-105 hover:cursor-pointer"
                onClick={scrolll}><KeyboardArrowLeftIcon/>
                </div>
            </div>
            <div className={`category flex w-[1200px] overflow-scroll scrollbar-hide scroll-smooth`}>
                {Type.map((category, index) => (
                    <div class="">
                        <button class="hover:cursor-default h-[100px]">
                            <div className={`flex flex-col text-[12px] font-medium  font-poppins border-gray-300  py-[11px] mt-[15px] ${category.title === selectedCategory ? "border-b-2 border-purple-500" : "hover:border-b-2"}  ${index === 0 ? "ml-[6px] mr-[22px]" : "mx-[22px]"} hover:cursor-pointer `}
                                onClick={() => (setSelectedCategory(category.title))}>
                                <img src={category.image} alt='Icon' class={`mb-[8px] h-[24px] w-[24px] justify-center mx-auto`}/>
                                <span class={`truncate`}>{category.title}</span>
                            </div>
                        </button>
                    </div>
                )
                )}
            </div>
            <div class="mt-[43px]  mb-[20px] ml-[5px] rounded-[40px]  z-3 "
            >
                <div class="border-[1px] border-gray-300 rounded-[50px] mt-[0px] ml-[10px] pl-[2px] pr-[2px] pb-[2px] hover:shadow-lg hover:scale-105 hover:cursor-pointer" onClick={scrollR}><KeyboardArrowRightIcon />
                </div>
            </div>
        </section>

    )
}

export default UpperBar;