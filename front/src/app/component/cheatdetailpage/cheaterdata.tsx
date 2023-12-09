import React from 'react'
import { Icon } from '@iconify/react';

type prop = { id: number, date: string, name: string, product: string };

export default function CheaterData({ id, date, name, product }: prop) {
    return (

        <div className='w-full h-auto flex flex-row justify-between p-5 text-white font-semibold' key={id}>
            <div>{date}</div>
            <div>{name}</div>
            <div>{product}</div>
        </div>


    )
}
