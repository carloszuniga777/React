import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../service/movies'


export function useMovies({search, sort}){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    /**Hacemos el fetching de datos de la app para obtener las peliculas y poder setear el estado*/
    /**Use Callback tiene el mismo funcionamiento que useMemo, 
     *
     *  Lo que lo diferencia con useMemo es que esta pensado para el uso de funciones 
     *  usecallback( funcion() ) y useMemo para cualquier cosa
     */
    const getMovies = useCallback( async({search})=>{
            if(search === previousSearch.current) return     //Se usa useRef para evitar realizar la misma busqueda 2 veces, con el objectivo de evitar realizar fetiching de datos varias veces para la misma busqueda
            
            try {  
                setLoading(true)
                setError(null)
                previousSearch.current = search
                const newMovies = await searchMovies({search}) 
                setMovies(newMovies)
            } catch (e) {
                setError(e.message)
            }finally{
                setLoading(false)
            }
    }, [])
   
   


    /**useMemo evita que se renderice veces
     * En este ejemplo, este useMemo se ejecuta solo cuando el usuario dio check para '
     * ordernar las peliculas(sort) y cuando las peliculas cambian
     * 
     * useMemo es recomendado usar solo si la funcion tiene que hacer grandes calculos
     *
    */
    const sortedMovies = useMemo(()=>{
            //Ordena las peliculas en base al estado del checkbox (sort), si esta check la ordena de lo contrario no    
    return  sort 
            ? [...movies].sort((a, b)=> a.title.localeCompare(b.title))     //se realiza  una copia de movie y se compara por titulo, para ordenarla
            : movies
    }, [sort, movies]) //Si no cambia el Sort (checkbox) o las peliculas

    return { movies: sortedMovies, loading, getMovies }           
}