import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home.jsx';
import Signin from './Pages/Signin.jsx'
import Signup from './Pages/Signup.jsx'
import Playerbase from './Pages/Playerbase.jsx'

function App() {

  return (
    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Playerbase />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/playerbase" element={<Playerbase />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
