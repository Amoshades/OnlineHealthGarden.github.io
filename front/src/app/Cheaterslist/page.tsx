"use client"
import NavBar from '../component/header/navbar'
import Footer from '../component/footer/footer'
import SearchCheater from '../component/cheatpage/searchcheater'
import CheatList from '../component/cheatpage/cheatlist'

export default function Home() {

    return (
        <div className='w-full min-h-screen h-auto'>
            <NavBar />
            <SearchCheater />
            <Footer />
        </div>
    )
}
