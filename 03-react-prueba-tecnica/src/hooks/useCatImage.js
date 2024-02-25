import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'


//Custom Hook
/**Los Custom Hook deben iniciar con el nombre use(nombrefuncion) 
 * -Los Hook no pueden estar dentro de un if, while
 * -No pueden cambiar su posicion, siempre deben ser llamados dentro del cuerpo del componente
 * -La diferencia entre Custom Hook y una funcion, es que dentro del Custom Hook podemos llamar Hooks, 
 *  mientras que en una funcion normal no se puede
*/
export function useCatImage({ fact }){
    const [imageUrl, setImageUrl ] = useState()

    //UseEffect para recuperar la imagen cada vez tenemos una cita nueva
    useEffect(()=>{
        if(!fact)   return                  //Si no tenemos un fact hacer return

        //const firstWord = fact.split(' ').slice(0, 3).join(' ')
        const threefirstWord = fact.split(' ', 3).join(' ')
        //console.log(threefirstWord)

        
        fetch(`https://cataas.com/cat/says/${threefirstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const imageId = response._id
            setImageUrl(imageId)

        })
    },[fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}