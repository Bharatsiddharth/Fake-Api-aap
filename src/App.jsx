import React from 'react'
import { Link, Route,Routes, useLocation } from 'react-router-dom'
import Home from './component/Home'
import Details from './component/Details'
import Create from './component/Create'
import Edit from './component/Edit'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'


const App = () => {
  const { search, pathname} = useLocation();
  // console.log(search,pathname)
  return (
    

    <>
    <div className='w-full h-screen flex'>
      <Navbar/>
     
      {(pathname != '/' || search.length > 0) && (
        <Link to={"/products"} className='text-red-700 absolute top-[10%] left-[17%]' >Back</Link>
      )}
      
      <Routes>
      <Route path='/' element={<HeroSection/>} />
        <Route path='/products' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>


      

    </div>
    </>
  )
}

export default App
