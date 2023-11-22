import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//se non do nessun valore alla prop, il risultato sarà "Welcome, undefined", in questo caso dato che ho messo Guest come valore predefinito, sarà "Welcome, Guest"