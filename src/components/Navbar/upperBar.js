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
    const [selectedIcon, setSelectedIcon] = useState()

    return (
        <section class="flex flex-row bg-white w-[]">
            <div class="mt-[45px] ml-[60px] mr-[5px] pl-[2px] pr-[2px]">
                <div class="border-[1px] border-gray-300 rounded-[50px] pb-[2px] px-[2px] hover:shadow-lg hover:scale-105 hover:cursor-pointer"
                onClick={scrolll}><KeyboardArrowLeftIcon />
                </div>
            </div>
            <div className={`category flex w-[1100px] overflow-scroll scrollbar-hide mt-[0px] scroll-smooth`}>
                {Type.map((category, index) => (
                    <div class="">
                        <button class="hover:cursor-default h-[110px]">
                            <div className={`flex flex-col text-[12px] font-medium  font-poppins border-gray-300  py-[11px] mt-[15px] ${category.title === selectedCategory ? "border-b-2 border-purple-500" : "hover:border-b-2"}  ${index === 0 ? "ml-[6px] mr-[22px]" : "mx-[22px]"} hover:cursor-pointer `}
                                onClick={() => (setSelectedCategory(category.title), setSelectedIcon(category.image))}>
                                <img src={category.image} class={`${category.image === selectedIcon ? "text-purple-700" : "text-gray-500"}
                             mb-[8px] h-[24px] w-[24px] justify-center mx-auto`} />
                                <span class={`${category.title === selectedCategory ? "text-purple-700" : "text-gray-700"} truncate `}>{category.title}</span>
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