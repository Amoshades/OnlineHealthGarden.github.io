"use client"
import NavBar from '../component/header/navbar'
import Footer from '../component/footer/footer'
import ScammerInsert from '../component/scammerData/scammerInsert'

export default function GetScammer() {

    return (
        <div className='w-full min-h-screen h-auto'>
            <NavBar />
            <ScammerInsert/>
            <Footer />
        </div>
    )
}
