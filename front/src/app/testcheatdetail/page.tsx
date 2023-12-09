'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import CheaterData from '../component/cheatdetailpage/cheaterdata'

export default function CheaterDetail() {
    const router = useRouter()
    return (
        <div className='w-full min-h-screen h-auto font-Poppins'>
            <div className=' w-[80%] h-auto mx-auto my-20 flex flex-row items-center gap-5'>
                <button className='btn btn-accent text-secondary-500 ' onClick={() => router.back()} >
                    <Icon icon="majesticons:arrow-left" className='w-[80%] h-auto' width="30" height="30" />
                </button>
                <p className=' font-Poppins font-bold text-white text-xl'>ข้อมูลผู้โกง</p>
            </div>
            <div className='w-[80%] h-auto mx-auto flex flex-col gap-10 max-w-full'>
                <div className='flex flex-row justify-between gap-10'>
                    <div className='basis-4/6 flex flex-row gap-[5%] items-center'>
                        <img className='w-[20%] aspect-square rounded-full' src="/png/profiledanger.png" alt="" />
                        <div className='flex flex-col gap-5'>
                            <p className='text-white text-3xl font-semibold'>ชื่อผู้โกง</p>
                            <p className='text-[#667085]'> จีน , อายุ 16 ปี</p>
                        </div>
                    </div>
                    <div className='basis-2/6 flex justify-end items-center'>
                        <button className='btn btn-primary text-white w-[40%]'>รายงาน</button>
                    </div>
                    
                </div>
                <div className='w-full p-[1%] flex flex-row gap-5 bg-[#2C353D] rounded-xl'>
                    <button className='btn btn-primary text-white'>ประวัติ</button>
                    <button className='btn btn-primary text-white'>รูปภาพหลักฐาน</button>
                </div>
                <CheaterData/>
                <div></div>
            </div>
        </div>
    )
}
