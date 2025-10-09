import React from 'react'
import heroImg from '../assets/media/hero-image4fef.png'
import locationImg from '../assets/images/svgs/icon-location.svg'

export default function Hero() {
  return (
    <section className="relative pt-44 pb-0 dark:bg-darklight bg-no-repeat bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md relative z-10">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div className="flex flex-col col-span-6 justify-center items-start">
            <div className="mb-8">
              <h1 className="md:text-[50px] leading-[1.2] text-4xl ml-4 text-midnight_text dark:text-white font-bold">Find Your Best Real Estate</h1>
            </div>

            <div className="max-w-xl ml-4 sm:w-full">
              <div className="flex gap-1 bg-trasperent">
                <button className="px-9 py-3 text-xl rounded-t-md focus:outline-none bg-white dark:bg-darkmode text-midnight_text dark:text-white border-b border-primary">Sell</button>
                <button className="px-9 py-3 text-xl rounded-t-md focus:outline-none text-midnight_text bg-white bg-opacity-50 dark:text-white dark:bg-darkmode dark:bg-opacity-50">Buy</button>
              </div>

              <div className="bg-white dark:bg-transparent rounded-b-lg rounded-tr-lg">
                <div className="bg-white dark:bg-darkmode rounded-b-lg rounded-tr-lg shadow-lg p-8 pb-10">
                  <div className="relative rounded-lg border-0 my-2">
                    <div className="relative flex items-center">
                      <div className="absolute left-0 p-4">
                        <img alt="Icon" loading="lazy" width={24} height={24} decoding="async" style={{color: 'transparent'}} src={locationImg} />
                      </div>
                      <input type="text" placeholder="Search Location" className="py-5 pr-3 pl-14 w-full rounded-lg text-black border border-border dark:text-white dark:border-dark_border focus:border-primary dark:focus:border-primary focus-visible:outline-none dark:bg-[#0c121e]" />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col-reverse gap-4 md:justify-between">
                    <div className="flex flex-col md:flex-row md:gap-4 w-full">
                      <button className="flex-1 py-2 md:py-4 text-lg md:text-xl px-4 md:px-8 bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-300 mb-2 md:mb-0 md:mr-2">Search</button>
                      <button className="flex-1 py-2 md:py-4 text-lg md:text-xl px-4 md:px-8 bg-skyBlue/80 dark:bg-skyBlue/80 dark:hover:bg-skyBlue dark:hover:border-primary border border-transparent text-white rounded-lg hover:bg-skyBlue transition duration-300 text-nowrap">Advance Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start ml-4 mt-8 mb-12 gap-3">
              <div className="flex space-x-2">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431L24 9.763l-6 5.847L19.336 24 12 20.019 4.664 24 6 15.61 0 9.763l8.332-1.745z"></path></svg>
                <p className="text-lg dark:text-white text-black">4.9/5<span className="text-gray-400"> - from 658 reviews</span></p>
              </div>
            </div>
          </div>

          <div className="lg:block hidden col-span-6 absolute xl:-right-60 right-0 bottom-0 -z-1">
            <img alt="heroimage" loading="lazy" style={{color: 'transparent', width: '100%', height: 'auto'}} src={heroImg} />
          </div>
        </div>
      </div>
    </section>
  )
}
