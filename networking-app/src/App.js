import React from 'react'
import './App.css'
import Login from './components/Login/Login'
import AboutUs from './components/AboutUs/AboutUs'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <h1>
        <Header />
        <AboutUs />
        {/* <Login /> */}
      </h1>
    </div>
  )
}

export default App