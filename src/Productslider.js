import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Productslider() {
    const [data, setdata] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/getallproduct')
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {

                console.log(error);
            })
    }, []);
  return (
    <div>
      
  <div className="text-center mt-10 mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
    Weekly Featured Products
    </h1>
    <div className="flex mt-6 justify-center">
      <div className="w-16 h-1 rounded-full bg-[#86e2d5] inline-flex" />
    </div>
    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-2 text-gray-500s">
    Sed arcu. Cras consequat.
    </p>
   
  </div>
  
  <div className="bg-white">
         <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    modules={[FreeMode , Autoplay]}
                    loop={true}
                    autoplay={{
                        delay:2000,
                        disableOnInteraction:false
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }
                    }
                >
                
               
                    {

                        data.map((item)=>{
                            return(
                <SwiperSlide>
<Link to={`/Viewproduct/${item._id}`}>

                                <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                                <a href="#">
                                    <div class="relative flex items-end overflow-hidden rounded-xl w-[274.5px] h-[274.5px] ">
                                        <img src={item.product_image} alt="Hotel Photo" className='object-cover' />
                                    </div>
        
                                    <div class="mt-1 p-2">
                                        <h2 class="text-white text-center  h-[15px] ">{item.product_name}</h2>
                                        <p class="mt-1 text-sm text-center  h-[74.5px]   text-slate-400">{item.  product_description}</p>
                                        <div className="flex mt-2  mb-3 justify-center">
                                                <div className="w-16 h-1 rounded-full bg-[#86e2d5] inline-flex" />
                                                </div>
                                        <div class=" text-center ">
                                            <p>
                                                <span class="text-lg font-bold  h-[4.5px]   text-white">{item. product_price}</span>
                                            </p>
        
                                            <div class=" flex mt-3   rounded-lg bg-[#86e2d5] px-4 py-1.5 text-white duration-100 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-[60px]">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>
        
                                                <button class="text-sm ">Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>
            </Link>

                </SwiperSlide>

                            )
                    
                    })

                    }

                  
              
                
            
            </Swiper>
            </div>


    </div>
  )
}

export default Productslider