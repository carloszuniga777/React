import { useEffect, useState } from 'react'
import { getRandomFact } from '../Service/facts.js'


//Custom Hook
/***Evitar devolver la actualizacion del estado (setFact => UseState) en el custom hook 
    Tratar de hacer la actualizacion internamente y devolver una funcion (refreshFact)
*/
export function useCatFact(){
    const [fact, setFact] = useState()


    const refreshFact = ()=>{
        //getRandomFact().then(setFact) 
        getRandomFact().then(newFact => setFact(newFact))
    }


    /* UseEffect para recuperar la cita al carga la pagina
    
        *Este useEffect solo se ejecuta la primera vez que se renderiza el componente ==> []
        *UseEffect: Cada que renderize mi componente ejecuta algo
    */

    useEffect(refreshFact,[])
    
    return {fact, refreshFact}
}