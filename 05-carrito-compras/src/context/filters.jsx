import { createContext, useState } from "react";

/**
 * UseContext: Sirve para empaquetar, algun estado, configuracion, inclusive un valor, etc.
 *             Y poder acceder a ella desde cualquier parte de la aplicacion
 * 
 * UseContext como estado global esta pensado para estados muy pequenos o que 
 * cambien con muy poca frecuencia
 * 
 * Existen controladores de estados como Redux y Zutang, que manejan 
 * estados mas complejos. Sin embargo,no se recomienda Redux, existen mejores alternativas
 *      
 */


//1. crear el contexto // Este es el que tenemos que consumir en nuestra app
export const FilterContext = createContext()


// 2. crear el provider, para proveer el contexto 
// Este nos provee acceso al contexto
export function FilterProvider({ children }){
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return(
        <FilterContext.Provider value={
            {
                filters,
                setFilters   
            }
        }>
            {children} 
        
        </FilterContext.Provider>      
    )
}