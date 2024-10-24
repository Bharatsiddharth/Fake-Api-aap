import React, { useContext } from 'react'
import { ProductContext } from '../utils/context'
import { Link } from 'react-router-dom'

const nav = () => {

    const [products] = useContext(ProductContext)

    let distinct_category =
        products && products.reduce((acc, cv) => [...acc, cv.category], [])

    distinct_category = [...new Set(distinct_category)] // Remove duplicates

    // console.log(distinct_category)


    const color = () => {
        return  `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
    }

    // console.log(color())

    return (
        <>
            <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center p-5'>
                <a className='py-3 px-5 border rounded mb-3 border-blue-200 text-blue-400' href="/create">
                    Add new product
                </a>
                <hr className='w-[80%] my-3' />
                <h1 className='text-xl font-serif  mb-3 w-[80%]'>Category Filter</h1>
                <div className=' w-[80%]' >

                    {distinct_category.map((c, i) => (
                        <Link key={i} to={`/products?category=${c}`} className=' flex items-center mb-3'>
                            <span style={{backgroundColor: color()}} className='w-[15px] h-[15px]   rounded-full mr-2'></span>
                            {c}
                        </Link>
                    ))}



                </div>
            </nav>
        </>
    )
}

export default nav
