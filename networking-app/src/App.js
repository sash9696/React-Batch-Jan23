import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import AboutUs from './components/AboutUs/AboutUs'
import Header from './components/Header/Header'
import Home from './components/Home/Home'


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className='app_body'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/profile' element={<h1>Profile Page</h1>} />
          </Routes>
        </div>
        {/* 
      
        <div className='app_body'>
          <AboutUs />
        </div>

        <Login /> */}

      </div>
    </BrowserRouter>
  )
}

export default App