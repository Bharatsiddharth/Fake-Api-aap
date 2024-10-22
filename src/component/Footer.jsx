import React from 'react'
// import BgCircle from './BgCircle'


const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 text-white rounded-t-[40px] p-20 flex justify-between'>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-[700] mb-5'>Help & Info</h2>
            <p>Contact Us</p>
            <p>Delivery</p>
            <p>Returns</p>
            <p>FAQs</p>
            <p>Careers</p>
            <p>T&Cs</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-[700] mb-5'>Shop</h2>
            <p>Mens</p>
            <p>Womens</p>
            <p>Kids</p>
            <p>WetSuit</p>
            <p>Boardsports</p>
            <p>Outlet</p>
            <p>Store Locator</p>
        </div>
        <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-[700]'>Follow Us</h2>
            <div className='w-[10vw] gap-2 mt-5 flex flex-wrap'>
           
  <i className="ri-facebook-fill bg-white text-black rounded-full p-2"></i>
  <i className="ri-instagram-line bg-white text-black rounded-full p-2"></i>
  <i className="ri-pinterest-line bg-white text-black rounded-full p-2"></i>
  <i className="ri-twitter-fill bg-white text-black rounded-full p-2"></i>
  <i className="ri-tiktok-fill bg-white text-black rounded-full p-2"></i>
  <i className="ri-mail-line bg-white text-black rounded-full p-2"></i>


</div>

            
        </div>
        <div className='w-[16%] flex flex-col gap-1'>
            <h2 className='text-2xl font-[700] mb-5'>Contact</h2>
            <p className='underline'>Info@ecommerce.com 0129875653</p>
            <p>Mon to Fri 9am - 5pm GMT.</p>
            <p>Please check your spam folder for email responses.</p>
        </div>

    </div>
  )
}

export default Footer