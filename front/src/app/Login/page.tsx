"use client"
import React, { useEffect, useState } from 'react'
import Footer from '../component/footer/footer'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { getCookie, setCookie } from 'typescript-cookie'

export default function Login() {

    const router = useRouter()
    const [user, setUsername] = useState('')
    const [pass, setPassword] = useState('')

    const loginActive = async () => {
        const data = {
            grant_type: '',
            username: user,
            password: pass,
            scope: '',
            client_id: '',
            client_secret: ''
          };
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const response = await axios.post(`https://66bhg8s9-8080.asse.devtunnels.ms/api/users/login`, data , { headers });
        if (response.status == 200) {
            console.log('Login successful:', response.data);
            setCookie('access_token', response.data.accessToken);
            router.push('/');
          }
    }

    useEffect(() => {

    }, []);


    return (
        <div className='w-full min-h-screen h-auto'>
            <div className='w-full h-auto relative z-10'>
                <div className=' w-[80%] h-auto mx-auto my-20 flex flex-row items-center gap-5'>
                    <button className='btn btn-accent text-secondary-500 ' onClick={() => router.back()}>
                        <Icon icon="majesticons:arrow-left" className='w-[80%] h-auto' width="30" height="30" />
                    </button >
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
                            <input type="email" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อผู้ใช้ของคุณ....' onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='w-full flex flex-col gap-5 font-Poppins'>
                            <p className='font-bold text-xl text-white'>รหัสผ่าน</p>
                            <input type="password" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รหัสผ่านของคุณ....' onChange={(e) => setPassword(e.target.value)} />
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
                            <button className='btn btn-primary text-white btn-lg' onClick={loginActive}>ลงชื่อเข้าใช้</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' aspect-square w-[20%] h-auto bg-gradient-to-t from-primary-500 opacity-25 blur-[100px] rounded-full absolute top-48 left-[-10px] z-0'></div>
            <Footer />
        </div>
    )
}

