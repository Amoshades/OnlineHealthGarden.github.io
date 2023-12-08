import React from 'react'

export default function NavBar() {
  return (
    <div className='w-[80%] h-auto pt-16 mx-auto'>
      <div className="navbar ">
        <div className="navbar-start">
          <img src="/png/logo.png" alt="" />
          <p className='text-white font-Poppins font-bold'>Online Health Garden</p>
        </div>

        <div className="navbar-end font-Poppins font-bold text-slate-400 ">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li><a href='/' className='hover:text-primary-500'>หน้าแรก</a></li>
            <li><a className='hover:text-primary-500'>รายชื่อคนโกง</a></li>
            <li><a className='hover:text-primary-500'>เกี่ยวกับฉัน</a></li>
          </ul>
          <a className="btn btn-primary text-white">ลงชื่อเข้าใช้</a>
        </div>
      </div>
    </div>
  )
}
