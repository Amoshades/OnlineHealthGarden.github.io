import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function CheatList() {
  return (
    <div className='w-full h-auto rounded-xl bg-[#2C353D] p-[5%] flex flex-row gap-5 font-Poppins'>
        <img className='aspect-square w-56 h-auto' src="" alt="" />
        <div className=' flex flex-col justify-between w-full gap-10'>
            <p className='text-white text-xl font-semibold'>ชื่อคนโกง</p>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-row gap-5 items-center text-white text-lg'>
                    <div className=' flex flex-row gap-3'>
                        <Icon icon="bxl:facebook" width="25" />
                        <p> ชื่อ facebook</p>
                    </div>
                    <div className=' flex flex-row gap-3'>
                        <Icon icon="mingcute:twitter-fill" width="25" />
                        <p> ชื่อ facebook</p>
                    </div>
                    <div className=' flex flex-row gap-3'>
                        <Icon icon="ri:instagram-fill" width="25" />
                        <p> ชื่อ facebook</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='w-fit rounded-full py-[0.5%] px-[3%] bg-[#1E252B] text-slate-500 text-center'>
                        คอลเซ็นเตอร์
                    </div>
                </div>
            </div>
            <a href='' className="flex flex-row justify-center items-center gap-4 font-bold w-full text-primary-500 hover:text-primary-600"><p>ข้อมูลเพิ่มเติม</p> <Icon icon="majesticons:arrow-right" /></a>
        </div>
    </div>
  )
}
