import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

type prop = { id: number, firstName: string ,tags: any[],img: string,lastName:string,gender: string,thaiId: string,totalScammedAmount: number};

export default function CheatList({id,firstName,tags,img,lastName,gender,totalScammedAmount,thaiId}:prop) {
    return (
        <div className='w-full h-auto rounded-xl bg-[#2C353D] p-[5%] flex flex-row gap-5 font-Poppins' key={id}>
            <img className='aspect-square w-56 h-auto rounded-xl' src={img} alt="" />
            <div className=' flex flex-col justify-between w-full gap-10'>
                <p className='text-white text-2xl font-semibold'>{firstName+' '+lastName}</p>
                <div className='flex flex-col gap-5 '>
                    <div className='flex flex-row gap-5 text-white items-center'>
                        <span className='flex flex-row gap-2 text-slate-400 items-center'>
                            <Icon icon="ph:gender-intersex-bold" width="25" />
                            <p>{gender}</p>
                        </span>
                        <span className='flex flex-row gap-2 text-slate-400 items-center'>
                            <Icon icon="ion:card-sharp" width="25" />
                            <p>{thaiId}</p>
                        </span>
                        <span className='flex flex-row  text-slate-400 items-center'>
                            <Icon icon="foundation:dollar" width="25" />
                            <p>{totalScammedAmount.toLocaleString()}</p>
                        </span>
                    </div>
                    <div className='flex flex-row gap-5'>
                        {tags.slice(1,4).map((e: any) => {
                            return (
                                <div className='w-fit rounded-full py-[0.5%] px-[3%] bg-[#1E252B] text-slate-500 text-center' >
                                    {e}
                                </div>
                            )
                        })}

                    </div>
                </div>
                <a href={`/Cheaterslist/${id}`} className="flex flex-row justify-end items-center gap-4 font-bold w-full text-primary-500 hover:text-primary-600"><p>ข้อมูลเพิ่มเติม</p> <Icon icon="majesticons:arrow-right" width="20"/></a>
            </div>
        </div>
    )
}
