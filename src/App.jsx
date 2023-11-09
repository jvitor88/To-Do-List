import { useState } from 'react'

import Product from './components/product/product'
import ProductForm from './components/productForm/productForm'
import Search from './components/search/search'

import './App.css';

function App() {
  const [products, setProducts] = useState([])

  const [search, setSearch] = useState('')

  const addProduct = (text, category) => {
    const newProducts = [
      ...products,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]

    setProducts(newProducts)
  }

  const removeProduct = (id) => {
    const newProducts = [...products]
    const filteredProducts = newProducts.filter(product =>
      product.id !== id ? product : null
    )
    setProducts(filteredProducts)
  }

  const completeProduct = (id) => {
    const newProducts = [...products]
    newProducts.map((product) => product.id === id ? product.isCompleted = !product.isCompleted : product)
    setProducts(newProducts)
  }

  return (
    <div className='app'>
      <h1>Lista de Compras</h1>
      <Search
        search={search}
        setSearch={setSearch} />
      <div className='product-list'>
        {products.filter((product) =>
          product.text.includes(search)
          )
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              removeProduct={removeProduct}
              completeProduct={completeProduct} 
            />
          ))}
      </div>
      <ProductForm addProduct={addProduct} />
    </div>
  )
}

export default App
