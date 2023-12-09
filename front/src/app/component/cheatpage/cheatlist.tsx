import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

type prop = { id: number, name: string, tag: any[] };

export default function CheatList({id,tag,name}:prop) {
    return (
        <div className='w-full h-auto rounded-xl bg-[#2C353D] p-[5%] flex flex-row gap-5 font-Poppins' key={id}>
            <img className='aspect-square w-56 h-auto' src="" alt="" />
            <div className=' flex flex-col justify-between w-full gap-10'>
                <p className='text-white text-xl font-semibold'>{name}</p>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row gap-5'>
                        {tag.map((e: any) => {
                            return (
                                <div className='w-fit rounded-full py-[0.5%] px-[3%] bg-[#1E252B] text-slate-500 text-center'>
                                    {e.tag}
                                </div>
                            )
                        })}

                    </div>
                </div>
                <a href={`/${id}`} className="flex flex-row justify-center items-center gap-4 font-bold w-full text-primary-500 hover:text-primary-600"><p>ข้อมูลเพิ่มเติม</p> <Icon icon="majesticons:arrow-right" /></a>
            </div>
        </div>
    )
}
