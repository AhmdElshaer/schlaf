import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FetchFeaturedProducts } from '../../config/homePageConfig';
import { ProductType } from '../../model/Types';
import OrangeButton2 from '../../ui/OrangeButton2';

export default function FeaturedProducts() {
  const {data, status} = useQuery(['featured products'], FetchFeaturedProducts);
  console.log(data);
  

  if(status === 'loading') {
    return <div className='text-center text-5xl font-bold'>Loading...</div>
  }
  return (
    <div className="mattress container mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 px-4">
      <div className="text-2xl md:text-3xl font-bold text-orange-600">Featured Products</div>
      {data.map((item: ProductType)=>
        <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
          <div className='relative w-full img_layer'>
            <img src={`${process.env.PUBLIC_URL}/assets/Bliss-Fortune120.jpg`} alt='product' className='relative object-cover z-20 mb-[-20px] '/>
            {/* before:-inset-1 before:content-[""] before:block before:absolute before:bg-orange-100 before:right-[-20px] before:top-[-20px] before:w-full before:h-full */}
            {/* <p className='w-[500px] h-[500px] absolute bg-orange-100 right-[-20px] top-[-20px] z-10'></p> */}
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-orange-600 text-2xl font-semibold'>{item?.title_english}</p>
            <p className='text-stone-400 pt-4'>{item?.description_english}</p>
            <OrangeButton2 text='Show More' />
            
          </div>
        </div>
      )}
      </div>
  )
}
