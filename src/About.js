import React from 'react'
import {FaTruck,FaUniversalAccess } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";

function About() {
  return (
    <div>

<section className="text-gray-600 pt-4 pb-4 body-font bg-[#333333]">
  <div className="container px-5 py-10 mx-auto">
    
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="w-16 h-16 inline-flex items-center justify-center  border-2 border-[#86e2d5] hover:border-none ease-in duration-300 hover:bg-[#86e2d5] hover:text-[#ffff] rounded-full text-[#86e2d5]  mb-4 flex-shrink-0">
          <FaTruck className='w-[150px] color-[#86e2d5]'/>
        </div>
        <div className="flex-grow pl-6 ">
          <h2 className="text-white text-lg title-font font-medium mb-2">
          Shooting Stars
          </h2>
          <p className="leading-relaxed text-[#999999]">
          Donec odio. Quisque volutpat mattis eros. Nullam malesuada
          </p>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full border-2 border-[#86e2d5] hover:border-none ease-in duration-300  hover:bg-[#86e2d5] hover:text-[#ffff] rounded-full text-[#86e2d5] mb-4 flex-shrink-0">
          <FaUniversalAccess className='w-[150px]'/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-white text-lg title-font font-medium mb-2">
          Secure Checkout
          </h2>
          <p className="leading-relaxed text-[#999999]">
          Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
          </p>
        
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full border-2 border-[#86e2d5] hover:border-none ease-in duration-300 hover:bg-[#86e2d5] hover:text-[#ffff] rounded-full text-[#86e2d5] mb-4 flex-shrink-0">
         <IoLogoUsd/>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-white text-lg title-font font-medium mb-2">
          Money Back Guarantee
          </h2>
          <p className="leading-relaxed text-[#999999]">
          Donec nec justo eget felis facilisis fermentum.
          </p>
         
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default About;