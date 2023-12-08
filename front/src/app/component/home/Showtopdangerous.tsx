import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TopDangerWidget from './Topdangerwidget'

export default function ShowTopDangerous() {

  const [topdanger, setTopDanger] = useState([])
  const fetchData = async () => {

    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await axios.get(`https://66bhg8s9-8080.asse.devtunnels.ms/api/scammers/top-9`, { headers });
    setTopDanger(response.data.scammers)
    console.log()

  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-[80%] h-auto mx-auto mt-40'>
      <div className='text-center text-white text-5xl font-bold mb-20'>9 อันดับบุคคลอันตราย</div>
      <div className='w-full h-auto flex flex-row gap-8 items-center justify-center '>
        {topdanger.map((e: any) => {
          return (
            <TopDangerWidget id={e.id} img={e.avatarPhoto} name={e.name} total={e.transferAmount.toLocaleString()} />
          )
        })}
      </div>
    </div>
  )
}
