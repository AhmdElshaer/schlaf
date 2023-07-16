import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BsFillHandbagFill } from 'react-icons/bs';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between xl:justify-center gap-4 xl:gap-20 w-full'>
      <ul className='nav flex flex-col lg:flex-row gap-6 lg:gap-4 xl:gap-6 text-schlafBlue text-sm lg:text-xs xl:text-base md:font-semibold'>
        <li><NavLink to='/' className={({isActive}) => isActive ? "active" : ''}>Home</NavLink></li>
        <li>About Us</li>
        <li>Mattresses</li>
        <li>Beds & Headboards</li>
        <li>Pillows</li>
        <li>Products</li>
        <li>Contact Us</li>
      </ul>

      <div className='flex flex-col justify-start items-start gap-3 lg:justify-end lg:items-center lg:gap-3'>

        <div className='flex flex-row justify-end items-center lg:gap-4 lg:w-[25vh]'>

          <div className='flex relative'>
            <input className='text-xs xl:text-sm border-[1px] ease-in duration-300 rounded-full border-stone-300 focus:border-none focus:outline-[0.5px] focus:outline-orange-500 py-2 px-1' placeholder='Search by Products'/>
            <button className='absolute text-stone-500 xl:text-lg right-2 top-1/2 translate-y-[-50%]'><BsSearch /></button>
          </div>

          <div className='flex flex-row justify-center items-center text-schlafBlue gap-2 text-2xl '>
            <button className='opacity-60 hover:opacity-100 ease-in duration-200'><AiFillInstagram/></button>
            <button className='opacity-60 hover:opacity-100 ease-in duration-200'><FaFacebookF/></button>
            <button className='opacity-60 hover:opacity-100 ease-in duration-200'><BiGlobe/></button>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-4 w-full'>
          <button className='flex flex-row justify-center items-center rounded-lg px-4 py-1 md:py-2 xl:py-3 xl:px-5 text-white gap-1 text-xs xl:text-sm bg-schlafBlue '>
            <span className='text-xl'><MdOutlinePersonOutline/></span>
            <span>My Account</span>
            <span><BsChevronDown/></span>
          </button>

          <button className='flex flex-row justify-center items-center rounded-lg px-4 py-1 md:py-2 xl:py-3 xl:px-5 text-white gap-1 text-xs xl:text-sm bg-schlafBlue '>
            <span><BsFillHandbagFill/></span>
            <span>(0)</span>
            <span>Item</span>
          </button>
        </div>
      </div>
    </div>
  )
}
