import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
    <div className='footer bg-schlafBlue'>
    <div className='container mx-auto flex flex-col lg:flex-row gap-5 pt-8 pb-14 px-4 text-white xl:h-[35vh] xl:gap-8 xl:w-[65%] xl:pt-14 xl:px-1 xl:justify-start'>
      <div className='w-full flex justify-center items-center lg:w-[20%] xl:w-[16%]'>
        <img src={require('../imgs/Capture.png')} alt='logo' className='text-white w-[70%] md:w-1/2 lg:w-full'/>
        </div>

      <div className='flex flex-col md:flex-row gap-5 md:gap-12 lg:gap-4 xl:w-[60%] xl:gap-8'>

        <div className='flex justify-between flex-1 lg:gap-4 xl:gap-8 xl:w-[55%]'>

          <div className='leftNav flex flex-col gap-3'>
            <p className='font-medium xl:text-lg'>Company</p>
            <ul className='flex flex-col font-light text-sm xl:text-base gap-1'>
              <li>About Us</li>
              <li>Continental Bed</li>
              <li>Pillows</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='rightNav text-white flex flex-col gap-3 pr-4'>
            <p className='font-medium xl:text-lg'>Mattresses</p>
            <ul className='flex flex-col font-light text-sm xl:text-base gap-1'>
              <li>Bliss Line</li>
              <li>Sleep Spa Line</li>
              <li>Essential Comfy Line</li>
            </ul>
          </div>
          
        </div>

        <div className='flex flex-col gap-3 flex-1 lg:flex-none lg:w-[40%] xl:w-[45%] xl:px-6'>
          <p className='font-medium xl:text-lg'>Showrooms</p>

          <ul className='flex flex-col text-slate-300 gap-2 '>

            <li className='flex flex-row gap-2 justify-center items-center lg:items-start'>
              <span className='text-4xl lg:text-xl xl:text-2xl'><HiLocationMarker/></span>
              <span className='text-sm xl:text-base'>90 Avenue South Second Sector Bldg 317, First Floor   Fifth Settlement.</span>
              </li>

            <li className='flex flex-row gap-2 justify-center items-center lg:items-start'>
              <span className='text-4xl lg:text-xl xl:text-2xl'><HiLocationMarker/></span>
              <span className='text-sm xl:text-base'>Zayed Dunes Commercial Bldg 13, Unit 3 Sixth District Sheikh Zayed.</span>
              </li>

          </ul>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-8 justify-center items-center md:items-start lg:w-[45%] xl:w-[35%]'>

        <div className='flex flex-col gap-3 justify-center items-center md:w-[10%] lg:w-[30%] xl:w-[25%]'>
          <p className='font-medium xl:text-lg'>Follow Us</p>
          <div className='social flex flex-row md:flex-col gap-2 justify-center items-center text-2xl'>
            <span className='text-slate-400 hover:text-white duration-300 ease-in cursor-pointer'><FaFacebookF/></span>
            <span className='text-slate-400 hover:text-white duration-300 ease-in cursor-pointer'><AiFillInstagram/></span>
            <span className='text-slate-400 hover:text-white duration-300 ease-in cursor-pointer'><BsFillTelephoneFill/></span>
          </div>
        </div>

        <div className='border flex flex-col p-5 pb-8 gap-3 md:w-[90%] lg:w-[65%] xl:w-[75%]'>
          <p className='font-medium xl:text-lg'>Newsletter</p>
          <p className='text-xs md:text-sm text-slate-400'>Subscribe to our newsletter to receive updates on new arrivals, special offers and other discount information.</p>
          <div className='w-full '>
            <input placeholder='E-mail' className='bg-slate-400 placeholder:text-white text-xs w-[85%] lg:w-[70%] p-2'/>
            <button className='w-[15%] lg:w-[30%] text-xs text-black rounded-r bg-white py-2'>Send</button>
          </div>
        </div>
      </div>
    </div>
    </div>

      <div className='border-t border-slate-500 py-1 w-screen text-xs text-center bg-schlafBlue text-white'>Designed and Developed by Icon</div>
    </>
  )
}
