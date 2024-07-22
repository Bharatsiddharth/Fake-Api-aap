import { Link,useParams } from 'react-router-dom'
// import { ProductContext } from '../utils/context'
import axios from '../utils/axios'
import {  useEffect, useState } from 'react'
import Loading from './Loading'

const Details = () => {
    const [product, setproduct] = useState(null)
    const { id } = useParams()
    console.log(id)

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`);
            setproduct(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleProduct();
    })

  return product ? (
    <>
        <div className='w-[70%] h-full m-auto justify-between p-[10%] flex '>
            <img className='h-[80%] w-[40%]  object-contain' src={`${product.image}`} alt="" />
            <div className='content  w-[50%]'>
                <h1 className='text-4xl'>{`${product.title}`}</h1>
                <h3 className='text-zinc-400 my-5'>{`${product.category}`}</h3>
                <h2 className='text-red-300 mb-3'>$ {`${product.price}`}</h2>
                
                <p className='mb-[5%]'>{`${product.description}`}</p>
                <Link className='mr-5 py-2 px-5 border rounded mb-3 border-blue-200 text-blue-400'>Edit</Link>
                <Link className='py-2 px-5 border rounded mb-3 border-red-200 text-red-400'>Delete</Link>
            </div>
        </div>
    </>
  ): <Loading/>
}

export default Details
