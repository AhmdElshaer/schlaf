import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';

export default function Header() {
  const [open, setIsOpen] = useState(false);

  return (
      <header className='container mx-auto relative bg-white lg:gap-8 xl:gap-6 flex flex-row justify-between lg:justify-start xl:justify-center items-center py-2 px-3 xl:px-1'>
        <Link to='/' >
          <img src={require('../imgs/Capture.png')} alt='logo' className='w-[30vw] md:w-[20vw] lg:w-[14vw] xl:w-[10vw]'/>
        </Link>

        <div onClick={() => setIsOpen(!open)} className={`cursor-pointer ${open ? 'text-orange-500' : 'text-schlafBlue'} font-medium text-4xl lg:hidden border rounded border-stone-300 p-1`}><HiMenuAlt1 /></div>
        <div className='hidden lg:block flex items-end lg:w-full xl:w-fit'>
            <NavBar />
          </div>

          <div className={`lg:hidden absolute lg:relative z-50 px-8 py-6 top-[80%] ease-in duration-500 ${open ? 'left-[50%]' : 'left-[-75%]'} translate-x-[-50%] bg-white w-screen h-[86vh] md:h-[90vh]`}>
            <div className='container mx-auto'>
              <NavBar />
              </div>
            </div>
      </header>
  )
}
