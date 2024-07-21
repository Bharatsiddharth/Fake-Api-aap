// import React from 'react'
import { Link } from "react-router-dom"
import Nav from "./Nav"


const Home = () => {
    return (
        <>
        <Nav />
            <div className=' w-[85%]  p-10 pt-[5%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto'>

                <Link to="/details/1" className=' card p-3 border shadow w-[18%] h-[30vh] flex-col flex justify-center items-center '>

                    <div className='hover:scale-105 transition-all duration-500 ease-in-out mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
                        style={{ backgroundImage: "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)" }}
                    ></div>
                    <h1>Lorem ipsum dolor sit amet.</h1>

                </Link>



            </div>
        </>
    )
}

export default Home
