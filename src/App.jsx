import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './css/App.css'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <>
      <Router basename='/hcdemo/'>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
