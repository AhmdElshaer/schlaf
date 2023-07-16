import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { useQuery } from '@tanstack/react-query';
import { FetchSliders } from '../config/config';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SliderType } from '../model/Types';

export default function HomeSlider() {

  const { data, status } = useQuery(['sliders'], FetchSliders);

  
  if(status === 'loading') {
    return <div className='text-center text-5xl font-bold'>Loading...</div>
  }

  return (

    <div>
      <Swiper
        className='h-[90vh] md:h-screen lg:h-[38vh] xl:h-[60vh] '
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        speed={2900}
        loop={true}
        autoplay={{delay: 5000, disableOnInteraction: false,}}
      >
        {data.map((item: SliderType) => 
        <SwiperSlide key={item.id} className='flex md:items-start overflow-hidden'>
          {({ isActive }) => (<div className='w-screen h-full relative flex justify-center items-center md:items-start'>
            <img loading='lazy'
            // src={`${process.env.IMAGE_URL}${item.image}`}
            src='https://www.schlafmeister.com/_next/image/?url=http%3A%2F%2Fdemos-iconcreations.com%2FSchlafMiestrAdmin%2Fassets%2FsliderImages%2Fimg3.jpg&w=3840&q=65'
            alt='slider-img' className='object-cover h-full w-full absolute left-0 z-10' />

            <div className={`${isActive ? 'slider-active' : 'slider-not-active'} flex items-center justify-center md:items-start z-30 h-full w-full md:bg-gradient-to-r md:from-white bg-white/50 md:bg-transparent px-10`}>
              <div className={`flex flex-col container mx-auto justify-center md:items-start items-center gap-4 px-12 md:px-1 h-full `}>
                <p className={`${isActive ? 'translate-x-[50px] md:translate-x-[100px] text-orange-600' : 'text-transparent'} ml-[-100px] transition duration-[1.5s] text-2xl font-semibold `}>{item.english_title}</p>
                <p className={`${isActive ? 'translate-x-[-50px] md:translate-x-[-100px] text-schlafBlue' : 'text-transparent'} ml-[100px] transition duration-[1.5s] font-medium text-center md:text-start md:text-lg md:w-[50%]`}>{item.english_description}</p>
                <button className={`${isActive ? 'translate-y-[-50px] bg-orange-600' : 'bg-transparent'} mt-[50px] transition duration-[1.5s] rounded-md py-2 px-4 md:px-6 text-white text-sm hover:bg-white hover:border-orange-600 hover:border ease-in duration-300 hover:text-orange-600`}>Discover Now</button>
            </div>
            </div>
          </div>)}
        </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}
