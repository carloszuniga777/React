import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from "./mocks/products.json"


function App() {
  const[products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  /*
  const filtersProducts = (products) => {
    return 
  } 
  */

  return (
      <Products products={products}/> 
  )
}

export default App
