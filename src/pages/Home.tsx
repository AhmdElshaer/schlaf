import React from 'react'
import HomeSlider from '../components/HomeSlider'
import MattressLine from '../components/MattressLine'

export default function Home() {
  return (
    <div className='flex flex-col gap-6'>
      <HomeSlider />
      <MattressLine />
    </div>
  )
}
