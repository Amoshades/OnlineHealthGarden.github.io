import React from 'react'

export default function Banner() {
    

    return (
        <div className=' w-[80%] mx-auto h-auto flex flex-row gap-36 font-Poppins'>
            <div className='basis-1/2 flex flex-col gap-12 justify-center items-start'>
                <div className='font-Poppins font-bold text-secondary-500'>online health garden</div>
                <div className='text-5xl text-white font-semibold leading-[80px]'>Online Health Garden เว็บไซต์ที่เอาไว้ตรวจสอบหรือแจ้งบุคคลที่ต้องระวังสำหรับการซื้อขายออนไลน์</div>
                <button className='btn btn-primary w-80 text-white'><p>ตรวจสอบ/แจ้งบุคคลอันตรายออนไลน์</p></button>
            </div>
            <div className='basis-1/2 flex justify-center items-center'>
                <div className=' w-[80%] aspect-square mx-auto rounded-full bg-gradient-to-b from-primary-500 flex justify-end pb-5'>
                    <img src="/png/police.png" alt="" />
                </div>
            </div>
        </div>
    )
}
