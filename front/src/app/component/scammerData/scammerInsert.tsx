import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function ScammerInsert() {
    return (
        <div className='w-full min-h-screen h-auto'>
            <div className='w-[80%] h-auto mx-auto bg-slate-600 rounded-xl mb-32 font-Poppins p-[5%]'>
                <p className=' font-bold text-3xl text-white'>แจ้งผู้ขายที่ควรระวัง</p>
                <div className=' grid grid-cols-2 grid-flow-row gap-8 mt-10'>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ชื่อคนขาย </p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ชื่อคนขาย...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>นามสกุล</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='นามสกุลคนขาย...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เพศ</p>
                        <select className="select select-ghost w-full focus:bg-secondary-800 focus:text-white text-slate-400 text-base" >
                            <option disabled selected>เพศ</option>
                            <option>หญิง</option>
                            <option>ชาย</option>
                            <option>อื่นๆ</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>สินค้าที่โกง</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รายละเอียดเพิ่มเติม...' />
                    </div>
                    <div className='col-span-2 w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เลขบัตรประชาชนคนขาย </p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='เลขบัตรประชาชนคนขาย...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>เลขบัญชี</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='เลขบัญชี...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ธนาคาร</p>
                        <select className="select select-ghost w-full focus:bg-secondary-800 focus:text-white text-slate-400 text-base " >
                            <option disabled selected>เลือกธนาคาร</option>
                            <option>หญิง</option>
                            <option>ชาย</option>
                            <option>อื่นๆ</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ยอดที่โอน</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ยอดที่โอน...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>วันโอนเงิน</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='วันที่โอนเงิน...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>รูปหลักฐาน</p>
                        <input type="file" className="file-input file-input-bordered file-input-secondary w-full bg-slate-500 " />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ใบแจ้งความ</p>
                        <input type="file" className="file-input file-input-bordered file-input-secondary w-full bg-slate-500 " />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>สัญชาติ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='สัญชาติของคุณ...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>ประเทศ</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='ประเทศ...' />
                    </div>
                    <div className='col-span-2 row-span-2 w-full flex flex-col gap-5 font-Poppins'>
                        <p className='font-bold text-xl text-white'>รายละเอียดเพิ่มเติม</p>
                        <input type="text" name="" id="" className="input input-ghost w-full text-white focus:bg-secondary-800 focus:text-white" placeholder='รายละเอียดเพิ่มเติม...' />
                    </div>
                    <div className='w-full flex flex-col gap-5 font-Poppins mt-5'>
                        <button className='btn btn-primary w-[30%] text-white'>โพสต์ประกาศ</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
