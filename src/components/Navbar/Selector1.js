import React from 'react'
import SearchIcon from "./images/icons8-search (1).svg"


export const DateSelector1 = () => {
    return (
        <div>
            <div class="border-[1px] rounded-r-[30px] rounded-l-[30px] pt-[8px] pb-[3px] pl-[16px] pr-[8px] border-gray-300 font-poppins shadow-md hover:shadow-lg transition-shadow flex flex-row">

                <div class="flex font-poppins  space-x-3 justify-center">
                    <div>
                        <button className='text-sm font-semibold'>Anywhere</button>
                    </div>
                    <span class="text-gray-300 text-2xl">|</span>
                    <div>
                        <button className='text-sm font-semibold'>Any week</button>
                    </div>
                    <span class="text-gray-300 text-2xl">|</span>
                    <div class="flex flex-row hover:cursor-pointer">
                        <input
                            placeholder='Add guests'
                            class=" placeholder:font-poppins w-[100px] h-[25px] focus:outline-none placeholder:text-sm" />
                        <img src={SearchIcon} alt='Icon' class="rounded-3xl h-[28px] w-[28px] " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelector1