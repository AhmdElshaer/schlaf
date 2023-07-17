import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { ProductType } from '../model/Types';
import OrangeButton from './OrangeButton';

const MattressSwiper = (props: {products: ProductType[]}) => {

  
  return (
    <Swiper
      className='w-full pb-6'
      navigation={true}
      freeMode={true}
      modules={[FreeMode, Navigation,]}
      spaceBetween={50}
      speed={1800}
      breakpoints={{
        640: {slidesPerView: 1, spaceBetween: 20,},
        768: {slidesPerView: 2, spaceBetween: 20,},
        1024: { slidesPerView: 2, spaceBetween: 20,},
        1200: { slidesPerView: 3, spaceBetween: 30,},
      }}>
      {props?.products.map((item)=>
        <SwiperSlide className='w-full shadow-2xl drop-shadow-2xl' key={item?.id}>
          <div className='zoom w-full flex flex-col justify-center items-center '>
            <div className='w-full truncate'>
              <img src={`${process.env.PUBLIC_URL}/assets/Bliss-Fortune120.jpg`} alt='productImage' className='w-full object-cover' />
            </div>
            <div className='mattress-card w-full flex flex-col gap-3 justify-center items-center hover:bg-schlafBlue ease-in duration-300 pb-7 pt-3'>
              <div className='m-title text-center text-sm w-full font-semibold text-schlafBlue pb-3 border-b-[0.2px] border-black '>{item?.title_english}</div>
              <div className='w-full flex justify-between text-schlafBlue mb-7 px-3'>
                <div className='m-title font-normal text-sm'>{item?.title_english}</div>
                <div className='flex flex-col text-sm font-semibold items-end gap-4'>
                  <p className='m-title text-sm font-bold'>{item?.size}</p>
                  <p className='font-semibold text-orange-600'>{`Start from ${item?.afterPrice} EGP`}</p>
                </div>
              </div>
                <OrangeButton text='More Details' />
            </div>
          </div>

        </SwiperSlide>
      )
      }

    </Swiper>
  );
};

export default MattressSwiper;