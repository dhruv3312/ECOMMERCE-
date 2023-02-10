import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Slider() {
  return (
    <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={0}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='relative' >
        <img src={require('./image/asset 40.jpeg')}/> 
        <div className='absolute top-[205px] pt-16 left-1/2 text-white '>Discount up to 70% off</div>
        <div className='absolute top-[310px] text-6xl  left-[265px] font-black text-white border-solid border-4 p-6 mb-10'>WOMAN FASHION SUMMAR</div>
        <div className='absolute top-[435px] left-1/2 text-white ml-3'>on 5000+ models</div>
      </SwiperSlide>
      <SwiperSlide className='relative' >
        <img src={require('./image/asset 41.jpeg')}/> 
    
        <div className='absolute top-[205px] pt-16 left-[609px] text-white'>on fashion</div>
        <div className='absolute top-[310px] text-6xl  left-[370px] font-black text-white border-solid border-4 p-6 mb-10'>SPECIAL OFFER</div>
        <div className='absolute top-[435px] left-[600px] text-white '>on sale -20%</div>
        
      </SwiperSlide>
      <SwiperSlide className='relative' >
        <img src={require('./image/asset 42.jpeg')}/> 
        <div className='absolute top-[205px] pt-16 left-[585px] text-white font-[Droid Serif, serif]'>looking for outfit inspration?</div>
        <div className='absolute top-[310px] text-6xl  left-[265px] font-black text-white border-solid border-4 p-6 mb-10'>THE CASUAL FASHION</div>
        <div className='absolute top-[435px] left-[609px] text-white ml-3'>on 5000+ models</div>
      </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Slider