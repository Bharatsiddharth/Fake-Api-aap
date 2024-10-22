import React from 'react'

const Content = () => {
  return (
    <>
       <div className='w-full h-screen pb-20'>
    <h1 className='p-10 text-center text-5xl md:text-7xl'>We Are The New Innovation</h1>

    <div className='flex flex-col md:flex-row w-full h-[90%]'>
        <img
            className='w-full md:w-1/2 p-5 md:p-20 object-contain h-auto'
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Meet Vanisha"
        />
        <div className='w-full md:w-1/2 p-5 md:p-20'>
            <h1 className='text-3xl md:text-4xl'>Meet Vanisha</h1>
            <p className='pt-5 text-xs md:text-lg'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ratione doloremque mollitia voluptatibus accusamus rem nisi similique molestias, ipsum tempora iste adipisci perspiciatis quasi? Aspernatur cupiditate similique fugit commodi deserunt eius perscto ullam debitis rem quis non consectetur autem impedit maiores illum. In autem quae optio dolores anditiis libero accusantium illum laborum temporibus voluptate quam repudiandae unde quo eos, laudantium, quaerat alias nihil velit tenetur deserunt architecto autem, distinctio incidunt? Debitis vel dolor ipsum, vitae illo unde quo odio repudiandae nostrum excepturi quidem hic. Sed voluptas maiores modi. Libero hic ducimus, sit et temporibus vel! Sunt quas voluptatibus laboriosam, assumenda neque corrupti eveniet hic commodi unde quaerat voluptates cupiditate voluptate necessitatibus tempore quidem culpa minima.
            </p>
        </div>
    </div>
</div>
    </>
  )
}

export default Content