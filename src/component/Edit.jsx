import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/context';

const Edit = () => {
  const [products, setproducts] = useContext(ProductContext)
  const navigate = useNavigate()

  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  })


  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id])
  // console.log(product)

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (product.title.trim().length < 5 || product.image.trim().length < 5 || product.category.trim().length < 5 || product.price.trim() < 1 || product.description.trim().length < 5) {
      alert("All fields must be filled out correctly");
      return;
    }
   
    const pi = products.findIndex((p) => p.id == id);

    const copyData = [...products];
    copyData[pi] = {...products[pi], ...product};

    console.log(copyData)

    setproducts(copyData)
    localStorage.setItem("products", JSON.stringify(copyData));


    navigate(-1)


    // console.log(product)
    // console.log(products)

  }


  return (
    <form onSubmit={AddProductHandler} className='w-full items-center h-screen p-[5%] flex flex-col'>

      <h1 className='w-1/2 mb-5 text-3xl'>Edit New Product</h1>
      <input
        type="url"
        placeholder='img link'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        name='image'
        onChange={changeHandler}
        value={product && product.image}

      />
      <input
        type="text"
        placeholder='title'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        name='title'
        onChange={(e) => setTitle(e.target.value)}
        value={product && product.title}

      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder='category'
          name='category'
          className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
          onChange={changeHandler}
          value={product && product.category}

        />
        <input
          type="number"
          placeholder='Price'
          name='price'
          className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
          onChange={changeHandler}
          value={product && product.price}

        />
      </div>

      <textarea
        onChange={changeHandler}
        name='description'
        value={product && product.description}
        placeholder="Enter product description here..."
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3" id="" rows={10}></textarea>
      <div className="w-1/2">
        <button className='py-3 px-5 border rounded mb-3 border-blue-200 text-blue-400'>
          Edit new product
        </button>
      </div>
    </form>
  )
}

export default Edit
