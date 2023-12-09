'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import CheaterData from '@/app/component/cheatdetailpage/cheaterdata'

export default function CheaterDetail() {
    const [detail,setDetail] = useState([])
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
                <div className='w-full flex flex-col gap-5 '>
                    <div className=' w-full bg-[#2C353D] p-[3%] rounded-xl '>
                        <h1 className='font-bold text-white text-lg'>ชื่อผู้โกง ข้อมูล Platform</h1>
                        <div className='w-full grid grid-cols-2 justify-center text-[#667085] mt-5 font-semibold gap-3'>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="ph:gender-intersex-bold" width="25" />
                                <p>เพศ: หญิง</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="ri:bank-fill" width="25" />
                                <p>ธนาคาร:  กรุงเทพ</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="ion:card-sharp" width="25" />
                                <p>เลขบัตรประชาชน: 120XXXXXXXXX</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="fluent:building-bank-48-filled" width="25" />
                                <p>เลขบัญชี:  1111111111</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="cib:reverbnation" width="25" />
                                <p>สัญชาติ: จีน</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="material-symbols:flag-outline" width="25" />
                                <p>ประเทศ: จีน</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="mdi:tag" width="25" />
                                <p>สินค้าที่โกง : นาฬิกา</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="raphael:people" width="25" />
                                <p>โซเชียลมีเดีย: เฟสบุ๊ค  อินสตราแกรม  ทวิตเตอร์</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="foundation:dollar" width="25" />
                                <p>ยอดโอน: 100 บาท</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="mdi:calendar-outline" width="25" />
                                <p>วันที่โอน: 1 มกราคม พ.ศ.2566</p>
                            </span>

                        </div>
                    </div>
                    <div className=' w-full bg-[#2C353D] h-ato rounded-xl flex flex-col '>
                        {detail.map((e: any) => {
                            return (
                                <CheaterData  id={e} date={e} name={e} product={e} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
