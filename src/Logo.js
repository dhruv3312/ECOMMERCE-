import React from 'react'
import {  Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Logo() {
  return (
    <div className='bg-black pt-10 pb-10 autoplay loop'>

<Swiper
      // install Swiper modules
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={4}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true  }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={require('./image/asset 27.png')}/></SwiperSlide>
      <SwiperSlide><img src={require('./image/asset 28.png')}/></SwiperSlide>
      <SwiperSlide><img src={require('./image/asset 29.png')}/></SwiperSlide>
      <SwiperSlide><img src={require('./image/asset 30.png')}/></SwiperSlide>
      <SwiperSlide><img src={require('./image/asset 31.png')}/></SwiperSlide>
      <SwiperSlide><img src={require('./image/asset 32.png')}/></SwiperSlide>
      <SwiperSlide><img src={require('./image/asset 28.png')}/></SwiperSlide>

 
    
    </Swiper>
    </div>
  )
}

export default Logo