import React from 'react'
import Categories from '../utils/Constants'
import { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export const UpperBar = () => {

    const [selectedCategory, setSelectedCategory] = useState("Amazing pools")
    const [selectedIcon ,setSelectedIcon] = useState()

    return (
        <section class="flex flex-row">
            <div class="mt-[43px] ml-[70px] z-10 pl-[2px] pr-[2px]">
                <div class="border-[1px] border-gray-300 rounded-[50px] pb-[2px] px-[2px]"><KeyboardArrowLeftIcon/>
                    </div>
            </div>
            <div className={`flex max-w-[1100px] overflow-scroll scrollbar-hide  mt-[25px] scroll-smooth `}>
                {Categories.map((category, index) => (
                    <div class="">
                        <button class="hover:cursor-default h-[80px]">
                            <div className={`flex flex-col text-[12px] font-medium  font-poppins  border-gray-300  pb-[10px] ${category.Name === selectedCategory ? "border-b-2 border-purple-500" : "hover:border-b-2"} pt-[12px]  ${index === 0 ? "ml-[0px]" : "mx-[16px]"} hover:cursor-pointer `}
                                onClick={() =>( setSelectedCategory(category.Name),setSelectedIcon(category.icon))}>
                                <span class={`${category.icon === selectedIcon ? "text-purple-700" : "text-gray-500"}
                             mb-[8px] `}>{category.icon}</span>
                                <span class={`${category.Name === selectedCategory ? "text-purple-700" : "text-gray-500"}  truncate `}>{category.Name}</span>
                            </div>
                        </button>
                    </div>
                )
                )}
            </div>
            <div class="mt-[43px]  mb-[20px] ml-[5px] rounded-[40px]  z-10 "
            >
               <div class="border-[1px] border-gray-300 rounded-[50px] pl-[2px] pr-[2px] pb-[2px]"><KeyboardArrowRightIcon/>
                </div> 
            </div>
        </section>

    )
}

export default UpperBar