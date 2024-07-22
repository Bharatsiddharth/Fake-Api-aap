// import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./Nav"

import { ProductContext } from "../utils/context"
import { useContext } from "react"
import Loading from "./Loading"


const Home = () => {
    const [products] = useContext(ProductContext)
    console.log(products)
    return products ? (
        <>
            <Nav />
            <div className=' w-[85%]  p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto'>

                {products.map((p, i) => (


                    <Link key={p.id} to={`/details/${p.id}`} className=' card p-3 border shadow w-[18%] h-[30vh] flex-col flex justify-center items-center '>

                        <div className='hover:scale-105 transition-all duration-500 ease-in-out mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
                            style={{ backgroundImage: `url(${p.image})` }}
                        ></div>
                        <h1>{p.title}</h1>

                    </Link>

                ))}





            </div>
        </>
    ) : <Loading />
}

export default Home
