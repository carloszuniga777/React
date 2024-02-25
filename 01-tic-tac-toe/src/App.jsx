import './App.css'
import {useState} from 'react'
import confetti from 'canvas-confetti'
import { Square } from './Components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './Components/WinnerModal.jsx'
import {saveGameToStorage, resetGameStorage} from './logic/storage/index.js'

function App() {

  //configuracion del estado del board
  const [board, setBoard] = useState(()=>{
      const boardFromStorage = window.localStorage.getItem('board')
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null) 
  }) 


  //Configuracion del estado de los turnos
  const [turn, setTurn]   = useState(()=>{
     const turnFromStorage = window.localStorage.getItem('turn')
     return turnFromStorage ?? TURNS.x                              //Si tengo algo desde el storage utilizo el storage, si null o undefined utilizo el TURNS
  })

 //Configuracion del estado del ganador
  const [winner, setWinner] = useState(null)     //null es que no hay ganador, false es que hay empate




  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    resetGameStorage()

  }



  const updateBoard = (index)=>{

    if(board[index] || winner) return     //Si ya tiene algo, no actualizamos

    //Actualizamos el tablero
    const newBoard = [...board]  //crea una copia del array Board
    newBoard[index] = turn
    setBoard(newBoard)          //Se pasa un nuevo array del Board al useState

    //Cambiar de turno  
    const newTurn = turn == TURNS.x ? TURNS.O : TURNS.x
    setTurn(newTurn)

     //guardar lapartida
     saveGameToStorage({
      board: JSON.stringify(newBoard),
      turn: newTurn
    })
   
    //Revisar si hay ganador 
    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }



 return (
      <main className='board'>
        <button onClick={resetGame}>Reset del juego</button>
          <h1>Tic Tac Toe</h1>
          <section className='game'>
            {
              board.map((square,index)=>{
                  return (
                      <Square 
                          key={index}
                          index={index}
                          updateBoard={updateBoard}
                      >
                        {square}
                      </Square>
                  )
              })
            }
          </section>

          <section className='turn'>
              <Square isSelected={turn  == TURNS.x}>
                  {TURNS.x}
              </Square>
              <Square isSelected={turn == TURNS.O}>
                  {TURNS.O}
              </Square>
          </section>

          <WinnerModal resetGame={resetGame} winner={winner}/>

      </main>
  )
}

export default App
