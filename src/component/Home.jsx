// import React from 'react'
import { Link, useLocation } from "react-router-dom"
import Nav from "./Nav"

import { ProductContext } from "../utils/context"
import { useContext, useEffect, useState } from "react"
import Loading from "./Loading"
import axios from "../utils/axios"


const Home = () => {
    const [products] = useContext(ProductContext)
    const {search} = useLocation()
    const category = decodeURIComponent(search.split("=")[1]);
    

    // let filteredproducts = products && products;
    const [filteredProducts, setfilteredProducts] = useState(null)

    const getProductcategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setfilteredProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(!filteredProducts || category == "undefined") setfilteredProducts(products)
        if(category != "undefined") {
            // getProductcategory();
            setfilteredProducts(products.filter(p => p.category == category));
        }
    }, [category,products])

    // console.log(filteredproducts)

    return products ? (
        <>
            <Nav />
            <div className=' w-[85%]  p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto'>

                {filteredProducts &&  filteredProducts.map((p, i) => (


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
