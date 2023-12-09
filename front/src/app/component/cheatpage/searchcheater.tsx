import React from 'react'
import { Icon } from '@iconify/react';
import CheatList from './cheatlist';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchCheater() {

    const [list,setList] = useState([])
    const fetchData = async () => {

        const headers = {
          'Content-Type': 'application/json'
        };
        const response = await axios.get(`https://66bhg8s9-8080.asse.devtunnels.ms/api/scammers/top-9`, { headers });
        setList(response.data.scammers)
        console.log()
    
      }
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className='w-[80%] h-auto mx-auto flex flex-col gap-10 '>
            <div className='w-full min-h-[300px] bg-secondary-800 rounded-xl'></div>
            <div className='w-full flex flex-row items-center justify-between mb-10'>
                <div className='w-[80%] flex flex-row items-center'>
                    <input type="text" name="" id="" className="input input-ghost w-[70%] text-white focus:bg-secondary-900 focus:border-primary-500 focus:text-white rounded-xl absolute indent-8" placeholder='กรอกข้อมูลที่ต้องการค้นหา....' />
                    <Icon className='relative w-12 text-[#667085]' icon="mingcute:search-line" width="25" />
                </div>
                <div className='w-[12%] flex justify-end'>
                    <button className='btn btn-primary w-full text-white'>ค้นหา</button>
                </div>
            </div>
            <div className='mx-auto w-[20%]'>
                <button className='btn btn-primary px-3 text-white w-full'> แจ้งรายชื่อผู้โกง </button>
            </div>
            <div className=' grid grid-cols-2 grid-flow-row gap-5 mb-10'>
                {list.map((e: any) => {
                    return (
                        <CheatList id={e} tag={e} name={e} />
                    )
                })}

            </div>
        </div>
    )
}
