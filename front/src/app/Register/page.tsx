"use client"
import React from 'react'
import Footer from '../component/footer/footer'
import { Icon } from '@iconify/react';

export default function Register() {
    

    return (
        <div className='w-full min-h-screen h-auto'>
           <div className=' w-[80%] h-auto mx-auto my-20 flex flex-row items-center gap-5'>
                <a href='/Login' className='btn btn-accent text-secondary-500 '>
                    <Icon icon="majesticons:arrow-left" className='w-[80%] h-auto' width="30" height="30"/>
                </a>
                <p className=' font-Poppins font-bold text-white text-xl'>สมัครสมาชิก</p>
           </div>
            <div className='w-[80%] h-auto mx-auto bg-slate-600 rounded-xl mb-32 font-Poppins p-[5%]'>
                <p className=' font-bold text-3xl text-white'>สมัครสมาชิก</p>
                <div className='flex flex-col gap-9 w-full mt-16'>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ชื่อผู้ใช้</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อผู้ใช้ของคุณ....' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>รหัสผ่าน</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รหัสผ่านของคุณ....' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ที่อยู่</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ที่อยู่ของคุณ....' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>อีเมล</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='อีเมลของคุณ....' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เบอร์มือถือ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='เบอร์มือถือของคุณ....' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ชื่อ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อของคุณ....' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>นามสกุล</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='นามสกุลของคุณ....' />
                    </div>
                    <div className='w-full flex justify-end p-5'>
                        <button className='btn btn-primary text-white btn-lg'>สมัครสมาชิก</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}