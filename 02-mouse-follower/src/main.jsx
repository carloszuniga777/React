import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  {/**El StricMode ayuda a asegurarte que los efectos se estan ejecutando correctamente, el StrictMode en produccion NO FUNCIONA es decir, que lo ignora  */}
    <App />
  </React.StrictMode>,
)
