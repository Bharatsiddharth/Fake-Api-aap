import React from 'react'
import HeroCards from './HeroCards'
import Footer from './Footer'


const HeroSection = () => {
  return (
    <>
   <div className='flex flex-col w-full'>
   <div id='Hero'  className="relative mix-blend-difference  w-full min-h-screen  p-6 sm:p-12 md:p-20 flex gap-6 flex-col items-start justify-center">
       
       <div className='content flex flex-col gap-5 '>
       <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-start">
         Your One-Stop <br /> Shop for <br /> Quality and <br /> Value!
       </h1>
       <button className="px-6 py-2 w-fit bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-blue-500 transition duration-300 ease-in-out">
         SHOP NOW!
       </button>
       </div>

       
     </div>

     <HeroCards/>

    
     <Footer/>
   </div>

  

   
    </>

  )
}

export default HeroSection