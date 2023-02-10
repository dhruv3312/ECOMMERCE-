import React from 'react'

function Shop() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={ require('./image/asset 24.jpeg')}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium  text-center mb-3">
            Kitchen Cooking Essentials
            </h2>
            <p className="title-font text-lg font-sm  text-center text-gray-400 mb-3">
            25 December / 10:23 am     The Catalyzer
            </p>
            <div className="flex mt-2  mb-3 justify-center">
         <div className="w-10 h-1 rounded-full bg-black inline-flex" />
         </div>
            < p className='text-center'>
                read more...
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={ require('./image/asset 24.jpeg')}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-center  mb-1">
            Delicius Cherry Clafoutis Pie
            </h2>
            
            <p className="leading-relaxed text-center text-gray-400 mb-3">
            25 December / 10:23 am

            </p>
            <div className="flex mt-2  mb-3 justify-center">
         <div className="w-10 h-1 rounded-full bg-black inline-flex" />
         </div>
         < p className='text-center'>
                read more...
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={ require('./image/asset 24.jpeg')}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font text-center font-medium  mb-1">
            Chef’s Special Degustation
            </h2>
           
            <p className="leading-relaxed text-center text-gray-400 mb-3">
            25 December / 10:23 am
            </p>
            <div className="flex mt-2  mb-3 justify-center">
         <div className="w-10 h-1 rounded-full bg-black inline-flex" />
         </div>
         < p className='text-center'>
                read more...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Shop