import React from 'react'

type prop = { id:string,img:string,name:string,total:number};

export default function TopDangerWidget({id,img,name,total}:prop) {
    return (
        <div key={id} className='bg-gradient-to-b from-primary-500 p-3 rounded-xl text-center flex flex-col gap-3 font-Poppins'>
            <img className='max-w-[80px] h-auto rounded-xl' src={img} alt="" />
            <p className='font-bold text-white'>{name}</p>
            <p className='text-secondary-500'>{total}</p>
        </div>
    )
}
