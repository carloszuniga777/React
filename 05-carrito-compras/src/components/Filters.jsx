import {  useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'


/**Rederiza los filtros y configura el estado de cada uno */

export function Filters(){

    const { filters, setFilters } = useFilters()    //CustomHook que maneja los estados de los filtros

    
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    //Setea el filtro precio por medio el evento change
    const handleChangeMinPrice = (event)=>{
         
          setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
          }))
    }


    
    //Setea el valor del filtro categoria por medio el evento change
    const handleChangeCategory = (event)=>{

        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }


    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de:</label>  
                <input  type = 'range'
                        id   = {minPriceFilterId}
                        min  = '0'
                        max  = '1000'
                        onChange = {handleChangeMinPrice}
                        value={filters.minPrice}
                />            
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}