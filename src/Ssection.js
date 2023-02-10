import React from 'react'

function Ssection() {
  return (
    <div>

<section className=" opacity-90  bg-scroll body-font  background-image: url('../image/asse 47.jpeg)">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      Subscribe to Our Newsletter
      </h1>
      <div className="flex mt-2  mb-3 justify-center">
         <div className="w-16 h-1 rounded-full bg-[#86e2d5] inline-flex" />
         </div>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Our vast experience enriches yours.
      </p>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="text-white bg-[#86e2d5] border-0 py-2 px-8 focus:outline-none hover:bg-[#86e2d5] rounded text-lg">
        SUBSCRIBE
      </button>
    </div>
  </div>
</section>

    </div>
  )
}

export default Ssection