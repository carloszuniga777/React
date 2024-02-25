
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

/**Nota: Nunca pasar los setStates como parametro */
export const getRandomFact = () =>{
   return fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(resp=> {
                if(!resp.ok) throw new Error('Error fetching fact')
                return resp.json()
            })                   //Hace la peticion a la API y convierte en Json
            .then(data => {
                const { fact } = data   
                return fact                          //Obtiene el Json y configura el useState
            })
            .catch((err)=>{
                console.log(err)
            })               
}