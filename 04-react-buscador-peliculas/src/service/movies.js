const API_KEY = '4287ad07'

export const searchMovies = async({search})=>{
    if(search === '') return null

    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search           //Obtenemos el json de datos de las peliculas

        /* 
           Hacemos un mapeo de parametros con la finalidad de si se cambia la app
           solo modifiquemos los valores de los parametros de este objeto, 
           y no hacer el cambio en toda la aplicacion
        */
        return movies?.map(movie => ({
                    id: movie.imdbID,
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster
                }))
    } catch(e){
        throw new Error('Error searching movies')
    }
}