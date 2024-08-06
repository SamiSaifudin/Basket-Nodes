import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import Playerbase from './Pages/Playerbase.jsx'
import { useAuthContext } from './hooks/UseAuthContext.jsx'

function App() {
  
  const { player } = useAuthContext()

  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={!player ? <Home/> : <Navigate to="/playerbase"/>} />
          <Route path="/signin" element={!player ? <Signin /> : <Navigate to="/playerbase"/>} />
          <Route path="/signup" element={!player ? <Signup /> : <Navigate to="/playerbase"/>}/>
          <Route path="/playerbase" element={player ? <Playerbase/>: <Navigate to="/"/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
