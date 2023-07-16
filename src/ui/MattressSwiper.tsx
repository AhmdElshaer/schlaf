import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { ProductType } from '../model/Types';

const MattressSwiper = (props: {products: ProductType[]}) => {

  
  return (
    <Swiper
      className='h-[60vh] w-full'
      navigation={true}
      freeMode={true}
      modules={[FreeMode, Navigation,]}
      spaceBetween={50}
      slidesPerView={1}
    >
      {props?.products.map((item)=>
        <SwiperSlide className='w-full' key={item?.id}>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <img src={`${process.env.PUBLIC_URL}/assets/Bliss-Fortune120.jpg`} alt='productImage' />
            <div className='text-center text-base font-semibold text-schlafBlue py-4'>{item?.title_english}</div>
          </div>

        </SwiperSlide>
      )
      }

    </Swiper>
  );
};

export default MattressSwiper;