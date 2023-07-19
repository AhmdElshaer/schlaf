import React from 'react';
import HomeSlider from '../components/Home/HomeSlider';
import MattressLine from '../components/Home/MattressLine';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import PresidentMsg from '../components/Home/PresidentMsg';
import OurProducts from '../components/Home/OurProducts';


export default function Home() {
  return (
    <div className='flex flex-col gap-6 md:gap-8 mb-6'>
      <HomeSlider />
      <MattressLine />
      <PresidentMsg />
      <OurProducts />
      <FeaturedProducts />
    </div>
  )
}
