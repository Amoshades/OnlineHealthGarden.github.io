import React from 'react'
import { Icon } from '@iconify/react';

export default function CheaterData() {
    return (
        <div className='w-full flex flex-row gap-5 '>
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
                <div className=' w-full bg-[#2C353D]'>

                </div>
            </div>
        </div>
    )
}
