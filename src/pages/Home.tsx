import React from 'react';
import HomeSlider from '../components/HomeSlider';
import MattressLine from '../components/MattressLine';
import Blank from '../components/Home/Blank';


export default function Home() {
  return (
    <div className='flex flex-col gap-6 md:gap-8 mb-6'>
      <HomeSlider />
      <MattressLine />
      <Blank />
    </div>
  )
}
