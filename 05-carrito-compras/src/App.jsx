import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header.jsx"

function App() {
  const[products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  
  const filtersProducts = (products) => {
    return products.filter( product => {
      return (
          product.price >= filters.minPrice &&
          (
             filters.category === 'all' ||
             product.category === filters.category
          )
      )
    })
  } 
  

  const filteredProducts = filtersProducts(products)

  return (
    <>
       <Header/>
       <Products products={filteredProducts}/> 
    </>

  )
}

export default App
