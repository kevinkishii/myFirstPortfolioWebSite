import React, { useState } from "react"

const ProductsDisplay = () => {
  const [productList, setProductList] = useState([
    {
      name: "product1",
      price: 12,
      stock: 5,
      id: 0,
    },
  ])
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    stock: 0,
  })

  const removeItem = (id) => {
    let removedList = productList.filter((product) => product.id != id)
    setProductList(removedList)
  }
  const sellItem = (id, stock) => {
    if (stock === 1) {
      removeItem(id)
    } else {
      let itemSold = productList.map((product) => {
        if (product.id === id) {
          product.stock--
          return product
        }
        return product
      })
      setProductList(itemSold)
    }
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewProduct({ ...newProduct, [name]: value })
  }
  const addItem = (e) => {
    e.preventDefault()
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const product = {
        name: newProduct.name,
        price: newProduct.price,
        stock: newProduct.stock,
        id: new Date().getTime().toString(),
      }
      setProductList([...productList, product])
      setNewProduct({
        name: "",
        price: 0,
        stock: 0,
      })
    }
  }
  return (
    <>
      <section className="form">
        <form className="form" onSubmit={(e) => addItem(e)}>
          <h1>New product info</h1>
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={newProduct.name}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={newProduct.stock}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </section>
      <section className="display">
        {productList.map((product) => {
          let { name, price, stock, id } = product
          return (
            <article key={id}>
              <h1>{name}</h1>
              <p>
                <strong>Price: ${price}</strong>
              </p>
              <p>Available stock: {stock}</p>
              <button onClick={() => removeItem(id)}>remove</button>
              <button onClick={() => sellItem(id, stock)}>Buy</button>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default ProductsDisplay
