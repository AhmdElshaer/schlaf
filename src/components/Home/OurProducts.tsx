import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FetchProducts } from '../../config/homePageConfig';
import MattressSwiper from '../../ui/MattressSwiper';

export default function OurProducts() {
  const {data, status} = useQuery(['our products'], FetchProducts);
  
  if(status === 'loading') {
    return <div className='text-center text-5xl font-bold'>Loading...</div>
  }

  return (
    <div className="mattress container mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 px-4">
      <div className="text-2xl md:text-3xl font-bold text-orange-600">Our Products</div>
      <MattressSwiper products={data?.ourProducts} />
    </div>
  )
}
