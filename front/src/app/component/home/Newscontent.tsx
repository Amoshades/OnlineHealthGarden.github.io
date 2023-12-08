import React from 'react'
import NewsWidget from './Newswidget'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NewsContent() {

  const [newsdetail, setNewsdetail] = useState([])
  const fetchData = async () => {

    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await axios.get(`https://66bhg8s9-8080.asse.devtunnels.ms/api/news/`, { headers });
    setNewsdetail(response.data.news)
    console.log()

  }

  const facebookOpen = async () => {
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await axios.get(`https://66bhg8s9-8080.asse.devtunnels.ms/api/news/?social=facebook`, { headers });
    setNewsdetail(response.data.news)
    console.log()
  }

  const twitterOpen = async () => {
    const headers = {
      'Content-Type': 'application/json'
    };
    const response = await axios.get(`https://66bhg8s9-8080.asse.devtunnels.ms/api/news/?social=twitter`, { headers });
    setNewsdetail(response.data.news)
    console.log(response.data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-[80%] h-auto mx-auto my-40 '>
      <div className='text-center text-white text-5xl font-bold mb-20'>ข่าวสารใหม่</div>
      <div className='flex flex-row gap-7 mb-10'>
        <button className='btn btn-primary text-white' onClick={fetchData}>ทั้งหมด</button>
        <button className='btn btn-primary text-white' onClick={facebookOpen}>Facebook</button>
        <button className='btn btn-primary text-white' onClick={twitterOpen}>Twitter</button>
      </div>
      <div className='flex flex-row gap-16 '>
        <div className='basis-9/12 flex flex-col gap-3'>
          {newsdetail.map((e: any) => {
            return (
              <NewsWidget id={e.id} title={e.title} date={new Date(e.postedDate).toLocaleString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })} />
            )
          })}
        </div>
        <div className='basis-3/12 flex flex-col gap-7 mt-[-100px]'>
          <div className=' w-[80%] mx-auto'>
            <p className='text-center text-white font-Poppins font-medium mb-5'>Ads Sponsored</p>
            <div className='w-full h-72 bg-[#2C353D] rounded-xl'>
              <img className='' src="" alt="" />
            </div>
          </div>
          <div className=' w-[80%] mx-auto'>
            <p className='text-center text-white font-Poppins font-medium mb-5'>Ads Sponsored</p>
            <div className='w-full h-72 bg-[#2C353D] rounded-xl'>
              <img className='' src="" alt="" />
            </div>
          </div>
          <div className=' w-[80%] mx-auto'>
            <p className='text-center text-white font-Poppins font-medium mb-5'>Ads Sponsored</p>
            <div className='w-full h-72 bg-[#2C353D] rounded-xl'>
              <img className='' src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
