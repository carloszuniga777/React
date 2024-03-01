import { useContext } from "react"
import { FilterContext } from "../context/filters"



//Custum Hook: Maneja el estado de los filtros por medio del useContext
export function useFilters(){ 


    //Se accede al contexto FilterContext
    const {filters, setFilters} = useContext(FilterContext)
     
   
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
     
     
     return { filters, filtersProducts, setFilters }
     
}