'use client'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useRouter } from 'next/navigation'
import CheaterData from '@/app/component/cheatdetailpage/cheaterdata'
import { useParams } from 'next/navigation'
import axios from 'axios'

interface ScammerData {
    firstName: string;
    lastName: string;
    nationality: string;
    gender: string;
    thaiId: string;
    bankName: string;
    bankAccount: string;
    country: string;
    avatarPhoto: string;
    totalScammedAmount: number;
}

export default function CheaterDetail() {
    const [detail, setDetail] = useState([])
    const [scammerdata, setScammerdata] = useState<ScammerData | null>(null);
    const [menu, setmenu] = useState(true)
    const router = useRouter()
    const params = useParams()
    const scam_id = params.id

    const fetchData = async () => {
        const headers = {
            'Content-Type': 'application/json'
        };
        const response = await axios.get(`https://66bhg8s9-8080.asse.devtunnels.ms/api/scammers/details/${scam_id}`, { headers });
        setScammerdata(response.data.detail)
        setDetail(response.data.detail.scams)
    }
    useEffect(() => {
        fetchData();
    }, [scam_id])

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
                        <img className='w-[20%] aspect-square rounded-full' src={scammerdata?.avatarPhoto} alt="" />
                        <div className='flex flex-col gap-5'>
                            <p className='text-white text-3xl font-semibold'>{scammerdata?.firstName + ' ' + scammerdata?.lastName}</p>
                            <p className='text-[#667085]'> {scammerdata?.nationality} , อายุ 16 ปี</p>
                        </div>
                    </div>
                    <div className='basis-2/6 flex justify-end items-center'>
                        <button className='btn btn-primary text-white w-[40%]'>รายงาน</button>
                    </div>

                </div>
                <div className='w-full p-[1%] flex flex-row gap-5 bg-[#2C353D] rounded-xl'>
                    <button className={`btn  text-white ${menu ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setmenu(true)}>ประวัติ</button>
                    <button className={`btn btn-primary text-white ${menu ? 'btn-ghost' : 'btn-primary'}`} onClick={() => setmenu(false)}>รูปภาพหลักฐาน</button>
                </div>
                {/* {`hover:text-primary-500 ${pathname === '/Cheaterslist' ? 'text-primary-500' : ''}`} */}

                <div className={`w-full flex flex-col gap-5 ${menu ? '' : 'hidden'}`}>
                    <div className=' w-full bg-[#2C353D] p-[3%] rounded-xl '>
                        <h1 className='font-bold text-white text-lg'>ชื่อผู้โกง ข้อมูล Platform</h1>
                        <div className='w-full grid grid-cols-2 justify-center text-[#667085] mt-5 font-semibold gap-3'>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="ph:gender-intersex-bold" width="25" />
                                <p>เพศ: {scammerdata?.gender}</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="ri:bank-fill" width="25" />
                                <p>ธนาคาร:  {scammerdata?.bankName}</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="ion:card-sharp" width="25" />
                                <p>เลขบัตรประชาชน: {scammerdata?.thaiId}</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="fluent:building-bank-48-filled" width="25" />
                                <p>เลขบัญชี:  {scammerdata?.bankAccount}</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="cib:reverbnation" width="25" />
                                <p>สัญชาติ: {scammerdata?.nationality}</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="material-symbols:flag-outline" width="25" />
                                <p>ประเทศ: {scammerdata?.country}</p>
                            </span>
                            <span className=' flex flex-row gap-3'>
                                <Icon icon="foundation:dollar" width="25" />
                                <p>ยอดรวม: {scammerdata?.totalScammedAmount.toLocaleString()} บาท</p>
                            </span>

                        </div>
                    </div>
                    <div className=' w-full bg-[#2C353D] h-ato rounded-xl flex flex-col '>
                        {detail.map((e: any) => {
                            return (
                                <CheaterData id={e.id} date={e.dateTransfer} name={scammerdata?.firstName + ' ' + scammerdata?.lastName} product={e.product} />
                            )
                        })}
                    </div>
                </div>
                <div className={`w-full grid grid-cols-4 gap-[3%] grid-flow-row ${menu ? 'hidden' : ''}`}>
                    {detail.map((e: any) => {
                        return (
                            <img className='w-full rounded-xl ' src={e.photo} alt="" />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
