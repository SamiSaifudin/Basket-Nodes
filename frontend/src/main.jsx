import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GamesContextProvider } from '../src/context/GameContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider> 
      <GamesContextProvider> 
        <App />
      </GamesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
