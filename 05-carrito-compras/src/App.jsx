import { useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./config.js"
import { useFilters } from "./hooks/useFilters.js"






function App() {
  const[products] = useState(initialProducts)
  const { filters, filtersProducts } = useFilters()
  
  const filteredProducts = filtersProducts(products)

  return (
    <>
       <Header/>
       <Products products={filteredProducts}/> 
       {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>

  )
}

export default App
