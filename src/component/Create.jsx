import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const AddProductHandler = (e) => {
    e.preventDefault();

    const product = {
      title,
      image,
      category,
      price,
      description
    }

    console.log(product)

  }

  return (
    <form onSubmit={AddProductHandler} className='w-full items-center h-screen p-[5%] flex flex-col'>

      <h1 className='w-1/2 mb-5 text-3xl'>ADD New Product</h1>
      <input
        type="url"
        placeholder='img link'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        onChange={(e) => setImage(e.target.value)}
        value={image}

      />
      <input
        type="text"
        placeholder='title'
        className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
        onChange={(e) => setTitle(e.target.value)}
        value={title}

      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder='category'
          className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
          onChange={(e) => setCategory(e.target.value)}
          value={category}

        />
        <input
          type="number"
          placeholder='Price'
          className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
          onChange={(e) => setPrice(e.target.value)}
          value={price}

        />
      </div>

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Enter product description here..."
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3" name="" id="" rows={10}></textarea>
      <div className="w-1/2">
      <button className='py-3 px-5 border rounded mb-3 border-blue-200 text-blue-400'>
        Add new product
      </button>
      </div>
    </form>
  )
}

export default Create
