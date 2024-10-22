import React from 'react'
// import BgCircle from './BgCircle'


const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 text-white rounded-t-[40px] p-5 md:p-20 flex flex-wrap justify-between'>
    <div className='flex flex-col gap-1 w-full md:w-1/4'>
        <h2 className='text-2xl font-bold mb-5'>Help & Info</h2>
        <p>Contact Us</p>
        <p>Delivery</p>
        <p>Returns</p>
        <p>FAQs</p>
        <p>Careers</p>
        <p>T&Cs</p>
        <p>Privacy Policy</p>
    </div>
    <div className='flex flex-col gap-1 w-full md:w-1/4'>
        <h2 className='text-2xl font-bold mb-5'>Shop</h2>
        <p>Mens</p>
        <p>Womens</p>
        <p>Kids</p>
        <p>WetSuit</p>
        <p>Boardsports</p>
        <p>Outlet</p>
        <p>Store Locator</p>
    </div>
    <div className='flex flex-col gap-1 w-full md:w-1/4'>
        <h2 className='text-2xl font-bold'>Follow Us</h2>
        <div className='flex flex-wrap gap-2 mt-5'>
            <i className="ri-facebook-fill bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>
            <i className="ri-instagram-line bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>
            <i className="ri-pinterest-line bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>
            <i className="ri-twitter-fill bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>
            <i className="ri-tiktok-fill bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>
            <i className="ri-mail-line bg-white text-black rounded-full p-2 w-10 h-10 flex items-center justify-center"></i>
        </div>
    </div>
    <div className='flex flex-col gap-1 w-full md:w-1/4'>
        <h2 className='text-2xl font-bold mb-5'>Contact</h2>
        <p className='underline'>Info@ecommerce.com</p>
        <p>0129875653</p>
        <p>Mon to Fri 9am - 5pm GMT.</p>
        <p>Please check your spam folder for email responses.</p>
    </div>
</div>
  )
}

export default Footer