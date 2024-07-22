import React from 'react'
import { Link, Route,Routes, useLocation } from 'react-router-dom'
import Home from './component/Home'
import Details from './component/Details'

const App = () => {
  const { search, pathname} = useLocation();
  console.log(search,pathname)
  return (
    <div className='w-full h-screen flex'>
     
      {(pathname != '/' || search.length > 0) && (
        <Link to={"/"} className='text-red-700 absolute top-[4%] left-[17%]' >Home</Link>
      )}
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Details/>} />
      </Routes>

    </div>
  )
}

export default App
