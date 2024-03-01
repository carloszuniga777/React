import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer(){

     const {filters} = useFilters()  //se accede al custom hook de filtros
    
    return (
        <footer className="footer">
            {
               JSON.stringify(filters, null, 2) 
            }
    

        {/*  
            <h4>Prueba tecnica de React</h4> - <span>Carlos Zuniga</span>
            <h5>Shopping Cart con Usecontext & useReducer</h5> 
            
        */}

        </footer>
    ) 
}