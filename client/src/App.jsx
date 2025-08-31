import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import SignUp from "./pages/signup.jsx"
import Login from "./pages/login.jsx"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ChatDashboard from './pages/chat.jsx'
import Landing from './pages/landing.jsx'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/chat" element={<ChatDashboard/>}/>
      
      </Routes>
      </BrowserRouter>
  )
}

export default App
