import axios from './axios';
import React, {  createContext ,useEffect, useState } from 'react'

export const ProductContext = createContext();

const context = (props) => {
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) ||null)

    // const getProduct = async () => {
    //     try {
    //         const {data} = await axios("/products")
    //         setproducts(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // console.log(products)
    
    // useEffect(() => {
    //     getProduct()
    // }, [])

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default context
