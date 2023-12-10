import React from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie , removeCookie } from 'typescript-cookie';

interface UserData {
  profilePicture: string
}
export default function NavBar() {

  const pathname = usePathname()
  const router = useRouter();
  const [userdata, setUserdata] = useState<UserData | null>(null);
  const [loginactive, setLoginactive] = useState(false)
  const fetchData = async () => {
    const headers = {
      Authorization: `Bearer ${getCookie('access_token')}`,
      Accept: 'application/json'
    }
    console.log(getCookie('access_token'))
    const response = await axios.post(`https://66bhg8s9-8080.asse.devtunnels.ms/api/users/get-profile`, {}, { headers });
    setUserdata(response.data)
    console.log(response.data)

    if (userdata !== undefined || userdata != null) {
      setLoginactive(true)
      
    }

  }
  const deleteToken = () => {
    removeCookie('access_token')
    window.location.reload();
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='w-[80%] h-auto pt-16 pb-20 mx-auto sticky top-0 bg-gradient-to-b from-55% from-[#1E252B] z-10'>
      <div className="navbar ">
        <a href='/' className="navbar-start">
          <img src="/png/logo.png" alt="" />
          <p className='text-white font-Poppins font-bold'>Online Health Garden</p>
        </a>

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
            <div className="dropdown dropdown-end w-14 ml-7 m-1">
              <img tabIndex={0} role="button" className={`aspect-square w-full rounded-full  ${loginactive ? '' : 'hidden'}`} src={userdata?.profilePicture || ''}/>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#2C353D] rounded-box w-52">
                <li><button onClick={deleteToken}>ออกจากระบบ</button></li>
              </ul>
            </div>
          <a className={`btn btn-primary text-white ml-7 ${loginactive ? 'hidden' : ''}`} href='/Login'>ลงชื่อเข้าใช้</a>
        </div>
      </div>
    </div>
  )
}
