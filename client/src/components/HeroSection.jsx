import React from 'react'
import { assets } from '../assets/assets'
import {ClockIcon, CalendarIcon } from 'lucide-react'

const HeroSection = () => {
  return (
    <div
  className="relative w-full min-h-screen 
   flex flex-col items-start justify-center gap-4
    px-6 md:px-16 lg:px-36 
             bg-[url('/backgroundImage.png')] 
             bg-cover bg-right bg-no-repeat "
                        >
            <img src={assets.marvelLogo}
            alt="" className='max-h-11 lg:h-11 mt-20 '/>

            <h1 className='text-5xl md:text-[70px]
            md:leading-18 font-semibold max-w-100'>
                Guardians<br/> of the Galaxy
            </h1>

            <div  className='flex items-center gap-4 text-gray-300'>
                 <span>
                    Action | Adventure | Sci-Fi
                 </span>
                 <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-4.5 h-4.5'/> 2019
                 </div>
                  <div className='flex items-center gap-1'>
                    <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
                 </div>
            </div>
    </div>
  )
}

export default HeroSection