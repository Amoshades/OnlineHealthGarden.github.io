import React from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname()
  const router = useRouter();
  return (
    <div className='w-[80%] h-auto pt-16 pb-20 mx-auto sticky top-0 bg-gradient-to-b from-55% from-[#1E252B] z-10'>
      <div className="navbar ">
        <div className="navbar-start">
          <img src="/png/logo.png" alt="" />
          <p className='text-white font-Poppins font-bold'>Online Health Garden</p>
        </div>

        <div className="navbar-end font-Poppins font-bold text-slate-400 ">
          <ul className="px-1 flex flex-row gap-7 items-center">
            <li>
              <a href='/' className={`hover:text-primary-500 ${pathname === '/' ? 'text-primary-500' : ''}`}>
                หน้าแรก
              </a>
            </li>
            <li><a href='/Cheaterslist' className={`hover:text-primary-500 ${pathname === '/Cheaterslist' ? 'text-primary-500' : ''}`}>รายชื่อผู้โกง</a></li>
            <li><a className='hover:text-primary-500'>เกี่ยวกับฉัน</a></li>
          </ul>
          <a className="btn btn-primary text-white ml-7" href='/Login'>ลงชื่อเข้าใช้</a>
        </div>
      </div>
    </div>
  )
}
