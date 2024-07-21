import React from 'react'

const nav = () => {
  return (
    <>
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center p-5'>
       <a className='py-3 px-5 border rounded mb-3 border-blue-200 text-blue-400' href="/create">
           Add new product
       </a>
       <hr className='w-[80%] my-3' />
       <h1 className='text-xl font-serif  mb-3 w-[80%]'>Category Filter</h1>
       <ul className=' w-[80%]' >

           <li className='bg-red-100 flex items-center mb-3'>
               <span className='w-[15px] h-[15px]  bg-blue-100 rounded-full mr-2'></span>
               cat 1
           </li>

           <li className='bg-red-100 flex items-center mb-3'>
               <span className='w-[15px] h-[15px]  bg-green-100 rounded-full mr-2'></span>
               cat 1
           </li>

           <li className='bg-red-100 flex items-center mb-3'>
               <span className='w-[15px] h-[15px]  bg-yellow-100 rounded-full mr-2'></span>
               cat 1
           </li>

       </ul>
   </nav>
  </>
  )
}

export default nav
