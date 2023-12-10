"use client"
import React from 'react'
import NavBar from '../component/header/navbar'
import Footer from '../component/footer/footer'
import AboutContent from '../component/aboutpage/aboutcontent'

export default function About() {
  return (
    <div className='w-full min-h-screen h-auto'>
        <NavBar/>
        <AboutContent/>
        <Footer/>
    </div>
  )
}
