"use client"
import React, { useState } from 'react'
import Footer from '../component/footer/footer'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation'
import { count } from 'console';
import axios from 'axios';

export default function Register() {

    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const postData = async () => {
        const headers = {
            'Content-Type': 'application/json'
        };
        const data = {
            username: username,
            password: password,
            address: address,
            email: email,
            phone: phone,
            firstName: firstName,
            lastName: lastName,
            profilePic: "1.jpg"
        }
        const response = await axios.post(`https://66bhg8s9-8080.asse.devtunnels.ms/api/users/register`, data , { headers });
        console.log(response.data)
        if (response.status == 200) {
            console.log('Register successful:', response.data);
            router.push('/');
        }
    }

    return (
        <div className='w-full min-h-screen h-auto'>
            <div className=' w-[80%] h-auto mx-auto my-20 flex flex-row items-center gap-5'>
                <button className='btn btn-accent text-secondary-500 ' onClick={() => router.back()}>
                    <Icon icon="majesticons:arrow-left" className='w-[80%] h-auto' width="30" height="30" />
                </button>
                <p className=' font-Poppins font-bold text-white text-xl'>สมัครสมาชิก</p>
            </div>
            <div className='w-[80%] h-auto mx-auto bg-slate-600 rounded-xl mb-32 font-Poppins p-[5%] relative z-10'>
                <p className=' font-bold text-3xl text-white'>สมัครสมาชิก</p>
                <div className='flex flex-col gap-9 w-full mt-16'>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ชื่อผู้ใช้</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อผู้ใช้ของคุณ....' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>รหัสผ่าน</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รหัสผ่านของคุณ....' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ที่อยู่</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ที่อยู่ของคุณ....' onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>อีเมล</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='อีเมลของคุณ....' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เบอร์มือถือ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='เบอร์มือถือของคุณ....' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ชื่อ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อของคุณ....' onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>นามสกุล</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='นามสกุลของคุณ....' onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='w-full flex justify-end p-5'>
                        <button className='btn btn-primary text-white btn-lg' onClick={postData}>สมัครสมาชิก</button>
                    </div>
                </div>
            </div>
            <div className=' aspect-square w-[40%] h-auto bg-gradient-to-t from-primary-500 opacity-25 blur-[100px] rounded-full absolute top-40 left-[-10px] z-0'></div>
            <Footer />
        </div>
    )
}
