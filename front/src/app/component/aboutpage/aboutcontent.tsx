import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function AboutContent() {
    return (
        <div className='w-[70%] mb-36 mx-auto min-h-screen bg-slate-600 rounded-xl p-[5%] font-Poppins '>
            <div className=' flex flex-row justify-center items-center'>
                <img src="/png/logo.png" alt="" />
                <p className='text-white font-Poppins font-bold text-3xl'>Online Health Garden</p>
            </div>
            <div className='font-medium text-base text-white mt-11 leading-10'>
                เว็บนี้เป็นเว็บที่มีแนวคิดที่มาจากการรับมือกับประเด็นการฉ้อโกงทางออนไลน์ในปัจจุบัน
                ที่มีมากขึ้นทุกวันผู้บริโภคและผู้ใช้อินเทอร์เน็ตต้องเผชิญกับการทุจริตออนไลน์และการละเมิดส่วนบุคคล
                หลากหลายรูปแบบแนวคิดหลักของโครงงานนี้คือการจัดตั้งแพลตฟอร์มเพื่อรับเรื่องร้องทุกข์หรือแชร์
                ประสบการที่เกี่ยวกับการโจรกรรมทางออนไลน์โดยการรับเรื่องร้องทุกข์ที่แสดงออกมาจากผู้ใช้
                อินเทอร์เน็ต

                เว็บนี้จะเริ่มต้นด้วยการเก็บข้อมูลและศึกษาการโจรกรรมทางออนไลน์ที่มีอยู่ภายในเว็บของเราจะให้
                ผู้ใช้งานมาเเจ้งคนที่ควรระวังเพื่อให้คนอื่นได้รับรู้ว่าควรหลีกเลี่ยงใครบ้างเเละเราก็จะมีอีกหน้านึงที่สร้าง
                ขึ้นมาเพื่อแสดงให้ดูว่าคนที่แสดงอยู่ในหน้านี้เป็นคนที่เชื่อถือได้
            </div>
            <div className='flex flex-row mt-11 gap-14'>
                <div className=''><img className='rounded-xl' src="/png/map.png" alt="" /></div>
                <div className=' flex flex-col justify-between py-10'>
                    <p className=' font-bold text-3xl text-white'>ที่อยู่</p>
                    <div className=' flex flex-row items-center gap-4'>
                        <Icon className='text-primary-500' icon="mdi:address-marker" width="30" />
                        <p className=' font-medium text-base text-white'>
                            ที่อยู่
                            Bangkok university 9/1 หมู่ที่ 5 ถ. พหลโยธิน
                            ตำบล คลองหนึ่ง อำเภอคลองหลวง ปทุมธานี 12120
                        </p>
                    </div>
                    <div className=' flex flex-row items-center gap-4'>
                        <Icon className='text-primary-500' icon="ic:baseline-phone"  width="30" />
                        <p className=' font-medium text-base text-white'>Tel 111-111-1111</p>
                    </div>
                    <div className=' flex flex-row items-center gap-4'>
                        <Icon className='text-primary-500'  icon="ic:baseline-email" width="30" />
                        <p className=' font-medium text-basel text-white'>Email.....@bumail.com</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
