"use client"
import Image from 'next/image'
import NavBar from './component/header/navbar'
import Banner from './component/home/Banner'
import ShowTopDangerous from './component/home/Showtopdangerous'
import NewsContent from './component/home/Newscontent'
import Footer from './component/footer/footer'

export default function Home() {

  return (
    <div className='w-full min-h-screen h-auto'>
      <NavBar />
      <Banner />
      <ShowTopDangerous/>
      <NewsContent/>
      <Footer/>
    </div>
  )
}
