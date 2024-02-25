import './App.css'
import { useMovies } from './hooks/useMovies.js'
import {Movies} from './components/Movies.jsx'
import { useState, useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'



function useSearh(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput =  useRef(true)

    /* Una manera de validar el estado del formulario es haciendo useEffect*/
    useEffect(()=>{ 

      /* UseRef 
        Evita que se visualice el text 'No se puede buscar una pelicula vacia' 
        antes de la primer busqueda del usuario
      */
      if(isFirstInput.current){
        isFirstInput.current = search === '' //Devuelve false si el usuario ingreso un texto en el input
        return
      }
  

      if(search === ''){
        setError('No se puede buscar una pelicula vacia')
        return
      }

      if(search.match(/^\d+$/)){
        setError('No se puede buscar una pelicula con un numero')
        return
      }

      if(search.length < 3){
        setError('La busqueda debe tener al menos 3 caracteres')
        return
      }

      setError(null)

    }, [search])


 
    return { search, updateSearch, error}
}



//https://www.omdbapi.com/?apikey=4287ad07&s=Avenger

function App() {
    const [sort, setSort] = useState(false)
    const { search, updateSearch, error }  = useSearh() 
    const { movies, loading, getMovies } = useMovies({search, sort})   
   


     //Recuperando el valor de un elemento en el dom, y lo estamos guardando en una referencia 
    const handleSumit = (event)=>{
      event.preventDefault()
      getMovies({search})
    }

    /**Se realiza fetching cada 300 segundos por medio debauce, se utiliza useCallback 
     * para evitar que se realice una busqueda por cada tecla que precione el usuario
     **/  
    const debounceGetMovies = useCallback(
        debounce(search =>{
            getMovies({search})            //busca pelicula miestras el usuario escribe // Realiza fetching cada tecleo que da el usuario
       }, 300), [getMovies]
    )
    

   //Tambien se pueden poner las validaciones del Custom Hook: useSearh en el evento onChange
    const handleChange = (event)=>{
        const newSearch= event.target.value
       // if(newSearch.startsWith(' ')) return   //Evita que el usuario escriba espacios vacios en el input
        updateSearch(newSearch)
        debounceGetMovies(newSearch)            //busca las peliculas mientras el usuario escribe, con un delay de 300 milisegundos
     }


    const handleSort = () =>{
      setSort(!sort)
    }

    //test ejecucion de getMovies
    //useEffect(()=> console.log('movies'), [getMovies])


    
  return (

    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSumit}> 
            <input 
                  style={{
                            border: '1px solid transparent',
                            borderColor: error ? 'red' : 'transparent'
                        }} 
                onChange={handleChange} value={search} name='query' placeholder='Avenger, Star Wars, The Matrix'
            />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando .... </p> : <Movies movies={movies}/>
        }
      </main>
    </div>
    )
}

export default App
