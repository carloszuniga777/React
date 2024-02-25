import { WINNER_COMBOS } from "../constants"


export const checkWinnerFrom = (boardToCheck)=>{

    //Revisamos todas las combinaciones ganadoras, para ver si X o 0 gano
     for(const combo of WINNER_COMBOS){
         const[a, b, c] = combo           //se recupera las posiciones 0, 1 y 2

         if(
            boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]
         ){
          return boardToCheck[a]
         }
         
     }

     return null
  }



 export const checkEndGame = (newBoard) =>{
    /**Revisamos si hay un empate, si no hay mas espacios vacion en el tablero */

    return newBoard.every((square) => square != null) //Si todas las posiciones del nuevo tablero son diferentes a null, significa que ya termino el juego
  }