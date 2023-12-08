import React from 'react'
import { Icon } from '@iconify/react';

type prop = { id:string,title:string,date:string};

export default function NewsWidget({id,title,date}:prop) {

    return (
        <div key={id} className="card bg-[#2C353D] shadow-xl w-full ">
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-slate-400'>วันที่ {date} น.</p>
                <div className="card-actions justify-end text-primary-500 hover:text-primary-600">
                    <button className="flex flex-row justify-center items-center gap-4"><p>ข้อมูลเพิ่มเติม</p> <Icon icon="majesticons:arrow-right" /></button>
                </div>
            </div>
        </div>
        
    )
}
