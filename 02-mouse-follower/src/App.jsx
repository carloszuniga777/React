import { useEffect, useState } from "react"

const FollowMouse = ()=>{
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x:0, y:0})
   
  useEffect(()=>{
    console.log('efecto', {enabled})

    
    const handleMove =(event)=>{
        const {clientX, clientY} = event
        console.log('handleMove', {clientX, clientY})
        setPosition({x: clientX, y: clientY})
    }

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    
    
    //Comando para ver los eventos activosgetEventListeners(window)

    //Limpiar eventos handleMove
    //Clenaup: Se ejecuta cuando el componente se desmonta y cuando cambian las dependencias antes de ejecutar el efecto de nuevo
    //Sirve para que limpiar los eventos, es decir, que no se sigan ejecutando despues de una accion
    return ()=>{
      console.log('clenaup')
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])


  useEffect(()=>{
     document.body.classList.toggle('no-cursor', enabled)

     return ()=>{
        document.body.classList.remove('no-cursor')
     }
  }, [enabled])


  /**Tipos de ejecucion del useEffect
   * [] -> solo se ejecuta una vez cuando se monta el componente
   * [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
   * [undefined] -> se ejecuta cada vez que se renderiza el componente
   */


  return (
          <>
              <div style={{
                  position: 'absolute',
                  background: 'black',
                  border: '1px solid #fff',
                  borderRadius: '50%',
                  opacity: 0.8,
                  pointerEvents: 'none',
                  left:-20,
                  top: -20,
                  width: 40,
                  height: 40,
                  transform: `translate(${position.x}px, ${position.y}px)` 
              }}/>
              <button onClick={()=>setEnabled(!enabled)}>
                  {enabled ? 'Desactivar' : 'Activar'} seguir puntero
              </button>
          </>
  )
}


function App() {

  return (
      <main>
        <FollowMouse/>
      </main>
  )
}

export default App
