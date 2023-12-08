import React from 'react'

export default function Footer() {
    return (
        <div className='relative bottom-0 w-full h-80 pt-24 bg-[#17212A]'>
            <div className='w-[80%] h-auto mx-auto grid grid-cols-1 divide-y-2 divide-secondary-800 divide-opacity-50'>
                <div className='w-full h-auto flex flex-row justify-between items-center gap-96 mb-8 '>
                    <div className='basis-1/2 flex flex-row items-center'>
                        <img src="/png/logo.png" alt="" />
                        <p className='text-white font-Poppins font-bold text-2xl'>Online Health Garden</p>
                    </div>
                    <div className='basis-1/2 flex flex-row gap-12 justify-end items-center font-Poppins text-secondary-500 font-bold'>
                        <a href="" className='hover:text-primary-500'>ข่าวสาร</a>
                        <a href="" className='hover:text-primary-500'>รายชื่อคนโกง</a>
                        <a href="" className='hover:text-primary-500'>เกี่ยวกับเรา</a>

                    </div>
                </div>
                <div className='pt-8 text-secondary-500 font-Poppins font-semibold text-sm'>
                    © Online Health Garden - Design by Good Student
                </div>
            </div>
        </div>
    )
}
