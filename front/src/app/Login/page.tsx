"use client"
import React from 'react'
import Footer from '../component/footer/footer'
import { Icon } from '@iconify/react';

export default function Login() {


    return (
        <div className='w-full min-h-screen h-auto'>
            <div className=' w-[80%] h-auto mx-auto my-20 flex flex-row items-center gap-5'>
                <a href='/' className='btn btn-accent text-secondary-500 '>
                    <Icon icon="majesticons:arrow-left" className='w-[80%] h-auto' width="30" height="30" />
                </a>
                <p className=' font-Poppins font-bold text-white text-xl'>ลงชื่อเข้าใช้</p>
            </div>
            <div className='w-[60%] h-auto mx-auto bg-slate-600 rounded-xl mb-32 font-Poppins p-[5%]'>
                <div className=' flex flex-row justify-center items-center'>
                    <img src="/png/logo.png" alt="" />
                    <p className='text-white font-Poppins font-bold text-3xl'>Online Health Garden</p>
                </div>
                <p className='font-bold text-3xl mt-20 text-white'>ลงชื่อเข้าใช้</p>
                <div className='flex flex-col gap-9 w-full mt-10'>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ชื่อผู้ใช้</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อผู้ใช้ของคุณ....' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>รหัสผ่าน</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รหัสผ่านของคุณ....' />
                        <div className='w-full gap-4 font-Poppins flex flex-row'>
                            <input type="checkbox" className="checkbox checkbox-secondary " />
                            <p className='font-medium text-base text-white'>จดจำรหัสผ่าน</p>
                        </div>
                    </div>
                    <div className='w-full flex justify-between p-5'>
                        <div className='flex flex-row items-center gap-3'>
                            <p className='font-medium text-base text-white'>คุณไม่มีบัญชีผู้ใช้ ?</p>
                            <a href="/Register" className='font-bold text-lg text-primary-500'>สมัครสมาชิก</a>
                        </div>
                        <button className='btn btn-primary text-white btn-lg'>ลงชื่อเข้าใช้</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
